/* Modo de visualização do dashboard (botão "Ver como no computador").

   O modo computador não redesenha nada: ele troca a largura do
   viewport, e quem desenha continua sendo a media query. Isso o deixa
   barato, mas também frágil de um jeito silencioso — se alguém tirar a
   chamada de aplicarDashView do navTo, o aluno leva o viewport de
   1100px para as outras telas e o app inteiro fica minúsculo, sem erro
   no console. Os testes aqui travam justamente esses contratos.
   Rodar: node --test tests/dash-view.test.js */
const test=require("node:test");
const assert=require("node:assert");
const fs=require("fs"), path=require("path");
const read=f=>fs.readFileSync(path.join(__dirname,"..",f),"utf8");
const html=read("index.html"), ui=read("js/ui.js"), css=read("css/app.css");

test("o botão existe no dashboard e aponta para o handler",()=>{
  assert.ok(/id="dashViewBtn"[^>]*data-action="toggleDashView"/.test(html),
    "o botão precisa estar no index.html com data-action=toggleDashView");
  assert.ok(/toggleDashView:\(\)=>toggleDashView\(\)/.test(ui),
    "toggleDashView precisa estar registrado em ACTIONS");
});

test("sair do dashboard devolve o viewport: navTo chama aplicarDashView",()=>{
  const corpo=ui.match(/function navTo\(pg\)\{([\s\S]*?)\n\}/);
  assert.ok(corpo,"navTo não encontrada");
  assert.ok(/aplicarDashView\(\)/.test(corpo[1]),
    "sem isso o viewport de 1100px vaza para as outras páginas");
});

test("o modo computador só liga com o dashboard na tela",()=>{
  const corpo=ui.match(/function aplicarDashView\(\)\{([\s\S]*?)\n\}/);
  assert.ok(corpo,"aplicarDashView não encontrada");
  assert.ok(/STATE\.pagina==="dashboard"/.test(corpo[1]),
    "a condição da página é o que limita o modo ao dashboard");
  assert.ok(/VIEWPORT_AUTO/.test(corpo[1]),
    "precisa restaurar o viewport padrão quando o modo está desligado");
});

test("a preferência é do aparelho, não da conta",()=>{
  assert.ok(/localStorage\.getItem\(DASH_VIEW_KEY\)/.test(ui),
    "a escolha fica no localStorage");
  assert.ok(!/STATE\.dashView/.test(ui),
    "não pode ir para o STATE: o STATE sincroniza e levaria a escolha do celular para o computador");
  // localStorage bloqueado (aba anônima) não pode derrubar o app
  assert.ok(/catch\(e\)\{ return "auto"; \}/.test(ui),
    "getDashView precisa cair no modo automático se o localStorage falhar");
});

test("o botão de voltar continua visível em modo computador",()=>{
  assert.ok(/body\.dash-pc \.dash-view-bar \{ display:flex; \}/.test(css),
    "em modo computador o viewport é 1100px e a media query de celular deixa de valer");
  assert.ok(/body\.dash-pc \.dash-view-btn \{[^}]*font-size:1\.9rem/.test(css),
    "o botão precisa crescer, senão fica pequeno demais na tela reduzida");
});

test("o botão só aparece em aparelho de toque",()=>{
  assert.ok(/@media\(max-width:1024px\)\{ body\.toque \.dash-view-bar \{ display:flex; \} \}/.test(css),
    "no computador a meta viewport é ignorada e o botão não faria nada");
  assert.ok(/matchMedia\("\(pointer:coarse\)"\)/.test(ui),
    "a classe .toque vem do pointer:coarse");
});

test("no modo painel o menu vira trilho de ícones",()=>{
  // a barra de 248px come quase um quarto dos 1100px do modo painel
  assert.ok(/body\.dash-pc \{ --sidebar-w:62px; \}/.test(css),
    "o trilho é a mesma variável que a topbar e o .main já leem");
  assert.ok(/body\.dash-pc\.rail-aberto \.sidebar \{ width:248px/.test(css));
  assert.ok(/body\.dash-pc \.sidebar:hover,/.test(css),"mouse abre no hover");
  // o .main NÃO pode acompanhar a abertura, senão o dashboard reflui
  const m=css.match(/body\.dash-pc \.sidebar:hover,[\s\S]*?\n/);
  assert.ok(m&&!/\.main/.test(m[0]),"o trilho abre por cima, não empurrando");
});

test("em tela de toque o logo faz o papel do hover",()=>{
  assert.ok(/data-action="toggleRail"/.test(html),"o logo precisa do handler");
  assert.ok(/toggleRail:\(\)=>toggleRail\(\)/.test(ui));
  const f=ui.match(/function toggleRail\(\)\{[\s\S]*?\n\}/);
  assert.ok(f&&/classList\.contains\("dash-pc"\)/.test(f[0]),
    "fora do modo painel o menu é o de sempre e o logo não faz nada");
});

test("sair do modo painel não deixa o trilho pendurado",()=>{
  const f=ui.match(/function aplicarDashView\(\)\{[\s\S]*?\n\}/);
  assert.ok(f&&/if\(!pc\) document\.body\.classList\.remove\("rail-aberto"\)/.test(f[0]));
});

test("o balão de instalar não pode cobrir o botão de visualização",()=>{
  // .pwa-balao é fixed no topo direito, exatamente onde o botão fica
  assert.ok(/body\.pwa-balao-visivel \.main \{ padding-top:calc\(1\.5rem \+ var\(--pwa-balao-h,0px\)\); \}/.test(css));
  const f=ui.match(/function _reservarEspacoPwa\(\)\{[\s\S]*?\n\}/);
  assert.ok(f,"_reservarEspacoPwa não encontrada");
  assert.ok(/--pwa-balao-h/.test(f[0]));
  // toda saída do balão devolve o espaço
  const remocoes=(ui.match(/getElementById\("pwaBalao"\); if\(b\) b\.remove\(\); _reservarEspacoPwa\(\)/g)||[]).length;
  assert.ok(remocoes>=2,"cada remoção do balão precisa devolver o espaço, achei "+remocoes);
});
