/* Atendimentos autorais: estado por aluno, separado dos exercícios e da prova. */
let _atendimentoAberto=null;
function atendimentoBanco(){return window.ATENDIMENTOS_CPROR||[];}
function atendimentoSessao(id){return (STATE.atendimentosCpror||{})[id];}
function atendimentosCartaoHtml(){
  return `<section class="prova-card atendimento-catalogo" aria-label="Atendimentos interativos"><span class="prova-etiqueta">Treino de decisões</span><h2>Atendimentos interativos</h2><p>Assuma o papel do profissional e conduza uma conversa com o cliente. Cada atendimento tem seis decisões e duas questões de múltipla escolha ao final, sem limite de tempo. Confira sua nota e as explicações ao concluir.</p><p class="atendimento-nota">Casos autorais inspirados no formato de árvore de diálogo. Na conversa, cada resposta vale 5, 3, 1 ou 0 pontos. Nas duas questões finais, cada acerto vale 5 pontos. Total: 40 pontos, independentes da Revisão Geral.</p><div class="atendimento-grade">${atendimentoBanco().map(c=>{const s=atendimentoSessao(c.id);return `<article><span class="prova-etiqueta">${esc(c.tema)}</span><h3>${esc(c.titulo)}</h3><p>${esc(c.resumo)}</p>${s?`<p>${s.fim?`Último resultado: ${esc(atendimentoResultado(s).pontos)} de ${esc(s.caso.maxPontos)} pontos`:`Em andamento: ${esc(s.caminho.length)} de ${esc(s.caso.etapas)} respostas confirmadas`}</p>`:''}<button class="ex-btn" data-action="atendimentoAbrir" data-id="${esc(c.id)}">${s?(s.fim?'Ver resultado':'Continuar atendimento'):'Iniciar atendimento'}</button></article>`;}).join('')}</div></section>`;
}
function atendimentoAbrir(id,novo){
  if(STATE.prefeitura!=="cproRAnbima")return;
  const c=atendimentoBanco().find(c=>c.id===id);if(!c)return;
  let s=atendimentoSessao(id);
  if(novo&&s&&!s.fim)return;
  if(!s||novo){
    if(!STATE.atendimentosCpror)STATE.atendimentosCpror={};
    const caso=JSON.parse(JSON.stringify(c));
    const ordens={};Object.keys(caso.nos).forEach(n=>{ordens[n]=_embaralhar(caso.nos[n].opcoes.map(o=>o.id));});
    s={caso,ordens,no:caso.inicio,caminho:[],inicio:Date.now(),selecionada:null,fim:null};
    STATE.atendimentosCpror[id]=s;save();
  }
  _provaAberta=false;_atendimentoAberto=id;renderSimuladoPage();
}
function atendimentoEscolher(id,no,op){
  if(STATE.prefeitura!=="cproRAnbima"||_atendimentoAberto!==id)return;
  const s=atendimentoSessao(id);if(!s||s.fim||s.no!==no)return;
  if(!s.caso.nos[no].opcoes.some(o=>o.id===op))return;
  s.selecionada=op;save();renderAtendimento();
}
function atendimentoConfirmar(id,no){
  if(STATE.prefeitura!=="cproRAnbima"||_atendimentoAberto!==id)return;
  const s=atendimentoSessao(id);if(!s||s.fim||s.no!==no)return;
  const n=s.caso.nos[no],o=n.opcoes.find(o=>o.id===s.selecionada);if(!o)return;
  s.caminho.push({no,op:o.id});s.selecionada=null;s.no=o.proximo;
  if(!s.no){s.fim=Date.now();}
  save();renderAtendimento();
  const heading=document.getElementById('atendimentoTitulo');if(heading)heading.focus();
}
function atendimentoResultado(s){
  const acertos=s.caminho.filter(r=>s.caso.nos[r.no].correta===r.op).length;
  const pontos=s.caminho.reduce((total,r)=>total+s.caso.nos[r.no].opcoes.find(o=>o.id===r.op).peso,0);
  return {acertos,pontos,total:s.caso.etapas,nota:Math.round(100*pontos/s.caso.maxPontos)};
}
function renderAtendimento(){
  const el=document.getElementById('simuladoConteudo'),s=atendimentoSessao(_atendimentoAberto);
  if(!el||!s||STATE.prefeitura!=="cproRAnbima")return;
  const c=s.caso,n=c.nos[s.no],r=atendimentoResultado(s);
  const anterior=s.caminho.length?s.caminho[s.caminho.length-1]:null;
  const reacao=anterior?c.nos[anterior.no].opcoes.find(o=>o.id===anterior.op).reacao:null;
  el.innerHTML=`<section class="prova-card atendimento-run"><button class="ex-btn-sec" data-action="atendimentoVoltar">Voltar aos simulados</button><h2 id="atendimentoTitulo" tabindex="-1">${esc(c.titulo)}</h2><p class="atendimento-contexto">${esc(c.contexto)}</p>${s.fim?`<p class="prova-destaque" role="status">${esc(r.pontos)} de ${esc(c.maxPontos)} pontos · ${esc(r.nota)}%</p><p>Na árvore: 5 para a melhor resposta, 3 para uma resposta parcialmente adequada, 1 para uma resposta pouco adequada e 0 para uma resposta inadequada. Nas questões finais: 5 por acerto.</p><p>Resultado deste treino, sem equivalência com a pontuação oficial da ANBIMA. Revise a condução do atendimento abaixo.</p>${s.caminho.map((a,i)=>{const node=c.nos[a.no],op=node.opcoes.find(o=>o.id===a.op),certa=node.opcoes.find(o=>o.id===node.correta);return `<article class="atendimento-correcao"><h3>${esc(i+1)}. ${esc(node.habilidade)}</h3><p class="atendimento-fala">${esc(node.fala)}</p><p><strong>Sua resposta:</strong> ${esc(op.texto)}</p><p class="${a.op===node.correta?'atendimento-acerto':'atendimento-erro'}">${esc(op.peso)} de 5 pontos · ${node.tipo==='multipla'?(a.op===node.correta?'Resposta correta':'Resposta incorreta'):({5:'Melhor resposta',3:'Resposta parcialmente adequada',1:'Resposta pouco adequada',0:'Resposta inadequada'}[op.peso])}</p><p>${esc(op.explicacao)}</p>${a.op!==node.correta?`<p><strong>Resposta esperada:</strong> ${esc(certa.texto)}</p><p>${esc(certa.explicacao)}</p>`:''}${atendimentoOutrasHtml(node,a.op)}</article>`;}).join('')}<p>${esc(c.fechamento)}</p><p>Ao refazer, o último resultado deste atendimento será substituído.</p><button class="ex-btn" data-action="atendimentoNovo" data-id="${esc(c.id)}">Refazer atendimento</button>`:`<p class="atendimento-progresso">${n.tipo==='multipla'?`Questão final ${esc(s.caminho.length-5)} de 2`:`Decisão ${esc(s.caminho.length+1)} de 6`} · ${esc(n.habilidade)}</p><progress max="${esc(c.etapas)}" value="${esc(s.caminho.length)}" aria-label="Respostas confirmadas"></progress>${reacao?`<p class="atendimento-reacao"><strong>O cliente reage:</strong> ${esc(reacao)}</p>`:''}<div class="atendimento-fala"><span>${n.tipo==='multipla'?'Questão de múltipla escolha':'Cliente'}</span><p>${esc(n.fala)}</p></div><p><strong>${n.tipo==='multipla'?'Selecione a alternativa correta.':'Como você conduz o atendimento?'}</strong></p><div class="atendimento-opcoes" role="group" aria-label="Respostas do profissional">${s.ordens[s.no].map((id,i)=>{const o=n.opcoes.find(o=>o.id===id);return `<button class="atendimento-opcao${s.selecionada===o.id?' selecionada':''}" aria-pressed="${s.selecionada===o.id}" data-action="atendimentoEscolher" data-id="${esc(c.id)}" data-no="${esc(s.no)}" data-op="${esc(o.id)}"><span class="atendimento-letra">${esc(String.fromCharCode(65+i))}</span><span>${esc(o.texto)}</span></button>`;}).join('')}</div><p class="atendimento-nota">Você pode trocar a seleção antes de confirmar. Depois, você avança e esta resposta fica registrada. A correção aparece ao final.</p><div class="atendimento-acoes"><button class="ex-btn" data-action="atendimentoConfirmar" data-id="${esc(c.id)}" data-no="${esc(s.no)}"${s.selecionada?'':' disabled'}>${s.caminho.length+1===c.etapas?'Concluir atendimento':'Confirmar e continuar'}</button><button class="ex-btn-sec" data-action="atendimentoVoltar">Sair e continuar depois</button></div>`}</section>`;
}

function atendimentoOutrasHtml(node,escolhida){
  const outras=node.opcoes.filter(o=>o.id!==escolhida&&o.id!==node.correta).sort((a,b)=>b.peso-a.peso);
  return `<details class="atendimento-outras"><summary>Entenda as outras respostas</summary>${outras.map(o=>`<p><strong>${esc(o.peso)} de 5 pontos:</strong> ${esc(o.texto)}</p><p>${esc(o.explicacao)}</p>`).join('')}</details>`;
}
