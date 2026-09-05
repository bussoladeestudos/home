/* GERADO por outputs/questoes_para_js.py. NAO editar a mao.
   Fonte: _conteudo/cpa/questoes/**.yaml  ·  155 questoes em 31 topicos
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
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. A NTN-B padrão paga juros semestrais, os cupons, e devolve o principal só no vencimento. A NTN-B Principal elimina esses pagamentos e entrega todo o valor acumulado de uma vez, formato que o mercado chama de bullet.</p><p>A alternativa A é a armadilha, porque inverte as duas. A palavra Principal é a dica: ela indica que o pagamento ocorre unicamente no final. A C erra ao sugerir indexadores diferentes, quando as duas seguem IPCA mais juro real. A D erra ao dizer que as duas são bullet.</p><p>Consequência prática que também cai: sem cupom, a NTN-B Principal é mais sensível à marcação a mercado, porque todo o fluxo está concentrado no fim.</p>",
     "enunciado": "<p>A NTN-B existe em duas modalidades que a prova cobra com frequência. Sobre a diferença entre elas, é correto afirmar que:</p>",
     "alternativas": {
      "a": "A NTN-B Principal paga cupons semestrais, e a NTN-B devolve tudo no vencimento.",
      "b": "A NTN-B paga cupons semestrais, e a NTN-B Principal concentra todo o pagamento no vencimento.",
      "c": "As duas pagam cupons semestrais, e a diferença está no indexador de cada uma.",
      "d": "As duas concentram o pagamento no vencimento, e a diferença está no prazo mínimo de aplicação."
     },
     "gabarito": "b",
     "feedback": {
      "a": "As duas estão invertidas. A palavra Principal indica pagamento único no fim.",
      "c": "O indexador é o mesmo nas duas, IPCA mais juro real. O que muda é o fluxo.",
      "d": "A NTN-B padrão paga cupom semestral, então não concentra tudo no vencimento."
     }
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
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. Quem compra título público empresta ao governo federal, e é ele quem deve. Como o Estado arrecada impostos e emite moeda, esse é o menor risco de crédito da economia, o risco soberano.</p><p>A alternativa A é a distratora mais cobrada do tópico, porque soa protetora e o candidato distraído aceita. O FGC existe para cobrir a quebra de um banco, e o emissor aqui não é banco. A C confunde guarda com garantia: a B3 faz a custódia e cobra por isso. A D confunde intermediário com devedor.</p><p>Regra de bolso: siga o emissor. Banco emitiu, olha o FGC. Governo emitiu, é risco soberano e não precisa de fundo garantidor.</p>",
     "enunciado": "<p>Um cliente pergunta quem garante o dinheiro que ele aplicou pelo Tesouro Direto. A resposta correta é:</p>",
     "alternativas": {
      "a": "O Fundo Garantidor de Créditos (FGC), até R$ 250.000,00 por CPF.",
      "b": "O próprio governo federal, que é o emissor do título. É o menor risco de crédito da economia, o chamado risco soberano.",
      "c": "A B3, que faz a custódia dos títulos e responde pelo saldo do investidor.",
      "d": "A instituição financeira que atua como Agente de Custódia da operação."
     },
     "gabarito": "b",
     "feedback": {
      "a": "O FGC protege depósito e emissão bancária. Título público não entra nessa lista.",
      "c": "A B3 guarda os títulos e cobra a custódia por isso. Ela não é a devedora.",
      "d": "O Agente de Custódia intermedeia a operação. A dívida é do Tesouro Nacional."
     }
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
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. O RDC é garantido pelo Fundo Garantidor do Cooperativismo de Crédito (FGCoop), com a mesma cobertura de R$ 250.000,00 por CPF ou CNPJ. A cobertura é igual; os fundos é que são distintos.</p><p>A alternativa A é a troca clássica da banca. A C nega uma garantia que existe. A D repete o erro de confundir fiscalizador com pagador.</p><p>E guarde a consequência que a prova explora: o que define o fundo é quem emitiu o papel, e não a sigla do produto. CDB e RDB emitidos por instituição do sistema cooperativo entram no FGCoop, e não no FGC.</p>",
     "enunciado": "<p>Um cooperado aplica em um Recibo de Depósito Cooperativo (RDC) emitido pela cooperativa de crédito da qual participa e pergunta quem garante o valor. A resposta correta é:</p>",
     "alternativas": {
      "a": "O FGC, porque a cobertura de R$ 250.000,00 vale para qualquer emissor de renda fixa.",
      "b": "O FGCoop, com a mesma cobertura de R$ 250.000,00, porque o emissor pertence ao sistema cooperativo.",
      "c": "Ninguém, porque recibos cooperativos ficam fora de qualquer fundo garantidor.",
      "d": "O Banco Central, que fiscaliza as cooperativas de crédito."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A cobertura existe, mas o fundo é outro. O FGC não alcança o sistema cooperativo.",
      "c": "Há garantia, sim. O FGCoop cumpre no cooperativismo o papel do FGC.",
      "d": "O Banco Central fiscaliza e decreta a intervenção. Quem paga é o fundo garantidor."
     }
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
   ],
   "LCI, LCA e LCD": [
    {
     "id": "cpa-prod-04-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. A lei que criou a LCD não estendeu automaticamente a garantia do FGC ao título. A cobertura depende de autorização do CMN, então não se pode afirmar ao cliente, nem marcar na prova, que a LCD tem FGC do mesmo jeito que a LCI e a LCA.</p><p>A A trata a garantia como automática, o que vale só para LCI e LCA. A C confunde o emissor com o garantidor: banco de desenvolvimento emitindo o papel não transforma a dívida em garantia do Tesouro. A D iguala a LCD às irmãs justamente no ponto em que ela é diferente.</p><p>Regra de bolso: LCI e LCA têm FGC. Na LCD, confira a condição do papel.</p>",
     "enunciado": "<p>A Letra de Crédito de Desenvolvimento (LCD) é um título criado para financiar infraestrutura e industrialização. Sobre a cobertura do Fundo Garantidor de Créditos (FGC) para a LCD, é correto afirmar que:</p>",
     "alternativas": {
      "a": "Possui cobertura automática do FGC até o limite de R$ 250 mil por CPF.",
      "b": "Não possui cobertura automática do FGC, porque a lei que a criou não estendeu a garantia ao título.",
      "c": "Conta com garantia integral do Governo Federal, por ser emitida por bancos de desenvolvimento.",
      "d": "Segue a mesma regra de cobertura automática do FGC aplicável à LCI e à LCA."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A garantia do FGC não é estendida de forma automática à LCD.",
      "c": "O emissor ser banco de desenvolvimento não gera garantia do governo.",
      "d": "A LCD é a exceção da família. LCI e LCA têm FGC; a LCD, não automaticamente."
     }
    },
    {
     "id": "cpa-prod-04-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. A LCD foi criada para financiar indústria e infraestrutura, e por isso a emissão é restrita a bancos de desenvolvimento e ao BNDES. Cada instituição tem um teto anual de emissão, que o CMN pode alterar.</p><p>A alternativa A abre a emissão para qualquer banco, o que valeria para LCI e LCA, não para a LCD. A C tira o benefício fiscal que ela tem: a isenção de Imposto de Renda para a pessoa física é justamente o atrativo do papel. A D aplica à LCD o prazo de 6 meses que passou a valer para LCI e LCA em maio de 2025; o da LCD é de 12 meses e está na lei.</p><p>A LCD é o papel mais novo dos três e a banca gosta dele por isso. As três diferenças que valem decorar: quem emite, o prazo de 12 meses e o FGC que não é automático.</p>",
     "enunciado": "<p>Sobre a Letra de Crédito de Desenvolvimento (LCD), é correto afirmar que:</p>",
     "alternativas": {
      "a": "Pode ser emitida por qualquer banco comercial ou múltiplo, como a LCI e a LCA.",
      "b": "É emitida por bancos de desenvolvimento e pelo BNDES, com teto anual de emissão por instituição.",
      "c": "Não oferece isenção de Imposto de Renda, por ser um título de fomento.",
      "d": "Tem prazo mínimo de 6 meses, igual ao da LCI e da LCA atreladas ao CDI."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A emissão é restrita a bancos de desenvolvimento e ao BNDES.",
      "c": "A LCD dá alíquota zero de Imposto de Renda à pessoa física, como LCI e LCA.",
      "d": "O prazo mínimo da LCD é de 12 meses, fixado na própria lei que a criou."
     }
    },
    {
     "id": "cpa-prod-04-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a D. Em maio de 2025 o CMN unificou os dois em 6 meses, quando o papel não é atualizado por índice de preços.</p><p>Os números mudaram duas vezes em pouco tempo, e é por isso que quase todo material de mercado está errado. A alternativa A traz os 90 dias que valiam até fevereiro de 2024. A B traz a tabela intermediária, de 12 meses na LCI e 9 na LCA, que vigorou até maio de 2025 e ainda aparece em apostila. A C traz os prazos longos, que continuam valendo, mas só para letra atualizada por índice de preços: 36 meses na LCI e 12 na LCA.</p><p>Regra de bolso: indexado à inflação trava por mais tempo. Em CDI, seis meses para as duas. A LCD é caso à parte, com 12 meses fixados em lei.</p>",
     "enunciado": "<p>O CMN fixa prazos mínimos durante os quais a instituição emissora fica proibida de resgatar ou recomprar o título. Para uma LCI e uma LCA emitidas hoje com rentabilidade atrelada a um percentual do CDI, os prazos mínimos são, respectivamente:</p>",
     "alternativas": {
      "a": "90 dias para a LCI e 90 dias para a LCA.",
      "b": "12 meses para a LCI e 9 meses para a LCA.",
      "c": "36 meses para a LCI e 12 meses para a LCA.",
      "d": "6 meses para a LCI e 6 meses para a LCA."
     },
     "gabarito": "d",
     "feedback": {
      "a": "São os prazos antigos, válidos até fevereiro de 2024.",
      "b": "Foi a regra entre fevereiro de 2024 e maio de 2025. Está desatualizada.",
      "c": "Esses prazos valem só para as letras atualizadas por índice de preços."
     }
    },
    {
     "id": "cpa-prod-04-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. A carência não é uma cláusula de contrato que se compra com multa: é uma vedação da norma ao emissor, que fica proibido de resgatar ou recomprar o título antes do prazo mínimo.</p><p>A A é a versão que o cliente costuma propor, e é a que a banca usa como distratora. A C usa os 90 dias, que são o prazo revogado, e ainda erra na conta, porque dois meses não chegariam nem a esse prazo. A D erra no outro extremo: passada a carência, o título pode oferecer liquidez diária, e isso depende do que foi contratado com o emissor.</p><p>É a conversa que você tem na hora da aplicação, e não na hora do resgate: dinheiro de LCI em carência não serve como reserva de emergência.</p>",
     "enunciado": "<p>Um cliente aplicou em uma LCI há dois meses e agora precisa do dinheiro para uma emergência. Ele pergunta se consegue resgatar antes do prazo pagando alguma multa. A resposta correta é:</p>",
     "alternativas": {
      "a": "Sim, o resgate é livre desde que ele aceite uma multa contratual sobre o rendimento.",
      "b": "Não. O prazo mínimo é uma proibição da norma ao emissor, que não pode resgatar nem recomprar o título antes do prazo, e isso não se negocia no balcão.",
      "c": "Sim, porque o prazo mínimo de 90 dias já teria sido cumprido nesse caso.",
      "d": "Não, e nem depois: a LCI só pode ser resgatada na data de vencimento."
     },
     "gabarito": "b",
     "feedback": {
      "a": "Não existe multa que compre a liberação. A trava é da norma, não do contrato.",
      "c": "Os 90 dias são o prazo antigo, e o cliente tem dois meses de aplicação de qualquer forma.",
      "d": "Cumprido o prazo mínimo, o papel pode ter liquidez diária ou ficar travado até o vencimento, conforme o contrato."
     }
    },
    {
     "id": "cpa-prod-04-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a B. A isenção de Imposto de Renda na LCA é exclusiva da pessoa física. Para a empresa, os dois produtos são tributados igual, então vence o que paga a taxa bruta maior: o CDB a 100% do CDI.</p><p>A A aplica à empresa um benefício que é da pessoa física, e é o erro que a questão está testando. A C inventa uma blindagem que não existe. A D inverte a exigência do lastro: quem precisa ter carteira de crédito do agronegócio é o banco que emite a LCA, não o cliente que compra.</p><p>Se o mesmo cliente fosse pessoa física, a conta viraria: 92% do CDI isento pode render mais que 100% do CDI tributado, e aí a comparação passa a ser pela taxa líquida.</p>",
     "enunciado": "<p>Você atende uma empresa, pessoa jurídica com fins lucrativos, que quer aplicar parte do caixa em um produto conservador. O diretor financeiro está em dúvida entre um CDB pagando 100% do CDI e uma LCA pagando 92% do CDI, com o mesmo prazo e o mesmo risco de crédito. A orientação correta é:</p>",
     "alternativas": {
      "a": "Escolher a LCA, porque a isenção de Imposto de Renda garante retorno líquido maior que o do CDB.",
      "b": "Escolher o CDB, porque a pessoa jurídica não tem isenção na LCA e a taxa bruta maior se traduz em retorno líquido maior.",
      "c": "Escolher a LCA, porque títulos do agronegócio não sofrem marcação a mercado e isso elimina o risco da aplicação.",
      "d": "Escolher o CDB, porque a LCA exige que o cliente comprove atividade ligada ao agronegócio para poder investir."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A empresa paga imposto na LCA, então a isenção não entra na conta dela.",
      "c": "A isenção não tem relação com marcação a mercado, e nenhum dos dois blinda o cliente contra oscilação.",
      "d": "O lastro no agronegócio é exigido do banco emissor, e não do investidor que compra o papel."
     }
    }
   ],
   "Debêntures, debêntures de infraestrutura e conversíveis": [
    {
     "id": "cpa-prod-05-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. As debêntures representam uma dívida corporativa emitida por Sociedades Anônimas (S/A) não financeiras, como indústrias e construtoras, para captar recursos diretamente com o investidor. Por não serem depósitos bancários, não possuem nenhuma cobertura do FGC.</p><p>A alternativa B erra o emissor e inventa uma garantia que não existe no produto. A alternativa C confunde dívida corporativa privada com títulos públicos. A alternativa D troca o emissor, pois securitizadoras emitem CRI e CRA.</p><p>Regra de bolso: debênture é dívida de empresa não financeira e o risco é 100% de quem emite, sem FGC.</p>",
     "enunciado": "<p>As debêntures são instrumentos de captação de recursos no mercado de capitais. Sobre os emissores e a proteção oferecida por esses títulos, é correto afirmar que:</p>",
     "alternativas": {
      "a": "São emitidas por sociedades anônimas não financeiras e não contam com a proteção do Fundo Garantidor de Créditos.",
      "b": "São emitidas por bancos comerciais visando captar recursos livres, com garantia integral do FGC.",
      "c": "São exclusivas do setor público, servindo para alongar o perfil da dívida do governo federal sem garantia adicional.",
      "d": "São emitidas por companhias securitizadoras e protegidas pelo regime fiduciário de patrimônio separado."
     },
     "gabarito": "a",
     "feedback": {
      "b": "Banco comercial capta por CDB, LCI e LCA. Debênture é papel de S/A não financeira.",
      "c": "As debêntures são títulos de dívida corporativa privada, e não instrumentos de financiamento do governo.",
      "d": "Securitizadoras emitem Certificados (CRI e CRA), enquanto as debêntures pertencem às S/A não financeiras."
     }
    },
    {
     "id": "cpa-prod-05-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. A confusão entre esses dois papéis é a principal pegadinha atual. Na debênture incentivada, o benefício é do investidor (a pessoa física é isenta de IR). Na debênture de infraestrutura, o benefício é da empresa emissora (que deduz despesas), e a pessoa física paga IR normalmente pela tabela regressiva.</p><p>A alternativa A inventa uma isenção universal inexistente. A alternativa C erra ao igualar as duas pontas da isenção. A alternativa D inverte completamente a mecânica das duas leis.</p><p>Guarde a frase: a incentivada beneficia quem compra, a de infraestrutura beneficia quem emite.</p>",
     "enunciado": "<p>O mercado oferece dois papéis criados para financiar projetos prioritários, mas com estruturas tributárias opostas: a debênture incentivada (Lei 12.431) e a debênture de infraestrutura (Lei 14.801/2024). A principal diferença entre elas é que:</p>",
     "alternativas": {
      "a": "A de infraestrutura garante isenção total para qualquer investidor, e a incentivada tributa todos pela tabela regressiva.",
      "b": "A incentivada isenta o investidor pessoa física, enquanto na de infraestrutura o benefício fiscal fica com a empresa emissora.",
      "c": "Ambas garantem isenção de imposto de renda para a pessoa física, diferenciando-se apenas pelo tipo de garantia real exigida.",
      "d": "A incentivada beneficia a empresa emissora com deduções, obrigando o investidor a recolher imposto na fonte."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A de infraestrutura não isenta o investidor, ela isenta quem emite o papel.",
      "c": "A pessoa física paga imposto normalmente pela tabela regressiva na debênture de infraestrutura.",
      "d": "A regra foi invertida, pois a debênture incentivada coloca a isenção de imposto diretamente no bolso de quem compra."
     }
    },
    {
     "id": "cpa-prod-05-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. A diferença está em uma única palavra sobre a origem das ações. A debênture conversível permite que o investidor converta a dívida em ações da própria empresa que emitiu o título. Já a permutável entrega ações de outra empresa, normalmente uma controlada ou coligada do mesmo grupo.</p><p>As alternativas A e B inventam regras irreais de liquidez e moedas. A alternativa D confunde a modalidade de remuneração (conversão em ações) com a ordem de garantias em caso de falência.</p>",
     "enunciado": "<p>Ao ler a escritura de emissão de dois ativos diferentes, o cliente nota que a primeira é uma debênture conversível e a segunda é uma debênture permutável. A diferença prática para o investidor no momento do exercício desse direito será:</p>",
     "alternativas": {
      "a": "A primeira será convertida em um título público atrelado à inflação, e a segunda será liquidada em moeda estrangeira.",
      "b": "A primeira oferece liquidez diária com rentabilidade variável, e a segunda exige carência de seis meses antes da troca.",
      "c": "A primeira poderá ser trocada por ações da própria companhia emissora, e a segunda será trocada por ações de uma empresa diferente.",
      "d": "A primeira concede garantia real sobre os ativos da empresa, e a segunda possui apenas garantia quirografária sem privilégios."
     },
     "gabarito": "c",
     "feedback": {
      "a": "Nenhuma das debêntures vira título público; o mecanismo envolve ações de companhias na Bolsa.",
      "b": "O conceito não tem relação com liquidez ou carência, mas sim com a natureza do ativo entregue no vencimento.",
      "d": "O tipo de conversão não define a hierarquia das garantias da escritura, sendo características independentes."
     }
    },
    {
     "id": "cpa-prod-05-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a D. A legislação divide as garantias em quatro categorias com prioridade estrita de pagamento: a Real trava um bem específico e é a mais forte; a Flutuante dá privilégio geral sobre os bens que restarem; a Quirografária coloca o investidor na vala comum sem privilégios; e a Subordinada é a última a receber, ficando apenas na frente dos acionistas.</p><p>A alternativa A erra ao dar protagonismo à vala comum. A alternativa B inverte a ordem das garantias mais fortes. A alternativa C erra ao colocar os credores subordinados na frente da garantia quirografária.</p>",
     "enunciado": "<p>Você atende um cliente que pretende investir o dinheiro da venda de um imóvel em debêntures corporativas. Ele demonstra preocupação com o risco de calote e questiona como funciona a proteção do investidor em caso de falência da empresa. Você explica que a ordem de prioridade para pagamento das garantias, da mais forte para a mais fraca, é:</p>",
     "alternativas": {
      "a": "Quirografária, Real, Flutuante e Subordinada.",
      "b": "Flutuante, Subordinada, Real e Quirografária.",
      "c": "Real, Flutuante, Subordinada e Quirografária.",
      "d": "Real, Flutuante, Quirografária e Subordinada."
     },
     "gabarito": "d",
     "feedback": {
      "a": "A garantia quirografária não possui nenhum privilégio, não podendo ocupar o primeiro lugar da fila.",
      "b": "A garantia real lidera a proteção por travar bens específicos, devendo figurar em primeiro.",
      "c": "O investidor subordinado é o último da fila dos credores antes dos acionistas, ocupando a posição final."
     }
    },
    {
     "id": "cpa-prod-05-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a A. Quando a cliente tenta vender uma debênture antecipadamente, ela sofre a marcação a mercado; como o rating da empresa piorou, o comprador exigirá um desconto (deságio) para assumir o risco maior. Além disso, como se trata de uma debênture de infraestrutura, não há isenção fiscal para a pessoa física, e ela pagará o imposto devido.</p><p>A alternativa B erra porque a debênture tem negociação secundária permitida. A alternativa C cai na armadilha clássica do FGC em crédito privado. A alternativa D erra ao prometer isenção num papel onde o benefício tributário fica com a empresa emissora.</p>",
     "enunciado": "<p>Uma cliente pessoa física aplicou capital em uma debênture simples de infraestrutura (Lei 14.801/2024) com prazo de dez anos. Três anos depois, a agência classificadora rebaixou o rating da emissora. Preocupada com a piora do balanço, a cliente decide vender o título de forma antecipada no mercado secundário. Considerando as regras de liquidez e tributação do papel, ela enfrentará:</p>",
     "alternativas": {
      "a": "A marcação a mercado, podendo sofrer deságio na venda pelo aumento do risco, e pagará imposto de renda normalmente sobre o ganho.",
      "b": "A impossibilidade legal de negociar o título no mercado secundário, sendo obrigada a reter o papel na carteira até a data de vencimento.",
      "c": "A proteção do FGC como compradora de última instância, que devolverá os recursos sem perdas para proteger o pequeno investidor.",
      "d": "A marcação a mercado com impacto no preço, porém com o conforto da isenção total de imposto de renda garantida à pessoa física."
     },
     "gabarito": "a",
     "feedback": {
      "b": "A legislação permite livremente a venda antecipada de debêntures no mercado secundário a qualquer tempo.",
      "c": "O Fundo Garantidor de Créditos não tem qualquer relação com debêntures corporativas.",
      "d": "A debênture de infraestrutura não possui isenção para a pessoa física; o benefício é exclusivo do emissor."
     }
    }
   ],
   "CRI e CRA": [
    {
     "id": "cpa-prod-06-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. A legislação determina que a emissão de Certificados de Recebíveis (CRI e CRA) pertence exclusivamente às companhias securitizadoras.</p><p>A alternativa A erra porque os bancos só emitem Letras (LCI e LCA), e no caso dos certificados eles atuam apenas ligando o investidor à securitizadora. A alternativa C erra ao confundir o originador da dívida (quem vende o apartamento ou a safra) com o emissor do título. A alternativa D insere indevidamente a autarquia do governo.</p><p>Regra de bolso: Letras nascem nos bancos; Certificados nascem nas securitizadoras.</p>",
     "enunciado": "<p>O processo de securitização empacota direitos creditórios ilíquidos e os transforma em títulos negociáveis no mercado. Segundo a regulamentação brasileira, a emissão do CRI e do CRA é uma exclusividade:</p>",
     "alternativas": {
      "a": "Dos bancos múltiplos que possuem carteira ativa de crédito.",
      "b": "Das companhias securitizadoras especializadas.",
      "c": "Das construtoras imobiliárias e cooperativas agrícolas.",
      "d": "Do Banco Central do Brasil, por meio de operações compromissadas."
     },
     "gabarito": "b",
     "feedback": {
      "a": "Os bancos são legalmente proibidos de emitir certificados, atuando apenas como distribuidores.",
      "c": "Construtoras e cooperativas cedem as dívidas (o lastro), mas não emitem o título para o mercado.",
      "d": "A emissão é de natureza estritamente privada corporativa e não envolve papéis do Banco Central."
     }
    },
    {
     "id": "cpa-prod-06-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. A diferença no emissor muda toda a estrutura de segurança. A LCI e a LCA nascem nos bancos, logo possuem cobertura automática do FGC. O CRI e o CRA nascem nas securitizadoras, operando totalmente sem a garantia do fundo.</p><p>A alternativa B erra ao estender a garantia aos certificados. A alternativa C inverte as regras e inventa uma proteção governamental falsa. A alternativa D erra ao remover a segurança legítima que as Letras bancárias detêm.</p>",
     "enunciado": "<p>Ao comparar os títulos do setor imobiliário e do agronegócio, o investidor percebe a presença das Letras (LCI e LCA) e dos Certificados (CRI e CRA). Em relação à mitigação do risco de calote, é correto orientar que:</p>",
     "alternativas": {
      "a": "As Letras contam com a proteção do FGC, enquanto os Certificados não possuem cobertura do FGC.",
      "b": "Ambos os instrumentos oferecem a proteção do FGC limitada a R$ 250 mil por CPF.",
      "c": "Os Certificados têm cobertura do FGC, e as Letras possuem garantia solidária do Tesouro Nacional.",
      "d": "Nenhum desses produtos de crédito possui qualquer cobertura do fundo garantidor."
     },
     "gabarito": "a",
     "feedback": {
      "b": "O CRI e o CRA funcionam totalmente fora do guarda-chuva de proteção do fundo garantidor.",
      "c": "O Tesouro Nacional não oferece garantias a títulos privados como LCI e LCA, e o FGC não cobre certificados.",
      "d": "A LCI e a LCA são depósitos bancários e, por isso, usufruem legitimamente da garantia ordinária do FGC."
     }
    },
    {
     "id": "cpa-prod-06-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a D. O regime fiduciário cria um patrimônio separado para a emissão. Se a securitizadora quebrar por má gestão ou sofrer processos trabalhistas, o fluxo de dinheiro do CRI fica blindado e os devedores continuam pagando normalmente sob nova administração.</p><p>As alternativas A e B inventam transferências irreais de risco para o governo ou para o banco. A alternativa C erra o alvo do regime fiduciário: ele protege o investidor contra o risco da emissora falir, e não contra o risco dos devedores (compradores de imóveis) deixarem de pagar as parcelas originais.</p>",
     "enunciado": "<p>Para tranquilizar o investidor sobre o risco de falência da própria securitizadora que emitiu o CRI, a estrutura frequentemente utiliza o regime fiduciário. Quando instituído por declaração no termo de securitização, esse regime:</p>",
     "alternativas": {
      "a": "Aciona um seguro público de crédito para devolver o dinheiro ao cliente caso a construtora quebre.",
      "b": "Transfere a dívida para o banco distribuidor, obrigando-o a assumir o fluxo de pagamentos originais.",
      "c": "Garante o repasse do prejuízo: a securitizadora cobre o calote dos compradores de imóveis com o próprio capital.",
      "d": "Cria um patrimônio separado, garantindo que os recebíveis da emissão não respondam pelas dívidas da securitizadora."
     },
     "gabarito": "d",
     "feedback": {
      "a": "O mecanismo fiduciário não aciona seguros públicos, ele apenas cria uma barreira jurídica de separação.",
      "b": "O banco apenas distribui o papel e não assume o compromisso de pagar a dívida em momento algum.",
      "c": "A securitizadora não cobre calotes da ponta final, pois o risco de crédito é assumido pelo investidor."
     }
    },
    {
     "id": "cpa-prod-06-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. O tesoureiro esbarra em dois problemas. O primeiro é tributário: o benefício fiscal do CRA abrange apenas a pessoa física, então a empresa (PJ) paga Imposto de Renda normalmente pela tabela regressiva. O segundo é regulatório: desde fevereiro de 2024 (Resolução CMN 5.118), o governo proibiu lastrear esses certificados com dívidas de companhias que não pertencem ao agronegócio ou setor imobiliário.</p><p>A alternativa A erra na regra do imposto de renda. A alternativa C erra duplamente ao ignorar as restrições tributárias e de lastro. A alternativa D erra ao atestar a validade de um lastro explicitamente vetado.</p>",
     "enunciado": "<p>O tesoureiro de uma grande rede de farmácias (pessoa jurídica com fins lucrativos) pede a aquisição de um CRA que utiliza como lastro debêntures de uma companhia aérea, sem relação com o campo. Com base na regulação vigente de recebíveis e de isenções fiscais, você deve avisá-lo de que:</p>",
     "alternativas": {
      "a": "A compra garante isenção total de impostos para a rede de farmácias, mas o lastro não pode ser de empresa de fora do agronegócio.",
      "b": "A rede pagará Imposto de Renda normalmente, e a norma veda a utilização de lastro emitido por empresas não relacionadas ao setor.",
      "c": "O investimento atende aos desejos corporativos, unindo isenção de imposto e liberdade de empacotamento de qualquer setor.",
      "d": "O lastro é lícito devido à flexibilização recente do mercado, mas a empresa pagará IR retido na fonte pela tabela regressiva."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A pessoa jurídica não goza de nenhum benefício tributário no investimento em CRA, pagando a tabela completa.",
      "c": "A operação possui duas restrições cruciais, tanto na ausência da isenção fiscal para a empresa quanto na regra de lastro.",
      "d": "A regulação tornou as regras de lastro mais restritivas (Resolução 5.118), sendo vedado o uso de dívidas alheias ao setor."
     }
    },
    {
     "id": "cpa-prod-06-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a D. No CRI e no CRA, o investidor sempre assume o risco de crédito da base (os devedores originais, no caso, a cooperativa). Se a fonte do dinheiro secar, o investidor amarga a perda, pois não há FGC e a securitizadora não assume o prejuízo usando o próprio caixa.</p><p>A alternativa A propõe a entrada irreal do FGC. A alternativa B inverte o funcionamento do risco transferindo a responsabilidade para o estruturador. A alternativa C erra a função técnica do patrimônio separado (regime fiduciário), que protege contra a quebra do emissor intermediário, não do lastro.</p>",
     "enunciado": "<p>Um distribuidor comercializa um CRA lastreado em recebíveis de uma grande cooperativa agrícola. A emissão possui regime fiduciário ativo no termo de securitização. No meio da vigência, a cooperativa sofre prejuízo climático, decreta moratória técnica e para de pagar os recebíveis que compunham a carteira. Nessas condições, é correto afirmar que:</p>",
     "alternativas": {
      "a": "O Fundo Garantidor de Créditos devolverá o capital ao investidor, visto que o calote partiu do lastro principal.",
      "b": "O investidor fica protegido contra perdas, pois a securitizadora é obrigada por lei a recomprar o título com seu capital social.",
      "c": "O patrimônio separado é ativado como fundo de liquidez, mantendo os juros estáveis sem perdas ao investidor.",
      "d": "O investidor assume integralmente o calote, já que o risco de crédito desses papéis recai sobre a inadimplência dos devedores finais."
     },
     "gabarito": "d",
     "feedback": {
      "a": "O CRA é uma operação sem cobertura do FGC sob qualquer hipótese de calote ou quebra estrutural.",
      "b": "A securitizadora atua na estruturação da dívida e não atua como fiadora solidária contra a falência do produtor rural.",
      "c": "O patrimônio separado serve para isolar problemas da securitizadora, e não para gerar dinheiro mágico em caso de quebra do devedor final."
     }
    }
   ],
   "Rating de crédito": [
    {
     "id": "cpa-prod-07-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. O rating de crédito avalia única e exclusivamente a probabilidade de o emissor dar calote (risco de crédito).</p><p>A alternativa A erra porque a nota não mede risco de liquidez. A alternativa B tenta transformar um relatório de opinião técnica em um seguro garantidor, o que não existe. A alternativa D aborda o risco de mercado, que afeta o preço do papel devido a choques na Selic, algo que a nota também não previne nem avalia.</p>",
     "enunciado": "<p>Uma agência de classificação de risco atribuiu a nota máxima (AAA) para a debênture de uma empresa privada. Sobre o escopo dessa avaliação, você deve orientar o cliente de que essa nota:</p>",
     "alternativas": {
      "a": "Avalia a facilidade de negociação do papel, assegurando que o investidor não correrá risco de liquidez na venda antecipada.",
      "b": "Garante o ressarcimento do título pela própria agência de rating caso a empresa venha a decretar falência.",
      "c": "Avalia exclusivamente o risco de crédito, indicando uma baixa probabilidade de a empresa emissora não honrar a dívida.",
      "d": "Protege o investidor contra o risco de mercado, garantindo que o título não sofra desvalorização com o aumento da taxa Selic."
     },
     "gabarito": "c",
     "feedback": {
      "a": "A agência estuda as finanças do emissor e não garante a rapidez ou facilidade de achar comprador no mercado secundário.",
      "b": "O rating é uma opinião técnica e independente, e a agência não atua como seguradora contra calotes.",
      "d": "A nota não blinda o título contra as oscilações da taxa de juros que afetam o preço de mercado dos ativos de renda fixa."
     }
    },
    {
     "id": "cpa-prod-07-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. O conflito de interesses na indústria de classificação de risco ocorre porque a agência é paga pela mesma empresa que ela está encarregada de avaliar.</p><p>A alternativa B erra ao colocar o banco distribuidor como contratante. A alternativa C erra porque o investidor final não arca com a fatura dos relatórios de rating. A alternativa D erra ao citar o rodízio de analistas como obrigatório, quando a norma da CVM o trata como uma medida puramente opcional.</p>",
     "enunciado": "<p>O modelo de negócios das agências de rating embute um conflito de interesses inerente, que é regulado no Brasil pela Comissão de Valores Mobiliários (CVM). Esse conflito nasce principalmente porque:</p>",
     "alternativas": {
      "a": "A própria entidade emissora da dívida é quem contrata e remunera financeiramente a agência que a avalia.",
      "b": "O banco distribuidor arca com os custos da avaliação e repassa as taxas embutidas para o emissor da debênture.",
      "c": "O investidor final que compra o título é quem contrata a agência, exigindo notas mais altas para garantir rentabilidade.",
      "d": "A CVM obriga o rodízio periódico de analistas para emissores recorrentes, o que prejudica a continuidade das avaliações."
     },
     "gabarito": "a",
     "feedback": {
      "b": "O banco distribuidor não é o responsável pela contratação da agência de risco.",
      "c": "O investidor utiliza a nota publicada de forma gratuita e não realiza pagamentos para a agência.",
      "d": "O rodízio de analistas é um procedimento opcional na norma da CVM, e não uma obrigatoriedade."
     }
    },
    {
     "id": "cpa-prod-07-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a D. Na escala da S&amp;P e da Fitch, a linha de corte que separa os papéis mais seguros dos mais arriscados é a nota BBB-. Ela é o piso do Grau de Investimento, e qualquer nota abaixo dela (a partir de BB+) é Grau Especulativo.</p><p>A alternativa A confunde o teto máximo com o piso da categoria. A alternativa B aponta a primeira nota que já está rebaixada para o bloco de alto risco. A alternativa C traz a tradicional pegadinha da prova, misturando a nota de corte da Moody's (Baa3) numa pergunta sobre a S&amp;P.</p>",
     "enunciado": "<p>O mercado financeiro internacional divide as notas de crédito em duas grandes categorias estruturais. Na escala global utilizada pela agência Standard &amp; Poor's (S&amp;P), a linha de corte que marca o piso do Grau de Investimento é a nota:</p>",
     "alternativas": {
      "a": "AAA, sendo qualquer avaliação inferior considerada Grau Especulativo.",
      "b": "BB+, que delimita a faixa mínima exigida pelos fundos de pensão conservadores.",
      "c": "Baa3, que determina a transição oficial para títulos de alto rendimento.",
      "d": "BBB-, sendo que um degrau abaixo já inicia o Grau Especulativo."
     },
     "gabarito": "d",
     "feedback": {
      "a": "O triplo A é a nota máxima (topo), enquanto o Grau de Investimento abrange diversas classificações abaixo dela.",
      "b": "A nota BB+ já pertence ao Grau Especulativo, faixa que os fundos conservadores normalmente são proibidos de comprar.",
      "c": "O corte Baa3 está correto para o conceito, mas pertence exclusivamente à notação da agência Moody's."
     }
    },
    {
     "id": "cpa-prod-07-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. Muitos fundos de pensão e fundos conservadores possuem regulamentos que os proíbem de manter papéis de Grau Especulativo na carteira. Quando ocorre o downgrade, eles são forçados a vender essas debêntures imediatamente. Esse excesso repentino de ordens de venda inunda o mercado e derruba o preço do ativo.</p><p>A alternativa A inventa uma proteção regulatória irreal para cobrir perdas corporativas. A alternativa B vai contra a lógica do mercado, já que a perda do selo de segurança afugenta o capital. A alternativa D erra ao atribuir poder de bloqueio de mercado a uma mera agência avaliadora.</p>",
     "enunciado": "<p>Uma concessionária de energia possuía classificação de Grau de Investimento, mas perdeu contratos e sofreu um rebaixamento (downgrade) para o Grau Especulativo (High Yield). Um cliente que possui debêntures dessa empresa nota uma queda brusca no preço do título no mercado secundário. Esse impacto de desvalorização ocorre porque:</p>",
     "alternativas": {
      "a": "A piora financeira aciona as garantias obrigatórias da CVM, que cobra uma taxa de deságio para atuar na bolsa.",
      "b": "O rebaixamento atrai investidores especulativos em busca de barganhas, gerando excesso de demanda.",
      "c": "A perda do selo força muitos fundos conservadores a venderem o ativo imediatamente, gerando excesso de oferta e achatando o preço.",
      "d": "A agência de rating suspende temporariamente a negociação do papel no balcão até a empresa recuperar o caixa."
     },
     "gabarito": "c",
     "feedback": {
      "a": "Não existem garantias da CVM ou do FGC atuando sobre o risco de crédito e desvalorização de debêntures.",
      "b": "O rebaixamento sinaliza risco e resulta em desvalorização no preço à vista, e não em aumento de demanda que sustentaria a cotação.",
      "d": "As agências não possuem autoridade para travar ou suspender as negociações secundárias de um título na Bolsa de Valores."
     }
    },
    {
     "id": "cpa-prod-07-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a B, pois ela é a única falsa (conforme pede o comando \"assinale a incorreta\"). No Brasil, o rodízio de analistas nas agências de classificação de risco não é obrigatório. A norma o trata como opcional, exigindo apenas que a empresa divulgue seus procedimentos caso decida implantá-lo.</p><p>As alternativas A, C e D descrevem vedações reais e exatas impostas pela CVM para impedir que interesses financeiros contaminem a qualidade e a independência da nota divulgada ao mercado.</p>",
     "enunciado": "<p>A Resolução CVM 9 administra os conflitos de interesses na atuação das agências de classificação de risco no Brasil. De acordo com o texto da norma e as exigências para preservar a independência técnica, assinale a alternativa incorreta:</p>",
     "alternativas": {
      "a": "É vedado à agência prestar serviços de consultoria para a mesma entidade que ela avalia.",
      "b": "O rodízio periódico de analistas na avaliação das empresas recorrentes é uma medida de caráter obrigatório.",
      "c": "Os analistas não podem participar da negociação comercial e financeira do contrato de rating com o cliente.",
      "d": "A remuneração do analista não pode estar atrelada à receita financeira gerada pelo cliente analisado."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A norma proíbe a consultoria simultânea para evitar que a agência avalie o próprio serviço que prestou.",
      "c": "O comercial deve ser segregado para que o analista julgue o risco sem sofrer pressões na negociação dos honorários.",
      "d": "Atrelar a remuneração do analista aos ganhos do emissor comprometeria a neutralidade exigida pelo regulador."
     }
    }
   ],
   "Poupança: rendimento, data de aniversário e garantias": [
    {
     "id": "cpa-prod-08-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. No modelo em vigor, de cada R$ 100 captados na poupança, 65% vão obrigatoriamente para financiamento imobiliário (focado no Sistema Financeiro da Habitação - SFH), 20% ficam retidos no Banco Central como compulsório e apenas 15% são de aplicação livre pelo banco.</p><p>A alternativa B erra ao incluir o agronegócio no direcionamento e excluir o compulsório. A C erra ao colocar o agronegócio como destino da captação e mudar o percentual livre. A D erra porque o banco tem forte regulação e não aplica livremente todo o recurso da poupança.</p><p>Regra de bolso: a poupança é o motor financeiro da construção civil (65%), e caminha para 100% no futuro.</p>",
     "enunciado": "<p>A caderneta de poupança possui uma função estrutural importante na economia brasileira. De acordo com o modelo de direcionamento atual exigido pelo Conselho Monetário Nacional (CMN), o banco deve destinar os recursos captados da seguinte forma:</p>",
     "alternativas": {
      "a": "65% para financiamento imobiliário, 20% recolhidos como depósito compulsório e 15% de aplicação livre.",
      "b": "100% para financiamento imobiliário e do agronegócio, sendo vedada a retenção de depósito compulsório.",
      "c": "65% para crédito rural, 20% de aplicação livre e 15% recolhidos como depósito compulsório no Banco Central.",
      "d": "100% para aplicação livre do banco, desde que respeite o limite de segurança do Fundo Garantidor de Créditos."
     },
     "gabarito": "a",
     "feedback": {
      "b": "Os recursos são direcionados ao Sistema Financeiro da Habitação, e não para financiar safras no agronegócio.",
      "c": "O destino obrigatório é o financiamento imobiliário, e não o crédito rural.",
      "d": "Só 15% ficam livres. O resto é direcionamento obrigatório e compulsório."
     }
    },
    {
     "id": "cpa-prod-08-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. O produto não possui cobrança de taxa de administração para ninguém, mas a isenção de Imposto de Renda e IOF é exclusiva para investidores classificados como pessoa física (e entidades sem fins lucrativos). A pessoa jurídica comum, que visa lucro, paga o imposto normalmente.</p><p>A alternativa A cai na pegadinha da Anbima de generalizar o benefício, tratando a isenção como algo do papel e não de quem investe. A C erra ao manter isenção de IOF para a empresa. A D inventa um formato de cobrança de imposto baseado no ganho acima da inflação, o que não ocorre na caderneta.</p>",
     "enunciado": "<p>Você atende dois clientes que desejam abrir contas de poupança. O primeiro é uma pessoa física assalariada e o segundo é o dono de uma padaria, que pretende investir pelo CNPJ da sua empresa (com fins lucrativos). Ao explicar os custos e a tributação da caderneta de poupança para eles, você afirma que:</p>",
     "alternativas": {
      "a": "Ambos os clientes estão isentos do Imposto de Renda, pois a isenção é uma característica do produto.",
      "b": "A pessoa física é isenta de Imposto de Renda e de taxas, mas a pessoa jurídica com fins lucrativos paga Imposto de Renda sobre o rendimento.",
      "c": "A pessoa jurídica não pagará taxa de administração e estará isenta do IOF, pagando Imposto de Renda anualmente e não mensalmente.",
      "d": "Ambos pagarão Imposto de Renda sobre a parcela de rentabilidade que superar a inflação devido à perda do poder de compra."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A isenção não é do produto em si, mas atrelada ao perfil do investidor, beneficiando a pessoa física.",
      "c": "A pessoa jurídica com fins lucrativos não possui o benefício tributário na poupança.",
      "d": "A tributação não é calculada com base no ganho real contra a inflação, e a PF é sempre isenta."
     }
    },
    {
     "id": "cpa-prod-08-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. A liquidez da poupança é diária (você pode sacar a qualquer momento), mas a rentabilidade é mensal. Os juros só caem na conta exatamente no dia correspondente à data do depósito. Se o cliente saca no dia 11 um valor cuja data de aniversário é dia 12, ele perde os rendimentos de todo aquele mês acumulado, e o banco só devolve o valor principal de R$ 5.000,00.</p><p>As alternativas A e C estão erradas porque o sistema da poupança não permite rentabilidade proporcional (pro rata). A alternativa D erra ao inventar uma flexibilidade de um dia útil que não existe na legislação da caderneta.</p>",
     "enunciado": "<p>Um cliente deposita R$ 5.000,00 na poupança no dia 12 de um determinado mês. No mês seguinte, devido a uma despesa não planejada, ele realiza o resgate total desse valor no dia 11. Em relação à rentabilidade desse período, o investidor:</p>",
     "alternativas": {
      "a": "Recebe o rendimento acumulado de forma proporcional (pro rata) calculado em cima dos dias decorridos.",
      "b": "Perde integralmente o rendimento do mês, recebendo de volta apenas o valor inicial depositado sem juros.",
      "c": "Recebe a remuneração proporcional desde que aceite pagar uma multa pela quebra de carência do depósito.",
      "d": "Garante o rendimento integral, pois a liquidez diária do produto considera uma margem flexível de um dia útil."
     },
     "gabarito": "b",
     "feedback": {
      "a": "O saque antes da data exata de aniversário elimina totalmente a rentabilidade do período. Não existe cálculo proporcional na poupança.",
      "c": "Não há multa contratual, o dinheiro simplesmente não acumula a rentabilidade daquele mês não fechado.",
      "d": "A data de aniversário é exata e inegociável; resgatar um dia antes significa abrir mão dos juros do mês."
     }
    },
    {
     "id": "cpa-prod-08-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. A regra protege de forma vitalícia o \"estoque antigo\" (dinheiro depositado até 3 de maio de 2012), mantendo o rendimento clássico de 0,5% ao mês acrescido da TR em qualquer cenário. O corte da Selic para um patamar igual ou menor que 8,5% ao ano (nesse caso, 7,5%) altera o gatilho apenas para os depósitos novos, que passarão a render 70% da meta da Selic mais TR.</p><p>A alternativa A erra ao submeter o dinheiro antigo à regra nova. A alternativa C erra ao estender a proteção do dinheiro antigo aos depósitos novos. A alternativa D inverte completamente qual saldo é protegido pela exceção da lei.</p>",
     "enunciado": "<p>O Banco Central reduziu a meta da taxa Selic de 9,5% para 7,5% ao ano. Um cliente verifica o saldo da sua caderneta de poupança, que possui recursos aplicados em 2010 (antes das mudanças na regra) e depósitos recentes realizados no ano atual. Diante do novo cenário econômico, a remuneração dessa conta:</p>",
     "alternativas": {
      "a": "Passará a render 70% da Selic mais a Taxa Referencial em todos os depósitos, unificando a regra.",
      "b": "Manterá os depósitos de 2010 rendendo fixamente 0,5% ao mês mais TR, enquanto os depósitos novos passarão a render 70% da Selic mais TR.",
      "c": "Garantirá 0,5% ao mês mais TR para todo o patrimônio, pois a trava de queda atua para proteger o poder de compra.",
      "d": "Terá seus ganhos limitados a 70% da Selic para o saldo antigo e manterá 0,5% ao mês para os depósitos novos."
     },
     "gabarito": "b",
     "feedback": {
      "a": "O saldo antigo tem proteção contratual de direito adquirido e não altera o rendimento em cortes da taxa básica.",
      "c": "Apenas os depósitos feitos até 3 de maio de 2012 conservam a rentabilidade estática de meio por cento ao mês.",
      "d": "A lógica foi invertida; é o dinheiro recente que perde rendimento ativando a trava de 70% da Selic."
     }
    },
    {
     "id": "cpa-prod-08-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a B. O FGC protege as contas de poupança até o limite de R$ 250.000,00 por CPF, mas essa trava é consolidada por conglomerado financeiro. Se os dois bancos pertencem ao mesmo grupo econômico, os saldos se somam para dividir um único limite de R$ 250 mil, forçando o cliente a assumir a perda do valor que excede esse teto.</p><p>A alternativa A erra ao isolar as instituições, ignorando o conceito de conglomerado. A alternativa C tenta retirar a cobertura tradicional de um ativo tipicamente bancário. A alternativa D confunde o limite global do sistema (usado quando bancos de grupos diferentes quebram) com o limite individual daquele conglomerado específico.</p>",
     "enunciado": "<p>Um cliente conservador possui R$ 200 mil aplicados na poupança do Banco Alfa e deposita mais R$ 200 mil na poupança do Banco Beta. Os dois bancos pertencem ao mesmo conglomerado financeiro. Você alerta o investidor que, em caso de quebra simultânea das duas instituições, a proteção do Fundo Garantidor de Créditos (FGC) garantirá:</p>",
     "alternativas": {
      "a": "A devolução de R$ 400 mil, pois o limite de proteção defende até R$ 250 mil de cada instituição bancária separadamente.",
      "b": "A devolução de R$ 250 mil, pois este é o teto máximo de cobertura aplicável a todo o conglomerado financeiro.",
      "c": "Nenhuma cobertura, porque a poupança fica de fora da proteção do FGC por ter recursos compulsoriamente direcionados a imóveis.",
      "d": "A devolução de R$ 400 mil, devido ao teto global do FGC que protege os investidores em até R$ 1 milhão por CPF a cada período de quatro anos."
     },
     "gabarito": "b",
     "feedback": {
      "a": "O limite máximo não se multiplica em contas espalhadas por bancos que têm os mesmos donos (mesmo conglomerado).",
      "c": "A caderneta de poupança faz parte do rol oficial de produtos protegidos legitimamente pela garantia do FGC.",
      "d": "O teto global do sistema existe, mas a operação específica do cliente fica limitada ao teto de R$ 250 mil do grupo financeiro em questão."
     }
    }
   ],
   "TR e TLP": [
    {
     "id": "cpa-prod-09-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. A TBF é apurada a partir da captação bancária, utilizando a média ponderada dos CDBs e RDBs prefixados de 30 a 35 dias emitidos pelas 30 maiores instituições financeiras do país. A TR é o que sobra da TBF após a aplicação de um redutor.</p><p>A A e a B erram porque a TR não tem origem em títulos públicos nem na taxa Selic. A D erra por confundir a TBF com a TLP, que é a taxa dos contratos novos do BNDES atrelada ao IPCA.</p>",
     "enunciado": "<p>O Banco Central apura a Taxa Referencial (TR), que funciona como o indexador oficial de produtos estruturais como a poupança e o FGTS. A origem do cálculo da TR reside na Taxa Básica Financeira (TBF), que é calculada a partir da:</p>",
     "alternativas": {
      "a": "Média das negociações diárias de títulos públicos federais com prazo de longo vencimento.",
      "b": "Média da taxa Selic apurada ao longo do mês pelo Comitê de Política Monetária.",
      "c": "Média ponderada da captação de CDB e RDB prefixados emitidos pelas maiores instituições financeiras.",
      "d": "Média da inflação oficial medida pelo IPCA somada a um prêmio de risco definido pelo regulador."
     },
     "gabarito": "c",
     "feedback": {
      "a": "A TBF não deriva de títulos públicos federais, e sim exclusivamente da captação bancária privada.",
      "b": "A taxa Selic não compõe a base de cálculo da TBF nem da TR.",
      "d": "O IPCA compõe a Taxa de Longo Prazo (TLP) e não tem relação com o cálculo da TBF ou da TR."
     }
    },
    {
     "id": "cpa-prod-09-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. A antiga TJLP era fixada arbitrariamente pelo governo e frequentemente mantinha o custo abaixo da inflação, criando um subsídio coberto pelo Tesouro Nacional. A TLP foi criada para eliminar esse subsídio oculto e refletir o custo real de captação do governo no mercado.</p><p>A B erra porque a TLP encareceu o crédito público para equalizá-lo ao mercado, deixando de ficar abaixo da inflação. A C e a D erram ao misturar indexadores: a TLP não usa a TR e não corrige a poupança, ela serve aos financiamentos do BNDES.</p>",
     "enunciado": "<p>O Banco Nacional de Desenvolvimento Econômico e Social (BNDES) passou por uma modernização que substituiu a antiga Taxa de Juros de Longo Prazo (TJLP) pela Taxa de Longo Prazo (TLP) nos novos contratos. O principal objetivo do governo com essa substituição foi:</p>",
     "alternativas": {
      "a": "Eliminar os subsídios ocultos, alinhando o custo dos financiamentos públicos aos custos reais do mercado financeiro.",
      "b": "Baratear o crédito para o empresário, garantindo que a nova taxa fique sistematicamente abaixo da inflação oficial.",
      "c": "Substituir a correção pelo IPCA pela correção via Taxa Referencial (TR), visando estimular o setor imobiliário.",
      "d": "Facilitar a captação dos grandes bancos privados, usando a TLP para calcular a rentabilidade da caderneta de poupança."
     },
     "gabarito": "a",
     "feedback": {
      "b": "O objetivo foi justamente o inverso. A criação da TLP evitou que a taxa ficasse abaixo da inflação, eliminando o crédito subsidiado com dinheiro público.",
      "c": "A TLP utiliza ativamente o IPCA na sua composição, e não a Taxa Referencial (TR).",
      "d": "A TLP é exclusiva dos contratos do BNDES e não tem nenhuma relação com a caderneta de poupança, que usa a TR."
     }
    },
    {
     "id": "cpa-prod-09-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. A TR possui uma regra de piso muito clara e estrita: ela pode chegar a zero, mas nunca pode assumir um valor negativo. O Banco Central crava a TR em zero sempre que o resultado da fórmula fica abaixo de zero, protegendo o saldo da poupança e do FGTS.</p><p>A alternativa A erra ao permitir que a taxa fique negativa na conta do trabalhador. A alternativa C inventa a substituição por uma taxa de financiamento corporativo (TLP). A alternativa D erra porque a TR nunca deriva de forma direta da Selic, mas sim da TBF.</p>",
     "enunciado": "<p>Quando a taxa básica de juros (Selic) atinge patamares muito baixos na economia, a fórmula que calcula a Taxa Referencial (TR) a partir da TBF com o redutor frequentemente resulta em um número negativo. Nessas situações, o impacto direto no saldo do Fundo de Garantia do Tempo de Serviço (FGTS) determina que a TR:</p>",
     "alternativas": {
      "a": "Ficará negativa, mas o desconto será limitado ao rendimento fixo estrutural de 3% ao ano do fundo.",
      "b": "Assumirá valor zero, pois a legislação impõe um piso rígido que proíbe o repasse de taxas negativas para o FGTS e a poupança.",
      "c": "Será substituída provisoriamente pela TLP, a fim de garantir um ganho real acima da inflação para o trabalhador.",
      "d": "Refletirá exatamente a taxa Selic do período, desativando o uso da TBF até que os juros voltem a subir no país."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A TR tem um piso rígido em zero e jamais assume valores negativos, independentemente da taxa fixa do FGTS.",
      "c": "Não existe previsão legal para substituir a TR pela TLP na correção do saldo do trabalhador no FGTS.",
      "d": "A Selic não substitui a TBF no cálculo da TR em nenhum cenário econômico."
     }
    },
    {
     "id": "cpa-prod-09-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. A TLP foi desenhada de forma transparente para refletir o custo real que o governo federal assume para pegar dinheiro emprestado com os investidores. A sua composição possui dois componentes fixos: a variação da inflação oficial (IPCA) e o juro real exigido pelo mercado nos títulos públicos NTN-B de cinco anos.</p><p>A B erra porque a TLP não é prefixada; ela oscila e acompanha a inflação. A C confunde os indexadores, misturando a TLP com a dinâmica de cálculo da TBF e da TR. A D erra por vincular o crédito de infraestrutura à poupança.</p>",
     "enunciado": "<p>O diretor financeiro de uma indústria procurou você para entender como funcionará a correção da dívida de um novo financiamento de máquinas aprovado junto ao BNDES. Você explica que os contratos novos utilizam a TLP. Segundo as regras de composição dessa taxa, o empresário deve ser orientado que pagará:</p>",
     "alternativas": {
      "a": "A variação da inflação oficial (IPCA) somada a um juro real atrelado ao desempenho dos títulos públicos NTN-B.",
      "b": "Uma taxa de juros prefixada pelo governo federal, que permanecerá imutável independentemente da inflação do período.",
      "c": "A variação da Taxa Referencial (TR) somada ao custo médio de captação dos CDBs dos trinta maiores bancos privados.",
      "d": "A rentabilidade da caderneta de poupança acrescida de uma margem de lucro determinada anualmente pelo Banco Central."
     },
     "gabarito": "a",
     "feedback": {
      "b": "A TLP não é prefixada ou arbitrária; ela oscila abertamente de acordo com as expectativas de mercado e a inflação.",
      "c": "A TR não compõe a TLP; a TR nasce dos CDBs (via TBF) e serve para atualizar a poupança e operações do SFH.",
      "d": "Os empréstimos estruturais do BNDES não têm relação com a fórmula de rentabilidade da caderneta de poupança."
     }
    },
    {
     "id": "cpa-prod-09-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a B, pois ela é a única falsa (conforme pede o comando da questão). A TLP substituiu a TJLP apenas para os contratos <strong>novos</strong> do BNDES, firmados a partir de 2018. A antiga TJLP não foi extinta de forma retroativa, ela permanece válida e em uso para os contratos antigos que ainda estão em fase de amortização.</p><p>As opções A, C e D descrevem fatos perfeitamente verdadeiros e abordam a correta divisão de papéis: a TR lida com poupança e FGTS usando base na captação bancária, enquanto a TLP rege o BNDES usando a inflação e a taxa da NTN-B.</p>",
     "enunciado": "<p>As diferentes taxas balizadoras possuem finalidades muito específicas e regras de transição dentro do Sistema Financeiro Nacional. Considere as funções da Taxa Referencial (TR) e da Taxa de Longo Prazo (TLP) e assinale a alternativa incorreta:</p>",
     "alternativas": {
      "a": "A TR corrige o saldo do FGTS, compõe a rentabilidade da poupança e atualiza contratos habitacionais do SFH.",
      "b": "A antiga TJLP deixou de existir, e todos os contratos de financiamento ainda ativos no BNDES foram migrados compulsoriamente para a TLP.",
      "c": "A TR deriva da TBF após a aplicação de um redutor, utilizando as médias de taxas de CDB e RDB prefixados captados pelos bancos.",
      "d": "A TLP exige que os clientes corporativos sejam orientados sobre a volatilidade, pois ela carrega o componente da inflação medida pelo IPCA."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A aplicação estrutural da TR na poupança, no FGTS e nos financiamentos do SFH está correta e vigente.",
      "c": "A cadeia de formação da TR (captação em CDB e RDB gerando a TBF e, após o redutor, a TR) está perfeitamente descrita.",
      "d": "A afirmação é verdadeira, pois a TLP atrela os contratos novos do BNDES à oscilação do IPCA e ao rendimento da NTN-B."
     }
    }
   ],
   "Tributação das aplicações de renda fixa": [
    {
     "id": "cpa-prod-10-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. O recolhimento na renda fixa tradicional ocorre via retenção na fonte pela própria instituição financeira, que desconta o tributo automaticamente do cliente. Além disso, a base de cálculo atinge apenas o lucro (a rentabilidade), preservando intacto o valor principal que o cliente aportou.</p><p>A A e a D erram o método de cobrança, pois exigem burocracias de DARF ou ajuste anual em vez da praticidade da retenção na fonte. A C erra a base de cálculo ao tributar o valor principal original do cliente, o que configuraria confisco.</p><p>Regra de bolso: banco retém na fonte, e o imposto morde só o lucro.</p>",
     "enunciado": "<p>Sobre a cobrança do Imposto de Renda em aplicações de renda fixa tributáveis, como o Certificado de Depósito Bancário (CDB), a legislação determina que a responsabilidade pelo recolhimento e a respectiva base de cálculo são:</p>",
     "alternativas": {
      "a": "Do investidor por meio de emissão de DARF mensal, incidindo o imposto sobre o valor total resgatado.",
      "b": "Da instituição financeira via retenção na fonte, incidindo exclusivamente sobre a rentabilidade da operação.",
      "c": "Da instituição financeira via retenção na fonte, incidindo sobre o valor principal somado aos juros acumulados.",
      "d": "Do investidor no momento do ajuste anual, incidindo exclusivamente sobre a rentabilidade auferida."
     },
     "gabarito": "b",
     "feedback": {
      "a": "O imposto é retido na fonte pela instituição pagadora, dispensando a emissão de DARF pelo cliente.",
      "c": "A base de cálculo poupa o valor principal, tributando única e exclusivamente o lucro do investimento.",
      "d": "O ajuste ocorre automaticamente no momento do resgate direto na fonte, e não na declaração de ajuste anual."
     }
    },
    {
     "id": "cpa-prod-10-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. O benefício fiscal da isenção de Imposto de Renda em produtos como a LCI e a LCA atende estritamente o investidor pessoa física. Se uma pessoa jurídica com fins lucrativos (como uma construtora ou padaria) aplicar sobras de caixa no mesmo produto, ela sofrerá a tributação normal pela tabela regressiva.</p><p>A B erra ao generalizar o benefício para todo o mercado empresarial. A C inverte quem são os perfis isentos e tributados pela lei. A D erra ao limitar o mapa da isenção fiscal apenas à caderneta de poupança, ignorando todos os papéis securitizados e letras que possuem a mesma vantagem.</p>",
     "enunciado": "<p>O mercado financeiro oferece títulos isentos de Imposto de Renda como forma de direcionar dinheiro para setores específicos. Ao comparar a tributação de uma Letra de Crédito do Agronegócio (LCA) oferecida para um investidor pessoa física e para uma pessoa jurídica com fins lucrativos, observa-se que:</p>",
     "alternativas": {
      "a": "A isenção de Imposto de Renda atende estritamente a pessoa física, enquanto a pessoa jurídica recolhe imposto na fonte pela tabela regressiva.",
      "b": "Ambos os investidores contam com isenção total de Imposto de Renda, pois o benefício fiscal pertence à estrutura do produto.",
      "c": "A pessoa jurídica possui isenção total sobre o capital de giro, enquanto a pessoa física paga alíquota única de 15% no resgate.",
      "d": "Ambos recolhem imposto na fonte, pois a isenção de Imposto de Renda na renda fixa aplica-se exclusivamente à caderneta de poupança."
     },
     "gabarito": "a",
     "feedback": {
      "b": "A isenção fiscal não é uma característica absoluta do produto, dependendo diretamente do perfil do investidor.",
      "c": "A regra descrita inverte as determinações legais, pois o benefício fiscal abrange a pessoa física e exclui a empresa.",
      "d": "A isenção na prateleira atinge diversos papéis de crédito, como LCA, LCI, CRI e CRA, não apenas a poupança."
     }
    },
    {
     "id": "cpa-prod-10-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. O Imposto de Renda e o IOF incidem juntos em resgates de curtíssimo prazo, mas a IN 1.585 estabelece uma fila. O IOF sai primeiro consumindo a sua fatia do lucro. A base de cálculo do Imposto de Renda passa a ser apenas o que restou (a diferença positiva líquida de IOF).</p><p>A alternativa A inverte a ordem de dedução na fila. A B comete um erro severo ao aplicar alíquotas sobre o capital principal do cliente. A D cria um modelo fictício de incidência dupla sobre o montante bruto original.</p><p>Regra de bolso: o IOF sai primeiro, e o IR morde apenas o lucro que sobrou.</p>",
     "enunciado": "<p>Um cliente solicitou o resgate de um CDB no 15º dia após a aplicação, gerando a incidência de Imposto sobre Operações Financeiras (IOF) e Imposto de Renda sobre os ganhos. De acordo com as regras de convivência desses tributos em prazos muito curtos, a ordem de dedução correta é:</p>",
     "alternativas": {
      "a": "O Imposto de Renda incide primeiro sobre o lucro bruto, e o IOF é calculado apenas sobre o saldo que sobrou.",
      "b": "Os dois tributos são somados e descontados simultaneamente do valor principal que o investidor aportou.",
      "c": "O IOF é deduzido primeiro: o Imposto de Renda incide apenas sobre a diferença positiva que restou do lucro.",
      "d": "O IOF e o Imposto de Renda incidem de forma paralela, sendo ambos calculados sobre o rendimento bruto original."
     },
     "gabarito": "c",
     "feedback": {
      "a": "A norma estabelece uma fila inversa, obrigando a dedução do IOF primeiro para criar uma nova base de cálculo líquida.",
      "b": "Nenhum imposto incide sobre o valor principal da operação, sendo o desconto concentrado apenas no lucro auferido.",
      "d": "A incidência paralela geraria cobrança em duplicidade sobre a mesma fatia de lucro, ignorando a fila obrigatória."
     }
    },
    {
     "id": "cpa-prod-10-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. A tabela regressiva baseia-se na contagem de dias corridos e define cortes exatos. Até 180 dias, cobra-se 22,5%. De 181 a 360 dias, a taxa cai para 20%. O resgate em exatos 365 dias entra na terceira faixa (de 361 a 720 dias), o que reduz a alíquota retida pelo banco para 17,5%.</p><p>As alternativas A e B usam as alíquotas aplicadas em faixas de tempo que já foram superadas pelo dinheiro da cliente. A alternativa D exigiria que ela mantivesse o dinheiro parado por mais de dois anos (acima de 720 dias).</p>",
     "enunciado": "<p>Uma investidora aplicou recursos em um título de renda fixa tributável com o objetivo de custear reformas em seu apartamento. Por conta de imprevistos, ela liquidou a aplicação transcorridos exatos 365 dias corridos após a data do aporte. A instituição financeira reteve o Imposto de Renda da operação com a alíquota de:</p>",
     "alternativas": {
      "a": "22,5%",
      "b": "20,0%",
      "c": "17,5%",
      "d": "15,0%"
     },
     "gabarito": "c",
     "feedback": {
      "a": "A alíquota de 22,5% pune resgates velozes e atinge os investimentos mantidos somente até o prazo de 180 dias.",
      "b": "A alíquota de 20% vigora apenas na janela compreendida entre os prazos de 181 a 360 dias corridos.",
      "d": "A alíquota mínima de 15% é um prêmio concedido somente ao capital que supera a marca de 720 dias corridos."
     }
    },
    {
     "id": "cpa-prod-10-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a D. O pagamento de um cupom é um fato gerador de imposto. A IN 1.585 define que a alíquota do cupom acompanha o tempo decorrido desde a data de aquisição do título. O relógio conta a partir da compra e não zera a cada semestre. Conforme os anos passam, os cupons vão descendo os degraus da tabela até estacionarem em 15%.</p><p>A alternativa A erra ao engessar a tributação em uma alíquota fixa para o ativo. A alternativa B apresenta a pegadinha clássica, na qual o aluno deduz erroneamente que o relógio reinicia a cada saque. A alternativa C erra ao ignorar que o depósito de juros já caracteriza o fato gerador tributável.</p>",
     "enunciado": "<p>Um cliente comprou uma Nota do Tesouro Nacional série B (NTN-B) que distribui juros semestralmente. Ele questiona como funcionará a tributação de Imposto de Renda em cada parcela de juros que cair na sua conta. Você orienta corretamente que o pagamento de cupom:</p>",
     "alternativas": {
      "a": "Fixa a alíquota em 15% para todos os pagamentos periódicos efetuados, ignorando a tabela regressiva padrão.",
      "b": "Reinicia o relógio a cada semestre: todos os cupons sofrem a alíquota máxima de 22,5%.",
      "c": "Não sofre tributação, pois o fato gerador do tributo limita-se ao resgate antecipado do valor principal.",
      "d": "Acompanha os dias corridos contados desde a data original da aquisição do título, e o relógio não reinicia a cada cupom."
     },
     "gabarito": "d",
     "feedback": {
      "a": "O pagamento de cupons não usufrui de taxa congelada, pois segue a regressão por prazos da norma geral.",
      "b": "O relógio tributário de aquisição não volta ao marco zero após cada depósito de rendimentos na conta.",
      "c": "O pagamento de juros na conta do cliente (disponibilidade) caracteriza-se imediatamente como um fato gerador."
     }
    }
   ],
   "IOF nas aplicações financeiras": [
    {
     "id": "cpa-prod-11-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. O IOF desestimula operações de giro rápido tributando agressivamente os resgates nos primeiros trinta dias, começando em 96% de alíquota no primeiro dia e caindo dia a dia até zerar completamente no 30º dia corrido. A incidência atinge apenas a rentabilidade (o lucro), preservando o valor principal.</p><p>A alternativa A erra na base de cálculo e erra ao aplicar dias úteis na regra. A alternativa C tributa equivocadamente o dinheiro original do cliente. A alternativa D descreve as faixas de cobrança próprias do Imposto de Renda de longo prazo.</p><p>Regra de bolso: IOF zera no 30º dia corrido e morde só o lucro.</p>",
     "enunciado": "<p>O Imposto sobre Operações Financeiras (IOF) possui uma característica regulatória voltada ao controle de liquidez no sistema bancário. De acordo com a tabela aplicável e as regras de base de cálculo do tributo, verifica-se que:</p>",
     "alternativas": {
      "a": "A alíquota inicial atinge 96% e zera a partir do trigésimo dia útil, incidindo sobre o valor total do resgate.",
      "b": "A alíquota começa em 96% da rentabilidade e zera totalmente a partir do 30º dia corrido de aplicação.",
      "c": "O tributo cobra 1% ao dia sobre o saldo acumulado de principal mais os rendimentos auferidos.",
      "d": "O IOF inicia a cobrança no 30º dia de investimento e estaciona em 15% após completar dois anos de aplicação."
     },
     "gabarito": "b",
     "feedback": {
      "a": "O cronograma do IOF considera dias corridos, e não dias úteis, e não atinge o principal do cliente.",
      "c": "A cobrança está limitada exclusivamente ao teto do rendimento gerado, poupando a quantia depositada.",
      "d": "A regressão para 15% após dois anos pertence à tabela do Imposto de Renda, não à do IOF."
     }
    },
    {
     "id": "cpa-prod-11-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. A lista do art. 32 do Decreto 6.306 blinda expressamente com alíquota zero de IOF as operações de renda variável realizadas em bolsa, bem como os fundos de ações e alguns ativos securitizados.</p><p>A alternativa A relata um erro sutil, pois a LCI escapa do IOF na prática devido ao fato de sua carência impedir resgates curtos (seis meses), e não por isenção explícita no texto da lei de IOF. A B inverte tudo e taxa com o IOF os fundos de ações listados com alíquota zero. A D traz a distratora de estender os benefícios das debêntures incentivadas para a as de infraestrutura.</p>",
     "enunciado": "<p>O mapa das isenções tributárias atende a lógicas diferentes. Ao comparar as regras aplicadas pelo Decreto 6.306/2007 (IOF) e a norma de isenção fiscal do Imposto de Renda (IR), verifica-se que uma isenção não garante automaticamente a outra. Nesse contexto:</p>",
     "alternativas": {
      "a": "A Letra de Crédito Imobiliário (LCI) é isenta tanto de IR quanto de IOF por força de decreto expresso, igualando as regras da Receita Federal.",
      "b": "Os fundos de ações garantem isenção na cobrança de IR pessoa física e sofrem tributação de IOF diário pela tabela regressiva.",
      "c": "O mercado de renda variável, incluídas as operações em bolsa, possui alíquota zero explícita de IOF na lei do tributo.",
      "d": "As debêntures de infraestrutura isentam a pessoa física de IOF e Imposto de Renda, invertendo o papel do benefício ao emissor."
     },
     "gabarito": "c",
     "feedback": {
      "a": "A LCI não possui isenção expressa na lista da lei do IOF, ela escapa da tributação devido à existência do prazo de carência longo.",
      "b": "A tributação está invertida: fundos de ações possuem alíquota zero de IOF expressa na lei, mas pagam Imposto de Renda no lucro de cota.",
      "d": "As debêntures de infraestrutura cobram IR normalmente da pessoa física e concedem o benefício apenas para as entidades emissoras da dívida."
     }
    },
    {
     "id": "cpa-prod-11-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. O art. 46 da Instrução Normativa 1.585 determina uma fila clara de descontos: o IOF incide primeiro. A diferença positiva que restar (líquida de IOF) torna-se a nova base de cálculo para a incidência do Imposto de Renda.</p><p>A alternativa A erra ao imaginar que o sistema funde e soma percentuais matematicamente. A alternativa B erra ao aplicar o Imposto de Renda primeiro na fila. A alternativa D erra ao cobrar paralelamente os dois sobre a mesma base, o que geraria bitributação, e ainda os cobra indevidamente em cima do capital inicial da empresa.</p>",
     "enunciado": "<p>Um cliente depositou capital em um Certificado de Depósito Bancário (CDB) para cobrir despesas da sua empresa e, quinze dias após o aporte inicial, requisitou o resgate do valor total. A operação incorre em tributação dupla de impostos em virtude da janela de tempo do pedido de retirada. De acordo com a norma da Receita Federal, a apuração dos tributos:</p>",
     "alternativas": {
      "a": "Soma as alíquotas da tabela do IOF com a tabela do Imposto de Renda, retendo de uma única vez o percentual consolidado sobre os juros totais da aplicação.",
      "b": "Desconta o Imposto de Renda primeiro com base na alíquota de 22,5% e calcula a tabela do IOF utilizando apenas o saldo líquido restante daquele ganho aferido.",
      "c": "Deduz o IOF primeiro do rendimento bruto, e o que restar formará a nova base de cálculo líquida sobre a qual será retido o Imposto de Renda.",
      "d": "Realiza os dois cálculos de retenção em formato paralelo a partir do exato montante do saldo principal investido que produziu a operação de lucro."
     },
     "gabarito": "c",
     "feedback": {
      "a": "A norma não prevê a soma consolidada de alíquotas diferentes; o desconto ocorre no sistema tradicional de incidência em cascata.",
      "b": "A regra impõe prioridade contrária, definindo a tabela do IOF como dedução inicial do fluxo do lucro auferido pelo investidor.",
      "d": "O imposto atinge unicamente a rentabilidade, e não o capital base. E as incidências não são paralelas, pois obedecem ordem de desconto (IOF para depois o IR)."
     }
    },
    {
     "id": "cpa-prod-11-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a D. Existe uma determinação regulatória focada nesta modalidade à margem da tabela padrão. Pelo art. 31, os fundos de investimento com prazo de carência que sofram resgates antecipados submetem o cliente ao recolhimento do IOF à taxa de 0,5% ao dia, também limitado ao lucro que houver sido ganho na operação.</p><p>As alternativas A e C tratam de modo irreal as multas, inventando dobras de custos ou forçando a tabela de 96% nessa modalidade. A alternativa B erra ao tentar anular os deveres e isentar completamente a operação que contraria regras legais explícitas de cobrança punitiva.</p>",
     "enunciado": "<p>Além da mecânica padrão regressiva baseada no tempo de aplicação, a regulação aplica regras complementares sobre a cobrança de IOF em produtos que detém estruturação de carência. Se um cliente sacar cotas de um fundo de investimento que possui prazo de carência para o crédito dos rendimentos, retirando o recurso antes de cumprir esse limite imposto, ele estará sujeito:</p>",
     "alternativas": {
      "a": "À alíquota padrão da tabela de 96%, que não se reduz até que se cumpra o primeiro mês corrido inteiro exigido pelo termo de carência do fundo.",
      "b": "À isenção legal de IOF, devendo recolher apenas a multa rescisória fixada no estatuto em favor da custódia que abriu mão da retenção tributária.",
      "c": "À cobrança de uma taxa unificada que dobra a alíquota original do dia de resgate como penalidade ao quebrar o prazo das cláusulas mínimas contratuais.",
      "d": "À regra separada que cobra uma alíquota diária de 0,5% limitada ao total do rendimento ganho pelo prazo do depósito."
     },
     "gabarito": "d",
     "feedback": {
      "a": "Esta situação foge da aplicação geral dos dias decrescentes da tabela de 30 dias que começa a partir do patamar de noventa e seis por cento.",
      "b": "A retirada do ativo na quebra de prazo aciona a tributação imediata da Receita Federal e não exime o devedor da obrigação de custear o IOF.",
      "c": "Não há sanções e penalidades no desenho do fundo, o decreto simplesmente comuta e designa um artigo tarifário exclusivo ao resgate em análise."
     }
    },
    {
     "id": "cpa-prod-11-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a B, e o ponto da questão é que dois produtos chegam ao mesmo resultado por mecanismos distintos.</p><p>A lista de alíquota zero do art. 32, §2º do decreto do IOF alcança, entre outros, as operações de renda variável em bolsa, os fundos e clubes de ações, CDCA, LCA e CRA, debêntures e CRI, ETF de renda fixa em bolsa, FGC e FGCoop. O fundo de ações está nessa lista: a isenção é expressa.</p><p>A LCI e a LCD não estão. Elas escapam do IOF por um caminho indireto: o prazo mínimo de vencimento, seis meses na LCI e doze na LCD, torna impossível o resgate dentro dos 30 dias em que a tabela regressiva incide.</p><p>A distinção importa porque a banca costuma transportar a isenção de Imposto de Renda para o IOF. As duas listas são diferentes, e um produto isento de IR não é automaticamente alcançado pela alíquota zero de IOF.</p>",
     "enunciado": "<p>Nem a LCI nem um fundo de ações costumam gerar cobrança de IOF ao investidor, mas o caminho é diferente em cada caso. Sobre esses dois produtos, é correto afirmar que:</p>",
     "alternativas": {
      "a": "Os dois constam da lista de alíquota zero de IOF do decreto, e por isso nunca sofrem a cobrança.",
      "b": "O fundo de ações consta da lista de alíquota zero. A LCI não consta, e escapa porque o prazo mínimo de seis meses impede o resgate dentro dos 30 dias da tabela.",
      "c": "A LCI consta da lista de alíquota zero. O fundo de ações escapa porque a renda variável só é alcançada pelo Imposto de Renda.",
      "d": "Nenhum dos dois consta da lista, e os dois escapam apenas pelo prazo mínimo de aplicação."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A LCI não está na lista do art. 32. Ela chega ao mesmo resultado por outro caminho.",
      "c": "Está invertido. Quem está na lista é o fundo de ações, e não a LCI.",
      "d": "O fundo de ações está sim na lista, com alíquota zero expressa."
     }
    }
   ],
   "Renda variável: definição, mercado primário e secundário": [
    {
     "id": "cpa-prod-12-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a D. A essência da renda variável é a compra do risco de um negócio. O mercado a chama de \"variável\" porque não existe cálculo prévio de retorno no instante da aplicação e porque o cliente pode perder grande parte do dinheiro se os papéis desvalorizarem (não há promessa de devolução do valor principal).</p><p>A alternativa A erra ao atrelar os ativos às fórmulas prefixadas de empréstimo de curto prazo (CDI). A alternativa B descreve um cenário falho de renda fixa (promessa de devolução da dívida). A alternativa C cai na armadilha típica e estende indevidamente o seguro do FGC para produtos de risco de capital (ações e fundos imobiliários).</p>",
     "enunciado": "<p>Ao oferecer um produto de investimento da classe de renda variável, o profissional deve alertar o cliente sobre os riscos inerentes à modalidade. A definição estrutural que diferencia a renda variável das aplicações tradicionais é que o investidor:</p>",
     "alternativas": {
      "a": "Conhece o rendimento de forma prévia mediante uma fórmula atrelada ao CDI, mas o prazo de resgate é flutuante.",
      "b": "Adquire frações de dívida com garantia de devolução do principal, mas o prêmio varia conforme as regras da Bolsa.",
      "c": "Passa a contar com a proteção integral do Fundo Garantidor de Créditos (FGC) sobre a oscilação do mercado.",
      "d": "Não possui nenhuma garantia de rentabilidade mínima e não dispõe de garantia sobre a devolução do valor principal."
     },
     "gabarito": "d",
     "feedback": {
      "a": "A renda variável atua sem nenhuma matemática prévia e não atrela ganhos à fórmula bancária do CDI.",
      "b": "A renda variável pressupõe sociedade em um negócio, e não compra de dívida com devolução garantida.",
      "c": "Ativos de renda variável operam completamente fora das barreiras protetoras do fundo garantidor de depósitos."
     }
    },
    {
     "id": "cpa-prod-12-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. O mercado primário é o local de emissão dos papéis novos (ex: Oferta Pública Inicial, IPO). Quando um título nasce e é vendido pela primeira vez ao público, o dinheiro sai das contas dos investidores e entra direto no caixa da empresa emissora para financiar projetos e infraestrutura.</p><p>A alternativa A erra a via do negócio, pois pagar debênture é devolver crédito, e não captar. A alternativa C descreve exatamente o conceito oposto (mercado secundário). A alternativa D relata uma intervenção do Estado totalmente desvinculada e proibida nesse ramo direto de estruturação de mercado.</p><p>Regra de bolso: mercado primário bota o dinheiro no caixa da empresa; mercado secundário é apenas troca entre investidores.</p>",
     "enunciado": "<p>As operações ocorrem em dois ambientes distintos e o fluxo do dinheiro determina em qual mercado a transação aconteceu. Assinale a alternativa que descreve a função exata do mercado primário de capitais:</p>",
     "alternativas": {
      "a": "É o ambiente onde as empresas resgatam debêntures antes do prazo para diminuir o saldo devedor.",
      "b": "É o ambiente que representa o nascedouro dos papéis, sendo o único momento em que a companhia emissora capta dinheiro efetivo para seu caixa.",
      "c": "É a plataforma em que investidores veteranos negociam ativos que já existem com investidores iniciantes.",
      "d": "É a roda de negócios onde o Banco Central provê liquidez às ações por intermédio das reservas internacionais."
     },
     "gabarito": "b",
     "feedback": {
      "a": "O ato de recompra ou amortização lida com a baixa de um passivo e não caracteriza o mercado de emissão inicial de um ativo novo.",
      "c": "A transação entre titulares distintos que trocam papéis já existentes caracteriza estritamente o mercado secundário.",
      "d": "O Banco Central atua na política monetária macroeconômica, não sendo formador ou injetor de liquidez em emissões primárias da Bolsa."
     }
    },
    {
     "id": "cpa-prod-12-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. O enunciado relata a migração entre os mercados. A indústria arrecadou os R$ 50 milhões iniciais no mercado primário (o IPO). Dois anos mais tarde, a venda desse cliente a um terceiro configura uma transação de mercado secundário. Nesse momento, a empresa vira mero espectador: o dinheiro vai apenas da conta de quem compra para quem vende (liquidez).</p><p>As alternativas B e C tentam falsificar uma injeção retroativa de caixa na indústria de calçados, mas os recursos das vendas futuras das ações velhas não chegam ao balanço financeiro dela. A alternativa D cria uma participação irreal do emissor nos lucros das revendas.</p>",
     "enunciado": "<p>Uma indústria de calçados deseja levantar R$ 50 milhões em recursos para expandir suas instalações e lançar novos produtos. Para isso, ela abre seu capital e vende novos lotes de ações no mercado. Dois anos depois, o cliente que adquiriu essas ações resolve se desfazer do investimento e o vende na B3 para outro participante. No momento dessa segunda venda, o dinheiro da operação:</p>",
     "alternativas": {
      "a": "Transitará unicamente entre a conta do comprador e do vendedor, não gerando nenhum centavo de receita nova para o caixa da indústria de calçados.",
      "b": "Será repassado ao caixa da indústria de calçados, que deverá aprovar a troca de acionistas antes do dinheiro ser liberado.",
      "c": "Retornará ao mercado primário, fortalecendo as reservas financeiras e o índice de alavancagem de capitais da empresa.",
      "d": "Sofrerá o desconto legal de custódia corporativa para que a empresa emolumente os ganhos proporcionais com a valorização de sua própria marca."
     },
     "gabarito": "a",
     "feedback": {
      "b": "O ambiente de balcão ou Bolsa viabiliza transações que não demandam a aprovação de controladores originais para destravarem dinheiro aos acionistas.",
      "c": "A venda não retrocede de nível de mercado nem envia montantes de capital que reforcem o balanço de ativos do devedor emissor.",
      "d": "A emissora da ação atua como observadora passiva do secundário; ela não recebe fatias ou lucros pela valorização dos prêmios de seus papéis na mão de terceiros."
     }
    },
    {
     "id": "cpa-prod-12-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. O mercado secundário não gera capital para as empresas, mas provê algo que as mantém funcionando: a liquidez. A certeza de poder negociar o título com terceiros a qualquer instante na B3 é a principal motivação para um aplicador colocar seu dinheiro nas ofertas de lançamento (mercado primário) de indústrias e bancos.</p><p>A alternativa A erra ao afirmar que o secundário é um freio de perdas. A alternativa C envolve ajustes aleatórios de fórmulas distantes da realidade da B3. A alternativa D promete garantias falsas, já que o emissor primário não tem o dever de recomprar ações que foram a público.</p>",
     "enunciado": "<p>A interdependência entre os ambientes do mercado de capitais é fator decisivo na captação do país. Afirma-se que nenhum investidor participaria da oferta primária de uma grande construtora se ficasse sem opções para resgatar os recursos depois. O principal serviço estrutural que o mercado secundário organizado na B3 fornece ao mercado primário é a:</p>",
     "alternativas": {
      "a": "Manutenção regulada de preços, limitando a queda máxima dos papéis por dia.",
      "b": "Provisão de fluxo e liquidez constante, facilitando a transformação de papéis antigos em dinheiro mediante a venda para novos interessados.",
      "c": "Reprecificação automática de rendimentos e inflação que atuarão em papéis futuros de dívida.",
      "d": "Garantia de rentabilidade nominal, assegurando recompra pelo próprio emissor mediante as regras de capital social estipuladas no primário."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A dinâmica de balcão baseia-se na livre lei de oferta e demanda e não interfere regulando ou freando oscilações nominais.",
      "c": "Os mercados atuam na troca de mãos (titularidade) do título e não efetuam ajustes sistêmicos na fórmula do balanço inflacionário de outros ativos.",
      "d": "Nenhum participante de renda variável detém proteção de rentabilidade e o devedor não está constrangido a recomprações antecipadas."
     }
    },
    {
     "id": "cpa-prod-12-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a C. A prova testa uma janela temporal crítica do ambiente secundário no Brasil. Quando o investidor vende a ação na plataforma da B3 (mercado à vista), ele fecha o negócio de imediato, porém a liquidação física (mudar as ações de carteira) e financeira (entregar o dinheiro da venda) ocorre em D+2 (dois dias úteis depois do aperto de mãos).</p><p>A alternativa A relata uma regra (D+1) que se tornará norma apenas em 2028, não refletindo a liquidação do momento. A alternativa B erra por forçar saques instantâneos no mesmo dia em modalidade inadequada. A alternativa D cria amarrações lentas, irreais e atreladas à compensação mensal das corretoras para liberar os valores dos acionistas.</p>",
     "enunciado": "<p>Um cliente, detentor de perfil arrojado e ciente de que aplicações de renda variável não fornecem cobertura de FGC, concretizou a venda total das ações que guardava em carteira às 14:00 horas. A ordem foi executada imediatamente no mercado secundário (à vista) da B3. No tocante ao fluxo físico e financeiro padrão que regula o repasse da transação ao vendedor, verifica-se que o dinheiro fica disponível para saque:</p>",
     "alternativas": {
      "a": "Em D+1 (um dia útil seguinte à venda), conforme regramento definitivo que extinguiu o modelo defasado do sistema de liquidações da Bolsa.",
      "b": "No mesmo dia útil da operação (D+0), caso as ações sejam transferidas com lucro e paguem o IR diretamente na fonte bancária.",
      "c": "Em D+2 (dois dias úteis depois do fechamento do negócio), conforme a regra em vigor de liquidação do mercado à vista, já que a B3 prevê reduzir para D+1 apenas no ano de 2028.",
      "d": "Apenas após a virada de mês (ciclo de balanço), devido aos custos contratuais da corretora responsável e compensação dos fundos liquidantes de proteção."
     },
     "gabarito": "c",
     "feedback": {
      "a": "A regra D+1 é um modelo em fase de transição (anunciado para 2028) e não vigora de forma definitiva na resposta atual do mercado à vista.",
      "b": "A apuração do Imposto de Renda não interfere na liberação temporal dos valores nas liquidações financeiras e operações no dia (D+0) são exceções de derivativos.",
      "d": "O mercado opera fluxos contínuos e velozes, não paralisando valores até datas mensais de ajuste ou fechamento de ciclos de folha de balanço das corretoras."
     }
    }
   ],
   "Sociedades anônimas: S/A aberta, fechada e empresa listada": [
    {
     "id": "cpa-prod-13-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. A estrutura inicial e mais familiar é a Sociedade Limitada (LTDA), cujo capital divide-se em cotas focadas na figura pessoal dos sócios. Quando a empresa expande, o modelo se transforma para a Sociedade Anônima (S/A), onde o capital deixa de ter cotas e passa a ser representado matematicamente por ações (frações do negócio).</p><p>A alternativa B erra ao colocar o público na Limitada. A alternativa C envolve a Junta e a CVM fora do contexto da comparação base. A alternativa D comete o erro clássico de vocabulário da prova ao misturar os termos limitados e anônimos.</p>",
     "enunciado": "<p>O mercado empresarial brasileiro classifica o ciclo de crescimento e a estrutura societária das companhias em modalidades distintas. A diferença estrutural básica que separa uma Sociedade Limitada (LTDA) de uma Sociedade Anônima (S/A) é que o capital social da:</p>",
     "alternativas": {
      "a": "Limitada é dividido em cotas, enquanto o da Sociedade Anônima é dividido em ações.",
      "b": "Limitada pertence ao público em geral, enquanto a Sociedade Anônima é controlada por investidores privados.",
      "c": "Limitada não exige registro em Junta Comercial, enquanto a Sociedade Anônima exige auditoria independente da CVM.",
      "d": "Limitada é dividido em ações, enquanto o da Sociedade Anônima é dividido em debêntures estruturadas."
     },
     "gabarito": "a",
     "feedback": {
      "b": "A Limitada é mais restrita que a S/A e o seu formato societário não permite o acesso ao dinheiro do público geral.",
      "c": "Ambas dependem de registro; a diferença de auditoria incide entre as categorias de S/A Aberta e Fechada, e não na Limitada.",
      "d": "A alternativa inverte os conceitos oficiais, atribuindo as ações à estrutura inadequada da empresa Limitada."
     }
    },
    {
     "id": "cpa-prod-13-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. O Estado permite que a companhia aberta capte recursos do público, mas exige contrapartida. Para proteger o cidadão comum, a CVM obriga a empresa a adotar alta transparência, emitir relatórios periódicos de balanço financeiro, comunicar imediatamente fatos relevantes e contratar empresa de auditoria independente para avaliar o caixa.</p><p>A alternativa A relata a confusão entre companhia aberta e empresa listada (ela pode ser aberta e não listar na bolsa). A alternativa B erra ao entregar o controle corporativo aos funcionários da Bolsa. A alternativa D envolve a Junta Comercial em assunto restrito da CVM e do mercado.</p>",
     "enunciado": "<p>A obtenção do registro oficial junto à Comissão de Valores Mobiliários (CVM) e a consequente transformação da companhia em uma S/A Aberta impõe duras regras à organização. Em troca do acesso legal ao dinheiro do investidor pessoa física (público poupador), essa empresa assume a obrigatoriedade imediata de:</p>",
     "alternativas": {
      "a": "Listar pelo menos metade de suas ações ordinárias no painel da bolsa de valores dentro do mesmo semestre.",
      "b": "Transferir o controle financeiro dos fundadores originais da companhia para a equipe da diretoria colegiada da B3.",
      "c": "Manter alta transparência, publicar periodicamente os resultados e contratar auditoria independente.",
      "d": "Fixar os preços das futuras debêntures por intermédio da Junta Comercial do estado da respectiva sede."
     },
     "gabarito": "c",
     "feedback": {
      "a": "O registro de capital aberto não obriga o emissor a colocar ações na B3; a empresa pode abrir capital só com debêntures.",
      "b": "A B3 é apenas o palco de negociação de negócios e jamais assume o controle administrativo e contábil das companhias.",
      "d": "A Junta Comercial não precifica ativos financeiros nem participa da formulação e venda das debêntures."
     }
    },
    {
     "id": "cpa-prod-13-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. A S/A Fechada fica expressamente proibida de fazer distribuição pública de valores mobiliários. Para levantar dinheiro, ela depende de investidores privados, fundos e do círculo próximo dos sócios.</p><p>A B inverte o alcance do regulador: a CVM fiscaliza companhia aberta, e a fechada responde à Junta Comercial. A C repete a confusão entre registro e listagem, tratada na questão seguinte. A D nega a característica que dá nome à sociedade anônima de responsabilidade limitada: o acionista arrisca o que pagou pelas ações, e não o patrimônio pessoal.</p>",
     "enunciado": "<p>Sobre as Sociedades Anônimas e a regulação brasileira, é correto afirmar que:</p>",
     "alternativas": {
      "a": "A S/A Fechada não pode fazer distribuição pública de valores mobiliários e capta apenas junto a investidores privados.",
      "b": "A S/A Fechada é fiscalizada pela CVM da mesma forma que a companhia aberta.",
      "c": "Toda S/A Aberta com registro aprovado passa automaticamente a ter as ações negociadas na B3.",
      "d": "O acionista de uma S/A responde pelas dívidas da companhia com o próprio patrimônio pessoal."
     },
     "gabarito": "a",
     "feedback": {
      "b": "A CVM fiscaliza apenas as companhias abertas. A S/A Fechada responde à Junta Comercial.",
      "c": "Registro de companhia aberta não é listagem. A empresa pode ser aberta e não ter ação em bolsa.",
      "d": "Na S/A a responsabilidade do acionista é limitada ao preço de emissão das ações que subscreveu."
     }
    },
    {
     "id": "cpa-prod-13-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. Essa é a principal confusão conceitual cobrada na certificação. A empresa listada é aquela que, além de ser S/A Aberta, deu o passo extra de cadastrar e admitir ativamente suas ações no ambiente da bolsa (B3) para prover liquidez. Portanto, toda listada já cumpriu as obrigações e é uma Aberta. Contudo, o inverso não ocorre: uma S/A Aberta pode emitir apenas debêntures, captando com o público sob regras da CVM, e guardar as ações sem jamais listá-las na B3.</p><p>A alternativa A erra na automação da listagem via balanço contábil. A alternativa C tenta forjar um atalho burlado ignorando o Estado. A alternativa D cria uma restrição inexistente para prazos alongados de debênture.</p>",
     "enunciado": "<p>O mercado financeiro diferencia as categorias das empresas pelas operações que elas desenvolvem junto aos investidores. Avaliando a correlação entre uma S/A Aberta e uma Empresa Listada, identifica-se na norma da CVM que:</p>",
     "alternativas": {
      "a": "Toda S/A Aberta torna-se uma empresa listada no momento da formalização contábil de sua auditoria.",
      "b": "Toda empresa listada é obrigatoriamente uma S/A Aberta, mas o inverso não é verdadeiro.",
      "c": "Toda empresa listada dispensa o registro da CVM se assinar contrato comercial definitivo de serviço com a B3.",
      "d": "Toda S/A Aberta precisa ser listada caso venda papéis de dívida com vencimentos que superem dez anos."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A auditoria atesta os cofres perante o regulador, não garantindo contrato de cotação ou inserção de pregão na Bolsa.",
      "c": "A B3 não anula nem tem autoridade de revogar as obrigações da Comissão de Valores Mobiliários (CVM) sobre a captação popular.",
      "d": "O vencimento dos papéis não exerce nenhum fator punitivo que obrigue o titular a levar as ações a listamento na B3."
     }
    },
    {
     "id": "cpa-prod-13-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a D. A Resolução CVM 80/2022 separou o registro de emissor em duas categorias. A categoria A admite quaisquer valores mobiliários, inclusive ações. A categoria B admite todos os demais, como debêntures e notas comerciais, mas exclui ações, certificados de depósito de ações e qualquer papel conversível em ação.</p><p>É o registro típico da empresa que quer captar por dívida sem abrir o capital acionário ao público. A A descreve a categoria A. A B erra ao imaginar que a restrição depende da classe da ação. A C inventa uma limitação que não existe na norma.</p>",
     "enunciado": "<p>Uma empresa de infraestrutura obteve na CVM o registro de emissor na categoria B, prevista na Resolução CVM 80/2022. Com esse registro, ela está autorizada a ofertar publicamente:</p>",
     "alternativas": {
      "a": "Quaisquer valores mobiliários, inclusive ações, sem restrição.",
      "b": "Apenas ações preferenciais, já que elas não transferem o controle da companhia.",
      "c": "Apenas títulos atrelados a câmbio e cotas de fundos exclusivos.",
      "d": "Todos os valores mobiliários, como debêntures e notas comerciais, exceto ações e papéis conversíveis em ações."
     },
     "gabarito": "d",
     "feedback": {
      "a": "Ofertar ações exige a categoria A. É exatamente o que a categoria B não permite.",
      "b": "A categoria B exclui ações de qualquer classe, e não só as ordinárias.",
      "c": "A restrição da categoria B recai sobre ações, e não sobre câmbio ou fundos."
     }
    }
   ],
   "Classes de ações: ordinárias, preferenciais, units, BDRs e bônus de subscrição": [
    {
     "id": "cpa-prod-14-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. A Lei das Sociedades Anônimas exige que as ações preferenciais sem direito a voto ou com voto restrito respeitem o teto máximo de 50% do total das ações emitidas pela companhia.</p><p>A alternativa A erra ao afirmar que a empresa pode compor 100% de sua emissão com preferenciais. A alternativa C inventa que a embalagem comercial das Units anula a regra rígida da lei. A alternativa D apresenta um limite restritivo de um terço que não existe na legislação da S/A.</p>",
     "enunciado": "<p>Uma Sociedade Anônima planeja emitir novas ações no mercado para captar recursos, mas os fundadores desejam preservar ao máximo o controle político do negócio limitando o direito de voto de novos sócios. Em relação ao limite de emissão de ações preferenciais sem direito a voto, a lei determina que a empresa pode emitir:</p>",
     "alternativas": {
      "a": "Até 100% do seu capital em ações preferenciais, desde que garanta o pagamento de dividendos fixos aos investidores.",
      "b": "No máximo 50% do total das ações emitidas, pois a outra metade precisa carregar o poder de voto.",
      "c": "Ações preferenciais de forma ilimitada, desde que sejam agrupadas em pacotes estruturados de Units.",
      "d": "Apenas um terço do total de ações na classe preferencial, preservando o controle absoluto nas ações ordinárias."
     },
     "gabarito": "b",
     "feedback": {
      "a": "O limite legal impede que as ações preferenciais assumam 100% da emissão, protegendo o arranjo e a distribuição de votos.",
      "c": "As Units são apenas pacotes comerciais compostos de ações e não alteram o teto legal de emissão de preferenciais sem voto.",
      "d": "A lei permite que a emissão de preferenciais alcance até a metade (50%) do capital total, e não apenas um terço."
     }
    },
    {
     "id": "cpa-prod-14-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. As ações ordinárias outorgam o poder político por meio do voto nas assembleias gerais, enquanto as ações preferenciais abrem mão do voto em troca de vantagens econômicas e financeiras (prioridades).</p><p>A alternativa A apresenta a pegadinha clássica invertendo os direitos de cada classe de ação. A alternativa B erra ao atribuir o direito a voto pleno à classe preferencial. A alternativa D erra ao forçar que toda PN possui vantagem dupla (dividendo e reembolso) automaticamente, quando a norma estabelece que o estatuto é quem escolhe entre uma, outra ou ambas as prioridades.</p>",
     "enunciado": "<p>As ações de uma companhia aberta dividem-se em diferentes classes para atrair perfis distintos de investidores. Ao comparar os direitos básicos estruturais das ações ordinárias (ON) e preferenciais (PN), o profissional de investimentos deve informar ao cliente que:</p>",
     "alternativas": {
      "a": "As ações ordinárias garantem prioridade no reembolso de capital na falência, enquanto as preferenciais asseguram sempre o direito a voto nas assembleias.",
      "b": "Ambas as classes conferem direito a voto proporcional ao dinheiro investido, diferenciando-se estritamente na data de distribuição de dividendos.",
      "c": "As ações ordinárias representam o poder político pelo direito a voto, e as preferenciais recebem vantagens financeiras em troca da restrição política.",
      "d": "Toda ação preferencial garante de forma automática e obrigatória a prioridade simultânea no recebimento do dividendo e no reembolso do capital."
     },
     "gabarito": "c",
     "feedback": {
      "a": "A regra proposta inverte os conceitos oficiais, pois o poder de voto é da classe ordinária e a prioridade de reembolso é da classe preferencial.",
      "b": "As ações preferenciais possuem a característica central de restringir ou retirar o direito político de voto de seu titular.",
      "d": "A lei não obriga a concessão da vantagem dupla automaticamente; cabe ao estatuto social definir se a prioridade será no dividendo, no reembolso, ou em ambos."
     }
    },
    {
     "id": "cpa-prod-14-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. Os BDRs não são as ações propriamente ditas, mas sim recibos negociados em reais no mercado brasileiro que possuem lastro em valores mobiliários originais depositados e bloqueados em uma conta de custódia fora do país.</p><p>A alternativa A cai na pegadinha tradicional da banca ao classificar o BDR como a posse direta do papel estrangeiro pelo cliente. A alternativa B confunde o mecanismo do BDR com o conceito de agrupamento que forma as Units. A alternativa D descreve a mecânica opcional do bônus de subscrição, que não tem nenhuma relação com o acesso ao mercado acionário internacional.</p>",
     "enunciado": "<p>Um cliente relata o interesse em diversificar a carteira aplicando dinheiro em ações de grandes marcas de tecnologia estrangeiras, mas teme a complexidade de operar contas internacionais e enviar remessas de câmbio. Ao apresentar os Brazilian Depositary Receipts (BDRs) como solução viável na bolsa local, você explica corretamente que:</p>",
     "alternativas": {
      "a": "O produto consiste na compra direta e escritural da ação da empresa estrangeira pela bolsa brasileira, transferindo o nome do cliente para a sede internacional.",
      "b": "Os BDRs figuram como pacotes que agrupam as ações ordinárias e preferenciais de companhias estrangeiras importadoras (Units).",
      "c": "O cliente adquire recibos em reais na B3, lastreados em ações originais mantidas bloqueadas no exterior por uma instituição depositária.",
      "d": "Os BDRs funcionam como opções e direitos de compra futura, permitindo que o cliente decida se pagará pelas ações em dólares no final do semestre."
     },
     "gabarito": "c",
     "feedback": {
      "a": "O BDR não caracteriza a compra da ação direta no exterior, mas sim a negociação de um recibo depositário vinculado ao desempenho da ação.",
      "b": "Os pacotes que agrupam simultaneamente frações de ações ON e PN são definidos como Units, e não como BDRs.",
      "d": "A entrega de direitos opcionais de compra futura para novas emissões refere-se ao conceito do bônus de subscrição."
     }
    },
    {
     "id": "cpa-prod-14-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. O bônus de subscrição funciona estritamente como uma opção de compra, entregando um direito ao investidor e não uma obrigação de efetivar o negócio. Se o cenário econômico piora e as ações caem de preço abaixo da tabela do bônus, o cliente apenas deixa o prazo da opção expirar sem dor de cabeça, perdendo somente o pequeno valor gasto para comprar o bônus no passado.</p><p>A alternativa A afirma falsamente que o cliente contraiu um compromisso de compra irrevogável. A alternativa C tenta ajustar o preço de tabela do título ao cenário à vista, o que é proibido na dinâmica predeterminada do bônus. A alternativa D cria uma penalidade irreal para punir a ausência de exercício.</p>",
     "enunciado": "<p>Um investidor detém em sua custódia bônus de subscrição emitidos pela empresa Gama, que lhe conferem o direito de comprar um novo lote de ações da companhia pelo preço fixo de R$ 45,00 no mês de outubro. Ao chegar o mês de vencimento para exercício, as ações da empresa Gama estão derretendo e são cotadas no pregão secundário a apenas R$ 30,00. Nesse cenário prático, a orientação correta é de que ele:</p>",
     "alternativas": {
      "a": "Possui um compromisso irrevogável e precisará comprar as ações novas pelos R$ 45,00 acordados, arcando com o deságio do mercado.",
      "b": "Deve ignorar o bônus de subscrição, deixando o prazo expirar, pois o título confere um direito e não estabelece nenhuma obrigação de realizar a compra desvantajosa.",
      "c": "Deve exercer o bônus para exigir a compra dos papéis novos aos mesmos R$ 30,00, preço forçado pela marcação a mercado do pregão.",
      "d": "Sofrerá o débito automático de R$ 15,00 por bônus na conta para compensar financeiramente o emissor pela quebra da janela de contrato."
     },
     "gabarito": "b",
     "feedback": {
      "a": "O bônus funciona como um direito de escolha (uma opção) do titular e não acarreta a obrigatoriedade de subscrever o papel em caso de queda livre.",
      "c": "O preço de exercício do bônus é predeterminado no momento da emissão e não se altera dinamicamente para igualar a tela da bolsa.",
      "d": "Não existe multa ou compensação financeira para o emissor se o investidor decidir simplesmente não exercer o seu direito de compra."
     }
    },
    {
     "id": "cpa-prod-14-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a B. A Lei das Sociedades Anônimas cria uma trava protetora: a ação preferencial sem voto ganha o direito político de votar caso a empresa atrase os dividendos fixos ou mínimos por um prazo apontado no estatuto (com um teto máximo tolerado pela lei de até três exercícios consecutivos sem realizar os pagamentos prometidos).</p><p>A alternativa A erra a regra ao focar no caixa e em resultados trimestrais de operação, em vez da dívida de proventos do acionista. A alternativa C generaliza e erra ao mencionar dividendos ordinários, enquanto a trava recai apenas nos proventos fixos e mínimos garantidos à PN. A alternativa D cita o rompimento do teto de emissão do estatuto, caracterizando uma falta societária grave e não o mecanismo político do voto.</p>",
     "enunciado": "<p>Um cliente investe em ações preferenciais (PN) da empresa Beta, que possuem cláusula em estatuto garantindo o pagamento de um dividendo fixo anual. Ele nota que a empresa parou de distribuir lucros e pergunta se a sua classe de ações pode, em algum cenário de crise contínua, ganhar o direito de participar das votações nas assembleias. A resposta é que a ação PN sem voto adquire o poder político quando a companhia:</p>",
     "alternativas": {
      "a": "Apresenta prejuízo contábil ao longo de três trimestres consecutivos, mas perderá o voto imediatamente assim que o caixa voltar a dar lucro.",
      "b": "Deixa de repassar os dividendos fixos ou mínimos pelo prazo fixado no estatuto, cujo teto da lei é limitado a três exercícios consecutivos.",
      "c": "Deixa de pagar a modalidade de dividendo ordinário durante o prazo exato de um exercício fiscal e financeiro completo.",
      "d": "Emite novas ações no mercado primário que venham a violar e ultrapassar o limite de 50% de capital composto por ações da classe preferencial."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A métrica de aquisição não tem foco no balanço de prejuízo ou retorno de caixa livre, mas sim na inadimplência perante o acionista.",
      "c": "O direito ganho pela PN está atrelado apenas à falta de pagamento dos dividendos rotulados como fixos ou mínimos, e não aos proventos ordinários da ON.",
      "d": "Emitir mais da metade do capital em preferenciais configura infração e erro societário perante o teto da lei, não sendo o gatilho formal do ganho de voto."
     }
    }
   ],
   "IPO, OPA e follow on": [
    {
     "id": "cpa-prod-15-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. O follow on (Oferta Pública Subsequente) representa as novas rodadas de captação que uma empresa que já realizou seu IPO no passado promove para levantar mais recursos no mercado acionário.</p><p>A alternativa A erra ao usar o conceito da estreia da empresa. A alternativa B descreve o mecanismo reverso de recompra (OPA). A alternativa D relata uma manobra de fechamento de capital, e não uma emissão captadora.</p>",
     "enunciado": "<p>Uma corporação que já possui suas ações negociadas ativamente na bolsa de valores brasileira identifica oportunidades inéditas de expansão e decide acionar o mercado acionário para captar novos recursos financeiros emitindo um lote adicional de ações. Essa nova rodada de captação é classificada tecnicamente como:</p>",
     "alternativas": {
      "a": "Oferta Pública Inicial (IPO).",
      "b": "Oferta Pública de Aquisição (OPA).",
      "c": "Oferta Pública Subsequente (follow on).",
      "d": "Reestruturação de capital fechado por deslistagem."
     },
     "gabarito": "c",
     "feedback": {
      "a": "A Oferta Pública Inicial (IPO) corresponde estritamente à estreia da companhia na bolsa de valores.",
      "b": "A Oferta Pública de Aquisição (OPA) representa o processo inverso, focado na recompra de papéis em circulação.",
      "d": "O processo de fechamento de capital com retirada de ações do pregão não caracteriza captação de recursos corporativos."
     }
    },
    {
     "id": "cpa-prod-15-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. Na distribuição primária, a empresa emite papéis novos e o dinheiro vai para o caixa da companhia financiar fábricas e dívidas. Na distribuição secundária, não entram ações novas; os sócios antigos vendem suas próprias fatias e o dinheiro vai direto para a conta bancária deles, sem enriquecer o caixa corporativo.</p><p>A alternativa A erra ao generalizar o fluxo para o caixa da empresa. A alternativa C inverte as definições de primário e secundário. A alternativa D cria barreiras irreais de circulação das ofertas.</p>",
     "enunciado": "<p>Ao analisar o prospecto de uma oferta pública de ações, o investidor percebe que a operação possui características distintas quanto ao destino do dinheiro arrecadado. Comparando a distribuição primária com a distribuição secundária de ações, verifica-se que:</p>",
     "alternativas": {
      "a": "Ambas injetam recursos diretamente no caixa da companhia emissora para o financiamento de novos projetos fabris.",
      "b": "A distribuição primária envolve a venda de ações novas que geram entrada de dinheiro no caixa da empresa, enquanto a secundária repassa o valor da venda para os sócios atuais sem injetar dinheiro na companhia.",
      "c": "A distribuição secundária engloba exclusivamente a criação de ativos inéditos, e a primária cuida da recompra de papéis dos controladores.",
      "d": "A distribuição primária é exclusiva de empresas fechadas, ao passo que a distribuição secundária ocorre apenas em companhias listadas na B3."
     },
     "gabarito": "b",
     "feedback": {
      "a": "Na distribuição secundária, o capital arrecadado vai direto para a conta do acionista vendedor, e não para o caixa da empresa.",
      "c": "Os conceitos foram invertidos, pois a criação de ações novas com entrada de caixa pertence à distribuição primária.",
      "d": "Ambas as distribuições ocorrem em companhias abertas ou no âmbito de ofertas públicas de mercado."
     }
    },
    {
     "id": "cpa-prod-15-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. O caixa da empresa engorda apenas com a parcela primária da oferta (neste caso, R$ 60 milhões), que representa a emissão e venda de ações novas. A parcela secundária de R$ 40 milhões vai direto para a conta dos sócios que se retiraram, sem passar pelo balanço produtivo da corporação.</p><p>As alternativas A e B erram ao direcionar valores incorretos ou somar as fatias desalinhadas com o fluxo legal. A alternativa D inventa uma retenção bancária fictícia que confisca o dinheiro da empresa.</p>",
     "enunciado": "<p>Uma empresa realizou uma oferta pública mista em seu IPO, arrecadando R$ 100 milhões no total. Desse montante, R$ 60 milhões decorreram da emissão de ações novas (lote primário) e R$ 40 milhões originaram-se da venda de participações dos sócios fundadores que decidiram se retirar do negócio (lote secundário). Com base nessas informações, o caixa efetivo da companhia absorveu:</p>",
     "alternativas": {
      "a": "R$ 100 milhões, pois o total da oferta pública de estreia ingressa nas reservas contábeis do emissor.",
      "b": "R$ 40 milhões, correspondendo exclusivamente à fatia negociada pelos acionistas fundadores.",
      "c": "R$ 60 milhões, referentes estritamente à injeção de capital proveniente das novas ações emitidas pela empresa.",
      "d": "Zero, uma vez que a entrada de recursos em ofertas mistas pertence por lei integralmente aos coordenadores do banco de investimento."
     },
     "gabarito": "c",
     "feedback": {
      "a": "A soma total falha ao misturar o lote secundário, que beneficia apenas os sócios vendedores e não a empresa.",
      "b": "O valor de R$ 40 milhões representa o lote secundário, que vai para a conta bancária dos sócios que venderam suas fatias.",
      "d": "O banco de investimento recebe taxas de coordenação, mas os recursos primários ingressam de fato no balanço de caixa da companhia."
     }
    },
    {
     "id": "cpa-prod-15-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. O processo de fechamento de capital exige preço justo baseado em laudo de avaliação com direito de revisão pelos minoritários e a aceitação de mais de 2/3 das ações em circulação que foram habilitadas para o leilão.</p><p>A alternativa B erra ao delegar a decisão ao conselho e ao Banco Central. A alternativa C ignora a exigência do laudo de avaliação. A alternativa D distorce o quórum e penaliza indevidamente os acionistas silenciosos ao computá-los erroneamente como votos contrários.</p>",
     "enunciado": "<p>O acionista controlador de uma S/A Aberta constatou que a cotação dos papéis da companhia despencou no pregão da B3 e optou por lançar uma Oferta Pública de Aquisição (OPA) com o objetivo de realizar o fechamento de capital da empresa e retirar as ações de circulação. Segundo as regras vigentes da CVM para essa modalidade, a OPA exige:</p>",
     "alternativas": {
      "a": "Preço justo respaldado em laudo de avaliação, com possibilidade de os minoritários solicitarem revisão, e aprovação de mais de dois terços das ações em circulação habilitadas para o leilão.",
      "b": "Aprovação unânime do conselho de administração e consentimento prévio do Banco Central do Brasil.",
      "c": "Preço fixado livremente pelo controlador, dispensando laudos de avaliação caso a totalidade das ações ordinárias seja resgatada no mesmo dia.",
      "d": "Quórum de maioria simples calculado sobre o total absoluto de todas as ações em circulação da companhia, computando obrigatoriamente os acionistas que ficarem em silêncio como votos contrários."
     },
     "gabarito": "a",
     "feedback": {
      "b": "O conselho de administração não detém poder de aprovação solitária da OPA e o Banco Central não regula o fechamento de capital na bolsa.",
      "c": "O laudo de avaliação que atesta o preço justo é uma exigência legal inflexível da norma para proteger os minoritários.",
      "d": "O quórum exige mais de dois terços, mas o cálculo recai apenas sobre as ações habilitadas para o leilão, desconsiderando os silentes."
     }
    },
    {
     "id": "cpa-prod-15-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a B, e ela junta as duas armadilhas do tópico numa situação só.</p><p>Na distribuição secundária a companhia não emite ação nova. Os sócios vendem o que já tinham, e o dinheiro viaja direto para a conta bancária deles. O caixa da empresa não recebe um centavo. Só a distribuição primária capitaliza a companhia, porque nela existem ações novas sendo criadas e vendidas.</p><p>A OPA é o movimento inverso do IPO. Alguém anuncia que quer comprar ações em circulação, seja para fechar o capital, seja porque assumiu o controle. Em nenhuma das hipóteses entra dinheiro na companhia.</p><p>Sobre o caso de setembro: quando um grupo compra o controle de uma listada, a lei obriga o novo dono a lançar OPA para comprar as ações ordinárias dos minoritários. É a proteção conhecida como tag along, e ela é obrigação de quem comprou o controle, não capitalização da empresa.</p><p>A companhia capta dinheiro novo por dois caminhos, e só por eles: IPO primário e follow on primário.</p>",
     "enunciado": "<p>Uma companhia listada aparece duas vezes no noticiário do mesmo semestre. Em março, uma oferta pública em que os sócios fundadores venderam parte das participações que já tinham. Em setembro, uma OPA lançada por um grupo econômico que acabou de comprar o controle da empresa. Um cliente pergunta quanto dinheiro dessas duas operações entrou no caixa da companhia. A resposta correta é:</p>",
     "alternativas": {
      "a": "O valor integral das duas, porque toda oferta pública movimenta o capital social da companhia.",
      "b": "Nada em nenhuma das duas. A oferta de março foi secundária, e a OPA é compra de ações que já existem, não captação.",
      "c": "Apenas o valor da oferta de março, porque toda oferta subsequente injeta recursos no caixa.",
      "d": "Apenas o valor da OPA, porque quem assume o controle é obrigado a capitalizar a companhia."
     },
     "gabarito": "b",
     "feedback": {
      "a": "Oferta pública nem sempre capta para a empresa. Depende de quem está vendendo a ação.",
      "c": "A de março foi secundária: quem vendeu foram os sócios, e o dinheiro foi para a conta deles.",
      "d": "A OPA é o movimento inverso da captação. O ofertante compra ações em circulação."
     }
    }
   ],
   "Eventos corporativos: dividendos, JCP e assembleias (AGO e AGE)": [
    {
     "id": "cpa-prod-16-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. A Lei das Sociedades Anônimas exige que a Assembleia Geral Ordinária (AGO) ocorra obrigatoriamente uma vez por ano, dentro dos quatro primeiros meses seguintes ao término do exercício social (concentrando-se geralmente até o final de abril).</p><p>A alternativa A erra o prazo ao reduzi-lo para dois meses. A alternativa C posiciona a reunião no final do ano fiscal, o que descumpre o calendário de prestação de contas. A alternativa D tenta atrelar o rito à data de IPO da empresa.</p>",
     "enunciado": "<p>As Sociedades Anônimas realizam fóruns oficiais de deliberação para que os acionistas votem os rumos e a prestação de contas dos negócios. A Assembleia Geral Ordinária (AGO) diferencia-se por possuir caráter anual obrigatório e deve ocorrer estritamente dentro dos:</p>",
     "alternativas": {
      "a": "Dois primeiros meses seguintes ao término do exercício social.",
      "b": "Quatro primeiros meses seguintes ao término do exercício social.",
      "c": "Seis meses finais do ano fiscal em curso, de forma a coincidir com o fechamento do balanço trimestral.",
      "d": "Doze meses corridos contados a partir da data de abertura de capital na CVM."
     },
     "gabarito": "b",
     "feedback": {
      "a": "O prazo regulamentar concedido pela lei para a realização da AGO estende-se um pouco além de dois meses.",
      "c": "A AGO ocorre logo no início do ano seguinte para analisar o exercício anterior, e não no final do ano em curso.",
      "d": "A contagem da AGO é periódica e anual com base no fechamento do exercício social, e não a partir do dia de abertura de capital."
     }
    },
    {
     "id": "cpa-prod-16-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. O Juros sobre Capital Próprio (JCP) é contabilizado como despesa financeira, o que permite à empresa abatê-lo antes de calcular o IRPJ e a CSLL (gerando benefício fiscal). Em contrapartida, o governo cobra a conta do acionista aplicando Imposto de Renda retido na fonte.</p><p>A alternativa B erra ao inverter as naturezas de isenção e dedutibilidade. A alternativa C afirma que o dividendo reduz imposto da empresa, o que é falso. A alternativa D inventa uma proibição inexistente para o JCP nas empresas listadas.</p>",
     "enunciado": "<p>Na mesa de atendimento, o investidor questiona as diferenças operacionais e tributárias entre o recebimento de dividendos e de Juros sobre Capital Próprio (JCP) distribuídos por uma companhia aberta. Ao comparar as duas formas de remuneração, o profissional esclarece que:</p>",
     "alternativas": {
      "a": "O JCP gera um benefício fiscal corporativo para a empresa emissora ao reduzir seu lucro tributável, mas sofre incidência de Imposto de Renda retido na fonte para o acionista.",
      "b": "O dividendo é dedutível do Imposto de Renda da empresa, enquanto o JCP é integralmente isento de tributação para a pessoa física em qualquer patamar de valor.",
      "c": "Ambas as distribuições reduzem a base de cálculo de impostos da companhia e repassam o ganho bruto livre de retenção para a conta do investidor.",
      "d": "O JCP é proibido por lei em companhias listadas, restringindo-se unicamente às Sociedades Anônimas de capital fechado."
     },
     "gabarito": "a",
     "feedback": {
      "b": "Os conceitos estão invertidos, pois o JCP sofre retenção de imposto na fonte e os dividendos possuem regras próprias de isenção ou retenção por faixa.",
      "c": "O dividendo é pago com o lucro líquido já tributado pela empresa, não servindo para abater o Imposto de Renda corporativo.",
      "d": "O JCP é um instrumento financeiro legal e amplamente utilizado pelas empresas listadas na bolsa de valores."
     }
    },
    {
     "id": "cpa-prod-16-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. A partir de 2026, os pagamentos de dividendos efetuados por uma mesma empresa a uma mesma pessoa física que ultrapassarem R$ 50.000,00 em um único mês sofrem retenção na fonte de 10% sobre o <strong>total pago</strong> (e não apenas sobre a diferença excedente).</p><p>A alternativa A erra ao propor a soma generalizada entre empresas diferentes. A alternativa B comete o erro clássico de calcular o imposto só sobre o excedente. A alternativa D confunde a alíquota de 10% dos dividendos com a alíquota de 17,5% do JCP.</p>",
     "enunciado": "<p>Um investidor pessoa física recebeu em um determinado mês o valor bruto de R$ 60.000,00 em dividendos pagos por uma única empresa listada na B3. Considerando as regras vigentes da tributação aplicável aos proventos distribuídos a partir de 2026, o tratamento fiscal para essa operação determina que:</p>",
     "alternativas": {
      "a": "Todo o montante permanece isento, pois o limite de R$ 50.000,00 mensais é calculado somando os dividendos de todas as empresas da bolsa.",
      "b": "Incidirá uma retenção de Imposto de Renda na fonte de 10% calculada exclusivamente sobre a parcela excedente de R$ 10.000,00.",
      "c": "Incidirá uma retenção de Imposto de Renda na fonte de 10% calculada sobre o valor total pago de R$ 60.000,00.",
      "d": "O valor total sofrerá retenção antecipada de 17,5% por equiparação às regras aplicadas aos Juros sobre Capital Próprio."
     },
     "gabarito": "c",
     "feedback": {
      "a": "O teto de isenção é avaliado de forma isolada por empresa pagadora, e não pelo somatório geral de todas as companhias da carteira.",
      "b": "A alíquota de 10% não incide apenas sobre o excedente, mas sim sobre o valor global pago quando o limite mensal é ultrapassado.",
      "d": "A alíquota e a regra do JCP (17,5%) não se misturam com a retenção de 10% estabelecida para os dividendos que superam o teto."
     }
    },
    {
     "id": "cpa-prod-16-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. A Assembleia Geral Extraordinária (AGE) é o fórum adequado e flexível que pode ser convocado em qualquer época do ano para debater assuntos urgentes e estruturais, como alterações de estatuto social, fusões, cisões e aumentos de capital.</p><p>A alternativa A direciona o assunto para a AGO, que possui pautas rígidas e exclusivas. A alternativa C tenta empurrar a cisão para o balanço ordinário. A alternativa D condiciona a votação a uma sessão simultânea obrigatória, o que não é regra legal rígida.</p>",
     "enunciado": "<p>O executivo de relações com investidores de uma Sociedade Anônima precisa convocar uma assembleia de acionistas para alterar artigos fundamentais do estatuto social e deliberar sobre um plano de cisão corporativa urgente. Para cumprir esse objetivo legal de forma adequada, a companhia deverá convocar:</p>",
     "alternativas": {
      "a": "Uma Assembleia Geral Ordinária (AGO) com antecedência mínima de dez dias úteis.",
      "b": "Uma Assembleia Geral Extraordinária (AGE) em qualquer data do ano para tratar de assuntos estruturais e pautas fora do escopo rotineiro.",
      "c": "Obrigatoriamente a AGO anual de balanço, pois pautas de cisão acumulam competência privativa de prestação de contas.",
      "d": "Uma sessão conjunta obrigatória e simultânea de AGO e AGE para aprovação unânime do conselho fiscal."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A AGO cuida de contas e balanços anuais, não tendo competência para alterar o estatuto social ou votar cisões corporativas.",
      "c": "A cisão e a alteração de estatuto fogem totalmente da pauta privativa e engessada da AGO de contas.",
      "d": "A realização conjunta pode até ocorrer na prática se caírem no mesmo dia, mas as matérias de estatuto exigem a competência da AGE."
     }
    },
    {
     "id": "cpa-prod-16-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a B. A Assembleia Geral Ordinária (AGO) possui pautas estritas e engessadas pela lei, cuja finalidade cinge-se a tomar as contas dos administradores, examinar e votar as demonstrações financeiras, decidir sobre a destinação do lucro e dividendos, e eleger administradores e conselheiros fiscais.</p><p>As alternativas A, C e D descrevem pautas puramente estruturais e extraordinárias (estatuto, cisões, grupamentos e emissão de dívidas), que exigem a convocação de uma Assembleia Geral Extraordinária (AGE).</p>",
     "enunciado": "<p>Uma empresa listada encerrou o seu exercício fiscal e marcou sua Assembleia Geral Ordinária (AGO) para o dia 20 de abril. Dentre as matérias obrigatórias que compõem o escopo de pautas privativas dessa assembleia específica, avalie as opções e assinale a alternativa correta:</p>",
     "alternativas": {
      "a": "Deliberar sobre o estatuto social, alterar artigos de governança e aprovar o grupamento de ações da companhia.",
      "b": "Tomar as contas dos administradores, examinar e votar as demonstrações financeiras, e deliberar sobre a destinação do lucro líquido e distribuição de dividendos.",
      "c": "Votar exclusivamente a cisão ou incorporação societária com terceiros e definir o cronograma de oferta pública de aquisição (OPA).",
      "d": "Autorizar a emissão de debêntures conversíveis em ações de categoria B e destituir o conselho de administração por maioria simples."
     },
     "gabarito": "b",
     "feedback": {
      "a": "Alterar estatuto e aprovar grupamentos de ações são pautas estruturais que competem exclusivamente à Assembleia Geral Extraordinária (AGE).",
      "c": "A cisão corporativa e o andamento de OPA fogem da pauta da AGO, pertencendo ao universo da AGE.",
      "d": "A emissão de debêntures e a reorganização de capital são matérias extraordinárias de AGE, e não da AGO."
     }
    }
   ],
   "Eventos corporativos: grupamento, desdobramento, bonificação e subscrição": [
    {
     "id": "cpa-prod-17-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. O desdobramento (split) divide as ações existentes em várias novas unidades, aumentando a quantidade de papéis em circulação e reduzindo a cotação unitária de forma proporcional, o que facilita o acesso do investidor e melhora a liquidez.</p><p>A alternativa A erra ao citar o grupamento (inplit). A alternativa C confunde com a entrega de ações gratuitas (bonificação). A alternativa D erra ao citar a subscrição, que demanda aporte financeiro do acionista.</p>",
     "enunciado": "<p>Uma empresa listada na B3 aprovou um evento corporativo que resultou na divisão de cada ação existente em quatro novas ações, reduzindo proporcionalmente o preço de tela para ampliar a liquidez do ativo. Essa operação societária é denominada:</p>",
     "alternativas": {
      "a": "Grupamento (inplit).",
      "b": "Desdobramento (split).",
      "c": "Bonificação acionária.",
      "d": "Subscrição de capital."
     },
     "gabarito": "b",
     "feedback": {
      "a": "O grupamento executa a função inversa, reunindo vários papéis em uma única ação para subir a cotação.",
      "c": "A bonificação distribui ações novas de forma gratuita como um prêmio oriundo de reservas, e não a divisão matemática de cada papel existente.",
      "d": "A subscrição exige desembolso financeiro por parte do acionista para comprar novos papéis e exercer sua preferência."
     }
    },
    {
     "id": "cpa-prod-17-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. Nem o grupamento nem o desdobramento alteram a riqueza do investidor. A empresa modifica apenas a quantidade de ações em circulação e o preço se ajusta na proporção inversamente proporcional, mantendo o valor total da aplicação exatamente igual.</p><p>A alternativa A atribui falsos ganhos ou prejuízos. A alternativa C inventa exigências de caixa ou pagamentos inexistentes. A alternativa D relata uma alteração no capital social que não ocorre nessas operações cosméticas de preço.</p>",
     "enunciado": "<p>No que tange aos efeitos patrimoniais gerados pelas operações de grupamento e desdobramento sobre a custódia do investidor, é correto afirmar que:</p>",
     "alternativas": {
      "a": "O grupamento dobra a riqueza patrimonial do investidor, enquanto o desdobramento gera prejuízo contábil imediato.",
      "b": "Ambas as operações são neutras e não alteram o patrimônio total do investidor, pois o ajuste na quantidade de ações é compensado de forma inversa na cotação.",
      "c": "O desdobramento obriga o acionista a desembolsar novos recursos financeiros, ao passo que o grupamento distribui dinheiro em conta corrente.",
      "d": "Ambas as operações aumentam o capital social da empresa no balanço contábil por meio de injeção externa de dinheiro novo."
     },
     "gabarito": "b",
     "feedback": {
      "a": "Nenhuma das operações altera a riqueza ou gera ganho/prejuízo patrimonial automático ao acionista.",
      "c": "Nem o desdobramento exige novos aportes em dinheiro, nem o grupamento realiza distribuição de valores em conta.",
      "d": "O grupamento e o desdobramento mexem apenas na quantidade e no preço dos papéis existentes, sem alterar o capital social da empresa."
     }
    },
    {
     "id": "cpa-prod-17-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. O regulamento da B3 estipula que a companhia entra em descumprimento quando sua cotação fecha abaixo de R$ 1,00 por 30 pregões consecutivos. Diante disso, a bolsa notifica a empresa (via fato relevante) e concede um prazo não inferior a seis meses para que ela resolva o problema (geralmente aprovando um grupamento).</p><p>As alternativas A, C e D erram prazos, métricas de dias alternados e penalidades descabidas que não constam nas normas de mercado da B3.</p>",
     "enunciado": "<p>O regulamento da B3 estabelece regras rígidas para coibir a volatilidade excessiva de ações negociadas na faixa dos centavos (penny stocks). Caso a cotação de fechamento de uma companhia permaneça abaixo de R$ 1,00 por um período de:</p>",
     "alternativas": {
      "a": "10 pregões consecutivos, a bolsa suspende imediatamente o pregão e decreta a liquidação judicial da companhia.",
      "b": "30 pregões consecutivos, a bolsa notifica a companhia para que regularize a situação no prazo não inferior a seis meses.",
      "c": "60 pregões alternados ao longo do ano, a CVM assume o controle acionário e realiza um grupamento forçado de ações.",
      "d": "90 pregões consecutivos, as ações ordinárias perdem o direito a voto até que o controlador realize um desdobramento reversivo."
     },
     "gabarito": "b",
     "feedback": {
      "a": "O prazo de verificação exige 30 pregões consecutivos, e a bolsa não decreta liquidação judicial de imediato por preço baixo.",
      "c": "A contagem apoia-se em pregões consecutivos e a autarquia reguladora não assume o controle das empresas para fazer grupamentos.",
      "d": "A sanção não converte a perda de direitos políticos na classe ordinária, mas sim sujeita o emissor a regras do Manual do Emissor."
     }
    },
    {
     "id": "cpa-prod-17-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. A Lei das Sociedades Anônimas garante o direito de preferência para que o acionista antigo subscreva novas ações na mesma proporção de sua fatia atual, fixando que o prazo de decadência desse direito não pode ser inferior a 30 dias.</p><p>As alternativas A, B e D erram os marcos temporais estabelecidos pela legislação brasileira para o exercício da subscrição.</p>",
     "enunciado": "<p>Uma empresa de tecnologia realizou um aumento de capital para financiar uma grande expansão corporativa e emitiu novos lotes de ações no mercado. Para proteger a participação societária dos acionistas antigos contra a diluição, a Lei das Sociedades Anônimas assegura o direito de preferência na subscrição, estipulando que o prazo mínimo de decadência desse direito será de:</p>",
     "alternativas": {
      "a": "5 dias corridos.",
      "b": "15 dias úteis.",
      "c": "30 dias.",
      "d": "120 dias corridos."
     },
     "gabarito": "c",
     "feedback": {
      "a": "O prazo de cinco dias sufocaria o acionista e descumpre o patamar mínimo imposto pela norma legal.",
      "b": "A legislação padroniza a contagem em dias mínimos e não utiliza a métrica de dias úteis reduzidos para o direito de preferência.",
      "d": "O teto de cento e vinte dias extrapola as diretrizes de agilidade que a lei estabelece para as captações societárias."
     }
    },
    {
     "id": "cpa-prod-17-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a C. O acionista que possui direito de preferência na subscrição e decide não fazer nada (deixando o prazo caducar) sofre diluição. Como a empresa emitiu ações novas para terceiros e ele não exerceu a compra proporcional, o número total de papéis da companhia aumentou, reduzindo o percentual relativo que ele detinha no negócio.</p><p>A alternativa A erra ao afirmar que o percentual fica protegido independentemente da inércia. A alternativa B inventa pagamentos e prêmios inexistentes. A alternativa D aponta uma punição descabida de cancelamento de papéis pela CVM.</p>",
     "enunciado": "<p>Um investidor possui 10% do capital social de uma companhia aberta que decidiu emitir um milhão de novas ações ordinárias no mercado primário mediante subscrição para captar recursos. O acionista foi devidamente notificado, mas optou pela inércia total, deixando o prazo regulamentar de subscrição expirar sem exercer seu direito de compra, sem vender o recibo e sem aportar recursos. Diante dessa conduta, o impacto imediato na posição desse investidor consistirá em:</p>",
     "alternativas": {
      "a": "Manter inalterados os seus 10% de participação, pois a lei blinda o acionista contra qualquer mudança de proporção gerada por inércia corporativa.",
      "b": "Receber uma bonificação automática em dinheiro correspondente à proporção dos papéis não comprados pelo mercado.",
      "c": "Sofrer a diluição de sua participação societária, uma vez que o total de ações da empresa aumentou com a entrada de novos subscritores e ele não garantiu sua fatia.",
      "d": "Ter suas ações antigas canceladas de forma compulsória pela CVM para compensar o desequilíbrio gerado no balanço de capital social."
     },
     "gabarito": "c",
     "feedback": {
      "a": "A inércia no prazo de subscrição faz o direito caducar, eliminando o escudo de proteção da preferência e permitindo a diluição.",
      "b": "A bonificação ocorre por capitalização de reservas e não guarda nenhuma relação de indenização por perda de direito de preferência.",
      "d": "A CVM não cancela ações de acionistas antigos por omissão em subscrições de mercado privado."
     }
    }
   ],
   "Índices de mercado: Ibovespa, IBrX 100 e IBrX 50": [
    {
     "id": "cpa-prod-18-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. Um índice de mercado é uma carteira teórica que serve de referencial de desempenho (benchmark) para que o investidor e o gestor avaliem se a rentabilidade obtida superou a média do mercado.</p><p>A alternativa A erra ao afirmar que o índice pode ser comprado diretamente no home broker. A alternativa C cai na armadilha de achar que alta do índice significa alta unânime de todos os papéis. A alternativa D inventa custos operacionais fictícios atrelados ao cálculo teórico da B3.</p>",
     "enunciado": "<p>Os índices de mercado desempenham um papel fundamental para a análise financeira, funcionando como carteiras teóricas que medem o comportamento médio do mercado. Sobre a utilidade prática desses índices para o investidor pessoa física, é correto afirmar que:</p>",
     "alternativas": {
      "a": "O investidor pode comprar cotas diretamente do Ibovespa pelo home broker, pagando a taxa de corretagem à vista.",
      "b": "Os índices servem de referencial de desempenho (benchmark), permitindo avaliar se um fundo de ações superou a média do mercado.",
      "c": "A pontuação de um índice reflete obrigatoriamente a alta simultânea de todas as companhias listadas na bolsa de valores.",
      "d": "Os índices cobram uma taxa de administração fixa que é repassada pelo operador da B3 trimestralmente."
     },
     "gabarito": "b",
     "feedback": {
      "a": "O Ibovespa é uma carteira teórica e não pode ser comprado diretamente pelo investidor como um ativo único.",
      "c": "A média reflete o comportamento agregado, o que significa que algumas ações podem subir enquanto outras despencam.",
      "d": "Como não são produtos comercializáveis per se, os índices não possuem taxas de administração cobradas diretamente."
     }
    },
    {
     "id": "cpa-prod-18-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. A família IBrX avalia o mercado por um ranking de posições fixas, onde o IBrX 100 reúne os ativos que ocupam as cem primeiras posições em ordem decrescente de Índice de Negociabilidade, enquanto o IBrX 50 restringe o corte às cinquenta primeiras posições.</p><p>As alternativas A, C e D erram ao inventar critérios de distribuição setorial, pagamentos de proventos ou classificações de dívidas corporativas que não pertencem à metodologia dos índices.</p>",
     "enunciado": "<p>A B3 administra diferentes carteiras teóricas para mensurar o desempenho das ações brasileiras. Ao comparar o critério de seleção do Índice Brasil 100 (IBrX 100) com o do Índice Brasil 50 (IBrX 50), constata-se que eles reúnem, respectivamente:</p>",
     "alternativas": {
      "a": "As 50 e as 100 empresas mais rentáveis em termos de pagamento de dividendos e JCP.",
      "b": "As 100 e as 50 primeiras posições em ordem decrescente de Índice de Negociabilidade.",
      "c": "As 50 maiores companhias do setor imobiliário e as 100 maiores do agronegócio nacional.",
      "d": "Exclusivamente as companhias abertas de categoria B e as debêntures de infraestrutura em bolsa."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A seleção da família IBrX baseia-se no ranking de negociabilidade, e não no pagamento de dividendos.",
      "c": "Os índices medem a liquidez e a negociabilidade geral das ações, desvinculando-se de setores específicos como o imobiliário.",
      "d": "A família IBrX mede o mercado acionário, não tendo relação com emissões de dívidas de categoria B."
     }
    },
    {
     "id": "cpa-prod-18-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. O regulamento da B3 visa expurgar a volatilidade das ações baratas, determinando que qualquer ativo classificado como penny stock (com cotação média ponderada inferior a R$ 1,00) fica sumariamente excluído de todos esses índices.</p><p>As alternativas B, C e D criam barreiras inverídicas que penalizariam ativos saudáveis ou com boa distribuição de mercado.</p>",
     "enunciado": "<p>O Ibovespa é o principal indicador do mercado acionário brasileiro e exige o cumprimento de critérios rigorosos de elegibilidade para a entrada de seus ativos. Dentre as regras metodológicas exigidas pela B3, um papel será expressamente vetado e deixará de compor o índice se:</p>",
     "alternativas": {
      "a": "For classificado como penny stock, apresentando cotação média ponderada inferior a R$ 1,00.",
      "b": "Pertencer a uma empresa listada sob o regime de governança corporativa do Novo Mercado.",
      "c": "Possuir distribuição de free float superior a 50% do capital social total da companhia.",
      "d": "Apresentar liquidez diária acima da média exigida pelos limites do IBrX 50."
     },
     "gabarito": "a",
     "feedback": {
      "b": "O selo de governança do Novo Mercado facilita a entrada, pois exige padrões elevados, e não restringe o ativo.",
      "c": "Um free float alto indica muitas ações em circulação, o que favorece o enquadramento nos critérios de liquidez.",
      "d": "A liquidez elevada é um requisito desejado e obrigatório, jamais um motivo de veto ou exclusão."
     }
    },
    {
     "id": "cpa-prod-18-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. Os três principais índices da bolsa brasileira ponderam os seus ativos com base no valor de mercado do free float, isto é, considerando unicamente as ações que se encontram em livre circulação no mercado e excluindo a parcela do bloco controlador.</p><p>As alternativas A e C ignoram o critério de livre circulação e propõem divisões arbitrárias ou corporativas distorcidas. A alternativa D confunde mercado de ações com emissão de títulos de dívida.</p>",
     "enunciado": "<p>A ponderação dos ativos dentro de uma carteira teórica define o peso e o impacto de cada empresa na variação da pontuação do índice. Em relação à metodologia de cálculo do peso das companhias no Ibovespa, no IBrX 100 e no IBrX 50, a base adotada baseia-se:</p>",
     "alternativas": {
      "a": "No valor total do capital social autorizado, somando as ações em tesouraria e o bloco controlador.",
      "b": "No valor de mercado do free float, ou seja, apenas das ações que estão efetivamente em livre circulação no mercado.",
      "c": "De forma igualitária e fixa, dividindo o total de pontos do índice pelo número de empresas da carteira.",
      "d": "Exclusivamente no volume de dívidas de curto prazo emitidas por debêntures na categoria A."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A ponderação desconsidera o tamanho absoluto ou as fatias retidas pelo bloco controlador e em tesouraria.",
      "c": "O peso não é igualitário, pois utiliza ponderações baseadas no valor de mercado da circulação dos papéis.",
      "d": "A composição dos índices de ações foca no capital acionário negociado, e não nas dívidas corporativas."
     }
    },
    {
     "id": "cpa-prod-18-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a B. Os limitadores de peso exclusivos do Ibovespa incluem o limite por companhia (que impede que a soma de ações de uma mesma empresa ultrapasse 20%) e o limite de liquidez. O IBrX não possui esses dois freios específicos.</p><p>A alternativa A erra a periodicidade, que é quadrimestral. A alternativa C inventa um teto de 15% para o IBrX 50. A alternativa D erra o dia exato de vigência, que começa na primeira segunda-feira dos meses de rebalanceamento.</p>",
     "enunciado": "<p>O comitê da B3 aplica travas específicas de controle para evitar que uma única companhia exerça influência desproporcional sobre a pontuação dos indicadores oficiais. Analisando os limites e os procedimentos de rebalanceamento dessas carteiras teóricas, assinale a alternativa correta:</p>",
     "alternativas": {
      "a": "O rebalanceamento das carteiras do Ibovespa, IBrX 100 e IBrX 50 ocorre de forma trimestral, sempre no último dia útil de março, junho, setembro e dezembro.",
      "b": "O limite de liquidez e o limite por companhia (máximo de 20%) que evitam distorções são restrições metodológicas aplicadas exclusivamente ao Ibovespa.",
      "c": "O IBrX 50 adota um teto rígido que impede que qualquer companhia ultrapasse 15% de participação total na carteira teórica.",
      "d": "A revisão quadrimestral das carteiras entra em vigor na última sexta-feira de cada ciclo avaliado pelos analistas da bolsa."
     },
     "gabarito": "b",
     "feedback": {
      "a": "O ciclo de rebalanceamento não é trimestral, ocorrendo de forma quadrimestral.",
      "c": "Os limitadores de peso específicos (como o teto de 20% por companhia e o limite de liquidez) são restrições exclusivas da metodologia do Ibovespa, não se aplicando ao IBrX 50.",
      "d": "A vigência da nova carteira entra em vigor na primeira segunda-feira de janeiro, maio e setembro, e não na última sexta-feira."
     }
    }
   ],
   "Governança corporativa: segmentos de listagem, tag along, drag along e free float": [
    {
     "id": "cpa-prod-19-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. O Novo Mercado é o grau máximo de governança da B3 e sua regra mais marcante determina que a companhia emita exclusivamente ações ordinárias (ON), aplicando o lema de que uma ação equivale a um voto.</p><p>A alternativa B erra ao tentar introduzir as ações preferenciais no Novo Mercado. A alternativa C afasta a obrigação de free float. A alternativa D confunde mercado de ações com emissão de títulos de dívida (debêntures).</p>",
     "enunciado": "<p>O segmento de listagem mais exigente da B3 em termos de governança corporativa impõe regras rígidas quanto à estrutura do capital da companhia. No segmento do Novo Mercado, a empresa é obrigada a emitir:</p>",
     "alternativas": {
      "a": "Exclusivamente ações ordinárias (ON), consagrando o princípio de que cada ação confere direito a um voto.",
      "b": "Ações preferenciais (PN) em proporção igualitária às ordinárias para garantir prioridade aos minoritários.",
      "c": "Somente cotas de participações negociadas na modalidade fechada e isentas de free float.",
      "d": "Debêntures de categoria A com conversão garantida em units de ações ordinárias e preferenciais."
     },
     "gabarito": "a",
     "feedback": {
      "b": "O Novo Mercado proíbe a emissão de ações preferenciais, focando estritamente nas ordinárias.",
      "c": "O free float é uma exigência obrigatória para manter o registro de listagem de livre circulação na bolsa.",
      "d": "O Novo Mercado trata especificamente de ações acionárias ordinárias, e não de debêntures estruturadas de dívida."
     }
    },
    {
     "id": "cpa-prod-19-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. O tag along atua como um escudo protetor para o acionista minoritário ao ocorrer a troca de controle da empresa, permitindo que ele exija a compra de suas ações pelo adquirente nas mesmas condições oferecidas aos controladores.</p><p>A alternativa A define o drag along (o controlador arrastando o minoritário). A alternativa B aponta o conceito de ações livres em circulação. A alternativa D relata o processo de precificação em ofertas públicas.</p>",
     "enunciado": "<p>O mecanismo societário que protege o acionista minoritário na hipótese de venda do controle acionário de uma companhia, garantindo-lhe o direito de deixar o negócio junto com o novo comprador, chama-se:</p>",
     "alternativas": {
      "a": "Drag along.",
      "b": "Free float.",
      "c": "Tag along.",
      "d": "Bookbuilding."
     },
     "gabarito": "c",
     "feedback": {
      "a": "O drag along é o oposto, servindo para o acionista controlador arrastar o minoritário na venda integral da empresa.",
      "b": "Free float representa apenas o percentual de ações em livre circulação no mercado secundário.",
      "d": "Bookbuilding é o processo de apuração de intenções de preço e demanda para lançamento de ações no mercado primário."
     }
    },
    {
     "id": "cpa-prod-19-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. Pela legislação societária geral, o piso de tag along é de 80% exclusivo para as ações ordinárias na troca de controle. Contudo, as empresas que aderem aos segmentos especiais do Nível 2 e do Novo Mercado elevam esse benefício voluntariamente para 100%.</p><p>As alternativas B, C e D distorcem os percentuais previstos na lei de base e nos regulamentos dos segmentos especiais da B3.</p>",
     "enunciado": "<p>Um investidor avalia os direitos de proteção acionária previstos pela Lei das Sociedades Anônimas e pelas regras diferenciadas da B3. Sobre os percentuais mínimos de tag along assegurados aos minoritários detentores de ações ordinárias, verifica-se que:</p>",
     "alternativas": {
      "a": "A lei geral assegura um piso de tag along de 80% restrito às ações ordinárias, enquanto os segmentos especiais do Nível 2 e do Novo Mercado elevam esse percentual para 100%.",
      "b": "A lei geral garante obrigatoriamente 100% de tag along para todas as classes, independentemente do segmento da empresa na bolsa.",
      "c": "Os segmentos básicos não oferecem nenhuma proteção, exigindo o patamar de 80% exclusivamente nos papéis do Nível 1.",
      "d": "O Novo Mercado estipula um teto de 50% de tag along para as ordinárias e proíbe qualquer ganho adicional de saída."
     },
     "gabarito": "a",
     "feedback": {
      "b": "A lei de base não garante 100% de tag along, fixando o piso mínimo legal em 80% para as ordinárias.",
      "c": "O piso legal de 80% aplica-se de forma geral às empresas sob o segmento básico da lei, e não apenas no Nível 1.",
      "d": "O Novo Mercado garante tag along total de 100%, e não um teto restritivo de 50%."
     }
    },
    {
     "id": "cpa-prod-19-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. Os segmentos especiais da B3 exigem como regra geral um free float mínimo de 20% do capital social, admitindo a redução para 15% se a companhia atingir um volume financeiro médio diário de negociação igual ou superior a R$ 20 milhões nos doze meses anteriores.</p><p>As alternativas A, B e D erram ao fixar parâmetros percentuais defasados ou ignorar as condicionantes de volume do regulamento.</p>",
     "enunciado": "<p>O conceito de free float possui alta relevância tanto para a liquidez diária negociada na B3 quanto para as exigências regulatórias dos segmentos de listagem especial. Atualmente, a regra geral de free float estipulada para os segmentos especiais (Nível 1, Nível 2 e Novo Mercado) exige um percentual mínimo de ações em circulação equivalente a:</p>",
     "alternativas": {
      "a": "10% do capital social total da companhia.",
      "b": "15% do capital social total da companhia, sem exceções de volume financeiro.",
      "c": "20% do capital social total da companhia, podendo ser reduzido para 15% caso o volume financeiro médio diário supere R$ 20 milhões.",
      "d": "25% do capital social total da companhia, conforme a antiga norma fixa da CVM."
     },
     "gabarito": "c",
     "feedback": {
      "a": "O piso geral de 10% é insuficiente e inferior ao exigido pela governança especial da bolsa.",
      "b": "A redução para 15% existe, mas está condicionada ao alcance do volume médio diário de R$ 20 milhões.",
      "d": "O percentual de 25% refere-se à regra antiga que foi substituída nos últimos anos."
     }
    },
    {
     "id": "cpa-prod-19-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a D, pois trata-se da única alternativa incorreta (atendendo ao comando da questão). O segmento do Novo Mercado <strong>proíbe</strong> terminantemente a emissão de ações preferenciais; o capital social da companhia deve ser composto exclusivamente por ações ordinárias (ON).</p><p>As alternativas A, B e C descrevem perfeitamente conceitos corretos e fiéis às normas de governança: o drag along atua na venda integral, o free float exclui controladores, e o Nível 2 concede direitos estendidos às preferenciais com tag along de 100%.</p>",
     "enunciado": "<p>Analise os institutos de proteção societária, governança e regras aplicadas aos segmentos de listagem da B3 e assinale a alternativa incorreta:</p>",
     "alternativas": {
      "a": "O drag along funciona como o espelho reverso do tag along, permitindo que o acionista controlador obrigue os minoritários a venderem suas fatias junto com o bloco de controle nas mesmas condições.",
      "b": "O cálculo do free float considera o total de ações em livre circulação, excluindo expressamente os papéis detidos pelo bloco controlador, administradores e em tesouraria.",
      "c": "O Nível 2 da B3 admite a emissão de ações ordinárias e preferenciais, garantindo que as ações preferenciais ganhem direito de voto em pautas críticas como fusões e incorporações, além de assegurar 100% de tag along para ambas as classes.",
      "d": "O Novo Mercado permite que a companhia mantenha parte de seu capital composto por ações preferenciais sem direito a voto, desde que o volume financeiro delas não ultrapasse 20% do total emitido."
     },
     "gabarito": "d",
     "feedback": {
      "a": "A definição do drag along como ferramenta para o controlador arrastar os minoritários na venda total é verídica.",
      "b": "A exclusão de controladores, administradores e tesouraria no cômputo do free float está correta.",
      "c": "As características de permissão de PN com voto em pautas críticas e o tag along de 100% para ON e PN no Nível 2 estão perfeitas."
     }
    }
   ],
   "Tributação da renda variável: alíquotas, isenções e compensação de perdas": [
    {
     "id": "cpa-prod-20-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. Na renda variável, o investidor apura seus lucros e emite o DARF de forma individual, devendo efetuar o pagamento do imposto devido até o último dia útil do mês seguinte ao da apuração.</p><p>As alternativas A, C e D erram as datas limites e os prazos oficiais estabelecidos pela legislação fiscal para a renda variável.</p>",
     "enunciado": "<p>Diferentemente da renda fixa, na qual o imposto é retido automaticamente pela instituição financeira no momento do resgate, a renda variável transfere a responsabilidade operacional para o investidor. Compete ao cliente a apuração mensal e o recolhimento do Imposto de Renda por meio de DARF até:</p>",
     "alternativas": {
      "a": "O quinto dia útil do mês corrente em que as negociações foram realizadas na B3.",
      "b": "O último dia útil do mês seguinte ao da apuração dos ganhos na renda variável.",
      "c": "O último dia útil do trimestre fiscal em vigor, coincidindo com o ajuste de fundos imobiliários.",
      "d": "O dia 20 do mês subsequente, conforme as regras aplicadas aos rendimentos de cupom de debêntures."
     },
     "gabarito": "b",
     "feedback": {
      "a": "O prazo de pagamento não ocorre no mês corrente e desconsidera o quinto dia útil.",
      "c": "A apuração do imposto na renda variável não segue o fechamento trimestral dos fundos imobiliários.",
      "d": "A data do dia 20 não se aplica ao recolhimento do imposto por DARF na bolsa de valores."
     }
    },
    {
     "id": "cpa-prod-20-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. A pessoa física desfruta de isenção de Imposto de Renda quando o total das alienações de ações no mercado à vista, realizadas no mês, não excede R$ 20.000,00.</p><p>As alternativas A, B e D aplicam os limites em produtos incorretos que não contam com o benefício ou distorcem o teto legal de volume.</p>",
     "enunciado": "<p>A legislação fiscal brasileira concede um benefício de isenção de Imposto de Renda para a pessoa física que realiza operações no mercado à vista de ações, condicionado ao volume total de vendas no mês. Esse limite de isenção atinge alienações de até:</p>",
     "alternativas": {
      "a": "R$ 5.000,00 no mês, restrito a cotas de Fundos de Investimento Imobiliário.",
      "b": "R$ 10.000,00 no mês, aplicado exclusivamente a operações de day trade em opções.",
      "c": "R$ 20.000,00 no mês em ações no mercado à vista.",
      "d": "R$ 50.000,00 no mês, somando todas as classes de ativos, incluindo os ETFs de ações."
     },
     "gabarito": "c",
     "feedback": {
      "a": "A isenção dos vinte mil reais não se aplica a FIIs, que pagam 20% sobre qualquer ganho de capital.",
      "b": "As operações de day trade estão expressamente excluídas da isenção de volume.",
      "d": "Os ETFs de ações também ficam de fora da regra de isenção do mercado à vista de ações."
     }
    },
    {
     "id": "cpa-prod-20-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. As operações comuns (que atravessam os dias) pagam a alíquota de 15% sobre o ganho líquido, enquanto as operações de day trade (iniciadas e encerradas no mesmo dia com o mesmo ativo) sofrem tributação de 20%.</p><p>As alternativas B, C e D aplicam alíquotas incorretas ou misturam conceitos da renda fixa e do JCP na renda variável.</p>",
     "enunciado": "<p>Um investidor realizou operações comuns (compras e vendas em dias diferentes) e transações de day trade na B3 ao longo do mês, obtendo lucro em ambas as modalidades. Sobre as alíquotas aplicáveis aos ganhos líquidos apurados nessas frentes de investimento, verifica-se que incide:</p>",
     "alternativas": {
      "a": "15% nas operações comuns e 20% nas operações de day trade.",
      "b": "20% nas operações comuns e 15% nas operações de day trade.",
      "c": "Alíquota fixa de 17,5% em todas as operações, unificando a regra por equiparação ao JCP.",
      "d": "Tabela regressiva de 22,5% a 15%, idêntica à aplicada nos títulos de renda fixa privada."
     },
     "gabarito": "a",
     "feedback": {
      "b": "As alíquotas estão invertidas, pois o day trade carrega o percentual mais alto de 20%.",
      "c": "A alíquota de 17,5% é associada ao JCP, e não aos ganhos gerais de bolsa de valores.",
      "d": "A tabela regressiva pertence ao Imposto de Renda da renda fixa, e não à renda variável."
     }
    },
    {
     "id": "cpa-prod-20-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. A legislação estabelece uma barreira rígida de compensação: prejuízos em operações de day trade só podem ser abatidos de ganhos obtidos em operações de day trade, sendo vedado o cruzamento com o resultado de operações comuns.</p><p>As alternativas A, B e D violam as regras de compensação cruzada, prazos de prescrição ou limites de compensação da Receita Federal.</p>",
     "enunciado": "<p>Um cliente obteve um prejuízo de R$ 4.000,00 em operações de day trade no mês de janeiro e, no mês de fevereiro, acumulou um ganho líquido de R$ 6.000,00 em operações comuns no mercado à vista de ações. Ao orientar esse investidor sobre a compensação de perdas na renda variável, você afirma corretamente que:</p>",
     "alternativas": {
      "a": "O prejuízo do day trade pode ser integralmente abatido do ganho das operações comuns, zerando o imposto de fevereiro.",
      "b": "O prejuízo não pode ser compensado, pois a legislação proíbe o uso de créditos fiscais de bolsa de valores em anos-calendário diferentes.",
      "c": "O prejuízo em day trade só pode ser compensado com ganhos em operações da mesma modalidade (day trade), não podendo ser misturado com as operações comuns.",
      "d": "O prejuízo caduca e extingue-se automaticamente caso o cliente não recupere o saldo negativo dentro de um prazo máximo de trinta dias."
     },
     "gabarito": "c",
     "feedback": {
      "a": "A lei impõe uma barreira intransponível que impede misturar perdas de day trade com lucros de operações comuns.",
      "b": "Os prejuízos podem ser compensados em meses e anos seguintes, desde que respeitada a mesma modalidade.",
      "d": "O prejuízo na bolsa não prescreve em trinta dias, mantendo-se válido enquanto o investidor controlar os valores."
     }
    },
    {
     "id": "cpa-prod-20-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a A. Como as vendas de ações no mercado à vista somaram R$ 18.000,00 (abaixo do teto de R$ 20.000,00), o lucro de R$ 3.000,00 é totalmente isento. No entanto, as operações de day trade não entram nessa regra de volume e pagam imposto de 20% sobre o lucro (R$ 1.500,00) desde o primeiro real.</p><p>As alternativas B, C e D falham ao estender a isenção indevidamente ao day trade, eliminar o benefício legal das ações ou inventar alíquotas e deduções fictícias.</p>",
     "enunciado": "<p>Um investidor pessoa física realizou vendas totais de ações no mercado à vista equivalentes a R$ 18.000,00 em um determinado mês, apurando um lucro líquido de R$ 3.000,00 nessa mesma operação. No mesmo período, realizou operações de day trade e apurou um ganho líquido de R$ 1.500,00. Com base nas regras de isenção e tributação para esses cenários, constata-se que:</p>",
     "alternativas": {
      "a": "O lucro das ações é isento por estar abaixo do teto de vendas, mas o ganho de day trade paga imposto de 20% desde o primeiro real.",
      "b": "Tanto o lucro das ações quanto o de day trade ficam isentos, pois o patrimônio global negociado na bolsa não ultrapassou R$ 20.000,00 no mês.",
      "c": "Ambas as operações sofrem tributação integral, aplicando-se 15% nas ações e 20% no day trade, visto que a isenção de volume não abrange pessoas físicas na bolsa.",
      "d": "O ganho de day trade desfruta de isenção de 50% por causa do volume reduzido, mas as ações pagam 17,5% de imposto retido pela corretora."
     },
     "gabarito": "a",
     "feedback": {
      "b": "O day trade está excluído da isenção de volume e paga imposto sobre o lucro independentemente do valor transacionado.",
      "c": "As ações ficam isentas, pois o total alienado (R$ 18.000,00) ficou abaixo do teto de R$ 20.000,00 do mercado à vista.",
      "d": "O day trade não possui isenção parcial e a retenção da corretora nas ações é o \"dedo duro\" de 0,005%, e não 17,5%."
     }
    }
   ],
   "COE: estrutura, capital protegido e tributação": [
    {
     "id": "cpa-prod-21-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. O COE combina uma parcela em renda fixa (responsável por sustentar a lógica de proteção) com derivativos (como opções), buscando capturar o desempenho de índices, moedas ou ações.</p><p>As alternativas A, C e D misturam títulos de mercado e cotas que não compõem a estrutura unificada e própria do certificado de operações estruturadas.</p>",
     "enunciado": "<p>O Certificado de Operações Estruturadas (COE) é um produto financeiro híbrido estruturado para capturar o desempenho de ativos referenciais no mercado. Em relação à sua arquitetura básica, o COE é composto pela combinação de:</p>",
     "alternativas": {
      "a": "Debêntures de infraestrutura e cotas de fundos imobiliários alavancados.",
      "b": "Um componente de renda fixa e instrumentos derivativos.",
      "c": "Títulos públicos federais NTN-B e ações ordinárias listadas no Novo Mercado.",
      "d": "Letras de Crédito Imobiliário (LCI) e contratos futuros de taxa de câmbio na B3."
     },
     "gabarito": "b",
     "feedback": {
      "a": "As debêntures e os FIIs não formam a estrutura interna que caracteriza a arquitetura de um COE.",
      "c": "Misturar títulos públicos e ações avulsas do Novo Mercado descreve uma carteira direta de ações, e não um COE.",
      "d": "A LCI é um título de crédito imobiliário autônomo, e não parte da composição estrutural do certificado do COE."
     }
    },
    {
     "id": "cpa-prod-21-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. Na modalidade de Valor Nominal Protegido, o total dos pagamentos mínimos previstos é igual ou superior ao investimento inicial, garantindo a devolução do principal caso o certificado seja mantido até o vencimento.</p><p>A alternativa B confunde proteção de mercado com a garantia inexistente do FGC. A alternativa C inventa taxas de administração inexistentes para o COE. A alternativa D cria o risco falso de saldo devedor.</p>",
     "enunciado": "<p>No momento da oferta de um Certificado de Operações Estruturadas (COE), o investidor precisa compreender as modalidades normativas de proteção de capital previstas pela regulação. Sobre a modalidade de Valor Nominal Protegido, é correto afirmar que:</p>",
     "alternativas": {
      "a": "Garante a devolução de, no mínimo, 100% do capital aplicado caso o cliente leve o título até o vencimento.",
      "b": "Assegura cobertura integral automática do Fundo Garantidor de Créditos (FGC) até o teto de R$ 250 mil.",
      "c": "Permite que o banco emissor desconte taxas de administração mensais diretamente da custódia do cliente.",
      "d": "Obriga o investidor a realizar aportes financeiros complementares se o derivativo der prejuízo."
     },
     "gabarito": "a",
     "feedback": {
      "b": "O adjetivo protegido refere-se ao comportamento dos derivativos, pois o COE não possui garantia do FGC.",
      "c": "O COE não cobra taxas de administração, visto que os custos já vêm embutidos na estrutura do produto.",
      "d": "O COE não gera saldo devedor nem exige chamadas de margem ou aportes novos."
     }
    },
    {
     "id": "cpa-prod-21-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. A garantia de devolução do principal no Valor Nominal Protegido exige que o certificado seja carregado até o vencimento. Quem solicita o resgate antecipado sofre marcação a mercado, podendo receber valor inferior ao investido.</p><p>As alternativas A, C e D erram ao prometer devolução total antecipada, proibir o resgate ou inventar multas regulamentares fixas.</p>",
     "enunciado": "<p>Um cliente adquiriu um Certificado de Operações Estruturadas (COE) e, após transcorridos seis meses, precisou resgatar o capital investido de forma antecipada por motivos de liquidez pessoal. Ao orientar esse cliente sobre o procedimento de resgate antes do prazo de vencimento, você explica corretamente que:</p>",
     "alternativas": {
      "a": "O banco emitente garantirá a devolução exata do valor nominal protegido acrescido de juros pró-rata no mesmo dia.",
      "b": "O COE será recomprado pelo preço de mercado (marcação a mercado), o que pode resultar em perdas e na perda da proteção do capital inicial.",
      "c": "O resgate antecipado é terminantemente proibido por lei, bloqueando os recursos até o dia final do contrato.",
      "d": "O cliente receberá o capital integral deduzido apenas de uma multa fixa regulamentar de 1% estabelecida pelo Banco Central."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A garantia de capital protegido só vale se o investidor carregar o título até a data de vencimento.",
      "c": "O resgate antecipado é permitido, mas ocorre via recompra do banco, e não por bloqueio absoluto da lei.",
      "d": "Não existe multa regulamentar fixa de 1%, pois o preço baseia-se na marcação a mercado dos derivativos e taxas de juros."
     }
    },
    {
     "id": "cpa-prod-21-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. Os rendimentos do COE seguem rigorosamente a tabela regressiva de Imposto de Renda da renda fixa. Para o prazo de 800 dias (acima de 720 dias), a alíquota aplicável é de 15%, com retenção exclusiva na fonte pela instituição pagadora.</p><p>As alternativas A, C e D erram ao omitir a retenção na fonte, classificar o produto como renda variável ou inventar isenções por reaplicação.</p>",
     "enunciado": "<p>Um investidor aplicou seus recursos em um Certificado de Operações Estruturadas (COE) atrelado ao desempenho de índices acionários internacionais, obtendo um resultado positivo ao resgatar o título após 800 dias de aplicação. Sobre a tributação incidente sobre o ganho obtido nesse COE, apura-se que:</p>",
     "alternativas": {
      "a": "O rendimento é tributado pela alíquota fixa de 15%, sem retenção prévia na fonte.",
      "b": "Aplica-se a tabela regressiva de Imposto de Renda da renda fixa (15% para prazos acima de 720 dias), com retenção exclusiva na fonte pelo emissor.",
      "c": "Os ganhos sofrem tributação de 20% como se fossem operações de renda variável na bolsa de valores.",
      "d": "O investidor fica isento de impostos se o valor resgatado for reaplicado em títulos públicos no mesmo mês."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A alíquota para 800 dias na tabela regressiva é de 15%, mas há retenção exclusiva na fonte pela instituição pagadora.",
      "c": "Embora o COE use derivativos e ativos de bolsa como referência, ele não segue a regra de tributação da renda variável.",
      "d": "A isenção por reaplicação em títulos públicos não existe na regulação fiscal brasileira para o COE."
     }
    },
    {
     "id": "cpa-prod-21-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a A, pois trata-se da única alternativa incorreta (atendendo ao comando da questão). O COE <strong>não possui cobertura do FGC</strong> em hipótese alguma; o investidor assume integralmente o risco de crédito do banco emissor.</p><p>As alternativas B, C e D descrevem fatos perfeitamente exatos e coerentes com a regulação do COE: o Valor Nominal em Risco possui piso definido, a entrega do DIE é obrigatória para o varejo, e as perdas em COE não compensam ganhos de renda variável.</p>",
     "enunciado": "<p>Analise as características estruturais, os riscos de crédito e as normas de distribuição aplicáveis aos Certificados de Operações Estruturadas (COE) e assinale a alternativa incorreta:</p>",
     "alternativas": {
      "a": "O COE conta com a cobertura ordinária do Fundo Garantidor de Créditos (FGC) até o limite de R$ 250 mil por CPF, mitigando integralmente a quebra do banco emissor.",
      "b": "A modalidade de Valor Nominal em Risco prevê pagamentos mínimos iguais ou superiores a uma parcela previamente definida do investimento inicial, podendo ser inferior a 100%.",
      "c": "O distribuidor de COE para investidores não profissionais deve entregar obrigatoriamente o Documento de Informações Essenciais (DIE) e colher o termo de ciência de risco assinado.",
      "d": "As perdas incorridas em operações com COE não podem ser compensadas com ganhos líquidos apurados em operações de renda variável."
     },
     "gabarito": "a",
     "feedback": {
      "b": "A definição da modalidade de Valor Nominal em Risco com piso pré-definido menor que 100% está inteiramente correta.",
      "c": "A entrega do DIE e a assinatura do termo de ciência de risco são exigências regulatórias obrigatórias para clientes não profissionais.",
      "d": "A vedação de compensar perdas de COE com ganhos de renda variável é uma regra tributária válida."
     }
    }
   ],
   "Fundos de investimento: conceito, condomínio e registro na CVM": [
    {
     "id": "cpa-prod-22-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. A norma define o fundo de investimento como uma comunhão de recursos constituída sob a forma de condomínio de natureza especial, cujos direitos e obrigações dividem-se em frações ideais denominadas cotas.</p><p>As alternativas A, C e D erram ao classificar o fundo com naturezas jurídicas corporativas ou associativas incorretas.</p>",
     "enunciado": "<p>Os fundos de investimento constituem ferramentas de aplicação coletiva estruturadas legalmente sob a forma de:</p>",
     "alternativas": {
      "a": "Sociedade Anônima de capital fechado com ações ordinárias e preferenciais.",
      "b": "Condomínio de natureza especial, dividido em frações ideais chamadas cotas.",
      "c": "Cooperativa de crédito gerida por conselho deliberativo supervisionado pelo Banco Central.",
      "d": "Associação civil sem fins lucrativos com patrimônio vinculado à instituição distribuidora."
     },
     "gabarito": "b",
     "feedback": {
      "a": "Os fundos não são constituídos como Sociedades Anônimas, mas sim sob a forma condominial.",
      "c": "A estrutura não corresponde a cooperativas de crédito vinculadas ao Banco Central.",
      "d": "O patrimônio do fundo não se vincula à instituição distribuidora e possui natureza de condomínio."
     }
    },
    {
     "id": "cpa-prod-22-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. No condomínio aberto, o investidor tem liberdade para aplicar e pedir resgate a qualquer momento, variando o patrimônio com esse fluxo. No condomínio fechado, não há resgate direto no caixa do fundo; para sair antes do prazo final, o cotista precisa negociar suas cotas no mercado secundário.</p><p>As alternativas B, C e D distorcem as regras de movimentação, liquidez e negociação de cada modalidade de condomínio.</p>",
     "enunciado": "<p>Ao comparar as características operacionais entre um fundo constituído sob a forma de condomínio aberto e um de condomínio fechado, verifica-se que:</p>",
     "alternativas": {
      "a": "O condomínio aberto permite que o investidor solicite o resgate de suas cotas a qualquer tempo, enquanto o fechado não admite resgates diretos no caixa do fundo antes do prazo final ou amortizações.",
      "b": "O condomínio fechado garante liquidez diária com resgates instantâneos, ao passo que o aberto exige venda em bolsa de valores.",
      "c": "Ambos impedem qualquer movimentação de saída até o vencimento programado do exercício fiscal.",
      "d": "O condomínio aberto possui cotas negociadas exclusivamente no mercado secundário da B3."
     },
     "gabarito": "a",
     "feedback": {
      "b": "Os conceitos operacionais foram invertidos, pois o aberto possui liquidez de resgate e o fechado exige o mercado secundário.",
      "c": "O condomínio aberto permite resgates periódicos conforme o regulamento, desmentindo o bloqueio total.",
      "d": "As cotas de condomínios abertos são movimentadas diretamente com o administrador do fundo, e não no pregão da B3."
     }
    },
    {
     "id": "cpa-prod-22-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. O funcionamento do fundo depende de prévio registro na CVM, o qual é concedido de forma automática com o envio eletrônico de documentos pelo administrador. Esse registro não atesta qualidade, segurança ou rentabilidade.</p><p>As alternativas B, C e D criam mitos de fiscalização prévia, garantias de retorno ou isenções regulatórias inexistentes.</p>",
     "enunciado": "<p>Um cliente argumenta com seu gerente que o registro de um fundo de investimento na CVM atesta a segurança e a rentabilidade superior dos ativos selecionados pelo gestor. De acordo com as normas aplicáveis ao registro e à fiscalização, a orientação correta é de que:</p>",
     "alternativas": {
      "a": "O registro prévio na CVM é concedido automaticamente com o envio eletrônico dos documentos pelo administrador, não avaliando a qualidade ou o retorno da estratégia.",
      "b": "A CVM realiza uma auditoria presencial prévia e aprova obrigatoriamente a rentabilidade mínima antes de liberar o CNPJ do fundo.",
      "c": "O registro na autarquia federal funciona como uma garantia integral contra perdas de mercado e de crédito.",
      "d": "Os fundos de investimento são dispensados de qualquer registro formal, operando sob autorização exclusiva do FGC."
     },
     "gabarito": "a",
     "feedback": {
      "b": "A CVM não faz análises prévias de rentabilidade nem auditorias presenciais para conceder o registro.",
      "c": "O registro não assegura rentabilidade e tampouco elimina os riscos de mercado ou de crédito.",
      "d": "O registro prévio na CVM é obrigatório, e o FGC não emite autorizações de funcionamento para fundos."
     }
    },
    {
     "id": "cpa-prod-22-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. O fundo possui CNPJ próprio e patrimônio totalmente segregado do banco administrador. Caso a instituição quebre, os ativos continuam pertencendo aos cotistas e não respondem pelas dívidas da instituição, bastando que a assembleia escolha um novo administrador.</p><p>As alternativas B, C e D ignoram a blindagem da segregação patrimonial e inventam perdas ou intervenções estatais descabidas.</p>",
     "enunciado": "<p>Uma instituição financeira que atua como administradora de fundos de investimento teve sua falência decretada por problemas operacionais graves. Considerando a separação patrimonial que rege essa indústria, a consequência direta para os recursos aplicados pelos cotistas será de que:</p>",
     "alternativas": {
      "a": "Os ativos do fundo pertencem aos cotistas, possuem CNPJ próprio e não respondem pelas dívidas do administrador falido.",
      "b": "O dinheiro dos fundos é imediatamente confiscado para pagar os credores trabalhistas e fiscais do banco falido.",
      "c": "Os cotistas perdem todo o capital investido de forma irreversível por causa da ausência de cobertura do FGC.",
      "d": "O Banco Central assume compulsoriamente a gestão dos ativos e liquida o fundo em cotas de poupança."
     },
     "gabarito": "a",
     "feedback": {
      "b": "Os credores do banco não alcançam os ativos do fundo, pois o patrimônio é segregado do administrador.",
      "c": "A quebra da administradora não acarreta perda do dinheiro do fundo, visto que o patrimônio possui CNPJ separado.",
      "d": "O Banco Central não assume a gestão de fundos liquidados dessa forma; os cotistas reúnem-se para trocar o administrador."
     }
    },
    {
     "id": "cpa-prod-22-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a B, pois trata-se da única alternativa incorreta (atendendo ao comando da questão). Os fundos de investimento <strong>não possuem cobertura do FGC</strong>, pois o produto opera fora do balanço do banco e o cotista assume os riscos dos ativos que compõem a carteira.</p><p>As alternativas A, C e D descrevem fatos plenamente exatos: a existência de classes com patrimônio segregado, a regra de limitação de responsabilidade condicionada ao regulamento, e o patamar mínimo de patrimônio líquido para manutenção do registro na CVM.</p>",
     "enunciado": "<p>Analise as características estruturais, jurídicas e operacionais dos fundos de investimento e assinale a alternativa incorreta:</p>",
     "alternativas": {
      "a": "O regulamento de um fundo de investimento pode prever diferentes classes de cotas, exigindo a constituição de um patrimônio segregado para cada classe, de modo que os passivos de uma não contaminem a outra.",
      "b": "Os fundos de investimento contam com a garantia ordinária do Fundo Garantidor de Créditos (FGC) até o limite de R$ 250 mil por CPF, blindando o cotista contra oscilações de mercado.",
      "c": "A responsabilidade do cotista restringe-se ao valor subscrito de suas cotas unicamente quando houver previsão expressa nesse sentido no regulamento do fundo.",
      "d": "Uma classe de cotas aberta que apresentar patrimônio líquido médio diário inferior a R$ 1 milhão por 90 dias consecutivos terá seu registro cancelado pela CVM."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A permissão de classes de cotas com patrimônio segregado está correta e descrita na norma.",
      "c": "A exigência de cláusula expressa no regulamento para limitar a responsabilidade do cotista ao valor subscrito é verdadeira.",
      "d": "O cancelamento do registro para classes abertas com patrimônio médio abaixo de R$ 1 milhão por 90 dias está correto."
     }
    }
   ],
   "Resolução CVM 175: classes, subclasses e segregação patrimonial": [
    {
     "id": "cpa-prod-23-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. A segregação patrimonial entre classes é a mudança de maior efeito prático da Resolução CVM 175: cada classe de cotas tem patrimônio próprio e responde apenas pelas suas obrigações. O problema de uma não contamina a outra.</p><p>A A supõe que o CNPJ comum arrasta todo mundo junto, que é justamente o cenário que a norma veio impedir. A C inventa um rateio proporcional que não existe. A D transforma uma regra em decisão discricionária do regulador.</p><p>Atenção ao limite dessa blindagem, porque é onde a prova pega: a segregação vale entre CLASSES. As subclasses não têm patrimônio segregado e compartilham a carteira da classe a que pertencem.</p>",
     "enunciado": "<p>Um fundo estruturado sob a Resolução CVM 175 tem duas classes de cotas. A classe A investe em crédito privado e acumulou obrigações que superaram o seu patrimônio. A classe B investe em títulos públicos e vai bem. Sobre o efeito da situação da classe A sobre a classe B, é correto afirmar que:</p>",
     "alternativas": {
      "a": "A classe B responde pelas obrigações da classe A, porque as duas pertencem ao mesmo fundo e ao mesmo CNPJ.",
      "b": "Cada classe tem patrimônio segregado e responde apenas pelas próprias obrigações, então a classe B não é alcançada.",
      "c": "A classe B responde de forma proporcional ao seu patrimônio líquido, por rateio entre as classes.",
      "d": "A CVM decide caso a caso se a segregação vale, mediante pedido do administrador."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A segregação patrimonial entre classes é exatamente o que a norma criou para impedir esse contágio.",
      "c": "Não há rateio entre classes. A blindagem é total, e não proporcional.",
      "d": "A segregação decorre da norma. Não depende de autorização caso a caso."
     }
    },
    {
     "id": "cpa-prod-23-q2",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. Na Resolução CVM 175, ser aberta ou fechada deixou de ser característica do fundo e passou a ser atributo da CLASSE de cotas. A classe aberta admite resgate; a fechada não admite, e a saída antes do prazo se dá pela venda das cotas no mercado secundário.</p><p>Na prática isso significa que um mesmo fundo pode abrigar uma classe com liquidez e outra sem, cada uma com o seu público e o seu regulamento.</p><p>A alternativa A descreve o modelo anterior à norma, e é a resposta que um material desatualizado daria. A C confunde regulamento com esforço de venda. A D cria uma relação que não existe entre segregação e liquidez.</p>",
     "enunciado": "<p>Um cliente pergunta se determinado fundo é aberto ou fechado, e você percebe que o fundo tem mais de uma classe de cotas. Sob a Resolução CVM 175, a resposta correta é que:</p>",
     "alternativas": {
      "a": "Ser aberto ou fechado é atributo do fundo como um todo, então todas as classes seguem a mesma regra.",
      "b": "Ser aberta ou fechada passou a ser atributo da classe de cotas, e um mesmo fundo pode ter classe aberta e classe fechada.",
      "c": "A definição cabe ao distribuidor no momento da venda, conforme o perfil de cada cliente.",
      "d": "Todo fundo com mais de uma classe é obrigatoriamente fechado, para preservar a segregação patrimonial."
     },
     "gabarito": "b",
     "feedback": {
      "a": "Era assim antes da 175. A qualificação desceu do fundo para a classe.",
      "c": "A característica está no regulamento da classe, e não na venda.",
      "d": "A segregação patrimonial não impõe nada sobre resgate. Uma classe aberta segue admitindo resgate."
     }
    },
    {
     "id": "cpa-prod-23-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. A estrutura multiclasse exige que todas as classes pertençam à mesma categoria do fundo, sendo proibido criar classes que alterem o tratamento tributário aplicável. Além disso, cada classe possui patrimônio segregado que responde apenas pelas suas próprias obrigações.</p><p>As alternativas B, C e D distorcem as regras de categorias, segregação de patrimônio e o papel das subclasses.</p>",
     "enunciado": "<p>Com a introdução da estrutura multiclasse trazida pela Resolução CVM 175, um único fundo de investimento passou a poder abrigar diferentes classes de cotas. Acerca dos limites e das regras impostas a essa estrutura, assinale a alternativa correta:</p>",
     "alternativas": {
      "a": "Todas as classes do fundo devem pertencer obrigatoriamente à mesma categoria, sendo vedada a criação de classes que alterem o tratamento tributário aplicável.",
      "b": "É permitido misturar classes de renda fixa e de ações sob o mesmo fundo, contanto que o gestor pague uma taxa adicional à CVM.",
      "c": "As subclasses possuem patrimônio segregado entre si de forma isolada, protegendo os investidores do varejo dos cotistas private.",
      "d": "As classes de cotas não possuem qualquer proteção de blindagem, respondendo coletivamente pelas dívidas de todo o fundo."
     },
     "gabarito": "a",
     "feedback": {
      "b": "A norma proíbe expressamente colocar categorias diferentes (como renda fixa e ações) sob o mesmo guarda-chuva se isso alterar o tratamento tributário.",
      "c": "As subclasses não possuem patrimônio segregado; a blindagem patrimonial ocorre estritamente entre as classes.",
      "d": "A segregação patrimonial entre as classes garante exatamente a blindagem e a separação das obrigações de cada uma."
     }
    },
    {
     "id": "cpa-prod-23-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. As subclasses de cotas não possuem patrimônio segregado e compartilham a mesma carteira. Elas podem se diferenciar exclusivamente por público-alvo, prazos e condições de aplicação e resgate, e taxas de administração, gestão, distribuição, ingresso e saída.</p><p>As alternativas A, C e D erram ao supor isolamento patrimonial nas subclasses, autonomia de alteração de política ou gestão independente concorrente.</p>",
     "enunciado": "<p>Uma instituição financeira estruturou uma classe de cotas de ações e abriu duas portas de entrada comerciais: a Subclasse A para pequenos investidores, com taxa de administração de 2%, e a Subclasse B para clientes de alta renda, com taxa de 1%. Sobre o funcionamento e os limites dessas subclasses, é correto afirmar que:</p>",
     "alternativas": {
      "a": "As subclasses possuem patrimônios totalmente isolados e independentes no balanço contábil do administrador.",
      "b": "As subclasses podem ser diferenciadas exclusivamente por aspectos como público-alvo, prazos, condições de resgate e taxas, compartilhando a mesma carteira da classe.",
      "c": "A Subclasse B tem o poder legal de alterar a política de investimento da classe inteira sem consultar a Subclasse A.",
      "d": "As subclasses possuem administrações de gestores concorrentes e independentes entre si."
     },
     "gabarito": "b",
     "feedback": {
      "a": "As subclasses não têm patrimônio segregado; elas compartilham a mesma carteira da classe a que pertencem.",
      "c": "Nenhuma subclasse possui autonomia isolada para alterar a política de investimento da classe de forma unilateral.",
      "d": "As subclasses alimentam a mesma carteira e respondem ao mesmo gestor da classe correspondente."
     }
    },
    {
     "id": "cpa-prod-23-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a C, pois trata-se da única alternativa incorreta (atendendo ao comando da questão). A norma proíbe expressamente afetar ou vincular parcela do patrimônio de uma classe a qualquer subclasse, visto que as subclasses não possuem patrimônio segregado.</p><p>As alternativas A, B e D descrevem premissas totalmente verdadeiras e alinhadas à Resolução CVM 175: a limitação de responsabilidade pelo regulamento, a responsabilidade ilimitada em caso de omissão, e o registro automático na CVM.</p>",
     "enunciado": "<p>Analise o seguinte caso prático regulatório à luz da Resolução CVM 175 e assinale a alternativa incorreta sobre a responsabilidade do cotista e os efeitos da norma:</p>",
     "alternativas": {
      "a": "O regulamento de um fundo pode limitar expressamente a responsabilidade do cotista ao valor subscrito de suas cotas.",
      "b": "Caso o regulamento de um fundo seja totalmente omisso quanto à limitação de responsabilidade, o cotista responderá por eventual patrimônio líquido negativo, podendo ser chamado a cobrir o saldo com recursos próprios.",
      "c": "A subclasse pode ter seu patrimônio parcialmente afetado para garantir obrigações específicas de operações alavancadas de derivativos contratadas exclusivamente por ela.",
      "d": "O registro do fundo na CVM é automático, concedido pelo envio eletrônico dos documentos pelo administrador, sem análise prévia da estratégia."
     },
     "gabarito": "c",
     "feedback": {
      "a": "A previsão regulamentar expressa limitando a responsabilidade ao valor subscrito é um direito previsto na norma.",
      "b": "A regra que torna a responsabilidade ilimitada em caso de omissão do regulamento (exigindo termo de ciência) está correta.",
      "d": "O registro automático, sem análise de mérito da estratégia, está corretamente descrito."
     }
    }
   ],
   "Características, estratégias, carteiras e riscos dos fundos": [
    {
     "id": "cpa-prod-24-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. A gestão passiva define a estratégia em que o gestor monta a carteira para reproduzir e acompanhar de perto o comportamento de um índice de referência (benchmark), exigindo menos esforço analítico e cobrando taxas menores.</p><p>As alternativas A, C e D descrevem conceitos de superação de mercado (ativa), alavancagem ou títulos de crédito específicos que não definem a gestão passiva.</p>",
     "enunciado": "<p>Os fundos de investimento adotam abordagens distintas na condução de suas carteiras para atender aos objetivos dos cotistas. A estratégia de gestão que tem como principal propósito acompanhar o desempenho de um indicador de referência (benchmark), reproduzindo sua carteira teórica, é denominada:</p>",
     "alternativas": {
      "a": "Gestão ativa, que busca superar a rentabilidade do mercado por meio de escolhas táticas.",
      "b": "Gestão passiva, que busca replicar o comportamento do índice de referência.",
      "c": "Gestão alavancada restrita, focada em derivativos cambiais de curto prazo.",
      "d": "Gestão de crédito estruturado, voltada a debêntures de infraestrutura sem liquidez secundária."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A busca ativamente deliberada por superar o índice de referência caracteriza a gestão ativa, e não a passiva.",
      "c": "O uso de derivativos alavancados não define o conceito básico de replicação de índices na gestão passiva.",
      "d": "Debêntures sem liquidez não definem a essência de uma estratégia passiva baseada em benchmarks."
     }
    },
    {
     "id": "cpa-prod-24-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. Tanto na classe de renda fixa quanto na classe cambial, a norma impõe que no mínimo 80% do patrimônio esteja concentrado em ativos relacionados ao principal fator de risco correspondente (juros/inflação ou variação cambial).</p><p>As alternativas A, B e D erram ao aplicar o percentual da classe de ações ou propor patamares e rigores alheios à regra regulamentar.</p>",
     "enunciado": "<p>A regulamentação dos fundos de investimento exige que cada classe declare o seu principal fator de risco, determinando percentuais mínimos de concentração na carteira. Para a classe de renda fixa e para a classe cambial, o patamar mínimo obrigatório de alocação em ativos relacionados aos seus respectivos fatores de risco é de:</p>",
     "alternativas": {
      "a": "50% do patrimônio líquido do fundo.",
      "b": "67% do patrimônio líquido do fundo.",
      "c": "80% do patrimônio líquido do fundo.",
      "d": "100% integral e exclusivo do patrimônio líquido, sem tolerância a caixa."
     },
     "gabarito": "c",
     "feedback": {
      "a": "O patamar de 50% é inferior ao teto de concentração exigido pela norma regulamentar para essas classes.",
      "b": "O piso de 67% refere-se obrigatoriamente à classe de ações, e não à renda fixa ou cambial.",
      "d": "A exigência regulamentar prevê no mínimo 80%, permitindo margens de caixa para gestão de liquidez, e não 100% inflexíveis."
     }
    },
    {
     "id": "cpa-prod-24-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. A classe de ações exige no mínimo 67% do patrimônio em ações e equivalentes. Cumprido esse patamar, o fundo ganha o regime tributário diferenciado de 15% cobrado exclusivamente no resgate, sem o come-cotas semestral.</p><p>As alternativas A, C e D propõem composições de renda fixa ou derivativos puros que não conferem esse enquadramento e benefício fiscal específico.</p>",
     "enunciado": "<p>Um investidor busca uma alocação em fundos de ações com o objetivo de obter eficiência tributária e exposição ao mercado de capitais brasileiro. Para que o fundo de ações desfrute do benefício de tributação restrita a 15% apenas no resgate e sem a incidência do come-cotas semestral, a carteira deve manter uma concentração mínima de:</p>",
     "alternativas": {
      "a": "50% em debêntures incentivadas de infraestrutura.",
      "b": "67% em ações e ativos equivalentes admitidos à negociação em mercado organizado.",
      "c": "80% em títulos públicos federais pós-fixados indexados à taxa Selic.",
      "d": "100% em contratos futuros de índice Ibovespa sem manutenção de caixa."
     },
     "gabarito": "b",
     "feedback": {
      "a": "Debêntures de infraestrutura pertencem ao universo de renda fixa incentivada, e não cumprem a exigência de ações.",
      "c": "Títulos públicos federais atrelados à Selic compõem a renda fixa tradicional, sujeita ao come-cotas semestral.",
      "d": "Exigir 100% em derivativos futuros sem caixa inviabiliza a liquidez operacional e de resgates do fundo."
     }
    },
    {
     "id": "cpa-prod-24-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. A norma estabelece tetos de margem bruta para as classes destinadas ao público em geral: até 20% para renda fixa, até 40% para ações e cambial, e até 70% para a classe multimercado.</p><p>As alternativas A, B e D confundem os limites normativos entre as classes ou atribuem ausência indevida de teto para o varejo geral.</p>",
     "enunciado": "<p>Um gestor de fundos classificados como multimercado para o público em geral deseja adotar estratégias mais arrojadas de derivativos e alavancagem para buscar retornos diferenciados no mercado. De acordo com os limites operacionais fixados pelas normas para o público em geral, o teto de exposição a risco de capital medido pela margem bruta exigida para a classe multimercado é de:</p>",
     "alternativas": {
      "a": "Até 20% do patrimônio líquido.",
      "b": "Até 40% do patrimônio líquido.",
      "c": "Até 70% do patrimônio líquido.",
      "d": "Ilimitado e sem restrições, independentemente do tipo de investidor."
     },
     "gabarito": "c",
     "feedback": {
      "a": "O teto de 20% refere-se exclusivamente aos fundos da classe de renda fixa destinados ao público em geral.",
      "b": "O teto de 40% aplica-se às classes de ações e cambial voltadas ao público em geral.",
      "d": "A ausência de teto regulamentar restringe-se apenas a fundos destinados exclusivamente a investidores profissionais."
     }
    },
    {
     "id": "cpa-prod-24-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a B. O fundo multimercado destaca-se pela alta liberdade de alocação, combinando diversos fatores de risco sem ter compromisso normativo de concentração em nenhum deles.</p><p>As alternativas A, C e D incorrem em erros técnicos ao confundir ações com títulos de dívida (risco de crédito), ignorar a liquidez em fundos abertos ou inverter os custos das taxas de gestão ativa e passiva.</p>",
     "enunciado": "<p>Analise as características, os fatores de risco e a dinâmica de perdas aplicáveis aos diferentes fundos de investimento e assinale a alternativa correta:</p>",
     "alternativas": {
      "a": "O risco de crédito está presente de forma idêntica em todas as classes, sendo que a falência de uma empresa cujas ações compõem um fundo de ações gera calote direto no principal investido.",
      "b": "O fundo multimercado possui vários fatores de risco e caracteriza-se pela ausência de compromisso de concentração obrigatória em nenhum deles.",
      "c": "O risco de liquidez afeta apenas os fundos fechados, visto que os fundos abertos possuem garantia legal de liquidez instantânea pelo Banco Central em qualquer cenário.",
      "d": "A gestão ativa desfruta sempre de taxas de administração significativamente inferiores às da gestão passiva, por causa da ausência de custos operacionais com pesquisas de mercado."
     },
     "gabarito": "b",
     "feedback": {
      "a": "Ações representam frações de sociedade e não títulos de dívida, sofrendo risco de mercado (preço a zero) e não risco de crédito por inadimplência.",
      "c": "Fundos abertos também sofrem com o risco de liquidez caso os ativos da carteira tenham baixa negociabilidade frente aos pedidos de resgate.",
      "d": "A gestão ativa costuma cobrar taxas de administração mais altas (e não mais baixas) por causa do esforço analítico superior."
     }
    }
   ],
   "Tipos de fundos: renda fixa, ações, cambiais, multimercados e FI-Infra": [
    {
     "id": "cpa-prod-25-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. A classe de um fundo decorre estritamente do fator de risco predominante declarado em sua política de investimento, exigindo o cumprimento de um piso de concentração normativo correspondente.</p><p>As alternativas B, C e D desviam-se do conceito regulamentar ao atribuir o enquadramento a métricas de bolsa, porte de administrador ou auditorias.</p>",
     "enunciado": "<p>A definição da classe de um fundo de investimento perante a regulamentação não se apoia no nome comercial escolhido, mas sim em um critério normativo específico. Esse fator determinante corresponde ao:</p>",
     "alternativas": {
      "a": "Fator de risco predominante declarado na política de investimento, que exige o cumprimento de um percentual mínimo de concentração.",
      "b": "Volume financeiro médio diário negociado pelas cotas do fundo no pregão da B3.",
      "c": "Porte financeiro e patrimonial da instituição administradora contratada pelo gestor.",
      "d": "Prazo médio de vigência dos contratos de auditoria independente cadastrados na CVM."
     },
     "gabarito": "a",
     "feedback": {
      "b": "A negociação diária em bolsa define a liquidez do fundo ou o condomínio, e não o enquadramento da classe regulamentar.",
      "c": "O tamanho financeiro da instituição administradora não interfere no estabelecimento da classe do fundo.",
      "d": "A auditoria independente presta serviços de verificação contábil, sem relação com a definição do tipo de fundo."
     }
    },
    {
     "id": "cpa-prod-25-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. A regulamentação estabelece que a classe cambial deve manter no mínimo 80% do seu patrimônio em ativos relacionados ao fator de risco de moeda estrangeira ou cupom cambial.</p><p>As alternativas A, B e D erram ao estipular percentuais incorretos ou rigores de alocação física que não constam nas normas de fundos cambiais.</p>",
     "enunciado": "<p>Um investidor procura um produto estruturado para se proteger contra a flutuação da moeda estrangeira e decide aplicar seus recursos em um fundo da classe cambial. O percentual mínimo obrigatório de alocação em ativos relacionados a esse fator de risco exige que o fundo mantenha:</p>",
     "alternativas": {
      "a": "Pelo menos 20% do patrimônio líquido em moeda.",
      "b": "Pelo menos 50% do patrimônio líquido em derivativos.",
      "c": "No mínimo 80% do patrimônio líquido em ativos ligados à moeda estrangeira ou ao cupom cambial.",
      "d": "100% integral e exclusivo do patrimônio em depósitos à vista em dólares."
     },
     "gabarito": "c",
     "feedback": {
      "a": "O patamar de 20% representa o teto de margem bruta da renda fixa, e não o piso de concentração cambial.",
      "b": "O percentual de 50% não corresponde ao piso normativo regulamentado para fundos cambiais.",
      "d": "A norma exige um piso de 80%, permitindo flexibilidade de caixa e gestão, e não uma alocação travada em 100% de depósitos físicos."
     }
    },
    {
     "id": "cpa-prod-25-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. O FI-Infra deve manter no mínimo 85% do seu patrimônio líquido em ativos incentivados de infraestrutura (como debêntures incentivadas), proporcionando isenção de Imposto de Renda para os rendimentos distribuídos à pessoa física.</p><p>As alternativas B, C e D cometem erros conceituais e fiscais ao alterar o público beneficiado, o tipo de ativo ou o piso regulamentar de alocação.</p>",
     "enunciado": "<p>Um investidor pessoa física busca opções eficientes de alocação e decide aplicar seus recursos em um Fundo de Investimento em Infraestrutura (FI-Infra). Sobre as regras de composição e os benefícios fiscais aplicáveis a esse veículo, constata-se que:</p>",
     "alternativas": {
      "a": "O fundo deve manter no mínimo 85% do patrimônio líquido em ativos incentivados de infraestrutura, garantindo isenção de Imposto de Renda sobre os rendimentos distribuídos à pessoa física.",
      "b": "O FI-Infra exige alocação integral em ações de companhias abertas, oferecendo isenção fiscal apenas para pessoas jurídicas.",
      "c": "O fundo possui isenção total de Imposto de Renda para qualquer tipo de investidor, inclusive corporativo, sem exigência de piso mínimo de ativos.",
      "d": "A alocação mínima em debêntures de infraestrutura é de 50%, com tributação regressiva idêntica à da renda fixa tradicional."
     },
     "gabarito": "a",
     "feedback": {
      "b": "O FI-Infra investe em dívidas de infraestrutura (como debêntures incentivadas), e não em ações de companhias abertas.",
      "c": "A isenção tributária no FI-Infra é destinada exclusivamente à pessoa física, visto que a pessoa jurídica paga alíquota de 15%.",
      "d": "O piso normativo de ativos incentivados é de 85% (com transição de 67% nos dois primeiros anos), e não de 50%."
     }
    },
    {
     "id": "cpa-prod-25-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. Embora o multimercado não possua compromisso de concentração em nenhum fator de risco específico, ele não tem alavancagem livre, pois a norma impõe um teto de margem bruta de até 70% do patrimônio líquido para classes destinadas ao público em geral.</p><p>As alternativas B, C e D propõem obrigações de alocação fixa, ausência total de tetos de margem ou pisos de concentração que contrariam a regra do multimercado.</p>",
     "enunciado": "<p>Um cliente argumenta que os fundos multimercado destinados ao público em geral podem adotar estratégias totalmente livres de controles e alavancar o patrimônio de forma irrestrita. Ao orientar esse investidor, você esclarece corretamente que:</p>",
     "alternativas": {
      "a": "O multimercado não possui fator de risco predominante, mas a norma impõe tetos estritos de margem bruta, limitando a alavancagem a até 70% do patrimônio líquido para o público em geral.",
      "b": "O multimercado é obrigado por lei a manter pelo menos 50% da carteira atrelada a títulos públicos federais pós-fixados.",
      "c": "O fundo multimercado possui alavancagem totalmente livre e ilimitada para o varejo, operando sem limites de margem bruta.",
      "d": "A classe multimercado exige concentração mínima de 80% em ativos cambiais de alta volatilidade."
     },
     "gabarito": "a",
     "feedback": {
      "b": "A imposição de manter metade dos recursos em títulos públicos descaracteriza a liberdade de alocação do multimercado.",
      "c": "A liberdade de composição de fatores não significa ausência de limites regulamentares; há teto de margem bruta para o público em geral.",
      "d": "O multimercado caracteriza-se justamente pela ausência de compromisso de concentração em um único fator de risco."
     }
    },
    {
     "id": "cpa-prod-25-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a D, pois trata-se da única alternativa incorreta (atendendo ao comando da questão). A isenção de Imposto de Renda no FI-Infra beneficia exclusivamente a pessoa física, visto que a pessoa jurídica está sujeita à tributação de 15%.</p><p>As alternativas A, B e C descrevem fatos plenamente exatos: a possibilidade de prejuízo em renda fixa, a utilidade do fundo cambial para hedge, e o piso de 67% para a classe de ações.</p>",
     "enunciado": "<p>Analise as características estruturais, os fatores de risco e os limites regulamentares aplicáveis aos diferentes tipos de fundos de investimento e assinale a alternativa incorreta:</p>",
     "alternativas": {
      "a": "Um fundo classificado como renda fixa pode apresentar rendimento negativo, pois está exposto ao risco de mercado decorrente da marcação a mercado e ao risco de crédito de emissores privados.",
      "b": "O fundo cambial serve primordialmente para proteger o investidor contra a flutuação da moeda estrangeira, não se confundindo com o desempenho financeiro de empresas exportadoras.",
      "c": "A classe de ações exige uma concentração mínima de 67% do patrimônio em ações e ativos equivalentes negociados em mercado organizado.",
      "d": "O FI-Infra garante isenção total de Imposto de Renda tanto para investidores pessoas físicas quanto para pessoas jurídicas corporativas sem distinção de alíquotas."
     },
     "gabarito": "d",
     "feedback": {
      "a": "A possibilidade de rendimento negativo por risco de mercado e de crédito em renda fixa é verídica.",
      "b": "A função de hedge cambial e a separação conceitual frente a ações de empresas exportadoras estão corretas.",
      "c": "O piso de concentração de 67% para a classe de ações está correto e respaldado pela norma."
     }
    }
   ],
   "Taxas, encargos, assembleias e direitos do cotista": [
    {
     "id": "cpa-prod-26-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. A taxa de administração é provisionada por dia útil e apropriada como despesa da classe, sendo debitada diretamente da cota antes que a rentabilidade seja calculada e divulgada ao público.</p><p>As alternativas A, C e D erram ao sugerir boletos físicos avulsos, cobranças únicas no resgate ou confusão com a dedução dos impostos federais.</p>",
     "enunciado": "<p>Em relação à forma de cobrança e ao impacto da taxa de administração sobre os rendimentos de um fundo de investimento aberto regulado pela CVM, é correto afirmar que:</p>",
     "alternativas": {
      "a": "A taxa é cobrada por meio de um boleto bancário enviado mensalmente ao endereço residencial do cotista.",
      "b": "A taxa é provisionada por dia útil, sendo deduzida diretamente do valor da cota antes de ser divulgada a rentabilidade.",
      "c": "O valor da taxa incide unicamente no momento do resgate total ou parcial das cotas pelo investidor.",
      "d": "A rentabilidade divulgada pelas plataformas de investimento já vem líquida tanto da taxa de administração quanto do Imposto de Renda."
     },
     "gabarito": "b",
     "feedback": {
      "a": "O cotista nunca recebe boletos ou faturas separadas, pois os custos de administração não cobram valores por fora.",
      "c": "A provisão ocorre diariamente de forma contínua no patrimônio da classe, e não apenas no momento do resgate.",
      "d": "A rentabilidade divulgada é líquida da taxa de administração, mas é sempre bruta de Imposto de Renda."
     }
    },
    {
     "id": "cpa-prod-26-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. A norma estabelece uma lista taxativa de encargos que podem ser debitados diretamente da classe, sendo que a taxa de administração e a de gestão fazem parte dessa relação oficial.</p><p>As alternativas B, C e D erram ao repassar custos operacionais internos do banco aos cotistas, distorcer a regra de performance na renda fixa ou inventar rateios não previstos.</p>",
     "enunciado": "<p>Ao analisar a estrutura de custos de um fundo de investimento, o investidor depara-se com o conceito de encargos da classe. Sobre essa lista regulamentada de despesas, é correto afirmar que:</p>",
     "alternativas": {
      "a": "A lista de encargos é taxativa, sendo que as próprias taxas de administração e de gestão figuram entre as despesas que podem ser debitadas da classe.",
      "b": "Os encargos englobam todas as despesas corporativas, de pessoal, marketing e infraestrutura do administrador do banco.",
      "c": "A taxa de performance é estipulada como um encargo obrigatório aplicável a qualquer fundo de renda fixa no país.",
      "d": "Despesas não previstas na lista oficial de encargos devem ser rateadas compulsoriamente entre os cotistas por meio de assembleia extraordinária."
     },
     "gabarito": "a",
     "feedback": {
      "b": "Custos de marketing, pessoal e infraestrutura do administrador saem do bolso dele, não integrando os encargos da classe.",
      "c": "A taxa de performance é vedada em fundos de renda fixa, salvo raras exceções qualificadas.",
      "d": "Despesas não previstas como encargos correm por conta do prestador de serviço essencial que as contratou, e não dos cotistas."
     }
    },
    {
     "id": "cpa-prod-26-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. O aumento de taxas exige a prévia aprovação da assembleia geral de cotistas e, em classes abertas, o acréscimo só produz eficácia após no mínimo 30 dias (ou o prazo de pagamento do resgate, o que for maior), dando tempo para o investidor sair do fundo se desejar.</p><p>As alternativas A, C e D ignoram o rito obrigatório de deliberação ou inventam validações regulatórias inexistentes na CVM.</p>",
     "enunciado": "<p>O administrador de um fundo de investimento de condomínio aberto deseja alterar o regulamento para aumentar o percentual da taxa de administração cobrada dos cotistas. Para que essa alteração de taxa passe a produzir efeitos válidos perante os investidores, a norma exige que:</p>",
     "alternativas": {
      "a": "A mudança ocorra de forma automática, independentemente de assembleia, desde que o banco envie um comunicado por e-mail no dia anterior.",
      "b": "A alteração seja aprovada em assembleia geral e, em classe aberta, só produza efeito após no mínimo 30 dias (ou o prazo de resgate, o que for maior).",
      "c": "O gestor reduza simultaneamente a taxa de performance para compensar o acréscimo nos custos de distribuição.",
      "d": "A CVM aprove o laudo de viabilidade operacional antes de convocar os cotistas minoritários."
     },
     "gabarito": "b",
     "feedback": {
      "a": "Aumentar a taxa de administração exige prévia aprovação em assembleia de cotistas, não sendo uma decisão unilateral automática.",
      "c": "A compensação com outras taxas não substitui a regra do prazo de eficácia e da aprovação exigida pela norma.",
      "d": "A CVM não analisa a viabilidade comercial nem aprova previamente aumentos de taxas em assembleias de fundos."
     }
    },
    {
     "id": "cpa-prod-26-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. A assembleia de cotistas de fundos de investimento instala-se com qualquer número de cotistas presentes, e as matérias em pauta são aprovadas pela maioria dos votos dos presentes, sendo o voto proporcional à quantidade de cotas detidas.</p><p>As alternativas B, C e D criam barreiras restritivas de quóruns mínimos ou unanimidades que não figuram nas regras de funcionamento das assembleias pela Resolução CVM 175.</p>",
     "enunciado": "<p>Uma assembleia geral de cotistas foi convocada formalmente para deliberar sobre a aprovação das demonstrações contábeis e a substituição do prestador de serviços essenciais de um fundo. Sobre os quóruns de instalação e funcionamento dessa assembleia, verifica-se que:</p>",
     "alternativas": {
      "a": "A assembleia instala-se com qualquer número de cotistas presentes e as deliberações são tomadas por maioria de votos dos presentes.",
      "b": "Exige-se a presença física de pelo menos 50% mais um de todos os cotistas inscritos para que a primeira convocação tenha validade jurídica.",
      "c": "As deliberações exigem aprovação unânime de todos os cotistas do fundo para qualquer mudança estatutária.",
      "d": "O quórum de instalação obriga a presença de cotistas detentores de no mínimo dois terços do patrimônio líquido total."
     },
     "gabarito": "a",
     "feedback": {
      "b": "A norma não exige quórum mínimo de presença para instalar a assembleia de fundos de investimento.",
      "c": "A exigência de unanimidade impediria a gestão coletiva; as decisões assembleares funcionam por maioria dos presentes.",
      "d": "Quóruns qualificados de dois terços aplicam-se a contextos específicos de OPA de sociedades, e não à instalação de assembleias ordinárias de fundos."
     }
    },
    {
     "id": "cpa-prod-26-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a D, pois trata-se da única alternativa incorreta (atendendo ao comando da questão). A norma estipula que a convocação da assembleia por iniciativa dos cotistas exige um grupo que detenha no mínimo 5% do total de cotas emitidas, e não apenas 1%.</p><p>As alternativas A, B e C descrevem premissas totalmente exatas e vigentes na regulação: as restrições e exceções de performance na renda fixa, o uso obrigatório da linha d'água, e as matérias privativas da assembleia de cotistas.</p>",
     "enunciado": "<p>Analise as regras aplicadas às taxas de performance, à competência privativa de assembleias e às disposições normativas da Resolução CVM 175 e assinale a alternativa incorreta:</p>",
     "alternativas": {
      "a": "A taxa de performance é vedada em fundos da classe Renda Fixa, com exceção de classes destinadas exclusivamente a investidor qualificado, fundos com compromisso de tratamento fiscal de longo prazo ou a classe Renda Fixa Dívida Externa.",
      "b": "O cálculo da taxa de performance deve utilizar uma linha d'água (cota base), sendo vedada a cobrança quando o valor da cota estiver abaixo dessa base atualizada pelo índice de referência.",
      "c": "A aprovação das demonstrações contábeis e o pedido de declaração judicial de insolvência da classe figuram entre as matérias de competência privativa da assembleia de cotistas.",
      "d": "Um único cotista que detenha 1% do total de cotas emitidas possui o poder legal conferido pela norma para convocar de forma autônoma uma assembleia geral de cotistas."
     },
     "gabarito": "d",
     "feedback": {
      "a": "A proibição de performance na renda fixa e suas exceções específicas estão corretas.",
      "b": "A regra da linha d'água vedando a cobrança de performance com cota abaixo da base atualizada é verídica.",
      "c": "A competência privativa da assembleia engloba contas contábeis e pedidos de insolvência, conforme a norma."
     }
    }
   ],
   "Tributação dos fundos de investimento": [
    {
     "id": "cpa-prod-27-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. O come-cotas ocorre semestralmente no último dia útil dos meses de maio e novembro, antecipando o Imposto de Renda devido pelo investidor.</p><p>As alternativas A, C e D erram ao apontar meses incorretos para a incidência do imposto periódico na indústria de fundos.</p>",
     "enunciado": "<p>Os fundos de investimento de renda fixa e multimercados tradicionais estão sujeitos à tributação periódica antecipada de Imposto de Renda conhecida como come-cotas. Essa retenção ocorre obrigatoriamente nos meses de:</p>",
     "alternativas": {
      "a": "Janeiro e julho de cada ano civil.",
      "b": "Último dia útil dos meses de maio e novembro.",
      "c": "Março e setembro, coincidindo com o balanço trimestral das debêntures.",
      "d": "Dezembro de cada ano, no ato de fechamento do exercício social das instituições."
     },
     "gabarito": "b",
     "feedback": {
      "a": "Os meses de janeiro e julho não integram o calendário de apuração periódica do come-cotas nos fundos.",
      "c": "O calendário não utiliza março e setembro como as datas de antecipação fiscal semestral.",
      "d": "O mês de dezembro não marca a cobrança do come-cotas, que ocorre duas vezes ao ano em outra época."
     }
    },
    {
     "id": "cpa-prod-27-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. Na apuração do come-cotas, o administrador reduz a quantidade de cotas do investidor na proporção exata do imposto devido, sem alterar o valor unitário da cota.</p><p>As alternativas A, C e D incorrem em erros operacionais ao sugerir boletos, débitos em contas correntes externas ou a redução do preço unitário do ativo.</p>",
     "enunciado": "<p>No que tange à mecânica operacional de cobrança do Imposto de Renda por meio do come-cotas em fundos de investimento abertos ou fechados sujeitos à regra, o administrador realiza a retenção da seguinte forma:</p>",
     "alternativas": {
      "a": "Emite um boleto bancário de cobrança física para pagamento voluntário pelo cotista até o quinto dia útil.",
      "b": "Reduz a quantidade de cotas do investidor no valor correspondente ao imposto devido, mantendo o valor unitário da cota inalterado.",
      "c": "Desconta o valor diretamente do saldo da conta corrente bancária vinculada à caderneta de poupança do cliente.",
      "d": "Reduz o valor unitário nominal de cada cota do fundo, mantendo a quantidade total de cotas intocada."
     },
     "gabarito": "b",
     "feedback": {
      "a": "O investidor nunca recebe boletos para quitar o come-cotas de forma manual e isolada.",
      "c": "O imposto é debitado de dentro do próprio fundo, e não de contas correntes avulsas da poupança.",
      "d": "O valor unitário da cota não sofre alteração; o que diminui é o número de cotas na custódia do cliente."
     }
    },
    {
     "id": "cpa-prod-27-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. Os fundos de curto prazo possuem uma tabela regressiva mais curta e onerosa: 22,5% para aplicações de até 180 dias e 20% para aplicações acima de 180 dias, não alcançando nunca a alíquota de 15%.</p><p>As alternativas B, C e D aplicam regras de longo prazo, alíquotas fixas incorretas ou falsas isenções de Imposto de Renda.</p>",
     "enunciado": "<p>Um cliente aplica seus recursos em um fundo de investimento classificado tributariamente como de curto prazo (com prazo médio da carteira igual ou inferior a 365 dias). Sobre as alíquotas aplicáveis aos rendimentos desse fundo, verifica-se que:</p>",
     "alternativas": {
      "a": "A alíquota máxima é de 22,5% e a mínima estagna em 20%, não havendo alíquota de 15% por maior que seja o prazo de permanência.",
      "b": "Aplica-se a tabela regressiva completa, atingindo o piso de 15% após o período de 720 dias.",
      "c": "A alíquota é fixa e única de 15% desde o primeiro dia de aplicação, sem come-cotas.",
      "d": "O fundo é isento de Imposto de Renda se o resgate ocorrer após o trigésimo dia de permanência."
     },
     "gabarito": "a",
     "feedback": {
      "b": "A tabela de curto prazo não atinge o patamar de 15%, diferentemente dos fundos de longo prazo.",
      "c": "A alíquota não é fixa de 15% e os fundos de curto prazo sofrem come-cotas periódico.",
      "d": "Não existe isenção de IR por decurso de prazo de 30 dias em fundos de curto prazo (o IOF é que zera no 30º dia)."
     }
    },
    {
     "id": "cpa-prod-27-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. Os fundos de ações que cumprem o requisito mínimo de 67% em ativos elegíveis não sofrem come-cotas. A tributação ocorre unicamente no resgate, aplicando-se alíquota única de 15% sobre o ganho líquido, com alíquota zero de IOF.</p><p>As alternativas A, C e D misturam regras de come-cotas, isenções de ações à vista e tabelas regressivas impróprias para fundos de ações.</p>",
     "enunciado": "<p>Um investidor aplicou em um fundo de ações tradicional (com carteira mantendo no mínimo 67% em ações e ativos equivalentes negociados em bolsa) e pretende resgatar os recursos após 250 dias. Sobre o tratamento fiscal dessa operação, é correto afirmar que:</p>",
     "alternativas": {
      "a": "O fundo sofre come-cotas semestral de 15% em maio e novembro e paga alíquota regressiva no resgate.",
      "b": "O fundo não sofre come-cotas semestral, sendo tributado exclusivamente no momento do resgate à alíquota única de 15% sobre o ganho, com IOF zero.",
      "c": "O ganho obtido é totalmente isento de Imposto de Renda se o total resgatado no mês não ultrapassar o teto de R$ 20.000,00.",
      "d": "Aplica-se a tabela regressiva de renda fixa de 22,5% a 15%, com retenção de imposto a cada trimestre."
     },
     "gabarito": "b",
     "feedback": {
      "a": "Os fundos de ações não sofrem come-cotas semestral e não seguem tabelas regressivas baseadas no prazo.",
      "c": "A isenção de R$ 20.000,00 refere-se à venda direta de ações no mercado à vista, não se estendendo aos resgates de cotas de fundos.",
      "d": "A tabela regressiva de renda fixa não se aplica a fundos de ações que mantêm o patamar mínimo de 67% em ativos de bolsa."
     }
    },
    {
     "id": "cpa-prod-27-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a B. A apuração tributária obedece a uma ordem estrita em cascata: o IOF regressivo é deduzido primeiro do rendimento bruto do resgate, e o Imposto de Renda incide apenas sobre o valor remanescente líquido de IOF.</p><p>As alternativas A, C e D cometem erros conceituais ao inverter a ordem dos descontos, inventar alíquotas somadas fictícias ou garantir isenções prematuras de IOF.</p>",
     "enunciado": "<p>Analise o caso de um investidor que realizou o resgate total de cotas de um fundo de investimento de curto prazo antes de completar o trigésimo dia de aplicação, obtendo um rendimento bruto positivo. Sobre a ordem de incidência dos encargos e tributos no momento desse resgate, avalie as opções e assinale a correta:</p>",
     "alternativas": {
      "a": "O Imposto de Renda é calculado sobre o rendimento bruto total, e o valor do IOF é deduzido posteriormente da conta corrente do cliente.",
      "b": "O IOF regressivo é deduzido primeiro do rendimento bruto, e o Imposto de Renda incide exclusivamente sobre o saldo remanescente líquido de IOF.",
      "c": "O IOF e o Imposto de Renda são cobrados de forma concomitante e somados em uma alíquota fixa única de 37,5% no primeiro dia.",
      "d": "Os resgates em fundos de curto prazo realizados antes de 30 dias contam com isenção total de IOF, incidindo apenas o come-cotas proporcional."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A ordem está invertida, pois o IOF deve ser descontado antes do cálculo do Imposto de Renda.",
      "c": "Os tributos não são somados em uma alíquota única de 37,5%, pois possuem fatos geradores e tabelas separadas.",
      "d": "O IOF é justamente o imposto que incide de forma regressiva nos primeiros 30 dias para coibir resgates precoces, não havendo isenção nesse período."
     }
    }
   ],
   "Fundos imobiliários (FIIs)": [
    {
     "id": "cpa-prod-28-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. Por força da Lei 8.668/1993, os Fundos de Investimento Imobiliário (FIIs) são obrigatoriamente constituídos sob a forma de condomínio fechado, sendo proibido o resgate de cotas diretamente no caixa do fundo.</p><p>As alternativas B, C e D erram ao propor modelos abertos ou mistos de resgate, que contrariam frontalmente o mandamento legal dos FIIs.</p>",
     "enunciado": "<p>Os Fundos de Investimento Imobiliário (FIIs) são veículos regulamentados que permitem ao investidor aplicar no setor imobiliário por meio do mercado de capitais. Sobre a forma de constituição e a modalidade de condomínio desses fundos, a lei determina que:</p>",
     "alternativas": {
      "a": "Sejam obrigatoriamente constituídos sob a forma de condomínio fechado, sendo expressamente proibido o resgate de cotas.",
      "b": "Funcionar obrigatoriamente como condomínio aberto, assegurando liquidez diária imediata de resgate direto no caixa do fundo.",
      "c": "Adotar o regime misto, permitindo resgates parciais a cada trimestre com incidência de multa contratual.",
      "d": "Operar sob o formato cooperativo aberto, com resgates de cotas condicionados à autorização assemblear prévia."
     },
     "gabarito": "a",
     "feedback": {
      "b": "A lei veda a estrutura de condomínio aberto para os FIIs, justamente pela baixa liquidez dos ativos imobiliários na carteira.",
      "c": "Não existe regime misto de resgates parciais com multas, pois a vedação de resgate é total na modalidade.",
      "d": "Os FIIs não operam como cooperativas abertas, mantendo a obrigatoriedade estrita de condomínio fechado."
     }
    },
    {
     "id": "cpa-prod-28-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. A legislação obriga o FII a distribuir aos cotistas no mínimo 95% dos lucros auferidos, apurados segundo o regime de caixa e com base em balanço ou balancete semestral encerrado em 30 de junho e 31 de dezembro.</p><p>As alternativas A, B e D distorcem o percentual legal mínimo de distribuição ou os prazos de apuração semestral exigidos.</p>",
     "enunciado": "<p>Os Fundos de Investimento Imobiliário distribuem resultados periódicos aos seus cotistas seguindo regras estritas definidas pela legislação. O percentual mínimo obrigatório de distribuição dos lucros auferidos, apurados segundo o regime de caixa, corresponde a:</p>",
     "alternativas": {
      "a": "50% dos lucros apurados em balanços anuais auditados.",
      "b": "75% dos lucros apurados em balancetes mensais.",
      "c": "95% dos lucros apurados com base em balanço ou balancete semestral encerrado em 30 de junho e 31 de dezembro.",
      "d": "100% de todo o patrimônio líquido acumulado, sem retenção de reservas."
     },
     "gabarito": "c",
     "feedback": {
      "a": "O piso legal de distribuição é bem superior a 50%, fixando-se em no mínimo 95% dos lucros.",
      "b": "A apuração não ocorre de forma mensal para fins do piso legal, mas sim com base semestral.",
      "d": "A lei exige a distribuição de no mínimo 95% do lucro caixa, e não a totalidade absoluta de 100% do patrimônio líquido."
     }
    },
    {
     "id": "cpa-prod-28-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. A isenção dos rendimentos para a pessoa física exige que o FII tenha no mínimo 100 cotistas, negocie suas cotas exclusivamente em bolsa ou balcão organizado, e que o beneficiário não detenha 10% ou mais das cotas nem receba mais de 10% dos rendimentos do fundo.</p><p>As alternativas A, C e D erram ao utilizar pisos antigos de cotistas, flexibilizar mercados informais ou ignorar os tetos individuais de participação.</p>",
     "enunciado": "<p>Um investidor pessoa física recebeu rendimentos periódicos distribuídos por um Fundo de Investimento Imobiliário (FII) negociado na bolsa e deseja entender a sua situação fiscal perante a Receita Federal. Para que esses rendimentos sejam isentos de Imposto de Renda para a pessoa física, o fundo e o cotista devem cumprir cumulativamente os seguintes requisitos:</p>",
     "alternativas": {
      "a": "O fundo precisa ter no mínimo 50 cotistas e as cotas devem ser negociadas exclusivamente em mercado balcão informal.",
      "b": "O fundo deve contar com no mínimo 100 cotistas, as cotas precisam ser negociadas exclusivamente em bolsa ou mercado de balcão organizado, e o cotista beneficiado não pode deter 10% ou mais das cotas nem receber mais de 10% dos rendimentos.",
      "c": "O fundo pode ter qualquer número de cotistas, desde que a pessoa física seja o único controlador do empreendimento imobiliário.",
      "d": "A isenção é concedida de forma automática a qualquer investidor, independentemente do percentual de participação ou do número de cotistas."
     },
     "gabarito": "b",
     "feedback": {
      "a": "O piso atualizado de cotistas é de 100 (e não 50), e a negociação precisa ocorrer em bolsa ou balcão organizado.",
      "c": "Controlar o empreendimento ou concentrar fatias elevadas desqualifica o benefício fiscal e atrai tributação de PJ.",
      "d": "A isenção não é automática nem irrestrita, exigindo o cumprimento rígido de limites de concentração e número de cotistas."
     }
    },
    {
     "id": "cpa-prod-28-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. O ganho de capital obtido na venda de cotas de FIIs é tributado à alíquota fixa de 20%, aplicável a qualquer beneficiário, inclusive pessoa jurídica isenta. A isenção de R$ 20.000,00 do mercado à vista não se aplica aos fundos imobiliários.</p><p>As alternativas B, C e D confundem o tratamento dos rendimentos com o ganho de capital ou estendem indevidamente isenções de ações aos FIIs.</p>",
     "enunciado": "<p>Um investidor obteve lucro na venda de cotas de um Fundo de Investimento Imobiliário (FII) realizadas no mercado secundário da B3. Sobre a tributação incidente sobre o ganho de capital apurado nessa alienação de cotas, verifica-se que:</p>",
     "alternativas": {
      "a": "Incide alíquota fixa de 20% sobre o ganho de capital, sendo vedada a aplicação da isenção mensal de R$ 20.000,00 aplicada às ações.",
      "b": "O ganho é totalmente isento de Imposto de Renda para a pessoa física, seguindo a mesma regra dos rendimentos mensais distribuídos.",
      "c": "Aplica-se a tabela regressiva da renda fixa (22,5% a 15%) de acordo com o prazo em que o investidor permaneceu com a cota.",
      "d": "A operação beneficia-se da isenção total de ganho de capital caso o volume total de vendas no mês permaneça abaixo de R$ 20.000,00."
     },
     "gabarito": "a",
     "feedback": {
      "b": "A isenção dos rendimentos mensais não se estende ao ganho de capital na venda das cotas.",
      "c": "A tabela regressiva de renda fixa não regula a negociação de cotas de FIIs no mercado secundário.",
      "d": "A isenção mensal de R$ 20.000,00 é exclusiva para ações no mercado à vista e ouro, não alcançando os FIIs."
     }
    },
    {
     "id": "cpa-prod-28-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a A, pois trata-se da única alternativa incorreta (atendendo ao comando da questão). Os cotistas de FIIs <strong>não possuem cobertura do FGC</strong>, visto que as cotas são ativos de renda variável negociados em bolsa e operam fora do balanço de instituições bancárias.</p><p>As alternativas B, C e D descrevem fatos plenamente exatos: o risco de vacância nos fundos de tijolo, a compensação de perdas restrita à mesma espécie, e a descaracterização fiscal caso o incorporador concentre mais de 25% das cotas.</p>",
     "enunciado": "<p>Analise as características estruturais, operacionais e fiscais dos Fundos de Investimento Imobiliário (FIIs) e assinale a alternativa incorreta:</p>",
     "alternativas": {
      "a": "Os cotistas de FIIs contam com a cobertura do Fundo Garantidor de Créditos (FGC) até o limite de R$ 250 mil por CPF em caso de insolvência do fundo.",
      "b": "Os fundos de tijolo investem diretamente em imóveis físicos e correm o risco típico de vacância caso os inquilinos devolvam os espaços.",
      "c": "As perdas apuradas na alienação de cotas de FIIs no mercado secundário possuem segregação estrita, podendo compensar apenas ganhos obtidos na alienação de cotas de fundos da mesma espécie.",
      "d": "Um FII que aplicar recursos em empreendimentos cujo incorporador ou construtor seja cotista detentor de mais de 25% das cotas perderá seu regime especial, sendo tributado como pessoa jurídica."
     },
     "gabarito": "a",
     "feedback": {
      "b": "O conceito de fundos de tijolo focados em imóveis físicos e expostos ao risco de vacância está correto.",
      "c": "A regra de compensação restrita de prejuízos de FII apenas com ganhos de FII está correta e respaldada pela norma.",
      "d": "A perda do regime fiscal caso o incorporador detenha mais de 25% das cotas é uma regra de prevenção verídica."
     }
    }
   ],
   "PGBL e VGBL: quando usar cada um": [
    {
     "id": "cpa-prod-29-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. O PGBL é um plano de previdência complementar aberta, ao passo que o VGBL é juridicamente estruturado como um seguro de pessoas, sendo ambos fiscalizados pela Susep.</p><p>As alternativas B, C e D erram ao classificar os planos como fundos imobiliários, títulos de capitalização ou previdência pública do INSS.</p>",
     "enunciado": "<p>No que se refere à natureza jurídica e regulatória dos planos de previdência complementar aberta PGBL e VGBL, é correto afirmar que:</p>",
     "alternativas": {
      "a": "O PGBL é classificado como plano de previdência complementar, enquanto o VGBL possui natureza jurídica de seguro de pessoas.",
      "b": "Ambos são fundos de investimento imobiliário abertos fiscalizados diretamente pela CVM.",
      "c": "O VGBL é um título de capitalização de curto prazo vinculado às taxas do Banco Central.",
      "d": "O PGBL é um plano de benefício definido de previdência pública administrado pelo INSS."
     },
     "gabarito": "a",
     "feedback": {
      "b": "Os planos de previdência não são fundos imobiliários e a supervisão regulatória compete à Susep, e não à CVM.",
      "c": "O VGBL não é título de capitalização, mas sim um plano estruturado sob a modalidade de seguro de pessoas.",
      "d": "O PGBL integra a previdência complementar aberta, e não a previdência pública oficial gerida pelo INSS."
     }
    },
    {
     "id": "cpa-prod-29-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. Como o PGBL permite deduzir as contribuições na declaração de IRPF, o imposto no resgate incide sobre o valor total resgatado, englobando tanto o principal quanto os rendimentos.</p><p>As alternativas A, C e D cometem erros ao copiar a regra do VGBL, inventar isenções inexistentes ou fixar alíquotas equivocadas.</p>",
     "enunciado": "<p>Um investidor realiza aportes em um plano de previdência complementar aberta do tipo PGBL. Sobre a base de cálculo tributária aplicável no momento do resgate dos recursos acumulados, verifica-se que:</p>",
     "alternativas": {
      "a": "O imposto de renda incide exclusivamente sobre os rendimentos auferidos, isentando o principal aportado.",
      "b": "O imposto de renda incide sobre o valor total resgatado, compreendendo o capital e os rendimentos.",
      "c": "A operação é totalmente isenta de tributação federal, independentemente do regime escolhido.",
      "d": "Incide uma alíquota fixa de 10% sobre o saldo total, sem possibilidade de progressividade."
     },
     "gabarito": "b",
     "feedback": {
      "a": "Incidir apenas sobre os rendimentos é a regra aplicável ao VGBL, e não ao PGBL.",
      "c": "Os planos de previdência sofrem tributação no resgate, não existindo isenção federal incondicionada.",
      "d": "A alíquota no regime regressivo pode chegar a 10% após 10 anos, mas a incidência no PGBL ocorre sobre o valor total, e não de forma fixa e isolada."
     }
    },
    {
     "id": "cpa-prod-29-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. O PGBL exige que o investidor declare pelo modelo completo, contribua para a previdência oficial (ou seja aposentado/pensionista) e respeite o limite de dedução de até 12% da renda bruta anual tributável.</p><p>As alternativas A, C e D erram ao indicar o modelo simplificado, eliminar o teto de 12% ou inventar restrições operacionais falsas.</p>",
     "enunciado": "<p>Um cliente deseja utilizar as vantagens fiscais de um plano PGBL para deduzir suas contribuições da base de cálculo do Imposto de Renda. Para que esse benefício fiscal seja plenamente aproveitado, o investidor deve cumprir os seguintes requisitos legais cumulativos:</p>",
     "alternativas": {
      "a": "Utilizar a declaração simplificada do IRPF e ser isento de contribuições à previdência oficial.",
      "b": "Utilizar a declaração no modelo completo, contribuir para a previdência oficial (INSS) ou regime próprio (ou ser aposentado/pensionista), e respeitar o teto de dedução de 12% da renda bruta tributável.",
      "c": "Optar por qualquer modelo de declaração e realizar aportes ilimitados sem teto máximo dedutível.",
      "d": "Manter o plano em condomínio fechado de ações e nunca realizar portabilidades entre seguradoras."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A dedução no PGBL exige o modelo completo de declaração e vínculos com a previdência oficial, e não o modelo simplificado.",
      "c": "Há um teto legal restrito de dedução fixado em 12% da renda bruta anual tributável.",
      "d": "A restrição a condomínio fechado e a proibição de portabilidade não constituem regras para o usufruto do benefício fiscal do PGBL."
     }
    },
    {
     "id": "cpa-prod-29-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. A portabilidade na previdência complementar é permitida apenas entre planos da mesma modalidade (PGBL para PGBL e VGBL para VGBL), sem retenção de imposto e preservando o prazo de acumulação.</p><p>As alternativas A, C e D erram ao permitir portabilidade cruzada, exigir resgates intermediários ou zerar o prazo de contagem do imposto.</p>",
     "enunciado": "<p>Um cliente possui investimentos acumulados em um plano de previdência complementar aberta e deseja transferir seus recursos para outra instituição financeira sem sofrer retenção antecipada de imposto de renda. Sobre as regras normativas aplicáveis à portabilidade, constata-se que:</p>",
     "alternativas": {
      "a": "A portabilidade é livre e irrestrita entre PGBL e VGBL, permitindo migrações cruzadas a qualquer momento.",
      "b": "A portabilidade é permitida exclusivamente entre planos da mesma modalidade (PGBL para PGBL e VGBL para VGBL).",
      "c": "A portabilidade obriga o resgate total dos recursos, incidindo alíquota máxima de tabela regressiva na origem.",
      "d": "A transferência de recursos entre seguradoras zera a contagem de tempo para fins de apuração da tributação regressiva."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A portabilidade cruzada entre PGBL e VGBL é expressamente vedada pela norma regulamentar.",
      "c": "A portabilidade não caracteriza resgate, ocorrendo de forma direta entre as instituições sem retenção de imposto no trânsito.",
      "d": "A portabilidade preserva integralmente a contagem de tempo de acumulação para o cálculo da tabela de tributação."
     }
    },
    {
     "id": "cpa-prod-29-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a C, pois trata-se da única alternativa incorreta (atendendo ao comando da questão). O STF firmou tese de repercussão geral declarando <strong>inconstitucional</strong> a incidência do ITCMD sobre o repasse aos beneficiários de valores de VGBL e PGBL em caso de morte do titular.</p><p>As alternativas A, B e D descrevem fatos plenamente exatos: a isenção de come-cotas na previdência, a indicação correta do VGBL, e a exceção legal para aposentados deduzirem no PGBL.</p>",
     "enunciado": "<p>Analise as características estruturais, fiscais e sucessórias aplicáveis aos planos de previdência complementar aberta (PGBL e VGBL) e assinale a alternativa incorreta:</p>",
     "alternativas": {
      "a": "Os planos de previdência complementar aberta não sofrem a incidência periódica do come-cotas semestral em maio e novembro.",
      "b": "O VGBL é o produto adequado para clientes que utilizam a declaração simplificada do IRPF ou que já esgotaram o limite dedutível de 12% no PGBL.",
      "c": "O Supremo Tribunal Federal (STF) firmou entendimento de que incide o ITCMD sobre o repasse de valores e direitos de VGBL e PGBL aos beneficiários na hipótese de morte do titular.",
      "d": "Beneficiários de aposentadoria ou pensão concedidas pelo regime geral ou próprio estão dispensados da exigência de contribuir para o INSS para usufruir da dedução do PGBL no modelo completo."
     },
     "gabarito": "c",
     "feedback": {
      "a": "A ausência de come-cotas nos planos de previdência aberta é uma característica verdadeira e diferenciada.",
      "b": "A recomendação do VGBL para declaração simplificada ou excedente dos 12% está correta.",
      "d": "A exceção legal dispensando aposentados e pensionistas de recolher ao INSS para deduzir no PGBL é verídica."
     }
    }
   ],
   "Regimes de tributação progressivo e regressivo na previdência": [
    {
     "id": "cpa-prod-30-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. Nos resgates de planos sob o regime progressivo, a seguradora retém 15% na fonte como antecipação do imposto devido, valor que posteriormente é compensado ou ajustado na declaração anual de Imposto de Renda.</p><p>As alternativas A, C e D confundem as regras do regime progressivo com as alíquotas do regime regressivo ou inventam isenções.</p>",
     "enunciado": "<p>Ao contratar um plano de previdência complementar aberta, o investidor depara-se com duas opções de tributação no momento do resgate ou do recebimento do benefício: o regime progressivo e o regime regressivo. Sobre a alíquota aplicada especificamente no momento de um <strong>resgate</strong> sob o regime progressivo, é correto afirmar que:</p>",
     "alternativas": {
      "a": "Incide uma alíquota fixa e definitiva de 35%, independentemente do valor sacado ou da renda do cliente.",
      "b": "A segregação retém 15% na fonte a título de antecipação do imposto devido, que será objeto de ajuste na declaração anual de IRPF.",
      "c": "Aplica-se a tabela regressiva de 10% a 35% de acordo com o tempo de permanência do recurso.",
      "d": "Os resgates são totalmente isentos de retenção, cabendo ao banco cobrar o imposto apenas no óbito do titular."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A alíquota fixa de 35% pertence à primeira faixa do regime regressivo, e não ao regime progressivo.",
      "c": "A tabela baseada no tempo de permanência caracteriza o regime regressivo, e não o progressivo.",
      "d": "Os resgates no regime progressivo sofrem retenção obrigatória de antecipação, não existindo isenção total."
     }
    },
    {
     "id": "cpa-prod-30-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. O regime regressivo decresce a cada dois anos de acumulação (35%, 30%, 25%, 20%, 15%) até atingir o piso de 10% para prazos de acumulação superiores a dez anos.</p><p>As alternativas A, C e D citam alíquotas de outras tabelas fiscais que não correspondem ao piso da previdência regressiva.</p>",
     "enunciado": "<p>O regime de tributação regressivo na previdência complementar é estruturado com alíquotas decrescentes de acordo com o prazo de acumulação dos recursos. A menor alíquota prevista nessa tabela, aplicável aos recursos com prazo de acumulação superior a dez anos, corresponde a:</p>",
     "alternativas": {
      "a": "7,5%.",
      "b": "10%.",
      "c": "15%.",
      "d": "22,5%."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A alíquota de 7,5% pertence à tabela de rendas do IRPF comum, e não ao piso do regime regressivo da previdência.",
      "c": "A alíquota de 15% é o patamar intermediário do regressivo (acima de 8 até 10 anos) ou a retenção na fonte do progressivo.",
      "d": "O percentual de 22,5% refere-se à tabela de fundos de investimento de longo prazo ou à primeira faixa da renda fixa tradicional."
     }
    },
    {
     "id": "cpa-prod-30-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. Nos resgates de planos de previdência sob o regime regressivo, adota-se o critério PEPS (Primeiro a Entrar, Primeiro a Sair), onde cada aporte possui seu cronômetro próprio e os recursos mais antigos saem primeiro, beneficiando-se das alíquotas menores.</p><p>As alternativas B, C e D erram ao sugerir o rebaixamento de todo o histórico, aplicar regras de renda atuarial a resgates ou inverter o método para o UEPS.</p>",
     "enunciado": "<p>Um cliente acumula recursos em um plano PGBL há vários anos, realizando diversos aportes em datas diferentes, e decide fazer um resgate parcial. Optando pelo regime regressivo de tributação, a apuração do prazo de acumulação aplicável a esse resgate obedece à seguinte regra:</p>",
     "alternativas": {
      "a": "Utiliza-se o critério PEPS (Primeiro a Entrar, Primeiro a Sair), de modo que os aportes mais antigos são resgatados primeiro e contam com as menores alíquotas.",
      "b": "O prazo de todos os aportes é zerado no momento em que se faz um novo depósito na conta do plano.",
      "c": "Aplica-se obrigatoriamente a média ponderada de todos os aportes, independentemente de tratarse de resgate ou de renda atuarial.",
      "d": "Vigora o critério UEPS (Último a Entrar, Primeiro a Sair), tributando sempre o saldo recente com a alíquota máxima de 35%."
     },
     "gabarito": "a",
     "feedback": {
      "b": "Um depósito novo não zera o relógio do saldo antigo acumulado no plano.",
      "c": "A média ponderada aplica-se especificamente a rendas contratadas sob regime atuarial, e não aos resgates comuns.",
      "d": "O critério adotado para resgates é o PEPS, e não o UEPS, privilegiando os aportes mais antigos."
     }
    },
    {
     "id": "cpa-prod-30-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. Por força da legislação atual (Lei 14.803/2024), a opção pelo regime regressivo pode ser exercida até o momento da obtenção do benefício ou da requisição do primeiro resgate, tornando-se irretratável a partir desse marco.</p><p>As alternativas A, C e D distorcem o prazo limite de escolha, ignoram a irretratabilidade ou invertem o padrão automático do progressivo.</p>",
     "enunciado": "<p>No que tange ao momento de escolha e à definitividade da opção pelo regime de tributação (progressivo ou regressivo) em planos de previdência complementar, a legislação atual estabelece que:</p>",
     "alternativas": {
      "a": "A escolha deve ser feita obrigatoriamente no ato da assinatura da proposta de adesão e nunca mais pode ser alterada.",
      "b": "A opção pelo regime regressivo pode ser exercida até o momento da obtenção do benefício ou da requisição do primeiro resgate, sendo irretratável a partir de então.",
      "c": "O cliente pode alternar livremente entre o regime progressivo e o regressivo a cada ano fiscal, conforme sua conveniência tributária.",
      "d": "Caso o cliente não se manifeste no primeiro ano, o plano é enquadrado de forma automática no regime regressivo definitivo."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A exigência de escolha obrigatória e irrevogável na data da contratação foi alterada pela legislação vigente.",
      "c": "A opção escolhida é irretratável, não permitindo trocas anuais livres entre os regimes fiscalizados.",
      "d": "A ausência de manifestação de escolha mantém o participante no regime progressivo, que atua como o modelo padrão."
     }
    },
    {
     "id": "cpa-prod-30-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a A. No regime regressivo, o imposto retido é exclusivo e definitivo na fonte, de modo que um resgate ocorrido com prazo de acumulação de até dois anos sofre a incidência da alíquota máxima de 35%, sem possibilidade de restituição ou compensação na declaração anual.</p><p>As alternativas B, C e D cometem erros ao sugerir restituições em regime definitivo, misturar a tabela progressiva ou aplicar isenções indevidas.</p>",
     "enunciado": "<p>Analise o caso de um investidor que acumulou recursos em um plano VGBL por um período exato de 18 meses, optando pelo regime regressivo de tributação, e realizou o resgate total do saldo acumulado. Sobre os efeitos fiscais dessa operação, assinale a alternativa correta:</p>",
     "alternativas": {
      "a": "O imposto retido na fonte pela seguradora será definitivo, correspondendo à alíquota de 35%, sem direito a restituição ou ajuste na declaração anual.",
      "b": "O valor retido poderá ser totalmente restituído na declaração de ajuste anual do IRPF, caso o contribuinte comprove renda isenta.",
      "c": "O imposto cobrado será recalculado com base na tabela progressiva mensal de salários, gerando complemento a pagar.",
      "d": "A operação será isenta de Imposto de Renda pelo fato de o resgate ter ocorrido dentro do prazo de carência inicial de dois anos."
     },
     "gabarito": "a",
     "feedback": {
      "b": "O imposto do regime regressivo é exclusivo e definitivo na fonte, não havendo restituição na declaração anual.",
      "c": "O recálculo pela tabela progressiva mensal aplica-se ao regime progressivo, e não ao regressivo.",
      "d": "O resgate antes de dois anos não é isento, sofrendo a retenção da alíquota máxima de 35% do regime regressivo."
     }
    }
   ],
   "Conceitos técnicos da previdência complementar": [
    {
     "id": "cpa-prod-31-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. A taxa de carregamento remunera despesas administrativas e de distribuição, incidindo diretamente sobre o valor da movimentação (contribuições, portabilidades ou resgates), respeitando o teto regulatório de 10%.</p><p>As alternativas A, C e D confundem a taxa de carregamento com a taxa de administração ou aplicam a cobrança sobre lucros e rendimentos de forma incorreta.</p>",
     "enunciado": "<p>Em um plano de previdência complementar aberta, a taxa de carregamento e a taxa de administração cobrem despesas e serviços distintos. Sobre a base de cálculo da taxa de carregamento, é correto afirmar que ela incide sobre:</p>",
     "alternativas": {
      "a": "O patrimônio total acumulado no Fundo de Investimento Especialmente Constituído (FIE).",
      "b": "O valor de cada movimentação financeira, tais como contribuições, portabilidades ou resgates.",
      "c": "Exclusivamente os rendimentos líquidos auferidos pelas aplicações financeiras no período.",
      "d": "O montante total do saldo atuarial convertido em renda vitalícia mensal após a morte do titular."
     },
     "gabarito": "b",
     "feedback": {
      "a": "Incidir sobre o patrimônio acumulado é a regra da taxa de administração, e não da taxa de carregamento.",
      "c": "O carregamento não incide sobre os rendimentos da carteira, mas sim sobre os valores movimentados.",
      "d": "A conversão em renda atuarial não constitui a base de incidência da taxa de carregamento."
     }
    },
    {
     "id": "cpa-prod-31-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. A portabilidade é uma operação que blinda o investidor, pois não configura resgate (não há tributação no trânsito) e preserva o tempo de acumulação já conquistado para a tabela de imposto.</p><p>As alternativas A, B e D erram ao prever cobranças tributárias indevidas, perda do histórico de prazo ou permissão para portabilidade cruzada.</p>",
     "enunciado": "<p>A portabilidade de recursos entre planos de previdência complementar aberta é um mecanismo que permite transferir o saldo acumulado de uma instituição para outra. Acerca dos reflexos fiscais e temporais dessa operação, verifica-se que:</p>",
     "alternativas": {
      "a": "A portabilidade é tratada como um resgate parcial, sofrendo retenção de 15% de Imposto de Renda na fonte.",
      "b": "A transferência de recursos zera automaticamente o prazo de acumulação para fins de contagem da tabela regressiva de tributação.",
      "c": "A operação não sofre incidência de Imposto de Renda e o tempo de acumulação anterior é integralmente preservado e transferido para o novo plano.",
      "d": "A portabilidade pode ser realizada livremente entre planos de modalidades cruzadas, como de PGBL para VGBL."
     },
     "gabarito": "c",
     "feedback": {
      "a": "A portabilidade não é considerada um resgate, ocorrendo sem retenção de Imposto de Renda.",
      "b": "O tempo de acumulação não é zerado; a contagem de prazo viaja junto com o saldo transferido.",
      "d": "A portabilidade cruzada entre PGBL e VGBL é expressamente vedada, ocorrendo apenas entre a mesma modalidade."
     }
    },
    {
     "id": "cpa-prod-31-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. Na modalidade de renda vitalícia simples, a seguradora assume o risco de sobrevivência e paga o benefício até o fim da vida do titular; contudo, se houver falecimento precoce, o contrato se encerra e o saldo remanescente fica com a seguradora para cobrir os sobreviventes, sem virar herança.</p><p>As alternativas B, C e D incorrem em erros ao destinar o saldo a herdeiros na vitalícia simples, desmerecer o papel estatístico da tábua ou inverter o impacto de garantias adicionais na parcela.</p>",
     "enunciado": "<p>Um participante de um plano de previdência complementar deseja converter o saldo acumulado em uma renda mensal vitalícia simples. Sobre a dinâmica atuarial e o risco assumido nessa modalidade, é correto afirmar que:</p>",
     "alternativas": {
      "a": "A seguradora assume o risco de sobrevivência, pagando a renda até o falecimento do titular, sendo que, em caso de morte precoce, o saldo remanescente não vira herança.",
      "b": "O saldo remanescente retorna integralmente para os herdeiros legais do titular por meio de inventário, caso ele venha a falecer no primeiro mês de benefício.",
      "c": "A tábua atuarial utilizada é estática e desconsidera a expectativa de sobrevivência da população.",
      "d": "Contratar garantias adicionais de prazo mínimo aumenta o valor da parcela mensal recebida pelo cliente."
     },
     "gabarito": "a",
     "feedback": {
      "b": "Na renda vitalícia simples, o saldo remanescente não vira herança, ficando com a seguradora em caso de morte precoce.",
      "c": "A tábua atuarial é uma tabela estatística de probabilidade de sobrevivência e morte, e não uma ferramenta estática sem previsões.",
      "d": "A adição de garantias e proteções extras encarece o plano, resultando em parcelas mensais menores, e não maiores."
     }
    },
    {
     "id": "cpa-prod-31-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. Na fase de acumulação (diferimento), o saldo acumulado é do participante e, em caso de falecimento, é pago diretamente aos beneficiários indicados na proposta, na proporção definida pelo titular, sem passar pelas regras tradicionais de inventário e sem incidência de ITCMD.</p><p>As alternativas A, C e D erram ao obrigar inventários judiciais, envolver o FGC ou permitir a apropriação indevida do capital pela seguradora.</p>",
     "enunciado": "<p>Durante a fase de acumulação de um plano de previdência complementar aberta, o saldo financeiro acumulado pertence ao participante. Caso ocorra o falecimento do titular nessa fase de diferimento, o montante correspondente será destinado:</p>",
     "alternativas": {
      "a": "Automaticamente para o governo federal por meio de arrecadação de imposto de herança em inventário judicial obrigatório.",
      "b": "Aos beneficiários indicados livremente na proposta de adesão do plano, na proporção definida pelo participante.",
      "c": "Ao Fundo Garantidor de Créditos (FGC) para cobertura de eventuais perdas operacionais do banco distribuidor.",
      "d": "Exclusivamente à seguradora, que absorve todo o capital sem repassar valores a terceiros."
     },
     "gabarito": "b",
     "feedback": {
      "a": "O saldo não vai para o governo via inventário judicial, pois os valores da previdência na acumulação seguem regras de repasse direto.",
      "c": "O FGC não possui nenhuma relação com planos de previdência complementar aberta e não absorve esses saldos.",
      "d": "A seguradora não absorve o capital na fase de acumulação; o saldo pertence aos beneficiários designados."
     }
    },
    {
     "id": "cpa-prod-31-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a B. A norma fixa carência de 60 dias para a primeira portabilidade e intervalo mínimo de 60 dias entre uma portabilidade e a seguinte. Portada em 10 de março, a cliente só pode portar de novo a partir de 9 de maio.</p><p>Aproveite a conversa para desfazer os dois medos que aparecem nas alternativas. A portabilidade <strong>não</strong> é resgate: ela não sofre retenção de Imposto de Renda no trânsito entre as instituições. E ela <strong>preserva</strong> o tempo de acumulação já conquistado, que é o que define a alíquota no regime regressivo. Quem porta não volta para a estaca zero da tabela.</p><p>Vale ainda o alerta de conduta: um mês de rentabilidade não é base para trocar de plano. Previdência é produto de prazo longo, e o custo de decidir pelo retrovisor de trinta dias costuma ser maior que a diferença que motivou a troca.</p>",
     "enunciado": "<p>Uma cliente portou o plano de previdência dela para a sua instituição em 10 de março. Insatisfeita com a rentabilidade do primeiro mês, ela procura você em 5 de abril pedindo para portar de novo, agora para uma terceira seguradora. Você deve orientá-la de que:</p>",
     "alternativas": {
      "a": "A portabilidade pode ser feita imediatamente, porque não existe prazo entre uma operação e a seguinte.",
      "b": "A operação precisa aguardar, porque a norma exige intervalo mínimo de 60 dias entre uma portabilidade e a próxima.",
      "c": "A operação precisa ser convertida em resgate seguido de nova aplicação, com retenção de imposto na saída.",
      "d": "A nova portabilidade zera o tempo de acumulação já acumulado, então não vale a pena antes de dez anos."
     },
     "gabarito": "b",
     "feedback": {
      "a": "Existe intervalo mínimo, e ele é de 60 dias. Em 5 de abril ainda não passou.",
      "c": "Portabilidade nunca vira resgate. Não há retenção de imposto no trânsito.",
      "d": "O tempo de acumulação viaja junto com o saldo. A portabilidade preserva a contagem."
     }
    }
   ]
  }
 }
});
