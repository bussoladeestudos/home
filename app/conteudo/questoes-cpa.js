/* GERADO por outputs/questoes_para_js.py. NAO editar a mao.
   Fonte: _conteudo/cpa/questoes/**.yaml  ·  295 questoes em 59 topicos
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
   ],
   "Princípios para disponibilização de crédito e garantias": [
    {
     "id": "cpa-prod-32-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. O caráter mede a intenção de pagar, avaliando o histórico e o comportamento financeiro passado do tomador dentro dos cinco C's do crédito.</p><p>As alternativas B, C e D erram ao definir conceitos de garantias, patrimônio ou cenários externos que compõem os demais pilares da análise.</p>",
     "enunciado": "<p>Na análise de crédito realizada pelas instituições financeiras para avaliar o risco de um tomador, o pilar que analisa o comportamento, o histórico e a intenção prévia do cliente em honrar seus compromissos financeiros é denominado:</p>",
     "alternativas": {
      "a": "Caráter.",
      "b": "Colateral.",
      "c": "Capital.",
      "d": "Condições."
     },
     "gabarito": "a",
     "feedback": {
      "b": "Colateral refere-se estritamente às garantias reais ou pessoais oferecidas para respaldar a operação.",
      "c": "Capital avalia o patrimônio líquido e a estrutura financeira do devedor.",
      "d": "Condições medem o cenário macroeconômico externo, como inflação, juros e setor de atuação."
     }
    },
    {
     "id": "cpa-prod-32-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. O aval é a garantia pessoal restrita a títulos de crédito, onde o avalista responde de forma solidária e autônoma perante o credor.</p><p>As alternativas B, C e D misturam conceitos de garantias contratuais de fiança ou modalidades de garantias reais sobre bens.</p>",
     "enunciado": "<p>No âmbito das garantias pessoais (fidejussórias), o instrumento jurídico que se aplica de forma exclusiva a títulos de crédito, como cheques, notas promissórias e duplicatas, caracterizando-se pela solidariedade e pela autonomia da obrigação, é o:</p>",
     "alternativas": {
      "a": "Aval.",
      "b": "Fiança.",
      "c": "Penhor mercantil.",
      "d": "Alienação fiduciária resolúvel."
     },
     "gabarito": "a",
     "feedback": {
      "b": "A fiança é a garantia pessoal aplicada a contratos em geral, possuindo caráter acessório.",
      "c": "O penhor mercantil é uma garantia real de bens móveis, e não uma garantia pessoal.",
      "d": "A alienação fiduciária constitui uma garantia real de transferência de propriedade, e não um aval de títulos."
     }
    },
    {
     "id": "cpa-prod-32-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. A alienação fiduciária transfere a propriedade resolúvel do bem ao credor e deixa a posse direta com o devedor, sendo a garantia preferida dos bancos por causa do rito extrajudicial de execução.</p><p>As alternativas A, C e D incorrem em erros ao confundir a transferência de propriedade da alienação fiduciária com a hipoteca, fianças ou penhores.</p>",
     "enunciado": "<p>Um cliente obteve um financiamento imobiliário junto a um banco e utilizou o próprio imóvel adquirido como garantia da dívida. Sob o ponto de vista da modalidade de garantia real utilizada no crédito imobiliário moderno, que transfere a propriedade resolúvel ao credor enquanto o devedor mantém a posse direta, tem-se a:</p>",
     "alternativas": {
      "a": "Hipoteca convencional com averbação em cartório de registro de imóveis.",
      "b": "Alienação fiduciária de bem imóvel.",
      "c": "Fiança solidária subsidiária com benefício de ordem.",
      "d": "Penhor industrial de bens de raiz."
     },
     "gabarito": "b",
     "feedback": {
      "a": "Na hipoteca, o devedor mantém tanto a propriedade quanto a posse do imóvel, diferentemente da alienação fiduciária.",
      "c": "A fiança é uma garantia pessoal, e não uma garantia real vinculada a um imóvel.",
      "d": "O penhor recai sobre bens móveis, não se aplicando a imóveis financiados."
     }
    },
    {
     "id": "cpa-prod-32-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. Embora o penhor exija em regra a transferência da posse ao credor, a lei prevê expressamente exceções no penhor rural, industrial, mercantil e de veículos, onde o bem permanece com o devedor.</p><p>As alternativas A, C e D cometem erros ao generalizar a posse física pelo banco, confundir penhor com imóveis ou impedir a produção agrícola.</p>",
     "enunciado": "<p>Um produtor rural contratou uma linha de crédito agrícola e empenhou sua safra futura e seus maquinários como garantia da operação. Sobre as regras de constituição e posse aplicáveis a essa modalidade de garantia real (penhor), a norma estabelece que:</p>",
     "alternativas": {
      "a": "A posse dos bens empenhados deve ser transferida fisicamente de forma obrigatória para o cofre do banco credor no ato da contratação.",
      "b": "No penhor rural, industrial, mercantil e de veículos, os bens empenhados permanecem em poder do devedor, que assume a responsabilidade de guardá-los e conservá-los.",
      "c": "O penhor recai exclusivamente sobre bens imóveis urbanos registrados em cartório.",
      "d": "O credor assume a posse direta imediata de todas as safras e máquinas, interditando o uso produtivo pelo agricultor."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A transferência física da posse é a regra geral do penhor comum, mas há exceções expressas para o penhor rural, industrial e de veículos.",
      "c": "O penhor é uma garantia real restrita a bens móveis, e não a imóveis.",
      "d": "Interditar o uso produtivo anularia a capacidade de geração de receita do produtor rural, contrariando a finalidade da exceção legal."
     }
    },
    {
     "id": "cpa-prod-32-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a A. A fiança nasce com benefício de ordem, ou seja, o fiador responde de forma subsidiária e pode exigir que o credor execute antes os bens do devedor. Esse benefício, porém, é renunciável, e a cláusula de principal pagador com renúncia expressa é praxe nos contratos bancários. Com ela, o banco cobra o fiador de imediato.</p><p>As alternativas B, C e D erram ao tornar o benefício de ordem irrenunciável, ao dar à fiança a solidariedade que é do aval, ou ao classificar a fiança como garantia real.</p>",
     "enunciado": "<p>Um banco concedeu um empréstimo a uma empresa e exigiu um fiador pessoa física. No contrato, o fiador assinou cláusula declarando-se principal pagador e devedor solidário, com renúncia expressa ao benefício de ordem. Vencidas as parcelas sem pagamento, o banco quer cobrar o fiador de imediato, sem antes executar bens da empresa devedora. Sobre essa cobrança, é correto afirmar que:</p>",
     "alternativas": {
      "a": "O banco pode cobrar o fiador de imediato, porque a renúncia expressa ao benefício de ordem afasta a responsabilidade subsidiária que a fiança tem por regra.",
      "b": "O banco precisa executar antes todos os bens da empresa, porque o benefício de ordem é irrenunciável e protege o fiador em qualquer contrato.",
      "c": "A cobrança imediata é possível porque a fiança é solidária por natureza, tornando a cláusula de renúncia um detalhe sem efeito prático.",
      "d": "O banco precisa executar antes um bem do próprio fiador dado em garantia, porque a fiança é uma garantia real sobre o patrimônio dele."
     },
     "gabarito": "a",
     "feedback": {
      "b": "O benefício de ordem é renunciável. A própria norma admite a renúncia expressa, a assunção da condição de principal pagador e a insolvência do devedor como situações que afastam a subsidiariedade.",
      "c": "A fiança não é solidária por natureza, e é aí que mora a pegadinha: por regra ela é subsidiária, e só vira solidária pela cláusula. Quem é solidário e autônomo por natureza é o aval.",
      "d": "A fiança é garantia pessoal (fidejussória), e não real. Ela alcança o patrimônio geral do fiador, sem bem específico vinculado."
     }
    }
   ],
   "Cartão de crédito, crédito rotativo e cheque especial": [
    {
     "id": "cpa-prod-33-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. Os juros remuneratórios aplicados sobre o valor utilizado do cheque especial possuem trava regulatória limitada a 8% ao mês para pessoas naturais e microempresas.</p><p>As alternativas B, C e D incorrem em erros ao citar tarifas consideradas inconstitucionais pelo STF, cobranças antecipadas ou a exigência de garantias reais inexistentes.</p>",
     "enunciado": "<p>O cheque especial consiste em um limite de crédito emergencial atrelado diretamente à conta corrente do cliente, sendo caracterizado por incidir juros proporcionais aos dias em que a conta permaneceu no vermelho. Para essa modalidade destinada a pessoas naturais e microempresas, a regulamentação em vigor estabelece que:</p>",
     "alternativas": {
      "a": "As taxas de juros remuneratórios cobradas sobre o valor utilizado estão limitadas a 8% ao mês.",
      "b": "Há cobrança de uma tarifa fixa de disponibilização de 0,25% sobre os limites não utilizados.",
      "c": "Os juros são cobrados de forma antecipada e integral, independentemente do número de dias de utilização.",
      "d": "O banco exige a entrega de um bem imóvel em alienação fiduciária para liberar o limite na conta."
     },
     "gabarito": "a",
     "feedback": {
      "b": "A tarifa de disponibilização foi declarada inconstitucional pelo STF e não existe mais.",
      "c": "A cobrança dos juros é estritamente proporcional aos dias exatos em que a conta ficou no negativo, e não antecipada.",
      "d": "O cheque especial é uma linha sem garantia real, não exigindo alienação fiduciária de imóveis."
     }
    },
    {
     "id": "cpa-prod-33-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. O crédito rotativo é a modalidade acionada de forma automática quando o cliente paga qualquer valor entre o mínimo e o total da fatura, rolando o saldo devedor remanescente para o mês seguinte a juros compostos elevados.</p><p>As alternativas B, C e D indicam linhas de crédito corporativas ou de consumo específicas que não correspondem ao rotativo do cartão.</p>",
     "enunciado": "<p>Ao utilizar o cartão de crédito, o cliente pode optar pelo pagamento integral ou parcial da fatura mensal. Quando o pagamento efetuado fica abaixo do valor total e acima do mínimo exigido, ativa-se automaticamente o mecanismo de financiamento conhecido como:</p>",
     "alternativas": {
      "a": "Crédito rotativo.",
      "b": "Linha de capital de giro com carência de doze meses.",
      "c": "Desconto de recebíveis de duplicatas mercantis.",
      "d": "Antecipação de restituição do Imposto de Renda."
     },
     "gabarito": "a",
     "feedback": {
      "b": "Capital de giro é uma linha empresarial com finalidades e estruturas distintas do cartão de crédito de varejo.",
      "c": "O desconto de duplicatas atende ao mercado corporativo de recebíveis, sem relação com faturas de cartões de pessoas físicas.",
      "d": "A antecipação de IRPF é um empréstimo bancário específico desvinculado do saldo rotativo da fatura do cartão."
     }
    },
    {
     "id": "cpa-prod-33-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. O saldo devedor do rotativo só pode ser financiado até o vencimento da fatura subsequente, momento em que o banco é obrigado a oferecer uma linha de parcelamento em condições mais vantajosas.</p><p>As alternativas B, C e D contrariam a norma vigente ao permitirem rolagens prolongadas ou prazos dissociados do vencimento da fatura seguinte.</p>",
     "enunciado": "<p>Com o objetivo de evitar o efeito bola de neve das dívidas prolongadas no cartão de crédito, a regulamentação estabeleceu limites temporais rígidos para a permanência no crédito rotativo. O prazo máximo em que um saldo devedor pode permanecer financiado no rotativo antes de sofrer intervenção obrigatória é de:</p>",
     "alternativas": {
      "a": "Até o vencimento da fatura subsequente.",
      "b": "Até o limite de 12 meses consecutivos, renováveis mediante nova análise cadastral.",
      "c": "Até o prazo fixo de 30 dias corridos, independentemente da data de emissão das faturas.",
      "d": "Por tempo indeterminado, desde que o cliente pague o valor mínimo estipulado em todos os ciclos."
     },
     "gabarito": "a",
     "feedback": {
      "b": "O prazo não se estende por 12 meses no rotativo; a norma restringe severamente essa rolagem.",
      "c": "O marco temporal regulatório está atrelado ao ciclo de vencimento das faturas, e não a um prazo fixo genérico de 30 dias.",
      "d": "O pagamento contínuo do mínimo por tempo indeterminado no rotativo foi vedado pelas regras para coibir o endividamento excessivo."
     }
    },
    {
     "id": "cpa-prod-33-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. A regra determina que os juros e encargos do crédito rotativo e do parcelamento da fatura não podem superar o valor original da dívida, fazendo com que o débito total estacione no máximo no dobro do principal.</p><p>As alternativas B, C e D criam tetos nominais arbitrários, zerações de juros ou regras falsas sobre a exclusão do IOF.</p>",
     "enunciado": "<p>Desde janeiro de 2024, entrou em vigor uma importante trava matemática para proteger os consumidores endividados no cartão de crédito. Sobre o limite imposto aos juros e encargos acumulados no crédito rotativo e no parcelamento da fatura, estipula-se que:</p>",
     "alternativas": {
      "a": "Os juros e encargos cobrados não podem ultrapassar o valor original da dívida principal.",
      "b": "A dívida total acumulada fica limitada a um teto fixo de R$ 1.000,00 por CPF, independentemente do gasto.",
      "c": "Os bancos estão proibidos de cobrar qualquer taxa de juros após o trigésimo dia de atraso.",
      "d": "O IOF diário é incorporado ao teto dos encargos e não pode ser cobrado separadamente."
     },
     "gabarito": "a",
     "feedback": {
      "b": "A norma não estipula um teto nominal fixo de R$ 1.000,00 para todas as dívidas do país, mas sim uma proporção matemática atrelada ao principal.",
      "c": "A regra não zera os juros após 30 dias, mas limita o acúmulo total de encargos ao valor original.",
      "d": "O IOF fica expressamente fora do cálculo desse limite de encargos, mantendo sua incidência própria."
     }
    },
    {
     "id": "cpa-prod-33-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a A. O IOF nas linhas sem liberação única de recursos (como cheque especial e rotativo) é composto por uma alíquota diária (0,0082% ao dia para pessoa física) somada ao adicional fixo de 0,38%, tendo como base o somatório mensal dos acréscimos diários dos saldos devedores.</p><p>As alternativas B, C e D incorrem em erros graves ao inventar taxas fixas únicas, alegar isenções inexistentes ou exagerar na alíquota diária.</p>",
     "enunciado": "<p>Analise o caso de um cliente pessoa física que utilizou o limite do cheque especial e manteve saldo devedor na conta por um determinado período, incidindo sobre a operação as alíquotas do Imposto sobre Operações Financeiras (IOF). Sobre a incidência e o cálculo do IOF em operações de crédito sem valor liberado de uma só vez (como cheque especial e rotativo), é correto afirmar que:</p>",
     "alternativas": {
      "a": "Incide uma alíquota diária sobre o saldo devedor somada a uma alíquota adicional fixa de 0,38%, calculada sobre o somatório mensal dos acréscimos diários dos saldos devedores.",
      "b": "O IOF é cobrado uma única vez no primeiro dia de utilização, com alíquota fixa de 3%, sem incidência de taxas diárias.",
      "c": "As operações de cheque especial são totalmente isentas de IOF por constituírem serviços essenciais de conta corrente.",
      "d": "A alíquota diária do IOF para pessoa física no cheque especial é de 1% ao dia, sem qualquer limitação de teto anual."
     },
     "gabarito": "a",
     "feedback": {
      "b": "O IOF não consiste em uma taxa única de 3% no primeiro dia, pois incide de forma diária sobre o saldo devedor acumulado.",
      "c": "O cheque especial não é isento de IOF, sendo tributado por alíquotas federais específicas de crédito.",
      "d": "A alíquota diária padrão para pessoa física no crédito é de 0,0082% ao dia, e não de 1% ao dia."
     }
    }
   ],
   "Crédito consignado e crédito pessoal": [
    {
     "id": "cpa-prod-34-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. O crédito consignado possui as menores taxas entre as linhas sem garantia real porque a parcela é descontada diretamente na folha de pagamento ou no benefício, fazendo com que o banco receba na origem e reduza drasticamente o risco de inadimplência.</p><p>As alternativas A, C e D erram ao inventar alienações fiduciárias de salários, coberturas do FGC inexistentes ou subsídios fiscais governamentais.</p>",
     "enunciado": "<p>Entre as linhas de crédito sem garantia real disponíveis para pessoas físicas, o crédito consignado destaca-se por apresentar taxas de juros substancialmente inferiores às do crédito pessoal comum. O principal fator que justifica essa diferença de risco e custo é:</p>",
     "alternativas": {
      "a": "A exigência de alienação fiduciária sobre o salário mensal recebido pelo tomador.",
      "b": "O desconto da parcela diretamente na folha de pagamento ou benefício, garantindo o recebimento na origem antes de o cliente dispor dos recursos.",
      "c": "A cobertura integral e obrigatória do Fundo Garantidor de Créditos (FGC) para inadimplências de empréstimos consignados.",
      "d": "A subvenção fiscal direta concedida pelo Tesouro Nacional para zerar os custos administrativos dos bancos."
     },
     "gabarito": "b",
     "feedback": {
      "a": "Não existe alienação fiduciária sobre salários; o consignado fundamenta-se na autorização de desconto em folha.",
      "c": "Linhas de empréstimo consignado não possuem cobertura do FGC.",
      "d": "O Tesouro Nacional não subsidia o consignado de forma a zerar os custos operacionais dos bancos."
     }
    },
    {
     "id": "cpa-prod-34-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. O Código de Defesa do Consumidor assegura o direito à liquidação antecipada com a redução proporcional dos juros e encargos, sendo vedada a cobrança de qualquer tarifa por essa liquidação antecipada para pessoas físicas, microempresas e empresas de pequeno porte.</p><p>As alternativas B, C e D distorcem a norma ao exigir tarifas proibidas, negar o abatimento de juros ou restringir o direito de quitação.</p>",
     "enunciado": "<p>Um cliente contratou uma linha de crédito pessoal e, após pagar algumas parcelas, recebeu recursos extras e decidiu realizar a quitação antecipada total do saldo devedor. De acordo com as normas de proteção ao consumidor e do sistema financeiro, os encargos incidentes devem observar a seguinte regra:</p>",
     "alternativas": {
      "a": "O banco deve conceder redução proporcional dos juros e demais acréscimos relativos ao período que deixou de existir.",
      "b": "O cliente deve pagar obrigatoriamente a taxa de tarifa por liquidação antecipada fixada em contrato para compensar a perda do banco.",
      "c": "Os juros totais contratados são mantidos integralmente e cobrados sem qualquer abatimento proporcional de prazo.",
      "d": "A liquidação antecipada é proibida para empréstimos pessoais, sendo permitida apenas em financiamentos imobiliários."
     },
     "gabarito": "a",
     "feedback": {
      "b": "A cobrança de tarifa por liquidação antecipada é expressamente vedada para pessoas físicas, microempresas e EPPs.",
      "c": "O consumidor tem o direito legal à redução proporcional dos juros correspondentes ao período vincendo.",
      "d": "A liquidação antecipada é um direito garantido pelo CDC para qualquer contrato de crédito e financiamento."
     }
    },
    {
     "id": "cpa-prod-34-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. A portabilidade exige que o valor e o prazo da operação na instituição proponente fiquem estritamente limitados ao saldo devedor e ao prazo remanescente da dívida original, vedando trocos ou prazos maiores (que configurariam refinanciamento).</p><p>As alternativas B, C e D desrespeitam as travas de valor/prazo da portabilidade ou descrevem repasses diretos incorretos ao cliente.</p>",
     "enunciado": "<p>Um tomador possui um empréstimo consignado ativo em uma instituição financeira e deseja realizar a portabilidade dessa dívida para outro banco que oferece uma taxa de juros menor. Para que a portabilidade ocorra de forma regular perante a regulamentação, as condições da nova operação na instituição proponente devem respeitar o seguinte limite:</p>",
     "alternativas": {
      "a": "O valor e o prazo da nova operação não podem ser superiores ao saldo devedor e ao prazo remanescente da operação original.",
      "b": "O cliente pode aproveitar para solicitar um valor extra de \"troco\" em dinheiro vivo e estender o prazo original em até 12 meses.",
      "c": "A nova instituição pode duplicar o prazo remanescente, desde que mantenha a mesma modalidade de crédito.",
      "d": "A portabilidade exige a liberação de recursos em conta corrente para que o próprio cliente pague a dívida antiga."
     },
     "gabarito": "a",
     "feedback": {
      "b": "Conceder troco ou alongar o prazo além do saldo remanescente descaracteriza a portabilidade, tornando a operação um refinanciamento.",
      "c": "Estender o prazo da operação original viola a trava central da portabilidade, que restringe o prazo ao remanescente.",
      "d": "Na portabilidade, a instituição proponente quita a dívida diretamente junto à credora original, sem transitar dinheiro extra na conta do cliente."
     }
    },
    {
     "id": "cpa-prod-34-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. O Custo Efetivo Total (CET) consolida em um único percentual anual a taxa de juros, o IOF, os seguros e as tarifas da operação, sendo a métrica correta para comparar propostas de crédito.</p><p>As alternativas B, C e D citam índices de inflação, de construção civil ou referenciais monetários que não avaliam o custo global do empréstimo.</p>",
     "enunciado": "<p>Para orientar adequadamente um cliente que compara propostas de empréstimo com taxas nominais idênticas mas custos de tarifas e impostos diferentes, o gerente deve utilizar o indicador padronizado que consolida todos os encargos da operação. Esse indicador corresponde ao:</p>",
     "alternativas": {
      "a": "Custo Efetivo Total (CET).",
      "b": "Índice Nacional de Preços ao Consumidor Amplo (IPCA).",
      "c": "Custo Unitário Básico da Construção Civil (CUB).",
      "d": "Taxa Referencial (TR) acumulada do semestre."
     },
     "gabarito": "a",
     "feedback": {
      "b": "O IPCA mede a inflação oficial do país, e não o custo de uma operação de crédito bancário.",
      "c": "O CUB é um indicador de custos voltado ao setor da construção civil e incorporações imobiliárias.",
      "d": "A TR é um indexador de remuneração de cadernetas de poupança e alguns contratos antigos, e não um consolidador de tarifas de empréstimo."
     }
    },
    {
     "id": "cpa-prod-34-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a C, pois trata-se da única alternativa incorreta (atendendo ao comando da questão). A norma admite expressamente a portabilidade para modalidade de crédito diversa da original, havendo inclusive exceções em que a restrição de prazo não se aplica a essa mudança.</p><p>As alternativas A, B e D descrevem fatos plenamente exatos: o bloqueio por margem consignável, os subtetos do trabalhador celetista, e a isenção de tarifa de quitação antecipada para MPEs.</p>",
     "enunciado": "<p>Analise as características regulatórias aplicáveis aos limites de endividamento e às operações de crédito consignado e portabilidade e assinale a alternativa incorreta:</p>",
     "alternativas": {
      "a": "A margem consignável estabelece um teto de comprometimento da remuneração ou do benefício, bloqueando novas averbações caso o limite seja atingido.",
      "b": "No caso de trabalhadores celetistas regidos pela legislação específica, a margem global é de 40%, dividida em subtetos de 35% para empréstimos e 5% para cartão de crédito consignado.",
      "c": "A portabilidade de crédito é vedada para modalidades de crédito diversas, permitindo a transferência estrita exclusivamente para o mesmo produto idêntico de origem.",
      "d": "A vedação de cobrança de tarifa por liquidação antecipada aplica-se não apenas a pessoas físicas, mas também a microempresas e empresas de pequeno porte."
     },
     "gabarito": "c",
     "feedback": {
      "a": "O bloqueio de novas averbações pelo sistema do órgão pagador ao atingir a margem consignável é correto.",
      "b": "Os limites de 40% globais para celetistas (35% empréstimos e 5% cartão) estão corretos e respaldados pela norma.",
      "d": "A proibição de tarifa por liquidação antecipada estendida a micro e pequenas empresas é verídica."
     }
    }
   ],
   "Crédito Direto ao Consumidor (CDC)": [
    {
     "id": "cpa-prod-35-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. O CDC possui destinação específica, pois o banco aprova o crédito e repassa o valor diretamente ao lojista ou fornecedor, sem que o dinheiro passe pela conta corrente do consumidor.</p><p>As alternativas A, C e D erram ao copiar a mecânica do empréstimo pessoal livre, exigir garantias em ouro ou confundir o financiamento com títulos públicos.</p>",
     "enunciado": "<p>O Crédito Direto ao Consumidor (CDC) difere de um empréstimo pessoal comum por apresentar uma característica estrutural fundamental em sua liberação financeira. Essa peculiaridade consiste em:</p>",
     "alternativas": {
      "a": "Depositar o valor integral do empréstimo diretamente na conta corrente do tomador para livre utilização.",
      "b": "Exigir destinação específica, repassando o valor financiado diretamente ao lojista ou fornecedor do bem ou serviço.",
      "c": "Exigir obrigatoriamente a entrega de ouro físico na agência bancária como garantia soberana.",
      "d": "Funcionar como um título público federal negociado exclusivamente no mercado secundário da B3."
     },
     "gabarito": "b",
     "feedback": {
      "a": "O depósito do dinheiro livre na conta do cliente caracteriza o crédito pessoal, e não o CDC.",
      "c": "O CDC não exige depósito de ouro físico para a sua contratação.",
      "d": "O CDC é uma linha de financiamento ao consumo, e não um título público negociado em bolsa."
     }
    },
    {
     "id": "cpa-prod-35-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. Na alienação fiduciária de veículos, o banco passa a deter a propriedade resolúvel (que se extingue com a quitação) e o cliente fica com a posse direta para circular com o automóvel, constando o gravame no documento.</p><p>As alternativas B, C e D distorcem a titularidade do bem, ignoram o registro de gravame ou atribuem falsas propriedades ao Estado.</p>",
     "enunciado": "<p>No financiamento de veículos por meio do CDC com garantia real de alienação fiduciária, ocorre uma divisão específica de posições jurídicas sobre o bem adquirido entre a instituição financeira e o cliente. Essa relação estabelece que:</p>",
     "alternativas": {
      "a": "O banco detém a propriedade resolúvel do veículo e o cliente fica com a posse direta, constando a restrição de gravame no documento.",
      "b": "O cliente detém a propriedade definitiva e o banco assume unicamente a posse direta do automóvel.",
      "c": "A propriedade do veículo pertence ao governo federal até a quitação da última parcela do contrato.",
      "d": "O bem permanece sem qualquer restrição cartorária ou de trânsito, sem indicação de gravame."
     },
     "gabarito": "a",
     "feedback": {
      "b": "Inverter a propriedade e a posse está incorreto, pois o cliente tem a posse direta e o banco detém a propriedade resolúvel.",
      "c": "O governo federal não se torna proprietário do veículo financiado por bancos particulares.",
      "d": "O documento do veículo exibe obrigatoriamente a restrição de gravame vinculada ao financiamento."
     }
    },
    {
     "id": "cpa-prod-35-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. Como o CDC de varejo não possui bens físicos em garantia real (como uma televisão ou uma viagem), o risco de crédito é maior, o que eleva as taxas de juros cobradas em relação ao financiamento de automóveis.</p><p>As alternativas B, C e D erram ao impor taxas em dólar, cumulações ilegais de tarifas cadastrais ou indexações pós-fixadas ao IGP-M.</p>",
     "enunciado": "<p>Um cliente celebrou um contrato de CDC prefixado para a aquisição de bens de consumo no varejo, sem a constituição de garantia real sobre os itens comprados. Sobre as condições de risco e os encargos aplicáveis a essa operação, verifica-se que:</p>",
     "alternativas": {
      "a": "O CDC de varejo sem garantia real apresenta taxas de juros consideravelmente superiores às do financiamento de veículos, devido à ausência de bens apreensíveis em caso de inadimplência.",
      "b": "O contrato obrigatoriamente vincula o CET a uma taxa flutuante atrelada exclusivamente ao dólar comercial.",
      "c": "A Tarifa de Cadastro pode ser cobrada cumulativamente a cada renovação mensal de extratos solicitada pelo cliente.",
      "d": "Os juros são pós-fixados e calculados com base na variação diária da inflação medida pelo IGP-M."
     },
     "gabarito": "a",
     "feedback": {
      "b": "Os contratos de CDC costumam ser prefixados, sem vínculo forçado à flutuação do dólar comercial.",
      "c": "A Tarifa de Cadastro ocorre apenas no início do relacionamento e não pode ser cobrada de forma cumulativa por renovações.",
      "d": "O CDC adota predominantemente taxas prefixadas, e não taxas flutuantes atreladas ao IGP-M."
     }
    },
    {
     "id": "cpa-prod-35-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. A Tarifa de Cadastro remunera a pesquisa inicial de crédito e não pode ser cobrada cumulativamente, ao passo que o IOF diário possui uma trava regulatória que limita sua incidência a um teto máximo de 365 dias, mesmo em contratos mais longos.</p><p>As alternativas B, C e D inventam cobranças semestralmente renováveis, supostas isenções de IOF ou proibições inexistentes da tarifa cadastral.</p>",
     "enunciado": "<p>Sobre a cobrança da Tarifa de Cadastro e a incidência do Imposto sobre Operações Financeiras (IOF) em contratos de CDC, a regulamentação vigente determina que:</p>",
     "alternativas": {
      "a": "A Tarifa de Cadastro remunera a pesquisa em serviços de crédito no início do relacionamento e não pode ser cobrada cumulativamente, havendo no IOF diário uma trava limite calculada em 365 dias.",
      "b": "A Tarifa de Cadastro pode ser cobrada a cada semestre de vigência do contrato, e o IOF diário incide sem limite de prazo por toda a duração de um financiamento de cinco anos.",
      "c": "O IOF é isento em qualquer modalidade de CDC, sendo substituído por uma taxa fixa de administração cobrada pelo Banco Central.",
      "d": "A Tarifa de Cadastro é ilegal e proibida pelo Código de Defesa do Consumidor em todas as operações de crédito do país."
     },
     "gabarito": "a",
     "feedback": {
      "b": "A Tarifa de Cadastro não é renovável semestralmente e o IOF diário possui a trava limite de 365 dias.",
      "c": "O CDC sofre incidência de IOF (adicional fixo e diário), não existindo isenção ou substituição por taxas do Banco Central.",
      "d": "A Tarifa de Cadastro é lícita quando cobrada no início do relacionamento, não sendo proibida pelo CDC."
     }
    },
    {
     "id": "cpa-prod-35-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a A. Em caso de inadimplência no CDC de veículos, o credor pode escolher entre a via judicial clássica de busca e apreensão ou a via extrajudicial (via cartório com 20 dias para pagamento), criada pelo Marco Legal das Garantias.</p><p>As alternativas B, C e D cometem erros graves ao citar instâncias trabalhistas incorretas, aguardar prazos absurdos ou eliminar as notificações legais obrigatórias.</p>",
     "enunciado": "<p>Analise o caso de um consumidor que financiou um veículo por meio de um CDC com alienação fiduciária e, após pagar metade das prestações, entrou em atraso com as parcelas subsequentes. Avalie as vias de execução e retomada do bem disponíveis para a instituição financeira à luz da legislação e assinale a correta:</p>",
     "alternativas": {
      "a": "O banco pode adotar a tradicional via judicial de busca e apreensão ou optar pela via extrajudicial instituída pelo Marco Legal das Garantias, que exige notificação por cartório com prazo de 20 dias para pagamento.",
      "b": "A única via legal permitida no Brasil para reaver o veículo é o processo de execução hipotecária na justiça comum trabalhista.",
      "c": "O banco está obrigado a aguardar o término integral do prazo original do contrato de financiamento para só então acionar os órgãos de trânsito via mandado de segurança.",
      "d": "A retomada do veículo ocorre de forma sumária e privada no mesmo dia do atraso, sem qualquer notificação extrajudicial ou prazos de purga da mora."
     },
     "gabarito": "a",
     "feedback": {
      "b": "O financiamento de veículos não utiliza execução hipotecária trabalhista, mas sim busca e apreensão ou a via extrajudicial de bens móveis.",
      "c": "O banco não precisa aguardar o fim do contrato para cobrar o devedor inadimplente em atraso.",
      "d": "O rito extrajudicial exige notificação formal por cartório com prazo de 20 dias para pagamento, não ocorrendo de forma sumária e privada sem aviso."
     }
    }
   ],
   "Crédito imobiliário": [
    {
     "id": "cpa-prod-36-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. O SFH possui limites rígidos, fixando o teto de avaliação do imóvel em R$ 2,25 milhões e o custo efetivo máximo de juros ao mutuário em 12% ao ano.</p><p>As alternativas A, C e D incorrem em erros ao citar limites antigos de R$ 1,5 milhão ou confundir as regras reguladas do SFH com a liberdade do SFI.</p>",
     "enunciado": "<p>O Sistema Financeiro da Habitação (SFH) foi estruturado para incentivar a aquisição da casa própria por meio de condições reguladas e atrativas. Entre os limites impostos pelo SFH, o teto atual para o valor de avaliação do imóvel financiado e a taxa máxima de juros anual ao mutuário correspondem, respectivamente, a:</p>",
     "alternativas": {
      "a": "R$ 1,5 milhão e 6% ao ano.",
      "b": "R$ 2,25 milhões e 12% ao ano.",
      "c": "R$ 5 milhões e taxa livre sem teto fixado.",
      "d": "R$ 10 milhões e 15% ao ano."
     },
     "gabarito": "b",
     "feedback": {
      "a": "O limite de R$ 1,5 milhão e os juros de 6% estão desatualizados e não refletem as regras vigentes do SFH.",
      "c": "Limites de valores livres e ausência de tetos caracterizam o SFI, e não o SFH.",
      "d": "O SFH possui tetos estritos de valor e de juros, não chegando a esses patamares elevados."
     }
    },
    {
     "id": "cpa-prod-36-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. O uso do FGTS para pagamento de entrada, amortização ou redução de parcelas é restrito às operações vinculadas e enquadradas estritamente no Sistema Financeiro da Habitação (SFH).</p><p>As alternativas A, C e D erram ao permitir o FGTS no SFI ou em aplicações alheias à habitação popular e regulada.</p>",
     "enunciado": "<p>Um investidor deseja utilizar os recursos de sua conta vinculada do FGTS para amortizar o saldo devedor de um financiamento imobiliário. De acordo com as normas que regem o crédito imobiliário, o uso do FGTS é permitido exclusivamente em operações enquadradas no:</p>",
     "alternativas": {
      "a": "Sistema de Financiamento Imobiliário (SFI).",
      "b": "Sistema Financeiro da Habitação (SFH).",
      "c": "Mercado de crédito livre corporativo de curto prazo.",
      "d": "Fundo de Investimento em Participações (FIP)."
     },
     "gabarito": "b",
     "feedback": {
      "a": "O uso do FGTS é expressamente vedado nas operações do SFI.",
      "c": "Créditos corporativos de curto prazo não dão acesso ao saque ou uso do FGTS habitacional.",
      "d": "FIPs são fundos de participação em empresas, sem qualquer vínculo com a utilização do FGTS para habitação."
     }
    },
    {
     "id": "cpa-prod-36-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. O SFI destaca-se pela livre negociação de taxas e valores de imóveis sem uso de FGTS, enquanto o SFH submete-se a tetos de avaliação e juros, permitindo o uso do FGTS para moradia própria.</p><p>As alternativas B, C e D invertem os papéis dos sistemas, inventam limites de juros rígidos ou garantem uso indevido de FGTS.</p>",
     "enunciado": "<p>Ao comparar as características operacionais entre o Sistema Financeiro da Habitação (SFH) e o Sistema de Financiamento Imobiliário (SFI), constata-se que:</p>",
     "alternativas": {
      "a": "O SFI opera sem teto de valor de imóvel e sem limite regulatório de juros, sendo vedado o uso do FGTS, ao passo que o SFH impõe tetos e permite o FGTS.",
      "b": "O SFI é restrito exclusivamente a imóveis residenciais populares de até R$ 200 mil, enquanto o SFH financia galpões industriais.",
      "c": "Ambos os sistemas exigem obrigatoriamente a utilização de taxas de juros prefixadas limitadas a 8% ao ano.",
      "d": "O uso do FGTS é obrigatório e compulsório em todas as operações contratadas no SFI."
     },
     "gabarito": "a",
     "feedback": {
      "b": "Os papéis foram invertidos, pois o SFI financia grandes imóveis comerciais ou de alto padrão, e o SFH atende à habitação residencial.",
      "c": "O SFI possui taxas e condições livres, não se submetendo a limites fixos de 8% ao ano.",
      "d": "O FGTS é vedado no SFI, sendo exclusivo do SFH."
     }
    },
    {
     "id": "cpa-prod-36-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. Na execução extrajudicial da alienação fiduciária de imóveis, o devedor é intimado pelo oficial do registro de imóveis e dispõe de um prazo de 15 dias para purgar a mora, regularizando as parcelas atrasadas.</p><p>As alternativas B, C e D confundem o prazo de purga da mora com prazos de leilão, renegociações anuais ou prazos exíguos inexistentes.</p>",
     "enunciado": "<p>Um mutuário de um financiamento imobiliário garantido por alienação fiduciária entrou em inadimplência com suas obrigações mensais. O banco acionou o rito de execução extrajudicial em cartório, notificando o devedor. O prazo regulamentar concedido para que o mutuário possa purgar a mora (pagar os valores em atraso) é de:</p>",
     "alternativas": {
      "a": "15 dias contados da intimação pelo oficial do registro de imóveis.",
      "b": "60 dias corridos para o primeiro leilão público.",
      "c": "12 meses renováveis por mais um ano.",
      "d": "48 horas úteis para quitação integral do saldo devedor total."
     },
     "gabarito": "a",
     "feedback": {
      "b": "Os 60 dias representam o limite de prazo para a realização do leilão público após consolidada a propriedade, e não o prazo para purgar a mora.",
      "c": "Prazos de 12 meses aplicam-se a reestruturações contratuais longas, e não à purga da mora cartorária.",
      "d": "Não existe prazo exíguo de 48 horas para quitação total obrigatória sem direito à purga regular."
     }
    },
    {
     "id": "cpa-prod-36-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a A. Persistindo a inadimplência após o prazo de purga da mora, averba-se a consolidação da propriedade em nome do credor, que obrigatoriamente deve realizar o leilão público do imóvel em até 60 dias contados do registro.</p><p>As alternativas B, C e D incorrem em erros graves ao permitir a apropriação direta sem leilão, envolver o Banco Central ou exigir processos judiciais na justiça comum.</p>",
     "enunciado": "<p>Analise os procedimentos de execução extrajudicial previstos para a alienação fiduciária de imóveis e assinale a alternativa correta sobre as etapas subsequentes caso o devedor não pague o débito no prazo legal de purga da mora:</p>",
     "alternativas": {
      "a": "A propriedade do imóvel é consolidada em nome do credor fiduciário no registro de imóveis, ficando este obrigado a levar o bem a leilão público em até 60 dias contados da consolidação.",
      "b": "O banco fica automaticamente autorizado a transferir o imóvel para seu patrimônio definitivo e utilizá-lo como sede própria, sem precisar realizar leilões.",
      "c": "O imóvel é confiscado sumariamente pelo Banco Central para recomposição do compulsório bancário.",
      "d": "O credor é obrigado a ajuizar uma ação de execução forçada na justiça comum para que um juiz determine a desocupação forçada em até 48 horas."
     },
     "gabarito": "a",
     "feedback": {
      "b": "O banco não pode ficar com o imóvel em seu patrimônio definitivo sem submetê-lo ao leilão público obrigatório.",
      "c": "O Banco Central não confisca imóveis particulares para recomposição de compulsórios.",
      "d": "O rito da alienação fiduciária é extrajudicial em cartório, dispensando ações de execução forçada na justiça comum para essa fase."
     }
    }
   ],
   "Capital de giro e consórcio": [
    {
     "id": "cpa-prod-37-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. O capital de giro é um empréstimo de curto e médio prazo criado para cobrir o descompasso de caixa das empresas, permitindo honrar compromissos operacionais como salários, fornecedores e impostos.</p><p>As alternativas B, C e D confundem a linha com crédito de investimento imobiliário, com consórcios coletivos ou com aplicações financeiras.</p>",
     "enunciado": "<p>O capital de giro é uma linha de crédito voltada ao atendimento de necessidades operacionais das empresas. Sob o ponto de vista da finalidade e do prazo dessa modalidade, é correto afirmar que:</p>",
     "alternativas": {
      "a": "Destina-se a cobrir o descompasso de curto e médio prazo no fluxo de caixa entre contas a pagar e a receber.",
      "b": "Financia exclusivamente a construção de novas sedes empresariais e a aquisição de equipamentos industriais de longuíssimo prazo.",
      "c": "Aplica-se unicamente ao autofinanciamento coletivo fiscalizado pela CVM por meio de sorteios mensais.",
      "d": "Funciona como uma aplicação financeira de renda fixa isenta de Imposto de Renda para pessoas jurídicas."
     },
     "gabarito": "a",
     "feedback": {
      "b": "Financiar construções e sedes corporativas caracteriza o crédito de investimento de longo prazo, e não o capital de giro.",
      "c": "O autofinanciamento coletivo por sorteios descreve o consórcio, e não um empréstimo de capital de giro.",
      "d": "O capital de giro é um empréstimo tomado pela empresa, e não um título de aplicação financeira de renda fixa."
     }
    },
    {
     "id": "cpa-prod-37-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. A normatização, a supervisão, a fiscalização e a autorização de funcionamento das administradoras de consórcios competem exclusivamente ao Banco Central do Brasil.</p><p>As alternativas B, C e D atribuem incorretamente a fiscalização a órgãos de mercado de capitais, garantidores ou seguros privados.</p>",
     "enunciado": "<p>O órgão federal dotado de competência legal para normatizar, autorizar o funcionamento, supervisionar e fiscalizar o sistema de consórcios no Brasil é o:</p>",
     "alternativas": {
      "a": "Banco Central do Brasil (BCB).",
      "b": "Comissão de Valores Mobiliários (CVM).",
      "c": "Fundo Garantidor de Créditos (FGC).",
      "d": "Superintendência de Seguros Privados (Susep)."
     },
     "gabarito": "a",
     "feedback": {
      "b": "A CVM regula o mercado de capitais, ações e fundos de investimento, não administrando o sistema de consórcios.",
      "c": "O FGC é uma entidade privada que garante depósitos bancários, sem atribuição de fiscalização de consórcios.",
      "d": "A Susep fiscaliza seguros, previdência complementar aberta e capitalização, e não consórcios."
     }
    },
    {
     "id": "cpa-prod-37-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. A legislação estipula que as únicas duas formas legalmente admitidas de contemplação em um grupo de consórcio são o sorteio e o lance.</p><p>As alternativas B, C e D inventam critérios arbitrários, cobranças de juros vedadas ou escolhas subjetivas alheias à lei.</p>",
     "enunciado": "<p>Um cliente participa de um grupo de consórcio imobiliário e questiona seu gerente sobre as formas legalmente permitidas para alcançar a contemplação da carta de crédito nas assembleias mensais. A resposta correta é de que a contemplação ocorre exclusivamente por:</p>",
     "alternativas": {
      "a": "Sorteio ou lance.",
      "b": "Análise de crédito prévia ou tempo de relacionamento bancário.",
      "c": "Pagamento antecipado de juros remuneratórios à administradora.",
      "d": "Decisão arbitrária da assembleia de acionistas da instituição financeira."
     },
     "gabarito": "a",
     "feedback": {
      "b": "Análise de crédito e tempo de banco não dão direito à contemplação no consórcio.",
      "c": "O consórcio não cobra juros remuneratórios, sendo vedada essa forma de liberação do crédito.",
      "d": "A assembleia de consorciados não possui poder de escolher arbitrariamente quem será contemplado fora das regras."
     }
    },
    {
     "id": "cpa-prod-37-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. Quando a carta de crédito é reajustada, a prestação de todos os participantes do grupo sobe na mesma proporção, abrangendo inclusive os consorciados que já foram contemplados, garantindo recursos para as próximas entregas.</p><p>As alternativas B, C e D isentam indevidamente os contemplados, transferem o encargo para o fundo de reserva ou decretam liquidações falsas.</p>",
     "enunciado": "<p>Durante a vigência de um grupo de consórcio, a carta de crédito sofre reajustes periódicos para preservar o seu poder de compra (por exemplo, pelo INCC nos imóveis). Quando ocorre esse reajuste no valor da carta de crédito, a consequência prática para os participantes é a de que:</p>",
     "alternativas": {
      "a": "A parcela mensal de todos os participantes sofre reajuste na mesma proporção, inclusive a dos já contemplados.",
      "b": "Apenas os consorciados que ainda não foram contemplados pagam o reajuste, ficando os contemplados isentos.",
      "c": "A administradora absorve todo o impacto financeiro com recursos do fundo de reserva, mantendo as parcelas inalteradas.",
      "d": "O grupo é imediatamente liquidado e extinto pelo Banco Central."
     },
     "gabarito": "a",
     "feedback": {
      "b": "Os contemplados não ficam isentos, pois o reajuste atinge a parcela de todos para manter o caixa do grupo equilibrado.",
      "c": "O fundo de reserva serve para cobrir inadimplências, e não para absorver reajustes gerais de cartas de crédito.",
      "d": "O reajuste da carta não provoca a liquidação antecipada compulsória do grupo."
     }
    },
    {
     "id": "cpa-prod-37-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a A. O consorciado excluído tem direito à restituição da importância paga ao fundo comum, concorrendo às assembleias mensais do grupo juntamente com os ativos, porém apenas para efeito de devolução por sorteio.</p><p>As alternativas B, C e D erram ao prever restituições imediatas e integrais (incluindo taxas administrativas), confiscos absolutos de valores ou correções por taxas estranhas ao grupo.</p>",
     "enunciado": "<p>Analise o tratamento normativo aplicável aos consorciados excluídos (desistentes ou inadimplentes) em um grupo de consórcio e assinale a alternativa correta sobre a forma de restituição dos valores pagos:</p>",
     "alternativas": {
      "a": "O consorciado excluído continua concorrendo às assembleias mensais do grupo, exclusivamente para efeito de restituição dos valores pagos ao fundo comum por meio de sorteio.",
      "b": "O valor total pago, incluindo a taxa de administração e o fundo de reserva, é devolvido em parcela única no mês imediatamente seguinte à desistência.",
      "c": "O consorciado perde direito a qualquer restituição caso desista antes de completar 50% do prazo total do grupo.",
      "d": "Os valores são restituídos de forma imediata e integral com correção pela taxa Selic capitalizada diariamente."
     },
     "gabarito": "a",
     "feedback": {
      "b": "A devolução não é imediata no mês seguinte e não abrange a taxa de administração já retida.",
      "c": "O desistente possui direito à restituição, não perdendo integralmente os valores pagos ao fundo comum.",
      "d": "A restituição não ocorre de forma imediata nem é corrigida pela taxa Selic diária da forma descrita."
     }
    }
   ],
   "Conta corrente, depósitos, tarifas e atendimento bancário": [
    {
     "id": "cpa-prod-38-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. Como a conta corrente caracteriza-se como um depósito à vista com liquidez imediata, o saldo mantido pelo correntista não gera nenhum tipo de rendimento financeiro.</p><p>As alternativas B, C e D erram ao atribuir remunerações de juros, de poupança ou da taxa Selic a saldos de contas correntes.</p>",
     "enunciado": "<p>A conta corrente é classificada tecnicamente como um depósito à vista de livre movimentação. Sobre a remuneração aplicável ao saldo mantido em uma conta corrente comum de pessoa física, é correto afirmar que:</p>",
     "alternativas": {
      "a": "O saldo parado em conta corrente não gera rendimento financeiro ao correntista.",
      "b": "O saldo rende de forma automática o equivalente à taxa Selic acumulada do período.",
      "c": "Os recursos depositados rendem mensalmente a mesma taxa fixa da caderneta de poupança mais a TR.",
      "d": "O banco paga juros diários ao correntista sobre o saldo médio mantido na conta."
     },
     "gabarito": "a",
     "feedback": {
      "b": "A conta corrente comum não rende o equivalente à taxa Selic.",
      "c": "O rendimento da poupança aplica-se exclusivamente às contas de poupança, e não aos depósitos à vista em conta corrente.",
      "d": "Contas correntes comuns não remuneram o correntista com juros diários sobre o saldo mantido."
     }
    },
    {
     "id": "cpa-prod-38-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. O pacote de serviços essenciais gratuito inclui por mês, entre outros itens, quatro saques, dois extratos, duas transferências entre contas da própria instituição e dez folhas de cheque.</p><p>As alternativas B, C e D extrapolam os limites normativos ao prometer saques ilimitados, isenções de juros ou talões ilimitados.</p>",
     "enunciado": "<p>O pacote de serviços essenciais é uma garantia regulatória que oferece um piso de transações gratuitas mensais para correntistas pessoas físicas. Entre os itens incluídos nesse pacote sem cobrança de tarifas, encontram-se:</p>",
     "alternativas": {
      "a": "Quatro saques, dois extratos com a movimentação dos últimos trinta dias e duas transferências entre contas da própria instituição.",
      "b": "Dez saques mensais ilimitados em qualquer banco e cinco transferências via TED para terceiros.",
      "c": "Isenção integral de juros no cheque especial até o limite de R$ 500,00.",
      "d": "Fornecimento gratuito de talonários ilimitados de cheques por mês."
     },
     "gabarito": "a",
     "feedback": {
      "b": "O pacote essencial não inclui saques ilimitados em qualquer banco nem cinco TEDs gratuitas para terceiros.",
      "c": "Juros de cheque especial não fazem parte do pacote de serviços essenciais de extratos e saques.",
      "d": "O pacote essencial prevê especificamente dez folhas de cheque por mês, e não talonários ilimitados."
     }
    },
    {
     "id": "cpa-prod-38-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. O correntista pode pedir o encerramento da conta pelo mesmo canal utilizado na abertura, dispondo a instituição do prazo de até trinta dias corridos para adotar as providências de rescisão.</p><p>As alternativas B, C e D incorrem em erros ao exigir idas presenciais obrigatórias, condicionar a saída à quitação de dívidas ou estipular prazos inexequíveis de 24 horas.</p>",
     "enunciado": "<p>Um correntista decidiu encerrar sua conta corrente aberta inicialmente por meio do aplicativo digital da instituição. Sobre o procedimento e os prazos exigidos para o encerramento da conta, a regulamentação estabelece que:</p>",
     "alternativas": {
      "a": "O cliente pode solicitar o encerramento pelo mesmo canal usado na abertura (pelo aplicativo), e a instituição tem o prazo limite de até trinta dias corridos para concluir a rescisão.",
      "b": "O encerramento obriga o comparecimento presencial exclusivo na agência de origem onde a conta foi aberta fisicamente anos antes.",
      "c": "O banco pode recusar o encerramento da conta caso exista qualquer saldo devedor ou pendência de empréstimo em aberto.",
      "d": "O prazo máximo concedido para o banco finalizar o processo de encerramento é de exatas 24 horas úteis."
     },
     "gabarito": "a",
     "feedback": {
      "b": "A norma garante o direito de encerrar a conta pelo mesmo canal da abertura, dispensando a obrigação de ir à agência física.",
      "c": "O encerramento não fica condicionado à quitação prévia de dívidas, que continuam sendo cobradas por outros meios.",
      "d": "O prazo regulamentar fixado para a conclusão do encerramento é de trinta dias corridos, e não 24 horas."
     }
    },
    {
     "id": "cpa-prod-38-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. A conta salário serve exclusivamente para receber pagamentos do empregador, não cobra tarifa de manutenção e permite realizar a portabilidade gratuita dos valores para outra conta de mesma titularidade.</p><p>As alternativas B, C e D violam as normas ao permitir depósitos de terceiros, cobrar tarifas de portabilidade ou direcionar recursos para contas alheias.</p>",
     "enunciado": "<p>Em relação às regras de funcionamento e movimentação da conta salário e ao mecanismo de portabilidade associado a ela, é correto afirmar que:</p>",
     "alternativas": {
      "a": "A conta salário possui finalidade exclusiva para depósitos do empregador, sendo vedada a cobrança de tarifa de manutenção e permitida a portabilidade gratuita e integral para conta de mesma titularidade em outro banco.",
      "b": "O trabalhador pode receber livremente depósitos em dinheiro feitos por terceiros e transferir os recursos para contas de qualquer titularidade.",
      "c": "A instituição financeira detém o direito de cobrar uma tarifa mensal de manutenção caso o trabalhador solicite a portabilidade do salário.",
      "d": "A portabilidade de salário obriga o cliente a transferir os recursos integralmente para uma conta de terceiros indicada pelo empregador."
     },
     "gabarito": "a",
     "feedback": {
      "b": "A conta salário não aceita depósitos de terceiros ou em espécie, recebendo exclusivamente do empregador.",
      "c": "A portabilidade de salário é totalmente gratuita, sendo vedada a cobrança de tarifas de manutenção na conta salário.",
      "d": "A portabilidade exige obrigatoriamente que a conta de destino seja de mesma titularidade do trabalhador, e nunca de terceiros."
     }
    },
    {
     "id": "cpa-prod-38-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a A. A inclusão no Cadastro de Emitentes de Cheques sem Fundos (CCF) exige a ocorrência dos motivos 12, 13 ou 14, de modo que o motivo 11 (falta de fundos na primeira apresentação) sozinho não aciona o registro no cadastro restritivo.</p><p>As alternativas B, C e D erram ao incluir clientes precipitadamente no CCF por causa do motivo 11 isolado, isentar contas encerradas ou alegar a extinção incorreta dos cheques.</p>",
     "enunciado": "<p>Um cliente emitiu um cheque que acabou sendo devolvido pelo banco por insuficiência de provisão de fundos (falta de saldo). Analise as consequências normativas aplicáveis aos códigos de devolução de cheques e assinale a alternativa correta sobre a inclusão no Cadastro de Emitentes de Cheques sem Fundos (CCF):</p>",
     "alternativas": {
      "a": "A inclusão do emitente no CCF decorre dos motivos 12 (cheque sem fundos na segunda apresentação), 13 (conta encerrada) e 14 (prática espúria), não ocorrendo isoladamente pelo motivo 11 na primeira apresentação.",
      "b": "O emitente é inscrito no CCF de forma automática logo na primeira apresentação do cheque devolvido pelo motivo 11.",
      "c": "O motivo 13 referente a conta encerrada não gera nenhum tipo de restrição cadastral no sistema financeiro ou inclusão no CCF.",
      "d": "A emissão de cheques sem fundos foi totalmente substituída pelo Pix, extinguindo o CCF e o motivo 11 do sistema bancário brasileiro."
     },
     "gabarito": "a",
     "feedback": {
      "b": "A devolução isolada pelo motivo 11 na primeira apresentação não gera a inscrição no CCF.",
      "c": "A devolução pelo motivo 13 (conta encerrada) é justamente uma das ocorrências que provocam a inclusão do emitente no CCF.",
      "d": "Os cheques e suas normas de devolução continuam vigentes, e o CCF não foi extinto."
     }
    }
   ],
   "PIX: funcionamento, chaves, custos e aplicações": [
    {
     "id": "cpa-prod-39-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. O Pix é um meio de pagamento instantâneo criado, desenvolvido e gerido pelo Banco Central, liquidando transações em segundos, 24 horas por dia, todos os dias da semana.</p><p>As alternativas B, C e D erram ao atribuir a criação a bancos comerciais ou à Febraban, restringir o funcionamento a dias úteis ou relacioná-lo à B3.</p>",
     "enunciado": "<p>O Pix é um meio de pagamento instantâneo amplamente utilizado no Brasil. Sobre a origem, a gestão e o funcionamento operacional dessa ferramenta, é correto afirmar que:</p>",
     "alternativas": {
      "a": "Foi criado, desenvolvido e é gerido integralmente pelo Banco Central do Brasil, operando 24 horas por dia, todos os dias da semana.",
      "b": "Trata-se de um arranjo privado exclusivo gerido de forma consorciada pelos grandes bancos comerciais privados da Febraban.",
      "c": "Funciona exclusivamente em dias úteis e durante o horário tradicional de expediente bancário das agências físicas.",
      "d": "É um produto financeiro de titularidade da B3, sendo negociado por meio de lotes de liquidação diferida."
     },
     "gabarito": "a",
     "feedback": {
      "b": "O Pix não é um arranjo privado dos bancos comerciais, mas sim criado e gerido pelo Banco Central.",
      "c": "O Pix opera em tempo real, 24 horas por dia e 7 dias por semana, inclusive fins de semana e feriados.",
      "d": "A B3 não é a criadora nem a gestora do Pix, que roda sobre infraestrutura ligada ao Banco Central."
     }
    },
    {
     "id": "cpa-prod-39-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. As chaves Pix ficam armazenadas no DICT (Diretório de Identificadores de Contas Transacionais), que constitui uma base centralizada e gerida pelo Banco Central.</p><p>As alternativas B, C e D erram ao descentralizar as bases nos bancos, atribuir a gestão a comitês de internet ou envolver o FGC.</p>",
     "enunciado": "<p>As chaves Pix funcionam como apelidos que facilitam a identificação das informações das contas dos clientes. O armazenamento centralizado e a vinculação dessas chaves às respectivas contas e instituições financeiras ficam sob a responsabilidade do:</p>",
     "alternativas": {
      "a": "DICT (Diretório de Identificadores de Contas Transacionais), base centralizada e gerida pelo Banco Central.",
      "b": "Banco emissor da chave, que mantém um diretório próprio e isolado sem comunicação com as demais instituições.",
      "c": "Comitê Gestor da Internet no Brasil (CGI.br), responsável pelos registros de domínios e chaves digitais.",
      "d": "Fundo Garantidor de Créditos (FGC), que audita diariamente todas as senhas de segurança dos correntistas."
     },
     "gabarito": "a",
     "feedback": {
      "b": "As chaves não ficam isoladas em diretórios próprios de cada banco, mas sim em uma base centralizada.",
      "c": "O CGI.br não gerencia as chaves transacionais do sistema de pagamentos instantâneos do Banco Central.",
      "d": "O FGC protege depósitos bancários contra quebras de instituições, não gerenciando o diretório de chaves do Pix."
     }
    },
    {
     "id": "cpa-prod-39-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. Para a pessoa física, o Pix é gratuito em transferências e pagamentos de compras, exceto se a conta for utilizada com finalidade comercial para recebimento de vendas ou serviços, hipótese em que a cobrança é permitida.</p><p>As alternativas B, C e D cometem erros ao estender gratuidade ao MEI, proibir tarifas de jurídicas ou cobrar taxas fixas de pessoas físicas.</p>",
     "enunciado": "<p>Em relação às regras de custos e tarifas aplicáveis às transações via Pix para diferentes perfis de clientes, a regulamentação vigente estabelece que:</p>",
     "alternativas": {
      "a": "Para a pessoa física, o Pix é gratuito em transferências e compras, mas a cobrança é permitida caso a conta seja usada com finalidade comercial.",
      "b": "O Microempreendedor Individual (MEI) desfruta da mesma gratuidade total garantida à pessoa física em qualquer volume de vendas.",
      "c": "É terminantemente proibido aos bancos cobrar qualquer tarifa de pessoas jurídicas pelo recebimento de valores via Pix.",
      "d": "A pessoa física paga uma taxa fixa obrigatória estipulada pelo Banco Central a cada envio de Pix superior a R$ 100,00."
     },
     "gabarito": "a",
     "feedback": {
      "b": "O MEI é classificado como pessoa jurídica e está sujeito à cobrança de tarifas, não tendo a gratuidade de pessoa física.",
      "c": "Para pessoas jurídicas, a cobrança de tarifas é plenamente permitida, tanto no envio quanto no recebimento.",
      "d": "O Pix para pessoa física em uso não comercial é totalmente gratuito, independentemente do valor transacionado."
     }
    },
    {
     "id": "cpa-prod-39-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. O Pix Agendado depende da iniciativa do pagador para programar uma transferência futura, ao passo que o Pix Automático viabiliza cobranças recorrentes onde o cliente autoriza uma única vez e o recebedor puxa o valor a cada vencimento.</p><p>As alternativas B, C e D distorcem os conceitos ao impor restrições falsas, exigir reautenticações mensais ou limitar os meios de pagamento.</p>",
     "enunciado": "<p>Na oferta de modalidades e aplicações do Pix, existem diferenças práticas fundamentais entre o Pix Agendado e o Pix Automático. A principal distinção entre esses dois serviços consiste no fato de que:</p>",
     "alternativas": {
      "a": "No Pix Agendado a iniciativa e a programação partem do pagador para uma data futura, enquanto no Pix Automático o cliente autoriza uma única vez e o recebedor puxa o valor da cobrança recorrente a cada vencimento.",
      "b": "O Pix Agendado é exclusivo para transações entre empresas (B2B), ao passo que o Pix Automático é proibido para contas de consumo como água e luz.",
      "c": "O Pix Automático exige nova autenticação e autorização manual do cliente a cada mês, diferentemente do Agendado que é perpétuo.",
      "d": "O Pix Agendado é operado de forma física por meio de correspondentes bancários, enquanto o Automático ocorre apenas via cartões de crédito."
     },
     "gabarito": "a",
     "feedback": {
      "b": "Ambas as modalidades atendem a diferentes finalidades de pagamento, sem restrições exclusivas B2B ou proibições a contas de consumo no Automático.",
      "c": "O Pix Automático dispensa novas autenticações a cada cobrança, pois se baseia em uma autorização única prévia dada pelo pagador.",
      "d": "Nenhuma das modalidades depende de cartões de crédito ou de atendimento físico em correspondentes bancários."
     }
    },
    {
     "id": "cpa-prod-39-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a A. O MED destina-se estritamente a situações de fundada suspeita de fraude e falha operacional, sendo expressamente vedado o seu uso para resolver desacordos comerciais, defeitos ou arrependimentos de compras.</p><p>As alternativas B, C e D cometem erros graves ao transformar o MED em seguro de consumo, limitar o rastreio do MED 2.0 ou encurtar prazos de análise.</p>",
     "enunciado": "<p>Analise o funcionamento e as limitações operacionais do Mecanismo Especial de Devolução (MED) aplicável às transações via Pix, inclusive após a implementação do MED 2.0 (Resolução BCB 493/2025), e assinale a alternativa correta:</p>",
     "alternativas": {
      "a": "O MED pode ser acionado exclusivamente em casos de fundada suspeita de fraude ou falha operacional nos sistemas, não cobrando desacordos comerciais ou arrependimentos de compra.",
      "b": "O cliente insatisfeito com a cor de um produto ou com um atraso na entrega pode utilizar o MED para reaver o dinheiro de forma imediata junto ao banco recebedor.",
      "c": "O MED 2.0 restringe o bloqueio de recursos unicamente à primeira conta recebedora, ficando proibido o rastreio do dinheiro em contas subsequentes.",
      "d": "O prazo regulamentar concedido para que a instituição financeira analise uma notificação de infração no MED é de no máximo 24 horas corridas."
     },
     "gabarito": "a",
     "feedback": {
      "b": "Desacordos comerciais, atrasos e defeitos não acionam o MED, pois tratam-se de questões de consumo e não de fraudes sistêmicas.",
      "c": "O MED 2.0 expandiu o rastreio do dinheiro para além da primeira conta recebedora, mapeando toda a cadeia de contas.",
      "d": "O prazo regulamentar para a instituição analisar a notificação de infração no MED é de até 7 dias, e não 24 horas."
     }
    }
   ],
   "Conta internacional": [
    {
     "id": "cpa-prod-40-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. Os saldos mantidos em contas internacionais domiciliadas no exterior não contam com a cobertura do FGC, visto que a proteção do fundo brasileiro restringe-se ao território nacional.</p><p>As alternativas B, C e D incorrem em erros ao estender o FGC para fora do país, inventar fundos soberanos de resgate ou atribuir o risco ao Tesouro Nacional.</p>",
     "enunciado": "<p>Em relação à cobertura de garantias para recursos depositados em contas internacionais mantidas por residentes do Brasil em instituições financeiras domiciliadas no exterior, é correto afirmar que:</p>",
     "alternativas": {
      "a": "Não existe cobertura do Fundo Garantidor de Créditos (FGC), pois a proteção brasileira cessa quando os recursos cruzam a fronteira nacional.",
      "b": "O FGC garante integralmente os depósitos em contas internacionais em moeda estrangeira até o limite de R$ 1 milhão por CPF.",
      "c": "Os recursos possuem cobertura automática do Banco Central do Brasil por meio de um fundo soberano de resgate cambial.",
      "d": "O Tesouro Nacional assume o risco de crédito internacional de todas as contas abertas via aplicativos de fintechs."
     },
     "gabarito": "a",
     "feedback": {
      "b": "O FGC protege apenas depósitos no sistema financeiro nacional, não cobrindo saldos no exterior.",
      "c": "O Banco Central não possui fundo soberano de resgate para garantir contas particulares de residentes no exterior.",
      "d": "O Tesouro Nacional não assume o risco de crédito de contas mantidas em jurisdições estrangeiras."
     }
    },
    {
     "id": "cpa-prod-40-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. A transferência de recursos ao exterior para disponibilidade do próprio residente (sem finalidade de investimento) sofre a incidência da alíquota de IOF de 3,5%.</p><p>As alternativas B, C e D erram ao aplicar a alíquota reduzida de investimentos, reter percentuais antigos ou assumir isenções inexistentes.</p>",
     "enunciado": "<p>Ao realizar uma transferência de recursos de uma conta local no Brasil para uma conta de mesma titularidade no exterior sem finalidade específica de investimento, a alíquota atual do Imposto sobre Operações Financeiras (IOF) incidente sobre a operação de câmbio corresponde a:</p>",
     "alternativas": {
      "a": "3,5%.",
      "b": "1,10%.",
      "c": "6,38%.",
      "d": "Isenção total de 0%."
     },
     "gabarito": "a",
     "feedback": {
      "b": "A alíquota de 1,10% aplica-se especificamente às remessas ao exterior com finalidade de investimento.",
      "c": "A alíquota de 6,38% pertencia a regras anteriores superadas pelas normativas mais recentes.",
      "d": "As operações de câmbio para transferência de disponibilidade própria não são totalmente isentas, pagando 3,5%."
     }
    },
    {
     "id": "cpa-prod-40-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. A CBE anual é exigida obrigatoriamente de todo residente no país que possua ativos no exterior em montante superior a US$ 1 milhão na data-base de 31 de dezembro.</p><p>As alternativas B, C e D confundem os limites normativos da declaração anual com os patamares da CBE trimestral ou criam valores arbitrários.</p>",
     "enunciado": "<p>Um cliente brasileiro possui investimentos e saldos expressivos mantidos em contas no exterior e precisa cumprir suas obrigações regulares perante o Banco Central do Brasil. A Declaração de Capitais Brasileiros no Exterior (CBE) anual torna-se obrigatória para o titular que possua, na data-base de 31 de dezembro, ativos no exterior superiores a:</p>",
     "alternativas": {
      "a": "US$ 1 milhão.",
      "b": "US$ 100 mil.",
      "c": "US$ 10 milhões.",
      "d": "US$ 500 mil."
     },
     "gabarito": "a",
     "feedback": {
      "b": "US$ 100 mil não é gatilho de nenhuma CBE: a anual começa em US$ 1 milhão e a trimestral em US$ 100 milhões.",
      "c": "O patamar de US$ 10 milhões não constitui o marco regulatório oficial da CBE anual.",
      "d": "O valor de US$ 500 mil está incorreto e não define o gatilho da declaração do Banco Central."
     }
    },
    {
     "id": "cpa-prod-40-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. A conta internacional serve como instrumento de diversificação de risco soberano e proteção cambial (hedge), preservando o poder de compra do patrimônio frente a quedas da moeda local.</p><p>As alternativas B, C e D erram ao prometer rentabilidades irreais, isenções fiscais falsas ou a extinção de spreads cambiais.</p>",
     "enunciado": "<p>Um investidor avalia as vantagens de utilizar uma conta internacional para diversificar seu patrimônio. Entre os objetivos que justificam a abertura e manutenção de recursos em moeda forte fora do país, destaca-se:</p>",
     "alternativas": {
      "a": "A diversificação de risco soberano e a proteção cambial (hedge) contra a desvalorização da moeda doméstica.",
      "b": "A garantia de rentabilidade pré-fixada de 20% ao ano assegurada pelo Tesouro dos Estados Unidos para clientes brasileiros.",
      "c": "A isenção total e automática de qualquer declaração de imposto de renda no Brasil sobre os ganhos obtidos.",
      "d": "A eliminação completa do spread cambial cobrado pelas instituições financeiras em transferências internacionais."
     },
     "gabarito": "a",
     "feedback": {
      "b": "O Tesouro dos Estados Unidos não assegura rentabilidades prefixadas elevadas de 20% ao ano para investidores estrangeiros.",
      "c": "O residente fiscal no Brasil continua obrigado a declarar o patrimônio mundial e os ganhos no IRPF anual.",
      "d": "As contas internacionais e transferências continuam sujeitas à cobrança de spread cambial pelas instituições."
     }
    },
    {
     "id": "cpa-prod-40-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a A. A remessa ao exterior com finalidade de investimento possui tributação favorecida de IOF de 1,10%, enquanto as transferências para disponibilidade própria sem fins de investimento e os gastos com cartões pagam 3,5%.</p><p>As alternativas B, C e D incorrem em erros ao zerarem o IOF de cartões, confundirem obrigações da Receita com o Banco Central ou alterarem a residência fiscal de forma incorreta.</p>",
     "enunciado": "<p>Analise o caso de um residente fiscal no Brasil que realizou diversas operações de remessa de recursos e gastos internacionais utilizando contas globais e cartões. Com base nas normas tributárias e regulatórias brasileiras sobre câmbio, IOF e obrigações acessórias, assinale a alternativa correta:</p>",
     "alternativas": {
      "a": "As remessas destinadas especificamente a investimentos no exterior contam com alíquota reduzida de IOF de 1,10%, diferentemente das transferências simples de disponibilidade que pagam 3,5%.",
      "b": "Os gastos efetuados com cartões de débito ou crédito internacional em viagens estão totalmente isentos de IOF desde a unificação das alíquotas em 2025.",
      "c": "A entrega da Declaração de Capitais Brasileiros no Exterior (CBE) substitui integralmente a exigência de declaração de bens no imposto de renda da Receita Federal.",
      "d": "O cliente perde a condição de residente fiscal no Brasil no momento exato em que abre uma conta bancária domiciliada no exterior."
     },
     "gabarito": "a",
     "feedback": {
      "b": "Os gastos com cartões internacionais e saques no exterior pagam a alíquota de IOF de 3,5%, não estando isentos.",
      "c": "A CBE perante o Banco Central e a declaração de IRPF perante a Receita Federal são obrigações independentes e complementares, sem substituição mútua.",
      "d": "A simples abertura de conta no exterior não descaracteriza a residência fiscal no Brasil, que segue regras próprias da Receita Federal."
     }
    }
   ],
   "Compra e venda de moeda estrangeira": [
    {
     "id": "cpa-prod-41-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. Desde a unificação normativa, existe um único Mercado de Câmbio regulado e fiscalizado pelo Banco Central, onde \"comercial\" e \"turismo\" representam apenas denominações de cotações praticadas para diferentes volumes e naturezas de operação.</p><p>As alternativas B, C e D erram ao afirmar a existência de dois mercados separados, inventar subsídios governamentais ou proibir instituições autorizadas de operar.</p>",
     "enunciado": "<p>Em relação à estrutura regulatória do mercado de câmbio brasileiro e às suas nomenclaturas tradicionais, assinale a alternativa correta:</p>",
     "alternativas": {
      "a": "Existe um único Mercado de Câmbio unificado, sendo \"comercial\" e \"turismo\" apenas denominações de cotações para diferentes finalidades.",
      "b": "O mercado é formalmente dividido em dois subsistemas completamente separados: o Mercado de Taxas Livres e o Mercado de Taxas Flutuantes.",
      "c": "As operações de turismo possuem obrigatoriamente taxas subsidiadas e controladas diretamente pelo Tesouro Nacional.",
      "d": "O Banco Central opera de forma isolada, sendo proibido o funcionamento de bancos e corretoras no mercado cambial."
     },
     "gabarito": "a",
     "feedback": {
      "b": "A separação formal entre taxas livres e flutuantes foi extinta, unificando o mercado em um único ambiente regulado.",
      "c": "O dólar turismo não é subsidiado pelo Tesouro Nacional, carregando custos adicionais de logística e papel-moeda.",
      "d": "Os bancos e corretoras devidamente autorizados pelo Banco Central podem operar no mercado de câmbio."
     }
    },
    {
     "id": "cpa-prod-41-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. A PTAX é uma taxa de referência calculada pelo Banco Central a partir de consultas diárias, servindo para contratos e balanços, mas não é a taxa que o cliente paga diretamente no balcão da instituição.</p><p>As alternativas B, C e D erram ao impor a PTAX como preço de balcão obrigatório, transferir a apuração para aéreas ou envolver a CVM.</p>",
     "enunciado": "<p>A PTAX é uma taxa de câmbio de referência amplamente divulgada pelo Banco Central do Brasil. Sobre a aplicação dessa taxa no atendimento ao cliente de varejo, verifica-se que:</p>",
     "alternativas": {
      "a": "A PTAX serve como taxa de referência estatística e de contratos futuros, não sendo obrigatoriamente a taxa exata que o cliente paga no balcão da instituição.",
      "b": "A PTAX é a taxa definitiva e obrigatória cobrada em todas as vendas de moeda em espécie realizadas aos viajantes.",
      "c": "A PTAX é fixada exclusivamente pelos conselhos de turismo das grandes companhias aéreas internacionais.",
      "d": "A PTAX zera o spread cambial de todas as corretoras do país por determinação da CVM."
     },
     "gabarito": "a",
     "feedback": {
      "b": "O cliente no balcão paga a cotação praticada pela instituição, que difere da PTAX de referência.",
      "c": "A PTAX é apurada e divulgada pelo Banco Central, e não por conselhos de companhias aéreas.",
      "d": "A PTAX não zera o spread e a CVM não é o órgão fiscalizador do mercado de câmbio."
     }
    },
    {
     "id": "cpa-prod-41-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. O Valor Efetivo Total (VET) expressa em reais por unidade de moeda estrangeira o custo real da operação, somando taxa de câmbio, tributos e tarifas, devendo ser informado previamente em liquidações prontas de até US$ 100 mil.</p><p>As alternativas B, C e D citam índices de construção civil, inflação ou rendimentos de poupança que não medem os custos cambiais.</p>",
     "enunciado": "<p>Para garantir transparência ao consumidor que adquire moeda estrangeira ou realiza transferências internacionais de até US$ 100 mil, as instituições financeiras devem informar obrigatoriamente um indicador consolidado antes do fechamento da operação. Esse indicador é o:</p>",
     "alternativas": {
      "a": "Valor Efetivo Total (VET), que engloba a taxa de câmbio, os tributos incidentes e as tarifas cobradas.",
      "b": "Custo Unitário Básico da Construção (CUB), aplicável exclusivamente a financiamentos de imóveis.",
      "c": "Índice Nacional de Preços ao Consumidor Amplo (IPCA) acumulado dos últimos doze meses.",
      "d": "Rendimento Líquido Nominal da caderneta de poupança (TR mais 0,5% ao mês)."
     },
     "gabarito": "a",
     "feedback": {
      "b": "O CUB refere-se ao setor de construção civil, sem relação com transações de câmbio.",
      "c": "O IPCA mede a inflação oficial do país, não constituindo o indicador de custos de câmbio.",
      "d": "A caderneta de poupança mede remuneração de aplicações financeiras, e não custos de moedas estrangeiras."
     }
    },
    {
     "id": "cpa-prod-41-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. O novo marco cambial autoriza a transação eventual e não profissional de moeda estrangeira em espécie entre pessoas físicas até o limite de US$ 500 por operação.</p><p>As alternativas B, C e D distorcem a norma ao eliminar declarações de viagem obrigatórias, criar contas livres generalizadas ou permitir câmbio profissional sem autorização.</p>",
     "enunciado": "<p>Sob a vigência do novo marco cambial (Lei 14.286/2021), foram estabelecidas novas regras para a realização de transações em espécie entre pessoas físicas e para o porte de valores em viagens internacionais. Assinale a alternativa que descreve corretamente uma dessas regras:</p>",
     "alternativas": {
      "a": "É permitida a compra e venda de moeda estrangeira em espécie entre pessoas físicas, de forma eventual e não profissional, até o limite de US$ 500 por operação.",
      "b": "O viajante pode portar qualquer montante em espécie ao sair do país, sem limite máximo e sem obrigatoriedade de declaração à Receita Federal.",
      "c": "Qualquer cidadão comum pode abrir livremente contas correntes denominadas integralmente em moeda estrangeira em bancos comerciais brasileiros.",
      "d": "A negociação de câmbio entre pessoas físicas pode ser realizada de forma profissional e contínua sem necessidade de autorização do Banco Central."
     },
     "gabarito": "a",
     "feedback": {
      "b": "Acima de US$ 10.000,00 (ou equivalente), a declaração à Receita Federal no porte de valores em viagem é obrigatória.",
      "c": "A lei não criou o direito geral de contas correntes em moeda estrangeira para pessoas físicas no Brasil, delegando ao Banco Central a regulamentação.",
      "d": "Negociações profissionais exigem instituições autorizadas, sendo permitidas entre pessoas físicas apenas operações eventuais e não profissionais."
     }
    },
    {
     "id": "cpa-prod-41-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a A. O novo marco cambial estabeleceu que o viajante pode portar em espécie, na entrada ou na saída do país, o limite de US$ 10.000,00 (ou equivalente) sem precisar declarar à Receita Federal, valor superior exigindo declaração formal.</p><p>As alternativas B, C e D incorrem em erros ao legitimar cambistas irregulares, eliminar limites de porte ou manter valores em reais desatualizados.</p>",
     "enunciado": "<p>Analise o caso de um cliente que planeja uma viagem internacional e pretende comprar moeda estrangeira em espécie e carregar um cartão de débito internacional, avaliando também as obrigações aduaneiras e os limites de valores em espécie. Assinale a alternativa correta:</p>",
     "alternativas": {
      "a": "O limite de valores que o viajante pode portar em espécie ao entrar ou sair do país sem declaração obrigatória à Receita Federal é de US$ 10.000,00 ou o equivalente em outra moeda.",
      "b": "A compra de moeda em espécie pode ser realizada livremente com qualquer comerciante informal de rua, desde que a operação respeite o teto de US$ 100.000,00.",
      "c": "O porte de dinheiro em espécie em viagens internacionais está isento de qualquer limite, exigindo apenas aviso prévio à administratora do aeroporto.",
      "d": "A legislação atual obriga o viajante a declarar à Receita Federal qualquer quantia superior a R$ 10.000,00, mantendo o limite antigo inalterado."
     },
     "gabarito": "a",
     "feedback": {
      "b": "Comprar de comerciantes informais sem autorização do Banco Central é irregular e ilegal, independentemente do teto.",
      "c": "Existe limite quantitativo fixado em US$ 10.000,00 para porte sem declaração, não bastando aviso a aeroportos.",
      "d": "O limite foi atualizado pelo novo marco cambial para US$ 10.000,00, e não em reais no valor antigo de R$ 10.000,00."
     }
    }
   ],
   "Seguros de vida": [
    {
     "id": "cpa-prod-42-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. O seguro de vida apresenta uma abrangência maior ao indenizar a morte por causas naturais e acidentais, ao passo que o seguro de acidentes pessoais restringe-se aos sinistros decorrentes de acidentes cobertos.</p><p>As alternativas B, C e D invertem as coberturas, confundem o seguro com aplicações de renda fixa ou avaliam incorretamente os custos.</p>",
     "enunciado": "<p>O seguro de vida é um produto financeiro voltado à transferência de riscos de morte e invalidez para uma seguradora. Sobre as diferenças conceituais entre o seguro de vida e o seguro de acidentes pessoais, é correto afirmar que:</p>",
     "alternativas": {
      "a": "O seguro de vida possui cobertura mais ampla, indenizando a morte por causas naturais e acidentais, enquanto o seguro de acidentes pessoais cobre apenas o evento acidental coberto.",
      "b": "O seguro de acidentes pessoais cobre morte natural de forma integral, enquanto o seguro de vida restringe-se exclusivamente a desastres automobilísticos.",
      "c": "Ambas as modalidades exigem obrigatoriamente a formação de uma reserva individual de poupança com resgates diários atrelados à taxa Selic.",
      "d": "O seguro de acidentes pessoais possui custo superior ao seguro de vida por causa da sua ampla cobertura de doenças graves."
     },
     "gabarito": "a",
     "feedback": {
      "b": "O seguro de acidentes pessoais não cobre morte natural, e o seguro de vida não se restringe a desastres.",
      "c": "O seguro de vida é um contrato de transferência de risco, e não uma aplicação de poupança individual.",
      "d": "Por cobrir mais eventos, o seguro de vida costuma ter custo mais elevado do que o de acidentes pessoais."
     }
    },
    {
     "id": "cpa-prod-42-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. O prêmio é o valor periódico pago pelo cliente para manter o contrato de seguro e custear a proteção coletiva do grupo frente aos riscos assumidos.</p><p>As alternativas B, C e D confundem o prêmio com o valor da indenização, provisões técnicas ou taxas de previdência.</p>",
     "enunciado": "<p>No âmbito dos seguros de pessoas regidos pelo marco legal vigente, o valor periódico que o proponente paga à seguradora para custear a garantia coletiva de proteção é denominado:</p>",
     "alternativas": {
      "a": "Prêmio.",
      "b": "Capital segurado.",
      "c": "Fundo de reserva atuarial.",
      "d": "Taxa de carregamento de entrada."
     },
     "gabarito": "a",
     "feedback": {
      "b": "O capital segurado é o valor da indenização contratada que será paga se o risco se concretizar.",
      "c": "O fundo de reserva atuarial é uma provisão técnica da seguradora, e não o pagamento periódico feito pelo cliente.",
      "d": "A taxa de carregamento refere-se a custos administrativos típicos de planos de previdência complementar."
     }
    },
    {
     "id": "cpa-prod-42-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. Nos seguros sobre a vida, o proponente pode contratar múltiplos seguros e as apólices se acumulam integralmente, pois não há reparação de prejuízo material passível de rateio.</p><p>As alternativas B, C e D erram ao sugerir divisões proporcionais, cancelamentos de contratos ou conversões em capitalização.</p>",
     "enunciado": "<p>Um investidor contratou três apólices distintas de seguro de vida em seguradoras diferentes para proteger sua família. Ocorrendo o sinistro de morte coberto, a liquidação dessas apólices perante as empresas seguradoras obedecerá à seguinte regra:</p>",
     "alternativas": {
      "a": "As apólices se acumulam e cada seguradora paga o capital segurado integral contratado, sem rateio.",
      "b": "O valor total é rateado proporcionalmente entre as três seguradoras para evitar o enriquecimento sem causa.",
      "c": "Apenas a primeira apólice contratada em ordem cronológica realiza o pagamento, cancelando as demais automaticamente.",
      "d": "As apólices são convertidas em títulos de capitalização e devolvidas de forma parcelada aos herdeiros."
     },
     "gabarito": "a",
     "feedback": {
      "b": "O rateio não se aplica a seguros de pessoas, pois as apólices contratadas sobre a vida se acumulam livremente.",
      "c": "Nenhuma apólice é cancelada, pois é permitido contratar mais de um seguro sobre o mesmo interesse.",
      "d": "O capital segurado não é convertido em títulos de capitalização, sendo pago conforme o contrato."
     }
    },
    {
     "id": "cpa-prod-42-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. O capital devido por morte em seguro de vida não constitui herança, não passa pelo inventário, é impenhorável e não se submete às dívidas do segurado, servindo de instrumento de planejamento sucessório.</p><p>As alternativas B, C e D incorrem em erros ao atrair inventários, aplicar sub-rogações de seguros de danos ou limitar beneficiários a herdeiros necessários.</p>",
     "enunciado": "<p>Sobre o tratamento sucessório, a proteção patrimonial e os efeitos jurídicos do capital segurado pago em decorrência da morte do titular de um seguro de vida, é correto afirmar que:</p>",
     "alternativas": {
      "a": "O capital pago aos beneficiários não é considerado herança para nenhum efeito, sendo impenhorável e não respondendo pelas dívidas do segurado.",
      "b": "O valor da indenização entra obrigatoriamente no inventário judicial e serve para quitar as dívidas trabalhistas e cíveis deixadas pelo falecido.",
      "c": "A seguradora assume o direito de cobrar o causador da morte do segurado por meio da sub-rogação idêntica aos seguros de danos.",
      "d": "A indicação de beneficiários é restrita aos herdeiros necessários previstos na ordem sucessória legítima do Código Civil."
     },
     "gabarito": "a",
     "feedback": {
      "b": "O capital por morte não entra no inventário e não responde pelas dívidas deixadas pelo segurado.",
      "c": "Os capitais por morte ou perda da integridade física não implicam sub-rogação contra o causador.",
      "d": "A indicação do beneficiário é totalmente livre, sem vinculação obrigatória à ordem sucessória ou a herdeiros necessários."
     }
    },
    {
     "id": "cpa-prod-42-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a A. A regulação limita a carência a no máximo metade da vigência contratual, e o seguro temporário caracteriza-se por extinguir-se ao final do prazo sem devolução de prêmios se o segurado sobreviver.</p><p>As alternativas B, C e D cometem erros graves ao restituir prêmios em seguros temporários, estourar o teto legal de carência ou envolver o INSS na partilha.</p>",
     "enunciado": "<p>Analise o caso de um cliente que contratou um seguro de vida temporário com prazo de vigência de dez anos e cobertura por morte e invalidez decorrente de doença, prevendo cláusula de carência. Com base nas normas regulatórias aplicáveis a esse tipo de contrato, assinale a alternativa correta:</p>",
     "alternativas": {
      "a": "A carência estipulada para os eventos de doença não pode ultrapassar a metade da vigência contratual, e o seguro temporário encerra-se ao fim do prazo sem devolução de prêmios se o segurado sobreviver.",
      "b": "O cliente que sobreviver ao término dos dez anos do seguro temporário tem direito ao resgate integral e corrigido de todos os prêmios que pagou ao longo do período.",
      "c": "A seguradora pode fixar livremente um prazo de carência de oito anos para um contrato de dez anos de vigência.",
      "d": "Caso ocorra o falecimento por morte natural após o prazo de carência, a indenização será rateada compulsoriamente com o INSS."
     },
     "gabarito": "a",
     "feedback": {
      "b": "O seguro temporário protege por prazo determinado e encerra-se sem devolução de prêmios caso o segurado sobreviva.",
      "c": "A carência não pode ultrapassar a metade da vigência contratual, tornando um prazo de oito anos em dez ilegal.",
      "d": "O capital segurado é pago integralmente aos beneficiários indicados ou herdeiros, sem qualquer rateio com o INSS."
     }
    }
   ],
   "Seguros patrimoniais": [
    {
     "id": "cpa-prod-43-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. A eficácia do contrato de seguro depende estritamente da existência de interesse legítimo, impedindo que apólices sejam contratadas sobre bens de terceiros sem vínculo econômico ou jurídico, o que transformaria a proteção em aposta.</p><p>As alternativas B, C e D incorrem em erros ao vincular seguros a títulos públicos, eliminar prêmios ou exigir autorizações individuais da CVM.</p>",
     "enunciado": "<p>Para que um contrato de seguro patrimonial produza efeitos jurídicos válidos e não seja caracterizado como uma aposta, a legislação determina como condição essencial de sua eficácia a existência de:</p>",
     "alternativas": {
      "a": "Interesse legítimo por parte do segurado ou beneficiário em relação ao bem ou risco segurado.",
      "b": "Obrigação de vinculação unicamente a títulos públicos federais negociados no Tesouro Direto.",
      "c": "Garantia de cobertura vitalícia sem incidência de prêmios periódicos.",
      "d": "Autorização expressa da Comissão de Valores Mobiliários (CVM) para cada apólice individual."
     },
     "gabarito": "a",
     "feedback": {
      "b": "Títulos públicos do Tesouro Direto não possuem relação direta com a exigência de validade de contratos de seguros patrimoniais.",
      "c": "Os seguros patrimoniais exigem o pagamento periódico de prêmios e possuem vigência determinada, e não caráter vitalício sem custo.",
      "d": "A fiscalização e regulação dos seguros de danos competem aos órgãos do setor de seguros, e não à CVM de forma individualizada por apólice."
     }
    },
    {
     "id": "cpa-prod-43-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. A franquia consubstancia a participação obrigatória do segurado nos prejuízos até determinado limite, barateando o prêmio ao dispensar a seguradora de administrar sinistros de pequeno valor.</p><p>As alternativas B, C e D confundem o conceito com taxas de previdência, garantias bancárias ou margens de crédito.</p>",
     "enunciado": "<p>No âmbito dos seguros de danos e patrimoniais, o mecanismo contratual que representa a participação obrigatória do segurado nos prejuízos decorrentes de um sinistro, servindo como filtro de pequenos riscos e fator de barateamento do prêmio, é denominado:</p>",
     "alternativas": {
      "a": "Franquia.",
      "b": "Taxa de carregamento de saída.",
      "c": "Fundo Garantidor de Créditos (FGC).",
      "d": "Margem consignável de risco."
     },
     "gabarito": "a",
     "feedback": {
      "b": "A taxa de carregamento refere-se a custos administrativos típicos de produtos de previdência complementar e capitalização.",
      "c": "O FGC é uma entidade de proteção a depósitos e títulos bancários, sem relação com a participação em sinistros de seguros.",
      "d": "Margem consignável é o teto de comprometimento de renda em operações de crédito consignado, e não um conceito de seguros."
     }
    },
    {
     "id": "cpa-prod-43-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. Como o dano foi de R$ 100 mil e a franquia obrigatória é de R$ 10 mil, a seguradora arca com o excedente que ultrapassa a franquia, resultando em uma indenização líquida de R$ 90 mil.</p><p>As alternativas B, C e D erram ao desconsiderar a dedução da franquia, pagar a apólice inteira em sinistro parcial ou repassar apenas o valor da franquia.</p>",
     "enunciado": "<p>Um empresário contratou um seguro patrimonial para proteger seu galpão industrial, fixando um valor de garantia na apólice de R$ 500 mil. O imóvel veio a sofrer um sinistro parcial cujo custo total de recuperação foi de R$ 100 mil, sendo que a apólice previa uma franquia dedutível de R$ 10 mil. O valor efetivo da indenização paga pela seguradora será de:</p>",
     "alternativas": {
      "a": "R$ 90 mil.",
      "b": "R$ 100 mil sem qualquer dedução.",
      "c": "R$ 500 mil pelo valor integral da apólice.",
      "d": "R$ 10 mil correspondentes estritamente à franquia."
     },
     "gabarito": "a",
     "feedback": {
      "b": "Pagar R$ 100 mil ignoraria a franquia obrigatória que deve ser deduzida do prejuízo indenizável.",
      "c": "O sinistro foi parcial (R$ 100 mil), não havendo cabimento para indenizar o valor integral da garantia da apólice.",
      "d": "A franquia é a parte que fica a cargo do segurado, e não o valor que a seguradora lhe repassa como indenização."
     }
    },
    {
     "id": "cpa-prod-43-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. O princípio indenizatório impõe dois tetos fundamentais: a indenização não excede a garantia contratada e nem os valores de garantia e indenização podem superar o valor real do interesse segurado.</p><p>As alternativas B, C e D violam o princípio indenizatório ao permitir enriquecimentos, ignorar danos reais ou extrapolar o teto da apólice.</p>",
     "enunciado": "<p>Em relação ao princípio indenizatório e aos limites de valor aplicáveis aos seguros patrimoniais e de danos regidos pelo marco legal vigente, é correto afirmar que:</p>",
     "alternativas": {
      "a": "A indenização não pode exceder o valor da garantia contratada, assim como os valores da garantia e da indenização não podem superar o valor do interesse segurado.",
      "b": "O segurado pode receber o dobro do valor de mercado do bem caso contrate apólices em seguradoras diferentes de forma cumulativa.",
      "c": "A indenização é sempre calculada com base no lucro cessante futuro estimado, independentemente do dano material efetivo.",
      "d": "O valor da apólice é irrelevante, obrigando a seguradora a pagar qualquer prejuízo alegado pelo cliente após o sinistro."
     },
     "gabarito": "a",
     "feedback": {
      "b": "O seguro de dano repara e não enriquece, sendo vedada a acumulação para lucrar acima do valor do prejuízo ou do interesse.",
      "c": "Danos patrimoniais materiais baseiam-se no prejuízo real do bem, e não em estimativas abstratas de lucros futuros sem cobertura específica.",
      "d": "A indenização possui o teto limitador do valor da garantia contratada na apólice."
     }
    },
    {
     "id": "cpa-prod-43-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a A. Nos seguros de dano, a seguradora sub-roga-se nos direitos para cobrar o causador do prejuízo, mas a legislação estabelece uma exceção protetiva importante ao vedar a cobrança por culpa não grave contra cônjuges, parentes até o segundo grau e empregados do segurado.</p><p>As alternativas B, C e D incorrem em erros ao ignorar as proteções familiares de parentesco, atrasar a indenização ao segurado ou confundir seguros de danos com seguros de pessoas.</p>",
     "enunciado": "<p>Analise o caso em que um segurado sofreu prejuízos materiais em seu apartamento causados por um defeito em equipamento instalado por uma empresa prestadora de terceiros contratada pelo condomínio. A seguradora pagou rapidamente a indenização ao segurado. Sobre o instituto da sub-rogação e suas limitações legais nos seguros de danos, assinale a alternativa correta:</p>",
     "alternativas": {
      "a": "A seguradora sub-roga-se nos direitos do segurado para cobrar o causador do dano, porém a lei veda expressamente a sub-rogação quanto à culpa não grave do cônjuge, de parentes até o segundo grau ou de empregados do segurado.",
      "b": "A seguradora adquire o direito de cobrar judicialmente qualquer parente do segurado, independentemente do grau de parentesco ou da existência de culpa grave.",
      "c": "O segurado fica proibido de receber a indenização da seguradora, tendo que aguardar obrigatoriamente o processo contra o terceiro causador na justiça comum.",
      "d": "A sub-rogação é um mecanismo restrito exclusivamente aos seguros de pessoas e previdência privada, não existindo nos seguros patrimoniais de danos."
     },
     "gabarito": "a",
     "feedback": {
      "b": "A lei protege expressamente parentes até o segundo grau, cônjuges e empregados contra a sub-rogação, desde que não tenha havido culpa grave.",
      "c": "O segurado recebe a indenização rapidamente da seguradora, e é a própria seguradora que assume o lugar dele para reaver o valor do terceiro causador.",
      "d": "A sub-rogação é uma característica marcante e exclusiva dos seguros de danos/patrimoniais, sendo expressamente vedada nos seguros de pessoas."
     }
    }
   ]
  },
  "Relacionamento com o Cliente": {
   "Orçamento e fluxo de caixa pessoal ou familiar": [
    {
     "id": "cpa-rel-04-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a D. O orçamento planeja prospectivamente as receitas e despesas esperadas, enquanto o fluxo de caixa registra a execução real do dinheiro que efetivamente entra e sai, sendo o confronto entre ambos o que revela os desvios de planejamento.</p><p>As alternativas A, B e C erram ao inverter os conceitos de passado e futuro, igualar as ferramentas a obrigações fiscais ou confundir fluxo de caixa com o balanço patrimonial de estoque.</p>",
     "enunciado": "<p>O planejamento financeiro pessoal envolve a utilização complementar do orçamento e do fluxo de caixa. Sob o ponto de vista da temporalidade e da função de cada uma dessas duas ferramentas, é correto afirmar que:</p>",
     "alternativas": {
      "a": "O fluxo de caixa mede o estoque estático do patrimônio em uma data, enquanto o orçamento avalia o valor de mercado de bens imóveis.",
      "b": "O orçamento lista os registros históricos do passado, ao passo que o fluxo de caixa é utilizado exclusivamente para prever a inflação do próximo ano.",
      "c": "Ambas as ferramentas possuem a mesma função e destinam-se exclusivamente ao cálculo da alíquota do Imposto de Renda Pessoa Física.",
      "d": "O orçamento é uma ferramenta prospectiva que planeja receitas e despesas futuras, enquanto o fluxo de caixa é o registro da execução real das entradas e saídas."
     },
     "gabarito": "d",
     "feedback": {
      "a": "A medição de estoque estático do patrimônio é função do balanço patrimonial pessoal, e não do fluxo de caixa.",
      "b": "O orçamento é prospectivo (futuro) e o fluxo de caixa registra a execução real (passado e presente).",
      "c": "Orçamento e fluxo de caixa não possuem a mesma função e não servem para calcular imposto de renda."
     }
    },
    {
     "id": "cpa-rel-04-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. Os eixos são independentes e se cruzam: fixa e variável refere-se à previsibilidade do valor e independência do consumo, enquanto essencial e supérflua mede o grau de necessidade para a subsistência.</p><p>As alternativas B, C e D falham ao considerar impossível a existência de fixas supérfluas, inverter os conceitos de fixas e variáveis ou sugerir cortes em despesas vitais essenciais.</p>",
     "enunciado": "<p>Ao estruturar o orçamento doméstico de uma família, o profissional de atendimento deve analisar o comportamento das despesas e sua natureza. Ao comparar os eixos de classificação das contas, constata-se que:</p>",
     "alternativas": {
      "a": "O eixo de despesas fixas e variáveis mede a previsibilidade ao longo do tempo, enquanto o eixo de essenciais e supérfluas mede a relevância para a subsistência.",
      "b": "Toda despesa fixa é obrigatoriamente uma despesa essencial, sendo impossível existir uma despesa fixa que seja supérflua.",
      "c": "As despesas variáveis representam compromissos contratuais imutáveis, como parcelas de financiamento imobiliário e aluguéis.",
      "d": "O corte orçamentário para geração de caixa deve focar prioritariamente nas despesas fixas essenciais de saúde e moradia."
     },
     "gabarito": "a",
     "feedback": {
      "b": "Fixa e supérflua podem se combinar, como no caso de uma assinatura mensal ociosa ou academia não frequentada.",
      "c": "Aluguéis e financiamentos possuem valores previsíveis e constantes, caracterizando-se como despesas fixas, e não variáveis.",
      "d": "O corte orçamentário deve priorizar despesas supérfluas, e não essenciais de subsistência como saúde e moradia."
     }
    },
    {
     "id": "cpa-rel-04-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. A base do orçamento deve ser sempre a renda líquida (que efetivamente entra na conta) e o orçamento deve ser anualizado, fracionando em doze partes mensais o provisionamento de despesas sazonais como IPVA, IPTU e seguros.</p><p>As alternativas A, B e D erram ao usar a renda bruta, depender de receitas extraordinárias para despesas correntes ou incentivar o uso do cheque especial por falta de provisão.</p>",
     "enunciado": "<p>Uma família deseja montar seu orçamento anualizado e precisa definir a base correta de renda, bem como o tratamento adequado para receitas e despesas não mensais. Para evitar distorções no planejamento e prevenir o endividamento, a recomendação correta é:</p>",
     "alternativas": {
      "a": "Considerar apenas as receitas extraordinárias como bônus e férias para arcar com as despesas fixas mensais de moradia.",
      "b": "Utilizar a renda bruta sem descontos operacionais, e lançar o décimo terceiro salário como receita mensal recorrente.",
      "c": "Utilizar a renda líquida como base, e provisionar mensalmente 1/12 de despesas anuais como IPTU e IPVA.",
      "d": "Ignorar despesas sazonais no orçamento, contratando o cheque especial no mês em que as contas anuais vencerem."
     },
     "gabarito": "c",
     "feedback": {
      "a": "Despesas fixas mensais de moradia devem ser custeadas pela renda líquida mensal recorrente, não por entradas extraordinárias.",
      "b": "Orçar pela renda bruta infla artificialmente o superávit, e o décimo terceiro não é receita mensal corrente.",
      "d": "Ignorar gastos sazonais e recorrer ao cheque especial gera endividamento por juros elevados, violando a educação financeira."
     }
    },
    {
     "id": "cpa-rel-04-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a D. A boa prática do planejamento orçamentário consiste em tratar a parcela destinada aos investimentos e reservas como uma despesa prioritária e fixa, poupando assim que a renda entra, em vez de esperar uma sobra ao final do mês.</p><p>As alternativas A, B e C erram ao depender de sobras residuais improváveis, incentivar a contratação de rotativo caro ou confundir limites de crédito com renda pessoal.</p>",
     "enunciado": "<p>Um cliente procurou o banco para entender por que, mesmo recebendo um salário elevado, encerra todos os meses sem saldo disponível para investir. Ao analisar o fluxo de caixa pessoal do correntista, o gerente deve orientar que o superávit recorrente para a formação de reservas seja alcançado por meio da seguinte prática:</p>",
     "alternativas": {
      "a": "Elevar os limites de cheque especial para simular um aumento de renda corrente permanente.",
      "b": "Gastar livremente ao longo do mês e aplicar apenas a quantia eventual que porventura sobrar no último dia.",
      "c": "Contratar linhas de crédito rotativo de cartão para cobrir a compra de artigos de luxo no início do período.",
      "d": "Tratar a poupança como um compromisso prioritário e fixo no orçamento, transferindo o valor no início do mês antes dos gastos discricionários."
     },
     "gabarito": "d",
     "feedback": {
      "a": "Limites de cheque especial são empréstimos bancários e não representam aumento de renda líquida real.",
      "b": "Deixar para poupar o que sobra no fim do mês raramente resulta em acúmulo de capital consistente.",
      "c": "O uso de crédito rotativo para consumo gera endividamento caro e destrói a capacidade de poupança."
     }
    },
    {
     "id": "cpa-rel-04-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a C. Orçamento e fluxo de caixa registram variações dinâmicas e movimentações de recursos ao longo de um período de tempo (fluxo), enquanto o balanço patrimonial pessoal consolida os bens, direitos e dívidas em um momento estático específico (estoque).</p><p>As alternativas A, B e D cometem erros conceituais graves ao confundir medição de movimentação temporal (fluxo) com avaliação estática de patrimônio líquido (estoque).</p>",
     "enunciado": "<p>Ao realizar a análise consolidada da situação financeira de um correntista, um profissional de atendimento precisa diferenciar os instrumentos que avaliam o movimento de recursos em um período daqueles que medem a posição estática do patrimônio em uma data específica. Assinale a alternativa que relaciona corretamente os conceitos de fluxo e estoque:</p>",
     "alternativas": {
      "a": "O fluxo de caixa mede exclusivamente o estoque de ativos ilíquidos, substituindo integralmente a necessidade do balanço patrimonial.",
      "b": "O balanço patrimonial pessoal e o orçamento medem o fluxo mensal de receitas, enquanto o fluxo de caixa mede o estoque de imóveis.",
      "c": "Orçamento e fluxo de caixa medem fluxo (movimentação no período), enquanto o balanço patrimonial pessoal mede estoque (bens, direitos e deveres em uma data).",
      "d": "O orçamento mede a posição de estoque em 31 de dezembro, e o balanço patrimonial mede apenas despesas diárias com alimentação."
     },
     "gabarito": "c",
     "feedback": {
      "a": "O fluxo de caixa avalia movimentações financeiras no tempo, sem substituir a demonstração de bens e dívidas do balanço.",
      "b": "O balanço patrimonial mede posição estática (estoque), e não o fluxo de receitas mensais.",
      "d": "O orçamento avalia projeções de fluxos de receitas e saídas no tempo, e não estoques pontuais de fim de ano."
     }
    }
   ],
   "Gestão de dívidas: escolha da melhor dívida e garantias": [
    {
     "id": "cpa-rel-05-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. O Custo Efetivo Total (CET) consolida em um único percentual anual ou mensal todos os encargos, impostos, tarifas e seguros incidentes na operação de crédito, permitindo a comparação real entre propostas.</p><p>As alternativas B, C e D citam índices de inflação, metodologias de avaliação de investimentos ou sistemas de amortização de dívidas que não reúnem os encargos operacionais.</p>",
     "enunciado": "<p>Ao comparar diferentes propostas de crédito oferecidas no mercado financeiro para reorganizar as finanças de um cliente, o indicador obrigatório que consolida a taxa de juros, o IOF, as tarifas e os seguros em um único percentual é o:</p>",
     "alternativas": {
      "a": "Custo Efetivo Total (CET).",
      "b": "Índice Nacional de Preços ao Consumidor Amplo (IPCA).",
      "c": "Valor Presente Líquido (VPL).",
      "d": "Sistema de Amortização Constante (SAC)."
     },
     "gabarito": "a",
     "feedback": {
      "b": "O IPCA mede a inflação oficial do país e não o custo de empréstimos.",
      "c": "O VPL é um método de análise de viabilidade de projetos de investimentos, não um consolidador de encargo bancário.",
      "d": "O SAC é um sistema de amortização de parcelas, e não a métrica de custo total de uma operação de crédito."
     }
    },
    {
     "id": "cpa-rel-05-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. A matemática financeira e a gestão de dívidas determinam que a prioridade de quitação deve seguir a velocidade de corrosão do patrimônio, direcionando todo o caixa excedente para a dívida de maior CET (como rotativo ou cheque especial).</p><p>As alternativas A, C e D falham ao escolher pelo menor saldo nominal, amortizar linhas baratas com garantia imobiliária ou ignorar os encargos cobrados nas linhas mais emergenciais.</p>",
     "enunciado": "<p>Um cliente possui três dívidas ativas de prazos e saldos distintos no mercado financeiro. Ao receber recursos extraordinários para amortizar antecipadamente parte do passivo, a regra prioritária para ordenar a quitação das dívidas é:</p>",
     "alternativas": {
      "a": "Quitar primeiramente a dívida com o menor saldo devedor absoluto para eliminar o número de carnês.",
      "b": "Priorizar a quitação da dívida que apresentar o maior Custo Efetivo Total (CET), independentemente do valor do saldo nominal.",
      "c": "Priorizar o financiamento imobiliário de taxas subsidiadas e menor custo por ter o maior prazo total.",
      "d": "Amortizar em partes rigorosamente iguais todas as linhas contratadas, independentemente dos juros cobrados."
     },
     "gabarito": "b",
     "feedback": {
      "a": "Quitar pelo menor saldo nominal em vez do maior CET mantém ativas as linhas mais caras que corroem o patrimônio.",
      "c": "Financiamentos imobiliários possuem juros baixos por terem garantia real, não devendo ser priorizados em relação a linhas mais caras como o cheque especial.",
      "d": "Dividir igualmente ignora a velocidade de corrosão das dívidas mais caras e atrasa a recuperação financeira do cliente."
     }
    },
    {
     "id": "cpa-rel-05-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. A consolidação unifica dívidas pulverizadas contratando uma nova linha de CET mais baixo para quitação das antigas (sem perdão de principal), enquanto a portabilidade transfere a dívida para outro banco respeitando obrigatoriamente as travas de saldo e prazo remanescente do contrato original.</p><p>As alternativas A, C e D erram ao afirmar que há perdão do valor principal, confundir portabilidade com refinanciamento com troco ou exigir garantias públicas.</p>",
     "enunciado": "<p>Ao avaliar a reestruturação de dívidas de um cliente, um gerente de atendimento compara as características da consolidação de dívidas e da portabilidade de crédito. A respeito da diferença regulatória e operacional entre essas modalidades, observa-se que:</p>",
     "alternativas": {
      "a": "A consolidação perdoa integralmente o saldo devedor principal do cliente, enquanto a portabilidade libera trocos obrigatoriamente.",
      "b": "A consolidação contrata uma nova linha com CET menor para quitar várias dívidas caras sem perdão do principal, enquanto a portabilidade transfere a mesma operação com valor e prazo restritos ao saldo e tempo remanescentes.",
      "c": "A portabilidade permite alongar o prazo e liberar recurso adicional ao cliente, mantendo o nome de portabilidade sem virar refinanciamento.",
      "d": "Ambas as operações exigem a alienação fiduciária compulsória de bens imóveis da União como garantia soberana."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A consolidação não envolve perdão de principal, mas sim a troca de passivos por uma nova linha mais barata.",
      "c": "Conceder troco em dinheiro ou alongar o prazo descaracteriza a portabilidade e transforma a operação em refinanciamento.",
      "d": "Nenhuma das modalidades exige alienação de bens imóveis públicos como condição de existência."
     }
    },
    {
     "id": "cpa-rel-05-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a D. Em termos práticos, deve-se utilizar o saldo para eliminar a dívida cara do rotativo (cujo custo supera em muito o ganho da aplicação), mas sem zerar totalmente a reserva de emergência, garantindo que imprevistos futuros não façam o cliente recorrer de novo ao crédito rotativo.</p><p>As alternativas A, B e C falham ao zerar totalmente o colchão de liquidez, sugerir especulações de alto risco com dívidas ativas ou travar liquidez em previdência de longo prazo.</p>",
     "enunciado": "<p>Um cliente possui R$ 15 mil aplicados na caderneta de poupança (reserva de emergência) e acumula um saldo devedor de R$ 10 mil no rotativo do cartão de crédito a um CET de 14% ao mês. Ele procura o banco pretendendo zerar integralmente sua reserva para quitar a dívida. A orientação de atendimento correta e tecnicamente adequada é:</p>",
     "alternativas": {
      "a": "Contratar um plano de previdência PGBL ilíquido de longo prazo usando todo o dinheiro da poupança antes de pagar o cartão.",
      "b": "Zerar integralmente a aplicação e manter o saldo zerado sem qualquer colchão de liquidez para imprevistos.",
      "c": "Orientar o cliente a manter a dívida no rotativo e aplicar mais recursos em ações de empresas em recuperação judicial.",
      "d": "Utilizar a parcela do valor aplicado para estancar a dívida cara do rotativo, preservando o restante para não zerar a reserva de emergência."
     },
     "gabarito": "d",
     "feedback": {
      "a": "Travar recursos em produtos ilíquidos de longo prazo com dívidas caras ativas no rotativo contraria a gestão de passivos.",
      "b": "Zerar a reserva de emergência é um erro, pois qualquer despesa inesperada futura devolverá o cliente ao uso do rotativo.",
      "c": "Manter o rotativo a 14% ao mês enquanto especula em ações agrava o endividamento e compromete a subsistência."
     }
    },
    {
     "id": "cpa-rel-05-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a A. A alienação fiduciária reduz a taxa de juros porque dá segurança ao credor via execução extrajudicial, mas exige do cliente a consciência de que a inadimplência nessa linha pode acarretar a perda do bem oferecido em garantia.</p><p>As alternativas B, C e D erram ao ignorar a celeridade do rito extrajudicial, igualar as taxas ao cheque especial ou tirar do devedor a posse direta para habitação do imóvel.</p>",
     "enunciado": "<p>Um cliente endividado possui dívidas em linhas de crédito pessoal sem garantia e estuda oferecer um imóvel quitado de sua propriedade em alienação fiduciária para obter uma linha com CET reduzido. Ao analisar os impactos do uso da garantia real de alienação fiduciária em relação ao custo e ao risco patrimonial, verifica-se que:</p>",
     "alternativas": {
      "a": "A garantia real reduz substancialmente o risco do banco e derruba a taxa do empréstimo, porém converte um passivo sem consequência patrimonial direta em uma dívida que pode custar a perda do imóvel no rito extrajudicial.",
      "b": "A garantia de alienação fiduciária do imóvel elimina completamente o risco de perda do bem por exigir processo judicial que dura obrigatoriamente mais de 30 anos.",
      "c": "A alienação fiduciária de imóveis mantém as taxas de juros idênticas às do cheque especial por determinação do Banco Central.",
      "d": "Ao oferecer o imóvel em garantia, o cliente transfere a propriedade definitiva para o banco, perdendo a posse direta imediatamente no ato da assinatura."
     },
     "gabarito": "a",
     "feedback": {
      "b": "A alienação fiduciária utiliza o rito extrajudicial em cartório, sendo mais rápida na execução em caso de inadimplência do que a antiga hipoteca.",
      "c": "Garantias reais derrubam o risco de crédito do banco, resultando em taxas muito inferiores às do cheque especial.",
      "d": "O cliente mantém a posse direta do bem e mora no imóvel, recebendo o banco a propriedade resolúvel que se extingue com a quitação."
     }
    }
   ],
   "Empréstimo, financiamento e modalidades de crédito ao consumidor": [
    {
     "id": "cpa-rel-06-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. No financiamento, o recurso possui destinação vinculada e não passa pela conta do cliente, sendo pago diretamente ao vendedor ou prestador do serviço, o que gera a vinculação direta ao bem.</p><p>As alternativas A, C e D erram ao descrever a livre utilização típica do empréstimo, inventar isenções de IOF inexistentes ou exigir avais governamentais.</p>",
     "enunciado": "<p>No atendimento bancário, compreender as diferenças estruturais entre um empréstimo de uso livre e um financiamento de destinação vinculada é essencial para orientar o consumidor. A característica que distingue o financiamento em relação ao empréstimo pessoal comum consiste em:</p>",
     "alternativas": {
      "a": "Depositar o valor integral liberado na conta corrente do cliente para que ele utilize livremente como preferir.",
      "b": "Ter o recurso repassado diretamente pela instituição financeira ao vendedor do bem ou serviço, nascendo o crédito colado ao objeto financiado.",
      "c": "Isentar a operação da cobrança de Imposto sobre Operações Financeiras (IOF) por determinação do Banco Central.",
      "d": "Exigir obrigatoriamente a apresentação de garantias prestadas por entidades governamentais de aval."
     },
     "gabarito": "b",
     "feedback": {
      "a": "Depositar o dinheiro na conta do cliente para uso livre caracteriza o empréstimo pessoal, e não o financiamento.",
      "c": "O financiamento ao consumidor não é isento de IOF, e não existe determinação do Banco Central nesse sentido; incidem as alíquotas regulamentares do imposto.",
      "d": "O financiamento utiliza predominantemente garantias reais como a alienação fiduciária, sem exigência de aval governamental."
     }
    },
    {
     "id": "cpa-rel-06-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. No arrendamento mercantil a instituição é a proprietária do bem e o cliente o arrendatário, abrindo-se ao final do contrato três opções: exercer a opção de compra, renovar o arrendamento ou devolver o bem.</p><p>As alternativas A, C e D erram ao dar a propriedade inicial ao cliente, restringir as opções finais do leasing ou inventar regras de carência de corretagem.</p>",
     "enunciado": "<p>O arrendamento mercantil (leasing) é uma estrutura de crédito regulada pelo Banco Central com regras próprias de propriedade e encerramento. Ao comparar a alienação fiduciária com o leasing financeiro, constata-se que no leasing:</p>",
     "alternativas": {
      "a": "O cliente torna-se proprietário definitivo na assinatura do contrato, sendo-lhe vedada a devolução do bem ao final do prazo.",
      "b": "A arrendadora permanece como proprietária do bem durante o contrato, e ao final o cliente pode optar por comprar, renovar o contrato ou devolver o bem.",
      "c": "A única alternativa ao término do contrato é a consolidação automática da propriedade plena pelo cliente, sem a opção de devolução.",
      "d": "O Valor Residual Garantido (VRG) é uma tarifa de encerramento cobrada apenas do arrendatário que devolve o bem ao final do contrato."
     },
     "gabarito": "b",
     "feedback": {
      "a": "No leasing o cliente é arrendatário com posse e uso, enquanto a arrendadora é a proprietária do bem.",
      "c": "A consolidação única automática é característica da alienação fiduciária com quitação; no leasing existem três opções ao final.",
      "d": "O VRG é o valor mínimo assegurado à arrendadora no leasing financeiro, usado para liquidar a opção de compra, e não uma tarifa de devolução do bem."
     }
    },
    {
     "id": "cpa-rel-06-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a D. As linhas emergenciais como cheque especial servem a cobrir pequenos descasamentos de caixa de pouquíssimos dias, sendo o CDC parcelado a modalidade correta para bens duráveis devido às taxas mais baixas e parcelas previsíveis.</p><p>As alternativas A, B e C incentivam o uso incorreto de linhas emergenciais caras para longo prazo ou criam exigências descabidas de garantias imobiliárias para móveis.</p>",
     "enunciado": "<p>Um cliente planeja financiar um eletrodoméstico de uso imediato e busca orientação na agência. Ele avalia utilizar o limite do cheque especial ou contratar um Crédito Direto ao Consumidor (CDC) parcelado. Considerando a adequação do prazo e o custo da modalidade, o gerente deve orientar que:</p>",
     "alternativas": {
      "a": "O CDC é inadequado para a compra de bens duráveis por exigir a alienação fiduciária de imóveis quitados do consumidor.",
      "b": "O cheque especial é a linha mais recomendada para compras parceladas de bens duráveis devido à isenção de tarifas operacionais por prazos longos.",
      "c": "O cliente deve utilizar o rotativo do cartão de crédito por dois anos para manter a margem do consignado livre para investimentos.",
      "d": "O cheque especial destina-se a pequenos descasamentos de caixa de poucos dias, devendo o bem durável ser financiado via CDC com prazo e taxa adequados."
     },
     "gabarito": "d",
     "feedback": {
      "a": "O CDC de varejo financia bens móveis sem exigir alienação fiduciária de imóveis.",
      "b": "O cheque especial possui juros elevados e não deve ser usado para financiamento parcelado de bens duráveis.",
      "c": "Usar o rotativo por longos prazos gera superendividamento acelerado devido ao altíssimo Custo Efetivo Total."
     }
    },
    {
     "id": "cpa-rel-06-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. O consignado lidera a hierarquia de custos pelo menor CET gerado pelo desconto em folha, mas o profissional deve alertar que a operação compromete a margem consignável e não pode ser cancelada unilateralmente enquanto houver débito.</p><p>As alternativas A, C e D erram ao afirmar que linhas sem garantia são mais baratas, sugerir o cheque especial para prazos longos ou desconsiderar a relevância do CET.</p>",
     "enunciado": "<p>Uma cliente com salário estável pretende contratar um empréstimo de uso livre para cobrir despesas de saúde e avalia opções com seu gerente. Ao estruturar a recomendação adequada observando a hierarquia de custos e os impactos da operação, a orientação correta deve considerar que:</p>",
     "alternativas": {
      "a": "O crédito pessoal sem garantia deve ser a primeira opção por ter taxas inferiores a qualquer linha garantida.",
      "b": "A contratação do crédito consignado oferece um CET menor devido ao desconto em folha, mas trava a margem e não se cancela unilateralmente com o saldo devedor ativo.",
      "c": "A cliente deve parcelar o valor em 60 vezes no cheque especial para garantir parcelas menores no orçamento mensal.",
      "d": "A comparação pelo CET é dispensável quando o banco divulga a taxa de juros nominal mensal, que já reflete o custo integral da operação."
     },
     "gabarito": "b",
     "feedback": {
      "a": "Linhas sem garantia possuem risco de crédito maior e taxas superiores às linhas garantidas ou consignadas.",
      "c": "Cheque especial não é linha de parcelamento longo em 60 vezes, apresentando o custo mais elevado do mercado.",
      "d": "A taxa nominal não inclui IOF, tarifas e seguros; é justamente por isso que a comparação se faz pelo CET, que reúne todos esses encargos em um único percentual."
     }
    },
    {
     "id": "cpa-rel-06-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a A. O prazo do financiamento/empréstimo deve casar com a vida útil do bem ou serviço financiado para não comprometer o fluxo futuro de caixa, sendo terminantemente proibido assediar ou pressionar o consumidor para a tomada de crédito.</p><p>As alternativas B, C e D defendem descompassos graves entre prazos de dívida e consumo, além de violar diretamente as vedações legais da Lei do Superendividamento.</p>",
     "enunciado": "<p>Um consumidor solicita um empréstimo para custear um pacote de viagem de férias de dez dias de duração e consulta as opções de prazos. Ao mesmo tempo, um profissional analisa as regras morais e regulatórias de proteção ao consumidor na oferta de crédito (Lei 14.181/2021). Assinale a alternativa correta sobre o casamento de prazos e os deveres de conduta na concessão do crédito:</p>",
     "alternativas": {
      "a": "O prazo da dívida deve casar com a vida útil do bem ou serviço (evitando parcelamentos longos como 60 meses para viagens curtas), sendo vedado assediar ou pressionar o consumidor para contratar crédito.",
      "b": "O parcelamento em 60 meses é a conduta mais recomendada para custear serviços de consumo imediato, pois minimiza o impacto do valor nominal da parcela.",
      "c": "A instituição de crédito está autorizada a ocultar a taxa de juros nominal do contrato caso o cliente assine um termo declarando ser vulnerável.",
      "d": "O gerente pode insistir continuamente na contratação de linhas adicionais caso o cliente seja analfabeto ou idoso, sem restrição regulatória."
     },
     "gabarito": "a",
     "feedback": {
      "b": "Parcelar serviços de consumo imediato em prazos longos compromete a poupança futura por anos sem deixar ativo correspondente.",
      "c": "É expressamente vedado ocultar ou dificultar a compreensão dos ônus e riscos da contratação de crédito.",
      "d": "A Lei do Superendividamento proíbe expressamente assediar ou pressionar consumidores, agravando a vedação quando idosos, analfabetos ou vulneráveis."
     }
    }
   ],
   "Financiamento imobiliário, de veículos e crédito estudantil": [
    {
     "id": "cpa-rel-07-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a D. O parâmetro de comprometimento da renda familiar em cerca de 30% para financiamento imobiliário é fixado por política de crédito interna de cada instituição bancária, e não por norma regulatória do Banco Central ou do CMN.</p><p>As alternativas A, B e C erram ao tratar a política comercial como norma compulsória do BCB, confundir com margem consignável ou negar a existência de análise de risco de crédito pelos bancos.</p>",
     "enunciado": "<p>Durante o atendimento a um cliente que busca financiamento imobiliário, surge uma dúvida sobre o percentual máximo de comprometimento da renda familiar mensal aceito para aprovação do crédito. A respeito desse limite praticado no mercado financeiro, é correto afirmar que:</p>",
     "alternativas": {
      "a": "A legislação proíbe as instituições financeiras de estabelecerem qualquer limite de comprometimento de renda para o crédito imobiliário.",
      "b": "O teto de 30% da renda é fixado compulsoriamente por resolução do Banco Central para todas as operações do mercado imobiliário.",
      "c": "O limite máximo de comprometimento de renda para imóveis é regido estritamente pelas regras da margem consignável do INSS.",
      "d": "O parâmetro de cerca de 30% da renda é uma política de crédito de cada instituição financeira, não constituindo uma norma rígida do Banco Central ou do CMN."
     },
     "gabarito": "d",
     "feedback": {
      "a": "Os bancos possuem autonomia para estipular políticas de crédito de análise de risco e limitar a parcela à capacidade do cliente.",
      "b": "O Banco Central e o CMN não fixam percentual regulatório de comprometimento de renda para financiamento imobiliário.",
      "c": "A margem consignável aplica-se exclusivamente a descontos em folha de empréstimos consignados, não ao crédito imobiliário em geral."
     }
    },
    {
     "id": "cpa-rel-07-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. O veículo é um bem de consumo durável que deprecia e gera despesas correntes, ao passo que o crédito estudantil constitui investimento em capital humano contraído na fase de acumulação para ampliar o potencial de geração de renda.</p><p>As alternativas A, B e D erram ao qualificar veículos como investimentos rentáveis, citar a carência de 18 meses revogada na reforma do Fies ou permitir o uso descabido do FGTS em veículos.</p>",
     "enunciado": "<p>Ao comparar os impactos financeiros de um financiamento de veículos e de um financiamento para crédito estudantil (Fies), um gerente orienta um cliente jovem em início de carreira. Sobre as diferenças conceituais dessas duas linhas, é correto afirmar que:</p>",
     "alternativas": {
      "a": "O crédito estudantil conta com carência obrigatória de 18 meses após a formatura em todos os contratos novos regidos pela reforma de 2017.",
      "b": "O financiamento de veículo gera rendimento real atrelado à inflação, enquanto o crédito estudantil exige a alienação fiduciária do diploma.",
      "c": "O veículo é um bem de consumo que sofre depreciação ao longo do tempo, enquanto o crédito estudantil é um investimento em capital humano focado na elevação de renda futura.",
      "d": "O financiamento de veículos permite o uso do saldo do FGTS do trabalhador sem vinculação ao Sistema Financeiro da Habitação."
     },
     "gabarito": "c",
     "feedback": {
      "a": "A Lei 13.530/2017 eliminou a carência de 18 meses após a formatura para os novos contratos do Fies.",
      "b": "Veículos depreciam em vez de render com a inflação, e diplomas acadêmicos não são bens passíveis de alienação fiduciária.",
      "d": "A utilização do saldo do FGTS é restrita às operações imobiliárias enquadradas no Sistema Financeiro da Habitação (SFH)."
     }
    },
    {
     "id": "cpa-rel-07-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. A orientação técnica em financiamento de veículos é priorizar maior entrada e prazos mais curtos, evitando que a depreciação contínua do bem faça o saldo devedor da dívida superar o próprio valor de venda do veículo.</p><p>As alternativas A, C e D falham ao ignorar a depreciação acelerada dos carros, sugerir uso ilegal do FGTS para veículos ou inventar regras absurdas sobre consórcios sem taxas.</p>",
     "enunciado": "<p>Um cliente pretende adquirir um veículo de R$ 80 mil e avalia duas propostas de financiamento. A proposta 1 prevê financiamento integral sem entrada em 60 meses, enquanto a proposta 2 exige entrada de R$ 30 mil e prazo de 24 meses. Sob a ótica do planejamento financeiro e do risco de descasamento por depreciação, a orientação adequada é:</p>",
     "alternativas": {
      "a": "Escolher o prazo de 60 meses sem entrada (proposta 1) para reduzir o valor nominal da parcela, visto que veículos valorizam no mercado usado.",
      "b": "Dar a maior entrada possível e encurtar o prazo (proposta 2), evitando que a depreciação do bem faça o saldo devedor superar o valor de mercado do veículo.",
      "c": "Financiar em 60 meses sem entrada e utilizar o saldo do FGTS do comprador para amortizar as parcelas futuras.",
      "d": "Escolher a proposta 1 e compensar a depreciação contratando seguro do veículo, o que garantiria a cobertura do saldo devedor em qualquer cenário de venda."
     },
     "gabarito": "b",
     "feedback": {
      "a": "Veículos depreciam no mercado usado, fazendo com que prazos longos acumulem juros e deixem o saldo devedor maior que o bem.",
      "c": "O saldo do FGTS não pode ser utilizado para amortizar financiamento de veículos.",
      "d": "O seguro cobre sinistro, e não a diferença entre saldo devedor e valor de mercado numa venda voluntária; o que protege o cliente é maior entrada e prazo mais curto."
     }
    },
    {
     "id": "cpa-rel-07-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. Como o imóvel é um ativo altamente ilíquido que não pode ser convertido em caixa rapidamente em emergências, o profissional deve orientar a manutenção da reserva de emergência em liquidez imediata, dando uma entrada moderada.</p><p>As alternativas B, C e D erram ao defender o esvaziamento total do colchão de liquidez da família, promover resgates incompatíveis ou inventar cauções obrigatórias no Bacen.</p>",
     "enunciado": "<p>Um casal possui R$ 100 mil aplicados na caderneta de poupança como sua única reserva de emergência e pretende adquirir um imóvel residencial de moradia enquadrado no Sistema Financeiro da Habitação (SFH). Eles procuram o gerente dispostos a dar a totalidade dos R$ 100 mil como entrada. A conduta de atendimento correta para essa situação é:</p>",
     "alternativas": {
      "a": "Orientar a utilização de uma entrada menor e a preservação da reserva de emergência, visto que o imóvel possui altíssima iliquidez e não resolve imprevistos imediatos.",
      "b": "Orientar o casal a utilizar 100% da poupança na entrada, pois a entrada maior elimina a incidência de juros sobre o saldo financiado.",
      "c": "Recomendar a utilização de todo o dinheiro da reserva de emergência e o resgate compulsório de fundos de ações fechados para resgate no mesmo dia.",
      "d": "Exigir que a reserva de emergência seja depositada em conta caução do Banco Central como condição para liberação da alienação fiduciária."
     },
     "gabarito": "a",
     "feedback": {
      "b": "Entrada maior reduz o saldo financiado e o total de juros, mas não os elimina; e zerar a reserva expõe a família ao rotativo no primeiro imprevisto, porque o imóvel é ilíquido.",
      "c": "Além de esvaziar a reserva, a alternativa supõe resgate imediato em fundos fechados, que por definição não admitem resgate de cotas antes do encerramento do prazo.",
      "d": "O Banco Central não exige depósito de caução da reserva de emergência do cliente para liberar financiamentos imobiliários."
     }
    },
    {
     "id": "cpa-rel-07-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a B. Com a reforma promovida pela Lei 13.530/2017, a carência de 18 meses após a formatura acabou, a amortização inicia-se após a conclusão do curso, a modalidade principal passou a ter juro zero e a exigência de fiador foi mitigada pelo fundo garantidor.</p><p>As alternativas A, C e D erram ao invocar regras e prazos de carência revogados, exigir garantias imobiliárias descabidas ou negar a atualização periódica por editais.</p>",
     "enunciado": "<p>Um estudante do ensino superior planeja contratar o financiamento estudantil através do Fies regulado pela Lei 13.530/2017 para custear sua graduação. Ao analisar as regras vigentes do programa no tocante ao período pós-formatura, à taxa de juros na modalidade principal e às garantias, verifica-se que:</p>",
     "alternativas": {
      "a": "O estudante dispõe de 18 meses de carência sem cobranças após a formatura, e a parcela pós-carência é fixa, sem qualquer vinculação à renda do formado.",
      "b": "A carência de 18 meses após a formatura foi eliminada, a modalidade principal possui juro zero, e a dependência do fiador tradicional foi reduzida com a adesão ao fundo garantidor.",
      "c": "O pagamento das parcelas de amortização inicia-se apenas quando o formado atingir 10 anos de graduação, sendo exigida a alienação fiduciária de bem imóvel próprio.",
      "d": "Os parâmetros de prazos e taxas do Fies são imutáveis por lei constitucional, sendo proibida a alteração por editais das instituições de ensino."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A carência de 18 meses foi extinta pela reforma da Lei 13.530/2017 e a modalidade principal opera com juro zero.",
      "c": "A cobrança tem início imediatamente após a conclusão do curso (sem a antiga carência) e a garantia baseia-se em fundo garantidor, não em imóveis.",
      "d": "Os parâmetros práticos como faixas de renda e condições são regulados e ajustados frequentemente a cada edital do programa."
     }
    }
   ],
   "Microcrédito, crédito rural e linhas para reforma e energia sustentável": [
    {
     "id": "cpa-rel-08-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. No microcrédito produtivo orientado, a taxa efetiva de juros é limitada a 4% ao mês, a taxa de abertura de crédito tem teto de 3% (vedada qualquer outra tarifa) e a soma dos saldos devedores na mesma instituição não pode ultrapassar R$ 21 mil.</p><p>As alternativas B, C e D erram ao afirmar que os juros são livres, proibir a taxa de abertura legal permitida ou exigir garantias reais incompatíveis com o produto.</p>",
     "enunciado": "<p>O microcrédito produtivo orientado é uma modalidade destinada a pequenos empreendedores com regras específicas estabelecidas pelo Conselho Monetário Nacional (CMN). Quanto aos limites operacionais de taxas e tetos aplicáveis a essa modalidade, é correto afirmar que:</p>",
     "alternativas": {
      "a": "A taxa de juros efetiva máxima é de 4% ao mês, a taxa de abertura de crédito é de no máximo 3% do valor concedido e o saldo devedor do tomador na mesma instituição não pode exceder R$ 21 mil.",
      "b": "As taxas de juros são livremente pactuadas sem teto regulatório, e o saldo devedor na mesma instituição pode atingir até R$ 100 mil.",
      "c": "A taxa de abertura de crédito é totalmente proibida, mas a instituição pode cobrar tarifas mensais de manutenção de cadastro.",
      "d": "A concessão exige obrigatoriamente a apresentação de garantias reais imobiliárias registradas em cartório."
     },
     "gabarito": "a",
     "feedback": {
      "b": "O CMN fixa teto de juros efetivos de até 4% ao mês e limita o saldo devedor na mesma instituição a R$ 21 mil.",
      "c": "A taxa de abertura de crédito é permitida até o limite de 3%, sendo vedada expressamente qualquer outra taxa ou despesa.",
      "d": "O microcrédito atende público sem garantias reais, sendo comum a utilização do aval solidário."
     }
    },
    {
     "id": "cpa-rel-08-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a D. O Manual de Crédito Rural define estritamente quatro finalidades operacionais: custeio (despesas do ciclo produtivo), investimento (bens de vida útil longa), comercialização (estocagem e venda da safra) e industrialização (beneficiamento da produção).</p><p>As alternativas A, B e C erram ao incluir previdência, imobiliário urbano, capital de giro livre ou estruturas securitárias que não compõem as finalidades rurais oficiais.</p>",
     "enunciado": "<p>O crédito rural é uma linha de financiamento direcionada regulada pelo Manual de Crédito Rural do Banco Central. As quatro finalidades oficiais previstas pela regulamentação para o crédito rural correspondem a:</p>",
     "alternativas": {
      "a": "Arrendamento mercantil, exportação industrial, investimento e securitização.",
      "b": "Custeio, investimento, previdência privada e capital de giro livre.",
      "c": "Aquisição de imóvel urbano, reforma residencial, custeio e poupança.",
      "d": "Custeio, investimento, comercialização e industrialização."
     },
     "gabarito": "d",
     "feedback": {
      "a": "Arrendamento mercantil e securitização constituem operações financeiras específicas, e não finalidades do crédito rural.",
      "b": "Previdência privada e capital de giro de livre destinação não são finalidades do crédito rural.",
      "c": "Imóveis urbanos e reformas residenciais pertencem ao crédito imobiliário, e não às finalidades rurais."
     }
    },
    {
     "id": "cpa-rel-08-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. A Lei 15.364/2026 permitiu a destinação complementar a microfinanças (necessidades essenciais como saúde, moradia de baixo valor e mobilidade) limitada a até 20% do limite do somatório dos saldos devedores das operações de microcrédito produtivo orientado do tomador.</p><p>As alternativas A, B e D falham ao afirmar a extinção do crédito produtivo, permitir consumos supérfluos sem limites ou inventar regras de depósitos a prazo em bancos de investimento.</p>",
     "enunciado": "<p>Com a promulgação da Lei 15.364 em 2026, foi criada a categoria de microfinanças no âmbito das operações de microcrédito. Ao comparar o núcleo produtivo tradicional do microcrédito com a nova categoria de microfinanças, verifica-se que:</p>",
     "alternativas": {
      "a": "As microfinanças permitem a liberação ilimitada de recursos sem teto para a compra de veículos de luxo e viagens de lazer.",
      "b": "A nova categoria substituiu integralmente o microcrédito produtivo, proibindo a concessão de recursos para atividades comerciais de microempreendedores.",
      "c": "As microfinanças admitem o atendimento de necessidades essenciais (como moradia de baixo valor, saúde e mobilidade) até 20% do limite do somatório dos saldos devedores das operações de microcrédito produtivo orientado do tomador.",
      "d": "A modalidade de microfinanças exige o repasse compulsório de 100% dos depósitos a prazo captados pelos bancos de investimento."
     },
     "gabarito": "c",
     "feedback": {
      "a": "As microfinanças são restritas a finalidades essenciais de cidadania (saúde, moradia, mobilidade) e limitadas ao teto de 20%.",
      "b": "O núcleo do microcrédito continua focado na atividade produtiva, servindo as microfinanças apenas como um complemento com teto.",
      "d": "O direcionamento obrigatório atinge os depósitos à vista (2%) em bancos comerciais, múltiplos e Caixa, não cobrando 100% dos depósitos a prazo."
     }
    },
    {
     "id": "cpa-rel-08-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a D. A aquisição de máquinas de vida útil longa é crédito de investimento e, para contratos a partir de 1º de março de 2026 em propriedades com área superior a 300 hectares, a fiscalização por sensoriamento remoto tornou-se obrigatória por norma.</p><p>As alternativas A, B e C erram na classificação da finalidade (confundindo investimento com custeio, crédito livre ou comercialização) ou negam a fiscalização e controle de notas.</p>",
     "enunciado": "<p>Um produtor rural procura a agência para contratar financiamento destinado à aquisição de um trator agrícola e de colheitadeiras para sua fazenda de 350 hectares. Ele pergunta ao gerente sobre a classificação dessa operação e as exigências regulatórias de fiscalização. A orientação correta é:</p>",
     "alternativas": {
      "a": "A aquisição de máquinas agrícolas é classificada como crédito de comercialização, sendo proibida a verificação das notas fiscais das colheitadeiras.",
      "b": "Trata-se de crédito rural de custeio, sendo obrigatória a visita presencial do gerente de contas à fazenda antes de cada liberação de parcela.",
      "c": "A operação enquadra-se como empréstimo pessoal de livre destinação, dispensando qualquer comprovação de compra ou fiscalização documental.",
      "d": "Trata-se de crédito rural de investimento, sendo a fiscalização por sensoriamento remoto obrigatória para empreendimentos contratados a partir de março de 2026 com área superior a 300 hectares."
     },
     "gabarito": "d",
     "feedback": {
      "a": "A compra de colheitadeiras constitui investimento (não comercialização) e a fiscalização exige a apresentação das notas fiscais em até 60 dias.",
      "b": "Máquinas de vida útil longa enquadram-se como investimento (não custeio), e o monitoramento pode utilizar métodos remotos sem obrigatoriedade de visita presencial geral.",
      "c": "Tratores e máquinas rurais financiam-se via crédito rural direcionado de investimento, exigindo orçamento e fiscalização das notas fiscais."
     }
    },
    {
     "id": "cpa-rel-08-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a C. Na linha de reforma, o repasse vinculado ao lojista impede o desvio de finalidade; no financiamento de energia solar, a garantia usual é a alienação fiduciária dos painéis, que confere ao banco a propriedade resolúvel e ao cliente a posse direta para uso.</p><p>As alternativas A, B e D erram ao permitir depósitos livres no crédito de reforma, exigir perda definitiva da moradia, encaminhar para rotativo de cartão ou retirar do cliente a posse direta dos painéis solares.</p>",
     "enunciado": "<p>Um cliente busca financiamento bancário para reforma residencial (material de construção) e para instalação de painéis de energia solar fotovoltaica em seu imóvel. Ao analisar a operacionalização dessas duas linhas de crédito direcionadas quanto à liberação de recursos e às garantias, a conduta técnica correta exige que:</p>",
     "alternativas": {
      "a": "Ambas as operações sejam concedidas sem qualquer exigência de garantia ou vinculação, através do uso do rotativo do cartão de crédito corporativo.",
      "b": "O valor do financiamento de material de construção seja depositado livremente na conta corrente do cliente, e a energia solar exija a transferência definitiva e irrevogável do imóvel ao banco.",
      "c": "A linha de reforma utilize o repasse vinculado com pagamento direto ao lojista conveniado, e a linha de energia solar utilize a alienação fiduciária dos equipamentos com propriedade resolúvel para o credor.",
      "d": "O banco retenha a posse direta dos painéis solares na agência até a quitação da última parcela do contrato."
     },
     "gabarito": "c",
     "feedback": {
      "a": "Linhas especiais direcionadas possuem regras de comprovação e repasse vinculado, não sendo operadas via rotativo de cartão.",
      "b": "O crédito de reforma utiliza repasse vinculado para evitar desvio de finalidade, e a alienação fiduciária confere propriedade resolúvel, mantendo a posse com o cliente.",
      "d": "Na alienação fiduciária de equipamentos, a posse direta e o uso dos painéis fotovoltaicos ficam com o cliente no imóvel."
     }
    }
   ],
   "Reserva de emergência: montante e ativos de alta liquidez": [
    {
     "id": "cpa-rel-09-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. A reserva de emergência serve como um escudo financeiro para cobrir imprevistos cotidianos, e seu tamanho deve ser mensurado a partir do custo de vida mensal (despesas essenciais) multiplicado pela quantidade de meses recomendada de acordo com a estabilidade da renda do cliente.</p><p>As alternativas A, B e D erram ao usar a renda bruta no cálculo, indicar ativos voláteis como ações ou recomendar produtos ilíquidos como previdência fechada.</p>",
     "enunciado": "<p>A reserva de emergência constitui a etapa inicial do planejamento financeiro pessoal de qualquer investidor. Sob o ponto de vista da mensuração do montante e da sua função precípua, a reserva serve para:</p>",
     "alternativas": {
      "a": "Garantir a compra de ações no mercado fracionário durante momentos de alta volatilidade da bolsa de valores.",
      "b": "Maximizar a rentabilidade da carteira no longo prazo, sendo calculada multiplicando-se o salário bruto pelo número de dependentes.",
      "c": "Absorver imprevistos financeiros, devendo seu valor ser dimensionado com base no custo de vida mensal da família e na estabilidade da sua renda.",
      "d": "Acumular recursos em previdência fechada para obtenção do benefício fiscal máximo no Imposto de Renda."
     },
     "gabarito": "c",
     "feedback": {
      "a": "Compra de ações envolve risco de mercado e oscilação, o que contraria a função protetiva da reserva de emergência.",
      "b": "A reserva baseia-se no custo de vida mensal e não na renda bruta multiplicada por dependentes.",
      "d": "Previdência fechada possui travas de iliquidez, sendo inadequada para a função de socorro financeiro imediato."
     }
    },
    {
     "id": "cpa-rel-09-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a D. A régua do tamanho da reserva acompanha a volatilidade e previsibilidade da renda: servidores públicos com estabilidade exigem de 3 a 6 meses do custo de vida, enquanto autônomos e empresários necessitam de 9 a 12 meses devido à maior oscilação em suas receitas.</p><p>As alternativas A, B e C erram ao atribuir seguro-desemprego a autônomos, engessar o montante em 24 meses de salário bruto ou isentar servidores estáveis da necessidade de reserva.</p>",
     "enunciado": "<p>Ao comparar os perfis de um servidor público estatutário com estabilidade e o de um profissional autônomo sem renda fixa mensal, o profissional de atendimento deve dimensionar a reserva de emergência de ambos considerando que:</p>",
     "alternativas": {
      "a": "O servidor público está isento de manter reserva de emergência por não possuir risco de flutuação de despesas de saúde ou familiares.",
      "b": "O autônomo necessita de uma reserva menor do que o servidor público por possuir a garantia automática do seguro-desemprego.",
      "c": "Ambos devem manter exatamente o mesmo valor fixo equivalente a 24 meses de salários brutos em contas de depósito a prazo fechadas.",
      "d": "Quanto maior a instabilidade da renda, maior deve ser a reserva (sendo 3 a 6 meses para o servidor estável e 9 a 12 meses para o autônomo)."
     },
     "gabarito": "d",
     "feedback": {
      "a": "Todo investidor está sujeito a despesas imprevistas (doenças, acidentes, reformas), precisando de reserva independentemente de seu vínculo profissional.",
      "b": "O autônomo não tem acesso ao seguro-desemprego nem ao FGTS, exigindo uma reserva substancialmente maior do que o servidor estável.",
      "c": "A quantidade de meses varia de acordo com a previsibilidade da renda e não se usa o salário bruto em depósitos ilíquidos."
     }
    },
    {
     "id": "cpa-rel-09-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. O Fundo Garantidor de Créditos (FGC) reduz o risco de crédito em aplicações como CDBs até o limite de R$ 250 mil por CPF em cada conglomerado financeiro, com o teto global de R$ 1 milhão renovável a cada quatro anos.</p><p>As alternativas A, C e D incorrem em erros ao prever coberturas ilimitadas, vincular os limites a contratos individuais ou errar os valores regulamentares do FGC.</p>",
     "enunciado": "<p>Um investidor aplica sua reserva de emergência em um CDB de liquidez diária emitido por um banco de médio porte. A respeito da proteção e da limitação da garantia prestada pelo Fundo Garantidor de Créditos (FGC) a essa aplicação, é correto afirmar que:</p>",
     "alternativas": {
      "a": "O FGC cobre integralmente e sem limite de valor qualquer aplicação em CDB utilizada para fins de reserva de emergência.",
      "b": "O FGC garante até R$ 250 mil por CPF em cada conglomerado financeiro, limitado ao teto global de R$ 1 milhão a cada quatro anos.",
      "c": "A garantia do FGC para CDBs de liquidez diária é de R$ 250 mil por contrato de aplicação, sem limite de teto quadrienal.",
      "d": "A cobertura do FGC limita-se a R$ 100 mil por CPF, sendo zerada caso o investidor realize o resgate antes de 365 dias."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A cobertura do FGC não é ilimitada; submete-se ao teto de R$ 250 mil por conglomerado e R$ 1 milhão quadrienal.",
      "c": "O teto de R$ 250 mil aplica-se por CPF e por conglomerado financeiro (não por contrato) e respeita o teto global de R$ 1 milhão a cada quatro anos.",
      "d": "O valor correto da garantia individual por conglomerado é R$ 250 mil e não há perda por resgate em prazo inferior a um ano."
     }
    },
    {
     "id": "cpa-rel-09-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. A LCI possui carência mínima regulamentar de seis meses (Resolução CMN 5.215/2025 para papéis sem índice de preços), durante a qual o emissor é vedado de efetuar o resgate ou recomprar o título, o que torna o ativo totalmente incompatível com a necessidade de liquidez imediata da reserva.</p><p>As alternativas A, B e D erram ao afirmar que a carência é de um dia, usar prazos defasados de 12 meses com resgates por taxa ou tentar contornar normas legais de títulos com seguros de vida.</p>",
     "enunciado": "<p>Um cliente ingressa na agência e deseja aplicar R$ 50 mil referentes à sua reserva de emergência em uma Letra de Crédito Imobiliário (LCI), atraído pela isenção de Imposto de Renda Pessoa Física. Considerando a regulamentação do CMN sobre prazos de carência sem atualização por índice de preços e a finalidade da reserva de emergência, a orientação correta do gerente deve ser:</p>",
     "alternativas": {
      "a": "Informar que a LCI possui prazo de carência de 12 meses fixos, mas que a instituição pode realizar o resgate antecipado diário mediante cobrança de taxa administrativa.",
      "b": "Recomendar a LCI de forma irrestrita, pois o prazo mínimo de carência exigido pelo CMN para títulos imobiliários é de apenas 1 dia útil.",
      "c": "Contraindicar a LCI para a reserva de emergência, pois o título possui prazo mínimo de vencimento de seis meses no qual a instituição não pode resgatar nem recomprar o papel.",
      "d": "Autorizar a aplicação na LCI desde que o cliente contrate um seguro de vida com cobertura de resgate imediato no mesmo dia."
     },
     "gabarito": "c",
     "feedback": {
      "a": "Desde maio de 2025 o prazo da LCI comum é de seis meses (e não 12 meses), e a instituição emissora é expressamente proibida de recomprar ou resgatar antes do prazo legal.",
      "b": "A LCI exige prazo mínimo de carência de seis meses (quando sem índice de preços), inviabilizando o resgate diário imediato que a reserva exige.",
      "d": "A contratação de seguro de vida não altera as travas normativas de carência impostas pelo CMN para emissão de LCI."
     }
    },
    {
     "id": "cpa-rel-09-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a D. O Tesouro Selic e os fundos DI possuem baixíssima oscilação nominal e alta liquidez; a poupança exige atenção ao aniversário mensal para não perder o rendimento do mês, e a renda variável (ações) é terminantemente vedada para reservas pelo risco de oscilação e perdas no curto prazo.</p><p>As alternativas A, B e C erram ao atribuir rendimentos diários inexistentes à poupança, isentar fundos DI de come-cotas e IOF ou classificar ações como garantidas pelo Tesouro.</p>",
     "enunciado": "<p>Um investidor precisa alocar sua reserva de emergência e analisa a dinâmica operacional, os tributos incidentes e os riscos de quatro aplicações: Tesouro Selic, caderneta de poupança, fundo de renda fixa DI e ações de empresas de grande porte. Com base nas características técnicas dessas aplicações, assinale a alternativa correta:</p>",
     "alternativas": {
      "a": "As ações de empresas de grande porte são recomendadas para a reserva por apresentarem alta liquidez em bolsa e garantia integral do Tesouro Nacional.",
      "b": "A caderneta de poupança é o único veículo totalmente imune a perdas de rendimento intramês, pagando juros pro rata die em qualquer data de resgate.",
      "c": "Os fundos DI são isentos de retenção semestral de imposto de renda (come-cotas) e isentos de IOF em resgates inferiores a 30 dias.",
      "d": "O Tesouro Selic e os fundos DI atendem ao requisito de baixíssima volatilidade nominal, enquanto a poupança perde rentabilidade do mês se resgatada antes da data de aniversário e as ações são vedadas devido ao risco de mercado."
     },
     "gabarito": "d",
     "feedback": {
      "a": "Ações sofrem risco de mercado, com oscilação de preços, e não contam com garantia do Tesouro Nacional, o que as veta para a reserva de emergência.",
      "b": "A poupança só credita rendimento na data de aniversário mensal; resgates em dias intermediários perdem o rendimento de todo o período.",
      "c": "Fundos DI sofrem a incidência do come-cotas semestral (maio e novembro) e do IOF regressivo em resgates com menos de 30 dias."
     }
    }
   ],
   "Balanço patrimonial pessoal: indicadores e patrimônio líquido": [
    {
     "id": "cpa-rel-10-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. O balanço patrimonial fotografa a posição estática de riqueza (estoque) em uma data específica, onde os ativos devem ser atualizados e mensurados pelo seu valor de mercado corrente.</p><p>As alternativas B, C e D erram ao incluir movimentações de receitas e despesas (que pertencem ao fluxo), congelar valores históricos de compra ou excluir os ativos de uso da família.</p>",
     "enunciado": "<p>O balanço patrimonial pessoal é uma ferramenta fundamental de análise financeira que difere do orçamento doméstico em sua natureza e temporalidade. Sobre a montagem do balanço patrimonial pessoal e a avaliação de seus componentes, é correto afirmar que:</p>",
     "alternativas": {
      "a": "O balanço mede o estoque acumulado de bens, direitos e obrigações em uma data específica, avaliando os ativos pelo seu valor de mercado.",
      "b": "O balanço registra o fluxo de receitas e despesas mensais, devendo incluir o salário líquido e o valor da fatura de supermercado do mês.",
      "c": "Os ativos do balanço devem ser mantidos obrigatoriamente pelo preço histórico de compra da escritura original sem atualização.",
      "d": "O balanço patrimonial considera apenas bens de alta liquidez imediata, excluindo imóveis residenciais e veículos de uso familiar."
     },
     "gabarito": "a",
     "feedback": {
      "b": "Salários e despesas de consumo semanal pertencem ao fluxo de caixa, não ao balanço de estoque estático.",
      "c": "Os ativos no balanço patrimonial devem ser atualizados pelo valor de mercado na data da demonstração.",
      "d": "Bens imobilizados como moradia e veículos entram normalmente no balanço na categoria de ativos de uso."
     }
    },
    {
     "id": "cpa-rel-10-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. A moradia familiar é um ativo de uso porque serve de habitação e não gera fluxo de renda, e as dívidas ativas devem ser lançadas no passivo pelo seu saldo devedor total remanescente.</p><p>As alternativas A, B e D erram ao classificar a residência própria como investimento, ignorar o PGBL do balanço ou colocar apenas parcelas mensais no passivo de estoque.</p>",
     "enunciado": "<p>Na estrutura do balanço patrimonial pessoal, os ativos são divididos entre liquidez, uso e investimento, enquanto os passivos registram os compromissos financeiros. Ao comparar a classificação da moradia própria e o registro de dívidas no balanço, observa-se que:</p>",
     "alternativas": {
      "a": "A moradia própria e os saldos de PGBL são desconsiderados do balanço por não apresentarem cotação diária na bolsa de valores.",
      "b": "A moradia própria é um ativo de investimento por gerar renda de aluguel direta, e o financiamento entra apenas pela parcela do mês seguinte.",
      "c": "A moradia própria é classificada como ativo de uso, e o financiamento imobiliário deve ser lançado no passivo pelo saldo devedor total.",
      "d": "O veículo da família entra no ativo de liquidez por possuir alienação fiduciária, e o financiamento de veículos entra no fluxo de caixa."
     },
     "gabarito": "c",
     "feedback": {
      "a": "PGBL e imóveis compõem os ativos do cliente (investimento e uso, respectivamente), independentemente de negociação em bolsa.",
      "b": "A casa própria onde se mora não gera renda e constitui ativo de uso, enquanto o passivo registra o saldo devedor total, não a parcela.",
      "d": "O veículo de uso é ativo de uso (baixa liquidez e depreciação) e o saldo devedor do seu financiamento integra o passivo no balanço."
     }
    },
    {
     "id": "cpa-rel-10-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. O Patrimônio Líquido é dado pela diferença entre Ativo Total e Passivo Total: R$ 600.000 - R$ 200.000 = R$ 400.000. O Índice de Endividamento (indicador de estoque do balanço) é a divisão do Passivo Total pelo Ativo Total: R$ 200.000 / R$ 600.000 = 0,3333, ou seja, 33,3%.</p><p>As alternativas B, C e D apresentam erros de cálculo aritmético na subtração do patrimônio líquido ou na razão de endividamento do balanço.</p>",
     "enunciado": "<p>Um investidor possui R$ 600 mil em ativos totais (sendo R$ 100 mil em liquidez e R$ 500 mil em imóvel de uso) e R$ 200 mil em passivos totais. Ele poupa R$ 3 mil mensais de uma renda líquida de R$ 10 mil e paga R$ 2 mil em parcelas de financiamento. Ao calcular o Patrimônio Líquido e o Índice de Endividamento desse cliente, obtêm-se, respectivamente:</p>",
     "alternativas": {
      "a": "Patrimônio Líquido de R$ 400 mil e Índice de Endividamento de 33,3%.",
      "b": "Patrimônio Líquido de R$ 800 mil e Índice de Endividamento de 50,0%.",
      "c": "Patrimônio Líquido de R$ 300 mil e Índice de Endividamento de 20,0%.",
      "d": "Patrimônio Líquido negativo em R$ 100 mil e Índice de Endividamento de 30,0%."
     },
     "gabarito": "a",
     "feedback": {
      "b": "O Patrimônio Líquido é calculado subtraindo-se o passivo do ativo (R$ 600 mil - R$ 200 mil = R$ 400 mil), e não somando-os.",
      "c": "O cálculo correto do endividamento de estoque é passivo total por ativo total (R$ 200 mil / R$ 600 mil = 33,3%).",
      "d": "O patrimônio líquido é positivo em R$ 400 mil, inexistindo insolvência técnica nesse cenário."
     }
    },
    {
     "id": "cpa-rel-10-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. Quando os passivos superam a soma dos ativos, o Patrimônio Líquido resulta negativo, o que configura insolvência técnica e restringe a concessão de novos financiamentos de longo prazo devido ao alto risco de inadimplência.</p><p>As alternativas A, B e D erram ao sugerir que insolvência facilita crédito, ignorar a relevância do balanço patrimonial ou transformar passivos caros em ativos isentos.</p>",
     "enunciado": "<p>Um profissional de atendimento analisa a situação de um cliente que acumula dívidas no cartão de crédito rotativo e no cheque especial que superam o valor total de seus bens e investimentos. Ao interpretar esse resultado no balanço patrimonial pessoal e suas consequências para o crédito, o gerente deve constatar que:</p>",
     "alternativas": {
      "a": "A situação é neutra para a análise bancária, pois o balanço patrimonial avalia apenas o salário bruto mensal declarado no holerite.",
      "b": "O Patrimônio Líquido negativo aumenta o indicador de liquidez e facilita a concessão automática de empréstimos sem garantia.",
      "c": "O cliente possui Patrimônio Líquido negativo, caracterizando situação de insolvência técnica que reduz drasticamente o acesso a novas linhas de crédito de longo prazo.",
      "d": "As dívidas que superam os ativos transformam-se automaticamente em ativos de investimento com isenção de imposto de renda."
     },
     "gabarito": "c",
     "feedback": {
      "a": "O balanço avalia a estrutura de estoque (bens e dívidas) e reflete a insolvência técnica, não se limitando ao salário.",
      "b": "Patrimônio líquido negativo evidencia insolvência e aumenta o risco de crédito do cliente, dificultando novas linhas.",
      "d": "Dívidas não viram ativos de investimento; tratam-se de passivos exigíveis que corroem o patrimônio líquido."
     }
    },
    {
     "id": "cpa-rel-10-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a A. O índice de endividamento e o índice de liquidez são métricas de estoque extraídas do balanço patrimonial; por outro lado, o comprometimento de renda (parcelas/renda) e o índice de poupança (poupado/renda) são métricas dinâmicas extraídas do fluxo de caixa.</p><p>As alternativas B, C e D erram ao misturar a origem das métricas de fluxo e estoque ou ao descartar a utilidade da análise combinada de ambas as ferramentas.</p>",
     "enunciado": "<p>Durante uma sessão de planejamento financeiro, um gerente precisa diferenciar os indicadores originados da demonstração de estoque (balanço patrimonial) daqueles derivados da demonstração de fluxo (fluxo de caixa). Assinale a alternativa que relaciona corretamente as métricas à sua respectiva fonte de dados:</p>",
     "alternativas": {
      "a": "Índice de endividamento (passivo total/ativo total) e índice de liquidez vêm do balanço; comprometimento de renda e índice de poupança vêm do fluxo de caixa.",
      "b": "Comprometimento de renda e índice de endividamento vêm ambos exclusivamente da DRE e do balanço imobiliário de mercado.",
      "c": "O índice de poupança é um indicador estático de balanço patrimonial, e o índice de liquidez mede as vendas anuais do comércio.",
      "d": "Todos os quatro indicadores são mensurados estritamente pelo balanço patrimonial, sendo o fluxo de caixa descartado na análise bancária."
     },
     "gabarito": "a",
     "feedback": {
      "b": "Comprometimento de renda é um indicador de fluxo (parcelas/renda), e não da DRE ou do balanço isolado.",
      "c": "O índice de poupança (valor poupado no período/renda líquida) mede movimento e vem do fluxo de caixa, não do balanço estático.",
      "d": "A análise financeira combina indicadores de estoque (balanço) e de fluxo (fluxo de caixa), não descartando o fluxo."
     }
    }
   ],
   "Etapas do planejamento financeiro pessoal e metas": [
    {
     "id": "cpa-rel-11-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. A primeira etapa do processo consiste no levantamento dos objetivos financeiros do cliente, fase dedicada exclusivamente a compreender suas necessidades, prioridades e horizonte, na qual é vedado fazer qualquer recomendação de produtos.</p><p>As alternativas B, C e D erram ao antecipar a execução de investimentos, indicar a etapa final de monitoramento ou utilizar escopos de contratação fora da norma cobrada.</p>",
     "enunciado": "<p>O planejamento financeiro pessoal é estruturado em um processo composto por cinco etapas sequenciais. A primeira etapa desse processo e a sua respectiva fronteira de atuação correspondem a:</p>",
     "alternativas": {
      "a": "Levantamento dos objetivos financeiros da clientela, etapa na qual não se deve realizar qualquer recomendação de produtos.",
      "b": "Implementação imediata do plano de investimentos, executando a compra de produtos de alta rentabilidade.",
      "c": "Monitoramento e revisão anual do portfólio, com realocação compulsória de ativos no mesmo dia.",
      "d": "Definição do relacionamento com o cliente, com explicação dos serviços prestados, da remuneração e das responsabilidades de cada parte."
     },
     "gabarito": "a",
     "feedback": {
      "b": "A execução e compra de ativos pertencem à quarta etapa (implementação), e não à primeira.",
      "c": "O monitoramento é a quinta e última etapa do processo de planejamento.",
      "d": "Definir o relacionamento é a primeira etapa do modelo de seis etapas do planejador financeiro certificado, e não do recorte de cinco etapas desta certificação, que começa pelos objetivos do cliente."
     }
    },
    {
     "id": "cpa-rel-11-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. O momento de vida refere-se a aspectos objetivos e circunstanciais (como idade, dependentes, renda, estágio da carreira e patrimônio), enquanto o perfil de risco envolve a disposição psicológica do indivíduo em tolerar flutuações e assumir perdas no curto prazo.</p><p>As alternativas A, B e D erram ao tratar os termos como sinônimos, associá-los a métricas operacionais de produtos ou considerar o momento de vida imutável.</p>",
     "enunciado": "<p>Ao estruturar o planejamento financeiro de um investidor, o profissional de atendimento precisa diferenciar os conceitos de \"momento de vida\" e \"perfil de risco\". Ao comparar os dois conceitos, verifica-se que:</p>",
     "alternativas": {
      "a": "O momento de vida avalia apenas a volatilidade histórica dos fundos, enquanto o perfil de risco mede a alíquota de Imposto de Renda.",
      "b": "Ambos os conceitos são rigorosamente idênticos, sendo determinados de forma exclusiva pela idade cronológica do investidor.",
      "c": "O momento de vida é objetivo e circunstancial (fase profissional, dependentes e patrimônio), enquanto o perfil de risco possui um componente psicológico de tolerância a perdas.",
      "d": "O perfil de risco é definido exclusivamente pelo volume de dívidas, e o momento de vida é imutável ao longo do tempo."
     },
     "gabarito": "c",
     "feedback": {
      "a": "Volatilidade de fundos e tributação de IRPF não definem os conceitos de momento de vida nem de perfil de risco do cliente.",
      "b": "Momento de vida e perfil de risco são conceitos distintos e não dependem unicamente da idade do cliente.",
      "d": "O perfil de risco envolve fatores psicológicos e de conhecimento, enquanto o momento de vida evolui ao longo do tempo."
     }
    },
    {
     "id": "cpa-rel-11-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. Para ser considerada bem estruturada e operacionalizável no planejamento financeiro, uma meta precisa apresentar três elementos essenciais: valor definido, prazo para realização e prioridade, além de ser realista frente à capacidade de poupança do cliente.</p><p>As alternativas A, B e D falham ao associar a meta a características de produtos, sugerir alocações inadequadas ou aceitar enunciados abstratos sem métricas quantitativas.</p>",
     "enunciado": "<p>Um cliente declara ao seu gerente de contas que tem como objetivo financeiro \"ter uma vida financeira tranquila no futuro\". Sob a ótica das técnicas de planejamento financeiro, para que esse desejo se transforme em uma meta bem estruturada, é necessário que ele apresente:</p>",
     "alternativas": {
      "a": "Alocação compulsória de 100% dos recursos em fundos de renda variável de tecnologia sem prazo.",
      "b": "Garantia integral do Fundo Garantidor de Créditos e isenção total do Imposto de Renda Pessoa Física.",
      "c": "Valor definido, prazo determinado e prioridade estabelecida, sendo compatível com a sua capacidade de poupança.",
      "d": "Apenas um desejo abstrato, sendo desnecessária a mensuração monetária ou a fixação de prazos."
     },
     "gabarito": "c",
     "feedback": {
      "a": "Alocar 100% em ações de tecnologia violaria o suitability e não constitui a estruturação de uma meta.",
      "b": "Garantia do FGC e isenção tributária são atributos de produtos de investimento específicos, não elementos de uma meta bem estruturada.",
      "d": "Desejos vagos sem valor ou prazo não constituem metas financeiras aplicáveis."
     }
    },
    {
     "id": "cpa-rel-11-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. O desenvolvimento do plano e a sua implementação são etapas distintas: após a apresentação e aprovação das estratégias (etapa 3), o plano entra em execução prática através das movimentações e reorganizações financeiras (etapa 4).</p><p>As alternativas A, C e D erram ao encerrar o planejamento sem monitoramento, engessar o processo exigindo reiniciar do zero a cada ordem ou adulterar o perfil de risco do cliente.</p>",
     "enunciado": "<p>Um gerente de investimentos concluiu o levantamento de dados e a avaliação da situação financeira de uma cliente. Ele elaborou um plano de ação completo com a recomendação de alocação de ativos e ajustes no orçamento. Ao apresentar a proposta à cliente, ela aprova verbalmente as estratégias. Considerando a fronteira entre as etapas do planejamento financeiro, a conduta correta do profissional para passar para a etapa de implementação é:</p>",
     "alternativas": {
      "a": "Dispensar o acompanhamento futuro, visto que a aprovação do plano encerra definitivamente o processo de planejamento.",
      "b": "Executar as movimentações e reestruturações do portfólio, marcando a transição do desenvolvimento para a implementação do plano.",
      "c": "Refazer o questionário de objetivos desde a primeira etapa a cada nova ordem de compra solicitada pela cliente.",
      "d": "Alterar unilateralmente o perfil da cliente para arrojado para acelerar o cumprimento do plano de ação."
     },
     "gabarito": "b",
     "feedback": {
      "a": "O planejamento não termina na aprovação ou execução; exige a quinta etapa de monitoramento e revisão contínua.",
      "c": "Não há necessidade de reiniciar o processo completo do zero a cada ordem pontual dentro de um plano aprovado.",
      "d": "Alterar arbitrariamente o perfil do cliente para arrojado sem fundamentação viola frontalmente a regulação de suitability."
     }
    },
    {
     "id": "cpa-rel-11-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a A. A etapa de monitoramento e revisão é dinâmica e, embora exija uma periodicidade mínima anual, deve ser acionada imediatamente diante de eventos relevantes de vida, como nascimento de dependentes, alterações expressivas de renda ou mudanças no cenário econômico.</p><p>As alternativas B, C e D erram ao adiar a revisão por cinco anos, sugerir resgates para produtos inadequados de capitalização ou ignorar a nova realidade orçamentária da família.</p>",
     "enunciado": "<p>Um investidor implementou seu plano de ação há seis meses e atinge as metas parciais estabelecidas. Contudo, no mês corrente, ele sofreu uma redução imprevista de 40% em sua renda mensal e sua esposa deu à luz o primeiro filho do casal. Diante desses eventos e considerando as regras que regem a quinta etapa (monitoramento e revisão) do planejamento financeiro pessoal, a conduta técnica adequada é:</p>",
     "alternativas": {
      "a": "Iniciar a revisão do plano de ação imediatamente, visto que alterações relevantes na renda ou no contexto familiar disparam a necessidade de reavaliação dos objetivos e estratégias.",
      "b": "Manter a carteira e o orçamento inalterados até completar obrigatoriamente cinco anos da implementação original.",
      "c": "Cancelar o plano de forma definitiva e orientar o cliente a resgatar 100% dos seus investimentos para aplicar em títulos de capitalização.",
      "d": "Ignorar a mudança de renda e exigir que o cliente mantenha o mesmo valor de aporte mensal sob pena de multa administrativa."
     },
     "gabarito": "a",
     "feedback": {
      "b": "A revisão deve ocorrer no mínimo uma vez por ano ou imediatamente após eventos de vida relevantes (como alteração de renda ou nascimento de filhos).",
      "c": "Cancelar o planejamento para aportar em capitalização agrava a situação do cliente e fere as boas práticas de planejamento.",
      "d": "O planejamento deve se adaptar à capacidade real de poupança do cliente, inexistindo qualquer multa por redução de aportes."
     }
    }
   ],
   "Planejamento para aposentadoria e fundo educacional": [
    {
     "id": "cpa-rel-12-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. O PGBL destina-se a quem entrega a declaração no modelo completo e contribui para o regime geral ou próprio de previdência, permitindo deduzir até 12% da renda bruta tributável, cobrando imposto sobre o valor total no resgate; já o VGBL não abate na declaração e tributa exclusivamente os rendimentos decorrentes da aplicação.</p><p>As alternativas A, C e D erram ao dar benefício fiscal ao VGBL no modelo simplificado, inventar incidência de come-cotas em previdência ou recomendar o PGBL para isentos.</p>",
     "enunciado": "<p>O planejamento de previdência privada complementar envolve a escolha adequada do plano (PGBL ou VGBL) conforme o perfil tributário do investidor. A respeito das regras de dedução fiscal e da incidência de Imposto de Renda no PGBL e no VGBL, é correto afirmar que:</p>",
     "alternativas": {
      "a": "O VGBL permite deduzir até 12% da renda bruta anual tributável na declaração simplificada, e o imposto no resgate incide sobre o valor total do plano.",
      "b": "O PGBL permite deduzir até 12% da renda bruta anual tributável na declaração completa, e o imposto incide sobre o valor total no resgate; o VGBL não deduz e tributa apenas os rendimentos.",
      "c": "Ambas as modalidades sofrem tributação semestral antecipada via come-cotas nos meses de maio e novembro, idêntica aos fundos de renda fixa tradicionais.",
      "d": "O PGBL é indicado prioritariamente para investidores isentos de Imposto de Renda Pessoa Física ou que utilizam a declaração simplificada."
     },
     "gabarito": "b",
     "feedback": {
      "a": "O VGBL não permite dedução de aportes e tributa apenas os rendimentos no resgate, sendo o PGBL que permite a dedução de até 12% no modelo completo.",
      "c": "Planos de previdência complementar (PGBL e VGBL) não sofrem a incidência do come-cotas semestral em maio e novembro.",
      "d": "O PGBL é contraindicado para isentos ou optantes do modelo simplificado, pois estes pagariam imposto sobre o total sem aproveitar o benefício fiscal."
     }
    },
    {
     "id": "cpa-rel-12-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. Enquanto a aposentadoria aceita flexibilizações de cronograma (adiar a data ou ajustar o valor da renda), o fundo educacional tem data fixa (a matrícula do filho na faculdade aos 18 anos), o que torna indispensável desriscar a carteira anos antes para proteger o capital.</p><p>As alternativas A, B e D erram ao travar a liquidez da aposentadoria na juventude, incentivar renda variável de alto risco às vésperas da faculdade ou negar a necessidade de desriscagem da carteira.</p>",
     "enunciado": "<p>Ao comparar os objetivos de planejamento financeiro para a aposentadoria e para a formação de um fundo educacional para os filhos, constata-se que a diferença estrutural entre as duas metas reside no fato de que:</p>",
     "alternativas": {
      "a": "O fundo educacional não admite acumulação na renda fixa, devendo ser integralmente constituído por ações de alta volatilidade até o mês de ingresso na faculdade.",
      "b": "A aposentadoria exige 100% de alocação em ativos de liquidez diária desde a juventude, enquanto o fundo educacional opera obrigatoriamente com fundos fechados ilíquidos.",
      "c": "A aposentadoria possui flexibilidade no ajuste de prazos, enquanto o fundo educacional possui data rígida no calendário que exige a redução do risco da carteira no ciclo final.",
      "d": "Ambas as metas possuem a mesma tolerância ao risco e não exigem readequação da carteira à medida que a data do usufruto se aproxima."
     },
     "gabarito": "c",
     "feedback": {
      "a": "Manter renda variável de alto risco na véspera do ingresso na faculdade expõe o fundo educacional a oscilações graves no ano do evento fixo.",
      "b": "A fase inicial da aposentadoria comporta risco para buscar ganho real e não exige 100% de liquidez diária; o fundo educacional tampouco opera com fundos fechados ilíquidos, já que precisa de liquidez crescente na reta final.",
      "d": "A proximidade do resgate impõe a desriscagem da carteira em ambos os casos, e o fundo educacional possui uma data de execução bem mais rígida que a aposentadoria."
     }
    },
    {
     "id": "cpa-rel-12-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. No resgate sob tabela regressiva aplica-se o PEPS (onde cada aporte conta seu próprio tempo) e, conforme fixado pelo STF no Tema 1.214, não incide o imposto estadual ITCMD sobre o repasse dos saldos de PGBL ou VGBL aos beneficiários na morte do titular.</p><p>As alternativas B, C e D erram ao achar que o aniversário de 10 anos do plano limpa o prazo de aportes recentes, ignorar a opção de regime no primeiro resgate via Lei 14.803/2024 ou zerar prazos na portabilidade.</p>",
     "enunciado": "<p>Um participante de plano de previdência sob o regime de tributação regressiva acumulou aportes ao longo de 12 anos e decide efetuar o resgate parcial do saldo. Considerando a legislação aplicável à contagem do prazo no resgate e as atualizações trazidas pela Lei 14.803/2024 e pela jurisprudência sobre sucessão, é correto afirmar que:</p>",
     "alternativas": {
      "a": "A apuração da alíquota no resgate utiliza o método PEPS (Primeiro que Entra, Primeiro que Sai) por aporte, e no falecimento do titular o repasse aos beneficiários não sofre incidência de ITCMD.",
      "b": "Atingidos dez anos do plano, todos os aportes posteriores recebem automaticamente a alíquota mínima de 10% no resgate imediato.",
      "c": "A opção pelo regime tributário regressivo deve ser feita compulsoriamente no ato da adesão ao plano, sem possibilidade de definição posterior no primeiro resgate.",
      "d": "A transferência do plano via portabilidade zera a contagem do tempo acumulado dos aportes e tributa o saldo em 35%."
     },
     "gabarito": "a",
     "feedback": {
      "b": "No resgate pela tabela regressiva a contagem de prazo é feita por aporte pelo rito do PEPS; aportes recentes pagam alíquotas maiores (ex: 35% até 2 anos).",
      "c": "A Lei 14.803/2024 permitiu a opção pelo regime tributário (regressivo ou progressivo) até o momento da obtenção do benefício ou requisição do primeiro resgate.",
      "d": "A portabilidade preserva o tempo acumulado dos aportes no plano de origem e não gera tributação do saldo."
     }
    },
    {
     "id": "cpa-rel-12-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a D. Como o cliente contribui para o INSS, declara no modelo completo e aporta até 12% da renda bruta, o PGBL é o plano ideal. Além disso, como o horizonte é longo (25 anos), o regime regressivo permitirá que os rendimentos e aportes atinjam a alíquota mínima de 10% na fonte.</p><p>As alternativas A, B e C erram ao associar a dedução ao VGBL, atribuir retenção de 15% de antecipação à tabela regressiva ou sugerir o modelo simplificado com PGBL.</p>",
     "enunciado": "<p>Um cliente de 35 anos entrega a Declaração de Ajuste Anual do IRPF pelo modelo completo e possui renda tributável de R$ 150 mil por ano. Ele contribui para o INSS e deseja alocar R$ 18 mil anuais (12% da sua renda) em previdência complementar visando a aposentadoria em 25 anos. O produto mais adequado e a orientação correta quanto ao regime tributário para esse perfil são:</p>",
     "alternativas": {
      "a": "Sugerir a aplicação em PGBL no modelo simplificado para evitar a tributação do valor total resgatado no futuro.",
      "b": "Recomendar o VGBL no regime progressivo, por ser o único plano que permite abatimento do Imposto de Renda para optantes do modelo completo.",
      "c": "Indicar a contratação de PGBL no regime regressivo, alertando que os resgates pagarão 15% fixos na fonte como tributação definitiva sem direito a alíquotas menores.",
      "d": "Indicar o PGBL no regime regressivo, aproveitando o abatimento fiscal integral de 12% e visando a alíquota mínima de 10% pelo longo prazo de acumulação."
     },
     "gabarito": "d",
     "feedback": {
      "a": "O PGBL exige o modelo completo para usufruir da dedução; usá-lo com o modelo simplificado tributaria o saldo total sem dar o abatimento do imposto.",
      "b": "O VGBL não confere benefício de abatimento fiscal na declaração do Imposto de Renda.",
      "c": "A retenção de 15% na fonte refere-se à antecipação do regime progressivo, e não à tabela regressiva que reduz até o piso de 10%."
     }
    },
    {
     "id": "cpa-rel-12-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a A. O Tesouro Educa+ foi projetado para custear a faculdade pagando 60 parcelas mensais durante o período do curso (5 anos), enquanto o Tesouro Renda+ foi criado para a aposentadoria pagando 240 parcelas mensais (20 anos de renda), ambos corrigidos pelo IPCA com juro real.</p><p>As alternativas B, C e D erram ao inverter os títulos e suas respectivas finalidades, utilizar o Tesouro Selic para pagamentos de parcelas de aposentadoria ou afirmar que os resgates ocorrem em parcela única corrigida pelo IGP-M.</p>",
     "enunciado": "<p>Um casal planeja constituir uma reserva para arcar com as despesas da faculdade do filho recém-nascido (fundo educacional) e também reforçar a própria aposentadoria em 30 anos. O gerente estuda o uso de títulos públicos do Tesouro Direto desenhados especificamente para esses dois objetivos. A combinação correta de títulos e a dinâmica de pagamento de suas fases de usufruto correspondem a:</p>",
     "alternativas": {
      "a": "Tesouro Educa+ para o fundo educacional (paga 60 parcelas mensais durante 5 anos) e Tesouro Renda+ para a aposentadoria (paga 240 parcelas mensais durante 20 anos).",
      "b": "Tesouro Renda+ para o fundo educacional (com pagamento em parcela única) e Tesouro Educa+ para a aposentadoria (com pagamentos vitalícios perpétuos).",
      "c": "Tesouro Selic para a aposentadoria, com pagamento de 240 parcelas mensais sem correção pela inflação, e Tesouro Prefixado com juros semestrais para a faculdade, com os cupons isentos de imposto de renda.",
      "d": "Tesouro Educa+ e Renda+ para ambos os objetivos, visto que ambos pagam o valor acumulado em parcela única exclusivamente corrigida pelo IGP-M na data do vencimento."
     },
     "gabarito": "a",
     "feedback": {
      "b": "As funções estão invertidas; o Educa+ atende à faculdade em 5 anos (60 parcelas) e o Renda+ à aposentadoria em 20 anos (240 parcelas).",
      "c": "O Tesouro Selic é título pós-fixado de caixa, que devolve principal e juros no resgate e não paga 240 parcelas mensais corrigidas pela inflação como o Renda+; e nenhum título do Tesouro Direto paga cupom isento de imposto de renda.",
      "d": "Os títulos Renda+ e Educa+ acumulam pelo IPCA mais juros reais e pagam renda mensal amortizada (240 e 60 meses, respectivamente), não parcela única pelo IGP-M."
     }
    }
   ],
   "IRPF: o que declarar, classificação de rendimentos e modelos": [
    {
     "id": "cpa-rel-13-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. Rendimentos de CDB e Tesouro Direto são tributados definitivamente na fonte e encerram a tributação ali, enquanto aplicações como LCI, LCA, LCD e poupança são classificadas como rendimentos isentos para a pessoa física.</p><p>As alternativas B, C e D erram ao inverter a isenção de LCI/LCA com a tributação do CDB, incluir títulos de renda fixa na tabela progressiva ou tributar a poupança pela tabela regressiva.</p>",
     "enunciado": "<p>O Imposto de Renda Pessoa Física (IRPF) organiza as receitas do contribuinte nas fichas de rendimentos tributáveis, isentos e de tributação exclusiva na fonte. A respeito da correta classificação dos rendimentos de aplicações financeiras para a pessoa física, é correto afirmar que:</p>",
     "alternativas": {
      "a": "Rendimentos de CDBs e Tesouro Direto sofrem tributação exclusiva na fonte, enquanto rendimentos de LCI, LCA e poupança são isentos de Imposto de Renda.",
      "b": "Rendimentos de LCI e LCA sofrem tributação exclusiva na fonte de 15%, enquanto CDBs e RDBs são totalmente isentos de Imposto de Renda.",
      "c": "Todos os rendimentos de renda fixa privada são classificados na ficha de rendimentos tributáveis sujeitos ao ajuste anual na declaração.",
      "d": "O rendimento da caderneta de poupança é tributado exclusivamente na fonte pela tabela regressiva de renda fixa."
     },
     "gabarito": "a",
     "feedback": {
      "b": "LCI e LCA para pessoa física são isentas de Imposto de Renda, enquanto CDB e RDB sofrem tributação na fonte.",
      "c": "Títulos como CDBs e Tesouro Direto sofrem tributação definitiva na fonte e não vão para a tabela progressiva anual.",
      "d": "A caderneta de poupança para a pessoa física é isenta e não tributada pela tabela regressiva."
     }
    },
    {
     "id": "cpa-rel-13-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. O modelo simplificado utiliza o desconto padrão de 20% sobre os rendimentos tributáveis (com teto legal), inviabilizando o abatimento de PGBL; por isso, o cliente que declara pelo simplificado deve utilizar o VGBL, que tributa apenas os rendimentos no resgate.</p><p>As alternativas A, C e D erram ao dar abatimento ao VGBL, inverter a regra do modelo completo ou estender a dedução do PGBL ao modelo simplificado.</p>",
     "enunciado": "<p>Na declaração do IRPF, o contribuinte pode optar pelo modelo simplificado ou pelo modelo completo. Ao comparar a estrutura das deduções e a adequação aos planos de previdência complementar (PGBL e VGBL), verifica-se que:</p>",
     "alternativas": {
      "a": "O modelo simplificado permite a dedução de até 12% da renda bruta anual tributável para aportes realizados em VGBL.",
      "b": "O modelo simplificado aplica o desconto padrão de 20% e impede a dedução de PGBL, sendo o VGBL o produto indicado para quem utiliza essa opção.",
      "c": "O modelo completo obriga a utilização do desconto padrão de 20% e veda a apresentação de comprovantes de despesas médicas e de instrução.",
      "d": "Ambas as opções de declaração permitem o abatimento de até 12% da renda bruta anual tributável aportada em PGBL."
     },
     "gabarito": "b",
     "feedback": {
      "a": "O VGBL não gera dedução no Imposto de Renda em nenhum dos modelos de declaração.",
      "c": "O modelo completo utiliza as despesas dedutíveis reais (médicas, educação, dependentes) em vez do desconto padrão de 20%.",
      "d": "A dedução de até 12% da renda com PGBL é um benefício exclusivo de quem utiliza o modelo completo da declaração."
     }
    },
    {
     "id": "cpa-rel-13-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. Vendas de ações no mercado à vista de até R$ 20.000,00 no mês conferem isenção sobre o ganho líquido (ficha de rendimentos isentos). Já o ganho na alienação de cotas de FII não possui isenção mensal e paga 20% de imposto definitivo na fonte/DARF (ficha de tributação exclusiva/definitiva).</p><p>As alternativas A, C e D erram ao estender a isenção de R$ 20 mil aos FIIs, tributar as ações isentas ou aplicar retenções incorretas de 10%.</p>",
     "enunciado": "<p>Um investidor obteve no mesmo mês ganhos líquidos com a venda de ações no mercado à vista no valor total de alienações de R$ 18.000,00 e vendeu cotas de um Fundo de Investimento Imobiliário (FII) apurando ganho de capital. Sobre a classificação tributária desses dois ganhos na declaração do IRPF, constata-se que:</p>",
     "alternativas": {
      "a": "Ambos os ganhos são isentos de Imposto de Renda por estarem englobados no limite de alienações de até R$ 20.000,00 no mês.",
      "b": "O ganho na venda das ações é isento por conta das vendas no mês ficarem abaixo de R$ 20.000,00, enquanto o ganho em cotas de FII paga 20% e vai para tributação exclusiva/definitiva.",
      "c": "O ganho em ações é tributado compulsoriamente em 15%, e o ganho em cotas de FII é isento para vendas até R$ 35.000,00 no mês.",
      "d": "Ambas as operações sofrem retenção de 10% na fonte a título de antecipação e vão para a ficha de rendimentos tributáveis."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A isenção para vendas de até R$ 20 mil no mês aplica-se a ações no mercado à vista, não existindo esse benefício para ganhos com cotas de FII.",
      "c": "Vendas de ações até R$ 20 mil no mês são isentas, e ganhos em FII pagam 20% sem limite de isenção mensal.",
      "d": "Alienação de ações dentro do limite de R$ 20 mil é isenta e alienação de FII sofre alíquota de 20% definitiva, sem retenção antecipada de 10%."
     }
    },
    {
     "id": "cpa-rel-13-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. Em 2026, o JCP sofre retenção de 17,5% na fonte sob o regime de tributação exclusiva/definitiva. Já os dividendos pagos por uma mesma empresa a uma pessoa física que ultrapassarem R$ 50.000,00 no mesmo mês sofrem retenção de 10% na fonte, cuja natureza é de antecipação (deduzida no ajuste anual e IRPFM) e não de tributação exclusiva.</p><p>As alternativas B, C e D erram ao considerar ambos isentos, errar as alíquotas ou a natureza do imposto e misturar JCP com a tabela progressiva.</p>",
     "enunciado": "<p>Um cliente procurou a agência bancária em 2026 para entender como deve declarar os proventos recebidos de companhias abertas. Ele recebeu R$ 10.000,00 em Juros sobre Capital Próprio (JCP) e R$ 60.000,00 em dividendos pagos no mesmo mês por uma única empresa. O gerente deve orientar o cliente informando que:</p>",
     "alternativas": {
      "a": "O JCP sofre retenção de 17,5% na fonte sob tributação exclusiva, e os dividendos acima de R$ 50 mil por empresa no mês sofrem retenção de 10% a título de antecipação.",
      "b": "Ambos os recebimentos são totalmente isentos de Imposto de Renda e entram sem qualquer retenção na ficha de rendimentos não tributáveis.",
      "c": "Os dividendos recebidos sofrem tributação exclusiva e definitiva na fonte de 20%, e o JCP é isento até R$ 20.000,00 no mês.",
      "d": "O JCP e os dividendos são somados para a aplicação da tabela progressiva mensal do IRPF com restituição integral."
     },
     "gabarito": "a",
     "feedback": {
      "b": "O JCP sofre retenção de 17,5% em 2026 e dividendos acima de R$ 50 mil no mês por empresa têm retenção de 10% de antecipação.",
      "c": "A retenção sobre dividendos acima do teto é de 10% e funciona como antecipação (não exclusiva), e o JCP não tem isenção até R$ 20 mil.",
      "d": "O JCP é tributado exclusivamente na fonte, a 17,5%, e não entra na tabela progressiva; e a retenção de 10% sobre os dividendos é antecipação considerada no ajuste anual, não uma incidência da tabela progressiva mensal com restituição integral."
     }
    },
    {
     "id": "cpa-rel-13-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a C. No resgate de PGBL sob a tabela progressiva, a instituição financeira efetua a retenção de 15% na fonte como antecipação. O valor total do resgate (acumulado de aportes mais rendimentos) é lançado na ficha de rendimentos tributáveis da declaração anual, recalculando-se o imposto devido de acordo com a tabela progressiva e as demais rendas do contribuinte.</p><p>As alternativas A, B e D falham ao classificar os 15% como definitivos, limitar o imposto do PGBL apenas aos rendimentos ou aplicar a alíquota de 35% da tabela regressiva.</p>",
     "enunciado": "<p>Um participante de plano de previdência PGBL no regime de tributação progressiva efetuou um resgate parcial no valor de R$ 100.000,00 durante o ano-calendário. Ao analisar o tratamento tributário dessa operação na fonte e na Declaração de Ajuste Anual do IRPF, verifica-se que:</p>",
     "alternativas": {
      "a": "O imposto incide exclusivamente sobre os rendimentos da aplicação, sendo o valor do principal resgatado isento de tributação no ajuste anual.",
      "b": "A alíquota de 15% retida na fonte é definitiva e exclusiva, dispensando o lançamento do valor na declaração de ajuste anual.",
      "c": "A instituição financeira retém 15% de imposto de renda na fonte a título de antecipação, devendo o valor total resgatado ser lançado como rendimento tributável no ajuste anual.",
      "d": "Por estar no regime progressivo, o resgate do PGBL sofre retenção imediata de 35% na fonte, gerando crédito automático no modelo simplificado."
     },
     "gabarito": "c",
     "feedback": {
      "a": "No PGBL o imposto incide sobre o valor total do resgate (principal + rendimentos) e não apenas sobre o ganho.",
      "b": "A retenção de 15% no resgate progressivo é mera antecipação do imposto e não tributação definitiva.",
      "d": "A alíquota de 35% na fonte é inicial da tabela regressiva, e não do regime progressivo que retém 15%."
     }
    }
   ],
   "Tipos de investimento, tolerância a risco e horizonte": [
    {
     "id": "cpa-rel-14-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. O trade-off entre liquidez, rentabilidade e segurança é absoluto: não existe ativo no mercado capaz de entregar os patamares máximos das três variáveis de forma simultânea.</p><p>As alternativas B, C e D erram ao tentar inventar produtos milagrosos que descumprem a regra do trade-off no mercado de capitais.</p>",
     "enunciado": "<p>Na análise de produtos de investimento, o profissional de atendimento precisa lidar com a relação entre liquidez, rentabilidade e segurança. A respeito desse trade-off fundamental do mercado financeiro, é correto afirmar que:</p>",
     "alternativas": {
      "a": "Nenhuma aplicação consegue maximizar liquidez, rentabilidade e segurança ao mesmo tempo, exigindo a renúncia de ao menos uma dessas dimensões.",
      "b": "A caderneta de poupança maximiza simultaneamente rentabilidade elevada, liquidez imediata e segurança total do Tesouro Nacional.",
      "c": "Os títulos de renda variável garantem liquidez diária e rentabilidade contratada sem qualquer risco de perda do capital investido.",
      "d": "O investidor pode obter alta rentabilidade e segurança máxima sem abrir mão da liquidez por meio da compra de debêntures incentivadas."
     },
     "gabarito": "a",
     "feedback": {
      "b": "A caderneta de poupança possui liquidez e segurança (FGC), mas oferece rentabilidade limitada.",
      "c": "Renda variável não possui rentabilidade contratada e envolve risco de oscilação e perda de capital.",
      "d": "Debêntures incentivadas possuem risco de crédito privado e menor liquidez, não maximizando as três dimensões juntas."
     }
    },
    {
     "id": "cpa-rel-14-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. A capacidade de risco avalia a situação financeira real e objetiva do cliente (renda, patrimônio, horizonte, reservas), ao passo que a tolerância a risco aborda a predisposição emocional de suportar oscilações e perdas temporárias sem sobressaltos.</p><p>As alternativas A, B e D erram ao inverter os conceitos, tratá-los como idênticos por idade ou restringir suas aplicações a certos ativos.</p>",
     "enunciado": "<p>Durante o processo de verificação da adequação de investimentos (suitability), o profissional de atendimento deve avaliar de forma distinta a \"capacidade de risco\" e a \"tolerância a risco\" do cliente. Ao comparar esses dois conceitos, verifica-se que:</p>",
     "alternativas": {
      "a": "Ambos os conceitos são sinônimos perfeitos e dependem unicamente da idade cronológica do investidor.",
      "b": "A capacidade de risco avalia a estabilidade emocional do cliente, e a tolerância a risco calcula o saldo estático da sua conta corrente.",
      "c": "A capacidade de risco é uma dimensão financeira objetiva, enquanto a tolerância a risco é uma dimensão emocional e psicológica do cliente.",
      "d": "A capacidade de risco aplica-se apenas a investimentos em bolsa, enquanto a tolerância aplica-se exclusivamente a títulos públicos."
     },
     "gabarito": "c",
     "feedback": {
      "a": "Capacidade e tolerância são dimensões distintas e não dependem exclusivamente da idade do investidor.",
      "b": "A alternativa inverte as duas dimensões: a estabilidade emocional diante da oscilação é a tolerância, e a condição financeira objetiva, com renda, patrimônio, endividamento e prazo até precisar do dinheiro, é a capacidade, que não se resume ao saldo em conta corrente.",
      "d": "Ambas as dimensões devem ser avaliadas para qualquer tipo de investimento e produto do mercado financeiro."
     }
    },
    {
     "id": "cpa-rel-14-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a D. Para objetivos de curtíssimo prazo (três meses), a prioridade é a liquidez e a previsibilidade (Tesouro Selic ou CDB com liquidez diária). LCI e LCA não servem para essa meta por possuírem prazo mínimo de vencimento de seis meses (sem atualização por índice de preços), durante o qual o emissor não pode resgatar o papel.</p><p>As alternativas A, B e C ignoram as travas normativas da LCI, indicam renda variável volátil para prazos curtos ou indicam debêntures ilíquidas.</p>",
     "enunciado": "<p>Um cliente de perfil conservador precisa alocar um valor recebido para quitar a reforma de sua casa que ocorrerá daqui a três meses. O gerente analisa as opções de aplicação considerando a preservação do capital e as travas operacionais de prazos mínimos. A indicação mais adequada para esse objetivo é:</p>",
     "alternativas": {
      "a": "Debênture de longo prazo, sem liquidez diária, emitida por empresa privada de grande porte.",
      "b": "Letra de Crédito Imobiliário (LCI) com carência de seis meses, contratando o resgate antecipado mediante desconto administrativo.",
      "c": "Fundo de Investimento em Ações (FIA) arrojado, pois o prazo de três meses é suficiente para mitigar o risco de mercado do setor.",
      "d": "CDB de liquidez diária ou Tesouro Selic, visto que LCI e LCA possuem prazo mínimo de vencimento de seis meses que impede o resgate na data necessária."
     },
     "gabarito": "d",
     "feedback": {
      "a": "Uma debênture de longo prazo, sem liquidez diária, não permite ao cliente dispor do dinheiro na data da reforma, daqui a três meses.",
      "b": "A instituição emissora de LCI é proibida por norma de resgatar ou recomprar o título antes do prazo mínimo regulamentar de seis meses.",
      "c": "Fundos de ações possuem alta volatilidade e risco de mercado incompatíveis com prazos curtos de três meses."
     }
    },
    {
     "id": "cpa-rel-14-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a D. Na recomendação de investimentos, quando há divergência entre a condição financeira objetiva (capacidade) e a disposição emocional (tolerância), deve prevalecer a menor das medidas para preservar o investidor de desconforto incompatível com seu perfil.</p><p>As alternativas A, B e C desrespeitam a tolerância psicológica do cliente, indicam fraude cadastral ou inventam restrições regulatórias por idade.</p>",
     "enunciado": "<p>Um investidor de 28 anos, com alta estabilidade financeira, patrimônio consolidado e reserva de emergência constituída, declarou no questionário de suitability elevado conhecimento de mercado. No entanto, demonstrou baixa tolerância emocional a oscilações de curto prazo em seu patrimônio. Ao elaborar a recomendação de investimentos, o profissional deve pautar-se pela seguinte regra técnica:</p>",
     "alternativas": {
      "a": "Classificar o cliente como arrojado, uma vez que o elevado conhecimento de mercado declarado no questionário prevalece sobre as demais dimensões da análise de perfil.",
      "b": "Ignorar a baixa tolerância emocional do cliente e alocar 100% da carteira em ações, pois a sua capacidade financeira e idade prevalecem.",
      "c": "Alterar unilateralmente a declaração de perfil do cliente para arrojado no sistema do banco e alocar recursos em derivativos.",
      "d": "Respeitar a menor medida entre a capacidade e a tolerância, recomendando uma carteira conservadora ajustada ao seu perfil psicológico."
     },
     "gabarito": "d",
     "feedback": {
      "a": "O conhecimento de mercado é uma das dimensões da análise, e não um critério que se sobreponha à capacidade e à tolerância; o enquadramento respeita a menor das medidas.",
      "b": "Forçar renda variável em cliente com baixa tolerância emocional viola o dever de adequação de produtos (suitability).",
      "c": "Adulterar dados no questionário de perfil do cliente é uma falta grave que viola expressamente as normas regulatórias da CVM e Anbima."
     }
    },
    {
     "id": "cpa-rel-14-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a C. A adequação de investimentos é um equilíbrio que deve ser satisfeito em dois sentidos: o excesso de risco é inadequado, mas o excesso de conservadorismo em um cliente arrojado com horizonte de 20 anos também configura inadequação (insuficiência de risco) em relação aos seus objetivos.</p><p>As alternativas A, B e D erram ao considerar a pós-fixação como única recomendação para 20 anos, achar que a adequação só barra excesso de risco ou proibir arrojados de possuírem renda fixa.</p>",
     "enunciado": "<p>Um cliente possui perfil arrojado, reserva de emergência de 12 meses montada no Tesouro Selic e objetivo de acumulação patrimonial para a aposentadoria em 20 anos. O gerente de contas alocou 100% do patrimônio investido desse cliente em um CDB pós-fixado com rentabilidade de 100% do CDI. Sob a perspectiva das normas e boas práticas de adequação (suitability), essa recomendação é considerada:</p>",
     "alternativas": {
      "a": "Adequada, pois a regra de suitability aplica-se exclusivamente para barrar o excesso de risco, sendo insuscetível de violação pelo excesso de segurança.",
      "b": "Perfeita, pois alocar a totalidade dos recursos em renda fixa pós-fixada é a única recomendação legal autorizada para horizontes longos.",
      "c": "Inadequada, pois o excesso de conservadorismo em relação ao perfil do cliente e ao longo horizonte de investimento configura insuficiência de risco.",
      "d": "Inadequada, porque o cliente com perfil arrojado é proibido de manter qualquer valor aplicado em produtos de renda fixa pós-fixada."
     },
     "gabarito": "c",
     "feedback": {
      "a": "O dever de adequação é violado em ambas as direções, tanto pelo excesso de risco quanto pela insuficiência de risco (excesso de conservadorismo).",
      "b": "Horizontes longos de 20 anos para perfil arrojado comportam e exigem alocação em ativos com expectativa de retorno real superior.",
      "d": "Investidores arrojados podem manter renda fixa (como em suas reservas de emergência), não havendo proibição legal de posse do ativo."
     }
    }
   ],
   "Gestão financeira: emergências e uso do crédito": [
    {
     "id": "cpa-rel-15-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a D. O cheque especial para pessoas naturais tem juros limitados a 8% ao mês, e a regulamentação do rotativo do cartão de crédito impôs o teto em que a soma de juros e encargos cobrados não pode ultrapassar o valor original do principal (100% de teto de juros).</p><p>As alternativas A, B e C erram ao permitir a rotagem indefinida no cartão, citar a tarifa inconstitucional de limite não utilizado ou classificar linhas emergenciais como baratas para longo prazo.</p>",
     "enunciado": "<p>Diante de uma necessidade imprevista de caixa que supera os recursos próprios disponíveis, a utilização do crédito bancário deve seguir uma hierarquia de custos e riscos para preservar o patrimônio do cliente. A respeito das regras aplicáveis às modalidades emergenciais de crédito, como o cheque especial e o rotativo do cartão, é correto afirmar que:</p>",
     "alternativas": {
      "a": "O cheque especial e o rotativo do cartão representam modalidades prioritárias e de baixo custo para financiamentos habitacionais de longo prazo.",
      "b": "O saldo devedor do rotativo do cartão de crédito pode ser mantido indefinidamente nessa modalidade sem a obrigatoriedade de oferta de parcelamento.",
      "c": "As instituições financeiras são autorizadas a cobrar a tarifa de disponibilização de 0,25% sobre o limite de cheque especial não utilizado acima de R$ 500,00.",
      "d": "Os juros remuneratórios do cheque especial para pessoas naturais são limitados a 8% ao mês, e os juros totais do rotativo do cartão de crédito não podem ultrapassar 100% do valor original da dívida."
     },
     "gabarito": "d",
     "feedback": {
      "a": "Cheque especial e rotativo são as linhas mais caras do mercado e servem exclusivamente a cobrir descasamentos pontuais de pouquíssimos dias.",
      "b": "O saldo do rotativo só pode permanecer nessa modalidade até o vencimento da fatura seguinte, quando a instituição é obrigada a oferecer parcelamento.",
      "c": "O Supremo Tribunal Federal declarou inconstitucional a cobrança de tarifa sobre o limite de cheque especial não utilizado."
     }
    },
    {
     "id": "cpa-rel-15-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. O IOF para pessoa física no crédito é composto pela alíquota adicional fixa de 0,38% mais a alíquota diária de 0,0082%, sendo que a cobrança da parcela diária é limitada ao teto de 365 dias do contrato.</p><p>As alternativas A, C e D erram ao ignorar a trava de 365 dias do IOF, isentar o crédito pessoal de tributação ou limitar o CET apenas à taxa de juros nominal.</p>",
     "enunciado": "<p>Para comparar propostas de crédito entre instituições financeiras, o cliente deve utilizar o Custo Efetivo Total (CET), que reúne os encargos da operação, incluindo o Imposto sobre Operações Financeiras (IOF). Ao comparar a incidência do IOF no crédito para pessoa física com o das operações comerciais, verifica-se que:</p>",
     "alternativas": {
      "a": "A alíquota diária do IOF incide continuamente por todo o prazo do contrato, cobrando juros diários por até 60 meses sem trava temporal.",
      "b": "O IOF de crédito para pessoa física é composto por uma alíquota adicional fixa de 0,38% mais uma alíquota diária de 0,0082%, cuja contagem diária trava em 365 dias.",
      "c": "O IOF é isento em operações de crédito pessoal sem garantia e cobrado exclusivamente na contratação de habitação.",
      "d": "O Custo Efetivo Total (CET) é calculado levando em conta apenas a taxa de juros nominal do contrato, descartando impostos e tarifas operacionais."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A cobrança do IOF diário possui a trava regulatória máxima de 365 dias, não incidindo por prazos superiores como 60 meses.",
      "c": "O IOF incide normalmente sobre as operações de crédito pessoal para pessoas físicas.",
      "d": "O CET soma obrigatoriamente a taxa de juros, os tributos (IOF), as tarifas e os seguros embutidos em um único indicador percentual."
     }
    },
    {
     "id": "cpa-rel-15-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. O crédito consignado afeta diretamente o salário dentro da margem legal de 40% (35% empréstimo / 5% cartão), ao passo que a alienação de veículos derruba o CET pelo colateral, mas expõe o cliente ao risco de perda do automóvel em caso de inadimplência.</p><p>As alternativas A, B e D erram ao afirmar que a via judicial de veículos foi extinta, ignorar o limite da margem consignável ou igualar os riscos patrimoniais dos colaterais.</p>",
     "enunciado": "<p>Um cliente celetista com margem consignável disponível e um automóvel próprio quitado precisa de crédito de urgência para cobrir uma despesa médica familiar imprevista. Ele analisa com seu gerente de contas a escolha entre o crédito consignado e o empréstimo com garantia real do veículo (alienação fiduciária). A respeito dos riscos patrimoniais e regulatórios envolvidos, a orientação adequada é:</p>",
     "alternativas": {
      "a": "O consignado para trabalhador celetista não possui limite de margem consignável, permitindo o comprometimento de até 100% do salário bruto.",
      "b": "A alienação fiduciária de veículo extinguiu totalmente o rito de busca e apreensão judicial, sendo a retomada obrigatoriamente extrajudicial em todos os casos desde 2023.",
      "c": "O consignado utiliza o desconto direto em folha (limitado à margem de 40%, sendo 35% para empréstimo), enquanto a alienação fiduciária reduz a taxa mas insere o risco de perda do veículo por busca e apreensão.",
      "d": "Ambas as operações de crédito apresentam o mesmo risco de perda direta de bens imóveis da família, independentemente do objeto dado em garantia."
     },
     "gabarito": "c",
     "feedback": {
      "a": "O crédito consignado do celetista é limitado à margem consignável legal de 40% da renda, sendo 35% destinados a empréstimos e 5% a cartão.",
      "b": "No financiamento com alienação fiduciária de veículos, as vias judicial (Decreto-Lei 911/1969) e extrajudicial (Lei 14.711/2023) coexistem à escolha do credor.",
      "d": "O consignado afeta o contracheque e a garantia de veículo atinge o bem móvel; nenhuma das duas gera a execução imediata de imóveis residenciais da família."
     }
    },
    {
     "id": "cpa-rel-15-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. A Lei 14.181/2021 proíbe assediar ou pressionar o consumidor para contratação de crédito (com agravamento para idosos e vulneráveis) e exige que a contratação preserve o mínimo existencial da família, devendo o gerente apresentar linhas mais adequadas e de menor CET.</p><p>As alternativas A, C e D incentivam a pressão ilegal de vendas, a omissão de custos obrigatórios ou a proibição descabida de crédito a idosos.</p>",
     "enunciado": "<p>Um cliente idoso ingressa na agência bancária em situação de estresse financeiro buscando crédito urgente para cobrir despesas de saúde. Ele solicita a contratação do limite total pré-aprovado do seu cheque especial a juros elevados. À luz dos deveres de conduta na oferta de crédito e da Lei do Superendividamento (Lei 14.181/2021), o profissional deve pautar sua recomendação considerando que:</p>",
     "alternativas": {
      "a": "O gerente deve pressionar o cliente a utilizar o cheque especial por ser a linha de maior rentabilidade para a meta mensal do banco.",
      "b": "É vedado assediar ou pressionar o consumidor idoso ou vulnerável para contratar crédito, devendo indicar uma linha de menor CET e verificar se a parcela preserva o mínimo existencial.",
      "c": "O banco está autorizado a omitir o Custo Efetivo Total (CET) caso o cliente declare urgência médica na contratação.",
      "d": "A Lei do Superendividamento proíbe a concessão de qualquer linha de crédito para pessoas físicas com idade superior a 60 anos."
     },
     "gabarito": "b",
     "feedback": {
      "a": "Assediar ou pressionar o consumidor para contratar crédito (especialmente vulneráveis) é expressamente proibido por lei.",
      "c": "É terminantemente vedado ocultar ou dificultar a compreensão do Custo Efetivo Total e dos riscos da operação.",
      "d": "A lei não proíbe a concessão de crédito a idosos, mas impõe maior proteção contra assédio e garante a preservação do mínimo existencial."
     }
    },
    {
     "id": "cpa-rel-15-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a C. A hierarquia técnica de socorro financeiro estabelece que o uso deve iniciar pelos recursos próprios da reserva (custo zero), seguir para antecipação de recebíveis certos (como a restituição do IRPF), avançar para o consignado, a linha com garantia mais barata entre as disponíveis a ele, e deixar o rotativo do cartão estritamente como última opção.</p><p>As alternativas A, B e D erram ao priorizar a linha mais cara do rotativo, preterir o uso de recursos próprios de custo zero ou proibir a antecipação de recebíveis do IRPF.</p>",
     "enunciado": "<p>Analise o caso de um cliente que sofreu um descasamento de caixa e avalia a ordem de acionamento das fontes de recursos para cobrir o déficit. Ele possui reservas no Tesouro Selic, restituição do Imposto de Renda a receber no próximo mês, margem consignável livre no contracheque e limite no rotativo do cartão de crédito. Considerando a hierarquia do socorro financeiro (da fonte mais barata e sustentável para a mais cara), a sequência de utilização correta é:</p>",
     "alternativas": {
      "a": "Crédito consignado em primeiro lugar para preservar o saldo do rotativo como limite emergencial permanente.",
      "b": "Rotativo do cartão de crédito, crédito consignado, antecipação do IRPF e, por último, o resgate do Tesouro Selic.",
      "c": "Recursos próprios da reserva (Tesouro Selic), antecipação da restituição do IRPF, crédito consignado e, por último, o rotativo do cartão de crédito.",
      "d": "Resgate do Tesouro Selic e uso imediato do rotativo do cartão, sendo proibida a antecipação de recebíveis certos no Brasil."
     },
     "gabarito": "c",
     "feedback": {
      "a": "A reserva própria (custo zero) deve anteceder a contratação de qualquer dívida no consignado.",
      "b": "O rotativo do cartão de crédito é a linha mais cara do mercado e deve ser deixado por último, e não acionado em primeiro lugar.",
      "d": "A antecipação de recebíveis certos (como IRPF e 13º) é plenamente regulada no Brasil e possui custo menor que o rotativo do cartão."
     }
    }
   ],
   "Gestão de investimentos": [
    {
     "id": "cpa-rel-16-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. A alocação estratégica define a percentagem-alvo por classe de ativos alinhada ao perfil do cliente e prazo dos seus objetivos; a alocação tática realiza pequenos desvios temporários ao redor dessas metas para explorar oportunidades do mercado.</p><p>As alternativas B, C e D erram ao inverter as definições de longo e curto prazo, considerar os termos idênticos ou atribuir prazos diários para a alocação estratégica.</p>",
     "enunciado": "<p>A gestão de investimentos utiliza estratégias de alocação para manter a aderência da carteira aos objetivos de longo prazo e ao perfil do cliente. A respeito da diferença entre alocação estratégica e alocação tática, é correto afirmar que:</p>",
     "alternativas": {
      "a": "A alocação estratégica é a estrutura de longo prazo por classes de ativos, enquanto a alocação tática consiste em desvios temporários para aproveitar cenários sem descaracterizar a carteira.",
      "b": "A alocação tática define os alvos permanentes da carteira e a alocação estratégica zera mensalmente todas as posições para fugir da tributação de Imposto de Renda.",
      "c": "Ambas possuem o mesmo conceito e visam acompanhar cegamente os índices de inflação do setor imobiliário.",
      "d": "A alocação estratégica altera-se diariamente conforme os jornais da manhã e a tática vigora inalterada por 30 anos."
     },
     "gabarito": "a",
     "feedback": {
      "b": "A alocação estratégica estabelece a espinha dorsal de longo prazo, enquanto a tática faz ajustes temporários (sem zerar carteiras para fugir de IR).",
      "c": "Alocação tática e estratégica são conceitos distintos no processo de gestão de investimentos.",
      "d": "A alocação estratégica é estável e muda por motivos de vida do cliente, enquanto a tática aborda ajustes de mais curto prazo."
     }
    },
    {
     "id": "cpa-rel-16-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a D. O rebalanceamento destina-se ao controle do risco da carteira, pois a valorização desproporcional de uma classe de ativos (como ações) eleva a exposição ao risco sem que o cliente tenha decidido alterar seu perfil; rebalancear vende o topo e compra a base para retornar ao alvo estratégico.</p><p>As alternativas A, B e C erram ao atribuir objetivo de busca por lucro diário via giro, inventar isenções de taxas operacionais ou forçar concentração extrema em ações.</p>",
     "enunciado": "<p>O rebalanceamento de carteiras é uma técnica de gestão utilizada para readequar a composição do portfólio do cliente ao longo do tempo. O objetivo primário da realização do rebalanceamento periódico e a sua regra de execução são:</p>",
     "alternativas": {
      "a": "Garantir que 100% dos recursos fiquem alocados em ações de empresas de pequena capitalização no auge do ciclo de alta.",
      "b": "Maximizar o lucro diário da carteira mediante giro constante dos ativos de renda fixa a cada 5 dias operacionais.",
      "c": "Isentar o investidor do pagamento de qualquer taxa de administração ou custódia cobrada pelas corretoras.",
      "d": "Controlar e gerenciar o risco da carteira, vendendo parcela do que subiu e comprando o que ficou para trás para retornar ao alvo original."
     },
     "gabarito": "d",
     "feedback": {
      "a": "Concentrar 100% em ações de pequena capitalização viola a diversificação e desvirtua o objetivo do rebalanceamento.",
      "b": "O objetivo central do rebalanceamento é o controle e a gestão de risco (aderência ao perfil), e não a maximização do lucro rápido via giro.",
      "c": "O rebalanceamento opera na gestão de ativos e não isenta taxas de administração ou custódia de terceiros."
     }
    },
    {
     "id": "cpa-rel-16-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a D. A forma mais eficiente de rebalancear a carteira sem gerar custo tributário imediato (pagamento de IR sobre o ganho de capital dos ativos que subiram) é direcionar o fluxo de novos aportes para as classes que estão abaixo do percentual-alvo.</p><p>As alternativas A, B e C desrespeitam a eficiência tributária, compram derivativos sem objetivo de hedge, ou erram a tabela regressiva do IR (que diminui e não aumenta com o tempo).</p>",
     "enunciado": "<p>Ao avaliar a gestão de portfólio de um cliente, um gerente estuda estratégias de rebalanceamento e o impacto tributário do giro de ativos. Para rebalancear a carteira do investidor mitigando a realização de imposto de renda decorrente de resgates, a prática técnica mais recomendada é:</p>",
     "alternativas": {
      "a": "Exigir o resgate total dos ativos com mais de dois anos para travar a alíquota em 22,5% do Imposto de Renda.",
      "b": "Vender integralmente a classe de renda fixa a cada 15 dias para comprar opções de compra no mercado futuro.",
      "c": "Resgatar todas as aplicações no primeiro ano e reinvestir o saldo na poupança sem apuração de rentabilidade.",
      "d": "Direcionar os novos aportes de recursos para a classe de ativos que ficou abaixo do percentual-alvo estratégico."
     },
     "gabarito": "d",
     "feedback": {
      "a": "Resgatar com mais de dois anos não trava a taxa em 22,5%; pelo contrário, a alíquota da tabela regressiva cai conforme o tempo passa.",
      "b": "Girar a carteira a cada 15 dias comprando opções eleva o custo tributário (alíquota máxima de IR mais IOF) e o risco da carteira.",
      "c": "Resgatar aplicações consolidadas para pôr na poupança sem necessidade agrava impostos e reduz a expectativa de ganho real."
     }
    },
    {
     "id": "cpa-rel-16-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. O benchmark de avaliação precisa ser estritamente compatível com a classe e o nível de risco da alocação do cliente. Comparar uma carteira conservadora ancorada no CDI com o Ibovespa é um erro conceitual de avaliação de desempenho.</p><p>As alternativas A, C e D concordam erroneamente com a comparação incabível, inventam metas legais irreais para fundos DI ou associam o Ibovespa como índice obrigatório do CDB.</p>",
     "enunciado": "<p>Um cliente que possui uma carteira predominantemente conservadora, composta por títulos pós-fixados e fundos DI com meta de acompanhar o CDI, critica seu gerente porque seu rendimento anual ficou abaixo do retorno do Ibovespa em um ano de forte alta da bolsa de valores. À luz das boas práticas de avaliação de desempenho de investimentos, o gerente deve esclarecer que:</p>",
     "alternativas": {
      "a": "O cliente está correto, devendo o gestor do fundo DI ser substituído imediatamente por não atingir o desempenho do Ibovespa.",
      "b": "O benchmark utilizado para avaliar uma carteira deve refletir o risco assumido na alocação estratégica, sendo inadequado comparar pós-fixados com o Ibovespa.",
      "c": "Todos os produtos de renda fixa e fundos DI possuem a obrigação legal de superarem o Ibovespa em ao menos 5% ao ano.",
      "d": "O Ibovespa é o indicador de referência compulsório determinado pela CVM para medir a rentabilidade de cadernetas de poupança e CDBs."
     },
     "gabarito": "b",
     "feedback": {
      "a": "Fundos DI buscam acompanhar o CDI e possuem risco muito inferior ao Ibovespa, sendo absurdo exigir rentabilidade de ações de um fundo pós-fixado.",
      "c": "Renda fixa pós-fixada acompanha a taxa básica de juros e não tem compromisso ou obrigação regulatória de superar o índice de ações.",
      "d": "O Ibovespa é um índice do mercado de ações e não o benchmark compulsório de aplicações de renda fixa bancária como CDBs ou poupança."
     }
    },
    {
     "id": "cpa-rel-16-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a A. O giro de carteira com resgates recorrentes abaixo de 180 dias penaliza o investidor com a alíquota mais alta da tabela regressiva do IR (22,5%) e, para prazos menores que 30 dias, aciona o IOF regressivo sobre os rendimentos, destruindo o ganho da aplicação através do fricção tributária e de custos operacionais.</p><p>As alternativas B, C e D erram ao promover isenções inexistentes no giro rápido, trocar a taxa do IR para 10% em 15 dias ou cobrar o IOF de 30 dias sobre operações de ações de renda variável.</p>",
     "enunciado": "<p>Um investidor costuma realizar constantes trocas de ativos na sua carteira de renda fixa e de fundos de investimento (giro excessivo), buscando migrar quinzenalmente para o ativo de maior retorno recente. Ao analisar os custos operacionais e fiscais recorrentes gerados por essa prática, verifica-se que o giro excessivo corrói o patrimônio do cliente porque:</p>",
     "alternativas": {
      "a": "Trava a alíquota de Imposto de Renda na faixa máxima de 22,5% pelo resgate precoce, aciona a cobrança de IOF regressivo em resgates inferiores a 30 dias e acumula custos operacionais.",
      "b": "Isenta o investidor de qualquer retenção de Imposto de Renda na fonte e elimina totalmente as taxas de corretagem da bolsa.",
      "c": "Aplica a alíquota mínima de 10% de Imposto de Renda a todos os resgates com menos de 15 dias de aplicação.",
      "d": "Incide IOF regressivo de 30 dias sobre todas as operações de renda variável e sobre resgates em fundos de ações de curto prazo."
     },
     "gabarito": "a",
     "feedback": {
      "b": "Girar a carteira em prazos curtos não isenta o IR e nem elimina os custos operacionais de corretagem e tarifas.",
      "c": "A alíquota inicial da tabela regressiva do IR para resgates em até 180 dias é de 22,5%, e ela só cai conforme o prazo de aplicação aumenta; não existe faixa de 10% para resgates de 15 dias.",
      "d": "O IOF regressivo de 30 dias incide sobre renda fixa e fundos tradicionais, mas não alcança operações diretas de renda variável nem fundos de ações."
     }
    }
   ],
   "Gestão de risco e seguros": [
    {
     "id": "cpa-rel-17-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. A regra de ouro da gestão de risco determina a transferência para a seguradora de riscos com baixa frequência e alta severidade (devastadores) e a retenção de eventos frequentes e de baixo impacto. A franquia atua exatamente como a parcela de retenção assumida pelo segurado.</p><p>As alternativas A, B e D erram ao tratar a franquia como mero desconto, indicar seguros para riscos pequenos do cotidiano ou confundir a transferência financeira com a eliminação física do risco.</p>",
     "enunciado": "<p>A gestão de risco analisa e trata as ameaças que podem afetar o planejamento financeiro da família por meio de quatro estratégias fundamentais (evitar, reduzir, reter e transferir). A respeito dos critérios técnicos para a escolha da resposta ao risco e da função da franquia nos seguros, é correto afirmar que:</p>",
     "alternativas": {
      "a": "Deve-se obrigatoriamente contratar seguro para qualquer evento de alta frequência e valor insignificante para zerar as perdas do orçamento.",
      "b": "A franquia é um desconto comercial concedido pela seguradora para baratear a apólice sem qualquer retenção financeira por parte do cliente.",
      "c": "A recomendação técnica é transferir os riscos de eventos raros e devastadores e reter os frequentes e baratos, sendo a franquia um instrumento de retenção de risco pelo segurado.",
      "d": "Transferir o risco é a única estratégia capaz de eliminar completamente a ocorrência do sinistro e impedir a causa do evento."
     },
     "gabarito": "c",
     "feedback": {
      "a": "Riscos frequentes e de pequeno valor financeiro devem ser retidos (pela reserva de emergência), e não transferidos a seguros.",
      "b": "A franquia é um instrumento de retenção de risco onde o cliente assume a parcela inicial e menor do prejuízo, barateando o prêmio.",
      "d": "Transferir o risco apenas repassa o prejuízo financeiro a um terceiro (seguradora); a única forma de eliminar o risco é evitá-lo."
     }
    },
    {
     "id": "cpa-rel-17-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. No seguro de dano (patrimonial) vigora a recomposição do bem até o limite real e o direito de sub-rogação da seguradora contra o causador do dano. No seguro de pessoas (vida), a vida não tem valor tabelado: o capital é livre, as apólices acumulam-se e não cabe sub-rogação.</p><p>As alternativas A, C e D erram ao proibir o acúmulo de apólices de vida, permitir lucro no seguro patrimonial ou atribuir sub-rogação ao seguro de pessoas.</p>",
     "enunciado": "<p>Os contratos de seguro são estruturados sob os ramos de seguro de dano (patrimonial) e seguro de pessoas (vida). Ao comparar as regras aplicáveis a cada uma dessas modalidades sob a Lei 15.040/2024, verifica-se que:</p>",
     "alternativas": {
      "a": "O seguro de pessoas veda o acúmulo de mais de uma apólice sobre o mesmo interesse, limitando a indenização total ao valor de mercado da pessoa.",
      "b": "No seguro de dano vigora o princípio indenitário e a sub-rogação, enquanto no seguro de pessoas o capital é livremente estipulado, as apólices se acumulam e não há sub-rogação.",
      "c": "O seguro de dano permite que a indenização paga pela seguradora supere o valor real do bem para gerar lucro ao segurado.",
      "d": "Em caso de morte no seguro de pessoas, a seguradora se sub-roga nos direitos dos beneficiários para cobrar o valor do causador do sinistro."
     },
     "gabarito": "b",
     "feedback": {
      "a": "No seguro de pessoas o capital é livre, o cliente pode contratar quantas apólices quiser e todas as coberturas se acumulam no pagamento.",
      "c": "O seguro de dano segue o princípio indenitário, sendo vedado receber indenização que supere o valor real do bem ou o teto contratado.",
      "d": "Não existe direito de sub-rogação no seguro de pessoas; a seguradora paga o capital e não pode processar o causador da morte."
     }
    },
    {
     "id": "cpa-rel-17-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a D. Sob o regramento da Lei 15.040/2024, quando ocorre infrasseguro (bem segurado por valor menor que o real) e o sinistro é parcial, não há cobrança ou abatimento por rateio proporcional, devendo a seguradora indenizar integralmente o prejuízo apurado (R$ 200.000,00), até o limite da garantia.</p><p>As alternativas A, B e C erram ao aplicar a regra revogada do rateio automático, pagar o teto da apólice em prejuízo menor ou anular o contrato.</p>",
     "enunciado": "<p>Um cliente possui um imóvel residencial avaliado no mercado por R$ 1.000.000,00 e contratou uma apólice de seguro de dano no valor de garantia de R$ 600.000,00. Ocorreu um sinistro parcial por alagamento que causou um prejuízo comprovado de R$ 200.000,00 no imóvel. Considerando as regras da Lei 15.040/2024 para casos de infrasseguro sem cláusula expressa de rateio, o valor a ser indenizado pela seguradora é:</p>",
     "alternativas": {
      "a": "R$ 0,00, visto que a contratação por valor inferior ao valor real do bem anula a eficácia do contrato por ausência de interesse legítimo.",
      "b": "R$ 120.000,00, devido à aplicação obrigatória e automática do rateio proporcional de 60% sobre o valor do prejuízo.",
      "c": "R$ 600.000,00, pois a seguradora é obrigada a pagar a totalidade da garantia contratada independentemente do tamanho do dano.",
      "d": "R$ 200.000,00, visto que no sinistro parcial não há rateio proporcional por infrasseguro, salvo se o contrato pactuar isso expressamente."
     },
     "gabarito": "d",
     "feedback": {
      "a": "A contratação de infrasseguro é plenamente válida, estando mantido o interesse legítimo do proprietário.",
      "b": "O novo marco legal dos seguros (Lei 15.040/2024) extinguiu o rateio proporcional automático em sinistros parciais de bens infrassegurados.",
      "c": "A indenização do seguro de dano atende ao princípio indenitário, cobrindo o prejuízo real (R$ 200 mil) e não o limite máximo da apólice."
     }
    },
    {
     "id": "cpa-rel-17-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. O capital estipulado em seguro de vida não é considerado herança para nenhum efeito legal, não integrando o inventário nem respondendo por dívidas do de cujus, além de ser isento de ITCMD por não constituir transmissão causa mortis.</p><p>As alternativas A, B e D erram ao submeter o seguro a dívidas do falecido, permitir a penhora por credores ou incluir o benefício no inventário da herança.</p>",
     "enunciado": "<p>Um investidor faleceu mantendo uma apólice de seguro de vida individual no valor de R$ 2.000.000,00, na qual havia indicado formalmente seus dois filhos como beneficiários. O inventário do falecido traz dívidas judiciais e execuções fiscais que superam a soma dos seus demais bens móveis e imóveis. A respeito do repasse do capital segurado aos beneficiários e da incidência de impostos, a orientação correta é:</p>",
     "alternativas": {
      "a": "Os credores podem penhorar o capital do seguro de vida diretamente na seguradora antes do repasse aos beneficiários.",
      "b": "O valor do seguro deve ser retido pelo juiz do inventário para quitar as dívidas fiscais e submetido à cobrança do ITCMD pelo estado.",
      "c": "O capital do seguro de vida é impenhorável, não responde por dívidas do falecido e não sofre incidência do ITCMD, por não ser considerado herança.",
      "d": "A indenização do seguro de vida integra o inventário e a partilha da herança, para compensar o cônjuge meeiro."
     },
     "gabarito": "c",
     "feedback": {
      "a": "Por disposição expressa da lei, o capital do seguro de pessoas é impenhorável e pertence diretamente aos beneficiários.",
      "b": "O capital pago por morte em seguro de vida não é herança, não responde por obrigações/dívidas do falecido e não paga ITCMD.",
      "d": "O seguro de vida não entra em inventário, não integra a herança e não se sujeita à partilha ou credores."
     }
    },
    {
     "id": "cpa-rel-17-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a D. A Lei 15.040/2024 admite carência para morte/invalidez por doença de até a metade da vigência do contrato (12 meses em 24 meses). Ocorrendo o sinistro na carência, a seguradora devolve os prêmios pagos ou a reserva matemática. A alteração de beneficiário por testamento é válida, mas se a seguradora não foi notificada antes do pagamento, ela fica exonerada pagando ao beneficiário indicado na apólice (cabendo ao novo beneficiário cobrar do antigo).</p><p>As alternativas A, B e C erram ao proibir a carência legal, invalidar a troca de beneficiário via testamento ou direcionar valores a credores do inventário.</p>",
     "enunciado": "<p>Analise o caso de um segurado que contratou um seguro de vida com prazo de vigência de dois anos. O contrato prevê uma cláusula de carência de 12 meses para eventos de morte decorrentes de enfermidades pré-existentes ou doenças. Durante o sexto mês de vigência, o segurado falece em decorrência de complicações de uma doença cardiovascular grave. Adicionalmente, constata-se que ele havia redigido um testamento três meses antes alterando o beneficiário do seguro sem ter notificado a seguradora. De acordo com a Lei 15.040/2024, o desfecho dessa operação é:</p>",
     "alternativas": {
      "a": "A seguradora responderá por perdas e danos por ter recebido os prêmios e deverá quitar o valor diretamente aos credores do inventário.",
      "b": "A seguradora é obrigada a pagar integralmente o capital segurado, visto que a Lei 15.040/2024 proíbe cláusula de carência em seguros de vida.",
      "c": "O testamento perde validade jurídica para alteração de beneficiários de seguros de vida, sendo o pagamento revertido compulsoriamente à União.",
      "d": "A seguradora não pagará o capital segurado devido ao sinistro dentro da carência legal, mas devolverá os prêmios pagos ao beneficiário antigo, ficando exonerada caso não soubesse do testamento."
     },
     "gabarito": "d",
     "feedback": {
      "a": "O contrato dentro da carência exige a devolução dos prêmios ou reserva, não havendo pagamento de perdas e danos nem envio a credores do inventário.",
      "b": "A carência para morte e invalidez decorrente de doença é legalmente permitida (limitada à metade da vigência, ou seja, 12 meses em 2 anos).",
      "c": "A alteração de beneficiário por testamento (declaração de última vontade) é válida; porém, sem aviso prévio, a seguradora se exonera pagando a quem constava na apólice."
     }
    }
   ],
   "Perfis da pessoa investidora": [
    {
     "id": "cpa-rel-18-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a D. A norma de adequação (suitability) determina expressamente que o perfil do cliente seja construído com base em três dimensões obrigatórias: objetivos de investimento, situação financeira e conhecimento sobre os produtos.</p><p>As alternativas A, B e C erram ao considerar as demais dimensões opcionais, fundamentar a adequação em uma única dimensão ou restringir o processo apenas à renda mensal.</p>",
     "enunciado": "<p>A Análise do Perfil do Investidor (API) é um processo obrigatório para a verificação da adequação de produtos de investimento ao cliente. A respeito das dimensões normativas que compõem o levantamento do perfil do investidor, é correto afirmar que:</p>",
     "alternativas": {
      "a": "O perfil do investidor é determinado exclusivamente pela renda mensal declarada no holerite do trabalhador.",
      "b": "A avaliação da situação financeira é a única dimensão exigida por norma, sendo opcional a apuração sobre objetivos e conhecimentos.",
      "c": "A verificação de conhecimento técnico do investidor é a única variável utilizada para autorizar aplicações em renda variável.",
      "d": "A análise de perfil exige a avaliação de três dimensões obrigatórias: objetivos de investimento, situação financeira e conhecimento do cliente."
     },
     "gabarito": "d",
     "feedback": {
      "a": "A renda mensal é apenas um componente da situação financeira, não definindo o perfil de forma isolada.",
      "b": "A regulação exige obrigatoriamente a análise conjunta das três dimensões, e não apenas da situação financeira.",
      "c": "A recomendação de produtos exige o cruzamento das três dimensões (objetivos, situação financeira e conhecimento), e não do conhecimento isolado."
     }
    },
    {
     "id": "cpa-rel-18-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. Na apuração do conhecimento do cliente, a avaliação da formação acadêmica e da experiência profissional é voltada para a pessoa física, constituindo exceção expressa quanto à sua aplicação para clientes pessoa jurídica.</p><p>As alternativas A, C e D erram ao inventar exigências acadêmicas para sócios de empresas, dispensar a verificação de histórico de operações da pessoa física ou igualar integralmente o questionário nos dois casos.</p>",
     "enunciado": "<p>Ao comparar os procedimentos de apuração da dimensão \"conhecimento\" para clientes pessoa física e clientes pessoa jurídica na Análise do Perfil do Investidor, verifica-se que:</p>",
     "alternativas": {
      "a": "A pessoa jurídica é obrigada a apresentar os diplomas universitários de todos os seus sócios para atestar conhecimento de mercado.",
      "b": "A análise de formação acadêmica e experiência profissional compõe o conhecimento da pessoa física, mas não se aplica ao cliente pessoa jurídica.",
      "c": "O cliente pessoa física está totalmente dispensado da verificação sobre os tipos de produtos com os quais já operou no passado.",
      "d": "Ambas as categorias de clientes possuem exatamente o mesmo roteiro de perguntas sobre formação acadêmica e histórico escolar."
     },
     "gabarito": "b",
     "feedback": {
      "a": "Exigir diplomas universitários de sócios de pessoas jurídicas não é um requisito e contraria a exceção normativa.",
      "c": "A pessoa física tem avaliados tanto os tipos de produtos com que possui familiaridade quanto a natureza, o volume e a frequência das operações que já realizou no mercado.",
      "d": "A verificação de formação acadêmica e experiência profissional é uma exceção que não se aplica às pessoas jurídicas."
     }
    },
    {
     "id": "cpa-rel-18-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a A. O perfil moderado busca ganho real acima do IPCA e aceita oscilação controlada, porque entende que o preço do dinheiro varia no caminho: mantém a base de segurança em liquidez diária e avança para produtos com marcação a mercado, como títulos indexados à inflação, multimercados com volatilidade limitada, debêntures de bons emissores e uma exposição pequena a renda variável.</p><p>As alternativas B, C e D erram ao atribuir ao moderado a carteira típica do arrojado, a do conservador, ou ao inventar percentuais de alocação supostamente fixados em norma.</p>",
     "enunciado": "<p>Uma cliente foi enquadrada no perfil moderado após a análise do perfil do investidor e pergunta ao gerente como fica, na prática, a composição da sua carteira e o que ela deve esperar como resultado. Considerando o comportamento e a carteira típica desse perfil, a orientação correta é:</p>",
     "alternativas": {
      "a": "Manter a base de segurança em liquidez diária e avançar para produtos com marcação a mercado, como títulos indexados à inflação, multimercados com volatilidade limitada, debêntures de bons emissores e uma exposição pequena a renda variável, buscando ganho real acima do IPCA.",
      "b": "Destinar parcelas expressivas do patrimônio a ações, fundos cambiais e estruturas com capital em risco, aceitando perdas nominais severas no percurso.",
      "c": "Concentrar a carteira em pós-fixados e abrir mão de retorno em troca de previsibilidade, para nunca ver o saldo cair de um mês para o outro.",
      "d": "Dividir o patrimônio em exatamente 50% de renda fixa e 50% de renda variável, percentual fixado pela Resolução CVM 30 para o perfil moderado."
     },
     "gabarito": "a",
     "feedback": {
      "b": "Parcelas expressivas em ações, fundos cambiais e estruturas com capital em risco, com aceitação de perdas nominais severas, descrevem a carteira do perfil arrojado, e não a do moderado.",
      "c": "Abrir mão de retorno em troca de previsibilidade e recusar ver o saldo cair descreve o perfil conservador; o moderado aceita oscilação controlada em busca de ganho real.",
      "d": "A norma não fixa percentuais de alocação por perfil; ela obriga a instituição a estabelecer previamente categorias de perfil de risco e a enquadrar o cliente nelas."
     }
    },
    {
     "id": "cpa-rel-18-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. Mesmo o investidor enquadrado no perfil arrojado necessita de uma parcela da sua carteira destinada à reserva de emergência em produtos de alta liquidez e baixo risco, visto que a reserva não deve ser exposta à volatilidade de mercado.</p><p>As alternativas A, C e D erram ao exigir 100% de renda variável para o perfil arrojado, assumir que a classificação elimina riscos ou prometer garantia de rentabilidade.</p>",
     "enunciado": "<p>Um cliente de 32 anos foi enquadrado como investidor arrojado por apresentar elevado conhecimento de mercado, patrimônio consolidado e alta tolerância a riscos de mercado. Ele solicita a alocação de 100% dos seus recursos em ações de alta volatilidade. Sob a ótica das boas práticas de gestão de carteiras e montagem do perfil, o gerente de investimentos deve orientar que:</p>",
     "alternativas": {
      "a": "O investidor arrojado é obrigado por norma regulatória a manter a totalidade dos seus bens em renda variável sem qualquer reserva em renda fixa.",
      "b": "Todo perfil de investidor, inclusive o arrojado, necessita de uma parcela alocada em ativos de alta liquidez e baixa oscilação para a reserva de emergência.",
      "c": "A alocação integral em ações de alta volatilidade é livre de riscos para clientes que possuem a classificação de perfil arrojado.",
      "d": "A classificação como arrojado garante a rentabilidade positiva da carteira de ações no prazo de até 12 meses."
     },
     "gabarito": "b",
     "feedback": {
      "a": "Não existe norma que obrigue o investidor arrojado a manter 100% em renda variável; a reserva de emergência continua sendo necessária.",
      "c": "O enquadramento em perfil arrojado não elimina o risco de mercado inerente às ações.",
      "d": "O perfil de risco apenas mede a adequação e a capacidade de suportar oscilações, sem garantir retorno ou rentabilidade futura."
     }
    },
    {
     "id": "cpa-rel-18-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a A. A Resolução CVM 30 não fixa a lista conservador, moderado e arrojado: ela obriga a instituição a estabelecer previamente categorias de perfil e a enquadrar o cliente nelas. O piso de três perfis vem da autorregulação, do Código de Distribuição da Anbima, e os nomes são convenção de mercado, razão pela qual há instituições com quatro ou cinco faixas. Ademais, para recomendar, a instituição precisa confrontar a classificação do cliente com a classificação prévia das categorias de produtos.</p><p>As alternativas B, C e D erram ao atribuir a taxonomia de três perfis à CVM, dispensar a classificação prévia dos produtos ou considerar o perfil do cliente como imutável.</p>",
     "enunciado": "<p>Uma instituição financeira organizou sua estrutura de atendimento definindo três perfis para seus clientes (conservador, moderado e arrojado). Ao analisar os fundamentos normativos do suitability quanto às nomenclaturas de perfis e ao processo de recomendação de produtos, verifica-se que:</p>",
     "alternativas": {
      "a": "O piso de três perfis vem da autorregulação da Anbima e os nomes conservador, moderado e arrojado são convenção de mercado; além disso, a recomendação exige o confronto entre a classificação do cliente e a classificação prévia das categorias de produtos.",
      "b": "A Resolução CVM 30 fixa compulsoriamente os nomes conservador, moderado e arrojado como a única taxonomia legal permitida no Brasil.",
      "c": "A recomendação de investimentos nasce exclusivamente do preenchimento do questionário do cliente, sendo desnecessária a classificação prévia das categorias de produtos.",
      "d": "O enquadramento no perfil é permanente e imutável ao longo do tempo, proibindo a reclassificação do cliente por mudanças de vida ou idade."
     },
     "gabarito": "a",
     "feedback": {
      "b": "A regulação da CVM exige que a instituição estabeleça categorias de perfis, mas a divisão e nomenclatura em três níveis é convenção da autorregulação da Anbima.",
      "c": "A recomendação exige duas classificações paralelas: a do cliente e a dos produtos de investimento oferecidos pela instituição.",
      "d": "O perfil do investidor é dinâmico e deve ser atualizado periodicamente ou sempre que ocorrerem mudanças relevantes em suas condições de vida."
     }
    }
   ],
   "Adequação de produtos financeiros (suitability)": [
    {
     "id": "cpa-rel-19-q1",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. A Resolução CVM 30 veda a recomendação de produtos, serviços ou operações em três situações taxativas: quando o produto for inadequado ao perfil, quando as informações do perfil não tiverem sido obtidas ou quando o perfil estiver desatualizado.</p><p>As alternativas A, C e D erram ao proibir a execução de ordens de iniciativa do cliente, considerar o alerta um abuso ou proibir a indicação de renda fixa para perfil conservador.</p>",
     "enunciado": "<p>A Resolução CVM 30 estabelece as regras e proibições relativas ao dever de verificação da adequação dos produtos financeiros ao perfil do cliente (suitability). De acordo com a referida norma, é expressamente vedado ao profissional ou à instituição:</p>",
     "alternativas": {
      "a": "Executar ordens emitidas por iniciativa própria do cliente quando o produto for incompatível com o seu perfil cadastrado.",
      "b": "Recomendar produtos ou serviços ao cliente quando as informações do seu perfil estiverem desatualizadas ou não tiverem sido obtidas.",
      "c": "Exigir a assinatura de termo de alerta de divergência para operações iniciadas pelo cliente sem recomendação.",
      "d": "Recomendar produtos de renda fixa pós-fixada com liquidez diária a investidores do perfil conservador."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A vedação normativa recai sobre a recomendação, sendo permitida a execução de ordens por iniciativa do cliente mediante alerta e declaração expressa.",
      "c": "Exigir o alerta e a declaração de ciência é um dever e procedimento obrigatório na execução de ordens inadequadas por iniciativa do cliente.",
      "d": "Recomendar renda fixa pós-fixada com liquidez diária para perfil conservador é conduta totalmente adequada e permitida."
     }
    },
    {
     "id": "cpa-rel-19-q2",
     "tipo": "multipla",
     "nivel": 1,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a D. O perfil do investidor obedece às normas de prevenção à lavagem de dinheiro com intervalo máximo de atualização de cinco anos, ao passo que a nova análise e classificação das categorias de valores mobiliários da instituição deve ocorrer em intervalo não superior a 24 meses.</p><p>As alternativas A, B e C erram ao igualar os prazos em 12 meses, inverter os relógios regulatórios ou negar a existência de prazos na norma.</p>",
     "enunciado": "<p>O processo de verificação de adequação (suitability) envolve prazos regulatórios distintos para a atualização dos dados do cliente e para a reavaliação das categorias de produtos financeiros ofertados pela instituição. Ao comparar esses dois prazos normativos, constata-se que:</p>",
     "alternativas": {
      "a": "Não existem prazos regulatórios máximos fixados pela Resolução CVM 30 para a atualização de dados cadastrais ou de produtos.",
      "b": "Ambas as atualizações (perfil do cliente e categorias de produtos) devem ocorrer compulsoriamente a cada 12 meses sob pena de multa diária.",
      "c": "O perfil do cliente deve ser reavaliado a cada 24 meses, enquanto a classificação dos produtos deve ser mantida inalterada por até cinco anos.",
      "d": "O perfil do cliente deve ser mantido atualizado em intervalo máximo de cinco anos, enquanto as categorias de valores mobiliários devem ser reavaliadas em até 24 meses."
     },
     "gabarito": "d",
     "feedback": {
      "a": "A norma estabelece expressamente os prazos máximos regulatórios de cinco anos para perfil do cliente e 24 meses para produtos.",
      "b": "A regulação fixa prazos distintos (cinco anos para o perfil e 24 meses para os produtos), não existindo a obrigatoriedade de 12 meses para ambos.",
      "c": "Os prazos estão invertidos; o teto de cinco anos aplica-se ao perfil do cliente e os 24 meses aplicam-se às categorias de produtos."
     }
    },
    {
     "id": "cpa-rel-19-q3",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a B. Para verificar a adequação aos objetivos, a norma manda analisar no mínimo o período em que o cliente deseja manter o investimento, as preferências declaradas quanto à assunção de riscos e as finalidades do investimento. Além das três dimensões, ela impõe um dever que quase todo material esquece: considerar os custos diretos e indiretos associados ao produto e abster-se de recomendar aqueles que, isoladamente ou em conjunto, impliquem custos excessivos e inadequados ao perfil do cliente.</p><p>As alternativas A, C e D erram ao encurtar a lista mínima dos objetivos, reduzir a situação financeira às receitas regulares ou limitar o dever de custos apenas aos custos diretos.</p>",
     "enunciado": "<p>A Resolução CVM 30 não se contenta com as três dimensões genéricas do perfil: ela lista o conteúdo mínimo a ser analisado em cada uma e impõe ainda um dever relativo ao preço do produto. A respeito desse conteúdo mínimo e desse dever, é correto afirmar que:</p>",
     "alternativas": {
      "a": "Nos objetivos basta verificar o período em que o cliente deseja manter o investimento, e o custo do produto não integra a análise de adequação, por ser matéria estritamente comercial.",
      "b": "Nos objetivos analisam-se, no mínimo, o período em que o cliente deseja manter o investimento, as preferências declaradas quanto à assunção de riscos e as finalidades do investimento; e a instituição deve considerar os custos diretos e indiretos, abstendo-se de recomendar produtos cujos custos sejam excessivos e inadequados ao perfil.",
      "c": "A situação financeira é apurada exclusivamente pelo valor das receitas regulares declaradas, ficando dispensadas a verificação do valor e dos ativos que compõem o patrimônio e a da necessidade futura de recursos.",
      "d": "O dever de considerar custos alcança apenas os custos diretos, sendo irrelevantes os custos indiretos sempre que o produto for compatível com o risco tolerado pelo cliente."
     },
     "gabarito": "b",
     "feedback": {
      "a": "A lista mínima dos objetivos inclui também as preferências declaradas quanto à assunção de riscos e as finalidades do investimento, e a norma manda considerar os custos, vedando recomendar o que for excessivamente caro para aquele perfil.",
      "c": "A situação financeira exige, no mínimo, o valor das receitas regulares declaradas, o valor e os ativos que compõem o patrimônio e a necessidade futura de recursos declarada.",
      "d": "O dever alcança os custos diretos e indiretos, isolada ou conjuntamente considerados; produto adequado ao risco, mas caro demais para aquele cliente, é recomendação vedada."
     }
    },
    {
     "id": "cpa-rel-19-q4",
     "tipo": "multipla",
     "nivel": 2,
     "usar_em": [
      "simulado",
      "revisao"
     ],
     "comentario": "<p>A resposta é a C. Quando a ordem parte de iniciativa do próprio cliente e o produto é inadequado, a instituição pode efetivar a operação desde que, antes de realizá-la, alerte o cliente sobre a inadequação apontando suas causas específicas e obtenha dele declaração expressa de ciência.</p><p>As alternativas A, B e D erram ao mascarar recomendação com termos genéricos, recusar a operação por iniciativa do cliente ou alterar fraudulentamente o cadastro no sistema.</p>",
     "enunciado": "<p>Um cliente ingressa na corretora e solicita a aplicação de seus recursos em um fundo de renda variável de altíssimo risco e baixa liquidez. O sistema indica que o produto é incompatível com o perfil conservador do investidor. Constatada a divergência e sabendo que a ordem partiu exclusivamente do cliente sem recomendação, a conduta correta da instituição deve ser:</p>",
     "alternativas": {
      "a": "Cancelar compulsoriamente a conta do cliente, vista a proibição legal absoluta de execução de ordens divergentes do perfil cadastrado.",
      "b": "Recomendar verbalmente o produto e colher posteriormente um termo de isenção de responsabilidade genérico sem indicar as causas.",
      "c": "Alertar o cliente indicando as causas específicas da divergência e obter dele declaração expressa de ciência da inadequação antes da operação.",
      "d": "Alterar automaticamente o cadastro do cliente para o perfil arrojado no sistema sem notificá-lo para autorizar a operação."
     },
     "gabarito": "c",
     "feedback": {
      "a": "A norma permite a realização da operação iniciada pelo cliente, desde que cumprido o rito de alerta de causas e declaração expressa.",
      "b": "É proibido recomendar produto inadequado e colher termos genéricos sem apontar as causas específicas da divergência.",
      "d": "Adulterar o perfil cadastral do cliente no sistema sem sua manifestação válida constitui grave infração regulatória."
     }
    },
    {
     "id": "cpa-rel-19-q5",
     "tipo": "multipla",
     "nivel": 3,
     "usar_em": [
      "simulado"
     ],
     "comentario": "<p>A resposta é a D. As dispensas de suitability aplicam-se a investidores qualificados (com exceção das pessoas naturais qualificadas por volume de recursos ou exames/certificações técnicas), pessoas jurídicas de direito público, clientes com carteira administrada discricionariamente e clientes com perfil já definido por consultor CVM.</p><p>As alternativas A, B e C erram ao conceder dispensa a pessoas naturais qualificadas por R$ 1 milhão ou exames técnicos, ou ao aceitar termos de renúncia geral inválidos perante a CVM.</p>",
     "enunciado": "<p>Um profissional de atendimento analisa as hipóteses em que o dever de verificação de adequação ao perfil do cliente (suitability) é dispensado pela Resolução CVM 30. Ao analisar as situações de diferentes clientes, o gerente conclui corretamente que a dispensa do procedimento de suitability aplica-se a:</p>",
     "alternativas": {
      "a": "Todo e qualquer cliente que assine um termo prévio de renúncia voluntária às regras de suitability no ato de abertura de conta.",
      "b": "Pessoa natural que possui mais de R$ 1.000.000,00 aplicados e assinou termo de qualificação como investidor qualificado por montante de recursos.",
      "c": "Pessoa natural aprovada em exame de qualificação técnica da CVM e cadastrada como investidora qualificada por conhecimento.",
      "d": "Pessoa jurídica de direito público e investidor com carteira administrada discricionariamente por administrador autorizado pela CVM."
     },
     "gabarito": "d",
     "feedback": {
      "a": "Não existe previsão de renúncia geral ou voluntária ao suitability mediante assinatura de termos genéricos na abertura de conta.",
      "b": "A dispensa de suitability para investidores qualificados não alcança pessoas naturais qualificadas por volume de investimento (acima de R$ 1 milhão).",
      "c": "A dispensa para investidores qualificados também não alcança pessoas naturais qualificadas por exames de certificação ou qualificação técnica."
     }
    }
   ]
  }
 }
});
