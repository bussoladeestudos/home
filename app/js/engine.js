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
function calcRumo(aderenciaPct,temRegistro){
  if(!temRegistro) return {angulo:null,nivel:"calibrando",
    frase:"Bússola calibrando. Registre seu primeiro dia de estudo para achar o Norte."};
  const p=Math.max(0,Math.min(120,aderenciaPct||0));
  const angulo=Math.round(Math.max(0,Math.min(90,(100-p)*0.9)));
  let nivel,frase;
  if(p>=100){ nivel="norte";  frase="Norte encontrado. No ritmo atual, você chega à prova com o edital coberto."; }
  else if(p>=85){ nivel="rota"; frase="Rota firme. Falta pouco para a agulha travar no Norte."; }
  else if(p>=60){ nivel="desvio"; frase="Você desviou um pouco do plano. Dá para corrigir ainda esta semana."; }
  else if(p>=30){ nivel="fora"; frase="Rota desviada. Comece pelo dia de hoje para voltar ao curso."; }
  else { nivel="perdido"; frase="Fora de rota. Um dia registrado já começa a corrigir o rumo."; }
  return {angulo:angulo,nivel:nivel,frase:frase};
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
  module.exports={fmt,parseDate,isDiaLivre,isDiaEstudo,getCicloPos,getNumRevisao,
    getMaterias,getTopicos,getTopicoDiaByKey,getTopicosDiaBase,getTopicosDoDia,
    getExtrasDoDia,getPrevNonFreeDay,isSimuladoDay,calcRevisoes,calcExpectedPerSubject,getTopicosFracos,buildAgendaSemanaICS,isProvaDay,isRevisaoGeralDay,isRetaFinalDay,
    _densityFor,aggregateEstrelas,calcStreaks,calcHeatmapConsistencia,calcRitmoSemanal,calcMarcos,MARCOS_SEQUENCIA,calcRumo,calcMesConsistencia,calcMedalhas,PATENTES,
    calcDominio,DOMINIO_MIN_AMOSTRA};
}
