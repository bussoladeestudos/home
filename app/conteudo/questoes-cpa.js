/* GERADO por outputs/questoes_para_js.py. NAO editar a mao.
   Fonte: _conteudo/cpa/questoes/**.yaml  ·  15 questoes em 3 topicos
   Para mudar uma questao, edite o YAML e rode o script de novo. */
window.QUESTOES_DATA = Object.assign(window.QUESTOES_DATA || {}, {
 "cpaAnbima": {
  "Produtos do Mercado Financeiro": {
   "Títulos públicos federais: LFT, LTN e NTN-B": [
    {
     "id": "cpa-prod-01-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. A Letra Financeira do Tesouro (LFT) é pós-fixada e acompanha a variação diária da Selic. A Letra do Tesouro Nacional (LTN) é prefixada: o investidor já sabe a taxa no momento da aplicação. A Nota do Tesouro Nacional série B (NTN-B) tem rentabilidade híbrida, com uma parte corrigida pelo IPCA e outra prefixada, o juro real.</p><p>A alternativa A é a armadilha clássica da banca: ela inverte LTN e LFT. As siglas não ajudam, porque as duas terminam em Tesouro. A C embaralha as três. A D erra ao chamar todas de pós-fixadas.</p><p>Regra de bolso: guarde pelo indexador, e não pela sigla. LFT segue a Selic, LTN é prefixada, NTN-B é IPCA mais juro real.</p>",
     "enunciado": "<p>Um cliente pede que você explique a diferença entre os três títulos públicos federais mais negociados. A associação correta entre o título e a sua forma de remuneração é:</p>",
     "alternativas": {
      "a": "A LFT é prefixada, a LTN acompanha a Selic e a NTN-B paga IPCA mais juro real.",
      "b": "A LFT acompanha a Selic, a LTN é prefixada e a NTN-B paga IPCA mais juro real.",
      "c": "A LFT paga IPCA mais juro real, a LTN acompanha a Selic e a NTN-B é prefixada.",
      "d": "Os três títulos são pós-fixados e se diferenciam apenas pelo prazo de vencimento."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A LTN e a LFT estão invertidas. Guarde pelo indexador, não pela sigla.",
      "c": "Nenhuma das três associações está correta.",
      "d": "Só a LFT é pós-fixada. A LTN é prefixada e a NTN-B é híbrida."
     }
    },
    {
     "id": "cpa-prod-01-q2",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. A NTN-B é o único dos três que corrige o principal pelo IPCA e paga, além disso, uma taxa prefixada chamada de juro real. Carregada até o vencimento, ela entrega ganho acima da inflação do período, que é exatamente o que a cliente pediu.</p><p>A alternativa A é a distratora mais cobrada da prova. A LFT acompanha a Selic, que reage à inflação, mas a proteção direta contra a perda do poder de compra está na NTN-B. A B erra porque a taxa prefixada é travada: se a inflação vier acima do esperado, o ganho real encolhe. A D confunde risco de crédito com risco de inflação.</p>",
     "enunciado": "<p>Uma cliente de 45 anos quer investir pensando na aposentadoria e diz que a maior preocupação dela é não perder poder de compra ao longo dos próximos vinte anos. Qual título público atende diretamente a essa necessidade?</p>",
     "alternativas": {
      "a": "A LFT, porque a Selic reage à inflação e protege o investidor.",
      "b": "A LTN, porque a taxa prefixada já embute a inflação esperada.",
      "c": "A NTN-B, porque corrige o valor pelo IPCA e ainda paga um juro real acima dele.",
      "d": "Qualquer título público, porque todos têm risco soberano."
     },
     "gabarito": "c",
     "feedback": {
      "a": "A Selic reage à inflação, mas não é correção pelo índice de preços.",
      "b": "A taxa prefixada é fixa. Se a inflação surpreender, ela corrói o ganho.",
      "d": "Risco soberano é risco de crédito baixo, e não proteção contra inflação."
     }
    },
    {
     "id": "cpa-prod-01-q3",
     "tipo": "vf",
     "nivel": 1,
     "usar_em": [
      "revisao"
     ],
     "comentario": "<p>Falso, e a inversão está justamente na palavra Principal. A NTN-B padrão é a que paga cupons semestrais. A NTN-B Principal elimina esses pagamentos e devolve tudo de uma vez no vencimento, formato que o mercado chama de bullet.</p><p>A ausência de cupons torna a NTN-B Principal mais sensível à marcação a mercado, porque todo o fluxo está concentrado no fim.</p>",
     "enunciado": "<p>A NTN-B Principal paga cupons semestrais de juros ao investidor e devolve o valor principal apenas no vencimento.</p>",
     "alternativas": {
      "v": "Verdadeiro",
      "f": "Falso"
     },
     "gabarito": "f"
    },
    {
     "id": "cpa-prod-01-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. A marcação a mercado é a atualização diária do preço do título no mercado secundário. Quando os juros sobem, o investidor passa a exigir prêmio maior, e o preço dos títulos que já estão na carteira cai para se ajustar à nova taxa. É uma relação inversa entre taxa e preço.</p><p>O ponto que a prova cobra: a rentabilidade contratada continua garantida, desde que o cliente carregue o papel até o vencimento. A oscilação só vira perda de verdade se ele vender antes.</p><p>A A e a C inventam mudanças que não existem. A D é erro de conduta, porque recomenda exatamente o que realiza o prejuízo.</p>",
     "enunciado": "<p>Um cliente comprou uma LTN há dois meses e liga assustado: o extrato mostra rentabilidade negativa no período. Nesse intervalo, a taxa de juros de mercado subiu. Qual é a explicação correta?</p>",
     "alternativas": {
      "a": "O Tesouro Nacional reduziu a taxa contratada do título depois da compra.",
      "b": "Houve marcação a mercado. Com a alta dos juros, o preço do título prefixado caiu, mas a taxa contratada continua garantida se ele carregar até o vencimento.",
      "c": "A LTN passou a ser pós-fixada e agora acompanha a nova taxa de juros.",
      "d": "O cliente perdeu o direito à rentabilidade e deve resgatar imediatamente para limitar o prejuízo."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A taxa contratada não muda. O que oscila é o preço no mercado secundário.",
      "c": "A LTN é prefixada do início ao fim. O indexador não muda no meio do caminho.",
      "d": "Resgatar agora é justamente o que transforma a oscilação em perda real."
     }
    },
    {
     "id": "cpa-prod-01-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a B. Cada cupom sofre retenção de imposto de renda na fonte pela tabela regressiva da renda fixa, e a alíquota é definida pelo prazo contado desde a data de aquisição do título, não pelo intervalo entre um cupom e outro. Quem carrega o papel há três anos já está na faixa de 15%.</p><p>A alternativa A é a pegadinha, e é a que mais derruba candidato: ela usa o intervalo semestral como se fosse o prazo do investimento. Quem comprou a NTN-B há um mês e recebe o primeiro cupom aí sim paga 22,5%, porque o prazo desde a aquisição é curto.</p><p>O imposto incide pro rata tempore, sobre a parcela do rendimento produzida entre a aquisição, ou o cupom anterior, e o pagamento. Base: Instrução Normativa RFB 1.585/2015, art. 46.</p>",
     "enunciado": "<p>Um investidor comprou uma NTN-B com juros semestrais há três anos e vai receber o cupom deste semestre. Sobre a tributação desse pagamento, é correto afirmar que:</p>",
     "alternativas": {
      "a": "A alíquota é de 22,5%, porque o intervalo entre um cupom e outro é inferior a 180 dias.",
      "b": "A alíquota é de 15%, porque o prazo é contado desde a data de aquisição do título.",
      "c": "O cupom é isento de imposto de renda, e a tributação só ocorre no vencimento.",
      "d": "A alíquota é de 20%, aplicada de forma fixa sobre todos os cupons de qualquer NTN-B."
     },
     "gabarito": "b",
     "feedback": {
      "a": "O prazo não é contado entre cupons. É contado desde a aquisição do papel.",
      "c": "Não há isenção. Cada cupom sofre retenção na fonte.",
      "d": "Não existe alíquota fixa para cupom. Vale a tabela regressiva."
     }
    }
   ],
   "Tesouro Direto: plataforma, títulos e custos": [
    {
     "id": "cpa-prod-02-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. A plataforma do Tesouro Direto usa nomes comerciais voltados ao indexador, e a prova cobra a correspondência com as siglas técnicas:</p><p>LFT é o Tesouro Selic. LTN é o Tesouro Prefixado. A NTN-B Principal, sem cupons, é o Tesouro IPCA+. A NTN-B que paga cupons semestrais é o Tesouro IPCA+ com Juros Semestrais.</p><p>A plataforma ainda vende dois títulos com finalidade definida: o Tesouro Educa+, que paga em 60 parcelas mensais, e o Tesouro Renda+, que paga em 240 parcelas mensais. Os dois são corrigidos pelo IPCA mais juro real.</p>",
     "enunciado": "<p>Um cliente abre a plataforma do Tesouro Direto e pergunta qual dos títulos da vitrine corresponde à NTN-B Principal, aquela que não paga juros no meio do caminho. A resposta correta é:</p>",
     "alternativas": {
      "a": "Tesouro Selic.",
      "b": "Tesouro Prefixado.",
      "c": "Tesouro IPCA+.",
      "d": "Tesouro IPCA+ com Juros Semestrais."
     },
     "gabarito": "c",
     "feedback": {
      "a": "Tesouro Selic é o nome comercial da LFT.",
      "b": "Tesouro Prefixado é o nome comercial da LTN.",
      "d": "Esse é o nome da NTN-B padrão, justamente a que paga cupons."
     }
    },
    {
     "id": "cpa-prod-02-q2",
     "tipo": "vf",
     "nivel": 1,
     "usar_em": [
      "revisao"
     ],
     "comentario": "<p>Falso. O FGC protege depósitos e emissões bancárias, como CDB, RDB, poupança e letras de crédito. Título público federal não entra nessa lista, e não precisa: a garantia vem do próprio governo federal, que é o menor risco de crédito da economia, o chamado risco soberano.</p><p>A prova gosta desta afirmação porque ela soa protetora e o candidato distraído aceita. Guarde a lógica: o FGC existe para cobrir o risco de quebra de um banco, e o emissor aqui não é um banco.</p>",
     "enunciado": "<p>Os títulos adquiridos pela plataforma do Tesouro Direto contam com a cobertura do Fundo Garantidor de Créditos (FGC) até o limite de R$ 250.000,00 por CPF.</p>",
     "alternativas": {
      "v": "Verdadeiro",
      "f": "Falso"
     },
     "gabarito": "f"
    },
    {
     "id": "cpa-prod-02-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. A taxa de custódia remunera a B3 pela guarda eletrônica dos títulos e pela manutenção do sistema. São 0,20% ao ano incidentes sobre o saldo em títulos, somando o capital investido e os juros acumulados. O Tesouro Selic tem isenção até R$ 10.000,00 por CPF, e acima disso a taxa incide apenas sobre o que exceder.</p><p>A alternativa A é a pegadinha mais frequente do tópico, porque troca a base de cálculo: a cobrança recai sobre o saldo, e não sobre o rendimento.</p><p>A C descreve a taxa de administração, que é outra coisa: essa sim é livre, cobrada pela instituição financeira, que pode inclusive zerar. Não confunda as duas.</p>",
     "enunciado": "<p>Sobre a taxa de custódia cobrada pela B3 no Tesouro Direto, é correto afirmar que ela:</p>",
     "alternativas": {
      "a": "Incide apenas sobre a rentabilidade obtida no período, à alíquota de 0,20% ao ano.",
      "b": "Incide sobre o valor dos títulos na carteira, capital mais juros acumulados, à alíquota de 0,20% ao ano, com isenção para o Tesouro Selic até R$ 10.000,00 por CPF.",
      "c": "É definida livremente por cada instituição financeira, que pode isentar o investidor.",
      "d": "Substitui o imposto de renda, dispensando qualquer outra retenção no resgate."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A base não é o rendimento. É o saldo em títulos.",
      "c": "Essa é a taxa de administração, cobrada pela instituição, e não a de custódia.",
      "d": "A custódia remunera a B3. O imposto de renda continua sendo retido normalmente."
     }
    },
    {
     "id": "cpa-prod-02-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. O programa oferece liquidez diária para todos os títulos da vitrine, e o próprio Tesouro Nacional atua como comprador no mercado secundário, garantindo a recompra em todos os dias úteis. O cliente não depende de achar um comprador.</p><p>A alternativa C é a mais perigosa, porque erra por excesso: existe a recompra, mas ela é feita pelo preço de mercado do dia. Se os juros subiram, um título prefixado ou atrelado à inflação pode ser recomprado abaixo do valor pago. Liquidez garantida não é preço garantido.</p><p>Vale lembrar a mecânica de liquidação: pedido entre 9h30 e 13h fica disponível a partir das 13h do mesmo dia; depois disso, no primeiro dia útil seguinte.</p>",
     "enunciado": "<p>Durante um período de forte estresse no mercado, um cliente pergunta se corre o risco de ficar sem conseguir vender os títulos que comprou pelo Tesouro Direto antes do vencimento. A resposta correta é que:</p>",
     "alternativas": {
      "a": "Sim, porque a venda antecipada depende de encontrar outro investidor interessado no papel.",
      "b": "Não, porque o próprio Tesouro Nacional garante a recompra dos títulos do programa em todos os dias úteis.",
      "c": "Não, porque o Tesouro Nacional garante a recompra pelo preço de compra, sem qualquer perda.",
      "d": "Sim, porque a liquidez diária vale apenas para o Tesouro Selic."
     },
     "gabarito": "b",
     "feedback": {
      "a": "No Tesouro Direto não é preciso achar comprador. O Tesouro recompra.",
      "c": "A recompra existe, mas é pelo preço de mercado do dia, com marcação a mercado.",
      "d": "A liquidez diária vale para todos os títulos da vitrine."
     }
    },
    {
     "id": "cpa-prod-02-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a B. Desde 31 de dezembro de 2024, a taxa de custódia é provisionada diariamente na posição do investidor e debitada apenas quando há movimentação: resgate antecipado, vencimento do título ou pagamento de cupom semestral.</p><p>A alternativa A é a regra revogada, das duas parcelas em janeiro e julho. Ela continua aparecendo em apostila e simulado antigos, e é exatamente por isso que a banca a usa como distratora.</p><p>Guarde também a exceção dos títulos com finalidade: Tesouro Educa+ e Tesouro Renda+ têm 0% de custódia até o vencimento. Na fase de recebimento, o Renda+ é isento em parcelas de até seis salários mínimos e o Educa+ em parcelas de até quatro, com 0,10% ao ano apenas sobre o excedente.</p>",
     "enunciado": "<p>Um investidor mantém Tesouro IPCA+ na carteira e quer saber quando a taxa de custódia da B3 será efetivamente debitada. Considerando a regra em vigor, a cobrança ocorre:</p>",
     "alternativas": {
      "a": "Em duas parcelas semestrais, no primeiro dia útil de janeiro e de julho.",
      "b": "De forma provisionada diariamente, e debitada apenas quando há movimentação, como resgate antecipado, vencimento ou pagamento de cupom.",
      "c": "No ato da compra, de uma só vez, sobre todo o período até o vencimento.",
      "d": "Somente no vencimento do título, nunca antes."
     },
     "gabarito": "b",
     "feedback": {
      "a": "Essa era a regra antiga, válida até o fim de 2024. Material desatualizado ainda ensina assim.",
      "c": "Não há cobrança antecipada do período inteiro.",
      "d": "O resgate antecipado e o pagamento de cupom também disparam a cobrança."
     }
    }
   ],
   "CDB, RDB e RDC": [
    {
     "id": "cpa-prod-03-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. O CDB é classificado como nominativo e transferível: o investidor pode negociar o papel no mercado secundário antes do vencimento, e muitas instituições ainda garantem recompra diária, o que dá alta liquidez ao produto.</p><p>O RDB nasce inegociável e intransferível. Quem compra aceita manter o dinheiro na instituição emissora até o vencimento. O resgate antecipado depende de o próprio emissor aceitar recomprar, em caráter excepcional, e nesse caso a remuneração do período costuma ser sacrificada.</p><p>O RDC, emitido por cooperativas de crédito, espelha as regras do RDB: também é inegociável e intransferível.</p>",
     "enunciado": "<p>Um cliente quer entender a diferença prática entre o CDB e o RDB antes de aplicar. Sobre a negociação desses papéis, é correto afirmar que:</p>",
     "alternativas": {
      "a": "O CDB é nominativo e transferível, podendo ser negociado no mercado secundário, enquanto o RDB é inegociável e intransferível.",
      "b": "O RDB é nominativo e transferível, enquanto o CDB é inegociável e intransferível.",
      "c": "Os dois são livremente negociáveis no mercado secundário, e a diferença está apenas no prazo mínimo.",
      "d": "Nenhum dos dois pode ser negociado, e o resgate só ocorre no vencimento."
     },
     "gabarito": "a",
     "feedback": {
      "b": "Os dois estão invertidos. Quem é transferível é o CDB.",
      "c": "O RDB nasce intransferível. Essa é a diferença central entre os dois.",
      "d": "O CDB é transferível, e muitas instituições ainda garantem recompra diária."
     }
    },
    {
     "id": "cpa-prod-03-q2",
     "tipo": "vf",
     "nivel": 1,
     "usar_em": [
      "revisao"
     ],
     "comentario": "<p>Falso. Quem garante o RDC é o Fundo Garantidor do Cooperativismo de Crédito (FGCoop), e não o FGC. A cobertura é a mesma, R$ 250.000,00 por CPF ou CNPJ, mas os fundos são distintos.</p><p>E há uma consequência que a prova explora: o que define o fundo é quem emitiu o papel, e não a sigla do produto. CDB e RDB emitidos por instituição do sistema cooperativo entram no FGCoop, e não no FGC.</p>",
     "enunciado": "<p>O Recibo de Depósito Cooperativo (RDC) conta com a garantia do Fundo Garantidor de Créditos (FGC).</p>",
     "alternativas": {
      "v": "Verdadeiro",
      "f": "Falso"
     },
     "gabarito": "f"
    },
    {
     "id": "cpa-prod-03-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. O FGC é quem executa o pagamento da garantia. A cobertura ordinária é de R$ 250.000,00 por CPF ou CNPJ, e a unidade que conta é a instituição ou o conglomerado financeiro. O valor garantido inclui o aporte inicial e os juros acumulados até o dia da intervenção decretada pelo Banco Central.</p><p>A alternativa A troca os papéis: o Banco Central fiscaliza o sistema e decreta a intervenção, mas não paga garantia. A D confunde crédito privado com risco soberano, que é exclusivo do título público federal.</p><p>Guarde ainda o teto global: R$ 1.000.000,00 por CPF ou CNPJ a cada quatro anos, somando tudo o que o fundo já pagou àquela pessoa.</p>",
     "enunciado": "<p>Um banco emissor de CDB tem a falência decretada. Sobre o pagamento da garantia ao investidor, é correto afirmar que:</p>",
     "alternativas": {
      "a": "O Banco Central devolve o valor aplicado ao investidor, por ser o fiscalizador do sistema.",
      "b": "O FGC paga a garantia, limitada a R$ 250.000,00 por CPF ou CNPJ por instituição ou conglomerado, incluindo o principal e os juros acumulados até a intervenção.",
      "c": "O investidor não tem nenhuma proteção, porque CDB é título de crédito privado.",
      "d": "O Tesouro Nacional honra a dívida, uma vez que o CDB tem risco soberano."
     },
     "gabarito": "b",
     "feedback": {
      "a": "O Banco Central fiscaliza e decreta a intervenção. Quem paga é o FGC.",
      "c": "Há proteção, sim, dentro do limite do FGC.",
      "d": "Risco soberano é só de título público federal. CDB é crédito privado."
     }
    },
    {
     "id": "cpa-prod-03-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. Reserva de emergência exige liquidez e baixa oscilação. O CDB com liquidez diária e rentabilidade pós-fixada em percentual do CDI atende as duas condições, porque acompanha a taxa diária da economia e pode ser resgatado quando o cliente precisar.</p><p>As outras três erram por adequação, e não por conceito. A A e a D prendem o dinheiro em prazo longo, justamente o contrário do que uma emergência pede. A C é ainda pior: o RDB é inegociável e intransferível.</p><p>Repare no tipo de questão. A banca não está testando o produto, está testando conduta: a resposta certa não é a mais rentável, é a mais adequada ao objetivo do cliente.</p>",
     "enunciado": "<p>Uma cliente conservadora quer montar a reserva de emergência e pede um produto de emissão bancária com liquidez e rentabilidade acompanhando a taxa básica do mercado interbancário. A indicação mais adequada é:</p>",
     "alternativas": {
      "a": "Um CDB prefixado de três anos de um banco de menor porte, pela taxa mais alta.",
      "b": "Um CDB com liquidez diária e rentabilidade pós-fixada atrelada ao CDI.",
      "c": "Um RDB de dois anos, porque a falta de liquidez garante taxa melhor.",
      "d": "Um CDB híbrido, que paga IPCA mais taxa prefixada, com vencimento em cinco anos."
     },
     "gabarito": "b",
     "feedback": {
      "a": "Prefixado longo não serve para reserva de emergência: falta liquidez e há marcação a mercado na venda antecipada.",
      "c": "O RDB é intransferível. É o oposto do que uma reserva de emergência exige.",
      "d": "Papel híbrido longo é para objetivo de longo prazo, não para emergência."
     }
    },
    {
     "id": "cpa-prod-03-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a B. A garantia do FGC é de R$ 250.000,00 por CPF ou CNPJ, e a unidade que conta é a instituição ou o conglomerado financeiro. Como o banco e a financeira pertencem ao mesmo grupo, os dois dividem um único limite. O cliente soma R$ 400.000,00, recebe R$ 250.000,00 e fica com R$ 150.000,00 descobertos.</p><p>A alternativa A é a pegadinha, e ela pega justamente quem decorou \"por banco\" em vez de \"por conglomerado\". A C multiplica o limite por aplicação, o que não existe. A D usa o teto global de R$ 1 milhão a cada quatro anos fora de contexto.</p><p>Este é o tipo de situação que você tem obrigação de avisar ao cliente quando ele pulveriza capital em instituições menores atrás de taxa melhor: é preciso conferir se elas são do mesmo grupo.</p>",
     "enunciado": "<p>Um cliente tem R$ 200.000,00 aplicados em CDB do Banco Alfa e outros R$ 200.000,00 em RDB da financeira do mesmo conglomerado financeiro. O Banco Central decreta a liquidação do grupo. Quanto o cliente recebe do fundo garantidor e quanto fica descoberto?</p>",
     "alternativas": {
      "a": "Recebe R$ 400.000,00, porque são duas instituições com CNPJ distintos.",
      "b": "Recebe R$ 250.000,00 e fica com R$ 150.000,00 descobertos, porque o limite é por conglomerado.",
      "c": "Recebe R$ 500.000,00, porque o limite de R$ 250.000,00 vale para cada aplicação.",
      "d": "Não recebe nada, porque o teto global de R$ 1.000.000,00 já foi ultrapassado."
     },
     "gabarito": "b",
     "feedback": {
      "a": "CNPJ distinto não multiplica o limite quando as instituições são do mesmo conglomerado.",
      "c": "O limite é por titular e por conglomerado, e não por aplicação.",
      "d": "O teto global é de R$ 1 milhão a cada quatro anos e não foi atingido aqui."
     }
    }
   ]
  }
 }
});
