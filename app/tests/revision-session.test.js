const test=require('node:test'),assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs'),path=require('node:path');
const ui=fs.readFileSync(path.join(__dirname,'../js/ui.js'),'utf8');
const code=ui.slice(ui.indexOf('/* Revisão guiada:'));
function setup(){
 const bloco={num:1,key:'2026-09-09',topicos:[{mat:'A',top:'a'},{mat:'B',top:'b'}]};
 const chamadas=[],toasts=[],campos=[{value:'2',focus(){}},{value:'1',focus(){}}];
 const c=vm.createContext({STATE:{prefeitura:'demo',inicio:'2026-09-01',dias:{'2026-09-02':{percepcao:'alta'},'2026-09-03':{percepcao:'alta'}}},getTopicosDoDia:k=>({'2026-09-02':[{mat:'A',top:'a'}],'2026-09-03':[{mat:'B',top:'b'}]})[k]||[],fmt:()=> '2026-09-09',esc:s=>String(s).replace(/</g,'&lt;'),buildBlocosRevisao:()=>[bloco],listarQuestoes:(ed,f)=>{chamadas.push(f);return Array.from({length:3},(_,i)=>({mat:f.materia,top:f.topicos[0].top,q:{id:f.materia+i,gabarito:'a'}}));},_embaralhar:a=>a.slice(),document:{getElementById:id=>campos[0]},showToast:s=>toasts.push(s),confirm:()=>true,navTo:p=>{c.pagina=p},window:{scrollTo(){}},hist:{},statusQuestao:id=>c.hist[id]||null});
 vm.runInContext('let _exSessao=null;',c);vm.runInContext(code,c);
 return {c,bloco,campos,chamadas,toasts,run:s=>vm.runInContext(s,c)};
}
test('a sessão traz uma questão de cada tópico planejado do bloco',()=>{const h=setup();h.run('revIniciarQuestoes(1)');assert.equal(h.run('_exSessao.itens.length'),2);assert.equal(h.run('_exSessao.itens.filter(x=>x.mat==="A").length'),1);assert.equal(h.chamadas[0].topicos[0].top,'a');assert.equal(h.c.pagina,'exercicios');});
test('não gera revisão futura nem revisão sem banco',()=>{for(const modo of ['futura','vazia']){const h=setup();if(modo==='futura')h.bloco.isFutura=true;if(modo==='vazia')h.c.listarQuestoes=()=>[];h.run('revIniciarQuestoes(1)');assert.equal(h.run('_exSessao'),null);}});
test('nota só existe após todas as respostas e não é gravada duas vezes',()=>{const h=setup();h.run('revIniciarQuestoes(1);_exSessao.respostas[_exSessao.itens[0].q.id]="a"');assert.equal(h.run('revSalvarResultado(_exSessao)'),false);h.run('_exSessao.respostas[_exSessao.itens[1].q.id]="z"');assert.equal(h.run('revSalvarResultado(_exSessao)'),true);const r=Object.values(h.c.STATE.revisoesResultados)[0];assert.equal(r.nota,'5.0');assert.equal(r.acertos,1);assert.equal(r.materias.length,2);assert.equal(h.run('revSalvarResultado(_exSessao)'),false);});
test('resultado fica no estado da conta e separa certificação e cronograma',()=>{const h=setup();h.run('revIniciarQuestoes(1);_exSessao.itens.forEach(it=>_exSessao.respostas[it.q.id]="a");revSalvarResultado(_exSessao)');const key=Object.keys(h.c.STATE.revisoesResultados)[0];h.c.STATE.prefeitura='outra';assert.notEqual(h.run('revResultadoId(buildBlocosRevisao()[0])'),key);h.c.STATE={prefeitura:'demo',inicio:'2026-09-01',dias:{}};assert.equal(h.run('revConfiguracaoHtml(buildBlocosRevisao()[0]).includes("Último resultado")'),false);});
test('matéria sem banco desabilita o botão e explica o motivo',()=>{const h=setup();h.c.listarQuestoes=()=>[];const html=h.run('revConfiguracaoHtml(buildBlocosRevisao()[0])');assert.ok(html.includes('Ainda não há questões'));assert.ok(html.includes(' disabled'));});

test('apagar histórico do período remove a nota correspondente e preserva anteriores',()=>{
 const c=vm.createContext({STATE:{questoes:{},exDias:{},revisoesResultados:{hoje:{dia:'2026-09-09'},antes:{dia:'2026-08-01'}},dias:{conteudo:true}}});
 vm.runInContext(fs.readFileSync(path.join(__dirname,'../js/engine.js'),'utf8'),c);
 assert.equal(vm.runInContext('apagarHistoricoExercicios("hoje","2026-09-09")',c),true);
 assert.equal(c.STATE.revisoesResultados.hoje,undefined);assert.ok(c.STATE.revisoesResultados.antes);assert.equal(c.STATE.dias.conteudo,true);
});

/* ── A revisão passou a ser montada pelo sistema (20/09/2026) ──
   O campo "quantas questões por tópico" saiu. Estes três testes cobrem o
   que entrou no lugar: o limite do formato, o rodízio entre os tópicos e
   o aviso de que a revisão não passa por todos os assuntos. */
test('o tamanho da sessão é o número de tópicos do ciclo, sem teto',()=>{
 const h=setup();h.bloco.topicos=Array.from({length:22},(_,i)=>({mat:'M'+(i%3),top:'t'+i}));
 h.c.listarQuestoes=(ed,f)=>Array.from({length:20},(_,i)=>({mat:f.materia,top:f.topicos[0].top,q:{id:f.topicos[0].top+'-'+i,gabarito:'a'}}));
 h.run('revIniciarQuestoes(1)');
 assert.equal(h.run('_exSessao.itens.length'),22);
 assert.equal(h.run('new Set(_exSessao.itens.map(x=>x.top)).size'),22);
 assert.equal(h.run('new Set(_exSessao.itens.map(x=>x.mat)).size'),3);
});

test('tópico de banco grande e tópico de banco pequeno entram com uma questão cada',()=>{
 const h=setup();
 h.c.listarQuestoes=(ed,f)=>{const n=f.materia==='A'?30:1;return Array.from({length:n},(_,i)=>({mat:f.materia,top:f.topicos[0].top,q:{id:f.materia+i,gabarito:'a'}}));};
 h.run('revIniciarQuestoes(1)');
 assert.equal(h.run('_exSessao.itens.length'),2);
 assert.equal(h.run('_exSessao.itens.filter(x=>x.mat==="B").length'),1);
});

/* Refazer sem repetir (20/09/2026): quem decide a questão dentro do tópico
   é o histórico de respostas, então a segunda tentativa vem diferente sem
   guardar nada de novo. */
test('refazer traz questões diferentes das que o aluno já respondeu',()=>{
 const h=setup();
 h.run('revIniciarQuestoes(1)');
 const primeira=h.run('_exSessao.itens.map(x=>x.q.id).join(",")').split(',');
 primeira.forEach(id=>{h.c.hist[id]={n:1,ultima:'2026-09-09'};});
 h.run('_exSessao=null;revIniciarQuestoes(1)');
 const segunda=h.run('_exSessao.itens.map(x=>x.q.id).join(",")').split(',');
 assert.equal(segunda.length,2);
 assert.equal(segunda.filter(id=>primeira.includes(id)).length,0);
});

test('banco do tópico esgotado repete a questão mais antiga em vez de deixar o tópico de fora',()=>{
 const h=setup();
 h.c.listarQuestoes=(ed,f)=>Array.from({length:2},(_,i)=>({mat:f.materia,top:f.topicos[0].top,q:{id:f.materia+i,gabarito:'a'}}));
 h.c.hist={A0:{n:1,ultima:'2026-09-01'},A1:{n:1,ultima:'2026-09-08'},B0:{n:2,ultima:'2026-09-02'},B1:{n:1,ultima:'2026-09-07'}};
 h.run('revIniciarQuestoes(1)');
 assert.equal(h.run('_exSessao.itens.length'),2);
 assert.equal(h.run('_exSessao.itens.map(x=>x.q.id).sort().join(",")'),'A0,B1');
});

test('a tela diz o tamanho da sessão, a regra de uma por tópico e o que fazer ao errar',()=>{
 const html=setup().run('revConfiguracaoHtml(buildBlocosRevisao()[0])');
 assert.ok(html.includes('<strong>2 questões</strong>'));
 assert.ok(html.includes('um dos 2 tópicos do ciclo'));
 assert.ok(html.includes('nas 2 matérias que você estudou'));
 assert.ok(html.includes('uma questão por tópico'));
 assert.ok(html.includes('volte ao conteúdo'));
 assert.ok(html.includes('Ao refazer'));
 assert.ok(!html.includes('Quantas questões por tópico'));
});

/* A garantia que o dono pediu em 20/09: matéria estudada aparece na
   revisão, mesmo quando o ciclo tem mais tópicos do que cabe na sessão. */
test('matéria de um tópico só entra igual, ao lado de matéria de quinze tópicos',()=>{
 const h=setup();
 h.bloco.topicos=Array.from({length:15},(_,i)=>({mat:'A',top:'a'+i})).concat([{mat:'B',top:'b'}]);
 h.c.listarQuestoes=(ed,f)=>Array.from({length:3},(_,i)=>({mat:f.materia,top:f.topicos[0].top,q:{id:f.topicos[0].top+'-'+i,gabarito:'a'}}));
 h.run('revIniciarQuestoes(1)');
 assert.equal(h.run('_exSessao.itens.length'),16);
 assert.equal(h.run('_exSessao.itens.filter(x=>x.mat==="B").length'),1);
 assert.equal(h.run('new Set(_exSessao.itens.map(x=>x.top)).size'),16);
});

test('tópico repetido no bloco não vira duas entradas na sessão',()=>{
 const h=setup();h.bloco.topicos=[{mat:'Produtos',top:'Órgãos normativos'},{mat:'Produtos',top:'Supervisão'},{mat:'Produtos',top:'Órgãos normativos'}];
 h.c.listarQuestoes=(ed,f)=>Array.from({length:3},(_,i)=>({mat:f.materia,top:f.topicos[0].top,q:{id:f.topicos[0].top+i,gabarito:'a'}}));
 h.run('revIniciarQuestoes(1)');assert.equal(h.run('_exSessao.itens.length'),2);
 assert.equal(h.run('_exSessao.itens.filter(x=>x.top==="Órgãos normativos").length'),1);
 assert.equal(h.run('_exSessao.itens.filter(x=>x.top==="Supervisão").length'),1);
 const html=h.run('revConfiguracaoHtml(buildBlocosRevisao()[0])');assert.ok(html.includes('Órgãos normativos'));
});
test('tópico sem banco é informado e não recebe questões de outro assunto',()=>{
 const h=setup();h.c.listarQuestoes=(ed,f)=>f.topicos[0].top==='a'?[{mat:'A',top:'a',q:{id:'a1',gabarito:'a'}}]:[];
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
/* ── Registro automático ao fim da revisão e do simulado (19/09/2026) ──
   Antes, terminar as questões salvava só a nota: o aluno ainda tinha de
   marcar tópico a tópico que havia revisado, e o dia não entrava no
   histórico do cronograma. */
function setupComChaves(){
 const h=setup();
 h.bloco.topicos=[{mat:'A',top:'a',key:'2026-09-02'},{mat:'B',top:'b',key:'2026-09-03'}];
 return h;
}

test('revisão concluída grava o dia no cronograma e marca os tópicos como revisados',()=>{
 const h=setupComChaves();
 h.run('revIniciarQuestoes(1)');
 h.run('_exSessao.itens.forEach(it=>_exSessao.respostas[it.q.id]="a");revSalvarResultado(_exSessao)');
 const dia=h.c.STATE.dias['2026-09-09'];
 assert.equal(dia.revisaoFeita,true);
 assert.equal(dia.revisaoScore,100);
 assert.ok(dia.revisaoResultadoId);
 assert.equal(h.c.STATE.dias['2026-09-02'].exRevisao,true);
 assert.equal(h.c.STATE.dias['2026-09-03'].exRevisao,true);
});

test('a sessão carrega as chaves de dia dos tópicos do bloco, sem repetir',()=>{
 const h=setupComChaves();
 h.bloco.topicos.push({mat:'A',top:'a',key:'2026-09-02'});
 h.run('revIniciarQuestoes(1)');
 assert.equal(h.run('_exSessao.revisao.topKeys.join(",")'),'2026-09-02,2026-09-03');
});

test('a Revisão Geral não marca tópico como revisado, porque sorteia do edital inteiro',()=>{
 const h=setupComChaves();
 h.run(`_exSessao={itens:[{mat:'A',top:'a',q:{id:'x',gabarito:'a'}}],i:0,respostas:{x:'a'},
   revisao:{id:'geral:1',num:1,tipo:'geral',key:'2026-09-09',topKeys:['2026-09-02']}};
   revSalvarResultado(_exSessao)`);
 assert.equal(h.c.STATE.dias['2026-09-09'].revisaoGeralFeita,true);
 assert.equal((h.c.STATE.dias['2026-09-02']||{}).exRevisao,undefined);
});

test('refazer substitui a nota anterior e mantém o mesmo id de resultado',()=>{
 const h=setupComChaves();
 h.run('revIniciarQuestoes(1)');
 h.run('_exSessao.itens.forEach(it=>_exSessao.respostas[it.q.id]="a");revSalvarResultado(_exSessao)');
 const id=Object.keys(h.c.STATE.revisoesResultados)[0];
 assert.equal(h.c.STATE.revisoesResultados[id].pct,100);
 h.run('_exSessao=null;revIniciarQuestoes(1)');
 h.run('_exSessao.itens.forEach((it,i)=>_exSessao.respostas[it.q.id]=i?"z":"a");revSalvarResultado(_exSessao)');
 assert.equal(Object.keys(h.c.STATE.revisoesResultados).length,1);
 assert.equal(h.c.STATE.revisoesResultados[id].pct,50);
});

test('com resultado salvo, o botão vira Refazer e a nota fica disponível para a tarja',()=>{
 const h=setupComChaves();
 h.run('revIniciarQuestoes(1)');
 h.run('_exSessao.itens.forEach(it=>_exSessao.respostas[it.q.id]="a");revSalvarResultado(_exSessao)');
 const r=Object.values(h.c.STATE.revisoesResultados)[0];
 assert.equal(r.nota,'10.0');
 const html=h.run('revConfiguracaoHtml(buildBlocosRevisao()[0])');
 assert.ok(html.includes('Refazer a revisão'));
 assert.ok(!html.includes('>Gerar revisão<'));
 assert.ok(html.includes('Último resultado'));
});
