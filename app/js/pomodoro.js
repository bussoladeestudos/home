/* ════════════════════════════════════════════════════════════════
   BÚSSOLA DE ESTUDOS — MODO FOCO (Pomodoro)
   Timer 25 min de foco / 5 min de pausa, em widget flutuante
   minimalista (canto inferior direito). Integra-se ao dispatcher
   do ui.js registrando ações no objeto global ACTIONS.
   O timer usa timestamp (Date.now), não contagem de intervalos —
   imune ao throttling de abas em segundo plano.
   FERRAMENTA PURA DE FOCO: não grava nenhum dado de estudo — o
   registro do dia continua 100% manual (checks + estrelas). O único
   dado persistido é a preferência de duração (STATE.pomoFoco/pomoPausa).
   ════════════════════════════════════════════════════════════════ */

const POMO_FOCO=25*60, POMO_PAUSA=5*60, POMO_PAUSA_LONGA=15*60;

/* Transição de fases (pura, testável):
   foco termina → pausa de 5 min inicia sozinha;
   pausa termina → volta ao foco, aguardando o aluno iniciar. */
function pomoNextPhase(atual,focoDur,pausaDur,pausaLonga){
  return atual==="foco"
    ? {phase:"pausa",dur:pausaLonga?POMO_PAUSA_LONGA:(pausaDur??POMO_PAUSA),autoStart:true,longa:!!pausaLonga}
    : {phase:"foco",dur:focoDur??POMO_FOCO,autoStart:false,longa:false};
}

/* Durações configuradas pelo aluno (persistem no STATE → backup/sync) */
function _pomoFocoMin(){ return parseInt(typeof STATE!=="undefined"&&STATE.pomoFoco)||25; }
function _pomoPausaMin(){ return parseInt(typeof STATE!=="undefined"&&STATE.pomoPausa)||5; }
function _focoDur(){ return _pomoFocoMin()*60; }
function _pausaDur(){ return _pomoPausaMin()*60; }

/* ── Som de finalização (Web Audio — sem arquivos externos) ── */
let _pomoAudio=null;
function _pomoEnsureAudio(){
  try{
    if(!_pomoAudio) _pomoAudio=new (window.AudioContext||window.webkitAudioContext)();
    if(_pomoAudio.state==="suspended") _pomoAudio.resume();
  }catch(e){}
}
function _pomoBeep(){
  try{
    if(!_pomoAudio) return;
    const t0=_pomoAudio.currentTime;
    [[880,0],[660,.18],[880,.36]].forEach(([f,dt])=>{
      const o=_pomoAudio.createOscillator(), g=_pomoAudio.createGain();
      o.type="sine"; o.frequency.value=f;
      g.gain.setValueAtTime(.0001,t0+dt);
      g.gain.exponentialRampToValueAtTime(.18,t0+dt+.02);
      g.gain.exponentialRampToValueAtTime(.0001,t0+dt+.15);
      o.connect(g); g.connect(_pomoAudio.destination);
      o.start(t0+dt); o.stop(t0+dt+.16);
    });
  }catch(e){}
}

let _pomoPhase="foco", _pomoRestante=POMO_FOCO, _pomoEndAt=null,
    _pomoTimer=null, _pomoOpen=false, _pomoPendente=false, _pomoTitleBase="", _pomoCiclos=0;

function _pomoFmt(s){ const m=Math.floor(s/60),ss=s%60; return String(m).padStart(2,"0")+":"+String(ss).padStart(2,"0"); }
function _pomoRestanteAtual(){ return _pomoTimer?Math.max(0,Math.round((_pomoEndAt-Date.now())/1000)):_pomoRestante; }

function _pomoWidgetEl(){
  let el=document.getElementById("pomoWidget");
  if(!el){ el=document.createElement("div"); el.id="pomoWidget"; el.className="pomo-fixed"; document.body.appendChild(el); }
  return el;
}

function _pomoPillEl(){
  let el=document.getElementById("pomoPill");
  if(!el){
    el=document.createElement("button");
    el.id="pomoPill";
    el.setAttribute("data-action","pomodoroWidget");
    el.title="Modo Foco (Pomodoro)";
    const tr=document.querySelector(".topbar-right");
    if(tr) tr.insertBefore(el,tr.firstChild);
    else _pomoWidgetEl().appendChild(el);
  }
  return el;
}

function _pomoRender(){
  const running=!!_pomoTimer;
  const foco=_pomoPhase==="foco";
  const t=_pomoFmt(_pomoRestanteAtual());
  // Pílula âmbar na topbar — cor exclusiva do Modo Foco
  const pill=_pomoPillEl();
  pill.className="pomo-pill"+(running?(foco?" run-foco":" run-pausa"):"");
  pill.innerHTML=`<span class="pomo-pill-ic">⏱</span><span class="pomo-pill-lbl">${running?(foco?"Foco":"Pausa"):(foco?"Modo Foco":"Pausa")}</span><span id="pomoPillTime" class="pomo-pill-time">${t}</span>`;
  // Painel flutuante (abre logo abaixo da topbar)
  const el=_pomoWidgetEl();
  if(!_pomoOpen){
    el.innerHTML="";
  } else {
    const topico=(typeof getFocoHojeLabel==="function"&&STATE.inicio)?getFocoHojeLabel():"";
    el.innerHTML=`<div class="pomo-panel">
      <div class="pomo-head">
        <span class="pomo-chip ${foco?"chip-foco":"chip-pausa"}">${foco?"● Foco":"☕ Pausa"}</span>
        <button class="pomo-x" data-action="pomodoroWidget" title="Minimizar">–</button>
      </div>
      <div class="pomo-time" id="pomoTime">${t}</div>
      ${topico?`<div class="pomo-topico" title="${esc(topico)}">${esc(topico)}</div>`:""}
      <div class="pomo-btns">
        ${running
          ?`<button class="pomo-btn primary" data-action="pomodoroPause">⏸ Pausar</button>`
          :`<button class="pomo-btn primary" data-action="pomodoroStart">▶ Iniciar</button>`}
        <button class="pomo-btn" data-action="pomodoroReset">↺ Resetar</button>
      </div>
      ${!running?`<div class="pomo-durs">
        <span class="pomo-durs-lbl">Foco</span>${[15,25,45].map(m=>`<button class="pomo-dchip${m===_pomoFocoMin()?" on":""}" data-action="pomodoroSetFoco" data-min="${m}">${m}</button>`).join("")}
        <span class="pomo-durs-lbl" style="margin-left:8px">Pausa</span>${[5,10].map(m=>`<button class="pomo-dchip${m===_pomoPausaMin()?" on":""}" data-action="pomodoroSetPausa" data-min="${m}">${m}</button>`).join("")}
      </div>`:""}
      ${_pomoPendente?`<button class="pomo-cta" data-action="pomodoroAvaliarTopico">★ Avaliar tópico de hoje →</button>`:""}
      <div class="pomo-count">🍅 ${_pomoCiclos} ciclo${_pomoCiclos!==1?"s":""} nesta sessão</div>
    </div>`;
  }
  document.title=running?`${t} · ${foco?"Foco":"Pausa"} — Bússola`:_pomoTitleBase;
}

function _pomoOnTick(){
  if(!_pomoTimer) return; // guarda contra callback enfileirado após clear
  const rem=_pomoRestanteAtual();
  if(rem<=0){ _pomoComplete(); return; }
  const t=_pomoFmt(rem);
  const a=document.getElementById("pomoTime");    if(a) a.textContent=t;
  const b=document.getElementById("pomoPillTime");if(b) b.textContent=t;
  document.title=`${t} · ${_pomoPhase==="foco"?"Foco":"Pausa"} — Bússola`;
}

function pomodoroStart(){
  if(_pomoTimer) return;
  _pomoEnsureAudio();
  _pomoEndAt=Date.now()+_pomoRestante*1000;
  _pomoTimer=setInterval(_pomoOnTick,500);
  _pomoRender();
}
function pomodoroPause(){
  if(!_pomoTimer) return;
  _pomoRestante=_pomoRestanteAtual();
  clearInterval(_pomoTimer); _pomoTimer=null; _pomoEndAt=null;
  _pomoRender();
}
function pomodoroReset(){
  if(_pomoTimer){ clearInterval(_pomoTimer); _pomoTimer=null; _pomoEndAt=null; }
  _pomoPhase="foco"; _pomoRestante=_focoDur(); _pomoPendente=false;
  _pomoRender();
}

function _pomoComplete(){
  clearInterval(_pomoTimer); _pomoTimer=null; _pomoEndAt=null;
  const fim=_pomoPhase;
  const longa=fim==="foco"&&(_pomoCiclos+1)%4===0;
  const next=pomoNextPhase(fim,_focoDur(),_pausaDur(),longa);
  _pomoBeep();
  _pomoPhase=next.phase; _pomoRestante=next.dur;
  if(fim==="foco"){
    _pomoCiclos++;   // contador apenas desta sessão — nenhum dado de estudo é gravado
    _pomoPendente=true; _pomoOpen=true;
    showToast(longa
      ?"🍅 4º ciclo concluído! Pausa longa de 15 minutos iniciada."
      :`🍅 Ciclo de foco concluído! Pausa de ${Math.round(next.dur/60)} minutos iniciada.`);
  } else {
    showToast("⏱ Pausa encerrada — pronto para mais um ciclo de foco.");
  }
  if(next.autoStart) pomodoroStart(); else _pomoRender();
}

/* CTA pós-foco: leva o aluno à página Hoje para avaliar o tópico com as
   estrelas — é a avaliação que conclui o dia e agenda a revisão espaçada. */
function pomodoroAvaliarTopico(){
  _pomoPendente=false;
  _pomoRender();
  navTo("hoje");
}

/* ── Integração com o dispatcher do ui.js ── */
if(typeof ACTIONS!=="undefined"){
  Object.assign(ACTIONS,{
    pomodoroWidget:()=>{ _pomoOpen=!_pomoOpen; _pomoRender(); },
    pomodoroAbrir:()=>{ _pomoOpen=true; _pomoRender(); if(typeof closeSidebarMobile==="function") closeSidebarMobile(); },
    pomodoroSetFoco:d=>{ STATE.pomoFoco=+d.min; save(); if(!_pomoTimer&&_pomoPhase==="foco") _pomoRestante=_focoDur(); _pomoRender(); },
    pomodoroSetPausa:d=>{ STATE.pomoPausa=+d.min; save(); if(!_pomoTimer&&_pomoPhase==="pausa") _pomoRestante=_pausaDur(); _pomoRender(); },
    pomodoroStart:()=>pomodoroStart(),
    pomodoroPause:()=>pomodoroPause(),
    pomodoroReset:()=>pomodoroReset(),
    pomodoroAvaliarTopico:()=>pomodoroAvaliarTopico(),
  });
}
if(typeof document!=="undefined"){
  _pomoTitleBase=document.title;
  _pomoRestante=_focoDur();
  _pomoRender();
  // Aba em segundo plano: navegadores congelam timers. Ao voltar,
  // verifica imediatamente se o ciclo terminou (dispara a pausa na hora).
  document.addEventListener("visibilitychange",()=>{
    if(!document.hidden&&_pomoTimer) _pomoOnTick();
  });
}

/* ── Export para Node (testes) ── */
if(typeof module!=="undefined"&&module.exports){
  module.exports={POMO_FOCO,POMO_PAUSA,POMO_PAUSA_LONGA,pomoNextPhase};
}
