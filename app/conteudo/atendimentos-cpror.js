/* Casos autorais. Fonte: _conteudo/cpror/atendimentos.json. */
window.ATENDIMENTOS_CPROR = [
  {
    "id": "cpror-at-01",
    "materia": "Análise de informações do cliente",
    "topicos": [
      "Reserva de emergência para diferentes perfis de cliente",
      "Cobertura de despesas mensais e autonomia financeira",
      "Liquidez: prazo, negociabilidade e custo de saída",
      "Liquidez e rentabilidade na composição da reserva",
      "Coleta de informações para análise do perfil",
      "Objetivos financeiros: prioridades e compatibilidade entre metas",
      "Horizonte de investimento e necessidade futura de recursos",
      "Perfis conservador, moderado e arrojado: análise aplicada"
    ],
    "versao": 2,
    "tema": "Perfil e liquidez",
    "titulo": "O dinheiro tem data para sair",
    "resumo": "Concilie o pedido de rentabilidade com uma reforma e a reserva da família.",
    "contexto": "Você atende Marina, profissional autônoma. Ela recebeu R$ 180 mil e quer investir a quantia. Seu cadastro indica perfil moderado, mas a última conversa sobre seus objetivos ocorreu antes de uma mudança familiar. A cliente chega interessada em uma oferta com vencimento longo.",
    "fechamento": "A decisão começa pelos objetivos e pelo acesso ao dinheiro. Rentabilidade, perfil e prazo precisam ser avaliados em conjunto, com as condições de cada produto verificadas antes da aplicação.",
    "inicio": "n1",
    "nos": {
      "n1": {
        "habilidade": "Investigar antes de recomendar",
        "fala": "Vi uma taxa atraente para três anos. Quero aplicar os R$ 180 mil. Meu perfil moderado já permite, certo?",
        "correta": "2",
        "opcoes": [
          {
            "id": "1",
            "texto": "Vamos conferir as condições de resgate e os riscos da oferta antes de aplicar.",
            "explicacao": "Confere características relevantes do produto, mas ainda falta investigar os objetivos e as datas de uso do dinheiro da cliente.",
            "proximo": "n2b",
            "peso": 3
          },
          {
            "id": "2",
            "texto": "Antes da aplicação, para que você pretende usar esse dinheiro e em quais datas?",
            "explicacao": "Objetivos e prazos precisam ser conhecidos antes de avaliar se o produto é adequado. O rótulo do perfil não substitui essa investigação.",
            "proximo": "n2",
            "peso": 5
          },
          {
            "id": "3",
            "texto": "Vamos separar metade em liquidez diária e comparar as taxas para aplicar o restante por três anos.",
            "explicacao": "A divisão parece cautelosa, mas fixa uma proporção antes de conhecer os compromissos da cliente.",
            "proximo": "n2b",
            "peso": 1
          },
          {
            "id": "4",
            "texto": "Vamos conferir seu conforto com perdas e, mantendo o perfil moderado, escolher a maior taxa.",
            "explicacao": "Tolerância a perdas não substitui a análise da necessidade de liquidez e do prazo do objetivo.",
            "proximo": "n2b",
            "peso": 0
          }
        ],
        "tipo": "arvore"
      },
      "n2": {
        "habilidade": "Separar objetivos",
        "fala": "Você perguntou pelos meus objetivos. Preciso de R$ 90 mil em oito meses para a reforma; os outros R$ 90 mil são minha reserva. Como isso muda a escolha?",
        "correta": "3",
        "opcoes": [
          {
            "id": "1",
            "texto": "Trave os R$ 90 mil da reforma, pois há oito meses para negociar uma saída se for necessário.",
            "explicacao": "Um prazo conhecido exige acesso compatível com a data. Não se deve depender de uma negociação incerta para pagar a reforma.",
            "proximo": "n3",
            "peso": 1
          },
          {
            "id": "2",
            "texto": "Deixe a reforma com liquidez e aplique a reserva por três anos, pois ela só será usada em emergência.",
            "explicacao": "A imprevisibilidade da emergência exige disponibilidade, não justifica imobilizar a reserva.",
            "proximo": "n3",
            "peso": 0
          },
          {
            "id": "3",
            "texto": "Separe reforma e reserva, mantendo acesso compatível com cada necessidade; essa oferta pode não servir a nenhuma das duas.",
            "explicacao": "Ambas as parcelas têm necessidades de acesso que podem conflitar com o prazo e as condições da oferta.",
            "proximo": "n3",
            "peso": 5
          },
          {
            "id": "4",
            "texto": "Vamos manter os R$ 90 mil da reforma disponíveis para o pagamento e depois avaliar o destino da reserva.",
            "explicacao": "Prioriza corretamente a obrigação conhecida, mas ainda deixa sem análise a disponibilidade necessária para a reserva.",
            "proximo": "n3",
            "peso": 3
          }
        ],
        "tipo": "arvore"
      },
      "n3": {
        "habilidade": "Distinguir carência e liquidez",
        "fala": "O anúncio diz carência de seis meses. Então, depois disso, terei os R$ 90 mil disponíveis para pagar a obra?",
        "correta": "1",
        "opcoes": [
          {
            "id": "1",
            "texto": "Vamos verificar se há resgate após a carência, em quais condições e em que prazo o dinheiro fica disponível.",
            "explicacao": "O fim da carência não prova que haverá resgate imediato. Contrato, possibilidade de venda e liquidação precisam ser verificados.",
            "proximo": "n4",
            "peso": 5
          },
          {
            "id": "2",
            "texto": "Como a carência acaba antes da obra, podemos alinhar o pagamento ao oitavo mês.",
            "explicacao": "Essa conclusão confunde fim de carência com garantia de liquidez.",
            "proximo": "n4",
            "peso": 1
          },
          {
            "id": "3",
            "texto": "Podemos contar com uma venda após seis meses e usar o preço atual para estimar o pagamento da obra.",
            "explicacao": "Preço e comprador futuros são incertos. O preço de hoje não assegura o valor disponível na venda.",
            "proximo": "n4",
            "peso": 0
          },
          {
            "id": "4",
            "texto": "Vou consultar se existe resgate depois dos seis meses de carência.",
            "explicacao": "Verificar a possibilidade de resgate é útil, mas também faltam suas condições e o prazo efetivo de crédito do dinheiro.",
            "proximo": "n4",
            "peso": 3
          }
        ],
        "tipo": "arvore"
      },
      "n4": {
        "habilidade": "Reenquadrar a busca de retorno",
        "fala": "Mas minha amiga conseguiu mais retorno travando o dinheiro. Não quero perder essa chance por excesso de cautela.",
        "correta": "4",
        "opcoes": [
          {
            "id": "1",
            "texto": "Podemos travar metade da reforma e deixar a reserva pronta para completar o pagamento, se necessário.",
            "explicacao": "Usar a reserva para cobrir uma escolha incompatível com a reforma compromete sua função.",
            "proximo": "n5",
            "peso": 1
          },
          {
            "id": "2",
            "texto": "Podemos elevar seu perfil para permitir a oferta e manter os R$ 90 mil da reserva com liquidez.",
            "explicacao": "O perfil não deve ser alterado para acomodar um produto. A necessidade da reforma permanece.",
            "proximo": "n5",
            "peso": 0
          },
          {
            "id": "3",
            "texto": "Vamos comparar prazos de resgate e riscos antes de decidir pela taxa anunciada.",
            "explicacao": "A comparação técnica é pertinente, mas a resposta deixa implícita a ligação com a obra e não acolhe a preocupação da cliente com a oportunidade.",
            "proximo": "n5",
            "peso": 3
          },
          {
            "id": "4",
            "texto": "Entendo a comparação. Aqui o objetivo é pagar a obra na data e manter sua reserva acessível; vamos comparar o retorno entre opções que atendam a isso.",
            "explicacao": "A resposta acolhe a preocupação e mantém o objetivo como critério da comparação, sem prometer rentabilidade.",
            "proximo": "n5",
            "peso": 5
          }
        ],
        "tipo": "arvore"
      },
      "n5": {
        "habilidade": "Dimensionar a reserva",
        "fala": "Minhas despesas essenciais são R$ 7.500 por mês. Sem rendimento e sem novas entradas, quanto tempo os R$ 90 mil cobririam?",
        "correta": "2",
        "opcoes": [
          {
            "id": "1",
            "texto": "Seis meses, considerando que os outros R$ 90 mil estão destinados à obra.",
            "explicacao": "A reserva é de R$ 90 mil. Sua divisão por R$ 7.500 resulta em 12 meses; a parcela da obra não muda essa conta.",
            "proximo": "n6",
            "peso": 1
          },
          {
            "id": "2",
            "texto": "Doze meses. Depois avaliamos se essa cobertura é compatível com sua renda variável e suas obrigações.",
            "explicacao": "R$ 90.000 ÷ R$ 7.500 = 12 meses. A conta mede cobertura; a adequação depende das condições pessoais.",
            "proximo": "n6",
            "peso": 5
          },
          {
            "id": "3",
            "texto": "Vinte e quatro meses, pois o patrimônio recebido soma R$ 180 mil.",
            "explicacao": "A parcela da reforma já tem destino e não deve ser contada como reserva disponível.",
            "proximo": "n6",
            "peso": 0
          },
          {
            "id": "4",
            "texto": "A reserva cobre doze meses nas premissas informadas.",
            "explicacao": "A conta está correta: R$ 90.000 ÷ R$ 7.500 = 12. Falta conectar o resultado à adequação da cobertura para a renda variável e as obrigações da cliente.",
            "proximo": "n6",
            "peso": 3
          }
        ],
        "tipo": "arvore"
      },
      "n6": {
        "habilidade": "Encerrar com um plano verificável",
        "fala": "Certo. Quero organizar isso, mas não quero preencher documentos sem entender para que servem.",
        "correta": "3",
        "opcoes": [
          {
            "id": "1",
            "texto": "Aplicamos primeiro nas opções de menor risco e atualizamos seus objetivos na revisão anual.",
            "explicacao": "Adiar a atualização deixa a recomendação apoiada em informações antigas.",
            "proximo": "q1",
            "peso": 1
          },
          {
            "id": "2",
            "texto": "Registramos os dois objetivos e comparamos liquidez, riscos e custos das opções disponíveis.",
            "explicacao": "A proposta organiza bem a decisão inicial, mas não combina o acompanhamento antes dos pagamentos da obra.",
            "proximo": "q1",
            "peso": 3
          },
          {
            "id": "3",
            "texto": "Registramos objetivos e situação atual, explicamos as condições das opções compatíveis e combinamos uma revisão antes dos pagamentos da obra.",
            "explicacao": "A proposta liga a coleta de informações à decisão e define acompanhamento coerente com o objetivo.",
            "proximo": "q1",
            "peso": 5
          },
          {
            "id": "4",
            "texto": "Mantemos o cadastro e pedimos sua concordância com os riscos para liberar a oferta de três anos.",
            "explicacao": "Uma concordância genérica não corrige a incompatibilidade entre o produto e a necessidade identificada.",
            "proximo": "q1",
            "peso": 0
          }
        ],
        "tipo": "arvore"
      },
      "n2b": {
        "habilidade": "Separar objetivos",
        "fala": "Antes de escolher a aplicação, preciso contar algo: R$ 90 mil serão usados numa reforma em oito meses, e os outros R$ 90 mil são minha reserva. Isso cabe na proposta?",
        "correta": "3",
        "opcoes": [
          {
            "id": "1",
            "texto": "Trave os R$ 90 mil da reforma, pois há oito meses para negociar uma saída se for necessário.",
            "explicacao": "Um prazo conhecido exige acesso compatível com a data. Não se deve depender de uma negociação incerta para pagar a reforma.",
            "proximo": "n3",
            "peso": 1
          },
          {
            "id": "2",
            "texto": "Deixe a reforma com liquidez e aplique a reserva por três anos, pois ela só será usada em emergência.",
            "explicacao": "A imprevisibilidade da emergência exige disponibilidade, não justifica imobilizar a reserva.",
            "proximo": "n3",
            "peso": 0
          },
          {
            "id": "3",
            "texto": "Separe reforma e reserva, mantendo acesso compatível com cada necessidade; essa oferta pode não servir a nenhuma das duas.",
            "explicacao": "Ambas as parcelas têm necessidades de acesso que podem conflitar com o prazo e as condições da oferta.",
            "proximo": "n3",
            "peso": 5
          },
          {
            "id": "4",
            "texto": "Vamos manter os R$ 90 mil da reforma disponíveis para o pagamento e depois avaliar o destino da reserva.",
            "explicacao": "Prioriza corretamente a obrigação conhecida, mas ainda deixa sem análise a disponibilidade necessária para a reserva.",
            "proximo": "n3",
            "peso": 3
          }
        ],
        "tipo": "arvore"
      },
      "q1": {
        "habilidade": "Liquidez e finalidade dos recursos",
        "tipo": "multipla",
        "fala": "Marina decidiu comparar duas aplicações para os R$ 90 mil destinados à reforma. A primeira permite resgate diário, com crédito no dia útil seguinte, e apresenta pequena oscilação. A segunda tem vencimento em três anos, carência de seis meses e venda antecipada dependente de comprador, sem preço garantido. O fornecedor exige pagamento em oito meses. A cliente observa que o fim da carência antecede essa data e que a taxa da segunda aplicação é maior. Sua reserva para emergências está separada e não deve financiar a obra. Ela pede ao profissional que confirme se a taxa maior compensa a diferença de condições. Considerando as informações disponíveis, qual análise deve orientar a decisão?",
        "correta": "2",
        "opcoes": [
          {
            "id": "1",
            "texto": "A segunda é compatível, pois o intervalo de dois meses entre carência e pagamento permite planejar a venda.",
            "explicacao": "O intervalo não garante comprador, preço ou liquidação na data necessária.",
            "peso": 0,
            "proximo": "q2"
          },
          {
            "id": "2",
            "texto": "A primeira tem acesso mais compatível, mas ainda exige avaliar risco, valor líquido e antecedência do resgate para o pagamento.",
            "explicacao": "A possibilidade de resgate e o prazo de crédito favorecem o planejamento, sem eliminar a análise de risco e valor disponível.",
            "peso": 5,
            "proximo": "q2"
          },
          {
            "id": "3",
            "texto": "As duas são equivalentes para a obra, pois a reserva separada pode absorver diferenças na liquidação.",
            "explicacao": "Usar a reserva como solução automática desrespeita a finalidade definida para ela.",
            "peso": 0,
            "proximo": "q2"
          },
          {
            "id": "4",
            "texto": "A segunda deve receber metade do valor para combinar maior retorno e liquidez suficiente para a obra.",
            "explicacao": "Metade líquida não assegura os R$ 90 mil exigidos na data.",
            "peso": 0,
            "proximo": "q2"
          }
        ]
      },
      "q2": {
        "habilidade": "Cobertura da reserva após uma despesa",
        "tipo": "multipla",
        "fala": "Após organizar a reforma, Marina mantém R$ 90 mil como reserva e acompanha despesas essenciais de R$ 7.500 mensais. Um reparo imprevisto consome R$ 15 mil dessa reserva, sem afetar o dinheiro destinado à obra. No mês seguinte, ela informa que suas despesas essenciais subirão para R$ 8.000 e permanecerão nesse nível. Para avaliar apenas a autonomia proporcionada pela reserva, o profissional desconsidera rendimentos, inflação e futuras entradas de renda. Marina acredita que continua com doze meses de cobertura porque o valor inicial havia sido calculado para esse prazo. Ela pergunta se pode considerar toda a reserva disponível para sustentar as novas despesas. Qual é a cobertura atual nas premissas apresentadas?",
        "correta": "4",
        "opcoes": [
          {
            "id": "1",
            "texto": "11,25 meses, dividindo os R$ 90 mil iniciais pela nova despesa mensal.",
            "explicacao": "Essa conta ignora os R$ 15 mil já utilizados.",
            "peso": 0,
            "proximo": null
          },
          {
            "id": "2",
            "texto": "10 meses, dividindo o saldo de R$ 75 mil pela despesa anterior.",
            "explicacao": "A conta usa R$ 7.500, mas o cenário pede R$ 8.000 mensais.",
            "peso": 0,
            "proximo": null
          },
          {
            "id": "3",
            "texto": "12 meses, porque a finalidade da reserva permanece a mesma após o reparo.",
            "explicacao": "A finalidade não preserva a cobertura quando o saldo cai e a despesa aumenta.",
            "peso": 0,
            "proximo": null
          },
          {
            "id": "4",
            "texto": "9,375 meses, dividindo o saldo de R$ 75 mil pelas despesas de R$ 8 mil.",
            "explicacao": "R$ 90 mil − R$ 15 mil = R$ 75 mil. R$ 75 mil ÷ R$ 8 mil = 9,375 meses, cerca de 9,4 meses.",
            "peso": 5,
            "proximo": null
          }
        ]
      }
    },
    "decisoesArvore": 6,
    "questoesSimulado": 3
  },
  {
    "id": "cpror-at-02",
    "materia": "Prospecção e relacionamento com a pessoa investidora",
    "topicos": [
      "Finanças tradicionais e comportamentais: racionalidade, perdas e carteira",
      "Representatividade, disponibilidade e ancoragem no atendimento",
      "Excesso de confiança e aversão à perda",
      "Framing, confirmação, autoatribuição, status quo e efeito manada",
      "Finanças comportamentais na estratégia e na gestão de risco",
      "Entrevista do cliente: objetivos de curto, médio e longo prazo",
      "Levantamento financeiro: liquidez, experiência, renda e dependentes"
    ],
    "versao": 2,
    "tema": "Comportamento e carteira",
    "titulo": "Esperar voltar ao preço de compra",
    "resumo": "Ajude um cliente confiante a separar preço de compra, risco e decisão futura.",
    "contexto": "Rogério acompanha o mercado diariamente. Sua carteira atual soma R$ 400 mil, incluindo R$ 40 mil em ações de uma varejista nas quais investiu R$ 80 mil. Ele trouxe R$ 60 mil adicionais e quer aplicá-los na mesma empresa. Você precisa avaliar a decisão sem reduzir o atendimento a um rótulo comportamental.",
    "fechamento": "O preço de compra explica o passado, mas não determina a melhor decisão futura. O atendimento deve combinar evidências, concentração, capacidade de perda e objetivos, sem confundir acolhimento com concordância.",
    "inicio": "n1",
    "nos": {
      "n1": {
        "habilidade": "Investigar a tese",
        "fala": "Conheço essa empresa. Se eu aplicar os R$ 60 mil agora, baixo meu preço médio e recupero mais rápido. Podemos executar?",
        "correta": "3",
        "opcoes": [
          {
            "id": "1",
            "texto": "Vamos comparar os fundamentos atuais da empresa com os que motivaram a compra anterior.",
            "explicacao": "A revisão da tese é útil, mas faltam os objetivos do novo dinheiro e o efeito da concentração sobre a carteira.",
            "proximo": "n2b",
            "peso": 3
          },
          {
            "id": "2",
            "texto": "Podemos aplicar metade e guardar metade, equilibrando convicção e prudência.",
            "explicacao": "A proporção é arbitrária sem avaliar o risco total e a necessidade dos recursos.",
            "proximo": "n2b",
            "peso": 1
          },
          {
            "id": "3",
            "texto": "O que mudou na empresa e qual objetivo esse dinheiro precisa atender? Vamos avaliar também o impacto da posição na carteira.",
            "explicacao": "A pergunta distingue evidência de convicção e inclui objetivo e concentração antes da decisão.",
            "proximo": "n2",
            "peso": 5
          },
          {
            "id": "4",
            "texto": "Vamos vender a posição atual para interromper a perda e depois escolher outro setor.",
            "explicacao": "Vender apenas porque houve queda usa o passado como regra automática e dispensa a análise atual.",
            "proximo": "n2b",
            "peso": 0
          }
        ],
        "tipo": "arvore"
      },
      "n2": {
        "habilidade": "Separar perda passada e decisão futura",
        "fala": "Vamos avaliar isso. Tenho prazo para os R$ 60 mil novos, mas quero manter os R$ 40 mil da posição antiga até voltarem aos R$ 80 mil aplicados. Faz sentido?",
        "correta": "2",
        "opcoes": [
          {
            "id": "1",
            "texto": "Vamos rever as perspectivas da empresa antes de decidir manter ou vender a posição.",
            "explicacao": "Rever a tese ajuda, mas a resposta não aborda diretamente a condição de esperar pelo preço de compra imposta pelo cliente.",
            "proximo": "n3",
            "peso": 3
          },
          {
            "id": "2",
            "texto": "Se hoje você tivesse R$ 40 mil em dinheiro, compraria essa posição considerando seus objetivos e as informações atuais?",
            "explicacao": "A pergunta desloca a análise do valor passado para a decisão futura, sem impor uma venda automática.",
            "proximo": "n3",
            "peso": 5
          },
          {
            "id": "3",
            "texto": "Vamos vender metade agora e esperar a recuperação da outra metade para reduzir seu desconforto.",
            "explicacao": "O fracionamento não apresenta critério econômico e continua subordinando parte da decisão ao preço passado.",
            "proximo": "n3",
            "peso": 1
          },
          {
            "id": "4",
            "texto": "Vamos comprar mais para aproximar o preço médio da cotação e facilitar a saída no empate.",
            "explicacao": "Reduzir o preço médio exige mais capital em risco e não garante recuperação.",
            "proximo": "n3",
            "peso": 0
          }
        ],
        "tipo": "arvore"
      },
      "n3": {
        "habilidade": "Medir concentração",
        "fala": "Se colocar os R$ 60 mil nessa ação, qual será o peso dela? Minha carteira vale R$ 400 mil antes desse novo aporte.",
        "correta": "4",
        "opcoes": [
          {
            "id": "1",
            "texto": "A posição ficará em R$ 100 mil. Vou comparar esse valor com a carteira depois do aporte.",
            "explicacao": "Apura corretamente o numerador e identifica o denominador necessário, mas ainda não entrega o percentual solicitado de aproximadamente 21,7%.",
            "proximo": "n4",
            "peso": 3
          },
          {
            "id": "2",
            "texto": "Treze por cento, usando os R$ 60 mil sobre o patrimônio de R$ 460 mil.",
            "explicacao": "A conta ignora os R$ 40 mil já investidos na mesma ação.",
            "proximo": "n4",
            "peso": 1
          },
          {
            "id": "3",
            "texto": "Dez por cento, porque o aporte novo não altera o peso da posição que já existe.",
            "explicacao": "O aporte na mesma ação altera tanto a posição quanto o patrimônio total.",
            "proximo": "n4",
            "peso": 0
          },
          {
            "id": "4",
            "texto": "Aproximadamente 21,7%: R$ 100 mil nessa ação em uma carteira de R$ 460 mil.",
            "explicacao": "A posição será R$ 40 mil + R$ 60 mil. O patrimônio será R$ 400 mil + R$ 60 mil. A razão é 100 ÷ 460 ≈ 21,7%.",
            "proximo": "n4",
            "peso": 5
          }
        ],
        "tipo": "arvore"
      },
      "n4": {
        "habilidade": "Testar capacidade de perda",
        "fala": "Posso esperar. Se essa posição de R$ 100 mil cair mais 40%, qual seria o impacto na carteira de R$ 460 mil, com o restante estável?",
        "correta": "1",
        "opcoes": [
          {
            "id": "1",
            "texto": "Uma perda de R$ 40 mil, cerca de 8,7% da carteira. Precisamos avaliar se isso compromete seus objetivos.",
            "explicacao": "R$ 100 mil × 40% = R$ 40 mil; R$ 40 mil ÷ R$ 460 mil ≈ 8,7%. Disposição para esperar não elimina a perda possível.",
            "proximo": "n5",
            "peso": 5
          },
          {
            "id": "2",
            "texto": "A queda nessa posição seria de R$ 40 mil; precisamos confrontá-la com os objetivos.",
            "explicacao": "O valor da perda está correto, mas falta informar seu peso sobre a carteira: R$ 40 mil ÷ R$ 460 mil ≈ 8,7%.",
            "proximo": "n5",
            "peso": 3
          },
          {
            "id": "3",
            "texto": "Uma perda de R$ 16 mil, cerca de 3,5% da carteira, correspondente à posição antiga.",
            "explicacao": "A conta ignora os novos R$ 60 mil expostos à mesma ação.",
            "proximo": "n5",
            "peso": 1
          },
          {
            "id": "4",
            "texto": "Uma queda de 40% da carteira, pois o risco da ação passa a determinar o patrimônio total.",
            "explicacao": "A hipótese mantém o restante estável. A perda da carteira depende do peso da ação.",
            "proximo": "n5",
            "peso": 0
          }
        ],
        "tipo": "arvore"
      },
      "n5": {
        "habilidade": "Lidar com resistência",
        "fala": "Você está olhando só meus erros. Eu vendi outra ação com lucro de 12% em dois meses. Isso mostra que sei a hora de sair.",
        "correta": "3",
        "opcoes": [
          {
            "id": "1",
            "texto": "Esse lucro justifica manter sua autonomia e limitar nossa revisão à posição que caiu.",
            "explicacao": "Um ganho isolado não comprova habilidade recorrente nem dispensa a análise do conjunto.",
            "proximo": "n6",
            "peso": 1
          },
          {
            "id": "2",
            "texto": "A perda atual mostra que a estratégia falhou; vamos usar apenas aplicações conservadoras daqui em diante.",
            "explicacao": "Uma perda isolada também não define perfil ou invalida toda a estratégia.",
            "proximo": "n6",
            "peso": 0
          },
          {
            "id": "3",
            "texto": "Esse ganho faz parte do histórico. Vamos analisar decisões vencedoras e perdedoras com os mesmos critérios, incluindo riscos e objetivos.",
            "explicacao": "A abordagem evita selecionar apenas evidências favoráveis e avalia o processo decisório com consistência.",
            "proximo": "n6",
            "peso": 5
          },
          {
            "id": "4",
            "texto": "Podemos examinar também as operações que deram prejuízo, para evitar escolher apenas os bons exemplos.",
            "explicacao": "Amplia corretamente a amostra, mas ainda não define critérios consistentes de avaliação de risco, prazo e objetivos.",
            "proximo": "n6",
            "peso": 3
          }
        ],
        "tipo": "arvore"
      },
      "n6": {
        "habilidade": "Definir acompanhamento",
        "fala": "Quero uma regra para não decidir só pela emoção, mas não quero que qualquer queda me obrigue a vender.",
        "correta": "2",
        "opcoes": [
          {
            "id": "1",
            "texto": "Definimos a venda no preço de compra para evitar novas decisões enquanto a posição estiver abaixo dele.",
            "explicacao": "A regra mantém a ancoragem no preço passado e não acompanha a tese ou a adequação.",
            "proximo": "q1",
            "peso": 1
          },
          {
            "id": "2",
            "texto": "Combinamos limites de concentração e critérios de revisão da tese e dos objetivos, com acompanhamento registrado.",
            "explicacao": "Critérios prévios ajudam a avaliar mudanças relevantes sem transformar toda oscilação em ordem de venda.",
            "proximo": "q1",
            "peso": 5
          },
          {
            "id": "3",
            "texto": "Programamos aportes sempre que a ação cair, desde que o preço médio diminua.",
            "explicacao": "Uma regra de compra baseada apenas na queda pode ampliar a concentração e ignorar deterioração da empresa.",
            "proximo": "q1",
            "peso": 0
          },
          {
            "id": "4",
            "texto": "Vamos definir um limite de concentração para essa ação e acompanhá-lo nas revisões.",
            "explicacao": "O limite ajuda a controlar exposição, mas não cobre sozinho mudanças na tese da empresa ou nos objetivos do cliente.",
            "proximo": "q1",
            "peso": 3
          }
        ],
        "tipo": "arvore"
      },
      "n2b": {
        "habilidade": "Separar perda passada e decisão futura",
        "fala": "Acho que estamos decidindo rápido. Tenho prazo para o aporte, mas só vendo os R$ 40 mil da posição antiga quando recuperarem os R$ 80 mil aplicados. Como decidir?",
        "correta": "2",
        "opcoes": [
          {
            "id": "1",
            "texto": "Vamos rever as perspectivas da empresa antes de decidir manter ou vender a posição.",
            "explicacao": "Rever a tese ajuda, mas a resposta não aborda diretamente a condição de esperar pelo preço de compra imposta pelo cliente.",
            "proximo": "n3",
            "peso": 3
          },
          {
            "id": "2",
            "texto": "Se hoje você tivesse R$ 40 mil em dinheiro, compraria essa posição considerando seus objetivos e as informações atuais?",
            "explicacao": "A pergunta desloca a análise do valor passado para a decisão futura, sem impor uma venda automática.",
            "proximo": "n3",
            "peso": 5
          },
          {
            "id": "3",
            "texto": "Vamos vender metade agora e esperar a recuperação da outra metade para reduzir seu desconforto.",
            "explicacao": "O fracionamento não apresenta critério econômico e continua subordinando parte da decisão ao preço passado.",
            "proximo": "n3",
            "peso": 1
          },
          {
            "id": "4",
            "texto": "Vamos comprar mais para aproximar o preço médio da cotação e facilitar a saída no empate.",
            "explicacao": "Reduzir o preço médio exige mais capital em risco e não garante recuperação.",
            "proximo": "n3",
            "peso": 0
          }
        ],
        "tipo": "arvore"
      },
      "q1": {
        "habilidade": "Preço médio e exposição ao risco",
        "tipo": "multipla",
        "fala": "Depois da conversa, Rogério apresenta uma planilha em que a compra adicional reduz o preço médio de aquisição das ações. Ele conclui que a operação também reduz o risco da carteira, porque uma alta menor da cotação seria suficiente para alcançar o novo preço médio. O profissional confirma que a aritmética do preço médio está correta, mas observa que a quantidade de ações e o valor total exposto à empresa aumentarão. Não surgiram informações novas sobre o negócio e os objetivos do cliente continuam os mesmos. Rogério insiste que uma conta correta deveria bastar para aprovar a estratégia. Qual esclarecimento distingue o efeito contábil da compra adicional de seu efeito sobre o risco?",
        "correta": "1",
        "opcoes": [
          {
            "id": "1",
            "texto": "O preço médio menor altera o ponto de equilíbrio, mas a exposição financeira à empresa aumenta e a recuperação permanece incerta.",
            "explicacao": "O custo médio descreve a aquisição. Ele não é uma garantia de retorno nem demonstra redução do risco da posição.",
            "peso": 5,
            "proximo": "q2"
          },
          {
            "id": "2",
            "texto": "A redução do preço médio diminui o risco de crédito da empresa e melhora a probabilidade de recuperação.",
            "explicacao": "O preço pago pelo investidor não muda por si só a condição financeira da empresa.",
            "peso": 0,
            "proximo": "q2"
          },
          {
            "id": "3",
            "texto": "O risco da carteira cai se o preço médio diminuir, desde que o cliente mantenha a intenção de esperar.",
            "explicacao": "A disposição para esperar não elimina perdas nem reduz automaticamente a exposição.",
            "peso": 0,
            "proximo": "q2"
          },
          {
            "id": "4",
            "texto": "A compra é adequada quando o novo preço médio fica abaixo do preço anterior, após registrar a ciência do cliente.",
            "explicacao": "Esse critério ignora tese, objetivos e concentração; registrar ciência não substitui a análise.",
            "peso": 0,
            "proximo": "q2"
          }
        ]
      },
      "q2": {
        "habilidade": "Revisão da concentração",
        "tipo": "multipla",
        "fala": "Em uma simulação, o aporte de Rogério já foi incorporado à carteira: o patrimônio é de R$ 460 mil, com R$ 100 mil na varejista. Para avaliar uma decisão específica, ele e o profissional trabalham com uma meta hipotética de reduzir essa posição a 15% do patrimônio atual. A hipótese é vender parte das ações e manter integralmente o dinheiro da venda em caixa dentro da própria carteira. Desconsidere impostos, custos e qualquer oscilação durante a operação. Rogério sugere vender 15% das ações, pois entende que isso atingiria o peso desejado. O profissional precisa separar percentual de venda e peso final da posição. Qual valor deve sair das ações para que elas representem 15% dos R$ 460 mil?",
        "correta": "3",
        "opcoes": [
          {
            "id": "1",
            "texto": "R$ 15 mil, pois a venda de 15% da posição corresponde ao peso desejado.",
            "explicacao": "Isso deixaria R$ 85 mil em ações, cerca de 18,5% da carteira.",
            "peso": 0,
            "proximo": null
          },
          {
            "id": "2",
            "texto": "R$ 69 mil, valor correspondente a 15% do patrimônio total.",
            "explicacao": "R$ 69 mil é a posição que deve permanecer, não o valor vendido.",
            "peso": 0,
            "proximo": null
          },
          {
            "id": "3",
            "texto": "R$ 31 mil, deixando R$ 69 mil em ações e mantendo o patrimônio total em R$ 460 mil.",
            "explicacao": "15% × R$ 460 mil = R$ 69 mil. A venda deve ser R$ 100 mil − R$ 69 mil = R$ 31 mil.",
            "peso": 5,
            "proximo": null
          },
          {
            "id": "4",
            "texto": "R$ 40 mil, para retornar ao valor da posição antes do aporte.",
            "explicacao": "Retornar a R$ 40 mil não equivale à meta de 15%; vender R$ 40 mil deixaria R$ 60 mil em ações.",
            "peso": 0,
            "proximo": null
          }
        ]
      }
    },
    "decisoesArvore": 6,
    "questoesSimulado": 3
  },
  {
    "id": "cpror-at-03",
    "materia": "Análise de portfólio e monitoramento da carteira",
    "topicos": [
      "Revisão do perfil e comparação da alocação atual com a desejada",
      "Diagnóstico da carteira e comunicação de novas recomendações",
      "Rebalanceamento por calendário e por faixas percentuais",
      "Casamento e união estável: revisão dos objetivos financeiros",
      "Divórcio e falecimento: mudanças patrimoniais e necessidade de liquidez",
      "Mudança de país e eventos especiais: revisão da carteira",
      "Resgate antecipado: impactos em renda fixa, variável e alternativos",
      "Tributação e custos na decisão de rebalancear"
    ],
    "versao": 2,
    "tema": "Revisão da carteira",
    "titulo": "Uma mudança no plano da família",
    "resumo": "Reavalie liquidez, risco e rebalanceamento diante de uma queda temporária de renda.",
    "contexto": "Camila e André construíram uma carteira de R$ 300 mil para objetivos de longo prazo. Há R$ 60 mil em recursos líquidos e R$ 240 mil em aplicações sujeitas a oscilação ou restrições de saída. Camila fará uma pausa profissional de um ano. A nova condição exige rever o plano antes de negociar ativos.",
    "fechamento": "Mudanças de vida pedem atualização do diagnóstico e das metas. O rebalanceamento deve responder a essas mudanças e considerar liquidez efetiva, custos, riscos e acompanhamento.",
    "inicio": "n1",
    "nos": {
      "n1": {
        "habilidade": "Atualizar o diagnóstico",
        "fala": "Vou ficar um ano sem trabalhar. Podemos continuar com a carteira atual? Prefiro não vender nada num momento ruim.",
        "correta": "1",
        "opcoes": [
          {
            "id": "1",
            "texto": "Vamos atualizar as entradas, despesas e datas previstas de uso para medir a necessidade antes de decidir qualquer venda.",
            "explicacao": "A mudança na renda exige recalcular o fluxo e a disponibilidade. O diagnóstico deve preceder a negociação.",
            "proximo": "n2",
            "peso": 5
          },
          {
            "id": "2",
            "texto": "Podemos manter a carteira porque o objetivo original era de longo prazo e a pausa dura apenas um ano.",
            "explicacao": "O prazo original não elimina necessidades de caixa surgidas depois.",
            "proximo": "n2b",
            "peso": 1
          },
          {
            "id": "3",
            "texto": "Vamos levantar as aplicações que permitem retirada durante a pausa e suas condições de saída.",
            "explicacao": "A informação é necessária, mas precisa ser confrontada com o fluxo de renda e despesas para dimensionar as retiradas.",
            "proximo": "n2b",
            "peso": 3
          },
          {
            "id": "4",
            "texto": "Vamos repetir o questionário de tolerância e manter a carteira se as respostas não mudarem.",
            "explicacao": "A tolerância pode permanecer igual enquanto a capacidade financeira para suportar risco diminui.",
            "proximo": "n2b",
            "peso": 0
          }
        ],
        "tipo": "arvore"
      },
      "n2": {
        "habilidade": "Calcular a necessidade de caixa",
        "fala": "Vamos colocar os números na mesa: nos próximos 12 meses a renda líquida será R$ 8 mil e as despesas R$ 11 mil mensais. Sem rendimento nem inflação, quanto falta?",
        "correta": "4",
        "opcoes": [
          {
            "id": "1",
            "texto": "R$ 132 mil, equivalentes às despesas anuais que precisarão ser cobertas pela carteira.",
            "explicacao": "As despesas somam R$ 132 mil, mas haverá R$ 96 mil de renda no período.",
            "proximo": "n3",
            "peso": 1
          },
          {
            "id": "2",
            "texto": "Há uma diferença de R$ 3 mil por mês; precisamos multiplicá-la pelo período da pausa.",
            "explicacao": "O déficit mensal está correto, mas a resposta ainda não conclui o valor anual solicitado: R$ 36 mil.",
            "proximo": "n3",
            "peso": 3
          },
          {
            "id": "3",
            "texto": "R$ 96 mil, equivalentes à renda anual que ficará disponível.",
            "explicacao": "A renda anual não é o déficit. É preciso subtraí-la das despesas.",
            "proximo": "n3",
            "peso": 0
          },
          {
            "id": "4",
            "texto": "R$ 36 mil, resultado de R$ 3 mil mensais de diferença durante 12 meses.",
            "explicacao": "R$ 11 mil − R$ 8 mil = R$ 3 mil. Em 12 meses, R$ 3 mil × 12 = R$ 36 mil.",
            "proximo": "n3",
            "peso": 5
          }
        ],
        "tipo": "arvore"
      },
      "n3": {
        "habilidade": "Preservar uma reserva separada",
        "fala": "Dos R$ 60 mil líquidos, queremos manter R$ 40 mil para imprevistos. Quanto precisamos disponibilizar além dos R$ 20 mil restantes?",
        "correta": "2",
        "opcoes": [
          {
            "id": "1",
            "texto": "Dos R$ 36 mil necessários, podemos usar os R$ 20 mil separados e completar a diferença.",
            "explicacao": "Identifica corretamente as parcelas disponíveis, mas ainda não informa a necessidade adicional de R$ 16 mil.",
            "proximo": "n4",
            "peso": 3
          },
          {
            "id": "2",
            "texto": "R$ 16 mil adicionais, sem contar custos ou mudanças nas premissas do orçamento.",
            "explicacao": "R$ 36 mil necessários − R$ 20 mil disponíveis = R$ 16 mil. A reserva de R$ 40 mil permanece separada.",
            "proximo": "n4",
            "peso": 5
          },
          {
            "id": "3",
            "texto": "Nada, pois os R$ 60 mil líquidos cobrem o déficit anual de R$ 36 mil.",
            "explicacao": "Isso consumiria parte da reserva que a família decidiu preservar.",
            "proximo": "n4",
            "peso": 1
          },
          {
            "id": "4",
            "texto": "R$ 40 mil adicionais para recompor a reserva e financiar a diferença mensal.",
            "explicacao": "Os R$ 40 mil já estão separados. O déficit ainda descoberto é de R$ 16 mil.",
            "proximo": "n4",
            "peso": 0
          }
        ],
        "tipo": "arvore"
      },
      "n4": {
        "habilidade": "Comparar alternativas de saída",
        "fala": "Temos um ativo que caiu e outro com carência. Para liberar os R$ 16 mil, não seria melhor vender aquele que subiu?",
        "correta": "3",
        "opcoes": [
          {
            "id": "1",
            "texto": "Sim, vender o que subiu realiza um ganho e evita reconhecer a perda do outro ativo.",
            "explicacao": "Ganhos e perdas passados não bastam para escolher a saída mais adequada.",
            "proximo": "n5",
            "peso": 1
          },
          {
            "id": "2",
            "texto": "Vamos conferir quais aplicações podem gerar caixa a tempo e quanto custa sair de cada uma.",
            "explicacao": "Considera liquidez e custos, mas falta verificar como cada saída afetaria a alocação e o risco da carteira restante.",
            "proximo": "n5",
            "peso": 3
          },
          {
            "id": "3",
            "texto": "Vamos comparar disponibilidade, prazo de liquidação, custos e efeito na alocação antes de escolher a venda.",
            "explicacao": "O recurso precisa estar disponível quando necessário. A decisão também deve considerar os efeitos da negociação sobre a carteira.",
            "proximo": "n5",
            "peso": 5
          },
          {
            "id": "4",
            "texto": "Vamos esperar a carência acabar e usar temporariamente a reserva de imprevistos, preservando os ativos em queda.",
            "explicacao": "A proposta pode comprometer a reserva e ainda presume que o fim da carência assegura disponibilidade.",
            "proximo": "n5",
            "peso": 0
          }
        ],
        "tipo": "arvore"
      },
      "n5": {
        "habilidade": "Distinguir tolerância e capacidade",
        "fala": "Continuo confortável com oscilações. Por que reduzir exposição se meu jeito de investir não mudou?",
        "correta": "1",
        "opcoes": [
          {
            "id": "1",
            "texto": "Seu conforto pode ser o mesmo, mas a renda menor e as retiradas reduzem a capacidade de suportar perdas nesse período.",
            "explicacao": "Tolerância é a disposição subjetiva. Capacidade financeira depende de renda, obrigações, patrimônio e necessidade de uso.",
            "proximo": "n6",
            "peso": 5
          },
          {
            "id": "2",
            "texto": "Mesmo com seu conforto inalterado, precisamos ajustar a liquidez para as retiradas do período.",
            "explicacao": "Identifica uma necessidade real, mas não explica que a capacidade financeira para suportar perdas também pode ter diminuído.",
            "proximo": "n6",
            "peso": 3
          },
          {
            "id": "3",
            "texto": "Uma pausa na renda transforma seu perfil em conservador até a volta ao trabalho.",
            "explicacao": "Não se deve atribuir um perfil automaticamente por um único evento.",
            "proximo": "n6",
            "peso": 1
          },
          {
            "id": "4",
            "texto": "Podemos manter o risco e buscar maior retorno para compensar os R$ 3 mil mensais que faltam.",
            "explicacao": "Maior retorno esperado envolve incerteza e não substitui recursos para uma despesa previsível.",
            "proximo": "n6",
            "peso": 0
          }
        ],
        "tipo": "arvore"
      },
      "n6": {
        "habilidade": "Acompanhar a execução",
        "fala": "Depois desse ajuste, quando precisamos conversar de novo? Não quero depender de olhar o mercado todo dia.",
        "correta": "4",
        "opcoes": [
          {
            "id": "1",
            "texto": "Voltamos a conversar quando a carteira recuperar o valor anterior às vendas.",
            "explicacao": "O valor passado não é o gatilho relevante para acompanhar o orçamento e os objetivos.",
            "proximo": "q1",
            "peso": 0
          },
          {
            "id": "2",
            "texto": "Vamos marcar revisões periódicas para conferir se o orçamento e o saldo disponível seguem o plano.",
            "explicacao": "O acompanhamento periódico é adequado, mas falta combinar contato fora do calendário se as premissas mudarem.",
            "proximo": "q1",
            "peso": 3
          },
          {
            "id": "3",
            "texto": "Revisamos quando algum investimento tiver retorno inferior ao dos demais.",
            "explicacao": "Retorno relativo isolado não mede se o plano de caixa está sendo cumprido.",
            "proximo": "q1",
            "peso": 1
          },
          {
            "id": "4",
            "texto": "Combinamos revisões do orçamento e dos recursos disponíveis, além de contato se a renda, as despesas ou a duração da pausa mudarem.",
            "explicacao": "O acompanhamento deve verificar as premissas do plano e antecipar ajustes quando a situação da família se alterar.",
            "proximo": "q1",
            "peso": 5
          }
        ],
        "tipo": "arvore"
      },
      "n2b": {
        "habilidade": "Calcular a necessidade de caixa",
        "fala": "Antes de mexer na carteira, preciso explicar nosso orçamento: por 12 meses teremos R$ 8 mil de renda líquida e R$ 11 mil de despesas mensais. Sem rendimento nem inflação, quanto falta?",
        "correta": "4",
        "opcoes": [
          {
            "id": "1",
            "texto": "R$ 132 mil, equivalentes às despesas anuais que precisarão ser cobertas pela carteira.",
            "explicacao": "As despesas somam R$ 132 mil, mas haverá R$ 96 mil de renda no período.",
            "proximo": "n3",
            "peso": 1
          },
          {
            "id": "2",
            "texto": "Há uma diferença de R$ 3 mil por mês; precisamos multiplicá-la pelo período da pausa.",
            "explicacao": "O déficit mensal está correto, mas a resposta ainda não conclui o valor anual solicitado: R$ 36 mil.",
            "proximo": "n3",
            "peso": 3
          },
          {
            "id": "3",
            "texto": "R$ 96 mil, equivalentes à renda anual que ficará disponível.",
            "explicacao": "A renda anual não é o déficit. É preciso subtraí-la das despesas.",
            "proximo": "n3",
            "peso": 0
          },
          {
            "id": "4",
            "texto": "R$ 36 mil, resultado de R$ 3 mil mensais de diferença durante 12 meses.",
            "explicacao": "R$ 11 mil − R$ 8 mil = R$ 3 mil. Em 12 meses, R$ 3 mil × 12 = R$ 36 mil.",
            "proximo": "n3",
            "peso": 5
          }
        ],
        "tipo": "arvore"
      },
      "q1": {
        "habilidade": "Mudança de renda e risco",
        "tipo": "multipla",
        "fala": "Camila mantém a mesma disposição emocional para enfrentar oscilações e continua investindo para a aposentadoria. Entretanto, a pausa profissional criou retiradas mensais previstas e reduziu a renda familiar. Na revisão, o questionário de tolerância produz respostas semelhantes às anteriores. André interpreta o resultado como confirmação de que a alocação deve permanecer intacta. O profissional já identificou uma parcela para cobrir o déficit de caixa e sabe que o restante da carteira também precisa ser reavaliado à luz das obrigações atuais. O casal pede uma explicação que evite a impressão de que o questionário foi inútil. Qual conclusão integra corretamente as informações disponíveis?",
        "correta": "2",
        "opcoes": [
          {
            "id": "1",
            "texto": "A manutenção da tolerância autoriza preservar a exposição, desde que o casal confirme conhecer as oscilações.",
            "explicacao": "Ciência dos riscos e tolerância não substituem a avaliação da capacidade financeira.",
            "peso": 0,
            "proximo": "q2"
          },
          {
            "id": "2",
            "texto": "A tolerância pode estar estável, enquanto a capacidade financeira e a necessidade de liquidez mudaram; a adequação deve considerar as três dimensões.",
            "explicacao": "O questionário contribui para o diagnóstico, que também depende das condições objetivas e dos prazos de uso.",
            "peso": 5,
            "proximo": "q2"
          },
          {
            "id": "3",
            "texto": "A pausa profissional impõe reduzir todos os investimentos ao mesmo nível de risco da reserva de emergência.",
            "explicacao": "Uma única condição não determina a alocação de todos os objetivos; é preciso analisar valores, prazos e capacidade.",
            "peso": 0,
            "proximo": "q2"
          },
          {
            "id": "4",
            "texto": "A carteira deve manter os pesos até a próxima revisão anual para preservar a estratégia de longo prazo.",
            "explicacao": "Uma mudança relevante pode exigir revisão antes do calendário previsto.",
            "peso": 0,
            "proximo": "q2"
          }
        ]
      },
      "q2": {
        "habilidade": "Recalcular o caixa necessário",
        "tipo": "multipla",
        "fala": "Seis meses depois, Camila e André fazem a revisão prevista. Para os seis meses restantes da pausa, a renda líquida familiar continuará em R$ 8 mil por mês, mas as despesas cairão para R$ 10 mil. Há R$ 9 mil ainda disponíveis na parcela destinada a cobrir esse déficit, além da reserva de R$ 40 mil para imprevistos, que o casal quer manter intacta. Nenhum pagamento extraordinário está previsto e, para esta conta, devem ser desconsiderados rendimentos e custos. André considera que não será necessário disponibilizar mais dinheiro porque as despesas diminuíram. Camila pede que o profissional confirme a suficiência do saldo para o período restante antes de negociar qualquer investimento. Qual é a necessidade adicional?",
        "correta": "4",
        "opcoes": [
          {
            "id": "1",
            "texto": "R$ 12 mil, sem considerar os R$ 9 mil que já estão separados.",
            "explicacao": "R$ 12 mil é o déficit total dos seis meses, mas parte dele já está coberta.",
            "peso": 0,
            "proximo": null
          },
          {
            "id": "2",
            "texto": "Nenhuma, porque a reserva de R$ 40 mil cobre a diferença.",
            "explicacao": "A premissa é preservar essa reserva e usar a parcela específica para o déficit.",
            "peso": 0,
            "proximo": null
          },
          {
            "id": "3",
            "texto": "R$ 9 mil, repetindo o saldo atual para manter uma margem de segurança.",
            "explicacao": "A questão pede a necessidade calculada nas premissas, não uma margem arbitrária.",
            "peso": 0,
            "proximo": null
          },
          {
            "id": "4",
            "texto": "R$ 3 mil, pois o déficit restante é de R$ 12 mil e já há R$ 9 mil separados.",
            "explicacao": "(R$ 10 mil − R$ 8 mil) × 6 = R$ 12 mil. R$ 12 mil − R$ 9 mil = R$ 3 mil.",
            "peso": 5,
            "proximo": null
          }
        ]
      }
    },
    "decisoesArvore": 6,
    "questoesSimulado": 3
  },
  {
    "id": "cpror-at-04",
    "materia": "Indicação de investimentos",
    "topicos": [
      "Alocação de ativos: perfil, fase de vida e pilares da decisão",
      "Classes de ativos e diversificação na construção da carteira",
      "Renda fixa: remuneração, riscos e adequação ao cliente",
      "Títulos bancários, imobiliários e do agronegócio: emissores e estruturas",
      "Riscos acionários, volatilidade e correlação",
      "Acesso a criptoativos e impacto de bitcoin e ether na carteira"
    ],
    "versao": 1,
    "fonte": "Adaptado do caderno Questões interativas CPA da ANBIMA",
    "tema": "Adequação e diversificação",
    "titulo": "Herança, segurança e diversificação",
    "resumo": "Conduza o primeiro atendimento de um cliente que herdou uma empresa e uma carteira de investimentos.",
    "contexto": "Você é responsável pelo relacionamento com Jonathan, 29 anos. Ele herdou uma empresa e uma carteira de investimentos da família. Não participou da montagem da carteira e afirma que ainda conhece pouco sobre investimentos. Sua tarefa é levantar as informações necessárias e orientar a decisão com clareza, sem prometer segurança ou retorno.",
    "fechamento": "O profissional não deve transformar uma preferência inicial em recomendação pronta. Experiência, objetivos, horizonte, liquidez, reserva e capacidade para suportar perdas precisam sustentar a alocação e a comunicação dos riscos.",
    "inicio": "n1",
    "nos": {
      "n1": {
        "habilidade": "Iniciar o diagnóstico",
        "fala": "Herdei a empresa e a carteira da família. Sinceramente, não sei como administrar tudo isso.",
        "correta": "1",
        "tipo": "arvore",
        "opcoes": [
          {
            "id": "1",
            "texto": "Antes de recomendar, quero entender sua experiência, seus objetivos e o papel desse patrimônio na sua vida.",
            "explicacao": "A resposta acolhe a dúvida e abre a coleta das informações essenciais antes de falar em produtos.",
            "peso": 5,
            "proximo": "n2"
          },
          {
            "id": "2",
            "texto": "Qual é seu principal objetivo para a carteira: preservar capital, gerar renda ou buscar crescimento?",
            "explicacao": "A pergunta é pertinente, mas cobre apenas uma parte do diagnóstico necessário.",
            "peso": 3,
            "proximo": "n2b"
          },
          {
            "id": "3",
            "texto": "Podemos começar diversificando entre renda fixa e ações para equilibrar segurança e crescimento.",
            "explicacao": "Diversificação pode ser útil, mas a sugestão chega antes da avaliação do cliente e da carteira herdada.",
            "peso": 1,
            "proximo": "n2b"
          },
          {
            "id": "4",
            "texto": "Como a carteira já pertenceu à sua família, podemos mantê-la até você ganhar experiência.",
            "explicacao": "O histórico familiar não demonstra adequação às necessidades e à capacidade financeira do novo titular.",
            "peso": 0,
            "proximo": "n2b"
          }
        ]
      },
      "n2": {
        "habilidade": "Aprofundar perfil e objetivos",
        "fala": "Tenho pouca experiência. Quero preservar o patrimônio e evitar perdas grandes, mas também gostaria de algum crescimento.",
        "correta": "2",
        "tipo": "arvore",
        "opcoes": [
          {
            "id": "1",
            "texto": "Podemos adotar imediatamente uma carteira moderada, que combina proteção e crescimento.",
            "explicacao": "O rótulo moderado antecipa uma conclusão sem conhecer liquidez, horizonte e capacidade de perda.",
            "peso": 1,
            "proximo": "n3"
          },
          {
            "id": "2",
            "texto": "Vamos separar seus objetivos por prazo e verificar liquidez, renda, reserva e reação a perdas antes de definir a alocação.",
            "explicacao": "A resposta transforma preferências gerais em informações verificáveis para a recomendação.",
            "peso": 5,
            "proximo": "n3"
          },
          {
            "id": "3",
            "texto": "Quais valores você pretende usar no curto prazo e quais podem permanecer investidos por mais tempo?",
            "explicacao": "A pergunta avança bem sobre prazo e liquidez, mas ainda não completa o diagnóstico financeiro e de risco.",
            "peso": 3,
            "proximo": "n3"
          },
          {
            "id": "4",
            "texto": "Como sua prioridade é preservar, a carteira deve ficar integralmente em ativos sem oscilação.",
            "explicacao": "Não existem investimentos completamente sem risco, e a preferência declarada não basta para definir toda a alocação.",
            "peso": 0,
            "proximo": "n3"
          }
        ]
      },
      "n2b": {
        "habilidade": "Corrigir uma recomendação prematura",
        "fala": "Meu foco é preservar o patrimônio, mas eu esperava que você primeiro entendesse melhor minha situação.",
        "correta": "2",
        "tipo": "arvore",
        "opcoes": [
          {
            "id": "1",
            "texto": "Sua preferência já indica uma carteira conservadora; faltaria apenas escolher os produtos.",
            "explicacao": "Preferência não substitui a análise do horizonte, da liquidez, da experiência e da capacidade financeira.",
            "peso": 1,
            "proximo": "n3"
          },
          {
            "id": "2",
            "texto": "Você tem razão. Vamos separar objetivos por prazo e verificar liquidez, renda, reserva, experiência e capacidade para perdas.",
            "explicacao": "A resposta reconhece a antecipação e retoma um diagnóstico completo.",
            "peso": 5,
            "proximo": "n3"
          },
          {
            "id": "3",
            "texto": "Quais recursos você pode manter investidos por mais tempo sem comprometer seus compromissos?",
            "explicacao": "A pergunta corrige parte da falha ao tratar de prazo e liquidez, mas ainda não fecha o diagnóstico.",
            "peso": 3,
            "proximo": "n3"
          },
          {
            "id": "4",
            "texto": "Podemos manter a carteira herdada enquanto eu preparo uma recomendação mais segura.",
            "explicacao": "Manter a carteira também é uma decisão de investimento e exige análise prévia.",
            "peso": 0,
            "proximo": "n3"
          }
        ]
      },
      "n3": {
        "habilidade": "Verificar a reserva",
        "fala": "A empresa gera renda suficiente e não preciso usar a carteira agora. Ainda não separei uma reserva pessoal para emergências.",
        "correta": "3",
        "tipo": "arvore",
        "opcoes": [
          {
            "id": "1",
            "texto": "O caixa da empresa pode funcionar como sua reserva enquanto a renda continuar estável.",
            "explicacao": "Misturar recursos empresariais e pessoais pode comprometer ambos e não assegura liquidez pessoal.",
            "peso": 0,
            "proximo": "n4"
          },
          {
            "id": "2",
            "texto": "Podemos manter uma pequena parcela líquida e investir o restante conforme seu perfil.",
            "explicacao": "A direção é razoável, mas a parcela não deve ser arbitrária nem definida antes de medir despesas e riscos.",
            "peso": 1,
            "proximo": "n4"
          },
          {
            "id": "3",
            "texto": "Vamos dimensionar uma reserva pessoal por despesas e estabilidade de renda, separada do caixa da empresa, antes da alocação de longo prazo.",
            "explicacao": "A resposta protege o plano pessoal e evita depender da liquidação da carteira ou do caixa empresarial em uma emergência.",
            "peso": 5,
            "proximo": "n4"
          },
          {
            "id": "4",
            "texto": "Vamos calcular suas despesas e manter recursos líquidos enquanto avaliamos a separação entre patrimônio pessoal e empresarial.",
            "explicacao": "A conduta avança corretamente, mas ainda não explicita que a reserva precisa ser dimensionada e separada antes do restante da alocação.",
            "peso": 3,
            "proximo": "n4"
          }
        ]
      },
      "n4": {
        "habilidade": "Distinguir tolerância e capacidade",
        "fala": "Consigo aceitar pequenas oscilações, desde que elas não coloquem meus objetivos e a empresa em risco.",
        "correta": "4",
        "tipo": "arvore",
        "opcoes": [
          {
            "id": "1",
            "texto": "Pequenas oscilações confirmam um perfil moderado e autorizam uma parcela fixa em renda variável.",
            "explicacao": "Uma declaração isolada não determina perfil nem percentual de alocação.",
            "peso": 1,
            "proximo": "n5"
          },
          {
            "id": "2",
            "texto": "Vamos limitar as oscilações escolhendo somente produtos com rentabilidade previsível.",
            "explicacao": "Previsibilidade de remuneração não elimina riscos de crédito, mercado, liquidez ou reinvestimento.",
            "peso": 0,
            "proximo": "n5"
          },
          {
            "id": "3",
            "texto": "Vamos medir quanto de perda você aceitaria sem mudar o plano e comparar com os prazos dos objetivos.",
            "explicacao": "A análise combina tolerância e prazo, mas ainda precisa incorporar a capacidade financeira e a separação da empresa.",
            "peso": 3,
            "proximo": "n5"
          },
          {
            "id": "4",
            "texto": "Vamos avaliar sua disposição emocional e também a capacidade financeira de suportar perdas, considerando objetivos, renda e patrimônio empresarial separadamente.",
            "explicacao": "A resposta diferencia vontade de correr risco das condições objetivas para suportá-lo.",
            "peso": 5,
            "proximo": "n5"
          }
        ]
      },
      "n5": {
        "habilidade": "Comunicar riscos dos produtos",
        "fala": "Ouvi dizer que renda fixa, agronegócio e ativos digitais podem formar uma carteira segura. É verdade?",
        "correta": "1",
        "tipo": "arvore",
        "opcoes": [
          {
            "id": "1",
            "texto": "Esses nomes abrangem riscos diferentes. Precisamos avaliar emissor, liquidez, mercado e concentração; diversificar reduz alguns riscos, mas não garante segurança.",
            "explicacao": "A resposta evita generalizações e explica o papel e os limites da diversificação.",
            "peso": 5,
            "proximo": "n6"
          },
          {
            "id": "2",
            "texto": "Podemos combinar as três classes para reduzir a oscilação da carteira.",
            "explicacao": "Combinar classes pode ajudar, mas o efeito depende dos riscos e das correlações, e não garante menor oscilação.",
            "peso": 1,
            "proximo": "n6"
          },
          {
            "id": "3",
            "texto": "Renda fixa pode compor a parcela de estabilidade, enquanto avaliamos com cuidado os demais ativos.",
            "explicacao": "A afirmação é prudente, mas ainda generaliza renda fixa e não explica os riscos das classes citadas.",
            "peso": 3,
            "proximo": "n6"
          },
          {
            "id": "4",
            "texto": "Sim. A presença de renda fixa compensa o risco das outras classes e protege o capital.",
            "explicacao": "Nenhuma combinação garante proteção, e a renda fixa também apresenta riscos.",
            "peso": 0,
            "proximo": "n6"
          }
        ]
      },
      "n6": {
        "habilidade": "Concluir sem promessas",
        "fala": "Quero estabilidade e algum crescimento, mas preciso entender o que será feito antes de decidir.",
        "correta": "2",
        "tipo": "arvore",
        "opcoes": [
          {
            "id": "1",
            "texto": "Prepararei uma carteira conservadora com uma pequena parcela de crescimento e apresentarei os produtos.",
            "explicacao": "A proposta ainda define a carteira antes de concluir e registrar o diagnóstico.",
            "peso": 1,
            "proximo": "q1"
          },
          {
            "id": "2",
            "texto": "Concluiremos o diagnóstico, analisaremos a carteira herdada e compararemos alternativas compatíveis, explicando riscos, custos, liquidez e acompanhamento.",
            "explicacao": "A resposta mantém a decisão apoiada em dados e assegura comunicação suficiente para uma escolha consciente.",
            "peso": 5,
            "proximo": "q1"
          },
          {
            "id": "3",
            "texto": "Primeiro analisaremos a carteira herdada e os riscos de concentração antes de propor mudanças.",
            "explicacao": "A análise da carteira é necessária, mas a resposta não reúne todos os elementos do diagnóstico e da comunicação ao cliente.",
            "peso": 3,
            "proximo": "q1"
          },
          {
            "id": "4",
            "texto": "Montaremos uma carteira estável que preserve o patrimônio e evite perdas relevantes.",
            "explicacao": "A resposta promete um resultado que nenhum investimento pode assegurar.",
            "peso": 0,
            "proximo": "q1"
          }
        ]
      },
      "q1": {
        "habilidade": "Evitar conclusão prematura sobre o perfil",
        "fala": "Ao recomendar investimentos para Jonathan, qual conduta representa o erro mais crítico diante das informações levantadas?",
        "correta": "1",
        "tipo": "multipla",
        "opcoes": [
          {
            "id": "1",
            "texto": "Presumir uma carteira integralmente conservadora apenas porque ele deseja preservar capital, sem avaliar tolerância, capacidade, objetivos e horizonte.",
            "explicacao": "Uma preferência declarada é relevante, mas não substitui o conjunto de informações exigido para a adequação.",
            "peso": 5,
            "proximo": "q2"
          },
          {
            "id": "2",
            "texto": "Analisar a carteira herdada antes de propor alterações e registrar os riscos encontrados.",
            "explicacao": "A análise da posição atual é parte necessária do diagnóstico.",
            "peso": 0,
            "proximo": "q2"
          },
          {
            "id": "3",
            "texto": "Separar patrimônio pessoal e empresarial ao avaliar liquidez e capacidade financeira.",
            "explicacao": "A separação evita que recursos com finalidades diferentes sejam tratados como se fossem intercambiáveis.",
            "peso": 0,
            "proximo": "q2"
          },
          {
            "id": "4",
            "texto": "Explicar riscos, custos e liquidez das alternativas antes de receber a decisão do cliente.",
            "explicacao": "A transparência apoia uma decisão consciente e não constitui o erro descrito.",
            "peso": 0,
            "proximo": "q2"
          }
        ]
      },
      "q2": {
        "habilidade": "Reconhecer o papel da reserva",
        "fala": "Por que a ausência de uma reserva pessoal de emergência pode comprometer a estratégia de Jonathan?",
        "correta": "3",
        "tipo": "multipla",
        "opcoes": [
          {
            "id": "1",
            "texto": "Porque somente investidores com baixo patrimônio precisam manter recursos líquidos separados.",
            "explicacao": "A necessidade de reserva depende de despesas, estabilidade de renda e riscos pessoais, não apenas do patrimônio.",
            "peso": 0,
            "proximo": null
          },
          {
            "id": "2",
            "texto": "Porque a reserva deve buscar a maior rentabilidade disponível enquanto não for utilizada.",
            "explicacao": "A reserva prioriza disponibilidade e adequação ao uso, não a maximização do retorno.",
            "peso": 0,
            "proximo": null
          },
          {
            "id": "3",
            "texto": "Porque uma necessidade inesperada pode forçar a venda de investimentos em momento desfavorável e prejudicar os objetivos de longo prazo.",
            "explicacao": "A reserva reduz a necessidade de liquidar posições inadequadamente ou recorrer ao caixa empresarial.",
            "peso": 5,
            "proximo": null
          },
          {
            "id": "4",
            "texto": "Porque o caixa da empresa deve substituir permanentemente a reserva pessoal.",
            "explicacao": "Recursos empresariais têm finalidade e riscos próprios e não devem ser presumidos como reserva pessoal.",
            "peso": 0,
            "proximo": null
          }
        ]
      }
    },
    "decisoesArvore": 6,
    "questoesSimulado": 3
  },
  {
    "id": "cpror-at-05",
    "materia": "Prospecção e relacionamento com a pessoa investidora",
    "topicos": [
      "Funil de prospecção: da primeira reunião ao acompanhamento",
      "Competências comerciais: comunicação, organização e ética",
      "Entrevista do cliente: objetivos de curto, médio e longo prazo",
      "Levantamento financeiro: liquidez, experiência, renda e dependentes",
      "Suitability: verificação, impedimentos e ordem do cliente"
    ],
    "versao": 1,
    "fonte": "Adaptado do caderno Questões interativas C-Pro R da ANBIMA",
    "tema": "Prospecção, suitability e ordem do cliente",
    "titulo": "Saldo em conta e pedido por uma ação",
    "resumo": "Conduza o contato com um cliente conservador que quer concentrar todo o recurso em uma ação de tecnologia.",
    "contexto": "Laura identifica R$ 65 mil mantidos em conta corrente por Antônio e faz um contato de prospecção. O cadastro indica perfil conservador. Antônio afirma que parentes tiveram bons resultados com uma empresa de tecnologia e quer aplicar todo o valor nessa única ação ainda hoje, antes de entrar em uma reunião.",
    "fechamento": "Prospecção não autoriza transformar o saldo do cliente em recomendação automática. A profissional deve obter permissão para conversar, confirmar objetivos e dados do perfil, explicar a divergência concreta e distinguir recomendação da instituição de uma ordem espontânea do cliente.",
    "inicio": "n1",
    "nos": {
      "n1": {
        "tipo": "arvore",
        "habilidade": "Abrir o contato com respeito e finalidade clara",
        "fala": "Oi.",
        "correta": "1",
        "opcoes": [
          {
            "id": "1",
            "texto": "Bom dia, Antônio. Aqui é Laura, sua gerente. Você tem um momento para conversarmos sobre o uso dos seus recursos financeiros?",
            "explicacao": "A abordagem identifica a profissional, pede disponibilidade e apresenta a finalidade sem pressionar nem revelar um valor específico logo na abertura.",
            "peso": 5,
            "proximo": "n2"
          },
          {
            "id": "2",
            "texto": "Olá, Antônio. É Laura. Posso tomar um minuto para falar de investimentos?",
            "explicacao": "A abordagem pede espaço e indica o assunto, mas ainda é genérica e pode soar apressada.",
            "peso": 3,
            "proximo": "n2b"
          },
          {
            "id": "3",
            "texto": "Tenho algumas oportunidades de investimento que podem render mais do que o dinheiro em conta.",
            "explicacao": "A fala começa por uma oferta antes de compreender o cliente e seus objetivos.",
            "peso": 1,
            "proximo": "n2b"
          },
          {
            "id": "4",
            "texto": "Antônio, vi que você tem R$ 65 mil parados. Vamos investir esse dinheiro hoje?",
            "explicacao": "A fala expõe o saldo e pressiona por uma decisão antes de qualquer diagnóstico.",
            "peso": 0,
            "proximo": "n2b"
          }
        ]
      },
      "n2": {
        "tipo": "arvore",
        "habilidade": "Explicar o motivo sem criar alarme",
        "fala": "Tem algo errado com a minha conta?",
        "correta": "2",
        "opcoes": [
          {
            "id": "1",
            "texto": "Sua conta está normal. Só notei que o dinheiro está sem render e queria sugerir uma aplicação.",
            "explicacao": "A resposta tranquiliza, mas salta rapidamente para a oferta de produto.",
            "peso": 3,
            "proximo": "n3"
          },
          {
            "id": "2",
            "texto": "Sua conta está em ordem. O contato é para entender se esse recurso tem algum objetivo e, se fizer sentido, avaliar alternativas compatíveis com você.",
            "explicacao": "A resposta reduz a preocupação e recoloca a conversa no diagnóstico de finalidade e adequação.",
            "peso": 5,
            "proximo": "n3"
          },
          {
            "id": "3",
            "texto": "Não há problema, mas esse saldo já perdeu boas oportunidades e precisa ser investido.",
            "explicacao": "A resposta usa urgência comercial e trata o investimento como necessidade já decidida.",
            "peso": 1,
            "proximo": "n3"
          },
          {
            "id": "4",
            "texto": "Está tudo normal. Tenho uma opção excelente e posso aplicar o valor imediatamente.",
            "explicacao": "A resposta promete uma solução sem reunir dados e induz contratação precipitada.",
            "peso": 0,
            "proximo": "n3"
          }
        ]
      },
      "n2b": {
        "tipo": "arvore",
        "habilidade": "Corrigir uma abertura orientada ao produto",
        "fala": "Que oportunidades são essas?",
        "correta": "3",
        "opcoes": [
          {
            "id": "1",
            "texto": "Uma carteira de fundos que costuma funcionar para clientes conservadores.",
            "explicacao": "A fala ainda parte de uma solução padronizada sem verificar as necessidades de Antônio.",
            "peso": 1,
            "proximo": "n3"
          },
          {
            "id": "2",
            "texto": "Há alternativas de renda fixa e fundos, mas preciso saber apenas se você aceita alguma oscilação.",
            "explicacao": "A resposta reconhece que faltam dados, porém reduz o diagnóstico a uma única dimensão.",
            "peso": 3,
            "proximo": "n3"
          },
          {
            "id": "3",
            "texto": "Antes de falar em produtos, preciso entender o objetivo do dinheiro, quando ele poderá ser usado, sua situação financeira e sua experiência com investimentos.",
            "explicacao": "A profissional corrige a conversa e reúne as dimensões necessárias antes de indicar qualquer produto.",
            "peso": 5,
            "proximo": "n3"
          },
          {
            "id": "4",
            "texto": "A melhor oportunidade é uma ação de tecnologia que vem subindo e pode ser comprada hoje.",
            "explicacao": "A fala recomenda um ativo a partir de desempenho recente e sem análise de adequação.",
            "peso": 0,
            "proximo": "n3"
          }
        ]
      },
      "n3": {
        "tipo": "arvore",
        "habilidade": "Investigar o pedido de concentração",
        "fala": "Eu queria colocar tudo na ação de uma empresa de tecnologia. Meus familiares tiveram um bom retorno com ela.",
        "correta": "4",
        "opcoes": [
          {
            "id": "1",
            "texto": "Se seus familiares tiveram retorno, podemos aproveitar a mesma oportunidade antes que o preço suba.",
            "explicacao": "O resultado de terceiros não demonstra adequação e a urgência reforça uma decisão sem base no perfil.",
            "peso": 0,
            "proximo": "n4"
          },
          {
            "id": "2",
            "texto": "Seu perfil é conservador, então posso limitar a ação a uma parte do valor e aplicar o restante em renda fixa.",
            "explicacao": "A proposta parece prudente, mas define a alocação antes de confirmar objetivo, prazo, liquidez, experiência e capacidade de perda.",
            "peso": 3,
            "proximo": "n4"
          },
          {
            "id": "3",
            "texto": "Ações podem oscilar, mas uma empresa de tecnologia conhecida pode ser adequada para o longo prazo.",
            "explicacao": "A resposta menciona risco, porém usa setor e horizonte como atalhos para concluir adequação.",
            "peso": 1,
            "proximo": "n4"
          },
          {
            "id": "4",
            "texto": "Antes de avaliar essa ideia, preciso confirmar a finalidade e o prazo do recurso, sua necessidade de liquidez, experiência e capacidade de suportar perdas.",
            "explicacao": "A resposta não descarta o cliente nem valida o produto. Ela transforma o pedido em ponto de partida para o diagnóstico.",
            "peso": 5,
            "proximo": "n4"
          }
        ]
      },
      "n4": {
        "tipo": "arvore",
        "habilidade": "Explicar a divergência entre objetivo e produto",
        "fala": "Quero estabilidade financeira no longo prazo. Acredito que o bom retorno dessa ação vai ajudar.",
        "correta": "1",
        "opcoes": [
          {
            "id": "1",
            "texto": "Entendo o objetivo. Concentrar todo o recurso em uma única ação expõe o patrimônio ao risco da empresa e a oscilações que não combinam com a preservação indicada no seu perfil. Precisamos comparar alternativas diversificadas.",
            "explicacao": "A explicação conecta concentração, risco específico e perfil ao objetivo informado, sem prometer resultado.",
            "peso": 5,
            "proximo": "n5"
          },
          {
            "id": "2",
            "texto": "Uma carteira diversificada tende a ser mais segura, então vou separar metade em renda fixa e metade em ações.",
            "explicacao": "A direção de diversificar é razoável, mas os percentuais são definidos sem diagnóstico suficiente.",
            "peso": 3,
            "proximo": "n5"
          },
          {
            "id": "3",
            "texto": "A ação não possui garantia, embora possa entregar o retorno necessário para sua estabilidade.",
            "explicacao": "A fala reconhece ausência de garantia, mas trata retorno esperado como solução para o objetivo.",
            "peso": 1,
            "proximo": "n5"
          },
          {
            "id": "4",
            "texto": "Como o objetivo é de longo prazo, a concentração pode ser aceita mesmo com perfil conservador.",
            "explicacao": "Horizonte longo não elimina risco específico nem substitui a verificação de adequação.",
            "peso": 0,
            "proximo": "n5"
          }
        ]
      },
      "n5": {
        "tipo": "arvore",
        "habilidade": "Tratar a pressa sem converter desejo em recomendação",
        "fala": "Preciso entrar em uma reunião. Quero fazer o investimento hoje. Você consegue resolver por aí?",
        "correta": "2",
        "opcoes": [
          {
            "id": "1",
            "texto": "Posso executar agora e registrar depois que a decisão foi sua.",
            "explicacao": "A instituição não pode recomendar de forma inadequada e depois apresentar a escolha como iniciativa espontânea do cliente.",
            "peso": 0,
            "proximo": "n6"
          },
          {
            "id": "2",
            "texto": "Não vou recomendar essa concentração. Podemos retomar hoje para concluir o diagnóstico e comparar alternativas compatíveis. Se você mantiver uma ordem por iniciativa própria, a divergência precisará ser explicada e formalizada antes da operação aplicável.",
            "explicacao": "A resposta separa recomendação de ordem do cliente, preserva o diagnóstico e antecipa corretamente o tratamento da divergência.",
            "peso": 5,
            "proximo": "n6"
          },
          {
            "id": "3",
            "texto": "Posso deixar a ordem preparada, desde que você assine depois uma ciência genérica sobre o risco de ações.",
            "explicacao": "A resposta reconhece a necessidade de ciência, mas um aviso genérico e posterior não cumpre o tratamento prévio da divergência concreta.",
            "peso": 1,
            "proximo": "n6"
          },
          {
            "id": "4",
            "texto": "Antes de executar, posso enviar uma carteira diversificada pronta para sua aprovação durante a reunião.",
            "explicacao": "A opção evita a concentração imediata, mas ainda transforma dados incompletos em recomendação e pressiona por aprovação.",
            "peso": 3,
            "proximo": "n6"
          }
        ]
      },
      "n6": {
        "tipo": "arvore",
        "habilidade": "Encerrar com próximo passo claro",
        "fala": "Entendi. Consigo conversar às 15h para avaliarmos com calma.",
        "correta": "3",
        "opcoes": [
          {
            "id": "1",
            "texto": "Combinado. Até lá vou comprar uma pequena parcela da ação para garantir o preço e ajustamos o restante depois.",
            "explicacao": "A operação antecipada contradiz a decisão de concluir o diagnóstico antes de agir.",
            "peso": 0,
            "proximo": "q1"
          },
          {
            "id": "2",
            "texto": "Certo. Às 15h eu apresento a carteira que uso com outros clientes conservadores.",
            "explicacao": "A reunião é confirmada, mas a solução permanece padronizada e anterior ao diagnóstico individual.",
            "peso": 1,
            "proximo": "q1"
          },
          {
            "id": "3",
            "texto": "Combinado. Às 15h confirmaremos objetivo, prazo, liquidez, experiência e capacidade de perda. Depois compararemos alternativas e registraremos a decisão adequada.",
            "explicacao": "A resposta organiza o próximo passo, explicita os dados necessários e mantém a recomendação dependente da análise.",
            "peso": 5,
            "proximo": "q1"
          },
          {
            "id": "4",
            "texto": "Combinado. Às 15h explico apenas como diversificar entre renda fixa, fundos e uma parcela de ações.",
            "explicacao": "A resposta traz um caminho plausível, mas antecipa classes de ativos antes de finalizar a avaliação do cliente.",
            "peso": 3,
            "proximo": "q1"
          }
        ]
      },
      "q1": {
        "tipo": "multipla",
        "habilidade": "Tratar uma ordem espontânea incompatível",
        "fala": "Na conversa das 15h, Laura conclui a análise e explica que concentrar os R$ 65 mil na ação é incompatível com o perfil e os objetivos de Antônio. Mesmo assim, ele mantém por iniciativa própria uma ordem expressa e informa que nunca operou essa categoria de valor mobiliário. Não existe outra restrição de acesso ao produto. Qual procedimento deve anteceder a operação?",
        "correta": "2",
        "opcoes": [
          {
            "id": "1",
            "texto": "Recusar definitivamente a ordem, pois qualquer incompatibilidade de perfil proíbe a execução solicitada pelo cliente.",
            "explicacao": "A inadequação impede a recomendação, mas a Resolução CVM 30 prevê tratamento específico para a ordem do cliente.",
            "peso": 0,
            "proximo": "q2"
          },
          {
            "id": "2",
            "texto": "Indicar a causa concreta da divergência e obter declaração expressa de ciência antes da primeira operação nessa categoria.",
            "explicacao": "A ordem espontânea exige alerta específico sobre a inadequação e declaração expressa antes da primeira operação na categoria, sem afastar outros requisitos aplicáveis.",
            "peso": 5,
            "proximo": "q2"
          },
          {
            "id": "3",
            "texto": "Executar e colher depois uma declaração genérica de que Antônio conhece os riscos de renda variável.",
            "explicacao": "O alerta e a declaração devem anteceder a operação e identificar a causa da divergência, não apenas mencionar risco de modo genérico.",
            "peso": 0,
            "proximo": "q2"
          },
          {
            "id": "4",
            "texto": "Recomendar a operação depois que Antônio declarar ciência, pois o documento torna o produto adequado ao perfil.",
            "explicacao": "A declaração não transforma um produto inadequado em recomendação adequada e não muda a origem da escolha.",
            "peso": 0,
            "proximo": "q2"
          }
        ]
      },
      "q2": {
        "tipo": "multipla",
        "habilidade": "Atualizar dados antes de uma recomendação",
        "fala": "Antes da reunião, Antônio informa que o cadastro conservador foi preenchido há bastante tempo. Desde então, sua renda aumentou, ele formou reserva de emergência e passou a investir em fundos, mas pretende usar parte dos R$ 65 mil na entrada de um imóvel em doze meses. Como Laura deve tratar essas informações?",
        "correta": "4",
        "opcoes": [
          {
            "id": "1",
            "texto": "Manter o perfil conservador, porque a necessidade do imóvel confirma que toda a situação anterior continua válida.",
            "explicacao": "A finalidade próxima é relevante, mas não dispensa atualizar e analisar as demais informações que mudaram.",
            "peso": 0,
            "proximo": null
          },
          {
            "id": "2",
            "texto": "Reclassificá-lo como moderado, porque renda maior, reserva e experiência com fundos comprovam tolerância superior.",
            "explicacao": "Os novos dados não autorizam alterar o perfil por inferência nem apagam a necessidade de recursos em doze meses.",
            "peso": 0,
            "proximo": null
          },
          {
            "id": "3",
            "texto": "Separar desde logo a entrada do imóvel em renda fixa e liberar o restante para a ação, sem atualizar o diagnóstico.",
            "explicacao": "A segmentação por objetivo pode fazer parte da análise, mas a recomendação não deve preceder a atualização do perfil e das informações relevantes.",
            "peso": 0,
            "proximo": null
          },
          {
            "id": "4",
            "texto": "Atualizar o diagnóstico e avaliar objetivo, prazo, situação financeira, conhecimento e capacidade de perda antes de recomendar a alocação.",
            "explicacao": "Mudanças de renda, reserva, experiência e finalidade exigem nova análise. O prazo do imóvel deve ser considerado junto das demais dimensões.",
            "peso": 5,
            "proximo": null
          }
        ]
      }
    },
    "decisoesArvore": 6,
    "questoesSimulado": 3
  }
];
