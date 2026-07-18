/* ════════════════════════════════════════════════════════════════
   BÚSSOLA DE ESTUDOS — Service Worker (PWA)
   Estratégia: NETWORK-FIRST com fallback ao cache, para o app NUNCA
   ficar preso numa versão velha (deploy no GitHub Pages continua
   valendo na hora, como sempre). O cache só responde quando o aluno
   está offline — casando com o modelo local-first do app.
   Só intercepta GET da MESMA ORIGEM (Firebase/Google passam direto).
   Ao mudar a versão abaixo, o SW novo assume e limpa os caches antigos.
   ════════════════════════════════════════════════════════════════ */
const CACHE = "bussola-v1";
const SHELL = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "css/app.css",
  "editais.js",
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
        caches.match(req).then((hit) => hit || caches.match("index.html"))
      )
  );
});
