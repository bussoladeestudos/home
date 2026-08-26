/* ════════════════════════════════════════════════════════════════
   CURSOS — vínculo entre os TÓPICOS do edital e as aulas dos
   cursinhos que o aluno já tenha contratado.
   ----------------------------------------------------------------
   ⚠ DESLIGADO EM 25/08/2026 — LEIA ANTES DE MEXER.
   A infraestrutura está inteira e testada, mas o recurso está fora
   do ar por CURSOS_ATIVO=false em js/ui.js, e este arquivo está sem
   dados de propósito. Motivo: cursos.js é servido publicamente pelo
   GitHub Pages, então publicar o catálogo de um curso de terceiro
   aqui expõe a grade dele para qualquer um, não só para o aluno que
   assina. A decisão do dono é esperar autorização de um fornecedor
   antes de religar. O catálogo do piloto está preservado em
   _docs/piloto-aulas-cursinhos.json (arquivo local, NÃO subir para
   o GitHub). Plano de religamento na seção 8 do handoff.

   Como funciona: o aluno informa em Configurações qual cursinho ele
   assina. A partir daí, todo tópico vinculado a alguma aula ganha o
   botão de assistir no cronograma e na tela Hoje. Quem não assina o
   curso simplesmente não vê botão nenhum.

   POR QUE CATÁLOGO + VÍNCULOS (e não um link por tópico):
   os cursos não seguem o recorte do edital. Uma única aula do Lucas
   Silva ("O Processo de Planejamento Financeiro do Profissional CFP")
   cobre três tópicos do edital de uma vez. Guardar a URL solta em
   cada tópico duplicaria a mesma aula várias vezes, e corrigir um
   link viraria caça ao tesouro. Aqui a aula é cadastrada UMA vez no
   catálogo, com número e título, e os tópicos apenas apontam para o
   número dela.

   ESTRUTURA
     aulas[edital][cursinho].catalogo = [{n, t, u}]
        n = número da aula na ordem do curso (é a chave do vínculo)
        t = título como aparece no curso
        u = URL da aula (vazio = ainda não cadastrada)
     aulas[edital][cursinho].topicos[matéria][tópico] = [n, n, ...]

   REGRAS DESTE ARQUIVO (leia antes de editar):
   1. Só entram URLs https. Qualquer outra coisa é ignorada por
      engine.getAulas (proteção contra javascript: e afins).
   2. A busca do tópico é TOLERANTE: ignora acentos, maiúsculas,
      espaços repetidos e pontuação. Então "Princípios e processo do
      planejamento financeiro" acha o mesmo vínculo que
      "principios e processo do planejamento financeiro ".
   3. Os nomes de matéria e tópico devem sair do editais.js. Se o
      edital mudar o texto de um tópico, o vínculo órfão para de
      aparecer (falha silenciosa, de propósito: melhor sem botão do
      que com botão que leva ao lugar errado).
   4. Aula sem URL fica no catálogo mesmo assim: serve de mapa do que
      falta cadastrar, e o app ignora.
   5. Para preencher em lote, use _docs/links-aulas-cfp.xlsx e rode
      outputs/planilha_para_cursos.py.
   ════════════════════════════════════════════════════════════════ */
window.CURSOS_DATA = {

  /* Cursinhos disponíveis. "editais" lista as chaves do editais.js
     em que aquele cursinho aparece como opção para o aluno.
     VAZIO por decisão de 25/08/2026 (ver cabeçalho). Com a lista
     vazia, getProvedores() devolve [] e o seletor de Configurações
     se esconde sozinho — o desligamento não depende só da flag. */
  provedores: [],

  /* aulas[edital][cursinho] = { catalogo:[{n,t,u}], topicos:{...} }
     VAZIO pelo mesmo motivo. O piloto (Prof. Lucas Silva, módulo 1
     do CFP) está guardado em _docs/piloto-aulas-cursinhos.json. */
  aulas: {}
};
