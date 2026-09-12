const test=require('node:test'),assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs'),path=require('node:path');
const ui=fs.readFileSync(path.join(__dirname,'../js/ui.js'),'utf8');
const code=ui.slice(ui.indexOf('/* Revisão guiada:'));
function setup(){
 const bloco={num:1,key:'2026-09-09',topicos:[{mat:'A',top:'a'},{mat:'B',top:'b'}]};
 const chamadas=[],toasts=[],campos=[{value:'2',focus(){}},{value:'1',focus(){}}];
 const c=vm.createContext({STATE:{prefeitura:'demo',inicio:'2026-09-01',dias:{'2026-09-02':{percepcao:'alta'},'2026-09-03':{percepcao:'alta'}}},getTopicosDoDia:k=>({'2026-09-02':[{mat:'A',top:'a'}],'2026-09-03':[{mat:'B',top:'b'}]})[k]||[],fmt:()=> '2026-09-09',esc:s=>String(s).replace(/</g,'&lt;'),buildBlocosRevisao:()=>[bloco],listarQuestoes:(ed,f)=>{chamadas.push(f);return Array.from({length:3},(_,i)=>({mat:f.materia,top:f.topicos[0].top,q:{id:f.materia+i,gabarito:'a'}}));},_embaralhar:a=>a.slice(),document:{getElementById:id=>campos[0]},showToast:s=>toasts.push(s),confirm:()=>true,navTo:p=>{c.pagina=p},window:{scrollTo(){}}});
 vm.runInContext('let _exSessao=null;',c);vm.runInContext(code,c);
 return {c,bloco,campos,chamadas,toasts,run:s=>vm.runInContext(s,c)};
}
test('gera quantidades por matéria apenas dos tópicos planejados',()=>{const h=setup();h.run('revIniciarQuestoes(1)');assert.equal(h.run('_exSessao.itens.length'),4);assert.equal(h.run('_exSessao.itens.filter(x=>x.mat==="A").length'),2);assert.equal(h.chamadas[0].topicos[0].top,'a');assert.equal(h.c.pagina,'exercicios');});
test('não gera revisão futura, vazia ou acima da disponibilidade',()=>{for(const modo of ['futura','vazia','excesso']){const h=setup();if(modo==='futura')h.bloco.isFutura=true;if(modo==='vazia')h.campos.forEach(x=>x.value='');if(modo==='excesso')h.campos[0].value='4';h.run('revIniciarQuestoes(1)');assert.equal(h.run('_exSessao'),null);}});
test('nota só existe após todas as respostas e não é gravada duas vezes',()=>{const h=setup();h.run('revIniciarQuestoes(1);_exSessao.respostas.A0="a"');assert.equal(h.run('revSalvarResultado(_exSessao)'),false);h.run('_exSessao.respostas.A1="b";_exSessao.respostas.B0="a";_exSessao.respostas.B1="a"');assert.equal(h.run('revSalvarResultado(_exSessao)'),true);const r=Object.values(h.c.STATE.revisoesResultados)[0];assert.equal(r.nota,'7.5');assert.equal(r.acertos,3);assert.equal(r.materias[0].pct,50);assert.equal(r.materias[1].pct,100);assert.equal(h.run('revSalvarResultado(_exSessao)'),false);});
test('resultado fica no estado da conta e separa certificação e cronograma',()=>{const h=setup();h.run('revIniciarQuestoes(1);_exSessao.itens.forEach(it=>_exSessao.respostas[it.q.id]="a");revSalvarResultado(_exSessao)');const key=Object.keys(h.c.STATE.revisoesResultados)[0];h.c.STATE.prefeitura='outra';assert.notEqual(h.run('revResultadoId(buildBlocosRevisao()[0])'),key);h.c.STATE={prefeitura:'demo',inicio:'2026-09-01',dias:{}};assert.equal(h.run('revConfiguracaoHtml(buildBlocosRevisao()[0]).includes("Último resultado")'),false);});
test('matéria sem banco não oferece quantidade ativa',()=>{const h=setup();h.c.listarQuestoes=()=>[];const html=h.run('revConfiguracaoHtml(buildBlocosRevisao()[0])');assert.ok(html.includes('Ainda não há questões'));assert.ok(html.includes(' disabled'));});

test('apagar histórico do período remove a nota correspondente e preserva anteriores',()=>{
 const c=vm.createContext({STATE:{questoes:{},exDias:{},revisoesResultados:{hoje:{dia:'2026-09-09'},antes:{dia:'2026-08-01'}},dias:{conteudo:true}}});
 vm.runInContext(fs.readFileSync(path.join(__dirname,'../js/engine.js'),'utf8'),c);
 assert.equal(vm.runInContext('apagarHistoricoExercicios("hoje","2026-09-09")',c),true);
 assert.equal(c.STATE.revisoesResultados.hoje,undefined);assert.ok(c.STATE.revisoesResultados.antes);assert.equal(c.STATE.dias.conteudo,true);
});

test('quantidade 1 gera uma questão de cada matéria',()=>{const h=setup();h.campos[0].value='1';h.run('revIniciarQuestoes(1)');assert.equal(h.run('_exSessao.itens.length'),2);assert.equal(h.run('_exSessao.itens.filter(x=>x.mat==="A").length'),1);assert.equal(h.run('_exSessao.itens.filter(x=>x.mat==="B").length'),1);});

test('dois tópicos da mesma matéria recebem duas questões cada, sem duplicar tópico repetido',()=>{
 const h=setup();h.bloco.topicos=[{mat:'Produtos',top:'Órgãos normativos'},{mat:'Produtos',top:'Supervisão'},{mat:'Produtos',top:'Órgãos normativos'}];
 h.c.listarQuestoes=(ed,f)=>Array.from({length:3},(_,i)=>({mat:f.materia,top:f.topicos[0].top,q:{id:f.topicos[0].top+i,gabarito:'a'}}));
 h.run('revIniciarQuestoes(1)');assert.equal(h.run('_exSessao.itens.length'),4);
 assert.equal(h.run('_exSessao.itens.filter(x=>x.top==="Órgãos normativos").length'),2);
 assert.equal(h.run('_exSessao.itens.filter(x=>x.top==="Supervisão").length'),2);
 const html=h.run('revConfiguracaoHtml(buildBlocosRevisao()[0])');assert.ok(html.includes('Quantas questões por tópico?'));assert.ok(html.includes('Órgãos normativos'));
});
test('tópico sem banco é informado e não recebe questões de outro assunto',()=>{
 const h=setup();h.c.listarQuestoes=(ed,f)=>f.topicos[0].top==='a'?[{mat:'A',top:'a',q:{id:'a1',gabarito:'a'}}]:[];h.campos[0].value='1';
 h.run('revIniciarQuestoes(1)');assert.equal(h.run('_exSessao.itens.length'),1);assert.ok(h.run('revConfiguracaoHtml(buildBlocosRevisao()[0])').includes('(não entra na sessão)'));
});

test('mini simulado é montado pelo sistema, sem escolha de quantidade',()=>{
 const h=setup();h.c.STATE.prova='2026-10-01';h.c.isSimuladoDay=()=>true;h.c.getSimuladoInfo=()=>({topicos:h.bloco.topicos});
 h.run('miniIniciarQuestoes("2026-09-09")');
 assert.equal(h.run('_exSessao.itens.length'),6);
 h.run('_exSessao.itens.forEach(it=>_exSessao.respostas[it.q.id]="a");revSalvarResultado(_exSessao)');
 assert.equal(h.c.STATE.dias['2026-09-09'].simuladoScore,100);assert.equal(h.c.STATE.dias['2026-09-09'].simuladoFeito,true);
 assert.ok(h.c.STATE.dias['2026-09-09'].simuladoResultadoId.includes('mini:'));
 const html=h.run('miniConfiguracaoHtml("2026-09-09")');
 assert.ok(html.includes('data-action="miniIniciarQuestoes"'));
 assert.ok(!html.includes('Quantas questões por tópico?'));
 assert.ok(html.includes('6 questões'));
 assert.ok(html.includes('12 minutos'));
});
test('mini simulado corta em 30 questões e reveza entre os tópicos',()=>{
 const h=setup();h.c.STATE.prova='2026-10-01';h.c.isSimuladoDay=()=>true;h.c.getSimuladoInfo=()=>({topicos:h.bloco.topicos});
 h.c.listarQuestoes=(ed,f)=>Array.from({length:40},(_,i)=>({mat:f.materia,top:f.topicos[0].top,q:{id:f.materia+i,gabarito:'a'}}));
 h.run('miniIniciarQuestoes("2026-09-09")');
 assert.equal(h.run('_exSessao.itens.length'),30);
 assert.equal(h.run('_exSessao.itens.filter(x=>x.mat==="A").length'),15);
 assert.equal(h.run('_exSessao.itens.filter(x=>x.mat==="B").length'),15);
 assert.equal(h.run('new Set(_exSessao.itens.map(it=>it.q.id)).size'),30);
});
test('banco menor que o limite entra inteiro e a tela avisa o tamanho',()=>{
 const h=setup();h.c.STATE.prova='2026-10-01';h.c.isSimuladoDay=()=>true;h.c.getSimuladoInfo=()=>({topicos:h.bloco.topicos});
 h.c.listarQuestoes=(ed,f)=>f.materia==='A'?[{mat:'A',top:'a',q:{id:'a1',gabarito:'a'}}]:[];
 const html=h.run('miniConfiguracaoHtml("2026-09-09")');
 assert.ok(html.includes('1 questão'));
 assert.ok(html.includes('comporta até 30'));
 h.run('miniIniciarQuestoes("2026-09-09")');
 assert.equal(h.run('_exSessao.itens.length'),1);
});
test('simulado sem banco nenhum não inicia e explica o registro manual',()=>{
 const h=setup();h.c.STATE.prova='2026-10-01';h.c.isSimuladoDay=()=>true;h.c.getSimuladoInfo=()=>({topicos:h.bloco.topicos});
 h.c.listarQuestoes=()=>[];
 const html=h.run('miniConfiguracaoHtml("2026-09-09")');
 assert.ok(html.includes('Ainda não há questões publicadas'));assert.ok(html.includes(' disabled'));
 h.run('miniIniciarQuestoes("2026-09-09")');
 assert.equal(h.run('_exSessao'),null);
});
test('revisão geral sorteia de todo o edital, limita em 50 e grava no dia',()=>{
 const h=setup();h.c.STATE.prova='2026-10-01';
 h.c.getMaterias=()=>[{nome:'A'},{nome:'B'}];h.c.getTopicos=()=>({A:['a'],B:['b']});
 h.c.listarQuestoes=(ed,f)=>Array.from({length:40},(_,i)=>({mat:f.materia,top:f.topicos[0].top,q:{id:f.materia+i,gabarito:'a'}}));
 h.run('rgIniciarQuestoes("2026-09-09")');
 assert.equal(h.run('_exSessao.itens.length'),50);
 assert.equal(h.run('_exSessao.revisao.tipo'),'geral');
 h.run('_exSessao.itens.forEach(it=>_exSessao.respostas[it.q.id]="a");revSalvarResultado(_exSessao)');
 const dia=h.c.STATE.dias['2026-09-09'];
 assert.equal(dia.revisaoGeralFeita,true);assert.equal(dia.revisaoGeralScore,100);
 assert.ok(dia.revisaoGeralResultadoId.includes('geral:'));
 assert.equal(dia.simuladoFeito,undefined);
});
test('revisão geral e mini do mesmo dia não dividem a mesma nota',()=>{
 const h=setup();h.c.STATE.prova='2026-10-01';h.c.isSimuladoDay=()=>true;h.c.getSimuladoInfo=()=>({topicos:h.bloco.topicos});
 h.c.getMaterias=()=>[{nome:'A'},{nome:'B'}];h.c.getTopicos=()=>({A:['a'],B:['b']});
 const idMini=h.run('revResultadoId(miniBloco("2026-09-09"))');
 const idGeral=h.run('revResultadoId(rgBloco("2026-09-09"))');
 assert.notEqual(idMini,idGeral);
});
test('simulado futuro com revisão pendente não inicia e mostra só o que está previsto',()=>{
 const h=setup();h.c.STATE.prova='2026-10-01';h.c.isSimuladoDay=()=>true;h.bloco.isFutura=true;
 h.c.getSimuladoInfo=()=>({topicos:h.bloco.topicos,revNums:[1]});
 h.c.getMaterias=()=>[{nome:'A'},{nome:'B'}];h.c.getTopicos=()=>({A:['a'],B:['b']});
 h.run('miniIniciarQuestoes("2026-09-10")');assert.equal(h.run('_exSessao'),null);
 h.run('rgIniciarQuestoes("2026-09-10")');assert.equal(h.run('_exSessao'),null);
 const html=h.run('rgConfiguracaoHtml("2026-09-10")');
 assert.ok(html.includes('Abre na data planejada'));
 assert.ok(!html.includes('data-action="rgIniciarQuestoes"'));
});
test('simulado futuro abre antes da data quando as revisões que ele cobre já estão liberadas',()=>{
 const h=setup();h.c.STATE.prova='2026-10-01';h.c.isSimuladoDay=()=>true;h.bloco.isFutura=false;
 h.c.getSimuladoInfo=()=>({topicos:h.bloco.topicos,revNums:[1]});
 h.c.getMaterias=()=>[{nome:'A'},{nome:'B'}];h.c.getTopicos=()=>({A:['a'],B:['b']});
 h.run('miniIniciarQuestoes("2026-09-10")');assert.equal(h.run('_exSessao.itens.length'),6);
 h.run('_exSessao=null;rgIniciarQuestoes("2026-09-10")');assert.equal(h.run('_exSessao.itens.length'),6);
 assert.ok(h.run('miniConfiguracaoHtml("2026-09-10")').includes('data-action="miniIniciarQuestoes"'));
});
test('sem revisão nenhuma identificada, o simulado futuro continua preso à data',()=>{
 const h=setup();h.c.STATE.prova='2026-10-01';h.c.isSimuladoDay=()=>true;h.bloco.isFutura=false;
 h.c.getSimuladoInfo=()=>({topicos:h.bloco.topicos});
 h.run('miniIniciarQuestoes("2026-09-10")');assert.equal(h.run('_exSessao'),null);
});
test('excluir histórico remove nota automática de mini mas preserva registro externo',()=>{
 const c=vm.createContext({STATE:{questoes:{},exDias:{},revisoesResultados:{mini:{dia:'2026-09-09'}},dias:{automatico:{simuladoResultadoId:'mini',simuladoFeito:true,simuladoScore:80,lido:true},externo:{simuladoFeito:true,simuladoScore:70}}}});
 vm.runInContext(fs.readFileSync(path.join(__dirname,'../js/engine.js'),'utf8'),c);vm.runInContext('apagarHistoricoExercicios("hoje","2026-09-09")',c);
 assert.equal(c.STATE.dias.automatico.simuladoFeito,undefined);assert.equal(c.STATE.dias.automatico.lido,true);assert.equal(c.STATE.dias.externo.simuladoScore,70);
});
test('tópico não avaliado não entra no simulado',()=>{
 const h=setup();h.c.STATE.prova='2026-10-01';h.c.isSimuladoDay=()=>true;
 h.c.getSimuladoInfo=()=>({topicos:h.bloco.topicos,revNums:[1]});
 delete h.c.STATE.dias['2026-09-03'];
 h.run('miniIniciarQuestoes("2026-09-09")');
 assert.equal(h.run('_exSessao.itens.length'),3);
 assert.equal(h.run('_exSessao.itens.every(x=>x.mat==="A")'),true);
});
test('sem nenhum tópico avaliado, o simulado explica o que falta e não inicia',()=>{
 const h=setup();h.c.STATE.prova='2026-10-01';h.c.isSimuladoDay=()=>true;
 h.c.getSimuladoInfo=()=>({topicos:h.bloco.topicos,revNums:[1]});
 h.c.STATE.dias={};
 const html=h.run('miniConfiguracaoHtml("2026-09-09")');
 assert.ok(html.includes('Nenhum tópico deste simulado foi estudado'));
 assert.ok(!html.includes('data-action="miniIniciarQuestoes"'));
 h.run('miniIniciarQuestoes("2026-09-09")');
 assert.equal(h.run('_exSessao'),null);
});
test('a revisão geral também só usa o que foi estudado',()=>{
 const h=setup();h.c.STATE.prova='2026-10-01';
 h.c.getMaterias=()=>[{nome:'A'},{nome:'B'},{nome:'C'}];
 h.c.getTopicos=()=>({A:['a'],B:['b'],C:['c']});
 h.run('rgIniciarQuestoes("2026-09-09")');
 assert.equal(h.run('_exSessao.itens.length'),6);
 assert.equal(h.run('_exSessao.itens.some(x=>x.mat==="C")'),false);
});
