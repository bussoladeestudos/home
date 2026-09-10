const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const root=path.join(__dirname,'../..');
function catalog(){
  const ctx=vm.createContext({window:{}});
  for(const file of ['app/editais.js','dados-site.js']) vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),ctx);
  return JSON.parse(JSON.stringify(ctx.window));
}
test('C-Pro R mantém o mapa editorial completo e igual entre app e home',()=>{
  const c=catalog(),app=c.EDITAIS_DATA.cproRAnbima;
  const home=c.CERTIFICACOES_DATA.find(x=>x.id==='cpror');
  const plan=JSON.parse(fs.readFileSync(path.join(root,'_docs/CPRO-R/topicos.json'),'utf8'));
  assert.equal(app.grupo,'Certificações');
  assert.deepEqual(app.materias.map(m=>m.peso),[20,20,40,20]);
  assert.equal(Object.values(app.topicos).flat().length,125);
  for(const m of plan.modulos){
    const topics=m.topicos.map(t=>t.titulo);
    assert.deepEqual(app.topicos[m.nome],topics);
    assert.deepEqual(home.modulos.find(h=>h.nome===m.nome).topicos,topics);
  }
  assert.deepEqual([app.prova.questoes,app.prova.minimoAcertos,app.prova.duracaoMinutos],[45,32,150]);
  assert.match(home.descricao,/Aulas em produção/);
});
test('cronograma C-Pro R agenda os 125 pares e mantém leitura ausente sem aula',()=>{
  global.EDITAIS=catalog().EDITAIS_DATA;
  global.STATE={prefeitura:'cproRAnbima',inicio:'2026-09-09',prova:'2027-03-09',horasDia:3,diasLivres:[0],dias:{},extrasPorDia:{}};
  global.window={CONTEUDO_DATA:{}};
  const enginePath=path.join(root,'app/js/engine.js');
  delete require.cache[require.resolve(enginePath)];
  const e=require(enginePath),seen=new Set();
  for(let dt=e.parseDate(STATE.inicio);e.fmt(dt)<STATE.prova;dt.setDate(dt.getDate()+1)){
    for(const t of e.getTopicosDiaBase(e.fmt(dt))) seen.add(t.mat+'|'+t.top);
  }
  const expected=Object.entries(EDITAIS.cproRAnbima.topicos).flatMap(([m,ts])=>ts.map(t=>m+'|'+t));
  assert.equal(seen.size,125);
  for(const pair of expected) assert.ok(seen.has(pair),pair);
  const mat=EDITAIS.cproRAnbima.materias[0].nome;
  assert.equal(e.temConteudo('cproRAnbima',mat,EDITAIS.cproRAnbima.topicos[mat][0]),false);
});
test('Matérias usa 45 questões e informa que a divisão é estimada',()=>{
  const editais=catalog().EDITAIS_DATA,grid={innerHTML:''};
  const ctx=vm.createContext({EDITAIS:editais,STATE:{prefeitura:'cproRAnbima',dias:{}},document:{getElementById:()=>grid},
    calcMateriasStats:()=>editais.cproRAnbima.materias.map(m=>({...m,conf:0})),getTopicos:()=>editais.cproRAnbima.topicos,
    temConteudo:()=>false,_normTexto:s=>s,esc:s=>String(s),_buscaConteudo:'',aplicarBuscaConteudo:()=>{}});
  const ui=fs.readFileSync(path.join(root,'app/js/ui.js'),'utf8');
  vm.runInContext(ui.slice(ui.indexOf('function usaPrioridadeEditorial()'),ui.indexOf('/* ── BUSCA DO CONTEÚDO PROGRAMÁTICO')),ctx);
  vm.runInContext('renderMaterias()',ctx);
  assert.equal((grid.innerHTML.match(/Questões estimadas/g)||[]).length,4);
  assert.equal((grid.innerHTML.match(/mat-stat-val">9</g)||[]).length,3);
  assert.equal((grid.innerHTML.match(/mat-stat-val">18</g)||[]).length,1);
  assert.match(grid.innerHTML,/0 de 125 tópicos/);
  assert.doesNotMatch(grid.innerHTML,/data-action="abrirConteudo"/);
});
test('bundle C-Pro R entrega exatamente os tópicos publicados no mapa editorial',()=>{
  const ctx=vm.createContext({window:{}});
  for(const file of ['app/editais.js','app/conteudo/conteudo-cpror.js'])
    vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),ctx);
  const ed=ctx.window.EDITAIS_DATA.cproRAnbima;
  const conteudo=ctx.window.CONTEUDO_DATA.cproRAnbima;
  const plano=JSON.parse(fs.readFileSync(path.join(root,'_docs/CPRO-R/topicos.json'),'utf8'));
  let total=0,publicados=0;
  for(const modulo of plano.modulos){
    const esperados=modulo.topicos.filter(t=>t.status==='publicado localmente').map(t=>t.titulo);
    publicados+=esperados.length;
    const atuais=Object.keys(conteudo[modulo.nome]||{});
    assert.deepEqual(atuais,esperados);
    total+=atuais.length;
    for(const aula of Object.values(conteudo[modulo.nome]||{})){
      assert.match(aula.frase,/\S/);
      for(const secao of ['prova','corpo','pegadinhas','cartao']) assert.match(aula[secao],/<[a-z]+>/);
    }
  }
  assert.equal(total,publicados);
  assert.ok(total>0);
});
