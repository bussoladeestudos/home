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
  iniciarBussola:()=>iniciarBússola(),
  reprocessarFaltantes:()=>reprocessarFaltantes(),
  confirmarReinicio:()=>confirmarReinicio(),
  reiniciarCompleto:()=>reiniciarCompleto(),
  cancelarReinicio:()=>cancelarReinicio(),
  exportarDados:()=>exportarDados(),
  abrirImportar:()=>document.getElementById("inputImportar").click(),
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
  setSabStar:d=>setSabStar(d.key,+d.n,d.source,d.ti),
  toggleSabMais:d=>toggleSabMais(d.key),
  popupSegundaAgenda:()=>popupSegundaAgenda(),
  fecharPopupSegunda:()=>fecharPopupSegunda(),
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
};

/* ── Dispatcher (event delegation) ── */
document.addEventListener("click",e=>{
  const el=e.target.closest("[data-action]");
  if(!el) return;
  window._bussolaUserActed=true; // saves passam a carimbar updatedAt (sync)
  const fn=ACTIONS[el.dataset.action];
  if(fn) fn(el.dataset,el,e);
});
document.addEventListener("change",e=>{
  if(!e.target.dataset) return;
  if(e.target.dataset.change==="importarDados") importarDados(e);
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
   EDITAIS POR PREFEITURA — base de dados dos concursos
   ════════════════════════════════════════════
   Para adicionar um novo concurso, crie uma nova chave no arquivo
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
    // Se há dados reais, usa-os; senão, mantém os valores demo do EDITAIS
    if(s.confs.length===0) return {...m, prog:0, conf:0, cor:'gray'};
    const conf = Math.round(s.confs.reduce((a,b)=>a+b,0)/s.confs.length);
    const prog = Math.min(100,Math.round((s.confs.length/Math.max(1,s.totalTopicos))*100));
    const cor  = conf>=70?"green":conf>=50?"yellow":"red";
    return {...m, prog, conf, cor};
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
  if(!STATE.inicio||!STATE.prova) return{label:"⏳ Configure o concurso",emoji:"⏳",curto:"Configure o concurso"};
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
  const fracas=stats.filter(m=>m.conf>0&&m.conf<70).sort((a,b)=>a.conf-b.conf).slice(0,3);
  const dias=rf.diasRestantes;
  const cob=rf.cobertura;
  const urgencia=dias<=7?"🔴 Urgente:":dias<=14?"🟡 Atenção:":"🟢";
  let reforcoHtml=fracas.length
    ?fracas.map(m=>`<div class="rf-col-item"><strong>${m.nome}</strong> — ${m.conf}% conf.</div>`).join("")
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
    document.getElementById("tbCargo").textContent="Erro ao carregar concursos";
    alert("\u26A0\uFE0F N\u00e3o foi poss\u00edvel carregar a lista de concursos (editais.js n\u00e3o encontrado ao lado do index.html). Recarregue a p\u00e1gina.");
    return;
  }
  if(!EDITAIS[_prefSelecionada]) _prefSelecionada=Object.keys(EDITAIS)[0];
  renderPrefButtons();
  const hoje=new Date();
  document.getElementById("inputInicio").value=fmt(hoje);
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
let _prefSelecionada=Object.keys(EDITAIS||{})[0]||"cgAgenteAdm";

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
    else document.getElementById("inputProva").value="";
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
}

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
    else if(v&&(v.skipped||v.transferido)) novosDias[k]={skipped:v.skipped,transferido:v.transferido};
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
  else{ if(_dowSelected.length>=4){ alert("Máximo de 4 dias de descanso — o plano precisa de pelo menos 3 dias de estudo por semana."); return; } _dowSelected.push(i); }
  renderDowGrid();
}

function openSetupModal(){
  // Só restaura dias salvos se o cronograma já foi configurado; caso contrário começa vazio
  _dowSelected=STATE.inicio?[...(STATE.diasLivres||[])]:[]; 
  const _hojeIso=(new Date()).toISOString().split('T')[0];
  document.getElementById("inputNome").value=STATE.nome||"";
  document.getElementById("inputInicio").value=STATE.inicio||_hojeIso;
  const _edAtual=EDITAIS[STATE.prefeitura]||EDITAIS[_prefSelecionada];
  const _isCertAtual=_edAtual&&!_edAtual.dataProva;
  document.getElementById("inputProva").value=(_edAtual&&_edAtual.dataProva)||(STATE.prova&&!_isCertAtual?STATE.prova:"")||"";
  atualizarModoProva(_isCertAtual);
  if(STATE.prefeitura&&EDITAIS[STATE.prefeitura]) selecionarPref(STATE.prefeitura,false);
  document.getElementById("inputHoras").value=STATE.horasDia||3;
  const hasInicio=!!STATE.inicio;
  document.getElementById("restartSection").style.display=hasInicio?"block":"none";
  document.getElementById("btnFecharModal").style.display=hasInicio?"flex":"none";
  const btnSalvar=document.getElementById("btnIniciarBússola");
  btnSalvar.textContent=hasInicio?"💾 Salvar Configurações":"⚡ Iniciar Meu Cronograma";
  btnSalvar.disabled=false;
  document.getElementById("modalTitle").textContent=hasInicio?"Configurações do Cronograma":"Configure seu Cronograma";
  renderDowGrid();
  document.getElementById("setupModal").classList.add("open");
}
function fecharModal(){
  cancelarReinicio();
  document.getElementById("setupModal").classList.remove("open");
}

function iniciarBússola(){
  const nome=document.getElementById("inputNome").value.trim()||"Candidato";
  const editKey=document.getElementById("inputCargo").value||_prefSelecionada;
  const ed=EDITAIS[editKey];
  const cargoText=ed&&ed.cargos&&ed.cargos[0]?ed.cargos[0]:editKey;
  const i=document.getElementById("inputInicio").value;
  const p=document.getElementById("inputProva").value;
  const h=parseInt(document.getElementById("inputHoras").value)||3;
  if(!i||!p){ showToast("⚠️ Preencha as datas de início e da prova!"); return; }
  if(i>=p){ showToast("⚠️ A data da prova deve ser posterior ao início!"); return; }
  const btn=document.getElementById("btnIniciarBússola");
  if(btn){ btn.disabled=true; btn.textContent="⏳ Salvando..."; }
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
  showToast("🧭 Cronograma criado! Comece por aqui.");
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
   Para adicionar a análise de um novo concurso: suba o PDF na pasta app/ e
   registre uma entrada { url, sub, arquivo } por grupo (ou por chave). */
const EDITAL_ANALISES={
  "Campina Grande PB":{ url:"edital-campina.pdf",  sub:"Análise Estratégica — Edital Campina Grande",              arquivo:"Analise_Estrategica_Edital_Campina_Grande.pdf" },
  "SEDES-DF":         { url:"edital-sedes-df.pdf", sub:"Análise Estratégica — Edital SEDES/DF (Instituto Quadrix)", arquivo:"Analise_Estrategica_Edital_SEDES_DF.pdf" }
};
const EDITAL_ANALISES_POR_CHAVE={
  "cfpPlanejar":{ url:"edital-cfp.pdf", sub:"Análise Estratégica — Certificação CFP® (Planejar)", arquivo:"Analise_Estrategica_Certificacao_CFP.pdf" }
};
const EDITAL_ANALISE_FALLBACK=EDITAL_ANALISES["Campina Grande PB"];
function getEditalAnalise(){
  const ed=(typeof EDITAIS!=="undefined"&&EDITAIS[STATE.prefeitura])||null;
  return EDITAL_ANALISES_POR_CHAVE[STATE.prefeitura]
      || (ed&&EDITAL_ANALISES[ed.grupo])
      || EDITAL_ANALISE_FALLBACK;
}
function getEditalUrl(){ return getEditalAnalise().url; }
function renderEdital(){
  const a=getEditalAnalise();
  const f=document.getElementById("editalFrame");
  if(f&&f.getAttribute("src")!==a.url) f.src=a.url;
  const d=document.getElementById("editalDownload");
  if(d){ d.href=a.url; d.setAttribute("download",a.arquivo); }
  const s=document.getElementById("editalSubtitulo");
  if(s) s.textContent=a.sub;
}

/* ── POPUP DE SEGUNDA-FEIRA (motivação + Adicionar ao Calendário) ──
   Abre 1x por semana, só na segunda, para aluno com cronograma ativo.
   A frase é determinística pela semana (a mesma o dia inteiro, mesmo
   recarregando). STATE.popupSegundaEm guarda a segunda já exibida e
   sincroniza via Firestore — não reaparece em outro dispositivo. */
const FRASES_SEGUNDA=[
  "Aprovação não é um evento — é o acúmulo silencioso de semanas como a que você começa agora.",
  "Enquanto a maioria espera motivação, você tem um método. Siga o plano de hoje.",
  "Cada tópico estudado nesta semana é uma questão a menos que te assusta no dia da prova.",
  "Constância vence talento quando o talento não é constante. Sua sequência começa hoje.",
  "A banca não pergunta se você estava inspirado — pergunta se você estudou. Segunda é dia de responder.",
  "Você não precisa de uma semana perfeita. Precisa de uma semana feita.",
  "O edital é o mesmo para todos. A diferença é quem transforma segunda-feira em vantagem.",
  "Pequenos progressos diários se tornam resultados irreversíveis. Comece pelo tópico de hoje.",
  "Seu futuro cargo está sendo decidido agora, nas semanas que ninguém vê.",
  "Disciplina é escolher entre o que você quer agora e o que você quer mais. Bora estudar.",
  "A revisão de hoje vale mais que a maratona de véspera. Confie no método.",
  "Quem estuda com plano não corre atrás do tempo — anda ao lado dele.",
  "Uma semana de foco constrói o que um mês de ansiedade não constrói.",
  "Não conte os dias até a prova. Faça os dias contarem — começando por este.",
  "O concurseiro que revisa é o candidato que lembra. Sua semana 5+1+1 começa agora.",
  "Todo aprovado já foi alguém começando mais uma segunda-feira. Igual a você, agora.",
  "Estudar cansado vale mais que planejar descansado. Um passo hoje.",
  "A concorrência diminui a cada tópico que você domina. Diminua-a hoje.",
  "Seu cronograma já pensou por você. Sua única tarefa é executar o dia de hoje.",
  "Consistência é o único atalho que existe. E ela começa toda segunda.",
  "Não deixe para a reta final o que a constância resolve agora.",
  "A prova é um dia. Sua preparação é todos os dias — especialmente hoje.",
  "Grandes aprovações começam com semanas comuns, bem executadas.",
  "Você está exatamente onde precisa estar: diante de uma nova semana e de um plano claro.",
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

/* ── NAVEGAÇÃO ── */
function navTo(pg){
  STATE.pagina=pg; save();
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach(n=>n.classList.remove("active"));
  const pageEl=document.getElementById("page-"+pg);
  const navEl=document.getElementById("nav-"+pg);
  if(pageEl) pageEl.classList.add("active");
  if(navEl)  navEl.classList.add("active");
  if(pg==="cronograma"){ setCronView(STATE.cronView||"semana"); }
  if(pg==="dashboard")  { renderMapaCalorPage("mapaGrid"); renderDashboard(); }
  if(pg==="materias")   renderMaterias();
  if(pg==="revisoes")   renderRevisoesPage();
  if(pg==="simulado")   renderSimuladoPage();
  if(pg==="hoje")       renderHoje();
  if(pg==="edital")     renderEdital();
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
  document.getElementById("mainTitle").textContent=`${saud}! 👋`;
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
    ?`Cobertura do edital: ${cob.cobertos} de ${cob.total} tópicos (${cob.pct}%)`:"—";
  document.getElementById("jornadaInfo").innerHTML=STATE.inicio
    ?(cob.cobertos>0
      ?`📚 <span>${cob.cobertos} tópico${cob.cobertos!==1?"s":""} coberto${cob.cobertos!==1?"s":""}</span> &nbsp;•&nbsp; 🎯 <span>${cob.total-cob.cobertos} restantes no edital</span> &nbsp;•&nbsp; 🔄 <span>${totalRev} revisões pendentes</span>`
      :`📌 Estude e avalie tópicos no Cronograma para ver a cobertura do edital.`)
    :"Configure seu concurso para começar.";

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
    heroEl.innerHTML=`
    <div style="display:grid;grid-template-columns:1.15fr .85fr;gap:16px;">
      <div style="background:#fff;border:1px solid #EEE5D6;border-radius:20px;padding:22px 24px;">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:16px;">
          <div><div style="font-size:.85rem;color:#9A9082;font-weight:500;">Aderência ao plano de estudos</div>
          <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:2.5rem;color:#241F18;line-height:1.05;">${prog}%</div>
          <div style="font-size:.72rem;color:#A89E8E;">dos dias previstos até hoje foram concluídos</div></div>
          <span style="background:${rp.bg};color:${rp.c};font-size:.76rem;font-weight:700;padding:5px 11px;border-radius:99px;white-space:nowrap;">${rp.t}</span>
        </div>
        <div style="height:11px;background:#F0EADF;border-radius:99px;overflow:hidden;"><div style="width:${prog}%;height:100%;background:linear-gradient(90deg,#2FB374,#5FD79A);border-radius:99px;"></div></div>
        <div style="display:flex;justify-content:space-between;margin-top:9px;font-size:.76rem;color:#A89E8E;"><span>${det.done} de ${Math.max(det.total,det.done)} dias previstos até hoje</span><span>${diasR!==null?"Prova em "+diasR+" dias":""}</span></div>
        <div style="margin-top:9px;padding-top:9px;border-top:1px dashed #F0EADF;font-size:.76rem;color:#8A8072;line-height:1.5;">📚 Cobertura do edital: <strong style="color:#1C7A4B">${cob.pct}%</strong> (${cob.cobertos} de ${cob.total} tópicos). Aderência mede se você está seguindo o plano; cobertura mede quanto do edital já foi estudado.</div>
      </div>
      <div style="display:grid;grid-template-rows:1fr 1fr;gap:16px;">
        <div style="background:#FBF1D7;border:1px solid #F2E2AE;border-radius:20px;padding:16px 20px;display:flex;align-items:center;gap:13px;">
          <span style="font-size:1.5rem;">🔥</span>
          <div><div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:1.4rem;color:#8A6212;line-height:1;">${streak} dia${streak!==1?"s":""}</div><div style="font-size:.76rem;color:#A98A3E;">de sequência</div></div>
        </div>
        <div style="background:#EDE7F7;border:1px solid #DBD0F0;border-radius:20px;padding:16px 20px;display:flex;align-items:center;gap:13px;">
          <span style="font-size:1.4rem;">🔄</span>
          <div><div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:1.4rem;color:#5B43A0;line-height:1;">${totalRev}</div><div style="font-size:.76rem;color:#8472BC;">revisões pendentes</div></div>
        </div>
      </div>
    </div>`;
  } else if(heroEl){ heroEl.innerHTML=""; }

  // Coach
  renderCoach(prog, conf, ritmo, projecao, totalRev);
  setTimeout(checarPopupSegunda,600);
  renderRetaFinal();
  renderMapaCalorPage("mapaGrid");
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
    .map(m=>({nome:m.nome,peso:m.peso,progPct:m.prog,confPct:m.conf}));
  const fracas=materias.filter(m=>m.conf>0&&m.conf<50).sort((a,b)=>a.conf-b.conf).slice(0,2)
    .map(m=>({nome:m.nome,peso:m.peso,confPct:m.conf}));
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
function buildCoachHtml(prog, conf, ritmo, projecao, totalRev){
  if(!STATE.inicio){
    return `<span style="color:#94a3b8">Configure seu concurso para ativar o Coach Bússola.</span>`;
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
      const confTexto=conf>=80?"excelente domínio do conteúdo estudado":conf>=60?"boa evolução, com margem para crescer":conf>=40?"progresso moderado — os exercícios precisam de mais atenção":"confiança ainda baixa — revise o conteúdo antes de avançar";
      p2=`Você cobriu <strong>${cob.cobertos} de ${cob.total} tópicos</strong> do edital (${cob.pct}%). Sua confiança média de <strong>${conf}%</strong> indica ${confTexto}.`;
    }
    if(p2) html+=`<p style="margin:0 0 .8rem;font-size:.87rem;color:#334155">${p2}</p>`;

    // ── Parágrafo 3: diagnóstico de matérias ───────────────────
    let p3="";
    const matAtrasadas=materias.filter(m=>m.prog>0&&m.prog<cob.pct-10).sort((a,b)=>b.peso-a.peso);
    const matFracas=materias.filter(m=>m.conf>0&&m.conf<50).sort((a,b)=>a.conf-b.conf);
    const matOk=materias.filter(m=>m.prog>=cob.pct-5);
    if(matAtrasadas.length>0){
      const lista=matAtrasadas.slice(0,2).map(m=>`<strong>${m.nome}</strong> (peso ${m.peso}%, ${cob.pct-m.prog}% abaixo da média)`).join(" e ");
      p3+=`As matérias que precisam de atenção são ${lista}. `;
    }
    if(matFracas.length>0){
      const lista=matFracas.slice(0,2).map(m=>`<strong>${m.nome}</strong> (${m.conf}% confiança)`).join(" e ");
      p3+=`Confiança baixa em ${lista} — recomendo reforçar com exercícios no Sábado Técnico. `;
    }
    if(!matAtrasadas.length&&!matFracas.length&&matOk.length>0){
      p3=`Todas as matérias estudadas estão no ritmo. Continue avançando no conteúdo sistematicamente.`;
    }
    if(p3) html+=`<p style="margin:0 0 .8rem;font-size:.87rem;color:#334155">${p3}</p>`;

    // ── Parágrafo 4: ação recomendada ──────────────────────────
    let p4="";
    if(missedDays>0){
      p4=`⚠️ Você tem <strong>${missedDays} dia(s) sem registro</strong> — use o modal de recuperação para redistribuir esses tópicos e não perder o fio do plano.`;
    } else if(totalRev>0){
      p4=`🔔 Há <strong>${totalRev} revisão(ões) pendentes</strong>. Acesse a aba <strong>Revisões</strong> para consolidar o conteúdo já estudado — a revisão espaçada é fundamental para fixação.`;
    } else if(matAtrasadas.length>0){
      const top=matAtrasadas[0];
      p4=`💡 Recomendo dedicar a sessão de hoje a <strong>${top.nome}</strong> (${top.peso}% do edital). Avance ${Math.min(5,top.peso)}% desta semana para reequilibrar o cronograma.`;
    } else if(matFracas.length>0){
      const top=matFracas[0];
      p4=`💡 Use o próximo <strong>Sábado Técnico</strong> para reforçar <strong>${top.nome}</strong> com exercícios práticos. Meta: elevar a confiança de ${top.conf}% para 60%+.`;
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
  if(!STATE.inicio){ el.innerHTML=`<div class="hoje-empty">Configure seu concurso para ver a missão do dia.</div>`; return; }

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
  STATE.dias[k].estrelas=n; STATE.dias[k].percepcao=starToNivel(n);
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

  // Ordena: sem dados primeiro, depois por atraso × peso
  const ordenadas=[...materias].sort((a,b)=>{
    if(a.prog===0&&b.prog>0) return 1;
    if(b.prog===0&&a.prog>0) return -1;
    const gapA=a.prog-overallProg, gapB=b.prog-overallProg;
    const prioA=(gapA<-10?2:gapA<0?1:0)*b.peso;
    const prioB=(gapB<-10?2:gapB<0?1:0)*a.peso;
    return prioB-prioA;
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
      <div class="mapa-header-cell right">Confiança</div>
    </div>`;

  html+=ordenadas.map(m=>{
    const exp=expectedProg[m.nome]??overallProg;
    const gap=m.prog-exp;
    let barClass, stClass, stLabel;
    if(m.prog===0){ barClass="bar-nodata"; stClass="st-nodata"; stLabel="Não iniciado"; }
    else if(gap>=5){  barClass="bar-ahead";   stClass="st-ahead";   stLabel=`+${gap}% adiantado`; }
    else if(gap>=-12){ barClass="bar-ontrack"; stClass="st-ontrack"; stLabel="No ritmo"; }
    else{              barClass="bar-behind";  stClass="st-behind";  stLabel=`${gap}% abaixo do esperado`; }

    const totalTop=(topicos[m.nome]||[]).length;
    // Confiança
    let cbClass, confLabel, confPct;
    if(!m.conf){ cbClass="cb-nodata"; confLabel="Sem dados"; confPct="—"; }
    else if(m.conf>=70){ cbClass="cb-green";  confLabel="Alta";  confPct=m.conf+"%"; }
    else if(m.conf>=50){ cbClass="cb-yellow"; confLabel="Média"; confPct=m.conf+"%"; }
    else{                cbClass="cb-red";    confLabel="Baixa"; confPct=m.conf+"%"; }

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
        <div class="conf-badge ${cbClass}" title="${confLabel}">
          <span class="cb-pct">${confPct}</span>
        </div>
      </div>
    </div>`;
  }).join("");

  grid.innerHTML=html;
}

function renderMaterias(){
  const grid=document.getElementById("mapaGridMaterias");
  if(!grid) return;
  const materias=calcMateriasStats();
  const topicos=getTopicos();
  const totalQuestoes=100;
  const temDados=Object.values(STATE.dias).some(d=>d.percepcao);
  const contextoBanner=!STATE.inicio
    ?`<div style="background:#F0F7F3;border:1.5px solid #C8E6D5;border-radius:14px;padding:1.1rem 1.4rem;margin-bottom:1.25rem;text-align:center;color:#4A6155;font-size:.87rem">Configure seu concurso para ver as matérias.</div>`
    :!temDados
      ?`<div style="background:#F0F7F3;border:1.5px solid #C8E6D5;border-radius:14px;padding:1.1rem 1.4rem;margin-bottom:1.25rem">
          <div style="font-weight:700;color:#1C5E3D;font-size:.88rem;margin-bottom:.3rem">📊 Seu mapa de domínio vai aparecer aqui</div>
          <div style="font-size:.83rem;color:#4A6155;line-height:1.6">Conforme você avalia os tópicos no Cronograma com ⭐ estrelas, este painel se preenche automaticamente com sua cobertura e confiança por matéria. Comece pelo <button data-action="navTo" data-page="hoje" style="background:none;border:none;color:#2FB374;font-weight:700;cursor:pointer;font-size:.83rem;padding:0;text-decoration:underline">Foco de Hoje →</button></div>
        </div>`
      :"";
  grid.innerHTML=contextoBanner+`<div class="mat-lista">${materias.map((m,i)=>{
    const questoes=Math.round(totalQuestoes*(m.peso/100));
    const confColor=m.conf>=70?"var(--green)":m.conf>=50?"var(--yellow)":"var(--red)";
    const confLabel=m.conf>=70?"Alta":m.conf>=50?"Média":m.conf>0?"Baixa":"—";
    const topsHtml=(topicos[m.nome]||[]).map(t=>`<li>${t}</li>`).join("");
    return`<div class="mat-item">
      <div class="mat-item-header">
        <div class="mat-item-left">
          <div class="mat-num">${String(i+1).padStart(2,"0")}</div>
          <div><div class="mat-nome">${m.nome}</div><div class="mat-subs"><ul>${topsHtml}</ul></div></div>
        </div>
        <div class="mat-item-right">
          <div class="mat-stat"><span class="mat-stat-label">Peso</span><span class="mat-stat-val">${m.peso}%</span></div>
          <div class="mat-stat"><span class="mat-stat-label">Questões</span><span class="mat-stat-val">${questoes}</span></div>
          <div class="mat-stat"><span class="mat-stat-label">Segurança</span><span class="mat-stat-val" style="color:${confColor}">${confLabel}</span></div>
        </div>
      </div>
    </div>`;
  }).join("")}</div>`;
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
      if(!est.percepcao&&!est.skipped&&!est.transferido) return false;
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
  STATE.dias[_rgKey].revisaoGeralFeita=true;
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
  STATE.dias[key].simuladoFeito=true;
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

function irParaHojeCronograma(){
  STATE.semanaOffset=0; STATE.cronView="semana"; save();
  navTo("cronograma");
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
      else if(_ciclo===5) html+=renderDiaSabado(dia,key,est,isHoje,isPast,fraquezas);
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
   o próximo Sábado Técnico. */

function redistribuirTopicos(missedKeys){
  const topicos=[];
  missedKeys.forEach(k=>{ getTopicosDiaBase(k).forEach(td=>{ if(td) topicos.push(td); }); });
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
    STATE.sabadoRecuperacao=[...(STATE.sabadoRecuperacao||[]),...topicos.map(t=>`${t.mat}: ${t.top}`)];
    STATE.sabadoRecuperacaoData=fmt(getProximoSabado());
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
        ?`<div class="multi-topico-header"><span class="multi-topico-tag">📚 ${tops.length} tópicos · Modo intensivo</span></div><div class="multi-topico-list">${tops.map((t,i)=>`<div class="multi-topico-row"><div class="mtr-head"><span class="multi-topico-num">${i+1}</span><span class="multi-topico-mat" title="${esc(t.mat)}">${esc(t.mat)}</span></div><div class="multi-topico-text">${t.top}</div></div>`).join("")}</div>`
        :`<div class="dia-topico">${mat}</div><div class="dia-subtopico">${top}</div><div class="dia-peso">Peso ${peso}%</div>`}
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
function _sabId(key,ti){ return "sab-stars-"+key+(ti!=null&&ti!==""?"-"+ti:""); }
function sabStarHTML(key,n,source,ti){
  const nivel=starToNivel(n);
  const tiAttr=ti!=null&&ti!==""?` data-ti="${ti}"`:"";
  return [1,2,3,4,5].map(s=>{
    const lit=s<=n?(nivel==="alta"?"lit-high":nivel==="media"?"lit-mid":"lit-low"):"";
    return`<button class="sab-star ${lit}" data-n="${s}" aria-label="${s} de 5 estrelas" data-action="setSabStar" data-hover="sabstar" data-key="${key}" data-n="${s}" data-cur="${n}" data-source="${source}"${tiAttr}>★</button>`;
  }).join("");
}
function setSabStar(key,n,source,ti){
  if(ti!=null&&ti!==""){ gravarNotaTopico(key,+ti,n); }
  else{
    if(!STATE.dias[key]) STATE.dias[key]={};
    STATE.dias[key].estrelas=n; STATE.dias[key].percepcao=starToNivel(n);
  }
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

function renderDiaSabado(dia,key,est,isHoje,isPast,fraquezas){
  const bc=isHoje?"badge-today":"badge-special";
  const bl=isHoje?"📍 Hoje":"⚡ Técnico";
  const cs=isHoje?"state-today":"";
  const sabKey=fmt(dia);
  const temRecuperacao=STATE.sabadoRecuperacaoData===sabKey&&STATE.sabadoRecuperacao?.length>0;

  // Determina itens a exibir — agora fraquezas são objetos {key,mat,top,perc,text}
  const todosItens=Array.isArray(fraquezas)&&fraquezas.length&&typeof fraquezas[0]==="object" ? fraquezas : [];
  const itensFracos=todosItens.filter(f=>f.perc==="baixa");

  let itens="";
  if(temRecuperacao){
    itens=`<div style="font-size:.72rem;font-weight:700;color:var(--red);margin-bottom:.4rem">🔴 Recuperação de dias perdidos:</div>`;
    STATE.sabadoRecuperacao.forEach(f=>{
      itens+=`<div class="sab-item-row"><div class="sabado-dot" style="background:var(--red-viv);flex-shrink:0"></div><span class="sab-item-text">${esc(f)}</span></div>`;
    });
    itens+=`<div style="font-size:.68rem;color:var(--gray-400);margin-top:.5rem;font-style:italic">Após estudar, reavalie cada tópico abaixo.</div>`;
    // Mostra também os itens de recuperação com estrelas se tiver key no STATE
  }

  // Retorno Técnico: só mostra itens sem confiança alta
  if(!temRecuperacao){
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
        const stHtml=sabStarHTML(f.key,cur,"sab",isTop?f.topIdx:null);
        const isFraco=conf==="baixa";
        const badge=conf==="media"?`<span class="sab-conf-dot" style="color:#d97706" title="Confiança Média">●</span>`
          :conf==="baixa"?`<span class="sab-conf-dot" style="color:#dc2626" title="Baixa Confiança">●</span>`
          :`<span class="sab-conf-dot" style="color:#cbd5e1" title="Pendente">○</span>`;
        const dotStyle=isFraco?"background:var(--red-viv)":conf==="media"?"background:var(--yellow-viv)":"";
        _sabRows.push(`<div class="sab-item-row">
          <div style="display:flex;align-items:center;gap:6px">
            <div class="sabado-dot" style="flex-shrink:0;${dotStyle}"></div>
            <span style="font-size:.72rem;font-weight:600;color:var(--gray-700);flex:1;line-height:1.3;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${esc(f.text)}">${esc(f.text)}</span>
          </div>
          <div style="display:flex;align-items:center;gap:6px;padding-left:13px">
            <div class="sab-stars" id="${_sabId(f.key,isTop?f.topIdx:null)}">${stHtml}</div>
            ${badge}
          </div>
        </div>`);
      });
      const LIM_SAB=4;
      itens+=_sabRows.slice(0,LIM_SAB).join("");
      if(_sabRows.length>LIM_SAB){
        itens+=`<div class="sab-mais" id="sabmais-${sabKey}" style="display:none">${_sabRows.slice(LIM_SAB).join("")}</div>`;
        itens+=`<button class="sab-vermais" data-action="toggleSabMais" data-key="${sabKey}" data-n="${_sabRows.length}">▾ Ver todos os ${_sabRows.length} tópicos</button>`;
      }
    } else {
      const algumEstudado=todosItens.some(f=>f.perc);
      if(algumEstudado){
        itens=`<div class="sabado-empty">🏆 Todos os tópicos desta semana com Alta Confiança! Aproveite para adiantar conteúdo.</div>`;
      } else {
        itens=`<div class="sabado-empty">📚 Nenhum tópico estudado esta semana ainda. Complete os dias de estudo antes do Retorno Técnico.</div>`;
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
  STATE.dias[key].percepcao="alta";
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
  STATE.dias[key].estrelas=n; STATE.dias[key].percepcao=starToNivel(n); STATE.dias[key].collapsed=true;
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
  if(agg!=null){ est.estrelas=agg; est.percepcao=starToNivel(agg); }
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
   Fallback: próximo sábado do calendário, se nenhum RT existir no horizonte. */
function getProximoSabado(){
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
    if(!est.percepcao&&!est.skipped&&!est.transferido) missed.push(k);
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
    `⚠️ <strong>${missed.length} dia${missed.length>1?"s":""} útil${missed.length>1?"":"is"} sem registro</strong> (${fmtDateRange(missed)})`;
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
    const tops=[];
    _missedDays.forEach(k=>{getTopicosDiaBase(k).forEach(t=>{ if(t) tops.push(t); });});
    if(tops.length){
      STATE.sabadoRecuperacao=[...(STATE.sabadoRecuperacao||[]),...tops.map(t=>`${t.mat}: ${t.top}`)];
      STATE.sabadoRecuperacaoData=fmt(getProximoSabado());
    }
    _missedDays.forEach(k=>{ if(!STATE.dias[k]) STATE.dias[k]={}; STATE.dias[k].transferido=true; });
  }
  STATE.recoveryShownDate=fmt(new Date());
  save();
  document.getElementById("recoveryModal").classList.remove("open");
  renderTudo();
  navTo("hoje");
  showToast("\u2705 Recupera\u00E7\u00E3o aplicada!");
}
