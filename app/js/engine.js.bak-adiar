/* ════════════════════════════════════════════════════════════════
   BÚSSOLA DE ESTUDOS — ENGINE (núcleo de cálculo)
   Datas, ciclo 5+1+1, agendamento de tópicos, revisões e simulados.
   Sem DOM: carregável no navegador (script clássico) e no Node (testes).
   Depende dos globais STATE e EDITAIS, definidos pelo app.
   Testes: node --test tests/engine.test.js  (a partir da pasta app/)
   ════════════════════════════════════════════════════════════════ */

function fmt(d){ const y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,"0"),dd=String(d.getDate()).padStart(2,"0"); return `${y}-${m}-${dd}`; }
function parseDate(s){ const p=s.split("-"); return new Date(+p[0],+p[1]-1,+p[2]); }

function isDiaLivre(dow){ return (STATE.diasLivres||[]).includes(dow); }
function isDiaEstudo(dow){ return !isDiaLivre(dow); }

// Posição no ciclo 5+1+1 para uma dateKey (conta dias disponíveis desde inicio)
// Retorna: 0-4=conteúdo, 5=Retorno Técnico, 6=Exercícios, -1=dia livre ou antes do início
// Memoizado (B9): cache por dateKey, invalidado quando inicio/diasLivres mudam.
let _cicloCache=new Map(), _cicloSig="";
function _engineSig(){ return (STATE.inicio||"")+"|"+((STATE.diasLivres||[]).join(",")); }
function getCicloPos(dateKey){
  if(!STATE.inicio||dateKey<STATE.inicio) return -1;
  const sig=_engineSig();
  if(sig!==_cicloSig){ _cicloCache.clear(); _cicloSig=sig; }
  if(_cicloCache.has(dateKey)) return _cicloCache.get(dateKey);
  const diasLivres=STATE.diasLivres||[];
  const d=parseDate(dateKey);
  let pos;
  if(diasLivres.includes(d.getDay())) pos=-1;
  else{
    const ini=parseDate(STATE.inicio);
    let avail=0;
    for(let x=new Date(ini);fmt(x)<dateKey;x.setDate(x.getDate()+1)){
      if(!diasLivres.includes(x.getDay())) avail++;
    }
    pos=avail%7; // 0-4=conteúdo, 5=retorno, 6=exercícios
  }
  _cicloCache.set(dateKey,pos);
  return pos;
}

// Nº da revisão (dia de Exercícios) até a data — memoizado (B9)
let _numRevCache=new Map(), _numRevSig="";
function getNumRevisao(dateKey){
  if(!STATE.inicio) return 1;
  const sig=_engineSig();
  if(sig!==_numRevSig){ _numRevCache.clear(); _numRevSig=sig; }
  if(_numRevCache.has(dateKey)) return _numRevCache.get(dateKey);
  let count=0;
  let d=parseDate(STATE.inicio);
  while(fmt(d)<=dateKey){
    if(getCicloPos(fmt(d))===6) count++;
    d.setDate(d.getDate()+1);
  }
  const out=Math.max(1, count);
  _numRevCache.set(dateKey,out);
  return out;
}

function getMaterias(){ const ed=EDITAIS[STATE.prefeitura]||EDITAIS[Object.keys(EDITAIS)[0]]; return ed?JSON.parse(JSON.stringify(ed.materias)):[]; }
function getTopicos(){ const ed=EDITAIS[STATE.prefeitura]||EDITAIS[Object.keys(EDITAIS)[0]]; return ed?ed.topicos:{}; }

function getExtrasDoDia(dateKey){ return (STATE.extrasPorDia||{})[dateKey]||[]; }

// Todos os tópicos de um dia: base (densidade dinâmica) + extras de recuperação
function getTopicosDoDia(dateKey){
  const out=[...getTopicosDiaBase(dateKey)];
  getExtrasDoDia(dateKey).forEach(t=>out.push(t));
  return out;
}

function getTopicoDiaByKey(dateKey){
  // Wrapper backward-compat: retorna apenas o 1º tópico do dia
  const tops=getTopicosDiaBase(dateKey);
  return tops.length?tops[0]:null;
}

/* Densidade de tópicos/dia — FONTE ÚNICA usada pelo agendamento real
   (getTopicosDiaBase) e pelo esperado do mapa de calor (calcExpectedPerSubject). */
function _densityFor(todos){
  const diasLivres=STATE.diasLivres||[];
  const ini=parseDate(STATE.inicio); ini.setHours(0,0,0,0);
  let totalContent=0, avail=0;
  const _lim=getLimiteConteudo();
  if(_lim){
    for(let x=new Date(ini);x<_lim;x.setDate(x.getDate()+1)){
      if(!diasLivres.includes(x.getDay())){ if(avail%7<=4&&fmt(x)!==STATE.inicio) totalContent++; avail++; }
    }
    totalContent=Math.max(1,totalContent);
  } else { totalContent=Math.max(1,todos.length); }
  // Base de 45 min por topico (revisto pelo dono em 31/08/2026 apos testar):
  // 30 min nao cobre ler o conteudo mais revisar e fazer exercicio, e 4 topicos
  // em 2h ficou denso demais. Com 45 min, 2h/dia = 2 topicos, 3h = 4, 4h = 5.
  // Sem teto arbitrario — quem limita e a hora disponivel, nao um numero magico.
  const maxByHoras=Math.max(1,Math.floor((STATE.horasDia||3)/MIN_POR_TOPICO_H));
  /* Densidade = CAPACIDADE da hora, e nao o minimo necessario para caber no
     prazo (decisao do dono em 31/08/2026). O objetivo e terminar o conteudo o
     quanto antes e sobrar tempo para revisitar. Antes era
     Math.min(maxByHoras, necessario), o que espichava o conteudo ate a prova.
     Consequencia: coberto todo o edital, getTopicosDiaBase da a volta na lista
     (o `% todos.length`) e comeca uma segunda passagem. */
  return maxByHoras;
}

/* Horas por topico: 45 min, cobrindo leitura + revisao + exercicio.
   Fonte unica: mudou aqui, mudou no agendamento, no esperado do mapa de calor
   e no diagnostico de cobertura. */
const MIN_POR_TOPICO_H=0.75;

/* Quando o conteudo termina, e ate quando a prova poderia ser antecipada.
   Com a densidade na capacidade da hora, quem estuda bastante fecha o edital
   muito antes da Revisao Geral. Isso nao e problema: e uma oportunidade de
   marcar a prova mais cedo. Esta funcao calcula a data mais cedo possivel,
   respeitando o encadeamento: ultimo conteudo, Revisao Geral no dia +7, prova
   no dia +8.
   Devolve null quando nao ha prova definida ou quando o edital nao cabe. */
function calcAntecipacao(){
  if(!STATE.inicio||!STATE.prova) return null;
  const materias=getMaterias();
  const topicos=getTopicos();
  let total=0; materias.forEach(m=>total+=(topicos[m.nome]||[]).length);
  if(!total) return null;

  const lim=getLimiteConteudo();
  if(!lim) return null;
  const density=_densityFor(new Array(total));
  const diasNecessarios=Math.ceil(total/density);

  // Caminha o calendario UMA vez contando dias de conteudo ate fechar o edital.
  const diasLivres=STATE.diasLivres||[];
  const ini=parseDate(STATE.inicio); ini.setHours(0,0,0,0);
  let n=0, av=0, fim=null;
  for(let x=new Date(ini);x<lim;x.setDate(x.getDate()+1)){
    if(diasLivres.includes(x.getDay())) continue;
    if(av%7<=4&&fmt(x)!==STATE.inicio){ n++; if(n>=diasNecessarios){ fim=fmt(x); break; } }
    av++;
  }
  if(!fim) return null;                      // nao fecha dentro do prazo

  // prova = ultimo dia de conteudo + 8 (Revisao Geral cai em +7)
  const pm=parseDate(fim); pm.setDate(pm.getDate()+8);
  const provaMinima=fmt(pm);
  const diasFolga=Math.round((parseDate(STATE.prova)-pm)/86400000);
  return {fimConteudo:fim,provaMinima,diasFolga,
          semanasFolga:Math.floor(diasFolga/7),
          podeAntecipar:diasFolga>=14};
}

/* Prazo do conteudo a partir do PLANO, sem depender da data da prova.
   E o que permite a Bussola SUGERIR a data do exame em vez de pedir que o
   aluno adivinhe. A conta e a mesma de calcAntecipacao, so que sem teto:
   density = capacidade da hora; dias de conteudo = total / density; caminha
   o calendario respeitando os dias de descanso e o ciclo 5+1+1 (posicoes 0 a 4
   sao conteudo); o primeiro dia nao conta, e Orientacoes do Coach.
   provaSugerida = ultimo dia de conteudo + 8, porque a Revisao Geral cai em +7.
   Devolve null sem inicio, sem edital ou com a semana toda de descanso. */
function calcPrazoConteudo(){
  if(!STATE.inicio) return null;
  const materias=getMaterias();
  const topicos=getTopicos();
  let total=0; materias.forEach(m=>total+=(topicos[m.nome]||[]).length);
  if(!total) return null;
  const diasLivres=STATE.diasLivres||[];
  if(diasLivres.length>=7) return null;
  const density=Math.max(1,Math.floor((STATE.horasDia||3)/MIN_POR_TOPICO_H));
  const diasNecessarios=Math.ceil(total/density);
  const ini=parseDate(STATE.inicio); ini.setHours(0,0,0,0);
  let n=0, av=0, fim=null;
  const x=new Date(ini);
  for(let guard=0;guard<3650;guard++){
    if(!diasLivres.includes(x.getDay())){
      if(av%7<=4&&fmt(x)!==STATE.inicio){ n++; if(n>=diasNecessarios){ fim=fmt(x); break; } }
      av++;
    }
    x.setDate(x.getDate()+1);
  }
  if(!fim) return null;
  const pv=parseDate(fim); pv.setDate(pv.getDate()+8);
  return {total,density,diasConteudo:diasNecessarios,
          fimConteudo:fim,provaSugerida:fmt(pv),
          diasCorridos:Math.round((pv-ini)/86400000)};
}

/* Diagnostico de cobertura do edital.
   Responde a pergunta que o aluno nao tinha como fazer: "com esta data de prova
   e estas horas por dia, eu termino o edital?" Devolve tudo o que a UI precisa
   para avisar, inclusive QUAIS materias ficam de fora.
   Antes desta funcao o excedente era descartado em silencio. */
function calcCoberturaEdital(){
  const materias=getMaterias().slice().sort((a,b)=>b.peso-a.peso);
  const topicos=getTopicos();
  const todos=[];
  materias.forEach(m=>(topicos[m.nome]||[]).forEach(t=>todos.push({mat:m.nome,top:t})));
  const total=todos.length;
  if(!total||!STATE.inicio) return {cobre:true,total:0,agendados:0,faltam:0,materias:[]};

  const diasLivres=STATE.diasLivres||[];
  const ini=parseDate(STATE.inicio); ini.setHours(0,0,0,0);
  const _lim=getLimiteConteudo();
  // Conta so ate a Revisao Geral: a semana final e de treino, nao de conteudo.
  function _contarDias(livres){
    if(!_lim) return 0;
    let n=0, av=0;
    for(let x=new Date(ini);x<_lim;x.setDate(x.getDate()+1)){
      if(!livres.includes(x.getDay())){ if(av%7<=4&&fmt(x)!==STATE.inicio) n++; av++; }
    }
    return n;
  }
  let diasConteudo=Math.max(0,_contarDias(diasLivres));

  const density=_densityFor(todos);
  const agendados=STATE.prova?Math.min(total,diasConteudo*density):total;
  const faltam=total-agendados;

  // Quais materias ficam de fora, e quanto de cada uma.
  // O corte e sempre na CAUDA da lista, que esta ordenada por peso decrescente:
  // por isso quem some primeiro e a materia de MENOR peso, e ela some inteira.
  const porMateria={};
  materias.forEach(m=>porMateria[m.nome]={nome:m.nome,peso:m.peso,total:(topicos[m.nome]||[]).length,agendados:0});
  for(let i=0;i<agendados;i++) porMateria[todos[i].mat].agendados++;
  const fora=Object.values(porMateria)
    .filter(m=>m.agendados<m.total)
    .map(m=>({nome:m.nome,peso:m.peso,total:m.total,agendados:m.agendados,faltam:m.total-m.agendados}));

  // Horas por dia necessarias para cobrir tudo no prazo atual.
  const densNecessaria=diasConteudo>0?Math.ceil(total/diasConteudo):0;
  const horasNecessarias=densNecessaria*MIN_POR_TOPICO_H;

  // ── Sugestoes concretas, para o aviso nao ser so um diagnostico ──
  // (a) mais horas por dia: numero exato.
  // (b) menos dias de descanso: quanto se ganharia zerando os dias livres.
  // (c) mais prazo: cada semana do ciclo 5+1+1 rende 5 dias de conteudo.
  const diasSemLivres=_contarDias([]);
  const cabeSemLivres=Math.min(total,diasSemLivres*density);
  const sugestoes={
    horas:{necessarias:horasNecessarias,atuais:(STATE.horasDia||3),
           basta:horasNecessarias>(STATE.horasDia||3)},
    diasLivres:{atuais:diasLivres.length,ganho:Math.max(0,cabeSemLivres-agendados),
                resolve:cabeSemLivres>=total},
    prazo:{semanasAMais:Math.max(1,Math.ceil((faltam/density)/5))}
  };
  return {cobre:faltam===0,total,agendados,faltam,diasConteudo,density,
          densNecessaria,horasNecessarias,horasAtuais:(STATE.horasDia||3),
          limiteConteudo:_lim?fmt(_lim):null,sugestoes,materias:fora};
}

/* Retorna TODOS os tópicos base do dia (densidade dinâmica):
   - density = ceil(totalTopics / contentDays), limitado por horasDia
   - Prioriza matérias de maior peso (Conhecimentos Específicos primeiro)
   - Garante cobertura 100% mesmo com início tardio              */
function getTopicosDiaBase(dateKey){
  if(!STATE.inicio||dateKey<STATE.inicio) return [];
  // Conteudo novo termina na Revisao Geral; dali ate a prova e so treino.
  const _lim=getLimiteConteudo();
  if(_lim&&dateKey>=fmt(_lim)) return [];
  const pos=getCicloPos(dateKey);
  if(pos<0||pos>4) return [];
  // Dia 1 é sempre Orientações do Coach — não recebe tópicos de conteúdo
  if(dateKey===STATE.inicio) return [];
  // Lista de tópicos ordenada por peso decrescente (priorização)
  const materias=getMaterias().slice().sort((a,b)=>b.peso-a.peso);
  const topicos=getTopicos();
  const todos=[];
  materias.forEach(m=>(topicos[m.nome]||[]).forEach(t=>todos.push({mat:m.nome,top:t,peso:m.peso})));
  if(!todos.length) return [{mat:"Revisão Geral",top:"Conteúdo do Dia",peso:10}];
  const diasLivres=STATE.diasLivres||[];
  const ini=parseDate(STATE.inicio); ini.setHours(0,0,0,0);
  const density=_densityFor(todos);
  // Índice do dia de conteúdo atual
  let avail=0, conteudo=0;
  for(let x=new Date(ini);fmt(x)<dateKey;x.setDate(x.getDate()+1)){
    if(!diasLivres.includes(x.getDay())){ if(avail%7<=4&&fmt(x)!==STATE.inicio) conteudo++; avail++; }
  }
  const startIdx=(conteudo*density)%todos.length;
  const result=[];
  for(let i=0;i<density;i++) result.push(todos[(startIdx+i)%todos.length]);
  return result;
}

function calcExpectedPerSubject(hojeKey){
  // B5 corrigido: replica exatamente a regra de getTopicosDiaBase
  // (mesma densidade via _densityFor, mesma ordem por peso, Dia 1 excluído).
  if(!STATE.inicio) return {};
  hojeKey=hojeKey||fmt(new Date());
  const materias=getMaterias().slice().sort((a,b)=>b.peso-a.peso);
  const topicos=getTopicos();
  const todos=[];
  materias.forEach(m=>(topicos[m.nome]||[]).forEach(t=>todos.push({mat:m.nome,top:t})));
  if(!todos.length) return {};
  // dias de conteúdo decorridos até hoje (pos 0-4, excluindo o Dia 1)
  let conteudo=0;
  let d=parseDate(STATE.inicio);
  while(fmt(d)<=hojeKey){
    const k=fmt(d);
    const pos=getCicloPos(k);
    if(pos>=0&&pos<=4&&k!==STATE.inicio) conteudo++;
    d.setDate(d.getDate()+1);
  }
  const density=_densityFor(todos);
  const agendados=Math.min(todos.length, conteudo*density);
  const scheduled={};
  materias.forEach(m=>scheduled[m.nome]=0);
  for(let i=0;i<agendados;i++) scheduled[todos[i].mat]++;
  const result={};
  materias.forEach(m=>{
    const total=(topicos[m.nome]||[]).length||1;
    result[m.nome]=Math.min(100,Math.round((scheduled[m.nome]/total)*100));
  });
  return result;
}

function calcRevisoes(hojeRef){
  // B6 corrigido: revisão pendente NÃO some ao passar da janela —
  // permanece listada (marcada como atrasada) até ser feita.
  const hoje=hojeRef?parseDate(hojeRef):new Date(); hoje.setHours(0,0,0,0);
  const rev7=[], rev30=[];
  Object.entries(STATE.dias).forEach(([k,v])=>{
    /* Dia RECUPERADO entra na fila de revisão mesmo sem nota. É o dia que o aluno
       não estudou e mandou para a revisão em vez de pular. Ele não tem percepcao
       de propósito: sem nota inventada, o conteúdo não conta como coberto no
       edital nem contamina o domínio por matéria. O que ele precisa é voltar,
       e é só isso que esta linha garante. */
    if(!v.percepcao&&!v.recuperado) return;
    const d=parseDate(k); d.setHours(0,0,0,0);
    const diff=Math.round((hoje-d)/86400000);
    const td=getTopicoDiaByKey(k)||{mat:null,top:null};
    const {mat,top}=td;
    if(!mat) return;
    if(diff>=6 && !v.rev7feito){
      rev7.push({mat,top,key:k,conf:v.percepcao||"",recuperado:!!v.recuperado,diffReal:diff,atrasada:diff>8});
    }
    if(diff>=29 && !v.rev30feito){
      rev30.push({mat,top,key:k,conf:v.percepcao||"",recuperado:!!v.recuperado,diffReal:diff,atrasada:diff>31});
    }
  });
  return {rev7,rev30};
}

function getPrevNonFreeDay(dateKey){
  const diasLivres=STATE.diasLivres||[];
  let d=parseDate(dateKey); d.setDate(d.getDate()-1);
  for(let i=0;i<14;i++){
    if(!diasLivres.includes(d.getDay())) return fmt(d);
    d.setDate(d.getDate()-1);
  }
  return null;
}

function isSimuladoDay(dateKey){
  if(!STATE.inicio||dateKey<=STATE.inicio) return false;
  if(STATE.prova&&dateKey>STATE.prova) return false;
  const diasLivres=STATE.diasLivres||[];
  if(diasLivres.includes(parseDate(dateKey).getDay())) return false;
  const prev=getPrevNonFreeDay(dateKey);
  if(!prev||prev<STATE.inicio) return false;
  if(getCicloPos(prev)!==6) return false;
  const revN=getNumRevisao(prev);
  return revN>0&&revN%3===0;
}


function getTopicosFracos(seg){
  // Procura o dia de Retorno Técnico (ciclo pos 5) nesta semana
  let rtDate=null;
  for(let i=0;i<7;i++){
    const d=new Date(seg); d.setDate(d.getDate()+i);
    if(getCicloPos(fmt(d))===5){ rtDate=new Date(d); break; }
  }
  // Se não encontrou, busca para trás (ex.: exercícios caem na segunda)
  if(!rtDate&&STATE.inicio){
    for(let i=1;i<=14;i++){
      const d=new Date(seg); d.setDate(d.getDate()-i);
      if(fmt(d)<STATE.inicio) break;
      if(getCicloPos(fmt(d))===5){ rtDate=new Date(d); break; }
    }
  }
  /* Coleta os 5 DIAS de conteúdo que precedem o RT (podem cruzar semanas).
     CORREÇÃO: o limite conta dias, não tópicos — em dias multi-tópico
     (densidade > 1) o limite antigo estourava antes de alcançar os
     primeiros dias da semana, e eles sumiam do Retorno Técnico.
     O Dia 1 (Orientações do Coach) não entra: não tem tópico de conteúdo. */
  if(rtDate&&STATE.inicio){
    const out=[];
    const ini=parseDate(STATE.inicio); ini.setHours(0,0,0,0);
    let d=new Date(rtDate); d.setDate(d.getDate()-1);
    let diasColetados=0;
    while(diasColetados<5&&d>=ini){
      const k=fmt(d);
      const pos=getCicloPos(k);
      if(pos>=0&&pos<=4&&k!==STATE.inicio){
        const est=STATE.dias[k]||{};
        const multiTops=getTopicosDoDia(k);
        if(multiTops.length>1){
          multiTops.forEach((t,ti)=>{ const nivel=(est.percepcoes||{})[ti]||null; out.unshift({key:k,mat:t.mat,top:t.top,est,perc:nivel,text:`${t.mat}: ${t.top}`,topIdx:ti}); });
        } else {
          const td=multiTops[0]||getTopicoDiaByKey(k)||{mat:"Revisão Geral",top:"Conteúdo do Dia"};
          out.unshift({key:k,mat:td.mat,top:td.top,est,perc:est.percepcao||null,text:`${td.mat}: ${td.top}`});
        }
        diasColetados++;
      }
      d.setDate(d.getDate()-1);
    }
    if(out.length>0) return out;
  }
  // Fallback: 5 primeiros dias da semana exibida
  const out=[];
  for(let i=0;i<5;i++){
    const d=new Date(seg); d.setDate(d.getDate()+i);
    const k=fmt(d);
    const est=STATE.dias[k]||{};
    const td=getTopicoDiaByKey(k)||{mat:"Revisão Geral",top:"Conteúdo do Dia"};
    out.push({key:k,mat:td.mat,top:td.top,est,perc:est.percepcao||null,text:`${td.mat}: ${td.top}`});
  }
  return out;
}

function isProvaDay(dateKey){
  return !!(STATE.prova&&dateKey===STATE.prova);
}
function isRevisaoGeralDay(dateKey){
  if(!STATE.prova||!STATE.inicio) return false;
  const prova=parseDate(STATE.prova);
  const rv=new Date(prova); rv.setDate(rv.getDate()-7);
  return fmt(rv)===dateKey && dateKey!==STATE.prova && dateKey>=STATE.inicio;
}

/* Ultimo dia util para CONTEUDO NOVO.
   Decisao do dono em 31/08/2026: todo o conteudo tem de terminar ate a
   Revisao Geral (o simulado completo, 7 dias antes da prova). A semana entre
   a Revisao Geral e a prova fica so para exercicios e treino.
   Fonte unica: usada pelo agendamento (getTopicosDiaBase), pela densidade
   (_densityFor) e pelo diagnostico (calcCoberturaEdital). */
function getLimiteConteudo(){
  if(!STATE.prova) return null;
  const prova=parseDate(STATE.prova);
  const rv=new Date(prova); rv.setDate(rv.getDate()-7);
  return rv;
}

// Dia está na semana final (entre a Revisão Geral e a prova)?
// Usado pela visão mensal e pelo badge "Hoje" — nesses dias não há tópico regular.
function isRetaFinalDay(dateKey){
  if(!STATE.prova||!STATE.inicio) return false;
  const prova=parseDate(STATE.prova);
  const rv=new Date(prova); rv.setDate(rv.getDate()-7);
  return dateKey>fmt(rv)&&dateKey<STATE.prova&&dateKey>=STATE.inicio;
}

/* ── EXPORTAR PARA AGENDA (.ics, RFC 5545) ──
   Gera os eventos da SEMANA escolhida em formato iCalendar.
   Semana curta por design: se o cronograma mudar, o aluno reexporta
   na segunda-feira — a agenda nunca fica meses desatualizada.
   UIDs estáveis por data: reimportar no mesmo calendário ATUALIZA
   os eventos em vez de duplicar. */
const AGENDA_PAINEL_LINK="https://bussoladeestudos.com.br/app/";
function _icsEsc(s){ return String(s||"").replace(/\\/g,"\\\\").replace(/;/g,"\\;").replace(/,/g,"\\,").replace(/\r?\n/g,"\\n"); }
function _icsFold(line){
  let out="";
  while(line.length>73){ out+=line.slice(0,73)+"\r\n "; line=line.slice(73); }
  return out+line;
}
function buildAgendaSemanaICS(segKey,horaInicio){
  const seg=parseDate(segKey);
  const partes=(horaInicio||"19:00").split(":");
  const hh=Math.min(23,Math.max(0,parseInt(partes[0])||19));
  const mm=Math.min(59,Math.max(0,parseInt(partes[1])||0));
  const durH=Math.max(1,Math.min(6,parseInt(STATE.horasDia)||2));
  const fimH=Math.min(23,hh+durH);
  const eventos=[];
  for(let i=0;i<7;i++){
    const d=new Date(seg); d.setDate(d.getDate()+i);
    const k=fmt(d);
    let titulo=null,desc="";
    if(isProvaDay(k)){ titulo="🏆 DIA DA PROVA"; desc="É o grande dia. Respire fundo e confie no processo."; }
    else if(isRevisaoGeralDay(k)){ titulo="📋 Revisão Geral — Simulado Completo"; desc="Simule a prova no formato real e registre o resultado no painel."; }
    else if(isSimuladoDay(k)){ titulo="🎯 Mini Simulado — Bússola"; desc="Resolva ~20 questões dos temas das últimas revisões e registre seus acertos."; }
    else{
      const pos=getCicloPos(k);
      if(pos===-1) continue; // dia livre: sem evento
      if(pos===5){ titulo="⚡ Retorno Técnico — Bússola"; desc="Reavalie a confiança dos tópicos estudados na semana."; }
      else if(pos===6){ titulo="📝 Exercícios de Revisão — Bússola"; desc="Pratique questões dos ciclos encerrados. Não releia: resolva."; }
      else{
        const tops=getTopicosDoDia(k);
        if(!tops.length){ titulo="🧭 Dia 1 — Leitura do Edital"; desc="Leia o edital na íntegra e estude a Análise da Banca no painel."; }
        else{
          titulo="📚 "+tops[0].mat+": "+tops[0].top+(tops.length>1?" (+"+(tops.length-1)+")":"");
          desc="Tópico do dia: "+tops.map(t=>t.mat+" — "+t.top).join(" · ")+".";
        }
      }
    }
    eventos.push({k,titulo,desc});
  }
  const agora=new Date();
  const stamp=fmt(agora).replace(/-/g,"")+"T"+String(agora.getHours()).padStart(2,"0")+String(agora.getMinutes()).padStart(2,"0")+"00";
  const H=String(hh).padStart(2,"0"),M=String(mm).padStart(2,"0"),FH=String(fimH).padStart(2,"0");
  let ics="BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Bussola de Estudos//Agenda Semanal//PT-BR\r\nCALSCALE:GREGORIAN\r\n";
  eventos.forEach(ev=>{
    const dt=ev.k.replace(/-/g,"");
    const descComLink=ev.desc+"\n\nPronto para focar? Acesse seu painel: "+AGENDA_PAINEL_LINK;
    ics+="BEGIN:VEVENT\r\n"
      +"UID:bussola-"+ev.k+"@bussoladeestudos.com.br\r\n"
      +"DTSTAMP:"+stamp+"\r\n"
      +"DTSTART:"+dt+"T"+H+M+"00\r\n"
      +"DTEND:"+dt+"T"+FH+M+"00\r\n"
      +_icsFold("SUMMARY:"+_icsEsc(ev.titulo))+"\r\n"
      +_icsFold("DESCRIPTION:"+_icsEsc(descComLink))+"\r\n"
      +"BEGIN:VALARM\r\nACTION:DISPLAY\r\nDESCRIPTION:Hora de estudar — Bússola\r\nTRIGGER:-PT15M\r\nEND:VALARM\r\n"
      +"END:VEVENT\r\n";
  });
  ics+="END:VCALENDAR\r\n";
  return {ics,eventos};
}

/* Agregação das notas por tópico (dias multi-tópico).
   O dia só é considerado concluído quando TODOS os tópicos têm nota;
   o agregado é a PIOR nota — mesma regra de getDayPercepcao (ui.js). */
function aggregateEstrelas(estrelasList,totalTopicos){
  const notas=Object.values(estrelasList||{}).filter(n=>n>0);
  if(totalTopicos<1||notas.length<totalTopicos) return null;
  return Math.min(...notas);
}

/* ── HÁBITO E CONSISTÊNCIA (dashboard) ──
   Puro, sem DOM. Regra comum: dia livre planejado NUNCA conta como falha
   (o método prevê até 4 dias livres/semana). Todas aceitam hojeRef (ISO)
   para os testes — no app, omitido = hoje real. */
function _diaPrevisto(dateKey){
  if(!STATE.inicio||dateKey<STATE.inicio) return false;
  if(STATE.prova&&dateKey>STATE.prova) return false;
  return !isDiaLivre(parseDate(dateKey).getDay());
}
/* Um dia do plano é CUMPRIDO por qualquer entrega prevista para ele:
   conteúdo novo (percepcao), Retorno Técnico (rtFeito), mini simulado
   (simuladoFeito) ou Revisão Geral (revisaoGeralFeita). Sem isso, sábados
   de RT e dias de simulado apareciam como falha mesmo tendo sido feitos. */
function _diaFeito(dateKey){
  const e=(STATE.dias||{})[dateKey]||{};
  return !!(e.percepcao||e.rtFeito||e.simuladoFeito||e.revisaoGeralFeita);
}

/* Sequência atual, recorde e ESCUDO DE SEQUÊNCIA: uma falha por mês é
   perdoada (não zera a corrente, mas também não soma). Sem isso, a
   gamificação vira fonte de culpa — e aluno culpado abandona o app.
   recordeAnterior = maior sequência JÁ FECHADA, usada como alvo a bater. */
const MARCOS_SEQUENCIA=[7,14,21,30,60,100];
function calcStreaks(hojeRef){
  const vazio={atual:0,recorde:0,recordeAnterior:0,escudoUsado:false,perdoados:0};
  if(!STATE.inicio) return vazio;
  const hojeKey=hojeRef||fmt(new Date());
  let recorde=0,recordeAnterior=0,corrente=0,perdoados=0,escudoUsado=false;
  const escudoMes={};
  const fim=parseDate(hojeKey);
  for(let x=parseDate(STATE.inicio); x<=fim; x.setDate(x.getDate()+1)){
    const k=fmt(x);
    if(!_diaPrevisto(k)) continue;
    if(_diaFeito(k)){
      corrente++; if(corrente>recorde) recorde=corrente;
      continue;
    }
    if(k===hojeKey) continue;             // hoje pendente não quebra nada
    const mes=k.slice(0,7);
    if(corrente>0&&!escudoMes[mes]){      // escudo do mês: perdoa 1 falha
      escudoMes[mes]=true; perdoados++;
      if(mes===hojeKey.slice(0,7)) escudoUsado=true;
      continue;
    }
    if(corrente>recordeAnterior) recordeAnterior=corrente;
    corrente=0;
  }
  return {atual:corrente,recorde:recorde,recordeAnterior:recordeAnterior,
    escudoUsado:escudoUsado,perdoados:perdoados};
}

/* Medalhas de marco: conquistadas pelo recorde; a próxima é medida contra a
   sequência atual, para virar meta de curto prazo. */
function calcMarcos(atual,recorde){
  const conquistados=MARCOS_SEQUENCIA.filter(function(m){return recorde>=m;});
  const proximo=MARCOS_SEQUENCIA.find(function(m){return m>atual;})||null;
  return {lista:MARCOS_SEQUENCIA.slice(),conquistados:conquistados,
    proximo:proximo,faltam:proximo?proximo-atual:0};
}

/* Grade de consistência: colunas = semanas (domingo a sábado), 7 linhas.
   estado por célula: feito | falha | livre | fora (fora da janela do plano). */
function calcHeatmapConsistencia(nSemanas,hojeRef){
  const semanas=Math.max(1,nSemanas||12);
  const hojeKey=hojeRef||fmt(new Date());
  const hoje=parseDate(hojeKey);
  const domAtual=new Date(hoje); domAtual.setDate(domAtual.getDate()-domAtual.getDay());
  const ini=new Date(domAtual); ini.setDate(ini.getDate()-(semanas-1)*7);
  const colunas=[]; let feitos=0,previstos=0,melhorSemana=0;
  for(let s=0;s<semanas;s++){
    const col=[]; let naSemana=0;
    for(let dw=0;dw<7;dw++){
      const d=new Date(ini); d.setDate(d.getDate()+s*7+dw);
      const k=fmt(d); const est=(STATE.dias||{})[k]||{};
      let estado="fora";
      if(k<=hojeKey&&STATE.inicio&&k>=STATE.inicio&&!(STATE.prova&&k>STATE.prova)){
        estado=isDiaLivre(d.getDay())?"livre":(_diaFeito(k)?"feito":"falha");
      }
      if(estado==="feito"){ feitos++; naSemana++; }
      if(estado==="feito"||estado==="falha") previstos++;
      col.push({key:k,estado:estado,estrelas:est.estrelas||0,dia:d.getDate(),mes:d.getMonth(),
        hoje:k===hojeKey,
        marco:estado!=="fora"&&(isSimuladoDay(k)||isRevisaoGeralDay(k))});
    }
    if(naSemana>melhorSemana) melhorSemana=naSemana;
    colunas.push(col);
  }
  let p30=0,f30=0;
  for(let i=0;i<30;i++){
    const d=new Date(hoje); d.setDate(d.getDate()-i);
    const k=fmt(d);
    if(k>hojeKey||!_diaPrevisto(k)) continue;
    p30++; if(_diaFeito(k)) f30++;
  }
  const st=calcStreaks(hojeKey);
  return {colunas:colunas,resumo:{feitos:feitos,previstos:previstos,melhorSemana:melhorSemana,
    cumprimento30:p30?Math.round(f30/p30*100):null,sequencia:st.atual,recorde:st.recorde,
    recordeAnterior:st.recordeAnterior,escudoUsado:st.escudoUsado,perdoados:st.perdoados}};
}

/* Distribuição dos registros por dia da semana (0=dom..6=sáb).
   Usa registradoEm (data em que o aluno REALMENTE marcou) — só assim o
   gráfico responde "em que dias eu estudo". Registros antigos, sem o campo,
   caem na própria data planejada (aproximação; não há como recuperar).
   maiorLote detecta marcação retroativa em massa (N dias na mesma data). */
function calcRitmoSemanal(hojeRef){
  const dias=[];
  for(let dw=0;dw<7;dw++) dias.push({dow:dw,registros:0,pct:null,livre:isDiaLivre(dw)});
  const res={dias:dias,total:0,maiorLote:null};
  if(!STATE.inicio) return res;
  const hojeKey=hojeRef||fmt(new Date());
  const porData={};
  Object.keys(STATE.dias||{}).forEach(function(k){
    const est=STATE.dias[k]||{};
    if(!_diaFeito(k)||k<STATE.inicio) return;
    const ref=est.registradoEm||k;
    if(ref>hojeKey) return;
    dias[parseDate(ref).getDay()].registros++;
    res.total++;
    if(est.registradoEm){
      if(!porData[ref]) porData[ref]={};
      porData[ref][k]=1;
    }
  });
  dias.forEach(function(d){ d.pct=res.total?Math.round(d.registros/res.total*100):null; });
  Object.keys(porData).forEach(function(dt){
    const q=Object.keys(porData[dt]).length;
    if(!res.maiorLote||q>res.maiorLote.qtd) res.maiorLote={data:dt,qtd:q};
  });
  return res;
}

/* RUMO DA BÚSSOLA: converte a aderência ao plano num ângulo de agulha.
   100% de aderência aponta o Norte (0°, "Aprovação"); quanto menor a
   aderência, mais a agulha desvia, até 90° (leste) em 0%.
   Sem nenhum dia registrado, devolve angulo null (agulha calibrando). */
/* O diagnóstico virou ETIQUETA (tag+icone) e a frase ficou só com a AÇÃO.
   Antes a frase repetia o diagnóstico ("Rota desviada. Comece pelo..."),
   o que soaria redundante ao lado de um badge dizendo a mesma coisa. */
const RUMO_TAGS={
  norte:     {tag:"No Ritmo",        icone:"🎯"},
  rota:      {tag:"Rota Firme",      icone:"🧭"},
  desvio:    {tag:"Pequeno Desvio",  icone:"⚠️"},
  fora:      {tag:"Rota Desviada",   icone:"⚠️"},
  perdido:   {tag:"Fora de Rota",    icone:"🚩"},
  calibrando:{tag:"Calibrando",      icone:"⏳"}
};
function calcRumo(aderenciaPct,temRegistro){
  const _t=function(nivel,angulo,frase){
    const m=RUMO_TAGS[nivel];
    return {angulo:angulo,nivel:nivel,frase:frase,tag:m.tag,icone:m.icone};
  };
  if(!temRegistro) return _t("calibrando",null,
    "Registre seu primeiro dia de estudo para a agulha achar o Norte.");
  const p=Math.max(0,Math.min(120,aderenciaPct||0));
  const angulo=Math.round(Math.max(0,Math.min(90,(100-p)*0.9)));
  if(p>=100) return _t("norte",angulo,"Você chega à prova com o edital coberto se mantiver esse passo.");
  if(p>=85)  return _t("rota",angulo,"Falta pouco para a agulha travar no Norte.");
  if(p>=60)  return _t("desvio",angulo,"Dá para corrigir ainda esta semana.");
  if(p>=30)  return _t("fora",angulo,"Comece pelo dia de hoje para voltar ao curso.");
  return _t("perdido",angulo,"Um dia registrado já começa a corrigir o rumo.");
}

/* Consistência de um MÊS (grade de calendário do dashboard).
   offset 0 = mês atual, -1 = anterior.
   REGRA (09/08): o crédito vai para o dia em que o aluno REGISTROU
   (est.registradoEm), não para o dia planejado. Registrar cinco dias
   atrasados num domingo pinta o domingo, que é quando o estudo aconteceu.
   Registros antigos, sem o campo, caem na própria data planejada.
   Estados sólidos: feito | falha | livre | futuro | fora. */
function _diasComRegistro(){
  const set={};
  Object.keys(STATE.dias||{}).forEach(function(k){
    if(!_diaFeito(k)) return;
    const est=STATE.dias[k]||{};
    set[est.registradoEm||k]=true;
  });
  return set;
}
function calcMesConsistencia(offset,hojeRef){
  const hojeKey=hojeRef||fmt(new Date());
  const hoje=parseDate(hojeKey);
  const base=new Date(hoje.getFullYear(),hoje.getMonth()+(offset||0),1);
  const ano=base.getFullYear(), mes=base.getMonth();
  const ultimo=new Date(ano,mes+1,0).getDate();
  const inicioDow=new Date(ano,mes,1).getDay();
  const comRegistro=_diasComRegistro();
  const mesCorrente=(ano===hoje.getFullYear()&&mes===hoje.getMonth());
  const diaCorte=mesCorrente?hoje.getDate():ultimo;   // até onde o mês "já aconteceu"
  const celulas=[];
  for(let i=0;i<inicioDow;i++) celulas.push({estado:"fora",vazio:true});
  let estudados=0,previstos=0;
  for(let d=1;d<=ultimo;d++){
    const dt=new Date(ano,mes,d);
    const k=fmt(dt);
    const estudou=!!comRegistro[k];
    let estado="fora";
    if(k<=hojeKey&&STATE.inicio&&k>=STATE.inicio&&!(STATE.prova&&k>STATE.prova)){
      /* Estudar em dia livre conta como estudo. O dia de hoje sem registro
         fica como "a fazer", nunca como falha. */
      estado=estudou?"feito"
        :(isDiaLivre(dt.getDay())?"livre":(k===hojeKey?"futuro":"falha"));
    } else if(STATE.inicio&&k>hojeKey&&(!STATE.prova||k<=STATE.prova)){
      estado=estudou?"feito":"futuro";
    }
    if(estado==="feito") estudados++;
    if(_diaPrevisto(k)&&k<hojeKey) previstos++;      // previstos JÁ decorridos
    celulas.push({key:k,dia:d,estado:estado,hoje:k===hojeKey,
      marco:(estado!=="fora")&&(isSimuladoDay(k)||isRevisaoGeralDay(k)||getCicloPos(k)===5)});
  }
  /* Comparação com o mês anterior no MESMO PERÍODO: no dia 9, compara com
     os 9 primeiros dias do mês passado. Comparar 9 dias contra um mês
     inteiro faria todo aluno "despencar" até o fim de todo mês. */
  const ant=new Date(ano,mes-1,1);
  const ultAnt=new Date(ant.getFullYear(),ant.getMonth()+1,0).getDate();
  let antMesmoPeriodo=0,antTotal=0;
  for(let d=1;d<=ultAnt;d++){
    const k=fmt(new Date(ant.getFullYear(),ant.getMonth(),d));
    if(k>hojeKey||!comRegistro[k]) continue;
    if(STATE.inicio&&k<STATE.inicio) continue;   // fora da janela do plano
    antTotal++;
    if(d<=diaCorte) antMesmoPeriodo++;
  }
  const mesFechado=!mesCorrente;
  return {ano:ano,mes:mes,celulas:celulas,mesCorrente:mesCorrente,diaCorte:diaCorte,
    resumo:{estudados:estudados,cumpridos:estudados,previstos:previstos,
      pct:previstos?Math.round(estudados/previstos*100):null,
      mesAnterior:antMesmoPeriodo,mesAnteriorTotal:antTotal,mesFechado:mesFechado,
      /* percentual só quando o mês fechou: aí a comparação é entre iguais */
      variacao:(mesFechado&&antTotal)?Math.round((estudados-antTotal)/antTotal*100):null}};
}

/* ── MEDALHAS E PATENTE ──────────────────────────────────────────
   Puro, sem DOM. Sete famílias de medalha, cada uma com níveis, e uma
   patente calculada por XP acumulado. Tudo sai de dados que o app já
   grava: dias com estudo, estrelas por tópico, revisões, simulados,
   Retornos Técnicos e cobertura do edital (esta vem como parâmetro,
   porque calcCobertura mora no ui.js). */
/* Níveis em escala universal (metais), não jargão náutico: qualquer aluno
   entende sem explicação. */
/* ══ AULAS DOS CURSINHOS ════════════════════════════════════════
   Liga os TÓPICOS do edital às aulas do cursinho que o aluno assina.
   Dados em cursos.js (window.CURSOS_DATA), curados pelo produto.

   Modelo CATÁLOGO + VÍNCULOS: a aula é cadastrada uma vez (número,
   título, URL) e os tópicos apontam para o número dela. Existe porque
   o recorte do curso não bate com o do edital: uma aula do Lucas
   Silva cobre três tópicos de uma vez, e um tópico pesado pode exigir
   duas aulas. Guardar a URL solta em cada tópico duplicaria a mesma
   aula e tornaria a correção de um link uma caçada.

   A comparação de nomes é tolerante porque serão digitados à mão:
   ignora acento, caixa, espaço repetido e pontuação. */
function _normTexto(t){
  return String(t||"")
    .normalize("NFD").replace(/[\u0300-\u036f]/g,"")   // tira acentos
    .toLowerCase()
    .replace(/[^a-z0-9]+/g," ")                        // pontuação vira espaço
    .trim();
}
function _cursosData(){
  if(typeof CURSOS!=="undefined"&&CURSOS) return CURSOS;
  if(typeof window!=="undefined"&&window.CURSOS_DATA) return window.CURSOS_DATA;
  return {};
}
/* Só https passa. Bloqueia javascript:, data: e afins mesmo que
   alguém cole isso no arquivo de dados por engano. */
function _urlSegura(u){
  const s=String(u||"").trim();
  return /^https:\/\/[^\s"'<>]+$/i.test(s)?s:"";
}
/* Cursinhos oferecidos para um edital (alimenta o seletor). */
function getProvedores(editalId){
  const d=_cursosData();
  return (d.provedores||[]).filter(function(p){
    return !editalId||!p.editais||p.editais.indexOf(editalId)>=0;
  });
}
function getProvedor(id){
  return getProvedores(null).find(function(p){return p.id===id;})||null;
}
function _cursoDe(editalId,cursinhoId){
  if(!editalId||!cursinhoId) return null;
  const c=((_cursosData().aulas||{})[editalId]||{})[cursinhoId];
  return c&&typeof c==="object"?c:null;
}
/* Chave tolerante -> objeto original, para achar matéria e tópico
   mesmo com diferença de acento ou espaçamento. */
function _acharChave(obj,alvo){
  if(!obj) return null;
  const n=_normTexto(alvo);
  return Object.keys(obj).find(function(k){return _normTexto(k)===n;})||null;
}
/* Aulas de um tópico: [{n,t,u}] com URL válida, na ordem do curso.
   Sem vínculo ou sem URL cadastrada, devolve lista vazia (falha em
   silêncio: melhor sem botão do que com botão para o lugar errado). */
/* ── CONTEÚDO DE ESTUDO POR TÓPICO ─────────────────────────────────
   Texto que o aluno lê ao abrir o tópico do dia. Vem de
   app/conteudo/conteudo-<cert>.js (window.CONTEUDO_DATA), GERADO por
   outputs/conteudo_para_js.py a partir do Markdown em _conteudo/.
   Nunca editar o .js à mão.

   O vínculo é o par matéria + tópico do editais.js, comparado com a
   mesma tolerância das aulas (_normTexto): acento, caixa, pontuação e
   espaço repetido não contam. Se o texto de um tópico mudar no edital,
   o conteúdo some da tela em silêncio, de propósito, e o conversor
   acusa o órfão na próxima rodada. Melhor sem texto do que com o texto
   de outro tópico.

   As seções já chegam como HTML, montado no build a partir de um
   subconjunto fechado de Markdown e validado contra lista branca de
   tags. Por isso NÃO passam por esc() na renderização: são dado de
   build, curado pelo dono, na mesma categoria de editais.js. O que
   nunca pode acontecer é conteúdo de aluno entrar por aqui. */
function _conteudoData(){
  if(typeof CONTEUDO!=="undefined"&&CONTEUDO) return CONTEUDO;
  if(typeof window!=="undefined"&&window.CONTEUDO_DATA) return window.CONTEUDO_DATA;
  return {};
}
function getConteudo(editalId,materia,topico){
  if(!editalId||!materia||!topico) return null;
  const cert=_conteudoData()[editalId];
  if(!cert) return null;
  const chaveMat=_acharChave(cert,materia);
  if(!chaveMat) return null;
  const chaveTop=_acharChave(cert[chaveMat],topico);
  if(!chaveTop) return null;
  return cert[chaveMat][chaveTop]||null;
}
/* ── BANCO DE QUESTÕES ──────────────────────────────────────────────
   Gerado em app/conteudo/questoes-<cert>.js (window.QUESTOES_DATA) por
   outputs/questoes_para_js.py, a partir dos YAML de _conteudo. Arquivo
   SEPARADO do conteúdo de propósito: o banco completo passa de meio mega
   e não deve pesar em quem só quer ler o texto do tópico.

   O vínculo é o mesmo do conteúdo e das aulas: matéria + tópico com
   tolerância de acento, caixa e pontuação (_normTexto). Tópico sem
   questão devolve lista vazia, nunca null, para quem chama poder somar
   e filtrar sem checar antes. */
function _questoesData(){
  if(typeof QUESTOES!=="undefined"&&QUESTOES) return QUESTOES;
  if(typeof window!=="undefined"&&window.QUESTOES_DATA) return window.QUESTOES_DATA;
  return {};
}
function getQuestoes(editalId,materia,topico){
  if(!editalId||!materia||!topico) return [];
  const cert=_questoesData()[editalId];
  if(!cert) return [];
  const cm=_acharChave(cert,materia);
  if(!cm) return [];
  const ct=_acharChave(cert[cm],topico);
  if(!ct) return [];
  const arr=cert[cm][ct];
  return Array.isArray(arr)?arr:[];
}
function temQuestoes(editalId,materia,topico){
  return getQuestoes(editalId,materia,topico).length>0;
}
/* Quantas questões existem por matéria do edital. Alimenta o contador do
   menu de Exercícios e serve de régua do quanto falta escrever. */
function contarQuestoes(editalId,editaisRef){
  const ed=(editaisRef||(typeof EDITAIS!=="undefined"?EDITAIS:{}))[editalId];
  const out={total:0,porMateria:{},topicosComQuestao:0};
  if(!ed||!ed.topicos) return out;
  Object.keys(ed.topicos).forEach(function(mat){
    let n=0;
    (ed.topicos[mat]||[]).forEach(function(top){
      const q=getQuestoes(editalId,mat,top);
      if(q.length){ n+=q.length; out.topicosComQuestao++; }
    });
    out.porMateria[mat]=n; out.total+=n;
  });
  return out;
}

/* Histórico por questão. A chave é o `id` do YAML, que é permanente e
   nunca reaproveitado: é isso que permite guardar acerto por questão sem
   embaralhar resultado quando o banco cresce. */
function _hist(){
  if(!STATE.questoes||typeof STATE.questoes!=="object") STATE.questoes={};
  return STATE.questoes;
}
function statusQuestao(id){ return _hist()[id]||null; }
function registrarResposta(id,opcao,acertou,hojeRef){
  if(!id) return null;
  const h=_hist();
  const r=h[id]||{n:0,ok:0};
  r.n=(r.n||0)+1;
  if(acertou) r.ok=(r.ok||0)+1;
  r.ultimaOpcao=opcao;
  r.ultimaCerta=!!acertou;
  r.ultima=hojeRef||fmt(new Date());
  h[id]=r;
  return r;
}

/* Seleção de questões para o menu de Exercícios, para as revisões e para
   os simulados. Filtro fechado, tudo opcional:
     materia, topico  ... recorte do Conteúdo programático
     niveis           ... array com 1, 2 e 3
     usarEm           ... "simulado" ou "revisao" (o menu não filtra: vê tudo)
     soErradas        ... só o que o aluno errou da última vez
     soNaoRespondidas ... só o que ele nunca viu
     limite           ... corta o resultado
   Devolve [{mat, top, q}], na ordem do edital. Embaralhar é decisão de
   quem exibe, não daqui, para o resultado continuar testável. */
function listarQuestoes(editalId,filtro,editaisRef){
  const f=filtro||{};
  const ed=(editaisRef||(typeof EDITAIS!=="undefined"?EDITAIS:{}))[editalId];
  if(!ed||!ed.topicos) return [];
  const out=[];
  const mats=Object.keys(ed.topicos).filter(function(m){
    return !f.materia||_normTexto(m)===_normTexto(f.materia);
  });
  mats.forEach(function(mat){
    (ed.topicos[mat]||[]).forEach(function(top){
      if(f.topico&&_normTexto(top)!==_normTexto(f.topico)) return;
      getQuestoes(editalId,mat,top).forEach(function(q){
        if(f.niveis&&f.niveis.length&&f.niveis.indexOf(q.nivel)===-1) return;
        if(f.usarEm&&(q.usar_em||[]).indexOf(f.usarEm)===-1) return;
        const h=statusQuestao(q.id);
        if(f.soErradas&&!(h&&h.ultimaCerta===false)) return;
        if(f.soNaoRespondidas&&h) return;
        out.push({mat:mat,top:top,q:q});
      });
    });
  });
  return f.limite>0?out.slice(0,f.limite):out;
}

/* ── ÍNDICE DE AGENDA POR TÓPICO ───────────────────────────────────
   Responde duas perguntas para CADA tópico do edital: em que dia ele
   cai no cronograma e como o aluno o avaliou. Alimenta o menu
   Conteúdo programático, onde o aluno procura o texto pelo nome em
   vez de varrer o cronograma dia a dia.

   Percorre os dias reais do plano chamando getTopicosDoDia, em vez de
   recalcular a posição do tópico na lista. É mais caro, e é de
   propósito: se a regra de distribuição mudar, este índice acompanha
   sozinho, sem virar uma segunda verdade sobre o agendamento.

   Vale a PRIMEIRA ocorrência. A lista de tópicos é circular
   (getTopicosDiaBase usa módulo), então um edital curto pode repetir
   o mesmo tópico mais adiante; o que interessa ao aluno é quando ele
   vê aquilo pela primeira vez.

   A confiança segue a mesma convenção do resto do app: dia com mais
   de um tópico guarda em est.percepcoes[i], dia de tópico único em
   est.percepcao.

   Chave do mapa: _normTexto(materia) + "|" + _normTexto(topico), a
   mesma tolerância de acento e caixa usada pelo conteúdo e pelas
   aulas. Sem plano configurado, devolve mapa vazio. */
function indexarAgendaTopicos(){
  const idx={};
  if(!STATE.inicio) return idx;
  const ini=parseDate(STATE.inicio); ini.setHours(0,0,0,0);
  const lim=getLimiteConteudo();
  const MAX_DIAS=800;   // trava de segurança: plano sem prova não roda para sempre
  const d=new Date(ini);
  for(let n=0;n<MAX_DIAS;n++,d.setDate(d.getDate()+1)){
    if(lim&&d>=lim) break;
    const key=fmt(d);
    const tops=getTopicosDoDia(key);
    if(!tops.length) continue;
    const est=STATE.dias[key]||{};
    const multi=tops.length>1;
    tops.forEach(function(t,i){
      if(!t||!t.mat||!t.top) return;
      const k=_normTexto(t.mat)+"|"+_normTexto(t.top);
      if(idx[k]) return;              // primeira ocorrência manda
      idx[k]={ key:key, percepcao:(multi?(est.percepcoes||{})[i]:est.percepcao)||null };
    });
  }
  return idx;
}

function temConteudo(editalId,materia,topico){
  return !!getConteudo(editalId,materia,topico);
}
/* Quantos tópicos do edital já têm texto publicado. Alimenta o aviso
   de cobertura e serve de régua para saber o quanto falta escrever. */
function contarTopicosComConteudo(editalId,editaisRef){
  const ed=(editaisRef||(typeof EDITAIS!=="undefined"?EDITAIS:{}))[editalId];
  if(!ed||!ed.topicos) return 0;
  let n=0;
  Object.keys(ed.topicos).forEach(function(mat){
    (ed.topicos[mat]||[]).forEach(function(top){
      if(getConteudo(editalId,mat,top)) n++;
    });
  });
  return n;
}

function getAulas(editalId,cursinhoId,materia,topico){
  const curso=_cursoDe(editalId,cursinhoId);
  if(!curso||!materia||!topico) return [];
  const chaveMat=_acharChave(curso.topicos,materia);
  if(!chaveMat) return [];
  const chaveTop=_acharChave(curso.topicos[chaveMat],topico);
  if(!chaveTop) return [];
  const nums=curso.topicos[chaveMat][chaveTop]||[];
  const porNum={};
  (curso.catalogo||[]).forEach(function(a){ porNum[a.n]=a; });
  return nums.map(function(n){
    const a=porNum[n];
    if(!a) return null;
    const u=_urlSegura(a.u);
    return u?{n:a.n,t:String(a.t||"Aula "+a.n),u:u}:null;
  }).filter(Boolean);
}
/* Atalho para quem só quer a primeira aula do tópico. */
function getAulaLink(editalId,cursinhoId,materia,topico){
  const l=getAulas(editalId,cursinhoId,materia,topico);
  return l.length?l[0].u:"";
}
/* Quantos TÓPICOS do edital já abrem alguma aula. É esse número que
   o aluno vê no seletor, porque é o que muda a vida dele: aula no
   catálogo sem vínculo não vira botão em lugar nenhum. */
function contarTopicosComAula(editalId,cursinhoId){
  const curso=_cursoDe(editalId,cursinhoId);
  if(!curso) return 0;
  const porNum={};
  (curso.catalogo||[]).forEach(function(a){ if(_urlSegura(a.u)) porNum[a.n]=true; });
  return Object.keys(curso.topicos||{}).reduce(function(n,mat){
    return n+Object.values(curso.topicos[mat]||{}).filter(function(nums){
      return (nums||[]).some(function(x){return porNum[x];});
    }).length;
  },0);
}

/* ══ DOMÍNIO DO EDITAL ══════════════════════════════════════════
   Confiança sozinha mente: a média das notas dos tópicos JÁ vistos
   pode marcar 100% com o aluno tendo visto 2 de 8 tópicos. Domínio
   corrige isso pesando a confiança pela cobertura da matéria:
       dominio = confianca x cobertura / 100
   Uma matéria com 100% de confiança sobre 40% do conteúdo domina 40%
   do edital, que é a verdade que interessa na véspera da prova.
   confParcial marca a amostra pequena demais para colorir de verde. */
const DOMINIO_MIN_AMOSTRA=50; // % de cobertura da matéria p/ confiança "firme"
function calcDominio(confPct,coberturaPct){
  const c=Math.max(0,Math.min(100,Number(confPct)||0));
  const k=Math.max(0,Math.min(100,Number(coberturaPct)||0));
  const dominio=Math.round(c*k/100);
  return {dominio,confParcial:k>0&&k<DOMINIO_MIN_AMOSTRA,
    faixa:dominio>=70?"alta":dominio>=40?"media":dominio>0?"baixa":"nula"};
}

const PATENTES=[
  {nome:"Iniciante",xp:0},
  {nome:"Bronze",xp:300},
  {nome:"Prata",xp:800},
  {nome:"Ouro",xp:1600},
  {nome:"Platina",xp:2800},
  {nome:"Diamante",xp:4500}
];
function _contadoresMedalhas(){
  const dias=STATE.dias||{};
  let diasEstudo=0,topicos5=0,revisoes=0,simulados=0,somaSim=0,rts=0;
  const porMes={};
  Object.keys(dias).forEach(function(k){
    const e=dias[k]||{};
    if(_diaFeito(k)){
      const ref=e.registradoEm||k;
      diasEstudo++;
      const m=ref.slice(0,7); porMes[m]=(porMes[m]||0)+1;
    }
    if(e.estrelas===5) topicos5++;
    if(e.estrelasList) Object.keys(e.estrelasList).forEach(function(t){ if(e.estrelasList[t]===5) topicos5++; });
    if(e.rev7feito) revisoes++;
    if(e.rev30feito) revisoes++;
    if(e.simuladoFeito){ simulados++; if(typeof e.simuladoScore==="number") somaSim+=e.simuladoScore; }
    if(e.revisaoGeralFeita){ simulados++; if(typeof e.revisaoGeralScore==="number") somaSim+=e.revisaoGeralScore; }
    if(e.rtFeito) rts++;
  });
  let melhorMes=0;
  Object.keys(porMes).forEach(function(m){ if(porMes[m]>melhorMes) melhorMes=porMes[m]; });
  // Resiliência: voltou a estudar depois de 3+ dias previstos em branco
  let retomou=false;
  if(STATE.inicio){
    let seguidosSemEstudo=0;
    const hojeKey=fmt(new Date());
    for(let x=parseDate(STATE.inicio); fmt(x)<=hojeKey; x.setDate(x.getDate()+1)){
      const k=fmt(x);
      if(!_diaPrevisto(k)) continue;
      if(_diaFeito(k)){ if(seguidosSemEstudo>=3) retomou=true; seguidosSemEstudo=0; }
      else seguidosSemEstudo++;
    }
  }
  return {diasEstudo:diasEstudo,topicos5:topicos5,revisoes:revisoes,simulados:simulados,
    mediaSim:simulados?Math.round(somaSim/simulados):0,rts:rts,melhorMes:melhorMes,retomou:retomou};
}
function calcMedalhas(coberturaPct){
  const c=_contadoresMedalhas();
  const st=calcStreaks();
  const cob=coberturaPct||0;
  const def=[
    {id:"seq7",nv:1,   fam:"Constância", ic:"🔥", nome:"Primeira semana",   desc:"7 dias seguidos de estudo",        valor:st.recorde, meta:7},
    {id:"seq21",nv:2,  fam:"Constância", ic:"🔥", nome:"Hábito formado",    desc:"21 dias seguidos de estudo",       valor:st.recorde, meta:21},
    {id:"seq60",nv:3,  fam:"Constância", ic:"🔥", nome:"Inabalável",        desc:"60 dias seguidos de estudo",       valor:st.recorde, meta:60},
    {id:"cob25",nv:1,  fam:"Edital",     ic:"🗺️", nome:"Primeiro quarto",   desc:"25% do edital estudado",           valor:cob, meta:25},
    {id:"cob50",nv:2,  fam:"Edital",     ic:"🗺️", nome:"Meio do caminho",   desc:"50% do edital estudado",           valor:cob, meta:50},
    {id:"cob90",nv:3,  fam:"Edital",     ic:"🗺️", nome:"Edital na mão",     desc:"90% do edital estudado",           valor:cob, meta:90},
    {id:"dom10",nv:1,  fam:"Domínio",    ic:"🧠", nome:"Base sólida",       desc:"10 tópicos com 5 estrelas",        valor:c.topicos5, meta:10},
    {id:"dom30",nv:2,  fam:"Domínio",    ic:"🧠", nome:"Especialista",      desc:"30 tópicos com 5 estrelas",        valor:c.topicos5, meta:30},
    {id:"dom60",nv:3,  fam:"Domínio",    ic:"🧠", nome:"Mestre do edital",  desc:"60 tópicos com 5 estrelas",        valor:c.topicos5, meta:60},
    {id:"rev10",nv:1,  fam:"Revisão",    ic:"🔁", nome:"Revisor",           desc:"10 revisões concluídas",           valor:c.revisoes, meta:10},
    {id:"rev40",nv:2,  fam:"Revisão",    ic:"🔁", nome:"Memória de elefante", desc:"40 revisões concluídas",         valor:c.revisoes, meta:40},
    {id:"rev100",nv:3, fam:"Revisão",    ic:"🔁", nome:"Blindado",          desc:"100 revisões concluídas",          valor:c.revisoes, meta:100},
    {id:"sim1",nv:1,   fam:"Simulado",   ic:"🎯", nome:"Estreia",           desc:"1º simulado registrado",           valor:c.simulados, meta:1},
    {id:"sim5",nv:2,   fam:"Simulado",   ic:"🎯", nome:"Ritmo de prova",    desc:"5 simulados registrados",          valor:c.simulados, meta:5},
    {id:"sim12",nv:3,  fam:"Simulado",   ic:"🎯", nome:"Veterano",          desc:"12 simulados registrados",         valor:c.simulados, meta:12},
    {id:"pont70",nv:3, fam:"Simulado",   ic:"🏹", nome:"Pontaria",          desc:"70% de média com 3+ simulados",    valor:(c.simulados>=3?c.mediaSim:0), meta:70},
    {id:"rt4",nv:1,    fam:"Retorno",    ic:"🔍", nome:"Autoconhecimento",  desc:"4 Retornos Técnicos feitos",       valor:c.rts, meta:4},
    {id:"rt12",nv:2,   fam:"Retorno",    ic:"🔍", nome:"Diagnóstico fino",  desc:"12 Retornos Técnicos feitos",      valor:c.rts, meta:12},
    {id:"mes20",nv:2,  fam:"Volume",     ic:"📅", nome:"Mês cheio",         desc:"20 dias de estudo num mês",        valor:c.melhorMes, meta:20},
    {id:"volta",nv:1,  fam:"Resiliência",ic:"💪", nome:"De volta ao rumo",  desc:"Retomou após 3+ dias parado",      valor:(c.retomou?1:0), meta:1}
  ];
  const medalhas=def.map(function(m){
    return {id:m.id,familia:m.fam,icone:m.ic,nome:m.nome,desc:m.desc,nivel:m.nv,
      valor:m.valor,meta:m.meta,ok:m.valor>=m.meta,
      falta:Math.max(0,m.meta-m.valor)};
  });
  const conquistadas=medalhas.filter(function(m){return m.ok;}).length;
  const xp=c.diasEstudo*10+c.topicos5*15+c.revisoes*8+c.simulados*25+c.rts*12+conquistadas*50;
  let idx=0;
  for(let i=0;i<PATENTES.length;i++) if(xp>=PATENTES[i].xp) idx=i;
  const atual=PATENTES[idx], prox=PATENTES[idx+1]||null;
  const pct=prox?Math.min(100,Math.round((xp-atual.xp)/(prox.xp-atual.xp)*100)):100;
  // próxima medalha a cair: a não conquistada mais perto da meta
  const pendentes=medalhas.filter(function(m){return !m.ok&&m.meta>0;})
    .sort(function(a,b){ return (a.falta/a.meta)-(b.falta/b.meta); });
  return {medalhas:medalhas,conquistadas:conquistadas,total:medalhas.length,
    xp:xp,contadores:c,
    patente:{indice:idx,nome:atual.nome,xpBase:atual.xp,xpProx:prox?prox.xp:null,
      proxNome:prox?prox.nome:null,pct:pct},
    proxima:pendentes[0]||null};
}

/* ── Export para Node (testes). No navegador, as funções já são globais. ── */
if(typeof module!=="undefined"&&module.exports){
  module.exports={calcCoberturaEdital,calcAntecipacao,calcPrazoConteudo,getLimiteConteudo,MIN_POR_TOPICO_H,
    fmt,parseDate,isDiaLivre,isDiaEstudo,getCicloPos,getNumRevisao,
    getMaterias,getTopicos,getTopicoDiaByKey,getTopicosDiaBase,getTopicosDoDia,
    getExtrasDoDia,getPrevNonFreeDay,isSimuladoDay,calcRevisoes,calcExpectedPerSubject,getTopicosFracos,buildAgendaSemanaICS,isProvaDay,isRevisaoGeralDay,isRetaFinalDay,
    _densityFor,aggregateEstrelas,calcStreaks,calcHeatmapConsistencia,calcRitmoSemanal,calcMarcos,MARCOS_SEQUENCIA,calcRumo,RUMO_TAGS,calcMesConsistencia,calcMedalhas,PATENTES,
    calcDominio,DOMINIO_MIN_AMOSTRA,
    getAulas,getAulaLink,getProvedores,getProvedor,contarTopicosComAula,_normTexto,
    getQuestoes,temQuestoes,contarQuestoes,listarQuestoes,statusQuestao,registrarResposta,
    indexarAgendaTopicos,
    getConteudo,temConteudo,contarTopicosComConteudo};
}
