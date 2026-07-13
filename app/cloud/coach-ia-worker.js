/* ════════════════════════════════════════════════════════════════
   BÚSSOLA DE ESTUDOS — Coach com IA (redação) · Cloudflare Worker
   ----------------------------------------------------------------
   O app envia o DIAGNÓSTICO (JSON de números calculados pelo motor
   de regras) + o token de login Firebase do aluno. Este worker:
     1. valida o token (identitytoolkit — só aluno autenticado);
     2. responde do cache se o aluno já pediu hoje (1x/dia);
     3. pede ao Gemini Flash a redação da Palavra do Coach;
     4. devolve {texto} — o front guarda em STATE.coachIA.

   Variáveis de ambiente (Settings -> Variables and Secrets):
     GEMINI_API_KEY    (Secret)  chave do Google AI Studio
     FIREBASE_API_KEY  (Text)    apiKey pública do FIREBASE_CONFIG
     GEMINI_MODEL      (Text, opcional) padrão: gemini-2.5-flash-lite
                       (maior cota gratuita; use gemini-2.5-flash p/ + qualidade)

   NUNCA colocar a GEMINI_API_KEY no repositório/site (regra do handoff).
   Deploy: ver cloud/COACH-IA-GUIA.md
   ════════════════════════════════════════════════════════════════ */

const ORIGENS_PERMITIDAS = [
  "https://bussoladeestudos.com.br",
  "https://www.bussoladeestudos.com.br",
  "http://localhost:3000",
];

const PROMPT_COACH = `Você é o Coach Bússola, mentor pessoal de um estudante que se prepara para concurso público ou certificação no app Bússola de Estudos (método 5+1+1: 5 dias de conteúdo novo, 1 dia de Retorno Técnico para reavaliar a confiança, 1 dia de Exercícios de Revisão; revisões espaçadas de 7 e 30 dias; mini simulados a cada 3 ciclos).

Você receberá um diagnóstico em JSON calculado pelo app. Escreva a mensagem diária do Coach para o aluno seguindo estas regras:
- Exatamente 3 parágrafos curtos, em português do Brasil, separados por UMA linha em branco.
- Trate o aluno pelo primeiro nome (campo "nome"). Tom direto, humano e encorajador — como um treinador experiente, nunca robótico nem bajulador.
- Parágrafo 1: leitura da situação geral (ritmo, aderência, sequência de dias, dias restantes).
- Parágrafo 2: pontos fortes e o que preocupa (cobertura do edital, confiança média, matérias atrasadas/fracas citando peso no edital).
- Parágrafo 3: UMA única ação concreta e específica para hoje (se houver dias sem registro, priorize a recuperação; senão, revisões pendentes; senão, a matéria mais crítica).
- Use APENAS os dados do JSON. Não invente números, matérias nem prazos.
- Sem markdown, sem títulos, sem listas, sem emojis. Só texto corrido.
- Máximo de 130 palavras no total.

Diagnóstico do aluno:
`;

function json(obj, status, cors) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...cors },
  });
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const cors = {
      "Access-Control-Allow-Origin": ORIGENS_PERMITIDAS.includes(origin) ? origin : ORIGENS_PERMITIDAS[0],
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Vary": "Origin",
    };
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
    if (request.method !== "POST") return json({ erro: "use POST" }, 405, cors);

    // 1 ── valida o login Firebase (só aluno autenticado consome a IA)
    const token = (request.headers.get("Authorization") || "").replace(/^Bearer\s+/i, "");
    if (!token) return json({ erro: "sem token" }, 401, cors);
    const look = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=" + env.FIREBASE_API_KEY,
      { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ idToken: token }) }
    );
    if (!look.ok) return json({ erro: "login inválido" }, 401, cors);
    const uid = ((await look.json()).users || [])[0]?.localId;
    if (!uid) return json({ erro: "login inválido" }, 401, cors);

    // 2 ── cache 1x/dia por aluno (Cache API do datacenter)
    const dia = new Date().toISOString().slice(0, 10);
    const cacheKey = new Request("https://coach-cache.bussola/" + uid + "/" + dia);
    const cache = caches.default;
    const hit = await cache.match(cacheKey);
    if (hit) return json({ texto: await hit.text(), cache: true }, 200, cors);

    // 3 ── diagnóstico enviado pelo app (só números/nomes de matéria)
    let diag;
    try { diag = await request.json(); } catch (e) { return json({ erro: "json inválido" }, 400, cors); }
    const diagStr = JSON.stringify(diag).slice(0, 4000);

    // 4 ── redação via Gemini Flash
    const model = env.GEMINI_MODEL || "gemini-2.5-flash-lite";
    const r = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/" + model + ":generateContent?key=" + env.GEMINI_API_KEY,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: PROMPT_COACH + diagStr }] }],
          generationConfig: { temperature: 0.9, maxOutputTokens: 2048 },
        }),
      }
    );
    if (!r.ok) return json({ erro: "ia indisponível" }, 502, cors);
    const data = await r.json();
    const texto = (data.candidates?.[0]?.content?.parts || []).map(p => p.text || "").join("").trim();
    if (!texto) return json({ erro: "resposta vazia" }, 502, cors);

    await cache.put(cacheKey, new Response(texto, { headers: { "Cache-Control": "max-age=86400" } }));
    return json({ texto }, 200, cors);
  },
};
