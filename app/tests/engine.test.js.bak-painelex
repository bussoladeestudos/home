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

/* ── Aulas dos cursinhos (catálogo + vínculos) ───────────────────
   Uma aula cobre vários tópicos e um tópico pode ter várias aulas,
   porque o recorte do curso não bate com o do edital. */
const FIX_CURSOS={
  provedores:[
    {id:"lucasSilva",nome:"Prof. Lucas Silva",site:"https://ead.exemplo.com",editais:["cfpPlanejar"]},
    {id:"edgarAbreu",nome:"Edgar Abreu",site:"",editais:["cfpPlanejar"]},
    {id:"soOutro",nome:"Só Outro",site:"",editais:["outroEdital"]}
  ],
  aulas:{cfpPlanejar:{
    lucasSilva:{
      catalogo:[
        {n:1,t:"Introdução",u:""},                              // sem URL
        {n:2,t:"O Processo de Planejamento",u:"https://ead.exemplo.com/aula/2"},
        {n:3,t:"Código de Ética",u:"http://inseguro.com/aula/3"}, // http: descartada
        {n:4,t:"Remuneração",u:"https://ead.exemplo.com/aula/4"}
      ],
      topicos:{
        "Planejamento Financeiro e Ética":{
          "Princípios e processo do planejamento financeiro":[2],
          "Etapas do atendimento ao cliente":[2],
          "Modelos de remuneração do planejador":[2,4],
          "Código de ética da PLANEJAR":[3],
          "Normativos e regulação da profissão":[1]
        }
      }
    },
    edgarAbreu:{catalogo:[],topicos:{}}
  }}
};
function engineComCursos(){
  global.CURSOS=FIX_CURSOS;
  return freshEngine({},FIX_EDITAIS);
}
const MAT="Planejamento Financeiro e Ética";
test("getAulas: a MESMA aula atende vários tópicos do edital",()=>{
  const E=engineComCursos();
  const a=E.getAulas("cfpPlanejar","lucasSilva",MAT,"Princípios e processo do planejamento financeiro");
  const b=E.getAulas("cfpPlanejar","lucasSilva",MAT,"Etapas do atendimento ao cliente");
  assert.strictEqual(a.length,1);
  assert.strictEqual(a[0].u,"https://ead.exemplo.com/aula/2");
  assert.strictEqual(a[0].t,"O Processo de Planejamento");
  assert.strictEqual(b[0].u,a[0].u,"os dois tópicos apontam para a mesma aula");
});
test("getAulas: um tópico pode listar VÁRIAS aulas, na ordem do curso",()=>{
  const E=engineComCursos();
  const l=E.getAulas("cfpPlanejar","lucasSilva",MAT,"Modelos de remuneração do planejador");
  assert.deepStrictEqual(l.map(x=>x.n),[2,4]);
});
test("getAulas: aula sem URL ou com URL não-https some da lista",()=>{
  const E=engineComCursos();
  assert.deepStrictEqual(E.getAulas("cfpPlanejar","lucasSilva",MAT,"Código de ética da PLANEJAR"),[],"http descartado");
  assert.deepStrictEqual(E.getAulas("cfpPlanejar","lucasSilva",MAT,"Normativos e regulação da profissão"),[],"aula sem URL");
});
test("getAulas: comparação tolera acento, caixa e espaço extra",()=>{
  const E=engineComCursos();
  const l=E.getAulas("cfpPlanejar","lucasSilva","planejamento financeiro e etica","  PRINCÍPIOS  E PROCESSO DO PLANEJAMENTO FINANCEIRO. ");
  assert.strictEqual(l.length,1);
  assert.strictEqual(l[0].u,"https://ead.exemplo.com/aula/2");
});
test("getAulas: sem cursinho, cursinho errado ou fora do edital devolve vazio",()=>{
  const E=engineComCursos();
  const T="Princípios e processo do planejamento financeiro";
  assert.deepStrictEqual(E.getAulas("cfpPlanejar","",MAT,T),[]);
  assert.deepStrictEqual(E.getAulas("cfpPlanejar","edgarAbreu",MAT,T),[]);
  assert.deepStrictEqual(E.getAulas("outroEdital","lucasSilva",MAT,T),[]);
  assert.deepStrictEqual(E.getAulas("cfpPlanejar","lucasSilva","Gestão Financeira","Orçamento pessoal e familiar"),[]);
});
test("getAulaLink: atalho para a primeira aula do tópico",()=>{
  const E=engineComCursos();
  assert.strictEqual(E.getAulaLink("cfpPlanejar","lucasSilva",MAT,"Modelos de remuneração do planejador"),"https://ead.exemplo.com/aula/2");
  assert.strictEqual(E.getAulaLink("cfpPlanejar","lucasSilva",MAT,"Normativos e regulação da profissão"),"");
});
test("getProvedores: lista só os cursinhos do edital em questão",()=>{
  const E=engineComCursos();
  assert.deepStrictEqual(E.getProvedores("cfpPlanejar").map(p=>p.id),["lucasSilva","edgarAbreu"]);
  assert.strictEqual(E.getProvedor("lucasSilva").nome,"Prof. Lucas Silva");
});
test("contarTopicosComAula: conta TÓPICOS que abrem aula, não aulas",()=>{
  const E=engineComCursos();
  // 3 tópicos resolvem (aulas 2 e 4); os outros 2 apontam para aula sem URL válida
  assert.strictEqual(E.contarTopicosComAula("cfpPlanejar","lucasSilva"),3);
  assert.strictEqual(E.contarTopicosComAula("cfpPlanejar","edgarAbreu"),0);
});

/* ── Conteúdo de estudo por tópico ──────────────────────────────────
   Mesmo contrato das aulas: vínculo por matéria + tópico, tolerante a
   acento e caixa, e falha em silêncio quando não há texto. */
const FIX_CONTEUDO={
  demo:{"Mat A":{
    "A1":{id:"demo-01",v:1,at:"2026-08-25",frase:"Resumo do A1.",
          prova:"<ul><li>x</li></ul>",corpo:"<p>corpo</p>",
          pegadinhas:"<ul><li>y</li></ul>",cartao:"<ul><li>z</li></ul>"}
  }}
};
function engineComConteudo(){
  global.CONTEUDO=FIX_CONTEUDO;
  return freshEngine(baseState(),FIX_EDITAIS);
}
test("getConteudo: acha o tópico e devolve as seções",()=>{
  const E=engineComConteudo();
  const c=E.getConteudo("demo","Mat A","A1");
  assert.strictEqual(c.id,"demo-01");
  assert.strictEqual(c.frase,"Resumo do A1.");
  assert.ok(c.corpo.includes("<p>"));
});
test("getConteudo: comparação tolera acento, caixa e espaço extra",()=>{
  const E=engineComConteudo();
  assert.ok(E.getConteudo("demo","  mat a ","a1"));
});
test("getConteudo: tópico sem texto devolve null, sem quebrar",()=>{
  const E=engineComConteudo();
  assert.strictEqual(E.getConteudo("demo","Mat A","A2"),null);
  assert.strictEqual(E.getConteudo("demo","Mat B","B1"),null);
  assert.strictEqual(E.getConteudo("outroEdital","Mat A","A1"),null);
  assert.strictEqual(E.getConteudo("demo","Mat A",""),null);
  assert.strictEqual(E.temConteudo("demo","Mat A","A2"),false);
});
test("contarTopicosComConteudo: conta só o que tem texto publicado",()=>{
  const E=engineComConteudo();
  assert.strictEqual(E.contarTopicosComConteudo("demo",FIX_EDITAIS),1);
  assert.strictEqual(E.contarTopicosComConteudo("outroEdital",FIX_EDITAIS),0);
});

/* ── Índice de agenda por tópico (menu Conteúdo programático) ───────
   Sustenta a busca do menu: para cada tópico, em que dia ele cai e com
   que confiança foi avaliado. Se quebrar, o aluno passa a ver data
   errada ao lado do tópico, que é pior do que não ver data nenhuma. */
test("indexarAgendaTopicos: casa tópico com o dia real do cronograma",()=>{
  const E=freshEngine(baseState(),FIX_EDITAIS);
  const idx=E.indexarAgendaTopicos();
  // O dia 1 (05/01) é Orientações do Coach e não recebe tópico.
  const doDia=E.getTopicosDoDia("2026-01-06");
  assert.ok(doDia.length>0);
  doDia.forEach(t=>{
    const info=idx[E._normTexto(t.mat)+"|"+E._normTexto(t.top)];
    assert.ok(info,"tópico do dia 06/01 tem de estar no índice");
    assert.strictEqual(info.key,"2026-01-06");
  });
});

test("indexarAgendaTopicos: cobre todo o edital e guarda a 1ª ocorrência",()=>{
  const E=freshEngine(baseState(),FIX_EDITAIS);
  const idx=E.indexarAgendaTopicos();
  const tops=E.getTopicos();
  let n=0;
  Object.keys(tops).forEach(m=>tops[m].forEach(t=>{
    const info=idx[E._normTexto(m)+"|"+E._normTexto(t)];
    assert.ok(info,`${m}/${t} ficou fora do índice`);
    n++;
  }));
  assert.strictEqual(n,15);           // 10 de Mat A + 5 de Mat B
  // Nenhuma data pode cair na Revisão Geral ou depois dela.
  const lim=E.fmt(E.getLimiteConteudo());
  Object.values(idx).forEach(i=>assert.ok(i.key<lim,`${i.key} não pode ser >= ${lim}`));
});

test("indexarAgendaTopicos: confiança vem de percepcoes[i] em dia multi-tópico",()=>{
  // 3h/dia com a base de 45 min dá densidade 4: o dia é multi-tópico.
  const E=freshEngine(baseState({dias:{"2026-01-06":{percepcoes:{0:"alta",1:"baixa"}}}}),FIX_EDITAIS);
  const tops=E.getTopicosDoDia("2026-01-06");
  assert.ok(tops.length>1,"o cenário do teste precisa de dia multi-tópico");
  const idx=E.indexarAgendaTopicos();
  const k=t=>E._normTexto(t.mat)+"|"+E._normTexto(t.top);
  assert.strictEqual(idx[k(tops[0])].percepcao,"alta");
  assert.strictEqual(idx[k(tops[1])].percepcao,"baixa");
  assert.strictEqual(idx[k(tops[2])].percepcao,null);   // sem nota ainda
});

test("indexarAgendaTopicos: dia de tópico único lê est.percepcao",()=>{
  const E=freshEngine(baseState({horasDia:1,dias:{"2026-01-06":{percepcao:"media"}}}),FIX_EDITAIS);
  const tops=E.getTopicosDoDia("2026-01-06");
  assert.strictEqual(tops.length,1);
  const idx=E.indexarAgendaTopicos();
  assert.strictEqual(idx[E._normTexto(tops[0].mat)+"|"+E._normTexto(tops[0].top)].percepcao,"media");
});

test("indexarAgendaTopicos: sem plano configurado devolve mapa vazio",()=>{
  const E=freshEngine(baseState({inicio:""}),FIX_EDITAIS);
  assert.deepStrictEqual(E.indexarAgendaTopicos(),{});
});

/* ── Banco de questões (31/08/2026) ─────────────────────────────────
   Mesmo contrato do conteúdo: vínculo por matéria + tópico, tolerante a
   acento e caixa, e lista vazia quando não há questão. O histórico é por
   `id`, que é permanente por regra do formato. */
const FIX_QUESTOES={
  demo:{"Mat A":{
    "A1":[
      {id:"d-a1-q1",tipo:"multipla",nivel:1,usar_em:["simulado","revisao"],
       enunciado:"<p>e</p>",alternativas:{a:"1",b:"2",c:"3",d:"4"},gabarito:"b",comentario:"<p>c</p>"},
      {id:"d-a1-q2",tipo:"vf",nivel:3,usar_em:["revisao"],
       enunciado:"<p>e</p>",alternativas:{v:"V",f:"F"},gabarito:"f",comentario:"<p>c</p>"}
    ],
    "A2":[
      {id:"d-a2-q1",tipo:"multipla",nivel:2,usar_em:["simulado"],
       enunciado:"<p>e</p>",alternativas:{a:"1",b:"2",c:"3",d:"4"},gabarito:"a",comentario:"<p>c</p>"}
    ]
  }}
};
function engineComQuestoes(state){
  global.QUESTOES=FIX_QUESTOES;
  return freshEngine(state||baseState(),FIX_EDITAIS);
}

test("getQuestoes: acha pelo par matéria + tópico, tolerando acento e caixa",()=>{
  const E=engineComQuestoes();
  assert.strictEqual(E.getQuestoes("demo","Mat A","A1").length,2);
  assert.strictEqual(E.getQuestoes("demo","  mat a ","a1").length,2);
  assert.strictEqual(E.temQuestoes("demo","Mat A","A1"),true);
});

test("getQuestoes: tópico sem questão devolve lista vazia, nunca null",()=>{
  const E=engineComQuestoes();
  assert.deepStrictEqual(E.getQuestoes("demo","Mat A","A3"),[]);
  assert.deepStrictEqual(E.getQuestoes("demo","Mat B","B1"),[]);
  assert.deepStrictEqual(E.getQuestoes("outroEdital","Mat A","A1"),[]);
  assert.strictEqual(E.temQuestoes("demo","Mat A","A3"),false);
});

test("contarQuestoes: soma por matéria e conta tópicos cobertos",()=>{
  const E=engineComQuestoes();
  const c=E.contarQuestoes("demo",FIX_EDITAIS);
  assert.strictEqual(c.total,3);
  assert.strictEqual(c.porMateria["Mat A"],3);
  assert.strictEqual(c.porMateria["Mat B"],0);
  assert.strictEqual(c.topicosComQuestao,2);
});

test("listarQuestoes: filtra por tópico, por nível e por uso",()=>{
  const E=engineComQuestoes();
  assert.strictEqual(E.listarQuestoes("demo",{},FIX_EDITAIS).length,3);
  assert.strictEqual(E.listarQuestoes("demo",{topico:"A1"},FIX_EDITAIS).length,2);
  assert.strictEqual(E.listarQuestoes("demo",{niveis:[1]},FIX_EDITAIS).length,1);
  assert.strictEqual(E.listarQuestoes("demo",{niveis:[1,3]},FIX_EDITAIS).length,2);
  assert.strictEqual(E.listarQuestoes("demo",{usarEm:"simulado"},FIX_EDITAIS).length,2);
  assert.strictEqual(E.listarQuestoes("demo",{usarEm:"revisao"},FIX_EDITAIS).length,2);
  assert.strictEqual(E.listarQuestoes("demo",{materia:"Mat B"},FIX_EDITAIS).length,0);
  assert.strictEqual(E.listarQuestoes("demo",{limite:1},FIX_EDITAIS).length,1);
  // devolve o par matéria + tópico junto, para a tela não ter de procurar
  const r=E.listarQuestoes("demo",{topico:"A2"},FIX_EDITAIS)[0];
  assert.strictEqual(r.mat,"Mat A"); assert.strictEqual(r.top,"A2");
});

test("listarQuestoes: aceita vários tópicos de uma vez",()=>{
  const E=engineComQuestoes();
  assert.strictEqual(E.listarQuestoes("demo",{topicos:["A1"]},FIX_EDITAIS).length,2);
  assert.strictEqual(E.listarQuestoes("demo",{topicos:["A1","A2"]},FIX_EDITAIS).length,3);
  assert.strictEqual(E.listarQuestoes("demo",{topicos:["A2"]},FIX_EDITAIS).length,1);
  // lista vazia não filtra nada: é o estado "todos os tópicos"
  assert.strictEqual(E.listarQuestoes("demo",{topicos:[]},FIX_EDITAIS).length,3);
  // tópico inexistente não derruba, só devolve zero
  assert.strictEqual(E.listarQuestoes("demo",{topicos:["A9"]},FIX_EDITAIS).length,0);
});

test("listarQuestoes: vários tópicos aceitam o par matéria + tópico",()=>{
  const E=engineComQuestoes();
  assert.strictEqual(E.listarQuestoes("demo",{topicos:[{mat:"Mat A",top:"A1"}]},FIX_EDITAIS).length,2);
  // par com a matéria errada não casa, mesmo com o nome do tópico certo
  assert.strictEqual(E.listarQuestoes("demo",{topicos:[{mat:"Mat B",top:"A1"}]},FIX_EDITAIS).length,0);
  // tolerante a acento e caixa, como o resto do engine
  assert.strictEqual(E.listarQuestoes("demo",{topicos:[{mat:" mat a ",top:"a1"}]},FIX_EDITAIS).length,2);
});

test("listarQuestoes: vários tópicos combinam com os outros filtros",()=>{
  const E=engineComQuestoes();
  assert.strictEqual(E.listarQuestoes("demo",{topicos:["A1","A2"],niveis:[1]},FIX_EDITAIS).length,1);
  assert.strictEqual(E.listarQuestoes("demo",{topicos:["A1","A2"],usarEm:"simulado"},FIX_EDITAIS).length,2);
  assert.strictEqual(E.listarQuestoes("demo",{topicos:["A1"],materia:"Mat B"},FIX_EDITAIS).length,0);
});

test("registrarResposta: acumula tentativas e acertos por id",()=>{
  const st=baseState(); const E=engineComQuestoes(st);
  E.registrarResposta("d-a1-q1","c",false,"2026-02-01");
  let h=E.statusQuestao("d-a1-q1");
  assert.strictEqual(h.n,1); assert.strictEqual(h.ok,0);
  assert.strictEqual(h.ultimaCerta,false); assert.strictEqual(h.ultimaOpcao,"c");
  assert.strictEqual(h.ultima,"2026-02-01");
  E.registrarResposta("d-a1-q1","b",true,"2026-02-02");
  h=E.statusQuestao("d-a1-q1");
  assert.strictEqual(h.n,2); assert.strictEqual(h.ok,1); assert.strictEqual(h.ultimaCerta,true);
  assert.strictEqual(E.statusQuestao("nao-existe"),null);
});

test("listarQuestoes: soErradas e soNaoRespondidas olham o histórico",()=>{
  const st=baseState(); const E=engineComQuestoes(st);
  E.registrarResposta("d-a1-q1","c",false,"2026-02-01");   // errou
  E.registrarResposta("d-a1-q2","f",true ,"2026-02-01");   // acertou
  const erradas=E.listarQuestoes("demo",{soErradas:true},FIX_EDITAIS);
  assert.deepStrictEqual(erradas.map(r=>r.q.id),["d-a1-q1"]);
  const novas=E.listarQuestoes("demo",{soNaoRespondidas:true},FIX_EDITAIS);
  assert.deepStrictEqual(novas.map(r=>r.q.id),["d-a2-q1"]);
  // acertar de novo tira a questão da lista de erradas
  E.registrarResposta("d-a1-q1","b",true,"2026-02-03");
  assert.strictEqual(E.listarQuestoes("demo",{soErradas:true},FIX_EDITAIS).length,0);
});

/* ── Dia recuperado (05/09/2026) ─────────────────────────────────────
   O aluno faltou e mandou o conteúdo para o Retorno Técnico. A marca é
   `recuperado`, SEM nota: o conteúdo volta pela fila de revisão, mas não
   conta como estudado. Se isto quebrar, ou o conteúdo some da revisão, ou
   passa a inflar a cobertura do edital. */
test("calcRevisoes: dia recuperado entra na fila mesmo sem percepcao",()=>{
  const E=freshEngine(baseState({dias:{
    "2026-01-06":{recuperado:true},                 // não estudado, mandado para revisão
    "2026-01-07":{percepcao:"media"}                // estudado normalmente
  }}),FIX_EDITAIS);
  const {rev7}=E.calcRevisoes("2026-01-20");
  const keys=rev7.map(r=>r.key).sort();
  assert.deepStrictEqual(keys,["2026-01-06","2026-01-07"]);
  const rec=rev7.find(r=>r.key==="2026-01-06");
  assert.strictEqual(rec.recuperado,true);
  assert.strictEqual(rec.conf,"");                  // sem nota inventada
});

test("calcRevisoes: dia sem nota e sem recuperado continua fora da fila",()=>{
  const E=freshEngine(baseState({dias:{"2026-01-06":{},"2026-01-07":{skipped:true}}}),FIX_EDITAIS);
  const {rev7,rev30}=E.calcRevisoes("2026-01-20");
  assert.strictEqual(rev7.length,0);
  assert.strictEqual(rev30.length,0);
});

test("calcRevisoes: recuperado também alimenta a revisão de 30 dias",()=>{
  const E=freshEngine(baseState({dias:{"2026-01-06":{recuperado:true}}}),FIX_EDITAIS);
  assert.strictEqual(E.calcRevisoes("2026-01-20").rev30.length,0);   // ainda cedo
  assert.strictEqual(E.calcRevisoes("2026-02-10").rev30.length,1);   // passou de 29 dias
});

/* ── calcPrazoConteudo: a Bússola sugere a data da prova a partir do plano ── */

test("calcPrazoConteudo: densidade é a capacidade da hora (45 min por tópico)",()=>{
  assert.strictEqual(freshEngine(baseState({horasDia:1}),FIX_EDITAIS).calcPrazoConteudo().density,1);
  assert.strictEqual(freshEngine(baseState({horasDia:3}),FIX_EDITAIS).calcPrazoConteudo().density,4);
  assert.strictEqual(freshEngine(baseState({horasDia:6}),FIX_EDITAIS).calcPrazoConteudo().density,8);
});

test("calcPrazoConteudo: prova sugerida é o fim do conteúdo mais 8 dias",()=>{
  // 15 tópicos, 4 por dia = 4 dias de conteúdo. Início seg 05/01 não conta
  // (Orientações do Coach), então o conteúdo fecha na sexta 09/01.
  const E=freshEngine(baseState({horasDia:3}),FIX_EDITAIS);
  const r=E.calcPrazoConteudo();
  assert.strictEqual(r.total,15);
  assert.strictEqual(r.diasConteudo,4);
  assert.strictEqual(r.fimConteudo,"2026-01-09");
  assert.strictEqual(r.provaSugerida,"2026-01-17");
  assert.strictEqual(r.diasCorridos,12);
});

test("calcPrazoConteudo: não depende da data da prova já salva",()=>{
  const semProva=freshEngine(baseState({horasDia:3,prova:null}),FIX_EDITAIS).calcPrazoConteudo();
  const comProva=freshEngine(baseState({horasDia:3,prova:"2026-06-01"}),FIX_EDITAIS).calcPrazoConteudo();
  assert.strictEqual(semProva.provaSugerida,comProva.provaSugerida);
});

test("calcPrazoConteudo: mais dias de descanso empurram a data da prova",()=>{
  const um=freshEngine(baseState({horasDia:1,diasLivres:[0]}),FIX_EDITAIS).calcPrazoConteudo();
  const tres=freshEngine(baseState({horasDia:1,diasLivres:[0,5,6]}),FIX_EDITAIS).calcPrazoConteudo();
  assert.ok(tres.provaSugerida>um.provaSugerida,
    `descanso maior deveria adiar: ${um.provaSugerida} -> ${tres.provaSugerida}`);
});

test("calcPrazoConteudo: menos horas por dia adiam a data da prova",()=>{
  const pouco=freshEngine(baseState({horasDia:1}),FIX_EDITAIS).calcPrazoConteudo();
  const muito=freshEngine(baseState({horasDia:6}),FIX_EDITAIS).calcPrazoConteudo();
  assert.ok(pouco.provaSugerida>muito.provaSugerida);
});

test("calcPrazoConteudo: devolve null sem início e sem dia de estudo",()=>{
  assert.strictEqual(freshEngine(baseState({inicio:""}),FIX_EDITAIS).calcPrazoConteudo(),null);
  assert.strictEqual(freshEngine(baseState({diasLivres:[0,1,2,3,4,5,6]}),FIX_EDITAIS).calcPrazoConteudo(),null);
});

/* ── calcAdiamentoProva: quanto a prova precisa andar para o perdido caber ── */

test("calcAdiamentoProva: cabendo no prazo, a prova não muda",()=>{
  // 15 tópicos, 4 por dia. Perdeu só a terça 06/01 (4 tópicos) e a prova é longe.
  const E=freshEngine(baseState({horasDia:3,prova:"2026-04-01"}),FIX_EDITAIS);
  const r=E.calcAdiamentoProva(["2026-01-06"],"2026-01-08");
  assert.strictEqual(r.topicos,4);
  assert.strictEqual(r.cabe,true);
  assert.strictEqual(r.dias,0);
  assert.strictEqual(r.provaNova,"2026-04-01");
});

test("calcAdiamentoProva: sem vaga suficiente, empurra a prova e diz quantos dias",()=>{
  // Prova colada: a Revisão Geral cai em 09/01, sobrando quase nenhuma vaga.
  const E=freshEngine(baseState({horasDia:3,prova:"2026-01-16"}),FIX_EDITAIS);
  const r=E.calcAdiamentoProva(["2026-01-06","2026-01-07"],"2026-01-08");
  assert.strictEqual(r.topicos,8);
  assert.strictEqual(r.cabe,false);
  assert.ok(r.dias>0,"deveria adiar");
  assert.ok(r.provaNova>r.provaAtual);
  // a nova prova respeita a Revisão Geral: último conteúdo + 8
  const oito=E.parseDate(r.ultimoConteudo); oito.setDate(oito.getDate()+8);
  assert.strictEqual(r.provaNova,E.fmt(oito));
});

test("calcAdiamentoProva: mais dias perdidos empurram mais a prova",()=>{
  const base={horasDia:3,prova:"2026-01-16"};
  const um=freshEngine(baseState(base),FIX_EDITAIS).calcAdiamentoProva(["2026-01-06"],"2026-01-08");
  const dois=freshEngine(baseState(base),FIX_EDITAIS).calcAdiamentoProva(["2026-01-06","2026-01-07"],"2026-01-08");
  assert.ok(dois.dias>=um.dias);
  assert.ok(dois.topicos>um.topicos);
});

test("calcAdiamentoProva: pula dia já estudado e dia que já tem extra",()=>{
  // 08 e 09/01 são conteúdo (posições 3 e 4); 13 e 14/01 reabrem o ciclo.
  // Ocupando 08 e 13, o quarto tópico é empurrado para o dia seguinte livre.
  const livre=freshEngine(baseState({horasDia:3,prova:"2026-01-30"}),FIX_EDITAIS)
    .calcAdiamentoProva(["2026-01-06"],"2026-01-08");
  const ocupado=freshEngine(baseState({horasDia:3,prova:"2026-01-30",
      dias:{"2026-01-08":{percepcao:"alta"}},
      extrasPorDia:{"2026-01-13":[{mat:"Mat A",top:"A1"}]}}),FIX_EDITAIS)
    .calcAdiamentoProva(["2026-01-06"],"2026-01-08");
  assert.strictEqual(livre.ultimoConteudo,"2026-01-14");
  assert.ok(ocupado.ultimoConteudo>livre.ultimoConteudo,
    `dia ocupado não podia virar vaga: ${livre.ultimoConteudo} -> ${ocupado.ultimoConteudo}`);
});

test("calcAdiamentoProva: devolve null sem prova e sem tópico a recuperar",()=>{
  assert.strictEqual(freshEngine(baseState({prova:null}),FIX_EDITAIS).calcAdiamentoProva(["2026-01-06"]),null);
  assert.strictEqual(freshEngine(baseState({prova:"2026-04-01"}),FIX_EDITAIS).calcAdiamentoProva([]),null);
  // 05/01 é o dia de Orientações do Coach: não carrega tópico
  assert.strictEqual(freshEngine(baseState({prova:"2026-04-01"}),FIX_EDITAIS).calcAdiamentoProva(["2026-01-05"]),null);
});
