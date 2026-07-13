# Coach com IA (redação) — Guia de deploy

Arquitetura (regra do handoff, seção 8): o motor de regras do app continua
diagnosticando; a IA **só redige** o texto da Palavra do Coach. A chave da IA
vive num Cloudflare Worker — **nunca** no site/repositório. 1 chamada por
aluno/dia, com cache no worker e no STATE do app.

## Passo 1 — Chave do Gemini (gratuita)
1. Acesse https://aistudio.google.com/apikey com sua conta Google.
2. "Create API key" → copie a chave (começa com `AIza...`).

## Passo 2 — Worker no Cloudflare (gratuito, sem cartão)
1. Crie conta em https://dash.cloudflare.com/sign-up
2. Menu **Workers & Pages → Create → Create Worker**. Nomeie `coach-bussola`
   → Deploy.
3. **Edit code** → apague o exemplo e cole todo o conteúdo de
   `cloud/coach-ia-worker.js` → **Save and deploy**.
4. Volte ao worker → **Settings → Variables and Secrets**:
   - `GEMINI_API_KEY` (tipo **Secret**) = chave do Passo 1
   - `FIREBASE_API_KEY` (Text) = apiKey pública do FIREBASE_CONFIG
     (está no app/index.html — é pública por design)
   - (opcional) `GEMINI_MODEL` (Text) = outro modelo; padrão `gemini-2.5-flash-lite`
     (~1.000 chamadas/dia grátis; `gemini-2.5-flash` tem cota menor, ~250/dia)
5. Anote a URL do worker: `https://coach-bussola.<sua-conta>.workers.dev`

## Passo 3 — Ligar no app
Em `app/js/ui.js`, preencha a constante:
```js
const COACH_IA_URL = "https://coach-bussola.<sua-conta>.workers.dev";
```
Suba `app/js/ui.js` no GitHub. Vazio = recurso desativado (fallback de regras).

## Teste
1. Site em produção, aluno logado, com ao menos 1 sessão registrada.
2. Dashboard → o Coach primeiro mostra o texto de regras; em ~2 s a redação
   da IA aparece com o selo "✦ Redigido com IA".
3. Recarregue: deve vir instantâneo (cache do dia em STATE.coachIA).
4. Falha proposital (URL errada/offline): o texto de regras aparece — nunca
   um Coach vazio.

## Custos e limites
- Cloudflare free: 100.000 requisições/dia (folga de sobra).
- Gemini free tier (jul/2026): ~1.000 req/dia no flash-lite (~250 no flash)
  → ~1.000 alunos ativos/dia com cache 1x/dia. Excedeu? A chamada falha e o
  app cai no fallback de regras — sem quebrar nada.
- Segurança: só tokens Firebase válidos passam; CORS restrito ao domínio;
  cache por uid impede spam de um mesmo aluno.
