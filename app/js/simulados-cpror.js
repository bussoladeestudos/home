/* Simulados mistos da C-Pro R.
   Um caso ocupa exatamente três questões: a árvore completa vale uma,
   e as duas múltiplas escolhas finais valem uma questão cada. */
let _mixAberto=null;
const MIX_GERAL_MS=150*60*1000;

function mixBancoCasos(){return window.ATENDIMENTOS_CPROR||[];}
function mixCasosElegiveis(topicos){
  if(!Array.isArray(topicos)||!topicos.length)return mixBancoCasos();
  const estudados=new Set(topicos.map(t=>t.mat+'|'+t.top));
  return mixBancoCasos().filter(c=>(c.topicos||[]).some(t=>estudados.has(c.materia+'|'+t)));
}
function mixEscolherCasos(qtd,topicos){
  const uso=STATE.casosCprorUso||{};
  return _embaralhar(mixCasosElegiveis(topicos).slice())
    .sort((a,b)=>(uso[a.id]||0)-(uso[b.id]||0)).slice(0,qtd);
}
function mixTokenQuestao(id){return 'q:'+id;}
function mixTokenArvore(id){return 'a:'+id;}
function mixTokenCasoQuestao(id,no){return 'c:'+id+':'+no;}
function mixGrupoCaso(c){return [mixTokenArvore(c.id),mixTokenCasoQuestao(c.id,'q1'),mixTokenCasoQuestao(c.id,'q2')];}
function mixCriarCasoEstado(c){
  const ordens={};Object.keys(c.nos).forEach(no=>ordens[no]=_embaralhar(c.nos[no].opcoes.map(o=>o.id)));
  return {versao:c.versao,no:c.inicio,caminho:[],ordens,selecionada:null,finalizado:false};
}
function mixIntercalarGrupos(questoes,casos){
  const grupos=_embaralhar(questoes.map(it=>[mixTokenQuestao(it.q.id)]));
  _embaralhar(casos.slice()).forEach((c,i)=>{
    const pos=Math.min(grupos.length,Math.floor((i+1)*(grupos.length+1)/(casos.length+1)));
    grupos.splice(pos,0,mixGrupoCaso(c));
  });
  return grupos.flat();
}
function mixCasoPorId(id){return mixBancoCasos().find(c=>c.id===id);}
function mixQuestaoPorId(id){return provaBanco().find(it=>it.q.id===id);}
function mixResolverToken(token){
  const partes=String(token).split(':');
  if(partes[0]==='q'){
    const it=mixQuestaoPorId(partes.slice(1).join(':'));
    return it?{tipo:'questao',token,mat:it.mat,top:it.top,q:it.q}:null;
  }
  const caso=mixCasoPorId(partes[1]);if(!caso)return null;
  if(partes[0]==='a')return {tipo:'arvore',token,mat:caso.materia,top:caso.tema,caso};
  const no=caso.nos[partes[2]];
  return no?{tipo:'casoQuestao',token,mat:caso.materia,top:caso.tema,caso,noId:partes[2],no}:null;
}
function mixItens(s){return s.itens.map(t=>mixResolverToken(t)).filter(Boolean);}
function mixSessao(){return _mixAberto==='geral'?STATE.provaMistaCpror:_mixAberto==='mini'?STATE.miniMistoCpror:null;}
function mixRespondida(s,it){
  if(it.tipo==='arvore')return !!s.casos[it.caso.id]?.finalizado;
  return s.respostas[it.token]!==undefined;
}
function mixAcertou(s,it){
  if(it.tipo==='arvore')return s.respostas[it.token]==='ok';
  if(it.tipo==='casoQuestao')return s.respostas[it.token]===it.no.correta;
  return s.respostas[it.token]===it.q.gabarito;
}
function mixTempo(s){
  const n=Math.max(0,Math.ceil((s.fimEm-Date.now())/1000));
  return [Math.floor(n/3600),Math.floor(n%3600/60),n%60].map(x=>String(x).padStart(2,'0')).join(':');
}
function mixPlanoGeral(casos){
  const banco=provaBanco();
  return PROVA_CPROR_MATERIAS.map(m=>{
    const blocos=casos.filter(c=>c.materia===m.mat).length;
    return {...m,mcQtd:m.qtd-(blocos*3),itens:banco.filter(it=>it.mat===m.mat)};
  });
}
function mixSortearQuestoes(plano){
  const uso=STATE.provaCprorUso||{},out=[];
  plano.forEach(m=>{
    const candidatos=_embaralhar(m.itens.slice()).sort((a,b)=>(uso[a.q.id]||0)-(uso[b.q.id]||0));
    out.push(...candidatos.slice(0,m.mcQtd));
  });
  return out;
}
function mixCartaoHtml(){
  const s=STATE.provaMistaCpror,casos=mixBancoCasos(),plano=mixPlanoGeral(casos.slice(0,3));
  const faltas=casos.length<3||plano.some(m=>m.itens.length<m.mcQtd);
  const andamento=!!s&&!s.resultado,concluida=!!s&&!!s.resultado;
  const corpo=`<div class="prova-card-conteudo"><p class="prova-destaque">45 questões <span>·</span> 2h30 de prova</p><p>O sorteio combina 36 questões tradicionais com três blocos interativos. Cada bloco conta como três questões: uma árvore de seis decisões e duas questões de múltipla escolha.</p><ul class="prova-distribuicao">${PROVA_CPROR_MATERIAS.map(m=>`<li><span>${esc(m.mat)}</span><strong>${esc(m.qtd)} questões</strong></li>`).join('')}</ul><p>Na árvore, o ponto exige a melhor resposta nas seis decisões. Cada questão objetiva do bloco vale um ponto. O relógio continua contando se você sair ou fechar a página.</p>${andamento?`<p class="prova-aviso">Você tem uma prova em andamento. Tempo restante: ${esc(mixTempo(s))}.</p>`:''}${concluida?revResultadoHtml(s.resultado)+`<button class="ex-btn-sec" type="button" data-action="mixRetomar" data-modo="geral">Ver correção</button>`:''}${faltas?`<p class="prova-aviso">O banco ainda não comporta a composição completa com três árvores e a distribuição oficial.</p>`:''}</div>`;
  return buildStatusCard({
    titulo:"Revisão Geral · C-Pro R",
    sub:"45 questões · tempo máximo de 2h30",
    estado:concluida?"done":"aberto",
    chipLabel:andamento?"Em andamento":concluida?"Concluída":"Disponível",
    bodyHtml:corpo,
    scoreLabel:"acertos",
    score:concluida?s.resultado.pct:null,
    emptyLabel:andamento?"Simulado em andamento":"Disponível a qualquer momento",
    btnLabel:andamento?"Continuar simulado":concluida?"Fazer novo simulado":"Iniciar simulado",
    btnAction:"mixGeralIniciar",
    destaque:false,
    collapsible:true,
    id:"cpror-revisao-geral",
    startOpen:false
  });
}
function mixGeralIniciar(){
  if(STATE.prefeitura!=='cproRAnbima')return;
  if(STATE.provaMistaCpror&&!STATE.provaMistaCpror.resultado)return mixRetomar('geral');
  const casos=mixEscolherCasos(3),plano=mixPlanoGeral(casos);
  if(casos.length<3||plano.some(m=>m.mcQtd<0||m.itens.length<m.mcQtd)){showToast('O banco ainda não comporta a composição completa.');return;}
  if(!confirm('Você terá 2h30 para responder 45 questões. A prova inclui três árvores de decisão, e cada árvore completa vale um ponto somente com as seis melhores respostas. O tempo começa agora e não pausa ao sair. Iniciar?'))return;
  const qs=mixSortearQuestoes(plano),agora=Date.now(),casoEstados={};casos.forEach(c=>casoEstados[c.id]=mixCriarCasoEstado(c));
  STATE.provaMistaCpror={modo:'geral',itens:mixIntercalarGrupos(qs,casos),respostas:{},casos:casoEstados,i:0,inicioEm:agora,fimEm:agora+MIX_GERAL_MS};
  if(!STATE.provaCprorUso)STATE.provaCprorUso={};qs.forEach(it=>STATE.provaCprorUso[it.q.id]=(STATE.provaCprorUso[it.q.id]||0)+1);
  if(!STATE.casosCprorUso)STATE.casosCprorUso={};casos.forEach(c=>STATE.casosCprorUso[c.id]=(STATE.casosCprorUso[c.id]||0)+1);
  save();mixRetomar('geral');
}
function mixMiniIniciar(bloco){
  if(STATE.prefeitura!=='cproRAnbima'||!bloco||bloco.isFutura)return;
  const casos=mixEscolherCasos(1,bloco.topicos);
  if(!casos.length){showToast('Ainda não há árvore publicada para os tópicos estudados neste mini simulado.');return;}
  if(!_confirmarRefazer(bloco))return;
  const p=_simPlanoBase(bloco),qs=_simSortear(p.grupos,Math.min(27,p.disponiveis));
  const caso=casos[0],casoEstados={[caso.id]:mixCriarCasoEstado(caso)};
  STATE.miniMistoCpror={modo:'mini',key:bloco.key,resultadoId:revResultadoId(bloco),topKeys:_topKeysDoBloco(bloco),itens:mixIntercalarGrupos(qs,[caso]),respostas:{},casos:casoEstados,i:0,inicioEm:Date.now()};
  if(!STATE.casosCprorUso)STATE.casosCprorUso={};STATE.casosCprorUso[caso.id]=(STATE.casosCprorUso[caso.id]||0)+1;
  save();mixRetomar('mini');
}
function mixRetomar(modo){
  const s=modo==='geral'?STATE.provaMistaCpror:STATE.miniMistoCpror;if(!s)return;
  _mixAberto=modo;_provaAberta=false;navTo('simulado');window.scrollTo(0,0);
}
function mixVoltar(){_mixAberto=null;renderSimuladoPage();}
function mixVerificarPrazo(){
  const s=STATE.provaMistaCpror;if(!s||s.resultado||Date.now()<s.fimEm)return false;
  mixFinalizar(s,true);return true;
}
function mixResponder(token,op){
  const s=mixSessao();if(!s||s.resultado||(_mixAberto==='geral'&&mixVerificarPrazo()))return renderSimuladoPage();
  const it=mixResolverToken(token);if(!it||it.tipo==='arvore')return;
  const alternativas=it.tipo==='questao'?it.q.alternativas:Object.fromEntries(it.no.opcoes.map(o=>[o.id,o.texto]));
  if(!Object.prototype.hasOwnProperty.call(alternativas,op))return;
  s.respostas[token]=op;save();renderMixCpror();
}
function mixCasoEscolher(token,no,op){
  const s=mixSessao(),it=mixResolverToken(token);if(!s||s.resultado||!it||it.tipo!=='arvore')return;
  const cs=s.casos[it.caso.id],node=it.caso.nos[no];if(!cs||cs.finalizado||cs.no!==no||!node.opcoes.some(o=>o.id===op))return;
  cs.selecionada=op;save();renderMixCpror();
}
function mixCasoConfirmar(token,no){
  const s=mixSessao(),it=mixResolverToken(token);if(!s||s.resultado||!it||it.tipo!=='arvore')return;
  const cs=s.casos[it.caso.id],node=it.caso.nos[no],op=node&&node.opcoes.find(o=>o.id===cs.selecionada);if(!cs||cs.finalizado||cs.no!==no||!op)return;
  cs.caminho.push({no,op:op.id});cs.selecionada=null;const prox=op.proximo&&it.caso.nos[op.proximo];
  if(!prox||prox.tipo!=='arvore'){
    cs.finalizado=true;cs.no=null;s.respostas[token]=cs.caminho.length===6&&cs.caminho.every(r=>it.caso.nos[r.no].opcoes.find(o=>o.id===r.op).peso===5)?'ok':'erro';
    s.i=Math.min(s.i+1,s.itens.length-1);
  }else cs.no=op.proximo;
  save();renderMixCpror();window.scrollTo(0,0);
}
function mixNavegar(i){
  const s=mixSessao();if(!s||!Number.isInteger(i)||i<0||i>=s.itens.length)return;
  if(_mixAberto==='geral')mixVerificarPrazo();s.i=i;save();renderMixCpror();window.scrollTo(0,0);
}
function mixEntregar(){
  const s=mixSessao();if(!s||s.resultado)return;if(_mixAberto==='geral'&&mixVerificarPrazo())return renderMixCpror();
  const itens=mixItens(s),brancas=itens.filter(it=>!mixRespondida(s,it)).length;
  if(!confirm('Entregar o simulado agora? '+(brancas?brancas+' questões estão em branco e contarão como erro.':'Todas as questões foram respondidas.')))return;
  mixFinalizar(s,false);renderMixCpror();window.scrollTo(0,0);
}
function mixFinalizar(s,prazo){
  if(!s||s.resultado)return;
  const itens=mixItens(s),dia=fmt(new Date(s.modo==='geral'?Math.min(Date.now(),s.fimEm):Date.now())),materias=[];let acertos=0;
  itens.forEach(it=>{
    let m=materias.find(x=>x.mat===it.mat);if(!m){m={mat:it.mat,total:0,acertos:0};materias.push(m);}m.total++;
    const ok=mixRespondida(s,it)&&mixAcertou(s,it);if(ok){m.acertos++;acertos++;}
    if(it.tipo==='questao')registrarResposta(it.q.id,s.respostas[it.token]||'',ok,dia);
  });
  materias.forEach(m=>m.pct=Math.round(100*m.acertos/m.total));const total=itens.length,pct=Math.round(100*acertos/total);
  s.resultado={dia,total,acertos,pct,nota:(10*acertos/total).toFixed(1),materias,prazo:!!prazo,brancas:itens.filter(it=>!mixRespondida(s,it)).length};s.encerradaEm=Date.now();
  if(!STATE.revisoesResultados)STATE.revisoesResultados={};
  if(s.modo==='geral')STATE.revisoesResultados['prova-cpror']=s.resultado;
  else{
    STATE.revisoesResultados[s.resultadoId]=s.resultado;if(!STATE.dias[s.key])STATE.dias[s.key]={};
    STATE.dias[s.key].simuladoFeito=true;STATE.dias[s.key].simuladoScore=pct;STATE.dias[s.key].simuladoResultadoId=s.resultadoId;
    (s.topKeys||[]).forEach(k=>{if(!STATE.dias[k])STATE.dias[k]={};STATE.dias[k].exRevisao=true;});if(typeof _carimbarRegistro==='function')_carimbarRegistro(s.key);
  }
  save();
}
function mixArvoreHtml(s,it,r){
  const cs=s.casos[it.caso.id];
  if(r||cs.finalizado){
    const ok=s.respostas[it.token]==='ok';
    return `<div class="atendimento-fala"><span>Árvore de decisão</span><p>${esc(it.caso.contexto)}</p></div><p class="${ok?'atendimento-acerto':'atendimento-erro'}"><strong>${ok?'1 de 1 ponto':'0 de 1 ponto'}.</strong> ${ok?'As seis decisões receberam a melhor avaliação.':'O ponto exige a melhor resposta nas seis decisões.'}</p>${r?cs.caminho.map((a,i)=>{const n=it.caso.nos[a.no],o=n.opcoes.find(x=>x.id===a.op),best=n.opcoes.find(x=>x.peso===5);return `<article class="atendimento-correcao"><h3>Decisão ${esc(i+1)}: ${esc(n.habilidade)}</h3><p>${esc(n.fala)}</p><p><strong>Sua resposta:</strong> ${esc(o.texto)}</p><p>${esc(o.peso)} de 5 na avaliação da decisão. ${esc(o.explicacao)}</p>${o.peso<5?`<p><strong>Melhor resposta:</strong> ${esc(best.texto)}</p>`:''}</article>`;}).join(''):''}`;
  }
  const n=it.caso.nos[cs.no];
  return `<div class="atendimento-fala"><span>Contexto</span><p>${esc(it.caso.contexto)}</p></div><p class="atendimento-progresso">Decisão ${esc(cs.caminho.length+1)} de 6 · ${esc(n.habilidade)}</p><progress max="6" value="${esc(cs.caminho.length)}" aria-label="Decisões confirmadas"></progress><div class="atendimento-fala"><span>Cliente</span><p>${esc(n.fala)}</p></div><p><strong>Como você conduz o atendimento?</strong></p><div class="atendimento-opcoes" role="group" aria-label="Respostas do profissional">${cs.ordens[cs.no].map((id,i)=>{const o=n.opcoes.find(x=>x.id===id);return `<button type="button" class="atendimento-opcao${cs.selecionada===id?' selecionada':''}" aria-pressed="${cs.selecionada===id}" data-action="mixCasoEscolher" data-token="${esc(it.token)}" data-no="${esc(cs.no)}" data-op="${esc(id)}"><span class="atendimento-letra">${esc(String.fromCharCode(65+i))}</span><span>${esc(o.texto)}</span></button>`;}).join('')}</div><p class="atendimento-nota">As avaliações das escolhas aparecem somente depois da entrega. O ponto da árvore exige a melhor resposta nas seis decisões.</p><button class="ex-btn" data-action="mixCasoConfirmar" data-token="${esc(it.token)}" data-no="${esc(cs.no)}"${cs.selecionada?'':' disabled'}>${cs.caminho.length===5?'Concluir árvore':'Confirmar e continuar'}</button>`;
}
function mixQuestaoHtml(s,it,r){
  const q=it.tipo==='questao'?it.q:null,node=it.tipo==='casoQuestao'?it.no:null;
  const enunciado=q?provaTexto(q.enunciado):esc(node.fala),alts=q?Object.entries(q.alternativas):node.opcoes.map(o=>[o.id,o.texto]);const gab=q?q.gabarito:node.correta;
  return `<div class="ex-enunciado prova-texto">${enunciado}</div><div class="ex-alts">${alts.map(([op,txt])=>`<button type="button" class="ex-alt ${r?(op===gab?'certa':s.respostas[it.token]===op?'errada':''):s.respostas[it.token]===op?'escolhida':''}" data-action="mixResponder" data-token="${esc(it.token)}" data-op="${esc(op)}" aria-pressed="${s.respostas[it.token]===op}"${r?' disabled':''}><span class="ex-alt-letra">${esc(String(op).toUpperCase())}</span><span class="ex-alt-txt">${q?provaTexto(txt):esc(txt)}</span></button>`).join('')}</div>${r?`<p>Sua resposta: ${esc(s.respostas[it.token]?String(s.respostas[it.token]).toUpperCase():'em branco')}. Gabarito: ${esc(String(gab).toUpperCase())}.</p><div class="ex-coment prova-texto">${q?provaTexto(q.comentario):esc(node.opcoes.find(o=>o.id===gab).explicacao)}</div>`:''}`;
}
function renderMixCpror(){
  const el=document.getElementById('simuladoConteudo'),s=mixSessao();if(!el||!s)return;if(_mixAberto==='geral')mixVerificarPrazo();
  const itens=mixItens(s),i=Math.max(0,Math.min(s.i||0,itens.length-1)),it=itens[i],r=s.resultado,respondidas=itens.filter(x=>mixRespondida(s,x)).length;
  el.innerHTML=`<section class="prova-card prova-run atendimento-run"><div class="prova-topo"><button class="ex-btn-sec" data-action="mixVoltar">${r?'Sair':'Simulados'}</button><strong>${_mixAberto==='geral'&&!r?`Tempo restante <span id="mixRelogio" role="timer">${esc(mixTempo(s))}</span>`:(r?'Simulado encerrado':'Mini Simulado')}</strong></div><h2>${r?'Resultado':(_mixAberto==='geral'?'Revisão Geral':'Mini Simulado')} · C-Pro R</h2>${r?`${revResultadoHtml(r)}<p>${esc(r.brancas)} questões em branco.</p>`:`<p>${esc(respondidas)} de ${esc(itens.length)} questões respondidas. A árvore completa conta como uma questão.</p>`}<nav class="prova-grade" aria-label="Questões do simulado">${itens.map((x,n)=>`<button type="button" data-action="mixNavegar" data-i="${esc(n)}" class="${n===i?'atual ':''}${mixRespondida(s,x)?'respondida':''}" aria-label="Questão ${esc(n+1)}, ${mixRespondida(s,x)?'respondida':'em branco'}"${n===i?' aria-current="step"':''}>${esc(n+1)}</button>`).join('')}</nav><div class="ex-migalha">Questão ${esc(i+1)} de ${esc(itens.length)} · ${esc(it.mat)} · ${it.tipo==='arvore'?'Árvore de decisão':it.tipo==='casoQuestao'?'Questão ligada à árvore':esc(_exNivelLabel(it.q.nivel))}</div>${it.tipo==='arvore'?mixArvoreHtml(s,it,r):mixQuestaoHtml(s,it,r)}<div class="ex-acoes"><button class="ex-btn-sec" data-action="mixNavegar" data-i="${esc(i-1)}"${i===0?' disabled':''}>Anterior</button>${i<itens.length-1?`<button class="ex-btn" data-action="mixNavegar" data-i="${esc(i+1)}">Próxima</button>`:''}${!r?`<button class="ex-btn-sec" data-action="mixEntregar">Entregar simulado</button>`:''}</div></section>`;
}
function mixTick(){
  const terminou=mixVerificarPrazo();if(terminou&&_mixAberto==='geral')renderMixCpror();
  const el=document.getElementById('mixRelogio');if(el&&STATE.provaMistaCpror&&!STATE.provaMistaCpror.resultado)el.textContent=mixTempo(STATE.provaMistaCpror);
}
if(typeof window!=='undefined'&&typeof window.addEventListener==='function'){
  setInterval(mixTick,1000);window.addEventListener('focus',mixTick);document.addEventListener('visibilitychange',mixTick);
}
