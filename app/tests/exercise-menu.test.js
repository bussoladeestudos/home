const test=require('node:test'),assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs'),path=require('node:path');
const engine=fs.readFileSync(path.join(__dirname,'../js/engine.js'),'utf8');
function setup(state={dias:{conteudo:{feito:true}}}){const c=vm.createContext({STATE:state});vm.runInContext(engine,c);return {c,state,run:s=>vm.runInContext(s,c)};}
test('excluir hoje preserva respostas anteriores e conteúdo',()=>{
 const h=setup();h.run('registrarResposta("q","a",true,"2026-09-08");registrarResposta("q","b",false,"2026-09-09")');
 assert.equal(h.run('apagarHistoricoExercicios("hoje","2026-09-09")'),true);
 assert.equal(h.state.questoes.q.n,1);assert.equal(h.state.questoes.q.ultimaCerta,true);assert.equal(h.state.exDias['2026-09-09'],undefined);assert.equal(h.state.dias.conteudo.feito,true);
});
test('sete dias inclui hoje e seis anteriores, preservando oitavo dia',()=>{
 const h=setup();for(const d of ['2026-09-02','2026-09-03','2026-09-09'])h.run(`registrarResposta("q","a",true,"${d}")`);
 h.run('apagarHistoricoExercicios("7","2026-09-09")');assert.equal(h.state.questoes.q.n,1);assert.equal(h.state.questoes.q.ultima,'2026-09-02');
});
test('legado ambíguo bloqueia exclusão parcial sem alterações',()=>{
 const state={questoes:{q:{n:4,ok:3,ultima:'2026-09-09'}},exDias:{'2026-09-09':{n:4,ok:3}}};const h=setup(state),before=JSON.stringify(state);
 assert.equal(h.run('apagarHistoricoExercicios("hoje","2026-09-09")'),false);assert.equal(JSON.stringify(state),before);
});
test('resposta nova pode ser apagada preservando legado anterior',()=>{
 const h=setup({questoes:{q:{n:4,ok:3,ultima:'2026-08-01',ultimaCerta:true}},exDias:{'2026-08-01':{n:4,ok:3}}});
 h.run('registrarResposta("q","b",false,"2026-09-09")');assert.equal(h.run('apagarHistoricoExercicios("hoje","2026-09-09")'),true);assert.equal(h.state.questoes.q.n,4);assert.equal(h.state.questoes.q.ultima,'2026-08-01');
});
test('exclusão total limpa legado e detalhamento, somente no estado ativo',()=>{
 const h=setup(),outra={questoes:{q:{n:9}}};h.run('registrarResposta("q","a",true,"2026-09-09");apagarHistoricoExercicios("sempre")');assert.equal(Object.keys(h.state.questoes).length,0);assert.equal(Object.keys(h.state.exDias).length,0);assert.equal(h.state.dias.conteudo.feito,true);assert.equal(outra.questoes.q.n,9);
});
const ui=fs.readFileSync(path.join(__dirname,'../js/ui.js'),'utf8');
function menu(){const c=vm.createContext({STATE:{prefeitura:'demo'},window:{scrollTo(){}},renderExercicios(){},listarQuestoes:(id,f)=>{c.filtro=f;return Array.from({length:15},(_,i)=>({q:{id:String(i)}}));}});vm.runInContext('let _exFiltro={materia:"*",topicos:[],niveis:[],soErradas:false},_exQuantidade=5,_exSessao=null;',c);vm.runInContext(ui.match(/function _exQuantidadeValida\(\)[^\n]*/)[0],c);for(const name of ['_exListar','_embaralhar','exComecar'])vm.runInContext(ui.match(new RegExp('function '+name+'\\([^]*?^}', 'm'))[0],c);return c;}
test('sessão respeita quantidade e não repete questões',()=>{const c=menu();vm.runInContext('exComecar()',c);assert.equal(vm.runInContext('_exSessao.itens.length',c),5);assert.equal(vm.runInContext('new Set(_exSessao.itens.map(x=>x.q.id)).size',c),5);});
test('quantidade maior que banco usa disponíveis e combina tópicos',()=>{const c=menu();vm.runInContext('_exQuantidade=50;_exFiltro.materia="B";_exFiltro.topicos=[{mat:"A",top:"a"},{mat:"B",top:"b"}];exComecar()',c);assert.equal(vm.runInContext('_exSessao.itens.length',c),15);assert.equal(c.filtro.materia,null);assert.equal(c.filtro.topicos.length,2);});

test('quantidade vazia ou inválida não inicia sessão',()=>{for(const v of ['',0,-1,1.5]){const c=menu();c.valor=v;vm.runInContext('_exQuantidade=valor;exComecar()',c);assert.equal(vm.runInContext('_exSessao',c),null);}});
test('voltar à opção vazia limpa os tópicos anteriores',()=>{const c=menu();vm.runInContext('let _exBuscaTop="busca";',c);vm.runInContext(ui.match(/function exSetMateria\([^]*?^}/m)[0],c);vm.runInContext('_exFiltro.topicos=[{mat:"A",top:"a"}];exSetMateria("")',c);assert.equal(vm.runInContext('_exListar().length',c),0);assert.equal(vm.runInContext('_exFiltro.topicos.length',c),0);});

/* ── Filtro "Ainda não respondi" (19/09/2026) ──
   O engine já sabia filtrar por soNaoRespondidas desde que o menu nasceu;
   faltava a tela oferecer. Estes testes cobrem os dois lados. */
function bancoDemo(){
 /* Semeia QUESTOES, nao getQuestoes: o engine define a propria funcao
    getQuestoes e ela sobrescreve qualquer coisa passada no contexto. */
 const c=vm.createContext({STATE:{questoes:{}},
   EDITAIS:{demo:{topicos:{Mat:['Top']}}},
   QUESTOES:{demo:{Mat:{Top:[{id:'q1',nivel:1},{id:'q2',nivel:1},{id:'q3',nivel:1}]}}}});
 vm.runInContext(engine,c);
 return {c,run:s=>vm.runInContext(s,c)};
}

test('só as que ainda não respondi devolve o que nunca teve resposta',()=>{
 const h=bancoDemo();
 h.run('registrarResposta("q1","a",true,"2026-09-09")');
 h.run('registrarResposta("q2","b",false,"2026-09-09")');
 assert.equal(h.run('listarQuestoes("demo",{soNaoRespondidas:true}).map(x=>x.q.id).join(",")'),'q3');
 assert.equal(h.run('listarQuestoes("demo",{soErradas:true}).map(x=>x.q.id).join(",")'),'q2');
 assert.equal(h.run('listarQuestoes("demo",{}).length'),3);
});

test('responder uma questão a tira do filtro de não respondidas',()=>{
 const h=bancoDemo();
 assert.equal(h.run('listarQuestoes("demo",{soNaoRespondidas:true}).length'),3);
 h.run('registrarResposta("q3","a",true,"2026-09-09")');
 assert.equal(h.run('listarQuestoes("demo",{soNaoRespondidas:true}).length'),2);
});

function chips(){
 const c=vm.createContext({renderExercicios(){}});
 vm.runInContext('let _exFiltro={materia:"*",topicos:[],niveis:[],soErradas:false,soNaoRespondidas:false};',c);
 for(const n of ['exToggleErradas','exToggleNovas'])
   vm.runInContext(ui.match(new RegExp('function '+n+'\\([^]*?^}','m'))[0],c);
 return c;
}

test('os dois filtros de histórico se excluem, porque juntos devolveriam zero',()=>{
 const c=chips();
 vm.runInContext('exToggleErradas()',c);
 assert.equal(vm.runInContext('_exFiltro.soErradas',c),true);
 vm.runInContext('exToggleNovas()',c);
 assert.equal(vm.runInContext('_exFiltro.soNaoRespondidas',c),true);
 assert.equal(vm.runInContext('_exFiltro.soErradas',c),false);
 vm.runInContext('exToggleErradas()',c);
 assert.equal(vm.runInContext('_exFiltro.soNaoRespondidas',c),false);
 vm.runInContext('exToggleErradas()',c);
 assert.equal(vm.runInContext('_exFiltro.soErradas',c),false);
 assert.equal(vm.runInContext('_exFiltro.soNaoRespondidas',c),false);
});

test('o filtro novo chega ao engine pela listagem da tela',()=>{
 const c=menu();
 vm.runInContext('_exFiltro.soNaoRespondidas=true;_exListar()',c);
 assert.equal(c.filtro.soNaoRespondidas,true);
});
