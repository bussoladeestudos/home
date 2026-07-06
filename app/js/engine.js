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
  if(STATE.prova){
    const fim=parseDate(STATE.prova);
    for(let x=new Date(ini);x<fim;x.setDate(x.getDate()+1)){
      if(!diasLivres.includes(x.getDay())){ if(avail%7<=4&&fmt(x)!==STATE.inicio) totalContent++; avail++; }
    }
    totalContent=Math.max(1,totalContent);
  } else { totalContent=Math.max(1,todos.length); }
  const maxByHoras=Math.max(1,Math.min(3,Math.floor((STATE.horasDia||3)/1.5)));
  return Math.min(maxByHoras,Math.max(1,Math.ceil(todos.length/totalContent)));
}

/* Retorna TODOS os tópicos base do dia (densidade dinâmica):
   - density = ceil(totalTopics / contentDays), limitado por horasDia
   - Prioriza matérias de maior peso (Conhecimentos Específicos primeiro)
   - Garante cobertura 100% mesmo com início tardio              */
function getTopicosDiaBase(dateKey){
  if(!STATE.inicio||dateKey<STATE.inicio) return [];
  if(STATE.prova&&dateKey>STATE.prova) return [];
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
    if(!v.percepcao) return;
    const d=parseDate(k); d.setHours(0,0,0,0);
    const diff=Math.round((hoje-d)/86400000);
    const td=getTopicoDiaByKey(k)||{mat:null,top:null};
    const {mat,top}=td;
    if(!mat) return;
    if(diff>=6 && !v.rev7feito){
      rev7.push({mat,top,key:k,conf:v.percepcao,diffReal:diff,atrasada:diff>8});
    }
    if(diff>=29 && !v.rev30feito){
      rev30.push({mat,top,key:k,conf:v.percepcao,diffReal:diff,atrasada:diff>31});
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

/* ── Export para Node (testes). No navegador, as funções já são globais. ── */
if(typeof module!=="undefined"&&module.exports){
  module.exports={fmt,parseDate,isDiaLivre,isDiaEstudo,getCicloPos,getNumRevisao,
    getMaterias,getTopicos,getTopicoDiaByKey,getTopicosDiaBase,getTopicosDoDia,
    getExtrasDoDia,getPrevNonFreeDay,isSimuladoDay,calcRevisoes,calcExpectedPerSubject,getTopicosFracos,buildAgendaSemanaICS,isProvaDay,isRevisaoGeralDay,isRetaFinalDay,
    _densityFor};
}
