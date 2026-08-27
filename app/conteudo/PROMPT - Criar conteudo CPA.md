# PROMPT para a IA redatora — conteúdo da CPA (Anbima)

Copie o bloco marcado abaixo e cole como primeira mensagem na IA que vai escrever.
Antes de enviar, ajuste só a **seção 7 (Lote desta rodada)** com os tópicos que você
quer nesta leva. A lista completa dos 100 tópicos da CPA está no anexo, no fim
deste arquivo.

## Por onde começar, e por quê

O cronograma ordena as matérias por peso. Na CPA isso significa que o aluno vê
**Produtos do Mercado Financeiro** (peso 40) desde a primeira semana, e só chega em
Inovação (peso 10) no fim. Então a ordem de produção que faz sentido é a mesma:

1. Produtos do Mercado Financeiro — 40 tópicos
2. Relacionamento com o Cliente — 30 tópicos
3. Estrutura e Dinâmica do Sistema Financeiro Nacional — 20 tópicos
4. Inovação e Desenvolvimento de Mercado — 10 tópicos

Escrever ESG antes de renda fixa deixaria o aluno sem conteúdo justamente nos dias
em que ele mais usa o app.

O lote já preenchido na seção 7 é o começo do módulo de Produtos: os seis primeiros
tópicos, todos de renda fixa. Peça o primeiro, revise, e só então libere o resto.

---

Você vai escrever conteúdo de estudo para a **Bússola de Estudos**, um app de
cronogramas para certificações financeiras. O aluno abre o cronograma, clica no
tópico do dia e lê o que você escreveu. Depois, nos dias de revisão de 7 e 30 dias,
ele relê só o cartão de revisão daquele tópico.

Certificação desta rodada: **CPA — Certificado Profissional Anbima**, programa
detalhado versão 1.2, em vigor desde 01/01/2026. É a certificação de entrada no
mercado financeiro, voltada a quem está começando a carreira. **Escreva para esse
leitor:** alguém que talvez esteja vendo "debênture" pela primeira vez, e não para
quem já trabalha na mesa de operações.

## 1. O que você entrega

Um arquivo Markdown **por tópico**. Nada de juntar vários tópicos num arquivo.
Entregue cada arquivo num bloco de código separado, com o nome do arquivo na linha
imediatamente acima do bloco, assim:

`01-titulos-publicos-federais.md`
```markdown
---
(conteúdo do arquivo)
---
```

Nome do arquivo: `NN-slug-do-topico.md`, com `NN` = a ordem do tópico dentro da
matéria (dois dígitos) e o slug em minúsculas, sem acento, com hífens.

## 2. Estrutura obrigatória de cada arquivo

Front matter entre `---`, depois **exatamente estes cinco títulos de nível 2, nesta
ordem e com estes nomes**. O app separa as partes pelos títulos, então nome trocado
significa seção perdida.

```markdown
---
cert: cpaAnbima
materia: <copie exatamente da seção 7>
topico: <copie exatamente da seção 7>
id: cpa-prod-<NN>
versao: 1
atualizado: <data de hoje, AAAA-MM-DD>
---

## Em uma frase

Uma ou duas linhas. Vira a prévia no card do dia, então precisa dizer o que o aluno
vai aprender, não vender o tópico.

## O que cai na prova

Lista curta e específica do que a Anbima cobra neste tópico.

## Conteúdo

O corpo. Use `###` para subdividir. Explique o conceito, mostre onde ele aparece na
rotina de quem atende cliente em banco ou corretora, e só então entre nas
classificações e nos números. Um exemplo concreto com valores redondos vale mais
que meia página de definição.

## Pegadinhas

Erros clássicos, confusões comuns e as distinções que a banca explora. Inclua o tipo
de redação que torna uma alternativa falsa.

## Cartão de revisão

No máximo 10 linhas, em lista. É o que o aluno relê em três minutos no dia da
revisão, sem abrir o conteúdo completo. Só o que ele precisa ter na ponta da língua.
```

O prefixo do `id` muda por matéria: `cpa-prod-` para Produtos do Mercado Financeiro,
`cpa-rel-` para Relacionamento com o Cliente, `cpa-sfn-` para Estrutura e Dinâmica do
Sistema Financeiro Nacional e `cpa-inov-` para Inovação e Desenvolvimento de Mercado.

## 3. Regras de conteúdo

- **800 a 1.500 palavras** por tópico, contando tudo. O cronograma trata cada tópico
  como uma sessão de estudo de 30 a 60 minutos.
- **Copie matéria e tópico exatamente** como estão na seção 7. Não reescreva, não
  abrevie, não corrija. Esses dois campos são a chave que liga o texto ao cronograma;
  qualquer alteração faz o conteúdo sumir do app, em silêncio.
- **Não invente tópico** que não esteja na lista. Se algo importante ficou de fora,
  escreva isso na sua resposta, fora dos arquivos, e siga com o que está na lista.
- **Sem link externo, sem imagem, sem citar apostila ou curso de terceiros.** Só
  texto seu.
- **Nada de HTML** dentro do Markdown. Permitido: `##`, `###`, `**negrito**`,
  `*itálico*`, listas com `-` e `1.`, tabelas simples, `> citação` e `` `código` ``.

## 4. Precisão factual, que é onde isso costuma dar errado

A CPA é cheia de alíquota, prazo, limite e sigla de norma. Esses números mudam e são
exatamente o tipo de coisa que uma IA inventa com segurança total.

- Nunca cite número de lei, resolução, artigo, alíquota, prazo, limite de cobertura
  ou percentual do qual você não tenha certeza.
- Quando o conteúdo pedir um número desses e você não tiver confiança, escreva
  `[CONFERIR: <o que precisa ser verificado>]` no lugar, e siga.
- Ao fim da sua resposta, liste todos os `[CONFERIR]` que deixou, agrupados por
  arquivo. Essa lista é o roteiro de checagem do dono.
- Casos que quase sempre merecem `[CONFERIR]` nesta certificação: tabela regressiva
  de IR, alíquotas de IOF, limite de cobertura do FGC, isenção de renda variável,
  prazos de liquidação e qualquer artigo da Resolução CVM 175.
- **Marque `[CONFERIR]` também em REGRA OPERACIONAL, não só em número.** Quando e como
  uma taxa é cobrada, prazo de liquidação, periodicidade de débito e rotina de
  plataforma mudam com frequência, e material de estudo desatualizado repete a regra
  velha por anos. Se você aprendeu o procedimento e não sabe se ele continua em vigor,
  marque.
- **Cubra todos os itens que o nome do tópico promete.** Se o programa da Anbima lista
  cinco produtos naquela seção e você escreveu sobre três, o aluno chega despreparado
  na prova. Ao fim de cada arquivo, confira o título do tópico item por item.
- **Confira a grafia das siglas.** Ex.: o fundo do cooperativismo é FGCoop, não FGCCoop.
  Sigla escrita de dois jeitos no mesmo texto confunde quem está aprendendo o vocabulário.

### Fatos já verificados nesta certificação (use, não marque como [CONFERIR])

Levantados em fonte primária durante a revisão. Se algum destes aparecer no seu tópico,
escreva direto, sem marcação:

- **FGC:** garantia ordinária de R$ 250.000,00 por CPF ou CNPJ, por instituição **ou
  conglomerado financeiro**, com teto global de R$ 1.000.000,00 a cada 4 anos. A palavra
  "conglomerado" é o ponto de prova: dois bancos do mesmo grupo dividem um único limite.
- **FGCoop:** mesma cobertura de R$ 250.000,00, criado em 2013, reúne as cooperativas
  singulares captadoras de depósitos e os dois bancos cooperativos. Cobre RDC, e também
  CDB e RDB emitidos por instituição do sistema cooperativo. O que define o fundo é o
  emissor, não a sigla do produto.
- **Taxa de custódia do Tesouro Direto:** 0,20% ao ano sobre o saldo em títulos, isenção
  de até R$ 10.000,00 por CPF no Tesouro Selic (incide só sobre o excedente). Desde
  31/12/2024 ela é provisionada diariamente e cobrada nas movimentações. **A cobrança em
  janeiro e julho acabou** e material antigo ainda ensina a regra velha.
- **Liquidação de resgate no Tesouro Direto:** pedido entre 9h30 e 13h liquida em D+0
  (disponível a partir das 13h do mesmo dia); entre 13h e 18h ou fora do horário, D+1.
  Aplicações em múltiplos de 0,01 título (1% do papel).
- **IOF — Decreto 6.306/2007, texto integral em `_conteudo/_fontes/Decreto-6306-2007-IOF.txt`.**
  *Art. 32*: nas aplicações financeiras o IOF é de **1% ao dia** sobre o valor do resgate,
  cessão ou repactuação, **limitado ao rendimento** da operação, conforme a tabela do
  Anexo. Ou seja, o IOF **nunca alcança o principal**.
  *Anexo*: a tabela vai do dia 1 ao dia 30, começando em **96%** do rendimento no 1º dia
  e caindo até **0% no 30º dia**. Alguns marcos do texto: dia 5 = 83%, dia 10 = 66%,
  dia 15 = 50%, dia 20 = 33%, dia 25 = 16%, dia 29 = 3%, dia 30 = 0%.
  *Art. 32, §2º*: **alíquota zero** para operações do mercado de renda variável e de bolsa;
  resgate de cotas de fundos e clubes **de ações**; CDCA, LCA e CRA; debêntures e CRI;
  cotas de Fundos de Índice de Renda Fixa em bolsa ou balcão organizado; e operações do
  FGC e do FGCoop. **LCI e LCD NÃO estão nessa lista** — o que as protege é a carência
  mínima de 12 meses, que impede resgate dentro da janela de 30 dias. A poupança está
  fora por natureza: é depósito, não título ou valor mobiliário.
  *Art. 31*: em fundo com prazo de carência, o resgate antes da carência tem IOF de
  **0,5% ao dia**, limitado ao rendimento.
  **Em disputa, NÃO escrever:** o Decreto 12.499/2025 criou IOF de 0,38% na aquisição
  primária de cotas de FIDC, mas foi sustado pelo Decreto Legislativo 176/2025 e o tema
  está na ADC 96. Enquanto não houver desfecho, fora do conteúdo do aluno.
- **TR e TBF (Resolução CMN 2.437/1997):** a TBF vem da **captação bancária**, não de
  título público. Amostra: CDB e RDB **prefixados de 30 a 35 dias** emitidos pelas **30
  maiores instituições**; descartam-se as duas maiores e as duas menores taxas e faz-se
  média ponderada pelos montantes. Sobre a TBF aplica-se um **redutor** definido pelo CMN,
  e o resultado é a TR. A TR pode ser zero, nunca negativa. Nunca escreva que a TBF sai
  de LTN ou da média da Selic.
- **TLP (Lei 13.483/2017, em vigor desde 1º/01/2018):** substituiu a TJLP nos contratos
  NOVOS do BNDES; a TJLP segue valendo só para contratos antigos em amortização. Composição:
  **IPCA + juro real da NTN-B de 5 anos**.
- **IN RFB 1.585/2015 — texto integral disponível em `_conteudo/_fontes/IN-RFB-1585-2015.txt`.**
  Consulte o arquivo antes de marcar `[CONFERIR]` em qualquer alíquota de aplicação
  financeira. Confirmado em texto da norma:
  *Art. 55, I*: rendimentos de conta de depósito de poupança são isentos **quando
  auferidos por pessoa física** — a isenção é de QUEM investe, não do produto.
  *Art. 55, II a IV*: também isentos para PF os rendimentos de LH, CRI e LCI; de CDA,
  WA, CDCA, LCA e CRA; e da CPR com liquidação financeira negociada no mercado.
  *Art. 40*: rendimentos distribuídos por FII com cotas negociadas exclusivamente em
  bolsa ou balcão organizado são isentos para PF.
  *Art. 46*: aplicações de renda fixa e variável são tributadas na fonte **para qualquer
  beneficiário, inclusive pessoa jurídica isenta**.
  *Arts. 3º e 4º*: fundo é de **longo prazo** com carteira de prazo médio acima de 365
  dias, e de **curto prazo** com prazo médio igual ou inferior a 365 dias.
  *Art. 6º*: tabela regressiva dos fundos de longo prazo — 22,5% até 180 dias, 20% de
  181 a 360, 17,5% de 361 a 720, 15% acima de 720 dias.
  *Art. 18*: fundo de AÇÕES é tributado só no resgate, à alíquota única de **15%**, e
  precisa ter no mínimo **67%** do patrimônio em ações.
  *Art. 51*: rendimentos de COE seguem as alíquotas do art. 46.
  *Art. 46*: tabela regressiva da RENDA FIXA — 22,5% até 180 dias, 20% de 181 a 360,
  17,5% de 361 a 720, 15% acima de 720 dias.
  *Art. 9º*: **come-cotas** no último dia útil de MAIO e NOVEMBRO, ou no resgate se
  antes, à alíquota de **20% em fundo de curto prazo** e **15% em fundo de longo prazo**.
  *Art. 57*: ganho líquido em bolsa (à vista, opções, termo, futuros) = **15%**.
  *Art. 65*: **day trade = 20%**, com retenção na fonte de **1%**.
  *Art. 63*: retenção na fonte de **0,005%** ("dedo-duro") nas demais operações de bolsa.
  *Art. 59, I*: **isenção para pessoa física** nas alienações de ações no mercado à vista
  quando o total vendido no MÊS não passar de **R$ 20.000,00** (mesmo limite para ouro
  ativo financeiro). Não vale para day trade.
  *Art. 64*: perdas compensam ganhos no próprio mês ou nos meses seguintes, inclusive em
  anos-calendário seguintes; **perda de day trade só compensa com ganho de day trade**.
  *Art. 37*: ganho na alienação ou resgate de cotas de FII = **20%** para qualquer
  beneficiário, inclusive PJ isenta.
  *Art. 46, §1º*: a base de cálculo é a diferença positiva entre o valor da alienação
  **líquido do IOF** e o valor da aplicação. Ou seja, **o IOF sai primeiro e o IR incide
  sobre o que restou**.
  *Art. 46, §4º*: a alíquota dos **rendimentos periódicos (cupons)** segue a data de
  início da aplicação ou de aquisição do título. O relógio conta desde a COMPRA e não
  reinicia a cada cupom. Cuidado: **o primeiro cupom não paga necessariamente 22,5%**,
  porque os cupons caem em datas fixas do calendário e o intervalo desde a compra varia.
  **NÃO está na IN:** a alíquota e a periodicidade do crédito da poupança para pessoa
  jurídica. A instrução só trata da isenção da PF (art. 55) e da tributação das
  Associações de Poupança e Empréstimo (art. 84). Essa regra está na Lei 8.981/1995.
- **Poupança, direcionamento dos depósitos (SBPE):** hoje 65% para financiamento
  imobiliário (80% dessa fatia em SFH), 20% de depósito compulsório no BC e 15% livre.
  Em out/2025 o CMN aprovou migração para **100%** direcionado, com vigência plena em
  **1º/01/2027** e transição longa em que o efetivo segue perto dos 65%. Rendimento:
  Selic acima de 8,5% a.a. rende 0,5% ao mês + TR; igual ou abaixo, 70% da Selic + TR.
  Depósitos até 03/05/2012 mantêm 0,5% + TR para sempre. Sem rendimento pro rata: saque
  antes do aniversário perde o mês inteiro. Depósito em 29, 30 ou 31 faz aniversário no
  dia 1º.
- **OPA de cancelamento de registro (Resolução CVM 85/2022):** *art. 22, I* exige **preço
  justo** (art. 4º, §4º da Lei 6.404/76) apoiado em **laudo de avaliação**; *art. 28* dá
  aos minoritários o direito de convocar assembleia especial para pedir revisão do preço.
  *Art. 22, II* exige aceitação de **mais de 2/3 das ações em circulação** — e o
  denominador são as ações **HABILITADAS** para o leilão (arts. 25, §1º e 26, §2º), não o
  free float inteiro. Quem não se manifesta sai da conta e não conta como recusa.
- **Ações, Lei 6.404/76 (conferido no texto da lei):**
  *Art. 15, §2º*: preferenciais **sem voto ou com voto restrito** não podem passar de
  **50% do total das ações emitidas**.
  *Art. 17*: a vantagem da PN pode ser prioridade no **dividendo** (fixo ou mínimo),
  prioridade no **reembolso do capital** (com ou sem prêmio), ou ambas. **Não é automático
  que a PN tenha as duas** — quem define é o estatuto.
  *Art. 17, §1º*: para a PN sem voto ser negociada no mercado, o estatuto precisa garantir
  ao menos uma de: participação em no mínimo 25% do lucro líquido com dividendo mínimo de
  3% do PL da ação; dividendo ao menos 10% maior que o da ON; ou entrada na oferta em caso
  de venda do controle.
  *Art. 111, §1º*: a PN sem voto **adquire voto** quando a companhia deixa de pagar os
  **dividendos fixos ou mínimos** a que faz jus, pelo prazo do estatuto **limitado a três
  exercícios consecutivos** (três é teto, não regra fixa), e **conserva o direito até o
  pagamento**. Não escreva "três anos sem pagar dividendo" nem "até voltar a dar lucro".
  Tickers: ordinária termina em 3, preferencial em 4, unit em 11.
- **Registro de emissor na CVM (Resolução CVM 80/2022, art. 3º):** **categoria A** admite
  negociação de quaisquer valores mobiliários em mercado regulamentado, ações incluídas;
  **categoria B** admite todos menos ações, certificados de depósito de ações e papéis que
  deem direito a adquirir ações. É o nome formal da companhia aberta que capta só com
  dívida e não lista ações. Responsabilidade do acionista vai até o **preço de emissão**
  das ações subscritas ou adquiridas (Lei 6.404/76, art. 1º).
- **Liquidação no mercado à vista da B3: D+2** (dois dias úteis). A B3 anunciou a redução
  para D+1 com previsão de **fevereiro de 2028**. Até lá, em prova a resposta é D+2 — e
  vale citar a mudança futura sem trocar a resposta atual.
- **Rating:** corte do grau de investimento em **BBB-** (S&P e Fitch) e **Baa3** (Moody's);
  abaixo disso é grau especulativo (high yield). As agências publicam escala global e
  escala nacional (sufixo do país, ex.: brAAA), e a mesma empresa pode ter notas
  diferentes nas duas. Quem contrata e paga a agência é o EMISSOR.
- **Resolução CVM 9** regula as agências de rating. **Não existe rodízio obrigatório de
  agência**; o rodízio de ANALISTAS é opcional e a norma só exige que a agência divulgue
  o procedimento caso o adote. É vedado à agência: prestar consultoria à entidade
  avaliada, deixar analista participar da negociação do contrato, atrelar a remuneração
  do analista à receita vinda do avaliado, e emitir nota sobre entidade da qual ela ou
  seus analistas detenham ativos. Exige segregação física de áreas.
- **CRI e CRA:** emissão exclusiva de companhia securitizadora (banco só distribui), sem
  FGC, PF isenta de IR. **Resolução CMN 5.118/2024** restringiu o lastro: vedados títulos
  de dívida de companhia aberta não relacionada aos setores, recebíveis entre partes
  relacionadas e operações para reembolso de despesas; sem efeito retroativo.
- **Regime fiduciário (Lei 14.430/2022, marco da securitização):** NÃO é automático. É
  instituído por declaração da securitizadora no termo de securitização; a partir daí o
  patrimônio separado não responde pelas dívidas dela, nem fiscais, previdenciárias ou
  trabalhistas. Exceção: responde por prejuízo causado por descumprimento, negligência
  ou desvio de finalidade.
- **Isenção de um tributo não arrasta a de outro.** As listas de isenção do Imposto de
  Renda e do IOF são diferentes, e copiar uma na outra produz erro. Confira cada uma na
  sua própria norma: IR na IN 1.585, IOF no Decreto 6.306.
- **ATENÇÃO, erro que já reapareceu:** ao listar ativos isentos de IR para pessoa física,
  escreva "debêntures **incentivadas** (Lei 12.431)". Nunca escreva "debêntures de
  infraestrutura" nessa lista: a da Lei 14.801/2024 NÃO é isenta para PF.
- **Debêntures, duas leis com regras OPOSTAS (erro clássico de tratar como sinônimo):**
  *Incentivada* (Lei 12.431/2011) beneficia o INVESTIDOR — pessoa física isenta de IR,
  pessoa jurídica 15%. *De infraestrutura* (Lei 14.801/2024) beneficia o EMISSOR, que
  deduz os juros do IRPJ/CSLL e exclui 30% deles da base — e nela a pessoa física paga
  IR pela tabela regressiva (22,5% a 15%), PJ 15%. Nunca escreva que a debênture de
  infraestrutura é isenta para PF.
- **Conversível x permutável:** conversível vira ação da PRÓPRIA emissora; permutável,
  de OUTRA companhia (normalmente coligada ou controlada).
- **Prazos mínimos das letras (mudaram em fev/2024, material antigo diz 90 dias):**
  LCI **12 meses**, LCA **9 meses**. LCD nasceu com **12 meses**, fixado em lei.
- **LCD:** criada pela Lei 14.937/2024. Emissão exclusiva de bancos de desenvolvimento
  autorizados pelo BCB e do BNDES. Alíquota zero de IR para pessoa física residente.
  Teto de R$ 10 bilhões por instituição por ano. **A garantia do FGC não é automática:**
  depende de autorização do CMN. Não trate a LCD como LCI/LCA nesse ponto.
- **Títulos do Tesouro Direto:** Tesouro Selic (LFT), Tesouro Prefixado (LTN), Tesouro
  IPCA+ (NTN-B Principal), Tesouro IPCA+ com Juros Semestrais (NTN-B), Tesouro Educa+
  (60 parcelas mensais) e Tesouro Renda+ (240 parcelas mensais).
- **Dividendos NÃO são mais isentos em qualquer valor.** A Lei 15.270/2025 criou, com
  efeitos a partir de **1º/01/2026**, retenção de **IRRF de 10%** quando **uma mesma
  pessoa jurídica** paga, credita ou entrega a **uma mesma pessoa física residente no
  Brasil** mais de **R$ 50.000,00 em um mesmo mês**. A retenção incide sobre **o total
  pago**, não sobre o excedente. O limite é medido **por empresa pagadora**, não se
  somando entre companhias diferentes. Ficam fora do imposto os lucros apurados até o
  ano-calendário de **2025** cuja distribuição tenha sido aprovada até **31/12/2025**.
  Nunca escreva "isenção total de Imposto de Renda sobre dividendos".
- **JCP: a alíquota do IRRF é 17,5%, não 15%.** A Lei Complementar 224/2025 alterou o
  art. 9º, § 2º, da Lei 9.249/1995, com efeitos a partir de **1º/01/2026**. Os 15%
  valeram até 2025. A retenção no JCP **não tem faixa de isenção**: incide desde o
  primeiro real.
- **Dividendo obrigatório (Lei 6.404/76, art. 202):** o percentual é o que o estatuto
  fixar. Se o estatuto for **omisso**, a lei manda distribuir **metade do lucro líquido
  ajustado**. Se a assembleia alterar um estatuto omisso para introduzir a regra, o
  dividendo obrigatório **não pode ser inferior a 25%** do lucro líquido ajustado.
  Não escreva apenas "o estatuto define um percentual mínimo": está incompleto.
- **AGO (Lei 6.404/76, art. 132):** uma por ano, nos **4 primeiros meses seguintes ao
  término do exercício social**. Pautas: tomar as contas dos administradores; examinar,
  discutir e votar as demonstrações financeiras; deliberar sobre a destinação do lucro
  líquido e a distribuição de dividendos; eleger administradores e conselho fiscal.
- **Penny stock na B3:** a companhia deve manter a cotação **igual ou superior a R$ 1,00**
  por unidade. O descumprimento se configura quando a **cotação de fechamento** fica
  abaixo de R$ 1,00 por **30 pregões consecutivos**. A B3 notifica, a companhia divulga
  **fato relevante** de imediato, e o prazo para regularizar é fixado pela bolsa e **não
  pode ser inferior a seis meses** (ou vai até a primeira assembleia geral após a
  notificação, o que ocorrer primeiro). Não escreva "a B3 suspende a negociação".
- **Lote padrão da B3 = 100 ações, e o mercado fracionário continua existindo** (de 1 a
  99 papéis). Não escreva que o investidor pequeno "fica sem capital para entrar" por
  causa do preço do lote: ele compra no fracionário, que apenas costuma ter menos
  liquidez e spread maior.
- **Bonificação / capitalização de reservas (Lei 6.404/76, art. 169):** o aumento por
  capitalização de lucros ou reservas **importa alteração do valor nominal das ações OU
  distribuição de ações novas** na proporção do que cada sócio possui. Em companhia com
  ações sem valor nominal, pode ser feito **sem modificar o número de ações**. É errado
  dizer que a lei "exige a criação de novas ações".
- **Direito de preferência (Lei 6.404/76, art. 171):** o acionista tem preferência para
  subscrever o aumento **na proporção do número de ações que possuir**, e o estatuto ou
  a assembleia fixa prazo de decadência **não inferior a 30 dias**.
- **Índices B3 (Ibovespa, IBrX 100, IBrX 50)** — critérios apurados sobre a vigência das
  **3 carteiras anteriores**:
  - **Ibovespa:** estar entre os ativos que somam **85% do total dos Índices de
    Negociabilidade**; **presença em pregão de 95%**; participação **>= 0,1% do volume
    financeiro** no mercado à vista (lote padrão); **não ser penny stock**.
  - **IBrX 100:** ocupar as **100 primeiras posições** em ordem decrescente de IN;
    presença de 95%; não ser penny stock. **IBrX 50:** idem, **50 primeiras posições**.
  - **Penny stock (definição da B3 para índices):** ativo com cotação **inferior a
    R$ 1,00**, medida pelo **valor médio ponderado da vigência anterior** — não pelo
    preço de um dia isolado.
  - **Ponderação:** os três usam o **valor de mercado do free float**.
  - **Limites de peso: só o Ibovespa tem.** (a) o ativo não pode passar de **2x** o peso
    que teria se ponderado pelo IN; (b) a soma das ações e units de **uma mesma
    companhia** não pode passar de **20%**. Não atribua esses tetos ao IBrX.
  - **Rebalanceamento quadrimestral**, vigência a partir da **primeira segunda-feira de
    janeiro, maio e setembro**. Não escreva "trimestral".
- **Segmentos especiais da B3 — free float mudou em 2023.** Regra geral: **20% do capital
  social** (não 25%). Piso reduzido de **15%** quando o volume financeiro médio diário de
  negociação for **>= R$ 20 milhões** nos últimos 12 meses (não R$ 25 milhões). A regra
  vale para **Novo Mercado, Nível 2 E Nível 1** — não é exclusividade do Novo Mercado.
- **Novo Mercado — conselho de administração:** no mínimo **2 conselheiros independentes
  ou 20% do colegiado, o que for maior**, com arredondamento para cima. A exigência antiga
  de 5 conselheiros no total não vale mais.
- **Tag along:** piso legal de **80%**, exclusivo para **ações ordinárias** (Lei 6.404/76,
  art. 254-A). **Nível 2 e Novo Mercado: 100%.** No Nível 2 alcança ON e PN; no Novo
  Mercado só existem ON.
- **REGRA GERAL SOBRE NÚMEROS.** Todo percentual, prazo, alíquota, teto ou piso que você
  escrever e que **não esteja neste banco de fatos** deve vir marcado com `[CONFERIR]`,
  mesmo que você tenha certeza. A maior parte dos erros já encontrados neste projeto foi
  de número desatualizado escrito com confiança, sem marcação. Número sem marcação e sem
  respaldo aqui é erro de processo, não descuido.
- **MP 1.303/2025 CADUCOU em 08/10/2025.** Ela propunha alíquota única de 17,5% sobre
  aplicações financeiras, fim da isenção de LCI/LCA e troca da isenção mensal de R$ 20 mil
  por uma trimestral. **Nada disso entrou em vigor.** As regras antigas continuam valendo
  em 2026. Não escreva nenhuma alíquota "unificada de 17,5%" para investimentos — os
  17,5% de 2026 existem **só no JCP** (LC 224/2025).
- **Renda variável (IN RFB 1.585/2015):**
  - **15%** operações comuns (à vista, opções, termo, futuros — art. 57); **20%** day
    trade (art. 2º da Lei 11.033/2004).
  - **DARF até o último dia útil do mês subsequente ao da apuração** (art. 56, § 5º).
  - **Isenção (art. 59):** alienações de **ações no mercado à vista** que **não excedam
    R$ 20.000,00 no mês**; o mesmo teto vale, em separado, para **ouro ativo financeiro**.
    O teto mede **alienações**, não lucro. **Quatro exclusões (art. 59, § 2º):** day
    trade; cotas de **fundos de índice de ações (ETFs)**; resgates de cotas de fundos ou
    clubes de ações; ações alienadas no **exercício de opções e no termo**. Quase todo
    material só cita o day trade — cite as quatro.
  - **Definição de day trade (art. 65, § 1º, I):** operação ou conjugação de operações
    iniciadas e encerradas **no mesmo dia**, com o **mesmo ativo**, na **mesma instituição
    intermediadora**, em que a quantidade negociada tenha sido liquidada **total OU
    PARCIALMENTE**. É **errado** exigir "a mesma quantidade".
  - **Dedo duro:** **0,005%** nas operações comuns (art. 63) — base varia: no à vista é o
    **valor da alienação**; nos futuros, a soma dos ajustes diários se positiva; nas
    opções, o resultado positivo dos prêmios do dia. **Dispensada quando o valor for
    igual ou inferior a R$ 1,00** (§ 4º). No day trade, **1% sobre o rendimento**
    (resultado positivo), "por qualquer beneficiário, inclusive pessoa jurídica isenta"
    (art. 65) — essa frase é do day trade, **não** dos FII.
  - **Compensação (art. 64):** no próprio mês, nos meses seguintes e **inclusive nos
    anos-calendário seguintes**. Perda de day trade **só** compensa ganho de day trade, e
    perda comum **não** compensa ganho de day trade.
  - **FII:** ganho de capital na alienação de cotas paga **20%**, **sem** a isenção dos
    R$ 20 mil; perdas em cotas de FII só compensam ganhos em cotas de **fundo da mesma
    espécie** (art. 62, § 2º).
- **COE (Resolução CMN 4.263/2013, Instrução CVM 569/2015, IN RFB 1.585/2015 art. 51):**
  - Emitem COE apenas **bancos múltiplos, comerciais e de investimento e caixas
    econômicas**.
  - **Valor Nominal Protegido:** total dos **pagamentos mínimos previstos** ao investidor
    **igual ou superior ao investimento inicial**.
  - **Valor Nominal em Risco:** total dos pagamentos mínimos previstos **igual ou superior
    a uma parcela previamente definida do investimento inicial**. Essa é a definição
    normativa. É **errado** descrever a modalidade em risco como "sem piso nenhum" — o
    piso existe e é conhecido antes, só pode ser inferior a 100%.
  - A **perda máxima é o capital investido**: o COE não gera saldo devedor nem chamada de
    margem.
  - **Sem cobertura do FGC**, em qualquer modalidade. O investidor corre risco de crédito
    do emissor.
  - **DIE (Documento de Informações Essenciais) + termo de ciência de risco** assinado são
    exigidos na oferta a investidor não profissional ou fora de sistema organizado.
  - **Tributação:** tabela regressiva de renda fixa do **art. 46** (22,5% / 20% / 17,5% /
    15%), desde que registrado em sistema autorizado pelo Bacen ou CVM. Base de cálculo é
    o resultado positivo na liquidação ou cessão, **líquido do IOF quando couber**.
    Retenção **exclusiva na fonte**, sem DARF.
  - **Perdas em COE NÃO compensam ganhos líquidos de renda variável** (art. 51, § 3º).
  - **Não existe vedação legal a taxa de administração ou performance no COE.** O correto
    é dizer que o COE não é fundo, então não há essas taxas cobradas à parte: a
    remuneração do emissor está embutida na estrutura. Não invente "vedação".
- **Fundos de investimento — Resolução CVM 175/2022 (o marco vigente; NÃO use a antiga
  Instrução CVM 555 como referência):**
  - **Art. 4º:** o fundo é "uma comunhão de recursos, constituído sob a forma de
    **condomínio de natureza especial**, destinado à aplicação em ativos financeiros, bens
    e direitos". Escreva a expressão inteira; "condomínio" sozinho é incompleto.
  - **Art. 5º:** o regulamento pode prever **classes de cotas** com direitos e obrigações
    distintos, e o administrador deve constituir um **patrimônio segregado para cada
    classe**; cada patrimônio responde somente pelas obrigações da sua classe.
    - **§ 1º — limite que quase todo material ignora:** "Todas as classes devem pertencer
      à **mesma categoria do fundo**, não sendo permitida a constituição de classes de
      cotas que **alterem o tratamento tributário** aplicável em relação ao fundo ou às
      demais classes". Logo, **não existe** fundo com uma classe de renda fixa e outra de
      ações. Nunca use esse exemplo.
    - **§ 3º:** fundo sem classes distintas emite em **classe única**, podendo ainda ter
      subclasses.
    - **§ 4º:** é **vedada a afetação ou vinculação de parcela do patrimônio de uma classe
      a qualquer subclasse** — subclasse **não** tem patrimônio segregado.
    - **§ 5º:** subclasses podem ser diferenciadas **exclusivamente** por: **I** público-
      alvo; **II** prazos e condições de aplicação, amortização e resgate; **III** taxas de
      administração, gestão, máxima de distribuição, ingresso e saída. "Canais de
      distribuição" e "política de investimento" **não** estão na lista.
    - **§ 6º:** subclasses de **classes restritas** podem ainda diferenciar outros direitos
      econômicos e políticos.
    - **§ 7º:** **aberta e fechada são atributos da CLASSE**, não do fundo: classe aberta
      admite resgate, classe fechada não admite.
  - **Código Civil, art. 1.368-C:** além de definir o condomínio de natureza especial,
    **afasta expressamente** do fundo os arts. 1.314 a 1.358-A (condomínio comum).
  - **Código Civil, art. 1.368-E:** havendo limitação de responsabilidade e patrimônio
    insuficiente, aplica-se a **insolvência do próprio fundo**, preservado o patrimônio
    pessoal do cotista.
  - **Art. 8º:** o funcionamento depende de **prévio registro na CVM**, mas o registro é
    **automaticamente concedido** com o envio dos documentos por sistema eletrônico. A CVM
    **não analisa nem aprova** a estratégia antes. É errado descrever o registro como
    aprovação prévia.
  - **Art. 11:** cancelamento do registro da **classe aberta** cujo patrimônio líquido
    médio fique abaixo de **R$ 1 milhão por 90 dias consecutivos**, e da **classe fechada**
    que não atinja o patrimônio inicial mínimo após a distribuição.
  - **Art. 18 (e Código Civil, art. 1.368-D):** a responsabilidade do cotista **só é
    limitada ao valor subscrito se o regulamento previr**. Regulamento omisso = cotistas
    respondem por patrimônio líquido negativo, devendo atestar ciência do risco. **Nunca
    escreva que o cotista jamais responde por PL negativo.**
  - **FGC:** fundos não têm cobertura, e o motivo é estrutural: o fundo fica **fora do
    balanço** do administrador. O cotista corre o risco dos **ativos da carteira**, não do
    banco.
- **Classes de FIF (Resolução CVM 175, Anexo Normativo I) — concentração mínima:**
  - **Renda fixa:** fator de risco = variação da taxa de juros, de índice de preços, ou
    ambos; **no mínimo 80%** do patrimônio em ativos relacionados a esse fator.
  - **Cambial:** fator de risco = flutuação do preço da moeda estrangeira ou variação do
    **cupom cambial**; **no mínimo 80%**.
  - **Ações:** fator de risco = variação de preços de ações admitidas à negociação em
    mercado organizado; **no mínimo 67%**. Cumprido esse piso, tributação de **15% só no
    resgate, sem come-cotas**.
  - **Multimercado:** vários fatores de risco, **sem compromisso de concentração** em
    nenhum.
- **Alavancagem NÃO é livre no multimercado.** O Anexo I (art. 73, § 1º) limita a
  exposição a risco de capital, medida pela **margem bruta**, nas classes destinadas ao
  **público em geral**: **20%** do PL na renda fixa, **40%** nas classes de ações e
  cambial, **70%** no multimercado. Classes destinadas **exclusivamente a investidores
  profissionais** não se sujeitam a esses tetos. Nunca escreva que o multimercado tem
  "liberdade total" ou "ausência de limites".
- **Taxa de performance em classes de renda fixa:** a norma restringe a cobrança (Anexo I,
  art. 49) e há exceções. **Não afirme a regra nem as exceções de memória — marque
  `[CONFERIR]`.**
- **Tributação de fundos (IN RFB 1.585/2015 + Lei 14.754/2023):**
  - **Longo prazo** (prazo médio da carteira > 365 dias): tabela completa 22,5% / 20% /
    17,5% / 15%. **Curto prazo** (prazo médio <= 365 dias): só **22,5% até 180 dias e 20%
    acima de 180 dias** — nunca chega a 15%.
  - **Come-cotas:** último dia útil de **maio e novembro**, ou no resgate se anterior; e
    também na data em que se completa cada período de carência, nos fundos com **carência
    de até 90 dias**. Alíquotas: **20% curto prazo, 15% longo prazo** (IN 1.585, art. 9º,
    § 1º). No resgate aplica-se a **alíquota complementar** da tabela.
  - **Mecânica:** o administrador **reduz a QUANTIDADE de cotas** (art. 10). O valor
    unitário da cota **não** muda.
  - **MUDANÇA DE 2024 (Lei 14.754/2023, art. 17, § 8º):** a tributação periódica passou a
    abranger "todos os fundos de investimento constituídos sob a forma de condomínio
    **aberto ou fechado**". Antes, o fechado escapava do come-cotas. **Não repita a regra
    antiga.** Exceções (art. 18): **FIP, ETF salvo o de renda fixa, e FIDC**, quando
    enquadrados como entidades de investimento.
  - **FIA (Lei 14.754, art. 21):** carteira com **no mínimo 67%** em ações, recibos de
    subscrição, certificados de depósito de ações, BDRs, cotas de FIA e cotas de fundos de
    índice de ações. O critério é a **CARTEIRA, não a classe CVM** — um multimercado que
    cumpra os 67% é tributado como FIA. **15% só no resgate, sem come-cotas** (art. 24).
  - **IOF (Decreto 6.306/2007):** **art. 32** — 1% ao dia sobre o resgate, **limitado ao
    rendimento** conforme a tabela regressiva (limite de 96% do rendimento no 1º dia,
    zerando a partir do **30º dia**). **Art. 31** — resgate **antes de completada a
    carência**: **0,5% ao dia**. **Art. 32, § 2º, IV** — **alíquota zero** no resgate de
    cotas de fundos e clubes **de ações**.
  - **Ordem:** o **IOF é deduzido primeiro**; a base do IR é o valor da alienação
    **líquido do IOF** (IN 1.585, art. 46, § 1º).
- **Fundos imobiliários (FII):**
  - **Lei 8.668/1993, art. 2º:** o FII é constituído sob a forma de **condomínio fechado,
    proibido o resgate de cotas**. A regra é **da lei**, não da CVM. Resgate só no término
    do prazo de duração ou na liquidação do fundo (IN 1.585, art. 37, § 3º).
  - **Lei 8.668/1993, art. 10, parágrafo único:** distribuir **no mínimo 95% dos lucros
    auferidos, apurados segundo o regime de CAIXA**, com base em balanço ou balancete
    **semestral encerrado em 30 de junho e 31 de dezembro**. Três elementos que a banca
    troca: 95%, regime de caixa, semestral.
  - **Isenção dos rendimentos para PF — quatro condições** (Lei 11.033/2004, art. 3º, § 1º,
    redação da **Lei 14.754/2023**): (a) fundo com **no mínimo 100 cotistas** — subiu de 50
    para 100, **nunca foi 500**; (b) cotas admitidas à negociação **exclusivamente em bolsa
    ou balcão organizado**; (c) não alcança cotista PF com **10% ou mais** das cotas;
    (d) nem quem recebe **mais de 10%** dos rendimentos do fundo. A IN 1.585, art. 40,
    ainda diz "50 cotistas": é texto **desatualizado**, use a lei.
  - **Ganho de capital na alienação de cotas (IN 1.585, art. 37):** **20%**, "por qualquer
    beneficiário, **inclusive por pessoa jurídica isenta**" — aqui essa expressão é
    correta. **Sem** a isenção mensal de R$ 20 mil. Há **dedo duro de 0,005%** (art. 63
    remete ao art. 37) e DARF até o último dia útil do mês seguinte.
  - **Perdas em cotas de FII só compensam ganhos em cotas de fundo da MESMA ESPÉCIE**
    (art. 37, § 2º).
  - **IN 1.585, art. 38:** o FII que aplicar em empreendimento cujo **incorporador,
    construtor ou sócio** seja cotista com **mais de 25%** das cotas (isolado ou com pessoa
    ligada) passa a ser **tributado como pessoa jurídica**, perdendo o regime especial.
  - **Liquidação na B3:** **D+2** hoje; a B3 anunciou **D+1 para fevereiro de 2028**. Até
    lá, a resposta de prova é D+2.
- **Previdência complementar aberta (PGBL e VGBL):**
  - **Natureza:** o **PGBL** é plano de previdência complementar aberta; o **VGBL** é
    juridicamente **seguro de pessoas**. Ambos sob a **Susep**. Os recursos vão para um
    **FIE** (Fundo de Investimento Especialmente Constituído).
  - **Dedução do PGBL:** até **12% da renda bruta anual tributável** (Lei 9.532/1997,
    art. 11), exige **declaração no modelo completo** e **recolhimento ao RGPS (INSS) ou a
    regime próprio** (Lei 10.887/2004, art. 11).
  - **EXCEÇÃO que quase todo material omite — Lei 10.887/2004, art. 11, § 5º:**
    "Excetuam-se da condição de que trata o caput deste artigo os **beneficiários de
    aposentadoria ou pensão** concedidas por regime próprio de previdência ou pelo regime
    geral de previdência social." Ou seja, **aposentados e pensionistas deduzem sem estar
    contribuindo**. Não escreva a exigência do INSS como absoluta. Não há exceção por
    idade.
  - **Base de cálculo no resgate:** PGBL sobre o **valor total** (capital + rendimentos);
    VGBL **só sobre os rendimentos**.
  - **Sem come-cotas** na previdência complementar aberta; imposto **diferido** para o
    resgate ou a conversão em renda.
  - **Portabilidade** só entre planos da **mesma modalidade** (PGBL→PGBL, VGBL→VGBL);
    cruzada é **vedada**. Não há resgate nem retenção, e a **contagem de tempo é
    preservada**.
  - **STF, Tema 1214 (julgado em 16/12/2024, sem modulação de efeitos):** "É
    inconstitucional a incidência do ITCMD sobre o repasse aos beneficiários de valores e
    direitos relativos ao plano VGBL ou ao plano PGBL na hipótese de morte do titular do
    plano."
- **Regimes de tributação da previdência (Lei 11.053/2004, com a Lei 14.803/2024):**
  - **Tabela regressiva (art. 1º), seis faixas por prazo de acumulação:** **35%** até 2
    anos; **30%** acima de 2 até 4; **25%** acima de 4 até 6; **20%** acima de 6 até 8;
    **15%** acima de 8 até 10; **10%** acima de 10 anos. Imposto **definitivo** (§ 2º),
    exclusivo na fonte, **sem restituição**.
  - **Regime progressivo (art. 3º): os 15% valem para RESGATES**, como **antecipação** do
    devido na declaração. O **benefício** (renda mensal) é tributado pela **tabela
    progressiva mensal do IRPF**, como salário. **Não generalize os 15% para a renda.**
  - **Momento da opção (art. 1º, § 6º, redação da Lei 14.803/2024):** até **a obtenção do
    benefício ou a requisição do primeiro resgate**. Sem opção, o participante fica no
    **progressivo** (padrão). A opção é **IRRETRATÁVEL**, inclusive em portabilidade e
    transferência.
  - **Prazo de acumulação (art. 1º, § 3º):** a lei o define e **delega o cálculo a ato
    normativo**. Nos **resgates** aplica-se o **PEPS**; nas **rendas sob regime atuarial**
    (renda vitalícia) aplica-se o **prazo médio ponderado (PMP)**, que costuma resultar em
    alíquota maior. Não escreva que o PEPS vale para tudo.
  - **Portabilidade (art. 1º, § 4º):** o prazo acumulado no plano de origem **é computado**
    no plano receptor.
- **Conceitos técnicos da previdência (fonte: Susep, Perguntas e Respostas de
  Previdência Complementar Aberta):**
  - **Taxa de administração** incide sobre o **patrimônio** (desconto diário).
    **Taxa de carregamento** incide sobre a **movimentação** — contribuição, portabilidade
    ou resgate — **nunca** sobre patrimônio ou rentabilidade. **Teto: 10%.**
  - **Carências:** **resgate total, de 60 dias a 60 meses**; **resgate parcial, de 60 dias
    a 6 meses**; **portabilidade, 60 dias**, com **intervalo mínimo de 60 dias** entre
    portabilidades.
  - **Tábua atuarial:** maior expectativa de vida = saldo diluído por mais meses =
    **renda mensal MENOR**. A relação é inversa.
  - **Renda vitalícia simples:** a seguradora assume o **risco de sobrevivência**; na morte
    do titular o contrato se encerra e o **saldo não vira herança**. Variantes que protegem
    a família (prazo mínimo garantido, reversível ao beneficiário, reversível ao cônjuge
    com continuidade aos menores) **reduzem** o valor da parcela.
  - **Morte na fase de acumulação:** o saldo é pago aos **beneficiários indicados na
    proposta**. **Não afirme "sem inventário"** — essa é uma questão jurídica discutida,
    especialmente no PGBL, e não está assentada em norma. O que está assentado é o **STF,
    Tema 1214**: não incide **ITCMD** nesse repasse.
- **Crédito e garantias:**
  - **Aval:** títulos de crédito; **solidário** e **AUTÔNOMO** — "subsiste a
    responsabilidade do avalista, ainda que nula a obrigação daquele a quem se equipara, a
    menos que a nulidade decorra de vício de forma" (CC, art. 899, § 2º).
  - **Fiança:** contratos; **acessória**, com **benefício de ordem** (CC, art. 827). **Três
    hipóteses legais em que o benefício NÃO se aplica** (CC, art. 828): renúncia expressa;
    obrigar-se como principal pagador ou devedor solidário; devedor insolvente ou falido.
    Não cite só a renúncia contratual.
  - **CC, art. 1.647, III:** prestar **aval ou fiança exige autorização do cônjuge**, salvo
    no regime de **separação absoluta**.
  - **Penhor (CC, art. 1.431):** constitui-se pela **transferência efetiva da posse** ao
    credor. **Parágrafo único:** no penhor **rural, industrial, mercantil e de veículos** as
    coisas empenhadas **continuam em poder do devedor**. Cite as quatro modalidades.
  - **Hipoteca:** imóveis; propriedade **e** posse permanecem com o devedor; averbação na
    matrícula.
  - **Alienação fiduciária (Lei 9.514/1997, art. 22):** transfere ao credor a
    **PROPRIEDADE RESOLÚVEL** — nunca escreva "propriedade definitiva". O devedor mantém a
    **posse direta**.
  - **Execução extrajudicial (arts. 26 e 27):** intimação pelo **oficial do registro de
    imóveis**, **15 dias** para purgar a mora, averbação da **consolidação da propriedade**,
    e **leilão público em 60 dias** contados do registro; segundo leilão nos **15 dias**
    seguintes. Tudo **fora do Judiciário** — é o contraste com a hipoteca, que exige
    processo judicial.
- **Cheque especial (Resolução CMN 4.765/2019):** juros remuneratórios sobre o valor
  utilizado **limitados a 8% ao mês** para pessoa natural e microempresa (art. 3º),
  vigente desde 06/01/2020. **A tarifa de disponibilização de 0,25% sobre o limite acima
  de R$ 500 NÃO existe mais:** o **STF declarou inconstitucional** a cobrança por cheque
  especial não utilizado (ADI 6407, 2021). Não a cite como vigente.
- **Crédito rotativo (Resolução CMN 4.549/2017, em vigor desde 03/04/2017):** o saldo só
  pode ser financiado no rotativo **até o vencimento da fatura subsequente**; depois, a
  instituição **deve oferecer linha de parcelamento em condições mais vantajosas**. É
  **vedado** financiar no rotativo **valores já parcelados**. Prefira a redação da norma
  ("até o vencimento da fatura subsequente") a dizer "30 dias".
- **Teto de juros e encargos do cartão (Lei 14.690/2023 + resolução do CMN de dez/2023,
  em vigor desde 03/01/2024):** juros e encargos do **rotativo e do parcelamento da
  fatura** não podem ultrapassar **o valor original da dívida**. **O IOF fica fora** desse
  cálculo, e o **parcelado sem juros não foi alterado**.
- **IOF sobre crédito (Decreto 6.306/2007, art. 7º):** **alíquota diária de 0,0082% para o
  mutuário pessoa física**, somada à **alíquota adicional fixa de 0,38%**, devida
  independentemente do prazo (§ 15). No cheque especial e no rotativo a base é o
  **somatório mensal dos acréscimos diários dos saldos devedores** (§ 16). O IOF não
  excede a alíquota diária x 365 dias mais o adicional (§ 1º). Atenção: os Decretos
  12.466/2025 e 12.499/2025 mexeram em alíquotas de **pessoa jurídica** e parte foi
  **sustada** pelo Decreto Legislativo 176/2025 — para **pessoa física** valem os números
  acima.
- **Margem consignável (Lei 10.820/2003, art. 1º, § 1º):** limite de **40%** da
  remuneração, sendo **35%** exclusivamente para empréstimos, financiamentos e
  arrendamentos mercantis e **5%** exclusivamente para **cartão de crédito consignado**.
  **Não existe, na lei, margem separada de 5% para "cartão de benefício"** — não invente
  a terceira faixa. Os percentuais mudam com frequência (lei e medida provisória) e variam
  por categoria: em 2026 o teto das consignações facultativas do **servidor público
  federal** caiu de 45% para 40%, com redução gradual programada. **Sempre marque
  `[CONFERIR]` no percentual.** Ensine o mecanismo (teto por modalidade), não o número.
- **Lei 15.327/2026 (consignado do INSS):** trata de **vedação de descontos associativos**,
  **bloqueio padrão do benefício** para consignado, autorização por **biometria** e
  ressarcimento em 30 dias. **Não alterou margem consignável nem criou teto de juros** —
  há material circulando que afirma isso e está errado.
- **Liquidação antecipada:** direito assegurado pelo **CDC, art. 52, § 2º** (total ou
  parcial, com **redução proporcional dos juros e demais acréscimos**). A regulação
  bancária **veda a cobrança de tarifa** por liquidação antecipada, e a vedação alcança
  **pessoa física E microempresas/empresas de pequeno porte** — não escreva "apenas pessoa
  física". A Resolução CMN 3.516/2007 foi **revogada** em 2022 e a matéria foi
  consolidada; **não cite o número da resolução sem conferir**.
- **Portabilidade de crédito (Resolução CMN 4.292/2013, art. 3º):** "O valor e o prazo da
  operação na instituição proponente não podem ser superiores ao saldo devedor e ao prazo
  remanescente da operação de crédito objeto da portabilidade na data da transferência de
  recursos." **Exceção do § 3º:** admite-se portabilidade para **modalidade de crédito
  diversa**, e nesse caso **não se aplica a restrição quanto ao prazo**. Troco ou
  alongamento fora dessa hipótese = **refinanciamento**, não portabilidade.
- **Tarifa de Cadastro (Resolução CMN 3.919/2010, Tabela I, item 1.1):** remunera a
  pesquisa em serviços de proteção ao crédito e o tratamento de dados necessários ao
  **início do relacionamento** (abertura de conta ou contratação de crédito/arrendamento).
  **Não pode ser cobrada cumulativamente** — quem abre conta e contrata crédito no mesmo
  momento paga **uma só**. Não há previsão de cobrança por **renovação** de cadastro.
- **Retomada de veículo em alienação fiduciária — MUDOU em 2023.** Antes, só a **ação
  judicial de busca e apreensão** (Decreto-Lei 911/1969). A **Lei 14.711/2023** (Marco
  Legal das Garantias) acrescentou os arts. 8º-B a 8º-E ao DL 911 e criou a **via
  extrajudicial** para bens móveis: notificação pelo **cartório**, **20 dias** para pagar,
  consolidação da propriedade no registro, entrega do bem sob pena de multa de **5%**, e
  possibilidade de restrição de circulação do veículo. **As duas vias coexistem** e o
  credor escolhe. Não escreva que a retomada de veículo "é sempre judicial" nem que "é
  sempre extrajudicial".
- **Sigla ambígua:** no tópico de Crédito Direto ao Consumidor, **CDC** significa tanto o
  produto quanto o **Código de Defesa do Consumidor**. Deixe explícito qual dos dois está
  em jogo em cada frase.
- **Crédito imobiliário (Voto CMN 64/2025 e normas do SFH/SFI):**
  - **Direcionamento da poupança:** hoje **65%** do saldo em operações imobiliárias, com ao
    menos **80%** dessa fatia no SFH; **20%** compulsório e **15%** livres. O CMN aprovou
    em 2025 a elevação para **100%** dos depósitos direcionados a operações imobiliárias,
    mantidos os 80% no SFH, com medidas complementares em **janeiro de 2026** e novo
    modelo em **janeiro de 2027**.
  - **SFH — teto de avaliação do imóvel: R$ 2.250.000,00.** Elevado em 2025; o valor
    anterior, de **R$ 1,5 milhão**, ficou sete anos parado e ainda aparece em material
    desatualizado. **Não escreva R$ 1,5 milhão.**
  - **SFH — teto de juros: 12% ao ano** de custo efetivo máximo ao mutuário. Mantido na
    revisão de 2025.
  - **FGTS só no SFH**, e o imóvel deve ser **residencial** e destinado à moradia do
    tomador. **SFI:** sem teto de valor, sem teto de juros e **sem FGTS**.
  - **Execução extrajudicial (Lei 9.514/1997):** **15 dias** para purgar a mora após
    intimação do oficial do registro de imóveis; consolidada a propriedade, **leilão em até
    60 dias** do registro e **segundo leilão nos 15 dias** seguintes.
- **Consórcio (Lei 11.795/2008):**
  - **Art. 6º:** a normatização, coordenação, supervisão, fiscalização e controle do
    sistema de consórcios são do **Banco Central do Brasil** (nunca CVM).
  - **Art. 22:** contemplação é a atribuição do crédito **para aquisição do bem ou serviço
    e também para a restituição das parcelas pagas, no caso dos excluídos**. **§ 1º:**
    ocorre **apenas por sorteio ou lance**. **§ 2º:** concorrem à contemplação o
    consorciado **ativo** e os **excluídos, estes só para efeito de restituição**.
    **§ 3º:** o contemplado pode usar o crédito para **quitar financiamento de sua
    titularidade**, mediante aprovação da administradora.
  - **Art. 30:** o excluído não contemplado recebe a importância paga **ao fundo comum**,
    calculada pelo **percentual amortizado do valor do bem vigente na data da assembleia
    de contemplação**, acrescida dos rendimentos das aplicações. **A taxa de administração
    já paga não volta.**
  - **Art. 31:** em até **60 dias** da última assembleia de contemplação do grupo, a
    administradora comunica aos não contemplados a disponibilidade dos créditos.
  - **STJ, Tema 312:** "É devida a restituição de valores vertidos por consorciado
    desistente ao grupo de consórcio, mas não de imediato, e sim em até trinta dias a
    contar do prazo previsto contratualmente para o encerramento do plano." Essa tese
    alcança os contratos **anteriores** à Lei 11.795/2008; para os posteriores vale o rito
    da lei. Ao responder "sorteio ou encerramento do grupo?", explique os **dois regimes**.
  - **Reajuste da carta de crédito** (INCC no imobiliário, tabela da montadora em
    veículos) eleva a parcela de **todos**, inclusive dos **já contemplados**.
- **Conta corrente:**
  - **Serviços essenciais gratuitos (Resolução CMN 3.919/2010, art. 2º, I):** por mês,
    **4 saques**, **2 extratos** (movimentação dos últimos 30 dias), **2 transferências
    entre contas da PRÓPRIA instituição** e **10 folhas de cheque**, além do **cartão de
    débito**, da sua **segunda via** (salvo perda/roubo/furto/dano imputáveis ao cliente),
    das **consultas pela internet**, da **compensação de cheques** e do **extrato
    consolidado anual até 28 de fevereiro**. As duas transferências gratuitas **não** são
    TED.
  - **Encerramento (Resolução CMN 4.753/2019, art. 5º):** o cliente pode solicitar **pelo
    mesmo canal usado na abertura** (§ 2º) e a instituição tem prazo **limitado a 30 dias
    corridos** para as providências de rescisão (inciso IV, "a"). A instituição deve
    informar os procedimentos para pagamento dos compromissos, mas **o encerramento não
    fica condicionado à quitação**. A resolução **não** prevê expressamente a entrega de
    recibo com data de extinção — não afirme isso.
  - **Motivos de devolução de cheque (Manual Operacional da COMPE):** **11** sem fundos na
    1ª apresentação; **12** sem fundos na 2ª apresentação; **13** conta encerrada; **14**
    prática espúria. **A inclusão no CCF decorre dos motivos 12, 13 E 14** — não apenas do
    12. O motivo 11 sozinho não inclui.
  - **DOC e TEC foram extintos em 15 de janeiro de 2024** (Febraban). Restam TED e Pix.
  - **Portabilidade de salário:** gratuita, no mesmo dia, para conta de **mesma
    titularidade** (mesmo CPF) em qualquer instituição.
- Prefira ensinar o mecanismo a decorar a tabela. "A alíquota cai conforme o prazo
  de aplicação" envelhece bem; um número errado, não.
- **Confira o que cada sigla significa por extenso.** Errar o nome de uma sigla é
  erro grave: o aluno decora errado e leva para a prova.
- **Nunca invente mnemônico ou macete de sigla.** Se as letras não ajudam a lembrar
  o conceito, diga isso e ancore a memória no que a questão cobra de fato.
- Se você não deixou nenhum `[CONFERIR]` no lote, escreva isso explicitamente no fim
  da resposta. Silêncio não vale como conferência.

## 5. Como escrever (isto não é opcional)

O texto vai direto para o aluno, então segue o padrão de escrita do projeto:

- Sem travessão. Use vírgula, ponto ou parênteses.
- Sem a construção "não é X, é Y" e suas variações.
- Sem gerúndio de conclusão ("fazendo com que", "sendo assim", "podendo ser").
- Sem adjetivo inflado: crucial, fundamental, essencial, jornada, potencial,
  robusto, poderoso.
- Sem fecho motivacional genérico no fim das seções.
- Sem emoji dentro de frase.
- Frases curtas. Voz ativa. Segunda pessoa ("você").
- Não abra parágrafo anunciando o que vai dizer. Diga.
- Ao usar uma sigla pela primeira vez, escreva o nome por extenso antes. O leitor
  desta certificação está aprendendo o vocabulário agora.
- **O texto fala com o aluno, sempre.** Nunca escreva "lembre o aluno", "explique ao
  candidato" ou qualquer coisa dirigida a um professor. Quem lê é quem vai fazer a
  prova.
- **Sem absoluto onde existe condição.** Se a afirmação só vale carregando o título
  até o vencimento, escreva isso na mesma frase, em vez de "sempre" ou "garante".
  Uma seção do texto não pode contradizer a outra.
- Nada de gerúndio de conclusão, inclusive nas formas reflexivas: "sujeitando-se a",
  "gerando", "fazendo com que", "acarretando".
- A seção "Em uma frase" diz o CONTEÚDO do tópico, não anuncia que o aluno precisa
  aprender alguma coisa. Compare: "você precisa entender os três títulos" (ruim) e
  "a LFT acompanha a Selic, a LTN é prefixada e a NTN-B paga inflação mais juro
  real" (bom).
- Quando o tópico tiver nomenclatura dupla, técnica e comercial, cite as duas e
  aponte em qual tópico a outra é tratada, em vez de repetir o conteúdo.

## 6. Antes de entregar, confira cada arquivo

1. Os cinco títulos estão presentes, na ordem, com os nomes exatos.
2. `materia` e `topico` batem, caractere por caractere, com a seção 7.
3. Entre 800 e 1.500 palavras.
4. O cartão de revisão tem no máximo 10 linhas e faz sentido sozinho, sem o corpo.
5. Nenhum travessão, nenhum HTML, nenhum link.
6. Toda sigla foi aberta na primeira aparição, com o nome por extenso correto.
7. Todo número duvidoso está marcado como `[CONFERIR]`. Se não houver nenhum, isso
   está dito na resposta.
8. Nenhuma frase se dirige a um professor. Nenhum mnemônico inventado.
9. Nenhuma afirmação absoluta que outra seção do próprio texto contradiga.

## 7. Lote desta rodada

Escreva um arquivo para cada tópico abaixo. Copie os nomes exatamente como estão.

**Matéria:** `Produtos do Mercado Financeiro`

**Tópicos:**

1. `Títulos públicos federais: LFT, LTN e NTN-B`
2. `Tesouro Direto: plataforma, títulos e custos`
3. `CDB, RDB e RDC`
4. `LCI, LCA e LCD`
5. `Debêntures, debêntures de infraestrutura e conversíveis`
6. `CRI e CRA`

Comece pelo primeiro tópico e me mostre só ele. Vou revisar e confirmar antes de
você seguir para os outros cinco.

---
---

# Anexo — os 100 tópicos da CPA

Na ordem em que o aluno encontra no cronograma. Recorte daqui para montar a seção 7
de cada rodada.

### 1º no cronograma — Produtos do Mercado Financeiro (peso 40 · 40 tópicos)

1. Títulos públicos federais: LFT, LTN e NTN-B
2. Tesouro Direto: plataforma, títulos e custos
3. CDB, RDB e RDC
4. LCI, LCA e LCD
5. Debêntures, debêntures de infraestrutura e conversíveis
6. CRI e CRA
7. Rating de crédito
8. Poupança: rendimento, data de aniversário e garantias
9. TR e TLP
10. Tributação das aplicações de renda fixa
11. IOF nas aplicações financeiras
12. Renda variável: definição, mercado primário e secundário
13. Sociedades anônimas: S/A aberta, fechada e empresa listada
14. Classes de ações: ordinárias, preferenciais, units, BDRs e bônus de subscrição
15. IPO, OPA e follow on
16. Eventos corporativos: dividendos, JCP e assembleias (AGO e AGE)
17. Eventos corporativos: grupamento, desdobramento, bonificação e subscrição
18. Índices de mercado: Ibovespa, IBrX 100 e IBrX 50
19. Governança corporativa: segmentos de listagem, tag along, drag along e free float
20. Tributação da renda variável: alíquotas, isenções e compensação de perdas
21. COE: estrutura, capital protegido e tributação
22. Fundos de investimento: conceito, condomínio e registro na CVM
23. Resolução CVM 175: classes, subclasses e segregação patrimonial
24. Características, estratégias, carteiras e riscos dos fundos
25. Tributação dos fundos de investimento
26. Fundos imobiliários (FIIs)
27. PGBL e VGBL: quando usar cada um
28. Regimes de tributação progressivo e regressivo na previdência
29. Conceitos técnicos da previdência complementar
30. Princípios para disponibilização de crédito e garantias
31. Cartão de crédito, crédito rotativo e cheque especial
32. Crédito consignado e crédito pessoal
33. Crédito Direto ao Consumidor (CDC)
34. Crédito imobiliário
35. Capital de giro e consórcio
36. Conta corrente
37. Conta internacional
38. Compra e venda de moeda estrangeira
39. Seguros de vida
40. Seguros patrimoniais

### 2º no cronograma — Relacionamento com o Cliente (peso 30 · 30 tópicos)

1. Faixa etária, exposição ao risco e produtos adequados ao perfil
2. Ciclo de vida: acumulação, crescimento, preservação e distribuição
3. Educação financeira e capacidade de poupança
4. Orçamento e fluxo de caixa pessoal ou familiar
5. Gestão de dívidas: escolha da melhor dívida e garantias
6. Empréstimo, financiamento e modalidades de crédito ao consumidor
7. Financiamento imobiliário, de veículos e crédito estudantil
8. Microcrédito, crédito rural e linhas para reforma e energia sustentável
9. Reserva de emergência: montante e ativos de alta liquidez
10. Balanço patrimonial pessoal: indicadores e patrimônio líquido
11. Etapas do planejamento financeiro pessoal e metas
12. Planejamento para aposentadoria e fundo educacional
13. IRPF: o que declarar, classificação de rendimentos e modelos
14. Tipos de investimento, tolerância a risco e horizonte
15. Gestão financeira: emergências e uso do crédito
16. Gestão de investimentos
17. Gestão de risco e seguros
18. Perfis da pessoa investidora
19. Adequação de produtos financeiros (suitability)
20. Avaliação de risco e retorno
21. Diversificação de carteira
22. Pessoa investidora profissional e qualificada
23. Código de conduta ética Anbima: os nove princípios
24. Suitability e Código de Distribuição da Anbima
25. Ética profissional no atendimento ao cliente
26. Riscos associados à atividade profissional
27. Prevenção à lavagem de dinheiro: conceitos e obrigações
28. Combate ao financiamento do terrorismo e comunicação ao Coaf
29. Lei Geral de Proteção de Dados (LGPD)
30. Crimes e ilícitos contra o mercado de capitais

### 3º no cronograma — Estrutura e Dinâmica do Sistema Financeiro Nacional (peso 20 · 20 tópicos)

1. Órgãos normativos: CMN, CNSP e CNPC
2. Supervisão: Banco Central, CVM, Susep e Previc
3. Operadores do sistema: bancos, cooperativas e instituições de pagamento
4. Demais operadores: corretoras, distribuidoras, fintechs e seguradoras
5. Autorreguladores, FGC e Sistema Brasileiro de Pagamentos
6. Fluxo circular da renda e subdivisões do mercado financeiro
7. Política fiscal, dívida pública e Lei de Responsabilidade Fiscal
8. Política monetária: instrumentos e canais de transmissão
9. Copom, regime de metas de inflação e taxa Selic
10. Política cambial, regimes de câmbio e taxa PTAX
11. Indicadores econômicos: PIB, IPCA, IGP-M e desemprego
12. Risco de liquidez, de crédito e de mercado
13. Taxa de juros nominal e real, indexadores e fórmula de Fisher
14. Capitalização simples versus capitalização composta
15. Fluxo de caixa: valor presente, valor futuro e VPL
16. TIR, custo de oportunidade, taxa livre de risco e duration
17. Sistemas de amortização SAC e price, payback e desconto bancário
18. Infraestruturas do mercado financeiro: SPB, SPI e Selic
19. Clearings, contrapartes centrais e risco de contraparte
20. Classificação de investidores, autorregulação Anbima e BSM

### 4º no cronograma — Inovação e Desenvolvimento de Mercado (peso 10 · 10 tópicos)

1. Conceitos de ESG: ambiental, social e governança
2. Aspectos ambientais e sociais no mercado financeiro
3. Governança corporativa e ESG
4. ESG e finanças: impactos na indústria de investimentos
5. Produtos e estratégias de investimento ESG
6. Fundos de investimento sustentável (IS) e fundos que integram ESG
7. Finanças descentralizadas (DeFi), smart contracts e tokenização
8. Open finance, open investment e open insurance
9. Inteligência artificial no atendimento e no mercado financeiro
10. Fintechs, sandbox regulatório e meios de pagamento
