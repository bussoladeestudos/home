/* Regra de liberação das revisões (decisão do dono, 12/09/2026):
   a revisão só abre quando TODOS os tópicos do ciclo dela foram estudados
   E avaliados. Data não libera, e revisão concluída não libera a seguinte.
   Rodar: node --test tests/revisao-liberacao.test.js */
const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('fs'), path = require('path');

const ui = fs.readFileSync(path.join(__dirname, '../js/ui.js'), 'utf8');
const ini = ui.indexOf('function buildBlocosRevisao(){');
const fim = ui.indexOf('function toggleRevCiclo(');
assert.ok(ini > 0 && fim > ini, 'buildBlocosRevisao não encontrada no ui.js');
const code = ui.slice(ini, fim);

/* Plano de teste: dois ciclos de revisão, em 2026-09-07 e 2026-09-14.
   Cada ciclo prevê dois tópicos. "hoje" é 2026-09-20, ou seja, as duas datas
   já passaram: pela regra antiga as duas estariam abertas. */
function setup(perc) {
  const ciclo = {'2026-09-07': 6, '2026-09-14': 6};
  const previstos = {
    '2026-09-07': [{key: 'a1', mat: 'M', top: 't1'}, {key: 'a2', mat: 'M', top: 't2'}],
    '2026-09-14': [{key: 'b1', mat: 'M', top: 't3'}, {key: 'b2', mat: 'M', top: 't4'}],
  };
  const c = vm.createContext({
    STATE: {inicio: '2026-09-01', prova: '2026-09-30', dias: {}},
    fmt: d => d.toISOString().slice(0, 10),
    parseDate: s => new Date(s + 'T00:00:00Z'),
    getCicloPos: k => ciclo[k] != null ? ciclo[k] : 0,
    getTopicosFracos: seg => {
      const dom = new Date(seg);
      for (let i = 0; i < 7; i++) {
        const k = new Date(dom.getTime() + i * 86400000).toISOString().slice(0, 10);
        if (previstos[k]) return previstos[k].map(t => Object.assign({}, t, {perc: perc[t.key] || null}));
      }
      return [];
    },
    Date: class extends Date {
      constructor(...a) { super(...(a.length ? a : ['2026-09-20T00:00:00Z'])); }
    },
  });
  vm.runInContext(code, c);
  return vm.runInContext('buildBlocosRevisao()', c);
}

test('data passada não libera revisão sem o conteúdo estudado', () => {
  const b = setup({});
  assert.equal(b.length, 2);
  assert.equal(b[0].estado, 'futura');
  assert.equal(b[1].estado, 'futura');
  assert.equal(b[0].previstos, 2);
  assert.equal(b[0].faltam, 2);
});

test('conteúdo parcial mantém a revisão bloqueada e diz quanto falta', () => {
  const b = setup({a1: 'alta'});
  assert.equal(b[0].estado, 'futura');
  assert.equal(b[0].faltam, 1);
  assert.equal(b[0].previstos, 2);
});

test('todos os tópicos avaliados liberam a revisão', () => {
  const b = setup({a1: 'alta', a2: 'media'});
  assert.equal(b[0].estado, 'disponivel');
  assert.equal(b[0].isFutura, false);
  assert.equal(b[0].total, 2);
  assert.equal(b[0].faltam, 0);
});

test('revisão liberada não libera a seguinte por cascata', () => {
  const b = setup({a1: 'alta', a2: 'alta'});
  assert.equal(b[0].estado, 'disponivel');
  assert.equal(b[1].estado, 'futura', 'a revisão 2 não pode abrir sem o conteúdo dela');
});
