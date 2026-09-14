/* Ordem de estudo do cronograma (14/09/2026).
   Roda com:  node --test tests/ordem-estudo.test.js   na pasta app/ */
const test=require("node:test");
const assert=require("node:assert");
const path=require("path");
const fs=require("fs");

function freshEngine(state,editais){
  global.STATE=state; global.EDITAIS=editais;
  delete require.cache[require.resolve(path.join(__dirname,"..","js","engine.js"))];
  return require(path.join(__dirname,"..","js","engine.js"));
}
/* Edital de mentira com o MESMO nome de materia da CPA, para exercitar a
   receita real sem depender do editais.js do projeto. */
const M1="Estrutura e Dinâmica do Sistema Financeiro Nacional";
const M2="Produtos do Mercado Financeiro";
const M3="Relacionamento com o Cliente";
const M4="Inovação e Desenvolvimento de Mercado";
function lista(pref,n){ return Array.from({length:n},(_,i)=>pref+(i+1)); }
const FIX={ cpaAnbima:{ nome:"CPA", materias:[{nome:M1,peso:20},{nome:M2,peso:40},{nome:M3,peso:30},{nome:M4,peso:10}],
  topicos:{ [M1]:lista("sfn",22), [M2]:lista("prod",43), [M3]:lista("rel",32), [M4]:lista("inov",11) } } };
function st(over){ return Object.assign({prefeitura:"cpaAnbima",inicio:"2026-01-05",prova:"2026-06-01",
  horasDia:3,diasLivres:[0],dias:{},extrasPorDia:{}},over||{}); }

test("sem ordemPlano, a sequência continua a antiga: matéria mais pesada primeiro",()=>{
  const E=freshEngine(st(),FIX);
  const seq=E.getSequenciaTopicos();
  assert.equal(seq.length,108);
  assert.equal(seq[0].mat,M2);            // peso 40
  assert.equal(seq[0].top,"prod1");
  assert.equal(seq[43].mat,M3);           // peso 30 vem depois dos 43 de Produtos
});

test("com ordemPlano recomendada, a sequência segue a Análise do Edital",()=>{
  const E=freshEngine(st({ordemPlano:"recomendada"}),FIX);
  const seq=E.getSequenciaTopicos();
  assert.equal(seq.length,108,"nenhum tópico se perde");
  // 1. SFN 1 a 6
  assert.deepEqual(seq.slice(0,6).map(t=>t.top),["sfn1","sfn2","sfn3","sfn4","sfn5","sfn6"]);
  // 2. SFN 19 a 22
  assert.deepEqual(seq.slice(6,10).map(t=>t.top),["sfn19","sfn20","sfn21","sfn22"]);
  // 3. Produtos 1 a 11
  assert.equal(seq[10].top,"prod1");
  assert.equal(seq[20].top,"prod11");
  // 4. Produtos 12 a 28
  assert.equal(seq[21].top,"prod12");
  assert.equal(seq[37].top,"prod28");
  // 5. Relacionamento 23 a 32
  assert.equal(seq[38].top,"rel23");
  // 6. SFN 7 a 18
  assert.equal(seq[48].top,"sfn7");
  // 9. Inovação fecha a lista
  assert.equal(seq[107].top,"inov11");
  assert.equal(seq[107].mat,M4);
});

test("a sequência recomendada tem o mesmo conjunto da antiga, sem repetir",()=>{
  const antes=freshEngine(st(),FIX).getSequenciaTopicos().map(t=>t.mat+"|"+t.top).sort();
  const depois=freshEngine(st({ordemPlano:"recomendada"}),FIX).getSequenciaTopicos().map(t=>t.mat+"|"+t.top).sort();
  assert.deepEqual(depois,antes);
  assert.equal(new Set(depois).size,depois.length,"nenhum tópico duplicado");
});

test("tópico novo no edital, fora da receita, entra no fim em vez de sumir",()=>{
  const fix=JSON.parse(JSON.stringify(FIX));
  fix.cpaAnbima.topicos[M4].push("inov12");     // o edital ganhou um tópico
  const E=freshEngine(st({ordemPlano:"recomendada"}),fix);
  const seq=E.getSequenciaTopicos();
  assert.equal(seq.length,109);
  assert.equal(seq[seq.length-1].top,"inov12");
});

test("receita quebrada devolve a ordem antiga inteira, sem derrubar o plano",()=>{
  const fix=JSON.parse(JSON.stringify(FIX));
  fix.cpaAnbima.materias=[{nome:"Outra",peso:100}];
  fix.cpaAnbima.topicos={"Outra":lista("x",5)};
  const E=freshEngine(st({ordemPlano:"recomendada"}),fix);
  const seq=E.getSequenciaTopicos();
  assert.equal(seq.length,5);
  assert.equal(seq[0].top,"x1");
});

test("o cronograma distribui na ordem recomendada",()=>{
  const E=freshEngine(st({ordemPlano:"recomendada",horasDia:0.75}),FIX);
  // 05/01 e o Dia 1 (Coach) e nao recebe conteudo; 06/01 e o primeiro dia util
  assert.deepEqual(E.getTopicosDiaBase("2026-01-05"),[]);
  assert.equal(E.getTopicosDiaBase("2026-01-06")[0].top,"sfn1");
  assert.equal(E.getTopicosDiaBase("2026-01-07")[0].top,"sfn2");
});

test("dia já registrado não troca de tópico quando a lista do edital muda",()=>{
  const estado=st({ordemPlano:"recomendada",horasDia:0.75});
  let E=freshEngine(estado,FIX);
  const antes=E.getTopicosDiaBase("2026-01-06");
  assert.equal(antes[0].top,"sfn1");
  // o aluno estudou e o dia congelou
  estado.dias["2026-01-06"]={lido:true,topicosFix:antes.map(t=>({mat:t.mat,top:t.top,peso:t.peso}))};
  // agora o edital muda: a primeira materia perde tres topicos
  const fix=JSON.parse(JSON.stringify(FIX));
  fix.cpaAnbima.topicos[M1]=fix.cpaAnbima.topicos[M1].slice(3);
  E=freshEngine(estado,fix);
  const depois=E.getTopicosDiaBase("2026-01-06");
  assert.equal(depois[0].top,"sfn1","o dia estudado continua com o tópico de origem");
});

test("a receita da C-Pro R cobre os 125 tópicos do editais.js do projeto",()=>{
  const arq=path.join(__dirname,"..","editais.js");
  if(!fs.existsSync(arq)) return;                       // espelho sem editais.js
  const txt=fs.readFileSync(arq,"utf8");
  const ini=txt.indexOf("=",txt.indexOf("window.EDITAIS_DATA"))+1;
  const dados=JSON.parse(txt.slice(ini).trim().replace(/;\s*$/,""));
  if(!dados.cproRAnbima) return;
  const E=freshEngine(st({prefeitura:"cproRAnbima",ordemPlano:"recomendada"}),dados);
  const seq=E.getSequenciaTopicos();
  const total=Object.values(dados.cproRAnbima.topicos).reduce((s,l)=>s+l.length,0);
  assert.equal(seq.length,total);
  assert.equal(new Set(seq.map(t=>t.mat+"|"+t.top)).size,total);
  assert.equal(seq[0].mat,"Análise de informações do cliente");
  assert.equal(seq[total-1].mat,"Indicação de investimentos");
});
