/* Testes do engine da Bússola — rodar com:  node --test tests/engine.test.js  (na pasta app/) */
const test=require("node:test");
const assert=require("node:assert");
const path=require("path");

function freshEngine(state,editais){
  global.STATE=state; global.EDITAIS=editais;
  delete require.cache[require.resolve(path.join(__dirname,"..","js","engine.js"))];
  return require(path.join(__dirname,"..","js","engine.js"));
}
const FIX_EDITAIS={
  demo:{nome:"Demo",materias:[{nome:"Mat A",peso:60},{nome:"Mat B",peso:40}],
    topicos:{"Mat A":["A1","A2","A3","A4","A5","A6","A7","A8","A9","A10"],
             "Mat B":["B1","B2","B3","B4","B5"]}}
};
function baseState(over){return Object.assign({prefeitura:"demo",inicio:"2026-01-05",prova:"2026-03-01",
  horasDia:3,diasLivres:[0],dias:{},extrasPorDia:{}},over||{});}

test("fmt/parseDate: ida e volta sem fuso",()=>{
  const E=freshEngine(baseState(),FIX_EDITAIS);
  assert.equal(E.fmt(E.parseDate("2026-02-28")),"2026-02-28");
  assert.equal(E.fmt(E.parseDate("2026-01-01")),"2026-01-01");
});

test("getCicloPos: sequência 5+1+1 com domingo livre",()=>{
  const E=freshEngine(baseState(),FIX_EDITAIS);
  // seg 05=0 ter=1 qua=2 qui=3 sex=4 sáb=5 dom=livre seg 12=6 ter 13=0
  assert.equal(E.getCicloPos("2026-01-05"),0);
  assert.equal(E.getCicloPos("2026-01-09"),4);
  assert.equal(E.getCicloPos("2026-01-10"),5);
  assert.equal(E.getCicloPos("2026-01-11"),-1); // domingo livre
  assert.equal(E.getCicloPos("2026-01-12"),6);
  assert.equal(E.getCicloPos("2026-01-13"),0);
  assert.equal(E.getCicloPos("2026-01-04"),-1); // antes do início
});

test("getCicloPos: cache invalida quando diasLivres muda (B9)",()=>{
  const E=freshEngine(baseState(),FIX_EDITAIS);
  assert.equal(E.getCicloPos("2026-01-10"),5);      // sábado é estudo
  global.STATE=baseState({diasLivres:[0,6]});        // agora sábado é livre
  assert.equal(E.getCicloPos("2026-01-10"),-1);      // cache não pode responder 5
});

test("calcRevisoes: pendente fora da janela NÃO some mais (B6)",()=>{
  const E=freshEngine(baseState({dias:{
    "2026-01-06":{percepcao:"media"},   // 14 dias atrás → rev7 atrasada
    "2026-01-07":{percepcao:"baixa",rev7feito:"2026-01-14"}, // feita → fora
  }}),FIX_EDITAIS);
  const {rev7}=E.calcRevisoes("2026-01-20");
  assert.equal(rev7.length,1);
  assert.equal(rev7[0].key,"2026-01-06");
  assert.equal(rev7[0].atrasada,true);
  // na janela normal (7 dias) → listada e não atrasada
  const r2=E.calcRevisoes("2026-01-13").rev7.find(r=>r.key==="2026-01-06");
  assert.ok(r2 && r2.atrasada===false);
});

test("calcRevisoes: rev30 atrasada permanece listada (B6)",()=>{
  const E=freshEngine(baseState({dias:{"2026-01-06":{percepcao:"media",rev7feito:"2026-01-13"}}}),FIX_EDITAIS);
  const {rev30}=E.calcRevisoes("2026-02-20"); // 45 dias depois
  assert.equal(rev30.length,1);
  assert.equal(rev30[0].atrasada,true);
});

test("calcExpectedPerSubject espelha o agendamento real (B5 — paridade)",()=>{
  const E=freshEngine(baseState(),FIX_EDITAIS);
  const hoje="2026-02-03";
  // agendamento REAL: caminha dia a dia coletando tópicos distintos por matéria
  const real={"Mat A":new Set(),"Mat B":new Set()};
  let d=E.parseDate(STATE.inicio);
  while(E.fmt(d)<=hoje){
    const k=E.fmt(d);
    const pos=E.getCicloPos(k);
    if(pos>=0&&pos<=4&&k!==STATE.inicio)
      E.getTopicosDiaBase(k).forEach(t=>real[t.mat].add(t.top));
    d.setDate(d.getDate()+1);
  }
  const esperado=E.calcExpectedPerSubject(hoje);
  for(const m of ["Mat A","Mat B"]){
    const total=FIX_EDITAIS.demo.topicos[m].length;
    const pctReal=Math.min(100,Math.round((real[m].size/total)*100));
    assert.equal(esperado[m],pctReal,`divergência em ${m}: esperado ${esperado[m]} vs real ${pctReal}`);
  }
});

test("getNumRevisao: igual à contagem manual de dias pos-6",()=>{
  const E=freshEngine(baseState(),FIX_EDITAIS);
  let manual=0,d=E.parseDate("2026-01-05");
  while(E.fmt(d)<="2026-02-10"){ if(E.getCicloPos(E.fmt(d))===6) manual++; d.setDate(d.getDate()+1); }
  assert.equal(E.getNumRevisao("2026-02-10"),Math.max(1,manual));
});

test("performance: plano de 1 ano, varredura tipo renderSimuladoPage (B9)",()=>{
  const E=freshEngine(baseState({inicio:"2026-01-05",prova:"2027-01-05"}),FIX_EDITAIS);
  const t0=process.hrtime.bigint();
  let sims=0,d=E.parseDate("2026-01-05");
  while(E.fmt(d)<="2027-01-05"){ if(E.isSimuladoDay(E.fmt(d))) sims++; d.setDate(d.getDate()+1); }
  const ms=Number(process.hrtime.bigint()-t0)/1e6;
  assert.ok(sims>0,"deveria haver simulados no ano");
  assert.ok(ms<500,`varredura anual levou ${ms.toFixed(0)}ms (limite 500ms)`);
});

test("getTopicosFracos: dia 2 aparece no Retorno Técnico mesmo com densidade 2 (bug reportado)",()=>{
  // 20 tópicos em ~18 dias de conteúdo → densidade 2 (modo intensivo)
  const ED={demo:{nome:"Demo",materias:[{nome:"Mat A",peso:60},{nome:"Mat B",peso:40}],
    topicos:{"Mat A":Array.from({length:12},(_,i)=>"A"+(i+1)),
             "Mat B":Array.from({length:8},(_,i)=>"B"+(i+1))}}};
  const E=freshEngine(baseState({prova:"2026-01-31",dias:{
    "2026-01-05":{percepcao:"alta"},   // Dia 1 (edital) — 5 estrelas
    "2026-01-06":{percepcao:"baixa"},  // dia 2: abaixo de 5 estrelas
    "2026-01-07":{percepcao:"alta"},
    "2026-01-08":{percepcao:"alta"},
    "2026-01-09":{percepcao:"alta"},
  }}),ED);
  // pré-condição: densidade realmente 2 (senão o teste não reproduz o bug)
  assert.ok(E.getTopicosDiaBase("2026-01-07").length>=2,"fixture deveria ter densidade ≥ 2");
  const fracos=E.getTopicosFracos(E.parseDate("2026-01-05")); // semana do 1º RT (sáb 10/01)
  const dias=[...new Set(fracos.map(f=>f.key))].sort();
  assert.ok(dias.includes("2026-01-06"),`dia 2 ausente do RT: ${dias}`);
  assert.deepEqual(dias,["2026-01-06","2026-01-07","2026-01-08","2026-01-09"],
    "RT deve cobrir os 4 dias de conteúdo da semana 1 (Dia 1 do edital fica de fora)");
});

test("ciclo 5+1+1 íntegro com 4 dias livres (mínimo de 3 dias de estudo/semana)",()=>{
  // livres: dom, ter, qui, sáb → estuda seg/qua/sex
  const E=freshEngine(baseState({diasLivres:[0,2,4,6],prova:"2026-06-30"}),FIX_EDITAIS);
  const seq=[];
  let d=E.parseDate("2026-01-05");
  while(seq.length<14){
    const pos=E.getCicloPos(E.fmt(d));
    if(pos>=0) seq.push(pos);
    d.setDate(d.getDate()+1);
  }
  // os dias de estudo devem percorrer o ciclo completo em ordem: 0..6, 0..6
  assert.deepEqual(seq,[0,1,2,3,4,5,6,0,1,2,3,4,5,6]);
  // dias livres seguem fora do plano
  assert.equal(E.getCicloPos("2026-01-06"),-1); // terça livre
  // agendamento continua funcionando (tópicos nos dias de conteúdo)
  const tops=E.getTopicosDiaBase("2026-01-07"); // quarta, pos 1
  assert.ok(tops.length>=1);
});

test("buildAgendaSemanaICS: semana completa com títulos, horário e link de retorno",()=>{
  const E=freshEngine(baseState({dias:{}}),FIX_EDITAIS);
  const {ics,eventos}=E.buildAgendaSemanaICS("2026-01-05","20:30");
  // domingo é livre → 6 eventos (seg-sáb)
  assert.equal(eventos.length,6);
  assert.equal((ics.match(/BEGIN:VEVENT/g)||[]).length,6);
  assert.ok(ics.startsWith("BEGIN:VCALENDAR"));
  assert.ok(ics.trim().endsWith("END:VCALENDAR"));
  // horário escolhido e duração de horasDia (3h → termina 23:30)
  assert.ok(ics.includes("DTSTART:20260106T203000"));
  assert.ok(ics.includes("DTEND:20260106T233000"));
  // dia 1 é a leitura do edital; dias de conteúdo trazem a matéria
  assert.ok(eventos[0].titulo.includes("Dia 1"));
  assert.ok(eventos[1].titulo.includes("Mat A"));
  // sábado = Retorno Técnico
  assert.ok(eventos[5].titulo.includes("Retorno Técnico"));
  // link de retorno ao painel em TODOS os eventos (máquina de retenção)
  const descrs=(ics.match(/DESCRIPTION:[^\r]*(?:\r\n [^\r]*)*/g)||[]).filter(d=>!d.includes("Hora de estudar"));
  assert.equal(descrs.length,6);
  descrs.forEach(d=>assert.ok(d.replace(/\r\n /g,"").includes("bussoladeestudos.com.br"),"evento sem link de retorno"));
  // UID estável por data → reimportação atualiza em vez de duplicar
  assert.ok(ics.includes("UID:bussola-2026-01-05@bussoladeestudos.com.br"));
});

test("buildAgendaSemanaICS: dia da prova gera evento especial",()=>{
  const E=freshEngine(baseState({inicio:"2026-01-05",prova:"2026-03-06"}),FIX_EDITAIS);
  const {eventos}=E.buildAgendaSemanaICS("2026-03-02","19:00");
  const prova=eventos.find(ev=>ev.k==="2026-03-06");
  assert.ok(prova&&prova.titulo.includes("DIA DA PROVA"));
});


test("aggregateEstrelas: exige todos os tópicos e agrega pela pior nota",()=>{
  const E=freshEngine(baseState(),FIX_EDITAIS);
  assert.equal(E.aggregateEstrelas({},2),null);        // nada avaliado
  assert.equal(E.aggregateEstrelas(null,2),null);      // lista ausente
  assert.equal(E.aggregateEstrelas({0:4},2),null);     // incompleto: dia não conclui
  assert.equal(E.aggregateEstrelas({0:4,1:2},2),2);    // pior nota prevalece
  assert.equal(E.aggregateEstrelas({0:5,1:5},2),5);    // domínio pleno
  assert.equal(E.aggregateEstrelas({0:3},1),3);        // dia de tópico único
  assert.equal(E.aggregateEstrelas({0:3},0),null);     // total inválido
});


/* ── Hábito: consistência e ritmo semanal (dashboard) ──
   Cenário fixo: início seg 05/01/2026, domingos livres, "hoje" = qui 15/01.
   Feitos: 05,06,07,08,09 (seg-sex) · 10 (sáb) em branco · 12,13,14 feitos. */
function stateHabito(){
  const dias={};
  ["2026-01-05","2026-01-06","2026-01-07","2026-01-08","2026-01-09",
   "2026-01-12","2026-01-13","2026-01-14"].forEach(function(k){ dias[k]={percepcao:"alta",estrelas:5}; });
  return baseState({dias:dias});
}
test("calcStreaks: dia livre não quebra e o escudo do mês emenda a falha",()=>{
  const E=freshEngine(stateHabito(),FIX_EDITAIS);
  const s=E.calcStreaks("2026-01-15");
  // 05..09 (5) + sábado 10 perdoado pelo escudo + 12,13,14 = 8 seguidos.
  // Domingo 11 é livre: nunca entra na conta.
  assert.equal(s.atual,8);
  assert.equal(s.recorde,8);
  assert.equal(s.perdoados,1);
  assert.equal(s.escudoUsado,true);
  assert.equal(s.recordeAnterior,0);  // nenhuma sequência foi fechada ainda
});
test("calcHeatmapConsistencia: estados por dia e resumo",()=>{
  const E=freshEngine(stateHabito(),FIX_EDITAIS);
  const hm=E.calcHeatmapConsistencia(2,"2026-01-15");
  assert.equal(hm.colunas.length,2);
  assert.equal(hm.colunas[0].length,7);
  const cel={};
  hm.colunas.forEach(c=>c.forEach(x=>{cel[x.key]=x;}));
  assert.equal(cel["2026-01-06"].estado,"feito");
  assert.equal(cel["2026-01-10"].estado,"falha");
  assert.equal(cel["2026-01-11"].estado,"livre");   // domingo: nunca é falha
  assert.equal(cel["2026-01-04"].estado,"fora");    // antes do início
  assert.equal(cel["2026-01-16"].estado,"fora");    // futuro
  assert.equal(hm.resumo.feitos,8);
  assert.equal(hm.resumo.sequencia,8);   // escudo emendou a falha do sábado
});
test("calcRitmoSemanal: distribuição por dia da semana (sem registradoEm)",()=>{
  const E=freshEngine(stateHabito(),FIX_EDITAIS);
  const r=E.calcRitmoSemanal("2026-01-15");
  assert.equal(r.total,8);
  assert.equal(r.dias[1].registros,2);      // segundas: 05 e 12
  assert.equal(r.dias[1].pct,25);
  assert.equal(r.dias[0].registros,0);      // domingo: nenhum registro
  assert.equal(r.dias[0].livre,true);
  assert.equal(r.maiorLote,null);           // nada foi marcado em lote
});
test("calcRitmoSemanal: registradoEm manda e lote é detectado",()=>{
  const st=stateHabito();
  ["2026-01-05","2026-01-06","2026-01-07"].forEach(k=>{ st.dias[k].registradoEm="2026-01-15"; });
  const E=freshEngine(st,FIX_EDITAIS);
  const r=E.calcRitmoSemanal("2026-01-15");
  assert.equal(r.dias[4].registros,4);      // quinta 15 recebe os 3 do lote + o dia 08
  assert.equal(r.dias[1].registros,1);      // segunda perdeu o dia 05 (registrado na quinta)
  assert.equal(r.maiorLote.qtd,3);
  assert.equal(r.maiorLote.data,"2026-01-15");
});

test("calcStreaks: escudo perdoa 1 falha por mês e zera na segunda",()=>{
  const st=stateHabito();                    // feitos: 05-09, 12,13,14 (falha em 10)
  delete st.dias["2026-01-13"];              // segunda falha no mesmo mês
  const E=freshEngine(st,FIX_EDITAIS);
  const s=E.calcStreaks("2026-01-15");
  assert.equal(s.perdoados,1);               // sábado 10 foi perdoado pelo escudo
  assert.equal(s.escudoUsado,true);
  assert.equal(s.atual,1);                   // 13 zerou; sobrou o dia 14
  assert.ok(s.recorde>=6);                   // 05..09 + 12 emendados pelo escudo
});
test("calcMarcos: conquistados pelo recorde, próximo pela sequência atual",()=>{
  const E=freshEngine(stateHabito(),FIX_EDITAIS);
  const m=E.calcMarcos(5,21);
  assert.deepEqual(m.conquistados,[7,14,21]);
  assert.equal(m.proximo,7);
  assert.equal(m.faltam,2);
  const m2=E.calcMarcos(120,120);
  assert.equal(m2.proximo,null);
});

test("RT, simulado e revisão geral contam como dia cumprido",()=>{
  const st=stateHabito();
  st.dias["2026-01-10"]={rtFeito:true};              // sábado de Retorno Técnico
  st.dias["2026-01-15"]={percepcao:"alta",estrelas:4};
  st.dias["2026-01-16"]={simuladoFeito:true,simuladoScore:70};
  const E=freshEngine(st,FIX_EDITAIS);
  const hm=E.calcHeatmapConsistencia(3,"2026-01-16");
  const cel={};
  hm.colunas.forEach(c=>c.forEach(x=>{cel[x.key]=x;}));
  assert.equal(cel["2026-01-10"].estado,"feito");    // antes vinha "falha"
  assert.equal(cel["2026-01-16"].estado,"feito");
  const s=E.calcStreaks("2026-01-16");
  assert.equal(s.perdoados,0);                       // nada a perdoar: nenhuma falha
  assert.equal(s.atual,11);                          // 05..10 + 12..16 (11 é domingo livre)
});

test("calcRumo: agulha aponta o Norte em dia e desvia conforme a aderência cai",()=>{
  const E=freshEngine(baseState(),FIX_EDITAIS);
  assert.equal(E.calcRumo(100,true).angulo,0);
  assert.equal(E.calcRumo(100,true).nivel,"norte");
  assert.equal(E.calcRumo(50,true).angulo,45);
  assert.equal(E.calcRumo(0,true).angulo,90);
  assert.equal(E.calcRumo(0,true).nivel,"perdido");
  assert.equal(E.calcRumo(90,true).nivel,"rota");
  assert.equal(E.calcRumo(70,true).nivel,"desvio");
  const semDados=E.calcRumo(0,false);
  assert.equal(semDados.angulo,null);
  assert.equal(semDados.nivel,"calibrando");
});

test("calcMesConsistencia: grade do mês, estados e comparação com o anterior",()=>{
  const E=freshEngine(stateHabito(),FIX_EDITAIS);
  const mc=E.calcMesConsistencia(0,"2026-01-15");
  assert.equal(mc.mes,0);                       // janeiro
  const dias={};
  mc.celulas.forEach(c=>{ if(!c.vazio) dias[c.key]=c; });
  assert.equal(dias["2026-01-06"].estado,"feito");
  assert.equal(dias["2026-01-10"].estado,"falha");
  assert.equal(dias["2026-01-11"].estado,"livre");   // domingo
  assert.equal(dias["2026-01-20"].estado,"futuro");  // depois de hoje
  assert.equal(dias["2026-01-02"].estado,"fora");    // antes do início
  assert.equal(mc.resumo.estudados,8);
  assert.equal(mc.resumo.previstos,9);               // 8 feitos + sábado 10
  assert.equal(mc.resumo.mesAnterior,0);             // dezembro sem registros
  assert.equal(mc.celulas[0].vazio,true);            // 01/01 é quinta: 4 vazias antes
});

test("calcMesConsistencia: crédito vai para o dia do registro, não o planejado",()=>{
  const st=stateHabito();
  // aluno registrou terça (06), quarta (07) e quinta (08) tudo no domingo 11
  ["2026-01-06","2026-01-07","2026-01-08"].forEach(k=>{ st.dias[k].registradoEm="2026-01-11"; });
  const E=freshEngine(st,FIX_EDITAIS);
  const mc=E.calcMesConsistencia(0,"2026-01-15");
  const dias={};
  mc.celulas.forEach(c=>{ if(!c.vazio) dias[c.key]=c; });
  assert.equal(dias["2026-01-11"].estado,"feito");   // domingo livre, mas estudou
  assert.equal(dias["2026-01-06"].estado,"falha");   // planejado, sem estudo naquele dia
  assert.equal(dias["2026-01-05"].estado,"feito");   // registrado no próprio dia
  assert.equal(mc.resumo.estudados,6);               // 05,09,11,12,13,14
});

test("calcMesConsistencia: comparação usa o MESMO período do mês anterior",()=>{
  const st=baseState({inicio:"2025-12-01",prova:"2026-03-01",diasLivres:[0],dias:{}});
  ["2025-12-03","2025-12-05","2025-12-20","2026-01-02","2026-01-06"]
    .forEach(k=>{ st.dias[k]={percepcao:"alta",estrelas:4}; });
  const E=freshEngine(st,FIX_EDITAIS);
  const jan=E.calcMesConsistencia(0,"2026-01-15");
  assert.equal(jan.mesCorrente,true);
  assert.equal(jan.diaCorte,15);
  assert.equal(jan.resumo.estudados,2);          // 02 e 06 de janeiro
  assert.equal(jan.resumo.mesAnterior,2);        // dias 3 e 5 de dezembro (até o dia 15)
  assert.equal(jan.resumo.mesAnteriorTotal,3);   // com o dia 20
  assert.equal(jan.resumo.variacao,null);        // mês em curso: sem percentual
  const dez=E.calcMesConsistencia(-1,"2026-01-15");
  assert.equal(dez.resumo.mesFechado,true);
  assert.equal(dez.resumo.estudados,3);
});

test("calcMedalhas: conquistas, XP e patente",()=>{
  const st=stateHabito();                    // 8 dias de estudo, todos 5 estrelas
  st.dias["2026-01-10"]={rtFeito:true};
  st.dias["2026-01-12"].rev7feito=true;
  st.dias["2026-01-13"].simuladoFeito=true; st.dias["2026-01-13"].simuladoScore=80;
  const E=freshEngine(st,FIX_EDITAIS);
  const m=E.calcMedalhas(30);                // 30% do edital coberto
  const por=id=>m.medalhas.find(x=>x.id===id);
  assert.equal(por("seq7").ok,true);         // recorde de 8 dias seguidos
  assert.equal(por("seq21").ok,false);
  assert.equal(por("cob25").ok,true);        // cobertura 30% >= 25%
  assert.equal(por("cob50").ok,false);
  assert.equal(por("sim1").ok,true);
  assert.equal(por("dom10").ok,false);       // 8 tópicos com 5 estrelas
  assert.equal(por("seq21").falta,12);   // recorde vira 9: o RT do sábado emenda a sequência
  assert.equal(m.total,20);
  assert.ok(m.conquistadas>=3);
  // 9 dias (90) + 8 tópicos 5★ (120) + 1 revisão (8) + 1 simulado (25)
  // + 1 RT (12) + 3 medalhas (150) = 405 XP -> Bronze (faixa 300)
  assert.equal(m.xp,405);
  assert.equal(m.patente.nome,"Bronze");
  assert.equal(m.patente.proxNome,"Prata");
  assert.ok(m.proxima);                      // sempre sugere a próxima meta
});

/* ── Domínio do edital: confiança pesada pela cobertura ───────────
   Nasceu do "paradoxo da confiança": Psicologia marcava 100% verde
   com o aluno 60% atrasado, porque a média só olhava os tópicos vistos. */
test("calcDominio: confiança máxima sobre cobertura parcial não vira domínio alto",()=>{
  const E=freshEngine({},FIX_EDITAIS);
  const r=E.calcDominio(100,40);
  assert.strictEqual(r.dominio,40);
  assert.strictEqual(r.faixa,"media");
  assert.strictEqual(r.confParcial,true,"40% de cobertura é amostra parcial");
});
test("calcDominio: cobertura completa preserva a confiança",()=>{
  const E=freshEngine({},FIX_EDITAIS);
  assert.strictEqual(E.calcDominio(80,100).dominio,80);
  assert.strictEqual(E.calcDominio(80,100).confParcial,false);
});
test("calcDominio: verde só com cobertura e confiança altas",()=>{
  const E=freshEngine({},FIX_EDITAIS);
  assert.strictEqual(E.calcDominio(100,70).faixa,"alta");   // 70 -> verde
  assert.strictEqual(E.calcDominio(80,60).faixa,"media");   // 48 -> amarelo
  assert.strictEqual(E.calcDominio(70,50).faixa,"baixa");   // 35 -> vermelho
  assert.strictEqual(E.calcDominio(100,40).faixa,"media","o caso Psicologia sai do verde");
});
test("calcDominio: sem dados e entradas inválidas caem em zero",()=>{
  const E=freshEngine({},FIX_EDITAIS);
  assert.strictEqual(E.calcDominio(0,0).dominio,0);
  assert.strictEqual(E.calcDominio(0,0).faixa,"nula");
  assert.strictEqual(E.calcDominio(0,0).confParcial,false);
  assert.strictEqual(E.calcDominio(null,undefined).dominio,0);
  assert.strictEqual(E.calcDominio(180,300).dominio,100,"limita em 100");
});
test("calcDominio: limiar de amostra parcial é o DOMINIO_MIN_AMOSTRA",()=>{
  const E=freshEngine({},FIX_EDITAIS);
  assert.strictEqual(E.DOMINIO_MIN_AMOSTRA,50);
  assert.strictEqual(E.calcDominio(90,49).confParcial,true);
  assert.strictEqual(E.calcDominio(90,50).confParcial,false);
});

/* Etiqueta de status da bússola: cada nível tem tag e ícone, e a frase
   não pode repetir o que o badge já diz. */
test("calcRumo: todo nível devolve tag e ícone, e a frase não repete o badge",()=>{
  const E=freshEngine({},FIX_EDITAIS);
  const casos=[[100,"norte","No Ritmo"],[90,"rota","Rota Firme"],[70,"desvio","Pequeno Desvio"],
               [40,"fora","Rota Desviada"],[0,"perdido","Fora de Rota"]];
  casos.forEach(([pct,nivel,tag])=>{
    const r=E.calcRumo(pct,true);
    assert.strictEqual(r.nivel,nivel);
    assert.strictEqual(r.tag,tag);
    assert.ok(r.icone&&r.icone.length>0,"sem ícone em "+nivel);
    assert.ok(!r.frase.toLowerCase().startsWith(tag.toLowerCase()),"frase repete o badge em "+nivel);
  });
  const cal=E.calcRumo(0,false);
  assert.strictEqual(cal.tag,"Calibrando");
  assert.strictEqual(cal.angulo,null);
});
