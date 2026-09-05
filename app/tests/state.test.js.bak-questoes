/* Testes do state da Bússola — rodar com:  node --test tests/state.test.js */
const test=require("node:test");
const assert=require("node:assert");
const {migrateState,STATE_SCHEMA_VERSION}=require("../js/state.js");

test("migrateState: dados v1 (sem versão) ganham containers e versão",()=>{
  const antigo={nome:"Adriano",inicio:"2026-01-05",dias:{"2026-01-06":{percepcao:"alta"}}};
  const m=migrateState(antigo);
  assert.equal(m.schemaVersion,STATE_SCHEMA_VERSION);
  assert.deepEqual(m.diasLivres,[]);
  assert.deepEqual(m.notasSemana,{});
  assert.deepEqual(m.extrasPorDia,{});
  assert.equal(m.dias["2026-01-06"].percepcao,"alta"); // dados preservados
  assert.equal(m.nome,"Adriano");
});

test("migrateState: corrige tipos corrompidos sem perder o resto",()=>{
  const quebrado={dias:null,diasLivres:"0,6",notasSemana:7,horasDia:"quatro",prova:"2026-08-30"};
  const m=migrateState(quebrado);
  assert.deepEqual(m.dias,{});
  assert.deepEqual(m.diasLivres,[]);
  assert.deepEqual(m.notasSemana,{});
  assert.equal(m.horasDia,3);           // fallback seguro
  assert.equal(m.prova,"2026-08-30");   // campo válido intacto
});

test("migrateState: idempotente em dados já migrados (v2)",()=>{
  const v2=migrateState({dias:{"2026-01-06":{percepcao:"media"}},diasLivres:[0,6],horasDia:4});
  const de_novo=migrateState(v2);
  assert.deepEqual(de_novo,v2);
});

/* ── v3: editais de concurso removidos em 25/08/2026 ──────────────
   A migração só age no navegador, onde EDITAIS vem do editais.js.
   freshState simula isso: injeta window.EDITAIS_DATA e recarrega o
   módulo, porque o catálogo é lido uma única vez, na carga. */
const path=require("path");
function freshState(editais){
  global.window={EDITAIS_DATA:editais};
  delete require.cache[require.resolve(path.join(__dirname,"..","js","state.js"))];
  const m=require(path.join(__dirname,"..","js","state.js"));
  delete global.window;
  return m;
}
const SO_CERTS={cfpPlanejar:{nome:"CFP"},ca600Abecip:{nome:"CA-600"}};

test("migrateState v3: edital de concurso que sumiu devolve o aluno ao setup",()=>{
  const S=freshState(SO_CERTS);
  const antigo={schemaVersion:2,prefeitura:"cgAgenteAdm",concurso:"Campina Grande — Agente",
    cargo:"Agente",inicio:"2026-07-01",prova:"2026-08-30",dias:{"2026-07-02":{percepcao:"alta"}},nome:"Adriano"};
  const m=S.migrateState(antigo);
  assert.equal(m.prefeitura,"");
  assert.equal(m.concurso,"");
  assert.equal(m.inicio,null);
  assert.equal(m.prova,null);
  assert.deepEqual(m.dias,{});
  assert.equal(m.nome,"Adriano");        // o que não depende do edital fica
  assert.equal(m.schemaVersion,3);
});

test("migrateState v3: aluno de certificação não é tocado",()=>{
  const S=freshState(SO_CERTS);
  const aluno={schemaVersion:2,prefeitura:"cfpPlanejar",inicio:"2026-07-01",
    dias:{"2026-07-02":{percepcao:"alta"}}};
  const m=S.migrateState(aluno);
  assert.equal(m.prefeitura,"cfpPlanejar");
  assert.equal(m.inicio,"2026-07-01");
  assert.equal(m.dias["2026-07-02"].percepcao,"alta");
});

test("migrateState v3: sem catálogo carregado (Node), não zera nada",()=>{
  const antigo={schemaVersion:2,prefeitura:"cgAgenteAdm",inicio:"2026-07-01"};
  const m=migrateState(antigo);           // módulo do topo, sem window
  assert.equal(m.prefeitura,"cgAgenteAdm");
  assert.equal(m.inicio,"2026-07-01");
});
