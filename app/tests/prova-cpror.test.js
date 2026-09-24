const test=require('node:test'),assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs'),path=require('node:path');
const base=path.join(__dirname,'..'),ui=fs.readFileSync(path.join(base,'js/ui.js'),'utf8');
const code=ui.slice(ui.indexOf('/* Prova completa C-Pro R:'),ui.indexOf('function renderTopicosHoje'));
function setup(){
  let agora=Date.parse('2026-09-23T10:00:00Z');
  class Clock extends Date{constructor(...a){super(...(a.length?a:[agora]));}static now(){return agora;}}
  const el={innerHTML:'',textContent:''};
  const c=vm.createContext({Date:Clock,setInterval:()=>0,window:{scrollTo(){},addEventListener(){}},STATE:{prefeitura:'cproRAnbima',dias:{},pagina:'simulado'},
    document:{addEventListener(){},getElementById:()=>el,createElement:()=>({set innerHTML(x){this.value=x;},value:''})},
    confirm:()=>true,showToast:()=>{},save:()=>{},navTo:()=>{},renderSimuladoPage:()=>{},
    esc:s=>String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'),
    _exNivelLabel:n=>n===2?'Médio':'Difícil',revResultadoHtml:()=>'',
    buildStatusCard:o=>`<section data-collapsible="${o.collapsible}" data-open="${o.startOpen}">${o.titulo}${o.bodyHtml}<button>${o.btnLabel}</button></section>`,
    _embaralhar:a=>a.map(x=>({x,r:Math.random()})).sort((a,b)=>a.r-b.r).map(x=>x.x)});
  for(const file of ['editais.js','conteudo/questoes-cpror.js']) vm.runInContext(fs.readFileSync(path.join(base,file),'utf8'),c);
  vm.runInContext('const EDITAIS=window.EDITAIS_DATA;const QUESTOES=window.QUESTOES_DATA;',c);
  vm.runInContext(fs.readFileSync(path.join(base,'js/engine.js'),'utf8'),c);
  vm.runInContext(code,c);
  vm.runInContext(fs.readFileSync(path.join(base,"conteudo/atendimentos-cpror.js"),"utf8"),c);
  vm.runInContext(fs.readFileSync(path.join(base,"js/simulados-cpror.js"),"utf8"),c);
  return {c,el,run:s=>vm.runInContext(s,c),advance:ms=>{agora+=ms;}};
}
test('banco real gera 45 únicas, 9/9/18/9, somente níveis 2 e 3, sem cronograma',()=>{
  const h=setup();h.run('provaIniciar()');
  assert.equal(h.c.STATE.provaCpror.ids.length,45);
  assert.equal(new Set(h.c.STATE.provaCpror.ids).size,45);
  assert.equal(h.run('provaItens(STATE.provaCpror).every(it=>[2,3].includes(it.q.nivel)&&it.q.usar_em.includes("simulado"))'),true);
  assert.equal(h.run('PROVA_CPROR_MATERIAS.every(m=>provaItens(STATE.provaCpror).filter(it=>it.mat===m.mat).length===m.qtd)'),true);
  assert.equal(h.run('provaTempo(STATE.provaCpror)'),'02:30:00');
});
test('novo sorteio prioriza questões ainda não expostas e banco insuficiente não gera prova parcial',()=>{
  const h=setup();h.run('provaIniciar()');const ids=new Set(h.c.STATE.provaCpror.ids);
  h.run('provaFinalizar(false);provaIniciar()');
  assert.equal(h.c.STATE.provaCpror.ids.filter(id=>ids.has(id)).length,0);
  h.c.STATE.provaCpror=null;h.c.listarQuestoes=()=>[];h.run('provaIniciar()');assert.equal(h.c.STATE.provaCpror,null);
});
test('permite alterar resposta antes de entregar e corrige uma única vez',()=>{
  const h=setup();h.run('provaIniciar();var q=provaItens(STATE.provaCpror)[0].q;provaResponder(q.id,Object.keys(q.alternativas).find(x=>x!==q.gabarito));provaResponder(q.id,q.gabarito)');
  assert.equal(Object.keys(h.c.STATE.questoes||{}).length,0);
  h.run('provaFinalizar(false);provaFinalizar(false)');
  assert.equal(h.c.STATE.provaCpror.resultado.acertos,1);assert.equal(h.c.STATE.provaCpror.resultado.brancas,44);
  assert.equal(Object.values(h.c.STATE.questoes).reduce((n,r)=>n+r.n,0),45);
  assert.deepEqual(Object.keys(h.c.STATE.dias),[]);
});
test('prazo absoluto persiste ao recarregar, vence em 2h30 e rejeita resposta atrasada',()=>{
  const h=setup();h.run('provaIniciar()');h.advance(149*60000);
  h.c.STATE=JSON.parse(JSON.stringify(h.c.STATE));assert.equal(h.run('provaTempo(STATE.provaCpror)'),'00:01:00');
  h.advance(60000);h.run('var q=provaItens(STATE.provaCpror)[0].q;provaResponder(q.id,q.gabarito)');
  assert.equal(h.c.STATE.provaCpror.resultado.prazo,true);assert.equal(h.c.STATE.provaCpror.resultado.acertos,0);
  assert.equal(h.c.STATE.provaCpror.resultado.brancas,45);
  h.run('provaTick()');assert.equal(Object.values(h.c.STATE.questoes).reduce((n,r)=>n+r.n,0),45);
});
test('troca de conta não herda sessão ou resultados, e relógio não corrige a conta anterior',()=>{
  const h=setup();h.run('provaIniciar()');const a=h.c.STATE;
  h.c.STATE={prefeitura:'cproRAnbima',dias:{}};h.advance(151*60000);h.run('provaTick()');
  assert.equal(h.c.STATE.provaCpror,undefined);assert.equal(h.c.STATE.questoes,undefined);
  h.c.STATE=a;h.run('provaTick()');assert.equal(a.provaCpror.resultado.prazo,true);
});
test('correção fica oculta até entrega e texto do banco passa por escape',()=>{
  const h=setup();h.run('provaIniciar();renderProvaCpror()');
  assert.ok(!h.el.innerHTML.includes('Gabarito:'));assert.ok(h.el.innerHTML.includes('provaRelogio'));
  assert.equal(h.run('provaTexto("<p>Valor &lt;script&gt;</p>").includes("<script>")'),false);
  h.run('provaFinalizar(false);renderProvaCpror()');assert.ok(h.el.innerHTML.includes('Gabarito:'));
});
test('excluir histórico também remove a nota da prova concluída',()=>{
  const h=setup();h.run('provaIniciar();provaFinalizar(false);apagarHistoricoExercicios("sempre")');
  assert.equal(h.c.STATE.provaCpror,undefined);assert.equal(h.c.STATE.provaCprorUso,undefined);
});
test('reabertura no dia seguinte registra o resultado na data do prazo',()=>{
  const h=setup();h.run('provaIniciar()');h.advance(2*24*3600000);h.run('provaVerificarPrazo()');
  assert.equal(h.c.STATE.provaCpror.resultado.dia,'2026-09-23');
  assert.deepEqual(Object.keys(h.c.STATE.exDias),['2026-09-23']);
});
test('menu libera Revisão Geral sem cronograma e também em cronograma sem minis',()=>{
  const h=setup();
  vm.runInContext(ui.slice(ui.indexOf('function renderSimuladoPage(){'),ui.indexOf('function renderRevisoesPage(){')),h.c);
  h.run('renderSimuladoPage()');assert.ok(h.el.innerHTML.includes('Iniciar simulado'));
  h.c.STATE.inicio='2026-09-23';h.c.STATE.prova='2026-09-24';h.c.isSimuladoDay=()=>false;
  h.run('renderSimuladoPage()');assert.ok(h.el.innerHTML.includes('Iniciar simulado'));
  assert.ok(!h.el.innerHTML.includes('Revisão Geral sorteia até'));
});
