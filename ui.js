/* Homepage: scripts clássicos e interações delegadas, separados do app. */
(function(){
'use strict';
const PRICE='R$ 29,90', CHECKOUT='https://pay.hotmart.com/N106305634J';
const certs=window.CERTIFICACOES_DATA||[];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const clean=s=>String(s||'').replace(/\s*—\s*/g,': ');
let activeCert=0,view='hoje',answered=null,read=false;
const body=document.getElementById('demoBody');
function demo(){
 document.querySelectorAll('[data-action="demoView"]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.view===view)));
 if(view==='hoje')body.innerHTML=`<p class="eyebrow">EXEMPLO DE PREPARAÇÃO CPA</p><h2>Seu foco está aqui.</h2><p>Dois tópicos previstos. Um próximo passo claro.</p><div class="demo-topic"><small>SISTEMA FINANCEIRO NACIONAL</small><strong>Órgãos normativos: CMN, CNSP e CNPC</strong><button type="button" data-action="demoRead">${read?'Conteúdo marcado no exemplo ✓':'Marcar leitura no exemplo'}</button></div><div class="demo-topic"><small>SISTEMA FINANCEIRO NACIONAL</small><strong>Supervisão: Banco Central, CVM, Susep e Previc</strong></div><button class="button primary demo-action" type="button" data-action="demoView" data-view="questoes">Experimentar uma questão →</button>`;
 if(view==='questoes')body.innerHTML=`<p class="eyebrow">UMA AMOSTRA DA PRÁTICA POR TÓPICO</p><h2>Do estudo para a prática.</h2><p>Qual destas atividades você pode fazer na Bússola?</p><div class="demo-answers"><button type="button" class="${answered==='a'?'selected':''}" data-action="demoAnswer" data-answer="a">A. Organizar tópicos e acompanhar o resultado das questões.</button><button type="button" class="${answered==='b'?'selected':''}" data-action="demoAnswer" data-answer="b">B. Emitir automaticamente uma certificação financeira.</button></div>${answered?`<p role="status">${answered==='a'?'Isso mesmo. O plano e a prática ajudam a acompanhar sua preparação.':'A certificação é concedida pela instituição responsável. A Bússola ajuda na preparação.'}</p><button type="button" class="button primary demo-action" data-action="demoView" data-view="resultado">Ver resultado do exemplo →</button>`:'<p>Selecione uma resposta para continuar.</p>'}`;
 if(view==='resultado')body.innerHTML=answered?`<p class="eyebrow">RESULTADO DESTA DEMONSTRAÇÃO</p><h2>Cada resposta vira informação.</h2><div class="demo-score">${answered==='a'?'10':'0'}<span style="font-size:20px"> / 10</span></div><p>${answered==='a'?'1 acerto':'0 acertos'} em 1 questão demonstrativa.</p><div class="demo-topic"><strong>No aplicativo, a visão é completa.</strong><p>Veja sua nota final e o desempenho por matéria nas revisões e nos Mini Simulados.</p></div><button type="button" class="button primary demo-action" data-action="demoReset">Experimentar novamente</button>`:`<p class="eyebrow">ACOMPANHE SUA EVOLUÇÃO</p><h2>Um resultado para orientar o próximo passo.</h2><p>Responda à questão do exemplo para ver uma nota. No aplicativo, seus resultados ficam na sua conta.</p><button class="button primary demo-action" type="button" data-action="demoView" data-view="questoes">Responder ao exemplo →</button>`;
}
function renderCert(){
 const options=document.getElementById('certOptions'),detail=document.getElementById('certDetail');
 if(!certs.length){options.innerHTML='';detail.innerHTML='<h3>Consulte os programas no aplicativo</h3><p>A lista de certificações não está disponível neste momento.</p>';return;}
 options.innerHTML=certs.map((c,i)=>`<button type="button" data-action="cert" data-index="${i}" aria-pressed="${i===activeCert}"><small>${esc(c.organizacao)}</small><strong>${esc(String(c.nome).split('—')[0].trim())}</strong></button>`).join('');
 const c=certs[activeCert];
 detail.innerHTML=`<p class="eyebrow">${esc(c.organizacao)} · ${esc(c.area)}</p><h3>${esc(clean(c.nome))}</h3><p>${esc(clean(c.descricao))}</p><details><summary>Conhecer os ${esc((c.modulos||[]).length)} módulos</summary><ol>${(c.modulos||[]).map(m=>`<li>${esc(clean(m.nome))}</li>`).join('')}</ol></details><a href="#oferta" class="text-link">Conhecer o acesso à Bússola →</a>`;
}
const ACTIONS={
 demoView:d=>{if(!['hoje','questoes','resultado'].includes(d.view))return;view=d.view;demo();body.classList.remove('enter');void body.offsetWidth;body.classList.add('enter');const first=body.querySelector('button');if(first)first.focus({preventScroll:true});},
 demoRead:()=>{read=!read;demo();body.querySelector('[data-action="demoRead"]').focus({preventScroll:true});},
 demoAnswer:d=>{if(!['a','b'].includes(d.answer))return;answered=d.answer;demo();body.querySelector('[data-answer="'+answered+'"]').focus({preventScroll:true});},
 demoReset:()=>{answered=null;view='questoes';demo();body.querySelector('button').focus({preventScroll:true});},
 cert:d=>{const n=Number(d.index);if(!Number.isInteger(n)||!certs[n])return;activeCert=n;renderCert();
  const menu=document.getElementById('navCertsMenu');
  if(menu&&!menu.hidden){menu.hidden=true;document.querySelector('[data-action="abrirCerts"]').setAttribute('aria-expanded','false');}
  document.querySelector('#certOptions [aria-pressed="true"]').focus({preventScroll:true});},
 checkout:()=>{}, // link nativo preserva teclado, abertura em aba e funcionamento sem JS.
 /* Menu de certificacoes no cabecalho (12/09/2026). A lista sai do mesmo
    dados-site.js que alimenta a secao, entao nunca fica defasada. Sem JS o
    botao simplesmente nao abre, e os links da pagina continuam levando a
    secao de certificacoes. */
 /* Menu do celular. As tres secoes e o acesso do aluno moram aqui, para o
    cabecalho ficar com a marca, um botao e o tres-tracos. */
 abrirMenu:()=>{
  const btn=document.querySelector('[data-action="abrirMenu"]'),menu=document.getElementById('menuMobile');
  if(!btn||!menu)return;
  const abrir=menu.hidden;
  menu.hidden=!abrir;btn.setAttribute('aria-expanded',String(abrir));
  btn.setAttribute('aria-label',abrir?'Fechar menu':'Abrir menu');
 },
 abrirCerts:()=>{
  const btn=document.querySelector('[data-action="abrirCerts"]'),menu=document.getElementById('navCertsMenu');
  if(!btn||!menu)return;
  const abrir=menu.hidden;
  menu.hidden=!abrir;btn.setAttribute('aria-expanded',String(abrir));
 }
};
document.addEventListener('click',e=>{const el=e.target.closest('[data-action]');if(el&&ACTIONS[el.dataset.action])ACTIONS[el.dataset.action](el.dataset);});
/* Fecha o menu do celular ao escolher uma secao. */
function fecharMenuMobile(){
 const menu=document.getElementById('menuMobile');if(!menu||menu.hidden)return;
 menu.hidden=true;
 const b=document.querySelector('[data-action="abrirMenu"]');
 if(b){b.setAttribute('aria-expanded','false');b.setAttribute('aria-label','Abrir menu');}
}
document.addEventListener('click',e=>{
 if(e.target.closest('#menuMobile a')){fecharMenuMobile();return;}
 if(!e.target.closest('.header')) fecharMenuMobile();
});
/* Fecha o menu do cabecalho ao clicar fora ou com Esc. */
document.addEventListener('click',e=>{
 const menu=document.getElementById('navCertsMenu');if(!menu||menu.hidden)return;
 if(e.target.closest('.nav-drop'))return;
 menu.hidden=true;document.querySelector('[data-action="abrirCerts"]').setAttribute('aria-expanded','false');
});
document.addEventListener('keydown',e=>{
 if(e.key!=='Escape')return;fecharMenuMobile();const menu=document.getElementById('navCertsMenu');if(!menu||menu.hidden)return;
 menu.hidden=true;const b=document.querySelector('[data-action="abrirCerts"]');b.setAttribute('aria-expanded','false');b.focus();
});
document.querySelectorAll('[data-price]').forEach(el=>el.textContent=PRICE);
document.querySelectorAll('[data-action="checkout"]').forEach(el=>el.href=CHECKOUT);
document.getElementById('programLinks').innerHTML=certs.map(c=>`<a href="#certificacoes">${esc(String(c.nome).split('—')[0].trim())}<small>${esc(c.organizacao)}</small></a>`).join('')||'<a href="#certificacoes">Conheça os programas ↓</a>';
/* Popula o menu de certificacoes do cabecalho. Cada item leva a secao e ja
   deixa a certificacao escolhida aberta la embaixo. */
const navMenu=document.getElementById('navCertsMenu');
if(navMenu) navMenu.innerHTML=certs.map((c,i)=>`<a href="#certificacoes" data-action="cert" data-index="${i}"><strong>${esc(String(c.nome).split(/\s+[\u2014-]\s+/)[0].trim())}</strong><small>${esc(c.organizacao)} \u00b7 ${esc(c.area)}</small></a>`).join('')||'<a href="#certificacoes"><strong>Ver os programas</strong><small>NA SE\u00c7\u00c3O DE CERTIFICA\u00c7\u00d5ES</small></a>';
demo();renderCert();
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('enter');observer.unobserve(entry.target);}}),{threshold:.12});document.querySelectorAll('.steps article,.value-list article,.price-card').forEach(el=>observer.observe(el));}
})();
