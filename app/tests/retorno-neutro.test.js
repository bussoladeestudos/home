const test=require('node:test'),assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs'),path=require('node:path');
const engine=fs.readFileSync(path.join(__dirname,'../js/engine.js'),'utf8'),ui=fs.readFileSync(path.join(__dirname,'../js/ui.js'),'utf8');
function setup(){
 class Hoje extends Date{constructor(...a){super(...(a.length?a:['2026-09-09T12:00:00']));}}
 const c=vm.createContext({Date:Hoje,STATE:{inicio:'2026-09-07',prova:'2026-09-30',dias:{'2026-09-07':{percepcao:'alta'},'2026-09-08':{percepcao:'alta'}}},getCicloPos:k=>k==='2026-09-09'?5:0,isSimuladoDay:()=>false,isRevisaoGeralDay:()=>false,isProvaDay:()=>false,_diaFeito:()=>false,isDiaEstudo:()=>true,parseDate:k=>new Hoje(k+'T00:00:00'),fmt:d=>[d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-'),getTopicosFracos:()=>[{key:'2026-09-08'}]});
 vm.runInContext(engine.match(/function retornoTecnicoSemPendencia\([^]*?^}/m)[0],c);
 for(const fn of ['calcProgresso','calcProgressoDetalhado'])vm.runInContext(ui.match(new RegExp('function '+fn+'\\([^]*?^}', 'm'))[0],c);
 return {c,run:s=>vm.runInContext(s,c)};
}
test('retorno vazio é neutro na aderência e não cria registro',()=>{const h=setup();assert.equal(h.run('calcProgresso()'),100);assert.equal(h.run('calcProgressoDetalhado().total'),2);assert.equal(h.c.STATE.dias['2026-09-09'],undefined);});
test('confiança média ou recuperação mantém dia esperado',()=>{for(const caso of ['media','recuperacao']){const h=setup();if(caso==='media')h.c.STATE.dias['2026-09-08'].percepcao='media';else{h.c.STATE.recuperacaoData='2026-09-09';h.c.STATE.recuperacao=['pendente'];}assert.equal(h.run('calcProgressoDetalhado().total'),3);assert.equal(h.run('calcProgresso()'),67);}});
test('avaliação por tópico pendente e simulado não são dispensados',()=>{const h=setup();h.c.getTopicosFracos=()=>[{key:'2026-09-08',topIdx:1}];h.c.STATE.dias['2026-09-08'].percepcoes={0:'alta',1:'baixa'};assert.equal(h.run('retornoTecnicoSemPendencia("2026-09-09")'),false);h.c.getTopicosFracos=()=>[];h.c.isSimuladoDay=()=>true;assert.equal(h.run('retornoTecnicoSemPendencia("2026-09-09")'),false);});
