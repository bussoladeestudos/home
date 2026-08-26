/* Testes da decisão de conflito local × nuvem — node --test tests/sync.test.js */
const test=require("node:test");
const assert=require("node:assert");
const {decideSync}=require("../js/state.js");

const CONF={inicio:"2026-01-05",dias:{"2026-01-06":{percepcao:"alta"}}};

test("sem dados na nuvem → local vence (primeiro sync sobe os dados)",()=>{
  assert.equal(decideSync({...CONF,updatedAt:100},null,"u1").winner,"local");
});

test("dispositivo novo (sem cronograma) NUNCA sobrescreve nuvem configurada",()=>{
  // mesmo que um save de boot tenha carimbado updatedAt mais novo no local vazio
  const localVazio={inicio:null,dias:{},updatedAt:999999};
  const d=decideSync(localVazio,{...CONF,updatedAt:100},"u1");
  assert.equal(d.winner,"remote");
  assert.equal(d.motivo,"local-vazio");
});

test("nuvem vazia + local configurado → local vence",()=>{
  const d=decideSync({...CONF,updatedAt:100},{inicio:null,updatedAt:999999},"u1");
  assert.equal(d.winner,"local");
});

test("ambos configurados → vence o mais recente",()=>{
  assert.equal(decideSync({...CONF,updatedAt:200},{...CONF,updatedAt:100},"u1").winner,"local");
  assert.equal(decideSync({...CONF,updatedAt:100},{...CONF,updatedAt:200},"u1").winner,"remote");
});

test("computador compartilhado: dados locais de outro usuário nunca valem",()=>{
  const localDeOutro={...CONF,updatedAt:999999,_syncUid:"usuarioA"};
  const d=decideSync(localDeOutro,{...CONF,updatedAt:1},"usuarioB");
  assert.equal(d.winner,"remote");
  assert.equal(d.motivo,"outro-usuario");
});

test("empate de carimbo → local vence (não força download desnecessário)",()=>{
  assert.equal(decideSync({...CONF,updatedAt:100},{...CONF,updatedAt:100},"u1").winner,"local");
});
