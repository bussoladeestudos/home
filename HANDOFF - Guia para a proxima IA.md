# Bússola de Estudos

## C-Pro R: plano, fundo, carências e relacionamento integrados localmente (12/09/2026)

O tópico `cpror-inv-43`, **Plano e fundo previdenciário: carências, perfil e relacionamento**, foi criado em `_conteudo/cpror/indicacao-de-investimentos/cpror-inv-43.md` e integrado ao aplicativo. Ele cobre integralmente os itens 3.7.7.1 e 3.7.7.2: plano versus fundo, cotistas, carências, portabilidade interna e externa, investidores comuns e qualificados, perfil, desenquadramento, Resolução CNSP 382 e cliente oculto.

O arquivo de pedido 20 não estava mais presente em `_docs/AGENTES-CONTEUDO/pedidos-lote-3`. O escopo foi recuperado de `_docs/CPRO-R/cobertura-detalhada.json` e registrado em `_docs/CPRO-R/fontes-normativas/cpror-inv-43.md`.

A aula separa o plano, que define a relação contratual, do FIE, que executa a carteira vinculada à provisão. O plano reúne contribuições, carregamento, carências, resgate, portabilidade, beneficiários e benefícios. O fundo reúne política de investimento, riscos, cotização, taxas e prestadores. Também diferencia troca de estratégia dentro do mesmo plano de portabilidade entre planos.

As carências foram revalidadas diretamente na Circular Susep 698/2024. O primeiro resgate admite prazo de 60 dias a 60 meses; em plano destinado a proponente qualificado, o mínimo é 180 dias. O intervalo entre resgates vai de 60 dias a seis meses e pode chegar a 24 meses para qualificado. A portabilidade de PGBL exige 60 dias ou 180 dias para qualificado. Portabilidade entre planos da mesma EAPC pode admitir período inferior quando previsto no regulamento.

Carência foi separada de cotização e processamento. Em regra, resgate e portabilidade ocorrem em até dois dias úteis depois da disponibilização pelo FIE e no máximo até o 26º dia útil após o protocolo ou data programada. Em plano para qualificado, o limite pode chegar ao 180º dia útil. Os recursos portados transitam diretamente entre entidades e não passam pela conta do participante.

Proponente qualificado foi ligado à Resolução CVM 30. Uma das hipóteses é possuir investimentos financeiros superiores a R$ 1 milhão e atestar a condição por escrito. O texto destaca que qualificação regulatória não equivale a perfil agressivo nem elimina a análise de horizonte, objetivo, conhecimento, tolerância e capacidade de suportar perdas.

Desenquadramento foi tratado como perda de compatibilidade entre carteira e cliente, causada por mudança de risco, prazo, renda, objetivo ou necessidade de liquidez. A resposta proposta é atualizar o diagnóstico, explicar o risco, comparar alternativas e registrar orientação e decisão, sem impor venda automática apenas para cumprir um rótulo.

A Resolução CNSP 382 foi conferida no texto oficial. A aula cobre tratamento adequado durante todo o ciclo do produto, objetivos e necessidades, situação financeira, conhecimento, tolerância e capacidade de perda, além de transparência sobre vínculos, exclusividade, remuneração e conflitos. Cliente oculto foi definido como servidor da Susep que pode testar presencialmente ou a distância as práticas da entidade ou do intermediário, sem aviso prévio.

O arquivo passou pelos controles editoriais: cinco H2 obrigatórios, cartão com sete linhas, listas de no máximo sete itens, tabela com sete linhas físicas e zero HTML, links, travessões Unicode, marcações `[CONFERIR]` ou marcadores de citação. O mapa `_docs/CPRO-R/topicos.json` marca o tópico como `publicado localmente`.

`app/index.html` mantém 52.755 bytes e os 470 bytes NUL existentes, carregando agora `conteudo-cpror.js?v=20260912-inv43`. O service worker passou para `bussola-v55`, preservando a tela Hoje reorganizada e as consultas `?v=20260912-hoje` no CSS e no `ui.js`.

O bundle `app/conteudo/conteudo-cpror.js` agora possui 92 de 125 tópicos, com 42 de 50 em Indicação de investimentos. Validações: conversor com 92 tópicos, zero avisos e zero erros; 7 testes do conversor; 171 testes do aplicativo; sintaxe dos 23 arquivos JavaScript; e controle editorial específico. Tudo passou.

O pacote pronto está em `_publicar-agora/publicar-20260912-inv43`, contendo `app/conteudo/conteudo-cpror.js`, `app/index.html`, `app/sw.js` e instruções. Se a atualização visual ainda não tiver sido enviada, `_publicar-agora/publicar-20260912-hoje` deve ser publicada primeiro. Não houve envio externo ao GitHub ou à hospedagem.

## C-Pro R: tábuas biométricas, juro atuarial e rendas integrados localmente (12/09/2026)

O tópico `cpror-inv-42`, **Previdência: tábuas biométricas, juro atuarial e modalidades de renda**, foi criado em `_conteudo/cpror/indicacao-de-investimentos/cpror-inv-42.md` e integrado ao aplicativo. Ele cobre integralmente os itens 3.7.6.1 a 3.7.6.4: tábua biométrica, juro atuarial, tipos de renda e efeito das idades do titular e das pessoas que receberão continuidade.

A aula usa como espinha a troca entre valor mensal, duração e proteção. Tábua biométrica foi definida como conjunto de probabilidades de sobrevivência e mortalidade, sem sugerir previsão da morte individual. Mantidos os demais fatores, maior longevidade projetada amplia a duração esperada dos pagamentos e reduz a renda mensal inicial.

O juro atuarial foi separado da rentabilidade do fundo durante a acumulação. Fixados reserva, modalidade, idade e tábua, taxa maior eleva a renda inicial calculada. O exemplo financeiro usa R$ 600.000 por 240 meses: com juro zero, a renda é R$ 2.500; com 3% efetivos ao ano, aproximadamente 0,2466% ao mês, a renda nivelada sobe para cerca de R$ 3.315. O texto ressalta que índice de atualização e reversão de resultados também precisam ser comparados.

As modalidades foram confirmadas nas páginas oficiais da Susep. A vitalícia simples termina na morte do titular. A vitalícia com prazo mínimo garantido continua aos beneficiários somente pelo restante da garantia. A reversível mantém o percentual contratado durante a vida do beneficiário. A renda por prazo certo continua até a data final, inclusive aos beneficiários ou sucessores quando aplicável, e termina nessa data mesmo que o titular permaneça vivo. Renda temporária e reversível ao cônjuge com continuidade aos menores também foram delimitadas.

Para mostrar o custo da proteção, a aula usa a mesma reserva de R$ 600.000 e divisores explicitamente hipotéticos de 170, 185 e 215. Eles geram rendas aproximadas de R$ 3.529 na vitalícia simples, R$ 3.243 na vitalícia com garantia e R$ 2.791 na reversível. Os números são recursos didáticos e não cotações de mercado.

A idade foi aplicada apenas onde afeta a duração da obrigação. Titular mais velho tende a receber renda vitalícia maior para o mesmo capital; beneficiário reversível mais jovem tende a reduzir a renda inicial. Na renda por prazo certo, o prazo contratado determina o encerramento e a idade não transforma o fluxo em vitalício.

A ficha `_docs/CPRO-R/fontes-normativas/cpror-inv-42.md` registra o escopo, as fontes, os cálculos e as decisões editoriais. A revalidação utilizou as orientações oficiais da Susep sobre tipos de benefício, contratação, portabilidade e parâmetros da fase de concessão.

O arquivo passou pelos controles editoriais: cinco H2 obrigatórios, cartão com sete linhas, listas de no máximo sete itens, tabelas com no máximo seis linhas físicas e zero HTML, links, travessões Unicode, marcações `[CONFERIR]` ou marcadores de citação. O mapa `_docs/CPRO-R/topicos.json` marca o tópico como `publicado localmente`.

Durante a integração, outra atualização local reorganizou a tela Hoje, alterou `app/index.html` para 52.755 bytes e avançou o cache para `bussola-v53`. Essas mudanças foram preservadas. O índice mantém os 470 bytes NUL e carrega agora `conteudo-cpror.js?v=20260912-inv42`; o service worker passou para `bussola-v54`, mantendo as consultas `?v=20260912-hoje` no CSS e no `ui.js`.

O bundle `app/conteudo/conteudo-cpror.js` agora possui 91 de 125 tópicos, com 41 de 50 em Indicação de investimentos. Validações: conversor com 91 tópicos, zero avisos e zero erros; 7 testes do conversor; 171 testes do aplicativo; sintaxe dos 23 arquivos JavaScript; e controle editorial específico. Tudo passou.

O pacote pronto está em `_publicar-agora/publicar-20260912-inv42`, contendo `app/conteudo/conteudo-cpror.js`, `app/index.html`, `app/sw.js` e instruções. Se a atualização visual ainda não tiver sido enviada, `_publicar-agora/publicar-20260912-hoje` deve ser publicada primeiro, pois substitui os pacotes anteriores de menu e conteúdo programático. Não houve envio externo ao GitHub ou à hospedagem.

## C-Pro R: regimes progressivo e regressivo integrados localmente (12/09/2026)

O tópico `cpror-inv-41`, **Previdência: regimes progressivo e regressivo na decisão do cliente**, foi criado em `_conteudo/cpror/indicacao-de-investimentos/cpror-inv-41.md` e integrado ao aplicativo. Ele cobre integralmente os itens 3.7.5.1 e 3.7.5.2 do programa. O `cpror-inv-40` permanece planejado e poderá ser produzido separadamente, sem impedir a publicação deste tópico.

A aula usa como espinha o cruzamento entre horizonte e renda tributável futura. No regime progressivo, o resgate sofre retenção de 15% como antecipação e o imposto final é apurado na Declaração de Ajuste Anual. Benefícios periódicos seguem a tabela mensal vigente e também participam do ajuste. No regressivo, o imposto é exclusivo ou definitivo e depende do prazo dos recursos.

A tabela regressiva foi confirmada diretamente na Lei 11.053/2004: 35% até dois anos; 30% acima de dois até quatro; 25% acima de quatro até seis; 20% acima de seis até oito; 15% acima de oito até dez; e 10% somente acima de dez anos. A redação corrige a simplificação comum de dizer que exatamente dez anos já dão acesso a 10%.

O texto explica que cada aporte possui seu próprio relógio. Um plano aberto há doze anos pode conter contribuições recentes sujeitas às maiores alíquotas. Nos benefícios estruturados em regime atuarial, a referência inicial usa prazo médio ponderado, e o prazo continua a correr após a primeira prestação. Portabilidade compatível pode preservar o tempo dos recursos conforme as regras aplicáveis.

A comparação numérica mantém o mesmo cliente, base tributável de R$ 40.000 e alíquota efetiva progressiva hipotética de 20%. Em 18 meses, o progressivo gera imposto final de R$ 8.000, enquanto o regressivo gera R$ 14.000 a 35%; o progressivo economiza R$ 6.000. Com prazo superior a dez anos, o progressivo permanece em R$ 8.000 e o regressivo cai para R$ 4.000; o regressivo economiza R$ 4.000. A retenção progressiva inicial de R$ 6.000 é separada do imposto final de R$ 8.000, deixando clara a diferença de R$ 2.000 no ajuste.

A Lei 14.803/2024 foi incorporada. A escolha pode ocorrer até a obtenção do benefício ou a solicitação do primeiro resgate e torna-se irretratável depois de exercida. A recomendação deve comparar base tributável, outras rendas, deduções, idade dos aportes, forma de recebimento e necessidade de liquidez antes desse primeiro evento.

A ficha `_docs/CPRO-R/fontes-normativas/cpror-inv-41.md` registra o escopo, as fontes oficiais e os cálculos. Foram usadas a Lei 11.053/2004 atualizada pela Lei 14.803/2024, a Instrução Conjunta SRF, SPC e Susep 524/2005 e orientações oficiais da Receita Federal, Susep e Ministério da Previdência Social.

O arquivo passou pelos controles editoriais: cinco H2 obrigatórios, cartão com sete linhas, listas de no máximo sete itens, tabela com quatro linhas físicas e zero HTML, links, travessões Unicode, marcações `[CONFERIR]` ou marcadores de citação. O mapa `_docs/CPRO-R/topicos.json` marca o tópico como `publicado localmente`.

`app/index.html` mantém 52.763 bytes e os 470 bytes NUL existentes, carregando agora `conteudo-cpror.js?v=20260912-inv41`. O service worker avançou para `bussola-v52`, preservando o ajuste visual anterior do conteúdo programático.

O bundle `app/conteudo/conteudo-cpror.js` agora possui 90 de 125 tópicos, com 40 de 50 em Indicação de investimentos. Validações: conversor com 90 tópicos, zero avisos e zero erros; 7 testes do conversor; 171 testes do aplicativo; sintaxe dos 23 arquivos JavaScript; e controle editorial específico. Tudo passou.

O pacote pronto está em `_publicar-agora/publicar-20260912-inv41`, contendo `app/conteudo/conteudo-cpror.js`, `app/index.html`, `app/sw.js` e instruções. Se o pacote do menu ainda não tiver sido enviado, `_publicar-agora/publicar-20260912-menu` deve ser publicado primeiro. Não houve envio externo ao GitHub ou à hospedagem.

## C-Pro R: PGBL, diferimento e reinvestimento integrados localmente (12/09/2026)

O tópico `cpror-inv-39`, **PGBL: diferimento, benefício fiscal e reinvestimento da economia**, foi criado em `_conteudo/cpror/indicacao-de-investimentos/cpror-inv-39.md` e integrado ao aplicativo. Ele cobre integralmente os itens 3.7.3.1 a 3.7.3.4: condições para uso do benefício fiscal, limite e cálculo do diferimento, efeito do regime regressivo e retroalimentação por novos aportes.

O arquivo de pedido 16 não estava mais presente em `_docs/AGENTES-CONTEUDO/pedidos-lote-3` no momento da execução. O escopo foi recuperado de `_docs/CPRO-R/cobertura-detalhada.json`. A ficha `_docs/CPRO-R/fontes-normativas/cpror-inv-39.md` registra o escopo, as fontes oficiais, as decisões editoriais e todos os cálculos.

A aula organiza a análise em condição, limite, diferimento, saída e reinvestimento. Explica que a dedução depende do uso das deduções legais, da condição previdenciária aplicável e da renda tributável incluída na Declaração de Ajuste Anual. Rendimentos isentos ou sujeitos à tributação exclusiva não aumentam o limite, e o teto de 12% é conjunto para as contribuições abrangidas.

O primeiro caso usa R$ 200.000 de renda tributável, com limite dedutível de R$ 24.000. Uma contribuição de R$ 30.000 gera dedução de apenas R$ 24.000. Uma variação com R$ 160.000 de salário tributável e R$ 40.000 de renda exclusiva limita a dedução a R$ 19.200. Sob a hipótese simplificada de que toda a dedução reduz renda sujeita a 27,5%, os R$ 24.000 produzem economia atual estimada de R$ 6.600.

A conta de saída reforça a principal armadilha do PGBL. Se o aporte de R$ 24.000 crescer para R$ 48.000 e estiver sujeito a 10% no regime regressivo, o IR é R$ 4.800 sobre o valor total e o líquido é R$ 43.200. Aplicar 10% somente sobre o rendimento produziria R$ 2.400 e estaria errado.

A retroalimentação usa os R$ 6.600 economizados como novo aporte no exercício seguinte, sempre dentro do novo limite anual. Na mesma hipótese de 27,5%, esse aporte gera economia estimada de R$ 1.815. Se o lote dobrar para R$ 13.200 e superar dez anos no regressivo, o IR é R$ 1.320 e o valor líquido é R$ 11.880. O texto deixa claro que a estratégia exige fluxo de caixa, disciplina, prazo e controle de custos.

A revalidação usou orientações atuais da Receita Federal e da Susep, a Lei 11.053/2004 e a Lei 14.803/2024. A escolha entre os regimes pode ocorrer até a obtenção do benefício ou o primeiro resgate e torna-se irretratável depois de exercida. O detalhamento comparativo dos regimes permanece reservado ao `cpror-inv-41`.

O arquivo passou pelos controles editoriais: cinco H2 obrigatórios, cartão com sete linhas, listas de no máximo sete itens e zero HTML, links, travessões Unicode, marcações `[CONFERIR]` ou marcadores de citação. O mapa `_docs/CPRO-R/topicos.json` marca o tópico como `publicado localmente`.

Durante a integração, foi preservada uma atualização local mais recente do conteúdo programático e de sua interface. `app/index.html` continua com 52.763 bytes e os 470 bytes NUL existentes, carregando agora `conteudo-cpror.js?v=20260912-inv39`. O service worker avançou da versão acumulada `bussola-v50` para `bussola-v51`, sem reverter o ajuste visual já presente.

O bundle `app/conteudo/conteudo-cpror.js` agora possui 89 de 125 tópicos, com 39 de 50 em Indicação de investimentos. Validações: conversor com 89 tópicos, zero avisos e zero erros; 7 testes do conversor; 171 testes do aplicativo; sintaxe dos 23 arquivos JavaScript; e controle editorial específico. Tudo passou.

O pacote pronto está em `_publicar-agora/publicar-20260912-inv39`, contendo `app/conteudo/conteudo-cpror.js`, `app/index.html`, `app/sw.js` e instruções. Se o pacote do menu ainda não tiver sido enviado, `_publicar-agora/publicar-20260912-menu` deve ser publicado primeiro para levar os arquivos visuais correspondentes. Não houve envio externo ao GitHub ou à hospedagem.

## C-Pro R: previdência complementar e quatro pilares integrados localmente (12/09/2026)

O tópico `cpror-inv-38`, **Previdência complementar: capitalização e quatro pilares de uso**, foi criado em `_conteudo/cpror/indicacao-de-investimentos/cpror-inv-38.md` e integrado ao aplicativo. Ele cobre integralmente os itens 3.7.2.1 a 3.7.2.3.4: horizonte, capitalização, renda futura, sucessão, reserva para menores e planejamento tributário.

O arquivo de pedido 15 não estava mais presente em `_docs/AGENTES-CONTEUDO/pedidos-lote-3` no momento da execução. A cobertura foi recuperada de `_docs/CPRO-R/cobertura-detalhada.json`. A ficha `_docs/CPRO-R/fontes-normativas/cpror-inv-38.md` registra o escopo, as fontes e os cálculos.

A aula começa pelo horizonte e pela estrutura de capitalização e, depois, desenvolve os quatro pilares do título. Previdência complementar foi apresentada como regime facultativo, autônomo em relação ao RGPS e baseado na constituição de reservas. O texto contrasta capitalização com a repartição simples já ensinada no `cpror-inv-37`, sem repetir as regras do INSS.

O exemplo do horizonte usa contribuição mensal de R$ 1.000 e taxa real líquida hipotética de 0,4% ao mês. Em 20 anos, a reserva estimada é R$ 401.675; em 30 anos, R$ 802.147. Para começar dez anos depois e buscar os mesmos R$ 802.147 em apenas 20 anos, o aporte sobe para aproximadamente R$ 1.997 por mês. A conta ensina o efeito do tempo sem prometer rentabilidade.

No primeiro pilar, a aula diferencia acumulação, pagamento único, resgate e conversão em renda. Um caso com reserva de R$ 900.000 mostra que retirar R$ 5.000 sem rendimentos cobriria 180 meses, enquanto retirar R$ 3.000 cobriria 300 meses. O texto ressalta que o cálculo real depende de modalidade, rentabilidade, inflação, idade, tábua biométrica, taxa atuarial e continuidade para beneficiários, temas aprofundados no `cpror-inv-42`.

No segundo pilar, beneficiários, percentuais e atualização cadastral foram ligados ao planejamento sucessório. A aula não promete exclusão automática de inventário ou imposto estadual, porque o tratamento depende da natureza do produto, da legislação e do caso concreto. Também preserva a renda do titular como limite da estratégia sucessória.

No terceiro pilar, a reserva para menores foi organizada pela data do objetivo, titularidade, representação, contribuições e redução de risco quando o uso se aproxima. O texto diferencia o responsável financeiro familiar do patrocinador em sentido técnico, que normalmente é a empresa ou ente ligado a um plano fechado.

No quarto pilar, planejamento tributário foi explicado como escolha de base, momento e regime, e não como isenção. Os limites e cálculos de PGBL, VGBL e regimes progressivo e regressivo foram reservados aos tópicos `cpror-inv-39`, `cpror-inv-40` e `cpror-inv-41`.

A revalidação utilizou o art. 202 da Constituição, a Lei Complementar 109/2001, materiais do Ministério da Previdência Social e orientações da Susep. A aula separa plano, reserva e estratégia de investimento e submete os quatro usos a horizonte, liquidez, risco, custos e adequação.

O arquivo passou pelos controles editoriais: cinco H2 obrigatórios, cartão com sete linhas, listas de no máximo sete itens e zero HTML, links, travessões Unicode, marcações `[CONFERIR]` ou marcadores de citação. O mapa `_docs/CPRO-R/topicos.json` marca o tópico como `publicado localmente`.

Durante a integração, outra atualização local alterou o menu lateral, ampliou `app/index.html` e levou o service worker a `bussola-v48`. O trabalho foi preservado. A referência antiga do bundle, que havia voltado para `inv-34`, foi atualizada para `?v=20260912-inv38`, os 470 bytes NUL foram mantidos e o cache acumulado passou a `bussola-v49`, preservando o menu novo e o conteúdo até `inv-38`.

O bundle `app/conteudo/conteudo-cpror.js` agora possui 88 de 125 tópicos, com 38 de 50 em Indicação de investimentos. Validações: conversor com 88 tópicos, zero avisos e zero erros; 7 testes do conversor; 171 testes do aplicativo; sintaxe dos 23 arquivos JavaScript. Tudo passou.

O pacote pronto está em `_publicar-agora/publicar-20260912-inv38`, contendo `app/conteudo/conteudo-cpror.js`, `app/index.html`, `app/sw.js` e instruções. Se o pacote do menu ainda não tiver sido enviado, `_publicar-agora/publicar-20260912-menu` deve ser publicado primeiro para levar o CSS correspondente. Não houve envio externo ao GitHub ou à hospedagem.

## C-Pro R: previdência social e necessidade de renda complementar integradas localmente (12/09/2026)

O tópico `cpror-inv-37`, **Previdência social e estimativa da necessidade de renda complementar**, foi criado em `_conteudo/cpror/indicacao-de-investimentos/cpror-inv-37.md` e integrado ao aplicativo. Ele cobre integralmente os itens 3.7.1.1 a 3.7.1.3: repartição simples, fatores que determinam a renda de aposentadoria, acumulação de benefícios, padrão de vida e cálculo da necessidade complementar.

O arquivo de pedido 14 não estava mais presente em `_docs/AGENTES-CONTEUDO/pedidos-lote-3` no momento da execução. A cobertura foi recuperada de `_docs/CPRO-R/cobertura-detalhada.json`, que preserva os três itens e sua vinculação ao tópico. A ficha `_docs/CPRO-R/fontes-normativas/cpror-inv-37.md` registra a recuperação do escopo, as fontes e os cálculos.

A aula segue quatro etapas: entender o regime, estimar o benefício, calcular o déficit mensal e transformar o déficit em reserva. O RGPS foi apresentado como regime de repartição simples, no qual contribuições atuais financiam benefícios correntes. O texto deixa claro que a contribuição ao INSS não forma uma carteira financeira individual em nome do segurado.

As regras foram revalidadas na Emenda Constitucional 103/2019 e nas páginas oficiais do INSS e do Ministério da Previdência. Para novos filiados ao RGPS a partir de 13/11/2019, a aposentadoria programada urbana exige carência de 180 contribuições, idade de 62 anos e 15 anos de contribuição para a mulher e idade de 65 anos e 20 anos para o homem.

As transições foram explicadas sem transformar a aula em inventário normativo. Em 2026, a regra dos pontos exige 93 pontos e 30 anos de contribuição para a mulher e 103 pontos e 35 anos para o homem. A idade progressiva exige 59 anos e 6 meses e 30 anos para a mulher e 64 anos e 6 meses e 35 anos para o homem. Também foram diferenciadas a transição por idade e as regras dos pedágios de 50% e 100%, inclusive seus efeitos no cálculo.

A principal pegadinha da média recebeu destaque. A média aritmética usa 100% dos salários de contribuição atualizados desde julho de 1994 ou desde o início posterior, mas isso não significa receber 100% da média. Pela regra geral, o benefício parte de 60% e cresce 2 pontos percentuais por ano completo que exceder 15 anos para a mulher e 20 anos para o homem. O exemplo usa média de R$ 6.000 e compara quatro tempos de contribuição.

Acumulação de aposentadoria e pensão foi ensinada por faixas. O benefício mais vantajoso é integral. No menor, preserva-se 100% até um salário mínimo e aplicam-se 60%, 40%, 20% e 10% às faixas seguintes. Em uma pensão de 3,5 salários mínimos, o valor mantido chega a 2,1 salários mínimos. O exemplo evita o erro de aplicar uma única alíquota ao benefício inteiro.

O planejamento parte da renda desejada em valores de hoje e subtrai previdência social e outras rendas sustentáveis. No caso resolvido, R$ 10.000 desejados menos R$ 4.000 do benefício previdenciário e R$ 1.000 de outra renda produzem déficit mensal de R$ 5.000.

Esse déficit foi convertido em capital com uma anuidade financeira. R$ 5.000 por 300 meses à taxa real líquida hipotética de 0,3% ao mês exigem aproximadamente R$ 988.137. Para formar o capital em 240 meses, sem reserva inicial e à mesma taxa, a contribuição estimada é de R$ 2.817 mensais. Taxa, prazo e resultado foram apresentados como hipóteses, sem promessa de suficiência ou rentabilidade.

O arquivo passou pelos controles editoriais: cinco H2 obrigatórios, cartão com sete linhas, listas de no máximo sete itens, tabela com seis linhas físicas e zero HTML, links, travessões Unicode, marcações `[CONFERIR]` ou marcadores de citação. O mapa `_docs/CPRO-R/topicos.json` marca o tópico como `publicado localmente`.

O bundle `app/conteudo/conteudo-cpror.js` agora possui 87 de 125 tópicos, com 37 de 50 em Indicação de investimentos. `app/index.html` carrega o bundle com `?v=20260912-inv37` e preserva os 470 bytes NUL existentes. O service worker usa `bussola-v47`, preservando os simulados gerados pelo sistema e as consultas `?v=20260912-simulado` existentes no CSS e no JavaScript.

Validações: conversor com 87 tópicos, zero avisos e zero erros; 7 testes do conversor; 171 testes do aplicativo; sintaxe dos 23 arquivos JavaScript. Tudo passou. O pacote pronto está em `_publicar-agora/publicar-20260912-inv37`, contendo `app/conteudo/conteudo-cpror.js`, `app/index.html`, `app/sw.js` e instruções. Não houve envio externo ao GitHub ou à hospedagem.

## C-Pro R: investimentos no exterior e offshore integrados localmente (12/09/2026)

O tópico `cpror-inv-36`, **Investimentos no exterior e offshore: tributação e obrigações**, foi criado em `_conteudo/cpror/indicacao-de-investimentos/cpror-inv-36.md` e integrado ao aplicativo. Ele cobre integralmente os itens 3.6.2.5.1 a 3.6.2.5.7 do programa: aspectos gerais, fato gerador, base e alíquota, responsável pelo recolhimento, prazo, obrigações brasileiras e comparação entre investimento direto e empresa offshore.

Este era o tópico de maior risco normativo do lote. A aula foi conferida diretamente na Lei 14.754/2023, na Instrução Normativa RFB 2.180/2024, nas orientações e no manual do IRPF 2026 da Receita Federal e nas regras de CBE do Banco Central. A ficha `_docs/CPRO-R/fontes-normativas/cpror-inv-36.md` registra as confirmações e as decisões editoriais.

A espinha da aula segue a sequência pedida: fato gerador, base, responsável, prazo e declaração. Aplicação financeira detida diretamente segue o regime de caixa. Juros e dividendos entram quando recebidos; ganhos, inclusive o efeito cambial realizado do principal, entram no resgate, amortização, alienação, vencimento ou liquidação. Os rendimentos realizados no ano são consolidados na DAA, à alíquota de 15%, sem o carnê-leão mensal usado pelo regime anterior a 2024.

O exemplo direto transforma USD 10.000 adquiridos à cotação de R$ 5,00 em custo fiscal de R$ 50.000. A liquidação de USD 12.000 à cotação de R$ 5,20 produz R$ 62.400, rendimento tributável de R$ 12.400 e IRPF de R$ 1.860. O cálculo mostra que a base é em reais e inclui a variação cambial realizada.

O texto explica a compensação de perdas realizadas e documentadas, a possibilidade condicionada de crédito do imposto pago no exterior e a separação entre aplicação financeira e bem sujeito às regras próprias de ganho de capital. Também preserva a isenção da variação cambial de depósito não remunerado mantido em instituição estrangeira reconhecida e autorizada, sem estendê-la a contas remuneradas ou carteiras de investimento.

Para offshore, a aula não repete a afirmação incorreta de que toda entidade estrangeira sofre tributação anual. Primeiro verifica controle e enquadramento. O regime anual alcança controladas em jurisdição favorecida, beneficiárias de regime fiscal privilegiado ou com renda ativa própria inferior a 60%. Controladas fora dessas hipóteses seguem, em regra, a disponibilização do lucro, salvo opção legal pelo regime anual. Lucros até 31/12/2023 também preservam o tratamento de disponibilização.

No regime anual, a parcela do lucro em balanço de 31 de dezembro é tributada mesmo sem distribuição. O exemplo usa lucro de USD 20.000 e cotação de R$ 5,00, resultando em base de R$ 100.000 e IRPF de R$ 15.000. O lucro tributado aumenta o custo do crédito de dividendo e não sofre nova tributação quando distribuído. O texto também separa esse lucro do ganho cambial sobre o capital aplicado na offshore, que segue as regras de ganho de capital quando realizado.

A opção pela transparência fiscal foi incluída para completar a comparação. Nesse regime, a participação deixa de ser declarada como um único bloco para o IRPF e os ativos subjacentes são tratados como diretamente detidos, com alocação do custo. A opção é irrevogável e irretratável enquanto a participação for mantida.

As obrigações foram separadas por órgão. Na DAA da Receita, a pessoa física informa os bens, os eventos tributáveis, perdas, imposto elegível pago no exterior e dados das controladas. A CBE do Banco Central é uma declaração diferente: anual a partir de USD 1 milhão em ativos no exterior em 31 de dezembro e trimestral a partir de USD 100 milhões nas datas-base de março, junho e setembro. O prazo do IRPF foi ligado ao calendário do ajuste anual, evitando transformar a data variável de um exercício em regra permanente.

O arquivo passou pelos controles editoriais: cinco H2 obrigatórios, cartão com sete linhas, listas de no máximo sete itens, tabela com seis linhas físicas e zero HTML, links, travessões Unicode, marcações `[CONFERIR]` ou marcadores de citação. O mapa `_docs/CPRO-R/topicos.json` marca o tópico como `publicado localmente`.

O bundle `app/conteudo/conteudo-cpror.js` agora possui 86 de 125 tópicos, com 36 de 50 em Indicação de investimentos. `app/index.html` carrega o bundle com `?v=20260912-inv36` e preserva os 470 bytes NUL existentes. O service worker usa `bussola-v46`, preservando os simulados gerados pelo sistema e as consultas `?v=20260912-simulado` existentes no CSS e no JavaScript.

Validações: conversor com 86 tópicos, zero avisos e zero erros; 7 testes do conversor; 171 testes do aplicativo; sintaxe dos 23 arquivos JavaScript. Tudo passou. O pacote pronto está em `_publicar-agora/publicar-20260912-inv36`, contendo `app/conteudo/conteudo-cpror.js`, `app/index.html`, `app/sw.js` e instruções. Não houve envio externo ao GitHub ou à hospedagem.

## C-Pro R: ações no exterior integrada localmente (12/09/2026)

O tópico `cpror-inv-35`, **Ações no exterior: ADR, GDR, índices e cenário internacional**, foi criado em `_conteudo/cpror/indicacao-de-investimentos/cpror-inv-35.md` e integrado ao aplicativo. Ele cobre integralmente os itens 3.6.2.1 a 3.6.2.4 do programa. O arquivo de pedido 12 não estava mais presente na pasta durante a execução; o escopo foi recuperado de `_docs/CPRO-R/cobertura-detalhada.json`, que preservava os quatro itens e sua vinculação ao tópico.

A aula percorre quatro blocos: negociação direta de ações estrangeiras, ADR e GDR, índices internacionais e efeitos do cenário exterior sobre a alocação do investidor brasileiro. A compra direta foi associada às regras do mercado estrangeiro e ao ciclo padrão T+1 da maioria das ações nos Estados Unidos. O texto separa a bolsa de listagem da exposição econômica da companhia.

ADR foi definido como recibo emitido por depositário que representa uma ou mais ações estrangeiras, ou fração de ação. O texto distingue ação registrada diretamente de recibo, explica razão de conversão, custódia do papel subjacente, dividendos, voto, eventos societários, tarifas e diferenças entre programas patrocinados e não patrocinados.

Os níveis foram tratados pelo acesso ao mercado: Nível 1 negocia em balcão e não capta recursos; Nível 2 lista em bolsa sem oferta para captação; Nível 3 combina listagem e oferta pública; Regra 144A é colocação privada para compradores institucionais qualificados e não um degrau aberto ao varejo. O caso de paridade calcula um ADR que representa duas ações de EUR 40 com câmbio de USD 1,10 por euro, chegando a USD 88, e identifica prêmio de aproximadamente 2,27% quando o recibo negocia a USD 90.

GDR foi apresentado como recibo destinado a um ou mais mercados internacionais, possivelmente denominado em dólar ou em outra moeda. ADR e GDR compartilham o vínculo com títulos depositados; diferem principalmente pelos mercados e regimes de registro e negociação.

Os seis índices foram diferenciados. S&P 500 reúne 500 grandes companhias e pondera pela capitalização ajustada ao free float. Dow Jones Industrial Average reúne 30 empresas e pondera pelo preço. Nasdaq Composite cobre instrumentos elegíveis listados na Nasdaq e não se confunde com Nasdaq-100. MSCI World cobre mercados desenvolvidos, enquanto MSCI Emerging Markets cobre emergentes. O nome `Euro Stock` do mapa foi ensinado pelo nome oficial EURO STOXX 50, índice de líderes da zona do euro, e não de toda a Europa.

O cenário internacional foi ligado a juros, atividade, lucros, inflação, moedas, China, commodities, conflitos e fluxos de capital. O caso resolvido combina queda de 6% do índice com alta de 10% do dólar, gerando 3,4% em reais. Na variação, índice e dólar caem, respectivamente, 6% e 10%, produzindo perda de 15,4%. O texto não antecipa a tributação do `cpror-inv-36`.

A validação utilizou materiais da SEC e Investor.gov, as metodologias oficiais de S&P Dow Jones Indices, Nasdaq, MSCI e STOXX. A ficha `_docs/CPRO-R/fontes-normativas/cpror-inv-35.md` registra fontes, conceitos confirmados, a recuperação do escopo e as decisões editoriais.

O arquivo passou pelos controles editoriais: cinco H2 obrigatórios, cartão com sete linhas, maior lista com sete itens, tabela com seis linhas físicas e zero HTML, links, travessões Unicode, marcações `[CONFERIR]` ou marcadores de citação. O mapa `_docs/CPRO-R/topicos.json` marca o tópico como `publicado localmente`.

O bundle `app/conteudo/conteudo-cpror.js` agora possui 85 de 125 tópicos, com 35 de 50 em Indicação de investimentos. `app/index.html` carrega o bundle com `?v=20260912-inv35` e preserva os 470 bytes NUL existentes. O service worker usa `bussola-v45`, preservando os simulados gerados pelo sistema e as consultas `?v=20260912-simulado` existentes no CSS e no JavaScript.

Validações: conversor com 85 tópicos, zero avisos e zero erros; 7 testes do conversor; 171 testes do aplicativo; sintaxe dos 23 arquivos JavaScript; e igualdade por SHA-256 entre o aplicativo e o pacote. Tudo passou. O pacote pronto está em `_publicar-agora/publicar-20260912-inv35`, contendo `app/conteudo/conteudo-cpror.js`, `app/index.html`, `app/sw.js` e instruções. Não houve envio externo ao GitHub ou à hospedagem.

## C-Pro R: renda fixa internacional integrada localmente (12/09/2026)

O tópico `cpror-inv-34`, **Renda fixa internacional: Treasuries, bonds, CDs, CPs e repos**, foi criado em `_conteudo/cpror/indicacao-de-investimentos/cpror-inv-34.md` e integrado ao aplicativo. Ele cobre integralmente os itens 3.6.1.3, 3.6.1.4 e 3.6.1.5 do programa.

A aula organiza os instrumentos por emissor e prazo antes de analisar a moeda. Treasury Bills foram apresentados como títulos de 4 a 52 semanas vendidos ao par ou com desconto, sem cupom periódico. Treasury Notes possuem prazos de 2, 3, 5, 7 e 10 anos; Treasury Bonds, de 20 ou 30 anos. Notes e Bonds pagam juros semestrais.

TIPS foram explicados como títulos de 5, 10 ou 30 anos cujo principal acompanha o CPI dos Estados Unidos e cujos juros semestrais incidem sobre o principal ajustado. No vencimento, paga-se o maior entre o principal ajustado e o original. O texto deixa claro que essa proteção se refere à inflação norte-americana, e não ao IPCA, e não impede perda na venda antecipada ou pela variação cambial.

Global Bonds e Eurobonds foram separados por mercado de emissão. Global Bonds podem alcançar simultaneamente o euromercado e mercados domésticos, com fungibilidade entre eles. Eurobond é emitido fora do mercado doméstico da moeda em que está denominado. O prefixo euro não exige emissão na Europa nem denominação em euro. Emissor brasileiro continua carregando risco soberano ou corporativo brasileiro, mesmo quando o fluxo é em dólar.

Certificates of Deposit foram tratados como depósitos bancários a prazo cuja proteção depende do produto, da instituição, da titularidade, da jurisdição e dos limites aplicáveis. Commercial Papers foram descritos como dívidas corporativas de curto prazo, normalmente sem garantia específica e com risco de crédito e refinanciamento.

Repo foi explicado como venda de títulos acompanhada de compromisso de recompra, economicamente semelhante a crédito com colateral. O texto diferencia repo e reverse repo pelo lado observado e explica taxa implícita, prazo overnight ou a termo e haircut. Colateral reduz o risco, mas não elimina contraparte, oscilação do ativo, liquidez, documentação ou falha de liquidação.

O exemplo cambial aplica a fórmula `(1 + retorno em moeda estrangeira) x (1 + variação cambial) - 1`. Um bond com ganho de 6% em dólar e valorização cambial de 8% produz 14,48% em reais. Com o mesmo ganho do papel e queda de 8% do dólar, o resultado em reais é negativo em 2,48%. Tributação foi reservada ao `cpror-inv-36`.

A validação utilizou o TreasuryDirect do Departamento do Tesouro dos Estados Unidos, o Tesouro Nacional brasileiro, o guia de títulos internacionais do FMI, o Federal Reserve Bank of New York e documentos registrados na SEC. A ficha `_docs/CPRO-R/fontes-normativas/cpror-inv-34.md` registra fontes, conceitos confirmados e decisões editoriais.

O arquivo passou pelos controles editoriais: cinco H2 obrigatórios, cartão com sete linhas, maior lista com sete itens, tabela com seis linhas físicas e zero HTML, links, travessões Unicode, marcações `[CONFERIR]` ou marcadores de citação. O mapa `_docs/CPRO-R/topicos.json` marca o tópico como `publicado localmente`.

O bundle `app/conteudo/conteudo-cpror.js` agora possui 84 de 125 tópicos, com 34 de 50 em Indicação de investimentos. `app/index.html` carrega o bundle com `?v=20260912-inv34` e preserva os 470 bytes NUL existentes. O service worker usa `bussola-v43`, preservando a versão empilhada do dashboard móvel e a consulta `?v=20260912-rodape` do CSS já existentes.

Validações: conversor com 84 tópicos, zero avisos e zero erros; 7 testes do conversor; 157 testes do aplicativo; sintaxe dos 22 arquivos JavaScript; e igualdade por SHA-256 entre o aplicativo e o pacote. Tudo passou. O pacote pronto está em `_publicar-agora/publicar-20260912-inv34`, contendo `app/conteudo/conteudo-cpror.js`, `app/index.html`, `app/sw.js` e instruções. Não houve envio externo ao GitHub ou à hospedagem.

## C-Pro R: câmbio e contas internacionais integrado localmente (12/09/2026)

O tópico `cpror-inv-33`, **Câmbio e contas internacionais: paridade e remessa de recursos**, foi criado em `_conteudo/cpror/indicacao-de-investimentos/cpror-inv-33.md` e integrado ao aplicativo. Ele cobre integralmente os itens 3.6.1.1 e 3.6.1.2 do programa: relações de paridade entre moedas, transferência internacional de recursos e comparação entre conta no exterior e conta em USD no Brasil.

A espinha da aula é a pergunta prática sobre como o cliente pode manter ou enviar dinheiro ao exterior. O texto compara conta no exterior, conta de depósito em dólar no Brasil e remessa pontual pelo objetivo, localização jurídica do saldo, custo total, prazo, utilidade e obrigações de informação.

Paridade foi ensinada como relação de troca entre duas moedas. A aula mostra que a alta do dólar frente ao real representa simultaneamente valorização do dólar e desvalorização do real, ensina a inverter uma cotação e traz uma conta de paridade cruzada entre euro, dólar e real com cancelamento das unidades.

Compra e venda foram explicadas pela perspectiva da instituição. Na remessa para o exterior, a instituição normalmente vende moeda estrangeira ao cliente. No recebimento convertido para reais, ela compra moeda estrangeira. A Ptax foi tratada como referência, e não como preço obrigatório. Spread, tarifas e encargos são consolidados pelo VET nas operações abrangidas pela Resolução BCB 277.

O exemplo numérico parte de USD 2.000, taxa de referência de R$ 5,00, taxa de venda de R$ 5,08, tarifa de R$ 40 e encargos de R$ 110. O débito total chega a R$ 10.310 e o custo por dólar adquirido a R$ 5,155. Se houver desconto de USD 20 no destino, o custo por dólar efetivamente entregue sobe para aproximadamente R$ 5,21. A conta deixa claro que tarifa zero não elimina o spread e que a comparação deve terminar no valor líquido recebido.

A aula distingue conta global como nome comercial de conta de depósito em moeda estrangeira no Brasil. Uma conta oferecida em aplicativo brasileiro pode ser juridicamente mantida por uma entidade no exterior. O profissional deve confirmar instituição mantenedora, país, supervisão, proteção do saldo, produtos disponíveis e obrigações aplicáveis.

A conta doméstica em moeda estrangeira continua restrita aos titulares previstos na Resolução BCB 277. A Resolução BCB 575/2026 amplia o rol, a partir de 1º de outubro de 2026, para determinadas pessoas jurídicas, entre elas exportadoras de bens, devedoras de crédito externo e sociedades com participação direta de não residente. A mudança não abre conta bancária doméstica em dólares para qualquer pessoa física. Como a aula foi atualizada antes da vigência, esse ponto deve ser revalidado depois de 01/10/2026.

As obrigações de informação foram delimitadas sem antecipar a tributação do `cpror-inv-36`. Pela Resolução BCB 279, a CBE anual alcança residentes com pelo menos USD 1 milhão em ativos no exterior na data-base de 31 de dezembro; a trimestral alcança USD 100 milhões nas datas-base de 31 de março, 30 de junho e 30 de setembro. Os limites consideram o conjunto dos ativos externos.

A validação normativa usou a Lei 14.286/2021, as Resoluções BCB 277/2022, 279/2022 e 575/2026 e as orientações oficiais do Banco Central sobre compra e venda, VET, contas e CBE. A ficha `_docs/CPRO-R/fontes-normativas/cpror-inv-33.md` registra fontes, dispositivos, datas, vigência e decisões editoriais.

O arquivo passou pelos controles editoriais: cinco H2 obrigatórios, cartão com sete linhas, maior lista com sete itens, tabela com cinco linhas físicas e zero HTML, links, travessões Unicode, marcações `[CONFERIR]` ou marcadores de citação. O mapa `_docs/CPRO-R/topicos.json` marca o tópico como `publicado localmente`.

O bundle `app/conteudo/conteudo-cpror.js` agora possui 83 de 125 tópicos, com 33 de 50 em Indicação de investimentos. `app/index.html` carrega o bundle com `?v=20260912-inv33` e preserva os 470 bytes NUL existentes. O service worker usa `bussola-v41`, preservando também a atualização existente do dashboard para telas móveis, além das alterações anteriores do rodapé da aula e do botão de voltar.

Validações: conversor com 83 tópicos, zero avisos e zero erros; 7 testes do conversor; 157 testes do aplicativo; sintaxe dos 22 arquivos JavaScript; e igualdade por SHA-256 entre o aplicativo e o pacote. Tudo passou. O pacote pronto está em `_publicar-agora/publicar-20260912-inv33`, contendo `app/conteudo/conteudo-cpror.js`, `app/index.html`, `app/sw.js` e instruções. Não houve envio externo ao GitHub ou à hospedagem.

## C-Pro R: Fiagro, FIDC, exclusivos, FoF, FIP e clubes integrado localmente (12/09/2026)

O tópico `cpror-inv-32`, **Fiagro, FIDC, exclusivos, FoF, FIP e clubes: comparação e tributação**, foi criado em `_conteudo/cpror/indicacao-de-investimentos/cpror-inv-32.md` e integrado ao aplicativo. Ele cobre os itens 3.5.1.3.8.1 a 3.5.1.3.8.7 do programa, comparando finalidade, carteira, acesso, riscos, custos, liquidez e tributação das estruturas.

A aula organiza o tema pelo destino dos recursos. Fiagro e FIDC direcionam capital a ativos e créditos; FIP participa de empresas; FoF investe em outros fundos; classe exclusiva e clube descrevem formas de acesso e organização, e não classes de ativos equivalentes. A tabela comparativa possui cinco linhas de veículos e consolida classe exclusiva e clube na mesma linha para respeitar o limite editorial.

No FIDC, o texto diferencia o requisito regulatório de carteira, superior a 50% do patrimônio em direitos creditórios após a formação, do requisito tributário de pelo menos 67% em direitos creditórios. Também explica a ordem de absorção de perdas entre cotas subordinadas, mezanino e seniores, sem apresentar a subordinação como garantia.

O FIP foi explicado como participação em empresas com influência na política estratégica e na gestão, sujeito a concentração, chamadas de capital, prazo longo e baixa liquidez. O FoF foi apresentado como seleção indireta de fundos, com custos econômicos em dois níveis e tributação dependente de sua composição e qualificação.

A classe exclusiva segue o conceito atual do art. 115 da Resolução CVM 175. Ela pode ser destinada a um investidor profissional, a cotistas com vínculo societário familiar ou a cotistas ligados por interesse único e indissociável. A exclusividade não concede benefício fiscal automático. Desde 2024, o regime depende da categoria, carteira e enquadramento do fundo à Lei 14.754/2023.

O clube de investimento foi diferenciado de fundo: condomínio aberto de três a 50 pessoas naturais, com pelo menos 67% do patrimônio nos ativos de renda variável admitidos e cotas sem negociação em mercados regulamentados. A tributação acompanha as regras aplicáveis aos fundos; quando qualificado como carteira de ações, há alíquota de 15% no resgate e ausência de come-cotas.

Para Fiagro, foram descritas as possibilidades de exposição às cadeias do agronegócio e o uso subsidiário das regras da categoria predominante. A isenção de rendimentos para pessoa física foi condicionada cumulativamente à negociação exclusiva em bolsa ou balcão organizado, ao mínimo de 100 cotistas, à participação individual inferior a 10% e ao grupo de pessoas físicas ligadas inferior a 30%. Ganhos na venda ou no resgate não foram confundidos com rendimentos distribuídos e seguem tributação de 20%.

A tributação de FIDC e FIP foi atualizada pela Lei 14.754/2023. Entidades de investimento que cumprem os requisitos legais podem ficar sem tributação periódica e sofrer IRRF de 15% na distribuição, amortização ou resgate. Veículos que não sejam entidades de investimento ficam sujeitos à tributação periódica de 15% e ao regime legal de subcontas. FoF qualificado pode acompanhar regime especial quando mantém pelo menos 95% nos veículos previstos em lei.

A validação normativa usou a Resolução CVM 175 consolidada, inclusive os Anexos Normativos I, II, IV e VI; a Resolução CVM 11 consolidada; a Lei 14.754/2023; a Lei 11.033/2004; e a Lei 8.668/1993. A ficha `_docs/CPRO-R/fontes-normativas/cpror-inv-32.md` registra fontes, dispositivos, datas e critérios aplicados.

O arquivo passou pelos controles editoriais: cinco H2 obrigatórios, cartão com sete linhas, maior lista com sete itens, tabela com sete linhas físicas e zero HTML, links, travessões Unicode, marcações `[CONFERIR]` ou marcadores de citação. O mapa `_docs/CPRO-R/topicos.json` marca o tópico como `publicado localmente`.

O bundle `app/conteudo/conteudo-cpror.js` agora possui 82 de 125 tópicos, com 32 de 50 em Indicação de investimentos. `app/index.html` carrega o bundle com `?v=20260912-inv32` e preserva os 470 bytes NUL existentes. O service worker usa `bussola-v39`, preservando as alterações anteriores do rodapé da aula e do botão de voltar.

Validações: conversor com 82 tópicos, zero avisos e zero erros; 7 testes do conversor; 157 testes do aplicativo; sintaxe dos 22 arquivos JavaScript; e igualdade por SHA-256 entre o aplicativo e o pacote. Tudo passou. O pacote pronto está em `_publicar-agora/publicar-20260912-inv32`, contendo `app/conteudo/conteudo-cpror.js`, `app/index.html`, `app/sw.js` e instruções. Não houve envio externo ao GitHub ou à hospedagem.

## C-Pro R: patrimônio negativo, insolvência e liquidação integrado localmente (12/09/2026)

O tópico `cpror-inv-31`, **Patrimônio negativo, insolvência e liquidação de fundos**, foi criado em `_conteudo/cpror/indicacao-de-investimentos/cpror-inv-31.md` e integrado ao aplicativo. Ele cobre integralmente o item 3.5.1.3.7: patrimônio líquido negativo, responsabilidade do cotista, insolvência, fechamento para resgates e liquidação.

A aula usa como espinha a sequência do estresse: perda, patrimônio negativo, fechamento, tentativa de resolução e eventual liquidação ou insolvência. Um exemplo com R$ 80 milhões em ativos e R$ 100 milhões em obrigações produz patrimônio líquido negativo de R$ 20 milhões. O texto diferencia essa situação de uma rentabilidade apenas negativa e evita atribuir automaticamente o evento a fraude.

A responsabilidade limitada foi descrita pelo critério exato da Resolução CVM 175: valor subscrito (quando a subscrição já foi totalmente integralizada, isso significa não responder além do valor aplicado). Se o cotista subscreveu R$ 100 mil e integralizou tudo, não pode ser obrigado a aportar além desse compromisso apenas para cobrir o déficit. Se ainda existe parcela subscrita e não integralizada, ela pode continuar devida. A limitação não impede a perda total das cotas. Na ausência da limitação, os cotistas respondem pelo patrimônio negativo, e o termo de adesão de classe com risco de capital deve registrar ciência da responsabilidade ilimitada.

Quando uma classe limitada apresenta patrimônio negativo, resgates, amortizações e novas subscrições são interrompidos; pedidos pendentes de conversão são cancelados; o gestor é comunicado; e um fato relevante é divulgado. Em regra, administrador e gestor elaboram em até 20 dias um plano com causas, balancete e proposta. A assembleia é convocada em até dois dias úteis depois da conclusão. Aporte próprio ou de terceiros foi apresentado como alternativa deliberada de resolução, sem convertê-lo em obrigação automática além do valor subscrito.

O fechamento por iliquidez excepcional foi separado do fechamento causado pelo patrimônio negativo. Mercados fechados ou pedidos incompatíveis com a liquidez podem justificar suspensão para evitar vendas destrutivas e preservar tratamento equitativo. O fato relevante deve ser imediato. Se a suspensão superar cinco dias úteis, o administrador convoca em até um dia assembleia para ocorrer em até 15 dias, com possibilidades de reabertura, manutenção, cisão, liquidação ou resgate em ativos com concordância dos afetados.

Patrimônio negativo foi distinguido de insolvência judicial. A norma permite concluir que um evento negativo não representa risco à solvência. Quando a assembleia não se instala ou não escolhe uma solução prevista, o administrador deve pedir insolvência; a CVM também pode fazê-lo diante de risco ao mercado ou ao sistema financeiro. A declaração leva ao cancelamento do registro da classe sem apagar responsabilidades por infrações anteriores.

Na liquidação, os prestadores elaboram plano com forma e cronograma estimado de pagamento. Os ativos e obrigações são tratados de forma ordenada, e o patrimônio remanescente é dividido proporcionalmente às cotas. A proporcionalidade não garante recuperação integral ou imediata. O administrador deve comunicar atualizações simultaneamente e verificar tratamento isonômico; o auditor examina a movimentação até a liquidação efetiva.

A validação normativa usou a Parte Geral da Resolução CVM 175 consolidada, especialmente os arts. 6º, 18, 41, 44, 48 e 122 a 128. A ficha `_docs/CPRO-R/fontes-normativas/cpror-inv-31.md` registra fontes, dispositivos, data de consulta e critérios aplicados. O texto consolidado consultado já contempla as alterações listadas pela CVM, inclusive a Resolução CVM 240/2026.

O arquivo passou pelos controles editoriais: cinco H2 obrigatórios, cartão com sete linhas, maior lista com sete itens e zero HTML, links, travessões Unicode, marcações `[CONFERIR]` ou marcadores de citação. O mapa `_docs/CPRO-R/topicos.json` marca o tópico como `publicado localmente`.

O bundle `app/conteudo/conteudo-cpror.js` agora possui 81 de 125 tópicos, com 31 de 50 em Indicação de investimentos. `app/index.html` carrega o bundle com `?v=20260912-inv31` e preserva os 470 bytes NUL existentes. O service worker usa `bussola-v38`, preservando as alterações anteriores do rodapé da aula e do botão de voltar.

Validações: conversor com 81 tópicos, zero avisos e zero erros; 7 testes do conversor; 157 testes do aplicativo; sintaxe dos 22 arquivos JavaScript; e igualdade por SHA-256 entre o aplicativo e o pacote. Tudo passou. O pacote pronto está em `_publicar-agora/publicar-20260912-inv31`, contendo `app/conteudo/conteudo-cpror.js`, `app/index.html`, `app/sw.js` e instruções. Não houve envio externo ao GitHub ou à hospedagem.

## C-Pro R: tributação dos fundos integrada localmente (12/09/2026)

O tópico `cpror-inv-30`, **Tributação dos fundos: come-cotas, IOF e alocação líquida**, foi criado em `_conteudo/cpror/indicacao-de-investimentos/cpror-inv-30.md` e integrado ao aplicativo. Ele cobre integralmente o item 3.5.1.3.6: tributação, come-cotas, IOF e os impactos desses elementos na recomendação de alocação.

A aula usa como espinha a diferença entre retorno bruto e valor líquido acumulado. O come-cotas é explicado como antecipação de imposto por redução da quantidade de cotas no último dia útil de maio e novembro. Fundos de longo prazo antecipam 15% e fundos de curto prazo antecipam 20%. No resgate, há complemento quando necessário para alcançar a alíquota correspondente ao prazo da aplicação. O texto esclarece que a classificação fiscal curta ou longa depende da carteira, e não do tempo que o cliente deseja permanecer.

A atualização trazida pela Lei 14.754/2023 foi tratada expressamente. Desde 2024, o regime geral alcança fundos abertos e fechados, inclusive fundos fechados e exclusivos que não estejam em regime especial ou exceção. O texto corrige a regra antiga de tributação do fundo fechado apenas na amortização ou no resgate e evita a generalização inversa de dizer que todo fundo fechado passou a sofrer come-cotas.

O FIA fiscalmente enquadrado foi apresentado como exceção relevante. Ele deve manter pelo menos 67% da carteira nos ativos elegíveis previstos na lei, não sofre tributação periódica e está sujeito a IRRF de 15% na distribuição, amortização ou resgate. FIP, FIDC e ETF foram citados apenas para mostrar que existem outros regimes condicionados; FII, FI-Infra e ETF de renda fixa foram remetidos às respectivas regras próprias, sem repetir as aulas anteriores.

O IOF regressivo foi aplicado à saída nos primeiros 29 dias nos fundos sujeitos a ele. O percentual incidente sobre o rendimento diminui até chegar a zero no 30º dia. A aula ensina que o IOF consome primeiro parte do ganho e que a dedução cabível é considerada na base do imposto de renda, mas evita estender a regra indistintamente aos fundos de ações.

O cálculo obrigatório compara R$ 100.000 durante dez anos, com retorno bruto constante de 10% ao ano, sem taxas e alíquota final de 15% nos dois produtos. Sem come-cotas, o valor bruto chega a R$ 259.374,25 e o líquido após o imposto final fica em R$ 235.468,11. Com antecipação de 15% a cada um dos 20 semestres, o valor líquido aproximado fica em R$ 225.466,18. A diferença de R$ 10.001,93 decorre apenas do diferimento tributário e mostra a parcela que deixou de participar dos juros compostos.

O fechamento de alocação impede usar tributação como critério isolado. O profissional deve comparar regime efetivo, prazo médio da carteira, complemento provável no resgate, IOF, custos, risco, liquidez e horizonte. A ausência de come-cotas não justifica trocar renda fixa por ações quando o risco não atende ao objetivo do cliente.

A validação normativa usou a Lei 14.754/2023, a Lei 11.033/2004, a Instrução Normativa RFB 1.585/2015 e o Decreto 6.306/2007. A ficha `_docs/CPRO-R/fontes-normativas/cpror-inv-30.md` registra fontes, dispositivos, data de consulta, vigência e memória do cálculo. A Medida Provisória 1.303/2025 não foi aplicada porque sua vigência foi encerrada.

O arquivo passou pelos controles editoriais: cinco H2 obrigatórios, cartão com sete linhas, maior lista com sete itens e zero HTML, links, travessões Unicode, marcações `[CONFERIR]` ou marcadores de citação. O mapa `_docs/CPRO-R/topicos.json` marca o tópico como `publicado localmente`.

O bundle `app/conteudo/conteudo-cpror.js` agora possui 80 de 125 tópicos, com 30 de 50 em Indicação de investimentos. `app/index.html` carrega o bundle com `?v=20260912-inv30` e preserva os 470 bytes NUL existentes. O service worker usa `bussola-v37`, preservando as alterações anteriores do rodapé da aula e do botão de voltar.

Validações: conversor com 80 tópicos, zero avisos e zero erros; 7 testes do conversor; 157 testes do aplicativo; sintaxe dos 22 arquivos JavaScript; e igualdade por SHA-256 entre o aplicativo e o pacote. Tudo passou. O pacote pronto está em `_publicar-agora/publicar-20260912-inv30`, contendo `app/conteudo/conteudo-cpror.js`, `app/index.html`, `app/sw.js` e instruções. Não houve envio externo ao GitHub ou à hospedagem.

## C-Pro R: fundos incentivados e de infraestrutura integrado localmente (12/09/2026)

O tópico `cpror-inv-29`, **Fundos incentivados e de infraestrutura: liquidez e adequação**, foi criado em `_conteudo/cpror/indicacao-de-investimentos/cpror-inv-29.md` e integrado ao aplicativo. Ele cobre integralmente o item 3.5.1.3.5: características, liquidez, riscos e adequação dos fundos incentivados e de infraestrutura.

A aula usa como espinha o par benefício tributário e compromisso de liquidez. Primeiro identifica o FI-Infra como fundo de renda fixa voltado aos ativos elegíveis de projetos de investimento. Depois explica que a alíquota zero da pessoa física depende do enquadramento no art. 3º da Lei 12.431 e não do uso da palavra “infraestrutura” no nome do produto. A distinção entre as Leis 12.431 e 14.801 foi lembrada em um único trecho, sem repetir a explicação completa do tópico `cpror-inv-11`.

O texto confirma a alocação mínima central de 85% nos ativos elegíveis e explica que o benefício alcança os rendimentos da pessoa física, inclusive ganhos na alienação das cotas, quando atendidas as condições legais. Alíquota zero foi separada de garantia, proteção do principal e ausência de risco. A aula não reproduz os detalhes de garantias e covenants já ensinados em `cpror-inv-12`.

A liquidez dos títulos longos e de mercado secundário estreito é conectada aos dois regimes possíveis do FI-Infra. Na classe aberta, ela pode aparecer como prazo de resgate e necessidade de venda da carteira; na classe fechada, como dificuldade de encontrar comprador ou desconto no preço da cota. Um exemplo com patrimônio de R$ 100 milhões, R$ 8 milhões em liquidez e R$ 15 milhões em resgates mostra a necessidade de vender R$ 7 milhões. Com desconto hipotético de 3%, a perda é de R$ 210 mil e reduz o patrimônio da classe.

Os riscos de crédito, mercado, liquidez, concentração, projeto e reinvestimento foram tratados de forma direta. O texto mostra que atrasos de obra, aumento de custos, demanda, regulação e questões ambientais podem atingir o caixa do projeto. Também explica que a cota pode cair pela alta das taxas antes de ocorrer inadimplência e que vários títulos não garantem diversificação quando compartilham grupo econômico, setor ou fator regulatório.

O fechamento de suitability compara dois clientes. Marina tem reserva separada, horizonte de oito anos e tolerância a oscilações; Rafael precisa do dinheiro em nove meses para a entrada de um imóvel. O mesmo produto pode ser coerente para a primeira e inadequado para o segundo. A recomendação exige conferir o enquadramento fiscal, a carteira, a saída, o prazo do objetivo e a capacidade de suportar perdas.

A validação normativa usou o Anexo Normativo I da Resolução CVM 175 consolidada, especialmente os arts. 59 e 60, o art. 3º da Lei 12.431/2011 em texto compilado e a Lei 14.801/2024. A ficha `_docs/CPRO-R/fontes-normativas/cpror-inv-29.md` registra fontes, dispositivos, data de consulta e critérios aplicados. A Instrução CVM 555 não foi tratada como norma vigente.

O arquivo passou pelos controles editoriais: cinco H2 obrigatórios, cartão com sete linhas, maior lista com sete itens e zero HTML, links, travessões Unicode, marcações `[CONFERIR]` ou marcadores de citação. O mapa `_docs/CPRO-R/topicos.json` marca o tópico como `publicado localmente`.

O bundle `app/conteudo/conteudo-cpror.js` agora possui 79 de 125 tópicos, com 29 de 50 em Indicação de investimentos. `app/index.html` carrega o bundle com `?v=20260912-inv29` e preserva os 470 bytes NUL existentes. O service worker usa `bussola-v36`, preservando as alterações anteriores do rodapé da aula e do botão de voltar.

Validações: conversor com 79 tópicos, zero avisos e zero erros; 7 testes do conversor; 157 testes do aplicativo; sintaxe dos 22 arquivos JavaScript; e igualdade por SHA-256 entre o aplicativo e o pacote. Tudo passou. O pacote pronto está em `_publicar-agora/publicar-20260912-inv29`, contendo `app/conteudo/conteudo-cpror.js`, `app/index.html`, `app/sw.js` e instruções. Não houve envio externo ao GitHub ou à hospedagem.

## C-Pro R: FIIs integrado localmente (12/09/2026)

O tópico `cpror-inv-28`, **FIIs: tijolo, papel, rendimentos, custos e riscos**, foi criado em `_conteudo/cpror/indicacao-de-investimentos/cpror-inv-28.md` e integrado ao aplicativo. Ele cobre integralmente o item 3.5.1.3.4 e seus descendentes 3.5.1.3.4.1 a 3.5.1.3.4.6: negociação e regime de cotas, riscos, rendimentos, taxas, subscrição, fundos de tijolo e papel, tributação e custos.

A aula usa como espinha a origem do caixa. No fundo de tijolo, o resultado depende de imóveis, contratos e locatários; no fundo de papel, depende de créditos, devedores, garantias e indexadores. O texto diferencia vacância física de perda financeira e explica que um imóvel ocupado pode deixar de gerar receita por carência, desconto ou inadimplência. Também trata carteiras híbridas, concentração e sensibilidade aos juros.

O regime fechado é relacionado à saída pelo mercado secundário. A subscrição de novas cotas é separada da compra em bolsa, com explicação de preferência, diluição, preço de emissão e destinação dos recursos. Rendimentos distribuídos são separados da valorização da cota, e o pagamento mensal frequente não é apresentado como garantia. A regra de distribuição mínima de 95% dos lucros pelo regime de caixa, apurados em balanço ou balancete semestral, foi confirmada na Lei 8.668/1993.

A tributação recebeu revisão reforçada. Foram ensinados os três testes tradicionalmente cobrados para isenção dos rendimentos da pessoa física: no mínimo 100 cotistas, cotas negociadas exclusivamente em bolsa ou balcão organizado e limite individual inferior a 10% das cotas, sem direito a mais de 10% dos rendimentos. A Lei 14.754/2023 acrescentou restrição para o conjunto de pessoas físicas ligadas que alcance 30% ou mais das cotas ou tenha direito a mais de 30% dos rendimentos; esse quarto controle vigente foi incluído mesmo não constando da lista original do pedido. O ganho na venda ou no resgate da cota é tributado em 20% e não recebe a isenção mensal das ações. Um exemplo calcula R$ 800 sobre ganho líquido de R$ 4.000.

O caso final compara um FII de galpões e um FII de créditos pós-fixados no mesmo cenário de alta de juros. Ele mostra que o papel pode receber mais pelo indexador e simultaneamente sofrer piora de crédito, enquanto o tijolo depende de reajustes, ocupação, cobrança e taxa de desconto aplicada ao preço da cota.

A validação normativa usou o Anexo Normativo III da Resolução CVM 175 consolidada, o art. 10 da Lei 8.668/1993, o art. 3º da Lei 11.033/2004 em texto compilado e orientação da Receita Federal. A ficha `_docs/CPRO-R/fontes-normativas/cpror-inv-28.md` registra fontes, dispositivos, data de consulta e a atualização trazida pela Lei 14.754/2023.

O arquivo passou pelos controles editoriais: cinco H2 obrigatórios, cartão com sete linhas, maior lista com sete itens e zero HTML, links, travessões Unicode, marcações `[CONFERIR]` ou marcadores de citação. O mapa `_docs/CPRO-R/topicos.json` marca o tópico como `publicado localmente`.

O bundle `app/conteudo/conteudo-cpror.js` agora possui 78 de 125 tópicos, com 28 de 50 em Indicação de investimentos. `app/index.html` carrega o bundle com `?v=20260912-inv28` e preserva os 470 bytes NUL existentes. O service worker usa `bussola-v35`, preservando as alterações anteriores do rodapé da aula e do botão de voltar.

Validações: conversor com 78 tópicos, zero avisos e zero erros; 7 testes do conversor; 157 testes do aplicativo; sintaxe dos 22 arquivos JavaScript; e igualdade por SHA-256 entre o aplicativo e o pacote. Tudo passou. O pacote pronto está em `_publicar-agora/publicar-20260912-inv28`, contendo `app/conteudo/conteudo-cpror.js`, `app/index.html`, `app/sw.js` e instruções. Não houve envio externo ao GitHub ou à hospedagem.

## C-Pro R: ETFs integrado localmente (12/09/2026)

O tópico `cpror-inv-27`, **ETFs: estrutura, negociação, categorias e riscos**, foi criado em `_conteudo/cpror/indicacao-de-investimentos/cpror-inv-27.md` e integrado ao aplicativo. Ele cobre integralmente o item 3.5.1.3.3 e seu descendente 3.5.1.3.3.1.1.1 do programa, incluindo os tipos segmentado, criptoativos, internacional, nacional e ESG, sem repetir as aulas anteriores sobre índices, gestão passiva ou tributação geral de ações.

A aula parte da diferença central: o ETF é um fundo de índice cuja cota é negociada em bolsa como uma ação, mas não recebe a isenção mensal das ações. O conteúdo percorre estrutura, índice de referência, mercado primário, mercado secundário e formador de mercado antes de comparar as cinco exposições exigidas. Também explica que ETF internacional negociado em reais pode manter risco cambial e que diversificação interna não elimina concentração setorial.

Dois riscos próprios foram tratados separadamente. A diferença de acompanhamento mede o afastamento do retorno em relação ao índice e o erro de acompanhamento observa a regularidade desse desvio. Ágio ou deságio surge quando o preço negociado em bolsa se afasta do valor patrimonial da cota. Um exemplo mostra valor patrimonial de R$ 100, compra a R$ 102 e perda aproximada de 1,96% caso o preço retorne ao patrimônio sem mudança da carteira.

A tributação foi confirmada em fontes oficiais vigentes. Para ETF de renda variável, a pessoa física paga 15% sobre ganho líquido em operação comum e 20% em day trade; a isenção para vendas mensais de ações até R$ 20.000 não alcança cotas de fundo de índice de ações. O caso calcula R$ 450 de imposto sobre ganho de R$ 3.000 em uma venda de R$ 18.000. Para ETF de renda fixa no regime específico, as alíquotas são 25%, 20% ou 15% conforme o prazo médio de repactuação da carteira, e não conforme o tempo de permanência do cotista.

A validação normativa usou o Anexo Normativo V da Resolução CVM 175 consolidada, as perguntas 706 e 707 do Perguntas e Respostas IRPF 2026 da Receita Federal e o art. 2º da Lei 13.043/2014. A ficha `_docs/CPRO-R/fontes-normativas/cpror-inv-27.md` registra fontes, dispositivos, data de consulta e critérios aplicados.

O arquivo passou pelos controles editoriais: cinco H2 obrigatórios, cartão com sete linhas, maior lista com sete itens e zero HTML, links, travessões Unicode, marcações `[CONFERIR]` ou marcadores de citação. O mapa `_docs/CPRO-R/topicos.json` marca o tópico como `publicado localmente`.

O bundle `app/conteudo/conteudo-cpror.js` agora possui 77 de 125 tópicos, com 27 de 50 em Indicação de investimentos. `app/index.html` carrega o bundle com `?v=20260912-inv27` e preserva os 470 bytes NUL existentes. O service worker usa `bussola-v34`, preservando as alterações anteriores do rodapé da aula e do botão de voltar.

Validações: conversor com 77 tópicos, zero avisos e zero erros; 7 testes do conversor; 157 testes do aplicativo; sintaxe dos 22 arquivos JavaScript; e igualdade por SHA-256 entre o aplicativo e o pacote. Tudo passou. O pacote pronto está em `_publicar-agora/publicar-20260912-inv27`, contendo `app/conteudo/conteudo-cpror.js`, `app/index.html`, `app/sw.js` e instruções. Não houve envio externo ao GitHub ou à hospedagem.

## C-Pro R: fundos sustentáveis e integração ESG integrado localmente (12/09/2026)

O tópico `cpror-inv-26`, **Fundos sustentáveis e integração ESG na indicação**, foi criado em `_conteudo/cpror/indicacao-de-investimentos/cpror-inv-26.md` e integrado ao aplicativo. Ele cobre integralmente o item 3.5.1.3.2 do programa e evita repetir documentos, classes, custos e o ISE, já ensinados nos tópicos anteriores.

A aula parte da pergunta do cliente sobre o que muda quando um fundo se diz sustentável. Ela separa a classe de Investimento Sustentável, que busca benefícios ambientais, sociais ou de governança como objetivo declarado, da classe que apenas integra questões ESG à análise para atingir seu objetivo financeiro. A sequência liga objetivo, identificação, metodologia, carteira, monitoramento e divulgação antes de chegar à recomendação.

O texto também ensina a reconhecer greenwashing sem concluir pela irregularidade a partir de um único ativo controverso. A verificação exige coerência entre promessa e prática, inclusive critérios, métricas, limitações, engajamento e tratamento de desenquadramentos. Dois casos com a cliente Lívia mostram quando uma classe IS atende a uma preferência por benefício mensurável e quando a integração ESG pode ser suficiente para quem deseja incorporar esses riscos à análise financeira.

A validação normativa usou a Resolução CVM 175 consolidada, especialmente os arts. 49 e 60 da Parte Geral, e as Regras e Procedimentos do Código de Administração e Gestão de Recursos de Terceiros da ANBIMA vigentes desde 23/03/2026, especialmente os arts. 60 a 73 do Capítulo IX. A ficha `_docs/CPRO-R/fontes-normativas/cpror-inv-26.md` registra fontes, dispositivos, data de consulta e critérios aplicados. Foi confirmado que IS não é selo de rentabilidade ou garantia e que integrar ESG não equivale a buscar benefício sustentável.

O arquivo passou pelos controles editoriais: cinco H2 obrigatórios, cartão com sete linhas, maior lista com sete itens e zero HTML, links, travessões Unicode, marcações `[CONFERIR]` ou marcadores de citação. O mapa `_docs/CPRO-R/topicos.json` marca o tópico como `publicado localmente`.

O bundle `app/conteudo/conteudo-cpror.js` agora possui 76 de 125 tópicos, com 26 de 50 em Indicação de investimentos. `app/index.html` carrega o bundle com `?v=20260912-inv26` e preserva os 470 bytes NUL existentes. O service worker usa `bussola-v33`, preservando as alterações anteriores do rodapé da aula e do botão de voltar.

Validações: conversor com 76 tópicos, zero avisos e zero erros; 7 testes do conversor; 157 testes do aplicativo; sintaxe dos 22 arquivos JavaScript; e igualdade por SHA-256 entre o aplicativo e o pacote. Tudo passou. O pacote pronto está em `_publicar-agora/publicar-20260912-inv26`, contendo `app/conteudo/conteudo-cpror.js`, `app/index.html`, `app/sw.js` e instruções. Não houve envio externo ao GitHub ou à hospedagem.

## C-Pro R: classes e estratégias de fundos integrado localmente (12/09/2026)

O tópico `cpror-inv-25`, **Fundos de renda fixa, multimercados e ações: classes e estratégias**, foi criado em `_conteudo/cpror/indicacao-de-investimentos/cpror-inv-25.md` e integrado ao aplicativo. Ele cobre o item 3.5.1.3.1 do programa: características, vantagens, desvantagens e riscos das classes; estratégias ativa e passiva; concentração; taxas; e prazos de cotização e pagamento do resgate.

A aula organiza a decisão pela classe e pelo risco predominante, pela estratégia, pelo custo acumulado e pela saída. Ela distingue fundos de renda fixa, multimercados e ações, explica classes e subclasses no regime da Resolução CVM 175 e apresenta limites de concentração por emissor. Também separa pedido de resgate, conversão de cotas e pagamento. No exemplo hipotético, conversão em D+30 e pagamento em D+1 após a conversão representam 31 dias quando ambos os prazos seguem a mesma convenção de contagem.

O cálculo obrigatório compara R$ 100.000 durante dez anos, com o mesmo retorno bruto de 10% ao ano. Na simplificação usada para isolar o efeito das taxas, o fundo passivo cobra 0,5% ao ano e termina com R$ 247.822,76; o ativo cobra 2% ao ano e termina com R$ 215.892,50. A diferença de R$ 31.930,26 mostra que a gestão ativa precisa produzir retorno bruto adicional suficiente para compensar seu maior custo. O texto também esclarece que a taxa de administração incide mesmo com desempenho negativo e que a taxa de performance depende das condições previstas, inclusive benchmark e linha d'água.

A validação normativa usou a Resolução CVM 175 consolidada e seu Anexo Normativo I. Foram confirmadas as definições e exposições mínimas das classes, as regras gerais de concentração por emissor, as condições para cobrança de taxa de performance e a separação entre as datas do pedido, da conversão e do pagamento do resgate. A Instrução CVM 555 não foi citada como norma vigente.

O arquivo passou pelos controles editoriais: cinco H2 obrigatórios, cartão com sete linhas, maior lista com sete itens e zero HTML, links, travessões Unicode, marcações `[CONFERIR]` ou marcadores de citação. O mapa `_docs/CPRO-R/topicos.json` marca o tópico como `publicado localmente`.

O bundle `app/conteudo/conteudo-cpror.js` agora possui 75 de 125 tópicos, com 25 de 50 em Indicação de investimentos. `app/index.html` carrega o bundle com `?v=20260912-inv25` e preserva os 470 bytes NUL existentes. O service worker usa `bussola-v32`. A atualização concorrente anterior, `bussola-v31`, que acrescentou o rodapé da aula e o botão de voltar, foi preservada.

Validações: conversor com 75 tópicos, zero avisos e zero erros; 7 testes do conversor; 157 testes do aplicativo; e sintaxe dos 22 arquivos JavaScript. Tudo passou. O pacote pronto está em `_publicar-agora/publicar-20260912-inv25`, contendo `app/conteudo/conteudo-cpror.js`, `app/index.html`, `app/sw.js` e instruções. Não houve envio externo ao GitHub ou à hospedagem.

## Orientação editorial reforçada para os próximos tópicos (12/09/2026)

O dono forneceu uma base atualizada para o Modo B. O conteúdo recebido é equivalente ao arquivo `_docs/AGENTES-CONTEUDO/pedidos-lote-3/01 - BASE (colar uma vez por conversa).md`, que já registra como ensinados os tópicos `cpror-inv-01` a `cpror-inv-24`. A única diferença textual está na frase inicial que identifica o Modo B; as regras operacionais e editoriais são as mesmas.

Duas regras passaram a constar expressamente do protocolo central e do prompt da C-Pro R. Primeiro, a seção inicial de `## Conteúdo` deve enunciar a espinha didática; as seções seguintes devem responder aos blocos na ordem prometida; os títulos internos precisam anunciar o que ensinam; e a última seção deve consolidar o raciocínio. Segundo, listas só podem reunir itens paralelos e autossuficientes, com no máximo sete itens. Quando os itens exigirem explicação, devem virar texto corrido, tabela didática ou subseções.

O revisor deve reprovar ausência dessa estrutura, lista com mais de sete itens ou enumeração que substitua ensino. Esses critérios foram acrescentados a `_conteudo/PROMPT - Criar conteudo CPRO R.md` e `_docs/AGENTES-CONTEUDO/EXECUTAR.md`. Também foi corrigido no prompt o estado antigo que dizia que a C-Pro R ainda não estava cadastrada; agora ele orienta consultar catálogo e bundle para o estágio vigente.

Nenhum novo tópico foi produzido ou integrado nesta atualização documental.

## Regras permanentes para os próximos conteúdos C-Pro R (12/09/2026)

Decisão expressa do dono: alguns tópicos só podem ser escritos e aprovados após confirmação em fonte oficial vigente. A Lei 14.754/2023 deve ser consultada nos tópicos `cpror-inv-30`, `cpror-inv-32` e `cpror-inv-36`, confirmando o regime aplicável desde 2024 para fundos fechados e exclusivos, investimentos no exterior e entidades offshore. O `cpror-inv-36` é o ponto de maior risco normativo. Em todos os tópicos de fundos, usar a Resolução CVM 175 consolidada e não citar a Instrução CVM 555 como vigente. No `cpror-inv-43`, confirmar diretamente a Resolução CNSP 382 e sua versão vigente.

Exemplos numéricos são obrigatórios nestes conteúdos: `cpror-inv-25`, diferença entre ativo e passivo em dez anos causada pela taxa; `cpror-inv-30`, efeito do come-cotas sobre juros compostos; `cpror-inv-39`, PGBL com imposto sobre o total resgatado; `cpror-car-05`, rentabilidade real por divisão e desvio padrão alterado somente pela correlação; `cpror-car-10`, CPPI com piso, colchão e multiplicador; e `cpror-car-25`, Sharpe e Treynor calculados para a mesma carteira.

Duas armadilhas fiscais também são obrigatórias: no `cpror-inv-27`, esclarecer que a isenção mensal de R$ 20.000 não se aplica a ETF; no `cpror-inv-28`, ensinar e conferir os três requisitos cumulativos da isenção dos rendimentos de FII. A falta de qualquer conferência, conta ou armadilha indicada reprova o tópico correspondente.

Essas regras foram registradas também em `_conteudo/PROMPT - Criar conteudo CPRO R.md` e `_docs/AGENTES-CONTEUDO/EXECUTAR.md`.

## C-Pro R: fundos, documentos e responsabilidades integrado localmente (12/09/2026)

O tópico `cpror-inv-24`, **Fundos: documentos, distribuição e responsabilidades**, foi criado em `_conteudo/cpror/indicacao-de-investimentos/cpror-inv-24.md` e integrado ao aplicativo. Ele cobre os itens 3.5.1.1.1 e 3.5.1.2 do programa: regulamento, adesão, ciência de risco, informações complementares, lâmina, selo ANBIMA e obrigações do distribuidor.

A aula acompanha a sequência de uma aplicação: o que o cliente consulta, o que recebe, o que confirma e o que fica registrado. A Resolução CVM 175 consolidada fundamenta a explicação. O texto esclarece que o regime vigente reúne adesão e ciência de risco no mesmo termo e chama a lâmina dos fundos de investimento financeiro de lâmina de informações básicas, embora o programa use a expressão lâmina de informações essenciais. Também evita tratar o antigo Formulário de Informações Complementares da Instrução CVM 555 como documento universal vigente.

A distinção entre distribuidor, administrador fiduciário e gestor foi preservada. O distribuidor responde pelo atendimento, informação, suitability, ordem e registros; o administrador e o gestor possuem atribuições próprias. O caso de Marina mostra a ordem correta dos documentos e a variação demonstra por que assinatura e envio posterior não corrigem informação tardia nem produto incompatível com a necessidade de liquidez.

O arquivo passou pelos controles editoriais: cinco H2 obrigatórios, cartão com dez linhas, zero HTML, links, travessões, marcações de conferência e marcadores de citação. O mapa `_docs/CPRO-R/topicos.json` marca o tópico como `publicado localmente`.

O bundle `app/conteudo/conteudo-cpror.js` agora possui 74 de 125 tópicos, com 24 de 50 em Indicação de investimentos. `app/index.html` carrega o bundle com `?v=20260912-inv24`, preservando os 470 bytes NUL. O service worker usa `bussola-v30`.

Validações: conversor com 74 tópicos, zero avisos e zero erros; 7 testes do conversor; 157 testes do aplicativo; e sintaxe dos 22 arquivos JavaScript, incluindo aplicativo e testes. Tudo passou. Pacote pronto em `_publicar-agora/publicar-20260912-inv24`, contendo `app/conteudo/conteudo-cpror.js`, `app/index.html`, `app/sw.js` e instruções. Não houve envio externo ao GitHub ou à hospedagem.

## C-Pro R: COE integrado localmente (12/09/2026)

O tópico `cpror-inv-23`, **COE: estrutura, riscos, custos, tributação e DIE**, foi criado em `_conteudo/cpror/indicacao-de-investimentos/cpror-inv-23.md` e integrado ao aplicativo. Ele cobre os itens 3.4.1 a 3.4.6 do programa: estrutura combinando dívida e derivativos, tributação e tratamento de perdas, modalidades valor nominal protegido e valor nominal em risco, marcação a mercado, custos, oferta pública, DIE e publicidade.

A aula parte da pergunta “Se o capital é protegido, onde está o risco?” e acompanha decisão, manutenção e saída do investimento. Explica risco de crédito do emissor, ausência de FGC, inflação, custo de oportunidade, risco de mercado e liquidez; diferencia resultado no vencimento de venda antecipada a valor de mercado; e mostra como remuneração da distribuição e demais custos podem estar embutidos na estrutura. O caso resolvido compara um COE de valor nominal protegido com um CDB do mesmo emissor em cenário favorável e desfavorável, calcula imposto e custo de oportunidade e mostra uma saída antecipada com perda.

A validação normativa considerou a Resolução CMN 5.166/2024 para emissão e modalidades, a Resolução CVM 8 consolidada para distribuição pública, DIE e publicidade, e a Instrução Normativa RFB 1.585/2015 para tributação e perdas. O texto distingue a proteção do valor nominal no vencimento da proteção contra inflação, risco do emissor e deságio em saída antecipada. O DIE é apresentado como documento anterior à aquisição, com riscos, cenários, liquidez, tributação, custos e remuneração da distribuição, conforme aplicável.

O arquivo passou pelos controles editoriais: cinco H2 obrigatórios, cartão com dez linhas, zero HTML, links, travessões, marcações de conferência e marcadores de citação. O mapa `_docs/CPRO-R/topicos.json` marca o tópico como `publicado localmente`.

O bundle `app/conteudo/conteudo-cpror.js` agora possui 73 de 125 tópicos, com 23 de 50 em Indicação de investimentos. `app/index.html` carrega o bundle com `?v=20260912-inv23`, preservando os 470 bytes NUL. O service worker usa `bussola-v29`.

Validações: conversor com 73 tópicos, zero avisos e zero erros; 7 testes do conversor; 157 testes do aplicativo; e sintaxe dos 22 arquivos JavaScript. Tudo passou. Pacote pronto em `_publicar-agora/publicar-20260912-inv23`, contendo `app/conteudo/conteudo-cpror.js`, `app/index.html`, `app/sw.js` e instruções. Não houve envio externo ao GitHub ou à hospedagem.

## C-Pro R: estruturas com derivativos integrado localmente (12/09/2026)

O tópico `cpror-inv-22`, **Estruturas com derivativos: margem, liquidação e direitos**, foi criado em `_conteudo/cpror/indicacao-de-investimentos/cpror-inv-22.md` e integrado ao aplicativo. Ele cobre integralmente os itens 3.3.4.4 e 3.3.4.5 do programa.

A aula acompanha o ciclo de vida da estrutura: contratação e resultado por faixas; efeito de volatilidade e tempo durante a operação; chamada de margem; formas, gatilhos e prazos de liquidação; e direitos da pessoa investidora. O caso resolvido usa uma estrutura de calls na proporção 1 por 2 com prêmios compensados, demonstra ganho e perda em diferentes preços e calcula reforço de margem de R$ 1.100. A variação reduz a proporção para 1 por 1 e mostra o novo custo e o ganho máximo líquido. O texto também esclarece que exposição a ações por derivativos não concede automaticamente direitos societários.

O arquivo passou pelos controles do conversor: cinco H2 obrigatórios, cartão com dez linhas, zero HTML, links, travessões, marcações de conferência e marcadores de citação. O mapa `_docs/CPRO-R/topicos.json` marca o tópico como `publicado localmente`.

O bundle `app/conteudo/conteudo-cpror.js` agora possui 72 de 125 tópicos, com 22 de 50 em Indicação de investimentos. `app/index.html` carrega o bundle com `?v=20260912-inv22`, preservando os 470 bytes NUL. O service worker usa `bussola-v28`.

Validações: conversor com 72 tópicos, zero avisos e zero erros; 7 testes do conversor; 157 testes do aplicativo; e sintaxe dos 22 arquivos JavaScript. Tudo passou. Pacote pronto em `_publicar-agora/publicar-20260912-inv22`, contendo `app/conteudo/conteudo-cpror.js`, `app/index.html`, `app/sw.js` e instruções. Não houve envio externo ao GitHub ou à hospedagem.

## C-Pro R: opções, moneyness e swaps integrado localmente (12/09/2026)

O tópico `cpror-inv-21`, **Opções, moneyness e swaps: funcionamento e comparação**, foi criado em `_conteudo/cpror/indicacao-de-investimentos/cpror-inv-21.md` e integrado ao aplicativo. Ele cobre integralmente o item 3.3.4.3 do programa: direitos e obrigações de titular e lançador, call, put, prêmio, preço de exercício, moneyness, resultado líquido com prêmio, funcionamento do swap e comparação entre os instrumentos.

A aula contém tabela de moneyness para call e put, cálculo resolvido de uma call com variação de premissa e cálculo de swap que transforma uma exposição a CDI mais spread em custo previsível. O texto respeita as cinco seções obrigatórias, não contém HTML, links, travessões, marcações de conferência ou marcadores de citação, e o cartão possui dez linhas.

Durante a integração, o teste do catálogo revelou uma inconsistência anterior: os arquivos `cpror-inv-12` a `cpror-inv-20` já existiam, eram convertidos e apareciam no bundle, mas continuavam marcados como `planejado` em `_docs/CPRO-R/topicos.json`. Seus estados foram corrigidos para `publicado localmente`; nenhum desses nove conteúdos foi alterado.

O bundle `app/conteudo/conteudo-cpror.js` agora possui 71 de 125 tópicos, com 21 de 50 em Indicação de investimentos. `app/index.html` carrega o bundle com `?v=20260912-inv21`, preservando os 470 bytes NUL existentes. O service worker usa `bussola-v27`.

Validações: conversor com 71 tópicos, zero avisos e zero erros; 7 testes do conversor; 157 testes do aplicativo; e verificação de sintaxe dos arquivos JavaScript. Tudo passou. Pacote pronto em `_publicar-agora/publicar-20260912-inv21`, contendo `app/conteudo/conteudo-cpror.js`, `app/index.html`, `app/sw.js` e instruções. Não houve envio externo ao GitHub ou à hospedagem.

## ANTES DE ANUNCIAR: dois riscos a resolver (11/09/2026)

Instrucao permanente para a proxima IA: quando o dono disser que vai comecar a anunciar, liberar acessos de teste ou divulgar o produto, levante estes dois riscos antes de qualquer outra coisa. Eles nao sao de volume de usuarios e nao se resolvem sozinhos com o crescimento.

Risco 1. O limite de 1 MiB por documento do Firestore. O app regrava o STATE inteiro a cada save, e o historico de exercicios fica dentro dele, entao um aluno de longo prazo respondendo centenas de questoes vai engordar esse documento. Quando estourar, o set() falha e o catch so pinta a nuvenzinha de erro. O aluno continua usando, com os dados presos no dispositivo, sem entender por que. Verificacao recomendada antes de anunciar: medir o tamanho do documento de um aluno maduro (simular algumas centenas de respostas e medir o JSON serializado). Correcao possivel: separar o historico de exercicios em subcolecao, ou podar o historico antigo mantendo apenas agregados.

Risco 2. Os termos do GitHub Pages. A documentacao do servico diz que ele nao se destina a hospedar negocio online ou software comercial como servico. O checkout esta no Hotmart, mas o produto que o aluno paga e servido do Pages. Na pratica ninguem e derrubado nesse porte e a chance de problema e baixa, mas e melhor saber disso antes de anunciar do que descobrir depois. Alternativas se for preciso migrar: Cloudflare Pages ou Netlify, ambos com plano gratuito compativel e sem essa restricao nos termos.

Capacidade medida em 11/09/2026, para contexto (nenhum destes e o gargalo real): GitHub Pages oferece 100 GB por mes de banda, o que da cerca de 30 mil alunos no padrao de uso do app. O limite que aperta primeiro e a cota gratuita do Firestore, 20 mil escritas por dia; com 15 a 40 escritas por sessao de estudo, isso da algo entre 500 e 700 alunos ativos por dia, ou cerca de 2.500 a 3.500 cadastrados. As 50 mil leituras diarias nao sao restricao, porque o app faz uma leitura por login. Migrar para o plano Blaze custaria cerca de um dolar por mes no dobro desse volume. Ou seja, volume nao e problema; os dois riscos acima sim.


## PENDENTE: auditar o conteúdo de governança da CPA (12/09/2026)

Pendência aberta, não iniciada. Prioridade média, sem impedir nada.

Durante a produção do lote cpror-inv-09 a cpror-inv-16, o dono forneceu apostilas de apoio. Uma delas cobre governança corporativa com profundidade: segmentos de listagem da B3 nos níveis tradicional, Nível 1, Nível 2 e Novo Mercado, composição do conselho, câmara de arbitragem, acordo de acionistas, AGO e AGE, direitos do acionista minoritário, units, classes de ações e regras de free float.

Verificação feita na ocasião: esse assunto NÃO pertence ao C-Pro R. Os 278 itens do programa detalhado da C-Pro R estão todos atribuídos a tópicos, sem órfãos, e nenhum deles menciona governança, níveis de listagem, free float, acordo de acionistas ou assembleia. O conteúdo pertence à CPA, onde o catálogo já tem os tópicos "Classes de ações: ordinárias, preferenciais, units, BDRs e bônus de subscrição", "Eventos corporativos: dividendos, JCP e assembleias (AGO e AGE)" e "Governança corporativa: segmentos de listagem, tag along, drag along e free float", todos em Produtos do Mercado Financeiro. Por isso o material não foi importado para o C-Pro R, e não deve ser.

O que precisa ser feito: auditar o conteúdo já publicado desses tópicos da CPA contra a apostila, procurando defasagem. O ponto de suspeita concreto é a regra de free float, que hoje é de 20% como regra geral, com alternativa de 15% quando o volume médio diário de negociação atinge R$ 20 milhões em doze meses, ou em ingresso concomitante a IPO acima de R$ 2 bilhões, ou entre R$ 1 bilhão e R$ 2 bilhões com as contrapartidas do regulamento, caso em que o free float pode ficar em 15% por 18 meses. Se o tópico da CPA foi escrito antes dessa atualização, está errado.

Vale conferir também o tag along por segmento, que é 100% para ON e PN no Nível 2 e 100% para ON no Novo Mercado, e a regra da Lei 10.303 sobre as vantagens exigidas para que uma ação preferencial possa ser negociada em bolsa.

Motivo de a pendência existir: nesta rodada, três apostidas diferentes foram confrontadas com a norma e as três traziam regra revogada. O artigo 60 da Lei 6.404, revogado pela Lei 12.431 de 2011, aparecia como limite vigente de emissão de debêntures. Os dividendos apareciam como isentos de imposto de renda para pessoa física, o que deixou de valer em 1º de janeiro de 2026. E a ação ao portador aparecia como forma possível, extinta pela Lei 8.021 de 1990. Material de estudo envelhece em silêncio, e conteúdo publicado envelhece do mesmo jeito.

Regra de trabalho adotada e que deve ser mantida: apostila define o recorte e a ênfase, norma define o número. Toda vez que uma fonte de apoio trouxer valor, prazo, limite, alíquota ou vedação, confira no texto oficial antes de aceitar.

## Regra editorial de densidade e completude (10/09/2026)

Decisão vigente do dono: conteúdos não possuem mínimo, máximo, alvo ou tolerância de palavras. Não usar contagem de palavras nem tamanho de arquivo como indicador de qualidade. Um tópico simples pode ser curto e um tópico com cálculos, condições ou exceções pode ser longo.

O Criador deve garantir densidade pedagógica, sem repetição ou preenchimento genérico, e completude de todos os itens e descendentes atribuídos no mapa. Cada objetivo precisa ser desenvolvido e ligado a aplicação, exemplo, comparação ou pegadinha relevante. O texto deve explicar conceitos, efeito das informações do cliente, alternativas plausíveis, justificativa, riscos, custos, restrições e mudanças de premissa aplicáveis.

O Revisor deve usar uma matriz de cobertura com item do programa, objetivo, seção que ensina, aplicação ou exemplo e condição ou exceção. Reprovar item apenas citado, fórmula sem interpretação, caso sem raciocínio, ausência de comparação relevante, cartão que omite distinção decisiva, repetição ou baixa densidade. Se a unidade ficar pedagogicamente excessiva, propor divisão do tópico em vez de omitir conteúdo.

Arquivos atualizados: _docs/AGENTES-CONTEUDO/EXECUTAR.md, _conteudo/PROMPT - Criar conteudo CPRO R.md, _docs/CPRO-R/INDICE E COBERTURA.md, _docs/CPRO-R/validar_planejamento.py, fichas dos três pilotos, outputs/conteudo_para_js.py e este handoff. O conversor deixou de calcular ou emitir avisos por quantidade de palavras; validações estruturais, editoriais e de segurança permanecem.

## C-Pro R cadastrada e primeiro lote integrado localmente (09/09/2026)

A certificação C-Pro R foi cadastrada no app com os 125 tópicos do mapa editorial, na ordem planejada. Matérias e pesos: Prospecção e relacionamento com a pessoa investidora 20%, Análise de informações do cliente 20%, Indicação de investimentos 40% e Análise de portfólio e monitoramento da carteira 20%. Parâmetros registrados conforme edital Anbima versão 1.4, de 28/05/2026: 45 questões, mínimo de 32 acertos e duração de 150 minutos. A divisão 9/9/18/9 exibida por matéria é identificada como estimativa.

Primeiro lote da equipe de agentes concluído na rodada 1. Foram criados, revisados separadamente, formatados por hash e integrados os tópicos cpror-rel-01, cpror-rel-02 e cpror-rel-03: finanças tradicionais e comportamentais; representatividade, disponibilidade e ancoragem; excesso de confiança e aversão à perda. Os marcadores [CONFERIR] existiram somente nos rascunhos e foram retirados após conferência. O bundle contém exatamente 3 de 125 tópicos. Os demais continuam planejados e não devem aparecer como aulas disponíveis.

Fontes Markdown finais: _conteudo/cpror/prospeccao-e-relacionamento/. Bundle: app/conteudo/conteudo-cpror.js. Bastidores completos, rascunhos, aprovados, fontes, relatório, hashes, manifesto e formatador: _docs/AGENTES-CONTEUDO/lotes/cpror-20260909-01/. O catálogo foi alterado em app/editais.js e dados-site.js. app/index.html carrega o novo bundle e preserva os 470 bytes NUL preexistentes. app/sw.js usa cache bussola-v23 e inclui o bundle no shell offline. app/js/ui.js passou a ler a quantidade da prova cadastrada ao estimar questões. Teste específico: app/tests/cpror-catalog.test.js.

O conversor outputs/conteudo_para_js.py foi protegido nesta rodada: [CONFERIR] e travessões agora bloqueiam a geração; erros em qualquer fonte do lote impedem todas as escritas; mistura de certificações e pares matéria/tópico duplicados são rejeitados; gravação usa arquivo temporário e substituição atômica por bundle. O carregamento de editais preserva URLs contidas em strings. outputs/test_conteudo_para_js.py contém sete testes em diretórios temporários. A atomicidade é por bundle, não uma transação entre vários bundles se houver falha física durante múltiplas substituições.

Validações do lote: cpror --check com 3 tópicos, zero avisos e zero erros; geração concluída; hashes dos três corpos conferidos pelo formatador; sete testes do conversor passando. O catálogo informa aulas em produção e não anuncia banco de questões ou análise estratégica prontos. Sem deploy ou alteração no Firebase. Próxima produção pode continuar por cpror-rel-04 em diante, mantendo lotes pequenos até confirmar o padrão editorial na ferramenta.

Esta seção substitui o estado anterior que dizia que a C-Pro R não estava cadastrada ou que nenhum lote havia sido executado.

## Equipe de conteúdo no Codex: protocolo inicial (09/09/2026)

O usuário escolheu conduzir a equipe no Codex, com um pedido por lote e coordenação automática das etapas, sem precisar solicitar cada agente individualmente. Documento criado: _docs/AGENTES-CONTEUDO/EXECUTAR.md. Define distribuidor/coordenador, criador, revisor separado, formatador e integrador, com estados persistidos por tópico e limite de três rodadas de revisão.

Decisão expressa: [CONFERIR] aparece somente na revisão interna. Cada pendência deve ser verificada antes de produzir e aprovar a versão final sem marcadores. O formatador recebe essa versão final e preserva o corpo integralmente; fontes e evidências ficam no relatório interno. Não impor limites de palavras. Manter didática, cinco seções do modelo e ausência de HTML, links e travessões no texto do aluno.

Estado: protocolo documentado, sem serviço permanente, agendamento ou API configurada. Nenhum lote de conteúdo foi executado nesta etapa. Não declarar a cadeia testada de ponta a ponta. O próximo lote precisa identificar certificação, tópicos e fontes, podendo usar o comando modelo do documento.

Risco identificado em auditoria somente de leitura: outputs/conteudo_para_js.py pode escrever o bundle antes de retornar erros. Não foi corrigido nesta etapa. O protocolo exige --check e geração em cópia isolada antes da promoção, além de verificar hash do corpo aprovado, ids e pares matéria/tópico. Marcadores [CONFERIR] e travessões são avisos no conversor atual, portanto a revisão deve bloquear sua publicação. Nenhuma alteração no app ou deploy nesta etapa.

## Homepage reformulada localmente (09/09/2026)

Página alterada: index.html da RAIZ, não app/index.html. Nova hierarquia visual com verde profundo, branco e creme discreto; mensagem voltada a certificações financeiras; seções de método, recursos, catálogo, oferta e dúvidas. Campo de preço consistente em R$ 29,90, conforme botões/FAQ anteriores. Link Hotmart preservado. Sem travessões no HTML novo, sem promessas absolutas de aprovação ou memória, sem depoimentos fictícios.

Nova demonstração interativa Hoje → Questões → Resultado com dados fictícios explicitamente identificados. Questão de exemplo sobre a própria ferramenta; não é uma questão de certificação nem captura real do app. Demonstra leitura, resposta, feedback e nota, sem persistência ou acesso a contas. Catálogo continua vindo de dados-site.js, incluindo microcertificação quando presente. Disponibilidade variável de aulas e questões está explicitada.

Arquivos para publicar: index.html, css/home.css e js/ui.js (todos da RAIZ). Publicar dados-site.js se a versão atual do catálogo ainda não estiver no GitHub. Não confundir js/ui.js da homepage com app/js/ui.js. Este handoff pode acompanhar. CSS e JS clássicos, interações por ACTIONS/data-action no js/ui.js, esc() nos dados renderizados. Removidos da homepage os scripts Firebase que apenas inicializavam o SDK; área do aluno continua em app/index.html. Analytics preservado com o ID anterior. Checkout permanece link nativo para funcionar sem JS.

Animações: entrada discreta, mudanças da demonstração e estados de botões. Respeita prefers-reduced-motion. Conteúdo principal permanece visível sem JS; catálogo interativo e demonstração dependem de JS. Backup anterior em _docs/HOMEPAGE-AUDITORIA/index-antes-redesign.html. Relatório e capturas da auditoria anterior em _docs/HOMEPAGE-AUDITORIA/.

Validação: nova homepage aberta via servidor local; primeira tela inspecionada na largura disponível, sem rolagem horizontal visível. Fluxo de demonstração Questões → resposta → Resultado testado no navegador. HTML validado para IDs únicos, âncoras, existência de links locais, preço e ausência de handlers inline; sintaxe JS passou. Os 153 testes do app continuam passando (não são testes da homepage).

Pendência: teste visual em celular, demais breakpoints e fluxo completo do catálogo/FAQ. A revisão automática bloqueou a tentativa de configurar viewport com mensagem de limite de uso. Consulta de cota logo depois mostrou 0% usado na janela de 5h e 57% usado na semanal; divergência não resolvida. Nenhum deploy, checkout ou pagamento realizado. Não declarar a responsividade totalmente validada. Servidor temporário de preview em 127.0.0.1:8765, com lista restrita de caminhos e sem acesso a _admin.


## Retorno Técnico sem pendência não reduz aderência (09/09/2026)

calcProgresso e calcProgressoDetalhado incluíam o dia sem atividade registrável no total esperado. Agora excluem Retorno Técnico sem pendência, sem inventar registro de conclusão. retornoTecnicoSemPendencia consulta os mesmos tópicos/confianças usados pelo card, inclusive percepções individuais, e verifica recuperação vinculada à data. Dias futuros não são dispensados antecipadamente; simulados, prova e Revisão Geral não são tratados como retorno vazio. A mudança afeta aderência e seus consumidores, incluindo bússola; não altera fórmulas de sequência/consistência.

Mensagem atual: “Todos os tópicos desta semana com Alta Confiança! Aproveite para revisar o conteúdo e resolver exercícios.”

Arquivos: app/js/engine.js, app/js/ui.js, app/index.html, app/sw.js, app/tests/retorno-neutro.test.js e este handoff. Cache bussola-v22; UI/engine versão 20260909-retorno-neutro. Testes cobrem dia neutro sem registro, pendência de confiança, recuperação e exceção de simulado. Sem deploy nem validação visual real.

## Correção do menu Hoje: todos os tópicos (09/09/2026)

Causa confirmada: renderHoje chamava getTopicoDiaHoje/getTopicoDiaByKey, wrapper que retorna só o primeiro tópico base. Agora usa getTopicosDiaBase, a mesma lista do cronograma, e desenha cada tópico com matéria, conteúdo/aula e avaliação individual. Recuperações permanecem separadas, com links próprios. Tooltip do foco também lista todos os tópicos.

Em dias com múltiplos tópicos, usa setStarHojeTopico e setStarTopico/gravarNotaTopico existentes, mantendo os índices e agregação de conclusão do cronograma. Não atribui a mesma confiança a todo o dia ao avaliar apenas um tópico. Dia 1 mantém sua avaliação de clareza; dia de tópico único mantém setStarHoje. Descanso, Retorno Técnico e Revisões mantêm suas ramificações.

Arquivos alterados: app/js/ui.js, app/css/app.css, app/index.html, app/sw.js, app/tests/hoje-topicos.test.js e este documento. Cache atual bussola-v21; UI/CSS versão 20260909-hoje-topicos. 150 testes passando, incluindo exibição múltipla, escape e índice da avaliação. HTML mantém os 470 bytes NUL preexistentes. Sem deploy ou validação visual com contas reais. Este registro atualiza cache e total de testes dos resumos anteriores.

## Estado consolidado para continuidade (09/09/2026)

Este resumo prevalece sobre descrições históricas abaixo. Quantidade por matéria nas Revisões e quantidade inicial 10 são decisões substituídas. Não reintroduzir esses comportamentos.

### Regras atuais de interface

- Não usar travessão nos textos novos da interface e nas descrições para o usuário.
- Manter Vanilla JS, scripts clássicos, delegação de eventos por ACTIONS/data-action e escape de dados com esc().
- Usar cores do site, com campos de seleção e quantidade brancos. Quantidades começam vazias.
- Menu Exercícios: Matéria → Tópicos → Nível → Quantidade. “Selecione matéria” é selecionável e limpa os tópicos. Neste menu, quantidade é o TOTAL da sessão.
- Revisões e Mini Simulados: campo único “Quantas questões por tópico?”. Aqui a quantidade vale para CADA tópico disponível, inclusive quando vários tópicos pertencem à mesma matéria. Exemplo: 2 questões de Órgãos normativos + 2 de Supervisão = 4 questões. Matéria é contexto, não unidade de distribuição.

### Geração e resultados

Revisões usam os tópicos de buildBlocosRevisao. Mini Simulados usam getSimuladoInfo. O gerador revTopicos deduplica pares matéria/tópico e busca somente questões desses pares. Não completar um tópico com questões de outro. Tópico sem banco é informado e excluído; quantidade acima da disponibilidade de um tópico participante bloqueia o início com aviso. Sessões não repetem IDs de questões.

Ao responder todas, salvar nota de 0 a 10, percentual e desempenho por matéria na conta ativa. O último resultado substitui o anterior do mesmo bloco. Revisões e Mini Simulados têm chaves distintas em STATE.revisoesResultados; Minis também atualizam o percentual e a conclusão em STATE.dias. Sair antes do fim não registra nota parcial; respostas já dadas ficam no histórico. Sessões em andamento não sobrevivem a recarregamento. Marcações manuais de tópicos das revisões continuam manuais.

Mini Simulados ficam disponíveis na data planejada. Registro de resultado externo permanece disponível. A Avaliação Final/Revisão Geral não recebeu o gerador nesta rodada.

Histórico de exercícios pode ser apagado por hoje, últimos 7 dias ou todo período, somente no estado da conta ativa. A exclusão inclui notas automáticas correspondentes e preserva conteúdo e registros externos. Dados antigos sem detalhamento suficiente bloqueiam exclusão parcial, sem apagar nada. Cache por UID e proteções contra troca de conta permanecem obrigatórios.

### Arquivos e publicação

Pasta do projeto: `C:/Users/adria/Downloads/CronosCONCURSOS/Bussola Estudos/Bussola versao 2`.

Para publicar o conjunto das melhorias, incluir:

- `app/index.html`, `app/sw.js`, `app/css/app.css`.
- `app/js/state.js`, `app/js/engine.js`, `app/js/ui.js`.
- `app/tests/account-isolation.test.js`, `app/tests/exercise-menu.test.js`, `app/tests/revision-session.test.js`.
- `_docs/HANDOFF - Guia para a proxima IA.md`.

Cache atual: bussola-v20. UI e engine: versão 20260909-mini-topicos. Os 470 bytes NUL preexistentes em index.html foram preservados; não regravar esse HTML integralmente como texto. Não publicar credenciais privadas de _admin.

### Validação e pendências

Última suíte completa: 147 testes passando. Após o ajuste final de montagem do card, os 17 testes relacionados também passaram. Sintaxe JS verificada. Não houve deploy nem acesso ou exclusão de dados reais. Não presumir que o GitHub ou produção estejam atualizados.

Conferir visualmente desktop/celular e validar com contas reais após publicação. A tentativa anterior de abrir file:// foi bloqueada pela política do navegador integrado. Conferir também sincronização entre dispositivos; falha na consulta inicial à nuvem exige recarregar ou entrar novamente. Misturas históricas anteriores de contas não foram reconstruídas.

Conteúdo: ASSBAN permanece com 26/36 aulas; próxima matéria é LGPD aplicada ao mercado financeiro. C-Pro R segue em espera. Esta rodada tratou somente da ferramenta.


## Mini Simulados com questões por tópico (09/09/2026)

Mini Simulados usam um campo vazio “Quantas questões por tópico?”, a lista de getSimuladoInfo e o mesmo gerador das revisões. Deduplica pares matéria/tópico e IDs, exige quantidade disponível em cada tópico participante e informa tópicos sem banco. Liberação na data planejada; datas fora do cronograma não iniciam. Preservada a Avaliação Final/Revisão Geral.

Runner com título Mini Simulado, nota final e retorno ao menu Simulados. Ao responder todas, salva resultado detalhado por conta em revisoesResultados com prefixo mini: na chave, separado das revisões. Atualiza dias[data].simuladoFeito, simuladoScore e simuladoResultadoId, integrando nota aos indicadores existentes. Registro manual externo mantido. Excluir histórico de exercícios remove também notas automáticas do período e seus indicadores; registros externos e conteúdo são preservados.

Arquivos: app/js/ui.js, app/js/engine.js, app/index.html, app/sw.js, app/tests/revision-session.test.js e este handoff. Cache bussola-v20; UI/engine versão 20260909-mini-topicos. Reutiliza CSS das revisões. 147 testes passando. Sem deploy, acesso a dados reais ou validação visual (bloqueio de file:// no navegador integrado já registrado).

## Revisões: quantidade por tópico (09/09/2026)

Regra corrigida conforme esclarecimento do usuário: campo “Quantas questões por tópico?”. Informar 2 gera duas questões para cada par matéria/tópico listado no bloco, inclusive tópicos da mesma matéria. Pares repetidos são deduplicados. A lista mostra nomes dos tópicos, matéria como contexto e disponibilidade individual. Sem banco: tópico explicitamente fora; banco insuficiente: bloqueio com aviso, sem compensar com outro tópico. Nota final e desempenho por matéria mantidos. Este registro substitui a quantidade por matéria anterior. Alterados ui.js, index.html, sw.js (bussola-v19), revision-session.test.js e este handoff.

## Revisões: quantidade única por matéria (09/09/2026)

Correção solicitada: um único campo vazio, “Quantas questões por matéria?”. Informar 1 gera uma questão para CADA matéria com banco disponível. Mostra disponibilidade de todas as matérias; sem banco fica explicitamente fora. Quantidade superior à disponibilidade de qualquer matéria participante impede gerar e solicita redução, sem distribuir um total entre matérias. Substitui os campos individuais da implementação anterior. Descrição “Como usar” sem travessão; respeitar a preferência do usuário de não usar travessão nos textos. Cache bussola-v18. Alterados ui.js, app.css, index.html, sw.js, revision-session.test.js e este documento.

## Revisões com questões e nota — 09/09/2026

Cada bloco disponível do menu Revisões oferece quantidade por matéria (campos vazios, 0/vazio exclui a matéria). O banco é filtrado exclusivamente pelos pares matéria/tópico de `buildBlocosRevisao`, mantendo o planejamento existente. Informa disponibilidade, bloqueia quantidade inválida/excessiva e revisão futura. Sem banco: aviso e manutenção do fluxo com material externo.

Gerar revisão abre o runner existente de Exercícios com contexto de revisão, questões embaralhadas e IDs únicos. Ao responder todas, apura acertos/total, nota de 0 a 10 e percentual por matéria; grava via save da conta ativa em `STATE.revisoesResultados`. Chave composta por certificação, início do plano e data do bloco. Último resultado substitui o anterior no mesmo bloco e aparece ao reabrir Revisões. Nota ponderada pelo número de questões realmente selecionadas, sem presumir aprovação na certificação.

Sair antes de terminar pede confirmação: tentativas respondidas ficam no histórico, mas não gera nota parcial. Sessão em andamento é mantida apenas em memória; recarregar abandona essa sessão. Ao finalizar, botão volta às Revisões. Marcações manuais dos tópicos não são concluídas automaticamente, pois a seleção pode cobrir só parte deles. Exclusão de histórico de exercícios também remove notas concluídas no período selecionado (ou todas), mantendo a pré-validação dos registros legados.

Arquivos: `app/js/ui.js`, `app/js/engine.js`, `app/css/app.css`, `app/index.html`, `app/sw.js`, `app/tests/revision-session.test.js`, este handoff. Cache `bussola-v17`; scripts/CSS versão `20260909-revisoes`. Publicar também arquivos das rodadas anteriores caso pendentes.

Validação: 141 testes passando; sintaxe JS verificada. Sem deploy ou uso de dados reais. Conferência visual e Firebase real permanecem pendentes; navegador integrado bloqueia o file:// local conforme registro anterior.


## Campos de Exercícios — ajuste de 09/09/2026

“Selecione matéria” volta a ser selecionável e limpa tópicos marcados. Quantidade inicia vazia, também após limpar filtros ou trocar de conta; exige inteiro positivo para iniciar. Campos com fundo branco. Atualizados ui.js, app.css, index.html, sw.js (bussola-v16) e testes de exercise-menu. Este registro substitui o padrão de quantidade 10 e fundo creme dos registros anteriores.

## Ajuste visual do menu Exercícios — 09/09/2026

Ordem atual: Matéria → Tópicos → Nível → Quantidade. Rótulos numerados, verde e creme das variáveis do site, rodapé de início destacado, foco visível e ajustes para celular. Alterados ui.js, app.css, index.html e sw.js (cache bussola-v15). Mantida a lógica de histórico e seleção. Verificação visual no navegador continua pendente pelo bloqueio de file:// registrado abaixo.

## Menu Exercícios — 09/09/2026

Implementado localmente: quantidade de questões (padrão 10), campo inicial “Selecione matéria”, opção Todas as matérias e seleção de tópicos mantida ao trocar de matéria, permitindo combinar assuntos. A sessão embaralha e limita ao número solicitado ou ao banco disponível. Contagem informa ambos os totais.

Gerenciar meu histórico oferece Hoje, Últimos 7 dias (hoje + seis anteriores) e Todo o histórico, com confirmação. Escopo: exercícios da conta ativa, em todas as certificações; conteúdo preservado. Usa save/sincronização existente por UID. Nenhum dado real foi apagado.

Novas respostas guardam agregados diários por questão em `porDia`, além de `exDias`. Registros antigos recebem uma base `legado` ao responder novamente. Se a autoria temporal dos registros antigos impedir uma exclusão parcial precisa, a operação inteira é bloqueada com aviso, sem alteração; exclusão total permanece disponível. Não inventar distribuição diária para dados antigos.

Arquivos desta rodada: `app/js/engine.js`, `app/js/ui.js`, `app/css/app.css`, `app/index.html`, `app/sw.js`, `app/tests/exercise-menu.test.js` e este handoff. Cache `bussola-v14`; engine/ui/CSS com versão `20260909-exercicios`. Os arquivos da correção anterior de isolamento também precisam estar publicados.

Validação: 133 testes passando (7 novos nesta rodada); sintaxe JS verificada. Verificação visual pendente: navegador integrado bloqueou a URL file:// por política de segurança; Chrome indisponível. Sem deploy. Conferir desktop/mobile e fluxo com contas reais após publicação. A exclusão depende da sincronização existente; dispositivo offline exige reconexão/reinicialização conforme registro anterior.


## Correção de isolamento entre contas — 09/09/2026

Correção implementada localmente para o histórico de exercícios que aparecia em outras contas. A causa estava no cache único `cronos_v4` e na mesclagem do estado anterior com documentos remotos incompletos: campos ausentes (`questoes`, `exDias`) permaneciam da conta anterior e podiam ser enviados à próxima conta.

- `app/js/state.js`: cache por UID (`cronos_v4:<uid>`) e visitante (`cronos_v4:guest`), carga a partir de estado limpo, limpeza no logout, invalidação de respostas/timers de sessões anteriores e captura do UID no envio. Importação explícita de backup associa o estado à conta atual.
- Cache legado preservado: só é adotado pela conta cujo `_syncUid` coincide. Legado sem UID permanece acessível no modo visitante; não é atribuído automaticamente a uma conta autenticada.
- Falha na consulta inicial à nuvem permite usar apenas o cache próprio e bloqueia envios até uma nova inicialização bem-sucedida da sincronização (recarregar ou entrar novamente). Não sobrescrever a nuvem sem antes consultá-la.
- `app/js/ui.js`: limpa sessão e filtros de exercícios na troca de conta. `app/index.html`: mantém a tela protegida até carregar o estado da conta; versões de state/ui atualizadas. Os 470 bytes NUL preexistentes do HTML foram preservados.
- `app/sw.js`: cache `bussola-v13`. `app/tests/account-isolation.test.js`: 12 novos testes com contas fictícias, incluindo conta vazia, campos ausentes, cache legado, falha de rede e respostas atrasadas.
- Validação: **126 testes passando**, sintaxe dos scripts verificada. Ainda não houve teste visual com Firebase real nem deploy.

Dados reais não foram acessados ou alterados. Históricos já misturados na nuvem não são separados automaticamente: o estado agregado não permite determinar com segurança a autoria das tentativas. Esta correção previne novas misturas, mas não reconstrói históricos antigos.

Próximo conteúdo permanece LGPD aplicada ao mercado financeiro; produção depende da publicação dos arquivos alterados.


## ASSBAN - Revalidação normativa concluída - 09/09/2026

**Encerrada a pendência de conferência da Circular vigente**: acessado o portal oficial com JavaScript, identificado e baixado o texto vigente compilado v5. Conferidos os dispositivos utilizados; limites e prazos das aulas mantidos. Este registro prevalece sobre os avisos históricos abaixo de consolidação não obtida ou revalidação pendente.

- Relatório completo: `_docs/ASSBAN-PLDFT-LGPD/REVALIDACAO NORMATIVA - 2026-09-09.md`, com fontes, escopo, artigos, alterações e limites da revisão.
- Fontes arquivadas: `_docs/ASSBAN-PLDFT-LGPD/fontes-oficiais-2026-09-09/`, PDFs oficiais da Circular 3.978 v5 e Carta Circular 4.001 v4, extrações, Lei 9.613 em HTML e manifesto SHA256.
- Nove aulas atualizadas para versão 2: `assban-pld-fun-03`, `assban-pld-tip-03`, `assban-pld-kyc-02`, `04`, `07`, `08`, `assban-pld-ope-01`, `02`, `03`. Relação exata de caminhos no relatório.
- Complementos: IN 761/2026 (jurisdições de risco, controles e papel do diretor), IN 732/2026 (emendas e saques), IN 461/2024 (ouro), Lei 15.358/2026 (destinação patrimonial) e previsão do CNPEP. Corrigida delimitação de interoperabilidade do art. 31. Não se presumiu que todas as normas vinculadas alteram a Circular.
- Didática e estrutura mantidas. Fontes ficam na revisão; aulas seguem sem links externos e com cinco seções. Total permanece **26/36**, pesos e ordem preservados.
- Bundle regenerado; script `20260909b`, cache `bussola-v12`. Conversor zero erros/avisos e 114 testes passando. Sem teste visual do app e sem deploy.
- Arquivos de execução alterados nesta rodada: `app/conteudo/conteudo-assban-pldft-lgpd.js`, `app/index.html`, `app/sw.js`. Se a integração anterior ainda não foi publicada, incluir também os catálogos e demais arquivos indicados em seus registros.

Próxima matéria continua **LGPD aplicada ao mercado financeiro**, dez tópicos não iniciados. Programa combinado ASSBAN, questões e análise estratégica permanecem pendentes; não confundir essas tarefas com a revalidação agora concluída. C-Pro R segue em espera.

## ASSBAN - Operações e controles concluídos localmente - 09/09/2026

Concluídos os seis tópicos de **Operações, comunicações e efetividade dos controles**, ids `assban-pld-ope-01` a `assban-pld-ope-06`. Total atual: **26/36 aulas**, quatro primeiras matérias completas. Contagens e indicações de próxima matéria abaixo são históricas.

- Textos: `_conteudo/assban-pldft-lgpd/operacoes-comunicacoes-e-efetividade-dos-controles/`, arquivos 01 a 06. Revisão: `_docs/ASSBAN-PLDFT-LGPD/REVISAO - OPERACOES.md`.
- Conteúdos: registros, espécie e provisionamento, monitoramento e dossiê, comunicações, guarda e efetividade. Preservados padrão CPA, cinco seções, cartões, didática, extensão livre, pesos iguais e ordem estabelecida.
- Estratégia didática: conceitos antes das regras, tabelas para comparar limites e marcos, casos resolvidos e distinção entre obrigação normativa e exemplo de organização. Atenção a R$ 2.000 versus R$ 50.000, dois prazos de 45 dias, comunicação objetiva versus suspeita, guarda de cinco/dez anos e calendário março/junho.
- Base conferida: Circular enviada, arts. 28-55 e 61-67. Mantida a pendência de revalidação da consolidação oficial antes do deploy externo; não afirmar comparação integral com norma atualizada nesta sessão.
- Integração: `app/conteudo/conteudo-assban-pldft-lgpd.js` regenerado; `app/index.html` referencia `20260909`; `app/sw.js` usa `bussola-v11`; descrições de `app/editais.js` e `dados-site.js` indicam vinte e seis aulas. Bytes preexistentes do HTML preservados.
- Validação: conversor zero erros/avisos, 114 testes passando, sintaxe válida, engine recuperando 26 aulas completas e CPA preservada. Sem teste visual de navegador e sem deploy.
- Para publicar após revisão: bundle ASSBAN, `app/index.html`, `app/sw.js`, `app/editais.js` e `dados-site.js`. Fontes e fichas permanecem no acervo local.

Próxima matéria: **LGPD aplicada ao mercado financeiro**, dez tópicos, ainda não iniciada. Aguardar continuidade do dono. Questões, análise estratégica e confirmação do programa combinado vigente permanecem pendentes. C-Pro R continua em espera.

## ASSBAN - Política e conhecimento concluídos localmente - 08/09/2026

Concluídos os oito tópicos de **Política de prevenção e conhecimento das partes**, ids `assban-pld-kyc-01` a `assban-pld-kyc-08`. Total atual: **20/36 aulas**, três primeiras matérias completas. As contagens menores nas seções seguintes são históricas.

- Markdown: `_conteudo/assban-pldft-lgpd/politica-de-prevencao-e-conhecimento-das-partes/`, arquivos 01 a 08. Fontes e revisão: `_docs/ASSBAN-PLDFT-LGPD/REVISAO - POLITICA E CONHECIMENTO.md`.
- Preservados didática, casos originais, cinco seções, cartões, extensão livre, pesos iguais e ordem. Exceções de trinta dias, art. 23-A, beneficiário final e PEP explicadas com condições.
- Base: Circular enviada, com as redações posteriores indicadas. A pesquisa oficial confirmou referências parciais, mas não permitiu baixar e comparar integralmente um novo PDF consolidado. Revalidar a consolidação antes do deploy externo; não afirmar revisão integral independente de vigência. A lista de normas vinculadas inclui citações, não apenas alterações.
- Bundle `app/conteudo/conteudo-assban-pldft-lgpd.js` regenerado; `app/index.html` referencia versão `20260908c`; `app/sw.js` usa `bussola-v10`. Descrições em `app/editais.js` e `dados-site.js` indicam vinte aulas.
- Validação: conversor zero erros/avisos, sintaxe válida, 114 testes passando, vinte aulas recuperadas pelo engine com cinco seções e CPA preservada. Aritmética do exemplo societário conferida com frações exatas. Não houve teste visual no navegador.
- Sem deploy. Para publicação: bundle ASSBAN, `app/index.html`, `app/sw.js`, `app/editais.js` e `dados-site.js`. Fontes e fichas ficam no acervo local.

Próxima matéria: **Operações, comunicações e efetividade dos controles**, seis tópicos, não iniciada. LGPD, questões, análise estratégica e confirmação do programa combinado vigente permanecem pendentes. C-Pro R segue aguardando avaliação.

## ASSBAN - Tipologias concluídas localmente - 08/09/2026

Concluídos os seis tópicos da segunda matéria, **Tipologias, práticas nocivas e sinais de alerta**, ids `assban-pld-tip-01` a `assban-pld-tip-06`, na ordem planejada. O acervo ASSBAN tem agora **12/36 textos**, com Fundamentos e Tipologias completos. Esta atualização substitui a contagem de seis aulas registrada abaixo; os registros anteriores são históricos.

- Fontes: `_conteudo/assban-pldft-lgpd/tipologias-praticas-nocivas-e-sinais-de-alerta/`, arquivos 01 a 06. Revisão: `_docs/ASSBAN-PLDFT-LGPD/REVISAO - TIPOLOGIAS.md`.
- Didática priorizada: conceitos antes da aplicação, casos originais, exemplos legítimos versus inconsistentes, decisões explicadas, pegadinhas e cartões. Extensão livre autorizada preservada. Sinais de alerta não são tratados como prova, nem são fornecidas instruções para contornar controles.
- Bundle regenerado: `app/conteudo/conteudo-assban-pldft-lgpd.js`. `app/index.html`: versão do script `20260908b`, preservando os demais bytes. `app/sw.js`: cache `bussola-v9`.
- `app/editais.js` e `dados-site.js`: descrições indicam doze aulas disponíveis. Pesos iguais e ordem do catálogo preservados.
- Validações: zero erros/avisos no conversor, sintaxe do bundle válida, 114 testes passando. O engine recuperou as 12 aulas com cinco seções e preservou o acervo CPA. Não foi feito teste visual de navegador nesta rodada.
- Sem deploy. Arquivos para publicação: `app/conteudo/conteudo-assban-pldft-lgpd.js`, `app/index.html`, `app/sw.js`, `app/editais.js` e `dados-site.js`. Fontes e fichas continuam locais.

Próxima matéria: **Política de prevenção e conhecimento das partes**, oito tópicos, ainda não iniciada. Questões, análise estratégica e confirmação do programa combinado vigente permanecem pendentes. C-Pro R segue aguardando avaliação.

## ASSBAN - Fundamentos concluídos localmente - 08/09/2026

Atualização mais recente desta frente: foram escritos os seis tópicos da matéria **Fundamentos de PLD/FTP e legislação**, na ordem do catálogo, ids `assban-pld-fun-01` a `assban-pld-fun-06`. O dono autorizou extensão livre, sem mínimo ou máximo de palavras; preservar cinco seções, front matter e cartão de até dez linhas. Pesos iguais de 20 e ordem do planejamento foram confirmados pelo dono.

- Fontes Markdown: `_conteudo/assban-pldft-lgpd/fundamentos-de-pld-ftp-e-legislacao/`, arquivos 01 a 06.
- Revisão e fontes oficiais: `_docs/ASSBAN-PLDFT-LGPD/REVISAO - FUNDAMENTOS.md`.
- Bundle gerado: `app/conteudo/conteudo-assban-pldft-lgpd.js`, com 6/36 tópicos e 6/6 da primeira matéria.
- `outputs/conteudo_para_js.py`: exceção de extensão apenas para `pldftLgpdAssban`; demais verificações e certificações preservadas.
- `app/index.html`: script clássico adicionado após conteúdo CPA. `app/sw.js`: bundle no SHELL e cache `bussola-v8`.
- `app/editais.js` e `dados-site.js`: descrição atualizada para informar seis aulas de Fundamentos disponíveis, restante em preparação.
- Validação: conversor com zero erros e avisos, 114 testes passando e consulta pelo engine recuperando as seis aulas com todas as seções; conteúdo CPA preservado. Não realizado teste visual de navegador nesta rodada. A edição do HTML preservou os bytes preexistentes, inclusive NULs já existentes; não houve limpeza geral desse arquivo.
- Nenhum deploy realizado. Para publicar esta rodada: `app/conteudo/conteudo-assban-pldft-lgpd.js`, `app/index.html`, `app/sw.js`, `app/editais.js`, `dados-site.js`. Markdown, conversor e fichas ficam no acervo local conforme o fluxo da casa.

Próxima matéria: **Tipologias, práticas nocivas e sinais de alerta**. Não iniciada; o dono pediu aviso ao concluir Fundamentos. Questões e análise estratégica seguem pendentes. C-Pro R permanece aguardando avaliação.

## Atualização de integração - ASSBAN PLDFT + LGPD - 08/09/2026

Por solicitação explícita do dono, a microcertificação foi incluída nos arquivos locais do sistema. C-Pro R permanece aguardando avaliação. Esta atualização prevalece sobre o estado anterior de somente planejamento da ASSBAN.

- Chave: `pldftLgpdAssban`; nome: `PLDFT + LGPD — Microcertificação ASSBAN`; grupo existente `Certificações`, tipo `microcertificacao`.
- Catálogo: 36 tópicos em cinco matérias, conforme `_docs/ASSBAN-PLDFT-LGPD/PLANEJAMENTO DE TOPICOS.md` (6/6/8/6/10).
- Pesos oficiais não confirmados: `pesoTipo: "planejamento"`, com prioridade igual de 20 por matéria para o motor. Não interpretar como frequência de questões. UI distingue prioridade de estudo e não estima questões na tela de matérias para esse tipo.
- `app/editais.js`: nova certificação disponível pelo seletor genérico e para o cronograma.
- `dados-site.js`: nova entrada no catálogo da página inicial com os mesmos tópicos e informação sobre aulas ainda não publicadas.
- `app/js/ui.js`: rótulos de prioridade e aviso de escopo na tela de matérias; nomes escapados nessa renderização. Mantidos scripts clássicos e delegação de eventos.
- `app/sw.js`: cache atualizado de `bussola-v6` para `bussola-v7`.
- Nenhuma aula, questão ou PDF de análise foi vinculado. A análise usa o aviso existente de ainda não publicada; tópicos sem texto permanecem sem botão de leitura. Não usar a cartilha interna do BB como análise estratégica.
- Validação: 114 testes do app passaram; sintaxe dos scripts validada; execução dos catálogos como scripts clássicos confirmou igualdade dos tópicos entre home e app. Um cronograma de teste de 08/09 a 08/12/2026 agendou todos os 36 tópicos. Não foi realizado teste visual no navegador nesta rodada.
- Não houve deploy, alteração de Firebase ou migração de dados de alunos. Para publicar, enviar `app/editais.js`, `dados-site.js`, `app/js/ui.js` e `app/sw.js` nas respectivas pastas do site. Os documentos em `_docs` são para acompanhamento local.

Pendências: confirmar programa combinado vigente e parâmetros da prova, revalidar fontes normativas, redigir pilotos/aulas/questões e preparar análise estratégica própria. A integração do catálogo está concluída localmente; a produção do acervo é uma etapa separada.

**Guia de Handoff Técnico — para a próxima IA que trabalhar neste projeto**

Atualizado em 05/09/2026 · Estado: produção estável, 114 testes automatizados passando · Produto SÓ de certificações

## 0. PRIORIDADES ABERTAS (definidas pelo dono em 31/08/2026)

Leia esta seção antes de qualquer outra coisa. É a fila de trabalho definida pelo dono,
em ordem de urgência.

### P6. AUDITORIA DE COBERTURA DAS QUESTÕES (aberto em 07/09/2026)

Os 94 tópicos que já têm questões foram escritos sob a regra antiga do briefing,
**"5 questões, salvo pedido diferente"**. O número virou o alvo, e o resultado é que
tópico denso ficou com pontos do edital sem nenhuma questão, enquanto outro ponto
aparecia duas vezes em formatos diferentes.

**Como o defeito foi descoberto.** Em 07/09/2026, ao conferir o lote dos tópicos 21 e
22 do SFN, o tópico 22 tinha duas das cinco questões cobrando classificação de
investidor e **zero** cobrando dois itens que a própria seção "O que cai na prova" do
texto lista: a dispensa de suitability para o investidor profissional e a Lei
13.874/2019 inteira. O tópico 21 tinha três buracos: o REF e sua periodicidade
semestral, a evolução dos acordos de Basileia, e a distinção micro contra
macroprudencial. Os dois tópicos foram corrigidos na hora, e passaram a ter **8 e 9
questões**. Os outros 92 nunca foram conferidos assim.

**A regra já mudou no briefing** (`_conteudo/PROMPT - Criar questoes CPA.md`, seção
"Volume e mistura por tópico"): o piso é 5, não existe teto, e o alvo é cobrir cada
item de "O que cai na prova". Ou seja, os lotes novos já nascem certos. O que falta é
o passivo dos 92 tópicos anteriores.

**Como auditar, sem escrever nada ainda.** O trabalho é comparativo e barato de
começar. Para cada tópico:

1. Abrir o texto publicado em `_conteudo/cpa/<materia>/<nn>-<slug>.md` e listar os
   itens da seção **"O que cai na prova"**, mais as **Pegadinhas** e o **Cartão de
   revisão**.
2. Abrir o YAML correspondente em `_conteudo/cpa/questoes/<materia>/` e marcar qual
   item cada questão cobra.
3. Anotar os itens sem questão (buraco) e as questões que repetem o mesmo ponto
   (redundância, que é onde se abre espaço sem inchar o arquivo).

**Entregue a lista antes de escrever qualquer questão.** O dono decide onde vale
investir: matéria de peso maior primeiro, e tópico com mais buracos primeiro. Produtos
tem 40% da prova e 43 tópicos, então provavelmente é por lá.

**Cuidados ao preencher os buracos.** Questão nova entra com id seguinte na sequência
(`q6`, `q7`...), sem renumerar as existentes, porque o app guarda o histórico de
respostas por id e renumerar joga fora o que o aluno já respondeu. Vale a mesma
conferência de sempre: `conferir_lote.py` sem apontamentos, comentário em três
parágrafos separados por linha em branco, abertura no formato da casa
(`A alternativa X está correta.`) e proporção de dificuldade de 25%, 50% e 25%.

**Ordem entre P5 e P6.** São frentes independentes e se somam bem em Produtos: o
retrabalho do P5 já abre cada um dos 43 arquivos para redistribuir gabarito e
equilibrar comprimento, e é o momento barato de também mapear a cobertura. Fazer as
duas passadas separadas é trabalho dobrado.

### P5. RETRABALHO DAS 215 QUESTÕES DE PRODUTOS (aberto em 05/09/2026)

Produtos do Mercado Financeiro está no ar com **215 questões** que nunca passaram pela
conferência de previsibilidade. Rode e veja:

```
python3 outputs/conferir_lote.py _conteudo/cpa/questoes/produtos-do-mercado-financeiro/*.yaml
```

O retrato hoje: o gabarito está **42% na letra `a` e 38% na `b`, com só 5,6% na `d`**, e
**135 das 215 questões** entregam a resposta pelo tamanho, porque a alternativa correta
carrega a explicação inteira e fica muito mais longa que as três erradas.

**Por que isso importa mais do que parece.** São duas colas que o aluno aprende sozinho
na primeira sessão de exercícios: chuta na `a`, ou marca a mais comprida. A partir daí
ele acerta sem ler o conteúdo, o painel de exercícios mostra um percentual alto que não
corresponde a aprendizado nenhum, e o dado vai contaminar o nível de confiança quando
essa ligação for feita. Não é questão de estética.

**Como corrigir, e por que é barato.** Os dois defeitos se medem por script e se
consertam mecanicamente:

1. **Redistribuir o gabarito.** Trocar a alternativa correta de lugar é uma transposição:
   troque o texto das duas letras, mova a linha de `feedback` correspondente e reescreva
   as letras citadas no `comentario`. Existe script pronto para isso em
   `outputs/`, e a regra que evita o erro que já cometi: o comentário cita as erradas
   **uma a uma** em alguns lotes ("A B erra ao..."), então a troca precisa mapear
   **todas** as menções de letra, e não só a frase "A resposta é a A".
2. **Equilibrar o comprimento.** A alternativa certa não pode ser a mais longa nem a
   mais curta. O detalhe explicativo sai da alternativa e vai para o `comentario`, que é
   onde ele serve ao aluno. Onde encurtar deixaria a afirmação vaga, alongue as
   distratoras com detalhe plausível e falso, que é o que uma boa distratora faz.

Meta: nenhuma letra acima de 30% do gabarito, e `conferir_lote.py` sem apontamentos.

**Como já foi feito nas outras matérias.** Relacionamento com o Cliente (145 questões)
passou por isso em 05/09/2026 e ficou em 25,5% / 24,8% / 24,8% / 24,8%, com zero
questões entregando a resposta pelo tamanho. O SFN já nasce conferido. Produtos é o
único acervo que ficou para trás, porque foi escrito antes de o defeito ser percebido.

**Pendência menor, na mesma frente.** O ChatGPT passou a fechar cada comentário com uma
linha **"Regra de bolso:"**, resumindo a distinção em uma frase memorizável. É bom, e
foi mantido nas questões do SFN. As 360 questões anteriores não têm essa linha. Se a
"Regra de bolso" for adotada como padrão da casa, vale acrescentá-la no retrabalho de
Produtos, senão fica parecendo defeito de padronização em vez de recurso.

**Situação em 31/08/2026:** P3 (linkar o Conteúdo programático aos textos) está **FEITO**,
e a Análise do Edital da CPA está **publicada e vinculada** (ver Frente 3 na seção 5).
Continuam abertos: **P1** (estratégia de corte quando o prazo não cobre o edital),
**P2 Fase 2 em diante** (o menu de Exercícios já está no ar com 15 questões piloto; falta
escrever o banco e ligar a nota à confiança) e **P4** (adiantar conteúdo em dia de
descanso, baixa). Depois entraram **P5** (retrabalho de previsibilidade nas 215 questões
de Produtos, 05/09/2026) e **P6** (auditoria de cobertura dos 92 tópicos escritos sob a
regra antiga dos 5, 07/09/2026).
Fora da fila numerada, a pendência mais visível para o aluno é a **Análise do Edital de
CA-600 e FBB100**, que ainda não existe.

### FEITO em 31/08/2026 (mesma sessão): base de 30 min, aviso de cobertura e bug do sábado

Três correções já entraram e estão com os **79 testes passando**. Backups em
`app/js/engine.js.bak-3108` e `app/js/ui.js.bak-3108`.

**REVISTO no mesmo dia: a base é 45 min, não 30.** O dono testou e concluiu que 30 min não
cobre ler o conteúdo mais revisar e fazer exercício, e que **4 tópicos em 2h ficou denso
demais**. `MIN_POR_TOPICO_H` passou de `0.5` para **`0.75`**. Densidades resultantes:
**1h = 1 tópico · 2h = 2 · 3h = 4 · 4h = 5**. A densidade efetiva é sempre
`min(capacidade por hora, necessário para cobrir)`, então em prazo folgado ela fica abaixo da
capacidade de propósito, para não empilhar tópico sem necessidade.

**BUG DO AVISO, corrigido.** O dono criou um plano de **30 dias com 1h/dia** e não recebeu
alerta nenhum. Causa: `getAvisoCoberturaHtml()` tinha sido injetado em **dois dos três ramos**
de `buildCoachHtml`, e o terceiro (o ramo de diagnóstico por regras, sem redação de IA) ficou
sem. Agora o aviso é emitido **uma vez, antes da ramificação**, valendo para os três.

Além disso, o alerta passou a existir **no ato de salvar o cronograma**, que é onde o aluno
decide o prazo: se o edital não couber, o toast de sucesso é substituído por um que diz quantos
tópicos cabem e quantas horas por dia seriam necessárias, remetendo ao Coach para as saídas.
Antes o único aviso vivia no painel do Coach, que o aluno pode nem abrir.

**POP-UP ANTES DE DISTRIBUIR (31/08/2026).** O dono avaliou que o aviso ficava discreto e,
pior, chegava **depois** de o cronograma já estar definido, quando não havia mais o que decidir.
O fluxo mudou: `iniciarBússola(forcar)` agora **mede a cobertura com os valores do formulário
antes de gravar qualquer coisa**. Não cobrindo, ele restaura o STATE anterior, fecha o modal de
configuração e abre o `#coberturaModal`, com duas saídas: **"↩ Ajustar o plano"**
(`ajustarCronograma`, reabre a configuração) e **"Continuar assim mesmo"**
(`confirmarCronogramaParcial`, chama `iniciarBússola(true)` e pula a checagem).

Detalhe de implementação a preservar: a medição aplica os valores do formulário ao STATE
**provisoriamente**, calcula, e desfaz com `Object.assign(STATE,_prev)`. `calcCoberturaEdital()`
lê o STATE global, então não há como medir sem essa aplicação temporária. Se for refatorar,
o caminho limpo é a função aceitar um objeto de parâmetros em vez de ler o global.
`getAvisoCoberturaHtml(cPronta)` passou a aceitar a cobertura já calculada, para o modal não
recalcular.

**DENSIDADE PASSOU A SER A CAPACIDADE, NÃO O MÍNIMO (31/08/2026).** `_densityFor` retornava
`Math.min(capacidadeDaHora, necessarioParaCaber)`, o que **espichava o conteúdo até a data da
prova**. O dono quer o oposto: usar a capacidade cheia da hora, **terminar o conteúdo o quanto
antes** e sobrar tempo para revisitar. Agora ela retorna `maxByHoras`.

Consequência a conhecer: coberto todo o edital, `getTopicosDiaBase` **dá a volta na lista**
(por causa do `% todos.length`) e inicia uma **segunda passagem** pelo conteúdo. Isso foi
mantido de propósito, porque é literalmente o "voltar a algum conteúdo" que o dono pediu. Se
algum dia se preferir liberar o dia em vez de repetir, o ponto de mudança é o `startIdx`.

Efeito medido no CPA (108 tópicos, início 01/09, domingo livre):

| Cenário | Densidade | Conteúdo termina | Revisão Geral | Folga |
| :--- | :--- | :--- | :--- | :--- |
| 3h/dia, prova 01/12 | 4 | **14/10** | 24/11 | ~6 semanas |
| 4h/dia, prova 01/12 | 5 | **06/10** | 24/11 | ~7 semanas |
| 2h/dia, prova 01/03 | 2 | **26/11** | 22/02 | ~3 meses |

**BUG CORRIGIDO no mesmo dia: dia de treino nascia marcado como concluído.** O card da reta
final usava `feito = est.percepcao || est.treinoFeito`. Como `percepcao` é a nota de confiança
de um dia de **conteúdo**, dias que tinham sido de matéria num plano anterior traziam a nota
antiga e o card já aparecia "✅ Concluído · Treino registrado" sem o aluno ter clicado. Agora
só `treinoFeito` marca esse card.

**SUGESTÃO DE ANTECIPAR A PROVA (31/08/2026).** Com a densidade na capacidade da hora, quem
estuda bastante fecha o edital muito antes da Revisão Geral. O dono decidiu que isso **não é
problema, é oportunidade**: o sistema passa a sugerir marcar a prova mais cedo.

`calcAntecipacao()` no `engine.js` devolve
`{fimConteudo, provaMinima, diasFolga, semanasFolga, podeAntecipar}`. Ela caminha o calendário
**uma vez** contando dias de conteúdo até fechar `ceil(total/densidade)`, e daí calcula
`provaMinima = último dia de conteúdo + 8`, respeitando o encadeamento (Revisão Geral em +7,
prova em +8). Devolve `null` quando não há prova definida ou quando o edital não cabe no prazo.

`getSugestaoAntecipacaoHtml()` no `ui.js` exibe a sugestão no painel do Coach, sob duas
condições:

1. **`podeAntecipar`**, isto é, folga de **pelo menos 14 dias**. Abaixo disso a sugestão vira
   ruído e não aparece.
2. **A data da prova é escolhida pelo aluno.** `_provaEhEscolhidaPeloAluno()` checa se o edital
   tem `dataProva`; tendo, a data vem da banca e sugerir antecipação seria absurdo. Hoje o
   produto é só de certificações, mas a checagem protege o caso de voltar a haver concurso.

O texto oferece as duas leituras, sem empurrar: a prova poderia ser em tal data, ou o tempo
extra vira uma segunda passagem pelo edital, que também é bom.

Comportamento medido (início 31/08/2026, CPA, 108 tópicos):

| Cenário | Conteúdo termina | Prova poderia ser | Folga | Sugere? |
| :--- | :--- | :--- | :--- | :--- |
| 2h30min, prova 21/11 | 09/11 | 17/11 | 4 dias | **não** (pouca folga) |
| 4h, prova 21/11 | 12/10 | 20/10 | 32 dias | sim |
| 6h, prova 21/11 | 24/09 | 02/10 | 50 dias | sim |
| 2h, prova 01/03 | 25/11 | 03/12 | 88 dias | sim |
| plano que não cobre | — | — | — | **não** |

**BUG: CONTEÚDO NOVO APARECIA NA RETA FINAL (achado e corrigido em 31/08/2026).** O dono
mostrou a semana entre a Revisão Geral (14/11) e a prova (21/11) com **matéria nova nos dias
17, 18, 19 e 20**, apesar de o motor já estar cortando corretamente.

Causa: `renderDiaNormal` em `ui.js` tinha um fallback legado.

```
const tops=(...)?getTopicosDiaBase(key):[getTopicoDia(idx)];
const{mat,top,peso}=tops[0]||getTopicoDia(idx);      // <= aqui
```

`getTopicosDiaBase` passou a devolver `[]` depois do limite, e o `|| getTopicoDia(idx)` entrava
em ação. **`getTopicoDia(idx)` é função legada que escolhe tópico por índice
(`((semanaOffset*5+idx)*3+7) % todos.length`) e ignora completamente as datas.** Ou seja: o
motor cortava e a camada de renderização ressuscitava.

Correção: quando não há tópico base **e** o dia é reta final, `renderDiaNormal` retorna
`renderDiaRetaFinal(...)`, um card novo de **treino e exercícios**, com botão
`marcarTreinoFeito` que grava `STATE.dias[key].treinoFeito`. Os demais tipos de dia
(simulado, Retorno Técnico, Exercícios, Revisão Geral, prova) continuam sendo despachados
antes de `renderDiaNormal`, então nada mais mudou.

**Atenção para quem mexer:** `getTopicoDia(idx)` continua existindo e é usada como fallback em
outro ponto do mesmo arquivo. Ela é uma bomba-relógio, porque devolve conteúdo para qualquer
índice, sem consultar o calendário. Ao encontrar comportamento estranho de "matéria que aparece
onde não devia", suspeite dela primeiro.

Validado com a configuração real do dono (início 31/08/2026, prova 21/11/2026, 2h30min,
descanso sábado e domingo): limite de conteúdo em 14/11, dias 17 a 20 com **zero tópicos** e
`isRetaFinalDay=true`, cobertura 108/108 com densidade 3.

**MARCOS DO PLANO AGORA APARECEM NA TELA.** O dono não encontrava a data da Revisão Geral: ela
existia no motor (`isRevisaoGeralDay`, `getLimiteConteudo`) e era usada para renderizar o card
do dia, mas **nunca era escrita como data em lugar nenhum**. Criei `getMarcosHtml()` em
`ui.js`, exibido no painel do Coach acima do aviso de cobertura:

> 📌 Marcos do plano: conteúdo até 12/11 · Revisão Geral em 13/11 · prova em 20/11. Entre a
> Revisão Geral e a prova só há exercícios e treino.

O aviso de cobertura também passou a citar a data da Revisão Geral em vez de dizer só "7 dias
antes da prova".

**Confirmado o encadeamento pedido:** último dia de conteúdo, revisão ou simulado em
**prova − 8**; **Revisão Geral em prova − 7**; semana final só de treino. O guard é
`if(_lim && dateKey >= fmt(_lim)) return []` em `getTopicosDiaBase`, com `_lim = prova − 7`.

**TEXTO DO AVISO ENCURTADO E SEM TRAVESSÃO (31/08/2026).** O dono validou o pop-up em uso e
apontou dois problemas: texto longo demais para um alerta de decisão, e **uso de travessão, que
é proibido no sistema**. `getAvisoCoberturaHtml` foi reescrita: perdeu cerca de metade do
tamanho, trocou travessão por dois-pontos e ponto, e ganhou `fmtHoras()`, que formata 3.75 como
**3h45min** em vez de "3,75h". Ela aceita `semTitulo=true`, usado pelo pop-up, que já tem
título próprio (antes o título aparecia duplicado).

**INVENTÁRIO DE TRAVESSÕES, em `_docs/travessoes-a-limpar.txt`.** A regra vale para o sistema
inteiro, e há **90 ocorrências em texto visível** ao aluno (`ui.js`, `engine.js`,
`index.html`). Corrigi as que eu havia introduzido mais quatro que encontrei no caminho; o
restante ficou listado no arquivo.

**NÃO FAÇA BUSCA E SUBSTITUI CEGO NESSE ARQUIVO.** Dois motivos:

1. Cada caso pede pontuação diferente (vírgula, dois-pontos ou ponto). Substituição automática
   produz português ruim.
2. **Há travessão com função de código.** `ui.js:833` monta `STATE.concurso` como
   `"${nome} — ${cargo}"` e `ui.js:1213` faz `STATE.concurso.split("—")`. Trocar o separador em
   um lugar e não no outro quebra a exibição do concurso. Se for trocar, troque os dois juntos,
   e considere que planos já salvos no navegador do aluno contêm o travessão antigo, então o
   split precisa aceitar as duas formas durante a transição.

**CAMPO DE HORAS VIROU SELECT.** Era `<input type="number">`; virou `<select>` com 11 opções de
**1h a 6h em passos de 30 min** (1h, 1h30min, 2h, ...). `iniciarBússola` passou de `parseInt`
para **`parseFloat`**, sem o que os meios valores seriam truncados. Capacidades resultantes com
os 45 min por tópico:

| Horas | Tópicos/dia | | Horas | Tópicos/dia |
| :--- | :--- | :--- | :--- | :--- |
| 1h | 1 | | 3h30min | 4 |
| 1h30min | 2 | | 4h | 5 |
| 2h | 2 | | 4h30min | 6 |
| 2h30min | 3 | | 5h | 6 |
| 3h | 4 | | 6h | 8 |

**Números com a base de 45 min (CPA, 108 tópicos, domingo livre):**

| Cenário | Densidade | Cobertura | Precisaria de |
| :--- | :--- | :--- | :--- |
| **30 dias, 1h/dia** (caso relatado) | 1 | **14/108** | 6h/dia |
| 30 dias, 2h/dia | 2 | 28/108 | 6h/dia |
| 2 meses, 2h/dia | 2 | 68/108 | 3h/dia |
| 3 meses, 2h/dia | 2 | 102/108 | 2,25h/dia |
| 3 meses, 3h/dia | 3 | **108/108** | — |
| 4,5 meses, 2h/dia | 2 | **108/108** | — |

**Leitura comercial atualizada:** com 45 min por tópico, o CPA fecha com **3 meses a 3h/dia**
ou **4 meses e meio a 2h/dia**. O intensivo curto exige carga alta: 30 dias pedem 6h/dia.

**1. (histórico) Densidade em 30 min por tópico.** Decisão do dono: cada conteúdo se estuda em meia
hora, logo 2h/dia = 4 tópicos. Em `engine.js`, `_densityFor` passou de
`Math.min(3, floor(horasDia/1.5))` para `floor(horasDia / MIN_POR_TOPICO_H)`, com
`MIN_POR_TOPICO_H = 0.5` como **fonte única**. O teto arbitrário de 3 saiu: quem limita é a
hora disponível, não um número mágico. Efeito medido no CPA com 2h/dia: a densidade subiu de
**2 para 4**.

**2. `calcCoberturaEdital()`, nova em `engine.js`.** Responde a pergunta que o aluno não tinha
como fazer: com esta data de prova e estas horas por dia, eu termino o edital? Devolve
`{cobre, total, agendados, faltam, diasConteudo, density, densNecessaria, horasNecessarias,
horasAtuais, materias[]}`, sendo `materias[]` exatamente **quais** ficam de fora e quanto de
cada uma. Exportada no `module.exports`.

**3. Aviso na interface.** `getAvisoCoberturaHtml()` em `ui.js`, injetado nos dois ramos do
painel do coach. Quando o cronograma não cobre, mostra o percentual coberto, a lista das
matérias que ficam de fora e quantas horas por dia seriam necessárias.

**Números medidos no CPA (108 tópicos, início 01/09, domingo livre):**

| Cenário | Dias de conteúdo | Densidade | Cobertura |
| :--- | :--- | :--- | :--- |
| 3 semanas, 2h/dia | 13 | 4 | 52/108 — faltam 56 |
| 3 semanas, 3h/dia | 13 | 6 | 78/108 — faltam 30 |
| 3 semanas, 4h/dia | 13 | 8 | 104/108 — faltam 4 |
| 2 meses, 2h/dia | 38 | 3 | **108/108** |
| 3 meses, 2h/dia | 55 | 2 | **108/108** |

**ATUALIZADO na mesma sessão — o conteúdo agora termina na Revisão Geral.** Decisão do dono:
todo o conteúdo tem de acabar no **último simulado geral, 7 dias antes da prova**, e a semana
entre a Revisão Geral e a prova fica **só para exercícios e treino**. Isso virou
`getLimiteConteudo()` em `engine.js` (prova − 7), usada como fonte única pelo agendamento
(`getTopicosDiaBase`), pela densidade (`_densityFor`) e pela cobertura
(`calcCoberturaEdital`). Antes, os três contavam até a data da prova, o que inflava os dias
disponíveis e **contribuía para o truncamento**: a conta supunha dias que a interface já não
usava para conteúdo novo.

**Números refeitos com o limite correto (CPA, 108 tópicos, início 01/09, domingo livre):**

| Cenário | Fim do conteúdo | Dias | Densidade | Cobertura |
| :--- | :--- | :--- | :--- | :--- |
| 3 semanas, 2h/dia | 15/09 | 9 | 4 | 36/108 |
| 3 semanas, 4h/dia | 15/09 | 9 | 8 | 72/108 |
| 3 semanas, 6h/dia | 15/09 | 9 | 12 | **108/108** |
| 2 meses, 2h/dia | 25/10 | 34 | 4 | **108/108** |
| 3 meses, 2h/dia | 24/11 | 51 | 3 | **108/108** |

**Achado sobre "reduzir dias de descanso".** No ciclo 5+1+1 os dias livres ficam **fora** da
contagem do ciclo, então tirá-los nem sempre gera dias de conteúdo: em prazo curto o ganho
costuma ser **zero**. Por isso `calcCoberturaEdital` calcula o ganho real
(`sugestoes.diasLivres.ganho`) e a UI **só mostra essa saída quando ela de fato ajuda**. Não
sugira reduzir descanso sem medir.

**Conclusão para o discurso comercial:** com o conteúdo terminando na Revisão Geral, o CPA em
3 semanas exige **6h/dia**. Com 2h/dia o intensivo de 3 semanas cobre apenas um terço do
edital, e agora o sistema **diz isso** em vez de calar. O intensivo honesto com 2h/dia é de
**2 meses**, que fecha com folga.

**4. Aviso com saídas calculadas, não genéricas.** `getAvisoCoberturaHtml` agora lista as três
saídas com número: quantas horas por dia resolvem mantendo a data, quanto se ganha reduzindo o
descanso (omitida quando o ganho é zero) e quantas semanas a mais de prazo seriam necessárias.
Os cálculos vêm de `calcCoberturaEdital().sugestoes`.

**5. Campo de data de início agora nasce em branco.** Em `ui.js` havia dois pontos que
pré-preenchiam com a data de hoje (`fmt(hoje)` e `STATE.inicio||_hojeIso`). O dono observou que
data pré-preenchida induz o aluno a aceitar um início que não é o dele, e datas antigas
confundem. Os dois passaram a `""`.

**6. Seção de backup removida.** Os dados agora ficam na nuvem, então saiu de `index.html` o
bloco `backup-section` (exportar/importar JSON) e a nota "Dados salvos apenas no seu navegador",
substituída por "Seus dados são salvos na nuvem e sincronizados entre os seus aparelhos". As
ações `exportarDados` e `abrirImportar` saíram do mapa `ACTIONS` e o `data-change`
`importarDados` saiu do delegador. As funções `exportarDados`/`importarDados` continuam no
código, sem uso; se for limpá-las, rode `ui.test.js`, que checa órfãos.

**7. Bug do sábado de recuperação, corrigido.** Sintoma: ao jogar a matéria não estudada para
o Sábado Técnico, ela aparecia mas não dava para avaliar nem alimentava o sistema. Eram dois
defeitos somados em `ui.js`:

- `redistribuirTopicos` gravava `STATE.sabadoRecuperacao` como **string**
  (`"Matéria: Tópico"`), perdendo o vínculo com o dia de origem. Sem `key` e `topIdx` não há
  onde gravar a nota. Agora grava **objeto** `{mat, top, key, topIdx}`, com compatibilidade
  para as strings já salvas.
- Em `renderDiaSabado`, o bloco do Retorno Técnico estava dentro de `if(!temRecuperacao)`, ou
  seja, **a recuperação substituía** a lista de reavaliação da semana em vez de somar. Agora os
  dois blocos convivem, e os itens de recuperação renderizam com as mesmas estrelas
  (`sabStarHTML` / `setSabStar`), gravando no dia de origem via `gravarNotaTopico`.

### P1 — ALTA (parcialmente resolvido acima): revisar a estratégia de corte

O aviso resolve o pior do problema, que era o aluno **não saber**. Falta decidir com o dono se
o corte deve continuar sendo sequencial. Hoje a lista é ordenada por **peso decrescente** e
percorrida em ordem, então o que sai é sempre a **cauda**, inteira: no CPA some primeiro
Inovação (peso 10) e depois Estrutura do SFN (peso 20). Alternativa a avaliar: distribuir
proporcionalmente ao peso, de modo que toda matéria receba alguma fatia e nenhuma desapareça
por completo. Ver o diagnóstico original logo abaixo.

### P1 (diagnóstico original) — o motor do cronograma truncava o edital em silêncio

**Sintoma relatado pelo dono:** ao distribuir um novo cronograma, o sistema aloca as matérias
nas datas disponíveis, mas em alguns casos **ignora muitas matérias**, e o aluno segue
estudando sem saber que **não vai zerar o edital**.

**Diagnóstico feito em 31/08/2026, com o código na mão.** A causa está em
`app/js/engine.js`, na função `_densityFor` (por volta da linha 79) combinada com
`getTopicosDiaBase` (por volta da linha 98).

```
const maxByHoras = Math.max(1, Math.min(3, Math.floor((STATE.horasDia||3)/1.5)));
return Math.min(maxByHoras, Math.max(1, Math.ceil(todos.length/totalContent)));
```

A densidade **necessária** para cobrir o edital é `ceil(total de tópicos / dias de conteúdo)`.
Mas ela é passada por um `Math.min` contra um teto (`maxByHoras`), que vale **no máximo 3** e,
com as 3 horas por dia padrão, resulta em **2**. Quando a densidade necessária é maior que o
teto, ela é **silenciosamente reduzida**, e `getTopicosDiaBase` simplesmente caminha pela
lista `density` tópicos por dia até a data da prova chegar. O que não coube **nunca é
agendado**, e nada avisa o aluno.

**Exemplo numérico com o CPA (108 tópicos).** Prova daqui a 6 semanas dá cerca de 30 dias de
conteúdo. Densidade necessária: `ceil(108/30) = 4`. Teto com 3 h/dia: `2`. Resultado: **60 de
108 tópicos agendados, 48 fora**, sem aviso.

**Agravante que torna o efeito pior do que parece.** A lista `todos` é montada com as matérias
**ordenadas por peso decrescente** (`sort((a,b)=>b.peso-a.peso)`), e o caminhamento é
sequencial. Logo, o que é cortado é **sempre a cauda**, isto é, a matéria de menor peso, e
sempre inteira. No CPA, a primeira a desaparecer é **Inovação e Desenvolvimento de Mercado**
(peso 10), seguida de parte de Relacionamento (peso 30). O aluno não perde tópicos espalhados:
perde matérias completas.

**O dado para avisar já existe.** `calcExpectedPerSubject` calcula
`agendados = Math.min(todos.length, conteudo*density)` e distribui na mesma ordem, então ela
já sabe quais matérias ficam em 0%. Falta a UI usar isso.

**Direções de correção, para avaliar com o dono antes de implementar:**

1. **Avisar sempre.** Ao gerar ou regenerar o cronograma, comparar
   `diasDeConteudo * density` com `todos.length`. Não cobrindo, mostrar aviso explícito: quantos
   tópicos de quantos serão cobertos, **quais matérias ficam de fora**, e as três saídas
   (aumentar horas por dia, antecipar o início, reduzir dias livres). Este item sozinho já
   resolve o problema relatado, que é o aluno **não saber**.
2. **Deixar a densidade subir quando necessário**, avisando da carga, em vez de truncar em
   silêncio. O teto de 3 é arbitrário e não deveria vencer a cobertura do edital.
3. **Distribuir proporcionalmente ao peso** em vez de sequencialmente, de modo que, mesmo num
   cenário apertado, toda matéria receba alguma fatia e nenhuma some por inteiro.

**Atenção ao mexer:** `_densityFor` é descrita no próprio código como **fonte única** usada
pelo agendamento real (`getTopicosDiaBase`) e pelo esperado do mapa de calor
(`calcExpectedPerSubject`). Alterando uma, confira as duas, e rode a suíte (79 testes, com
`engine.test.js` cobrindo o agendamento).

### P4 — BAIXA: adiantar conteúdo em dia de descanso (implementado e REMOVIDO)

O dono pediu que o aluno pudesse estudar num dia marcado como descanso. Foi implementado em
31/08/2026, **apresentou bugs em uso e foi removido no mesmo dia** a pedido dele. O código saiu
de `engine.js` e de `ui.js`; nada dele permanece. Fica registrado aqui porque o desenho estava
correto e vale retomar.

**O problema de fundo.** O agendamento é **posicional**: o tópico de um dia sai de
`conteudo(dia) * densidade`, contando dias de conteúdo decorridos. Injetar tópicos num dia
livre não basta, porque os dias seguintes continuam apontando para os mesmos tópicos e
**haveria duplicação**: o aluno estudaria no sábado e reencontraria tudo na segunda.

**O desenho que funcionava.** Um **ledger datado**, `STATE.adiantamentos = { "AAAA-MM-DD": qtd }`,
com cada dia somando apenas os adiantamentos **anteriores a ele**:

```
startIdx = (conteudo*density + _adiantadosAntes(dateKey)) % todos.length
```

Assim o **passado nunca muda** e só o **futuro desliza**. Verificado em bancada: adiantar 3
tópicos num sábado fez a segunda seguinte pular para os 3 seguintes, sem repetição e sem
buraco, e o passado ficou intacto. `calcCoberturaEdital` e `calcAntecipacao` compunham sozinhas,
somando e descontando `totalAdiantado()`.

**Peças que existiam:** `_adiantadosAntes`, `totalAdiantado`, `_diasConteudoAntes`,
`getProximosTopicos(dateKey,n)` no engine; `anteciparConteudo(key)` e o botão no
`renderDiaLivre`, no `ui.js`. O commit anterior à remoção tem tudo.

**Ao retomar, investigar primeiro:**

1. **Qual era o bug.** Não foi diagnosticado antes da remoção. Reproduza clicando em adiantar
   em dias variados (sábado, domingo, semanas diferentes) e confira o cronograma dos dias
   seguintes e do próprio dia.
2. **Colisão em `extrasPorDia`.** Ele é compartilhado com a recuperação de dias perdidos
   (`redistribuirTopicos`). Na teoria não colidem, porque a recuperação escreve em dias de
   conteúdo (`pos>=0&&pos<=4`) e o adiantamento em dias livres, mas isso não foi testado com
   as duas coisas ativas ao mesmo tempo. **Suspeito principal.**
3. **Interação com o Retorno Técnico e os Exercícios.** Adiantar desloca a fila, e os dias de
   posição 5 e 6 do ciclo continuam onde estavam. Verificar se o par conteúdo/revisão continua
   coerente.
4. **Desfazer.** Não havia como cancelar um adiantamento. Um botão de desfazer que apague
   `adiantamentos[key]` e `extrasPorDia[key]` provavelmente é requisito, não enfeite.

### P2 (Fase 1 FEITA em 05/09/2026): menu de Exercícios no ar, com banco piloto

O menu de Exercícios existe, funciona ponta a ponta e está publicado com **15 questões
piloto** em três tópicos de Produtos. Falta o banco (Fase 2) e a integração com revisões,
simulados e confiança (Fase 3). O plano completo está em
`_docs/PLANO - Banco de questoes e menu de exercicios.md`.

**Decisão do dono (05/09/2026):** a nota medida vai definir o nível de confiança, mas
**só depois que o banco estiver completo**. Não ligar a nota ao `calcDominio` agora.
O histórico já está sendo gravado desde já, então quando a decisão vier o dado existe.

**O caminho do dado, ponta a ponta.**

```
_conteudo/cpa/questoes/<materia>/NN-topico.yaml     <- autoria (YAML, um por tópico)
        |  python3 outputs/questoes_para_js.py cpa
        v
app/conteudo/questoes-cpa.js  (window.QUESTOES_DATA) <- publicado, carregado no index.html
        |  engine.getQuestoes / listarQuestoes
        v
tela de Exercícios (ui.js)  ->  STATE.questoes[id]  ->  Firebase
```

**Formato.** `_conteudo/_MODELO-questoes.yaml` está na **versão 2** (backup em `.bak-v1`):
entrou `tipo: caso` (árvore de decisão com peso 0 a 3 por opção, no formato do caderno
interativo da Anbima), `feedback` por alternativa (a linha que aparece na hora do erro,
com o comentário completo continuando atrás do botão) e `fonte` obrigatório
(`autoral` ou `adaptada`). **Nada de questão de banca ou de terceiro copiada: o produto é
vendido.** O tipo `caso` está especificado e validado pelo conversor, mas **ainda não tem
tela**: só `multipla` e `vf` renderizam hoje.

**Conversor: `outputs/questoes_para_js.py`.** Irmão do `conteudo_para_js.py`, mesma lógica
de vínculo e mesma saída em `window.ALGO_DATA`. Valida cabeçalho, órfão de matéria e de
tópico, id duplicado, alternativas de acordo com o tipo, gabarito existente, comentário
vazio e travessão. Avisa quando falta questão de nível 3 ou quando o tópico tem menos de 4.
**Tem uma dependência que o conversor de conteúdo não tem: PyYAML.** Foi decisão
consciente, está justificada no cabeçalho do script, e se faltar ele diz o que instalar.

**Engine (puro, testado, 6 funções novas):** `getQuestoes`, `temQuestoes`, `contarQuestoes`,
`listarQuestoes`, `statusQuestao` e `registrarResposta`. O filtro de `listarQuestoes` é
fechado: matéria, tópico, níveis, `usarEm`, `soErradas`, `soNaoRespondidas`, limite.
**Embaralhar é decisão da tela, não do engine**, para o resultado continuar testável.

**Estado: schema 3 para 4.** Entrou `STATE.questoes[id] = {n, ok, ultima, ultimaOpcao,
ultimaCerta}`. A chave é o `id` do YAML, que é permanente por regra do formato: é isso que
permite guardar acerto por questão sem embaralhar resultado quando o banco crescer.
O teste antigo do state que cravava `schemaVersion === 3` agora usa
`S.STATE_SCHEMA_VERSION`, para não quebrar na próxima migração.

**Tela (`renderExercicios` e vizinhas em ui.js).** Duas telas na mesma página: filtro e
runner. O filtro segue a regra do Conteúdo programático, matéria e depois tópico, e
**só oferece matéria e tópico que TÊM questão**: filtro que devolve zero é pior do que
filtro que não oferece a opção. O runner mostra uma questão por vez, corrige na hora,
mostra o `feedback` da alternativa errada e só então libera o botão **Ver comentário**.
O comentário nunca aparece antes da resposta. No fim, nota em porcentagem com a régua dos
**70% da prova**, quebra por tópico e o botão de refazer só as erradas.

**Pendências desta frente**, em ordem:

1. **Banco.** Produtos do Mercado Financeiro está COMPLETA: 215 questões nos 43 tópicos (05/09/2026). Faltam SFN (22 tópicos), Relacionamento (32) e Inovação (11). Briefing pronto em
   `_conteudo/PROMPT - Criar questoes CPA.md`. A regra central: a questão tem de ser
   respondível **apenas com o nosso texto do tópico**, e as distratoras saem da seção
   Pegadinhas daquele mesmo tópico.
2. **Ligar a nota à confiança** (só depois do banco). A recomendação do plano é conviver
   com as estrelas, e não substituir: usar a medida aferida a partir de uma amostra mínima,
   no mesmo padrão do `DOMINIO_MIN_AMOSTRA` que já existe, e usar o confronto entre
   declarado e aferido no Retorno Técnico.
3. **Revisões e simulados puxando questão de verdade.** Hoje a tela de Simulados é só
   registro. O campo `usar_em` de cada questão já existe para isso.
4. **Tela do tipo `caso` (árvore de decisão).** Deixou de ser opcional: a pesquisa feita
   para a Análise do Edital mostrou que a prova tem **40 questões de múltipla escolha e 10
   de árvore de decisão**, ou seja, 20% do exame. O schema e o conversor já aceitam
   `tipo: caso` com peso 0 a 3 por alternativa; falta a tela. Hoje o app tem zero questões
   desse tipo.

Arquivos alterados nesta frente: `app/index.html`, `app/css/app.css`, `app/js/ui.js`,
`app/js/engine.js`, `app/js/state.js`, `app/conteudo/questoes-cpa.js` (gerado),
`outputs/questoes_para_js.py` (novo), `app/tests/engine.test.js`, `app/tests/state.test.js`.
Backups em `*.bak-questoes`.

---

## RECUPERAÇÃO DE DIAS PERDIDOS (redesenho de 05/09/2026)

Esta frente reabriu o item 7 da seção 0. O bug de vínculo (string em vez de objeto) já tinha
sido corrigido, mas o dono voltou com dois incômodos reais, e os dois estavam certos.

**Incômodo 1: o nome.** A tela chamava o dia de "Sábado Técnico" e a chave do estado era
`STATE.sabadoRecuperacao`. Só que o dia de recuperação **nunca foi o sábado do calendário**:
`getProximoSabado()` já procurava `getCicloPos(key) === 5`, que é a sexta posição do ciclo
5+1+1 e cai em qualquer dia da semana, dependendo da data de início e dos dias de descanso do
aluno. Pior: o sábado pode ser justamente o dia de descanso dele. Era um nome errado colado em
uma lógica certa. O teste de navegador provou: com início em 17/08 e domingo livre, a data de
recuperação saiu **08/09/2026, uma terça-feira**.

O que foi renomeado, sem mudar comportamento:

| Antes | Agora |
|---|---|
| `getProximoSabado()` | `getProximoRetornoTecnico()` |
| `renderDiaSabado()` | `renderDiaRetornoTecnico()` |
| `STATE.sabadoRecuperacao` | `STATE.recuperacao` |
| `STATE.sabadoRecuperacaoData` | `STATE.recuperacaoData` |
| textos "Sábado Técnico" | "Retorno Técnico" |

Os ids do DOM e as classes de CSS **continuam com o prefixo `sab`** (`sab-stars-<key>`,
`.sab-item-row`, `.sabado-title`, `_sabId`). Renomear isso obrigaria a mexer em CSS, HTML e JS
ao mesmo tempo sem ganho nenhum para o aluno. Há um comentário em `ui.js`, acima de `_sabId`,
avisando que o prefixo é legado. Quem for mexer, leia antes.

**Migração de schema 4 para 5.** As duas chaves antigas são renomeadas em `migrateState`,
preservando o que o aluno já tinha na fila. A migração é idempotente e só copia quando a chave
nova ainda não existe.

**Incômodo 2: a nota inventada.** A sugestão do dono era o sistema dar **1 estrela automática**
ao dia recuperado, porque isso já bastaria para o motor mandar o conteúdo para revisão. A ideia
resolve o sintoma, mas quebra a medida. Motivo, com o código na mão: `starToNivel(1)` grava
`percepcao: "baixa"`, e `percepcao` é exatamente o que `calcCobertura` usa para contar tópico
estudado. Uma estrela inventada entraria como **conteúdo visto** na cobertura do edital, no mapa
de calor, no domínio, na Palavra do Coach e na própria fila do Retorno Técnico. O aluno passaria
a ver progresso onde não estudou nada, e é justamente essa medida que o banco de questões
existe para aferir. O dono concordou: *"ok, então vamos seguir com sua sugestão."*

**O desenho que ficou.** O dia recebe apenas a marca `recuperado: true`, **sem nota**:

- `engine.calcRevisoes` passou a aceitar `v.recuperado` como elegível mesmo sem `percepcao`,
  e carrega a marca no item (`recuperado: true`) para quem quiser diferenciar na tela.
- `applyRecovery`, na opção `"sabado"`, empurra objetos `{mat, top, key, topIdx}` para
  `STATE.recuperacao` e grava `STATE.recuperacaoData = fmt(getProximoRetornoTecnico())`.
  É o `key` que faz as estrelas do Retorno Técnico gravarem no dia certo, o defeito original.
- `renderDiaNormal` ganhou um ramo antes do ramo `transferido`: o dia aparece com borda e fundo
  âmbar, selo **🔁 Recuperado**, os tópicos daquele dia e a nota "Não estudado neste dia. O
  conteúdo entrou na fila de revisão e aparece no próximo Retorno Técnico, onde você avalia e
  registra o exercício."
- `getMissedDays` e `isSemanaCompleta` passaram a tratar `recuperado` como dia já resolvido,
  senão o modal de recuperação reabriria para sempre nos mesmos dias.
- `renderBarraSemanal` mostra o ponto `🔁`.
- O sync (`novosDias`) preserva `recuperado`, junto com `skipped` e `transferido`.

**Cobertura fica honesta.** No teste de navegador, 11 dias marcados como recuperados,
44 itens na fila, 9 entrando em rev7, e a cobertura do edital continuou **4 de 108**,
exatamente onde estava. É esse o ponto do desenho.

**Ajuste de leitura.** Os rótulos do Retorno Técnico usavam `white-space:nowrap` com
reticências. Como todo rótulo começa com o nome da matéria, o corte engolia sempre o tópico e
todas as linhas ficavam iguais ("Produtos do Mercado Financeiro:..."). Trocado por
`-webkit-line-clamp:2`, que mostra matéria e tópico em duas linhas.

**Texto do modal.** A terceira opção agora se chama **"Mandar para o Retorno Técnico"** e diz o
que realmente acontece, inclusive a parte que o aluno precisa saber: *"O dia fica marcado como
recuperado no cronograma, sem contar como estudado."*

**Correção de português no caminho:** o aviso dizia "15 dias útil sem registro" porque o
ternário do plural estava invertido.

Arquivos alterados: `app/index.html`, `app/css/app.css`, `app/js/ui.js`, `app/js/engine.js`,
`app/js/state.js`, `app/tests/engine.test.js`, `app/tests/state.test.js`.
Backups em `*.bak-recuperacao`. Suíte: **85 testes, 0 falhas.**

---

## DATA DA PROVA CALCULADA PELA BÚSSOLA (05/09/2026)

Pedido do dono: *"o aluno informa a data de início dos estudos, depois informa a
quantidade de horas que pretende estudar e o sistema aparece ao lado da hora o prazo esperado
para conclusão e com essa informação, o sistema já define a data da prova."*

**O problema que isso resolve.** A configuração pedia a data da prova antes de o aluno ter
qualquer ideia de quanto tempo o conteúdo leva. Ele chutava. Depois o app media a cobertura e
avisava que o prazo não fechava, o que é tarde: o aluno já tinha decidido. A informação existia,
só estava na ordem errada.

**A conta.** `calcPrazoConteudo()` no engine, função pura e sem dependência da data da prova:

```
density        = floor(horasDia / 0.75)        capacidade da hora, 45 min por tópico
diasNecessarios = ceil(totalTopicos / density)
fimConteudo    = caminha o calendário a partir do início, pulando os dias de
                 descanso, contando só as posições 0 a 4 do ciclo 5+1+1, e
                 ignorando o primeiro dia (Orientações do Coach)
provaSugerida  = fimConteudo + 8      a Revisão Geral cai em +7
```

É a mesma aritmética de `calcAntecipacao`, sem o teto do `getLimiteConteudo`. Essa é a diferença
que importa: `calcAntecipacao` precisa de uma data de prova para existir, e aqui é justamente a
data que não existe ainda.

Conferido: com a data sugerida, `calcCoberturaEdital()` devolve `cobre: true` e 108 de 108
tópicos. A sugestão da Bússola nunca dispara o próprio aviso de "esse prazo não cobre o edital".

Números da CPA (108 tópicos, início numa segunda, domingo de descanso):

| Horas por dia | Tópicos por dia | Prazo até a prova |
|---|---|---|
| 1h | 1 | 183 dias |
| 1h30 ou 2h | 2 | 94 dias |
| 2h30 | 3 | 66 dias |
| 3h ou 3h30 | 4 | 51 dias |
| 4h | 5 | 43 dias |
| 4h30 ou 5h | 6 | 36 dias |
| 6h | 8 | 29 dias |

Sem dia de descanso o prazo de 3h cai para 45 dias, que é o número da tabela da Análise do
Edital. A diferença é que ali a conta ignorava o descanso e aqui ela usa os dias reais do aluno.

**A tela.** O formulário foi reordenado para seguir a ordem da decisão: nome, certificação,
**início e horas lado a lado**, a faixa verde com o prazo, dias de descanso e por último a data
da prova já preenchida. Antes as duas datas vinham juntas no topo e as horas ficavam depois.

A faixa verde diz, em uma frase: quantos tópicos por dia, em quanto tempo fecha o edital e em
que data ele fica pronto para o exame. Acima de 120 dias ela fica âmbar e sugere aumentar as
horas, porque nesse patamar o prazo costuma ser o problema real.

**Quem manda na data.** `_provaAuto` decide:

- `openSetupModal` faz `_provaAuto = !STATE.prova`. Sem data salva, a Bússola sugere. Com data
  salva, a decisão é do aluno e não é tocada. **Esse flag precisa ser definido antes de o
  formulário ser populado**: `selecionarPref` chama `atualizarModoProva`, que já recalcula, e
  leria um flag velho. Foi um bug de verdade durante a implementação, não é zelo à toa.
- O aluno digitar no campo dispara `data-change="provaManual"`, que zera o flag. O selo passa de
  "🧭 sugerida pela Bússola" para "📅 você definiu".
- Data escolhida mais cedo que a sugerida: aviso de quantos dias faltam para o conteúdo fechar.
  Mais tarde: quantos dias sobram para revisar. Nos dois casos com o atalho
  `usarPrazoSugerido` para voltar à data calculada.
- Trocar de certificação zera o flag para `true`, porque a data antiga era de outro exame.

**Recalcula em três gatilhos:** `data-change` no início e nas horas, e `toggleDow` no fim, porque
dia de descanso muda o prazo. Tudo passa por `calcPrazoDoFormulario()`, que lê os **campos** e
não o STATE (nada foi salvo ainda), monta um STATE temporário, mede e desfaz.

**Concursos com data fixada pelo edital** (`ed.dataProva`) continuam intocados: a faixa e o
rodapé ficam escondidos e o campo segue bloqueado. Hoje não há nenhum no catálogo, mas o caminho
está preservado.

**Limpeza no caminho:** o cabeçalho do modal ainda dizia "Coach Digital para Prefeituras". Virou
"Coach Digital para Certificações". E o rótulo "Horas de estudo por dia" virou "Horas por dia",
porque no celular ele quebrava em duas linhas dentro da coluna.

Arquivos alterados: `app/index.html`, `app/css/app.css`, `app/js/ui.js`, `app/js/engine.js`,
`app/tests/engine.test.js`. Backups em `*.bak-prazo`. Suíte: **91 testes, 0 falhas**
(6 novos cobrindo densidade, a data sugerida, a independência da prova salva, o efeito dos dias
de descanso e das horas, e os casos que devolvem null).

**Pendência que nasce daqui.** O dono propôs, na mesma conversa, simplificar a recuperação de
dias perdidos para duas saídas: intensificar nos próximos dias, ou **prorrogar a data da prova
em N dias** e redistribuir. A segunda saída só faz sentido com a data de prova sendo um alvo
calculado, que é o que esta frente estabelece. É a próxima a implementar.

---

## RECUPERAÇÃO EM DUAS SAÍDAS (05/09/2026)

Continuação direta da frente anterior. Pedido do dono: *"Caso o aluno perca algum dia de estudo,
aparece o aviso dele intensificar os estudos nos próximos dias para recuperar as matérias
perdidas ou aparece a opção dele prorrogar o dia da prova e o sistema redistribui as matérias
faltantes com nova data da prova."*

**Por que a opção do Retorno Técnico saiu.** Ela funcionava depois da correção, e ainda assim
estava errada na raiz. O Retorno Técnico existe para reavaliar o que foi **estudado** na semana;
jogar conteúdo não estudado ali pede que o aluno dê nota de confiança para algo que nunca viu.
E a conta não fecha: com 3h por dia a densidade é de 4 tópicos, então 4 dias perdidos viram 16
itens em um cartão só, e 11 dias viram 44. Isso não é plano de recuperação, é pilha.

O que sobrou no modal, nesta ordem:

1. **Intensificar os próximos dias** (`redistribuir`, que já existia)
2. **Adiar a prova para dd/mm/aaaa** (`adiar`, novo)
3. **Pular e seguir em frente** (`pular`, mantido de propósito)

O `pular` não estava no pedido, mas continua sendo a única saída honesta para quem sumiu por um
mês: nesse volume, redistribuir é irreal e adiar empurraria a prova em três meses. Ele ficou por
último, como saída secundária.

**A opção 2 não é "prova + N dias".** O dono descreveu como dois dias perdidos virando prova dois
dias depois. Adotar isso ao pé da letra erraria em dois sentidos: dias de calendário não são dias
de estudo (dois dias somados podem cair em descanso e não render vaga nenhuma), e quem já tinha
folga no plano não precisa adiar nada. `calcAdiamentoProva` mede o que de fato falta:

- conta quantos tópicos os dias perdidos carregam (`getTopicosDiaBase` de cada um);
- caminha o calendário a partir de hoje contando **vagas**, com a regra idêntica à de
  `redistribuirTopicos`: um extra por dia de conteúdo (posições 0 a 4), pulando dia já estudado e
  dia que já recebeu extra;
- vagas até a Revisão Geral atual bastam? `cabe: true`, e a opção de adiar **não é exibida**,
  porque seria um clique que não muda nada;
- não bastam? continua caminhando e a nova prova é o último dia de conteúdo **+ 8**, a mesma
  regra de `calcPrazoConteudo`: Revisão Geral em +7, prova em +8.

Exemplo real do teste de navegador: 4 dias perdidos, 12 tópicos, prova em 30/09. Onze tópicos
cabem, um não. A prova anda **3 dias**, para 03/10. Com a mesma perda e prova em 19/09, ela anda
14 dias, para a mesma 03/10, porque o último dia de conteúdo necessário é o mesmo.

**Mudança de limite em `redistribuirTopicos`.** O limite passou de `STATE.prova` para
`getLimiteConteudo()`. Antes, tópico redistribuído podia cair **dentro da reta final**, a semana
entre a Revisão Geral e a prova, que é de treino e não de conteúdo novo. Efeito colateral
esperado e correto: com prova apertada sobra mais resto, e o resto continua indo para a fila do
Retorno Técnico, que é o destino de resíduo que sempre existiu.

**A ordem no `applyRecovery` importa.** No ramo `adiar`, a data é movida **antes** de
`redistribuirTopicos` rodar, porque a redistribuição lê `getLimiteConteudo()`, derivado de
`STATE.prova`. Redistribuir primeiro faria o conteúdo esbarrar no limite antigo e o adiamento
perderia o sentido. Há comentário no código.

**As opções agora dizem o preço antes do clique.** `renderOpcoesRecuperacao()` escreve os textos
com número e data: *"Os 12 tópicos perdidos entram nos próximos dias, um por dia, até 25/09/2026.
São cerca de 45 min a mais por dia e a data da prova continua a mesma."* Quando não cabe tudo,
diz quantos sobram e para onde vão. A opção de adiar carrega a nova data no próprio título e o
aviso que o app não tem como saber sozinho: *"Escolha esta opção se ainda não agendou o exame."*

**`recuperado` virou legado, mas continua vivo.** Nenhum dia novo nasce com essa marca, porém
quem usou a opção antes de 05/09/2026 tem dias assim salvos no navegador e na nuvem. O ramo de
`renderDiaNormal`, o tratamento em `engine.calcRevisoes`, `getMissedDays` e `isSemanaCompleta`
ficam. Há comentário nos dois arquivos avisando para não apagar.

**Tropeço repetido, agora com CSS:** `.rec-option` é `display:flex`, então o atributo `hidden`
do navegador não escondia a opção. Precisou de `.rec-option[hidden]{display:none!important}`.
É o mesmo tropeço da busca do Conteúdo programático. Se for esconder qualquer coisa neste app,
confira antes se a regra de `display` do elemento ganha do `[hidden]`.

Arquivos alterados: `app/index.html`, `app/css/app.css`, `app/js/ui.js`, `app/js/engine.js`,
`app/tests/engine.test.js`. Backups em `*.bak-adiar`. Suíte: **96 testes, 0 falhas**
(5 novos cobrindo cabe/não cabe, o efeito de mais dias perdidos, a regra de pular dia ocupado e
os casos que devolvem null).

---

## EXERCÍCIOS: BUSCA, VÁRIOS TÓPICOS E RESUMO POR TÓPICO (05/09/2026)

Pedido do dono, logo depois de o banco fechar os 43 tópicos de Produtos: *"agora são
muitas matérias e fica mais difícil de selecionar os conteúdos, porque a lista é grande. Podemos
incluir uma barra de pesquisa e também botões para selecionar mais de uma matéria? (...) seria
interessante se no final do exercícios, tivesse um resumo mostrando o percentual de acertos e
também o percentual de cada conteúdo, já que futuramente essa informação vai alimentar o nível de
confiança do aluno."*

**O que quebrou com o crescimento do banco.** A tela nasceu com dois `<select>` encadeados,
matéria e depois tópico. Funcionava com 3 tópicos. Com 43 já não funciona, e com os 108 do edital
inteiro fica inviável: o aluno não acha o assunto rolando uma lista suspensa, e só pode escolher
um. Quem estudou três assuntos na semana tinha de fazer três sessões separadas.

**Engine.** `listarQuestoes` ganhou `f.topicos`, uma lista. Cada item pode ser o **texto** do
tópico ou o **par** `{mat, top}`. O par existe porque duas matérias podem ter tópico de mesmo
nome (Tributação, por exemplo) e a tela deixa marcar tópicos de matérias diferentes na mesma
sessão. `f.topico` (singular) continua valendo, e lista vazia significa "todos", que é o estado
inicial. Comparação por `_normTexto`, como o resto do engine.

**Tela.** O `<select>` de tópico virou um painel:

- campo de busca por nome, tolerante a acento e caixa;
- uma linha marcável por tópico, com a contagem de questões;
- agrupamento por matéria quando o aluno não escolheu uma;
- dois atalhos, **Marcar os visíveis** e **Limpar**;
- rodapé com os **nomes** dos tópicos marcados, não só a contagem.

O rodapé com nomes não é enfeite: quem marca por busca perde de vista o que já escolheu, porque
os tópicos marcados saem da parte visível da lista assim que ele digita outra coisa.

**A regra que rege esta tela: marcar e buscar NÃO redesenham o painel.** `exToggleTopico` mexe
só na classe da linha e chama `_exAtualizarContagem()`; `exBuscarTopico` esconde e mostra o que
já está desenhado. Redesenhar apagaria o foco do campo de busca, e o aluno marca vários tópicos
seguidos sem tirar a mão do teclado. Quem for mexer aqui, teste isto: digite na busca e confira
se o cursor continua no campo. Os chips de nível ainda redesenham, e por isso `renderExercicios`
termina chamando `exBuscarTopico(_exBuscaTop)`, para reaplicar a busca sobre as linhas novas.

**Tropeço conhecido, terceira vez:** `.ex-top-item` é `display:flex`, então o atributo `hidden`
do navegador não esconde nada sem `.ex-top-item[hidden]{display:none!important}`. Já tinha
acontecido na busca do Conteúdo programático e nas opções do modal de recuperação.

**Resumo do fim da sessão.** A quebra por tópico já existia, mas mostrava só `3/5`. Agora
`_exResumoPorTopico` mostra o **percentual**, a fração ao lado e uma barra, ordenados **do pior
para o melhor**. A ordem é a mensagem: o tópico que precisa de estudo aparece primeiro. Abaixo
da lista, uma linha diz quantos ficaram abaixo dos 70%, que é a nota de corte da CPA.

A fração continua ao lado do percentual de propósito: 3 de 5 e 30 de 50 são o mesmo percentual
com confiança estatística muito diferente. Quando o nível de confiança passar a ser aferido pelas
questões, é esse `n` que vai decidir se a medida vale, no mesmo padrão do `DOMINIO_MIN_AMOSTRA`
que já existe no engine. Quando todos os tópicos da sessão são da mesma matéria, o nome dela sai
das linhas para não roubar espaço do nome do tópico.

Arquivos alterados: `app/index.html`, `app/css/app.css`, `app/js/ui.js`, `app/js/engine.js`,
`app/tests/engine.test.js`. Backups em `*.bak-multitopico`. Suíte: **99 testes, 0 falhas**
(3 novos cobrindo a lista de tópicos, o par matéria+tópico e a combinação com os outros filtros).

---

## A FILA DE RECUPERAÇÃO QUE NUNCA ESVAZIAVA (05/09/2026)

Bug relatado pelo dono: *"no cronograma, na segunda semana ainda aparece um erro do sistema
anterior onde está no retorno técnico uma lista enorme de matérias, mesmo reiniciando o
cronograma completo, o sistema ainda está mantendo essa falha, neste dia."*

**Reproduzido antes de tocar em qualquer coisa.** Estado com 16 itens em `STATE.recuperacao` e
`recuperacaoData` num Retorno Técnico da segunda semana, seguido de `reiniciarCompleto()`:

```
ANTES do reinício:  {"fila":16,"dias":3,"linhasNoCartao":16}
DEPOIS do reinício: {"fila":16,"dias":0,"linhasNoCartao":16}
```

**A causa, e ela é maior do que o sintoma.** `STATE.recuperacao` era gravada em dois lugares e
lida em um, e **nenhum lugar do sistema jamais removia um item dela**. Uma busca por
`STATE.recuperacao` no projeto inteiro devolvia três ocorrências: duas escritas em
`redistribuirTopicos` e uma leitura em `renderDiaRetornoTecnico`. Não havia remoção.

Disso saíam dois defeitos, e o dono só viu o primeiro:

1. `reiniciarCompleto` zerava `STATE.dias` e mais nada. A fila, os tópicos redistribuídos em
   `extrasPorDia` e a data do Retorno Técnico sobreviviam ao reinício, e como `STATE.inicio`
   também não é apagado, o mesmo dia do calendário continuava sendo Retorno Técnico e
   continuava desenhando a lista inteira.
2. Mesmo em uso normal, o item ficava na fila **depois de o aluno dar a nota**. A lista só
   crescia. Como ela aparece num único dia (`recuperacaoData`), aquele dia exibia a mesma lista
   para sempre, tópico já estudado incluído.

**As quatro correções:**

- **`reiniciarCompleto` apaga tudo que está preso ao cronograma antigo:** `dias`,
  `extrasPorDia`, `recuperacao`, `recuperacaoData`, `redistribuindo` e `diasRedistribuir`. E
  grava `recoveryShownDate` com a data de hoje, senão o modal de dias perdidos abre em cima do
  clique de reiniciar, já que o início continua no passado e todos os dias anteriores viram
  "sem registro" no mesmo instante.
  O que **não** se apaga, de propósito: as anotações da semana e `STATE.questoes`, o histórico
  de exercícios. São do aluno e não são cronograma. O aviso do botão foi reescrito para dizer
  exatamente isso, porque antes prometia apagar "todo o histórico" e não apagava.
- **`_tirarDaFilaRecuperacao(key, ti)`**, chamada por `setSabStar`: avaliou, saiu da fila. Em
  dia de tópico único sai tudo daquele dia; em dia de vários, só o `topIdx` avaliado. Fila
  vazia apaga `recuperacaoData` junto.
- **Migração v5 para v6**, para quem já está com a fila presa e não vai reiniciar de novo.
  Descarta o que não faz mais sentido: fila inteira quando não há nenhum dia registrado (é o
  caso de quem já reiniciou), item cujo dia de origem já tem nota (por tópico ou agregada, e o
  agregado só existe quando todos os tópicos do dia foram avaliados), e item em formato de
  texto solto das versões anteriores ao vínculo com o dia, que sem `key` não tem onde gravar
  nota. **O aluno não precisa fazer nada:** limpa sozinho na primeira abertura.
- **Link "Limpar" no cabeçalho da lista**, dentro do cartão do Retorno Técnico. Saída de
  emergência para o caso de a lista ficar presa por qualquer outro motivo. Não perde conteúdo:
  os dias de origem continuam marcados e o motor segue puxando esses tópicos pelas revisões de
  7 e 30 dias.

**Conferido no navegador, nos quatro caminhos:**

| Cenário | Resultado |
|---|---|
| Quem reiniciou antes da correção (`dias` vazio) | fila 16 para 0 na abertura, sem clique |
| Dias com nota registrada | só os avaliados saem (16 para 10) |
| Link "Limpar" | fila 16 para 0, data apagada |
| Dar a nota no Retorno Técnico | fila 16 para 15, um item por avaliação |

**Lição para a próxima IA.** Todo dado que o sistema ESCREVE precisa ter alguém que o APAGUE.
Antes de criar mais uma chave em `STATE`, responda: quem tira daqui, e o `reiniciarCompleto`
sabe dela? A fila viveu semanas sem nenhuma das duas respostas.

Arquivos alterados: `app/index.html`, `app/css/app.css`, `app/js/ui.js`, `app/js/state.js`,
`app/tests/state.test.js`. Backups em `*.bak-filapresa`. Suíte: **105 testes, 0 falhas**
(6 novos cobrindo cada regra da migração v6).

---

## OS 65 PEDIDOS QUE FALTAM, E O GERADOR (05/09/2026)

Com Produtos fechada, sobraram 65 tópicos de questões na CPA: SFN (22), Relacionamento (32) e
Inovação (11). Os textos desses 65 já estavam escritos e conferidos, então o que faltava era só
embalar cada um como pedido.

**Por que virou script.** Os 37 primeiros pedidos foram montados à mão. Com 65 pela frente, e
três certificações inteiras depois (CFP 45 tópicos, CA-600 70, FBB100 52), montar à mão é caro e
erra em silêncio. `outputs/gerar_pedidos.py` lê a **mesma fonte da verdade que o app lê**,
`app/editais.js`, e monta cada pedido a partir de três peças:

1. o cabeçalho, com matéria, tópico, caminho do arquivo de saída e os ids a usar;
2. o miolo fixo, recortado de um pedido já aprovado, para que briefing e exemplo saiam
   byte a byte idênticos ao que já funcionou;
3. o texto publicado do tópico, sem o front matter.

**O que ele confere, e é aqui que ele ganha o preço.** Para cada tópico do conteúdo, procura o
nome no `editais.js` e avisa quando não acha. Um tópico com nome fora do edital passaria batido
até a conversão, depois de a IA já ter escrito cinco questões para o vazio. Também confere se a
matéria do arquivo bate com a do edital e se há travessão no texto. Nos 65, zero avisos, o que
significa que os 65 nomes de tópico do conteúdo casam exatamente com o `editais.js`.

**Subpasta por matéria.** Os pedidos passaram a viver em `_pedidos/<pasta-da-matéria>/`. Com 102
num diretório só, os números se repetem entre matérias (existe um 19 em Produtos, um em SFN e um
em Relacionamento) e o dono perde de vista onde parou. As pastas espelham as do conteúdo.

**Ids por matéria**, lidos do front matter do conteúdo, não inventados pelo script:
`cpa-prod-NN`, `cpa-sfn-NN`, `cpa-rel-NN`, `cpa-inov-NN`.

**Briefing atualizado com os defeitos do último lote**, para os 65 já saírem com o aviso:
feedback que não responde a alternativa que ele acompanha, questão de nível 3 repetindo o
assunto principal de um tópico vizinho, e erro de digitação em termo técnico. São os itens 8, 9
e 10 da seção ERROS QUE JÁ ACONTECERAM.

**O que ficou de fora, de propósito.** As questões `tipo: caso` (árvore de decisão) são 20% da
prova e vivem justamente em Relacionamento, que é a matéria que vem agora. Não entraram neste
lote porque **o app ainda não tem tela para elas**: o schema e o conversor aceitam, mas nada
desenha. Gerar 32 questões de um formato nunca renderizado é apostar. A ordem certa é construir
a tela, validar com duas ou três questões escritas à mão, e só então pedir o lote. Está anotado
como pendência da frente de exercícios.

**Roteiro no LEIA-ME do fluxo**, para o dono tocar sozinho: ordem sugerida por peso na prova
(Relacionamento, depois SFN, depois Inovação), ritmo realista de 5 a 8 tópicos por dia, os cinco
pontos de conferência de conteúdo que o normalizador não pega, e o que acontece se o tempo
acabar no meio (nada quebra: o conversor lê os `.yaml` que existirem e o app mostra o que houver).

Arquivos novos: `outputs/gerar_pedidos.py`, 65 pedidos em
`_conteudo/cpa/questoes/_pedidos/<matéria>/`. Alterados: o briefing
`_conteudo/PROMPT - Criar questoes CPA.md` e o `LEIA-ME - fluxo do banco de questoes.md`.

---

## PAINEL DE EXERCÍCIOS E A NOVA ORDEM DO DASHBOARD (05/09/2026)

Pedido do dono, com um desenho anexado: *"agora que nós já temos um sistema de questões, podemos
incluir a última informação importante no dashboard, que é o que compila os dados de exercício.
(...) Eu só queria corrigir a ordem das informações."*

**A ordem, que é a parte conceitual do pedido.** O dashboard virou quatro blocos empilhados, e a
sequência é a sequência das perguntas que o aluno faz:

| Bloco | Responde |
|---|---|
| 1. Bússola do rumo + Galeria de Troféus | Estou no caminho da aprovação? |
| 2. Painel de Exercícios | Quanto eu acerto? |
| 3. Painel de Conteúdo (Evolução por Matéria) | Quanto do edital eu cobri? |
| 4. Painel de Consistência | Com que regularidade eu apareço? |

A grade de duas colunas (`.dash-cols`, `.dash-main`, `.dash-side`) saiu, e as regras de CSS dela
foram removidas junto, para não sobrar código morto guiando quem vier depois. O `renderHabito`
deixou de montar uma pilha de três cards e passou a preencher três contêineres separados
(`habRitmo`, `habMes`, `habDesafios`), porque "Quando você estuda" sobe para a primeira linha do
Painel de Consistência, ao lado da Aderência, e o calendário e os Desafios descem para a segunda.

**O dado que faltava.** `STATE.questoes` guarda o histórico por questão e só a **última** data de
cada uma. Isso não responde "quantas questões por dia" nem "quanto acertei nos últimos 7 dias".
Nasceu `STATE.exDias`, um acumulado `{ "AAAA-MM-DD": {n, ok} }` alimentado por
`registrarResposta`. É minúsculo: uma linha por dia, não uma por resposta.

**Migração v6 para v7**, para quem já respondeu: semeia `exDias` a partir do histórico por
questão, lançando `n` e `ok` de cada questão na data da última tentativa. O **total fica exato**
(a soma de `exDias` bate com a soma do histórico); só a distribuição por dia das respostas
antigas é aproximada. É a melhor reconstrução possível com o dado que foi guardado, e um total
certo com dias aproximados vale mais que um painel vazio.

**`calcExercicios(periodo, hojeRef)`** no engine, pura e testada. Devolve acertos, erros,
percentual, a série diária, a média dos últimos 7 dias e a variação contra os 7 anteriores.
Duas decisões que valem registro:

- **A média e a variação são SEMPRE de 7 dias**, mesmo quando o filtro está em "Sempre".
  Comparar uma janela móvel com ela mesma não diz nada. O rótulo na tela diz "(7 dias)".
- **A série de barras acompanha o período**: 8 dias nos recortes curtos, 30 nos longos. Trinta
  barras em 8 dias de largura viram risco de cabelo, e oito barras representando trinta dias
  seriam mentira. O contêiner rola na horizontal quando não cabe.

**Sobre o desenho, três escolhas que não são gosto.**

O anel não é um gráfico de pizza, é um **medidor de uma medida só**: o número grande no meio é a
informação e o anel é a régua. Por isso são dois arcos, e não seis fatias.

**O arco é sempre verde e a trilha sempre vermelha**, porque arco e trilha são acertos e erros,
não a nota. Quem julga é o número no centro, que troca de cor na faixa dos 70%, o corte da CPA.
A primeira versão pintava o arco pela faixa, e num aluno de 40% a legenda "verde = acertos"
ficaria mentindo em cima do próprio desenho.

Verde e vermelho aqui **são estado, não identidade de série**: certo e errado. É a mesma escala
das estrelas, do mapa de calor e da cobertura, então o aluno lê sem legenda nova.

**Tropeço de CSS que custou uma rodada:** as barras não desenhavam. `.pex-barras` tinha
`align-items:flex-end` e `min-height`, então as colunas eram do tamanho do conteúdo e o trilho
com `flex:1` não tinha altura resolvida, o que faz `height:%` na barra valer zero. Resolvido com
altura definida no contêiner e `align-items:stretch`. Regra geral: barra em porcentagem precisa
de um pai com altura definida, e `min-height` não é altura definida.

**Limpeza no caminho:** saiu o travessão de "5 dias seguidos, nunca chegou tão longe", que
aparecia no dashboard todo dia.

### Ajuste visual pedido logo depois, com o desenho na mão

O dono comparou o resultado com o desenho dele e pediu três coisas. As três estão feitas, e
valem registro porque são regras, e não gosto:

- **O cartão do anel ocupa perto de metade.** Estava em `minmax(240px,320px) 1fr`, uma coluna
  estreita para a leitura principal do painel. Virou `minmax(0,.85fr) minmax(0,1fr)`, e o anel
  passou de 130 para 156 pixels. A legenda deixou de ser uma coluna à direita e passou a
  **ladear** o anel, acertos à esquerda e erros à direita, com o percentual como manchete e a
  contagem embaixo. O percentual é o que se compara; a contagem é o que dá confiança à medida.
- **Barras finas.** A barra ganhou `max-width` e ficou centrada na coluna, em vez de esticar até
  encostar na vizinha. Bloco grosso e saturado lê alto e cansa, e a informação ali é a ALTURA,
  não a área pintada. Em 30 dias a barra afina para 9 pixels, as colunas encolhem para caber sem
  corte na direita, e **o número some de cima de cada barra**: trinta rótulos empilhados viram
  ruído, e o valor exato continua no tooltip. O destaque de hoje saiu do azul-marinho para o
  verde escuro, que é menos berrante e fica na mesma família.
- **Vermelho do anel.** A trilha estava em `--red-mid`, quase rosa. Passou para `--red-viv`, que
  é o vermelho vivo do sistema e o mais próximo do desenho. A bolinha da legenda acompanhou.

E, na sequência, o mesmo raciocínio no **Painel de Conteúdo**: a barra de progresso ia de
`1fr` até o fim da tela (uns 810px) enquanto o Domínio ficava espremido em 142px, com a linha
"conf 89% · 9 de 43" quase ilegível. O comprimento da barra **não carrega informação** além do
percentual que já está escrito ao lado dela, então o espaço rende mais na coluna que tem a
leitura difícil. A grade do desktop virou `minmax(200px,280px) minmax(0,1fr) 240px`, a barra
ganhou `max-width:520px` para não voltar a esticar em tela ultralarga, e o selo de Domínio
cresceu de 96 para 180px de largura mínima, com o percentual maior. As faixas de tablet e
celular acompanharam na mesma proporção.

E, por último, os cartões do **Painel de Consistência** passaram a terminar na mesma altura
dentro de cada linha. A `.pc-grid` estava com `align-items:start`; voltou ao `stretch` padrão da
grade. O detalhe que faz funcionar: os filhos diretos da grade são os **contêineres** do render
(`#dashHero`, `#habRitmo`, `#habMes`, `#habDesafios`), então o cartão de dentro também precisa
acompanhar a esticada, o que se resolveu com `.pc-grid > div { display:flex }` e
`.pc-grid > div > * { flex:1 }`, mais `height:100%` no `.hero-card`. O cartão de Desafios ganhou
a classe `gam` para o bloco de gamificação crescer junto e centrar o conteúdo, senão sobrava uma
faixa vazia entre o bloco e a borda do cartão. No celular a grade vira uma coluna e as alturas
voltam a ser livres, que é o certo: sem cartão ao lado, não há o que igualar.

### Densidade: caber mais na primeira tela

Último pedido da série: *"quando abro o dashboard, ele só aparece essas informações. Quero que
agora reduza o tamanho dos campos de forma que apareça mais informações na tela inicial (...) sem
a necessidade do scroll."*

**Medir antes de cortar.** Um script de navegador reportou a altura de cada bloco na tela do
dono (1878 por 915). O diagnóstico:

| Bloco | Antes | Depois |
|---|---|---|
| Bússola + Troféus | 152px | 147px |
| Painel de Exercícios | 387px | 282px |
| Painel de Conteúdo | 442px | 379px |
| Painel de Consistência | 640px | 602px |
| **Dashboard inteiro** | **1774px** | **1584px** |

O Painel de Conteúdo terminava em 1081px, bem abaixo da dobra de 915. Agora termina em **912px**:
o aluno vê a bússola, os exercícios e as quatro matérias sem rolar, e o cabeçalho da Consistência
aparece logo abaixo, sinalizando que há mais.

**O corte veio do respiro, não da letra.** Nenhum tamanho de fonte foi reduzido. O que encolheu:
`padding` dos painéis e dos cartões, os `gap` das grades, a altura do anel (156 para 124) e a das
barras (190 para 128). Fonte menor economiza pouco e cobra caro em legibilidade; padding
economiza muito e quase não se nota.

**Um detalhe que apareceu na medição:** os painéis se **encostavam**, com zero pixel entre eles.
A separação que se via era só o encontro das bordas arredondadas sobre o fundo bege. Entrou
`#page-dashboard > div + div { margin-top:.5rem }`, então o dashboard ficou mais denso E com a
separação entre blocos mais clara do que antes.

**Galeria de Troféus na altura da bússola.** Ela media 147px contra 102px do cartão ao lado, e a
diferença toda estava na coleção de 20 peças quebrando em **duas fileiras**. A coluna da coleção
foi de `1.15fr` para `1.55fr` e a peça de 30 para 25px de mínimo, então as 20 cabem em uma
fileira só. Com o selo menor e os respiros apertados, a galeria caiu para 114px, e a
`.dash-saudacao` passou a `align-items:stretch` para os dois terminarem exatamente na mesma
linha. O bloco do topo foi de 152 para **114px**, e o dashboard inteiro de 1774 para **1550px**.

**Sobre caber tudo em uma tela só, que o dono perguntou.** Não cabe, e não é caso de insistir. O
dashboard tem 1550px e a área útil dele, descontada a barra do topo, é de 827px. Caber tudo
exigiria encolher **47%** de tudo, texto incluído: os nomes das matérias iriam para uns 8px. O
desenho de referência parece caber porque está reduzido, e não porque é mais denso; é o mesmo
efeito de dar dois cliques de zoom para trás no navegador.

A única alavanca estrutural que sobra é pôr **Conteúdo e Consistência lado a lado** em telas
acima de 1600px. Renderia uns 380px, levando o total a ~1170px, o que **ainda não cabe** nos 827
disponíveis, e cobraria largura da barra de progresso, que acabou de ser encurtada justamente
para o Domínio caber. Fica registrado como opção, não como pendência: só vale se o dono pedir.



Arquivos alterados: `app/index.html`, `app/css/app.css`, `app/js/ui.js`, `app/js/engine.js`,
`app/js/state.js`, `app/tests/engine.test.js`, `app/tests/state.test.js`. Backups em
`*.bak-painelex`. Suíte: **114 testes, 0 falhas** (9 novos: 5 para `calcExercicios` e 4 para a
migração v7).

## 1. O que é o produto

SaaS de planejamento de estudos para **certificações financeiras** (CFP, CA-600, FBB100 e CPA/Anbima). Nasceu atendendo também concursos públicos; em 25/08/2026 o dono estreitou o foco e os concursos saíram do produto (ver 7u). O diferencial é o **Método Bússola (5+1+1)**: 5 dias de conteúdo novo distribuído pelo peso real de cada matéria no edital, 1 dia de Retorno Técnico (reavaliação de confiança) e 1 dia de Exercícios de Revisão, com revisões espaçadas de 7/30 dias, mini simulados a cada 3 ciclos e recuperação automática de dias perdidos. Venda por Hotmart (R$ 29,90), estética 'Clean Tech' (verde-escuro #173E2C, verde #2FB374, creme #F4EEE4, fontes Bricolage Grotesque + Hanken Grotesque).

## 2. Onde tudo está hospedado

| Item | Valor |
|---|---|
| **Hospedagem** | GitHub Pages — repositório **bussoladeestudos/home** (branch main) |
| **Domínio** | bussoladeestudos.com.br (arquivo CNAME na raiz do repo) |
| **Deploy** | Upload pela interface web do GitHub (Add file -> Upload files) na pasta correspondente; o Pages publica em 1–2 min. Sempre testar com Ctrl+F5 (cache). |
| **Backend** | Firebase, projeto **bussola-de-estudos**: Authentication (e-mail/senha) + Firestore (região southamerica-east1) |
| **Pagamento / entrega** | Hotmart — checkout pay.hotmart.com/N106305634J. Entrega automática: após a compra, o aluno recebe o link e cria a própria senha (Firebase Auth, self-service). Não é criação manual de conta. |
| **Coach IA** | Cloudflare Worker **coach-bussola** (conta adriano.m.goulart@gmail.com) + Gemini (chave no worker). Arquitetura completa: seção 11. |
| **Suporte** | 'Fale Conosco' (seção Configurações) — MVP: link externo em SUPORTE_URL (app/js/ui.js). Atual: mailto suporte@bussoladeestudos.com.br. Sem backend. |
| **Cópia local** | `C:\Users\adria\Downloads\CronosCONCURSOS\Bussola Estudos\Bussola versao 2` |

## 3. Arquitetura de arquivos

| Arquivo | Papel |
|---|---|
| **/index.html + /dados-site.js** | LANDING PAGE. dados-site.js é a fonte única do que aparece na home. `window.CERTIFICACOES_DATA` tem os 3 exames; `window.CONCURSOS_DATA` existe e está VAZIA desde 25/08/2026 — três trechos do index.html a leem e todos tratam lista vazia. |
| **/app/index.html** | Só markup + bloco de autenticação Firebase. ~750 linhas. |
| **/app/css/app.css** | Todo o CSS do app, incluindo bloco mobile (≤ 768px) e classes utilitárias de hover (hv-*). |
| **/app/cursos.js** | Aulas dos cursinhos: provedores + mapa edital/cursinho/matéria/tópico -> URL. **DESLIGADO em 25/08/2026 e sem dados** (CURSOS_ATIVO=false em js/ui.js). Catálogo do piloto preservado em _docs/piloto-aulas-cursinhos.json, que NÃO vai para o GitHub. Ver seções 7(t) e 8. |
| **/app/editais.js** | FONTE ÚNICA dos editais do app: window.EDITAIS_DATA. Formato documentado no comentário do próprio arquivo. |
| **/app/js/state.js** | STATE global, save/load com schemaVersion (atual: 7) + migrateState, backup exportar/importar, e a camada de sync com Firestore (cloudOnLogin, decideSync, push com debounce 2s). |
| **/app/js/engine.js** | NÚCLEO PURO (sem DOM, testável em Node): datas, ciclo 5+1+1, agendamento por densidade, revisões, simulados, gerador .ics da agenda. Memoização em getCicloPos/getNumRevisao. |
| **/app/js/ui.js** | Toda a renderização + dispatcher de event delegation (registro ACTIONS) + esc() contra XSS. Contém os mapas da Análise do Edital (EDITAL_ANALISES_POR_CHAVE + EDITAL_ANALISES; getEditalAnalise resolve em 2 níveis, sem fallback — seção 5), o canal de suporte (SUPORTE_URL + abrirSuporte) e a chave CURSOS_ATIVO (seção 7t). |
| **/app/js/pomodoro.js** | Modo Foco (25/5, pausa longa 15min a cada 4 ciclos, som Web Audio). NÃO grava dados de estudo — há teste que impede. |
| **/app/edital-*.pdf** | PDFs das Análises do Edital servidos no iframe da página 'Análise do Edital' (ex.: edital-campina.pdf, edital-sedes-df.pdf, edital-cfp.pdf). |
| **/app/tests/*.test.js** | 79 testes (node:test). engine (incl. aggregateEstrelas, hábito/consistência, calcDominio, aulas dos cursinhos), state, sync, ui-consistência, pomodoro. |
| **/app/manifest.webmanifest, /app/sw.js, /app/icon-*.png** | PWA (14/07): app instalável. sw.js usa NETWORK-FIRST (só serve cache offline — deploy nunca fica preso em versão velha) e só intercepta GET da própria origem. Registro no fim do app/index.html, apenas em https (file:// segue sem SW). Se mudar a lista SHELL do sw.js, suba a versão da const CACHE (atual: bussola-v4). |
| **/cloud/** | coach-ia-worker.js (fonte do worker do Coach IA — SEM segredos) + COACH-IA-GUIA.md (deploy passo a passo). Não é usado pelo site; é código do backend externo. |
| **/_docs/** | Documentação e ferramentas de bastidor: este handoff (o `.md` é a fonte, o `.pdf` é gerado dele), extrair-aulas-console.js, links-aulas-cfp.xlsx, piloto-aulas-cursinhos.json. Pasta de trabalho do dono, NÃO publicar. |
| **/app/conteudo/** | `conteudo-<cert>.js` (window.CONTEUDO_DATA), o texto de estudo por tópico já em HTML. **GERADO — nunca editar à mão.** Entra no SHELL do sw.js. |
| **/outputs/** | Scripts de build que rodam na máquina do dono, não no navegador: `conteudo_para_js.py` converte e valida `_conteudo/` -> `app/conteudo/`. Sem dependências, só Python 3 padrão. |
| **/_conteudo/** | Fonte do conteúdo de estudo, em Markdown, um arquivo por tópico, mais as questões em YAML. Contém a especificação do formato (LEIA-ME), os modelos e os prompts da IA redatora. Um script converte tudo em `app/conteudo/conteudo-<cert>.js`, que é o único artefato publicado. NÃO publicar a pasta. Criada em 25/08/2026. |
| **/app/editais.json, /concursos/, /certificacoes/** | LEGADO — não são mais lidos pelas páginas. Manter só como referência ou apagar. |

## 4. Regras de engenharia INEGOCIÁVEIS

- **Scripts clássicos, nunca ES Modules.** O app precisa funcionar aberto via file:// (uso local do dono). Módulos quebrariam. Ordem de escopo global: editais.js -> state.js -> engine.js -> blocos do index -> ui.js -> pomodoro.js.
- **Interação só via event delegation.** Nenhum onclick inline. Elementos declaram data-action (+ argumentos em data-*) e o dispatcher em ui.js resolve no objeto ACTIONS. Módulos novos registram ações com Object.assign(ACTIONS, {...}). O teste tests/ui.test.js FALHA se existir data-action sem handler, handler órfão ou handler inline. As chaves de ACTIONS e os valores de data-action são camelCase (a regex do teste só casa `\w+`; hífen quebra).
- **engine.js não toca no DOM.** Qualquer lógica de cálculo nova vai nele, com teste. O ciclo 5+1+1 conta DIAS DE ESTUDO (não dias da semana); dias livres (até 4) apenas esticam o ciclo no calendário.
- **Fontes únicas de dados:** app/editais.js (app) e dados-site.js (landing). NUNCA editar os .json legados — não são lidos.
- **Todo dado vindo de backup/localStorage passa por esc()** ao entrar em innerHTML (proteção XSS) e por migrateState() ao ser carregado (schemaVersion atual: 7).
- **Rodar os testes antes de publicar qualquer mudança:** cd app && node --test tests/*.test.js — os 65 devem passar.
- **Edições no código por substituição exata com contagem verificada** (replace com assert de nº de ocorrências). Nunca regenerar arquivos inteiros.
- **Padrão de escrita (09/08):** todo texto voltado ao aluno segue a skill **humanizer-br** (github.com/carlosafjr-dev/humanizer-br): sem travessão, sem o padrão 'não é X, é Y', sem gerúndio de conclusão, sem adjetivo inflado (crucial, fundamental, jornada, potencial) e sem fecho motivacional genérico. Emoji só como ÍCONE de interface, nunca dentro de frase. Isso vale para FRASES_SEGUNDA, textos do Coach e o PROMPT_COACH do worker (que carrega essas regras para tudo que a IA escreve diariamente).
- **Toda certificação incluída SAI com a Análise do Edital vinculada.** É passo obrigatório (Frente 3 da seção 5). Se o PDF não foi fornecido, PARE e solicite ao dono. Desde 25/08/2026 não existe mais fallback: sem análise registrada, a tela mostra um aviso de "ainda não publicada". Isso é melhor que exibir a análise de outro exame, mas continua sendo entrega incompleta.
- **O produto é só de certificações (25/08/2026).** Não reintroduzir concurso público — nem edital, nem seção na landing, nem vocabulário de concurseiro em texto novo — sem o dono pedir. `window.CONCURSOS_DATA` fica vazia de propósito.

## 5. Como adicionar uma nova certificação (fluxo completo)

Incluir uma certificação mexe em **três frentes**. A frente 3 (Análise do Edital) foi adicionada em jul/2026 — antes a análise era um PDF fixo para todos.

### Frente 1 — Dados do app: app/editais.js (window.EDITAIS_DATA)

Adicione **uma chave por exame**. (A estrutura permite mais de uma chave por grupo, herança do tempo em que um concurso tinha vários cargos.) Os pesos das matérias SOMAM 100; toda matéria precisa de entrada em 'topicos' (1 tópico = 1 sessão de estudo).

> **REGRA DESCOBERTA EM 25/08/2026, ao cadastrar a CPA — o número de tópicos por matéria precisa ser proporcional ao peso.** É contraintuitivo e vale ler com atenção: o peso NÃO controla quantos dias o aluno gasta em cada matéria. `getTopicosDiaBase` ordena as matérias por peso e enfileira TODOS os tópicos nessa ordem, dando exatamente uma sessão para cada um. Então o peso decide a PRIORIDADE (o que vem antes no cronograma) e a contagem de tópicos decide o TEMPO. Uma matéria de peso 10 escrita com 29 tópicos consome quase 30% do cronograma. Ao recortar o edital, mire em `nº de tópicos ≈ peso`, agrupando itens em matérias de peso baixo e detalhando em matérias de peso alto. Na CPA isso significou 20/40/30/10 tópicos para pesos 20/40/30/10, partindo de um programa que, no recorte literal da Anbima, daria 32/20/22/29.

```
"chaveUnica2026": {
  "nome": "Prefeitura de ... — Cargo",    // exibido no seletor e na topbar
  "estado": "UF",
  "grupo": "Nome do Grupo",               // agrupa cargos no dropdown (ex.: "SEDES-DF")
  "dataProva": "2026-08-30",              // ausente = certificação (aluno define a data)
  "_info": "Resumo do edital (banca, vagas)",
  "cargos": ["Nome do Cargo — 80 vagas"],
  "materias": [ {"nome":"Língua Portuguesa","peso":17,"prog":0,"conf":0,"cor":"gray"}, ... ],
  "topicos": { "Língua Portuguesa": ["Tópico 1","Tópico 2", ...], ... }
}
```

### Frente 2 — Dados da landing: dados-site.js (window.CERTIFICACOES_DATA)

Uma entrada por certificação. O menu e a seção da home (com contadores) se atualizam sozinhos.

```
{
  "id": "sedes-df-2026", "municipio": "Brasília", "estado": "DF",
  "orgao": "Secretaria de ...", "banca": "Instituto Quadrix",
  "dataProva": "2026-09-06", "edital": "Edital 01/2026", "ativo": true,
  "cargos": ["Agente Social (TDAS)", ...],
  "descricao": "Concurso com ... vagas ...", "hotmartLink": "https://pay.hotmart.com/..."
}
```

### Frente 3 — Análise do Edital (PASSO OBRIGATÓRIO): PDF + registro em ui.js

A função **getEditalAnalise()** (app/js/ui.js) escolhe a análise em **2 níveis**, nesta ordem: (1) por **CHAVE de edital** — mapa EDITAL_ANALISES_POR_CHAVE, que é o caminho normal hoje, porque CFP, CA-600 e FBB compartilham o grupo 'Certificações' e cada uma precisa da sua própria análise. (2) por **GRUPO** — mapa EDITAL_ANALISES, hoje VAZIO; fica de pé para o dia em que existir um grupo com análise compartilhada.

**Não existe mais nível 3.** Até 25/08/2026 quem não tivesse análise caía na do Campina Grande, o que virou impossível quando os concursos saíram. `EDITAL_ANALISE_FALLBACK` agora é `null`, `getEditalAnalise()` devolve `null` e `renderEdital()` esconde o iframe e o botão de download, deixando um aviso de que a análise ainda não foi publicada. **CA-600 e FBB100 estão exatamente nesse estado e são a pendência aberta desta frente.**

**CPA: resolvida em 31/08/2026.** A análise da CPA foi escrita nesta casa, não veio pronta do dono. Fonte: o Programa detalhado da CPA versão 1.2 (elaborado 02/09/2024, revisado 04/06/2025, vigência 01/01/2026) mais o edital de exames da Anbima. Arquivos: `_docs/ANALISE DO EDITAL - CPA Anbima.md` (fonte editável), `_docs/ANALISE DO EDITAL - CPA Anbima.pdf` e a cópia publicada em `app/edital-cpa.pdf`, registrada em `EDITAL_ANALISES_POR_CHAVE["cpaAnbima"]`. Backup do ui.js antes da edição: `app/js/ui.js.bak-cpaedital`.

O documento tem 8 páginas: capa no mesmo padrão do handoff, cabeçalho repetido em todas as páginas com bússola e o link do site, a prova em números (50 questões, 2h30, 35 acertos), o peso por matéria convertido em número de questões, uma estimativa de peso interno por bloco calculada pela quantidade de itens que o próprio programa detalha (2.1 vale sozinho 13 a 14 questões; 3.4 vale 9 a 10), os cinco formatos de questão, oito padrões de armadilha extraídos das pegadinhas dos 108 tópicos do acervo, a tabela de prazo mínimo calculada com a fórmula do motor (45 min por tópico, ciclo 5+1+1, 8 dias finais reservados) e um checklist de véspera.

**Como reproduzir para CA-600 e FBB100:** o gerador está em `_docs` como markdown. O PDF sai por python-markdown para HTML estilizado mais chromium `--headless --print-to-pdf`. O cabeçalho repetido em todas as páginas NÃO funciona com `position:fixed` no chromium (ele cola o bloco no rodapé); o que funciona é envolver o documento inteiro em uma `<table>` com o cabeçalho dentro de um `<thead>` com `display:table-header-group`.

Passos: 1) suba o PDF da análise na pasta **app/** (ex.: edital-cfp.pdf). 2) registre a entrada { url, sub, arquivo } no mapa certo — por GRUPO para um concurso novo; por CHAVE quando o grupo já tem outra análise. renderEdital() ajusta sozinho o iframe (src), o link de download (href + nome) e o subtítulo (#editalSubtitulo).

```
// app/js/ui.js
const EDITAL_ANALISES = {               // nível 2: por GRUPO (1 concurso = 1 grupo)
  "Campina Grande PB": { url:"edital-campina.pdf", sub:"...", arquivo:"..._Campina_Grande.pdf" },
  "SEDES-DF":          { url:"edital-sedes-df.pdf", sub:"...", arquivo:"..._SEDES_DF.pdf" }
};
const EDITAL_ANALISES_POR_CHAVE = {     // nível 1: override por CHAVE de edital
  "cfpPlanejar": { url:"edital-cfp.pdf", sub:"...CFP...", arquivo:"..._CFP.pdf" }
};
function getEditalAnalise(){            // resolve chave -> grupo -> fallback
  const ed = EDITAIS[STATE.prefeitura] || null;
  return EDITAL_ANALISES_POR_CHAVE[STATE.prefeitura]
      || (ed && EDITAL_ANALISES[ed.grupo])
      || EDITAL_ANALISE_FALLBACK;
}
```

> **PADRÃO OBRIGATÓRIO — vinculação da análise.** Nenhuma certificação é considerada "incluída" enquanto sua Análise do Edital não estiver vinculada. Se o PDF NÃO foi fornecido pelo dono, a IA deve PARAR e SOLICITAR o arquivo. Confirme sempre entrando com um aluno daquele exame e checando que a análise e o subtítulo corretos aparecem — e que nenhum exame ficou no estado de aviso sem o dono saber.

### Checklist ao incluir (repita para cada certificação)

- Frente 1 — chave(s) em editais.js (materias com pesos que somam 100; toda matéria com topicos).
- Frente 2 — entrada em dados-site.js (ativo:true).
- Frente 3 — PDF da análise em app/ + entrada em EDITAL_ANALISES_POR_CHAVE. **Se não houver PDF, solicitar ao dono antes de concluir.**
- Testes: node --test tests/*.test.js (79 passam). Publicar os arquivos alterados e conferir com Ctrl+F5.

**Logo do programa: deixou de ser passo do fluxo (decisão do dono, 25/08/2026).** Era a antiga Frente 4. O campo `logo` continua existindo no dados-site.js e funciona se for preenchido, mas ninguém precisa caçar arte para publicar um concurso: sem logo, a vitrine da Home monta um monograma sozinha. Não re-propor a exigência.


## 6. Firebase e sincronização (como funciona)

- Modelo **local-first**: cada save() grava no localStorage (chave cronos_v4) na hora e agenda push ao Firestore com debounce de 2s. Documento único por aluno: coleção alunos/{uid}.
- Regra de segurança publicada: allow read, write: if request.auth.uid == userId (cada aluno só acessa o próprio documento).
- Conflitos no login: decideSync() — dispositivo sem cronograma nunca sobrescreve nuvem configurada; dados locais de outro usuário nunca valem; entre dois estados válidos vence updatedAt mais recente (carimbado só em ações reais do usuário).
- Indicador na topbar: nuvem (sincronizado), seta girando (sincronizando), aviso (offline — app segue funcionando local).
- Plano gratuito (Spark) dá 50k leituras/20k escritas por DIA — suficiente para centenas de alunos. Monitorar em Firestore -> Uso.
- NUNCA colocar a chave de service account (*-adminsdk-*.json) em pasta publicada. A anterior foi revogada após exposição. A apiKey do FIREBASE_CONFIG no index.html é pública por design (não é segredo).
- **E-mail do domínio (Zoho Mail) — CONFIGURADO em 12/07/2026.** suporte@bussoladeestudos.com.br envia e recebe via Zoho Mail. DNS no registro.br: MX mx/mx2/mx3.zoho.com (prio 10/20/50), SPF mesclado "v=spf1 include:zohomail.com include:_spf.firebasemail.com ~all" (Zoho + Firebase Auth no MESMO registro — nunca criar dois TXT SPF), DKIM zoho._domainkey verificado e ativo. O Firebase não usa o DNS do domínio para hosting (site = GitHub Pages, registros A 185.199.108–111.153); ele só tem SPF/DKIM próprios para os e-mails do Auth (reset de senha) — preservados. Atenção: plano Zoho era Trial do Mail Premium até 23/07/2026 — fazer downgrade para o Forever Free se não assinar.

## 7. O que já foi construído (resumo do histórico)

Auditoria inicial encontrou e corrigiu: funções inexistentes em produção (showToast, getProximoSabado), precedência que zerava ordenação de urgência, mapa de calor comparando com cronograma fictício, revisões que expiravam silenciosamente, O(n²) em cálculo de datas (memoizado), XSS via backup importado, chave admin exposta (revogada). Modularização completa: de 1 arquivo de 5.349 linhas para a arquitetura da seção 3.

Features: Modo Foco (Pomodoro puro), Palavra do Coach (página + badge de leitura diária que sincroniza), Exportar para Agenda (.ics da semana, com link de retorno ao painel e UIDs estáveis), sync multi-dispositivo, responsividade mobile, até 4 dias livres/semana, dias transferidos exibidos riscados ('Data transferida'), Dashboard reorganizado, landing restilizada na identidade do app. Entrega pós-venda automática (self-service de senha via Firebase Auth).

**Sessão jul/2026:** (a) menu 'Exportar para Agenda' renomeado para **'Adicionar ao Calendário'**, com ajuda celular-primeiro (iPhone/Android/Computador) — o .ics já era universal, o atrito era só de embalagem. (b) **Análise do Edital por concurso**: antes um PDF fixo (Campina) para todos; agora getEditalAnalise() resolve em 3 níveis (chave -> grupo -> fallback), ajustando PDF/subtítulo/nome, e renderEdital() troca ao mudar de concurso. Incluídas as análises do SEDES/DF (por grupo) e da certificação CFP (por chave). Firmado o PADRÃO da seção 5: análise sempre vinculada, ou solicitada ao dono se ausente. (c) canal de suporte MVP **'Fale Conosco'** na seção Configurações: link externo em SUPORTE_URL (sem backend); abrirSuporte() usa location.href para mailto: (atual: suporte@bussoladeestudos.com.br) e window.open(_blank, noopener) para links web (WhatsApp/formulário no futuro). (d) **Avaliação por tópico em dias multi-tópico (12/07)**: estrelas por tópico no card do dia (renderDiaNormal) e no Retorno Técnico; setStarTopico/gravarNotaTopico gravam est.percepcoes[ti] + est.estrelasList[ti]; agregado do dia = pior nota (engine.aggregateEstrelas, pura, com teste — 32 testes no total); dia intensivo só conclui quando todos os tópicos forem avaliados. Dias de tópico único inalterados. (e) **Coach com IA (redação) (12/07)**: o motor de regras segue diagnosticando (montarCoachDiagnostico em ui.js coleta só números/nomes de matérias); a IA APENAS redige. Backend: Cloudflare Worker coach-bussola.adriano-m-goulart.workers.dev (fonte em cloud/coach-ia-worker.js, deploy em cloud/COACH-IA-GUIA.md) — valida token Firebase, cache 1x/dia por aluno, Gemini (modelo via variável GEMINI_MODEL = gemini-flash-lite-latest, free tier ~1.000/dia; chaves GEMINI_API_KEY/FIREBASE_API_KEY em variáveis do worker, NUNCA no repo). Front: COACH_IA_URL + atualizarCoachIA + cache STATE.coachIA {texto,data}; texto passa por esc(); fallback garantido para o texto de regras em erro/offline/file://. COACH_IA_URL vazio desativa tudo. (f) **Grade semanal 4+4 estilo planner (14/07)**: Seg-Qui na linha 1; Sex, Sáb, Dom e Anotações na linha 2 — 8 células IGUAIS (grid 4 colunas), simétrico como calendário; divisor 'a semana continua' removido (ficou obsoleto). Telas médias: 2 colunas; mobile: 1. Barra 'Semana atual' movida do topo para o RODAPÉ da grade (libera a dobra). Cards multi-tópico empilhados (matéria em linha própria com ellipsis CSS + title — removido o truncamento manual de 13 chars); estrelas por tópico com rótulo em cima; Retorno Técnico compacto: 4 itens + botão 'Ver todos' (ação toggleSabMais). (g) **Popup de segunda-feira (14/07)**: 1x por semana (só segunda, aluno com cronograma, some após a prova), frase motivacional do banco FRASES_SEGUNDA (24 frases em ui.js, rotação determinística por semana) + CTA que navega para 'Adicionar ao Calendário' (navTo agenda). Controle: STATE.popupSegundaEm (sincroniza). Ações: popupSegundaAgenda/fecharPopupSegunda. CSS: .ps-*. (h) **Polimento mobile (14/07)**: seletor Hoje/Semanal/Mensal vira segmento horizontal de largura total no mobile (antes empilhava); ao abrir o Cronograma no celular (visão semanal, semana atual) rola automaticamente até o card de hoje (scrollAteCardHoje, extraída de irParaHojeCronograma); banner 'Como funciona o Método' ganhou ✕ com persistência sincronizada (STATE.bannerMetodoFechado, ação fecharBannerMetodo). (i) **PWA (14/07)**: manifest.webmanifest (escopo /app/, standalone, tema #173E2C), ícones gerados na identidade (192/512/maskable/apple-touch), sw.js network-first com cache versionado e fallback offline. O aluno instala pelo 'Adicionar à tela inicial'. Decisão registrada: PWA em vez de loja (Capacitor) — evita comissão de compra in-app da Apple no modelo Hotmart e mantém deploy instantâneo; Capacitor fica como opção futura de marketing. Convite de instalação: beforeinstallprompt é INTERCEPTADO (preventDefault) e substituído por um balão estilo chat do Coach (checarBalaoPwa/instalarPwa/adiarPwa em ui.js) — só celular, só aluno com cronograma, 'agora não' silencia 14 dias (localStorage bussola_pwa_adiado, por aparelho); iPhone (sem prompt) recebe o passo a passo do Safari no próprio balão. Balão aparece no TOPO (abaixo da topbar). Caminho manual: item 'Instalar o App' na seção Recursos do menu (ação menuInstalarApp — limpa o adiamento, usa o prompt guardado, ou instrui iOS/navegadores sem prompt via toast). CSS: .pwa-balao/.pb-*. (j) **Dashboard mobile — Evolução por Matéria (14/07)**: item vira card empilhado (grid-template-areas: nome+badge de confiança em cima, barra de progresso em largura TOTAL embaixo). Corrigidos: badge vazando do card (causa: .mapa-materia com white-space:nowrap estourando o grid — no mobile agora quebra linha) e barras ocultas (.mapa-prog-col tinha display:none no bloco &lt;=768). Só CSS. (k) **Landing mobile + vitrine (14/07)**: corrigido vazamento lateral do header (dropdowns e btn-mini escondidos em &lt;=680px; a stickybar já cobre o CTA) e o 'Já sou aluno' voltou a aparecer no celular (.lnk-aluno re-exibido). Nova seção .vitrine (carrossel scroll-snap sob o hero, id programas): montada do dados-site.js — concursos ativos por data de prova + certificações, etiqueta de categoria, clique rola à seção; campo 'logo' opcional no dados-site.js, com fallback de monograma; setas só no desktop. Tudo em /index.html (CSS+HTML+IIFE), sem libs.

**(l) Dashboard — bloco de hábito (09/08):** dois cards novos abaixo do #dashHero (div #dashHabito). **Calendário de consistência** (reformulado em 09/08, redesenhado no mesmo dia): grade MENSAL (7 colunas, dias numerados) com navegação de meses (_habMesOffset, ação navegarMesHabito, sem avançar para o futuro). **UMA COR FORTE SÓ** — a versão anterior tinha cinco tratamentos competindo e tracejado em metade das células, o que fazia o card parecer uma parede de erros, oposto do 'sem culpa' que o produto promete. Regras atuais: verde escuro cheio = dia em que o aluno ESTUDOU (crédito pela DATA REAL do registro, est.registradoEm, igual ao gráfico 'Quando você estuda': registrar cinco dias atrasados num domingo pinta o domingo); dia previsto sem registro NÃO leva tracejado nem contorno (fundo bege quase invisível, porque vazio informa sem acusar); descanso fica só com o número apagado em itálico; marco (simulado/RT/Revisão Geral) é um PONTO dourado dentro da célula; hoje tem anel fino; legenda reduzida a 3 itens. Estudar em dia livre conta como estudo. O dia de hoje sem registro é 'a fazer', nunca falha, e fica fora do denominador. Clicar num dia abre o Cronograma (calCellClick). Layout: calendário em LARGURA TOTAL do card (células maiores) e os números numa faixa ABAIXO dele, separados por uma linha. Versão com números na lateral foi descartada pelo dono. Cuidado ao editar o CSS: a regra .cm-grid (display:grid, 7 colunas) é o que sustenta a grade — apagá-la faz as células virarem texto corrido ('DSTQQSS'). **COMPARAÇÃO JUSTA**: no mês em curso compara com o MESMO PERÍODO do mês anterior ('4 no mesmo período de julho') e omite o percentual; a variação em % só aparece com o mês fechado. Bug real que motivou isso: no dia 9 o card mostrava -75% comparando 9 dias de agosto contra julho inteiro, e todo aluno 'despencaria' todo mês. A linha de apoio traz 'X de Y dias previstos até hoje (Z%)' com rótulo correto (antes dizia 'no mês' contando só os dias decorridos). O destaque é quanto o aluno estudou, não quanto faltou. Aderência mede o PLANO; Consistência mede QUANDO houve estudo. DECISÃO do dono: o formato calendário é obrigatório no dashboard, porque sequência cheia versus buraco mostra intensidade e perda de ritmo num olhar. Não confundir com a visão Mensal do Cronograma (essa é operacional, mostra a matéria de cada dia); a do dashboard é avaliativa e compacta. Engine: calcMesConsistencia(offset,hojeRef). O antigo calcHeatmapConsistencia continua no engine, alimentando as métricas de resumo. **Quando você estuda** (ex-'Ritmo por dia da semana'): distribuição dos registros por dia da semana — baseada em STATE.dias[k].registradoEm, a data em que o aluno REALMENTE marcou (carimbada por _carimbarRegistro nos 5 pontos de conclusão: setStar, setStarTopico, setStarHoje, setSabStar e marcarDia1Concluido). Motivo (09/08): antes o gráfico agrupava pela data PLANEJADA, então marcar 5 dias atrasados num domingo fazia as barras subirem em terça/quinta/sexta — não respondia 'em que dias eu estudo'. Registros antigos (sem o campo) caem na própria data planejada. calcRitmoSemanal retorna {dias:[{dow,registros,pct,livre}],total,maiorLote} e o insight avisa quando há marcação retroativa em massa (maiorLote.qtd>=3). O dia de hoje agora conta (a iteração é sobre os registros, não sobre o calendário). REGRA (09/08): um dia é CUMPRIDO por qualquer entrega prevista para ele — conteúdo (percepcao), Retorno Técnico (rtFeito, carimbado no PRÓPRIO dia do RT por setSabStar, já que as notas vão para os dias dos tópicos), mini simulado (simuladoFeito) ou Revisão Geral (revisaoGeralFeita); antes só percepcao contava e sábados de RT/dias de simulado apareciam como falha mesmo feitos.

**Bússola do rumo (09/08):** OCUPA o cabeçalho do dashboard (#bussolaRumo em .dash-saudacao). A saudação 'Boa tarde' e o subtítulo foram removidos do HTML a pedido do dono; a linha que escrevia em #mainTitle virou defensiva (if(_mt)) e não deve ser 'consertada' recolocando o título. Sem card: fica sobre o fundo areia da página. Duas rotações independentes na agulha: .bz-base (rumo, com transição) e .bz-osc (oscilação contínua de 2°, como bússola real), além de .bz-girando no estado sem registros. Respeita prefers-reduced-motion. SVG com agulha que gira por CSS transform: aderência 100% aponta o Norte (0°, rótulo APROVAÇÃO) e o desvio cresce até 90° em 0% (engine.calcRumo(aderenciaPct,temRegistro), pura e testada). Cor da agulha muda por faixa (verde, âmbar, coral) e sem nenhum registro ela gira devagar com o texto de calibração. Corrigido no mesmo dia o plural quebrado do chip ('6 revisãoões pendentes').

**Sala de medalhas (09/08):** bloco no topo do dashboard (#dashMedalhas, à direita da bússola dentro de .dash-saudacao, que virou grid 1.3fr/1fr para alinhar com as colunas de baixo). Mostra a PATENTE do aluno, barra de XP para a próxima, as últimas medalhas conquistadas em ícones e a próxima meta mais perto. Engine: calcMedalhas(coberturaPct) devolve {medalhas[20],conquistadas,total,xp,patente,proxima}; a cobertura entra por parâmetro porque calcCobertura mora no ui.js. 20 medalhas em 7 famílias (Constância 7/21/60 dias, Edital 25/50/90%, Domínio 10/30/60 tópicos 5★, Revisão 10/40/100, Simulado 1/5/12 + Pontaria 70% de média, Retorno Técnico 4/12, Volume 20 dias num mês, Resiliência retomar após 3+ dias parado). XP: dia com estudo 10, tópico 5★ 15, revisão 8, simulado 25, RT 12, medalha 50. Níveis do aluno (PATENTES no engine) em escala UNIVERSAL de metais, decisão do dono em 09/08 (jargão náutico tipo Grumete/Timoneiro exigia explicação): Iniciante 0, Bronze 300, Prata 800, Ouro 1600, Platina 2800, Diamante 4500. A galeria mostra TODAS as 20 medalhas, as bloqueadas em cinza com tooltip do que falta, porque ver o que ainda dá para conquistar motiva mais do que ver só o passado. Cor por NÍVEL da medalha (campo nivel): 1 bronze, 2 prata, 3 ouro; a cor do nível do aluno (classes md-p0 a md-p5, variável --md-cor) tinge o selo e a barra de XP. Ordem dos cards na coluna direita (decisão do dono, 09/08): 1) 'Quando você estuda', 2) 'Consistência' (heatmap + legenda + 3 métricas), 3) 'Desafios' — a gamificação vive em CARD PRÓPRIO, separada do calendário. Outra REGRA: dia livre planejado NUNCA conta como falha (o método prevê até 4/semana) — vale para heatmap, streaks e ritmo. Engine (puro, 3 testes novos, total 35): calcStreaks, calcHeatmapConsistencia, calcRitmoSemanal — todas aceitam hojeRef ISO para teste determinístico. UI: renderHabito + _svgHeatmap/_htmlRitmo/_insightRitmo. Sem bibliotecas de gráfico (regra do file://).

**(m) Dashboard reorganizado (09/08):** topo = card de Aderência sozinho (largura total) com dois chips clicáveis no rodapé — revisões pendentes (navTo revisoes) e sequência (navTo cronograma) — que substituíram os mini-cards 'dias de sequência' e 'revisões pendentes'. O #dashHero fica DENTRO da coluna esquerda (não ocupa a largura toda) para o bloco de hábito subir ao topo da tela. .dash-cols em 2 colunas: à esquerda Aderência + Evolução por Matéria (compacta: 6 prioritárias + botão 'Ver todas', ação toggleMapaTudo, preferência só de sessão em _mapaTudo); à direita .dash-side (#dashHabito) com Ritmo por dia da semana em cima e Consistência embaixo (.hab-stack). Mobile/PWA (&lt;=1024px): .dash-cols vira flex column e .dash-main usa display:contents para reordenar os 3 cards (#dashHero order:1, .dash-side order:2, .card-evolucao order:3) — o aluno vê Aderência, depois hábito, depois a lista de matérias; as 4 métricas do heatmap ficam 2x2 (4 colunas só a partir de 1400px). O card de Aderência foi COMPACTADO (~230px -> ~135px de altura): número e barra na mesma linha, explicação longa virou tooltip (title) da cobertura e o rodapé junta cobertura + chips numa linha só. Esse card agora usa CLASSES (.hero-card/.hero-top/.hero-mid/.hero-num/.hero-bar/.hero-foot/.hero-cob/.hero-chips) em vez de estilos inline — aplicação da 'regra do escoteiro' do item de backlog sobre extrair inline para classes.

**(n) DOMÍNIO DO EDITAL — regra permanente: confiança NUNCA colore sozinha (09/08).** Problema encontrado pelo dono: em Evolução por Matéria, Psicologia aparecia com badge VERDE de 100% de confiança enquanto a barra dizia 60% abaixo do esperado. A causa está em calcMateriasStats (ui.js): a confiança é a média das notas dos tópicos JÁ avaliados (denominador = confs.length), enquanto o progresso usa o edital inteiro (denominador = totalTopicos). Duas bases diferentes na mesma linha, e com 2 ou 3 notas a média é ruído com aparência de certeza. Solução em três camadas, todas ativas: **(1)** engine.calcDominio(confPct, coberturaPct) devolve {dominio, confParcial, faixa}, com dominio = confianca x cobertura / 100 (Psicologia: 100% x 40% = 40%). Função pura, 5 testes. **(2)** A coluna da tabela deixou de se chamar Confiança e virou **Domínio**: o número grande e a COR seguem o domínio, e a confiança desceu para a linha de base do badge no formato 'conf 100% · 2 de 5' (classe .cb-base), para o aluno ver sempre sobre quantos tópicos aquela nota vale. **(3)** Amostra abaixo de DOMINIO_MIN_AMOSTRA (50% de cobertura da matéria) marca confParcial: o badge ganha a classe .cb-parcial (textura riscada + asterisco no número) e o tooltip explica que a confiança foi medida em poucos tópicos. Efeitos: a lista passou a ser ordenada por RISCO, (100 - dominio) x peso, em vez de atraso puro, então matéria cara e mal dominada sobe ao topo; o diagnóstico enviado à IA leva dominioPct, topicosVistos e topicosTotal; e o texto do Coach parou de dizer que confiança alta significa domínio (p2 mostra os dois números separados, p3 e p4 falam em domínio). **NÃO reverter para confiança colorida sozinha** e NÃO trocar a base da confiança para o edital total: se confiança e cobertura medirem a mesma coisa, o aluno perde o indicador que responde 'entre o que já estudei, onde estou fraco?', que é o que orienta o Retorno Técnico. As duas métricas convivem: confiança = qualidade do que foi visto; domínio = quanto do edital está na mão.

**(o) Ajustes de altura do topo do dashboard (09/08):** o quadro de medalhas nasceu com ~280px e empurrou o calendário de Consistência para fora da primeira tela, quebrando a regra do dono. Foi compactado para ~150px (mesma faixa da bússola): ícones menores com font-size em clamp() ocupando a LARGURA TOTAL do card (nada de max-width na .md-lista), título '■ Quadro de Medalhas' com o contador à direita (.md-head) e bússola em 96px centralizada. O card 'Quando você estuda' também encolheu ~45px (.rt-cols 92px, .rt-bar-wrap 56px, menos padding). **REGRA: qualquer coisa nova no topo do dashboard precisa caber sem esconder o calendário.**

**(p) Galeria de Troféus (09/08, refatoração visual do quadro de medalhas):** o bloco deixou de ser mais um cartão claro de relatório e virou o ÚNICO painel ESCURO do dashboard. Classe raiz .md-gal (a antiga .md-wrap não existe mais): fundo em três camadas sobre #173E2C (dois radial-gradient + um linear), border:none, border-radius 24px, box-shadow escuro e difuso (0 18px 38px -14px) para leitura de vidro flutuando, e um ::before de 1px com gradiente branco no topo fazendo o fio de luz. Layout .md-corpo em 2 colunas: HERO à esquerda (.md-selo de 52px com gradiente radial na cor do nível, trazendo o emoji da ÚLTIMA medalha conquistada, + nome do nível + barra de XP) e COLEÇÃO à direita (.md-lista com repeat(auto-fit,minmax(30px,1fr)), todas as 20 peças). Materialidade: conquistada = cor plena, borda na cor do nível, inset glow e drop-shadow, com hover transform:scale(1.1) e halo externo; bloqueada (.md-off) = filter grayscale(100%) opacity(40%), subindo para 65% no hover. As cores dos níveis (md-p0..md-p5) foram CLAREADAS porque as antigas foram escolhidas para fundo creme e sumiam no escuro. Mobile (&lt;=768px): .md-corpo empilha em 1 coluna, hero em cima e vitrine embaixo, raio de 20px. Motivo do lado a lado no desktop: empilhar hero e coleção sobe a altura do painel e empurra o calendário para fora da 1ª tela, ver item (o). Acessibilidade: cada peça tem tabindex=0, role=img e aria-label; :focus-visible recebe o mesmo scale do hover; prefers-reduced-motion desliga as transições. O título passou de 'Quadro de Medalhas' para 'Galeria de Troféus'.

**(q) Rodapé do calendário + CSS morto que ressuscitava o desenho antigo (09/08).** BUG DE FUNDO: o redesenho do calendário criou o bloco .cm-* novo por volta da linha 598, mas o bloco ANTIGO continuou no arquivo depois dele (linhas ~641-656) e, por cascata, VENCIA. Era ele que pintava .cm-falha com border-style:dashed e .cm-livre com fundo cinza sólido. Ou seja: o dono estava vendo o desenho descartado, e a legenda nunca bateria com o CSS. O bloco morto foi apagado (sobraram só .cm-up/.cm-down, que o resumo usa, e .cm-fora foi recriado no bloco vivo). **LIÇÃO: ao redesenhar um componente, procurar seletores duplicados MAIS ABAIXO no arquivo antes de dar por encerrado (`grep '^\.prefixo-'` resolve).** REFATORAÇÃO DO RODAPÉ, nesta ordem fixa: (1) .cm-leg logo abaixo da .cm-grid, flex com 5 estados REAIS (estudou / previsto sem registro / descanso / simulado ou retorno técnico / hoje), swatches .cm-sw-*; a antiga .hab-leg do card de Consistência foi REMOVIDA porque a informação subiu para junto da grade. Atenção: o dono leu o tracejado como 'descanso' quando na verdade era 'previsto e sem registro' — a legenda usa a semântica do engine, não a leitura intuitiva. (2) .cm-destaque com a comparação ENTRE PARÊNTESES na mesma frase ('■ 1 dia com estudo em agosto (vs. 2 no mesmo período de julho)'), em vez de jogada à direita com margin-left:auto. (3) .cm-mini em 4 colunas com UNIDADE em todo número: aderência ao plano (%), maior sequência (N dias), ritmo (30 dias) (%), na melhor semana (N dias). A unidade vai num &lt;i&gt; menor e cinza dentro do &lt;b&gt;, e cada métrica tem title explicando o cálculo. Mobile &lt;=560px: as 4 métricas viram 2x2. ORÇAMENTO DE ALTURA: a legenda nova foi paga encolhendo .cm-cel de 30px para 28px, .cm-destaque b de 1.35rem para 1.15rem e os espaçamentos do .cm-lado; o card terminou MENOR do que antes, porque o calendário precisa continuar visível na primeira tela (regra do dono, ver item (o)).

**(r) Bússola refinada (09/08).** ETIQUETA DE STATUS: engine.calcRumo passou a devolver também tag e icone (mapa RUMO_TAGS: norte ■ No Ritmo, rota ■ Rota Firme, desvio ■■ Pequeno Desvio, fora ■■ Rota Desviada, perdido ■ Fora de Rota, calibrando ■ Calibrando), renderizados no .bz-badge acima de APROVAÇÃO. As FRASES foram reescritas para conter só a AÇÃO, porque antes repetiam o diagnóstico ('Rota desviada. Comece pelo...') e ficariam redundantes ao lado do badge; há teste garantindo que nenhuma frase começa pela própria tag. COR ÚNICA POR NÍVEL: a variável --bz-cor no .bz-wrap agora tinge agulha E badge (antes cada um tinha regra própria), com color-mix para fundo 14%, texto 72% e borda 32%. CONTÊINER FANTASMA: .bz-wrap ganhou border:1px solid rgba(0,0,0,.05), border-radius 18px e um gradiente branco quase imperceptível; delimita a área sem virar cartão e sem competir com os cards brancos reais. PROFUNDIDADE: o mostrador usa radialGradient (#bzFace) + filtro SVG de sombra INTERNA (#bzInset, feComponentTransfer invertendo o alpha), porque box-shadow:inset não vale para forma SVG; a agulha e o pino recebem drop-shadow via CSS, então parecem pairar sobre o disco. ALTURA: bússola de 96px para 84px (76px no mobile), .dash-saudacao com margin-bottom .75rem e gap .9rem, e a galeria de troféus foi apertada junto (padding, .md-head, selo 52->46px, .md-prox) porque a ALTURA DA LINHA é a do maior dos dois blocos: encolher só a bússola não sobe nada. Limpeza: .cm-leg-dot e .cm-leg-hoje foram apagados (órfãos desde que a .hab-leg saiu do card de Consistência).

**(s) Galeria translúcida e vitrine resumida (09/08).** O verde do painel ficou pesado demais contra o bege do dashboard: o linear-gradient passou de cores sólidas (#1E4C36/#173E2C/#102C1F) para rgba com alpha .84-.88 sobre tons mais claros (46,102,74 / 35,84,61 / 27,68,49), somado a backdrop-filter:blur(6px) e box-shadow mais leve. O fundo do dashboard passa por baixo, e o painel deixa de parecer um buraco preto no layout. VITRINE RESUMIDA: mostrar 20 silhuetas cinzas de uma vez enchia 4 fileiras e empurrava os cards de baixo. Agora renderMedalhas mostra _LIM_MED=10 peças (CONQUISTADAS primeiro, depois as pendentes na ordem do engine) e um botão .md-mais com '+N' que expande para todas; expandido, o botão vira '−' e recolhe. Estado em _medExpandido (só de sessão, como _mapaTudo), ação toggleMedalhas registrada em ACTIONS. BÚSSOLA À ESQUERDA: .dash-saudacao com align-items:start, #bussolaRumo com justify-content:flex-start e .bz-wrap idem, então o bloco encosta no canto superior esquerdo em vez de flutuar centralizado na coluna.

### (t) AULAS DOS CURSINHOS — piloto de 10/08, DESLIGADO em 25/08/2026

> **Estado atual: fora do ar.** O código e os 8 testes continuam no projeto, mas a chave `CURSOS_ATIVO=false` (app/js/ui.js) apaga a feature inteira e o app/cursos.js foi publicado sem dados. Não religue por conta própria: a condição para voltar está na seção 8. Esta subseção fica no histórico porque a arquitetura foi decidida com cuidado e não deve ser reinventada quando o recurso voltar.

**Problema que resolve:** a plataforma planeja o estudo mas não entrega material. Solução: o aluno declara em Configurações qual cursinho ele JÁ assina, e cada tópico do edital vinculado a alguma aula ganha um botão com o TÍTULO da aula. Arquivo /app/cursos.js (window.CURSOS_DATA).

**DECISÕES DO DONO (10/08):** links CURADOS por ele, iguais para todos; preenchimento por PLANILHA que um script converte; seletor na página de Configurações (modal de setup).

**MODELO CATÁLOGO + VÍNCULOS** (a primeira versão, um link solto por tópico, durou uma rodada e foi descartada): o recorte do curso NÃO bate com o do edital. A aula 'O Processo de Planejamento Financeiro do Profissional CFP' cobre TRÊS tópicos de uma vez, e um tópico pesado pode exigir duas aulas. Então a aula é cadastrada uma única vez em aulas[edital][cursinho].catalogo=[{n,t,u}] e os tópicos apontam para o número: aulas[edital][cursinho].topicos[materia][topico]=[n,...]. O nº é a chave do vínculo: NÃO renumerar o catálogo depois de vincular. Aula sem URL fica no catálogo de propósito, como mapa do que falta cadastrar.

**Engine (puro, 8 testes):** getAulas(edital,cursinho,mat,top) devolve [{n,t,u}] só com URL válida e na ordem escrita; getAulaLink é atalho para a primeira; getProvedores/getProvedor alimentam o seletor; contarTopicosComAula conta TÓPICOS que abrem aula (não aulas do catálogo, porque aula sem vínculo não vira botão para ninguém). Duas garantias que NÃO podem sumir: (1) a busca é TOLERANTE, _normTexto tira acento, caixa, pontuação e espaço repetido, porque os nomes serão digitados à mão; (2) só passa URL https, validada por _urlSegura, o que bloqueia javascript:/data: mesmo vindo do arquivo de dados. Sem vínculo o botão simplesmente não aparece (falha em silêncio: melhor sem botão do que com botão para o lugar errado). STATE.cursinho guarda o id escolhido (migração v2 garante string).

**UI:** renderCursinhoSelect monta o &lt;select&gt; filtrado pelo edital ativo; salva por data-change='salvarCursinho' (o listener de change usa data-change, NÃO data-action, que é só para click); _btnAula(mat,top) rende .aula-bloco com o título de cada aula (target=_blank + rel=noopener) no card de dia único, em cada linha do dia multi-tópico e na tela Hoje. sw.js: cursos.js entrou no SHELL.

**FLUXO DE PREENCHIMENTO:** outputs/gerar_planilha_aulas.py emite _docs/links-aulas-cfp.xlsx com DUAS abas por cursinho, '· Aulas' (nº, título, URL: cada URL colada uma só vez) e '· Vínculos' (uma linha por tópico do edital, onde se escreve o nº da aula, ou '2,4' para várias). Depois de preenchida, outputs/planilha_para_cursos.py reescreve o bloco aulas do cursos.js, valida com node e AVISA sobre URL não-https, número inexistente no catálogo e vínculo para aula ainda sem URL. A coleta dos títulos e URLs sai de _docs/extrair-aulas-console.js (v2 de 25/08: coleta a cada passo da rolagem, porque listas virtualizadas descartam do DOM o que sai da viewport — foi assim que as aulas 15 a 19 do módulo 1 sumiram na v1).

**Até onde o piloto chegou:** Prof. Lucas Silva, CFP, módulo 1 catalogado (20 aulas, com o salto do 14 ao 20), 1 URL cadastrada cobrindo 3 tópicos. Faltavam os módulos 2 a 8 e os cursos de Edgar Abreu e Rafael Toro. Todo esse conteúdo está preservado em _docs/piloto-aulas-cursinhos.json.

**O QUE MUDOU EM 25/08 (desligamento):**

1. app/cursos.js: `provedores: []` e `aulas: {}`. Com provedores vazio, getProvedores devolve [] e o seletor se esconde mesmo se a chave for religada por engano — o desligamento não depende de um ponto só.
2. app/js/ui.js: `const CURSOS_ATIVO=false;` no bloco MEU CURSINHO. Guarda em renderCursinhoSelect (esconde a linha #rowCursinho) e em _btnAula (devolve string vazia). Mesmo padrão de COACH_IA_URL="".
3. app/sw.js: CACHE subiu para bussola-v3, para o aluno que já tinha o app instalado não continuar servindo a versão anterior do cache offline.
4. Nada foi apagado do engine nem dos testes: os 8 testes de aulas usam fixture própria (FIX_CURSOS em tests/engine.test.js) e continuam passando com o arquivo de dados vazio. Total: 58 testes.

**Motivo do desligamento** (o plano de retomada está na seção 8): cursos.js é servido publicamente pelo GitHub Pages. Publicar ali o catálogo de um curso de terceiro expõe a grade dele para qualquer pessoa, não só para quem assina, e o produto passa a ficar mais valioso às custas de um material que não é nosso e sem autorização de ninguém. A raspagem em si é defensável (assinante lendo o HTML que já está na tela dele), o arquivo público não.

### (u) SÓ CERTIFICAÇÕES — concursos removidos em 25/08/2026

Decisão do dono: estreitar o foco do produto. Os dois concursos publicados (Campina Grande PB e SEDES-DF) saíram inteiros. O dono confirmou que não havia aluno ativo neles antes da remoção — as provas eram 30/08 e 06/09, então apagar com aluno dentro teria derrubado o cronograma na reta final.

**O que foi removido:**

1. `app/editais.js`: as 10 chaves de cargo (6 `cg*` de Campina Grande, 4 `sedesDf*` do SEDES-DF). Sobraram `cfpPlanejar`, `ca600Abecip` e `fbb100Febraban`, os três com pesos somando 100 e todas as matérias com tópicos.
2. `dados-site.js`: `window.CONCURSOS_DATA` virou `[]`. A variável ficou porque o index.html a lê em três pontos e todos já tratam lista vazia.
3. `index.html` (landing): a `<section id="concursos">` e o dropdown "Concursos" da topbar saíram, junto com duas IIFEs que ficaram órfãs. **Atenção a uma armadilha:** a IIFE do dropdown pegava o botão por `document.querySelector('.nav-drop-btn')`, sem id. Com o bloco de concursos fora do HTML, esse seletor passaria a casar com o botão de CERTIFICAÇÕES e sequestraria o comportamento dele. Remover a IIFE não foi limpeza cosmética, foi correção.
4. `app/js/ui.js`: `EDITAL_ANALISES` esvaziado e `EDITAL_ANALISE_FALLBACK` agora é `null` (ver seção 5). Textos de interface passaram de "concurso" para "certificação".
5. PDFs e pastas de concurso movidos para `_to_delete/` na máquina do dono. No repositório do GitHub ainda é preciso apagar `app/edital-campina.pdf` e `app/edital-sedes-df.pdf` à mão.

**MIGRAÇÃO v3 (schemaVersion 2 -> 3), a parte que não pode ser desfeita sem pensar:** `engine.getMaterias()` cai no PRIMEIRO edital da lista quando `EDITAIS[STATE.prefeitura]` não existe. Sem migração, quem tivesse um concurso salvo no localStorage passaria a ver o conteúdo do CFP sob o nome do concurso antigo, sem nenhum aviso. Então `migrateState` detecta a chave morta e devolve o aluno ao setup, limpando `prefeitura`, `concurso`, `cargo`, `inicio`, `prova` e `dias`. O nome do aluno e o resto do STATE ficam. A migração só roda no navegador: em Node o catálogo vem vazio e ela é ignorada de propósito, senão zeraria qualquer estado de teste. Três testes novos cobrem os três caminhos (chave morta, certificação intacta, Node sem catálogo). Total: 61 testes.

**O que ficou para trás de propósito:** os identificadores internos continuam com vocabulário de concurso — `STATE.prefeitura`, `STATE.concurso`, as classes `.concurso-picker` e `.topbar-concurso`, a ação `toggleConcursoDropdown`. Renomear exige migração de schema e mexer em CSS, HTML e ACTIONS ao mesmo tempo, sem ganho para o aluno. Está no backlog como prioridade baixa. A seleção em dois níveis (grupo -> exame) também ficou redundante, já que hoje só existe o grupo "Certificações".

### (v) CONTEÚDO DE ESTUDO POR TÓPICO — pipeline de 26/08/2026

O aluno abre o card do dia, toca em "Ler o conteúdo" e cai numa página de leitura com o texto daquele tópico. Primeira peça do plano de conteúdo próprio; as questões de simulado e revisão vêm depois, no mesmo pipeline.

**Autoria em Markdown, publicação em .js gerado.** O app não pode buscar arquivo em tempo de execução (regra do `file://`), então o navegador carrega `window.CONTEUDO_DATA` de um `.js`. Mas escrever texto longo dentro de `.js` à mão é onde nascem os erros de escape, então a fonte é Markdown, um arquivo por tópico, em `_conteudo/<cert>/<materia>/NN-topico.md`. Mesmo padrão das aulas dos cursinhos (planilha -> `cursos.js`), com Markdown no lugar da planilha.

**`outputs/conteudo_para_js.py`** faz a conversão e é onde mora a validação. Sem dependências, só Python 3 padrão, para rodar no Windows do dono sem instalar nada. Ele derruba a conversão (exit 1) quando encontra: front matter incompleto, `id` repetido, matéria ou tópico que não existe no `editais.js`, HTML cru no Markdown, link (proibido nesta fase), seções fora do padrão, ou qualquer tag fora da lista branca no HTML gerado. Avisa (sem derrubar) sobre travessão, `[CONFERIR]` pendente, contagem de palavras fora de 800-1500 e cartão de revisão com mais de 10 linhas. E imprime a cobertura por matéria, que é a régua do quanto falta escrever.

**O renderizador de Markdown é próprio e fechado**, cobrindo exatamente o subconjunto documentado no LEIA-ME: `###`, `####`, negrito, itálico, listas, tabelas simples, citação, código inline e parágrafo. Não é um parser genérico de propósito: o que não está na lista branca vira erro em vez de passar batido.

**Por que o HTML NÃO passa por esc() na renderização.** As seções chegam prontas do build, montadas de um subconjunto fechado e validadas contra lista branca. É dado de build, curado pelo dono, na mesma categoria do `editais.js`. A regra do `esc()` continua valendo integralmente para o que vem de backup, localStorage ou da IA do Coach. O que nunca pode acontecer é texto de aluno entrar por este caminho.

**Engine (puro, 4 testes novos, total 65):** `getConteudo(edital,materia,topico)` devolve o registro ou `null`; `temConteudo` é o atalho booleano; `contarTopicosComConteudo` mede a cobertura. O vínculo é matéria + tópico com a MESMA tolerância das aulas (`_normTexto`), então mudar o texto de um tópico no `editais.js` faz o conteúdo sumir em silêncio, de propósito, e o conversor acusa o órfão na rodada seguinte.

**UI:** `_btnConteudo(mat,top)` só devolve botão quando existe texto para aquele tópico, então o aluno nunca clica em algo que abre tela vazia. Ocupa o mesmo lugar do antigo `_btnAula`, nos três pontos: card de dia único, cada linha do dia multi-tópico e a tela Hoje. Ação `abrirConteudo` guarda de onde o aluno veio (`_conteudoVoltarPara`) para o botão Voltar não jogá-lo sempre no cronograma. Página `page-conteudo` sem item de menu, porque só se chega nela pelo tópico. CSS no bloco `.cont-*`, coluna de 760px porque linha longa cansa e o aluno lê no celular.

**Estado em 29/08/2026: 75 tópicos publicados de 100 na CPA.** Produtos do Mercado Financeiro fechada (40/40), Relacionamento com o Cliente fechada (30/30) e o bloco de matemática financeira de Estrutura e Dinâmica do SFN escrito (5/20, itens 13 a 17). Faltam os 15 tópicos institucionais do SFN e os 10 de Inovação e Desenvolvimento de Mercado. O bundle está em cerca de 640 KB. O formato do arquivo e o prompt da IA redatora estão em `_conteudo/`.

**Como o loop de produção funciona.** Uma IA redatora (Gemini) escreve o Markdown do tópico; a IA revisora confere cada afirmação contra a fonte primária, corrige, regenera o bundle e registra o que aprendeu no `_conteudo/PROMPT - Criar conteudo CPA.md`, que virou um banco de fatos verificados com data de conferência. O prompt passou de 35 KB para cerca de 129 KB e é o ativo mais valioso do pipeline: é ele que impede a redatora de repetir o mesmo erro.

**Regras de produção criadas em 29/08 — leia antes de escrever qualquer tópico:**

- **Bloco de fórmula.** Tópicos com cálculo usam uma cerca de três crases com a palavra `formula`; o conversor transforma em `<pre>` e o CSS (`.cont-sec pre`) renderiza como cartão destacado. `pre` entrou na lista branca de tags.
- **Formato dos tópicos de cálculo, em quatro tempos, um `###` por fórmula:** a pergunta concreta com números antes de qualquer símbolo; a fórmula isolada seguida de legenda em tabela com as colunas Símbolo, Significado e De onde vem; o mecanismo em uma frase (por que a fórmula tem aquela forma); e o exemplo resolvido linha a linha, seguido de uma variação de parâmetro. Fecha sempre com a armadilha de unidade.
- **Notação sem LaTeX.** Multiplicação com ×, divisão com ÷, expoente em sobrescrito Unicode. LaTeX renderiza literal e já quebrou tópico.
- **Trava de marcadores de IA.** O conversor agora **derruba** a conversão quando encontra `[cite: N]`, `[citation: N]` ou `【...】` no texto, porque a redatora colou esses marcadores em quase toda frase de um arquivo. Existe `outputs/limpar_marcadores.py` para limpar em lote antes de converter.
- **A apostila de terceiro anexada ao prompt é mapa de escopo, nunca fonte de texto.** Hierarquia de autoridade: norma primeiro, banco de fatos do prompt depois, apostila por último e só como indício. Se a apostila conflita com o banco de fatos, o banco vence. Ela já estava desatualizada em três pontos conferidos.
- **Ao corrigir um número, varra o acervo inteiro atrás dele.** O prazo da LCI foi corrigido em dois tópicos e sobreviveu num terceiro por não ter sido procurado. Correção só termina depois do `grep`.
- **Nunca escrever negativa categórica sem ter lido a norma inteira.** "A lei não prevê X" exige varredura; havendo leitura parcial, escreva "o art. Y não prevê". Um erro assim foi para o prompt e induziu a redatora a omitir algo verdadeiro.
- **Não reescrever tópico já entregue.** A redatora voltou ao tópico 1 duas vezes; a segunda versão trazia erro grave num arquivo que estava correto. O prompt já tem a regra, mas confira o `id` antes de aceitar qualquer arquivo.

### CPA — edital reorganizado em 30/08/2026 (100 para 107 tópicos)

Auditoria do `editais.js` da CPA contra o programa detalhado da Anbima (versão 1.2,
vigência 01/01/2026). Resultado: nenhum tópico estava fora do edital, mas havia itens do
programa sem casa e tópicos densos demais para uma sessão. Como os tópicos passam a ser
também o índice do menu **Conteúdo programático**, densidade vira problema de navegação,
não só de tempo de leitura.

**Sete tópicos criados** (100 → 107):

| Matéria | Novo tópico | Item do programa que estava órfão |
|---|---|---|
| SFN | Demais operadores: sociedades de crédito, consórcios, seguradoras e previdência | 1.1.3 (17 tipos de operador em 2 tópicos) |
| SFN | Estabilidade financeira: Comef, Basileia, compulsório e risco sistêmico | 1.4.2 e 1.4.3, incluindo Basileia I, II e III |
| Produtos | Tipos de fundos: renda fixa, ações, cambiais, multimercados e FI-Infra | 2.1.2.3.6 (tipificação) |
| Produtos | Taxas, encargos, assembleias e direitos do cotista | 2.1.2.2.18 a 2.1.2.2.25 |
| Produtos | PIX: funcionamento, chaves, custos e aplicações | 2.4.1.5, que tem quatro subitens próprios |
| Relacionamento | Técnicas de atendimento: escuta ativa, personalização e expectativas | 3.4.3.1 |
| Inovação | Tokenização, NFT, stablecoins, ETF de cripto e Drex | 4.4.4 e 4.4.5 |

**Sete tópicos renomeados.** Dois deles já tinham conteúdo publicado, e o front matter do
`.md` foi alterado no mesmo commit para o vínculo não quebrar: `36-conta-corrente.md`
(agora "Conta corrente, depósitos, tarifas e atendimento bancário") e `29-lgpd.md`
(agora "LGPD, sigilo bancário e proteção de dados do cliente", para acolher a LC 105/2001
e o princípio "conheça sua parceria", que o programa pendura em 3.4.6). Os outros cinco
ainda não tinham texto, então renomear saiu de graça.

Contagem depois da mudança: SFN 6/22, Produtos 40/43, Relacionamento 30/31, Inovação 0/11.
Total 76/107. Os 79 testes passam. Backup do arquivo anterior em `app/editais.js.bak-*`.

**Lacunas corrigidas em 30/08/2026, nos arquivos já escritos:**

- Rel 29: entrou seção de sigilo bancário (LC 105/2001), com a lista de hipóteses que não
  violam o sigilo e a pena de reclusão de um a quatro anos do art. 10. Para caber em 1.500
  palavras, a lista de sanções da ANPD virou prosa e o critério de incidente foi condensado.
- SFN 17 (arquivo 16-tir...): entrou seção de CMPC, com fórmula, o motivo de a dívida entrar
  líquida de imposto e a razão de o capital próprio ser mais caro.
- Rel 20: entrou a distinção entre retorno histórico e retorno esperado.
- Rel 21: entrou a propriedade de que o retorno esperado da carteira é média ponderada e o
  risco não é, que é a explicação formal do ganho da diversificação.
- Rel 25 e Produtos 24: resolvidos pelos tópicos novos (técnicas de atendimento e tipificação
  de fundos). Ao escrever esses dois, confira sobreposição com o texto que já existe.

**RESOLVIDO EM 30/08/2026: o tópico 108.** Foi criado em Relacionamento, entre o tópico do
Coaf e o de LGPD: **"Conheça seu cliente (KYC), cadastro e abordagem baseada em risco"**.
Total do edital passou a 108 tópicos (Relacionamento com 32). Falta escrever o texto.

**Correção de conteúdo publicado na mesma varredura: prazo de guarda.** O tópico de LGPD dizia
que a prevenção à lavagem exige guarda "por no mínimo cinco anos". O piso legal é esse
(Lei 9.613/1998, art. 10, § 2º), mas a **Circular BCB 3.978/2020, art. 67, exige dez anos** das
instituições supervisionadas pelo Banco Central, que é o caso do banco onde o aluno trabalha.
Confirmado no PDF oficial em normativos.bcb.gov.br. Os três trechos foram corrigidos e a
varredura no acervo inteiro não achou outra ocorrência do número errado.

**Tolerância de tamanho ajustada em 30/08/2026.** O conversor passou a avisar só acima de
**1.800 palavras**. O alvo continua sendo 800 a 1.500, que é o tamanho de uma sessão, mas
decisão do dono: é melhor um tópico de 1.700 palavras completo do que um de 1.400 com buraco.
Acima de 1.800, o tópico deve virar dois.

**Contexto de como a lacuna foi encontrada — o KYC.** Varredura em 30/08/2026 mostrou que
"conheça seu cliente", função do cadastro, cadastro desatualizado, análise da capacidade
financeira, abordagem baseada em risco, avaliação interna de risco e controle de efetividade
(programa 3.4.5.3 e 3.4.5.4) **não aparecem em nenhum tópico do acervo**. O princípio
"conheça sua parceria" (3.4.6.11, Circular BCB 3.978/2020, capítulo IX, arts. 56 a 60)
também não. Rel 27 e Rel 28 cobrem fases da lavagem, Coaf, comunicação e terrorismo, e estão
com 1.273 e 1.323 palavras, sem espaço. **A recomendação é um tópico novo em Relacionamento,
o 108º do edital: "Conheça seu cliente, cadastro e abordagem baseada em risco".** Decisão
pendente com o dono.

**Deploy:** o dono sobe os arquivos ao GitHub por conta própria, arrastando na interface web.
Em 30/08/2026 `app/editais.js` e `app/css/app.css` já foram publicados; o que muda a cada rodada
de conteúdo é só `app/conteudo/conteudo-cpa.js`. O `sw.js` é network-first, não precisa bump.
**Não fique conferindo o GitHub por iniciativa própria** (decisão do dono em 30/08/2026): apenas
liste os arquivos que a rodada alterou. Se ele pedir a conferência, o jeito confiável é comparar
o md5 com `raw.githubusercontent.com/bussoladeestudos/home/main/...` pelo shell do computador
dele, que tem rede. Ler o arquivo por resumo de página falha em arquivo grande e já deu falso
negativo uma vez.

### Pendências abertas em 26/08/2026

Marque conforme resolver. Este bloco existe para a próxima IA saber, em dez segundos,
o que está pela metade.

**Bloqueando entrega**

- [ ] **Análise do Edital da CPA.** O dono ficou de enviar. A certificação entrou com as Frentes 1 e 2 completas e a 3 em aberto, por decisão consciente: o arquivo entregue foi o programa detalhado da Anbima, que é o edital, não a análise estratégica. Enquanto não chegar, `cpaAnbima` mostra o aviso de "análise ainda não publicada".
- [ ] **Análise do Edital do CA-600 e do FBB100.** Mesma situação, pendente desde antes da virada para certificações.

**Deploy: conferido arquivo por arquivo em 05/09/2026.** O que estava pendente das
sessões de 25/08 e 29/08 **já subiu**. Método da conferência, que vale repetir:
comparar o md5 local com `raw.githubusercontent.com/bussoladeestudos/home/main/<caminho>`,
arquivo por arquivo. Batem: `app/index.html`, `app/css/app.css`, `app/js/ui.js`,
`app/js/engine.js`, `app/js/state.js`, `app/js/pomodoro.js`, `app/conteudo/conteudo-cpa.js`,
`app/editais.js`, `app/cursos.js`, `app/sw.js`, `app/edital-cpa.pdf`, `index.html`,
`dados-site.js`.

**Pendente agora (preparado em `_publicar-agora/`, com LEIA-ME e a estrutura de pastas
pronta para arrastar):**

- [ ] `app/conteudo/questoes-cpa.js` — **URGENTE.** O `app/index.html` que já está no ar
      chama esse arquivo e ele dá **404**. O app não quebra (o engine trata
      `QUESTOES_DATA` ausente devolvendo lista vazia, de propósito), mas o menu de
      Exercícios fica no estado "o banco ainda não saiu". Enquanto não subir, o menu está
      no ar e vazio.
- [ ] `app/tests/engine.test.js` e `app/tests/state.test.js` — não afetam o aluno, mas o
      repositório fica com a suíte desatualizada para quem clonar.

**Limpeza**

- [ ] Apagar no repositório: `app/edital-campina.pdf` e `app/edital-sedes-df.pdf`. Ninguém mais os referencia.
- [ ] Esvaziar `_to_delete/` na máquina do dono. A ponte de arquivos não apaga nada, só move para lá.

**Esperando decisão do dono**

- [ ] `hotmartLink` da CPA, se ela for vendida. Sem o campo, a home não mostra botão de compra (CA-600 e FBB100 também não têm).
- [ ] Autorização de fornecedor para religar as aulas dos cursinhos (ver seção 7t e o item de backlog).

**Em construção**

- [x] ~~Conversor `_conteudo/` -> `app/conteudo/`~~ pronto em 26/08 (`outputs/conteudo_para_js.py`, ver 7v).
- [x] ~~Tela de conteúdo do tópico~~ pronta em 26/08 (ver 7v).
- [ ] **Conteúdo da CPA: 75 de 100 tópicos escritos** (situação em 29/08/2026). Faltam os 15 tópicos institucionais de Estrutura e Dinâmica do SFN e os 10 de Inovação e Desenvolvimento de Mercado. Produção com IA redatora, um por vez, com revisão contra fonte primária a cada entrega. Prompt em `_conteudo/PROMPT - Criar conteudo CPA.md`.
- [ ] **Questões de simulado e revisão.** Formato YAML já especificado em `_conteudo/LEIA-ME`, com modelo pronto, mas o conversor ainda não lê os `.yaml` e o engine ainda não consome questões. Fazer depois que o conteúdo de uma matéria inteira estiver escrito.
- [ ] Quando entrar a segunda certificação com conteúdo, avaliar carga sob demanda: hoje `conteudo-cpa.js` entra no SHELL e é carregado por todo aluno, mesmo quem estuda outra coisa. Com 100 tópicos escritos isso vira alguns centenas de KB.

## 8. Backlog sugerido (em ordem de valor)

| Prioridade | Item | Notas |
|---|---|---|
| **Adiado** | Unificar editais.js + dados-site.js | DECISÃO do dono (14/07/2026): manter os dois arquivos — a duplicação real é pequena (nome/cargos/dataProva) e o ganho não compensa o risco da migração. NÃO re-propor unificação. Se um dia houver divergência de dados entre landing e app, o primeiro passo é um teste de consistência cruzada (comparar CONCURSOS_DATA x EDITAIS_DATA), não a fusão. |
| **Alta** | Análise do Edital: CA-600, FBB e CPA | Com o fim do fallback, **3 das 4 certificações** mostram "análise ainda não publicada" na tela: ca600Abecip, fbb100Febraban e cpaAnbima. Só o CFP tem análise vinculada. Registrar em EDITAL_ANALISES_POR_CHAVE assim que cada PDF chegar. A CPA entrou em 25/08/2026 com as Frentes 1 e 2 completas e a 3 pendente, por decisão consciente: o dono forneceu o programa detalhado da Anbima, que é o edital, não a análise estratégica. |
| **Média** | **Linkar os tópicos no Conteúdo programático** | Hoje a tela `renderMaterias` monta cada tópico como `<li>${t}</li>`, texto puro. Transformar em link para a tela de leitura é barato porque tudo já existe: a ação `abrirConteudo` está registrada em ACTIONS, `temConteudo` diz se há texto publicado, e `_conteudoVoltarPara` já devolve o aluno à página de origem. São cerca de 6 linhas no `ui.js` e 4 de CSS, sem handler novo (o `ui.test.js` não quebra). Só criar link onde `temConteudo` for verdadeiro, para nunca abrir tela vazia. Ganho extra: a lista vira indicador visual de cobertura do conteúdo. Aproveitar para passar o nome do tópico por `esc()`, que hoje falta nessa linha. Adiado por decisão do dono em 29/08/2026. |
| **Média** | Extrair estilos inline dos templates para classes | Removeria os seletores [style*=...] do bloco mobile (hack consciente) e reduziria o peso do ui.js. |
| **Baixa** | **Aulas dos cursinhos — religar com autorização** | Ver bloco abaixo. Feature pronta e testada, desligada em 25/08/2026 por decisão do dono. Só volta com autorização de um fornecedor de cursos. |
| **Baixa** | View 'Jornada' das revisões | Código pronto (renderRevisoesPageJornada) desativado — mudarRevTab força a aba ciclos. |
| **Baixa** | Tirar o vocabulário de concurso do código | STATE.prefeitura, STATE.concurso, classes .concurso-picker/.topbar-concurso e a ação toggleConcursoDropdown. Exige migração de schema e toque simultâneo em CSS, HTML e ACTIONS. Só encarar junto de outra mudança grande no setup. |
| **Baixa** | Simplificar a seleção em dois níveis | Com um único grupo ("Certificações"), a tela de grupo -> exame virou um clique a mais sem função. Colapsar para lista única de exames. |
| **Baixa** | Limpeza de legados | Apagar app/editais.json, app/index - Copia.html, pasta _arquivo, admin-codigos.html e o conteúdo de _to_delete/. |

### Item de backlog — Aulas dos cursinhos: como planejamos executar

O recurso está construído e desligado. A ordem abaixo é a condição de retomada; nenhum passo pode pular na frente do primeiro.

**Passo 1 — Autorização, antes de qualquer linha de código.** O dono procura um fornecedor de cursos (Lucas Silva, Edgar Abreu, Rafael Toro ou outro) e propõe parceria em vez de uso silencioso. O argumento é favorável ao fornecedor: a Bússola manda aluno já pagante direto para a aula dele, no dia em que o cronograma pede aquele tópico, e o aluno precisa da assinatura própria para assistir. Pedir por escrito, e-mail resolve, autorização para (a) listar os títulos das aulas dentro do app e (b) linkar as URLs. Se houver programa de afiliado, o link de afiliado transforma o custo do trabalho em receita. **Sem esse documento, não religar.**

**Passo 2 — Decidir onde o catálogo mora.** O motivo do desligamento é que app/cursos.js é público. Duas saídas, a escolher com a autorização em mãos:

- **(a) Firestore, preferida na ausência de autorização ampla.** O catálogo vira documento lido só por aluno autenticado (mesmo backend de alunos/{uid}, coleção separada, regra `allow read: if request.auth != null` e escrita só pelo dono). Custa uma leitura por aluno por sessão, dentro do plano Spark. Quebra o uso via file://, então o fallback tem que ser o comportamento atual: sem catálogo, sem botão.
- **(b) Continuar em cursos.js**, só se a autorização cobrir explicitamente a publicação aberta da lista de aulas.

**Passo 3 — Religar.** Repor `provedores` e `aulas` em app/cursos.js a partir de _docs/piloto-aulas-cursinhos.json (ou apontar para a fonte do passo 2), trocar `CURSOS_ATIVO` para true em app/js/ui.js, rodar `node --test tests/*.test.js` (58 devem passar), subir ui.js + cursos.js + sw.js com bump da const CACHE, e conferir com Ctrl+F5 entrando como aluno do edital em questão.

**Passo 4 — Completar o catálogo.** Usar _docs/extrair-aulas-console.js (v2) na página do curso, já logado, e o par gerar_planilha_aulas.py / planilha_para_cursos.py para converter a planilha. Regras de coleta que não mudam: só leitura de página que o assinante já abriu, nunca automatizar login, nunca baixar conteúdo de aula, nunca republicar material. Antes de escalar, ler os termos de uso da plataforma: proibição de coleta automatizada é comum e a consequência costuma ser banimento da conta do dono, não processo.

**Passo 5 — Deixar a relação explícita no app.** Uma linha em Configurações dizendo que a Bússola não tem vínculo com os cursinhos e que o acesso continua sendo pela conta do aluno no curso. Isso sustenta a leitura de que o recurso é um índice de uso pessoal, e não redistribuição de material alheio.

**Riscos que motivaram tudo isso, para a próxima IA não reabrir a discussão do zero:** (1) termos de uso da plataforma, que quase sempre proíbem coleta automatizada mesmo por assinante; (2) arquivo público, que expõe a grade curricular de terceiro a quem não é aluno; (3) aproveitamento parasitário, que é o risco de vender um produto cujo valor vem de organizar o catálogo de outro sem autorização. Títulos de aula em si dificilmente são obra protegida, e a leitura do HTML pelo próprio assinante não quebra proteção nenhuma — o problema nunca foi a coleta, foi a publicação.

## 9. Como testar

```
# testes automatizados (na pasta app/) — 114 testes, todos devem passar
node --test tests/*.test.js

# servidor local fiel ao GitHub Pages (na raiz do projeto)
npx serve .        # abre http://localhost:3000

# teste manual essencial após mudanças de UI:
# login (Enter no campo senha) - navegação - marcar checks/estrelas -
# colapsar dia - visão mensal - revisões - simulados - backup - Modo Foco -
# Palavra do Coach - Adicionar ao Calendário - Análise do Edital - Fale Conosco - nuvem na topbar
```

## 10. PROMPT INICIAL — copie e cole na próxima IA

Cole o texto abaixo como primeira mensagem, com a pasta do projeto conectada:

```
Atue como Engenheiro de Software Sênior do projeto "Bússola de Estudos",
um SaaS de cronogramas de estudo para CERTIFICAÇÕES FINANCEIRAS
(CFP, CA-600, FBB100) pelo método 5+1+1, já em produção. Antes de qualquer alteração, leia o documento
"_docs/HANDOFF - Guia para a proxima IA.pdf" na pasta do projeto — ele
explica arquitetura, hospedagem, regras e backlog.

REGRAS DE TRABALHO (obrigatórias):
1. Deploy = upload dos arquivos alterados pela interface do GitHub
   (repo bussoladeestudos/home). Sempre me diga QUAIS arquivos subir.
2. Nunca use ES Modules nem onclick inline: scripts clássicos e
   event delegation via data-action + registro ACTIONS (js/ui.js), camelCase.
3. Lógica de cálculo vai em js/engine.js (puro, sem DOM) com teste.
4. Dados: app/editais.js (app) e dados-site.js (landing) são as fontes
   únicas. Análise do Edital = PDF em app/ + mapas EDITAL_ANALISES /
   EDITAL_ANALISES_POR_CHAVE (js/ui.js). Os .json antigos são legado.
5. Toda certificação incluída SAI com a Análise do Edital vinculada; se
   o PDF não foi dado, PARE e solicite. Não existe mais fallback: sem
   análise, a tela fica com aviso de "ainda não publicada".
6. Antes de entregar: "node --test tests/*.test.js" na pasta app/ —
   79 testes devem passar. Se criar lógica nova, crie teste junto.
7. Edite por substituição exata verificada. Nunca regenere arquivo inteiro.
8. Dados de aluno: innerHTML passa por esc(); mudanças no STATE exigem
   migração em migrateState() com bump de schemaVersion.
9. Firebase: Auth + Firestore (alunos/{uid}, São Paulo). Jamais coloque
   chaves de service account ou de API privadas no repositório.
10. Conteúdo de terceiros (aulas de cursinho) está DESLIGADO por decisão
    do dono. Não religue CURSOS_ATIVO nem reponha dados em cursos.js
    sem eu confirmar que existe autorização do fornecedor (seção 8).
11. O produto é SÓ de certificações. Não reintroduza concurso público
    (edital, seção na landing ou vocabulário de concurseiro) sem eu pedir.

Confirme que leu o handoff e me apresente um plano antes de alterar nada.
```

## 11. Coach com IA — arquitetura (registro para as próximas IAs)

Implementado em 12/07/2026. Princípio de projeto: **o motor de regras continua sendo o cérebro; a IA é só a voz.** Todo o diagnóstico (ritmo, aderência, cobertura, confiança, matérias críticas) permanece determinístico em ui.js/engine.js; o modelo de linguagem recebe apenas o resultado pronto e redige 3 parágrafos. Isso mantém o app auditável, barato e imune a alucinação de números — a IA não decide nada, não calcula nada e não vê dados brutos do aluno.

### Fluxo (1 chamada por aluno/dia)

```
renderTudo() -> renderCoach() -> atualizarCoachIA(diag)           [app/js/ui.js]
  diag = montarCoachDiagnostico(): JSON ~15 campos, só números +
         nomes de matérias (nome, diasRestantes, aderenciaPct, ritmo,
         sequenciaDias, coberturaPct, confiancaMediaPct, revisoesPendentes,
         diasSemRegistro, materiasAtrasadas[2], materiasFracas[2], ...)
  guardas (qualquer falha -> texto de regras, sem erro visível):
    COACH_IA_URL vazio | sem STATE.inicio | file:// | sem sessão avaliada |
    sem login Firebase | cache do dia já existe (STATE.coachIA.data === hoje)
  POST COACH_IA_URL (Authorization: Bearer <idToken do aluno>)
      |
      v
Cloudflare Worker "coach-bussola" (fonte: cloud/coach-ia-worker.js)
  1. valida idToken em identitytoolkit accounts:lookup (FIREBASE_API_KEY)
  2. cache 1x/dia por uid (Cache API, chave uid+data, TTL 86400s)
  3. monta PROMPT_COACH (persona fixa no worker) + JSON do diagnóstico
  4. Gemini generateContent (GEMINI_API_KEY; modelo GEMINI_MODEL,
     GEMINI_MODEL = gemini-flash-lite-latest — free tier ~1.000 req/dia em jul/2026;
     usar sempre alias *-latest: nomes fixos são aposentados p/ contas novas -> 404/502)
  5. devolve { texto }
      |
      v
front: STATE.coachIA = { texto(max 2500), data:hoje } -> save() (sincroniza
via Firestore) -> buildCoachHtml usa o ramo IA: parágrafos passam por esc(),
selo "Redigido com IA". Amanhã, cache vence e o ciclo repete.
```

### Decisões e regras a preservar

- **Chaves NUNCA no repositório.** GEMINI_API_KEY (Secret) e FIREBASE_API_KEY (Text, pública por design) vivem em Settings -> Variables and Secrets do worker. Histórico: uma chave admin já foi exposta e revogada neste projeto (seção 6).
- **Fallback é sagrado.** Qualquer erro (worker fora, cota do Gemini estourada, offline, file://) cai silenciosamente no texto de regras de buildCoachHtml. Nunca deixar o Coach vazio ou com mensagem de erro.
- **Prompt vive no worker**, não no front — ajustar tom/tamanho sem republicar o site. Regras do prompt: 3 parágrafos, PT-BR, 1ª pessoa do coach, máx. 130 palavras, sem markdown/emojis, proibido inventar números.
- **Texto da IA é dado não confiável:** passa por esc() antes do innerHTML (mesma regra de backup/localStorage).
- **Desativar o recurso:** COACH_IA_URL = "" em ui.js (o app inteiro volta ao comportamento pré-IA). Trocar modelo: variável GEMINI_MODEL no worker, sem tocar em código.
- **CORS restrito** a bussoladeestudos.com.br, www e localhost:3000; só POST com token válido consome a IA; cache por uid limita cada aluno a 1 geração/dia mesmo que force refresh.
- **Custos (jul/2026):** Cloudflare free (100k req/dia) + Gemini free tier. Estouro de cota não quebra nada (fallback). Monitorar em dash.cloudflare.com (worker coach-bussola -> Metrics) e aistudio.google.com (Uso).
- **Evolução natural:** o mesmo worker/padrão serve para o gerador de questões por IA nos dias de Exercícios de Revisão (backlog) — novo endpoint no mesmo worker, mesma validação e cache.

Deploy passo a passo: cloud/COACH-IA-GUIA.md. Worker em produção: coach-bussola.adriano-m-goulart.workers.dev (conta Cloudflare: adriano.m.goulart@gmail.com).

---

*Documento atualizado em 25/08/2026. Em caso de dúvida sobre uma decisão de código, os comentários nos próprios arquivos (cabeçalhos de cada módulo) explicam o porquê de cada padrão.*

---

## ACERVO CPA COMPLETO — 31/08/2026

**O CPA fechou 108/108 tópicos, com 0 erros no conversor.**

| Matéria | Tópicos | Peso |
| :--- | :--- | :--- |
| Estrutura e Dinâmica do SFN | 22/22 | 20 |
| Produtos do Mercado Financeiro | 43/43 | 40 |
| Relacionamento com o Cliente | 32/32 | 30 |
| Inovação e Desenvolvimento de Mercado | 11/11 | 10 |

`app/conteudo/conteudo-cpa.js` tem cerca de **1.018.000 bytes**.

### Dois `[CONFERIR]` propositais, que devem ser revisitados

1. `inovacao/08-tokenizacao-nft-stablecoins-etf-cripto-drex.md` — **fase, arquitetura e
   cronograma do Drex**. O projeto foi revisto pelo Banco Central a partir de novembro de 2025
   (noticiado sem pronunciamento oficial conclusivo, com versões divergentes entre
   encerramento e redirecionamento, e abandono da arquitetura em blockchain por causa da
   tensão com o sigilo bancário). **Não afirme fase nem data.**
2. `inovacao/10-inteligencia-artificial-no-mercado-financeiro.md` — **situação do marco legal
   da IA**. O PL 2338/2023 foi aprovado no Senado e segue na Câmara, com votação adiada
   sucessivamente. **Não afirme que já é lei.**

### Renumeração feita em 31/08/2026

Os arquivos de **Produtos** (42) e de **Relacionamento** (31) foram renomeados e tiveram o
`id` reescrito para casar com a **posição do tópico no `editais.js`**. Isso é seguro: o
conversor casa pelo par **matéria + tópico** do front matter, não pelo nome do arquivo nem
pelo id, e o id não é usado na UI (verificado em `engine.js`). Se novos tópicos forem
inseridos no meio da lista, **refaça a renumeração** para a pasta continuar legível na mesma
ordem do menu Conteúdo programático.

### O que ainda não existe

- **Análise do Edital** em PDF para CPA, CA-600 e FBB100.
- **Banco de questões** (YAML). O dono disse que enviaria o material.
- **Link dos tópicos no menu Conteúdo programático** para a tela de leitura (backlog aceito
  pelo dono).

---

## C-PRO R — planejamento e três pilotos editoriais — 08/09/2026

### Estado da frente e ponto de retomada

O dono pediu iniciar o conteúdo C-Pro R do zero, com padrão semelhante ao CPA e aprofundamento adequado à certificação. Foram preparados o mapa editorial, o guia de redação e três textos-piloto. **O dono avaliará com calma os materiais e as estratégias na próxima sessão.** Retomar pela avaliação dos pilotos antes de escalar a redação; a quantidade de tópicos e a duração das unidades ainda são propostas editoriais.

**Não houve integração nem publicação desta frente no aplicativo.** Não foram alterados arquivos do app, Firebase, service worker ou dados dos alunos; não foi gerado bundle de conteúdo C-Pro R nem realizado deploy. A chave `cproRAnbima` e os títulos/ids do catálogo são propostos para integração futura. Não confundir planejamento completo com acervo escrito: há **125 tópicos planejados e apenas 3 pilotos escritos**.

### Pastas e arquivos salvos

Todos os caminhos abaixo são relativos à raiz `C:\Users\adria\Downloads\CronosCONCURSOS\Bussola Estudos\Bussola versao 2`.

| Caminho | O que foi criado ou atualizado |
|---|---|
| `_docs/CPRO-R/topicos.json` | Catálogo proposto com 125 tópicos, ids, referências ao programa e status dos três pilotos. |
| `_docs/CPRO-R/INDICE E COBERTURA.md` | Índice legível, critérios de divisão, fronteiras entre assuntos, ordem de produção e pendências de integração. |
| `_docs/CPRO-R/cobertura-detalhada.json` | Mapa dos itens terminais do programa oficial para os tópicos responsáveis. |
| `_docs/CPRO-R/validar_planejamento.py` | Validador do mapa; usa o PDF oficial e gera os dois relatórios de cobertura acima. |
| `_conteudo/PROMPT - Criar conteudo CPRO R.md` | Guia editorial, atualizado para versão 2: estrutura, profundidade, fórmulas, pesquisa de fontes, casos e aprendizados dos pilotos. |
| `_docs/CPRO-R/pilotos/01-alocacao-de-ativos.md` | Piloto conceitual e de decisão, id `cpror-inv-01`: separar reserva, meta próxima e aposentadoria antes de indicar produtos. |
| `_docs/CPRO-R/pilotos/07-indice-de-poupanca.md` | Piloto de cálculo, id `cpror-cli-07`: fórmula, base e período, metas, mudança de premissas, percentuais e agregação de meses. |
| `_docs/CPRO-R/pilotos/22-suitability.md` | Piloto normativo e de atendimento, id `cpror-rel-22`: verificação, impedimentos, ordem do cliente, dispensas e exceções. |
| `_docs/CPRO-R/REVISAO DO PILOTO 01.md` | Ficha de revisão do texto de alocação, com cobertura, fontes e limites. |
| `_docs/CPRO-R/REVISAO DO PILOTO 02.md` | Ficha do índice de poupança, com fontes e conferência dos cálculos. |
| `_docs/CPRO-R/REVISAO DO PILOTO 03.md` | Ficha de suitability, com correspondência entre artigos, versões normativas e trechos do piloto. |

Fonte de escopo fornecida pelo dono: `C:\Users\adria\Downloads\Programa-Detalhado-C-Pro-R-ANBIMA.pdf`. As fontes complementares estão registradas nas fichas e no guia editorial. O programa oficial define o escopo; não substitui uma análise estratégica própria do edital.

### Estratégias propostas para avaliação

1. **Preservar a experiência editorial do CPA, aprofundando a aplicação.** Cada texto tem as cinco seções `Em uma frase`, `O que cai na prova`, `Conteúdo`, `Pegadinhas` e `Cartão de revisão`. Usar casos originais, decisões justificadas, exemplos resolvidos e variações de premissa. Avaliar se a linguagem e a dificuldade atendem ao aluno pretendido.
2. **Calibrar três tipos de aula antes de produzir em escala.** Alocação testa raciocínio de decisão; índice de poupança testa explicação de cálculo; suitability testa normas, condições e exceções. Ler os três e medir o tempo de estudo com resolução dos exemplos e revisão. A duração real ainda não foi medida.
3. **Tratar a divisão em 125 unidades como hipótese.** Proposta: 25 tópicos de Prospecção e relacionamento, 25 de Análise de informações do cliente, 50 de Indicação de investimentos e 25 de Análise de portfólio e monitoramento, acompanhando a proporção 20/20/40/20. Essa contagem não é exigência da Anbima. O motor atual reserva 45 minutos por tópico; dividir assuntos densos se necessário e recalcular a distribuição, em vez de comprimir conteúdo para preservar a contagem.
4. **Separar texto do aluno e documentação de pesquisa.** Manter fontes, versões e verificações nas fichas de revisão. Nos cálculos, explicitar base, período e premissas; nas normas, conferir cada condição e exceção. No piloto de suitability, foram distinguidas as regras da CVM e da autorregulação Anbima, com atenção à mudança de numeração dos capítulos. Revalidar fontes antes da publicação.
5. **Avançar em lotes após avaliar o padrão.** Próximo lote proposto: `cpror-inv-02` a `cpror-inv-06`; depois continuar Indicação de investimentos, Relacionamento, Análise de informações e Monitoramento. Manter fronteiras entre indicação inicial e rebalanceamento, procedimento de suitability e análise de perfis, evitando repetir aulas. Banco de questões fica como frente posterior, com cobertura dos objetivos de aprendizagem.

Alvo de extensão: 800 a 1.500 palavras, tolerância até 1.800 quando necessária. Na última validação, os pilotos tinham respectivamente **1.405, 1.324 e 1.670 palavras**. Suitability é o principal candidato a avaliação de densidade, por usar a faixa de tolerância.

### Validações realizadas e seus limites

- Mapa editorial: **365 itens numerados e 278 itens terminais** identificados no programa; todos os terminais atribuídos a um responsável, sem órfãos, referências inválidas ou responsáveis duplicados. Isso valida a atribuição no índice, não a cobertura pedagógica de textos ainda não escritos.
- Três pilotos processados pelo conversor existente `outputs/conteudo_para_js.py`, com catálogo proposto em memória: **zero erros e zero avisos**. A validação não registrou a certificação no app nem gerou bundle.
- Cálculos do piloto de poupança conferidos por verificações com frações exatas, incluindo metas, variações percentuais e taxa agregada.
- As fichas registram a pesquisa e os limites de cada piloto. Não foi rodada nesta frente editorial a suíte do aplicativo; não houve alteração de código de produção. Os 114 testes mencionados em outras seções são o histórico do app, não uma execução desta rodada.

### O que avaliar amanhã e o que fica para depois

- Ler os três pilotos e suas fichas; avaliar clareza, profundidade, tamanho dos casos, utilidade das pegadinhas e dos cartões.
- Medir o tempo real de estudo e decidir se suitability deve permanecer inteiro ou ser dividido; revisar também a hipótese das 125 unidades.
- Registrar os ajustes no guia editorial antes do próximo lote para manter consistência entre autores e sessões.
- Na integração futura, conferir nomes/ids, parâmetros específicos da prova, análise estratégica, conversão, carregamento e cache. O guia registra o edital consultado e seus parâmetros; não copiar automaticamente os da CPA.
- Preservar as regras do projeto: Vanilla JS, scripts clássicos compatíveis com `file://`, ações via `data-action`/`ACTIONS` em `ui.js` e escape dos dados destinados ao DOM. A frente editorial não exige mudança de arquitetura.

**Retomada sugerida:** abrir esta seção, o guia editorial e os três pilotos; incorporar a avaliação do dono. Só então avançar no lote proposto. Nenhum arquivo desta rodada precisa ser enviado ao site para o dono avaliar os materiais locais.

---

## C-PRO R — revisão e integração local de inv-04, inv-08 a inv-11 — 11/09/2026

O lote `_docs/AGENTES-CONTEUDO/lotes/cpror-20260911-revisao-portal` passou por revisão independente, correção e integração local. Foram promovidos exatamente cinco corpos aprovados: `cpror-inv-04`, `cpror-inv-08`, `cpror-inv-09`, `cpror-inv-10` e `cpror-inv-11`. Os hashes SHA-256 dos corpos foram conferidos antes da formatação e novamente após a promoção. Os cinco candidatos anteriores estão preservados em `backup-destinos` dentro do lote.

Na revisão, inv-04 ganhou condições explícitas para comparação de remuneração e proteção inflacionária; inv-09 passou a cobrir remuneração, custódia e regras de saída sem repetir tópicos vizinhos; inv-10 tornou os objetivos verificáveis e completou a natureza da nota comercial; inv-11 distinguiu isenção de alíquota zero e incluiu a variação tributária entre 355 e 365 dias. Inv-08 foi aprovado sem alteração material. A matriz, as fontes, o relatório e os hashes estão registrados no lote.

O catálogo editorial marca inv-09, inv-10 e inv-11 como `publicado localmente`; inv-04 e inv-08 já tinham esse estado. O manifesto do lote está `integrado`. O bundle `app/conteudo/conteudo-cpror.js` agora contém 61 aulas. O `app/index.html` solicita esse bundle com `?v=20260911-revisao` e preserva exatamente 470 bytes NUL. O cache em `app/sw.js` avançou para `bussola-v25`.

Arquivos finais atualizados: os cinco Markdown em `_conteudo/cpror/indicacao-de-investimentos`, `_docs/CPRO-R/topicos.json`, o manifesto do lote, `app/conteudo/conteudo-cpror.js`, `app/index.html`, `app/sw.js`, este handoff e o pacote `_publicar-agora/publicar-20260911`. No pacote, foram substituídos somente o bundle C-Pro R, `app/index.html`, `app/sw.js` e `LEIA-ME.txt`; o teste de catálogo não mudou.

Validações executadas: conversão isolada antes da promoção com 61 tópicos, zero erros e zero avisos; `outputs/conteudo_para_js.py cpror --check` no projeto ativo com 61 tópicos, zero erros e zero avisos; geração do bundle; 7 testes do conversor; 157 testes do aplicativo; 4 testes específicos do catálogo C-Pro R; e sintaxe dos 22 arquivos JavaScript do app. Todas passaram. Não houve deploy nem alteração externa no GitHub ou na hospedagem.

### Atualização aprovada de cpror-inv-09

Ainda em 11/09/2026, `cpror-inv-09.md` recebeu uma nova versão aprovada no próprio destino, com SHA-256 do arquivo completo `94779BF681594F75C6C4D98B7B1389AE1A75993F52E97B398ABB62B93DA25299`. O Integrador confirmou o hash, UTF-8 sem BOM, finais LF, os cinco H2 obrigatórios e a ausência de marcações proibidas. O texto aprovado não foi alterado.

O bundle C-Pro R foi regenerado pelo conversor oficial e continua com 61 aulas, zero avisos e zero erros. Para invalidar o bundle anterior no navegador, `app/index.html` passou a usar `?v=20260911-revisao2`, preservando os 470 bytes NUL, e `app/sw.js` avançou para `bussola-v26`. As mesmas versões foram copiadas para `_publicar-agora/publicar-20260911`, cujo `LEIA-ME.txt` também registra as marcas atuais.

Validação desta atualização: 7 testes do conversor, 157 testes do aplicativo e sintaxe dos 22 arquivos JavaScript passaram. O hash do Markdown aprovado foi novamente conferido depois dos testes. Não houve deploy externo.

## RODAPÉ DA AULA E BOTÃO VOLTAR (12/09/2026)

### O problema

O botão voltar da tela de conteúdo era um contorno cinza de 0,8rem no alto da página e o aluno não o encontrava. Pior: ao terminar a leitura não havia nada no fim do texto. O aluno chegava ao último parágrafo, não tinha para onde ir e voltava ao menu pelo navegador. O ciclo ler, avaliar, praticar e seguir estava quebrado exatamente no ponto em que ele se fecha.

### O que foi feito

O `.cont-voltar` ganhou preenchimento verde-claro, borda da marca, `min-height:42px` de alvo de toque, sombra leve e deslocamento à esquerda no hover.

No fim de toda aula passou a existir um rodapé (`_contRodapeHTML` em `ui.js`, seção `.cont-rodape` no CSS) com três blocos:

1. **Nota de confiança em cinco estrelas.** Grava direto no cronograma, não em um campo novo. Em dia de tópico único escreve `STATE.dias[key].estrelas` e `.percepcao`; em dia multitópico escreve `.estrelasList[ti]` e `.percepcoes[ti]` via `gravarNotaTopico`, então a nota alimenta as estrelas do dia certo e a fila de revisões. Quando o tópico ainda não está posicionado em nenhum dia do cronograma as estrelas ficam desabilitadas e o texto de apoio explica o motivo, em vez de aceitar um clique que não seria gravado em lugar nenhum.
2. **Responder questões.** Monta `_exFiltro` já com a matéria e o tópico da aula e navega para o menu de exercícios. Se o tópico ainda não tem questões, abre a matéria inteira e avisa por toast, para o aluno nunca cair numa tela vazia.
3. **Próximo conteúdo.** Segue a ordem do edital (`getMaterias` mais `getTopicos`), pula tópicos sem texto publicado e mostra o nome do próximo abaixo do rótulo. No último conteúdo o botão fica desabilitado com a legenda `Último conteúdo publicado`.

### A única mudança no engine

`indexarAgendaTopicos()` passou a devolver também `ti` no objeto indexado. Sem isso o rodapé não conseguiria distinguir qual posição do dia multitópico deve receber a nota. É aditivo: os consumidores existentes leem apenas `.key` e `.percepcao`.

### Armadilha de layout encontrada e corrigida

O nome do próximo conteúdo estava com `white-space:nowrap` dentro de um botão flex. O `min-content` do texto se propagava para cima e empurrava a página inteira para 420px numa tela de 390px, gerando rolagem horizontal em toda a aula, não só no botão. `min-width:0` no item flex não resolve esse caso no Chrome. A correção foi abandonar o `nowrap`: o nome quebra em até duas linhas com `-webkit-line-clamp:2` e `overflow-wrap:anywhere`. Quem for mexer nesse botão precisa saber disso antes de reintroduzir `nowrap`.

### Arquivos e versões

Alterados `app/js/ui.js` (295.104 bytes), `app/js/engine.js` (66.107), `app/css/app.css` (156.985), `app/index.html` (48.643, os 470 bytes NUL preservados) e `app/sw.js` (2.420). O `index.html` pede `css/app.css`, `js/engine.js` e `js/ui.js` com `?v=20260912-rodape` e o cache do service worker subiu para `bussola-v31`. Os demais `?v=` não mudaram porque os arquivos correspondentes não mudaram.

### Validações

153 testes do aplicativo passaram. Os 4 testes de `cpror-catalog.test.js` não foram executados nesta cópia de trabalho por dependerem de `editais.js` e do bundle, que não estavam no espelho usado; não houve alteração de conteúdo nesta rodada. `node --check` passou em `ui.js` e `engine.js`. O layout foi renderizado com o `app.css` real a 1000px e a 390px e conferido visualmente; `scrollWidth` igual a `clientWidth` nos dois casos. Não houve deploy externo.

## DASHBOARD EM FORMATO DE COMPUTADOR NO CELULAR (12/09/2026)

### A decisão do dono

Depois de ver o rodapé da aula funcionando, o dono abriu o app no celular e disse que preferia o dashboard do computador ao dashboard empilhado do celular. Foi oferecida a alternativa de manter duas colunas com densidade reduzida, e ele escolheu explicitamente a outra: manter o formato de computador e arrastar para o lado. O menu lateral oculto atrás do hambúrguer ele quis manter como estava.

### Como foi feito

Nada de JavaScript. Um bloco novo no fim do `app/css/app.css`, dentro de `@media (max-width:768px)`, faz duas coisas:

1. `#page-dashboard` vira um contêiner com `overflow-x:auto` e os filhos diretos recebem `width:1060px`. A página do app continua sem rolagem horizontal (o `html,body{overflow-x:hidden}` do bloco mobile segue valendo); quem rola é só o dashboard, por dentro. A barra de rolagem do webkit foi deixada visível, com 7px, porque é ela que avisa que há mais conteúdo ao lado.
2. Todas as regras de empilhamento que tocam o dashboard são desfeitas, nomeadamente, com o prefixo `#page-dashboard`.

O ponto que engana quem for mexer: **media query mede a TELA, não a faixa**. Com o celular em 390px, todos os blocos `≤768`, `≤560`, `≤520`, `≤480` e `≤400` continuam ativos dentro da faixa de 1060px. Por isso o bloco novo precisa repetir, um por um, os valores de computador de tudo que aqueles blocos mudam: `.dash-saudacao`, `.bz-*`, `.md-gal/.md-corpo/.md-lista/.md-selo`, `.painel-sec`, `.painel-collapsed`, `.pex-grid`, `.pc-grid`, `.mini-cards`, `.pex-anel`, `.pex-barras`, `.pex-leg`, `.pex-col-dow`, `.hero-num`, `.hero-legend`, `.hero-foot`, `.rt-bar`, `.cm-mini`, `.cm-cel` e todo o conjunto `.mapa-*` mais `.conf-badge`. Quem acrescentar uma regra mobile nova para o dashboard precisa acrescentar o contraponto ali também, senão ela volta a empilhar.

A Evolução por Matéria voltou ao formato de linha com os valores do bloco `≥1025px` (`minmax(200px,280px) minmax(0,1fr) 240px`, barra com `max-width:520px`, `conf-badge` com `min-width:180px`), e não com os do bloco `≤1024px`, porque a faixa tem 1060px de largura útil.

Ficou verificado que os três grids montados com estilo inline que o bloco mobile sobrescreve com `!important` (`repeat(4,1fr)`, `repeat(3,1fr)` e `1fr 1fr`) estão em `renderHoje` e `renderSimuladoPage`, não no dashboard. E que `#dashHero>div` é `.hero-card`, que é flex e não grid, então a regra mobile que mexe em `grid-template-columns` dele é código morto herdado de um desenho antigo.

### Arquivos e versões

`app/css/app.css` foi para 161.461 bytes. `app/index.html` (48.641, os 470 bytes NUL preservados) passou a pedir `css/app.css?v=20260912-dash`; `js/ui.js` e `js/engine.js` continuam em `?v=20260912-rodape` porque não mudaram nesta rodada. O cache do service worker subiu para `bussola-v41`. O pacote de publicação está em `_publicar-agora/publicar-20260912-dash`.

### Validação

O dashboard foi renderizado com o `app.css` real a 1280px e a 390px. A 390px, `document.documentElement.scrollWidth` é igual ao `clientWidth` (390), ou seja, a página não rola de lado; e `#page-dashboard` tem 1060px de largura de rolagem para 364px visíveis, ou seja, a faixa rola por dentro. As colunas resolvidas a 390px são as mesmas do computador nos quatro blocos.

### Pendência que apareceu nesta rodada

Na conferência do que estava no ar, `app/js/ui.js` e `app/js/engine.js` ainda eram as versões anteriores no repositório, embora o `app/index.html` publicado já pedisse `?v=20260912-rodape`. É por isso que o rodapé da aula não apareceu no site. Os dois estão nos pacotes `publicar-20260912-rodape` e `publicar-20260912-dash`. Também foram encontrados no repositório um `app/js/sw.js` fora de lugar e a pasta `app/app` com um service worker antigo, ambos para apagar.

### Revertido no mesmo dia

O dono viu o resultado e disse que não gostou. A mudança foi desfeita por inteiro: o bloco novo saiu do `app/css/app.css`, que voltou a ter 156.985 bytes, e o `app/index.html` voltou a pedir `css/app.css?v=20260912-rodape`. O cache do service worker seguiu para frente, `bussola-v42`, porque voltar número de cache confunde quem lê depois; o conteúdo é que voltou ao anterior. O dashboard empilha no celular como sempre empilhou.

Fica o registro para quem pensar nisso de novo: a faixa com rolagem horizontal funciona tecnicamente, o que não funcionou foi a leitura. Antes de tentar de novo, vale conversar sobre qual bloco do dashboard incomoda empilhado, em vez de tratar o dashboard inteiro como uma coisa só. A alternativa que não chegou a ser testada é manter duas colunas com densidade reduzida, bloco a bloco, escolhendo quais valem a pena e quais ficam melhor empilhados mesmo.

## SIMULADOS GERADOS PELO SISTEMA (12/09/2026)

### O pedido

O dono viu que o menu Revisões aplica as questões dentro da ferramenta e pediu o mesmo para os simulados, com dois limites: Mini Simulado até 30 questões, Revisão Geral até 50. E com uma regra explícita: **o aluno não escolhe a quantidade**. O argumento dele é bom e ficou registrado porque orienta o que vier depois. Na revisão o aluno treina assunto por assunto, então faz sentido ele decidir quantas questões por tópico. No simulado são muitas matérias de uma vez, e o que se treina não é o tópico, é o ritmo de prova. Pedir um número ali só transfere para o aluno uma decisão que o sistema faz melhor. Ele também lembrou que cursos diferentes têm bancos de tamanhos muito diferentes, de 15 a 40 ou mais questões, então nada pode depender de o banco ter um tamanho mínimo.

### Como ficou

`SIM_LIMITE={mini:30,geral:50}` em `ui.js`. O sorteio é por **rodízio entre os tópicos**: uma questão de cada tópico por vez, na ordem embaralhada dos tópicos, até bater o limite ou acabar o banco. Sem o rodízio, um tópico com banco grande abocanharia a prova inteira e um com três questões nunca apareceria. O `_simSortear` deduplica por `q.id`, então questão que aparece em dois tópicos entra uma vez só.

Banco menor que o limite não trava nada: entra o que existe, e a tela diz o número antes de começar, com a frase de que o formato comporta até o limite e a prova cresce sozinha conforme o banco aumenta. Banco vazio deixa o botão desabilitado e aponta o registro manual, que continua existindo para quem faz o simulado em material externo.

O Mini Simulado usa os tópicos de `getSimuladoInfo` (as três revisões que ele cobre). A Revisão Geral usa **todo o edital**, não só o que já foi estudado, porque ela é o ensaio da prova. Faltar assunto no ensaio é informação, não defeito: mostra onde a cobertura não fechou antes do dia que importa.

Cada cartão mostra, nesta ordem: o tamanho da prova em destaque, o texto sobre por que se resolve tudo de uma vez (que é o que treina ler o enunciado uma vez, decidir, marcar e seguir), o tempo de referência na conta de dois minutos por questão, e a lista do que entra no sorteio. Acima de 12 tópicos a lista vira resumo por matéria, senão a Revisão Geral empurraria o botão para fora da tela com 125 linhas.

### Onde mexeu

Em `ui.js`: `revResultadoId` ganhou o prefixo `geral:` (o `mini:` já existia), para mini e Revisão Geral do mesmo dia nunca dividirem a mesma nota; `revSalvarResultado` ganhou o ramo `tipo==="geral"`, que grava `revisaoGeralFeita`, `revisaoGeralScore` e `revisaoGeralResultadoId` no dia; `miniConfiguracaoHtml` e `miniIniciarQuestoes` foram reescritos sobre o novo `simConfiguracaoHtml`/`iniciarSimulado`; entraram `rgTopicosEdital`, `rgBloco`, `rgConfiguracaoHtml` e `rgIniciarQuestoes`; o cartão da Revisão Geral na página de Simulados ganhou `bodyHtml`; e a caixa de instrução do topo da página foi reescrita, porque mandava informar a quantidade por tópico.

Em `engine.js`, `apagarHistoricoExercicios` passou a limpar também a nota da Revisão Geral quando o resultado que a produziu é apagado, do mesmo jeito que já fazia com o mini. Registro manual, que não tem id de resultado, continua onde está.

Em `app.css`, duas classes novas: `.sim-formato` (o tamanho da prova, em caixa verde) e `.sim-ritmo` (o texto do ritmo, menor, com filete à esquerda).

Em `app/tests/ui.test.js`, `acoesUsadas()` passou a reconhecer também `acao:"<nome>"`, porque os botões dos simulados montam o `data-action` a partir da configuração e não como literal no template. É a mesma exceção que já existia para `btnAction:"<nome>"`.

### Validação

158 testes aprovados, dos quais 7 novos em `revision-session.test.js`: montagem sem escolha de quantidade; corte em 30 com rodízio equilibrado entre as matérias e sem id repetido; banco menor que o limite entrando inteiro com o aviso na tela; banco vazio sem iniciar sessão; Revisão Geral cortando em 50 e gravando no dia; ids separados entre mini e Revisão Geral do mesmo dia; e simulado futuro que não inicia e mostra só o previsto. Os 4 testes de `cpror-catalog.test.js` não rodaram nesta cópia de trabalho por dependerem de `editais.js` e do bundle. Os cartões foram renderizados com o `app.css` real a 820px e a 390px, sem rolagem lateral.

### Versões

`app/js/ui.js` 302.192, `app/js/engine.js` 66.546, `app/css/app.css` 157.695, `app/index.html` 48.649 (470 bytes NUL preservados) com `?v=20260912-simulado` nos três, e `app/sw.js` em `bussola-v44`. Pacote em `_publicar-agora/publicar-20260912-simulado`.

### Liberação antecipada dos simulados (12/09/2026)

Na primeira tentativa de usar o sistema novo, o dono abriu o menu Simulados e viu só o cartão bloqueado, com "Disponível na data planejada". Não era defeito: o primeiro Mini Simulado do plano dele caía em 30/09 e a regra era a data, e só a data. Mas a conversa expôs uma incoerência do produto: as Revisões já liberam em cascata, e o aluno que estuda adiantado terminava as três revisões que o simulado cobre e ainda esperava semanas para poder testar.

A regra passou a ser a mesma dos dois lados. `_simRevsLiberadas(revNums)` abre o Mini Simulado quando todas as revisões que ele cobre já estão liberadas, mesmo antes da data. `_simGeralLiberada()` abre a Revisão Geral quando todas as revisões do plano estão liberadas, porque ela cobre o edital inteiro e o gatilho tem que ser o plano inteiro. Quem não estudou continua vendo a data: prova de matéria não vista não mede preparação.

Detalhe de implementação que importa para quem for mexer: se `getSimuladoInfo` não devolver `revNums`, o simulado continua preso à data. É proposital. Sem saber quais revisões o simulado cobre, não há como afirmar que o conteúdo foi estudado, e o silêncio tem que travar, não liberar.

Os cartões bloqueados passaram a dizer o que destrava, em vez de só apontar a data. Três testes cobrem isso: bloqueio com revisão pendente, abertura antecipada com as revisões liberadas, e o caso sem `revNums`. Total de 160 testes aprovados.

`app/js/ui.js` foi para 303.520 bytes. As marcas de versão não mudaram, porque o pacote `publicar-20260912-simulado` ainda não tinha sido publicado: continua `?v=20260912-simulado` e `bussola-v44`.

### Só entra na prova o tópico avaliado (12/09/2026)

O dono notou que o Mini Simulado estava listando 43 de 43 tópicos de Produtos do Mercado Financeiro num plano recém-iniciado, e apontou o problema certo: o simulado estava sorteando de matéria que ele ainda não tinha estudado.

A causa é o critério de "estudado". `buildBlocosRevisao` filtra os tópicos da revisão por `STATE.dias[t.key]?.percepcao`, que é a nota do **dia**, não a do tópico. Em dia de tópico único os dois coincidem. Em dia com vários tópicos, `gravarNotaTopico` agrega sobre `getTopicosDiaBase(key)`, enquanto `getTopicosFracos` monta a lista com `getTopicosDoDia(key)`, que é base **mais os extras de recuperação**. Quando o dia tem extras, avaliar os tópicos da base já preenche a nota do dia, e os extras passam pelo filtro como se tivessem sido estudados.

No simulado isso não pode acontecer, então ele deixou de confiar nesse filtro e passou a decidir por conta própria. `_simTopicosEstudados()` percorre `STATE.dias` e monta o conjunto de `matéria|tópico` avaliados, olhando `percepcoes[ti]` um por um quando o dia tem nota por tópico e caindo em `percepcao` só quando não há. `_simFiltrarEstudados()` aplica esse conjunto, e tanto `miniBloco` quanto `rgBloco` passaram a filtrar por ele. A Revisão Geral, que antes sorteava do edital inteiro, agora sorteia do edital que o aluno já estudou; a decisão do dono é que prova de matéria não vista não mede preparação.

Simulado sem nenhum tópico avaliado não mostra mais botão desabilitado com mensagem de banco vazio, que era enganoso. Ele diz o que falta: "Nenhum tópico deste simulado foi estudado e avaliado até agora. A prova é montada aqui assim que você concluir e dar sua nota de confiança aos tópicos das revisões que ele cobre."

**Fica registrado como pendência**: o mesmo filtro frouxo continua valendo na página de Revisões, porque `buildBlocosRevisao` não foi tocado. Lá o efeito é menor, já que a revisão é justamente para rever, mas a incoerência entre `getTopicosDiaBase` e `getTopicosDoDia` na agregação da nota do dia é real e vale corrigir na origem.

Cinco testes novos (22 no arquivo, 163 no total): tópico não avaliado fora do sorteio, nenhum tópico avaliado com a mensagem certa e sem sessão, e a Revisão Geral ignorando matéria não estudada. `app/js/ui.js` foi para 305.366 bytes, sem mudança de marca de versão porque o pacote ainda não foi publicado.

### Simulado liberado precisa parecer liberado (12/09/2026)

O dono abriu o simulado liberado antes da data e apontou três coisas, todas certas.

**A etiqueta mentia.** O cartão dizia "Agendado" enquanto o corpo dele já oferecia o botão de começar. `STATUS_TOKENS` ganhou o estado `aberto`, com etiqueta "Disponível" e a paleta verde do estado concluído. A página de Simulados calcula `liberado` chamando `miniBloco`/`rgBloco` e exige duas coisas: o bloco não estar futuro e ter pelo menos um tópico estudado. Simulado sem tópico avaliado continua "Agendado", porque oferecer prova vazia é pior que esperar. O rodapé do cartão passou a dizer "Simulado disponível" no lugar de "Agendado".

**A lista não mostrava os conteúdos.** O resumo por matéria ("Produtos: 231 questões em 43 de 43 tópicos") existia para a lista não estourar a tela, mas o aluno quer justamente conferir se a prova bate com o que ele estudou, e o nome do tópico é o que permite isso. Agora `_simListaTopicos` lista sempre os nomes, agrupados por matéria, e acima de 12 tópicos a lista ganha rolagem própria (`.sim-lista-rolagem`, 220px) em vez de virar resumo. O cabeçalho passou a contar: "Conteúdos que você estudou nestas revisões e entram no sorteio (3)".

**O menu não avisava.** O `simBadge` percorria do início até hoje, então simulado liberado antes da data nunca acendia o aviso, que era exatamente o caso novo. O laço vai até a prova. Data passada conta como pendência sempre, como antes. Data futura só conta quando o simulado já abriu e tem tópico estudado, senão o menu ficaria com aviso permanente por causa de prova que ainda nem existe.

`app/js/ui.js` foi para 306.928 bytes e `app/css/app.css` para 158.405. Sem mudança de marca de versão: o pacote `publicar-20260912-simulado` continua sem ter sido publicado.

### Cartão da medalha e comemoração de nível (12/09/2026)

Duas coisas quebradas na Galeria de Troféus, apontadas pelo dono.

**Clicar na peça não fazia nada.** O que cada medalha significa vivia só no `title` do navegador. No celular não existe hover, então a informação simplesmente não existia para metade dos alunos. As peças viraram `<button>` com `data-action="verMedalha"` e abrem um cartão centralizado com ícone, família, nível de 1 a 3, nome, descrição, barra de progresso e o estado: "Conquistada", ou quanto falta com o valor atual e a meta. O cartão reabre a cada clique, quantas vezes o aluno quiser, por pedido dele.

**Subir de nível não avisava nada.** O dono passou para Prata e a tela seguiu igual. Agora `_celebrarPatente(m)` roda no fim de `renderMedalhas` e compara a patente atual com `STATE.patenteVista`, que sincroniza junto com o resto do estado. Nível maior abre o mesmo cartão, com título de comemoração, XP, medalhas conquistadas, a barra do próximo nível e confete (reaproveitando `dispararConfetti`, que já existia na barra semanal). Quem já estava acima de Iniciante quando esta versão subir recebe a comemoração do nível atual uma vez, o que é verdade e não invenção. O selo e o nome do nível também viraram botão (`verPatente`), então a tela do nível reabre a qualquer momento, sem o texto de comemoração.

O cartão reaproveita `.ps-overlay` e `.ps-card` do popup de segunda-feira, montado em tempo de execução como aquele, sem tocar no `app/index.html` e nos seus 470 bytes NUL. As classes próprias são `.md-pop*`. Três ações novas no registro: `verMedalha`, `verPatente` e `fecharMedalhaPopup`.

`app/js/ui.js` foi para 311.299 bytes e `app/css/app.css` para 159.994. 163 testes aprovados. Sem mudança de marca de versão: o pacote `publicar-20260912-simulado` continua sem ter sido publicado.

### Revisão só abre com o conteúdo concluído (12/09/2026)

O dono viu que o menu Revisões liberava ciclos antes de ele ter estudado os conteúdos correspondentes, e pediu a regra que faltava: a revisão abre pelo conteúdo, não pelo calendário.

Eram dois caminhos que abriam cedo. O primeiro era a data: `isFutura` só era verdadeiro quando a data ainda não tinha chegado, então toda revisão com data passada virava "disponível", mesmo com o aluno sem nada estudado do ciclo. O segundo era a cascata, que abria a revisão N quando a N-1 era concluída, sem olhar o conteúdo da N. Os dois saíram. O critério agora é um só: **todos os tópicos previstos no ciclo estudados e avaliados**. Como efeito colateral bem-vindo, revisão fica disponível assim que o conteúdo fecha, mesmo antes da data.

Junto veio a correção do filtro que já tinha sido apontada como pendência na seção do simulado: a lista de tópicos da revisão passou a usar a nota **por tópico** (`t.perc`), e não a nota do dia. Em dia com vários tópicos a nota do dia fecha pela agregação sobre `getTopicosDiaBase`, enquanto a lista vem de `getTopicosDoDia`, que inclui os extras de recuperação. Pela nota do dia, extra não avaliado passava como estudado. A pendência registrada na seção anterior está resolvida.

O bloco passou a carregar `previstos` e `faltam`, e a tela usa os dois. A etiqueta deixou de ser "🔒 Futura", que era mentira depois que a data parou de importar, e virou "🔒 Aguardando conteúdo". Dentro do cartão bloqueado aparece o que destrava, com número: "Ela abre quando você concluir e avaliar no Cronograma os conteúdos deste ciclo. Faltam 3 de 5 tópicos." E quando nenhuma revisão está liberada, um aviso no topo da página explica a regra inteira, para o aluno não achar que a ferramenta quebrou.

O ponto do menu já estava certo por acidente: `revBadge` conta `estado==="disponivel" && total>0`, e com a regra nova isso é exatamente "liberada". Nenhuma mudança foi necessária lá.

Arquivo de teste novo, `app/tests/revisao-liberacao.test.js`, com quatro casos: data passada sem conteúdo não libera, conteúdo parcial mantém bloqueado e informa quanto falta, conteúdo completo libera, e revisão liberada não libera a seguinte. Total de 167 testes aprovados.

`app/js/ui.js` foi para 312.600 bytes e `app/css/app.css` para 160.578.

### Cartão de revisão preso aberto e contagem falsa no dashboard (12/09/2026)

Duas consequências da mudança anterior, as duas apontadas pelo dono.

**A revisão 1 não fechava.** `renderExerciciosSection` tinha um auto-open que, a cada render, readicionava ao conjunto `_revCicloAberto` toda revisão disponível, mais um fallback que abria a última concluída quando nada estava aberto. Como `toggleRevCiclo` chama o render, fechar o cartão disparava a regra que o reabria no mesmo instante. Os dois blocos saíram: os cartões começam fechados e o clique é a única coisa que abre ou fecha.

**O dashboard prometia cinco revisões que não existiam.** O chip da bússola, o mini card e o Coach contavam `calcRevisoes()`, que é a fila de tópicos por 7 e 30 dias. Essa fila é outra medida e não tem mais tela onde ser resolvida, porque a página de Revisões trabalha por ciclos. Com a revisão 1 concluída e a 2 bloqueada, o dashboard dizia "5 revisões pendentes" e o menu não tinha nenhuma para fazer. Entrou `revisoesPendentes()`, que conta ciclos liberados e ainda não concluídos, exatamente o mesmo critério do ponto do menu lateral. Os três lugares passaram a usá-la: dashboard, página do Coach e dica do dia.

`calcRevisoes` continua no engine, com seus testes, para quem precisar da fila por tópico; ela apenas deixou de ser a fonte do número que o aluno lê.

`app/js/ui.js` foi para 312.867 bytes. 167 testes aprovados.

### ESTADO DA PUBLICAÇÃO AO FIM DO DIA 12/09/2026

Nada do dia 12/09 foi publicado ainda. Tudo o que está pendente de envio ao GitHub ficou reunido em **`_publicar-agora/publicar-20260912-simulado`**, que substitui os pacotes `publicar-20260912-rodape`, `publicar-20260912-dash` e os de conteúdo `inv-21` a `inv-34`. São seis arquivos:

| Arquivo | Bytes |
|---|---|
| `app/js/ui.js` | 312.867 |
| `app/js/engine.js` | 66.546 |
| `app/css/app.css` | 160.578 |
| `app/conteudo/conteudo-cpror.js` | 722.447 (conteúdo até inv-34) |
| `app/index.html` | 48.649 (470 bytes NUL preservados) |
| `app/sw.js` | 2.468 (cache `bussola-v44`) |

Marcas: `?v=20260912-simulado` em css, engine e ui; `?v=20260912-inv34` no bundle C-Pro R.

**Atenção para quem continuar daqui.** A pasta ativa `app/conteudo/conteudo-cpror.js` tem 710.271 bytes, do inv-33, enquanto o pacote inv-34 tem 722.447. Quem gerou o inv-34 montou o pacote e não copiou de volta para a pasta de trabalho. Se a próxima geração de conteúdo partir da pasta ativa, o inv-34 se perde. Vale sincronizar antes de gerar o inv-35.

Duas limpezas continuam pendentes no repositório, nenhuma das duas afeta o app: um `app/js/sw.js` que caiu na pasta errada em algum envio antigo, e a pasta `app/app` inteira, que serve um service worker de 24 versões atrás em `/app/app/sw.js`.

### Áudio das aulas: avaliado e descartado por ora (12/09/2026)

O dono levantou a ideia de narrar as aulas para o aluno ouvir de fone na academia, pediu uma avaliação de opções e, depois de ver os números, decidiu **não seguir**. Fica registrado para não ser reproposto sem motivo novo.

O acervo medido na data tem 218 tópicos e 1.631.029 caracteres de texto limpo, cerca de 33 horas de narração, com aula média de 7.500 caracteres (9 minutos) e a maior com 23 minutos. Em arquivo, 348 MB em opus 24 kbps ou 463 MB em mp3 32 kbps.

O custo de geração não é obstáculo: pelo free tier do Google (4 milhões de caracteres por mês nas vozes WaveNet, 1 milhão nas Chirp 3 HD), o acervo inteiro sai de graça, e mesmo pago fica entre US$ 26 e US$ 49 uma única vez. O ElevenLabs, mais natural, sairia por volta de US$ 300. A hospedagem também não é obstáculo: Cloudflare R2 dá 10 GB grátis e não cobra saída, e a conta já existe por causa do worker do Coach. O GitHub Pages está descartado para isso, por ser meio giga de mídia num repositório que o próprio Pages pede para manter abaixo de 1 GB.

Os dois obstáculos reais, que são os que pesaram na decisão: o conteúdo foi escrito para ser lido, com tabelas, cartões em bullets, siglas e valores, então precisaria de uma versão narrada derivada por regras mais um dicionário de pronúncia do jargão; e, como o conteúdo muda todo dia, sem um controle por hash que regere só o tópico alterado o áudio descola do texto em uma semana e vira informação errada no ouvido do aluno.

A voz nativa do navegador (Web Speech API) foi avaliada e não resolve o caso pedido: no iPhone a fala para quando a tela apaga ou o app vai para segundo plano, não dá para ouvir offline e a voz depende do aparelho. Serve, no máximo, como leitura na mesa.

### Menu lateral: ícones de traço e ordem nova (12/09/2026)

Pedido do dono, com referência visual anexada: tirar os emojis do menu e usar ícones de traço, e reorganizar a ordem para uma sequência mais lógica de uso.

**Ícones.** Cada `.nav-icon` passou a conter um SVG embutido no próprio `app/index.html`, com `stroke="currentColor"`, `stroke-width 1.8` e `viewBox 0 0 24 24`, desenhado à mão no estilo de biblioteca de traço. Nada de biblioteca externa nem fonte de ícone, pela regra do `file://` e do offline. A vantagem prática sobre o emoji não é só estética: o ícone herda a cor do item, então clareia no hover e escurece junto com o rótulo quando o item fica ativo, coisa que emoji não faz. O ícone da marca no topo virou uma bússola de traço.

A chama do bloco de sequência, no rodapé do menu, continua emoji de propósito. Ela é indicador de estado e a mesma chama aparece no dashboard e no bloco de gamificação; trocar só a do menu quebraria a leitura.

**Ordem em PRINCIPAL:** Dashboard, Hoje, Cronograma, Conteúdo programático, Exercícios, Revisões, Simulados, Análise do Edital, Palavra do Coach. Os dois `<nav>` separados que existiam em Principal viraram um só. Palavra do Coach saiu de Recursos e entrou no fim de Principal. Recursos e Configurações ficaram como estavam.

**Cuidado para quem mexer no index.html do app:** ele carrega 470 bytes NUL que precisam sobreviver a qualquer edição, e os ids `nav-<pagina>` são o contrato com `navTo`, que faz `document.getElementById("nav-"+pg)`, e com os passos do tour (`TOUR_STEPS`). O patch verifica os 13 ids, os quatro avisos e os campos do rodapé, um a um, antes de gravar.

`app/index.html` foi para 52.759 bytes e `app/css/app.css` para 161.555. `?v=20260912-menu` no CSS, cache `bussola-v48`. Pacote em `_publicar-agora/publicar-20260912-menu`.

### Conteúdo programático: o acordeão passou a se anunciar (12/09/2026)

O dono abriu a tela com as matérias fechadas e disse que o aluno pode não perceber que cada barra abre. Ele tem razão: uma pilha de retângulos brancos lê como lista, não como botão, e a seta que existia era o caractere `⌄` solto, pequeno e cinza, que some no meio das três colunas de peso, questões e segurança.

Foram somados três sinais, porque um só não resolve esse tipo de problema.

1. **Aviso dispensável no topo.** "Toque na matéria para ver os tópicos", com uma linha explicando que cada matéria abre a lista completa dela. Fecha no ✕ e não volta, guardado em `STATE.dicaConteudoFechada`, que sincroniza junto com o resto do estado, então não reaparece em outro aparelho.
2. **A seta virou alvo.** `.mat-chevron` agora é uma pastilha redonda de 28px com borda e fundo branco, com um chevron SVG dentro. Muda de cor no hover do cabeçalho inteiro e fica verde cheia quando a matéria está aberta. Parece botão porque agora é desenhada como um.
3. **O convite escrito na linha de resumo.** "12 tópicos · toque para ver os tópicos" quando fechada, "12 tópicos · toque novamente para recolher" quando aberta. Os dois textos são renderizados juntos e a troca é só CSS (`.mat-item.aberta`), porque `aplicarBuscaConteudo` alterna estado por classe sem re-renderizar a lista; fazer isso no JavaScript obrigaria a re-render a cada tecla digitada na busca e o campo perderia o foco.

Entraram junto a etiqueta "Expandida" ao lado do nome da matéria aberta e, dentro dela, o título "TÓPICOS DA MATÉRIA (12)", que diz onde o aluno entrou.

Ação nova no registro: `fecharDicaConteudo`.

`app/js/ui.js` foi para 314.238 bytes e `app/css/app.css` para 164.272. `?v=20260912-conteudo` no CSS e no ui.js, cache `bussola-v50`. O pacote `_publicar-agora/publicar-20260912-conteudo` reúne esta mudança e a do menu lateral, e substitui o `publicar-20260912-menu`.

**Aviso para quem for editar o `app/index.html`:** o agente de conteúdo regenera esse arquivo a cada lote novo e, ao fazer isso, reescreve as marcas `?v=` dos arquivos de código com o valor que ele conhece. Nesta rodada ele desfez o `?v=20260912-menu` do CSS e voltou para `?v=20260912-simulado`, mantendo o resto da edição. Quem mexer em CSS ou JS precisa conferir a marca depois que o agente rodar, senão o aluno recebe arquivo novo com chave de cache velha.

### Tela Hoje: a rotina do dia virou o assunto principal (12/09/2026)

Crítica do dono, e ela é precisa: numa tela chamada Hoje, o olhar ia primeiro para a saudação, depois para o cartão de prazo, depois para o Coach, e só em quarto lugar chegava à atividade do dia. Isso fazia do Hoje uma versão resumida do Dashboard em vez de uma tela de execução. A ordem agora é saudação, rotina de hoje, próxima atividade, Coach, indicadores.

**A saudação deixou de brigar com o dia.** "Bora avançar?" era fixo e aparecia em cima de "Dia de descanso". Entrou `fraseDia`, que sai do tipo do dia: "Hoje é dia de consolidar", "Hoje são 3 tópicos", "Hoje é dia de praticar questões", "Hoje é dia de reforçar os pontos fracos", "Hoje é dia de conhecer o terreno" no Dia 1.

**O cartão da rotina** ganhou duas colunas: a rotina à esquerda e a **próxima atividade** à direita (`_hojeProxAtividade`, que varre até 21 dias à frente pulando dias livres e devolve quando, o quê e o tempo previsto). Essa coluna existe por causa do dia de descanso: sem ela a tela fica com um cartão dizendo "descanse" e mais nada. Em dia de conteúdo entrou a linha "2 atividades · 1h30min previstas", com o tempo vindo de `STATE.horasDia`, que é o que o aluno configurou, e não um número inventado.

**O botão passou a ser ação, não navegação.** Em dia de conteúdo, "Começar rotina" abre o texto do primeiro tópico quando ele já está publicado, e só cai no cronograma quando não está. No descanso é "Ver próximos dias", no dia de exercícios é "Praticar questões", no Retorno Técnico é "Abrir o Retorno Técnico".

**O Coach encolheu** para uma faixa de uma linha. O diagnóstico longo continua na página do Coach; aqui ele é contexto.

**Os indicadores ficaram do dia, não do mês.** "Edital coberto" saiu porque já está no cartão amarelo logo acima, e "confiança média" saiu porque é assunto do Dashboard. No lugar entraram "tópicos concluídos" e "próxima revisão" (`_hojeProxRevisao`, o próximo dia de Exercícios de Revisão, rotulado como hoje, amanhã, em N dias ou a data).

O cartão amarelo de 19% e 79 dias ficou onde estava, por decisão do dono: ali os dois números se completam e não disputam atenção.

`app/js/ui.js` foi para 316.523 bytes e `app/css/app.css` para 169.788, com o bloco `.hj-*` novo. `?v=20260912-hoje` no CSS e no ui.js, cache `bussola-v53`. O pacote `_publicar-agora/publicar-20260912-hoje` acumula esta mudança, a do menu e a do conteúdo programático, e substitui os dois pacotes anteriores.

### Escala de verdes (12/09/2026)

Diagnóstico do dono: cabeçalho, menu lateral e item selecionado usavam praticamente o mesmo verde, então as três áreas tinham o mesmo peso visual e a página selecionada não se destacava. Ele sugeriu cinco tons e, junto, uma coisa mais importante que os tons: **uma escala fixa no CSS**, em vez de verde escolhido a dedo por tela. Foi o que ficou.

A escala vive em `:root`, no fim do `app.css`, e é a única fonte de verde daqui para frente:

| Variável | Hex | Papel |
|---|---|---|
| `--g-900` | `#102E20` | profundidade máxima |
| `--g-800` | `#164031` | **menu lateral** |
| `--g-700` | `#1C5540` | estados dentro das áreas escuras |
| `--g-600` | `#2D7052` | **cabeçalho** e elementos institucionais |
| `--g-500` | `#418363` | variações e estados secundários |
| `--g-400` | `#6FAE8F` | texto de apoio sobre fundo escuro |
| `--g-300` / `--g-200` | `#A6E2BE` / `#C8E6D5` | bordas |
| `--g-100` / `--g-50` | `#D7E9E5` / `#EAF4EE` | fundos suaves |
| `--g-acento` | `#19B471` | **esmeralda: seleção, progresso, ação** |
| `--g-tinta` | `#0E2A1D` | texto sobre o esmeralda |

O esmeralda aparece em um lugar só dentro do menu, o item ativo, e é isso que lhe dá força. O cabeçalho clareou, então as pastilhas dentro dele (concurso, notificações, hambúrguer) subiram de 7% para 12% de branco, senão sumiriam no fundo mais claro.

Contraste medido: branco sobre o cabeçalho dá 5,8:1, branco sobre o menu dá 11,6:1 e a tinta escura sobre o esmeralda dá 5,7:1. Todos acima do mínimo de 4,5:1 para texto normal.

Uma observação para quem continuar: `--navy` continua valendo como **cor de tinta** (texto e botões escuros no conteúdo claro) e não foi tocado. Mexer nele mudaria o texto do app inteiro. As superfícies escuras é que passaram a usar a escala.

`app/css/app.css` foi para 172.811 bytes. `?v=20260912-verde` no CSS, cache `bussola-v56`. O pacote `_publicar-agora/publicar-20260912-verde` acumula as quatro mudanças do dia e substitui os pacotes `-menu`, `-conteudo` e `-hoje`.

### C-Pro R inv-44: estratégias e limites dos fundos previdenciários (12/09/2026)

Foi criado e integrado o tópico `cpror-inv-44`, **Fundos previdenciários: estratégias e limites de concentração**, cobrindo os itens 3.7.7.3 e 3.7.7.4 do programa. O arquivo de pedido 21 informado na conversa não estava disponível em `_docs/AGENTES-CONTEUDO/pedidos-lote-3`; o escopo foi recuperado de `_docs/CPRO-R/cobertura-detalhada.json` e essa ocorrência foi registrada na ficha normativa.

A aula diferencia renda fixa, balanceados, multimercados e ações pelo funcionamento e pelo risco, sem tratar o nome da estratégia como substituto da leitura da política do fundo. O direcionamento separa participante comum de participante qualificado, mas reforça que qualificação regulatória não significa perfil agressivo.

Os números foram revalidados na versão vigente da Resolução CMN 4.993. Para planos comuns durante o diferimento, os limites por modalidade são 100% em renda fixa, 70% em renda variável e 20% em imóveis, variação cambial e outros. Para planos exclusivos de participantes qualificados, são 100% em renda fixa e renda variável e 40% nas outras três modalidades. A aula também apresenta os principais limites por emissor, concentração no emissor e classe ou série, com exemplos que mostram a aplicação simultânea das camadas e a escolha do menor teto efetivo.

Arquivos de autoria e auditoria:

- `_conteudo/cpror/indicacao-de-investimentos/cpror-inv-44.md`
- `_docs/CPRO-R/fontes-normativas/cpror-inv-44.md`
- `_docs/CPRO-R/topicos.json`

Integração concluída:

- `app/conteudo/conteudo-cpror.js` regenerado com 93 de 125 tópicos publicados.
- Indicação de investimentos passou a 43 de 50 tópicos publicados.
- `app/index.html` aponta para `?v=20260912-inv44` e preserva seus 470 bytes NUL.
- `app/sw.js` usa o cache `bussola-v57`, preservando a escala de verdes e as demais alterações visuais já presentes na pasta ativa.
- O `cpror-inv-40` continua planejado e não foi alterado.

Validações: conversor com 93 tópicos, zero avisos e zero erros; sete testes do conversor; 171 testes do aplicativo; 23 arquivos JavaScript com sintaxe válida; planejamento com 125 tópicos, 365 itens e 278 itens terminais, sem erros. A estrutura editorial possui os cinco H2 obrigatórios, cartão de revisão com sete linhas e nenhuma lista ou tabela acima de sete itens ou linhas.

Pacote preparado em `_publicar-agora/publicar-20260912-inv44`. Se a atualização visual `publicar-20260912-verde` ainda não estiver no GitHub, ela deve ser publicada antes deste pacote, pois o `index.html` preserva a referência `?v=20260912-verde` do CSS.

### C-Pro R inv-45: diversificação e revisão periódica da previdência (12/09/2026)

Foi criado e integrado o tópico `cpror-inv-45`, **Previdência: diversificação e revisão periódica da carteira**, cobrindo os itens 3.7.7.5 e 3.7.7.6 do programa. O arquivo de pedido 22 informado na conversa não estava disponível em `_docs/AGENTES-CONTEUDO/pedidos-lote-3`; o escopo foi recuperado de `_docs/CPRO-R/cobertura-detalhada.json` e a ausência foi registrada na ficha normativa.

A aula diferencia diversificação real de mera quantidade de fundos, mostra como classes, estratégias, gestores, entidades e planos podem cumprir funções diferentes e alerta para exposições econômicas repetidas. O uso de vários planos foi ligado a objetivos concretos, prazos e tratamentos tributários, sem incentivar fragmentação automática.

A revisão periódica foi estruturada em objetivos, saldo projetado, aportes, risco, regime tributário, beneficiários, custos e fundos. Um exemplo calcula a evolução de R$ 180 mil com aportes mensais de R$ 2 mil durante quinze anos a 4% reais ao ano: aproximadamente R$ 813.484. Para uma meta real de R$ 1 milhão nas mesmas premissas, o aporte calculado é de aproximadamente R$ 2.762. A conta foi validada com taxa mensal equivalente.

A regra tributária foi revalidada na Lei 14.803/2024 e no procedimento conjunto publicado pela Susep em 2025. A opção entre progressivo e regressivo pode ocorrer até o benefício ou primeiro resgate e, depois de exercida para os valores abrangidos, torna-se irretratável. A aula deixa claro que revisar o regime não significa desfazer livremente uma escolha já fixada.

Arquivos de autoria e auditoria:

- `_conteudo/cpror/indicacao-de-investimentos/cpror-inv-45.md`
- `_docs/CPRO-R/fontes-normativas/cpror-inv-45.md`
- `_docs/CPRO-R/topicos.json`

Integração concluída:

- `app/conteudo/conteudo-cpror.js` regenerado com 94 de 125 tópicos publicados.
- Indicação de investimentos passou a 44 de 50 tópicos publicados.
- `app/index.html` aponta para `?v=20260912-inv45` e preserva seus 470 bytes NUL.
- `app/sw.js` usa o cache `bussola-v58`, preservando a escala de verdes e as demais alterações visuais da pasta ativa.
- O `cpror-inv-40` permanece planejado.

Validações: conversor com 94 tópicos, zero avisos e zero erros; sete testes do conversor; 171 testes do aplicativo; 23 arquivos JavaScript com sintaxe válida; planejamento sem erros; estrutura editorial completa; projeção e aporte do exemplo recalculados de forma independente.

Pacote preparado em `_publicar-agora/publicar-20260912-inv45`. Ele substitui o pacote `publicar-20260912-inv44`. Se a atualização visual `publicar-20260912-verde` ainda não estiver no GitHub, deve ser publicada antes, pois o `index.html` preserva a referência do CSS `?v=20260912-verde`.

### Cronograma semanal: a semana em uma faixa só (12/09/2026)

O dono disse que "os cards na linha de baixo ainda incomodam" e mandou uma proposta visual. A grade era 4+4, decisão de 14/07 que buscava simetria de calendário: Seg a Qui na primeira linha, Sex, Sáb, Dom e Anotações na segunda. O problema que ele apontou é real e a simetria não resolve: **uma semana tem sete dias em sequência**, e quebrar no meio obriga o olho a voltar ao começo da linha, o que nenhum planner de papel faz.

Em telas de 1280px ou mais, `.semana-grid` passou a ter oito colunas, os sete dias mais as anotações. Abaixo disso ela volta a quebrar, 4 colunas até 1024px, 2 até 768px e 1 no celular, porque coluna de 100px não comporta o nome de uma matéria.

Coluna estreita pede tipografia proporcional, senão cada nome quebra letra a letra. Dentro do bloco `@media (min-width:1280px)` entraram versões menores de `.dia-label`, `.dia-date`, `.dia-badge`, `.dia-topico`, `.dia-subtopico`, `.multi-topico-text`, `.check-label` e da área de anotações, além de `min-height:300px` para os cartões terminarem na mesma linha.

**Ilustrações de fundo.** Ele gostou das do mockup, e elas resolvem um problema concreto: o cartão de descanso e o de anotações têm pouco texto e ficavam com um vazio grande no meio da faixa. Entraram como `::after` com SVG embutido em `data:` no próprio CSS, uma colina em tom de papel nos dias de descanso e um ramo no cartão de anotações. Sem arquivo de imagem, sem requisição extra e sem quebrar offline.

Detalhe que custou tempo e vale registrar: o cartão de descanso é montado em `renderDiaLivre` com `style="background:#F4EFE6"` inline, e a forma abreviada `background` zera o `background-image` com prioridade maior que a folha de estilo. Por isso o cartão ganhou a classe `card-descanso` e a ilustração foi para um pseudo-elemento, em vez de virar `background-image` do próprio cartão.

Os cartões também ficaram com canto de 18px e sombra mais macia, para a faixa parecer um conjunto e não oito caixas soltas.

`app/css/app.css` foi para 177.128 bytes e `app/js/ui.js` para 316.537 (só a classe nova no dia de descanso). `?v=20260912-cron` no CSS e no ui.js, cache `bussola-v59`. O pacote `_publicar-agora/publicar-20260912-cronograma` acumula as cinco mudanças do dia e substitui os pacotes `-menu`, `-conteudo`, `-hoje` e `-verde`.

### Cronograma: volta atras na faixa de oito colunas e nas imagens de fundo (12/09/2026)

Duas tentativas do mesmo dia foram desfeitas a pedido do dono: "o cronograma lado a lado nao ficou bom e o fundo de tela tambem nao. consegue voltar o cronograma da forma que ja estava?".

O que saiu do `app/css/app.css`:

1. **A faixa de oito colunas.** Em telas de 1280px ou mais, os sete dias e as anotacoes ficavam lado a lado. Na pratica cada coluna virou um corredor estreito: o nome da materia quebrava em tres ou quatro linhas, o botao "Ler o conteudo" mal cabia e o cartao de descanso, que tem duas linhas de texto, ficava com um vazio enorme. A grade 4+4 voltou a valer, com Seg a Qui em cima e Sex, Sab, Dom e Anotacoes embaixo. Junto sairam a tipografia reduzida do bloco `@media (min-width:1280px)`, o `min-height:300px`, o canto de 18px e a sombra nova.

2. **As aquarelas de fundo.** O dono tinha enviado tres imagens proprias, uma para o dia de descanso, uma para o dia de estudo e uma para as anotacoes, convertidas para WebP de 10, 18 e 22 KB. O resultado nao agradou: no cartao de estudo a imagem aparecia por tras de tres blocos de texto e deixava a leitura suja, e nos cartoes vazios ela dominava o cartao em vez de decorar. Todo o bloco `.dia-card::after` / `.notas-semana-card::after` saiu, e nenhum arquivo de imagem chegou a ser enviado para o projeto, entao nao ha o que apagar em `app/img`.

Em `app/js/ui.js` a classe `card-descanso`, criada so para pendurar a ilustracao no cartao de dia livre, foi removida de `renderDiaLivre`. Se algum dia a ideia voltar, o caminho e esse: o cartao e montado com `style="background:#F4EFE6"` inline, e a forma abreviada `background` zera qualquer `background-image` da folha de estilo, por isso a imagem precisa de pseudo-elemento e de uma classe para ancora-lo.

**Fica valendo do dia:** menu lateral com icones de traco, conteudo programatico com a abertura evidente, tela Hoje reorganizada e a escala de verdes. So o cronograma voltou ao que era.

`app/css/app.css` foi de 178.586 para 172.811 bytes e `app/js/ui.js` de 316.537 para 316.523. `?v=20260912-cron2` no CSS e no ui.js, cache `bussola-v60`. O pacote `_publicar-agora/publicar-20260912-final` substitui o `-cronograma` e continua acumulando tudo do dia.

### Cartões do cronograma mais baixos, botão de registrar translúcido e o Hoje que pousa no cartão (12/09/2026)

Três pedidos do dono no mesmo lugar, depois da volta atrás da grade de oito colunas.

**1. Altura dos cartões.** "Reduzir verticalmente os botões para talvez conseguir ver a parte de baixo do cronograma." O cartão de dia intensivo empilha três tópicos e cada um carrega o botão "Ler o conteúdo"; como a altura da linha da grade é a do cartão mais alto, esses botões definiam a altura da semana inteira. Em `.dia-card .cont-btn` o padding vertical caiu de `.45rem` para `.28rem`, a fonte de `.82rem` para `.76rem` e a borda de 1,5px para 1px; `.cont-acao` perdeu margem, e dentro de `.semana-grid` o `.multi-topico-row`, o `.multi-topico-list` e o `.dia-body` ficaram um pouco mais apertados. Medido no harness com o `app.css` real: a grade caiu de 958px para 876px a 1440px de largura, 82px a menos, o bastante para a segunda fileira entrar na tela de um notebook comum. No celular nada disso vale: abaixo de 768px o botão volta a ter `min-height:38px`, porque ali o alvo é o dedo.

**2. Botão de registrar com transparência.** Os botões "Registrar exercícios da revisão N", "Registrar Revisão Geral" e "Registrar em Simulados" tinham cor sólida escrita no atributo `style`, cada um com um verde diferente. Agora usam a classe `.dia-btn-acao`: verde esmeralda a 18% sobre o fundo do próprio cartão, borda a 42%, `backdrop-filter:blur(6px)` e texto em `#12452F`. O contraste não depende da transparência ter sido aplicada, porque o texto é escuro sobre um fundo claro nos dois casos. No celular o botão ganha `min-height:40px`.

**3. O botão Hoje do cronograma.** Ele não levava a lugar nenhum quando o dia atual era de descanso: `renderDiaLivre` era a única função de cartão que não punha `id="card-<data>"`, então `scrollAteCardHoje` não achava o alvo e saía calada. O id entrou ali e também no cartão de "antes do início". Além disso a função passou a insistir: se o cartão ainda não existe, tenta de novo por até cerca de 1,2s, e em último caso leva a grade da semana para o topo da tela.

`app/css/app.css` foi para 175.366 bytes e `app/js/ui.js` para 316.718. `?v=20260912-cards` no CSS e no ui.js, cache `bussola-v61`. O pacote `_publicar-agora/publicar-20260912-final` foi refeito com estes arquivos.

### O cartão do dia de estudo passa a nascer fechado (12/09/2026)

Mesmo depois de encolher os botões, o dono continuou sem enxergar a segunda fileira da semana, e propôs a solução certa: "e se deixarmos apenas um botão no dia Estudar e ao clicar, o sistema abre o card e aí sim exibindo os botões ler conteúdo, Conteúdo lido e exercícios resolvidos?".

O diagnóstico por trás disso vale ficar registrado. Um dia intensivo carrega três tópicos, e cada tópico tem botão de conteúdo e, quando há curso vinculado, botão de aula. Somam-se duas caixas de marcação e, depois delas, cinco estrelas por tópico. Isso é a tela de trabalho do dia, não o resumo da semana, e como a altura da linha da grade é a do cartão mais alto, um único dia intensivo empurrava a fileira de baixo para fora da tela.

**Como ficou.** O cartão de um dia ainda não avaliado nasce com a classe `dia-compacto`: aparecem a etiqueta de quantos tópicos, a lista dos nomes sem moldura e um botão largo, "Estudar" ou "Estudar hoje" quando é o dia corrente. Clicando nele, ou no cabeçalho do cartão, tudo volta: botões de conteúdo e de aula, "Conteúdo Lido", "Exercícios Resolvidos", as estrelas e os avisos. Nada foi removido do aplicativo, apenas guardado atrás de um clique. No fim do cartão aberto há um "Fechar o dia".

Medido no harness com o `app.css` real e a marcação idêntica à do aplicativo, a 1440px: a grade da semana caiu de 876px para 691px, e a página inteira do cronograma passou a caber em 900px de altura, que é a tela de um notebook comum.

**Implementação.** `est.aberto` guarda o estado por dia, do mesmo jeito que `est.collapsed` já guardava o dos dias concluídos. `toggleDia` passou a atender os dois casos: dia concluído mexe em `collapsed`, dia por estudar mexe em `aberto`, e ao abrir, o cartão é trazido para a tela com `scrollIntoView`, porque ele cresce e pode nascer fora do campo de visão. O cabeçalho do cartão virou área clicável em qualquer estado.

Um detalhe de CSS que custou uma rodada: a moldura de cada tópico é pintada na linha 1218 do `app.css` com `!important`, herança do ajuste de paleta. Para o modo fechado ficar limpo foi preciso o mesmo peso.

`app/css/app.css` foi para 177.610 bytes e `app/js/ui.js` para 317.822. `?v=20260912-abrir` no CSS e no ui.js, cache `bussola-v62`. O pacote `_publicar-agora/publicar-20260912-final` foi refeito.

### Home: a aquarela da trilha no hero e o cabeçalho com menu de certificações (12/09/2026)

O dono enviou uma aquarela própria, no mesmo traço das do aplicativo: bússola no canto esquerdo, vale ao centro, caminho pontilhado subindo até a bandeira no alto da montanha. Junto veio um mockup mostrando como ele quer o hero e uma sugestão de cabeçalho.

**A imagem.** Original de 1.930 KB em PNG, 1672x941. Entrou como WebP de 1600px e 78 KB. Ela não é `background` do hero, e a razão é prática: os quatro marcos da jornada precisam pousar em pontos concretos do desenho. Por isso vive numa camada, `.hero-art`, com a proporção original travada em `aspect-ratio:1600/900`, ancorada na base do hero e com largura de 100%. Assim cada marco pode ser posicionado em porcentagem e cai sempre no mesmo ponto do desenho, em qualquer largura de tela. Quando a janela é mais baixa que a camada, o corte acontece em cima, onde só há céu.

**A legibilidade.** A primeira tentativa foi um véu em caixa atrás do texto. Ficou pior: em cima de uma aquarela, a borda da caixa aparece, e o hero ganhou um retângulo esbranquiçado visível. O que funcionou foi um véu que atravessa o hero inteiro na horizontal, em `.hero::after`: nasce fraco na borda esquerda, para a bússola continuar viva, firma onde o texto passa e se dissolve antes do cartão de demonstração. No celular ele gira para a vertical: firme em cima, onde fica todo o texto, e aberto embaixo, onde a aquarela vira rodapé do hero.

**Detalhe de empilhamento que custou uma rodada.** Os marcos são filhos de `.hero-art`. Com `z-index:0` na camada, ela virava contexto de empilhamento e os marcos ficavam presos abaixo do véu, que também é `z-index:0` e vem depois. A correção foi tirar o `z-index` da camada e dar `z-index:2` aos marcos.

**Onde cada marco pode ficar.** O cartão de demonstração ocupa toda a metade direita do hero e tem quase 800px de altura, então sobra pouco espaço livre. Planejamento, Disciplina e Evolução seguem a trilha na faixa de baixo, à esquerda do cartão. Aprovação fica junto da bandeira, na margem à direita, e só aparece acima de 1400px, onde existe essa margem. A frase "Grandes resultados são a soma de pequenos esforços diários" mora na mesma margem e só aparece acima de 1600px. Abaixo de 1100px os marcos somem e o hero volta a mostrar os três selos de texto.

**Cabeçalho.** "Certificações" virou "Certificações disponíveis" com um menu que abre a lista real, montada a partir do mesmo `dados-site.js` que alimenta a seção, então não existe lista duplicada para ficar desatualizada. Fecha com Esc, ao clicar fora e ao escolher um item, que leva à seção já com aquela certificação aberta. Entrou também o botão "Comece agora", que leva à oferta. Entre 760 e 900px o menu de seções sai da barra, porque os dois botões e os links não cabem na mesma linha, e abaixo de 430px a marca encolhe para os botões continuarem lado a lado.

Arquivos: `index.html` da raiz com 11.393 bytes, `css/home.css` com 17.171, `js/ui.js` da home com 8.135 e a pasta nova `img/` com `hero-trilha.webp`. `?v=20260912-trilha` no CSS e no js da home. Pacote em `_publicar-agora/publicar-20260912-home`.

Lembrete que vale repetir: o `index.html` da raiz é a home, o `index.html` de dentro de `app/` é o aplicativo. Trocar um pelo outro derruba o site, como aconteceu nesta mesma semana.

### O dia já concluído também fica compacto (13/09/2026)

O dono mandou um print do cronograma: os cartões por estudar estavam curtos, com o botão "Estudar", mas o dia já concluído continuava esticado, com os três tópicos e um botão "Ler o conteúdo" embaixo de cada um.

O motivo estava no estado antigo de "fechado". Um dia avaliado já nascia com `is-collapsed`, mas essa classe só escondia a medalha, o peso, as caixas de marcação e as estrelas. A lista de tópicos e os botões de conteúdo continuavam lá. Na prática o cartão do dia estudado ficava tão alto quanto o de um dia por estudar, que era exatamente o problema que o modo compacto tinha resolvido no dia anterior.

A correção foi de uma linha em `renderDia`: `compacto=isCollapsed||(!isDone&&est.aberto!==true)`. O dia concluído e fechado passa a receber também a classe `dia-compacto`, que é quem esconde os botões de conteúdo e de aula e tira a moldura de cada tópico. O cartão fechado fica com a etiqueta de quantos tópicos, os nomes, e o rodapé que já existia com as estrelas e o botão de limpar o dia. Clicando no cabeçalho ele abre inteiro, como sempre.

O botão "Estudar" não aparece nesses cartões: `.is-collapsed .dia-abrir-wrap` já o escondia, e quem reabre um dia concluído é o cabeçalho.

`app/js/ui.js` foi para 318.145 bytes. `?v=20260913-fechado` no CSS e no ui.js, cache `bussola-v63`.

### Home: rede de segurança para a aquarela do hero (13/09/2026)

O dono publicou e relatou que a imagem de fundo não apareceu. Conferido no repositório: `img/hero-trilha.webp` está lá, o `css/home.css` publicado tem a regra `.hero-art` apontando para `../img/hero-trilha.webp` e o `index.html` da raiz tem a camada. Ou seja, os três arquivos subiram certos.

A causa provável é a altura da camada. Ela é resolvida por `aspect-ratio:1600/900`, que não existe em Safari anterior ao 15 nem em WebView antigo de Android: sem isso a camada fica com altura zero e a aquarela não aparece, sem nenhum erro visível. Entrou um bloco `@supports not (aspect-ratio:16/9)` com `height:0;padding-bottom:56.25%`, que reproduz a mesma proporção em qualquer navegador, porque porcentagem de padding é calculada sobre a largura.

A outra hipótese é cache do navegador. `?v=` mudou para `20260913-fundo` justamente para forçar a releitura do CSS.

### Home no celular: uma página pensada para a mão (13/09/2026)

O dono fez um diagnóstico preciso: a identidade estava boa, o problema era que a versão de computador tinha sido apenas empilhada. A página ficava longa e alguns elementos ganhavam peso demais. Tudo o que segue é ritmo e tamanho; nenhuma informação saiu da página.

**Cabeçalho.** Virou um cartão branco flutuante de 62px, com a marca 15% menor, um único botão em destaque ("Comece agora") e o três-traços. "Certificações disponíveis", "Como funciona", "Dúvidas" e "Já sou aluno" passaram a morar dentro do menu, que abre como segunda linha do próprio cartão. O "Já sou aluno" sai da barra porque no celular quem chega pela primeira vez precisa de um caminho só.

**Hero.** Título em três linhas com `clamp(34px,8.8vw,45px)`, texto de apoio em 15,5px com largura travada em 33 caracteres. A ordem dos elementos passou a ser decidida no CSS: `.hero-actions` recebe `display:contents` no celular, o que solta o botão e o link secundário do bloco e permite intercalar o preço entre eles. A sequência ficou ação principal, preço, link secundário, selos.

**Preço colado na ação.** A linha virou duas partes no HTML, `<strong>R$ 29,90 · pagamento único</strong>` e `<span class="reassurance-sub">7 dias de garantia</span>`. No celular elas empilham; na tela grande o próprio CSS repõe o ponto de separação com `::before`, então continua sendo uma frase só.

**Selos.** Os três benefícios deixaram de ser texto solto e viraram pastilhas com o certo dentro de um círculo verde, logo antes da demonstração. Funcionam como prova rápida do que se está comprando.

**Demonstração.** Mesma marcação, mesmas funções, moldura menor: cabeçalho verde de 64px, abas de 44px, corpo com padding de 15px e cartões de tópico mais apertados. O cartão foi de 592px para 471px, 20% mais baixo, e agora começa a aparecer a 670px do topo, ou seja, dentro da primeira tela de um celular comum.

**A paisagem presa no pé da tela.** Esta foi a parte que mais rendeu tentativa. Esticar o desenho numa tela em pé deforma a aquarela; recortar um pedaço central só mostra céu; e como o cartão de demonstração é opaco e cobre metade do hero, qualquer coisa atrás dele é invisível. A solução veio de um pedido do próprio dono: a camada saiu do fluxo e virou `position:fixed` colada na base da JANELA, com `z-index:-1`, altura de `56.25vw`, que é a proporção do desenho, e máscara dissolvendo o topo. Enquanto se lê o hero a paisagem não se mexe; ao rolar, os blocos de conteúdo sobem por cima dela como cortina. Esses blocos ficaram com 92% de opacidade, então a aquarela continua respirando no pé da tela durante a rolagem inteira, sem tirar contraste do texto, que fica sempre na parte de cima de cada bloco. `background-attachment:fixed` faria algo parecido em uma linha e foi descartado: é justamente o que o Safari do iPhone ignora ou engasga.

A mesma imagem volta uma vez no meio do caminho, como faixa de 148px antes da seção de oferta. É o arquivo já carregado, então não custa nada, e ali ela pode ser recortada porque o que importa é a textura.

**Densidade geral.** Títulos de seção de 26px, entrelinha dos parágrafos de 1,65 em vez de 1,8, respiro entre seções de 38px em vez de 52px, e reduções proporcionais em passos, lista de valor, certificações, FAQ e oferta. A página do celular foi de 7.015px para 6.168px, 12% mais curta, com o hero de 1.337px para 1.217px.

Arquivos: `index.html` da raiz com 12.052 bytes, `css/home.css` com 26.899 e `js/ui.js` da home com 9.129. `?v=20260913-mobile`. A imagem não mudou.

A partir daqui o dono não quer mais pastas de publicação: a lista do que subir vai direto na conversa.

### Home: os botões vão direto para a compra, preço anunciado de R$ 299,90 e a aquarela no alto (13/09/2026)

Quatro correções pedidas pelo dono, todas na home.

**1. Os botões principais levavam para uma seção, não para o pagamento.** "Comece agora", no cabeçalho, e "Começar minha preparação", no hero e no fechamento, apontavam para `#oferta`, então a página apenas rolava. Os três passaram a usar `data-action="checkout"` com o link da Hotmart e `target="_blank"`, que é o mesmo mecanismo do botão do cartão de preço. O `js/ui.js` da home já reescreve o `href` de todo `[data-action="checkout"]` a partir da constante `CHECKOUT`, então existe um lugar só para trocar o link no futuro. "Conhecer a ferramenta" continua sendo âncora para a demonstração, que é o que ele deve ser.

**2. Preço anunciado.** Passou para R$ 299,90 em toda a página. A constante `PRICE` do `js/ui.js` alimenta todos os `[data-price]`, e os valores escritos no HTML foram atualizados junto, porque eles são o que aparece se o JavaScript não carregar. Registro para quem vier depois: a Hotmart segue cadastrada em R$ 29,90 e o dono sabe disso, foi decisão dele manter assim por ora. Se alguém for mexer no preço, os dois lugares precisam combinar.

**3. O "Já sou aluno" tinha sumido no celular.** Ele havia ido para dentro do menu de três traços na reforma anterior. Voltou para a barra, ao lado do botão verde. Para os dois caberem na mesma linha em 360px, o botão de compra usa rótulo curto no celular, "Começar", com o rótulo longo voltando na tela grande por `.rot-longo`/`.rot-curto`; a marca ganhou `min-width:0` com corte, de modo que ela encolhe em vez de empurrar a barra para duas linhas. O menu de três traços ficou só com as seções da página.

**4. A aquarela estava escondida no fim da página.** As duas tentativas anteriores no celular, faixa no pé do hero e camada presa na base da janela, esbarraram no mesmo obstáculo: o cartão de demonstração e os blocos de conteúdo são opacos e cobriam o desenho. Agora a camada ocupa os primeiros 390px do hero, atrás do texto de abertura. O recorte é `cover` ancorado em `20% 76%`, que traz a bússola, o sol, as folhas e a trilha, e não o céu vazio do topo do desenho. O véu ficou bem mais fraco no alto (12% no topo, 55% na altura do texto de apoio) e só fecha de vez abaixo da metade do hero, então a paisagem aparece de verdade sem tirar leitura do título. Os fundos de seção voltaram a ser opacos e a camada fixa saiu.

Um bloco antigo de `@media(max-width:760px)`, sobra da versão anterior do cabeçalho, continha `.nav-cta span{display:none}` e apagava o rótulo do botão, porque `.nav-cta span` tem especificidade maior que a classe do rótulo. Foi removido. Vale a regra geral: ao reformar um trecho do `home.css`, conferir se existe bloco antigo do mesmo seletor mais acima no arquivo.

Arquivos: `index.html` da raiz com 12.262 bytes, `css/home.css` com 26.873 e `js/ui.js` da home com 9.130. `?v=20260913-cta`.

### Home no computador: o cartão de demonstração encolheu e virou vidro (13/09/2026)

Pedido do dono: reduzir o cartão em 25% e dar alguma transparência. Ele ocupava metade do hero e, sendo opaco, tapava justamente o trecho da aquarela onde estão a trilha e a bandeira.

Nada saiu de dentro dele. As três abas, os dois tópicos de exemplo, os botões e o rodapé continuam iguais, apenas em escala menor: cabeçalho verde de 12px de padding, abas de 38px, corpo com 15px e tipografia proporcional. A coluna da grade passou de `1.05fr 1fr` para `1.25fr .82fr`, então o cartão estreitou e o texto de abertura ganhou espaço. Medido a 1440px, o cartão foi de 536x580 para 439x448: 23% mais baixo, 18% mais estreito, 37% menos área.

A transparência é de vidro, não de opacidade solta: `rgba(255,255,255,.82)` com `backdrop-filter:blur(14px)`, e o verde do cabeçalho em `rgba(20,56,40,.9)`. O desfoque é o que garante a leitura, porque o texto nunca fica direto sobre o desenho. O rodapé e as molduras dos tópicos também abriram um pouco, senão o cartão pareceria vidro com adesivos opacos colados dentro.

Um efeito colateral: com a coluna mais larga, o título passou a quebrar em "passo rumo". Entraram `max-width:580px` no `h1` e `490px` no texto de apoio, que devolvem as três linhas originais.

Tudo isso vive em `@media(min-width:761px)`. O celular não foi tocado.

`css/home.css` foi para 29.643 bytes. `?v=20260913-vidro`.

### Ajuste fino do cartão de demonstração e o selo que encostava nele (13/09/2026)

Segunda rodada no hero de computador, a pedido do dono.

**O cartão encolheu mais e abriu mais.** A coluna passou de `1.25fr .82fr` para `1.35fr .72fr` e a escala interna caiu outro degrau: cabeçalho de 10px de padding, abas de 34px, corpo de 13px, tópicos de 7px. Medido a 1440px, o cartão foi de 536x580, que era o tamanho original, para 384x404: 30% mais baixo, 28% mais estreito, metade da área. O fundo foi de `rgba(255,255,255,.82)` para `.66`, o verde do cabeçalho de `.9` para `.82`, e as molduras dos tópicos e o rodapé abriram junto, senão pareceriam adesivos opacos colados dentro do vidro. O desfoque subiu para 16px, que é o que sustenta a leitura: o texto nunca fica direto sobre o desenho.

**O selo APROVAÇÃO encostava no cartão.** Ele estava posicionado em `left:93%` da camada do desenho. Como a coluna de conteúdo tem no máximo 1160px e fica centrada, entre 1400 e 1500px de janela essa porcentagem cai exatamente em cima da borda do cartão. Agora ele é ancorado em `right:18px` e só aparece entre 1520px e 1720px.

O limite de cima tem outra razão, que vale registrar porque não é óbvia: a camada do desenho mantém a proporção 1600x900 e é ancorada na base do hero, então quanto mais larga a janela, mais alta ela fica e mais o topo é cortado. Acima de mais ou menos 1720px o alto da montanha, com a bandeira, sai do enquadramento, e um selo de aprovação pendurado sem bandeira nenhuma não quer dizer nada.

**A frase ganhou apoio.** "Grandes resultados são a soma de pequenos esforços diários" fica sobre a folhagem, que é a parte mais escura do desenho, e em itálico cinza não se lia. Recebeu o mesmo tratamento de vidro do cartão.

`css/home.css` foi para 30.601 bytes. `?v=20260913-vidro2`. O celular não foi tocado em nenhuma das duas rodadas.


### Cartão de demonstração: mais transparência ainda, e o diagnóstico do "subi e não mudou" (13/09/2026)

Terceira e última rodada no hero de computador. O branco do cartão caiu de 66% para 50% e o desfoque de 16px para 9px. Esse segundo número é o que realmente importa: com desfoque alto o vidro vira leitoso e a paisagem some, por mais que a opacidade baixe. O verde do cabeçalho foi para 72%, as molduras dos tópicos para 30% e o rodapé para 30%. Com o desenho aparecendo por trás, os textos de apoio, abas, rótulo de matéria e rodapé, foram escurecidos um degrau para segurar o contraste.

**O problema de publicação, que se repetiu três vezes no dia.** O dono publicou e o site não mudou. Conferido pela API do GitHub, que devolve o tamanho do arquivo e não depende de leitura: o `index.html` publicado tinha 12.266 bytes, ou seja, era a versão nova, mas o `css/home.css` publicado tinha 26.873 bytes, que é a versão anterior. Ou seja, o HTML subia e o CSS não.

Isso acontece porque o envio pela web do GitHub precisa ser feito DENTRO da pasta `css`. Soltar o arquivo na raiz cria um `home.css` solto lá e o site continua lendo o antigo, sem erro nenhum aparente.

Para cortar esse problema pela raiz, passou a existir a pasta `_para-o-github` no projeto, com a estrutura pronta: `index.html` na raiz dela e `css/home.css` dentro. Arrastar a pasta `css` inteira para a caixa de envio do GitHub preserva o caminho, e o arquivo cai no lugar certo.

Forma rápida de conferir uma publicação sem depender de cache de navegador, e que vale guardar:
`https://api.github.com/repos/bussoladeestudos/home/contents/css/home.css?ref=main`
O campo `size` diz na hora qual versão está no ar.

`css/home.css` foi para 30.794 bytes. `?v=20260913-vidro2` no `index.html`, que tem 12.268 bytes.

### C-Pro R: Bitcoin, funcionamento, teses e diferenças entre criptoativos (13/09/2026)

O `cpror-inv-47` foi produzido e integrado pelo fluxo que entrega aula e questões na mesma rodada. A pergunta que organiza o texto é como a rede se sustenta sem uma autoridade central. A explicação separa Bitcoin, protocolo e rede, de bitcoin ou BTC, o ativo; depois conecta transações, blocos, hashes, nós, mineração, consenso e incentivos econômicos. As teses de escassez digital, reserva de valor, transferência e adoção aparecem com suas críticas, sem promessa de valorização.

A aula está em `_conteudo/cpror/indicacao-de-investimentos/cpror-inv-47.md`. A ficha de conferência está em `_docs/CPRO-R/fontes-normativas/cpror-inv-47.md`. Foram usadas fontes técnicas primárias: o whitepaper do Bitcoin, o guia de blockchain para desenvolvedores, a documentação de validação do Bitcoin Core e a FAQ técnica do projeto. Ethereum, tokens e formas de acesso ficaram fora, pois pertencem aos tópicos inv-48, inv-49 e inv-50.

O banco está em `_conteudo/cpror/questoes/indicacao-de-investimentos/cpror-inv-47.yaml`, com 9 questões autorais. A distribuição ficou em 2 de nível 1, 5 de nível 2 e 2 de nível 3. Os gabaritos usam as quatro letras e todas as questões têm `dominio`. Os casos de nível 2 e 3 ganharam contexto com valor, prazo, finalidade e decisão de atendimento; as duas questões conceituais de nível 1 foram mantidas curtas de propósito.

Cobertura das questões:

- q1: rede Bitcoin e ativo bitcoin.
- q2: transações, blocos e hashes.
- q3: mineração e validação por nós.
- q4: prova de trabalho, custo de ataque e incentivos.
- q5: emissão programada, tese de escassez e demanda.
- q6: adoção da rede, adoção do ativo e preço.
- q7: comparação estrutural com outros criptoativos.
- q8: tese, risco e adequação ao objetivo do cliente.
- q9: consenso e histórico válido.

O catálogo `_docs/CPRO-R/topicos.json` marca o inv-47 como `publicado localmente`. O conversor de conteúdo registra 96 de 125 tópicos da C-Pro R, sendo 46 de 50 em Indicação de investimentos. O conversor de questões registra 18 questões em 2 tópicos. O `app/index.html` carrega os dois pacotes com `?v=20260913-inv47`, preservando os 470 bytes nulos que já existiam no arquivo. O service worker passou para `bussola-v66`.

Validações executadas:

- `python outputs/conteudo_para_js.py cpror --check`: 96 tópicos, zero aviso e zero erro.
- `python outputs/questoes_para_js.py cpror --check`: 18 questões, zero aviso e zero erro.
- `python _docs/CPRO-R/validar_planejamento.py`: 125 tópicos, 365 itens, 278 itens terminais e zero erro.
- `python -m unittest outputs/test_conteudo_para_js.py`: 7 testes aprovados.
- `node --test app/tests/*.test.js`: 171 testes aprovados.
- `node --check` nos 24 arquivos JavaScript do aplicativo: zero falha.

O `conteudo_para_js.py --check` sem indicar certificação percorre também pastas auxiliares e legadas da CPA e ainda relata erros antigos nesses arquivos. Para validar este lote, use `python outputs/conteudo_para_js.py cpror --check`, que isola a fonte da C-Pro R.

Arquivos ativos para publicar no GitHub, mantendo `app/index.html` e `app/sw.js` por último:

1. `app/conteudo/conteudo-cpror.js`
2. `app/conteudo/questoes-cpror.js`
3. `app/index.html`
4. `app/sw.js`

Conforme a orientação atual do dono, não foi criada pasta de publicação para este tópico.

### Guia de elaboração de questões da ANBIMA: o que muda no nosso banco (13/09/2026)

A ANBIMA publicou o **Guia de elaboração de questões das novas certificações de distribuição**, que o dono trouxe. Ele vale para CPA, C-Pro R e C-Pro I, e as provas novas **começam a valer em janeiro de 2026**. Não é banco de questões, é a especificação de como a banca escreve questão, e por isso vale muito para nós: é padrão de redação e fonte de distratora. O PDF ficou em `_conteudo/_fontes/`.

Três documentos novos saíram disso.

**`_docs/REGRAS - Questoes no padrao Anbima 2026.md`** é o documento de referência. Traz os quatro formatos da prova nova, os tamanhos em caracteres, a estrutura de contexto, comando e alternativas, a régua das distratoras e a classificação de cada questão. Onde ele conflitar com o prompt da CPA, manda ele.

**`_conteudo/PROMPT - Criar questoes CPRO R.md`** é o briefing pronto para começar as questões da C-Pro R, que hoje tem zero. Autossuficiente, para colar numa conversa nova junto com o texto do tópico.

**`_docs/AGENTES-CONTEUDO/BLOCO - Questoes junto do conteudo (colar na BASE).md`** resolve o pedido do dono de que incluir exercício deixe de ser um trabalho à parte. É um bloco para colar no fim da BASE de qualquer lote novo: a partir dele, cada tópico entregue traz a aula e, na mesma resposta, o arquivo YAML de questões daquele tópico.

#### O que mudou em relação ao que fazíamos

**Questão negativa sai.** O prompt da CPA permitia uma por tópico, uma a cada três tópicos. A ANBIMA proíbe: nada de "não", "exceto", "assinale a incorreta", nem dupla negativa. Vale para tudo que for escrito daqui em diante. As questões da CPA que já estão no ar seguem a regra antiga e não precisam ser refeitas com urgência, mas quando o P5 for encarado, que é o retrabalho das 215 questões de Produtos, essa é a hora de limpar as negativas.

**Comparativo e superlativo saem** do comando e das alternativas: "o melhor", "o maior", "o menos". Onde escrevíamos "qual a conduta mais adequada", o comando passa a ser "a decisão correta é" ou "o fator essencial que ele precisa considerar é que".

**O contexto vira cena de trabalho por padrão.** Definição pura continua existindo na questão de nível 1, porque ensina, mas deixa de ser o normal. A prova nova cobra a pessoa aplicando o conhecimento no atendimento.

**A distratora ganhou teto, além do piso.** Já valia que ela fosse plausível; agora também não pode diferir do gabarito por um detalhe mínimo, porque aí mede atenção e não conhecimento.

#### O campo novo: domínio cognitivo

Cada questão da prova nova nasce classificada em macrotema, tema, subtema, habilidade técnica, habilidade comportamental, domínio cognitivo e o mapeamento de cada distratora pelo que a pessoa não demonstrou.

O que interessa ao nosso produto é o **domínio cognitivo**: conhecer, compreender, aplicar, analisar. Os dois prompts novos já mandam gravar um campo `dominio` no YAML. Hoje a Bússola diz ao aluno em qual tópico ele erra; com esse campo ela passa a poder dizer "você conhece o conteúdo e erra quando precisa aplicar", que é exatamente o que a prova nova cobra.

**Pendência técnica, e é preciso conferir antes de confiar:** o conversor de questões precisa aceitar a chave `dominio` sem quebrar, e o relatório de desempenho precisa passar a lê-la. Enquanto isso não for verificado, a chave é inofensiva se o parser ignorar chave desconhecida, e fatal se ele for estrito. Quem for mexer nisso, teste com um arquivo antes de mandar um lote inteiro.

Dois detalhes do guia que valem registro porque não são óbvios. A habilidade comportamental **não é critério de avaliação** e não se define antes: escreve-se a questão e depois se identifica qual comportamento apareceu e em que grau. E as distratoras são **escalonadas por profundidade de erro**: a primeira é de quem não soube aplicar, a segunda de quem não soube compreender, a terceira de quem não soube nem conhecer.

#### Formatos que a prova tem e nós não

O guia descreve quatro formatos: múltipla escolha contextualizada, case com até três questões penduradas no mesmo contexto, discursiva de resposta curta sempre ligada a um case, e interativa, que é a conversa com o cliente.

A interativa já estava desenhada no nosso `_MODELO-questoes.yaml` como `tipo: caso`, a partir do caderno antigo da ANBIMA, e o desenho bateu: o guia classifica as respostas em melhor escolha, boa escolha, escolha razoável e escolha abaixo do ideal, que é a nossa escala de peso 3, 2, 1 e 0. Falta só implementar no app, que hoje não serve esse tipo.

Case e discursiva ficam em aberto. Nenhuma é urgente: a múltipla escolha continua sendo a maior parte da prova, e discursiva não cabe num app que corrige sozinho.

#### Direitos

O material é da ANBIMA e a Bússola é vendida. As questões de exemplo do guia não entram no produto, nem adaptadas de leve. Usamos as regras e o formato, e escrevemos questão autoral a partir do nosso texto. O campo `fonte` do YAML existe para isso.

### Primeiro teste do fluxo novo: conteúdo e questões na mesma resposta (13/09/2026)

O dono rodou o teste com o `cpror-inv-46`, previdência corporativa. Funcionou: voltaram a aula e, na mesma resposta, o YAML com **9 questões**. Conferido aqui com o conversor oficial: 9 questões, 1 tópico, **zero aviso e zero erro**.

A auditoria do arquivo também passou: ids em ordem e sem repetição, gabaritos distribuídos entre as quatro letras, níveis em 1, 2 e 3, o campo `dominio` preenchido nas nove, zero enunciado negativo, zero termo absoluto, zero superlativo e zero travessão.

Um ponto a melhorar na próxima rodada: o enunciado saiu com cerca de 270 caracteres sem espaço, contra os 800 que a ANBIMA usa na múltipla escolha contextualizada. Ou seja, o agente cumpriu as proibições mas ainda escreve pergunta curta de definição, em vez da cena de trabalho. Se isso se repetir, vale reforçar no pedido que a questão começa por uma situação com cliente, valor e prazo.

#### A dependência que faltou: PyYAML

O `outputs/questoes_para_js.py` importa `yaml`, que não vem com o Python. O `outputs/conteudo_para_js.py` não precisa, e é por isso que a etapa do conteúdo passou e a das questões parou. Resolve com uma linha:

```
python3 -m pip install pyyaml
```

No Windows, se `python3` não for reconhecido, use `py -m pip install pyyaml`. É instalação única na máquina.

Enquanto isso não estiver feito, existe um plano B que não depende de nada: mandar o YAML para a conversa da Bússola, que converte no ambiente dela e devolve o `.js` pronto. Foi o que se fez aqui, e o arquivo saiu **idêntico byte a byte** ao que a máquina do dono já tinha gerado.

#### O que realmente estava faltando, e não era o PyYAML

O `app/index.html` **não carregava o `questoes-cpror.js`**. Ele tinha a linha do `questoes-cpa.js` e nunca ganhou a da C-Pro R, porque até hoje essa certificação não tinha banco. Sem essa linha, o arquivo existe no repositório, é publicado, e o aplicativo nunca enxerga uma questão sequer.

A linha entrou logo depois da CPA:

```
<script src="conteudo/questoes-cpror.js?v=20260913-inv46"></script>
```

Fica o alerta para a próxima certificação que ganhar banco, que hoje seria a ASSBAN: gerar o `questoes-<cert>.js` não basta, é preciso acrescentar a linha no `app/index.html`. Vale a mesma regra para qualquer bundle novo de conteúdo.

O `?v=` do `conteudo-cpror.js` foi de `20260912-inv45` para `20260913-inv46`, porque o bundle mudou com a aula nova, e o cache do service worker foi para `bussola-v65`.

### Encerramento de Indicação de investimentos na C-Pro R (13/09/2026)

A matéria **Indicação de investimentos** foi concluída: 50 de 50 tópicos publicados localmente. A C-Pro R possui agora 100 de 125 conteúdos, restando os 25 tópicos de **Análise de portfólio e monitoramento da carteira**.

O último tópico ausente era o `cpror-inv-40`, **VGBL: acumulação, aposentadoria e planejamento patrimonial**. Foram criados a aula em `_conteudo/cpror/indicacao-de-investimentos/cpror-inv-40.md`, a ficha em `_docs/CPRO-R/fontes-normativas/cpror-inv-40.md` e nove questões em `_conteudo/cpror/questoes/indicacao-de-investimentos/cpror-inv-40.yaml`. A validação normativa cobriu base tributável do VGBL, ausência de come-cotas, portabilidade entre produtos da mesma espécie e o Tema 1.214 do STF sobre ITCMD, preservando o alerta contra planejamento abusivo.

O banco da C-Pro R soma 54 questões em seis tópicos: `cpror-inv-40` e `cpror-inv-46` a `cpror-inv-50`. O catálogo `_docs/CPRO-R/topicos.json` marca o `cpror-inv-40` como `publicado localmente`.

Arquivos ativos do aplicativo:

1. `app/conteudo/conteudo-cpror.js`, 941.235 bytes.
2. `app/conteudo/questoes-cpror.js`, 94.011 bytes.
3. `app/index.html`, 52.825 bytes, com `?v=20260913-inv40` nos dois pacotes e os 470 bytes nulos preexistentes preservados.
4. `app/sw.js`, 2.469 bytes, cache `bussola-v70`.

Validações concluídas com zero falha: conversores oficiais com 100 conteúdos e 54 questões, planejamento com 125 tópicos e 278 itens terminais, sete testes Python, 171 testes Node, sintaxe dos 24 arquivos JavaScript e carregamento dos pacotes em VM. Não foi criada pasta de publicação.

### Análise do Edital da C-Pro R publicada (13/09/2026)

O dono enviou o edital da C-Pro R, versão 1.4 de 28/05/2026, e pediu a mesma análise que existe para a CPA. Saiu em `_docs/ANALISE DO EDITAL - CPRO R Anbima.md` e `.pdf`, e o PDF também entrou no aplicativo como `app/edital-cpror.pdf`.

**Ligação no app.** Não bastava colocar o arquivo na pasta. O menu Análise do Edital resolve a certificação pelo mapa `EDITAL_ANALISES_POR_CHAVE`, no `app/js/ui.js`, e a C-Pro R não estava lá: a tela mostrava o aviso de que a análise ainda não tinha saído. Entrou a linha `"cproRAnbima":{ url:"edital-cpror.pdf", ... }`. Quem for publicar a análise da ASSBAN, da CA-600 ou da FBB100 precisa fazer as duas coisas: o PDF em `app/` e a linha no mapa.

**Números da prova**, que são diferentes dos da CPA e valem ter à mão: 45 questões, 2h30, mínimo de 32 acertos, taxa de R$ 500, CPA como pré-requisito, 180 dias para fazer a prova depois de confirmar a inscrição. Pesos das matérias: 20, 20, 40 e 20, o que dá 9, 9, 18 e 9 questões. O acervo tem 125 tópicos, 16% maior que o da CPA.

**Uma descoberta do edital 1.4 que muda a estratégia de prova, e que vale para a CPA também.** O item 13.12 diz que toda questão já visualizada fica bloqueada para edição, resposta ou revisão, inclusive na tela de revisão do fim da prova. Ou seja, **não existe segunda passada**. A análise da CPA que está publicada tem uma seção "O relógio da prova" que ensina exatamente o contrário, mandando marcar para revisar depois e voltar nas marcadas. Aquela seção foi escrita a partir de uma versão anterior do edital e **precisa ser corrigida**. Fica registrado aqui como pendência, porque é orientação errada dada ao aluno.

Outros pontos operacionais que entraram na análise nova e também valem para a CPA: a prova é eletrônica, com calculadora, planilha e bloco de notas no sistema; calculadora própria é proibida; não há papel, caneta nem lápis; a saída para o banheiro só é permitida se todas as questões visualizadas estiverem respondidas; e bermuda, shorts, saia curta e chinelo podem barrar a entrada.

**O PDF.** Capa com a marca, cabeçalho em todas as páginas com o endereço do site, rodapé com o endereço e a numeração. Gerado por Chromium a partir de um HTML com o mesmo desenho do PDF da CPA, o que mantém as duas análises com a mesma cara.

**Um efeito colateral pego no caminho.** O `app/index.html` estava com `?v=20260912-abrir` no `app.css` e no `ui.js`, ou seja, os marcadores de anteontem. É o comportamento já conhecido do agente de conteúdo, que regera o index.html a cada lote e devolve os marcadores para trás. Os dois foram para `?v=20260913-edital`. Vale conferir isso sempre depois de um lote de conteúdo: se o marcador andou para trás, quem já tem o CSS ou o ui.js antigo em cache não recebe a versão nova.

### O cronograma passa a distribuir na ordem de estudo do edital (14/09/2026)

Pedido do dono, e com razão: as duas Análises do Edital publicam uma ordem de estudo pensada para reduzir retrabalho, e o cronograma distribuía os tópicos numa ordem completamente diferente. As duas coisas se contradiziam dentro do mesmo produto.

**Como era.** `getTopicosDiaBase` montava uma lista corrida com as matérias da mais pesada para a mais leve e, dentro de cada uma, a ordem do edital. Na CPA isso fazia o aluno ver os 43 tópicos de Produtos antes de saber quem regula o mercado, que é a matéria 1 e pré-requisito silencioso de metade da prova.

**Como ficou.** Entrou em `engine.js` o mapa `ORDEM_RECOMENDADA`, com uma receita por certificação. Cada receita é uma lista de fatias na forma `{ m: matéria, de: primeiro tópico, ate: último }`, numeração de 1 e limites inclusivos, na ordem do `editais.js`. As receitas da CPA e da C-Pro R reproduzem exatamente a seção "Uma ordem de estudo que funciona" de cada análise.

Toda a leitura da lista passou por uma função única, `getSequenciaTopicos`, usada por `getTopicosDiaBase`, `calcCoberturaEdital`, `calcExpectedPerSubject` e `getTopicoDia`. Antes eram quatro trechos iguais copiados, e era só questão de tempo até um deles divergir e a cobertura calcular uma ordem enquanto o cronograma distribuía outra.

**Três proteções, e elas importam mais que a receita.**

1. Tópico que a receita não citar entra no fim, na ordem antiga. Se o edital ganhar tópico novo, ninguém fica sem ele.
2. Se a conta não fechar, a função devolve a ordem antiga inteira. Receita errada não derruba plano.
3. A ordem nova só vale para plano criado ou reconfigurado a partir de agora, marcado por `STATE.ordemPlano="recomendada"` em `iniciarBússola`. Plano em andamento continua na ordem antiga **de propósito**: o vínculo entre dia e tópico é posicional, então trocar a ordem no meio do caminho faria o dia 12 já estudado passar a exibir outro assunto, com a nota do aluno mudando de dono.

**Congelamento do histórico.** Aproveitando a viagem, resolvemos um problema que já existia e ninguém tinha visto: como o vínculo é posicional, qualquer mudança na lista de tópicos do `editais.js`, e elas acontecem toda semana enquanto o conteúdo está em produção, remapeava os dias já estudados. Agora o primeiro registro do dia grava `topicosFix` em `STATE.dias[key]`, e `getTopicosDiaBase` devolve essa lista congelada antes de qualquer outro cálculo. A gravação acontece em `toggleCheck`, `setStar`, `gravarNotaTopico`, `toggleCheckHoje` e `setStarHoje`, e há uma passagem única no `DOMContentLoaded` que congela o histórico de quem já estava estudando, marcada por `STATE.topicosCongelados`.

**Testes.** Arquivo novo, `app/tests/ordem-estudo.test.js`, com oito casos: a ordem antiga continua valendo sem a marca, a nova segue a receita, o conjunto de tópicos é idêntico nos dois casos e sem repetição, tópico fora da receita entra no fim, receita quebrada cai na ordem antiga, o cronograma distribui na ordem certa, o dia registrado não troca de tópico quando o edital muda, e a receita da C-Pro R cobre os 125 tópicos do `editais.js` real. Suíte completa: 175 aprovados.

**As duas análises foram corrigidas junto**, porque a frase "o cronograma distribui as matérias em paralelo pelo peso do edital" deixou de ser verdade. Agora as duas dizem que o cronograma segue aquela ordem. Na da C-Pro R, o passo 2 passou a nomear a alocação, que é o que a receita faz.

**E a análise da CPA recebeu a correção que estava pendente desde ontem**, sobre a regra do edital 1.4 de que não existe segunda passada. A seção "O relógio da prova" ensinava a marcar questão para revisar depois, o que a prova não permite. Foram reescritas a seção 7 inteira, o formato 5 de questão, que era a negativa e a banca aposentou, e dois itens do checklist da última semana.

Os dois PDFs foram regerados pelo mesmo pipeline, com capa e o endereço do site no cabeçalho e no rodapé de todas as páginas, e substituem também os arquivos que o aplicativo serve em `app/edital-cpa.pdf` e `app/edital-cpror.pdf`.

`app/js/engine.js` foi para 71.478 bytes e `app/js/ui.js` para 319.458. `?v=20260914-ordem` nos dois, cache `bussola-v75`.

### O catálogo encolhe para o que está em produção (14/09/2026)

**O pedido.** "Podemos remover as seguintes certificações do site. CFP, fbb100, ca600. Já a certificação de lavagem de dinheiro, crie uma nova configuração, para que ela fique no campo Mini certificações. No campo de configurações, o usuário define em certificações ou mini certificações. Assim o ambiente fica mais limpo e limitado ao que iremos implementando."

**Por que isso importa mais do que parece.** O aplicativo nasceu com seis cursos no `editais.js`, e três deles nunca tiveram conteúdo escrito: CFP da PLANEJAR, FBB100 da FEBRABAN e CA-600 da ABECIP. O aluno que escolhia um deles montava um cronograma legítimo, com tópicos e datas, e só descobria o vazio no primeiro dia de estudo, quando clicava em Ler conteúdo e não havia nada. Isso é pior do que não oferecer. O dono decidiu que o catálogo só exibe o que a Bússola entrega hoje, e essa passa a ser a regra: **curso sem conteúdo não entra no `editais.js` nem no `dados-site.js`**, entra quando o bundle estiver pronto.

**O que ficou.** Duas certificações e uma mini certificação:

| chave | nome | grupo |
| --- | --- | --- |
| `cpaAnbima` | CPA Anbima | Certificações |
| `cproRAnbima` | C-Pro R Anbima | Certificações |
| `pldftLgpdAssban` | PLDFT + LGPD (ASSBAN) | Mini certificações |

**A separação em dois grupos não exigiu código novo, e vale entender por quê.** A tela de configuração já era genérica desde os concursos: `getGrupos()` agrupa os editais pelo campo `ed.grupo` (com `ed.estado` e depois "Outros" como reserva), `renderPrefButtons()` desenha um botão por grupo encontrado, e `selecionarGrupo(grupo)` preenche o `#inputCargo` com os cursos daquele grupo. Trocar `"Certificações"` por `"Mini certificações"` no `pldftLgpdAssban` foi suficiente para nascer o segundo botão. **Quem for criar um grupo novo no futuro faz exatamente isso e nada mais**: muda o `grupo` no `editais.js`. Não invente uma lista de grupos em código, ela não existe e não deve existir.

A ordem dos botões é a ordem de inserção das chaves no `editais.js`, então Certificações aparece primeiro porque `cpaAnbima` é a primeira chave. Se um dia a ordem precisar ser outra, é o arquivo de dados que se reordena.

**Por que a ASSBAN virou mini certificação e não some junto.** Ela tem conteúdo real, 26 das 36 aulas escritas, e é um produto de outra natureza: dura semanas, não meses, e é vendida para bancários que precisam do certificado de PLD/FT e LGPD, não para quem está montando carreira no mercado financeiro. Misturada com CPA e C-Pro R ela confundia as duas pontas. Separada, cada grupo diz ao aluno em uma palavra o tamanho do compromisso. No `dados-site.js` ela já carregava `"tipo": "microcertificacao"`, que o site usa para diferenciar o cartão; agora o aplicativo tem o equivalente.

**Onde mexeu.**

`app/editais.js` foi de 37.645 para 23.385 bytes: saíram os três cursos inteiros e o `pldftLgpdAssban` ganhou `"grupo": "Mini certificações"`. O arquivo continua CRLF puro, como todo o repositório fora do `app/index.html`.

`dados-site.js` foi de 41.993 para 24.213 bytes: o `window.CERTIFICACOES_DATA` perdeu os itens `cfp`, `ca600` e `fbb100` e ficou com `cpa`, `pldftLgpdAssban` e `cpror`. Nada mais precisou ser tocado na home: a seção de certificações, o menu suspenso do cabeçalho e a vitrine leem todos esse mesmo array, então os três sumiram dos três lugares de uma vez. É o motivo de o arquivo existir e a razão para nunca escrever nome de curso direto no `index.html`.

`app/js/ui.js` foi de 319.458 para 319.296 bytes: o `EDITAL_ANALISES_POR_CHAVE` perdeu a linha do `cfpPlanejar`, que apontava para um `edital-cfp.pdf` que deixaria de ter dono, e o valor inicial de `_prefSelecionada` passou de `"cfpPlanejar"` para `"cpaAnbima"`. Essa segunda linha era uma bomba-relógio: era a única referência a uma chave de edital escrita em código no aplicativo inteiro, e teria quebrado a primeira abertura da tela de configuração.

**A busca que a próxima IA deve repetir antes de remover qualquer curso.** `grep -rn "<chave>" app/ *.js *.html`. No `app/index.html` procure também as tags `<script>` do `conteudo/` e do `questoes/`, porque curso removido com bundle ainda carregado é 404 no console e entrada inútil no cache do service worker. Nesta remoção não havia nenhuma: os três nunca tiveram bundle. As ocorrências restantes de `cfpPlanejar` no repositório estão em `app/tests/state.test.js` e `app/tests/engine.test.js`, e são **dados de teste inventados, não referências ao catálogo**. Ficam onde estão de propósito: os testes de migração de estado e de aulas de cursinho precisam de uma chave qualquer, e usar uma chave que não existe mais no `editais.js` até deixa mais honesto o que eles medem, que é o comportamento do código e não o conteúdo do catálogo.

**Validação.** Os 179 testes passam, incluindo os 4 de `cpror-catalog.test.js`, que nesta rodada finalmente rodaram na cópia de trabalho porque o `dados-site.js`, o `_docs/CPRO-R/topicos.json` e o `app/conteudo/conteudo-cpror.js` foram trazidos para ela. Vale registrar: **esse teste compara o mapa editorial da C-Pro R entre o `app/editais.js`, o `dados-site.js` e o bundle**, então ele é exatamente a rede que pega um corte de catálogo feito pela metade. Quem for mexer no `dados-site.js` roda esse arquivo.

No Chromium, `app/index.html` abriu sem erro de página e a tela de configuração mostrou os dois botões na ordem `["Certificações", "Mini certificações"]`; clicando no primeiro o `#inputCargo` trouxe CPA e C-Pro R, clicando no segundo trouxe só a ASSBAN. A home foi conferida a 1440, 1280 e 390 pixels, com `scrollWidth` igual ao `clientWidth` nas três e com três cartões na seção e três itens no menu do cabeçalho.

`?v=20260914-limpa` no `editais.js` e no `ui.js` do `app/index.html`, cache `bussola-v76`. O `engine.js` não mudou e continua em `?v=20260914-ordem`.

### O preço sai do rodapé e vai para o cabeçalho (15/09/2026)

**O pedido.** "Só ajuste o preço do site de 299,00 por 29,90. O preço está bem escondido. Talvez seja bom deixar essa informação no botão do cabeçalho."

**O diagnóstico estava certo.** O valor aparecia em dois lugares, os dois ruins. No hero era uma linha cinza de 12 pixels embaixo do botão, que o olho pula. Depois sumia por quatro seções inteiras e só voltava no cartão da oferta, que fica a uma rolagem inteira de distância. Quem entrava pelo link do WhatsApp e passava trinta segundos na página saía sem saber quanto custava.

**Agora o preço aparece em três alturas.** No botão do cabeçalho, que é o que muda o jogo, porque a barra é fixa e o valor acompanha o aluno a página inteira. Na linha do hero, agora com o número em corpo grande. E no cartão da oferta, como antes.

**Os dois preços.** O valor cheio virou `PRICE_DE` e o valor de hoje virou `PRICE`, os dois no topo do `js/ui.js`. O HTML marca os pontos com `[data-price]` e `[data-price-de]` e o JavaScript preenche, do mesmo jeito que já fazia com um preço só. **Trocar de promoção é mexer em uma linha.** Não escreva valor direto no `index.html`: hoje são seis pontos com o preço e três com o valor cheio, e um deles esquecido é uma página que se contradiz.

**O botão do cabeçalho tem duas formas, e o motivo é largura.** Na tela grande ele diz "Comece por R$ 29,90" em uma linha. No celular vira duas linhas curtas, "Começar" em cima e "R$ 29,90" embaixo, nas classes `.rot-acao` e `.rot-preco` dentro do `.rot-curto` que já existia. Escrito lado a lado no celular ele empurraria o "Já sou aluno" para fora e a barra quebraria em duas linhas. O `aria-label` do link diz a frase inteira, então quem usa leitor de tela ouve "Comece agora por R$ 29,90" nos dois tamanhos.

**Um bug antigo apareceu na medição e foi corrigido junto.** Abaixo de 380 pixels a barra do cabeçalho já quebrava em duas linhas, desde antes desta mudança, por falta de uns 14 pixels. O rotulo do aluno agora encurta para "Entrar" abaixo de 385 pixels, pelo par `.login-longo` e `.login-curto`. Para isso a regra `.login span{display:none}`, que existia em dois blocos de media query e escondia a seta, virou `.login span[aria-hidden]{display:none}`: como está, ela esconderia também os dois rótulos novos. **Quem mexer no botão do aluno precisa saber disso.** Medido de 360 a 430 pixels, a barra fica em 62 pixels de altura em toda a faixa. Em 320 pixels ainda quebra, como antes, e ficou assim de propósito.

**O que não foi tocado.** O link da Hotmart continua o mesmo e continua cobrando 29,90, então site e checkout agora dizem o mesmo número, que é a razão de ser desta mudança. Fica registrado que a sobreposição dos selos da trilha com os três benefícios do hero na tela de computador **já existia antes** e não veio daqui: o bloco de preço desceu três pixels, e a colisão medida é a mesma.

**Validação.** Renderizado em 1440, 1280, 768, 390 e 360, sem rolagem lateral e sem erro de console, com os seis pontos de preço trazendo R$ 29,90 e os três de valor cheio trazendo R$ 299,90. `?v=20260915-preco` no `css/home.css`, no `js/ui.js` e no `dados-site.js` da home.

### A primeira tela passa a dizer o que a Bússola é (15/09/2026)

**O diagnóstico do dono, que estava certo.** "O visual está muito bom e eu não mudaria a estrutura da página. O problema está mais na mensagem: hoje ela comunica estudo, certificação e evolução, mas não deixa explícito, nos primeiros segundos, que a Bússola é uma plataforma de preparação para certificações do mercado financeiro, com plano de estudo, conteúdo e questões. A maior mudança deveria ser no texto, não no design."

**Registrado porque vale para tudo que vier depois:** a página inteira falava do benefício e nunca da categoria. Quem já sabia o que era entendia; quem chegou pelo link do WhatsApp lia três frases bonitas sem descobrir o que estava sendo vendido. Nenhuma estrutura mudou aqui. O que entrou de novo foi uma fila de chips, e mesmo ela é informação que já existia escondida atrás de um menu.

**O texto, ponto a ponto.**

| onde | antes | agora |
| --- | --- | --- |
| chapéu | PARA SUA CERTIFICAÇÃO FINANCEIRA | PREPARAÇÃO PARA CERTIFICAÇÕES DO MERCADO FINANCEIRO |
| título | Seu próximo passo rumo à certificação. Todos os dias. | Sua certificação começa com um plano claro. |
| apoio | Saiba o que estudar, pratique por tópico e acompanhe sua evolução... | Saiba exatamente o que estudar todos os dias. Conteúdo organizado por tópicos, questões para praticar e acompanhamento da sua evolução até a prova. |
| botão do cabeçalho | Comece por R$ 29,90 | Começar preparação · R$ 29,90 |
| botão secundário | Conhecer a ferramenta ↓ | Ver como funciona ↓ |
| selo do painel | DEMONSTRAÇÃO | VEJA COMO VOCÊ VAI ESTUDAR |
| abas do painel | 01 Hoje / 03 Resultado | 01 Plano de hoje / 03 Evolução |
| benefícios | três | quatro, com Revisões programadas |

O critério do título, nas palavras dele: "é curto, combina com a ideia da bússola e permite que o subtítulo explique todo o produto sem poluir o visual". O do botão: "Comece sozinho ainda não diz exatamente o que a pessoa está comprando".

**Os chips das certificações.** Entre o texto de apoio e o botão entrou uma fila de chips com as certificações disponíveis e um link "Ver todas as certificações". Era informação que só existia dentro do menu suspenso do cabeçalho, e ela decide a visita: quem procura C-Pro R precisa ver "C-Pro R" antes de decidir rolar. **Os chips saem do `dados-site.js`**, o mesmo arquivo que alimenta a seção, o menu do cabeçalho e a faixa de programas, então nunca listam curso que não existe. Cada chip leva à seção e já deixa aquela certificação aberta lá embaixo, pelo `data-action="cert"` que o menu do cabeçalho já usava.

**A ordem do `dados-site.js` virou ordem editorial.** O dono pediu CPA, depois C-Pro R, depois as demais. Como quatro lugares da home leem esse array na ordem em que ele está, **reordenar o arquivo reordena a página inteira de uma vez**: chips, faixa de programas, menu do cabeçalho e a lista lateral da seção. Não escreva ordem em código. O `app/editais.js` é independente e já estava certo, porque dentro do grupo Certificações as chaves entram como `cpaAnbima` e depois `cproRAnbima`.

**O painel de exemplo.** Ele agora mostra o produto em vez de anunciar que é uma demonstração: três linhas do plano, cada uma marcada como "CPA · Sistema Financeiro Nacional", a primeira já cumprida com a marca verde, e as duas ações embaixo. O `read` continua sendo o mesmo estado de antes, só que agora ele acende a segunda linha em vez de trocar o texto de um botão solto. O rodapé passou a dizer que o plano será personalizado, que é a dúvida real de quem olha um exemplo.

**Os selos PLANEJAMENTO, DISCIPLINA e EVOLUÇÃO saíram.** Eles ficam em `z-index` acima do conteúdo e pousavam exatamente na faixa dos benefícios do hero. Medido de 1100 a 1920 pixels, **havia sobreposição em todas as larguras**, e com o quarto benefício ficou impossível de ignorar. O rascunho do dono também mostra só o selo de APROVAÇÃO, que fica no alto e não esbarra em nada. O HTML continua no lugar: devolver os três é apagar a linha `.marco-1,.marco-2,.marco-3{display:none}` e escolher outra posição na trilha.

**O celular precisou de três pixels.** Com o quarto benefício a fila passou a cair uma por linha e empurrava a demonstração para fora da primeira rolagem, que foi o pedido dele em 13/09. Os benefícios viraram grade de duas colunas com corpo e respiros menores, e o chapéu, os chips e o botão perderam alguns pixels de margem. Em 390 por 844 o painel volta a aparecer na primeira dobra. Em 360 por 780 ele fica a um dedo de rolagem, e isso está medido, não suposto.

**O que não foi feito, de propósito.** O rascunho tem uma quarta aba, "04 Simulado", e ela não entrou: seria uma tela nova de demonstração, com conteúdo próprio, e o pedido escrito foi de texto. Fica anotado como próximo passo, se ele quiser.

**Validação.** Renderizado em 1440, 1280, 1100, 820, 768, 430, 390 e 360, sem rolagem lateral e sem erro de console. Testado no navegador: os chips levam à certificação certa, as três abas trocam de painel, o botão de leitura acende a segunda linha do plano, e o menu do cabeçalho lista CPA, C-Pro R e PLDFT + LGPD nessa ordem. Os 179 testes do aplicativo continuam passando, incluindo os 4 de `cpror-catalog.test.js`, que é o que garante que reordenar o `dados-site.js` não desalinhou o mapa editorial da C-Pro R. `?v=20260915-mensagem` no `css/home.css`, no `js/ui.js` e no `dados-site.js`.

### O linter de questões entra antes do conversor (16/09/2026)

**Por quê.** As questões passam a ser escritas em volume pelo ChatGPT, e ninguém vai reler 940 delas. Foi assim que 222 defeitos entraram na CPA sem nenhum alarme. O `outputs/lint_questoes.py` fecha esse buraco: ele confere as regras editoriais do guia da ANBIMA em cada lote, antes que o arquivo entre no repositório.

**Ele não repete o conversor, de propósito.** O `questoes_para_js.py` já cuida da estrutura: id duplicado, tipo válido, matéria e tópico órfãos, alternativas, gabarito existente, travessão. O linter cuida do que o conversor não tem como saber: comando negativo, termo absoluto, comparativo, tamanho da cena, equilíbrio do gabarito, mistura de níveis e repetição de abertura. **Rodar os dois é o fluxo completo**, e quem for mexer em um precisa saber que o outro existe, para não duplicar regra em dois lugares.

**Duas severidades, e a diferença foi decisão do dono.** "Não tem problema termos outros tipos de questões em nosso banco. Com o tempo vamos aumentando o banco e o objetivo é estar sempre abastecendo." Então:

- **ERRO** é regra do guia da ANBIMA. Bloqueia e o script sai com código 1.
- **AVISO** é alvo editorial nosso. Nunca bloqueia.

O banco vai conviver para sempre com questão curta antiga, com formato novo e com tipo diferente. **Um linter que reprova variedade legítima vira um linter que ninguém roda**, e aí não serve para nada. Por isso tamanho, mistura de níveis, piso de 5 por tópico e repetição de abertura são avisos, não erros.

**A precisão importou mais do que a rigidez.** A primeira versão marcava qualquer "não" no enunciado, o que dá falso positivo em contexto legítimo, do tipo "o cliente não contribui para o RGPS". A versão final separa: o enunciado é partido em frases, a última é tratada como o comando, e a negação é erro **no comando** e aviso no contexto. Mesma lógica para absolutos, que são erro nas alternativas, onde entregam a resposta, e aviso no contexto. Falso positivo é o que faz o autor parar de confiar na ferramenta.

**Modos de uso.**

```
python outputs/lint_questoes.py                    # todo o YAML de _conteudo
python outputs/lint_questoes.py cpror              # uma certificacao
python outputs/lint_questoes.py _conteudo/cpror/questoes/indicacao-de-investimentos
python outputs/lint_questoes.py app/conteudo/questoes-cpa.js   # audita o publicado
python outputs/lint_questoes.py cpror --estrito    # dominio ausente vira erro
python outputs/lint_questoes.py cpror --resumo     # so o quadro
```

**Sobre o PyYAML, que já travou um lote antes.** O modo `.js` **não depende de nada**: mesmo sem o pacote instalado, dá para auditar tudo que já está publicado. A dependência existe só no modo YAML, e a mensagem de falta já traz o comando das duas plataformas. Não escrevi parser caseiro de YAML pelo mesmo motivo que o conversor não tem: é fonte garantida de bug silencioso, e linter que erra em silêncio é pior do que linter nenhum.

O `--estrito` existe porque os YAML antigos foram escritos antes do campo `dominio`. Sem a marca, domínio ausente é aviso, e o tree inteiro roda limpo. Com a marca, é erro, e é assim que os lotes novos devem ser conferidos.

**O que ele encontrou ao ser rodado no que já existe.**

| banco | questões | ERRO | AVISO |
| --- | --- | --- | --- |
| C-Pro R | 248 | **2** | 452 |
| CPA | 625 | **222** | 1.743 |

Os 222 da CPA são o P5, agora com nome e endereço: 176 termos absolutos em alternativa, 18 comparativos, 13 comentários fora da fórmula, 12 comandos negativos e 3 com "não" no comando.

Os 2 da C-Pro R são reais e pequenos, os dois com a palavra "integralmente" em alternativa: `cpror-car-10-q7`, no tópico de CPPI, e `cpror-inv-50-q8`, no de acesso a criptoativos. Vale corrigir no YAML e reconverter.

Os avisos da C-Pro R confirmam o diagnóstico que motivou os exemplares: 173 cenas curtas, 165 comandos sem verbo claro no fim e 79 conjuntos de alternativas curtos. Média de 193 caracteres sem espaço em contexto e comando, contra os cerca de 800 do guia.

**Validação.** Rodado nos dois bundles publicados e num arquivo sintético com um defeito de cada tipo, que disparou os 8 erros esperados. As 8 questões de `_conteudo/EXEMPLARES - Questoes C-Pro R no padrao novo.md`, convertidas em YAML, passam com **zero erro**, mistura de níveis em 25, 50 e 25 e gabarito em 25% para cada letra, que é o comportamento de referência para os lotes novos.

### O conteúdo da C-Pro R fechou e as questões ganharam fluxo próprio (16/09/2026)

**A notícia primeiro: os 125 tópicos da C-Pro R têm conteúdo.** As pastas `pedidos-lote-3` e `pedidos-lote-4` estão encerradas por decisão do dono, e nenhuma aula da certificação continua pendente. A ASSBAN ficou de fora desta conversa por decisão dele: o portão de venda que ele definiu vale para a C-Pro R.

Conferido no bundle publicado, e não na lembrança de ninguém:

| | tópicos |
| --- | --- |
| com conteúdo | 125 de 125 |
| com questões | 31 |
| **sem questões** | **94** |
| questões existentes | 300 |

**A virada que exigiu um fluxo novo.** O BLOCO de 13/09 fazia a aula e as questões saírem na mesma resposta, e o argumento era bom: o agente acabara de escrever o texto, então a regra de ouro se cumpria sozinha. **Esse fluxo deixou de existir**, porque não há mais aula a escrever. Para os 94 tópicos restantes a aula é a entrada, não a saída, e o pedido precisa carregá-la.

Quem for retomar isso precisa entender a diferença: os pedidos antigos mandavam escrever a aula; os novos mandam ler a aula que já está publicada e devolver só o YAML.

**A pasta nova: `_docs/AGENTES-CONTEUDO/pedidos-questoes/`.** Uma BASE, um passo a passo e 94 pedidos em 12 blocos de oito, na **ordem da análise do edital**, a mesma que o cronograma usa. O bloco 01 é onde o aluno começa a estudar.

**Cada pedido é autossuficiente.** Ele traz o id, a matéria e o tópico a copiar no cabeçalho, a posição na ordem de estudo, o caminho do arquivo a devolver e a aula inteira convertida de volta do HTML para markdown legível: frase-chave, o que cai na prova, o corpo com tabelas e fórmulas, as pegadinhas e o cartão. **Não é preciso caçar arquivo nenhum**, e isso importa porque foi caçar arquivo que gerou os erros de cobertura nos lotes de questões separados.

**Por que oito por conversa, registrado para não se repetir a pergunta.** Tudo de uma vez é impossível por três razões independentes. A aula precisa estar no contexto, e são mais de 1 MB de aula. A saída de 94 tópicos a 8 questões com cena de 800 caracteres passa de um milhão de caracteres. E há a deriva: quanto mais longe dos exemplares, mais o agente regride ao padrão curto e impessoal dos lotes antigos. Oito é o tamanho que já funcionou nos lotes de conteúdo desta mesma certificação, e é o tamanho em que um lote reprovado custa uma conversa, não uma semana.

**A BASE embute os 8 exemplares.** É a decisão central da estratégia e vale repetir: **o agente copia exemplo com muito mais fidelidade do que obedece regra escrita**. Anexar o banco antigo como referência produziria mais 900 questões de 182 caracteres. Por isso a BASE carrega apenas as 8 questões reescritas no padrão de 800, e nenhuma questão antiga.

A BASE também resolve dois tropeços conhecidos: manda pôr `materia`, `topico` e as alternativas entre aspas, porque quase sempre têm dois pontos no meio e sem aspas o YAML não abre, e pede o campo `dominio` desde a primeira questão, para não haver 900 questões a reclassificar depois.

**O fluxo completo, na ordem:** BASE na conversa, um pedido por mensagem, salvar o YAML, rodar `python3 outputs/lint_questoes.py cpror --estrito` no bloco, corrigir os ERRO, e converter com `questoes_para_js.py cpror`. O linter existe justamente para que ninguém precise reler 750 questões.

**Onde este trabalho termina.** Quando os 12 blocos fecharem, os 125 tópicos da C-Pro R terão conteúdo e questões, e o portão que o dono definiu para começar a vender fecha para esta certificação. O que fica em aberto e está registrado: os 2 erros de "integralmente" em `cpror-car-10-q7` e `cpror-inv-50-q8`, os 222 erros da CPA que formam o P5, e a ASSBAN, com 10 aulas e 36 tópicos de questões, fora do portão por decisão do dono.

### O primeiro lote de questões e o vício que o formato não pega (16/09/2026)

**O lote passou.** A `cpror-cli-01` voltou com 8 questões e foi o primeiro arquivo do projeto a sair com zero erro e zero aviso no linter: níveis exatos em 25, 50 e 25, os 6 itens de "O que cai na prova" cobertos, os 8 gabaritos conferidos contra a aula, comentários com três parágrafos citando todas as erradas pelo nome, e seis cidades diferentes com catorze pessoas, incluindo um casal com filho recém-nascido. O gabarito é a alternativa mais longa em 2 de 8, que é o acaso, então ninguém acerta contando palavras.

**Duas coisas que só apareceram na leitura à mão, e ficam registradas porque vão se repetir.**

**1. O gabarito veio em rodízio: A, B, C, D, A, B, C, D.** O dono pegou isso e a observação dele é certeira: cada letra em 25%, a regra da BASE cumprida ao pé da letra, e mesmo assim o aluno adivinha a sexta resposta na quinta questão. Isso ensina a chutar, e a nota na Bússola sobe acima da nota real na ANBIMA, que é o pior defeito possível num banco de exercícios, porque passa despercebido e dá falsa confiança.

A causa é conhecida: **modelo de linguagem é ruim em sortear**. Mandar "variar a letra" produz exatamente a sequência regular. A BASE passou a proibir rodízio com todas as letras, mas a garantia é mecânica, no `outputs/embaralhar_gabarito.py`.

**2. A resposta certa era reconhecível pelo tom.** Em 5 das 8, o gabarito é a opção ponderada, que enumera fatores e manda revisar e medir, e as erradas são ingênuas ou categóricas. Dá para acertar essas cinco sem ter lido a aula, só escolhendo a mais prudente. Um dado que sustenta: o gabarito é a alternativa com mais fatores enumerados em 4 de 8, contra 2 esperadas pelo acaso.

**A correção não é dificultar, é equilibrar o tom.** Pelo menos duas distratoras por tópico precisam ser tão ponderadas quanto o gabarito, erradas por um ponto técnico no fim e não por ingenuidade, e pelo menos uma questão por tópico precisa ter como resposta certa a decisão direta. A BASE ganhou a regra com um exemplo escrito.

**O `outputs/embaralhar_gabarito.py`, e por que não deu para reaproveitar o script antigo.** O `redistribuir_gabarito.py`, escrito para a CPA, exige um bloco `feedback:` que o formato de hoje não tem, e quebra no primeiro arquivo. O novo troca por **transposição**: o texto do gabarito e o da letra-alvo trocam de lugar, e todo "A alternativa X" do comentário passa pelo mesmo mapa, então nenhuma frase fica apontando para a alternativa errada depois da troca. Isso foi o bug da versão anterior daquele script e está resolvido por construção aqui.

A sequência é determinista, com semente tirada do nome do tópico, então rodar duas vezes dá o mesmo resultado e uma correção posterior não reembaralha tudo. O sorteio rejeita rodízio crescente, rodízio decrescente, três letras iguais seguidas e, de seis questões para cima, qualquer sequência sem letra repetida em posições vizinhas, que é quase sempre o rodízio disfarçado.

**O linter ganhou o aviso correspondente**, por tópico e não pelo lote inteiro, porque é dentro do tópico que o aluno percebe o padrão enquanto responde. Ele pega o arquivo mesmo que alguém edite à mão depois do embaralhador.

**Mais duas regras que entraram na BASE, vindas da mesma leitura.**

Só uma das 8 questões pedia conta. Em cli-01 é defensável, porque o tópico é conceitual, mas cli-07, cli-10, cli-11, cli-12 e cli-13 são índice de poupança, liquidez corrente, liquidez seca, comprometimento de renda e endividamento. **Tópico com fórmula devolve pelo menos duas questões de cálculo.** O banco publicado está em 35% de questões com número e é um piso razoável.

E o cliente era quase sempre uma fonte passiva de dados. O guia pede habilidade técnica e comportamental ao mesmo tempo, e a prova interativa é construída em cima de cliente que resiste. **Pelo menos uma questão por tópico com cliente que insiste, discorda ou traz ideia pronta de fora.**

**Uma correção pontual na própria cli-01.** Na q5, a alternativa B dizia margem de R$ 2.200 porque os ajustáveis ficariam fora da conta. Tirando os ajustáveis, a conta dá R$ 3.000, e o R$ 2.200 era só o valor dos ajustáveis repetido. A distratora ficava descartável por não fechar a conta, e não por erro de conceito. Corrigido para R$ 3.000, que é o que o próprio comentário já descrevia.

**A ordem do fluxo passou a ser:** pedido, salvar o YAML, `embaralhar_gabarito.py`, `lint_questoes.py --estrito`, `questoes_para_js.py`. O embaralhador vem antes do linter de propósito, para o aviso de gabarito previsível funcionar como rede de segurança e não como ruído.

### Dois vícios que só aparecem no agregado (19/09/2026)

**O bloco 01 da C-Pro R fechou com 152 questões em 19 tópicos**, oito por tópico, zero erro no linter, níveis em 25, 50 e 25 exatos e gabarito em 25% para cada letra. As três regras que entraram na BASE em 16/09 funcionaram: nenhuma sequência de gabarito saiu em rodízio, cálculo apareceu em todos os tópicos de fórmula (o índice de poupança tem 7 das 8 questões com R$) e cliente que resiste aparece nos 19 tópicos. As distratoras de cálculo passaram a ser aritmeticamente coerentes com o próprio raciocínio errado, que era o defeito da cli-01 q5.

A leitura de uma amostra aleatória e a medição do conjunto acharam dois vícios novos. **Nenhum dos dois é visível questão a questão**, e é por isso que ficam registrados: só aparecem quando se olha o lote inteiro, e agora o linter olha por nós.

**1. O enunciado entregando o raciocínio.** Em 43% das questões de nível 2 e 37% das de nível 3, a cena traz duas ou mais frases dizendo o que o profissional "precisa" ou "deve" fazer, e essas frases contêm a resposta. Exemplo real, da cli-11 q7:

> "Bruno precisa explicar que o indicador compara montantes do trimestre, enquanto o pagamento depende de datas dentro do trimestre."

O gabarito repete isso com outras palavras. **O aluno deixa de precisar saber liquidez seca e passa a procurar a paráfrase.**

A causa é a régua de 800 caracteres, criada em 16/09 para corrigir as questões curtas demais. Para chegar ao tamanho, o agente esticou com explicação em vez de cena, e os enunciados de nível 2 e 3 ficaram com 7,9 frases de média. **Registrado porque é a lição geral: toda régua de tamanho é cumprida pelo caminho mais barato, e o caminho mais barato aqui era escrever o raciocínio em vez de inventar fato.**

A BASE passou a dizer que os 800 caracteres são cena, não análise, com o par errado e certo escrito. O linter avisa quando há duas ou mais frases de obrigação **fora do comando**, porque o comando pode legitimamente dizer "indique o que o profissional deve fazer". Essa exclusão importa: sem ela a checagem acusa questão correta e o autor para de confiar no linter.

**2. O gabarito mais longo.** Em 60% das 152 questões o gabarito é a alternativa mais longa, contra 25% do acaso. A vantagem média é pequena, uns 6 caracteres, então não salta aos olhos, mas **quem chutasse sempre na mais longa acertaria 60%**. A causa é natural: a resposta certa tende a ser mais comprida porque precisa ser completa.

Dá para evitar sem esforço, e dois arquivos provam: a cli-02 e a cli-17 ficaram em 2 de 8, com o gabarito até mais curto que a média das erradas.

O linter passou a avisar em dois níveis: na questão, quando o gabarito passa a maior errada por 15 caracteres ou mais, e no tópico, quando o gabarito é o mais longo em mais da metade das questões. No bloco 01, 12 dos 19 tópicos disparam o aviso de tópico.

**Os exemplares foram corrigidos junto, e isso não é detalhe.** Eles falhavam nas duas checagens novas: gabarito mais longo em 5 de 8 e um enunciado com duas frases de obrigação. **Régua que quebra a própria regra ensina o agente a quebrá-la**, porque o modelo copia o exemplo com muito mais fidelidade do que obedece o texto. O exemplo 3 teve o gabarito enxugado de 116 para 92 caracteres e o conjunto foi para 4 de 8, dentro do limite.

**O que não foi feito.** As 152 ficam como estão. São utilizáveis, estão acima de tudo que o banco tinha e refazer custa mais do que rende. As regras valem para os 75 tópicos que faltam. Se sobrar fôlego no fim, cortar as frases de obrigação das questões de nível 2 e 3 já escritas é o retrabalho de maior retorno, e o linter já lista quais são.

**Uma falta concreta:** o tópico `cpror-cli-16`, "Objetivos financeiros: prioridades e compatibilidade entre metas", não tem arquivo de questões. Os outros 19 do bloco 01 estão lá.

### O tamanho vira faixa, e uma correção do que eu havia afirmado (19/09/2026)

**O pedido do dono:** "não quero que seja obrigado a ter 800 caracteres. isso prejudica a qualidade dos textos. quero que as questões tenham uma margem de caracteres."

Ele estava certo no diagnóstico, e a proposta inicial dele, de 750 a 820, foi medida antes de virar regra. **Uma janela de 70 caracteres é uma coleira com duas pontas**, mais apertada que o alvo de hoje: o agente estica para chegar ao piso e corta para não passar do teto, que é exatamente o comportamento a eliminar. Os números:

| faixa | quantas das 114 questões de nível 2 e 3 caberiam |
| --- | --- |
| 750 a 820 | 32 (28%) |
| 700 a 900 | 109 (96%) |
| 600 a 950 | 113 (99%) |

E o teste que decidiu: **os 8 exemplares, que são a régua de qualidade, vão de 673 a 786 caracteres.** Só 2 dos 6 longos caberiam em 750 a 820. A faixa reprovaria as questões escritas como referência.

Ficou **600 a 950**, com o 800 do guia da ANBIMA mantido no texto como referência e rotulado como tal. A frase que entrou na BASE e vale mais que o número: **o tamanho é consequência da cena, não objetivo dela.**

**A correção, e ela importa para quem ler o registro anterior.** Em 16/09 eu escrevi que a régua de 800 era a causa do enunciado entregar o raciocínio. Os dados de 19/09 dizem que não é bem assim:

| faixa de tamanho | questões com 2 ou mais frases de obrigação |
| --- | --- |
| 700 a 800 | 38% |
| 800 a 900 | 43% |
| 900 ou mais | 20% |

**O defeito é quase plano ao longo do tamanho.** Não é o comprimento que produz análise no meio da cena: é o agente alcançar qualquer comprimento pelo caminho mais barato, que é explicar em vez de inventar fato. Quem resolve isso é a regra de conteúdo, não o número. A faixa larga serve para o texto respirar, e não para consertar o vício.

O que o tamanho revelou de verdade foi outra coisa: as 114 questões ficaram com média 841 e desvio de apenas 36 caracteres. **Esse desvio minúsculo é a prova de que o agente escrevia até bater o número, e não até a cena ficar pronta.** É esse comportamento que a faixa desfaz.

**No linter**, `ENUN_MIN` 600 e `ENUN_MAX` 950 substituíram a tolerância de 45% sobre o alvo. O aviso de cena longa diz para conferir se há análise no meio dela, que é o motivo provável. Piso das alternativas em 300. Rodando no bloco 01, só 1 das 114 fica fora da faixa, contra as 173 cenas curtas que o critério antigo acusava no banco publicado. **Aviso que dispara o tempo todo vira ruído e o autor para de ler**, então a faixa larga também é uma decisão sobre a utilidade do linter.

### Três decisões sobre a régua das questões, e uma que eu tinha errado (19/09/2026)

Depois de escrever a `cpror-cli-16` à mão, propus três ajustes na BASE a partir do atrito que senti. O dono derrubou o principal, com razão, e a discussão deixou coisas que vale registrar.

**O que eu propus e estava errado: baixar o piso de 600 caracteres.** Meus enunciados de nível 2 e 3 nasceram entre 391 e 503 e me pareceram completos, e concluí que o piso obrigava a encher. Fui conferir o que eu havia acrescentado para chegar na faixa: o cartão da cliente subindo de R$ 6.500 para R$ 9.000 em oito meses pagando o mínimo, o saldo que veio de uma rescisão e ficou parado, a correção do saldo pelo INCC. **Nenhum era enchimento.** O primeiro melhora a questão, porque prova que a dívida não está sob controle. Os outros dois são exatamente o que a prova nova faz: dar informação que o candidato precisa julgar se usa ou descarta.

O erro do meu raciocínio: uma cena que contém **só o necessário** é mais fácil do que uma cena de 800 com os mesmos dados mais o que precisa ser filtrado, e essa dificuldade é parte do que a ANBIMA mede. **O desconforto de escrever era a regra funcionando.** A pergunta do dono foi precisa: "se mexermos muito, perdemos o padrão da prova da Anbima". O piso fica em 600.

**A saída que eu sugeri em seguida também estava errada, e por um motivo que só apareceu no código.** Propus que nível 2 travado abaixo de 600 fosse reclassificado como nível 1. Fui verificar o que `nivel` significa no aplicativo: `_exNivelLabel` traduz 1, 2 e 3 em **Fácil, Médio e Difícil**, o rótulo aparece na tela durante a sessão de exercícios e o aluno **filtra por ele**. Nível é dificuldade; tamanho da cena é quantidade de dado necessária para decidir. São coisas independentes, e rebaixar o nível para caber no tamanho mente para quem está estudando. A BASE passou a dizer que o conserto é tornar a questão mais exigente.

**A decisão do dono sobre o `usar_em`.** Levantei que nível 3 vai só para `[simulado]`, então um quarto do banco fica fora das revisões, que são o ciclo semanal de consolidação. Decisão registrada: **fica como está**, com as difíceis apenas nos simulados e as demais também nas revisões. A revisão consolida, o simulado testa sob pressão.

**As duas regras que sobraram entraram na BASE**, e as duas vêm de defeitos que já aconteceram:

**Distratora com número fecha com o próprio raciocínio errado.** Foi o defeito da `cpror-cli-01` q5, aquele R$ 2.200 que não vinha de conta nenhuma quando a própria justificativa dava R$ 3.000. Distratora cujo número não fecha é descartada sem que o aluno entenda o conceito, e aí ela não mede nada. Estava registrado neste handoff e em lugar nenhum da BASE, e o handoff não vai para o ChatGPT.

**O caso resolvido da aula empresta a mecânica, nunca os números nem os nomes.** Também foi a `cpror-cli-01` q5, que copiou a Camila e os R$ 14.000 da aula inteiros. A BASE já proibia copiar os exemplares, e não dizia nada sobre a aula, que é a fonte bem mais tentadora.

**Nenhuma das duas é checável por máquina**, e é por isso que estão escritas com o par errado e certo: coerência aritmética de um raciocínio falso exige entender o raciocínio, e não há como o linter fazer isso. Ficam como conferência humana por amostragem.

### Nos exercícios, escolher deixou de ser responder (19/09/2026)

**O pedido:** "Quando o aluno clica em uma das alternativas, o sistema já corrige de forma automática. Quero que ao clicar, tenha também a opção de Responder para que ele não responda sem querer ao clicar por engano."

**Por que o defeito era caro.** O `exResponder` gravava no histórico e chamava `registrarResposta` no primeiro toque, e a primeira linha da função é `if(_exSessao.respostas[id]!==undefined) return`, ou seja, **a resposta é única e não volta atrás**. No celular, um toque errado ao rolar a tela queimava a questão de vez, contava como erro no desempenho por tópico e entrava na nota da revisão. Não existia desfazer.

**Como ficou.** O toque agora chama `exSelecionar`, que só guarda a letra em `_exSessao.selecao` e redesenha. O `exResponder` continua igual, e é acionado pelo botão **Responder**, que nasce desabilitado e acende quando há escolha. Ao lado dele, uma linha diz "Escolha uma alternativa" ou "Alternativa C escolhida". A seleção morre ao passar de questão e ao responder.

**O estado escolhido é neutro de propósito, e isso não é detalhe de gosto.** A primeira versão usou o verde da casa, e no teste ficou parecendo que o aluno já havia respondido e acertado, porque verde é a cor do acerto em toda a tela. Passou a ser borda escura com fundo cinza, e a regra tem par com `:hover` para o verde de passagem do mouse não voltar por cima.

**A animação.** Acerto faz a alternativa dar um pulso curto e a letra crescer; erro sacode a alternativa escolhida e revela a certa em fade; o veredito sobe. Tudo entre 0,34 e 0,5 segundo.

Dois cuidados que valem para qualquer efeito que se acrescente aqui:

O render troca o `innerHTML` inteiro, então **animação em CSS toca sozinha a cada redesenho**. Sem tratamento, abrir o comentário replicaria o efeito, o que cansa em uma sessão de trinta questões. A solução é `_exSessao.animar`, marcado em `exResponder` e consumido na primeira renderização seguinte: `const anim=!!S.animar; S.animar=false;`.

E há um bloco `@media (prefers-reduced-motion: reduce)` zerando as animações. Quem pede menos movimento no sistema operacional recebe só a cor, sem deslocamento.

**Validação.** Os 179 testes passam, incluindo o `ui.test.js`, que confere se todo `data-action` tem handler e se nenhum handler ficou órfão, o que pega o `exSelecionar` novo. No Chromium a 430 pixels: botão desabilitado com a dica correta, `aria-pressed` verdadeiro na escolhida, veredito certo nos dois caminhos, classe `anim-certa` presente ao responder e **ausente depois de abrir o comentário**, que era o ponto a provar. `?v=20260919-responder` no css e no ui, cache `bussola-v127`.

### Revisão e simulado passam a se registrar sozinhos (19/09/2026)

**O pedido, com quatro partes:** marcar os tópicos revisados sem o aluno clicar um a um, registrar no histórico do cronograma, deixar a nota visível e ter um botão de refazer que substitui a nota anterior.

**O que estava faltando, e por que era pior na revisão comum.** O `revSalvarResultado` gravava em `STATE.revisoesResultados` e, para mini e Revisão Geral, marcava o dia. **Para a revisão comum ele não gravava nada no dia.** A nota existia, o cronograma não sabia que a revisão tinha acontecido, e o `_diaFeito` do engine nem considerava o caso, então o dia contava como falha na sequência. Fora isso, os tópicos revisados eram marcados um a um pelo `toggleExRevisao`, no cartão, depois de o aluno já ter respondido as questões daqueles mesmos tópicos.

**O detalhe que decidiu o desenho.** O `exRevisao` é indexado pela **chave do dia**, e a sessão de exercícios só conhecia matéria e tópico. Não havia como marcar a revisão no fim sem saber de qual dia cada tópico veio. A solução foi levar as chaves na própria sessão: `_topKeysDoBloco(bloco)` entra em `sessao.revisao.topKeys` quando a atividade começa.

**A Revisão Geral fica de fora da marcação, de propósito.** Ela sorteia do edital inteiro, inclusive de assunto que o aluno ainda não estudou, então marcar ali diria que ele revisou o que nunca viu. Ela continua gravando o dia e a nota, só não toca nos tópicos.

**O que passou a acontecer ao responder a última questão:**

| | revisão | mini simulado | revisão geral |
| --- | --- | --- | --- |
| nota em `revisoesResultados` | sim | sim | sim |
| dia marcado | `revisaoFeita` (novo) | `simuladoFeito` | `revisaoGeralFeita` |
| tópicos marcados como revisados | sim | sim | **não** |
| `registradoEm` carimbado | sim | sim | sim |

`_diaFeito` no engine ganhou `revisaoFeita`. Sem isso, o dia da revisão continuaria contando como falha na sequência mesmo depois de resolvido.

**A nota saiu de dentro do cartão.** Ela só aparecia no corpo aberto, então percorrer a lista de revisões não dizia como o aluno tinha ido. Agora há um selo `.rcc-nota` na tarja, ao lado do estado e do contador.

**Refazer.** O botão de começar vira "↻ Refazer" quando já existe resultado, nas três telas, e há também um no fim da sessão. Antes de recomeçar, o `_confirmarRefazer` mostra a nota atual e avisa que concluir a nova tentativa substitui a anterior. **A nota antiga só é apagada quando a nova é salva**, e não ao iniciar: abandonar uma tentativa no meio não pode custar o resultado que já existia.

O refazer do fim da sessão reaproveita a quantidade por tópico em `sessao.revisao.qtd`, porque o campo que a informa vive na página de Revisões e não existe na tela de exercícios. Por isso o `iniciarBlocoQuestoes` passou a aceitar a quantidade por parâmetro, caindo no campo quando ela não vem.

**Validação.** 184 testes, com 5 novos em `revision-session.test.js`: a revisão grava dia e tópicos; as chaves entram na sessão sem repetir; a Revisão Geral não marca tópico; refazer substitui a nota mantendo o mesmo id de resultado; e, com resultado salvo, o botão vira Refazer e some o "Gerar revisão". `?v=20260919-revauto` no css, no ui e no engine, cache `bussola-v130`.


---

## Filtro "Ainda não respondi" e o resumo do banco no topo (19/09/2026)

**O filtro já existia no motor.** `listarQuestoes` aceitava `soNaoRespondidas` desde que o menu de exercícios nasceu, na mesma linha em que trata o `soErradas`:

```js
if(f.soErradas&&!(h&&h.ultimaCerta===false)) return;
if(f.soNaoRespondidas&&h) return;
```

Faltava a tela oferecer. A implementação foi só de interface: o campo entrou em `_exFiltro`, `_exListar` passou a repassá-lo e nasceu o `exToggleNovas` ao lado do `exToggleErradas`. Nenhuma linha do `engine.js` mudou. Vale a lição geral: antes de escrever regra nova de filtragem, procure no engine se ela já não está lá esperando uma pastilha.

**Os dois filtros se excluem por definição.** "Só as que errei" pede questões com histórico de erro; "Ainda não respondi" pede questões sem histórico nenhum. Ligados juntos devolvem zero, sempre. Então ligar um desliga o outro, dentro das próprias funções de toggle, e não por regra na renderização:

```js
function exToggleErradas(){
  _exFiltro.soErradas=!_exFiltro.soErradas;
  if(_exFiltro.soErradas) _exFiltro.soNaoRespondidas=false;
  renderExercicios();
}
```

Cada pastilha mostra o próprio contador entre parênteses, calculado com uma chamada seca ao engine (`listarQuestoes(STATE.prefeitura,{soNaoRespondidas:true}).length`). O contador é o que evita o clique às cegas: o aluno vê que sobram 171 antes de filtrar.

**O resumo do banco saiu do rodapé.** O bloco "Banco disponível" era um grid de cartões grandes (`.ex-resumo-titulo` e `.ex-cards`) no fim da página, depois do histórico. Ninguém rolava até lá. Virou uma faixa de pastilhas pequenas no topo do menu, antes do filtro: título, total geral (`171 questões · 57 tópicos`) e uma pastilha por matéria com o número em verde. O `title` de cada pastilha guarda o detalhe que os cartões mostravam ("questões em 12 de 15 tópicos"), então nada de informação se perdeu, só mudou de lugar e de peso.

O critério aqui, que vale para as próximas telas: informação de contexto fica pequena e em cima, informação de ação fica grande e no meio. O filtro é o que o aluno veio fazer, o tamanho do banco é o que ele precisa saber para decidir. Trocar isso de lugar foi o erro original.

Classes novas em `app.css`: `.ex-banco`, `.ex-banco-tit`, `.ex-banco-tot`, `.ex-banco-lista`, `.ex-banco-item`. As antigas `.ex-resumo-titulo`, `.ex-cards`, `.ex-card`, `.ex-card-nome`, `.ex-card-n` e `.ex-card-sub` foram removidas, não deixadas mortas.

**Armadilha de teste que custou meia hora.** O `engine.js` define a própria `function getQuestoes(editalId,materia,topico)`. Passar um `getQuestoes` falso no contexto do `vm` não funciona: a declaração do engine sobrescreve o que veio de fora assim que o arquivo roda. Para semear um banco de questões em teste, semeie a fonte de dados, não a função que a lê:

```js
const c=vm.createContext({STATE:{questoes:{}},
  EDITAIS:{demo:{topicos:{Mat:['Top']}}},
  QUESTOES:{demo:{Mat:{Top:[{id:'q1',nivel:1},...]}}}});
```

`_questoesData()` olha `QUESTOES` primeiro e só depois `window.QUESTOES_DATA`. A mesma regra vale para qualquer outra função que o engine declare no topo do escopo.

**Validação.** 188 testes, com 4 novos em `exercise-menu.test.js`: o filtro devolve só quem nunca teve resposta; responder uma questão a tira da lista; as duas pastilhas se excluem nos dois sentidos; e a flag chega ao engine pela listagem da tela. Render conferido em 430px e 1200px, sem estouro horizontal. `?v=20260919-filtro` no css, no ui e no engine, cache `bussola-v133`.

---

## Lote 4 de questões da C-Pro R concluído (19/09/2026)

O lote `bloco-04-cli-25-a-inv-07` foi integrado por completo: `cpror-cli-25` e `cpror-inv-01` a `cpror-inv-07`. São **65 questões em 8 tópicos**. O último tópico, `cpror-inv-07`, recebeu 9 questões porque precisava distinguir depósitos, letras, representação de créditos e securitização, além de tratar lastro, garantias, risco e liquidez.

O banco publicado da C-Pro R passou a **557 questões em 63 tópicos**. Por matéria: Análise de informações do cliente, 200 questões em 25 tópicos; Indicação de investimentos, 111 questões em 13 tópicos; Análise de portfólio e monitoramento da carteira, 246 questões em 25 tópicos. O arquivo publicado é `app/conteudo/questoes-cpror.js`, carregado por `app/index.html` com `?v=20260919-inv07`; o cache é `bussola-v134`.

O padrão consolidado neste lote é o da BASE vigente: cenas de níveis 2 e 3 na faixa de 600 a 950 caracteres sem espaços, fatos no enunciado e raciocínio nas alternativas, ao menos duas distratoras plausíveis, cliente resistente, cálculo quando o tópico exige, números das distratoras coerentes com o próprio raciocínio errado e caso resolvido usado apenas como mecânica, sem copiar nomes ou valores. O gabarito passa pelo `embaralhar_gabarito.py` antes do linter estrito.

Validação de fechamento: `questoes_para_js.py cpror --check` converteu as 557 questões com zero aviso e zero erro.



---

## A palavra "poupança" e a reescrita do cpror-cli-01 (19/09/2026)

**O problema que o dono encontrou lendo como aluno.** O primeiro tópico que o aluno da C-Pro R estuda depois da análise do edital é "Renda, idade e padrão de vida na capacidade de poupança". Ele leu as primeiras linhas e entendeu que o texto falava da aplicação tradicional de mesmo nome. Só páginas adiante percebeu que se tratava do ato de separar dinheiro.

O título vem do edital da Anbima e não pode mudar. A palavra também não pode sumir do texto, porque é o termo que a prova usa. O que estava errado era o contexto: o texto começava definindo "capacidade de poupança" com vocabulário técnico, sem nunca ancorar a palavra em algo concreto, e a cabeça do leitor preencheu a lacuna com o significado mais familiar.

**A instrução do dono foi específica:** corrigir o contexto **sem escrever a negativa**. Nada de "não é a poupança aplicação, é reserva financeira". Uma frase assim ensina o erro antes de corrigi-lo e ainda soa como manual de dúvidas frequentes.

**Como foi resolvido, e esta é a técnica a repetir em qualquer termo ambíguo:** ancore o sentido pelo uso, logo na primeira aparição, e depois siga usando o termo com naturalidade. No caso, o tópico abre com um cliente pedindo R$ 30.000 em dois anos e com a pergunta que o assessor precisa responder antes de qualquer outra: quanto esse cliente consegue separar da renda todo mês. Só depois o texto nomeia isso de capacidade de poupança e acrescenta a frase que fecha a porta do mal entendido sem citá-lo:

> Ele é uma medida do orçamento, expressa em reais por mês. O destino do dinheiro separado é uma decisão posterior, tratada nos tópicos de investimento.

Separar o **quanto** do **onde** resolve a ambiguidade inteira, porque a aplicação de mesmo nome é uma resposta para o "onde", e o tópico avisa que o "onde" não é assunto dali. O leitor reposiciona a palavra sozinho e segue lendo.

**A reescrita didática aproveitou a mesma passagem.** O texto antigo era correto e denso, escrito como resumo para quem já sabia. Virou uma sequência numerada de passos, que é o formato certo para o primeiro tópico da certificação: apurar o que sobra, conferir se a sobra se repete, ler a idade como contexto, enxergar o padrão de vida e transformar a sobra em rotina. Entrou uma tabela de despesas por natureza (essencial, ajustável, contratada) com a coluna que importa na prática, "dá para ajustar no curto prazo". O caso resolvido ganhou o fechamento que faltava, com o bônus anual ficando fora da conta mensal, e a variação mostra a mesma pessoa com a mesma média de renda e capacidade sustentável menor.

Uma frase nova diz ao aluno o que a prova faz com isso: quase toda questão descreve um cliente, dá números do orçamento e oferece alternativas em que alguém promete um valor mensal que a renda não sustenta. Dizer o formato da armadilha vale mais que qualquer aviso genérico.

De 1.010 para 1.304 palavras, dentro da faixa de 800 a 1500 do conversor. `versao: 2` no front matter.

**Regra para os próximos tópicos.** Um termo que tem outro significado corrente fora do contexto técnico (poupança, título, provisão, resgate, carteira) precisa ser ancorado no uso na primeira aparição, dentro de uma frase que mostre o que ele mede ou o que ele faz. Definir por sinônimo não resolve, e negar o outro sentido é pior do que não tratar.

**Conversor.** `python3 outputs/conteudo_para_js.py cpror` roda limpo (125 de 125 tópicos, 0 avisos, 0 erros). Rodar sem argumento derruba a conversão com 181 erros, todos de arquivos `.md` de pedido dentro de `_conteudo/<cert>/questoes/` e de `_to_delete/`, que não são tópicos e nunca deveriam ser varridos. Enquanto ninguém arrumar o filtro do script, **converta sempre passando a certificação**.

**Publicação.** `conteudo-cpror.js` em `?v=20260919-cli01r2`, cache `bussola-v136`.


---

## As 9 questões do cpror-cli-01, escritas contra a própria régua (19/09/2026)

Depois de reescrever o texto do primeiro tópico, o dono pediu as questões dele seguindo as regras que eu mesmo tinha escrito na BASE. O arquivo anterior, produzido pelo agente de conteúdo em 16/09, passava sem erro e trazia 11 avisos, entre eles o vício agregado que mais importa: **o gabarito era a alternativa mais longa em 6 das 8 questões**. Quem chuta na maior acertava seis vezes em oito.

**Resultado: 9 questões, 0 erro e 0 aviso no linter.** Foram nove e não oito porque o tópico tem seis itens em "O que cai na prova" e o sexto, o padrão de vida pretendido no futuro, ficaria sem cobrança. Fechar em oito por simetria teria deixado um item do programa de fora, que é exatamente o que a BASE proíbe.

**Como o vício do comprimento foi evitado.** Não escrevendo o gabarito por último. As quatro alternativas de cada questão nasceram com o mesmo corpo, e a correta foi escolhida depois. Em q8 a correta é de propósito **a mais curta** ("Refazer a conta com os números atuais, que devolvem R$ 200 por mês"), com as três erradas longas e cheias de ressalvas, porque a BASE pede pelo menos uma questão em que a decisão direta seja a resposta certa. Sem essa questão, o aluno aprende que resposta longa é resposta certa.

**A cena curta é sintoma, e o conserto é exigir mais.** No primeiro rascunho, seis das sete questões de nível 2 e 3 ficaram abaixo dos 600 caracteres. A tentação é encher com frase explicativa, e é assim que a análise entra na cena e entrega a resposta. O que foi feito em vez disso: acrescentar **fato que muda o trabalho do aluno**. Em q2 entrou um bônus de R$ 1.800 recebido no mês anterior, e junto com ele uma distratora que dilui o bônus em doze meses e chega a R$ 840; a questão ficou no tamanho e passou a cobrar também a diferença entre sobra ocasional e capacidade recorrente. Em q3 entrou o faturamento real dos quatro últimos meses da dentista, que torna visível o mês fraco em que o compromisso fixo precisa caber. Em q6 entrou um reajuste de R$ 300, que mede se o aluno percebe que o pedido de subir R$ 400 passa do reajuste.

**Toda alternativa com número fecha com o próprio raciocínio errado.** Conferido conta a conta: q2 devolve R$ 1.450 (ignora os ajustáveis), R$ 840 (dilui o bônus), R$ 2.010 (tira os contratados) e R$ 690 (correta). q6 devolve R$ 862,50 (desconta só os três resgates de R$ 450), R$ 975 (desconta só o de R$ 900), R$ 1.200 (ignora os resgates) e R$ 637,50 (correta). Distratora cujo número não sai de conta nenhuma é descartada sem que o aluno entenda o conceito, e aí ela não mede nada.

**Nenhum número e nenhum nome do caso resolvido da aula foi reaproveitado**, e isso exigiu duas correções depois de tudo pronto: a meta de q7 passou de R$ 48.000 para R$ 45.600 porque o aporte resultante, R$ 2.000, é um número que aparece na aula, e as despesas de q8 foram trocadas porque R$ 3.400 e R$ 700 também estão lá. Vale conferir esse item por último, com o texto da aula ao lado, porque ele escapa fácil.

**As distratoras ponderadas estão em q4, q5, q7 e q9.** A de q4 é a régua: "A idade situa a fase de vida, e a capacidade vem da renda e das despesas, de modo que quem tem margem curta eleva o risco da carteira para compensar o prazo." Começa certa, enumera os fatores certos e erra numa frase só, no fim, ao tratar risco como criador de capacidade. É esse tipo de alternativa que separa quem entendeu de quem decorou o formato da prova.

**Letras do gabarito:** C, B, B, D, A, D, C, A, B. Sem rodízio, com um par vizinho repetido, que é o que acontece num sorteio de verdade.

**Cliente que resiste** aparece em quatro questões: Nívea defende a média anual, Wagner chega irritado pedindo uma aplicação, Nelson traz a ideia pronta do colega e recusa rever valor e data, Sandra chega com a regra dos 70% lida em revista. A prova pede habilidade técnica e comportamental na mesma situação, e cliente que só fornece dados exercita metade.

**Conversão e publicação.** `python3 outputs/questoes_para_js.py cpror` rodou limpo, com 575 questões em 65 tópicos, 0 aviso e 0 erro. Render conferido no celular, alternativas equilibradas e sem estouro. Na sequência o agente de conteúdo regenerou o bundle junto com o lote inv-09, então o que está publicado é `questoes-cpror.js` em `?v=20260919-inv09`, cache `bussola-v137`, já com estas nove questões dentro.

**Pendência conhecida:** os outros 24 tópicos de Análise de informações do cliente ainda carregam o vício do gabarito mais longo em grau variado. Vale rodar o linter tópico a tópico e tratar os piores, sem reescrever o que já está bom.

---

## Embaralhador passa a rejeitar trechos de rodízio (19/09/2026)

O `cpror-inv-12` expôs uma lacuna: a sequência `A,B,C,D,A,B,B,C,D,A` passava porque continha uma repetição, embora os seis primeiros gabaritos formassem rodízio evidente. `outputs/embaralhar_gabarito.py` e `outputs/lint_questoes.py` agora rejeitam qualquer janela de cinco letras em ciclo crescente ou decrescente, além das regras anteriores. A sequência regenerada do tópico foi `B,B,C,A,A,C,A,B,D,D`. A regra foi validada diretamente contra o caso defeituoso e contra sequências aceitas de diferentes tamanhos.



---

## A revisão passou a ser montada pelo sistema (20/09/2026)

O dono usou a ferramenta de revisões como aluno e concluiu que o campo "quantas questões por tópico" era desnecessário. Concordo pelo motivo que a tela deixava ver: **o campo pedia uma decisão que o aluno não tinha como tomar**. O número certo depende de quantos tópicos o ciclo tem e de quanto banco existe em cada um, e nenhuma das duas coisas aparece antes da escolha. Errar custava um toast recusando a sessão ("o tópico X tem apenas 3 questões disponíveis") e a conta refeita à mão.

**O que entrou no lugar.** A mesma regra que o simulado já usava desde que nasceu: `_simSortear`, rodízio entre os tópicos até o limite do formato. A revisão ganhou `REV_LIMITE=15` e a função `revPlano(bloco)`, irmã de `_simPlano`, que devolve os grupos, o total disponível e o total sorteado. O `iniciarBlocoQuestoes` perdeu o parâmetro `qtd`, o campo `rev-q-<num>`, as duas mensagens de recusa e o laço que montava a sessão à mão. O `exRefazerAtividade` parou de carregar a quantidade da sessão anterior, porque refazer virou um sorteio novo do mesmo bloco.

**O rodízio é o que torna o limite honesto.** Sem ele, um tópico com banco grande tomaria a sessão inteira e um tópico de três questões nunca apareceria. Com ele, todo tópico do ciclo entra na fila antes de qualquer um repetir. Quando o ciclo tem mais de quinze tópicos, alguns ficam de fora da sessão, e é exatamente sobre isso que fala o texto novo.

**O texto, que é o coração do pedido.** Duas linhas no cartão da revisão, com pesos visuais diferentes. A primeira é o tamanho, para o aluno se organizar: "Esta revisão sorteia 15 questões entre as matérias que você estudou no ciclo." A segunda é a expectativa, numa caixa cinza:

> As questões se distribuem entre os tópicos do ciclo, e a revisão passa por parte dos assuntos, não por todos. Ela serve para mostrar onde a memória está firme e onde ficou frouxa. Quando uma questão apontar um assunto inseguro, volte ao conteúdo daquele tópico antes de seguir, quantas vezes precisar. Reler faz parte da revisão.

A última frase é deliberada. O aluno que volta ao conteúdo depois de errar costuma sentir que regrediu, e é o oposto: voltar é o uso certo da ferramenta. Dizer isso na tela custa uma linha e evita a leitura de fracasso.

**Onde mais o texto antigo mentia.** A tarja "Como usar" do topo da página de Revisões mandava "Defina a quantidade por tópico", instrução de um campo que deixou de existir. Virou "Gerar a revisão sorteia questões destes tópicos e devolve sua nota". O comentário do bloco de simulados dizia que na revisão o aluno escolhia a quantidade, e também foi corrigido. Vale a regra geral: **remover um controle é também caçar todo texto que o descrevia**, e neste caso eram três lugares.

**CSS.** Saíram `.rev-quantidade` e suas regras de responsivo; entraram `.rev-sorteio` (o número, com borda superior separando do resultado) e `.rev-nota` (a caixa cinza do aviso).

**Testes: 190 passando.** Os que mediam o campo foram reescritos, não apagados. Três novos: o limite corta a sessão quando sobra banco (3 tópicos com 20 questões cada devolvem 15, cinco por tópico); o rodízio dá vez a tópico de banco pequeno diante de tópico de banco grande (30 contra 1 devolve as 15 com a única do pequeno dentro); e a tela diz o tamanho e traz o aviso, sem nenhum resquício de "Quantas questões por tópico". Os testes antigos mudaram de número esperado porque a sessão deixou de ter o tamanho que o teste escolhia e passou a ter o que o banco oferece.

**Publicação.** `?v=20260920-revsorteio` no css e no ui, cache `bussola-v140`.

**Alarme falso que vale registrar.** A suíte acusou `cpror-catalog.test.js` quebrado, com 22 tópicos publicados a mais do que o mapa editorial previa. Era espelho local desatualizado: no computador do dono o `_docs/CPRO-R/topicos.json` já estava com os 125 tópicos como publicados, atualizado pelo agente de conteúdo. **Antes de consertar um teste que acusa dados, confira se os dados do espelho são os mesmos da máquina.** Quase entrei consertando um arquivo que estava certo.


### Correção no mesmo dia: o limite era meu, e ele deixava matéria de fora

O dono leu o texto novo e perguntou a coisa certa: o teto de 15 vem do sistema ou das matérias do cronograma? Vem do sistema, e a pergunta expôs um furo. O rodízio por tópico impedia que um tópico abocanhasse a sessão, mas quando o ciclo tinha mais tópicos do que o limite, os do fim da fila eram cortados, e a fila vinha embaralhada. Matéria com dois tópicos podia cair inteira por azar enquanto a de quinze ficava com a sessão toda.

**O conserto foi na ordem da fila, não no rodízio.** `_intercalarPorMateria` intercala os grupos antes do sorteio começar, uma matéria de cada vez, então as primeiras vagas cobrem uma matéria por vez e só depois vem o segundo tópico de qualquer uma. Como o corte acontece no fim da fila, toda matéria já entrou antes de qualquer corte.

**Por que não rotacionar por matéria até o fim.** Essa foi a primeira versão que escrevi, e está errada. Rotação completa por matéria dá metade da sessão à matéria de um dia só, num ciclo em que o aluno passou quatro dias na outra. A intercalação resolve a garantia nas primeiras vagas e devolve a divisão proporcional ao número de tópicos daí para frente, que é como o aluno gastou o tempo. Medido em 200 sorteios por cenário: ciclo de transição com 12 tópicos de A e 2 de B devolve A=12,8 e B=2,2; matéria de um tópico só ao lado de uma de quinze devolve B=1,0 e A=14,0; e em nenhum dos 800 sorteios uma matéria ficou de fora.

**O teto também cede.** `revPlano` calcula `limite = Math.max(REV_LIMITE, número de matérias com banco)`. Um ciclo com mais de quinze matérias é improvável, mas a promessa da tela não pode depender disso.

**A troca vale para os três formatos**, porque `_simSortear` é o mesmo do mini simulado e da Revisão Geral. Lá o problema era menor, com limite de 30 e 50, e existia do mesmo jeito.

O texto da tela passou a dizer o que o código garante: "Esta revisão sorteia 15 questões e passa pelas 2 matérias que você estudou no ciclo", seguido de "Toda matéria estudada entra, mas os assuntos se revezam". **Promessa na tela é contrato: se o texto diz que toda matéria entra, o sorteio tem de garantir, e não tornar provável.**

192 testes, com dois novos: matéria de um tópico só não é cortada por matéria de banco grande, e o teto de 15 cede quando o ciclo tem mais matérias do que isso. `?v=20260920-revjusto` no ui, cache `bussola-v143`.


### Terceira e última forma: uma questão por tópico, e refazer sem repetir (20/09/2026)

O dono fechou a regra: uma questão por tópico estudado, travado, e uma regra para o refazer não devolver a mesma prova. É a forma certa, e as duas anteriores desta mesma noite foram degraus até ela.

**Por que essa é melhor do que o teto.** Teto redondo sempre corta alguém, e corte em revisão é promessa quebrada: o aluno estudou aquele tópico no ciclo e espera ver questão dele. Com uma por tópico, o tamanho da sessão é o tamanho do próprio ciclo, toda matéria entra por consequência, e some a regra extra que eu tinha criado para garantir a matéria. `REV_LIMITE`, `revPlano.limite` e a intercalação por matéria dentro da revisão deixaram de existir. `_intercalarPorMateria` continua viva porque o mini simulado e a Revisão Geral têm teto de verdade (30 e 50) e precisam dela.

**O refazer sem repetir não guardou nada novo.** A tentação era salvar no resultado a lista de ids já usados. Desnecessário: o app já mantém histórico por questão em `STATE.questoes`, alimentado por `registrarResposta` a cada resposta. Então `_escolherPorTopico` separa, dentro de cada tópico, as questões que o aluno nunca respondeu das que já caíram, e sorteia entre as primeiras. Terminar a revisão marca as que caíram, e a tentativa seguinte pega outras sozinha.

**Efeito colateral bom:** vale também para quem já respondeu a questão no menu de Exercícios. Ela deixa de ser candidata na revisão enquanto houver questão nova no tópico, então as duas ferramentas param de repetir uma à outra.

**Banco esgotado repete, e repete pelo critério certo.** Quando todas as questões do tópico já caíram, a escolha vai para a menos respondida e, no empate, a mais antiga, com sorteio para desempatar o resto. Repetir é melhor do que deixar o tópico de fora, porque o tópico de fora quebra a promessa da tela.

**A tela.** "Esta revisão tem 6 questões, uma de cada um dos 6 tópicos do ciclo com banco publicado, nas 2 matérias que você estudou." O aviso passou a dizer a verdade nova: toda matéria entra com uma questão por tópico; uma questão toca um ponto do assunto e não o assunto inteiro; quando ela apontar um tópico inseguro, volte ao conteúdo; e ao refazer vêm questões diferentes enquanto houver banco no tópico. **Cada vez que a regra mudou, o texto mudou junto**, porque promessa na tela é contrato.

**Conferido no app, não só em teste:** com seis tópicos reais da C-Pro R, a primeira sessão trouxe seis questões de seis tópicos distintos; registrando as respostas e gerando de novo, as seis vieram diferentes, sem nenhuma repetida.

193 testes. Os novos: refazer traz questões diferentes das já respondidas; banco esgotado repete a mais antiga em vez de deixar o tópico de fora; o tamanho da sessão é o número de tópicos, sem teto; e matéria de um tópico só entra igual ao lado de matéria de quinze tópicos. `?v=20260920-rev1portopico` no ui, cache `bussola-v145`.


### Aberturas das questões passam a partir da ação cotidiana (19/09/2026)

O padrão editorial foi ajustado para evitar sequências artificiais como "Em Maceió...", "Em Recife..." e a mesma construção com outra cidade. A cidade virou ambientação opcional. As cenas devem começar por acontecimentos variados do cotidiano, como o cliente procurar o gerente, ligar para a central, abrir uma conta, levar uma planilha ou receber uma oferta. Se retirar a cidade reduzir alguns caracteres, a naturalidade vale mais do que preencher a faixa com texto sem função. A regra foi incorporada à seção **Diversidade** de `_docs/AGENTES-CONTEUDO/pedidos-questoes/00 - BASE QUESTOES (colar uma vez por conversa).md` e aplicada desde `cpror-rel-23`.


---

## Tela de Exercícios: revisão visual e dois defeitos funcionais (20/09/2026)

O dono trouxe três incômodos visuais e pediu a análise completa. Os três estavam certos, e medindo a tela apareceram dois defeitos funcionais que ninguém tinha visto.

### O que ele apontou, medido

**Pastilha órfã no Banco disponível.** Em 1400px o bloco enfileirava três matérias numa linha e jogava a quarta sozinha na de baixo. O bloco era `display:flex` com `flex-wrap`, ou seja, fluxo de texto: a quebra cai onde acabar o espaço. Virou `grid` com `repeat(auto-fit,minmax(178px,1fr))`, que dá colunas iguais, alinha número com número e cai para duas colunas no celular. **Lição: inventário se desenha em grade, nunca em fluxo.** Fluxo é para texto, onde linha irregular é natural; para uma lista de números, linha órfã lê como erro de montagem.

**Select da matéria desproporcional.** Medido: 909px de largura num cartão de 1088px, para um texto de meia linha. Campo enorme lê como campo obrigatório e pesado, e era o primeiro elemento da tela. Teto de 520px. **Cuidado ao repetir:** o teto foi para `max-width` e não para `flex-basis`. Com `flex:0 1 520px` o celular quebrou feio, porque a linha empilha em coluna e `flex-basis` no eixo de coluna vira ALTURA: o select virou uma caixa de 520px de alto. Peguei no render, não no código.

**Histórico fora da primeira tela.** Era consequência, não causa: o bloco do banco, o cartão de filtro e a caixa pontilhada de estado vazio somavam altura demais. Com a faixa de cabeçalho no lugar do título solto, o banco em grade e a caixa vazia menor, o `Gerenciar meu histórico` subiu de y=638 para y=610 no desktop e de y=896 (fora da dobra de 850) para y=798 no celular. **Nada foi movido de lugar: foi tudo encolhido.** Mover o histórico para cima seria dar destaque a uma ação destrutiva.

### O que ele não apontou e era pior

**A tela contava 1, 3, 4.** A linha de Tópicos só aparece depois que o aluno escolhe a matéria, e a numeração era texto fixo no HTML. Passo some, número fica, e o aluno procura um passo 2 que não existe. Agora um contador (`let _p=0; const passo=()=>++_p`) numera na ordem do que está renderizado. **Regra geral: numeração de passos e etapa condicional não convivem com número escrito à mão.**

**Os filtros não funcionavam sem escolher matéria.** Este é o grave. `_exListar` começava com `if(!_exFiltro.materia&&!_exFiltro.topicos.length) return []`. Resultado na tela do dono: a pastilha anunciava "Ainda não respondi (542)" e o rodapé respondia "0 questões na sessão · 0 disponíveis", com o botão apagado. A tela prometia um atalho e recusava honrá-lo. Agora qualquer recorte basta: nível ou histórico sem matéria valem para o edital inteiro. Conferido no navegador: só a pastilha de não respondidas devolve 575 disponíveis e monta sessão com questões de três matérias.

### O resto da análise

**Nível e histórico são dois eixos diferentes** e estavam como cinco pastilhas seguidas, lidas como um grupo só. Entrou um tracinho separador, que no celular vira quebra de linha (`flex-basis:100%;height:0`), para as duas de histórico ocuparem a própria linha em vez de uma sobrar sozinha embaixo das três de nível.

**A faixa de cabeçalho** veio de um mockup que o dono anexou: tarja verde escura, ladrilho com o ícone, título, subtítulo, o lema à mão e o selo Rumo à Aprovação. Classes `.pg-faixa-*`, aplicada só em Exercícios por enquanto. O selo é SVG inline, sem arquivo de imagem, porque o app roda em `file://`. O lema usa `Caveat`, terceira família do Google Fonts no mesmo `<link>`, com `Bricolage Grotesque` de reserva se a rede falhar. Abaixo de 900px o lema e o selo somem: no celular empurrariam o filtro para fora da primeira tela, que é justamente o problema que a faixa veio ajudar a resolver. O mockup usa serifada no título e mantive a Bricolage, porque uma serifada só nesta página brigaria com o resto do app.

**Pendência de coerência:** as outras oito páginas ainda usam `.page-title` em texto corrido. A faixa foi desenhada como componente reutilizável, então estendê-la é trocar duas linhas de HTML por página.

193 testes. `?v=20260920-exvisual` no css e no ui, cache `bussola-v149`.
