const test=require('node:test'),assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..');
const MATS=[
 {mat:'Prospecção e relacionamento com a pessoa investidora',qtd:9},
 {mat:'Análise de informações do cliente',qtd:9},
 {mat:'Indicação de investimentos',qtd:18},
 {mat:'Análise de portfólio e monitoramento da carteira',qtd:9}
];
function setup(){
 let agora=Date.parse('2026-09-24T10:00:00Z');
 class Clock extends Date{constructor(...a){super(...(a.length?a:[agora]));}static now(){return agora;}}
 const banco=MATS.flatMap((m,mi)=>Array.from({length:40},(_,i)=>({mat:m.mat,top:'T'+i,q:{id:'m'+mi+'q'+i,nivel:2,usar_em:['simulado'],enunciado:'Enunciado',alternativas:{a:'A',b:'B',c:'C',d:'D'},gabarito:'a',comentario:'Comentário'}})));
 const el={innerHTML:'',textContent:''},registros=[],cardOpts=[];
 const c=vm.createContext({Date:Clock,setInterval:()=>0,window:{scrollTo(){},addEventListener(){}},document:{addEventListener(){},getElementById:()=>el},
  STATE:{prefeitura:'cproRAnbima',dias:{},revisoesResultados:{}},PROVA_CPROR_MATERIAS:MATS,provaBanco:()=>banco,
  _embaralhar:a=>a.slice(),esc:s=>String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;'),_exNivelLabel:()=> 'Médio',provaTexto:s=>String(s),
  revResultadoHtml:()=>'',buildStatusCard:o=>{cardOpts.push(o);return `<section>${o.titulo}${o.bodyHtml}</section>`;},showToast(){},confirm:()=>true,save(){},navTo(){},renderSimuladoPage(){},_provaAberta:false,
  fmt:d=>d.toISOString().slice(0,10),registrarResposta:(...x)=>registros.push(x),_carimbarRegistro(){},
  _confirmarRefazer:()=>true,revResultadoId:b=>'mini:'+b.key,_topKeysDoBloco:b=>b.topicos.map(t=>t.key).filter(Boolean),
  _simPlanoBase:b=>({grupos:[{mat:b.topicos[0].mat,top:b.topicos[0].top,itens:b.itens}],disponiveis:b.itens.length,limite:30,total:Math.min(30,b.itens.length)}),
  _simSortear:(g,l)=>g.flatMap(x=>x.itens).slice(0,l)});
 vm.runInContext(fs.readFileSync(path.join(root,'conteudo/atendimentos-cpror.js'),'utf8'),c);
 vm.runInContext(fs.readFileSync(path.join(root,'js/simulados-cpror.js'),'utf8'),c);
 return {c,el,banco,registros,cardOpts,run:s=>vm.runInContext(s,c),advance:ms=>agora+=ms};
}
function responderCaso(h,s,casoId,pesos){
 const token='a:'+casoId,cs=s.casos[casoId],caso=h.c.window.ATENDIMENTOS_CPROR.find(c=>c.id===casoId);
 for(let i=0;i<6;i++){
  const n=caso.nos[cs.no],op=n.opcoes.find(o=>o.peso===pesos[i]);
  h.c.mixCasoEscolher(token,cs.no,op.id);h.c.mixCasoConfirmar(token,cs.no);
 }
}
test('Revisão Geral soma 36 tradicionais e três blocos de três, total 45',()=>{
 const h=setup();h.run('mixGeralIniciar()');const s=h.c.STATE.provaMistaCpror,itens=h.c.mixItens(s);
 assert.equal(itens.length,45);assert.equal(itens.filter(x=>x.tipo==='questao').length,36);
 assert.equal(itens.filter(x=>x.tipo==='arvore').length,3);assert.equal(itens.filter(x=>x.tipo==='casoQuestao').length,6);
 for(const m of MATS)assert.equal(itens.filter(x=>x.mat===m.mat).length,m.qtd);
 assert.equal(new Set(itens.map(x=>x.token)).size,45);assert.equal(h.c.mixTempo(s),'02:30:00');
});
test('seis melhores respostas valem um ponto; qualquer decisão inferior zera somente a árvore',()=>{
 const h=setup();h.run('mixGeralIniciar()');const s=h.c.STATE.provaMistaCpror,casoId=Object.keys(s.casos)[0];
 responderCaso(h,s,casoId,[5,5,5,5,5,5]);assert.equal(s.respostas['a:'+casoId],'ok');
 const q1='c:'+casoId+':q1',q2='c:'+casoId+':q2',caso=h.c.window.ATENDIMENTOS_CPROR.find(c=>c.id===casoId);
 h.c.mixResponder(q1,caso.nos.q1.correta);h.c.mixResponder(q2,caso.nos.q2.correta);
 assert.equal([h.c.mixResolverToken('a:'+casoId),h.c.mixResolverToken(q1),h.c.mixResolverToken(q2)].filter(it=>h.c.mixAcertou(s,it)).length,3);
 const h2=setup();h2.run('mixGeralIniciar()');const s2=h2.c.STATE.provaMistaCpror,id2=Object.keys(s2.casos)[0];
 responderCaso(h2,s2,id2,[5,5,3,5,5,5]);assert.equal(s2.respostas['a:'+id2],'erro');
});
test('mini usa 27 tradicionais e um bloco relacionado aos tópicos estudados',()=>{
 const h=setup(),caso=h.c.window.ATENDIMENTOS_CPROR[0],itens=h.banco.filter(x=>x.mat===caso.materia).slice(0,27);
 const bloco={tipo:'mini',key:'2026-09-24',topicos:[{mat:caso.materia,top:caso.topicos[0],key:'2026-09-01'}],itens};
 h.c.mixMiniIniciar(bloco);const s=h.c.STATE.miniMistoCpror,lista=h.c.mixItens(s);
 assert.equal(lista.length,30);assert.equal(lista.filter(x=>x.tipo==='questao').length,27);assert.equal(lista.filter(x=>x.caso?.id===caso.id).length,3);
});
test('caso adaptado do anexo está identificado e vinculado a temas da C-Pro R',()=>{
 const h=setup(),c=h.c.window.ATENDIMENTOS_CPROR.find(x=>x.id==='cpror-at-04');
 assert.ok(c.fonte.includes('ANBIMA'));assert.equal(c.materia,'Indicação de investimentos');assert.equal(c.decisoesArvore,6);assert.equal(c.questoesSimulado,3);assert.equal(c.nos.q1.tipo,'multipla');assert.equal(c.nos.q2.tipo,'multipla');
});
test('caso oficial da C-Pro R está classificado em suitability e possui duas objetivas autorais',()=>{
 const h=setup(),c=h.c.window.ATENDIMENTOS_CPROR.find(x=>x.id==='cpror-at-05');
 assert.ok(c.fonte.includes('Questões interativas C-Pro R da ANBIMA'));
 assert.equal(c.materia,'Prospecção e relacionamento com a pessoa investidora');
 assert.ok(c.topicos.includes('Suitability: verificação, impedimentos e ordem do cliente'));
 assert.equal(c.decisoesArvore,6);assert.equal(c.questoesSimulado,3);
 assert.equal(c.nos.q1.tipo,'multipla');assert.equal(c.nos.q2.tipo,'multipla');
});
test('correção final usa 45 como denominador e não registra as seis decisões como questões separadas',()=>{
 const h=setup();h.run('mixGeralIniciar()');const s=h.c.STATE.provaMistaCpror;
 h.c.mixItens(s).filter(x=>x.tipo==='questao').forEach(it=>s.respostas[it.token]=it.q.gabarito);
 for(const id of Object.keys(s.casos)){
  responderCaso(h,s,id,[5,5,5,5,5,5]);const caso=h.c.window.ATENDIMENTOS_CPROR.find(c=>c.id===id);
  s.respostas['c:'+id+':q1']=caso.nos.q1.correta;s.respostas['c:'+id+':q2']=caso.nos.q2.correta;
 }
 h.c.mixFinalizar(s,false);assert.equal(s.resultado.total,45);assert.equal(s.resultado.acertos,45);assert.equal(s.resultado.nota,'10.0');assert.equal(h.registros.length,36);
});
test('card da Revisão Geral usa a sanfona e as cores dos minis; resultado oferece Sair',()=>{
 const h=setup();h.c.mixCartaoHtml();const o=h.cardOpts[0];
 assert.equal(o.collapsible,true);assert.equal(o.startOpen,false);assert.equal(o.destaque,false);
 h.run('mixGeralIniciar();mixFinalizar(STATE.provaMistaCpror,false);_mixAberto="geral";renderMixCpror()');
 assert.ok(h.el.innerHTML.includes('>Sair</button>'));
});
