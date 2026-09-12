/* ════════════════════════════════════════════════════════════════
   BÚSSOLA DE ESTUDOS — Service Worker (PWA)
   Estratégia: NETWORK-FIRST com fallback ao cache, para o app NUNCA
   ficar preso numa versão velha (deploy no GitHub Pages continua
   valendo na hora, como sempre). O cache só responde quando o aluno
   está offline — casando com o modelo local-first do app.
   Só intercepta GET da MESMA ORIGEM (Firebase/Google passam direto).
   Ao mudar a versão abaixo, o SW novo assume e limpa os caches antigos.
   ════════════════════════════════════════════════════════════════ */
const CACHE = "bussola-v38";   // v38 (12/09): conteúdo C-Pro R até inv-31; mantém rodapé da aula e botão voltar, ?v=20260912-inv31
const SHELL = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "css/app.css",
  "editais.js",
  "cursos.js",
  "conteudo/conteudo-cpa.js",
  "conteudo/conteudo-assban-pldft-lgpd.js",
  "conteudo/conteudo-cpror.js",
  "js/state.js",
  "js/engine.js",
  "js/ui.js",
  "js/pomodoro.js",
  "icon-192.png",
  "icon-512.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // Firebase, fontes etc.: direto
  e.respondWith(
    fetch(req)
      .then((resp) => {
        if (resp && resp.ok) {
          const copia = resp.clone();
          caches.open(CACHE).then((c) => c.put(req, copia));
        }
        return resp;
      })
      .catch(() =>
        /* ignoreSearch: o index pede "css/app.css?v=...", e o SHELL guardou
           "css/app.css" sem query. Sem isso o app offline ficava sem CSS. */
        caches.match(req, { ignoreSearch: true }).then((hit) => hit || caches.match("index.html"))
      )
  );
});
