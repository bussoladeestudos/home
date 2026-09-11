const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const source=fs.readFileSync(path.join(__dirname,'../js/state.js'),'utf8');
const aState={schemaVersion:7,_syncUid:'A',inicio:'2026-09-01',dias:{a:{}},questoes:{qA:{n:8,ok:6,ultima:'2026-09-09'}},exDias:{'2026-09-09':{n:8,ok:6}}};
function harness(remote={},entries={}){
 const storage=new Map(Object.entries(entries).map(([k,v])=>[k,JSON.stringify(v)]));
 const writes=[],timers=[];
 const c=vm.createContext({window:{},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},setTimeout:fn=>{timers.push(fn);return timers.length},clearTimeout:()=>{},DB:{collection:()=>({doc:uid=>({get:async()=>{const val=typeof remote[uid]==='function'?await remote[uid]():remote[uid];return {exists:!!val,data:()=>val}},set:async data=>writes.push({uid,data})})})}});
 vm.runInContext(source,c);
 return {c,storage,writes,timers,run:s=>vm.runInContext(s,c),state:()=>JSON.parse(vm.runInContext('JSON.stringify(STATE)',c)),login:uid=>vm.runInContext(`cloudOnLogin({uid:${JSON.stringify(uid)}})`,c)};
}
test('troca de conta não herda campos ausentes e não envia exercícios alheios',async()=>{
 const h=harness({A:aState,B:{schemaVersion:7,inicio:'2026-09-02',dias:{b:{}}}});
 await h.login('A');h.run('cloudOnLogout()');await h.login('B');await h.run('_cloudPush()');
 assert.deepEqual(h.state().questoes,{});assert.deepEqual(h.state().exDias,{});assert.deepEqual(h.state().dias,{b:{}});assert.equal(h.writes.at(-1).uid,'B');assert.deepEqual(JSON.parse(JSON.stringify(h.writes.at(-1).data.questoes)),{});
});
test('conta sem documento começa vazia e retorno à A recupera seu cache',async()=>{
 const h=harness({A:aState});await h.login('A');h.run('cloudOnLogout()');await h.login('B');assert.deepEqual(h.state().dias,{});assert.deepEqual(h.state().questoes,{});await h.login('A');assert.equal(h.state().questoes.qA.n,8);assert.ok(h.storage.has('cronos_v4:A'));assert.ok(h.storage.has('cronos_v4:B'));
});
test('cache legado só é migrado para seu proprietário e permanece arquivado',async()=>{
 const h=harness({}, {cronos_v4:aState});await h.login('B');assert.deepEqual(h.state().questoes,{});await h.login('A');assert.equal(h.state().questoes.qA.n,8);assert.ok(h.storage.has('cronos_v4'));
});
test('legado sem proprietário não é atribuído automaticamente',async()=>{
 const legacy={...aState};delete legacy._syncUid;const h=harness({}, {cronos_v4:legacy});await h.login('B');assert.deepEqual(h.state().questoes,{});assert.ok(h.storage.has('cronos_v4'));
});
test('logout limpa memória e invalida timer mesmo que callback já esteja na fila',async()=>{
 const h=harness({A:aState});await h.login('A');const timer=h.timers.at(-1);h.run('cloudOnLogout()');timer();await Promise.resolve();assert.deepEqual(h.state().questoes,{});assert.equal(h.writes.length,0);
});
test('timer da conta A não envia enquanto B está carregando',async()=>{
 let release;const h=harness({A:aState,B:()=>new Promise(r=>release=r)});await h.login('A');const timer=h.timers.at(-1);const login=h.login('B');timer();await Promise.resolve();assert.equal(h.writes.length,0);release(null);await login;
});
test('resposta atrasada de login A não substitui B',async()=>{
 let release;const h=harness({A:()=>new Promise(r=>release=r),B:{schemaVersion:7,nome:'B',dias:{}}});const pending=h.login('A');await h.login('B');release(aState);assert.equal(await pending,false);assert.equal(h.state()._syncUid,'B');assert.deepEqual(h.state().questoes,{});
});
test('falha de leitura usa somente cache próprio e impede push',async()=>{
 const h=harness({B:()=>Promise.reject(new Error('offline'))},{'cronos_v4:A':aState,'cronos_v4:B':{schemaVersion:7,_syncUid:'B',nome:'B',dias:{}}});await h.login('B');await h.run('_cloudPush()');assert.equal(h.state().nome,'B');assert.deepEqual(h.state().questoes,{});assert.equal(h.writes.length,0);
});
test('migração de exDias acontece antes de aplicar valores padrão',async()=>{
 const old={...aState,schemaVersion:6};delete old.exDias;const h=harness({A:old});await h.login('A');assert.equal(h.state().exDias['2026-09-09'].n,8);
});
test('load nunca mistura memória anterior com cache incompleto',async()=>{
 const h=harness({A:aState});await h.login('A');h.storage.set('cronos_v4:A',JSON.stringify({_syncUid:'A',schemaVersion:7,dias:{}}));h.run('load()');assert.deepEqual(h.state().questoes,{});
});


test('legado offline sem UID continua disponível apenas no modo visitante',async()=>{
 const legacy={...aState};delete legacy._syncUid;const h=harness({}, {cronos_v4:legacy});h.run('load()');assert.equal(h.state().questoes.qA.n,8);await h.login('B');assert.deepEqual(h.state().questoes,{});
});

test('Firestore indisponível permite cache próprio sem enviar dados',async()=>{
 const h=harness({}, {'cronos_v4:A':aState});h.c.DB=null;assert.equal(await h.login('A'),true);assert.equal(h.state().questoes.qA.n,8);assert.equal(h.writes.length,0);
});
