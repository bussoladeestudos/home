/* ════════════════════════════════════════════════════════════════
   BÚSSOLA DE ESTUDOS — UI (renderização e interação)
   Toda a camada visual: renders, navegação, modais, onboarding.
   Interação via EVENT DELEGATION: elementos declaram data-action
   (e data-* com os argumentos); o dispatcher abaixo resolve no
   registro ACTIONS. Nenhum handler inline no HTML.
   Segurança: esc() escapa dados vindos de backup/localStorage (B10).
   ════════════════════════════════════════════════════════════════ */

/* ── Escape de HTML (B10) ── */
function esc(s){ return String(s??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"); }

/* ── SUPORTE / FALE CONOSCO (MVP: link externo, sem backend) ──────────────
   >>> COLE AQUI o seu link de suporte (WhatsApp, formulário ou e-mail).
       WhatsApp:  https://wa.me/55DDDNUMERO   (ex.: https://wa.me/5561996278462)
       Formulário: cole a URL do Google Forms
       E-mail:     "mailto:seuemail@dominio.com?subject=Suporte%20Bussola"
   Enquanto ficar vazio, o clique só mostra um aviso (não abre aba quebrada). */
const SUPORTE_URL = "mailto:suporte@bussoladeestudos.com.br?subject=Suporte%20B%C3%BAssola%20de%20Estudos";   // <-- link do Fale Conosco

/* ── COACH COM IA (redação) ──
   URL do Cloudflare Worker que redige a Palavra do Coach (cloud/coach-ia-worker.js).
   Vazio = desativado (Coach usa só o motor de regras, como sempre).
   A chave da IA vive NO WORKER — nunca neste repositório (regra do handoff).
   Cache: 1 chamada por aluno/dia, guardada em STATE.coachIA {texto,data}. */
const COACH_IA_URL = "https://coach-bussola.adriano-m-goulart.workers.dev";
function abrirSuporte(){
  if(!SUPORTE_URL){ showToast("💬 Canal de suporte em configuração. Volte em breve!"); return; }
  if(SUPORTE_URL.indexOf("mailto:")===0) window.location.href=SUPORTE_URL;  // e-mail: abre o app de e-mail, sem perder o painel
  else window.open(SUPORTE_URL, "_blank", "noopener");                      // link web (WhatsApp/formulário): nova aba
  closeSidebarMobile();
}

/* ── Registro central de ações (data-action → função) ── */
const ACTIONS={
  // navegação e layout
  navTo:d=>navTo(d.page),
  irParaHojeCronograma:()=>irParaHojeCronograma(),
  irParaExercicios:d=>{navTo("revisoes");scrollToExercicio(+d.num);},
  irParaSimulados:d=>irParaSimulados(d.key),
  setCronView:d=>setCronView(d.view),
  navegarSemana:d=>navegarSemana(+d.dir),
  navegarMes:d=>navegarMes(+d.dir),
  toggleSidebar:()=>toggleSidebar(),
  togglePainel:()=>togglePainel(),
  toggleInfo511:()=>toggleInfo511(),
  // autenticação
  fazerLogin:()=>fazerLogin(),
  fazerLogout:()=>fazerLogout(),
  esqueceuSenha:()=>esqueceuSenha(),
  // setup / modais
  openSetupModal:()=>openSetupModal(),
  fecharModal:()=>fecharModal(),
  toggleConcursoDropdown:()=>toggleConcursoDropdown(),
  selecionarGrupo:d=>selecionarGrupo(d.grupo,true),
  toggleDow:d=>toggleDow(+d.i),
  usarPrazoSugerido:()=>usarPrazoSugerido(),
  iniciarBussola:()=>iniciarBússola(),
  marcarTreinoFeito:d=>marcarTreinoFeito(d.key),
  ajustarCronograma:()=>ajustarCronograma(),
  confirmarCronogramaParcial:()=>confirmarCronogramaParcial(),
  reprocessarFaltantes:()=>reprocessarFaltantes(),
  confirmarReinicio:()=>confirmarReinicio(),
  reiniciarCompleto:()=>reiniciarCompleto(),
  cancelarReinicio:()=>cancelarReinicio(),
  // onboarding / tour
  iniciarConfiguracao:()=>iniciarConfiguracao(),
  endTour:()=>endTour(true),
  tourPrev:()=>tourPrev(),
  tourNext:()=>tourNext(),
  // recuperação
  selectRecovery:d=>selectRecovery(d.opt),
  applyRecovery:()=>applyRecovery(),
  // dia a dia / cronograma
  toggleDia:d=>toggleDia(d.key),
  toggleCheck:d=>toggleCheck(d.key,d.campo),
  setStar:d=>setStar(d.key,+d.n),
  setStarTopico:d=>setStarTopico(d.key,+d.ti,+d.n),
  setStarHoje:d=>setStarHoje(+d.n,d.key),
  setSabStar:d=>setSabStar(d.key,+d.n,d.source,d.ti,d.sab),
  toggleSabMais:d=>toggleSabMais(d.key),
  popupSegundaAgenda:()=>popupSegundaAgenda(),
  fecharPopupSegunda:()=>fecharPopupSegunda(),
  fecharBannerMetodo:()=>fecharBannerMetodo(),
  instalarPwa:()=>instalarPwa(),
  adiarPwa:()=>adiarPwa(),
  menuInstalarApp:()=>menuInstalarApp(),
  toggleMapaTudo:()=>toggleMapaTudo(),
  toggleMedalhas:()=>toggleMedalhas(),
  navegarMesHabito:d=>navegarMesHabito(+d.dir),
  limparDia:(d,el,e)=>{e.stopPropagation();limparDia(d.key);},
  marcarDia1Concluido:d=>marcarDia1Concluido(d.key),
  calCellClick:d=>calCellClick(d.key),
  // revisões / simulados
  toggleRevCiclo:d=>toggleRevCiclo(+d.num),
  toggleExRevisao:d=>toggleExRevisao(d.key),
  toggleStatusCard:d=>toggleStatusCard(d.id),
  filtrarRevMat:d=>filtrarRevMat(d.mat),
  marcarRevisada:d=>marcarRevisada(d.key,d.tipo),
  abrirSimulado:d=>abrirSimulado(d.key),
  exportarAgendaIcs:()=>{
    const {ics}=buildAgendaSemanaICS(fmt(_agendaSegundaAtual()),STATE.agendaHora||"19:00");
    const blob=new Blob([ics],{type:"text/calendar;charset=utf-8"});
    const a=document.createElement("a");
    a.href=URL.createObjectURL(blob);
    a.download="bussola-semana.ics";
    document.body.appendChild(a); a.click();
    setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},1000);
    showToast("📅 Arquivo da semana baixado! Toque nele para adicionar ao seu calendário.");
  },
  abrirRevisaoGeral:d=>abrirRevisaoGeral(d.key),
  confirmarRevisaoGeral:()=>confirmarRevisaoGeral(),
  fecharRgModal:()=>fecharRgModal(),
  // Fale Conosco (link externo)
  abrirSuporte:()=>abrirSuporte(),
  // Conteúdo de estudo do tópico
  abrirConteudo:d=>abrirConteudo(d.mat,d.top),
  voltarDoConteudo:()=>navTo(_conteudoVoltarPara||"cronograma"),
  limparBuscaConteudo:()=>limparBuscaConteudo(),
  // Menu de exercícios
  exToggleNivel:d=>exToggleNivel(d.nivel),
  exToggleErradas:()=>exToggleErradas(),
  exLimparFiltro:()=>exLimparFiltro(),
  exComecar:()=>exComecar(),
  exSair:()=>exSair(),
  exResponder:d=>exResponder(d.id,d.op),
  exVerComentario:()=>exVerComentario(),
  exProxima:()=>exProxima(),
  exRefazerErradas:()=>exRefazerErradas(),
};

/* ── Dispatcher (event delegation) ── */
document.addEventListener("click",e=>{
  const el=e.target.closest("[data-action]");
  if(!el) return;
  window._bussolaUserActed=true; // saves passam a carimbar updatedAt (sync)
  const fn=ACTIONS[el.dataset.action];
  if(fn) fn(el.dataset,el,e);
});
/* Busca do Conteúdo programático: precisa de "input" (a cada tecla),
   e não de "change" (só ao sair do campo). */
document.addEventListener("input",e=>{
  if(!e.target||!e.target.dataset) return;
  if(e.target.dataset.input==="filtrarConteudo") filtrarConteudo(e.target.value);
});
document.addEventListener("change",e=>{
  if(!e.target.dataset) return;
  else if(e.target.dataset.change==="salvarCursinho"){
    window._bussolaUserActed=true;
    STATE.cursinho=e.target.value||"";
    save();
    renderCursinhoNota();
    renderCronogramaPage&&renderCronogramaPage();
    renderHoje&&renderHoje();
  }
  else if(e.target.dataset.change==="exMateria"){ window._bussolaUserActed=true; exSetMateria(e.target.value); }
  else if(e.target.dataset.change==="exTopico"){ window._bussolaUserActed=true; exSetTopico(e.target.value); }
  else if(e.target.dataset.change==="recalcularPlano"){ recalcularPlano(); }
  else if(e.target.dataset.change==="provaManual"){ provaManual(); }
  else if(e.target.dataset.change==="agendaHora"){
    window._bussolaUserActed=true;
    STATE.agendaHora=e.target.value||"19:00";
    save();
  }
});
document.addEventListener("input",e=>{
  if(e.target.dataset&&e.target.dataset.input==="salvarNotaSemana"){ window._bussolaUserActed=true; salvarNotaSemana(e.target.value); }
});
document.addEventListener("keydown",e=>{
  const t=e.target;
  if(e.key==="Enter"&&t&&t.dataset&&t.dataset.enter){
    const idx=t.dataset.enter.indexOf(":");
    const kind=t.dataset.enter.slice(0,idx), val=t.dataset.enter.slice(idx+1);
    if(kind==="focus"){ const el2=document.getElementById(val); if(el2) el2.focus(); }
    else if(kind==="action"&&ACTIONS[val]) ACTIONS[val](t.dataset,t,e);
    return;
  }
  // Enter/Espaço aciona data-action em elementos com papel de botão (acessibilidade)
  if((e.key==="Enter"||e.key===" ")&&t&&t.getAttribute&&t.getAttribute("role")==="button"&&t.dataset&&t.dataset.action){
    e.preventDefault();
    const fn=ACTIONS[t.dataset.action];
    if(fn) fn(t.dataset,t,e);
  }
});
/* Hover funcional das estrelas (substitui onmouseover/onmouseout inline) */
document.addEventListener("mouseover",e=>{
  const el=e.target.closest("[data-hover]");
  if(!el) return;
  if(el.dataset.hover==="star") hoverStar(el.dataset.key,+el.dataset.n);
  else if(el.dataset.hover==="starTopico") paintStars(el.dataset.key+"-"+el.dataset.ti,+el.dataset.n);
  else if(el.dataset.hover==="sabstar") hoverSabStar(el.dataset.key,+el.dataset.n,el.dataset.ti);
});
document.addEventListener("mouseout",e=>{
  const el=e.target.closest("[data-hover]");
  if(!el) return;
  if(el.dataset.hover==="star") unhoverStar(el.dataset.key);
  else if(el.dataset.hover==="starTopico") unhoverStarTopico(el.dataset.key,el.dataset.ti);
  else if(el.dataset.hover==="sabstar") unhoverSabStar(el.dataset.key,+el.dataset.cur,el.dataset.source,el.dataset.ti);
});

/* ════════════════════════════════════════════
   EDITAIS — base de dados das certificações (chave por exame)
   ════════════════════════════════════════════
   Para adicionar uma nova certificação, crie uma nova chave no arquivo
   editais.js (fonte única de dados) seguindo o formato:

   chaveUnica: {
     nome:   "Prefeitura de ...",        // exibido no seletor e topbar
     estado: "UF",
     cargos: ["Cargo 1","Cargo 2"],      // opções do select de cargo
     materias: [                          // peso = % de questões na prova
       {nome:"Matéria", peso:20, prog:0, conf:0, cor:"gray"},
     ],                                   // prog/conf/cor são calculados
     topicos: {                           // em runtime; iniciar zerados
       "Matéria": ["Tópico 1","Tópico 2"], // 1 tópico estudado por dia;
     }                                    // toda matéria precisa de entrada
   }

   A soma dos pesos deve dar 100. O cronograma 5+1+1 distribui os
   tópicos automaticamente por peso — nada mais precisa ser alterado.
   ════════════════════════════════════════════ */
/* ── STATE ── */
/* O estado (STATE), persistência e backup vivem em js/state.js;
   as funções de cálculo em js/engine.js — ambos carregados antes deste bloco. */
function nomeDow(d){ return["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"][d]; }

/* ── TOAST ── */
let _toastEl=null,_toastTimer=null;
function showToast(msg){
  if(!_toastEl){
    _toastEl=document.createElement("div");
    _toastEl.className="cronos-toast";
    document.body.appendChild(_toastEl);
  }
  _toastEl.textContent=msg;
  clearTimeout(_toastTimer);
  _toastEl.classList.remove("show");
  void _toastEl.offsetWidth; // reinicia a animação em toasts consecutivos
  _toastEl.classList.add("show");
  _toastTimer=setTimeout(()=>_toastEl.classList.remove("show"),2600);
}

function calcMateriasStats(){
  const materias = getMaterias();
  const topicos  = getTopicos();
  // Agrupa entradas do STATE.dias por matéria
  const byMat = {};
  materias.forEach(m => { byMat[m.nome] = { confs:[], totalTopicos:(topicos[m.nome]||[]).length }; });
  Object.entries(STATE.dias).forEach(([key,v]) => {
    if(v.percepcoes&&Object.keys(v.percepcoes).length>0){
      const tops=getTopicosDoDia(key);
      tops.forEach((t,ti)=>{
        const nivel=v.percepcoes[ti];
        if(nivel&&byMat[t.mat]) byMat[t.mat].confs.push(nivel==="alta"?100:nivel==="media"?67:33);
      });
      return;
    }
    if(!v.percepcao) return;
    const td = getTopicoDiaByKey(key);
    if(!td || !byMat[td.mat]) return;
    byMat[td.mat].confs.push(v.percepcao==="alta"?100:v.percepcao==="media"?67:33);
  });
  return materias.map(m => {
    const s = byMat[m.nome]||{confs:[],totalTopicos:1};
    const totalTop = Math.max(1, s.totalTopicos);
    // Se há dados reais, usa-os; senão, mantém os valores demo do EDITAIS
    if(s.confs.length===0) return {...m, prog:0, conf:0, cor:'gray',
      avaliados:0, totalTop, dominio:0, confParcial:false};
    const conf = Math.round(s.confs.reduce((a,b)=>a+b,0)/s.confs.length);
    const prog = Math.min(100,Math.round((s.confs.length/totalTop)*100));
    const cor  = conf>=70?"green":conf>=50?"yellow":"red";
    // Domínio = confiança PESADA pela cobertura da matéria (ver engine.calcDominio).
    // Evita o paradoxo "100% de confiança sobre 2 de 8 tópicos".
    const d = calcDominio(conf, prog);
    return {...m, prog, conf, cor,
      avaliados:s.confs.length, totalTop, dominio:d.dominio, confParcial:d.confParcial};
  });
}

/* ── CÁLCULOS DINÂMICOS ── */
function calcProgresso(){
  if(!STATE.inicio||!STATE.prova) return 0;
  const ini=parseDate(STATE.inicio); ini.setHours(0,0,0,0);
  const pro=parseDate(STATE.prova);  pro.setHours(0,0,0,0);
  const hoje=new Date(); hoje.setHours(0,0,0,0);

  // Conta TODOS os dias com percepcao a partir do inicio
  let done=0;
  Object.entries(STATE.dias).forEach(([k,v])=>{
    if(!v.percepcao) return;
    const d=parseDate(k); d.setHours(0,0,0,0);
    if(d>=ini) done++;
  });

  // Total esperado: dias úteis (seg-sex) de inicio até hoje
  const fimRef=hoje<=pro?hoje:pro;
  let total=0;
  for(let d=new Date(ini);d<=fimRef;d.setDate(d.getDate()+1)){
    const dow=d.getDay();
    if(isDiaEstudo(dow)) total++;
  }

  const base=Math.max(total, done, 1);
  return Math.min(100, Math.round((done/base)*100));
}
function calcProgressoDetalhado(){
  if(!STATE.inicio||!STATE.prova) return {pct:0, done:0, total:0};
  const ini=parseDate(STATE.inicio); ini.setHours(0,0,0,0);
  const pro=parseDate(STATE.prova);  pro.setHours(0,0,0,0);
  const hoje=new Date(); hoje.setHours(0,0,0,0);
  let done=0;
  Object.entries(STATE.dias).forEach(([k,v])=>{
    if(!v.percepcao) return;
    const d=parseDate(k); d.setHours(0,0,0,0);
    if(d>=ini) done++;
  });
  const fimRef=hoje<=pro?hoje:pro;
  let total=0;
  for(let d=new Date(ini);d<=fimRef;d.setDate(d.getDate()+1)){
    const dow=d.getDay();
    if(isDiaEstudo(dow)) total++;
  }
  // total previsto até a prova
  let totalProva=0;
  for(let d=new Date(ini);d<=pro;d.setDate(d.getDate()+1)){
    const dow=d.getDay();
    if(isDiaEstudo(dow)) totalProva++;
  }
  const base=Math.max(total,done,1);
  return {pct:Math.min(100,Math.round((done/base)*100)), done, total:Math.max(total,done), totalProva};
}

function calcCobertura(){
  // Cobertura real de conteúdo: tópicos únicos estudados / total de tópicos do edital
  if(!STATE.inicio) return {pct:0, cobertos:0, total:0};
  const topicos=getTopicos();
  const materias=getMaterias();
  let totalTopicos=0;
  materias.forEach(m=>totalTopicos+=(topicos[m.nome]||[]).length);
  if(totalTopicos===0) return {pct:0, cobertos:0, total:0};
  const cobertos=new Set();
  Object.entries(STATE.dias).forEach(([k,v])=>{
    if(!v.percepcao) return;
    getTopicosDiaBase(k).forEach(td=>{ if(td&&td.mat&&td.top) cobertos.add(td.mat+'|'+td.top); });
  });
  const pct=Math.min(100,Math.round((cobertos.size/totalTopicos)*100));
  return {pct, cobertos:cobertos.size, total:totalTopicos};
}
function calcConfiancaMedia(){
  const entradas=Object.values(STATE.dias).filter(d=>d.percepcao);
  if(!entradas.length) return null;
  const soma=entradas.reduce((acc,d)=>{
    return acc+(d.percepcao==="alta"?100:d.percepcao==="media"?67:33);
  },0);
  return Math.round(soma/entradas.length);
}

function calcHorasEstudadas(){
  // cada dia com lido=true conta horasDia, exercicios=true conta +0.5 extra
  return Object.values(STATE.dias).reduce((acc,d)=>{
    if(d.lido) acc+=STATE.horasDia;
    if(d.exercicios&&!d.lido) acc+=STATE.horasDia;
    return acc;
  },0);
}

function calcDiasConcluidos(){
  return Object.values(STATE.dias).filter(d=>d.percepcao).length;
}

function calcStreak(){
  const hoje=new Date(); hoje.setHours(0,0,0,0);
  let streak=0;
  for(let i=0;i<365;i++){
    const d=new Date(hoje); d.setDate(d.getDate()-i);
    const dow=d.getDay();
    if(isDiaLivre(dow)) continue; // pula dias de descanso no streak
    const k=fmt(d);
    if(STATE.dias[k]?.percepcao) streak++;
    else if(i>0) break; // só quebra depois do primeiro dia
  }
  return streak;
}



function calcRitmo(){
  const prog=calcProgresso();
  if(!STATE.inicio||!STATE.prova) return{label:"⏳ Configure a certificação",emoji:"⏳",curto:"Configure a certificação"};
  const hoje=new Date(); hoje.setHours(0,0,0,0);
  const ini=parseDate(STATE.inicio); ini.setHours(0,0,0,0);
  const pro=parseDate(STATE.prova);  pro.setHours(0,0,0,0);
  const total=Math.max(1,Math.round((pro-ini)/86400000));
  const pass=Math.max(0,Math.round((hoje-ini)/86400000));
  const pT=pass/total, pC=prog/100;
  if(pC>=pT+.07) return{label:"🟢 Ritmo Confortável",emoji:"🟢",curto:"No ritmo para aprovação"};
  if(pC>=pT-.05) return{label:"🟡 Ritmo Moderado",emoji:"🟡",curto:"Ritmo moderado"};
  return{label:"🔴 Atraso — acelere!",emoji:"🔴",curto:"Atraso — acelere!"};
}

function calcDiasRestantes(){
  if(!STATE.prova) return null;
  const hoje=new Date(); hoje.setHours(0,0,0,0);
  const prova=parseDate(STATE.prova); prova.setHours(0,0,0,0);
  return Math.max(0,Math.round((prova-hoje)/86400000));
}

function calcProjecao(){
  // Quantos dias antes da prova o aluno terminará se mantiver o ritmo
  const prog=calcProgresso();
  if(!prog||!STATE.inicio||!STATE.prova) return null;
  const hoje=new Date(); hoje.setHours(0,0,0,0);
  const ini=parseDate(STATE.inicio); ini.setHours(0,0,0,0);
  const pro=parseDate(STATE.prova); pro.setHours(0,0,0,0);
  const diasPassados=Math.max(1,Math.round((hoje-ini)/86400000));
  const diasTotal=Math.round((pro-ini)/86400000);
  if(diasPassados<=0) return null;
  const ritmoPorDia=prog/diasPassados;
  if(ritmoPorDia<=0) return null;
  const diasNecessarios=Math.ceil(100/ritmoPorDia);
  const folga=diasTotal-diasNecessarios;
  return folga;
}

function isRetaFinal(){
  if(!STATE.inicio||!STATE.prova) return {active:false, diasRestantes:null};
  const dias=calcDiasRestantes();
  if(dias===null||dias<0) return {active:false, diasRestantes:dias};
  const cob=calcCobertura();
  const active=(dias<=21||cob.pct>=90)&&dias>=0;
  return {active, diasRestantes:dias, cobertura:cob.pct};
}

function renderRetaFinal(){
  const el=document.getElementById("retaFinalBanner");
  if(!el) return;
  const rf=isRetaFinal();
  if(!rf.active){el.style.display="none";return;}
  el.style.display="block";
  const stats=calcMateriasStats();
  const fracas=stats.filter(m=>m.prog>0&&m.dominio<70).sort((a,b)=>a.dominio-b.dominio).slice(0,3);
  const dias=rf.diasRestantes;
  const cob=rf.cobertura;
  const urgencia=dias<=7?"🔴 Urgente:":dias<=14?"🟡 Atenção:":"🟢";
  let reforcoHtml=fracas.length
    ?fracas.map(m=>`<div class="rf-col-item"><strong>${m.nome}</strong> · domínio ${m.dominio}% (conf ${m.conf}% em ${m.avaliados}/${m.totalTop})</div>`).join("")
    :`<div class="rf-col-empty">Cobertura sólida! Foque em simulados.</div>`;
  let simHtml=`<div class="rf-col-item">Faça ${Math.max(1,Math.min(dias,5))} simulados cronometrados</div>`;
  if(dias>=3) simHtml+=`<div class="rf-col-item">Corrija cada erro imediatamente</div>`;
  if(dias>=7) simHtml+=`<div class="rf-col-item">Simule o ambiente real da prova</div>`;
  let descHtml=`<div class="rf-col-item">Dia anterior à prova: descanso total</div>`;
  if(dias>3) descHtml+=`<div class="rf-col-item">Durma bem nos 3 dias antes da prova</div>`;
  const sub=cob>=90
    ?`Você cobriu ${cob}% do edital. Hora de consolidar, simular e afiar os pontos fracos.`
    :`Com ${dias} dias restantes e ${cob}% do edital coberto — priorize revisões e simulados.`;
  el.innerHTML=`
    <div class="rf-header">
      <span class="rf-badge">🏁 Reta Final</span>
      <div class="rf-dias-pill">
        <div class="rf-dias-num">${dias}</div>
        <div class="rf-dias-label">dias para<br>a prova</div>
      </div>
    </div>
    <div class="rf-sub">${urgencia} ${sub}</div>
    <div class="rf-cols">
      <div class="rf-col"><div class="rf-col-title">🎯 Reforçar</div>${reforcoHtml}</div>
      <div class="rf-col"><div class="rf-col-title">📝 Simular</div>${simHtml}</div>
      <div class="rf-col"><div class="rf-col-title">😴 Descansar</div>${descHtml}</div>
    </div>`;
  // Update coach badge when reta final active
  const badge=document.getElementById("coachBadge");
  if(badge) badge.textContent="🏁 Análise — Reta Final";
}

/* ── INIT ── */
window.addEventListener("DOMContentLoaded",async ()=>{
  if(!Object.keys(EDITAIS).length){
    document.getElementById("tbCargo").textContent="Erro ao carregar certificações";
    alert("\u26A0\uFE0F N\u00e3o foi poss\u00edvel carregar a lista de certificações (editais.js n\u00e3o encontrado ao lado do index.html). Recarregue a p\u00e1gina.");
    return;
  }
  if(!EDITAIS[_prefSelecionada]) _prefSelecionada=Object.keys(EDITAIS)[0];
  renderPrefButtons();
  const hoje=new Date();
  // Campo em branco de proposito: data pre-preenchida induz o aluno a aceitar
  // um inicio que nao e o dele. Decisao do dono em 31/08/2026.
  document.getElementById("inputInicio").value="";
  load();
  try{ if(!localStorage.getItem("bussola_metodo_fechado")) toggleInfo511(true); }catch(e){}
  _dowSelected=[...(STATE.diasLivres||[])];
  renderDowGrid();
  // Se a prefeitura salva não existe mais no EDITAIS, reseta para campinas
  if(!EDITAIS[STATE.prefeitura]) STATE.prefeitura=Object.keys(EDITAIS)[0];
  if(STATE.inicio){
    document.getElementById("setupModal").classList.remove("open");
    renderTudo();
    navTo("dashboard"); // sempre abre no Dashboard
    selecionarPref(STATE.prefeitura, false);
    setTimeout(checkRecovery, 800);
    // Piscada dupla no botão Hoje, com tooltip do foco do dia
    setTimeout(()=>{
      const nh=document.getElementById("nav-hoje");
      if(!nh) return;
      nh.title="Hoje: "+getFocoHojeLabel();
      nh.classList.add("blink-hoje");
      setTimeout(()=>nh.classList.remove("blink-hoje"),3500);
    },1200);
    // Usuário já configurado, mas que ainda não viu o tour (ex.: novidade): roda uma vez
    if(!onboardDone()) setTimeout(()=>startTour(), 1600);
  } else {
    navTo("dashboard");
    selecionarPref(Object.keys(EDITAIS)[0], false);
    // Primeiro acesso: mostra boas-vindas; depois disso, o setup
    if(!onboardDone()) showWelcome();
    else document.getElementById("setupModal").classList.add("open");
  }
  setTopbarDate();
  // Fechar modal Revisão Geral com Escape
  document.addEventListener("keydown",e=>{
    if(e.key==="Escape"){
      const rg=document.getElementById("rgModal");
      if(rg&&!rg.classList.contains("hidden")) fecharRgModal();
    }
  });
});


/* ── SELEÇÃO EM DOIS NÍVEIS: grupo → cargo/vaga ── */
function getGrupos(){
  const grupos={};
  for(const [key,ed] of Object.entries(EDITAIS)){
    const g=ed.grupo||ed.estado||"Outros";
    if(!grupos[g]) grupos[g]=[];
    grupos[g].push({key,ed});
  }
  return grupos;
}

let _grupoSelecionado=null;
let _prefSelecionada=Object.keys(EDITAIS||{})[0]||"cfpPlanejar";

function renderPrefButtons(){
  const grid=document.getElementById("prefGrid");
  const grupos=getGrupos();
  grid.innerHTML=Object.keys(grupos).map(g=>`<button class="pref-btn${_grupoSelecionado===g?" selected":""}" id="grupo-btn-${CSS.escape(g)}" data-action="selecionarGrupo" data-grupo="${esc(g)}" role="option" aria-selected="${_grupoSelecionado===g}" type="button">
      <span class="pref-btn-name">${g}</span>
    </button>`).join("");
}

function _setupCargoOnChange(){
  const cargoSel=document.getElementById("inputCargo");
  cargoSel.onchange=function(){
    _prefSelecionada=this.value;
    const ed=EDITAIS[_prefSelecionada];
    const isCert=!ed||!ed.dataProva;
    if(ed&&ed.dataProva) document.getElementById("inputProva").value=ed.dataProva;
    else { document.getElementById("inputProva").value=""; _provaAuto=true; }
    atualizarModoProva(isCert);
  };
}

function atualizarModoProva(isCert){
  const provaEl=document.getElementById("inputProva");
  const lockSpan=document.getElementById("provaLockSpan");
  if(isCert){
    provaEl.removeAttribute("readonly");
    provaEl.style.background="";provaEl.style.color="";provaEl.style.cursor="";
    provaEl.title="Defina a data do seu exame";
    if(lockSpan){lockSpan.textContent="📅 você define a data";lockSpan.style.color="#2563EB";}
  } else {
    provaEl.setAttribute("readonly","");
    provaEl.style.background="#f8fafc";provaEl.style.color="#64748b";provaEl.style.cursor="default";
    provaEl.title="Data fixada pelo edital";
    if(lockSpan){lockSpan.textContent="🔒 fixada pelo edital";lockSpan.style.color="#2FB374";}
  }
  atualizarPrazoSetup();
}

/* ── PRAZO ESTIMADO E DATA DA PROVA SUGERIDA ────────────────────
   Antes o aluno tinha de adivinhar a data do exame antes de saber quanto
   tempo o conteudo leva. Agora ele informa inicio e horas por dia, ve o
   prazo na hora e a Bussola preenche a data. Continua podendo trocar:
   quem ja agendou o exame digita a data e o campo para de ser sugerido. */
let _provaAuto=true;

function _fmtPrazo(dias){
  if(dias<14) return dias+" dias";
  if(dias<70) return Math.round(dias/7)+" semanas";
  const m=Math.round(dias/30);
  return m+(m===1?" mes":" meses");
}
function _dataBR(iso){
  if(!iso) return "";
  try{ return parseDate(iso).toLocaleDateString("pt-BR"); }catch(e){ return iso; }
}

/* Le os CAMPOS do formulario, e nao o STATE: aqui o aluno ainda esta
   decidindo, e nada foi salvo. Mede com um STATE temporario e desfaz. */
function calcPrazoDoFormulario(){
  const inicioEl=document.getElementById("inputInicio");
  const horasEl=document.getElementById("inputHoras");
  const cargoEl=document.getElementById("inputCargo");
  if(!inicioEl||!horasEl) return null;
  const inicio=inicioEl.value;
  if(!inicio) return null;
  const editKey=(cargoEl&&cargoEl.value)||_prefSelecionada;
  if(!editKey||!EDITAIS[editKey]) return null;
  const _prev={inicio:STATE.inicio,horasDia:STATE.horasDia,
               diasLivres:STATE.diasLivres,prefeitura:STATE.prefeitura};
  STATE.inicio=inicio;
  STATE.horasDia=parseFloat(horasEl.value)||3;
  STATE.diasLivres=[..._dowSelected].sort((a,b)=>a-b);
  STATE.prefeitura=editKey;
  let r=null; try{ r=calcPrazoConteudo(); }catch(e){}
  Object.assign(STATE,_prev);
  return r;
}

function atualizarPrazoSetup(){
  const hintEl=document.getElementById("prazoHint");
  const provaEl=document.getElementById("inputProva");
  const provaHint=document.getElementById("provaHint");
  const lockSpan=document.getElementById("provaLockSpan");
  if(!hintEl||!provaEl||!provaHint) return;
  const cargoEl=document.getElementById("inputCargo");
  const ed=EDITAIS[(cargoEl&&cargoEl.value)||_prefSelecionada];
  // Concurso com data fixada pelo edital: nao ha o que sugerir.
  if(ed&&ed.dataProva){ hintEl.hidden=true; provaHint.hidden=true; return; }
  const r=calcPrazoDoFormulario();
  if(!r){ hintEl.hidden=true; provaHint.hidden=true; return; }

  const longo=r.diasCorridos>120;   // acima de ~4 meses vale sugerir mais horas
  hintEl.className="prazo-hint"+(longo?" alerta":"");
  hintEl.innerHTML=`<span class="ph-ic">${longo?"⏳":"⚡"}</span><span>`
    +`<strong>${r.density} tópico${r.density>1?"s":""} por dia.</strong> `
    +`Você fecha os ${r.total} tópicos do edital em cerca de `
    +`<strong>${_fmtPrazo(r.diasCorridos)}</strong> e fica pronto para o exame em `
    +`<strong>${_dataBR(r.provaSugerida)}</strong>.`
    +(longo?" Aumentar as horas por dia encurta bastante esse prazo.":"")
    +`</span>`;
  hintEl.hidden=false;

  if(_provaAuto){
    provaEl.value=r.provaSugerida;
    if(lockSpan){ lockSpan.textContent="🧭 sugerida pela Bússola"; lockSpan.style.color="#2FB374"; }
    provaHint.innerHTML="Já tem data marcada para o exame? Troque aqui e a Bússola reajusta o ritmo.";
    provaHint.hidden=false;
    return;
  }

  if(lockSpan){ lockSpan.textContent="📅 você definiu"; lockSpan.style.color="#2563EB"; }
  const escolhida=provaEl.value;
  const btn=`<button type="button" class="btn-prazo" data-action="usarPrazoSugerido">usar ${_dataBR(r.provaSugerida)}</button>`;
  if(escolhida&&escolhida<r.provaSugerida){
    const faltam=Math.round((parseDate(r.provaSugerida)-parseDate(escolhida))/86400000);
    provaHint.innerHTML=`⚠️ Nesse prazo o conteúdo não fecha inteiro: faltam <b>${faltam} dia${faltam>1?"s":""}</b>. `
      +`A Bússola sugere <b>${_dataBR(r.provaSugerida)}</b>. ${btn}`;
  } else if(escolhida&&escolhida>r.provaSugerida){
    const folga=Math.round((parseDate(escolhida)-parseDate(r.provaSugerida))/86400000);
    provaHint.innerHTML=`O conteúdo fecha bem antes: sobram <b>${folga} dia${folga>1?"s":""}</b> para revisar e treinar. ${btn}`;
  } else {
    provaHint.innerHTML=`A Bússola sugere <b>${_dataBR(r.provaSugerida)}</b>. ${btn}`;
  }
  provaHint.hidden=false;
}

/* Mudou inicio ou horas: recalcula. Nao mexe no _provaAuto. */
function recalcularPlano(){ atualizarPrazoSetup(); }

/* O aluno digitou a propria data: a Bussola para de sobrescrever. */
function provaManual(){ _provaAuto=false; atualizarPrazoSetup(); }

/* Volta para a data calculada pela Bussola. */
function usarPrazoSugerido(){ _provaAuto=true; atualizarPrazoSetup(); }

function selecionarGrupo(grupo, userAction){
  _grupoSelecionado=grupo;
  document.querySelectorAll(".pref-btn").forEach(b=>{b.classList.remove("selected");b.setAttribute("aria-selected","false");});
  const btn=document.getElementById("grupo-btn-"+CSS.escape(grupo));
  if(btn){btn.classList.add("selected");btn.setAttribute("aria-selected","true");}
  const triggerText=document.getElementById("concursoTriggerText");
  if(triggerText){triggerText.textContent=grupo;triggerText.classList.remove("concurso-trigger-placeholder");}
  closeConcursoDropdown();
  const grupos=getGrupos();
  const items=grupos[grupo]||[];
  const cargoSel=document.getElementById("inputCargo");
  cargoSel.innerHTML=items.map(({key,ed})=>`<option value="${key}">${ed.cargos&&ed.cargos[0]?ed.cargos[0]:ed.nome}</option>`).join("");
  _prefSelecionada=cargoSel.value;
  const firstEd=EDITAIS[_prefSelecionada];
  const isCertGrupo=!firstEd||!firstEd.dataProva;
  if(firstEd&&firstEd.dataProva) document.getElementById("inputProva").value=firstEd.dataProva;
  else if(isCertGrupo) document.getElementById("inputProva").value="";
  atualizarModoProva(isCertGrupo);
  document.getElementById("cargoRow").style.display="block";
  _setupCargoOnChange();
  renderCursinhoSelect();
  if(userAction&&STATE.inicio) document.getElementById("inputNome").value=STATE.nome||"";
}

/* backward-compat: dado key do edital, restaura grupo+cargo corretos */
function selecionarPref(key, userAction){
  const ed=EDITAIS[key];
  if(!ed) return;
  _prefSelecionada=key;
  const grupo=ed.grupo||ed.estado||"Outros";
  _grupoSelecionado=grupo;
  document.querySelectorAll(".pref-btn").forEach(b=>{b.classList.remove("selected");b.setAttribute("aria-selected","false");});
  const btn=document.getElementById("grupo-btn-"+CSS.escape(grupo));
  if(btn){btn.classList.add("selected");btn.setAttribute("aria-selected","true");}
  const triggerText=document.getElementById("concursoTriggerText");
  if(triggerText){triggerText.textContent=grupo;triggerText.classList.remove("concurso-trigger-placeholder");}
  const grupos=getGrupos();
  const items=grupos[grupo]||[];
  const cargoSel=document.getElementById("inputCargo");
  cargoSel.innerHTML=items.map(({key:k,ed:e})=>`<option value="${k}"${k===key?" selected":""}>${e.cargos&&e.cargos[0]?e.cargos[0]:e.nome}</option>`).join("");
  cargoSel.value=key;
  const isCertPref=!ed.dataProva;
  if(ed.dataProva) document.getElementById("inputProva").value=ed.dataProva;
  else document.getElementById("inputProva").value=STATE.prova||"";
  atualizarModoProva(isCertPref);
  document.getElementById("cargoRow").style.display="block";
  _setupCargoOnChange();
  renderCursinhoSelect();
  if(userAction&&STATE.inicio) document.getElementById("inputNome").value=STATE.nome||"";
}

function toggleConcursoDropdown(){
  const dd=document.getElementById("concursoDropdown");
  const trigger=document.getElementById("concursoTrigger");
  const isOpen=dd.classList.contains("open");
  if(isOpen){ closeConcursoDropdown(); }
  else{
    dd.classList.add("open");
    trigger.classList.add("open");
    trigger.setAttribute("aria-expanded","true");
  }
}
function closeConcursoDropdown(){
  const dd=document.getElementById("concursoDropdown");
  const trigger=document.getElementById("concursoTrigger");
  if(dd){ dd.classList.remove("open"); }
  if(trigger){ trigger.classList.remove("open"); trigger.setAttribute("aria-expanded","false"); }
}
// Close dropdown on outside click
document.addEventListener("click",function(e){
  const picker=e.target.closest(".concurso-picker");
  if(!picker) closeConcursoDropdown();
});


/* ── BACKUP: EXPORTAR / IMPORTAR ── */
/* Banner "Como funciona o Método Bússola": aberto por padrão até o aluno
   fechá-lo uma vez (preferência lembrada no navegador). */
function fecharBannerMetodo(){
  STATE.bannerMetodoFechado=true; save();
  const b=document.getElementById("info511"); if(b) b.style.display="none";
  showToast("👍 Guia do método ocultado. Qualquer dúvida, ele está na Palavra do Coach.");
}
function toggleInfo511(forcar){
  const body=document.getElementById("info511Body");
  const tog=document.getElementById("info511Toggle");
  if(!body) return;
  const abrir=forcar!==undefined?forcar:body.style.display==="none";
  body.style.display=abrir?"block":"none";
  if(tog) tog.textContent=abrir?"▾ fechar":"▸ ver o método";
  if(forcar===undefined){ try{ localStorage.setItem("bussola_metodo_fechado",abrir?"":"1"); }catch(e){} }
}


function reprocessarFaltantes(){
  if(!STATE.inicio){ alert("Nenhum cronograma ativo."); return; }
  // Manter dias com percepcao definida, limpar o resto
  const novosDias={};
  Object.entries(STATE.dias).forEach(([k,v])=>{
    if(v&&v.percepcao) novosDias[k]={percepcao:v.percepcao,estrelas:v.estrelas};
    else if(v&&(v.skipped||v.transferido||v.recuperado)) novosDias[k]={skipped:v.skipped,transferido:v.transferido,recuperado:v.recuperado};
  });
  STATE.dias=novosDias;
  STATE.semanaOffset=0;
  save(); renderTudo(); navTo("hoje");
  document.getElementById("setupModal").classList.remove("open");
  alert("Cronograma reprocessado. Histórico de progresso mantido.");
}

let _confirmReinicio=false;
function confirmarReinicio(){
  if(!_confirmReinicio){
    _confirmReinicio=true;
    document.getElementById("btnConfirmReinicio").style.display="inline-block";
    document.getElementById("btnCancelReinicio").style.display="inline-block";
    document.getElementById("reinicioWarning").style.display="block";
    return;
  }
  reiniciarCompleto();
}
function cancelarReinicio(){
  _confirmReinicio=false;
  document.getElementById("btnConfirmReinicio").style.display="none";
  document.getElementById("btnCancelReinicio").style.display="none";
  document.getElementById("reinicioWarning").style.display="none";
}
function reiniciarCompleto(){
  _confirmReinicio=false;
  STATE.dias={};
  STATE.semanaOffset=0; STATE.mesOffset=0;
  save(); renderTudo(); navTo("hoje");
  document.getElementById("setupModal").classList.remove("open");
  cancelarReinicio();
  alert("Cronograma reiniciado completamente.");
}

let _dowSelected=[]; // dias de DESCANSO (não estudo)

function renderDowGrid(){
  const nomes=["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];
  document.getElementById("dowGrid").innerHTML=nomes.map((n,i)=>{
    const isLivre=_dowSelected.includes(i);
    return`<div class="dow-btn${isLivre?" dow-livre":""}" data-action="toggleDow" data-i="${i}" role="button" tabindex="0" aria-pressed="${isLivre}" title="${isLivre?n+' (descanso)':n}">${n}</div>`;
  }).join("");
}
function toggleDow(i){
  const idx=_dowSelected.indexOf(i);
  // Mínimo de 3 dias de estudo por semana (até 4 dias livres).
  // O ciclo 5+1+1 conta dias de ESTUDO, então continua íntegro — apenas
  // se distribui por mais dias de calendário; a densidade de tópicos/dia
  // se ajusta sozinha (getTopicosDiaBase).
  if(idx>=0) _dowSelected.splice(idx,1);
  else{ if(_dowSelected.length>=4){ alert("Máximo de 4 dias de descanso. O plano precisa de pelo menos 3 dias de estudo por semana."); return; } _dowSelected.push(i); }
  renderDowGrid();
  atualizarPrazoSetup();   // dia de descanso muda o prazo e a data sugerida
}

/* ── MEU CURSINHO ──────────────────────────────────────────────
   O aluno informa o curso que já assina e os tópicos passam a
   exibir o link da aula. A lista sai de cursos.js, filtrada pelo
   edital ativo: quem estuda para concurso não vê cursinho de CFP.

   CHAVE ÚNICA DO RECURSO (25/08/2026): CURSOS_ATIVO=false apaga a
   feature inteira — some o seletor de Configurações e some o botão
   de aula em todo tópico. Mesmo papel que COACH_IA_URL="" faz com o
   Coach. O código e os 8 testes continuam de pé; só os dados saíram
   de cursos.js. Religar exige DUAS coisas: trocar para true aqui E
   repor os dados em cursos.js (ver cabeçalho daquele arquivo). Não
   religue sem autorização escrita do fornecedor do curso. */
const CURSOS_ATIVO=false;
function renderCursinhoSelect(){
  const row=document.getElementById("rowCursinho");
  const sel=document.getElementById("selCursinho");
  if(!row||!sel) return;
  if(!CURSOS_ATIVO){ row.style.display="none"; sel.innerHTML=""; return; }
  const edital=_prefSelecionada||STATE.prefeitura||"";
  const lista=getProvedores(edital);
  if(!lista.length){ row.style.display="none"; sel.innerHTML=""; return; }
  row.style.display="";
  sel.innerHTML=`<option value="">Não tenho cursinho / prefiro não informar</option>`+
    lista.map(function(p){
      const n=contarTopicosComAula(edital,p.id);
      const marca=n>0?` — ${n} tópico${n!==1?"s":""} com aula`:" — em breve";
      return `<option value="${esc(p.id)}"${STATE.cursinho===p.id?" selected":""}>${esc(p.nome)}${marca}</option>`;
    }).join("");
  renderCursinhoNota();
}
function renderCursinhoNota(){
  const el=document.getElementById("cursinhoNota");
  if(!el) return;
  const edital=_prefSelecionada||STATE.prefeitura||"";
  const p=STATE.cursinho?getProvedor(STATE.cursinho):null;
  if(!p){ el.innerHTML="Informe seu cursinho para abrir a aula direto do tópico do cronograma."; return; }
  const n=contarTopicosComAula(edital,p.id);
  el.innerHTML=n>0
    ? `▶ ${n} tópico${n!==1?"s":""} já abre${n===1?"":"m"} a aula do ${esc(p.nome)} direto do cronograma. O acesso continua sendo pela sua conta no curso.`
    : `Ainda não há aulas vinculadas ao ${esc(p.nome)} neste edital. Assim que houver, elas aparecem sozinhas nos tópicos.`;
}

function openSetupModal(){
  // Sem data salva = primeira configuracao, a Bussola sugere. Com data salva =
  // decisao do aluno, e ela so muda se ele pedir. Precisa vir ANTES de popular
  // o formulario: selecionarPref chama atualizarModoProva, que ja recalcula.
  _provaAuto=!STATE.prova;
  // Só restaura dias salvos se o cronograma já foi configurado; caso contrário começa vazio
  _dowSelected=STATE.inicio?[...(STATE.diasLivres||[])]:[]; 
  const _hojeIso=(new Date()).toISOString().split('T')[0];
  document.getElementById("inputNome").value=STATE.nome||"";
  document.getElementById("inputInicio").value=STATE.inicio||"";
  const _edAtual=EDITAIS[STATE.prefeitura]||EDITAIS[_prefSelecionada];
  const _isCertAtual=_edAtual&&!_edAtual.dataProva;
  document.getElementById("inputProva").value=(_edAtual&&_edAtual.dataProva)||(STATE.prova&&!_isCertAtual?STATE.prova:"")||"";
  atualizarModoProva(_isCertAtual);
  if(STATE.prefeitura&&EDITAIS[STATE.prefeitura]) selecionarPref(STATE.prefeitura,false);
  document.getElementById("inputHoras").value=String(STATE.horasDia||3);
  const hasInicio=!!STATE.inicio;
  document.getElementById("restartSection").style.display=hasInicio?"block":"none";
  document.getElementById("btnFecharModal").style.display=hasInicio?"flex":"none";
  const btnSalvar=document.getElementById("btnIniciarBússola");
  btnSalvar.textContent=hasInicio?"💾 Salvar Configurações":"⚡ Iniciar Meu Cronograma";
  btnSalvar.disabled=false;
  document.getElementById("modalTitle").textContent=hasInicio?"Configurações do Cronograma":"Configure seu Cronograma";
  renderDowGrid();
  renderCursinhoSelect();
  atualizarPrazoSetup();
  document.getElementById("setupModal").classList.add("open");
}
function fecharModal(){
  cancelarReinicio();
  document.getElementById("setupModal").classList.remove("open");
}

/* Abre o aviso de cobertura como POP-UP, antes de distribuir.
   Antes o alerta so aparecia depois de tudo definido, e discreto demais:
   o aluno ficava sabendo quando ja nao havia o que decidir. */
function abrirModalCobertura(c){
  const el=document.getElementById("coberturaBody");
  if(el) el.innerHTML=getAvisoCoberturaHtml(c,true);
  const m=document.getElementById("coberturaModal");
  if(m) m.classList.add("open");
}
function fecharModalCobertura(){
  const m=document.getElementById("coberturaModal");
  if(m) m.classList.remove("open");
}
function ajustarCronograma(){
  fecharModalCobertura();
  document.getElementById("setupModal").classList.add("open");
}
function confirmarCronogramaParcial(){
  fecharModalCobertura();
  iniciarBússola(true);
}

function iniciarBússola(forcar){
  const nome=document.getElementById("inputNome").value.trim()||"Candidato";
  const editKey=document.getElementById("inputCargo").value||_prefSelecionada;
  const ed=EDITAIS[editKey];
  const cargoText=ed&&ed.cargos&&ed.cargos[0]?ed.cargos[0]:editKey;
  const i=document.getElementById("inputInicio").value;
  const p=document.getElementById("inputProva").value;
  const h=parseFloat(document.getElementById("inputHoras").value)||3;
  if(!i||!p){ showToast("⚠️ Preencha as datas de início e da prova!"); return; }
  if(i>=p){ showToast("⚠️ A data da prova deve ser posterior ao início!"); return; }
  const btn=document.getElementById("btnIniciarBússola");
  if(btn){ btn.disabled=true; btn.textContent="⏳ Salvando..."; }
  // Mede a cobertura com os valores do FORMULARIO, antes de gravar qualquer
  // coisa. Nao cobrindo, devolve a decisao ao aluno em vez de distribuir calado.
  if(!forcar){
    const _prev={inicio:STATE.inicio,prova:STATE.prova,horasDia:STATE.horasDia,
                 diasLivres:STATE.diasLivres,prefeitura:STATE.prefeitura};
    STATE.inicio=i; STATE.prova=p; STATE.horasDia=h;
    STATE.diasLivres=[..._dowSelected].sort((a,b)=>a-b); STATE.prefeitura=editKey;
    let _c=null; try{ _c=calcCoberturaEdital(); }catch(e){}
    Object.assign(STATE,_prev);           // desfaz ate o aluno decidir
    if(_c&&!_c.cobre&&_c.total){
      if(btn){ btn.disabled=false; btn.textContent="💾 Salvar Configurações"; }
      document.getElementById("setupModal").classList.remove("open");
      abrirModalCobertura(_c);
      return;
    }
  }
  _prefSelecionada=editKey;
  STATE.nome=nome; STATE.prefeitura=editKey; STATE.cargo=cargoText;
  STATE.concurso=ed?`${ed.nome.replace("Prefeitura de ","")} — ${cargoText}`:editKey;
  STATE.inicio=i; STATE.prova=p; STATE.horasDia=h;
  STATE.diasLivres=[..._dowSelected].sort((a,b)=>a-b);
  STATE.semanaOffset=0; save();
  if(btn){ btn.disabled=false; btn.textContent="💾 Salvar Configurações"; }
  document.getElementById("setupModal").classList.remove("open");
  renderTudo();
  navTo("hoje");
  // Alerta no ato de salvar: e aqui que o aluno decide o prazo, e era aqui que
  // o sistema ficava calado quando o edital nao cabia.
  let _cob=null; try{ _cob=calcCoberturaEdital(); }catch(e){}
  if(_cob&&!_cob.cobre&&_cob.total){
    showToast(`⚠️ Cobre só ${_cob.agendados} de ${_cob.total} tópicos. Precisaria de ${fmtHoras(_cob.horasNecessarias)} por dia.`);
  } else {
    showToast("🧭 Cronograma criado! Comece por aqui.");
  }
  // Logo após configurar, inicia o tour guiado (apenas no primeiro acesso)
  if(!onboardDone()) setTimeout(()=>startTour(), 650);
}

/* ───────── ONBOARDING: BOAS-VINDAS + TOUR GUIADO ───────── */
function onboardDone(){ try{ return localStorage.getItem("bussola_onboard_done")==="1"; }catch(e){ return false; } }
function markOnboardDone(){ try{ localStorage.setItem("bussola_onboard_done","1"); }catch(e){} }
function showWelcome(){
  document.getElementById("setupModal").classList.remove("open");
  document.getElementById("welcomeOverlay").classList.add("open");
}
function iniciarConfiguracao(){
  document.getElementById("welcomeOverlay").classList.remove("open");
  setTimeout(()=>{ document.getElementById("setupModal").classList.add("open"); }, 250);
}

const TOUR_STEPS=[
  {id:"nav-hoje",       t:"Hoje",                   d:"Seu ponto de partida diário: a Bússola mostra exatamente a tarefa de estudo do dia."},
  {id:"nav-cronograma", t:"Cronograma",             d:"Seu plano completo da semana, distribuído automaticamente até a data da prova."},
  {id:"nav-revisoes",   t:"Revisões",               d:"As revisões espaçadas aparecem aqui no momento certo de revisar cada matéria."},
  {id:"nav-simulado",   t:"Simulados",              d:"Registre seus simulados e acompanhe a evolução do seu desempenho."},
  {id:"nav-exercicios", t:"Exercícios",             d:"Questões por matéria e por tópico, com comentário liberado depois que você responde."},
  {id:"nav-materias",   t:"Conteúdo programático",  d:"Todo o conteúdo do edital organizado, com seu progresso em cada tópico."},
  {id:"nav-edital",     t:"Análise do Edital",      d:"A análise estratégica: o que mais cai e como priorizar seus estudos."}
];
let _tourI=0, _tourMobile=false;
function startTour(){
  if(document.getElementById("welcomeOverlay").classList.contains("open")) return;
  if(document.getElementById("setupModal").classList.contains("open")) return;
  _tourMobile = window.innerWidth<=768;
  if(_tourMobile){ document.getElementById("sidebar").classList.add("open"); }
  document.getElementById("tourDots").innerHTML=TOUR_STEPS.map(()=>`<span class="tour-dot"></span>`).join("");
  document.getElementById("tourRing").style.display="block";
  document.getElementById("tourCard").style.display="block";
  window.addEventListener("resize", _tourReposition);
  showTourStep(0);
}
function showTourStep(i){
  _tourI=i;
  const step=TOUR_STEPS[i];
  const el=document.getElementById(step.id);
  if(!el){ tourNext(); return; }
  try{ el.scrollIntoView({block:"nearest"}); }catch(e){}
  const r=el.getBoundingClientRect();
  const pad=6;
  const ring=document.getElementById("tourRing");
  ring.style.top=(r.top-pad)+"px";
  ring.style.left=(r.left-pad)+"px";
  ring.style.width=(r.width+pad*2)+"px";
  ring.style.height=(r.height+pad*2)+"px";
  document.getElementById("tourStepLabel").textContent=`Passo ${i+1} de ${TOUR_STEPS.length}`;
  document.getElementById("tourTitle").textContent=step.t;
  document.getElementById("tourText").textContent=step.d;
  document.getElementById("tourPrevBtn").style.visibility = i===0?"hidden":"visible";
  document.getElementById("tourNextBtn").textContent = i===TOUR_STEPS.length-1?"Concluir ✓":"Próximo";
  document.querySelectorAll("#tourDots .tour-dot").forEach((d,idx)=>d.classList.toggle("on",idx===i));
  // posiciona o card: à direita do item se couber, senão abaixo
  const card=document.getElementById("tourCard");
  const arrow=document.getElementById("tourArrow");
  const cw=card.offsetWidth, ch=card.offsetHeight, gap=16;
  let left, top;
  if(r.right+gap+cw < window.innerWidth-8){
    left=r.right+gap;
    top=Math.min(Math.max(8, r.top + r.height/2 - ch/2), window.innerHeight-ch-8);
    arrow.style.display="block";
    arrow.style.left="-7px";
    arrow.style.top=Math.min(Math.max(12, (r.top+r.height/2)-top-7), ch-22)+"px";
  } else {
    top=Math.min(r.bottom+gap, window.innerHeight-ch-8);
    left=Math.min(Math.max(8, r.left), window.innerWidth-cw-8);
    arrow.style.display="block";
    arrow.style.top="-7px";
    arrow.style.left=Math.min(Math.max(12, (r.left+r.width/2)-left-7), cw-22)+"px";
  }
  card.style.left=left+"px";
  card.style.top=top+"px";
}
function tourNext(){ if(_tourI>=TOUR_STEPS.length-1){ endTour(false); } else { showTourStep(_tourI+1); } }
function tourPrev(){ if(_tourI>0) showTourStep(_tourI-1); }
function _tourReposition(){ showTourStep(_tourI); }
function endTour(skipped){
  document.getElementById("tourRing").style.display="none";
  document.getElementById("tourCard").style.display="none";
  window.removeEventListener("resize", _tourReposition);
  if(_tourMobile){ document.getElementById("sidebar").classList.remove("open"); }
  markOnboardDone();
  if(!skipped) showToast("🧭 Tudo pronto! Bons estudos.");
}

/* ── ANÁLISE DO EDITAL (PDF servido como arquivo) ──
   A análise é escolhida em 3 níveis: primeiro por CHAVE de edital (override,
   útil quando um grupo tem vários exames distintos — ex.: Certificações),
   depois pelo GRUPO do edital ativo, e por fim o fallback.
   Para adicionar a análise de uma certificação: suba o PDF na pasta app/ e
   registre uma entrada { url, sub, arquivo } por grupo (ou por chave). */
const EDITAL_ANALISES={
  /* Nível 2 (por GRUPO) está VAZIO desde 25/08/2026: com o produto só de
     certificações, todas caem no mesmo grupo "Certificações" e cada uma
     precisa da sua própria análise, resolvida por CHAVE abaixo. O mapa
     fica de pé para quando existir um grupo com análise compartilhada. */
};
const EDITAL_ANALISES_POR_CHAVE={
  "cfpPlanejar":{ url:"edital-cfp.pdf", sub:"Análise Estratégica — Certificação CFP® (Planejar)", arquivo:"Analise_Estrategica_Certificacao_CFP.pdf" },
  "cpaAnbima":{ url:"edital-cpa.pdf", sub:"Análise do Edital · CPA Anbima", arquivo:"Analise_do_Edital_CPA_Anbima.pdf" }
};
/* NÃO EXISTE MAIS FALLBACK (25/08/2026). Antes, quem não tinha análise
   registrada caía na do Campina Grande, o que passou a ser impossível
   quando os concursos saíram. Agora getEditalAnalise devolve null e a
   tela avisa que a análise ainda não saiu, em vez de mostrar a análise
   de outro exame. CA-600 e FBB estão nesse estado até os PDFs chegarem. */
const EDITAL_ANALISE_FALLBACK=null;
function getEditalAnalise(){
  const ed=(typeof EDITAIS!=="undefined"&&EDITAIS[STATE.prefeitura])||null;
  return EDITAL_ANALISES_POR_CHAVE[STATE.prefeitura]
      || (ed&&EDITAL_ANALISES[ed.grupo])
      || EDITAL_ANALISE_FALLBACK;
}
function getEditalUrl(){ const a=getEditalAnalise(); return a?a.url:""; }
function renderEdital(){
  const a=getEditalAnalise();
  const f=document.getElementById("editalFrame");
  const d=document.getElementById("editalDownload");
  const s=document.getElementById("editalSubtitulo");
  const box=f?f.parentElement:null;
  if(!a){                       // certificação ainda sem análise publicada
    if(f) f.removeAttribute("src");
    if(box) box.style.display="none";
    if(d) d.style.display="none";
    if(s) s.textContent="A análise desta certificação ainda não foi publicada. Assim que sair, ela aparece aqui.";
    return;
  }
  if(box) box.style.display="";
  if(d) d.style.display="";
  if(f&&f.getAttribute("src")!==a.url) f.src=a.url;
  if(d){ d.href=a.url; d.setAttribute("download",a.arquivo); }
  if(s) s.textContent=a.sub;
}

/* ── POPUP DE SEGUNDA-FEIRA (motivação + Adicionar ao Calendário) ──
   Abre 1x por semana, só na segunda, para aluno com cronograma ativo.
   A frase é determinística pela semana (a mesma o dia inteiro, mesmo
   recarregando). STATE.popupSegundaEm guarda a segunda já exibida e
   sincroniza via Firestore — não reaparece em outro dispositivo. */
const FRASES_SEGUNDA=[
  "Ninguém decora um edital numa semana. Aprova quem soma segundas como esta, uma depois da outra.",
  "Enquanto a maioria espera a vontade aparecer, você já tem o dia de hoje decidido. Abra o cronograma.",
  "Cada tópico que você fecha nesta semana é uma questão a menos para te assustar na prova.",
  "Talento resolve um dia bom. Aprovação exige o dia comum, feito mesmo sem vontade.",
  "A banca não pergunta se você estava inspirado. Ela pergunta o conteúdo. Segunda é dia de responder.",
  "Sua semana não precisa ser perfeita. Precisa acontecer.",
  "O edital chegou igual para todo mundo. A diferença aparece no que você faz com a segunda-feira.",
  "Cinco dias de conteúdo, um de retorno técnico, um de exercícios. Parece pouco. É isso que vira nomeação.",
  "As semanas que ninguém vê são as que decidem o resultado que todo mundo comenta.",
  "Estudar hoje custa algumas horas. Recomeçar do zero no próximo edital custa um ano.",
  "Revisão de 7 dias rende mais que maratona de véspera. O método já sabe disso por você.",
  "Quem estuda com plano não corre atrás do tempo. Anda ao lado dele.",
  "Ansiedade não cobre matéria. Uma semana de execução, sim.",
  "A data da prova não muda. Muda quanto do edital você leva até lá.",
  "Quem revisa é quem lembra na hora da questão. Seu ciclo recomeça agora.",
  "Todo aprovado que você admira já começou numa segunda-feira comum, igual a esta.",
  "Estudar cansado ainda conta. Planejar descansado, não.",
  "A cada tópico dominado, encolhe o grupo de concorrentes que sabe aquilo tão bem quanto você.",
  "Seu cronograma já decidiu o que estudar hoje. Sobrou a parte mais simples: fazer.",
  "Consistência é o único atalho que existe. Ele começa toda segunda.",
  "O que a constância resolve agora, a reta final cobra com juros.",
  "A prova dura uma manhã. A preparação é todo dia, inclusive hoje.",
  "Aprovação é feita de semanas comuns, bem executadas. Esta é uma delas.",
  "Você tem uma semana nova e um plano pronto. Falta abrir o cronograma e começar.",
];
function checarPopupSegunda(){
  if(!STATE.inicio) return;
  const hoje=new Date();
  if(hoje.getDay()!==1) return;                        // só segunda-feira
  const hojeKey=fmt(hoje);
  if(STATE.prova&&hojeKey>STATE.prova) return;         // depois da prova, não
  if(STATE.popupSegundaEm===hojeKey) return;           // já mostrou esta semana
  if(document.getElementById("popupSegunda")) return;  // já está aberto
  const idx=Math.floor(hoje.getTime()/604800000)%FRASES_SEGUNDA.length;
  const ov=document.createElement("div");
  ov.className="ps-overlay"; ov.id="popupSegunda";
  ov.innerHTML=`<div class="ps-card">
    <div class="ps-emoji">🧭</div>
    <div class="ps-titulo">Boa semana de estudos!</div>
    <p class="ps-frase">${esc(FRASES_SEGUNDA[idx])}</p>
    <button class="ps-cta" data-action="popupSegundaAgenda">📅 Adicionar a semana ao meu calendário</button>
    <button class="ps-depois" data-action="fecharPopupSegunda">Agora não</button>
  </div>`;
  document.body.appendChild(ov);
  STATE.popupSegundaEm=hojeKey; save();
}
function fecharPopupSegunda(){ const el=document.getElementById("popupSegunda"); if(el) el.remove(); }
function popupSegundaAgenda(){ fecharPopupSegunda(); navTo("agenda"); }

/* ── BALÃO DE INSTALAÇÃO DO PWA ──
   Intercepta o prompt nativo do navegador (beforeinstallprompt) e mostra,
   no lugar, um convite no estilo do app — bolha de chat do Coach, no canto
   inferior. Regras: só celular, só aluno com cronograma, só se o app ainda
   não está instalado, e "agora não" silencia por 14 dias (localStorage —
   instalação é por aparelho, não sincroniza). iPhone não tem o prompt:
   o botão mostra o passo a passo do Safari. */
let _pwaPromptEvt=null;
if(typeof window!=="undefined"){
  window.addEventListener("beforeinstallprompt",(e)=>{
    e.preventDefault();          // cala o aviso nativo do navegador
    _pwaPromptEvt=e;
    setTimeout(checarBalaoPwa,1200);
  });
}
function _pwaInstalado(){
  try{
    return (window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches)||window.navigator.standalone===true;
  }catch(e){ return false; }
}
function _ehIos(){ return /iphone|ipad|ipod/i.test(navigator.userAgent); }
function checarBalaoPwa(){
  if(_pwaInstalado()) return;
  if(!STATE.inicio) return;
  if(window.innerWidth>768) return;                       // foco no celular
  if(!_pwaPromptEvt&&!_ehIos()) return;                    // sem como instalar
  if(document.getElementById("pwaBalao")) return;
  if(document.getElementById("popupSegunda")) return;      // não concorre com o popup
  try{
    const adiado=+localStorage.getItem("bussola_pwa_adiado")||0;
    if(Date.now()-adiado<14*86400000) return;              // adiado há menos de 14 dias
  }catch(e){}
  _montarBalaoPwa();
}
function _montarBalaoPwa(){
  const b=document.createElement("div");
  b.className="pwa-balao"; b.id="pwaBalao";
  b.innerHTML=`<div class="pb-avatar">🧭</div>
    <div class="pb-corpo">
      <div class="pb-texto"><strong>Estude pelo app!</strong> Instale a Bússola na sua tela inicial: tela cheia, mais rápido e funciona offline.</div>
      <div class="pb-acoes">
        <button class="pb-instalar" data-action="instalarPwa">📲 Instalar</button>
        <button class="pb-depois" data-action="adiarPwa">Agora não</button>
      </div>
    </div>`;
  document.body.appendChild(b);
}
/* Menu Recursos -> "Instalar o App": caminho manual para quem dispensou o
   balão e mudou de ideia (ou quer instalar no computador). */
function menuInstalarApp(){
  if(typeof closeSidebarMobile==="function") closeSidebarMobile();
  if(_pwaInstalado()){ showToast("📲 Você já está usando o app instalado!"); return; }
  try{ localStorage.removeItem("bussola_pwa_adiado"); }catch(e){}
  if(_pwaPromptEvt){ instalarPwa(); return; }
  if(_ehIos()){
    const b=document.getElementById("pwaBalao"); if(b) b.remove();
    _montarBalaoPwa();
    instalarPwa();                       // troca o balão pelo passo a passo do Safari
    return;
  }
  showToast("📲 No menu do navegador (⋮ ou barra de endereço), toque em \"Instalar app\" / \"Adicionar à tela inicial\".");
}
async function instalarPwa(){
  const b=document.getElementById("pwaBalao");
  if(_pwaPromptEvt){
    const evt=_pwaPromptEvt; _pwaPromptEvt=null;
    if(b) b.remove();
    try{
      evt.prompt();
      const r=await evt.userChoice;
      if(r&&r.outcome==="accepted") showToast("📲 Bússola instalada! Procure o ícone na sua tela inicial.");
    }catch(e){}
    return;
  }
  // iPhone/iPad: sem prompt — vira passo a passo
  if(b) b.querySelector(".pb-corpo").innerHTML=`
    <div class="pb-texto"><strong>No iPhone é assim:</strong><br>1. Toque em <strong>Compartilhar</strong> (□↑) na barra do Safari<br>2. Escolha <strong>"Adicionar à Tela de Início"</strong></div>
    <div class="pb-acoes"><button class="pb-depois" data-action="adiarPwa">Entendi</button></div>`;
}
function adiarPwa(){
  try{ localStorage.setItem("bussola_pwa_adiado",String(Date.now())); }catch(e){}
  const b=document.getElementById("pwaBalao"); if(b) b.remove();
}

/* ── NAVEGAÇÃO ── */
function navTo(pg){
  STATE.pagina=pg; save();
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach(n=>n.classList.remove("active"));
  const pageEl=document.getElementById("page-"+pg);
  const navEl=document.getElementById("nav-"+pg);
  if(pageEl) pageEl.classList.add("active");
  if(navEl)  navEl.classList.add("active");
  if(pg==="cronograma"){
    setCronView(STATE.cronView||"semana");
    const b511=document.getElementById("info511");
    if(b511) b511.style.display=STATE.bannerMetodoFechado?"none":"flex";
    // Mobile: aluno cai direto no card de hoje (visão semanal, semana atual)
    if(window.innerWidth<=768&&(STATE.cronView||"semana")==="semana"&&!STATE.semanaOffset) scrollAteCardHoje();
  }
  if(pg==="dashboard")  { renderMapaCalorPage("mapaGrid"); renderDashboard(); }
  if(pg==="materias")   renderMaterias();
  if(pg==="exercicios") renderExercicios();
  if(pg==="revisoes")   renderRevisoesPage();
  if(pg==="simulado")   renderSimuladoPage();
  if(pg==="hoje")       renderHoje();
  if(pg==="edital")     renderEdital();
  if(pg==="conteudo")   renderConteudo();
  if(pg==="coach")      renderCoachPage();
  if(pg==="agenda")     renderAgendaPage();
  // fechar sidebar no mobile
  closeSidebarMobile();
}

function toggleSidebar(){
  const sb=document.getElementById("sidebar");
  const ov=document.getElementById("sidebarOverlay");
  sb.classList.toggle("open");
  ov.classList.toggle("open");
}
function closeSidebarMobile(){
  if(window.innerWidth<=768){
    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("sidebarOverlay").classList.remove("open");
  }
}

/* ── RENDER GERAL ── */
function updateNavBadges(){
  const hojeKey=fmt(new Date());
  // hojeBadge
  let hojeFeito=true;
  if(STATE.inicio){
    const hojeDow=new Date().getDay();
    if(!isDiaLivre(hojeDow)&&!isProvaDay(hojeKey)&&(!STATE.prova||hojeKey<=STATE.prova)){
      const posHoje=getCicloPos(hojeKey);
      if(posHoje>=0){
        if(isSimuladoDay(hojeKey)){ hojeFeito=!!STATE.dias[hojeKey]?.simuladoFeito; }
        else if(isRetaFinalDay(hojeKey)||isRevisaoGeralDay(hojeKey)){ hojeFeito=true; }
        else { hojeFeito=!!(getDayPercepcao(hojeKey)||STATE.dias[hojeKey]?.percepcao); }
      }
    }
  }
  const hojeBadgeEl=document.getElementById("hojeBadge");
  if(hojeBadgeEl) hojeBadgeEl.style.display=hojeFeito?"none":"inline-block";
  // coachNavBadge — leitura diária da Palavra do Coach
  const coachPendente=!!STATE.inicio&&STATE.coachLidoEm!==hojeKey;
  const coachNavEl=document.getElementById("coachNavBadge");
  if(coachNavEl) coachNavEl.style.display=coachPendente?"inline-block":"none";
  // revBadge — só conta blocos com tópicos disponíveis
  const _bl=buildBlocosRevisao();
  const _revDisp=_bl.filter(b=>b.estado==="disponivel"&&b.total>0).length;
  const revBadgeEl=document.getElementById("revBadge");
  if(revBadgeEl){ revBadgeEl.textContent=_revDisp; revBadgeEl.style.display=_revDisp>0?"inline-block":"none"; }
  // simBadge — percorre do inicio até hoje: mini simulados + revisão geral
  let simPendente=false;
  if(STATE.inicio){
    let d=parseDate(STATE.inicio);
    while(fmt(d)<=hojeKey){
      const dk=fmt(d);
      if(isSimuladoDay(dk)&&!STATE.dias[dk]?.simuladoFeito){ simPendente=true; break; }
      if(isRevisaoGeralDay(dk)&&!STATE.dias[dk]?.revisaoGeralFeita){ simPendente=true; break; }
      d.setDate(d.getDate()+1);
    }
  }
  const simBadgeEl=document.getElementById("simBadge");
  if(simBadgeEl) simBadgeEl.style.display=simPendente?"inline-block":"none";
  // notifDot
  const notifDotEl=document.getElementById("notifDot");
  if(notifDotEl) notifDotEl.style.display=(_revDisp>0||simPendente||!hojeFeito||coachPendente)?"block":"none";
}

function renderTudo(){
  const ed=EDITAIS[STATE.prefeitura];
  const partes=STATE.concurso.split("—");
  document.getElementById("tbNome").textContent=partes[0]?.trim()||"Bússola";
  document.getElementById("tbCargo").textContent=partes[1]?.trim()||"Configure";
  // Avatar iniciais
  const iniciais=STATE.nome.split(" ").map(w=>w[0]||"").slice(0,2).join("").toUpperCase()||"🧭";
  document.getElementById("topbarAvatar").textContent=iniciais;
  // Dias para prova
  const dias=calcDiasRestantes();
  document.getElementById("diasCount").textContent=dias!==null?dias:"—";
  const provaDate=STATE.prova?parseDate(STATE.prova):null;
  document.getElementById("diasSub").textContent=dias===0?"Hoje é o dia! 🎯":provaDate?`${nomeDiaSemana(provaDate)} · ${provaDate.toLocaleDateString("pt-BR")}`:"Configure o concurso";
  // Streak
  const streak=calcStreak();
  document.getElementById("streakCount").textContent=streak;
  // Saudação
  const hr=new Date().getHours();
  const saud=hr<12?"Bom dia":hr<18?"Boa tarde":"Boa noite";
  const _mt=document.getElementById("mainTitle");
  if(_mt) _mt.textContent=`${saud}! 👋`;   // o dashboard não tem mais título: a bússola ocupa o topo
  // Hoje título
  document.getElementById("hojeTitulo").textContent="🎯 Foco de Hoje";
  document.getElementById("hojeSub").textContent="Sua missão de hoje.";
  updateNavBadges();
  renderDashboard();
}

function renderDashboard(){
  const prog=calcProgresso();
  const conf=calcConfiancaMedia();
  const horas=calcHorasEstudadas();
  const dias=calcDiasConcluidos();
  const ritmo=calcRitmo();
  const {rev7,rev30}=calcRevisoes();
  const totalRev=rev7.length+rev30.length;
  const projecao=calcProjecao();

  // Painel collapsed stats
  const det=calcProgressoDetalhado();
  document.getElementById("pcsRitmo").textContent=ritmo.emoji+" "+ritmo.curto;
  // Mostrar x/total dias para dar contexto real ao percentual
  const progLabel=det.total>0?`📊 Plano: ${det.done}/${det.total} dias (${prog}%)`:`📊 ${det.done} dia${det.done!==1?"s":""} concluído${det.done!==1?"s":""}`;
  document.getElementById("pcsProg").textContent=progLabel;
  // Mensagem de confiança com orientação
  let confTxt, confOrient="";
  if(!conf){ confTxt="🧠 — confiança"; }
  else if(conf>=80){ confTxt=`🧠 ${conf}% confiança`; confOrient="· Foque em simulados"; }
  else if(conf>=60){ confTxt=`🧠 ${conf}% confiança`; confOrient="· Pratique mais exercícios"; }
  else if(conf>=40){ confTxt=`🧠 ${conf}% confiança`; confOrient="· Reforce os pontos fracos"; }
  else { confTxt=`🧠 ${conf}% confiança`; confOrient="· Revise o conteúdo básico"; }
  document.getElementById("pcsConf").textContent=confOrient?`${confTxt} ${confOrient}`:confTxt;

  // Barra de jornada — cobertura de conteúdo (tópicos estudados / total)
  const cob=calcCobertura();
  document.getElementById("jornadaFill").style.width=cob.pct+"%";
  document.getElementById("jornadaMeta").textContent=STATE.inicio
    ?`Cobertura do edital: ${cob.cobertos} de ${cob.total} tópicos (${cob.pct}%)`:"sem dados";
  document.getElementById("jornadaInfo").innerHTML=STATE.inicio
    ?(cob.cobertos>0
      ?`📚 <span>${cob.cobertos} tópico${cob.cobertos!==1?"s":""} coberto${cob.cobertos!==1?"s":""}</span> &nbsp;•&nbsp; 🎯 <span>${cob.total-cob.cobertos} restantes no edital</span> &nbsp;•&nbsp; 🔄 <span>${totalRev} revisões pendentes</span>`
      :`📌 Estude e avalie tópicos no Cronograma para ver a cobertura do edital.`)
    :"Configure sua certificação para começar.";

  // Mini cards
  document.getElementById("mcHoras").textContent=horas+"h";
  document.getElementById("mcDias").textContent=dias;
  document.getElementById("mcRevisoes").textContent=totalRev;
  document.getElementById("mcConf").textContent=conf?conf+"%":"—";
  if(totalRev>0){ document.getElementById("mcRevDelta").textContent="Pendentes"; document.getElementById("mcRevDelta").style.display="inline-block"; }
  if(conf){ document.getElementById("mcConfDelta").textContent=conf>=70?"🟢 Boa":conf>=50?"🟡 Média":"🔴 Baixa"; document.getElementById("mcConfDelta").style.display="inline-block"; }

  // Hero estilo Bússola (resumo no topo)
  const streak=calcStreak();
  const diasR=calcDiasRestantes();
  const heroEl=document.getElementById("dashHero");
  if(heroEl && STATE.inicio){
    const rp = ritmo.emoji==="🟢"?{bg:"#E4F4EA",c:"#1C7A4B",t:"▲ adiantado"}:ritmo.emoji==="🟡"?{bg:"#FBF1D7",c:"#8A6212",t:"● no ritmo"}:{bg:"#FBE8E4",c:"#B5483F",t:"▼ atrasado"};
    /* Hero enxuto: só o card de aderência (sequência migrou para o card de
       Consistência e revisões viraram o chip clicável abaixo). */
    heroEl.innerHTML=`
    <div class="hero-card">
      <div class="hero-top">
        <span class="hero-lbl">Aderência ao plano de estudos</span>
        <span class="hero-badge" style="background:${rp.bg};color:${rp.c}">${rp.t}</span>
      </div>
      <div class="hero-mid">
        <div class="hero-num">${prog}%<span class="hero-num-sub">dos dias previstos</span></div>
        <div class="hero-barcol">
          <div class="hero-bar"><div class="hero-bar-fill" style="width:${prog}%"></div></div>
          <div class="hero-legend"><span>${det.done} de ${Math.max(det.total,det.done)} dias previstos até hoje</span><span>${diasR!==null?"Prova em "+diasR+" dias":""}</span></div>
        </div>
      </div>
      <div class="hero-foot">
        <span class="hero-cob" title="Aderência mede se você está seguindo o plano; cobertura mede quanto do edital já foi estudado.">📚 Cobertura do edital: <strong>${cob.pct}%</strong> (${cob.cobertos}/${cob.total} tópicos)</span>
        <span class="hero-chips">
          <span class="dash-chip ${totalRev>0?"dc-alerta":"dc-ok"}" data-action="navTo" data-page="revisoes" role="button" tabindex="0">🔄 ${totalRev>0?totalRev+(totalRev!==1?" revisões pendentes":" revisão pendente"):"Revisões em dia"} →</span>
          <span class="dash-chip dc-neutro" data-action="navTo" data-page="cronograma" role="button" tabindex="0">🔥 ${streak} dia${streak!==1?"s":""}</span>
        </span>
      </div>
    </div>`;
  } else if(heroEl){ heroEl.innerHTML=""; }

  // Coach
  renderCoach(prog, conf, ritmo, projecao, totalRev);
  renderHabito();
  renderBussola(prog);
  renderMedalhas();
  setTimeout(checarPopupSegunda,600);
  setTimeout(checarBalaoPwa,2500);
  renderRetaFinal();
  renderMapaCalorPage("mapaGrid");
}

/* Carimba a data REAL do registro (base do gráfico "quando você estuda").
   Campo aditivo e opcional — dias antigos simplesmente não têm. */
function _carimbarRegistro(key){
  if(!STATE.dias[key]) STATE.dias[key]={};
  if(!STATE.dias[key].registradoEm) STATE.dias[key].registradoEm=fmt(new Date());
}

/* ── DASHBOARD: HÁBITO (consistência + ritmo semanal) ──
   SVG desenhado à mão (sem libs, sem build). Os cálculos vivem no engine. */
const _DOW_CURTO=["D","S","T","Q","Q","S","S"];
const _DOW_PLURAL=["domingos","segundas","terças","quartas","quintas","sextas","sábados"];
const _MES_CURTO=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];
/* Chama viva: o fogo cresce com a sequência (0 apagado -> 4 fogueira). */
function _nivelChama(n){ return n<=0?0:n<7?1:n<14?2:n<30?3:4; }
function _blocoGamificacao(r){
  const mk=calcMarcos(r.sequencia,r.recorde);
  const alvo=r.recordeAnterior||0;
  const batendo=r.sequencia>0&&r.sequencia>=alvo;
  const pctRec=alvo>0?Math.min(100,Math.round(r.sequencia/alvo*100)):(r.sequencia?100:0);
  const linha=!r.sequencia
    ? "Comece hoje: um dia registrado já inicia sua sequência."
    : batendo
      ? `🏆 <strong>Seu melhor momento!</strong> ${r.sequencia} dia${r.sequencia!==1?"s":""} seguidos — nunca chegou tão longe.`
      : `Faltam <strong>${alvo-r.sequencia+1} dia${alvo-r.sequencia+1!==1?"s":""}</strong> para bater seu recorde de ${alvo}.`;
  const medalhas=mk.lista.map(function(m){
    const ok=mk.conquistados.indexOf(m)>=0;
    const prox=m===mk.proximo;
    return `<span class="gm-medalha${ok?" gm-on":""}${prox?" gm-next":""}" title="${ok?"Conquistada: ":"Marca de "}${m} dias seguidos">${m}</span>`;
  }).join("");
  const escudo=r.escudoUsado
    ? `<span class="gm-escudo gm-esc-usado" title="Seu escudo deste mês já perdoou uma falha. Ele volta no próximo mês.">🛡️ escudo usado</span>`
    : `<span class="gm-escudo" title="Uma falha por mês é perdoada e não zera sua sequência.">🛡️ escudo ativo</span>`;
  return `<div class="gm-bloco">
    <div class="gm-topo">
      <span class="gm-chama" data-nivel="${_nivelChama(r.sequencia)}">🔥</span>
      <div class="gm-num"><b>${r.sequencia}</b><span>dia${r.sequencia!==1?"s":""} seguidos</span></div>
      ${escudo}
    </div>
    <div class="gm-barra"><div class="gm-barra-fill${batendo?" gm-recorde":""}" style="width:${pctRec}%"></div></div>
    <div class="gm-linha">${linha}</div>
    <div class="gm-medalhas">${medalhas}${mk.proximo?`<span class="gm-faltam">próxima em ${mk.faltam} dia${mk.faltam!==1?"s":""}</span>`:`<span class="gm-faltam">todas conquistadas 🎖️</span>`}</div>
  </div>`;
}
/* Celebra uma única vez cada marca atingida (STATE.marcosVistos sincroniza). */
function _celebrarMarco(seq){
  if(!seq) return;
  if(MARCOS_SEQUENCIA.indexOf(seq)<0) return;
  const vistos=STATE.marcosVistos||[];
  if(vistos.indexOf(seq)>=0) return;
  STATE.marcosVistos=vistos.concat([seq]); save();
  setTimeout(function(){
    showToast(`🏅 ${seq} dias seguidos! Marca desbloqueada — sua consistência está virando hábito.`);
    const el=document.querySelector(".gm-bloco");
    if(el){ el.classList.remove("gm-pop"); void el.offsetWidth; el.classList.add("gm-pop"); }
  },400);
}
function _corHeat(c){
  if(c.estado==="livre") return "#E6E1D6";
  if(c.estado==="falha") return "#F0E4D2";
  const n=c.estrelas||3;
  return n>=5?"#173E2C":n>=4?"#2FB374":n>=3?"#5FD79A":"#A9DCC2";
}
const _MES_LONGO=["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
let _habMesOffset=0;
function navegarMesHabito(dir){
  const novo=_habMesOffset+dir;
  if(novo>0) return;                     // não navega para o futuro
  _habMesOffset=novo; renderHabito();
}
/* Grade mensal do dashboard: leitura de ritmo (cheio x buraco), não de
   conteúdo. Clicar num dia abre o Cronograma. Cores sólidas, sem gradiente. */
function _htmlMes(mc){
  const r=mc.resumo;
  const dows=["D","S","T","Q","Q","S","S"];
  let cels=dows.map(function(d){return `<span class="cm-dow">${d}</span>`;}).join("");
  mc.celulas.forEach(function(c){
    if(c.vazio){ cels+=`<span class="cm-cel cm-vazio"></span>`; return; }
    const cls=["cm-cel","cm-"+c.estado];
    if(c.marco) cls.push("cm-marco");
    if(c.hoje) cls.push("cm-hoje");
    const tit=c.dia+"/"+String(mc.mes+1).padStart(2,"0")+" · "+
      (c.estado==="feito"?"você estudou":c.estado==="falha"?"sem registro":c.estado==="livre"?"descanso":c.estado==="futuro"?"a fazer":"fora do plano");
    const clicavel=c.estado!=="fora"?` data-action="calCellClick" data-key="${c.key}" role="button" tabindex="0"`:"";
    cels+=`<span class="${cls.join(" ")}" title="${esc(tit)}"${clicavel}>${c.dia}</span>`;
  });
  return `<div class="cm-head">
      <button class="cm-nav" data-action="navegarMesHabito" data-dir="-1" aria-label="Mês anterior">◀</button>
      <span class="cm-mes">${_MES_LONGO[mc.mes]} ${mc.ano}</span>
      <button class="cm-nav" data-action="navegarMesHabito" data-dir="1" aria-label="Próximo mês"${_habMesOffset>=0?" disabled":""}>▶</button>
    </div>
    <div class="cm-grid">${cels}</div>
    <div class="cm-leg">
      <span><i class="cm-sw-feito"></i>estudou</span>
      <span><i class="cm-sw-falha"></i>previsto, sem registro</span>
      <span><i class="cm-sw-livre"></i>descanso</span>
      <span><i class="cm-sw-marco"></i>simulado ou retorno técnico</span>
      <span><i class="cm-sw-hoje"></i>hoje</span>
    </div>`;
}
/* Resumo abaixo do calendário: sem caixas, tipografia uniforme.
   Destaque é quanto o aluno estudou; comparação usa o MESMO período do mês
   anterior (percentual só com o mês fechado, senão todo mês "despenca"). */
function _htmlMesResumo(mc,hmResumo){
  const r=mc.resumo;
  const mesNome=_MES_LONGO[mc.mes], mesAnt=_MES_LONGO[(mc.mes+11)%12];
  let comparacao="";
  if(r.mesFechado&&r.variacao!=null){
    comparacao=`<em>(${r.variacao>=0?`<span class="cm-up">+${r.variacao}%</span>`:`<span class="cm-down">${r.variacao}%</span>`} que em ${mesAnt})</em>`;
  } else if(r.mesAnterior){
    comparacao=`<em>(vs. ${r.mesAnterior} no mesmo período de ${mesAnt})</em>`;
  }
  const _d=function(n){return n===1?"dia":"dias";};
  return `<div class="cm-destaque">
      🔥 <b>${r.estudados}</b><span>${_d(r.estudados)} com estudo em ${mesNome}</span>
      ${comparacao}
    </div>
    <div class="cm-mini">
      <div class="cm-stat" title="Dos dias que o plano previa neste mês, quantos você cumpriu"><b>${r.pct!=null?r.pct+"%":"—"}</b><span>aderência ao plano</span></div>
      <div class="cm-stat" title="Seu recorde de dias seguidos estudando"><b>${hmResumo.recorde}<i>${_d(hmResumo.recorde)}</i></b><span>maior sequência</span></div>
      <div class="cm-stat" title="Percentual dos dias previstos que você cumpriu nos últimos 30 dias"><b>${hmResumo.cumprimento30==null?"—":hmResumo.cumprimento30+"%"}</b><span>ritmo (30 dias)</span></div>
      <div class="cm-stat" title="Maior número de dias estudados numa mesma semana"><b>${hmResumo.melhorSemana}<i>${_d(hmResumo.melhorSemana)}</i></b><span>na melhor semana</span></div>
    </div>`;
}
function _svgHeatmap(hm){
  const P=16,C=13,L=22,T=15;
  const w=L+hm.colunas.length*P, h=T+7*P;
  let s=`<svg class="hab-svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="Calendário de consistência">`;
  [1,3,5].forEach(function(r){ s+=`<text x="0" y="${T+r*P+10}" class="hab-lbl">${_DOW_CURTO[r]}</text>`; });
  let mesAnt=-1;
  hm.colunas.forEach(function(col,ci){
    const prim=col.find(function(c){return c.estado!=="fora";})||col[0];
    if(prim&&prim.mes!==mesAnt){ mesAnt=prim.mes; s+=`<text x="${L+ci*P}" y="10" class="hab-lbl">${_MES_CURTO[prim.mes]}</text>`; }
    col.forEach(function(c,ri){
      if(c.estado==="fora"){
        s+=`<rect x="${L+ci*P}" y="${T+ri*P}" width="${C}" height="${C}" rx="3" fill="#FBF6ED" opacity=".55"/>`;
        return;
      }
      const stroke=c.hoje?'stroke="#173E2C" stroke-width="1.6"':(c.marco?'stroke="#E8B23A" stroke-width="1.6"':"");
      const tit=("0"+c.dia).slice(-2)+"/"+_MES_CURTO[c.mes]+(c.estado==="feito"?" · "+(c.estrelas||"?")+"★":c.estado==="livre"?" · descanso":" · sem registro");
      s+=`<rect x="${L+ci*P}" y="${T+ri*P}" width="${C}" height="${C}" rx="3" fill="${_corHeat(c)}" ${stroke}><title>${esc(tit)}</title></rect>`;
    });
  });
  return s+"</svg>";
}
function _htmlRitmo(res){
  const ritmo=res.dias;
  const pico=Math.max.apply(null,ritmo.map(function(r){return r.pct||0;}))||100;
  let barras="";
  for(let i=1;i<=7;i++){
    const r=ritmo[i%7];
    const alt=!r.registros?4:Math.max(6,Math.round((r.pct/pico)*70));
    const cor=!r.registros?"#EDE6DA":(r.livre?"#8AB6A0":"#2FB374");
    const rot=r.registros?r.pct+"%":"—";
    barras+=`<div class="rt-col" title="${esc(_DOW_PLURAL[r.dow])}: ${r.registros} dia${r.registros!==1?"s":""} registrado${r.registros!==1?"s":""}${r.livre?" · dia de descanso":""}">`+
      `<div class="rt-pct">${rot}</div><div class="rt-bar-wrap"><div class="rt-bar" style="height:${alt}px;background:${cor}"></div></div>`+
      `<div class="rt-dow">${_DOW_CURTO[r.dow]}</div></div>`;
  }
  return `<div class="rt-cols">${barras}</div>`;
}
function _insightRitmo(res){
  if(!res.total) return "Assim que você registrar seus primeiros dias, a Bússola mostra aqui em que dias da semana você realmente estuda.";
  const L=res.maiorLote;
  if(L&&L.qtd>=3){
    const d=parseDate(L.data);
    return `Você registrou <strong>${L.qtd} dias de uma vez</strong> em ${("0"+d.getDate()).slice(-2)}/${("0"+(d.getMonth()+1)).slice(-2)} — por isso este gráfico concentra tudo naquele dia. Marcando cada dia no próprio dia, ele passa a refletir seu ritmo real.`;
  }
  const ord=res.dias.slice().sort(function(a,b){return b.registros-a.registros;});
  const top=ord[0];
  if(!top.registros) return "Ainda sem registros suficientes para identificar seu padrão semanal.";
  const zerados=res.dias.filter(function(r){return !r.registros&&!r.livre;});
  if(top.pct>=40){
    const extra=top.livre?", e ele é justamente seu dia de descanso no plano.":"";
    return `<strong>${top.pct}%</strong> dos seus registros acontecem <strong>${top.dow===0?"aos":"às"} ${_DOW_PLURAL[top.dow]}</strong>${extra} Concentrar demais num dia costuma cobrar caro na semana seguinte.`;
  }
  if(zerados.length) return `Seu estudo se espalha bem pela semana. Ponto de atenção: você ainda não registrou nenhum dia ${zerados[0].dow===0?"aos":"às"} <strong>${_DOW_PLURAL[zerados[0].dow]}</strong>.`;
  return `Ritmo bem distribuído — nenhum dia concentra mais de <strong>${top.pct}%</strong> dos registros. É assim que a revisão espaçada rende mais.`;
}
/* Bússola do rumo: agulha aponta o Norte (Aprovação) quando o aluno está
   em dia com o plano e desvia conforme a aderência cai. */
function renderBussola(prog){
  const el=document.getElementById("bussolaRumo");
  if(!el) return;
  if(!STATE.inicio){ el.innerHTML=""; return; }
  const temReg=Object.keys(STATE.dias||{}).some(function(k){ return _diaFeito(k); });
  const r=calcRumo(prog,temReg);
  const girando=r.angulo==null;
  // Mostrador com profundidade: gradiente radial de luz + sombra interna
  // (SVG filter, porque box-shadow inset não vale para forma SVG).
  el.innerHTML=`<div class="bz-wrap bz-${r.nivel}">
    <svg class="bz-svg" viewBox="0 0 120 120" role="img" aria-label="Bússola do seu rumo de estudos">
      <defs>
        <radialGradient id="bzFace" cx="36%" cy="30%" r="80%">
          <stop offset="0%" stop-color="#FFFFFF" stop-opacity=".95"/>
          <stop offset="58%" stop-color="#FBF6EC" stop-opacity=".7"/>
          <stop offset="100%" stop-color="#E4D8C2" stop-opacity=".65"/>
        </radialGradient>
        <filter id="bzInset" x="-30%" y="-30%" width="160%" height="160%">
          <feComponentTransfer in="SourceAlpha"><feFuncA type="table" tableValues="1 0"/></feComponentTransfer>
          <feGaussianBlur stdDeviation="2.6"/>
          <feOffset dy="1.6" result="sombra"/>
          <feFlood flood-color="#8A7757" flood-opacity=".5"/>
          <feComposite in2="sombra" operator="in"/>
          <feComposite in2="SourceAlpha" operator="in"/>
          <feMerge><feMergeNode in="SourceGraphic"/><feMergeNode/></feMerge>
        </filter>
      </defs>
      <circle cx="60" cy="60" r="52" class="bz-aro"/>
      <circle cx="60" cy="60" r="44" class="bz-fundo" fill="url(#bzFace)" filter="url(#bzInset)"/>
      <text x="60" y="20" class="bz-card bz-n">N</text>
      <text x="60" y="107" class="bz-card">S</text>
      <text x="107" y="65" class="bz-card">L</text>
      <text x="13" y="65" class="bz-card">O</text>
      <g class="bz-base${girando?" bz-girando":""}" style="transform:rotate(${girando?0:r.angulo}deg)">
        <g class="bz-osc">
          <polygon points="60,22 68,60 60,54 52,60" class="bz-norte"/>
          <polygon points="60,98 52,60 60,66 68,60" class="bz-sul"/>
        </g>
      </g>
      <circle cx="60" cy="60" r="5" class="bz-pino"/>
    </svg>
    <div class="bz-txt">
      <span class="bz-badge">${r.icone} ${esc(r.tag)}</span>
      <span class="bz-alvo">APROVAÇÃO</span>
      <span class="bz-frase">${esc(r.frase)}</span>
    </div>
  </div>`;
}

/* Galeria de medalhas: mostra TODAS as conquistas, as bloqueadas em cinza.
   Ver o que falta motiva mais do que ver só o que já foi feito. Cor por
   nível: 1 bronze, 2 prata, 3 ouro. Fica ao lado da bússola, no topo. */
function renderMedalhas(){
  const el=document.getElementById("dashMedalhas");
  if(!el) return;
  if(!STATE.inicio){ el.innerHTML=""; return; }
  const m=calcMedalhas(calcCobertura().pct);
  const p=m.patente;
  // Vitrine RESUMIDA por padrão: conquistadas primeiro, depois as mais
  // perto de cair. Ver 20 silhuetas cinzas de uma vez ocupa meia tela e
  // empurra os cards de baixo, então o resto fica atrás de um botão.
  const _LIM_MED=10;
  const conquistadas=m.medalhas.filter(function(x){return x.ok;});
  const pendentes=m.medalhas.filter(function(x){return !x.ok;});
  const visiveis=_medExpandido?m.medalhas:conquistadas.concat(pendentes).slice(0,_LIM_MED);
  const ocultas=m.medalhas.length-visiveis.length;
  const icones=visiveis.map(function(x){
    const tit=x.ok?`${x.nome} — ${x.desc}`:`${x.nome} (bloqueada) — ${x.desc}. Faltam ${x.falta}`;
    return `<span class="md-icone md-n${x.nivel}${x.ok?"":" md-off"}" tabindex="0" role="img" aria-label="${esc(tit)}" title="${esc(tit)}">${x.icone}</span>`;
  }).join("")+(
    ocultas>0
      ? `<button class="md-icone md-mais" data-action="toggleMedalhas" title="Ver as ${ocultas} medalhas restantes" aria-label="Ver as ${ocultas} medalhas restantes">+${ocultas}</button>`
      : (_medExpandido?`<button class="md-icone md-mais" data-action="toggleMedalhas" title="Mostrar menos" aria-label="Mostrar menos">−</button>`:"")
  );
  const prox=m.proxima
    ? `<div class="md-prox" title="${esc(m.proxima.desc)}">A caminho: <strong>${esc(m.proxima.nome)}</strong> · faltam ${m.proxima.falta}${m.proxima.id.indexOf("cob")===0?"%":""}</div>`
    : `<div class="md-prox">Galeria completa. Todas as medalhas conquistadas.</div>`;
  // Selo do hero: a última medalha conquistada dá a cara da vitrine.
  // Sem nenhuma ainda, um troféu neutro segura o lugar.
  const ultima=m.medalhas.filter(function(x){return x.ok;}).pop();
  const seloIcone=ultima?ultima.icone:"🏆";
  const seloTit=ultima?`Última conquista: ${ultima.nome}`:"Sua primeira medalha aparece aqui";
  el.innerHTML=`<div class="md-gal md-p${p.indice}">
    <div class="md-head">
      <span class="md-tit">🏅 Galeria de Troféus</span>
      <span class="md-conta">${m.conquistadas} de ${m.total} conquistadas</span>
    </div>
    <div class="md-corpo">
      <div class="md-hero">
        <span class="md-selo" title="${esc(seloTit)}" role="img" aria-label="${esc(seloTit)}">${seloIcone}</span>
        <div class="md-hero-txt">
          <span class="md-patente">${esc(p.nome)}</span>
          <div class="md-barra"><div class="md-barra-fill" style="width:${p.pct}%"></div></div>
          <div class="md-xp">${m.xp} XP${p.xpProx?` · faltam ${p.xpProx-m.xp} para ${esc(p.proxNome)}`:" · nível máximo"}</div>
        </div>
      </div>
      <div class="md-lista">${icones}</div>
    </div>
    ${prox}
  </div>`;
}
function renderHabito(){
  const el=document.getElementById("dashHabito");
  if(!el) return;
  if(!STATE.inicio){ el.innerHTML=""; return; }
  const semanas=window.innerWidth<=480?8:12;
  const hm=calcHeatmapConsistencia(semanas);
  const mc=calcMesConsistencia(_habMesOffset);
  const rt=calcRitmoSemanal();
  const r=hm.resumo;
  el.innerHTML=`<div class="hab-stack">
    <div class="hab-card">
      <div class="hab-head"><span class="hab-tit">📊 Quando você estuda</span><span class="hab-sub">distribuição dos seus registros</span></div>
      ${_htmlRitmo(rt)}
      <div class="rt-insight">${_insightRitmo(rt)}</div>
    </div>
    <div class="hab-card">
      <div class="hab-head"><span class="hab-tit">🔥 Consistência</span><span class="hab-sub">seu ritmo no mês</span></div>
      <div class="cm-layout">
        <div class="cm-cal">${_htmlMes(mc)}</div>
        <div class="cm-lado">${_htmlMesResumo(mc,r)}</div>
      </div>
    </div>
    <div class="hab-card">
      <div class="hab-head"><span class="hab-tit">🏅 Desafios</span><span class="hab-sub">sequência e marcas</span></div>
      ${_blocoGamificacao(r)}
    </div>
  </div>`;
  _celebrarMarco(r.sequencia);
}
function renderCoach(prog, conf, ritmo, projecao, totalRev){
  const el=document.getElementById("coachText");
  const hl=document.getElementById("coachHighlight");
  const badge=document.getElementById("coachBadge");
  if(badge&&!isRetaFinal().active) badge.textContent="✦ Coach Bússola";
  if(el) el.innerHTML=buildCoachHtml(prog,conf,ritmo,projecao,totalRev);
  if(hl) hl.style.display="none";
  atualizarCoachIA(montarCoachDiagnostico(prog,conf,ritmo,projecao,totalRev));
}

/* ── COACH COM IA (redação) ──
   O motor de regras continua diagnosticando (montarCoachDiagnostico coleta
   APENAS números e nomes de matérias já calculados); a IA apenas redige.
   Fallback garantido: sem URL, sem rede, sem login, file:// ou erro ->
   buildCoachHtml segue com o texto de regras. */
function montarCoachDiagnostico(prog,conf,ritmo,projecao,totalRev){
  const materias=calcMateriasStats();
  const cob=calcCobertura(), det=calcProgressoDetalhado();
  const atras=materias.filter(m=>m.prog>0&&m.prog<cob.pct-10).sort((a,b)=>b.peso-a.peso).slice(0,2)
    .map(m=>({nome:m.nome,peso:m.peso,progPct:m.prog,confPct:m.conf,dominioPct:m.dominio}));
  // Risco = peso alto com pouco domínio (confiança já pesada pela cobertura)
  const fracas=materias.filter(m=>m.prog>0&&m.dominio<50).sort((a,b)=>(100-a.dominio)*a.peso<(100-b.dominio)*b.peso?1:-1).slice(0,2)
    .map(m=>({nome:m.nome,peso:m.peso,confPct:m.conf,dominioPct:m.dominio,topicosVistos:m.avaliados,topicosTotal:m.totalTop}));
  return {
    nome:(STATE.nome||"").split(" ")[0]||"Candidato",
    concurso:(EDITAIS[STATE.prefeitura]||{}).nome||"",
    diasRestantes:calcDiasRestantes(),
    aderenciaPct:prog,
    ritmo:ritmo&&ritmo.emoji==="🟢"?"acima do planejado":ritmo&&ritmo.emoji==="🟡"?"moderado":"abaixo do planejado",
    diasConcluidos:det.done, diasEsperados:Math.max(det.total,det.done),
    sequenciaDias:calcStreak(),
    topicosCobertos:cob.cobertos, totalTopicos:cob.total, coberturaPct:cob.pct,
    confiancaMediaPct:conf,
    revisoesPendentes:totalRev,
    diasSemRegistro:getMissedDays().length,
    materiasAtrasadas:atras, materiasFracas:fracas,
    recuperacaoAtiva:!!STATE.redistribuindo
  };
}
let _coachIABusy=false;
async function atualizarCoachIA(diag){
  if(!COACH_IA_URL||!STATE.inicio||_coachIABusy) return;
  if(typeof location!=="undefined"&&location.protocol==="file:") return;
  const hoje=fmt(new Date());
  if(STATE.coachIA&&STATE.coachIA.data===hoje&&STATE.coachIA.texto) return; // cache do dia
  if(!Object.values(STATE.dias).some(d=>d.percepcao)) return; // onboarding fica com o guia de regras
  if(typeof firebase==="undefined"||!firebase.auth||!firebase.auth().currentUser) return;
  _coachIABusy=true;
  try{
    const token=await firebase.auth().currentUser.getIdToken();
    const resp=await fetch(COACH_IA_URL,{method:"POST",
      headers:{"Content-Type":"application/json","Authorization":"Bearer "+token},
      body:JSON.stringify(diag)});
    if(resp.ok){
      const d=await resp.json();
      if(d&&d.texto){ STATE.coachIA={texto:String(d.texto).slice(0,2500),data:hoje}; save(); renderTudo(); }
    }
  }catch(e){ /* silencioso: o texto de regras permanece */ }
  _coachIABusy=false;
}
function getCoachIAHtml(){
  const c=STATE.coachIA;
  if(!c||!c.texto||c.data!==fmt(new Date())) return null;
  const pars=String(c.texto).split(/\n+/).map(s=>s.trim()).filter(Boolean);
  if(!pars.length) return null;
  return pars.map((p,i)=>`<p style="margin:0 0 ${i<pars.length-1?".8rem":"0"}">${esc(p)}</p>`).join("");
}

/* Gera o HTML da análise do Coach — usado no Dashboard (painel) e na
   página "Palavra do Coach" (menu Recursos). */
/* Aviso de cobertura do edital.
   Antes, quando a data da prova nao comportava todos os topicos, o excedente
   era descartado em silencio e o aluno estudava sem saber que nao zeraria o
   edital. Agora o sistema diz na cara: quanto cobre, o que fica de fora e o
   que fazer. Fonte dos numeros: calcCoberturaEdital() no engine. */
function _dm(iso){ try{ return parseDate(iso).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"}); }catch(e){ return iso; } }

/* Linha de marcos do plano. O dono nao encontrava a data da Revisao Geral em
   lugar nenhum: ela existia no motor, mas nunca era escrita na tela. */
/* A data da prova e escolhida pelo aluno nas certificacoes; nos concursos ela
   vem do edital. So faz sentido sugerir antecipacao no primeiro caso. */
function _provaEhEscolhidaPeloAluno(){
  const ed=EDITAIS[STATE.prefeitura];
  return !!(ed&&!ed.dataProva);
}

/* Sugestao de antecipar a prova.
   Terminar cedo deixou de ser efeito colateral: virou informacao acionavel. */
function getSugestaoAntecipacaoHtml(){
  if(typeof calcAntecipacao!=="function") return "";
  if(!_provaEhEscolhidaPeloAluno()) return "";
  let a=null; try{ a=calcAntecipacao(); }catch(e){}
  if(!a||!a.podeAntecipar) return "";
  return `<div style="margin:0 0 .8rem;font-size:.85rem;color:#14532d;background:rgba(34,197,94,.08);border:1px solid rgba(34,197,94,.28);border-radius:8px;padding:.6rem .8rem;line-height:1.45">
    <strong>🎯 Você pode marcar a prova mais cedo.</strong>
    <p style="margin:.35rem 0 .15rem">No ritmo atual, o conteúdo termina em <strong>${_dm(a.fimConteudo)}</strong>, com <strong>${a.semanasFolga} semana(s)</strong> de sobra antes da Revisão Geral.</p>
    <p style="margin:.15rem 0 0">Mantendo o método, a prova poderia ser já em <strong>${_dm(a.provaMinima)}</strong>. Se preferir manter a data atual, esse tempo vira uma segunda passagem pelo edital, o que também é bom.</p>
  </div>`;
}

function getMarcosHtml(){
  if(!STATE.prova||!STATE.inicio) return "";
  let lim=null; try{ lim=getLimiteConteudo(); }catch(e){}
  if(!lim) return "";
  const rg=fmt(lim);
  const ultimo=new Date(lim); ultimo.setDate(ultimo.getDate()-1);
  return `<p style="margin:0 0 .7rem;font-size:.78rem;color:#475569;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:.45rem .7rem">
    📌 <strong>Marcos do plano:</strong> conteúdo até <strong>${_dm(fmt(ultimo))}</strong> ·
    Revisão Geral em <strong>${_dm(rg)}</strong> ·
    prova em <strong>${_dm(STATE.prova)}</strong>.
    Entre a Revisão Geral e a prova só há exercícios e treino.</p>`;
}

function fmtHoras(v){
  const H=Math.floor(v), M=Math.round((v-H)*60);
  return M?`${H}h${String(M).padStart(2,"0")}min`:`${H}h`;
}

/* Aviso de cobertura do edital.
   Texto curto de proposito: e um alerta de decisao, nao um relatorio.
   Sem travessao (regra do projeto). Passe semTitulo=true quando o container
   ja tiver titulo proprio, como no pop-up. */
function getAvisoCoberturaHtml(cPronta,semTitulo){
  if(typeof calcCoberturaEdital!=="function") return "";
  let c=cPronta; if(!c){ try{ c=calcCoberturaEdital(); }catch(e){ return ""; } }
  if(!c||c.cobre||!c.total) return "";
  const pct=Math.round((c.agendados/c.total)*100);
  const fora=c.materias.map(m=>
    `<li style="margin:.1rem 0">${esc(m.nome)}: <strong>${m.agendados===0?"todos os "+m.total:m.faltam+" de "+m.total}</strong></li>`
  ).join("");
  const sg=c.sugestoes||{};
  const saidas=[];
  if(sg.horas&&sg.horas.basta)
    saidas.push(`<li style="margin:.1rem 0"><strong>${fmtHoras(c.horasNecessarias)} por dia</strong>, em vez de ${fmtHoras(sg.horas.atuais)}. Resolve sozinho.</li>`);
  if(sg.diasLivres&&sg.diasLivres.atuais>0&&sg.diasLivres.ganho>0)
    saidas.push(`<li style="margin:.1rem 0"><strong>Menos descanso</strong> (hoje ${sg.diasLivres.atuais}): abre ${sg.diasLivres.ganho} vagas${sg.diasLivres.resolve?", e resolve":`, ainda faltam ${c.faltam-sg.diasLivres.ganho}`}.</li>`);
  if(sg.prazo)
    saidas.push(`<li style="margin:.1rem 0"><strong>Mais prazo</strong>: cerca de ${sg.prazo.semanasAMais} semana(s).</li>`);
  const titulo=semTitulo?"":`<strong>⚠️ Este prazo não cobre o edital.</strong><br>`;
  return `<div style="margin:0 0 .8rem;font-size:.85rem;color:#7c2d12;background:rgba(234,88,12,.07);border:1px solid rgba(234,88,12,.25);border-radius:8px;padding:.6rem .8rem;line-height:1.45">
    ${titulo}Cabem <strong>${c.agendados} de ${c.total}</strong> tópicos (${pct}%) até a Revisão Geral, em <strong>${c.limiteConteudo?_dm(c.limiteConteudo):"7 dias antes da prova"}</strong>.
    <p style="margin:.5rem 0 .15rem"><strong>Ficam de fora:</strong></p>
    <ul style="margin:0 0 0 1.1rem;padding:0">${fora}</ul>
    <p style="margin:.5rem 0 .15rem"><strong>Como resolver:</strong></p>
    <ul style="margin:0 0 0 1.1rem;padding:0">${saidas.join("")}</ul>
  </div>`;
}

function buildCoachHtml(prog, conf, ritmo, projecao, totalRev){
  if(!STATE.inicio){
    return `<span style="color:#94a3b8">Configure sua certificação para ativar o Coach Bússola.</span>`;
  }

  const diasRestantes=calcDiasRestantes();
  const streak=calcStreak();
  const materias=calcMateriasStats();
  const overallProg=prog;

  // ── Diagnóstico por matéria ──────────────────────────────────────
  const atrasadas=materias.filter(m=>m.prog>0&&m.prog<overallProg-10).sort((a,b)=>(b.peso-a.peso));
  const fracos=materias.filter(m=>m.conf<50&&m.conf>0).sort((a,b)=>(a.conf-b.conf));
  const adiantadas=materias.filter(m=>m.prog>overallProg+10).sort((a,b)=>(b.prog-a.prog));
  const missedDays=getMissedDays().length;

  // ── Bloco 1: Situação Geral ────────────────────────────────────
  const temSessoes=Object.values(STATE.dias).some(d=>d.percepcao);
  let situacaoEmoji, situacaoTxt;
  if(!temSessoes){
    situacaoEmoji="🆕"; situacaoTxt="Nenhuma sessão registrada ainda";
  } else if(ritmo.emoji==="🟢"){ situacaoEmoji="🟢"; situacaoTxt="Acima do ritmo ideal"; }
  else if(ritmo.emoji==="🟡"){ situacaoEmoji="🟡"; situacaoTxt="Ritmo moderado"; }
  else { situacaoEmoji="🔴"; situacaoTxt="Abaixo do ritmo — acelere!"; }

  const det=calcProgressoDetalhado();
  const cob=calcCobertura();

  // ── Monta parágrafo de assessoria ─────────────────────────────
  let html=`<div class="coach-text">`;

  /* O aviso de cobertura vem ANTES da ramificacao, de proposito.
     Estava dentro de dois dos tres ramos e nao aparecia no terceiro — por isso
     um plano de 30 dias com 1h/dia passava sem alerta nenhum. */
  html+=getMarcosHtml();
  html+=getAvisoCoberturaHtml();
  html+=getSugestaoAntecipacaoHtml();

  if(!temSessoes){
    const primeiroNome=STATE.nome.split(" ")[0]||"Candidato";
    const topPeso=materias.slice().sort((a,b)=>b.peso-a.peso).slice(0,3);
    html+=`<p style="margin:0 0 .7rem">Olá, <strong>${esc(primeiroNome)}</strong>! Seu plano está configurado para <strong>${diasRestantes!==null?diasRestantes+" dias":"?"} de preparação</strong>. Bem-vindo à <strong>Bússola de Estudos</strong> — veja como a ferramenta funciona:</p>`;
    html+=`<p style="margin:0 0 .5rem;font-size:.83rem;color:#1e40af;font-weight:600;border-left:3px solid #3b82f6;padding-left:.6rem">🎯 Hoje — sua missão diária</p>`;
    html+=`<p style="margin:0 0 .6rem;font-size:.82rem;color:#475569;padding-left:.9rem">A aba <strong>Hoje</strong> mostra o tópico do dia, permite avaliar sua confiança com ⭐ estrelas e marca a sessão como concluída. O ícone <span style="color:#ef4444">!</span> no menu desaparece ao concluir.</p>`;
    html+=`<p style="margin:0 0 .5rem;font-size:.83rem;color:#065f46;font-weight:600;border-left:3px solid #22c55e;padding-left:.6rem">📅 Cronograma — o Método Bússola (5+1+1)</p>`;
    html+=`<p style="margin:0 0 .6rem;font-size:.82rem;color:#475569;padding-left:.9rem">5 dias de conteúdo → 1 <strong>Retorno Técnico</strong> (reavalie a confiança por tópico) → 1 <strong>Exercícios de Revisão</strong> (pratique questões). A cada 3 ciclos, um <strong>Mini Simulado</strong> é inserido automaticamente.</p>`;
    html+=`<p style="margin:0 0 .5rem;font-size:.83rem;color:#78350f;font-weight:600;border-left:3px solid #f59e0b;padding-left:.6rem">🔄 Revisões — ciclos de consolidação</p>`;
    html+=`<p style="margin:0 0 .6rem;font-size:.82rem;color:#475569;padding-left:.9rem">A cada ciclo de Exercícios concluído, um ciclo de revisão é liberado. Registre os exercícios para desbloqueios em cascata. O <strong>Dashboard</strong> rastreia cobertura e confiança por matéria.</p>`;
    const topStr=topPeso.map(m=>`<strong>${m.nome}</strong> (${m.peso}%)`).join(", ");
    html+=`<p style="margin:0;font-size:.82rem;color:#475569">Para começar: acesse <strong>Hoje</strong>, leia o edital, avalie com as estrelas e siga o cronograma. Priorize: ${topStr}.</p>`;
  } else if(getCoachIAHtml()){
    // ── Redação da IA (diagnóstico continua vindo do motor de regras) ──
    if(STATE.redistribuindo){
      const extrasPend=calcExtrasPendentes();
      if(extrasPend>0) html+=`<p style="margin:0 0 .8rem;font-size:.85rem;color:#1d4ed8;background:rgba(29,78,216,.06);border:1px solid rgba(29,78,216,.15);border-radius:8px;padding:.5rem .7rem">⚖️ <strong>Recuperação em andamento:</strong> ${extrasPend} tópico(s) extra(s) distribuído(s) no cronograma.</p>`;
    }
    html+=getCoachIAHtml();
    html+=`<p style="margin:.8rem 0 0;font-size:.68rem;color:#94a3b8">✦ Redigido com IA a partir dos seus números de hoje</p>`;
  } else {
    // ── Parágrafo 1: situação geral ────────────────────────────
    let p1="";
    const nomeUsuario=STATE.nome.split(" ")[0]||"Candidato";
    const diasStr=diasRestantes!==null?` Faltam <strong>${diasRestantes} dias</strong> para a prova.`:"";
    if(ritmo.emoji==="🟢"){
      p1=`<strong>${esc(nomeUsuario)}</strong>, você está acima do ritmo planejado — <strong>${prog}%</strong> de aderência ao cronograma com <strong>${det.done} dias</strong> de estudo concluídos.${diasStr}`;
    } else if(ritmo.emoji==="🟡"){
      p1=`<strong>${esc(nomeUsuario)}</strong>, seu ritmo está moderado — <strong>${prog}%</strong> de aderência ao cronograma (<strong>${det.done}</strong> de <strong>${Math.max(det.total,det.done)}</strong> dias esperados).${diasStr}`;
    } else {
      p1=`<strong>${esc(nomeUsuario)}</strong>, seu ritmo está abaixo do esperado — apenas <strong>${prog}%</strong> de aderência (<strong>${det.done}</strong> de <strong>${Math.max(det.total,det.done)}</strong> dias concluídos).${diasStr}`;
    }
    if(streak>1) p1+=` Você mantém uma sequência de <strong>${streak} dias consecutivos</strong> de estudo — ótima consistência.`;
    html+=`<p style="margin:0 0 .8rem">${p1}</p>`;

    // ── Recuperação em andamento ──
    if(STATE.redistribuindo){
      const extrasPend=calcExtrasPendentes();
      if(extrasPend>0){
        html+=`<p style="margin:0 0 .8rem;font-size:.85rem;color:#1d4ed8;background:rgba(29,78,216,.06);border:1px solid rgba(29,78,216,.15);border-radius:8px;padding:.5rem .7rem">⚖️ <strong>Recuperação em andamento:</strong> ${extrasPend} tópico(s) extra(s) distribuído(s) no cronograma. O ritmo está levemente acelerado até você se equilibrar.</p>`;
      } else {
        STATE.redistribuindo=false; delete STATE.diasRedistribuir; save();
      }
    }

    // ── Parágrafo 2: cobertura e confiança ─────────────────────
    let p2="";
    if(cob.cobertos>0){
      const confTexto=conf>=80?"boa segurança no que já viu":conf>=60?"segurança razoável, com margem para crescer":conf>=40?"segurança moderada, os exercícios precisam de mais atenção":"segurança baixa, revise antes de avançar";
      const domGeral=calcDominio(conf,cob.pct).dominio;
      p2=`Você cobriu <strong>${cob.cobertos} de ${cob.total} tópicos</strong> do edital (${cob.pct}%). A confiança média de <strong>${conf}%</strong> mostra ${confTexto}, mas ela vale só sobre o conteúdo já estudado. Pesando pela cobertura, seu domínio real do edital hoje é de <strong>${domGeral}%</strong>.`;
    }
    if(p2) html+=`<p style="margin:0 0 .8rem;font-size:.87rem;color:#334155">${p2}</p>`;

    // ── Parágrafo 3: diagnóstico de matérias ───────────────────
    let p3="";
    const matAtrasadas=materias.filter(m=>m.prog>0&&m.prog<cob.pct-10).sort((a,b)=>b.peso-a.peso);
    const matFracas=materias.filter(m=>m.prog>0&&m.dominio<50).sort((a,b)=>((100-a.dominio)*a.peso<(100-b.dominio)*b.peso?1:-1));
    const matOk=materias.filter(m=>m.prog>=cob.pct-5);
    if(matAtrasadas.length>0){
      const lista=matAtrasadas.slice(0,2).map(m=>`<strong>${m.nome}</strong> (peso ${m.peso}%, ${cob.pct-m.prog}% abaixo da média)`).join(" e ");
      p3+=`As matérias que precisam de atenção são ${lista}. `;
    }
    if(matFracas.length>0){
      const lista=matFracas.slice(0,2).map(m=>`<strong>${m.nome}</strong> (domínio ${m.dominio}%, ${m.avaliados} de ${m.totalTop} tópicos)`).join(" e ");
      p3+=`Domínio baixo do edital em ${lista}. Vale reforçar com exercícios no dia de Retorno Técnico e avançar nos tópicos que faltam. `;
    }
    if(!matAtrasadas.length&&!matFracas.length&&matOk.length>0){
      p3=`Todas as matérias estudadas estão no ritmo. Continue avançando no conteúdo sistematicamente.`;
    }
    if(p3) html+=`<p style="margin:0 0 .8rem;font-size:.87rem;color:#334155">${p3}</p>`;

    // ── Parágrafo 4: ação recomendada ──────────────────────────
    let p4="";
    if(missedDays>0){
      p4=`⚠️ Você tem <strong>${missedDays} dia(s) sem registro</strong>. Use o modal de recuperação para redistribuir esses tópicos e não perder o fio do plano.`;
    } else if(totalRev>0){
      p4=`🔔 Há <strong>${totalRev} revisão(ões) pendentes</strong>. Acesse a aba <strong>Revisões</strong> para consolidar o conteúdo já estudado — a revisão espaçada é fundamental para fixação.`;
    } else if(matAtrasadas.length>0){
      const top=matAtrasadas[0];
      p4=`💡 Recomendo dedicar a sessão de hoje a <strong>${top.nome}</strong> (${top.peso}% do edital). Avance ${Math.min(5,top.peso)}% desta semana para reequilibrar o cronograma.`;
    } else if(matFracas.length>0){
      const top=matFracas[0];
      p4=`💡 Use o próximo <strong>Retorno Técnico</strong> para reforçar <strong>${top.nome}</strong> com exercícios práticos. Meta: elevar o domínio de ${top.dominio}% para 60%+.`;
    } else if(diasRestantes!==null&&diasRestantes<30){
      p4=`🏁 Você está na reta final. Com ${diasRestantes} dias, foque em <strong>simulados cronometrados</strong> e revisões dos tópicos de maior peso.`;
    } else if(projecao!==null&&projecao<0){
      p4=`⚡ A projeção indica risco de não concluir o conteúdo a tempo. Adicione <strong>1 tópico extra</strong> nos fins de semana para recuperar os ${Math.abs(projecao)} dias de atraso.`;
    } else {
      p4=`✅ Tudo em ordem por hoje. Continue no ritmo, registre sua sessão ao final do dia e mantenha a sequência.`;
    }
    if(p4) html+=`<p style="margin:0;font-size:.87rem;color:#334155">${p4}</p>`;
  }

  html+=`</div>`;
  return html;
}

/* ── PÁGINA EXPORTAR PARA AGENDA ── */
function _agendaSegundaAtual(){
  const hoje=new Date(); hoje.setHours(0,0,0,0);
  const dow=hoje.getDay();
  const seg=new Date(hoje); seg.setDate(seg.getDate()+(dow===0?-6:1-dow));
  return seg;
}
function renderAgendaPage(){
  const el=document.getElementById("agendaConteudo");
  if(!el) return;
  if(!STATE.inicio){
    el.innerHTML=`<div style="text-align:center;padding:3rem 1rem;color:var(--gray-400)"><div style="font-size:2rem;margin-bottom:.5rem">📅</div><div style="font-weight:700;color:var(--gray-600)">Configure seu concurso primeiro</div><div style="font-size:.83rem">O calendário é gerado a partir do seu cronograma.</div></div>`;
    return;
  }
  const hora=STATE.agendaHora||"19:00";
  const seg=_agendaSegundaAtual();
  const fim=new Date(seg); fim.setDate(fim.getDate()+6);
  const {eventos}=buildAgendaSemanaICS(fmt(seg),hora);
  const nomes=["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];
  const lista=eventos.length
    ?eventos.map(ev=>{const d=parseDate(ev.k);return`<div style="display:flex;gap:.7rem;align-items:flex-start;padding:.55rem 0;border-bottom:1px solid var(--gray-100)"><span style="flex-shrink:0;font-size:.7rem;font-weight:800;color:var(--navy);background:var(--gray-100);border-radius:8px;padding:4px 8px;min-width:60px;text-align:center">${nomes[d.getDay()]} ${d.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})}</span><span style="font-size:.82rem;color:var(--gray-700);line-height:1.45">${esc(ev.titulo)}</span></div>`;}).join("")
    :`<div style="font-size:.83rem;color:var(--gray-400);font-style:italic">Nenhum dia de estudo nesta semana (dias livres ou após a prova).</div>`;
  el.innerHTML=`
  <div style="background:var(--white);border:1px solid var(--gray-200);border-radius:var(--radius-lg);padding:1.25rem 1.4rem;margin-bottom:1rem;">
    <div style="display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap;margin-bottom:.9rem;">
      <div>
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-size:1rem;font-weight:700;color:var(--navy)">Semana de ${seg.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})} a ${fim.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})}</div>
        <div style="font-size:.78rem;color:var(--gray-500);margin-top:2px">${eventos.length} evento${eventos.length!==1?"s":""} de estudo, com lembrete e link de volta ao painel</div>
      </div>
      <div style="display:flex;align-items:center;gap:.6rem;flex-wrap:wrap">
        <label style="font-size:.78rem;font-weight:600;color:var(--gray-600)">Horário de estudo:</label>
        <input type="time" value="${hora}" data-change="agendaHora" style="border:1.5px solid var(--gray-200);border-radius:10px;padding:7px 10px;font-family:inherit;font-size:16px;color:var(--gray-700)">
        <button data-action="exportarAgendaIcs" style="background:#173E2C;color:#fff;border:none;border-radius:11px;padding:10px 18px;font-size:.85rem;font-weight:700;cursor:pointer;font-family:inherit" class="hv-dim">📅 Adicionar ao meu calendário</button>
      </div>
    </div>
    <div>${lista}</div>
  </div>
  <div style="background:#FBF6ED;border:1px solid #ECE2D1;border-radius:14px;padding:1.1rem 1.3rem;">
    <div style="font-size:.72rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#8A7322;margin-bottom:.7rem">Como adicionar ao seu calendário</div>
    <div style="font-size:.84rem;color:#4A4339;line-height:1.7;margin-bottom:.9rem">
      <strong>📱 iPhone:</strong> toque no botão acima, abra o arquivo <strong>bussola-semana.ics</strong> baixado e escolha <strong>"Adicionar tudo"</strong> ao seu Calendário.
    </div>
    <div style="font-size:.84rem;color:#4A4339;line-height:1.7;margin-bottom:.9rem">
      <strong>🤖 Android:</strong> toque no botão acima e, ao abrir o arquivo baixado, selecione seu app de calendário para importar os eventos.
    </div>
    <div style="font-size:.84rem;color:#4A4339;line-height:1.7;margin-bottom:.9rem">
      <strong>💻 No computador (Google / Outlook):</strong> baixe o arquivo e importe-o. No Google: ⚙️ <strong>Configurações → Importar e exportar → Importar</strong>. Depois, ative uma <strong>notificação padrão</strong> (ex.: 15 min antes).
    </div>
    <div style="font-size:.8rem;color:#8A7322;line-height:1.6;border-top:1px solid #ECE2D1;padding-top:.7rem">
      💡 Repita toda segunda-feira: a exportação é semanal de propósito, para o calendário acompanhar qualquer ajuste do cronograma. Reimportar substitui os eventos, sem duplicar.
    </div>
  </div>`;
}

/* ── PÁGINA PALAVRA DO COACH ── */
function renderCoachPage(){
  const el=document.getElementById("coachPageConteudo");
  if(!el) return;
  const prog=calcProgresso();
  const conf=calcConfiancaMedia();
  const ritmo=calcRitmo();
  const projecao=calcProjecao();
  const {rev7,rev30}=calcRevisoes();
  el.innerHTML=`
    <div class="coach-block" style="margin-bottom:1rem;">
      <div class="coach-header"><span class="coach-badge">✦ Coach Bússola</span></div>
      <div class="coach-text">${buildCoachHtml(prog,conf,ritmo,projecao,rev7.length+rev30.length)}</div>
    </div>
    <div style="background:#FBF6ED;border:1px solid #ECE2D1;border-radius:14px;padding:1rem 1.25rem;">
      <div style="font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#8A7322;margin-bottom:.4rem;">💡 Dica do dia</div>
      <div style="font-size:.9rem;color:#4A4339;line-height:1.6;">${getDicaDoDia()}</div>
    </div>`;
  // Registra a leitura do dia (persiste e sincroniza) e apaga o badge
  const hojeKey=fmt(new Date());
  if(STATE.inicio&&STATE.coachLidoEm!==hojeKey){
    STATE.coachLidoEm=hojeKey;
    save();
    updateNavBadges();
  }
}

/* ── PÁGINA HOJE ── */
function getDicaDoDia(){
  const hojeKey=fmt(new Date());
  const pos=getCicloPos(hojeKey);
  const streak=calcStreak();
  const dias=calcDiasRestantes();
  const {rev7,rev30}=calcRevisoes();
  const totalRev=rev7.length+rev30.length;
  const diaIdx=new Date().getDate()%5;
  const dicas=[
    "Resolver questões sem consultar o material fortalece mais a memória do que releituras sucessivas.",
    "Errou uma questão? Revise apenas o ponto específico do erro — não releia todo o conteúdo.",
    "Pequenas sessões diárias superam maratonas semanais. Consistência vence intensidade.",
    "Faça uma pausa ativa de 5 min a cada 50 min. Seu cérebro consolida melhor o que aprendeu.",
    "Antes de estudar um tópico novo, tente lembrar o que já sabe sobre ele. Isso potencializa o aprendizado."
  ];
  if(pos===6||totalRev>0) return "A revisão de hoje é o que impede o esquecimento de amanhã. Resolva questões, não releia.";
  if(streak>=7) return `${streak} dias consecutivos. A disciplina já está trabalhando a seu favor — continue.`;
  if(dias!==null&&dias<=30) return `Faltam ${dias} dias. Priorize revisões e exercícios. Conteúdo novo só vale se consolidado.`;
  if(dias!==null&&dias>0&&STATE.dias&&Object.keys(STATE.dias).length===0) return "Não tente recuperar tudo de uma vez. Faça apenas a próxima tarefa do dia.";
  return dicas[diaIdx];
}

function renderHoje(){
  const hojeKey=fmt(new Date());
  const est=STATE.dias[hojeKey]||{};
  const dow=new Date().getDay();
  const el=document.getElementById("hojeConteudo");
  if(!STATE.inicio){ el.innerHTML=`<div class="hoje-empty">Configure sua certificação para ver a missão do dia.</div>`; return; }

  const dias=calcDiasRestantes();
  const pos=getCicloPos(hojeKey);
  const streak=calcStreak();
  const cob=calcCobertura();
  const confMedia=calcConfiancaMedia();
  const diasConcl=calcDiasConcluidos();

  // ── Layout estilo Bússola (saudação + Coach + foco + histórico) ──
  const MENSAGENS=[
    "A aprovação é construída num dia comum como hoje.",
    "Você não precisa ser o melhor. Precisa ser constante.",
    "Cada página estudada hoje é uma questão a mais no dia da prova.",
    "Não conte os dias. Faça os dias contarem.",
    "Pequeno progresso diário, repetido, vira aprovação.",
    "O edital é grande, mas o dia de hoje é do seu tamanho.",
    "Quem revisa não esquece. Quem não esquece, aprova.",
    "Disciplina é lembrar, todos os dias, o que você quer de verdade."
  ];
  const msg=MENSAGENS[Math.floor(Date.now()/86400000)%MENSAGENS.length];
  const hora=new Date().getHours();
  const saud=hora<12?"Bom dia":hora<18?"Boa tarde":"Boa noite";
  const primeiro=((STATE.nome||"").trim().split(/\s+/)[0])||"você";
  const dataExt=new Date().toLocaleDateString("pt-BR",{weekday:"long",day:"numeric",month:"long"});
  { const _ht=document.getElementById("hojeTitulo"); if(_ht)_ht.style.display="none"; const _hs=document.getElementById("hojeSub"); if(_hs)_hs.style.display="none"; }

  let label="Foco de hoje", titulo="", sub="", isContent=false;
  // Dia 1 (Orientações do Coach) vale enquanto não for concluído — mesmo que a data de início já tenha passado ou ainda esteja no futuro
  const isDia1=isHojeDia1();
  // Primeiro acesso: nada estudado ainda — estado de boas-vindas limpo, sem métricas zeradas
  const primeiroAcesso=isDia1&&diasConcl===0;
  if(isDia1){
    label="Dia 1 — Início da Preparação";
    titulo="🧭 Orientações do Coach";
    sub=`Leia o edital na íntegra, estude a <strong>Análise do Edital &amp; Banca</strong> e defina sua rotina de <strong>${STATE.horasDia}h/dia</strong>. Ao final, avalie sua clareza sobre o plano com as estrelas.`;
    if(hojeKey<STATE.inicio) sub+=`<br><em style="color:#8A8072">Seu cronograma de conteúdo começa em ${parseDate(STATE.inicio).toLocaleDateString("pt-BR")}.</em>`;
    isContent=true;
  } else if(isDiaLivre(dow)){
    label="Hoje"; titulo="Dia de descanso"; sub="Seu cérebro consolida enquanto você repousa. Aproveite.";
  } else if(pos===5){
    label="Retorno Técnico"; titulo="Reforço dos pontos fracos"; sub="Revise os tópicos com menor confiança da semana.";
  } else if(pos===6){
    label="Exercícios de Revisão"; titulo="Pratique os ciclos encerrados"; sub="Questões dos ciclos anteriores — pratique, não releia.";
  } else {
    const td=getTopicoDiaHoje();
    titulo=td.mat; sub=`${td.top} · peso ${td.peso}% no edital`;
    const _aula=_btnConteudo(td.mat,td.top)+_btnAula(td.mat,td.top);
    if(_aula) sub+=`<br>${_aula}`;
    const extras=getExtrasDoDia(hojeKey);
    if(extras.length) sub+=`<br>+ recuperação: ${extras.map(e=>`${esc(e.mat)} — ${esc(e.top)}`).join(", ")}`;
    isContent=true;
  }
  // No modo Dia 1, as estrelas/conclusão referem-se ao registro do dia de início
  const estEf=isDia1?(STATE.dias[STATE.inicio]||{}):est;
  const starKey=isDia1?STATE.inicio:hojeKey;
  const estrelas=estEf.estrelas||(estEf.percepcao?nivelToStars(estEf.percepcao):0);
  const concl=!!estEf.percepcao;

  const ringPct=cob.pct; const _RC=2*Math.PI*32; const rdash=Math.round(_RC*ringPct/100);
  const ritmo=calcRitmo();
  let coachMsg;
  if(primeiroAcesso){
    coachMsg=`Bem-vindo, <strong>${esc(primeiro)}</strong>! Hoje é dia de conhecer o terreno: leia o edital, estude a <strong>Análise do Edital &amp; Banca</strong> e avalie sua clareza com as estrelas. O conteúdo do cronograma começa em seguida.`;
  } else if(confMedia===null){
    coachMsg=`Bem-vindo, <strong>${esc(primeiro)}</strong>! Conclua o foco de hoje e avalie sua confiança com as estrelas — é assim que eu calibro suas revisões.`;
  } else if(ritmo.emoji==="🟢"){
    coachMsg=`Você está <strong>adiantado</strong> no cronograma, com ${confMedia}% de confiança média. Mantenha o ritmo — hoje é ${isContent?"um dia de conteúdo novo":"um dia de consolidação"}.`;
  } else if(ritmo.emoji==="🟡"){
    coachMsg=`Ritmo <strong>moderado</strong> — ${cob.pct}% do edital coberto. Foque no tópico de hoje e marque sua confiança ao terminar.`;
  } else {
    coachMsg=`Seu ritmo está <strong>abaixo do planejado</strong>, sem culpa. Conclua o foco de hoje e seguimos recuperando juntos.`;
  }

  const starsRow = isContent ? `
    <div style="border-top:1px solid #F0EADF;margin-top:16px;padding-top:14px;">
      <div style="font-size:.82rem;color:#6B6155;font-weight:600;margin-bottom:9px;">${concl?"Tópico concluído — sua confiança:":isDia1?"Plano claro? Avalie sua clareza:":"Concluiu? Toque para avaliar sua confiança:"}</div>
      <div style="display:flex;gap:6px;">${[1,2,3,4,5].map(n=>`<span data-action="setStarHoje" data-n="${n}" data-key="${starKey}" class="hv-zoom" style="cursor:pointer;font-size:1.7rem;line-height:1;color:${n<=estrelas?"#E8B23A":"#E0D6C5"};transition:transform .1s;">★</span>`).join("")}</div>
    </div>` : "";

  el.innerHTML = `
  <div style="max-width:880px;margin:0 auto;">
    <div style="display:flex;align-items:flex-end;justify-content:space-between;gap:24px;flex-wrap:wrap;margin-bottom:24px;">
      <div style="flex:1;min-width:280px;">
        <div style="font-size:.9rem;color:#9A9082;font-weight:500;margin-bottom:6px;text-transform:capitalize;">${dataExt}</div>
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:700;font-size:2.05rem;letter-spacing:-.02em;line-height:1.07;color:#241F18;">${saud}, ${esc(primeiro)}.<br><span style="color:#2FB374;">Bora avançar?</span></div>
      </div>
      ${dias!==null?(primeiroAcesso?`<div class="sticky-note" style="color:#3A3010;padding:18px 26px 18px 22px;display:flex;align-items:center;gap:14px;transform:rotate(-1.2deg);">
        <span style="font-size:1.9rem;flex-shrink:0;">🗓️</span>
        <div><div style="font-size:.72rem;color:#8A7322;text-transform:uppercase;letter-spacing:.07em;font-weight:600;">Sua preparação</div><div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:700;font-size:1.5rem;margin:2px 0;color:#2A2208;">${dias} dias</div><div style="font-size:.76rem;color:#8A7322;">até a prova</div></div>
      </div>`:`<div class="sticky-note" style="color:#3A3010;padding:18px 26px 18px 22px;display:flex;align-items:center;gap:16px;transform:rotate(-1.2deg);">
        <div style="position:relative;width:72px;height:72px;flex-shrink:0;">
          <svg width="72" height="72" viewBox="0 0 72 72" style="transform:rotate(-90deg);"><circle cx="36" cy="36" r="32" fill="none" stroke="rgba(90,70,10,.13)" stroke-width="7"></circle><circle cx="36" cy="36" r="32" fill="none" stroke="#2E7D54" stroke-width="7" stroke-linecap="round" stroke-dasharray="${rdash} 999"></circle></svg>
          <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-family:'Bricolage Grotesque',sans-serif;font-weight:700;font-size:1rem;color:#3A3010;">${ringPct}%</div>
        </div>
        <div><div style="font-size:.72rem;color:#8A7322;text-transform:uppercase;letter-spacing:.07em;font-weight:600;">Edital coberto</div><div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:700;font-size:1.5rem;margin:2px 0;color:#2A2208;">${dias} dias</div><div style="font-size:.76rem;color:#8A7322;">até a prova</div></div>
      </div>`):""}
    </div>

    <div style="display:flex;gap:14px;background:#EAF4EE;border:1px solid #D2E7DA;border-radius:18px;padding:17px 19px;margin-bottom:20px;">
      <div style="width:36px;height:36px;border-radius:11px;background:#2FB374;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0E2A1D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M15.5 8.5l-2 5-5 2 2-5z"></path></svg>
      </div>
      <div style="flex:1;">
        <div style="display:inline-flex;align-items:center;gap:5px;background:#D4EBDC;color:#1C5E3D;font-size:.64rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:3px 9px;border-radius:99px;margin-bottom:8px;">✦ Coach Bússola</div>
        <div style="font-size:.92rem;line-height:1.6;color:#2E4A3A;">${coachMsg}</div>
      </div>
    </div>

    <div style="background:#fff;border:1px solid #EFE6D7;border-radius:18px;padding:20px 22px;margin-bottom:16px;">
      <span style="display:inline-block;font-size:.66rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#1C5E3D;background:#E4F4EA;padding:4px 11px;border-radius:99px;margin-bottom:11px;">${label}</span>
      <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:700;font-size:1.45rem;color:#241F18;line-height:1.15;">${titulo}</div>
      <div style="font-size:.92rem;color:#8A8072;margin-top:5px;line-height:1.55;">${sub}</div>
      ${starsRow}
      ${isDia1
        ?`<button data-action="navTo" data-page="edital" style="margin-top:16px;margin-right:10px;display:inline-flex;align-items:center;gap:7px;background:#173E2C;color:#fff;font-size:.85rem;font-weight:600;padding:10px 18px;border-radius:12px;border:none;cursor:pointer;font-family:inherit;">🔍 Abrir Análise do Edital &amp; Banca</button>
         <button data-action="irParaHojeCronograma" style="margin-top:16px;display:inline-flex;align-items:center;gap:7px;background:transparent;color:#6B6155;font-size:.82rem;font-weight:600;padding:10px 16px;border-radius:12px;border:1.5px solid #E5DCCB;cursor:pointer;font-family:inherit;">Ver cronograma →</button>`
        :`<button data-action="irParaHojeCronograma" style="margin-top:16px;display:inline-flex;align-items:center;gap:7px;background:#173E2C;color:#fff;font-size:.85rem;font-weight:600;padding:10px 18px;border-radius:12px;border:none;cursor:pointer;font-family:inherit;">Abrir no cronograma →</button>`}
    </div>

    ${primeiroAcesso?`
    <div style="background:#FDF9F0;border:1px dashed #E5D9C2;border-radius:16px;padding:16px 18px;margin-bottom:14px;">
      <div style="font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#8A7322;margin-bottom:10px;">Primeiros passos</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
        ${[["1","Leia o edital e a Análise da Banca"],["2","Avalie sua clareza com as ★ acima"],["3","Amanhã o conteúdo do ciclo começa"]].map(p=>`<div style="display:flex;gap:9px;align-items:flex-start;"><span style="width:22px;height:22px;border-radius:99px;background:#173E2C;color:#fff;font-size:.72rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${p[0]}</span><span style="font-size:.78rem;color:#6B6155;line-height:1.45;">${p[1]}</span></div>`).join("")}
      </div>
      <div style="font-size:.74rem;color:#A89E8E;margin-top:12px;font-style:italic;">Suas métricas — dias estudados, sequência, cobertura do edital e confiança — aparecem aqui a partir do primeiro dia de conteúdo.</div>
    </div>`:`
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:14px;">
      ${[["dias estudados",diasConcl],["sequência",streak>0?"🔥 "+streak:"0"],["edital coberto",cob.pct+"%"],["confiança média",confMedia!==null?confMedia+"%":"—"]].map(c=>`<div style="background:#fff;border:1px solid #EFE6D7;border-radius:16px;padding:15px 16px;text-align:center;"><div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:1.4rem;color:#241F18;line-height:1;">${c[1]}</div><div style="font-size:.74rem;color:#9A9082;margin-top:5px;">${c[0]}</div></div>`).join("")}
    </div>`}
    <div style="text-align:center;font-size:.88rem;color:#A89E8E;font-style:italic;padding:6px 0;">“${msg}”</div>
  </div>`;
}

// Próximo dia de estudo após hoje (usado em telas futuras)
function getProximaMissao(){
  const d=new Date(); d.setHours(0,0,0,0);
  for(let i=1;i<=14;i++){
    d.setDate(d.getDate()+1);
    const k=fmt(d);
    if(STATE.prova&&k>STATE.prova) return null;
    const p=getCicloPos(k);
    if(p===5) return {label:"⚡ Retorno Técnico",sub:"reforço dos pontos fracos da semana"};
    if(p===6) return {label:"🔄 Exercícios de Revisão",sub:"questões dos ciclos encerrados"};
    if(p>=0&&p<=4){ const td=getTopicoDiaByKey(k); if(td) return {label:td.mat,sub:td.top}; }
  }
  return null;
}



function getTopicoDiaHoje(){
  return getTopicoDiaByKey(fmt(new Date()))||{mat:"Revisão Geral",top:"Conteúdo do Dia",peso:10};
}

function toggleCheckHoje(campo){
  const k=fmt(new Date());
  if(!STATE.dias[k]) STATE.dias[k]={};
  STATE.dias[k][campo]=!STATE.dias[k][campo];
  save();
  renderHoje(); // re-renderiza o fluxo guiado (passos 1-2-3)
}

function setStarHoje(n,key){
  const k=key||fmt(new Date());
  if(!STATE.dias[k]) STATE.dias[k]={};
  STATE.dias[k].estrelas=n; STATE.dias[k].percepcao=starToNivel(n); _carimbarRegistro(k);
  save(); renderHoje(); renderTudo();
}

// Regra global: o Dia 1 (Orientações do Coach) vale na tela Hoje enquanto não for concluído e nenhum outro dia tiver sido estudado
function isHojeDia1(){
  if(!STATE.inicio) return false;
  const hk=fmt(new Date());
  if(hk<=STATE.inicio) return true;
  return !((STATE.dias[STATE.inicio]||{}).percepcao)&&calcDiasConcluidos()===0;
}

// Rótulo do foco de hoje (usado no tooltip do botão Hoje)
function getFocoHojeLabel(){
  if(!STATE.inicio) return "Configure seu cronograma";
  if(isHojeDia1()) return "🧭 Orientações do Coach";
  if(isDiaLivre(new Date().getDay())) return "Dia de descanso";
  const hk=fmt(new Date());
  const pos=getCicloPos(hk);
  if(pos===5) return "⚡ Retorno Técnico — pontos fracos";
  if(pos===6) return "🔄 Exercícios de Revisão";
  const td=getTopicoDiaByKey(hk);
  return td?`${td.mat} — ${td.top}`:"Revisão Geral";
}
function hoverStarHoje(n){ paintStarsEl("hoje-stars","hoje-starlabel",n); }
function unhoverStarHoje(){ paintStarsEl("hoje-stars","hoje-starlabel",STATE.dias[fmt(new Date())]?.estrelas||0); }

/* ── PÁGINA REVISÕES ── */
let _revFiltroMat = null; // null = todas

function getJornada(){
  // Monta lista completa de tópicos estudados com status de cada etapa
  const hoje=new Date(); hoje.setHours(0,0,0,0);
  const itens=[];
  Object.entries(STATE.dias).forEach(([k,v])=>{
    if(!v.percepcao) return;
    const d=parseDate(k); d.setHours(0,0,0,0);
    if(STATE.inicio&&d<parseDate(STATE.inicio)) return;
    const diff=Math.round((hoje-d)/86400000);
    const td=getTopicoDiaByKey(k)||{mat:"—",top:"—"};
    // Status 7d
    let s7;
    if(v.rev7feito)            s7={st:"done",  label:"✅ "+fmtBR(v.rev7feito)};
    else if(diff<6)            s7={st:"future",label:"em "+(6-diff)+"d"};
    else if(diff<=8)           s7={st:"due",   label:"Revisar agora"};
    else                       s7={st:"overdue",label:"Atrasada "+(diff-8)+"d"};
    // Status 30d
    let s30;
    if(v.rev30feito)           s30={st:"done",  label:"✅ "+fmtBR(v.rev30feito)};
    else if(diff<29)           s30={st:"future",label:"em "+(29-diff)+"d"};
    else if(diff<=31)          s30={st:"due",   label:"Revisar agora"};
    else                       s30={st:"overdue",label:"Atrasada "+(diff-31)+"d"};
    // Urgência para ordenação
    let urgencia=0;
    if(s7.st==="due")          urgencia=100+(v.percepcao==="baixa"?20:0);
    else if(s30.st==="due")    urgencia=90;
    else if(s7.st==="overdue") urgencia=80+Math.min(20,diff-8);
    else if(s30.st==="overdue")urgencia=70+Math.min(20,diff-31);
    else if(s7.st==="future")  urgencia=10;
    else                       urgencia=0; // ambas done
    const completo=v.rev7feito&&v.rev30feito;
    itens.push({key:k,mat:td.mat,top:td.top,diff,percepcao:v.percepcao,estrelas:v.estrelas||nivelToStars(v.percepcao),s7,s30,urgencia,completo,dataStr:k});
  });
  itens.sort((a,b)=>b.urgencia-a.urgencia||parseDate(b.dataStr)-parseDate(a.dataStr));
  return itens;
}
function fmtBR(iso){ if(!iso) return ""; const p=iso.split("-"); return p[2]+"/"+p[1]; }
function etapaHtml(s,label){
  const cls=s==="done"?"etapa-done":s==="due"?"etapa-due":s==="overdue"?"etapa-overdue":s==="future"?"etapa-future":"etapa-wait";
  return `<span class="rev-etapa ${cls}">${label}</span>`;
}

let _revFiltroAtual="todas";
let _revTabAtual="ciclos";
let _revCicloAberto=new Set();

function buildBlocosRevisao(){
  if(!STATE.inicio) return [];
  const hoje=new Date(); hoje.setHours(0,0,0,0);
  const fim=STATE.prova?parseDate(STATE.prova):new Date(hoje.getFullYear(),hoje.getMonth()+3,hoje.getDate());
  fim.setHours(23,59,59,999);
  const blocos=[];
  let d=parseDate(STATE.inicio);
  let revNum=0;
  while(fmt(d)<=fmt(fim)){
    const k=fmt(d);
    if(getCicloPos(k)===6){
      revNum++;
      const dow=d.getDay();
      const diff=dow===0?-6:1-dow;
      const seg=new Date(d); seg.setDate(seg.getDate()+diff);
      const allTopicos=getTopicosFracos(seg);
      const topicos=allTopicos.filter(t=>STATE.dias[t.key]?.percepcao);
      const todosEstudados=allTopicos.length>0&&topicos.length>=allTopicos.length;
      const isFutura=fmt(d)>fmt(hoje)&&!todosEstudados;
      const total=topicos.length;
      const feitos=topicos.filter(t=>STATE.dias[t.key]?.exRevisao).length;
      const concluida=!isFutura&&total>0&&feitos===total;
      const estado=isFutura?"futura":concluida?"concluida":"disponivel";
      blocos.push({num:revNum,key:k,date:new Date(d),topicos,total,feitos,concluida,estado,isFutura});
    }
    d.setDate(d.getDate()+1);
  }
  // Desbloqueio em cascata: se revisão N-1 concluída, libera N mesmo que futura
  for(let i=1;i<blocos.length;i++){
    if(blocos[i-1].concluida && blocos[i].isFutura){
      blocos[i].isFutura=false;
      blocos[i].estado="disponivel";
    }
  }
  return blocos;
}

function toggleRevCiclo(num){
  if(_revCicloAberto.has(num)) _revCicloAberto.delete(num);
  else _revCicloAberto.add(num);
  renderExerciciosSection();
}

function mudarRevTab(tab){
  _revTabAtual="ciclos";
  const ex=document.getElementById("exerciciosConteudo");
  const ru=document.getElementById("revResumo");
  const rf=document.getElementById("revFiltros");
  const rc=document.getElementById("revisoesConteudo");
  if(ex) ex.style.display="";
  if(ru) ru.style.display="none";
  if(rf) rf.style.display="none";
  if(rc) rc.style.display="none";
  renderExerciciosSection();
}


/* ════════════════════════════════════════════
   STATUS TOKENS — sistema de cores por estado.
   Padrão único reaproveitado em cards de simulado, revisão,
   cronograma etc. Facilita virar componente no app mobile:
   cada card lê seu estado e o token entrega cor/rótulo prontos.
   ════════════════════════════════════════════ */
const STATUS_TOKENS = {
  done:    { label:"Concluído", bg:"#fff",     border:"#A6E2BE", chipBg:"#E4F4EA", chipFg:"#1C7A4B", accent:"#1C7A4B" },
  today:   { label:"Hoje",      bg:"#F1F8F3",  border:"#2FB374", chipBg:"#173E2C", chipFg:"#FFFFFF", accent:"#1C7A4B" },
  pending: { label:"Pendente",  bg:"#fff",     border:"#F2D0C8", chipBg:"#FBE8E4", chipFg:"#B5483F", accent:"#B5483F" },
  future:  { label:"Agendado",  bg:"#fff",     border:"#EAE0D1", chipBg:"#F4EEE4", chipFg:"#8A8072", accent:"#8A8072" },
};
function statusOf(feito, isHoje, isPast){ return feito?"done":isHoje?"today":isPast?"pending":"future"; }

/* Card de lista padrão (mobile-ready): cabeçalho + corpo + rodapé-ação.
   opts: { titulo, sub, estado, bullets[], scoreLabel, score, accentColor,
           btnLabel, btnAction, destaque(bool) } */
function buildStatusCard(o){
  const t=STATUS_TOKENS[o.estado]||STATUS_TOKENS.future;
  const chip=o.chipLabel||t.label;
  const dark=!!o.destaque;
  const cardBg=dark?"#1B4632":t.bg;
  const cardBorder=dark?"#1B4632":t.border;
  const titColor=dark?"#fff":"#241F18";
  const subColor=dark?"rgba(232,240,233,.6)":"#9A9082";
  const sepColor=dark?"rgba(255,255,255,.09)":"#F0EADF";
  const bulletColor=dark?"rgba(232,240,233,.8)":"#6B6155";
  const bullets=(o.bullets||[]).map(b=>`<div style="font-size:.78rem;color:${bulletColor};padding:3px 0;display:flex;gap:.5rem;align-items:flex-start;line-height:1.5"><span style="color:${dark?"#5FD79A":"#B9A98E"};flex-shrink:0">•</span><span>${b}</span></div>`).join("");
  const feito=o.estado==="done";
  // Pontuação (esquerda do rodapé) — discreta, tipo registro de caderno
  const scoreHtml=(o.score!=null)
    ? `<div style="display:flex;align-items:baseline;gap:.4rem"><span style="font-family:'Bricolage Grotesque',sans-serif;font-size:1.35rem;font-weight:800;color:${dark?"#5FD79A":"#1C7A4B"}">${o.score}%</span><span style="font-size:.72rem;color:${dark?"rgba(232,240,233,.5)":"#A89E8E"}">${o.scoreLabel||"acertos"}</span></div>`
    : `<span style="font-size:.76rem;color:${dark?"rgba(232,240,233,.55)":"#A89E8E"};font-style:italic">${o.emptyLabel||"Sem registro ainda"}</span>`;
  // Botão compacto, à direita, verde sóbrio (não slab, não neon)
  const btnStyle=feito
    ? (dark?"background:transparent;border:1.5px solid rgba(255,255,255,.35);color:#E8F0E9"
          :"background:transparent;border:1.5px solid #CBE3D4;color:#2E7D54")
    : (dark?"background:#2FB374;border:none;color:#0E2A1D"
          :"background:#2E7D54;border:none;color:#fff");
  const btn=o.btnLabel?`<button data-action="${o.btnAction}" data-key="${o.btnKey||''}" class="hv-dim" style="${btnStyle};border-radius:10px;padding:8px 16px;font-size:.78rem;font-weight:700;cursor:pointer;font-family:inherit;white-space:nowrap;transition:filter .15s">${o.btnLabel}</button>`:"";
  // Modo retrátil (accordion): cabeçalho sempre visível; corpo + rodapé abrem/contraem
  const collapsible=!!o.collapsible && !!o.id;
  const startOpen=!!o.startOpen;
  const chev=collapsible?`<span id="sc-chev-${o.id}" style="font-size:.85rem;color:${subColor};display:inline-block;transition:transform .25s;transform:${startOpen?"rotate(180deg)":"rotate(0deg)"}">▾</span>`:"";
  const headerExtra=collapsible?` data-action="toggleStatusCard" data-id="${o.id}" role="button" tabindex="0" style="cursor:pointer;"`:"";
  const bodyOpenStyle=collapsible?`display:${startOpen?"block":"none"}`:"display:block";
  const idAttr=o.id?` id="statuscard-${o.id}"`:"";
  return `<div${idAttr} style="background:${cardBg};border:1px solid ${cardBorder};border-radius:16px;margin-bottom:.8rem;overflow:hidden;box-shadow:0 1px 3px rgba(60,45,20,.04)">
    <div${headerExtra} style="padding:.95rem 1.15rem .8rem;display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:.5rem;${collapsible?"cursor:pointer":""}">
      <div style="min-width:0"><div style="font-family:'Bricolage Grotesque',sans-serif;font-size:.92rem;font-weight:700;color:${titColor};letter-spacing:-.01em;line-height:1.3">${o.titulo}</div>
      <div style="font-size:.74rem;color:${subColor};margin-top:3px;text-transform:capitalize">${o.sub||""}</div></div>
      <div style="display:flex;align-items:center;gap:.55rem;flex-shrink:0">
        <span style="background:${t.chipBg};color:${t.chipFg};font-size:.66rem;font-weight:700;padding:4px 11px;border-radius:99px">${chip}</span>
        ${chev}
      </div>
    </div>
    <div id="sc-body-${o.id||""}" style="${bodyOpenStyle}">
      <div style="padding:0 1.15rem .6rem">${bullets}</div>
      <div style="padding:.7rem 1.15rem;border-top:1px solid ${sepColor};display:flex;align-items:center;justify-content:space-between;gap:.6rem">
        ${scoreHtml}${btn}
      </div>
    </div>
  </div>`;
}
function toggleStatusCard(id){
  const body=document.getElementById("sc-body-"+id);
  const chev=document.getElementById("sc-chev-"+id);
  if(!body) return;
  const open=body.style.display!=="none";
  body.style.display=open?"none":"block";
  if(chev) chev.style.transform=open?"rotate(0deg)":"rotate(180deg)";
}

function renderSimuladoPage(){
  const el=document.getElementById("simuladoConteudo");
  if(!el) return;
  if(!STATE.inicio||!STATE.prova){ el.innerHTML=`<div style="text-align:center;padding:3rem 1rem;color:var(--gray-400)"><div style="font-size:2rem;margin-bottom:.5rem">📝</div><div style="font-weight:700;color:var(--gray-600);margin-bottom:.3rem">Configure o cronograma</div><div style="font-size:.83rem">Defina início e data da prova para gerar os simulados.</div></div>`; return; }
  const hoje=new Date(); hoje.setHours(0,0,0,0);
  const diasLivres=STATE.diasLivres||[];
  const simulados=[];
  let d=parseDate(STATE.inicio);
  while(fmt(d)<=STATE.prova){
    const k=fmt(d);
    if(!diasLivres.includes(d.getDay())&&isSimuladoDay(k)){
      simulados.push({key:k,date:new Date(d),info:getSimuladoInfo(k),est:STATE.dias[k]||{},isPast:d<hoje,isHoje:d.getTime()===hoje.getTime()});
    }
    d.setDate(d.getDate()+1);
  }
  if(simulados.length===0){
    el.innerHTML=`<div style="text-align:center;padding:3rem 1rem;color:var(--gray-400)"><div style="font-size:2rem;margin-bottom:.5rem">⏳</div><div style="font-weight:700;color:var(--gray-600);margin-bottom:.3rem">Ainda não há simulados</div><div style="font-size:.83rem">Os simulados aparecem após cada 3 ciclos de revisão completados.</div></div>`;
    return;
  }
  const feitos=simulados.filter(s=>s.est.simuladoFeito).length;
  const mediaScore=feitos>0?Math.round(simulados.filter(s=>s.est.simuladoFeito).reduce((a,s)=>a+s.est.simuladoScore,0)/feitos):null;

  // ── Stats (on-brand: creme / verde / âmbar) ──
  const stat=(v,l,bg,bd,fg)=>`<div style="background:${bg};border:1px solid ${bd};border-radius:16px;padding:.95rem;text-align:center"><div style="font-family:'Bricolage Grotesque',sans-serif;font-size:1.5rem;font-weight:800;color:${fg}">${v}</div><div style="font-size:.72rem;color:#8A8072;margin-top:.2rem">${l}</div></div>`;
  let html=`<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:.75rem;margin-bottom:1.4rem">
    ${stat(simulados.length,"Total","#fff","#EEE5D6","#241F18")}
    ${stat(feitos,"Realizados","#E4F4EA","#A6E2BE","#1C7A4B")}
    ${stat(mediaScore!=null?mediaScore+"%":"—","Média","#FBF1D7","#F2E2AE","#8A6212")}
  </div>`;

  // Instrução de uso — o app monta a pauta; as questões são resolvidas por fora
  html+=`<div style="display:flex;gap:.6rem;align-items:flex-start;background:#FBF6EA;border:1px solid #F2E2AE;border-radius:12px;padding:.75rem .9rem;margin-bottom:1.2rem;font-size:.8rem;color:#6B5512;line-height:1.55"><span style="flex-shrink:0">💡</span><span><strong>Como funciona:</strong> a Bússola monta a pauta do simulado — as questões você resolve por fora. Selecione <strong>~20 questões dos temas listados</strong> no seu banco de questões (QConcursos, TEC, provas anteriores da banca), cronometre, corrija e registre aqui seu percentual de acertos.</span></div>`;

  // ── 1. Mini Simulados (lista principal) ──
  html+=`<div style="font-family:'Bricolage Grotesque',sans-serif;font-size:.82rem;font-weight:700;color:#6B6155;margin:0 0 .7rem;padding-left:.1rem">Mini Simulados</div>`;
  simulados.forEach(s=>{
    const {key,date,info,est,isPast,isHoje}=s;
    const feito=!!est.simuladoFeito;
    const score=feito&&est.simuladoScore!=null?est.simuladoScore:null;
    html+=buildStatusCard({
      titulo:`Mini Simulado — Rev. ${info.revNums.join(", ")}`,
      sub:date.toLocaleDateString("pt-BR",{weekday:"short",day:"2-digit",month:"2-digit"}),
      estado:statusOf(feito,isHoje,isPast),
      bullets:[`<em style="color:#8A6212">Resolva ~20 questões destes temas no seu banco de questões e registre o % de acertos:</em>`,...info.topicos.map(t=>`${t.mat}: ${t.top}`)],
      scoreLabel:"acertos", score, emptyLabel:isHoje?"Resolva por fora e registre aqui":(isPast?"Aguardando registro":"Agendado"),
      btnLabel:feito?"Editar":"Registrar resultado",
      btnAction:"abrirSimulado", btnKey:key,
      collapsible:true, id:key, startOpen:isHoje
    });
  });

  // ── 2. Revisão Geral (abaixo dos minis, em destaque verde) ──
  const provaD=parseDate(STATE.prova);
  const rvD=new Date(provaD); rvD.setDate(rvD.getDate()-7);
  const rvKey=fmt(rvD);
  if(rvKey>=STATE.inicio){
    const rvEst=STATE.dias[rvKey]||{};
    const rvFeita=!!rvEst.revisaoGeralFeita;
    const rvScore=rvEst.revisaoGeralScore!=null?rvEst.revisaoGeralScore:null;
    const rvIsHoje=fmt(hoje)===rvKey;
    html+=`<div style="font-family:'Bricolage Grotesque',sans-serif;font-size:.82rem;font-weight:700;color:#6B6155;margin:1.5rem 0 .7rem;padding-left:.1rem">Avaliação Final</div>`;
    html+=buildStatusCard({
      titulo:"📋 Revisão Geral — Simulado Completo",
      sub:`${rvD.toLocaleDateString("pt-BR",{weekday:"short",day:"2-digit",month:"2-digit"})} · 7 dias antes da prova`,
      estado:statusOf(rvFeita,rvIsHoje,rvD<hoje),
      chipLabel:rvFeita?"Concluída":rvIsHoje?"Hoje":rvD<hoje?"Pendente":"Agendada",
      bullets:["Simule a prova no formato real: mesmo número de questões e tempo limitado.","É sua última grande avaliação antes do dia decisivo."],
      scoreLabel:"acertos", score:rvFeita?rvScore:null, emptyLabel:rvIsHoje?"Disponível para registro":(rvD<hoje?"Aguardando registro":"7 dias antes da prova"),
      btnLabel:rvFeita?"Editar":"Registrar Revisão Geral",
      btnAction:"abrirRevisaoGeral", btnKey:rvKey,
      destaque:true,
      collapsible:true, id:rvKey, startOpen:rvIsHoje
    });
  }
  el.innerHTML=html;
}

function renderRevisoesPage(){
  // Banner
  const blocos=buildBlocosRevisao();
  const bannerEl=document.getElementById("revBanner");
  const tabsEl=document.getElementById("revTabsEl");
  if(bannerEl){
    const total=blocos.length;
    const conc=blocos.filter(b=>b.concluida).length;
    const disp=blocos.filter(b=>b.estado==="disponivel").length;
    const fut=blocos.filter(b=>b.isFutura).length;
    if(total===0&&bannerEl){ bannerEl.innerHTML=""; }
    else if(bannerEl){
      const items=[
        {v:total, l:"Total"},
        {v:conc,  l:"Concluídas",  c:conc>0?"#16A34A":"var(--navy)"},
        {v:disp,  l:"Disponíveis", c:disp>0?"#1D4ED8":"var(--navy)"},
        {v:fut,   l:"Futuras",     c:"var(--navy)"},
      ];
      bannerEl.innerHTML=`<div class="rev-banner">${items.map(i=>`<div class="rvb-item"><div class="rvb-val" style="color:${i.c||"var(--navy)"}">${i.v}</div><div class="rvb-lbl">${i.l}</div></div>`).join("")}</div>`;
    }
  }
  if(tabsEl){
    tabsEl.innerHTML=`<div class="rev-tabs">
      <button class="rev-tab-btn active" id="revTabBtn-ciclos">📋 Ciclos de Exercícios</button>
    </div>`;
  }
  mudarRevTab(_revTabAtual);
}

function renderRevisoesPageJornada(){
  const jornada=getJornada();
  const el=document.getElementById("revisoesConteudo");
  const resumoEl=document.getElementById("revResumo");
  const filtrosEl=document.getElementById("revFiltros");
  if(!el) return;
  const total=jornada.length;
  const pendentes=jornada.filter(i=>i.s7.st==="due"||i.s7.st==="overdue"||i.s30.st==="due"||i.s30.st==="overdue").length;
  const concluidos=jornada.filter(i=>i.completo).length;
  if(resumoEl) resumoEl.innerHTML=[
    {v:total,l:"Tópicos estudados",c:"var(--navy)"},
    {v:pendentes,l:"Revisões pendentes",c:pendentes>0?"#DC2626":"var(--green)"},
    {v:concluidos,l:"Jornada completa",c:"var(--green)"},
  ].map(({v,l,c})=>`<div class="rev-resumo-card"><div class="rev-resumo-val" style="color:${c}">${v}</div><div class="rev-resumo-lbl">${l}</div></div>`).join("");
  const materias=[...new Set(jornada.map(i=>i.mat))];
  const filtros=[{id:"todas",lbl:"Todos"},{id:"pendentes",lbl:"⏰ Pendentes"+(pendentes>0?` (${pendentes})`:"")},{id:"concluidas",lbl:"✅ Concluídos"},...materias.map(m=>({id:m,lbl:m}))];
  if(filtrosEl) filtrosEl.innerHTML=filtros.map(f=>`<button class="rev-filtro-btn${_revFiltroAtual===f.id?" active":""}" data-action="filtrarRevMat" data-mat="${esc(f.id)}">${f.lbl}</button>`).join("");
  let itens=jornada;
  if(_revFiltroAtual==="pendentes") itens=jornada.filter(i=>i.s7.st==="due"||i.s7.st==="overdue"||i.s30.st==="due"||i.s30.st==="overdue");
  else if(_revFiltroAtual==="concluidas") itens=jornada.filter(i=>i.completo);
  else if(_revFiltroAtual!=="todas") itens=jornada.filter(i=>i.mat===_revFiltroAtual);
  if(itens.length===0){
    el.innerHTML=`<div style="text-align:center;padding:3rem 1rem;color:var(--gray-400)"><div style="font-size:2rem;margin-bottom:.6rem">${total===0?"📖":"✅"}</div><div style="font-weight:700;color:var(--gray-600);margin-bottom:.4rem">${total===0?"Nenhum tópico estudado ainda":"Nada aqui"}</div><div style="font-size:.85rem">${total===0?"Estude e avalie tópicos no Cronograma para acompanhar a jornada.":"Nenhum tópico corresponde a este filtro."}</div></div>`;
    return;
  }
  const secoes=[
    {id:"due",    label:"🔔 Revisar agora",   items:itens.filter(i=>i.s7.st==="due"||i.s30.st==="due")},
    {id:"overdue",label:"⚠️ Atrasadas",       items:itens.filter(i=>(i.s7.st==="overdue"||i.s30.st==="overdue")&&i.s7.st!=="due"&&i.s30.st!=="due")},
    {id:"future", label:"⏳ Aguardando",      items:itens.filter(i=>!i.completo&&i.s7.st==="future"&&i.s30.st!=="due"&&i.s30.st!=="overdue")},
    {id:"done",   label:"✅ Jornada completa",items:itens.filter(i=>i.completo)},
  ].filter(s=>s.items.length>0);
  let html=`<div style="display:flex;gap:.6rem;align-items:flex-start;background:#EFF6FF;border:1px solid #DBEAFE;border-radius:12px;padding:.7rem .9rem;margin-bottom:1rem;font-size:.8rem;color:#1E40AF;line-height:1.55"><span style="flex-shrink:0">💡</span><span><strong>Como usar:</strong> nos tópicos marcados <strong>"Revisar agora"</strong>, resolva ~10 questões de cada um, clique em <strong>✓ Marcar revisão</strong> e atualize seu nível de confiança nas estrelas — as ★ mostram sua última avaliação.</span></div>`;
  secoes.forEach(sec=>{
    html+=`<div class="rev-section-hd">${sec.label} <span style="font-size:.7rem;font-weight:600;color:var(--gray-400)">(${sec.items.length})</span></div>`;
    sec.items.forEach(item=>{
      const isDue=item.s7.st==="due"||item.s30.st==="due";
      const isOverdue=item.s7.st==="overdue"||item.s30.st==="overdue";
      const cardCls=item.completo?"is-complete":isDue?"is-due":isOverdue?"is-overdue":"";
      const nEst=item.estrelas||nivelToStars(item.percepcao||"");
      const starsHtml=nEst?`<span style="color:#F59E0B;font-size:.8rem">${"★".repeat(nEst)}${"☆".repeat(5-nEst)}</span>`:"";
      const dataEstudo=parseDate(item.key).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"});
      let acoes="";
      if(item.s7.st==="due") acoes+=`<button class="btn-marcar-revisada" data-action="marcarRevisada" data-key="${item.key}" data-tipo="7">✓ Marcar revisão 7d</button>`;
      if(item.s30.st==="due") acoes+=`<button class="btn-marcar-revisada" style="margin-top:4px" data-action="marcarRevisada" data-key="${item.key}" data-tipo="30">✓ Marcar revisão 30d</button>`;
      const showReav=isDue;
      const curN=STATE.dias[item.key]?.estrelas||nivelToStars(STATE.dias[item.key]?.percepcao||"");
      const reavHtml=showReav?`<div style="margin-top:4px">${sabStarHTML(item.key,curN,"rev")}</div>`:"";
      html+=`<div class="rev-card-new ${cardCls}">
        <div>
          <div style="font-size:.84rem;font-weight:700;color:var(--navy)">${item.top}</div>
          <div style="font-size:.75rem;color:var(--gray-500);margin-top:1px">${item.mat} &nbsp;·&nbsp; Estudado em ${dataEstudo} ${starsHtml}</div>
          <div class="rev-jornada">
            ${etapaHtml("done","Estudado")}
            <span class="rev-arrow">→</span>
            ${etapaHtml(item.s7.st,"7d: "+item.s7.label)}
            <span class="rev-arrow">→</span>
            ${etapaHtml(item.s30.st,"30d: "+item.s30.label)}
          </div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;min-width:140px">
          ${acoes}${reavHtml}
        </div>
      </div>`;
    });
  });
  el.innerHTML=html;
  setTimeout(()=>repaintAllStars(),0);
}
function filtrarRevMat(mat){
  _revFiltroAtual=mat;
  renderRevisoesPage();
}

function marcarRevisada(origKey, tipo){
  if(!STATE.dias[origKey]) STATE.dias[origKey]={};
  const hoje=fmt(new Date());
  if(tipo==="7") STATE.dias[origKey].rev7feito=hoje;
  else           STATE.dias[origKey].rev30feito=hoje;
  save();
  renderTudo();
  renderRevisoesPage();
}

function toggleReavPicker(key,tipo){
  const picker=document.getElementById(`reavpicker-${key}-${tipo}`);
  if(!picker) return;
  const wasOpen=picker.classList.contains("open");
  document.querySelectorAll(".reav-picker.open").forEach(p=>p.classList.remove("open"));
  if(!wasOpen) picker.classList.add("open");
}

function aplicarReavaliacao(origKey, novaConf, safeKey, tipo){
  if(!STATE.dias[origKey]) STATE.dias[origKey]={};
  STATE.dias[origKey].percepcao=novaConf;
  STATE.dias[origKey].reavaliado=true;
  save();
  // Fecha picker e re-renderiza o card
  const picker=document.getElementById(`reavpicker-${safeKey}-${tipo}`);
  if(picker) picker.classList.remove("open");
  renderRevisoesPage();
  renderTudo(); // atualiza mapa de calor e stats
}

/* ── MAPA DE CALOR ── */
function renderMapaCalorPage(targetId){
  const grid=document.getElementById(targetId);
  if(!grid) return;
  if(targetId!=="mapaGrid"){ renderMaterias(); return; }

  const materias=calcMateriasStats();
  const cob=calcCobertura();
  const overallProg=cob.pct;
  const expectedProg=calcExpectedPerSubject(); // progresso esperado por matéria
  const topicos=getTopicos();

  // Ordena por RISCO: quanto do edital falta dominar, pesado pela prova.
  // (100 - domínio) x peso coloca no topo a matéria cara e mal dominada.
  const ordenadas=[...materias].sort((a,b)=>{
    if(a.prog===0&&b.prog>0) return 1;
    if(b.prog===0&&a.prog>0) return -1;
    const riscoA=(100-a.dominio)*a.peso;
    const riscoB=(100-b.dominio)*b.peso;
    if(riscoB!==riscoA) return riscoB-riscoA;
    return b.peso-a.peso;
  });

  let html=`
    <div class="mapa-legenda">
      <div class="mapa-leg-item"><div class="mapa-leg-dot" style="background:#22C55E"></div>Adiantado</div>
      <div class="mapa-leg-item"><div class="mapa-leg-dot" style="background:#F59E0B"></div>No ritmo</div>
      <div class="mapa-leg-item"><div class="mapa-leg-dot" style="background:#EF4444"></div>Atrasado</div>
      <span style="font-size:.7rem;color:var(--gray-400);margin-left:auto">Cobertura geral: ${overallProg}% (${cob.cobertos}/${cob.total} tópicos)</span>
    </div>
    <div class="mapa-header">
      <div class="mapa-header-cell">Matéria</div>
      <div class="mapa-header-cell center">Progresso vs Cronograma</div>
      <div class="mapa-header-cell right" title="Confiança pesada pela cobertura: quanto desta matéria você já domina de fato">Domínio</div>
    </div>`;

  const _LIM_MAT=6;
  const _lista=_mapaTudo?ordenadas:ordenadas.slice(0,_LIM_MAT);
  html+=_lista.map(m=>{
    const exp=expectedProg[m.nome]??overallProg;
    const gap=m.prog-exp;
    let barClass, stClass, stLabel;
    if(m.prog===0){ barClass="bar-nodata"; stClass="st-nodata"; stLabel="Não iniciado"; }
    else if(gap>=5){  barClass="bar-ahead";   stClass="st-ahead";   stLabel=`+${gap}% adiantado`; }
    else if(gap>=-12){ barClass="bar-ontrack"; stClass="st-ontrack"; stLabel="No ritmo"; }
    else{              barClass="bar-behind";  stClass="st-behind";  stLabel=`${gap}% abaixo do esperado`; }

    const totalTop=(topicos[m.nome]||[]).length;
    // Domínio do edital: a cor segue o domínio, nunca a confiança isolada.
    // Assim o verde só aparece quando o aluno viu a matéria E foi bem nela.
    let cbClass, confLabel, confPct, cbBase;
    if(!m.conf){
      cbClass="cb-nodata"; confLabel="Sem dados"; confPct="—";
      cbBase=`0 de ${m.totalTop||totalTop}`;
    } else {
      cbClass = m.dominio>=70?"cb-green" : m.dominio>=40?"cb-yellow" : "cb-red";
      confLabel = m.dominio>=70?"Domínio alto" : m.dominio>=40?"Domínio parcial" : "Domínio baixo";
      confPct = m.dominio+"%";
      cbBase = `conf ${m.conf}% · ${m.avaliados} de ${m.totalTop||totalTop}`;
      if(m.confParcial){ cbClass+=" cb-parcial"; confLabel+=" · confiança medida em poucos tópicos"; }
    }

    return`<div class="mapa-item">
      <div>
        <div class="mapa-materia">${m.nome}</div>
        <span class="mapa-peso-tag">Peso ${m.peso}%</span>
      </div>
      <div class="mapa-prog-col">
        <div class="mapa-bar-row">
          <div class="mapa-bar-wrap"><div class="mapa-bar-fill ${barClass}" style="width:${Math.max(m.prog,2)}%"></div></div>
          <span class="mapa-pct">${m.prog}%</span>
        </div>
        <div class="mapa-status ${stClass}">${stLabel}</div>
      </div>
      <div class="mapa-conf-col">
        <div class="conf-badge ${cbClass}" title="${esc(confLabel)}">
          <span class="cb-pct">${confPct}</span>
          <span class="cb-base">${esc(cbBase)}</span>
        </div>
      </div>
    </div>`;
  }).join("");

  if(ordenadas.length>_LIM_MAT){
    html+=`<button class="mapa-vermais" data-action="toggleMapaTudo">${_mapaTudo?"▴ Mostrar só as "+_LIM_MAT+" prioritárias":"▾ Ver todas as "+ordenadas.length+" matérias"}</button>`;
  }
  grid.innerHTML=html;
}
/* Lista de matérias compacta por padrão: mostra as prioritárias e expande
   sob demanda (preferência só da sessão, não vai para o STATE). */
let _mapaTudo=false;
let _medExpandido=false;
function toggleMedalhas(){ _medExpandido=!_medExpandido; renderMedalhas(); }
function toggleMapaTudo(){ _mapaTudo=!_mapaTudo; renderMapaCalorPage("mapaGrid"); }

function renderMaterias(){
  const grid=document.getElementById("mapaGridMaterias");
  if(!grid) return;
  const materias=calcMateriasStats();
  const topicos=getTopicos();
  const totalQuestoes=100;
  /* Dia multi-tópico guarda a confiança em d.percepcoes[i], e não em
     d.percepcao. Sem olhar os dois, o banner de "ainda não há dados"
     aparecia para quem já tinha avaliado a semana inteira. */
  const temDados=Object.values(STATE.dias).some(d=>d.percepcao||(d.percepcoes&&Object.keys(d.percepcoes).length));
  const contextoBanner=!STATE.inicio
    ?`<div style="background:#F0F7F3;border:1.5px solid #C8E6D5;border-radius:14px;padding:1.1rem 1.4rem;margin-bottom:1.25rem;text-align:center;color:#4A6155;font-size:.87rem">Configure seu concurso para ver as matérias.</div>`
    :!temDados
      ?`<div style="background:#F0F7F3;border:1.5px solid #C8E6D5;border-radius:14px;padding:1.1rem 1.4rem;margin-bottom:1.25rem">
          <div style="font-weight:700;color:#1C5E3D;font-size:.88rem;margin-bottom:.3rem">📊 Seu mapa de domínio vai aparecer aqui</div>
          <div style="font-size:.83rem;color:#4A6155;line-height:1.6">Conforme você avalia os tópicos no Cronograma com ⭐ estrelas, este painel se preenche automaticamente com sua cobertura e confiança por matéria. Comece pelo <button data-action="navTo" data-page="hoje" style="background:none;border:none;color:#2FB374;font-weight:700;cursor:pointer;font-size:.83rem;padding:0;text-decoration:underline">Foco de Hoje →</button></div>
        </div>`
      :"";
  /* Agenda por tópico: em que dia cai e com que confiança foi avaliado.
     Uma varredura só, reaproveitada por todos os tópicos da tela. */
  const agenda=(typeof indexarAgendaTopicos==="function")?indexarAgendaTopicos():{};
  const comTexto=(mat,top)=>temConteudo(STATE.prefeitura,mat,top);
  let totalTop=0, totalComTexto=0;

  const chip=(mat,top)=>{
    totalTop++;
    const tem=comTexto(mat,top);
    if(tem) totalComTexto++;
    const info=agenda[_normTexto(mat)+"|"+_normTexto(top)]||null;
    /* Data e confiança usam o mesmo vocabulário do resto do app:
       🏆 alta, 📚 média, ⚠️ baixa. Sem avaliação, nada aparece. */
    const perc=info&&info.percepcao;
    const stIcon=perc==="alta"?"🏆":perc==="media"?"📚":perc==="baixa"?"⚠️":"";
    const stTitle=perc==="alta"?"Estudado, confiança alta":perc==="media"?"Estudado, confiança média":perc==="baixa"?"Estudado, confiança baixa":"";
    const stHtml=stIcon?`<span class="mt-status" title="${stTitle}">${stIcon}</span>`:"";
    const dtHtml=info?`<span class="mt-data" title="Cai no cronograma em ${esc(info.key)}">${_dm(info.key)}</span>`:"";
    const meta=stHtml+dtHtml;
    const busca=esc((mat+" "+top).toLowerCase());
    /* Tópico sem texto publicado NÃO vira botão: o aluno nunca clica em
       algo que abre tela vazia (mesma regra do _btnConteudo). */
    if(!tem) return `<li class="mat-top sem-texto" data-busca="${busca}" title="Texto ainda não publicado"><span class="mt-nome">${esc(top)}</span>${meta}</li>`;
    return `<li class="mat-top" data-busca="${busca}">
      <button type="button" class="mt-nome mt-link" data-action="abrirConteudo" data-mat="${esc(mat)}" data-top="${esc(top)}" title="Ler: ${esc(top)}">📖 ${esc(top)}</button>${meta}</li>`;
  };

  const itensHtml=materias.map((m,i)=>{
    const questoes=Math.round(totalQuestoes*(m.peso/100));
    const confColor=m.conf>=70?"var(--green)":m.conf>=50?"var(--yellow)":"var(--red)";
    const semConf=!m.conf;
    const confLabel=m.conf>=70?"Alta":m.conf>=50?"Média":m.conf>0?"Baixa":"Sem dados";
    const tops=(topicos[m.nome]||[]);
    const topsHtml=tops.map(t=>chip(m.nome,t)).join("");
    const nTexto=tops.filter(t=>comTexto(m.nome,t)).length;
    const selo=nTexto?`<span class="mat-selo" title="Tópicos desta matéria com texto publicado">📖 ${nTexto} de ${tops.length}</span>`:"";
    return`<div class="mat-item" data-busca="${esc(m.nome.toLowerCase())}">
      <div class="mat-item-header">
        <div class="mat-item-left">
          <div class="mat-num">${String(i+1).padStart(2,"0")}</div>
          <div style="flex:1;min-width:0"><div class="mat-nome">${m.nome}${selo}</div><div class="mat-subs"><ul>${topsHtml}</ul></div></div>
        </div>
        <div class="mat-item-right">
          <div class="mat-stat"><span class="mat-stat-label">Peso</span><span class="mat-stat-val">${m.peso}%</span></div>
          <div class="mat-stat"><span class="mat-stat-label">Questões</span><span class="mat-stat-val">${questoes}</span></div>
          <div class="mat-stat"><span class="mat-stat-label">Segurança</span><span class="mat-stat-val" style="color:${semConf?"var(--gray-400)":confColor}${semConf?";font-size:.7rem;font-weight:600":""}">${confLabel}</span></div>
        </div>
      </div>
    </div>`;
  }).join("");

  const buscaHtml=`
    <div class="mat-busca">
      <span class="mat-busca-ico">🔎</span>
      <input type="text" id="matBusca" data-input="filtrarConteudo" placeholder="Buscar matéria ou tópico" value="${esc(_buscaConteudo)}" autocomplete="off" spellcheck="false">
      <button type="button" class="mat-busca-x" data-action="limparBuscaConteudo" title="Limpar busca">✕</button>
    </div>
    <div class="mat-busca-ajuda">${totalComTexto} de ${totalTop} tópicos já têm texto publicado. Toque no tópico com 📖 para ler sem passar pelo cronograma.</div>
    <div class="mat-busca-vazio" id="matBuscaVazio" hidden>Nenhum tópico encontrado para essa busca.</div>`;

  grid.innerHTML=contextoBanner+buscaHtml+`<div class="mat-lista">${itensHtml}</div>`;
  aplicarBuscaConteudo();
}

/* ── BUSCA DO CONTEÚDO PROGRAMÁTICO ────────────────────────────────
   Filtra escondendo elementos já renderizados, em vez de re-renderizar
   a lista a cada tecla. É o que mantém o foco (e o cursor) dentro do
   campo enquanto o aluno digita.
   Regra: se o termo casa com o NOME DA MATÉRIA, a matéria inteira
   aparece; senão, só os tópicos que casam, e a matéria some quando
   nenhum tópico dela sobrar. */
let _buscaConteudo="";
function _normBusca(s){
  return String(s??"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim();
}
function aplicarBuscaConteudo(){
  const grid=document.getElementById("mapaGridMaterias");
  if(!grid) return;
  const termo=_normBusca(_buscaConteudo);
  const itens=grid.querySelectorAll(".mat-item");
  let visiveis=0;
  itens.forEach(it=>{
    const nomeMat=_normBusca(it.dataset.busca||"");
    const matCasa=!termo||nomeMat.includes(termo);
    let algum=false;
    it.querySelectorAll(".mat-top").forEach(li=>{
      const casa=matCasa||_normBusca(li.dataset.busca||"").includes(termo);
      li.hidden=!casa;
      if(casa) algum=true;
    });
    const mostra=!termo||matCasa||algum;
    it.hidden=!mostra;
    if(mostra) visiveis++;
  });
  const vazio=document.getElementById("matBuscaVazio");
  if(vazio) vazio.hidden=visiveis>0;
  const x=grid.querySelector(".mat-busca-x");
  if(x) x.hidden=!_buscaConteudo;
}
function filtrarConteudo(v){
  _buscaConteudo=v||"";
  aplicarBuscaConteudo();
}
function limparBuscaConteudo(){
  _buscaConteudo="";
  const inp=document.getElementById("matBusca");
  if(inp){ inp.value=""; inp.focus(); }
  aplicarBuscaConteudo();
}

/* ── PAINEL ── */
let painelAberto=false; // Coach recolhido por padrão — resumo na barra já informa o essencial
function togglePainel(){
  painelAberto=!painelAberto;
  document.getElementById("painelContent").classList.toggle("open",painelAberto);
  document.getElementById("painelIcon").classList.toggle("open",painelAberto);
}

/* ── SEMANA ── */
function isSemanaCompleta(seg){
  if(!STATE.inicio) return false;
  const fracos=getTopicosFracos(seg);
  for(let i=0;i<7;i++){
    const d=new Date(seg); d.setDate(d.getDate()+i);
    const key=fmt(d);
    const ciclo=getCicloPos(key);
    if(ciclo===-1) continue;
    const est=STATE.dias[key]||{};
    if(ciclo>=0&&ciclo<=4){
      if(!est.percepcao&&!est.skipped&&!est.transferido&&!est.recuperado) return false;
    } else if(ciclo===5){
      // RT: pendências = itens estudados sem confiança alta
      const pendentes=fracos.filter(f=>STATE.dias[f.key]?.percepcao&&STATE.dias[f.key].percepcao!=="alta");
      if(pendentes.length>0) return false;
    } else if(ciclo===6){
      // Exercícios: todos os itens estudados devem ter exRevisao
      const estudados=fracos.filter(f=>STATE.dias[f.key]?.percepcao);
      if(estudados.length>0&&!estudados.every(f=>STATE.dias[f.key]?.exRevisao)) return false;
    }
  }
  return true;
}
function dispararConfetti(container){
  const colors=["#22c55e","#3b82f6","#f59e0b","#ec4899","#8b5cf6","#06b6d4","#f97316"];
  const shapes=[2,50,"50%"];
  for(let i=0;i<28;i++){
    const el=document.createElement("div");
    el.className="confetti-piece";
    const size=5+Math.random()*7;
    const br=shapes[Math.floor(Math.random()*shapes.length)];
    el.style.cssText=`left:${Math.random()*100}%;width:${size}px;height:${size}px;background:${colors[Math.floor(Math.random()*colors.length)]};border-radius:${br}px;animation-delay:${Math.random()*.5}s;animation-duration:${.7+Math.random()*.5}s;`;
    container.appendChild(el);
    setTimeout(()=>el.remove(),1400);
  }
}

function renderBarraSemanal(seg){
  const hoje=new Date(); hoje.setHours(0,0,0,0);
  const nomes=["SEG","TER","QUA","QUI","SEX","SÁB","DOM"];
  let donesCount=0, totalDias=0; let html="";
  for(let i=0;i<7;i++){
    const d=new Date(seg); d.setDate(d.getDate()+i);
    const key=fmt(d); const est=STATE.dias[key]||{};
    const isHoje=d.getTime()===hoje.getTime();
    const perc=est.percepcao;
    let dotClass="",dotContent="";
    const cicloSpb=getCicloPos(key);
    if(cicloSpb===-1){ dotClass="special"; dotContent="🏖️"; }
    else{
      totalDias++;
      if(perc==="alta"){dotClass="done-high";dotContent="🏆";donesCount++;}
      else if(perc==="media"){dotClass="done-mid";dotContent="📚";donesCount++;}
      else if(perc==="baixa"){dotClass="done-low";dotContent="⚠️";donesCount++;}
      else if(est.recuperado){dotClass="special";dotContent="🔁";}
      else if(est.transferido){dotClass="special";dotContent="📦";}
      else if(cicloSpb===5){dotClass="special";dotContent="⚡";}
      else if(cicloSpb===6){dotClass="special";dotContent="📝";}
      else if(isHoje){dotClass="today";dotContent="📍";}
      else{dotContent="○";}
    }
    html+=`<div class="spb-day"><div class="spb-day-name">${nomes[i]}</div><div class="spb-dot ${dotClass}">${dotContent}</div></div>`;
  }
  document.getElementById("spbDays").innerHTML=html;
  const bar=document.getElementById("semanaProgressBar");
  const weekKey=fmt(seg);
  const allDone=totalDias>0&&isSemanaCompleta(seg);
  if(allDone){
    bar.classList.add("spb-celebration");
    document.getElementById("spbStat").innerHTML=`<span class="spb-win-badge">🏆 Semana concluída!</span>`;
    if(STATE._lastCelebration!==weekKey){
      STATE._lastCelebration=weekKey;
      setTimeout(()=>dispararConfetti(bar),120);
    }
  } else {
    bar.classList.remove("spb-celebration");
    STATE._lastCelebration=STATE._lastCelebration===weekKey?null:STATE._lastCelebration;
    document.getElementById("spbStat").innerHTML=`<strong>${donesCount}</strong> de <strong>${totalDias}</strong> dias concluídos`;
  }
}

function getSemanaInicio(){
  const hoje=new Date(); hoje.setHours(0,0,0,0);
  const dow=(hoje.getDay()+6)%7;
  const seg=semanaStart(); // Monday of current week + offset
  return seg;
}
function navegarSemana(d){ STATE.semanaOffset+=d; save(); renderSemana(); }

/* ── Anotações da semana ── */
function renderNotasSemana(seg){
  const key=fmt(seg);
  const nota=esc((STATE.notasSemana||{})[key]||"");
  return`<div class="notas-semana-card">
    <div class="dia-header"><div class="dia-header-left"><div class="dia-label">📝 Anotações</div><div class="dia-date" style="font-size:.78rem">da semana</div></div></div>
    <textarea class="notas-semana-textarea" placeholder="Lembretes, pendências, links da semana..." data-input="salvarNotaSemana">${nota}</textarea>
  </div>`;
}
let _notaSemTimer=null;
function salvarNotaSemana(v){
  if(!STATE.notasSemana) STATE.notasSemana={};
  STATE.notasSemana[fmt(getSemanaInicio())]=v;
  clearTimeout(_notaSemTimer); _notaSemTimer=setTimeout(save,350);
}

/* ── VISÃO MENSAL ── */
function setCronView(v){
  STATE.cronView=v; save();
  document.getElementById("viewSemana").style.display=v==="semana"?"":"none";
  document.getElementById("viewMes").style.display=v==="mes"?"":"none";
  document.getElementById("btn-semana").classList.toggle("active",v==="semana");
  document.getElementById("btn-mes").classList.toggle("active",v==="mes");
  document.getElementById("cronTitle").textContent=v==="semana"?"📅 Cronograma Semanal":"📆 Cronograma Mensal";
  if(v==="semana") renderSemana();
  else renderMes();
}


/* isProvaDay / isRevisaoGeralDay / isRetaFinalDay → movidas para js/engine.js */
// Percepção efetiva do dia (cobre dias multi-tópico: o pior nível prevalece)
function getDayPercepcao(dateKey){
  const est=STATE.dias[dateKey]||{};
  if(est.percepcao) return est.percepcao;
  const ps=Object.values(est.percepcoes||{});
  if(!ps.length) return null;
  if(ps.includes("baixa")) return "baixa";
  if(ps.includes("media")) return "media";
  return "alta";
}

function renderDiaRevisaoGeral(dia, key, isHoje){
  const est=STATE.dias[key]||{};
  const feito=!!est.revisaoGeralFeita;
  const score=est.revisaoGeralScore!=null?est.revisaoGeralScore:null;
  const nomeDia=["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"][dia.getDay()];
  const dataBR=dia.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"});
  const badge=feito
    ?`<span class="dia-badge" style="background:#2FB374;color:#0E2A1D;font-size:.65rem;font-weight:800">✅ Feita</span>`
    :isHoje
      ?`<span class="dia-badge" style="background:#5FD79A;color:#0E2A1D;font-size:.65rem;font-weight:800">📍 Hoje</span>`
      :`<span class="dia-badge" style="background:rgba(95,215,154,.18);color:#5FD79A;font-size:.65rem;font-weight:800">📋 Rev. Geral</span>`;
  const scoreHtml=feito&&score!=null
    ?`<div style="display:flex;align-items:center;justify-content:space-between;margin-top:.6rem;padding:.4rem .7rem;background:rgba(95,215,154,.14);border:1px solid rgba(95,215,154,.25);border-radius:8px">
        <span style="font-size:.73rem;color:#9FE0BF;font-weight:600">Resultado</span>
        <span style="font-family:'Bricolage Grotesque',sans-serif;font-size:1rem;font-weight:800;color:#5FD79A">${score}%</span>
      </div>`:""
  const btnHtml=feito
    ?`<button style="margin-top:.6rem;background:transparent;border:1.5px solid rgba(255,255,255,.3);color:#E8F0E9;border-radius:10px;padding:7px 14px;font-size:.75rem;cursor:pointer;font-weight:700" data-action="abrirRevisaoGeral" data-key="${key}">Editar resultado</button>`
    :`<button style="margin-top:.7rem;background:#2FB374;color:#0E2A1D;border:none;border-radius:10px;padding:8px 15px;font-size:.78rem;font-weight:700;cursor:pointer;transition:filter .15s" class="hv-dim" data-action="abrirRevisaoGeral" data-key="${key}">Registrar Revisão Geral</button>`;
  return`<div class="dia-card card-rev-geral" id="card-${key}">
    <div class="dia-header" style="border-bottom:1px solid rgba(255,255,255,.08)">
      <div class="dia-header-left"><div class="dia-label">${nomeDia}</div><div class="dia-date">${dataBR}</div></div>
      ${badge}
    </div>
    <div class="dia-body" style="padding:.9rem">
      <div style="font-size:.78rem;font-weight:800;color:#5FD79A;margin-bottom:.2rem">📋 Revisão Geral</div>
      <div style="font-size:.75rem;color:rgba(232,240,233,.7);line-height:1.5;margin:.3rem 0">Simule a prova completa! Responda questões no mesmo formato do concurso e meça sua preparação.</div>
      <div style="font-size:.7rem;font-weight:600;color:#5FD79A;background:rgba(95,215,154,.12);border-radius:6px;padding:3px 8px;display:inline-block;margin-top:.3rem">⏰ 7 dias antes da prova</div>
      ${scoreHtml}
      ${btnHtml}
    </div>
  </div>`;
}

let _rgKey=null;
function abrirRevisaoGeral(key){
  _rgKey=key;
  const est=STATE.dias[key]||{};
  const cur=est.revisaoGeralScore!=null?String(est.revisaoGeralScore):"";
  const inp=document.getElementById("rgScoreInput");
  if(inp){ inp.value=cur; }
  document.getElementById("rgModal").classList.remove("hidden");
  setTimeout(()=>{ if(inp) inp.focus(); },80);
}
function fecharRgModal(){
  document.getElementById("rgModal").classList.add("hidden");
  _rgKey=null;
}
function confirmarRevisaoGeral(){
  if(!_rgKey) return;
  const inp=document.getElementById("rgScoreInput");
  const score=parseInt(inp?.value||"");
  if(isNaN(score)||score<0||score>100){ showToast("⚠️ Informe um número de 0 a 100."); return; }
  if(!STATE.dias[_rgKey]) STATE.dias[_rgKey]={};
  STATE.dias[_rgKey].revisaoGeralFeita=true; _carimbarRegistro(_rgKey);
  STATE.dias[_rgKey].revisaoGeralScore=score;
  fecharRgModal();
  save(); renderSemana(); renderSimuladoPage(); updateNavBadges();
  showToast("✅ Revisão Geral registrada — "+score+"%");
}




function getSimuladoInfo(simuladoKey){
  const prev=getPrevNonFreeDay(simuladoKey);
  if(!prev) return {revNums:[],topicos:[],lastRev:0};
  const lastRev=getNumRevisao(prev);
  const firstRev=Math.max(1,lastRev-2);
  const blocos=buildBlocosRevisao();
  const topicos=[];
  for(let r=firstRev;r<=lastRev;r++){
    const b=blocos.find(x=>x.num===r);
    if(b) b.topicos.forEach(t=>topicos.push({...t,revNum:r}));
  }
  return {revNums:[firstRev,firstRev+1,lastRev].filter((n,i,a)=>n>0&&a.indexOf(n)===i),topicos,lastRev};
}

function renderDiaProva(dia, key, isHoje){
  const nomeDia=dia.toLocaleDateString("pt-BR",{weekday:"long"});
  const dataBR=dia.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"});
  const hj=isHoje?'<span class="dia-badge" style="background:linear-gradient(135deg,#D4AF37,#F4D03F);color:#1a1a1a;font-weight:800">🏆 HOJE</span>':'<span class="dia-badge" style="background:linear-gradient(135deg,#D4AF37,#F4D03F);color:#1a1a1a;font-weight:800">🏆 PROVA</span>';
  return`<div class="dia-card card-prova" id="card-${key}">
    <div class="dia-header">
      <div class="dia-header-left"><div class="dia-label">DIA DA PROVA</div><div class="dia-date">${dataBR}</div></div>
      ${hj}
    </div>
    <div class="dia-body prova-corpo">
      <div class="prova-icon">🏆</div>
      <div class="prova-titulo">É o grande dia!</div>
      <div class="prova-sub">Você preparou cada detalhe.<br>Respire fundo e confie no processo.<br>O conhecimento está com você.</div>
    </div>
  </div>`;
}

function renderDiaSimulado(dia, key, isHoje){
  const {revNums,topicos}=getSimuladoInfo(key);
  const est=STATE.dias[key]||{};
  const feito=!!est.simuladoFeito;
  const score=est.simuladoScore!=null?est.simuladoScore:null;
  const nomeDia=["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"][dia.getDay()];
  const dataBR=dia.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"});
  const badge=feito?`<span class="dia-badge badge-done-high">✅ Concluído</span>`
    :isHoje?`<span class="dia-badge badge-today">📍 Hoje</span>`
    :`<span class="dia-badge" style="background:#F7E2CE;color:#A8693A;border:1px solid #F0D9C2;font-size:.65rem;font-weight:700">📝 Simulado</span>`;
  const revLabel=revNums.length>0?`Revisões ${revNums.join(", ")}`:""
  const motivoHtml=feito
    ?`<div style="font-size:.75rem;color:#8A5A30;line-height:1.5;margin:.35rem 0">Simulado concluído. Continue praticando para consolidar.</div>`
    :`<div style="font-size:.75rem;color:#8A5A30;line-height:1.5;margin:.35rem 0">Hora de testar seus conhecimentos! Resolva questões sem consultar material e avalie seu desempenho.</div>`;
  const revTagHtml=revLabel?`<div style="font-size:.68rem;font-weight:600;color:#A8693A;background:#F7E2CE;border-radius:6px;padding:2px 8px;display:inline-block;margin-bottom:.4rem">${revLabel}</div>`:"";
  const scoreHtml=feito&&score!=null
    ?`<div style="display:flex;align-items:center;justify-content:space-between;margin-top:.5rem;padding:.4rem .6rem;background:#fff;border:1px solid #F0D9C2;border-radius:8px"><span style="font-size:.73rem;color:#A8693A;font-weight:600">Resultado</span><span style="font-family:'Bricolage Grotesque',sans-serif;font-size:1rem;font-weight:800;color:#A8693A">${score}%</span></div>`:"";
  const btnHtml=feito
    ?`<button style="margin-top:.6rem;background:transparent;border:1.5px solid #CBE3D4;color:#2E7D54;border-radius:10px;padding:7px 14px;font-size:.75rem;cursor:pointer;font-weight:700" data-action="irParaSimulados" data-key="${key}">Ver em Simulados →</button>`
    :`<button style="margin-top:.7rem;background:#2E7D54;color:#fff;border:none;border-radius:10px;padding:8px 15px;font-size:.78rem;font-weight:700;cursor:pointer;transition:filter .15s" class="hv-dim" data-action="irParaSimulados" data-key="${key}">Registrar em Simulados →</button>`;
  return`<div class="dia-card card-simulado" id="card-${key}">
    <div class="dia-header">
      <div class="dia-header-left"><div class="dia-label">${nomeDia}</div><div class="dia-date">${dataBR}</div></div>
      ${badge}
    </div>
    <div class="dia-body sim-corpo">
      ${revTagHtml}
      <div style="font-size:.78rem;font-weight:700;color:#8A5A30;margin-bottom:.1rem">🎯 Mini Simulado</div>
      ${motivoHtml}
      ${scoreHtml}
      ${btnHtml}
    </div>
  </div>`;
}

function abrirSimulado(key){
  const {revNums,topicos}=getSimuladoInfo(key);
  const est=STATE.dias[key]||{};
  const curScore=est.simuladoScore!=null?est.simuladoScore:"";
  const scoreStr=prompt(`Mini Simulado — Revisões ${revNums.join(", ")}\n\nResolveu as questões no seu banco de questões?\nInforme seu percentual de acertos (0-100):`,curScore);
  if(scoreStr===null) return;
  const score=parseInt(scoreStr);
  if(isNaN(score)||score<0||score>100){ alert("Informe um número de 0 a 100."); return; }
  if(!STATE.dias[key]) STATE.dias[key]={};
  STATE.dias[key].simuladoFeito=true; _carimbarRegistro(key);
  STATE.dias[key].simuladoScore=score;
  save(); renderSemana(); renderSimuladoPage(); updateNavBadges();
}

function irParaSimulados(key){
  navTo("simulado");
  if(!key) return;
  setTimeout(()=>{
    requestAnimationFrame(()=>{
      const card=document.getElementById("statuscard-"+key);
      if(!card) return;
      const body=document.getElementById("sc-body-"+key);
      if(body){ body.style.display="block"; const chev=document.getElementById("sc-chev-"+key); if(chev) chev.style.transform="rotate(180deg)"; }
      card.scrollIntoView({behavior:"smooth",block:"center"});
      card.classList.remove("card-pulse");
      void card.offsetWidth;
      card.classList.add("card-pulse");
      card.addEventListener("animationend",()=>card.classList.remove("card-pulse"),{once:true});
    });
  },350);
}

function scrollAteCardHoje(){
  setTimeout(()=>{
    requestAnimationFrame(()=>{
      const key=fmt(new Date());
      const card=document.getElementById("card-"+key);
      if(!card) return;
      card.scrollIntoView({behavior:"smooth",block:"center"});
      card.classList.remove("card-pulse");
      void card.offsetWidth;
      card.classList.add("card-pulse");
      card.addEventListener("animationend",()=>card.classList.remove("card-pulse"),{once:true});
    });
  },350);
}
function irParaHojeCronograma(){
  STATE.semanaOffset=0; STATE.cronView="semana"; save();
  navTo("cronograma");
  scrollAteCardHoje();
}

function navegarMes(d){ STATE.mesOffset=(STATE.mesOffset||0)+d; save(); renderMes(); }

function renderMes(){
  const hoje=new Date(); hoje.setHours(0,0,0,0);
  const offset=STATE.mesOffset||0;
  const ref=new Date(hoje.getFullYear(),hoje.getMonth()+offset,1);
  const ano=ref.getFullYear(), mes=ref.getMonth();
  const nomeMes=ref.toLocaleDateString("pt-BR",{month:"long",year:"numeric"});
  document.getElementById("mesNome").textContent=nomeMes.charAt(0).toUpperCase()+nomeMes.slice(1);
  const primeiroDia=new Date(ano,mes,1);
  const ultimoDia=new Date(ano,mes+1,0);
  const startDow=(primeiroDia.getDay()+6)%7;
  const totalCells=Math.ceil((startDow+ultimoDia.getDate())/7)*7;
  let doneCount=0, totalUtil=0;
  for(let dd=new Date(primeiroDia);dd<=ultimoDia;dd.setDate(dd.getDate()+1)){
    if(isDiaLivre(dd.getDay())) continue;
    totalUtil++;
    if(STATE.dias[fmt(dd)]?.percepcao) doneCount++;
  }
  document.getElementById("mesStat").innerHTML=`<strong>${doneCount}</strong> de <strong>${totalUtil}</strong> dias úteis concluídos`;
  const dowNames=["Seg","Ter","Qua","Qui","Sex","Sáb","Dom"];
  let html=dowNames.map((n,i)=>`<div class="cal-dow${i>=5?" weekend":""}">${n}</div>`).join("");
  for(let i=0;i<totalCells;i++){
    const dayNum=i-startDow+1;
    if(dayNum<1||dayNum>ultimoDia.getDate()){ html+=`<div class="cal-cell outside"></div>`; continue; }
    const d=new Date(ano,mes,dayNum); d.setHours(0,0,0,0);
    const dow=(d.getDay()+6)%7;
    const key=fmt(d);
    const est=STATE.dias[key]||{};
    const isHoje=d.getTime()===hoje.getTime();
    const isPast=d<hoje;
    const isWeekend=dow>=5;
    let cellClass,badge,matLabel;
    const isProvaDayM=isProvaDay(key);
    const isRFDay=!isProvaDayM&&isRetaFinalDay(key);
    const isSimDayM=!isProvaDayM&&!isRFDay&&isSimuladoDay(key);
    const isPosProva=STATE.prova&&key>STATE.prova;
    const cicloMes=getCicloPos(key);
    if(isPosProva){ html+=`<div class="cal-cell pos-prova"><span class="cal-num">${dayNum}</span></div>`; continue; }
    if(isRFDay){ html+=`<div class="cal-cell" style="background:linear-gradient(145deg,#1C1003,#2D1D05);border:1.5px solid #F59E0B" data-action="calCellClick" data-key="${key}"><span class="cal-num" style="color:#FBBF24">${dayNum}</span><div class="cal-mat" style="color:#D97706;font-size:.6rem">Reta Final</div></div>`; continue; }
    if(isProvaDayM){
      html+=`<div class="cal-cell prova-day" data-action="irParaHojeCronograma"><span class="cal-num">${dayNum}</span><span class="cal-badge" style="background:linear-gradient(135deg,#D4AF37,#F4D03F);color:#000;font-size:.58rem;font-weight:800">🏆</span><div class="cal-mat" style="color:#D4AF37;font-size:.65rem">PROVA</div></div>`;
      continue;
    }
    if(isRevisaoGeralDay(key)){
      const rgEst=STATE.dias[key]||{};
      const rgCls=rgEst.revisaoGeralFeita?"done-high":"rev-geral-day";
      html+=`<div class="cal-cell ${rgCls}" data-action="navTo" data-page="simulado"><span class="cal-num" style="color:#38BDF8">${dayNum}</span><span class="cal-badge" style="background:#0EA5E9;color:#fff;font-size:.55rem;font-weight:800">📋</span><div class="cal-mat" style="color:#7DD3FC;font-size:.6rem">Rev.Geral</div></div>`;
      continue;
    }
    if(isSimDayM){
      const simEst=STATE.dias[key]||{};
      const simCls=simEst.simuladoFeito?"done-high":"simulado-day";
      html+=`<div class="cal-cell ${simCls}" data-action="navTo" data-page="simulado"><span class="cal-num">${dayNum}</span><span class="cal-badge" style="background:#7C3AED;color:#fff;font-size:.55rem">📝</span><div class="cal-mat" style="color:#C4B5FD;font-size:.65rem">Simulado</div></div>`;
      continue;
    }
    if(cicloMes===-1){
      // Dia livre/descanso ou antes do início
      if(STATE.inicio&&key<STATE.inicio){
        cellClass="outside";badge="";matLabel="";
      } else {
        cellClass="weekend-day";
        badge=`<span class="cal-badge cb-wknd">🏖️</span>`;matLabel="Descanso";
      }
    } else if(cicloMes===5){
      const perc=est.percepcao;
      cellClass=perc==="alta"?"done-high":perc==="media"?"done-mid":perc==="baixa"?"done-low":isHoje?"today":"weekend-day";
      badge=`<span class="cal-badge cb-wknd">⚡</span>`;matLabel="Ret. Técnico";
    } else if(cicloMes===6){
      const perc=est.percepcao;
      cellClass=perc==="alta"?"done-high":perc==="media"?"done-mid":perc==="baixa"?"done-low":isHoje?"today":"weekend-day";
      badge=`<span class="cal-badge cb-wknd">📝</span>`;matLabel="Exercícios";
    } else {
      const perc=est.percepcao;
      if(est.transferido&&!perc){
        cellClass="skipped";badge=`<span class="cal-badge cb-skip">→</span>`;
        const tdT=getTopicoDiaByDateObj(d); matLabel=`<s style="opacity:.75">${abrev(tdT?tdT.mat:"—")}</s>`;
      } else if(est.skipped){
        cellClass="skipped";badge=`<span class="cal-badge cb-skip">Pulado</span>`;matLabel="—";
      } else if(perc==="alta"){
        cellClass="done-high";badge=`<span class="cal-badge cb-done-h">✅</span>`;
        const td=getTopicoDiaByDateObj(d); matLabel=abrev(td?td.mat:"—");
      } else if(perc==="media"){
        cellClass="done-mid";badge=`<span class="cal-badge cb-done-m">📚</span>`;
        const td=getTopicoDiaByDateObj(d); matLabel=abrev(td?td.mat:"—");
      } else if(perc==="baixa"){
        cellClass="done-low";badge=`<span class="cal-badge cb-done-l">⚠️</span>`;
        const td=getTopicoDiaByDateObj(d); matLabel=abrev(td?td.mat:"—");
      } else if(isHoje){
        cellClass="today";badge=`<span class="cal-badge cb-today">Hoje</span>`;
        const td=getTopicoDiaByDateObj(d); matLabel=abrev(td?td.mat:"—");
      } else if(isPast){
        cellClass="past-empty";badge="";matLabel="Não estudado";
      } else {
        cellClass="future";badge=`<span class="cal-badge cb-future">Futuro</span>`;
        const td=getTopicoDiaByDateObj(d); matLabel=abrev(td?td.mat:"—");
      }
    }
    html+=`<div class="cal-cell ${cellClass}" data-action="calCellClick" data-key="${key}">
      <div class="cal-num">${dayNum}</div>
      <div class="cal-mat">${matLabel}</div>
      ${badge}
    </div>`;
  }
  document.getElementById("calGrid").innerHTML=html;
}

function getTopicoDiaByDateObj(d){
  return getTopicoDiaByKey(fmt(new Date(d)));
}
function abrev(str){ if(!str) return "—"; return str.length>18?str.slice(0,16)+"…":str; }
function calCellClick(key,isWeekend){
  const cicloClick=getCicloPos(key); if(cicloClick===-1) return;
  const hoje=new Date(); hoje.setHours(0,0,0,0);
  const d=parseDate(key); d.setHours(0,0,0,0);
  const dowH=(hoje.getDay()+6)%7;
  const segHoje=new Date(hoje); segHoje.setDate(segHoje.getDate()-dowH);
  const dowD=(d.getDay()+6)%7;
  const segD=new Date(d); segD.setDate(segD.getDate()-dowD);
  const diffSemanas=Math.round((segD-segHoje)/(7*86400000));
  STATE.semanaOffset=diffSemanas; save();
  setCronView("semana");
}
function renderSemana(){
  const seg=getSemanaInicio();
  const hoje=new Date(); hoje.setHours(0,0,0,0);
  const fim=new Date(seg); fim.setDate(fim.getDate()+6);
  document.getElementById("semanaRange").textContent=
    `${seg.toLocaleDateString("pt-BR",{day:"2-digit",month:"short"})} – ${fim.toLocaleDateString("pt-BR",{day:"2-digit",month:"short"})}`;
  renderBarraSemanal(seg);
  const fraquezas=getTopicosFracos(seg); // retorna array de objetos {key,mat,top,perc,text}
  const revisoes=calcRevisoesSemana();
  const nomes=["Segunda","Terça","Quarta","Quinta","Sexta","Sábado","Domingo"];
  let html="";
  for(let i=0;i<7;i++){
    const dia=new Date(seg); dia.setDate(dia.getDate()+i);
    const dow=dia.getDay();
    const key=fmt(dia); const est=STATE.dias[key]||{};
    const isHoje=dia.getTime()===hoje.getTime();
    const isPast=dia<hoje;
    // Prova > Simulado > tipos normais
    if(isProvaDay(key)){ html+=renderDiaProva(dia,key,isHoje); }
    else if(isRevisaoGeralDay(key)){ html+=renderDiaRevisaoGeral(dia,key,isHoje); }
    else if(STATE.prova&&key>STATE.prova){
      html+=`<div class="dia-card state-future" id="card-${key}" style="opacity:.25;pointer-events:none">
        <div class="dia-header"><div class="dia-header-left"><div class="dia-label">${nomes[i]}</div><div class="dia-date">${dia.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})}</div></div></div>
        <div class="dia-body" style="text-align:center;padding:1rem;font-size:.75rem;color:var(--gray-400)">Após a prova</div></div>`;
    } else {
      const _ciclo=getCicloPos(key);
      if(isSimuladoDay(key)){ html+=renderDiaSimulado(dia,key,isHoje); }
      else if(STATE.inicio&&key===STATE.inicio){ html+=renderDiaNormal(dia,i,key,est,isHoje,isPast,nomes[i]); }
      else if(_ciclo===-1) html+=renderDiaLivre(dia,key,isHoje);
      else if(_ciclo===6) html+=renderDiaDomingo(dia,key,est,isHoje,isPast,fraquezas);
      else if(_ciclo===5) html+=renderDiaRetornoTecnico(dia,key,est,isHoje,isPast,fraquezas);
      else html+=renderDiaNormal(dia,i,key,est,isHoje,isPast,nomes[i]);
    }
  }
  html+=renderNotasSemana(seg);
  document.getElementById("semanaGrid").innerHTML=html;
  setTimeout(()=>repaintAllStars(),0);
}

function getTopicoDia(idx){
  const materias=getMaterias().slice().sort((a,b)=>b.peso-a.peso);
  const topicos=getTopicos();
  const todos=[];
  materias.forEach(m=>(topicos[m.nome]||[]).forEach(t=>todos.push({mat:m.nome,top:t,peso:m.peso})));
  const i=((STATE.semanaOffset*5+idx)*3+7)%todos.length;
  return todos[i]||{mat:"Revisão Geral",top:"Conteúdo do Dia",peso:10};
}


/* ── REDISTRIBUIÇÃO DE TÓPICOS PERDIDOS ──
   STATE.extrasPorDia = { "YYYY-MM-DD": [{mat,top,peso}] }
   Tópicos de dias perdidos são diluídos (máx. 1 extra por dia) nos
   próximos dias de conteúdo. O que não couber até a prova vai para
   o próximo dia de Retorno Técnico. */

function redistribuirTopicos(missedKeys){
  const topicos=[];
  // Guarda o vinculo de origem (dia perdido + indice do topico naquele dia).
  // Sem isso o item do sabado vira texto solto e nao ha onde gravar a nota.
  missedKeys.forEach(k=>{ getTopicosDiaBase(k).forEach((td,ti)=>{ if(td) topicos.push({...td,key:k,topIdx:ti}); }); });
  if(!topicos.length) return 0;
  if(!STATE.extrasPorDia) STATE.extrasPorDia={};
  const hoje=new Date(); hoje.setHours(0,0,0,0);
  const limite=STATE.prova?parseDate(STATE.prova):null;
  let d=new Date(hoje), agendados=0, guard=0;
  while(topicos.length&&guard<180){
    const k=fmt(d);
    const pos=getCicloPos(k);
    if((!limite||d<limite)&&pos>=0&&pos<=4&&!(STATE.dias[k]?.percepcao)&&getExtrasDoDia(k).length===0){
      STATE.extrasPorDia[k]=[topicos.shift()];
      agendados++;
    }
    d.setDate(d.getDate()+1); guard++;
  }
  if(topicos.length){
    // Objeto, e nao string: preserva mat/top/key/topIdx para o sabado poder
    // renderizar estrelas e gravar a avaliacao no dia de origem.
    STATE.recuperacao=[...(STATE.recuperacao||[]),
      ...topicos.map(t=>({mat:t.mat,top:t.top,key:t.key,topIdx:t.topIdx}))];
    STATE.recuperacaoData=fmt(getProximoRetornoTecnico());
  }
  return agendados;
}

// Quantos tópicos extras ainda estão pendentes (de hoje em diante)
function calcExtrasPendentes(){
  const hoje=fmt(new Date());
  return Object.entries(STATE.extrasPorDia||{})
    .filter(([k,v])=>v.length&&k>=hoje&&!(STATE.dias[k]?.percepcao)).length;
}

function getSegundoDiaKey(){
  if(!STATE.inicio) return null;
  const ini=parseDate(STATE.inicio); ini.setHours(0,0,0,0);
  const next=new Date(ini); next.setDate(next.getDate()+1);
  for(let i=0;i<14;i++){
    if(getCicloPos(fmt(next))===1) return fmt(next);
    next.setDate(next.getDate()+1);
  }
  return null;
}

function getMedalha(perc){
  if(perc==="alta") return{html:`<div class="dia-medal medal-high">🏆 Domínio registrado</div>`};
  if(perc==="media") return{html:`<div class="dia-medal medal-mid">📚 Revisão em 7 dias</div>`};
  if(perc==="baixa") return{html:`<div class="dia-medal medal-low">⚠️ Reforço recomendado</div>`};
  return{html:""};
}

/* Aulas do tópico: só aparecem quando o aluno declarou o cursinho E
   aquele tópico tem vínculo em cursos.js. Mostra o TÍTULO da aula,
   não um genérico "assistir": o aluno reconhece a aula na hora e sabe
   se já viu. Uma aula pode cobrir vários tópicos, então o mesmo botão
   se repete em tópicos diferentes de propósito.
   Abre em aba nova com rel=noopener (link externo, do curso do aluno). */

/* ══════════════════════════════════════════════════════════════════
   MENU DE EXERCÍCIOS
   Duas telas na mesma página: o FILTRO, que segue a regra do Conteúdo
   programático (matéria e depois tópico), e o RUNNER, uma questão por
   vez. O comentário nunca aparece antes da resposta: ele é o prêmio de
   ter respondido, e é onde o aluno aprende de verdade.
   O banco vem de window.QUESTOES_DATA (engine.listarQuestoes) e o
   histórico por questão fica em STATE.questoes.
   ══════════════════════════════════════════════════════════════════ */
let _exFiltro={materia:"",topico:"",niveis:[],soErradas:false};
let _exSessao=null;   /* {itens, i, respostas:{id:opcao}, verComentario} */

function _exListar(){
  return listarQuestoes(STATE.prefeitura,{
    materia:_exFiltro.materia||null,
    topico:_exFiltro.topico||null,
    niveis:_exFiltro.niveis,
    soErradas:_exFiltro.soErradas
  });
}
function _exNivelLabel(n){ return n===1?"Fácil":n===2?"Médio":"Difícil"; }

function renderExercicios(){
  const el=document.getElementById("exercicioConteudo");
  if(!el) return;
  if(_exSessao) return renderExercicioRun();

  if(!STATE.prefeitura){
    el.innerHTML=`<div class="ex-vazio">Configure sua certificação para ver os exercícios.</div>`;
    return;
  }
  const cont=contarQuestoes(STATE.prefeitura);
  if(!cont.total){
    el.innerHTML=`<div class="ex-vazio">
      <div style="font-size:2rem;margin-bottom:.5rem">✏️</div>
      <div style="font-weight:700;color:var(--gray-600);margin-bottom:.3rem">O banco de questões ainda não saiu para esta certificação</div>
      <div style="font-size:.83rem">Assim que as questões forem publicadas, elas aparecem aqui organizadas por matéria e tópico.</div>
    </div>`;
    return;
  }

  const topicos=getTopicos();
  const materias=getMaterias();
  /* Só entram na lista matéria e tópico que TÊM questão. Filtro que
     devolve zero é pior do que filtro que não oferece a opção. */
  const matsComQ=materias.filter(m=>(cont.porMateria[m.nome]||0)>0);
  const topsComQ=(_exFiltro.materia?(topicos[_exFiltro.materia]||[]):[])
                   .filter(t=>temQuestoes(STATE.prefeitura,_exFiltro.materia,t));

  const sel=_exListar();
  const nErradas=listarQuestoes(STATE.prefeitura,{soErradas:true}).length;

  const optMat=[`<option value="">Todas as matérias</option>`].concat(
    matsComQ.map(m=>`<option value="${esc(m.nome)}"${_exFiltro.materia===m.nome?" selected":""}>${esc(m.nome)} (${cont.porMateria[m.nome]})</option>`)
  ).join("");
  const optTop=[`<option value="">Todos os tópicos da matéria</option>`].concat(
    topsComQ.map(t=>`<option value="${esc(t)}"${_exFiltro.topico===t?" selected":""}>${esc(t)} (${getQuestoes(STATE.prefeitura,_exFiltro.materia,t).length})</option>`)
  ).join("");
  const chipNivel=n=>`<button type="button" class="ex-chip${_exFiltro.niveis.indexOf(n)>-1?" on":""}" data-action="exToggleNivel" data-nivel="${n}">${_exNivelLabel(n)}</button>`;

  el.innerHTML=`
    <div class="ex-filtro">
      <div class="ex-linha">
        <label class="ex-lab">Matéria</label>
        <select class="form-input" id="exMateria" data-change="exMateria">${optMat}</select>
      </div>
      <div class="ex-linha"${_exFiltro.materia?"":' style="opacity:.5"'}>
        <label class="ex-lab">Tópico</label>
        <select class="form-input" id="exTopico" data-change="exTopico"${_exFiltro.materia?"":" disabled"}>${optTop}</select>
      </div>
      <div class="ex-linha">
        <label class="ex-lab">Nível</label>
        <div class="ex-chips">${chipNivel(1)}${chipNivel(2)}${chipNivel(3)}
          <button type="button" class="ex-chip${_exFiltro.soErradas?" on":""}" data-action="exToggleErradas" title="Só as questões que você errou da última vez">❌ Só as que errei${nErradas?" ("+nErradas+")":""}</button>
        </div>
      </div>
      <div class="ex-rodape">
        <div class="ex-conta"><strong>${sel.length}</strong> ${sel.length===1?"questão selecionada":"questões selecionadas"}</div>
        <div style="display:flex;gap:.5rem;flex-wrap:wrap">
          <button type="button" class="ex-btn-sec" data-action="exLimparFiltro">Limpar filtro</button>
          <button type="button" class="ex-btn" data-action="exComecar"${sel.length?"":" disabled"}>▶ Começar</button>
        </div>
      </div>
    </div>
    ${sel.length?"":`<div class="ex-vazio">Nenhuma questão com esse filtro. Solte um dos critérios acima.</div>`}
    <div class="ex-resumo-titulo">Banco disponível</div>
    <div class="ex-cards">${materias.map(m=>{
      const n=cont.porMateria[m.nome]||0;
      const tops=(topicos[m.nome]||[]);
      const comQ=tops.filter(t=>temQuestoes(STATE.prefeitura,m.nome,t)).length;
      return `<div class="ex-card${n?"":" off"}">
        <div class="ex-card-nome">${esc(m.nome)}</div>
        <div class="ex-card-n">${n}</div>
        <div class="ex-card-sub">${n?`questões em ${comQ} de ${tops.length} tópicos`:"ainda sem questões"}</div>
      </div>`;
    }).join("")}</div>`;
}

/* ── Ações do filtro ── */
function exSetMateria(v){ _exFiltro.materia=v||""; _exFiltro.topico=""; renderExercicios(); }
function exSetTopico(v){ _exFiltro.topico=v||""; renderExercicios(); }
function exToggleNivel(n){
  n=parseInt(n,10);
  const i=_exFiltro.niveis.indexOf(n);
  if(i>-1) _exFiltro.niveis.splice(i,1); else _exFiltro.niveis.push(n);
  renderExercicios();
}
function exToggleErradas(){ _exFiltro.soErradas=!_exFiltro.soErradas; renderExercicios(); }
function exLimparFiltro(){ _exFiltro={materia:"",topico:"",niveis:[],soErradas:false}; renderExercicios(); }

/* Embaralhar é decisão da tela, e não do engine, para o motor continuar
   testável. Fisher-Yates sobre a lista já filtrada. */
function _embaralhar(a){
  const r=a.slice();
  for(let i=r.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); const t=r[i]; r[i]=r[j]; r[j]=t; }
  return r;
}
function exComecar(){
  const itens=_exListar();
  if(!itens.length) return;
  _exSessao={itens:_embaralhar(itens),i:0,respostas:{},verComentario:false};
  renderExercicios(); window.scrollTo(0,0);
}
function exSair(){ _exSessao=null; renderExercicios(); window.scrollTo(0,0); }

/* ── Runner ── */
function exResponder(id,opcao){
  if(!_exSessao||_exSessao.respostas[id]!==undefined) return;   // resposta é única
  const item=_exSessao.itens[_exSessao.i];
  if(!item||item.q.id!==id) return;
  const acertou=(opcao===item.q.gabarito);
  _exSessao.respostas[id]=opcao;
  registrarResposta(id,opcao,acertou);
  _carimbarRegistro&&_carimbarRegistro(fmt(new Date()));
  save();
  renderExercicioRun();
}
function exVerComentario(){ _exSessao.verComentario=true; renderExercicioRun(); }
function exProxima(){
  if(!_exSessao) return;
  _exSessao.i++; _exSessao.verComentario=false;
  renderExercicioRun(); window.scrollTo(0,0);
}
function exRefazerErradas(){
  const erradas=_exSessao.itens.filter(it=>{
    const op=_exSessao.respostas[it.q.id];
    return op!==undefined&&op!==it.q.gabarito;
  });
  if(!erradas.length) return exSair();
  _exSessao={itens:_embaralhar(erradas),i:0,respostas:{},verComentario:false};
  renderExercicioRun(); window.scrollTo(0,0);
}

function renderExercicioRun(){
  const el=document.getElementById("exercicioConteudo");
  if(!el||!_exSessao) return;
  const S=_exSessao;

  if(S.i>=S.itens.length) return renderExercicioFim();

  const item=S.itens[S.i], q=item.q;
  const dada=S.respostas[q.id];
  const respondida=dada!==undefined;
  const acertou=respondida&&dada===q.gabarito;
  const letras=Object.keys(q.alternativas);
  const pct=Math.round((S.i/S.itens.length)*100);

  const alts=letras.map(k=>{
    let cls="ex-alt";
    if(respondida){
      if(k===q.gabarito) cls+=" certa";
      else if(k===dada)  cls+=" errada";
      else               cls+=" apagada";
    }
    const fb=(respondida&&k===dada&&!acertou&&q.feedback&&q.feedback[k])
      ?`<div class="ex-alt-fb">${q.feedback[k]}</div>`:"";
    return `<button type="button" class="${cls}" data-action="exResponder" data-id="${esc(q.id)}" data-op="${esc(k)}"${respondida?" disabled":""}>
      <span class="ex-alt-letra">${k.toUpperCase()}</span>
      <span class="ex-alt-txt">${q.alternativas[k]}${fb}</span>
    </button>`;
  }).join("");

  const veredito=!respondida?"":
    `<div class="ex-veredito ${acertou?"ok":"nao"}">${acertou?"✅ Você acertou":"❌ Resposta certa: "+q.gabarito.toUpperCase()}</div>`;

  const acoes=!respondida?"":
    `<div class="ex-acoes">
       ${S.verComentario?"":`<button type="button" class="ex-btn-sec" data-action="exVerComentario">📖 Ver comentário</button>`}
       <button type="button" class="ex-btn" data-action="exProxima">${S.i+1<S.itens.length?"Próxima →":"Ver resultado →"}</button>
     </div>`;

  const comentario=(respondida&&S.verComentario)
    ?`<div class="ex-coment"><div class="ex-coment-tit">📖 Comentário</div>${q.comentario}</div>`:"";

  el.innerHTML=`
    <div class="ex-run">
      <div class="ex-run-topo">
        <button type="button" class="ex-voltar" data-action="exSair">← Sair</button>
        <div class="ex-prog"><div class="ex-prog-fill" style="width:${pct}%"></div></div>
        <div class="ex-passo">${S.i+1} de ${S.itens.length}</div>
      </div>
      <div class="ex-migalha">${esc(item.mat)} · ${esc(item.top)} <span class="ex-nivel n${q.nivel}">${_exNivelLabel(q.nivel)}</span></div>
      <div class="ex-enunciado">${q.enunciado}</div>
      <div class="ex-alts">${alts}</div>
      ${veredito}${comentario}${acoes}
    </div>`;
}

function renderExercicioFim(){
  const el=document.getElementById("exercicioConteudo");
  const S=_exSessao;
  const total=S.itens.length;
  let acertos=0;
  const porTopico={};
  S.itens.forEach(it=>{
    const ok=S.respostas[it.q.id]===it.q.gabarito;
    if(ok) acertos++;
    const k=it.mat+" · "+it.top;
    if(!porTopico[k]) porTopico[k]={ok:0,n:0};
    porTopico[k].n++; if(ok) porTopico[k].ok++;
  });
  const pct=total?Math.round((acertos/total)*100):0;
  /* 70% é a nota de corte da CPA. A régua da tela é a régua da prova. */
  const cor=pct>=70?"var(--green)":pct>=50?"var(--yellow)":"var(--red)";
  const recado=pct>=70?"Acima da nota de corte de 70%. Siga assim."
    :pct>=50?"Ainda abaixo dos 70% que a prova exige. Volte ao conteúdo dos tópicos em vermelho."
    :"Bem abaixo do corte. Vale reler o conteúdo antes de resolver mais questões.";
  const erradas=total-acertos;

  el.innerHTML=`
    <div class="ex-fim">
      <div class="ex-fim-nota" style="color:${cor}">${pct}%</div>
      <div class="ex-fim-sub">${acertos} de ${total} ${total===1?"questão":"questões"}</div>
      <div class="ex-fim-recado">${recado}</div>
      <div class="ex-fim-lista">${Object.keys(porTopico).map(k=>{
        const r=porTopico[k];
        const p=Math.round((r.ok/r.n)*100);
        const c=p>=70?"cb-green":p>=50?"cb-yellow":"cb-red";
        return `<div class="ex-fim-item"><span>${esc(k)}</span><span class="ex-fim-badge ${c}">${r.ok}/${r.n}</span></div>`;
      }).join("")}</div>
      <div class="ex-acoes" style="justify-content:center">
        ${erradas?`<button type="button" class="ex-btn-sec" data-action="exRefazerErradas">↻ Refazer as ${erradas} que errei</button>`:""}
        <button type="button" class="ex-btn" data-action="exSair">Voltar aos exercícios</button>
      </div>
    </div>`;
}

/* ── CONTEÚDO DE ESTUDO DO TÓPICO ──────────────────────────────────
   O botão só existe quando aquele tópico tem texto publicado
   (engine.temConteudo). Tópico sem conteúdo não mostra botão morto:
   o aluno nunca clica em algo que abre uma tela vazia.
   Ocupa o mesmo lugar do antigo _btnAula, no card de dia único, em
   cada linha do dia multi-tópico e na tela Hoje. */
let _conteudoAtual=null;        // {mat, top} do tópico aberto
let _conteudoVoltarPara=null;   // de onde o aluno veio, para o botão voltar

function _btnConteudo(mat,top){
  if(!temConteudo(STATE.prefeitura,mat,top)) return "";
  return `<div class="cont-acao"><button class="cont-btn" type="button" data-action="abrirConteudo" data-mat="${esc(mat)}" data-top="${esc(top)}">📖 Ler o conteúdo</button></div>`;
}

function abrirConteudo(mat,top){
  if(!getConteudo(STATE.prefeitura,mat,top)) return;
  _conteudoAtual={mat,top};
  _conteudoVoltarPara=STATE.pagina==="conteudo"?_conteudoVoltarPara:STATE.pagina;
  navTo("conteudo");
  window.scrollTo(0,0);
}

/* As seções chegam como HTML já montado pelo conversor, a partir de um
   subconjunto fechado de Markdown validado contra lista branca de tags.
   É dado de build, como editais.js, então entra sem esc(). Título de
   matéria e tópico vêm do editais.js e passam por esc() assim mesmo,
   porque é barato e mantém a regra visível para quem ler depois. */
function renderConteudo(){
  const el=document.getElementById("conteudoBody");
  if(!el) return;
  const c=_conteudoAtual&&getConteudo(STATE.prefeitura,_conteudoAtual.mat,_conteudoAtual.top);
  if(!c){
    el.innerHTML=`<div class="cont-vazio">Nenhum conteúdo aberto. Volte ao cronograma e toque em "Ler o conteúdo" no tópico do dia.</div>`;
    return;
  }
  const {mat,top}=_conteudoAtual;
  const bloco=(titulo,html,cls)=>html?`<section class="cont-sec ${cls||""}"><h2>${titulo}</h2>${html}</section>`:"";
  el.innerHTML=
    `<div class="cont-topo">
       <button class="cont-voltar" type="button" data-action="voltarDoConteudo">← Voltar</button>
       <div class="cont-mat">${esc(mat)}</div>
     </div>
     <h1 class="cont-titulo">${esc(top)}</h1>
     <p class="cont-frase">${esc(c.frase)}</p>`
    + bloco("O que cai na prova",c.prova,"cont-prova")
    + bloco("Conteúdo",c.corpo,"cont-corpo")
    + bloco("Pegadinhas",c.pegadinhas,"cont-peg")
    + bloco("Cartão de revisão",c.cartao,"cont-cartao");
}

function _btnAula(mat,top){
  if(!CURSOS_ATIVO) return "";   // recurso desligado — ver bloco MEU CURSINHO
  const aulas=getAulas(STATE.prefeitura,STATE.cursinho,mat,top);
  if(!aulas.length) return "";
  const p=getProvedor(STATE.cursinho);
  const nome=p?p.nome:"seu cursinho";
  const links=aulas.map(function(a){
    return `<a class="aula-link" href="${esc(a.u)}" target="_blank" rel="noopener noreferrer" title="Abrir no curso do ${esc(nome)}">▶ ${esc(a.t)}</a>`;
  }).join("");
  const rotulo=aulas.length>1?`${aulas.length} aulas · ${esc(nome)}`:esc(nome);
  return `<div class="aula-bloco"><span class="aula-fonte">${rotulo}</span>${links}</div>`;
}
/* Dia da reta final: entre a Revisao Geral e a prova nao ha conteudo novo.
   O card existe para o aluno saber o que fazer, em vez de ver um dia vazio. */
function renderDiaRetaFinal(dia,key,est,isHoje,nomeDia){
  /* So `treinoFeito` marca este dia. Antes tambem aceitava `percepcao`, que e a
     nota de confianca de um dia de CONTEUDO: se o dia ja tinha sido dia de
     materia num plano anterior, o card nascia marcado como concluido. */
  const feito=!!(est&&est.treinoFeito);
  const bc=feito?"badge-done-high":isHoje?"badge-today":"badge-special";
  const bl=feito?"✅ Concluído":isHoje?"📍 Hoje":"🏁 Reta Final";
  const cs=feito?"state-done-high":isHoje?"state-today":"state-future";
  return`<div class="dia-card ${cs}" id="card-${key}">
    <div class="dia-header">
      <div class="dia-header-left"><div class="dia-label">${nomeDia}</div><div class="dia-date">${dia.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})}</div></div>
      <span class="dia-badge ${bc}">${bl}</span>
    </div>
    <div class="dia-body">
      <div class="dia-topico">🏁 Treino e exercícios</div>
      <div style="font-size:.78rem;color:var(--gray-600);line-height:1.6;margin:.5rem 0">
        Sem conteúdo novo a partir daqui. Use o dia para <strong>refazer exercícios</strong>,
        revisar os tópicos de <strong>menor confiança</strong> e resolver questões no formato da prova.
      </div>
      <button data-action="marcarTreinoFeito" data-key="${key}" style="display:flex;align-items:center;justify-content:center;gap:7px;width:100%;padding:9px 10px;border:1.5px solid var(--blue-border);background:var(--blue-pale);color:var(--navy-mid);font-weight:700;font-size:.78rem;border-radius:var(--radius-sm);cursor:pointer;font-family:inherit" class="hv-dim">${feito?"✅ Treino registrado":"✔ Registrar treino do dia"}</button>
    </div>
  </div>`;
}

function marcarTreinoFeito(key){
  if(!STATE.dias[key]) STATE.dias[key]={};
  STATE.dias[key].treinoFeito=true;
  _carimbarRegistro(key); save(); renderTudo();
}

function renderDiaNormal(dia,idx,key,est,isHoje,isPast,nomeDia){
  // Dia 1 fixo (regra de todos os cronogramas): Orientações do Coach (sempre em STATE.inicio)
  if(STATE.inicio&&key===STATE.inicio){
    const isDone=!!est.percepcao;
    const bc=isDone?"badge-done-high":isHoje?"badge-today":"badge-special";
    const bl=isDone?"✅ Concluído":isHoje?"📍 Hoje":"🧭 Coach";
    const cs=isDone?"state-done-high":isHoje?"state-today":"state-future";
    const percShow="show";
    return`<div class="dia-card ${cs}" id="card-${key}">
      <div class="dia-header">
        <div class="dia-header-left"><div class="dia-label">${nomeDia}</div><div class="dia-date">${dia.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})}</div></div>
        <span class="dia-badge ${bc}">${bl}</span>
      </div>
      <div class="dia-body">
        <div class="dia-topico">🧭 Orientações do Coach</div>
        <div class="dia-peso" style="background:#f0fdf4;color:#15803d;border-color:#bbf7d0">🎯 Dia 1 — Início da Preparação</div>
        <div style="font-size:.8rem;color:var(--gray-600);line-height:1.65;margin:.6rem 0">
          1. <strong>Leia o edital</strong> na íntegra e identifique as matérias do seu cargo<br>
          2. Acesse o <strong>Coach Bússola</strong> no Dashboard e leia a análise do seu cronograma
        </div>
        <button data-action="marcarDia1Concluido" data-key="${key}" style="display:flex;align-items:center;justify-content:center;gap:7px;width:100%;padding:9px 10px;border:1.5px solid var(--blue-border);background:var(--blue-pale);color:var(--navy-mid);font-weight:700;font-size:.78rem;border-radius:var(--radius-sm);cursor:pointer;margin:.15rem 0 .25rem;font-family:inherit;transition:filter .15s" class="hv-dim">🔍 Análise do Edital &amp; Banca</button>
      </div>
      ${isDone?`<div class="dia-footer-collapsed" id="footer-${key}"><span class="dfc-info">✅ Planejamento concluído</span><button class="dfc-limpar" data-action="limparDia" data-key="${key}" title="Marcar como não iniciado">🗑️</button></div>`:""}
    </div>`;
  }
  // Antes do início: card neutro sem matéria
  if(STATE.inicio&&key<STATE.inicio){
    const nomeM=["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"][dia.getMonth()];
    return`<div class="dia-card" style="border:1px solid #e2e8f0;opacity:0.45;">
      <div class="dia-header" style="background:#f8fafc;">
        <div class="dia-header-left"><div class="dia-label">${nomeDia}</div><div class="dia-date">${dia.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})}</div></div>
        <span class="dia-badge" style="background:#f1f5f9;color:#94a3b8;border-color:#e2e8f0;">Antes do início</span>
      </div>
      <div style="padding:18px 16px;text-align:center;color:#cbd5e1;font-size:.82rem;">—</div>
    </div>`;
  }
  /* Dia recuperado: o conteúdo NÃO recebeu nota. O dia só foi marcado para que
     o motor mande o tópico para a fila de revisão e ele reapareça no Retorno
     Técnico, onde o aluno dá a nota de verdade. Cor própria para o aluno
     reconhecer de longe que aquele dia não foi estudado, foi recuperado. */
  if(est.recuperado){
    const topsR=getTopicosDiaBase(key);
    const listaR=topsR.length
      ?topsR.map(t=>`<div class="dia-topico" style="color:#8A5A2B;margin-bottom:2px">${esc(t.mat)}: ${esc(t.top)}</div>`).join("")
      :`<div class="dia-topico" style="color:var(--gray-400)">Sem tópico neste dia.</div>`;
    return`<div class="dia-card dia-recuperado" id="card-${key}">
      <div class="dia-header">
        <div class="dia-header-left"><div class="dia-label">${nomeDia}</div><div class="dia-date">${dia.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})}</div></div>
        <span class="dia-badge badge-recuperado">🔁 Recuperado</span>
      </div>
      <div class="dia-body">
        ${listaR}
        <div class="rec-nota">Não estudado neste dia. O conteúdo entrou na fila de revisão e aparece no próximo Retorno Técnico, onde você avalia e registra o exercício.</div>
      </div>
    </div>`;
  }
  // Dia com conteúdo transferido pela recuperação: exibe riscado, sem interação
  if(est.transferido&&!est.percepcao){
    const topsT=getTopicosDiaBase(key);
    const listaT=topsT.length
      ?topsT.map(t=>`<div class="dia-topico" style="text-decoration:line-through;color:var(--gray-400);margin-bottom:2px">${esc(t.mat)}: ${esc(t.top)}</div>`).join("")
      :`<div class="dia-topico" style="color:var(--gray-400)">—</div>`;
    return`<div class="dia-card" id="card-${key}" style="border:1px dashed #D9CDBA;background:#F7F2E9;">
      <div class="dia-header">
        <div class="dia-header-left"><div class="dia-label">${nomeDia}</div><div class="dia-date">${dia.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})}</div></div>
        <span class="dia-badge" style="background:#EAE0CE;color:#8A6F45;border:none">📦 Transferida</span>
      </div>
      <div class="dia-body">
        ${listaT}
        <div style="font-size:.7rem;color:#8A6F45;background:#F1E8D8;border-radius:6px;padding:4px 8px;display:inline-block;margin-top:.5rem">📦 Data transferida — conteúdo realocado nos próximos dias</div>
      </div>
    </div>`;
  }
  const tops=(STATE.inicio&&key>=STATE.inicio)?getTopicosDiaBase(key):[getTopicoDia(idx)];
  /* Sem topico base e dentro da reta final: o dia e de TREINO, nao de conteudo.
     Antes caia no fallback getTopicoDia(idx), que escolhe por indice e ignora
     as datas, fazendo aparecer materia nova depois da Revisao Geral. */
  if(!tops.length&&typeof isRetaFinalDay==="function"&&isRetaFinalDay(key)){
    return renderDiaRetaFinal(dia,key,est,isHoje,nomeDia);
  }
  const{mat,top,peso}=tops[0]||getTopicoDia(idx);
  const isMulti=tops.length>1;
  const perc=est.percepcao||"";
  const isDone=!!perc;
  const isCollapsed=isDone&&(est.collapsed!==false);
  let cardState="state-future",badgeClass="badge-future",badgeLabel="⏳ Aguardando";
  if(isDone){
    if(perc==="alta"){cardState="state-done-high";badgeClass="badge-done-high";badgeLabel="✅ Concluído";}
    if(perc==="media"){cardState="state-done-mid";badgeClass="badge-done-mid";badgeLabel="📚 Revisão";}
    if(perc==="baixa"){cardState="state-done-low";badgeClass="badge-done-low";badgeLabel="⚠️ Reforço";}
  } else if(isHoje){cardState="state-today";badgeClass="badge-today";badgeLabel="📍 Hoje";}
  const{html:medalHtml}=getMedalha(perc);
  const lidoCls=est.lido?"checked checked-blue":"";
  const exCls=est.exercicios?"checked":"";
  const nEstrelas=est.estrelas||nivelToStars(perc);
  const confPct=nEstrelas?`${nEstrelas} ${"★".repeat(nEstrelas)}${"☆".repeat(5-nEstrelas)}`:"";
  const dfcInfo=isDone?`<span class="dfc-info">Confiança: <strong>${confPct}</strong> · ${mat}</span>`:"";
  const bodyStyle=""; // CSS .is-collapsed handles visibility
  const collClass=isCollapsed?"is-collapsed":"";
  // estrelas apenas depois de marcar lido + exercicios
  const percShow=(est.lido&&est.exercicios)||isDone?"show":"";
  const percHint=!est.lido?`<div class="perc-hint" style="font-size:.72rem;color:var(--gray-400);margin-top:.45rem;font-style:italic">✔ Marque "Conteúdo Lido" e "Exercícios Resolvidos" para liberar a avaliação de confiança.</div>`
    :!est.exercicios?`<div class="perc-hint" style="font-size:.72rem;color:var(--gray-400);margin-top:.45rem;font-style:italic">✔ Marque "Exercícios Resolvidos" — depois disso avalie sua confiança com as estrelas.</div>`:"";
  return`<div class="dia-card ${cardState} ${collClass}" id="card-${key}">
    <div class="dia-header" data-action="toggleDia" data-key="${key}" style="cursor:${isDone?'pointer':'default'}">
      <div class="dia-header-left"><div class="dia-label">${nomeDia}</div><div class="dia-date">${dia.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})}</div></div>
      <span class="dia-badge ${badgeClass}">${badgeLabel}${isDone?`<span class="dia-badge-chevron">${isCollapsed?'▾':'▴'}</span>`:''}</span>
    </div>
    <div class="dia-body" id="body-${key}" style="${bodyStyle}">
      ${medalHtml}
      ${isMulti
        ?`<div class="multi-topico-header"><span class="multi-topico-tag">📚 ${tops.length} tópicos · Modo intensivo</span></div><div class="multi-topico-list">${tops.map((t,i)=>`<div class="multi-topico-row"><div class="mtr-head"><span class="multi-topico-num">${i+1}</span><span class="multi-topico-mat" title="${esc(t.mat)}">${esc(t.mat)}</span></div><div class="multi-topico-text">${t.top}</div>${_btnConteudo(t.mat,t.top)}${_btnAula(t.mat,t.top)}</div>`).join("")}</div>`
        :`<div class="dia-topico">${mat}</div><div class="dia-subtopico">${top}</div><div class="dia-peso">Peso ${peso}%</div>${_btnConteudo(mat,top)}${_btnAula(mat,top)}`}
      ${getExtrasDoDia(key).length?`<div class="dia-extras">${getExtrasDoDia(key).map(e=>`<div class="dia-extra-item">➕ <strong>${esc(e.mat)}</strong>: ${esc(e.top)}</div>`).join("")}<div class="dia-extra-tag">⚖️ Recuperação de conteúdo</div></div>`:""}
      <div class="check-group">
        <label class="check-item" data-action="toggleCheck" data-key="${key}" data-campo="lido"><div class="check-box ${lidoCls}" id="cb-${key}-lido">✓</div><span class="check-label">Conteúdo Lido</span></label>
        <label class="check-item" data-action="toggleCheck" data-key="${key}" data-campo="exercicios"><div class="check-box ${exCls}" id="cb-${key}-ex">✓</div><span class="check-label">Exercícios Resolvidos</span></label>
      </div>
      ${percHint}
      <div class="percepcao-selector ${percShow}" id="perc-${key}">
        <div class="percepcao-label-text">⭐ Avalie sua confiança — isso agenda sua revisão:</div>
        ${isMulti
          ?tops.map((t,ti)=>`<div class="star-rating star-rating-topico"><span class="multi-topico-num">${ti+1}</span><span class="srt-topico-label" title="${esc(t.mat)}: ${esc(t.top)}">${esc(t.top)}</span><span class="srt-stars" id="stars-${key}-${ti}">${[1,2,3,4,5].map(n=>`<button class="star-btn" data-n="${n}" aria-label="${n} de 5 estrelas" data-action="setStarTopico" data-hover="starTopico" data-key="${key}" data-ti="${ti}" data-n="${n}">★</button>`).join("")}</span></div>`).join("")
          :`<div class="star-rating" id="stars-${key}">
          ${[1,2,3,4,5].map(n=>`<button class="star-btn" data-n="${n}" aria-label="${n} de 5 estrelas" data-action="setStar" data-hover="star" data-key="${key}" data-n="${n}">★</button>`).join("")}
          <span class="star-label" id="starlabel-${key}"></span>
        </div>`}
        <div style="font-size:.67rem;color:var(--gray-400);margin-top:.3rem">1–2★ volta em 7 dias · 3–4★ em 30 dias · 5★ dominado</div>
      </div>
    </div>
    <div class="dia-footer-collapsed" id="footer-${key}" style="${isDone?'':'display:none'}" data-action="toggleDia" data-key="${key}">
      <span style="font-size:.8rem;color:${perc==='alta'?'var(--green)':perc==='media'?'var(--yellow-viv)':'var(--red-viv)'};flex-shrink:0">${'★'.repeat(nEstrelas)}${'☆'.repeat(5-nEstrelas)}</span>
      <span class="dfc-info">${isMulti?tops.length+" tópicos":mat+" · "+top}</span>
      <button class="dfc-limpar" data-action="limparDia" data-key="${key}" title="Marcar como não iniciado">🗑️</button>
    </div>
  </div>`;
}

function toggleSabMais(key){
  const el=document.getElementById("sabmais-"+key); if(!el) return;
  const aberto=el.style.display!=="none";
  el.style.display=aberto?"none":"block";
  const btn=document.querySelector(`.sab-vermais[data-key="${key}"]`);
  if(btn) btn.textContent=aberto?`▾ Ver todos os ${btn.dataset.n} tópicos`:"▴ Mostrar menos";
  setTimeout(()=>repaintAllStars(),0);
}
/* Prefixo "sab" nos ids de DOM e nas classes de CSS é herança do nome antigo
   deste dia, que era chamado de Sábado Técnico. O dia é o RETORNO TÉCNICO, a
   posição 5 do ciclo, e não cai necessariamente no sábado. Os identificadores
   ficaram para não arrastar o CSS junto; o que o aluno lê já foi corrigido. */
function _sabId(key,ti){ return "sab-stars-"+key+(ti!=null&&ti!==""?"-"+ti:""); }
function sabStarHTML(key,n,source,ti,sabKey){
  const nivel=starToNivel(n);
  const tiAttr=(ti!=null&&ti!==""?` data-ti="${ti}"`:"")+(sabKey?` data-sab="${sabKey}"`:"");
  return [1,2,3,4,5].map(s=>{
    const lit=s<=n?(nivel==="alta"?"lit-high":nivel==="media"?"lit-mid":"lit-low"):"";
    return`<button class="sab-star ${lit}" data-n="${s}" aria-label="${s} de 5 estrelas" data-action="setSabStar" data-hover="sabstar" data-key="${key}" data-n="${s}" data-cur="${n}" data-source="${source}"${tiAttr}>★</button>`;
  }).join("");
}
function setSabStar(key,n,source,ti,sabKey){
  /* Reavaliar no Retorno Técnico marca o PRÓPRIO dia do RT como cumprido —
     as notas vão para os dias dos tópicos, então sem isso o Retorno Técnico ficava
     eternamente "sem registro" no calendário de consistência. */
  if(sabKey){
    if(!STATE.dias[sabKey]) STATE.dias[sabKey]={};
    STATE.dias[sabKey].rtFeito=true; _carimbarRegistro(sabKey);
  }
  if(ti!=null&&ti!==""){ gravarNotaTopico(key,+ti,n); }
  else{
    if(!STATE.dias[key]) STATE.dias[key]={};
    STATE.dias[key].estrelas=n; STATE.dias[key].percepcao=starToNivel(n);
  }
  _carimbarRegistro(key);
  save();
  renderTudo();
  if(source==="rev"){ renderRevisoesPage(); }
  else { renderSemana(); }
}
function hoverSabStar(key,n,ti){
  const container=document.getElementById(_sabId(key,ti)); if(!container) return;
  const nivel=starToNivel(n);
  container.querySelectorAll(".sab-star").forEach(btn=>{ const bn=parseInt(btn.dataset.n); const lit=bn<=n?(nivel==="alta"?"lit-high":nivel==="media"?"lit-mid":"lit-low"):""; btn.className="sab-star "+(lit||""); });
}
function unhoverSabStar(key,currentN,source,ti){
  const container=document.getElementById(_sabId(key,ti)); if(!container) return;
  const est=STATE.dias[key]||{};
  const n=(ti!=null&&ti!==""?(est.estrelasList||{})[ti]:est.estrelas)||currentN||0;
  const nivel=n?starToNivel(n):"";
  container.querySelectorAll(".sab-star").forEach(btn=>{ const bn=parseInt(btn.dataset.n); btn.className="sab-star "+(bn<=n&&nivel?(nivel==="alta"?"lit-high":nivel==="media"?"lit-mid":"lit-low"):""); });
}

function renderDiaRetornoTecnico(dia,key,est,isHoje,isPast,fraquezas){
  const bc=isHoje?"badge-today":"badge-special";
  const bl=isHoje?"📍 Hoje":"⚡ Técnico";
  const cs=isHoje?"state-today":"";
  const sabKey=fmt(dia);
  const temRecuperacao=STATE.recuperacaoData===sabKey&&STATE.recuperacao?.length>0;

  // Determina itens a exibir — agora fraquezas são objetos {key,mat,top,perc,text}
  const todosItens=Array.isArray(fraquezas)&&fraquezas.length&&typeof fraquezas[0]==="object" ? fraquezas : [];
  const itensFracos=todosItens.filter(f=>f.perc==="baixa");

  let itens="";
  if(temRecuperacao){
    itens=`<div style="font-size:.72rem;font-weight:700;color:var(--red);margin-bottom:.4rem">🔴 Recuperação de dias perdidos:</div>`;
    STATE.recuperacao.forEach(f=>{
      // Compatibilidade: versoes antigas gravavam string "Materia: Topico".
      const obj=(typeof f==="string")?{mat:"",top:f,key:null,topIdx:null}:f;
      const rotulo=obj.mat?`${obj.mat}: ${obj.top}`:obj.top;
      if(obj.key){
        // Item vinculado ao dia de origem: rende estrelas e ALIMENTA o sistema.
        const estF=STATE.dias[obj.key]||{};
        const isTop=obj.topIdx!=null;
        const conf=(isTop?(estF.percepcoes||{})[obj.topIdx]:estF.percepcao)||"";
        const cur=(isTop?(estF.estrelasList||{})[obj.topIdx]:estF.estrelas)||nivelToStars(conf);
        const stHtml=sabStarHTML(obj.key,cur,"sab",isTop?obj.topIdx:null,sabKey);
        const badge=conf==="alta"?`<span class="sab-conf-dot" style="color:#16a34a" title="Alta Confiança">●</span>`
          :conf==="media"?`<span class="sab-conf-dot" style="color:#d97706" title="Confiança Média">●</span>`
          :conf==="baixa"?`<span class="sab-conf-dot" style="color:#dc2626" title="Baixa Confiança">●</span>`
          :`<span class="sab-conf-dot" style="color:#cbd5e1" title="Pendente">○</span>`;
        itens+=`<div class="sab-item-row">
          <div style="display:flex;align-items:center;gap:6px">
            <div class="sabado-dot" style="background:var(--red-viv);flex-shrink:0"></div>
            <span style="font-size:.72rem;font-weight:600;color:var(--gray-700);flex:1;line-height:1.25;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden" title="${esc(rotulo)}">${esc(rotulo)}</span>
          </div>
          <div style="display:flex;align-items:center;gap:6px;padding-left:13px">
            <div class="sab-stars" id="${_sabId(obj.key,isTop?obj.topIdx:null)}">${stHtml}</div>
            ${badge}
          </div>
        </div>`;
      } else {
        itens+=`<div class="sab-item-row"><div class="sabado-dot" style="background:var(--red-viv);flex-shrink:0"></div><span class="sab-item-text">${esc(rotulo)}</span></div>`;
      }
    });
    itens+=`<div style="font-size:.68rem;color:var(--gray-400);margin-top:.5rem;font-style:italic">Estude os tópicos acima e avalie a confiança de cada um.</div>`;
  }

  // Retorno Técnico: roda SEMPRE. Antes ficava dentro de if(!temRecuperacao),
  // e por isso a recuperação apagava a lista de reavaliação da semana.
  {
    // Filtra itens que precisam de reforço (baixa, média, ou não avaliado)
    // Só mostrar dias que o estudante realmente estudou (percepcao registrada)
    const itensPendentes=todosItens.filter(f=>{
      const est=STATE.dias[f.key]||{};
      const conf=(f.topIdx!=null?(est.percepcoes||{})[f.topIdx]:est.percepcao)||"";
      return conf&&conf!=="alta"; // só exibe se estudado e não dominado
    });
    if(itensPendentes.length>0){
      const _sabRows=[];
      itensPendentes.forEach(f=>{
        const estF=STATE.dias[f.key]||{};
        const isTop=f.topIdx!=null;
        const conf=(isTop?(estF.percepcoes||{})[f.topIdx]:estF.percepcao)||f.perc||"";
        const cur=(isTop?(estF.estrelasList||{})[f.topIdx]:estF.estrelas)||nivelToStars(conf);
        const stHtml=sabStarHTML(f.key,cur,"sab",isTop?f.topIdx:null,sabKey);
        const isFraco=conf==="baixa";
        const badge=conf==="media"?`<span class="sab-conf-dot" style="color:#d97706" title="Confiança Média">●</span>`
          :conf==="baixa"?`<span class="sab-conf-dot" style="color:#dc2626" title="Baixa Confiança">●</span>`
          :`<span class="sab-conf-dot" style="color:#cbd5e1" title="Pendente">○</span>`;
        const dotStyle=isFraco?"background:var(--red-viv)":conf==="media"?"background:var(--yellow-viv)":"";
        _sabRows.push(`<div class="sab-item-row">
          <div style="display:flex;align-items:center;gap:6px">
            <div class="sabado-dot" style="flex-shrink:0;${dotStyle}"></div>
            <span style="font-size:.72rem;font-weight:600;color:var(--gray-700);flex:1;line-height:1.25;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden" title="${esc(f.text)}">${esc(f.text)}</span>
          </div>
          <div style="display:flex;align-items:center;gap:6px;padding-left:13px">
            <div class="sab-stars" id="${_sabId(f.key,isTop?f.topIdx:null)}">${stHtml}</div>
            ${badge}
          </div>
        </div>`);
      });
      const LIM_SAB=4;
      if(temRecuperacao) itens+=`<div style="font-size:.72rem;font-weight:700;color:var(--gray-600);margin:.7rem 0 .4rem">⚡ Reavaliação da semana:</div>`;
      itens+=_sabRows.slice(0,LIM_SAB).join("");
      if(_sabRows.length>LIM_SAB){
        itens+=`<div class="sab-mais" id="sabmais-${sabKey}" style="display:none">${_sabRows.slice(LIM_SAB).join("")}</div>`;
        itens+=`<button class="sab-vermais" data-action="toggleSabMais" data-key="${sabKey}" data-n="${_sabRows.length}">▾ Ver todos os ${_sabRows.length} tópicos</button>`;
      }
    } else {
      // So exibe estado vazio se nao houver nada de recuperacao ja listado.
      if(!temRecuperacao){
        const algumEstudado=todosItens.some(f=>f.perc);
        if(algumEstudado){
          itens=`<div class="sabado-empty">🏆 Todos os tópicos desta semana com Alta Confiança! Aproveite para adiantar conteúdo.</div>`;
        } else {
          itens=`<div class="sabado-empty">📚 Nenhum tópico estudado esta semana ainda. Complete os dias de estudo antes do Retorno Técnico.</div>`;
        }
      }
    }
  }

  return`<div class="dia-card card-rt state-future ${cs}" id="card-${key}">
    <div class="dia-header"><div class="dia-header-left"><div class="dia-label">${["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"][dia.getDay()]}</div><div class="dia-date">${dia.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})}</div></div><span class="dia-badge ${bc}">${bl}</span></div>
    <div class="dia-body">
      <div class="sabado-title">⚡ Retorno Técnico</div>
      <div style="font-size:.72rem;color:var(--gray-500);margin-bottom:.5rem">Reavalie a confiança de cada tópico estudado esta semana:</div>
      <div class="sabado-items">${itens}</div>
    </div>
  </div>`;
}

function renderDiaLivre(d,key,isHoje){
  const nomeDia=["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"][d.getDay()];
  const borda=isHoje?"border:2px solid #2FB374;":"border:1px solid #E5DAC8;";
  return`<div class="dia-card" style="${borda}background:#F4EFE6;">
    <div class="dia-header">
      <div class="dia-header-left"><div class="dia-label" style="color:#9A8B73">${nomeDia}</div><div class="dia-date" style="color:#8A7A5E">${d.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})}</div></div>
      <span class="dia-badge" style="background:#EAE0CE;color:#8A6F45;border:none;">🌙 Descanso</span>
    </div>
    <div class="dia-body" style="display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:.3rem;">
      <div style="font-size:1.5rem;line-height:1;opacity:.7">🌙</div>
      <div style="font-size:.76rem;font-weight:600;color:#6B6155">Dia de Descanso</div>
      <div style="font-size:.7rem;color:#9A9082;line-height:1.5">Aproveite para recarregar<br>as energias.</div>
    </div>
  </div>`;
}

function renderDiaDomingo(dia,key,est,isHoje,isPast,topicos){
  const nomeDia=["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"][dia.getDay()];

  // variáveis acessíveis fora do bloco
  let tudo=false;
  let numRev=1;
  let corpo="";
  // bc/bl/cs calculados depois de tudo ser definido
  let bc="badge-special"; let bl="📝 Exercícios"; let cs="";

  if(!STATE.inicio){
    corpo=`<div class="sabado-empty">📅 Configure o cronograma para usar este recurso.</div>`;
  } else {
    const estudados=Array.isArray(topicos)?topicos.filter(t=>t.est&&t.est.percepcao):[];
    const total=estudados.length;
    const feitos=estudados.filter(t=>STATE.dias[t.key]?.exRevisao).length;
    tudo=total>0&&feitos===total;
    numRev=getNumRevisao(key);
    bl="📝 Rev. "+numRev;
    if(isHoje){ bc="badge-today"; bl="📍 Hoje — Rev. "+numRev; cs="state-today"; }
    else if(tudo){ bc="badge-done-high"; bl="✅ Rev. "+numRev; cs="state-done-high"; }
    const progColor=tudo?"#15803d":"var(--gray-400)";
    const progLabel=tudo?"✅ Todos concluídos":total===0?"Conclua os estudos da semana":`${feitos}/${total} feitos`;
    corpo=`<div style="display:flex;flex-direction:column;align-items:center;gap:.6rem;padding:.4rem 0 .5rem">
      <div style="font-size:.71rem;color:var(--gray-500)">${total>0?total+" tópico"+(total>1?"s":"")+" para praticar":"Conclua os estudos da semana primeiro"}</div>
      <div style="font-size:.72rem;font-weight:700;color:${progColor}">${progLabel}</div>
      ${total>0?`<button data-action="irParaExercicios" data-num="${numRev}" style="background:var(--blue);color:#fff;border:none;border-radius:var(--radius-sm);padding:.5rem 1rem;font-size:.73rem;font-weight:700;cursor:pointer;display:flex;align-items:center;gap:5px;transition:opacity .15s" class="hv-op">📋 Registrar exercícios da revisão ${numRev}</button>`:""}
    </div>`;
  }

  return`<div class="dia-card card-ex state-future ${cs}" id="card-${key}">
    <div class="dia-header">
      <div class="dia-header-left"><div class="dia-label">${nomeDia}</div><div class="dia-date">${dia.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})}</div></div>
      <span class="dia-badge ${bc}">${bl}</span>
    </div>
    <div class="dia-body">
      <div class="sabado-title">📝 Exercícios — Revisão ${numRev}${tudo?" ✅":""}</div>
      ${corpo}
    </div>
  </div>`;
}
function toggleExRevisao(key){
  if(!STATE.dias[key]) STATE.dias[key]={};
  STATE.dias[key].exRevisao=!STATE.dias[key].exRevisao;
  save();
  // Check if this bloco is now fully complete → animate card
  const blocos=buildBlocosRevisao();
  const bloco=blocos.find(b=>b.topicos.some(t=>t.key===key));
  const justCompleted=bloco&&!bloco.isFutura&&bloco.topicos.length>0&&bloco.topicos.every(t=>STATE.dias[t.key]?.exRevisao);
  renderSemana();
  renderExerciciosSection();
  updateNavBadges();
  if(justCompleted){
    const card=document.getElementById("rc-card-"+bloco.num);
    if(card){ card.classList.add("rc-anim"); card.addEventListener("animationend",()=>card.classList.remove("rc-anim"),{once:true}); }
    // Update banner
    renderRevisoesPage();
  }
}


function scrollToExercicio(n){
  setTimeout(()=>{
    const el=document.getElementById("ex-rev-"+n);
    if(el) el.scrollIntoView({behavior:"smooth",block:"start"});
  },150);
}

function renderExerciciosSection(){
  const el=document.getElementById("exerciciosConteudo");
  if(!el||!STATE.inicio){ if(el) el.innerHTML=""; return; }
  const blocos=buildBlocosRevisao();
  if(blocos.length===0){
    el.innerHTML=`<div style="text-align:center;padding:3rem 1rem;color:var(--gray-400)"><div style="font-size:2rem;margin-bottom:.5rem">📋</div><div style="font-weight:700;color:var(--gray-600);margin-bottom:.3rem">Nenhuma revisão ainda</div><div style="font-size:.83rem">Complete dias de estudo no Cronograma para gerar revisões.</div></div>`;
    return;
  }
  // Auto-open: abre qualquer revisão disponível que ainda não esteja no set
  blocos.filter(b=>b.estado==="disponivel"&&!_revCicloAberto.has(b.num)).forEach(b=>_revCicloAberto.add(b.num));
  // Fallback: se nada aberto, abre a última concluída
  if(_revCicloAberto.size===0){
    const conc=blocos.filter(b=>b.concluida);
    if(conc.length) _revCicloAberto.add(conc[conc.length-1].num);
  }
  let html=`<div style="display:flex;gap:.6rem;align-items:flex-start;background:#EFF6FF;border:1px solid #DBEAFE;border-radius:12px;padding:.7rem .9rem;margin-bottom:1rem;font-size:.8rem;color:#1E40AF;line-height:1.55"><span style="flex-shrink:0">💡</span><span><strong>Como usar:</strong> cada ciclo lista os tópicos que você estudou — as ★ mostram a confiança que você registrou na época. Resolva <strong>~10 questões de cada tópico</strong> no seu material ou banco de questões e marque ✅ ao concluir. Se sua segurança mudou, reavalie o tópico no <strong>Retorno Técnico</strong> do cronograma.</span></div>`;
  // Mantém ordem cronológica (Revisão 1, 2, 3…)
  blocos.forEach(bloco=>{
    const isOpen=_revCicloAberto.has(bloco.num);
    const {num,estado,total,feitos,concluida,isFutura,topicos}=bloco;
    const dataStr=bloco.date.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"2-digit"});
    const badge=estado==="concluida"?`<span class="rcc-badge b-concluida">✅ Concluída</span>`:
                estado==="disponivel"?`<span class="rcc-badge b-disponivel">📋 Disponível</span>`:
                `<span class="rcc-badge b-futura">🔒 Futura</span>`;
    const counter=total>0?`<span class="rcc-counter">${feitos}/${total}</span>`:"";
    const chevron=`<span class="rcc-chevron${isOpen?" open":""}">▼</span>`;
    html+=`<div class="rev-ciclo-card rc-${estado}" id="rc-card-${num}">
      <div class="rcc-header" data-action="toggleRevCiclo" data-num="${num}">
        <div class="rcc-left">
          <span class="rcc-num">📝 Revisão ${num}</span>
          <span class="rcc-date">${dataStr}</span>
        </div>
        <div class="rcc-right">${badge}${counter}${chevron}</div>
      </div>`;
    if(isOpen){
      html+=`<div class="rcc-body">`;
      if(total===0){
        html+=`<div class="rcc-empty">Nenhum tópico estudado antes desta revisão.</div>`;
      } else {
        const pct=Math.round((feitos/total)*100);
        html+=`<div class="rcc-prog-row">
          <div class="rcc-prog-bar"><div class="rcc-prog-fill${concluida?" pf-done":""}" style="width:${pct}%"></div></div>
          <span class="rcc-prog-label">${feitos} de ${total} tópico${total!==1?"s":""}</span>
        </div>`;
        topicos.forEach(t=>{
          const done=!!STATE.dias[t.key]?.exRevisao;
          const stars=nivelToStars(STATE.dias[t.key]?.percepcao||t.perc||"");
          const starsHtml=stars?`<span class="rcc-topic-stars" title="Confiança que você registrou ao estudar este tópico">${"★".repeat(stars)}${"☆".repeat(5-stars)}</span>`:"";
          const cls=`rcc-topic${done?" rct-done":""}${isFutura?" rct-locked":""}`;
          const act=isFutura?"":`data-action="toggleExRevisao" data-key="${t.key}"`;
          html+=`<div class="${cls}" ${act}>
            <span class="rcc-topic-check">${done?"✅":"⬜"}</span>
            <div class="rcc-topic-info">
              <div class="rcc-topic-text" style="font-weight:${done?"600":"500"};color:${done?"#15803d":"var(--gray-700)"}">${t.top}</div>
              <div class="rcc-topic-mat">${t.mat}</div>
            </div>
            ${starsHtml}
          </div>`;
        });
        if(concluida){
          const isPreSimulado=num%3===0;
          html+=`<div style="margin-top:.7rem;padding:.55rem .75rem;background:#D1FAE5;border-radius:var(--radius-sm);font-size:.77rem;font-weight:600;color:#065F46">
            <div>✅ Todos os exercícios desta revisão foram concluídos!</div>
            ${isPreSimulado?`<div style="margin-top:.4rem;font-size:.74rem;font-weight:600;color:#5B21B6;background:#EDE9FE;border-radius:6px;padding:.35rem .6rem;display:flex;align-items:center;gap:.4rem">📝 Mini Simulado desbloqueado para a próxima atividade</div>`:""}
          </div>`;
        }
      }
      html+=`</div>`;
    }
    html+=`</div>`;
  });
  el.innerHTML=html;
}
function toggleCheck(key,campo){
  if(!STATE.dias[key]) STATE.dias[key]={};
  STATE.dias[key][campo]=!STATE.dias[key][campo]; save();
  const isLido=campo==="lido";
  const box=document.getElementById(`cb-${key}-${isLido?"lido":"ex"}`);
  if(box){ box.classList.toggle("checked",STATE.dias[key][campo]); if(isLido) box.classList.toggle("checked-blue",STATE.dias[key][campo]); }
  // Mostrar selector apenas com ambos marcados
  const ambos=!!(STATE.dias[key].lido&&STATE.dias[key].exercicios);
  const pd=document.getElementById(`perc-${key}`);
  if(pd&&!STATE.dias[key].percepcao) pd.classList.toggle("show",ambos);
  // Atualizar dica
  const body=document.getElementById(`body-${key}`);
  if(body){ const hints=body.querySelectorAll(".perc-hint"); hints.forEach(h=>h.remove()); }
  if(!ambos&&!STATE.dias[key].percepcao&&body){
    const msg=!STATE.dias[key].lido?'✔ Marque "Conteúdo Lido" e "Exercícios" para avaliar a confiança.'
      :'✔ Marque "Exercícios Resolvidos" para avaliar a confiança.';
    const hint=document.createElement("div");
    hint.className="perc-hint"; hint.style.cssText="font-size:.72rem;color:var(--gray-400);margin-top:.45rem;font-style:italic";
    hint.textContent=msg;
    pd?.before(hint);
  }
}

function limparDia(key){
  if(!confirm("Marcar este dia como não iniciado? A avaliação de confiança será removida.")) return;
  delete STATE.dias[key];
  save(); renderSemana(); renderTudo();
}

// Dia 1 do cronograma: o clique em "Análise do Edital" conclui a tarefa e abre o edital
function marcarDia1Concluido(key){
  if(!STATE.dias[key]) STATE.dias[key]={};
  STATE.dias[key].percepcao="alta"; _carimbarRegistro(key);
  STATE.dias[key].estrelas=5;
  STATE.dias[key].lido=true;
  STATE.dias[key].exercicios=true;
  STATE.dias[key].collapsed=true;
  save();
  navTo('edital');
}

function starToNivel(n){ return n<=2?"baixa":n<=4?"media":"alta"; }
function nivelToStars(nivel){ return nivel==="alta"?5:nivel==="media"?3:nivel==="baixa"?2:0; }
function starClass(starN,filledUpTo){ if(starN>filledUpTo) return ""; const nivel=starToNivel(filledUpTo); return nivel==="alta"?"lit-high":nivel==="media"?"lit-mid":"lit-low"; }
function starLabelText(n){ if(!n) return ""; if(n<=2) return "🔴 Baixa"; if(n<=4) return "🟡 Média"; return "🟢 Alta"; }
function starLabelClass(n){ if(!n) return ""; if(n<=2) return "lbl-low"; if(n<=4) return "lbl-mid"; return "lbl-high"; }

function paintStarsEl(starsId,labelId,n){
  const container=document.getElementById(starsId); if(!container) return;
  container.querySelectorAll(".star-btn").forEach(btn=>{ const bn=parseInt(btn.dataset.n); btn.className="star-btn"+(bn<=n?" "+starClass(bn,n):""); });
  const lbl=document.getElementById(labelId); if(lbl){ lbl.textContent=starLabelText(n); lbl.className="star-label "+(n?starLabelClass(n):""); }
}
function paintStars(key,n){ paintStarsEl("stars-"+key,"starlabel-"+key,n); }
function hoverStar(key,n){ paintStars(key,n); }
function unhoverStar(key){ paintStars(key,STATE.dias[key]?.estrelas||0); }
function setStar(key,n){
  if(!STATE.dias[key]) STATE.dias[key]={};
  STATE.dias[key].estrelas=n; STATE.dias[key].percepcao=starToNivel(n); STATE.dias[key].collapsed=true; _carimbarRegistro(key);
  save(); renderSemana(); renderTudo();
}
function unhoverStarTopico(key,ti){
  paintStars(key+"-"+ti,(STATE.dias[key]?.estrelasList||{})[ti]||0);
}
/* Grava a nota de UM tópico e recalcula o agregado do dia (engine.aggregateEstrelas):
   dia completo = todos os tópicos avaliados; agregado = PIOR nota.
   Enquanto incompleto, percepcao/estrelas do dia ficam ausentes — getDayPercepcao
   prioriza est.percepcao e mascararia edições por tópico se ele persistisse. */
function gravarNotaTopico(key,ti,n){
  if(!STATE.dias[key]) STATE.dias[key]={};
  const est=STATE.dias[key];
  est.estrelasList=Object.assign({},est.estrelasList,{[ti]:n});
  est.percepcoes=Object.assign({},est.percepcoes,{[ti]:starToNivel(n)});
  const agg=aggregateEstrelas(est.estrelasList,getTopicosDiaBase(key).length);
  if(agg!=null){ est.estrelas=agg; est.percepcao=starToNivel(agg); _carimbarRegistro(key); }
  else{ delete est.estrelas; delete est.percepcao; }
  return agg;
}
function setStarTopico(key,ti,n){
  const agg=gravarNotaTopico(key,ti,n);
  if(agg!=null) STATE.dias[key].collapsed=true;
  save(); renderSemana(); renderTudo();
}
function repaintAllStars(){
  Object.keys(STATE.dias).forEach(key=>{
    const est=STATE.dias[key]||{};
    const n=est.estrelas||nivelToStars(est.percepcao||"");
    if(n) paintStars(key,n);
    const eList=est.estrelasList||{};
    Object.entries(eList).forEach(([ti,tn])=>{ if(tn) paintStars(key+"-"+ti,tn); });
  });
}

function toggleDia(key){
  if(!STATE.dias[key]?.percepcao) return; // só age em dias concluídos
  STATE.dias[key].collapsed = (STATE.dias[key].collapsed===false); // toggle
  save(); renderSemana();
}

function semanaStart(){
  const hoje=new Date(); hoje.setHours(0,0,0,0);
  const dow=hoje.getDay(); // 0=Dom,6=Sab
  const offsetToMon=dow===0?-6:(1-dow);
  const seg=new Date(hoje); seg.setDate(seg.getDate()+offsetToMon+STATE.semanaOffset*7);
  return seg;
}
/* getTopicosFracos movida para js/engine.js (correção do limite de dias) */
function calcRevisoesSemana(){
  const{rev7,rev30}=calcRevisoes();
  return [...rev7.map(r=>({...r,tipo:"7"})),...rev30.map(r=>({...r,tipo:"30"}))];
}

function nomeDiaSemana(d){ return["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"][d.getDay()]; }
function setTopbarDate(){ const d=new Date(); document.getElementById("topbarDate").textContent=d.toLocaleDateString("pt-BR",{weekday:"long",day:"2-digit",month:"long"}); }
setInterval(setTopbarDate,60000);
/* ── SISTEMA DE RECUPERAÇÃO ── */
let _recoveryOption = null;
let _missedDays = [];

/* Próximo dia de Retorno Técnico (posição 5 do ciclo 5+1+1) a partir de hoje.
   Fallback: próximo sábado do calendário, só se nenhum RT existir no horizonte. */
function getProximoRetornoTecnico(){
  const d=new Date(); d.setHours(0,0,0,0);
  for(let i=0;i<120;i++){
    if(getCicloPos(fmt(d))===5) return d;
    d.setDate(d.getDate()+1);
  }
  const s=new Date(); s.setHours(0,0,0,0);
  while(s.getDay()!==6) s.setDate(s.getDate()+1);
  return s;
}

function getMissedDays(hojeRef){
  if(!STATE.inicio||!STATE.prova) return [];
  const hoje=hojeRef?parseDate(hojeRef):new Date(); hoje.setHours(0,0,0,0);
  const ini=parseDate(STATE.inicio); ini.setHours(0,0,0,0);
  const missed=[];
  for(let d=new Date(ini);d<hoje;d.setDate(d.getDate()+1)){
    const dow=d.getDay();
    if(isDiaLivre(dow)) continue;
    const k=fmt(d);
    const est=STATE.dias[k]||{};
    if(!est.percepcao&&!est.skipped&&!est.transferido&&!est.recuperado) missed.push(k);
  }
  return missed;
}

function checkRecovery(){
  const hoje=fmt(new Date());
  if(STATE.recoveryShownDate===hoje) return; // já mostrou hoje
  const missed=getMissedDays();
  if(missed.length===0) return;
  _missedDays=missed;
  _recoveryOption=null;
  document.getElementById("recoveryMissedBar").innerHTML=
    `⚠️ <strong>${missed.length} dia${missed.length>1?"s":""} ${missed.length>1?"úteis":"útil"} sem registro</strong> (${fmtDateRange(missed)})`;
  // Reset visual das opções
  ["redistribuir","pular","sabado"].forEach(o=>{
    document.getElementById("recOpt-"+o).classList.remove("selected");
  });
  const btn=document.getElementById("btnAplicarRecovery");
  btn.disabled=true; btn.textContent="Escolha uma opção acima";
  document.getElementById("recoveryModal").classList.add("open");
}

function fmtDateRange(keys){
  if(keys.length===1) return parseDate(keys[0]).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"});
  const first=parseDate(keys[0]).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"});
  const last=parseDate(keys[keys.length-1]).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"});
  return `${first} a ${last}`;
}

function selectRecovery(option){
  _recoveryOption=option;
  ["redistribuir","pular","sabado"].forEach(o=>{
    document.getElementById("recOpt-"+o).classList.toggle("selected",o===option);
  });
  const btn=document.getElementById("btnAplicarRecovery");
  btn.disabled=false;
  const labels={"redistribuir":"\u2696\uFE0F Redistribuir t\u00F3picos","pular":"\u27A1\uFE0F Pular e seguir em frente","sabado":"\u26A1\uFE0F Agendar no s\u00E1bado"};
  btn.textContent=labels[option]||"Aplicar recupera\u00E7\u00E3o";
}

function applyRecovery(){
  if(!_recoveryOption||!_missedDays.length) return;
  if(_recoveryOption==="redistribuir"){
    const n=redistribuirTopicos(_missedDays);
    if(n>0){ STATE.redistribuindo=true; STATE.diasRedistribuir=_missedDays.length; }
    // marca a origem: evita re-redistribuição e permite exibir "Data transferida"
    _missedDays.forEach(k=>{ if(!STATE.dias[k]) STATE.dias[k]={}; STATE.dias[k].transferido=true; });
  } else if(_recoveryOption==="pular"){
    _missedDays.forEach(k=>{ if(!STATE.dias[k]) STATE.dias[k]={}; STATE.dias[k].skipped=true; });
  } else if(_recoveryOption==="sabado"){
    /* MANDAR PARA O RETORNO TÉCNICO, em um clique.
       O dia recebe a marca `recuperado` e NÃO recebe nota. É a diferença que
       importa: o motor passa a puxar aquele conteúdo para as revisões de 7 e 30
       dias (engine.calcRevisoes trata `recuperado` como elegível), mas nada é
       contado como estudado. A cobertura do edital e o domínio por matéria leem
       `percepcao`, que aqui não existe, então nenhum número mente.
       Os tópicos também vão para o card do Retorno Técnico com o vínculo de
       origem, e é lá que o aluno dá a nota de verdade quando estudar. */
    const itens=[];
    _missedDays.forEach(k=>{
      const tops=getTopicosDiaBase(k);
      if(!tops.length) return;
      if(!STATE.dias[k]) STATE.dias[k]={};
      STATE.dias[k].recuperado=true;
      tops.forEach((t,ti)=>{
        if(t) itens.push({mat:t.mat,top:t.top,key:k,topIdx:tops.length>1?ti:null});
      });
    });
    if(itens.length){
      /* Objeto com `key` e `topIdx`, e não texto solto. Era isto que faltava: sem
         o vínculo, o card do Retorno Técnico caía no ramo de compatibilidade e
         desenhava o item sem estrela e sem onde registrar o exercício. */
      STATE.recuperacao=[...(STATE.recuperacao||[]),...itens];
      STATE.recuperacaoData=fmt(getProximoRetornoTecnico());
    }
  }
  STATE.recoveryShownDate=fmt(new Date());
  save();
  document.getElementById("recoveryModal").classList.remove("open");
  renderTudo();
  navTo("hoje");
  showToast("\u2705 Recupera\u00E7\u00E3o aplicada!");
}
