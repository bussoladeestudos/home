/* ════════════════════════════════════════════════════════════════
   BÚSSOLA DE ESTUDOS — STATE (estado, persistência e backup)
   Fonte única do STATE global, save/load em localStorage com versão
   de schema (migrações), e exportação/importação de backup.
   Testes: node --test tests/state.test.js  (a partir da pasta app/)
   ════════════════════════════════════════════════════════════════ */

const STATE_STORAGE_KEY="cronos_v4";
const STATE_SCHEMA_VERSION=2;

/* Catálogo de concursos — carregado de editais.js (window.EDITAIS_DATA) */
let EDITAIS=(typeof window!=="undefined"&&window.EDITAIS_DATA)||{};

let STATE = {
  concurso:"", prefeitura:"campinas", cargo:"", nome:"",
  inicio:null, prova:null, horasDia:3,
  semanaOffset:0, mesOffset:0, cronView:"semana", pagina:"dashboard",
  dias:{},
  diasLivres:[],  // dias da semana que o usuário NÃO estuda (0=Dom..6=Sáb)
  notasSemana:{}, // anotações livres por semana (chave = data da segunda-feira)
};

/* ── MIGRAÇÃO DE SCHEMA ──
   v1 (sem schemaVersion): dados podem vir de versões antigas ou de
   backups editados à mão — garante containers e tipos corretos.   */
function migrateState(raw){
  const s={...raw};
  const v=s.schemaVersion||1;
  if(v<2){
    s.dias=(s.dias&&typeof s.dias==="object")?s.dias:{};
    s.diasLivres=Array.isArray(s.diasLivres)?s.diasLivres:[];
    s.notasSemana=(s.notasSemana&&typeof s.notasSemana==="object")?s.notasSemana:{};
    s.extrasPorDia=(s.extrasPorDia&&typeof s.extrasPorDia==="object")?s.extrasPorDia:{};
    s.horasDia=parseInt(s.horasDia)||3;
    s.schemaVersion=2;
  }
  return s;
}

function save(){
  try{
    STATE.schemaVersion=STATE_SCHEMA_VERSION;
    // Carimbo de versão para o sync: só após ação real do usuário.
    // Saves automáticos de boot (ex.: navegação inicial) não carimbam —
    // sem isso, um dispositivo desatualizado "pareceria" mais novo que a nuvem.
    if(typeof window==="undefined"||window._bussolaUserActed) STATE.updatedAt=Date.now();
    localStorage.setItem(STATE_STORAGE_KEY,JSON.stringify(STATE));
  }catch(e){}
  _cloudAgendarPush();
}
function load(){ try{ const s=localStorage.getItem(STATE_STORAGE_KEY); if(s) STATE=migrateState({...STATE,...JSON.parse(s)}); }catch(e){} }

/* ── BACKUP: EXPORTAR / IMPORTAR ── */
function exportarDados(){
  const dados={app:"bussola-estudos",versao:1,exportadoEm:new Date().toISOString(),state:STATE};
  const blob=new Blob([JSON.stringify(dados,null,2)],{type:"application/json"});
  const a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download=`bussola-backup-${fmt(new Date())}.json`;
  document.body.appendChild(a); a.click();
  setTimeout(()=>{ URL.revokeObjectURL(a.href); a.remove(); },1000);
  showToast("⬇ Backup exportado! Guarde o arquivo em local seguro.");
}

function importarDados(ev){
  const file=ev.target.files&&ev.target.files[0];
  ev.target.value=""; // permite reimportar o mesmo arquivo
  if(!file) return;
  const reader=new FileReader();
  reader.onload=e=>{
    try{
      const dados=JSON.parse(e.target.result);
      const novoState=(dados.app==="bussola-estudos"||dados.app==="cronos-concursos")?dados.state:dados; // aceita backup ou STATE puro
      if(!novoState||typeof novoState!=="object"||!("dias" in novoState)){
        showToast("⚠️ Arquivo inválido: não parece um backup da Bússola."); return;
      }
      if(!confirm("Importar este backup substituirá os dados atuais. Continuar?")) return;
      STATE=migrateState({...STATE,...novoState});
      save();
      document.getElementById("setupModal").classList.remove("open");
      renderTudo();
      showToast("✅ Backup importado com sucesso!");
    }catch(err){
      showToast("⚠️ Não foi possível ler o arquivo. É um JSON válido?");
    }
  };
  reader.readAsText(file);
}

/* ══════════════════════════════════════════════════════════════
   SINCRONIZAÇÃO EM NUVEM (Firestore) — modelo local-first
   O localStorage continua sendo o cache imediato (app instantâneo,
   funciona offline); a nuvem recebe as mudanças com debounce de 2s
   e é a ponte entre dispositivos. Documento único: alunos/{uid},
   protegido por regra de segurança (uid do próprio aluno).
   ══════════════════════════════════════════════════════════════ */
let _cloudUser=null,_cloudTimer=null;

/* Decisão de conflito local × nuvem (pura, testável):
   1. Dados locais de OUTRO usuário nunca valem (computador compartilhado).
   2. Dispositivo sem cronograma configurado nunca vence uma nuvem configurada.
   3. Ambos configurados: vence o carimbo updatedAt mais recente. */
function decideSync(local,remote,uid){
  if(local&&local._syncUid&&uid&&local._syncUid!==uid) return {winner:"remote",motivo:"outro-usuario"};
  if(!remote) return {winner:"local",motivo:"sem-nuvem"};
  const localConfig=!!(local&&local.inicio), remoteConfig=!!remote.inicio;
  if(remoteConfig&&!localConfig) return {winner:"remote",motivo:"local-vazio"};
  if(localConfig&&!remoteConfig) return {winner:"local",motivo:"nuvem-vazia"};
  const lu=(local&&local.updatedAt)||0, ru=remote.updatedAt||0;
  return {winner: ru>lu?"remote":"local", motivo:"mais-recente"};
}

function _syncStatus(st,title){
  if(typeof document==="undefined") return;
  let el=document.getElementById("syncDot");
  if(!el){
    const tr=document.querySelector(".topbar-right");
    if(!tr) return;
    el=document.createElement("div"); el.id="syncDot";
    tr.insertBefore(el,tr.firstChild);
  }
  el.className="sync-dot "+st;
  el.textContent=st==="ok"?"☁️":st==="sync"?"⟳":"⚠";
  el.title=title||(st==="ok"?"Progresso sincronizado na nuvem"
    :st==="sync"?"Sincronizando…"
    :"Sem conexão com a nuvem — dados salvos neste dispositivo");
}

function _cloudAgendarPush(){
  if(typeof window==="undefined") return;
  if(!_cloudUser||typeof DB==="undefined"||!DB) return;
  _syncStatus("sync");
  clearTimeout(_cloudTimer);
  _cloudTimer=setTimeout(_cloudPush,2000);
}
async function _cloudPush(){
  if(!_cloudUser||typeof DB==="undefined"||!DB) return;
  try{
    await DB.collection("alunos").doc(_cloudUser.uid).set(JSON.parse(JSON.stringify(STATE)));
    _syncStatus("ok");
  }catch(e){ _syncStatus("err"); }
}

async function cloudOnLogin(user){
  _cloudUser=user;
  if(typeof DB==="undefined"||!DB){ _syncStatus("err","Firestore não inicializado"); return; }
  _syncStatus("sync");
  try{
    load(); // garante que o STATE reflete o localStorage antes de decidir
    const snap=await DB.collection("alunos").doc(user.uid).get();
    const remote=snap.exists?snap.data():null;
    const d=decideSync(STATE,remote,user.uid);
    if(d.winner==="remote"&&remote) STATE=migrateState({...STATE,...remote});
    STATE._syncUid=user.uid;
    save(); // grava local e agenda o push (nuvem termina igual ao vencedor)
    _syncStatus("ok");
    // Re-renderiza com os dados vencedores (a UI pode já ter desenhado o boot)
    if(typeof renderTudo==="function"){
      renderTudo();
      const atual=document.querySelector(".page.active");
      if(atual&&typeof navTo==="function") navTo(atual.id.replace("page-",""));
    }
  }catch(e){ _syncStatus("err"); }
}
function cloudOnLogout(){
  _cloudUser=null;
  if(typeof document!=="undefined"){
    const el=document.getElementById("syncDot");
    if(el) el.remove();
  }
}
/* Se o login aconteceu antes deste arquivo carregar, processa agora */
if(typeof window!=="undefined"&&window._pendingAuthUser){
  cloudOnLogin(window._pendingAuthUser);
  window._pendingAuthUser=null;
}

/* ── Export para Node (testes) ── */
if(typeof module!=="undefined"&&module.exports){
  module.exports={migrateState,decideSync,STATE_SCHEMA_VERSION,STATE_STORAGE_KEY};
}
