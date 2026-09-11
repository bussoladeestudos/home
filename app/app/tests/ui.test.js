/* Testes de consistência da camada de UI (event delegation).
   Garante que todo data-action usado no HTML/templates tem handler
   registrado em ACTIONS, e que cada handler chama função existente.
   Rodar: node --test tests/ui.test.js */
const test=require("node:test");
const assert=require("node:assert");
const fs=require("fs"), path=require("path");
const read=f=>fs.readFileSync(path.join(__dirname,"..",f),"utf8");

const html=read("index.html"), ui=read("js/ui.js"), pomo=read("js/pomodoro.js"),
      state=read("js/state.js"), engine=read("js/engine.js");

function acoesUsadas(){
  const re=/data-action="(\w+)"/g, set=new Set();
  for(const src of [html,ui,pomo]) for(const m of src.matchAll(re)) set.add(m[1]);
  for(const m of ui.matchAll(/btnAction:"(\w+)"/g)) set.add(m[1]); // dinâmicas
  return set;
}
function acoesRegistradas(){
  let bloco=ui.match(/const ACTIONS=\{([\s\S]*?)\n\};/)[1];
  const extra=pomo.match(/Object\.assign\(ACTIONS,\{([\s\S]*?)\}\);/);
  if(extra) bloco+="\n"+extra[1];
  return {set:new Set([...bloco.matchAll(/^\s{2,4}(\w+):/gm)].map(m=>m[1])),bloco};
}

test("todo data-action usado tem handler em ACTIONS",()=>{
  const usadas=acoesUsadas(), {set:reg}=acoesRegistradas();
  const orfas=[...usadas].filter(a=>!reg.has(a));
  assert.deepEqual(orfas,[],`ações sem handler: ${orfas}`);
});

test("nenhum handler órfão em ACTIONS (código morto)",()=>{
  const usadas=acoesUsadas(), {set:reg}=acoesRegistradas();
  const mortos=[...reg].filter(a=>!usadas.has(a));
  assert.deepEqual(mortos,[],`handlers nunca usados: ${mortos}`);
});

test("cada handler de ACTIONS chama função que existe",()=>{
  const {bloco}=acoesRegistradas();
  const tudo=ui+state+engine+html+pomo;
  const chamadas=new Set([...bloco.matchAll(/(?:=>|\{)\s*(\w+)\(/g)].map(m=>m[1]));
  chamadas.delete("document");
  const faltando=[...chamadas].filter(f=>!new RegExp("function "+f+"\\s*\\(").test(tudo));
  assert.deepEqual(faltando,[],`funções inexistentes: ${faltando}`);
});

test("zero handlers inline residuais (onclick= etc.)",()=>{
  const re=/on(?:click|mouseover|mouseout|keydown|change|input)="/g;
  assert.equal((html.match(re)||[]).length,0,"handler inline no index.html");
  assert.equal((ui.match(re)||[]).length,0,"handler inline nos templates do ui.js");
  assert.equal((pomo.match(re)||[]).length,0,"handler inline no pomodoro.js");
});

test("esc() aplicado nos pontos alimentados por backup (B10)",()=>{
  for(const probe of ["esc(primeiro)","esc(nomeUsuario)","esc(e.mat)","esc(f.text)"])
    assert.ok(ui.includes(probe),`escape ausente: ${probe}`);
});
