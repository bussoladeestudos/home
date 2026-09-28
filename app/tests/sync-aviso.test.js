/* Aviso visível de falha na nuvem (21/09/2026) — node --test tests/sync-aviso.test.js
   Antes, uma gravação recusada só mudava a cor do pontinho da barra. Estes
   testes cobrem a parte que decide, sem DOM: classificar o motivo, acender o
   aviso na falha, apagar no sucesso e tentar de novo sem destruir a sessão. */
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const source=fs.readFileSync(path.join(__dirname,'../js/state.js'),'utf8');
const {_motivoDaFalha}=require('../js/state.js');

const erro=(code,message)=>Object.assign(new Error(message||code),{code});
const CONF={schemaVersion:7,inicio:'2026-09-01',dias:{a:{}}};

function harness({remote={},falhaGet=null,falhaSet=null}={}){
 const storage=new Map(), writes=[], timers=[];
 const ctl={falhaGet,falhaSet,remote,resets:0};
 const c=vm.createContext({window:{},
   localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},
   setTimeout:fn=>{timers.push(fn);return timers.length},clearTimeout:()=>{},
   resetAccountUI:()=>{ctl.resets++;},
   DB:{collection:()=>({doc:uid=>({
     get:async()=>{ if(ctl.falhaGet) throw ctl.falhaGet; const v=ctl.remote[uid]; return {exists:!!v,data:()=>v}; },
     set:async data=>{ if(ctl.falhaSet) throw ctl.falhaSet; writes.push({uid,data}); ctl.remote[uid]=JSON.parse(JSON.stringify(data)); }
   })})}});
 vm.runInContext(source,c);
 const run=s=>vm.runInContext(s,c);
 return {c,ctl,writes,timers,run,
   falha:()=>JSON.parse(run('JSON.stringify(_syncFalha)')),
   pronto:()=>run('_cloudReady'),
   state:()=>JSON.parse(run('JSON.stringify(STATE)')),
   login:uid=>run(`cloudOnLogin({uid:${JSON.stringify(uid)}})`)};
}

test('classifica o motivo da falha pelo código do Firestore',()=>{
 assert.equal(_motivoDaFalha(erro('invalid-argument',"Document 'x' cannot be written because its size (1,234,567 bytes) exceeds the maximum allowed size of 1,048,576 bytes."),'gravacao'),'grande');
 assert.equal(_motivoDaFalha(erro('resource-exhausted','Quota exceeded.'),'gravacao'),'cota');
 assert.equal(_motivoDaFalha(erro('permission-denied'),'gravacao'),'sessao');
 assert.equal(_motivoDaFalha(erro('unauthenticated'),'gravacao'),'sessao');
 assert.equal(_motivoDaFalha(erro('unavailable'),'gravacao'),'rede');
 assert.equal(_motivoDaFalha(new Error('Failed to get document because the client is offline.'),'leitura'),'rede');
 assert.equal(_motivoDaFalha(erro('internal'),'gravacao'),'outro');
 assert.equal(_motivoDaFalha(erro('internal'),'leitura'),'leitura');
 assert.equal(_motivoDaFalha(erro('firestore/resource-exhausted'),'gravacao'),'cota');
});

test('gravação recusada acende o aviso; a próxima aceita apaga',async()=>{
 const h=harness({remote:{A:CONF}});
 await h.login('A');
 h.ctl.falhaSet=erro('resource-exhausted','Quota exceeded.');
 await h.run('_cloudPush()');
 assert.equal(h.falha().motivo,'cota');
 assert.equal(h.falha().fase,'gravacao');
 h.ctl.falhaSet=null;
 await h.run('_cloudPush()');
 assert.equal(h.falha(),null);
 assert.ok(h.writes.length>=1);
});

test('documento grande demais vira motivo próprio, com caminho para o suporte',async()=>{
 const h=harness({remote:{A:CONF}});
 await h.login('A');
 h.ctl.falhaSet=erro('invalid-argument','Document cannot be written because its size (1,100,000 bytes) exceeds the maximum allowed size of 1,048,576 bytes.');
 await h.run('_cloudPush()');
 assert.equal(h.falha().motivo,'grande');
 assert.match(h.run('_SYNC_MOTIVOS.grande'),/Fale Conosco/);
});

test('falha de leitura no login acende o aviso e mantém o envio bloqueado',async()=>{
 const h=harness({remote:{A:CONF},falhaGet:erro('unavailable')});
 await h.login('A');
 assert.equal(h.falha().motivo,'rede');
 assert.equal(h.falha().fase,'leitura');
 assert.equal(h.pronto(),false);
 await h.run('_cloudPush()');
 assert.equal(h.writes.length,0);      // sem saber o que há na nuvem, nada sobe
});

test('tentar de novo depois de falha de leitura refaz a decisão e libera o envio',async()=>{
 const h=harness({remote:{A:{...CONF,updatedAt:100}},falhaGet:erro('unavailable')});
 await h.login('A');
 h.run('STATE.inicio="2026-09-01";STATE.updatedAt=999;STATE.nome="local mais novo"');
 h.ctl.falhaGet=null;
 const resetsAntes=h.ctl.resets;                   // o login inicial zera a sessão, e deve
 assert.equal(await h.run('syncTentarDeNovo()'),true);
 assert.equal(h.pronto(),true);
 assert.equal(h.falha(),null);
 assert.equal(h.state().nome,'local mais novo');   // o local era o mais recente e venceu
 assert.equal(h.ctl.resets,resetsAntes);           // o tentar de novo NÃO zera a sessão em andamento
});

test('tentar de novo respeita a nuvem quando ela é a mais recente',async()=>{
 const h=harness({remote:{A:{...CONF,updatedAt:5000,nome:'nuvem'}},falhaGet:erro('unavailable')});
 await h.login('A');
 h.run('STATE.inicio="2026-09-01";STATE.updatedAt=10;STATE.nome="local velho"');
 h.ctl.falhaGet=null;
 await h.run('syncTentarDeNovo()');
 assert.equal(h.state().nome,'nuvem');
});

test('tentar de novo com envio liberado só reenvia',async()=>{
 const h=harness({remote:{A:CONF}});
 await h.login('A');
 h.ctl.falhaSet=erro('unavailable');
 await h.run('_cloudPush()');
 assert.equal(h.falha().motivo,'rede');
 h.ctl.falhaSet=null;
 const antes=h.writes.length;
 assert.equal(await h.run('syncTentarDeNovo()'),true);
 assert.equal(h.writes.length,antes+1);
 assert.equal(h.falha(),null);
});

test('sair da conta apaga o aviso, para ele não aparecer na próxima',async()=>{
 const h=harness({remote:{A:CONF}});
 await h.login('A');
 h.ctl.falhaSet=erro('permission-denied');
 await h.run('_cloudPush()');
 assert.equal(h.falha().motivo,'sessao');
 h.run('cloudOnLogout()');
 assert.equal(h.falha(),null);
});
