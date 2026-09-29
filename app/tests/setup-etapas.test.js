/* Configuração em três etapas (certificação → rotina → prazo).

   O palco tem overflow:hidden e altura escrita em pixel pelo JS: é o que
   impede a etapa vizinha de aparecer de lado. A consequência é que toda
   mudança de altura dentro de uma etapa precisa chamar ajustarAlturaSetup,
   senão o formulário fica cortado sem dar erro nenhum. Os testes aqui
   travam essa ligação e a ordem dos campos.
   Rodar: node --test tests/setup-etapas.test.js */
const test=require("node:test");
const assert=require("node:assert");
const fs=require("fs"), path=require("path");
const read=f=>fs.readFileSync(path.join(__dirname,"..",f),"utf8");
const html=read("index.html"), ui=read("js/ui.js"), css=read("css/app.css");

const etapa=n=>{
  const re=new RegExp('<section class="setup-etapa[^"]*" data-etapa="'+n+'"[\\s\\S]*?</section>');
  const m=html.match(re);
  assert.ok(m,"etapa "+n+" não encontrada no index.html");
  return m[0];
};

test("as três etapas existem, na ordem, e cada campo está na sua",()=>{
  // 1 identidade: nada aqui depende de cálculo
  assert.ok(/id="inputNome"/.test(etapa(1)),"nome vai na etapa 1");
  assert.ok(/id="concursoTrigger"/.test(etapa(1)),"certificação vai na etapa 1");
  assert.ok(/id="cargoRow"/.test(etapa(1)),"cargo vai na etapa 1");
  assert.ok(/id="rowCursinho"/.test(etapa(1)),"cursinho vai na etapa 1");
  // 2 rotina: os três campos que decidem a densidade
  assert.ok(/id="inputInicio"/.test(etapa(2)),"início vai na etapa 2");
  assert.ok(/id="inputHoras"/.test(etapa(2)),"horas vai na etapa 2");
  assert.ok(/id="dowGrid"/.test(etapa(2)),"dias de descanso vão na etapa 2");
  // 3 prazo: a conta, e só ela
  assert.ok(/id="prazoHint"/.test(etapa(3)),"o diagnóstico vai na etapa 3");
  assert.ok(/id="inputProva"/.test(etapa(3)),"data da prova vai na etapa 3");
  assert.ok(!/id="inputInicio"/.test(etapa(3)),"a etapa 3 é de leitura, não repete campo da rotina");
});

test("o botão de salvar só existe na etapa 3",()=>{
  assert.ok(!/btnIniciarBússola/.test(etapa(1)+etapa(2)+etapa(3)),
    "o salvar fica na navegação, fora das etapas");
  assert.ok(/id="btnIniciarBússola"[\s\S]*?style="display:none"/.test(html),
    "ele começa escondido e só aparece na etapa 3");
  assert.ok(/if\(salvar\)\s+salvar\.style\.display=n===SETUP_ETAPAS\?"block":"none"/.test(ui));
});

test("toda mudança de altura dentro de uma etapa remede o palco",()=>{
  // o palco tem overflow:hidden e altura em pixel: sem remedir, corta
  assert.ok(/\.setup-palco \{ overflow:hidden;/.test(css));
  const precisam=[
    ["toggleConcursoDropdown",/function toggleConcursoDropdown\(\)\{[\s\S]*?\n\}/],
    ["closeConcursoDropdown", /function closeConcursoDropdown\(\)\{[\s\S]*?\n\}/],
    ["selecionarPref",        /function selecionarPref\(key, userAction\)\{[\s\S]*?\n\}/],
    ["espelharPrazoRotina",   /function espelharPrazoRotina\(hintEl\)\{[\s\S]*?\n\}/]
  ];
  for(const [nome,re] of precisam){
    const m=ui.match(re);
    assert.ok(m,nome+" não encontrada");
    assert.ok(/ajustarAlturaSetup\(\)/.test(m[0]),
      nome+" muda a altura da etapa e precisa chamar ajustarAlturaSetup");
  }
});

test("o dropdown de certificação entra na conta da altura",()=>{
  const m=ui.match(/function medirEtapaSetup\(el\)\{[\s\S]*?\n\}/);
  assert.ok(m,"medirEtapaSetup não encontrada");
  assert.ok(/concurso-dropdown\.open/.test(m[0]),
    "ele é absolute: sem entrar na medida, o overflow do palco corta a lista");
});

test("aluno novo segue a ordem; aluno configurado usa a trilha como atalho",()=>{
  assert.ok(/_setupNavegavel=hasInicio/.test(ui),
    "a trilha só vira atalho para quem já tem cronograma");
  assert.ok(/trilha\.classList\.toggle\("navegavel",_setupNavegavel\)/.test(ui));
  assert.ok(/b\.disabled=!_setupNavegavel&&n!==_setupEtapa/.test(ui),
    "sem isso o aluno novo pularia a etapa 1 pelo teclado");
});

test("a etapa 3 recalcula o prazo antes de ser medida",()=>{
  const m=ui.match(/function irEtapaSetup\(n,semFoco\)\{[\s\S]*?\n\}/);
  assert.ok(m);
  const i=m[0].indexOf("atualizarPrazoSetup()"), j=m[0].indexOf("ajustarAlturaSetup()");
  assert.ok(i>=0&&j>=0&&i<j,
    "recalcular depois de medir deixaria o palco com a altura do conteúdo antigo");
});

test("o modal sempre abre populado a partir do STATE",()=>{
  // abrir só pela classe deixava o select de horas no primeiro item (1h)
  assert.ok(!/document\.getElementById\("setupModal"\)\.classList\.add\("open"\);\s*\}, 250\)/.test(ui),
    "iniciarConfiguracao precisa passar por openSetupModal");
  const m=ui.match(/function iniciarConfiguracao\(\)\{[\s\S]*?\n\}/);
  assert.ok(m&&/openSetupModal\(\)/.test(m[0]));
});

test("a zona de risco fica fora do fluxo, atrás de um link",()=>{
  assert.ok(/id="setupGerenciar"[^>]*data-action="toggleGerenciar"/.test(html));
  assert.ok(/id="restartSection"[^>]*style="display:none"/.test(html),
    "reprocessar e reiniciar começam fechados");
  const m=ui.match(/function openSetupModal\(\)\{[\s\S]*?\n\}/);
  assert.ok(m&&/getElementById\("restartSection"\)\.style\.display="none"/.test(m[0]),
    "reabrir o modal não pode deixar a zona de risco aberta de antes");
});

test("campos vêm em branco para quem nunca configurou",()=>{
  const m=ui.match(/function openSetupModal\(\)\{[\s\S]*?\n\}/);
  assert.ok(m,"openSetupModal não encontrada");
  assert.ok(/inputHoras"\)\.value=hasInicio\?String\(STATE\.horasDia\|\|3\):""/.test(m[0]),
    "horas por dia não pode vir pré-escolhida: o plano inteiro sai dela");
  assert.ok(/if\(!_prefEscolhida\) limparSelecaoPref\(\)/.test(m[0]),
    "o boot pré-seleciona a primeira certificação; a tela precisa voltar a 'Selecione'");
  assert.ok(/<option value="">Selecione<\/option>/.test(html),
    "o select de horas precisa de uma opção vazia, senão a primeira vira o padrão");
});

test("a certificação precisa ser escolhida de fato",()=>{
  assert.ok(/let _prefEscolhida=false/.test(ui));
  // a única porta de escolha marca a flag
  const sp=ui.match(/function selecionarPref\(key, userAction\)\{[\s\S]*?\n\}/);
  assert.ok(sp&&/if\(userAction\) _prefEscolhida=true/.test(sp[0]),
    "selecionarPref precisa marcar a escolha do aluno");
  assert.ok(/function selecionarEdital\(key\)\{[\s\S]*?selecionarPref\(key,true\)/.test(ui),
    "o clique na lista passa por selecionarPref com userAction");
  const v=ui.match(/function validarEtapaSetup\(n\)\{[\s\S]*?\n\}/);
  assert.ok(v&&/if\(!_prefEscolhida\)/.test(v[0]),
    "sem isso o aluno que não abriu o seletor leva o edital errado, calado");
});

test("sem horas escolhidas não há prazo a mostrar",()=>{
  const m=ui.match(/function calcPrazoDoFormulario\(\)\{[\s\S]*?\n\}/);
  assert.ok(m&&/if\(!horasEl\.value\) return null/.test(m[0]),
    "com horas em branco, parseFloat cairia no padrão e inventaria um prazo");
  const v=ui.match(/function validarEtapaSetup\(n\)\{[\s\S]*?\n\}/);
  assert.ok(v&&/inputHoras/.test(v[0]),"a etapa 2 exige as horas antes de avançar");
});

test("o visual da configuração não vaza para os outros modais",()=>{
  // .modal-setup existe para escopar a paleta de areia
  assert.ok(/class="modal modal-setup"/.test(html));
  const areia=css.match(/\.modal-setup \{[\s\S]*?\n\}/);
  assert.ok(areia&&/--areia:/.test(areia[0]),"a paleta mora no escopo do modal");
  // nenhuma regra de areia pode ser global
  for(const sel of [".su-marca",".su-trilha",".su-nav"]){
    const re=new RegExp("\\"+sel+" \\{");
    assert.ok(re.test(css),sel+" precisa existir");
  }
  assert.ok(!/^\.modal \{[^}]*--areia/m.test(css),"a paleta não pode estar no .modal genérico");
});

test("só o logo e o nome no cabeçalho",()=>{
  const h=html.match(/<header class="su-marca">[\s\S]*?<\/header>/);
  assert.ok(h,"cabeçalho da configuração não encontrado");
  assert.ok(/su-nome">Bússola de Estudos</.test(h[0]));
  assert.ok(!/Coach Digital/.test(h[0]),"o subtítulo saiu no enxugamento");
  // sem parágrafos explicativos dentro das etapas: quem explica é o rótulo
  assert.ok(!/class="modal-desc"/.test(etapa(1)+etapa(2)+etapa(3)),
    "as etapas não levam texto explicativo");
});
