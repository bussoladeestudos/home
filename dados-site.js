/* ════════════════════════════════════════════
   DADOS DA HOME — FONTE ÚNICA (certificações).
   Para adicionar/editar, altere APENAS este arquivo.
   Carregado via <script src> — funciona em file:// e no servidor.
   ════════════════════════════════════════════ */
/* Concursos: o produto passou a ser SÓ de certificações em 25/08/2026
   (decisão do dono). A lista fica VAZIA, e não removida, porque o
   index.html lê window.CONCURSOS_DATA em três pontos (dropdown do
   menu, seção da home e vitrine) e todos já tratam lista vazia. Se um
   dia voltar concurso, basta repovoar aqui. */
window.CONCURSOS_DATA = [];

window.CERTIFICACOES_DATA = [
  {
    "id": "cpa",
    "nome": "CPA — Certificado Profissional Anbima",
    "organizacao": "ANBIMA",
    "tipo": "certificacao",
    "area": "Mercado Financeiro",
    "nivel": "Iniciante",
    "descricao": "A CPA é o requisito de entrada no mercado financeiro. Direcionada a quem está começando a carreira, dá a base sobre produtos financeiros para atuar em atividades comerciais, no contato inicial com clientes e na prestação de informações sobre produtos e serviços. Depois dela, o caminho segue para as certificações de distribuição C-Pro R e C-Pro I. Programa em vigor desde 01/01/2026.",
    "modulos": [
      {
        "numero": 1,
        "nome": "Estrutura e Dinâmica do Sistema Financeiro Nacional",
        "descricao": "Órgãos normativos e de supervisão, operadores do sistema, política econômica, matemática financeira aplicada ao mercado e a infraestrutura que liquida e registra as operações.",
        "topicos": [
          "Órgãos normativos: CMN, CNSP e CNPC",
          "Supervisão: Banco Central, CVM, Susep e Previc",
          "Operadores do sistema: bancos, cooperativas e instituições de pagamento",
          "Demais operadores: corretoras, distribuidoras, fintechs e seguradoras",
          "Autorreguladores, FGC e Sistema Brasileiro de Pagamentos",
          "Fluxo circular da renda e subdivisões do mercado financeiro",
          "Política fiscal, dívida pública e Lei de Responsabilidade Fiscal",
          "Política monetária: instrumentos e canais de transmissão",
          "Copom, regime de metas de inflação e taxa Selic",
          "Política cambial, regimes de câmbio e taxa PTAX",
          "Indicadores econômicos: PIB, IPCA, IGP-M e desemprego",
          "Risco de liquidez, de crédito e de mercado",
          "Taxa de juros nominal e real, indexadores e fórmula de Fisher",
          "Capitalização simples versus capitalização composta",
          "Fluxo de caixa: valor presente, valor futuro e VPL",
          "TIR, custo de oportunidade, taxa livre de risco e duration",
          "Sistemas de amortização SAC e price, payback e desconto bancário",
          "Infraestruturas do mercado financeiro: SPB, SPI e Selic",
          "Clearings, contrapartes centrais e risco de contraparte",
          "Classificação de investidores, autorregulação Anbima e BSM"
        ]
      },
      {
        "numero": 2,
        "nome": "Produtos do Mercado Financeiro",
        "descricao": "O módulo de maior peso: renda fixa, renda variável, COE, fundos de investimento, previdência complementar, produtos de crédito, serviços bancários e seguros.",
        "topicos": [
          "Títulos públicos federais: LFT, LTN e NTN-B",
          "Tesouro Direto: plataforma, títulos e custos",
          "CDB, RDB e RDC",
          "LCI, LCA e LCD",
          "Debêntures, debêntures de infraestrutura e conversíveis",
          "CRI e CRA",
          "Rating de crédito",
          "Poupança: rendimento, data de aniversário e garantias",
          "TR e TLP",
          "Tributação das aplicações de renda fixa",
          "IOF nas aplicações financeiras",
          "Renda variável: definição, mercado primário e secundário",
          "Sociedades anônimas: S/A aberta, fechada e empresa listada",
          "Classes de ações: ordinárias, preferenciais, units, BDRs e bônus de subscrição",
          "IPO, OPA e follow on",
          "Eventos corporativos: dividendos, JCP e assembleias (AGO e AGE)",
          "Eventos corporativos: grupamento, desdobramento, bonificação e subscrição",
          "Índices de mercado: Ibovespa, IBrX 100 e IBrX 50",
          "Governança corporativa: segmentos de listagem, tag along, drag along e free float",
          "Tributação da renda variável: alíquotas, isenções e compensação de perdas",
          "COE: estrutura, capital protegido e tributação",
          "Fundos de investimento: conceito, condomínio e registro na CVM",
          "Resolução CVM 175: classes, subclasses e segregação patrimonial",
          "Características, estratégias, carteiras e riscos dos fundos",
          "Tributação dos fundos de investimento",
          "Fundos imobiliários (FIIs)",
          "PGBL e VGBL: quando usar cada um",
          "Regimes de tributação progressivo e regressivo na previdência",
          "Conceitos técnicos da previdência complementar",
          "Princípios para disponibilização de crédito e garantias",
          "Cartão de crédito, crédito rotativo e cheque especial",
          "Crédito consignado e crédito pessoal",
          "Crédito Direto ao Consumidor (CDC)",
          "Crédito imobiliário",
          "Capital de giro e consórcio",
          "Conta corrente",
          "Conta internacional",
          "Compra e venda de moeda estrangeira",
          "Seguros de vida",
          "Seguros patrimoniais"
        ]
      },
      {
        "numero": 3,
        "nome": "Relacionamento com o Cliente",
        "descricao": "Finanças pessoais e orçamento, orientação financeira, perfil da pessoa investidora e suitability, mais as regras de conduta, prevenção à lavagem de dinheiro e LGPD.",
        "topicos": [
          "Faixa etária, exposição ao risco e produtos adequados ao perfil",
          "Ciclo de vida: acumulação, crescimento, preservação e distribuição",
          "Educação financeira e capacidade de poupança",
          "Orçamento e fluxo de caixa pessoal ou familiar",
          "Gestão de dívidas: escolha da melhor dívida e garantias",
          "Empréstimo, financiamento e modalidades de crédito ao consumidor",
          "Financiamento imobiliário, de veículos e crédito estudantil",
          "Microcrédito, crédito rural e linhas para reforma e energia sustentável",
          "Reserva de emergência: montante e ativos de alta liquidez",
          "Balanço patrimonial pessoal: indicadores e patrimônio líquido",
          "Etapas do planejamento financeiro pessoal e metas",
          "Planejamento para aposentadoria e fundo educacional",
          "IRPF: o que declarar, classificação de rendimentos e modelos",
          "Tipos de investimento, tolerância a risco e horizonte",
          "Gestão financeira: emergências e uso do crédito",
          "Gestão de investimentos",
          "Gestão de risco e seguros",
          "Perfis da pessoa investidora",
          "Adequação de produtos financeiros (suitability)",
          "Avaliação de risco e retorno",
          "Diversificação de carteira",
          "Pessoa investidora profissional e qualificada",
          "Código de conduta ética Anbima: os nove princípios",
          "Suitability e Código de Distribuição da Anbima",
          "Ética profissional no atendimento ao cliente",
          "Riscos associados à atividade profissional",
          "Prevenção à lavagem de dinheiro: conceitos e obrigações",
          "Combate ao financiamento do terrorismo e comunicação ao Coaf",
          "Lei Geral de Proteção de Dados (LGPD)",
          "Crimes e ilícitos contra o mercado de capitais"
        ]
      },
      {
        "numero": 4,
        "nome": "Inovação e Desenvolvimento de Mercado",
        "descricao": "ESG e investimentos sustentáveis, finanças descentralizadas, open finance, inteligência artificial e o ecossistema de fintechs e meios de pagamento.",
        "topicos": [
          "Conceitos de ESG: ambiental, social e governança",
          "Aspectos ambientais e sociais no mercado financeiro",
          "Governança corporativa e ESG",
          "ESG e finanças: impactos na indústria de investimentos",
          "Produtos e estratégias de investimento ESG",
          "Fundos de investimento sustentável (IS) e fundos que integram ESG",
          "Finanças descentralizadas (DeFi), smart contracts e tokenização",
          "Open finance, open investment e open insurance",
          "Inteligência artificial no atendimento e no mercado financeiro",
          "Fintechs, sandbox regulatório e meios de pagamento"
        ]
      }
    ]
  },
  {
    "id": "cpror",
    "nome": "C-Pro R - Certificação Profissional Anbima de Relacionamento",
    "organizacao": "ANBIMA",
    "tipo": "certificacao",
    "area": "Relacionamento e investimentos",
    "nivel": "Especialização",
    "descricao": "Certificação C-Pro R da Anbima, voltada ao relacionamento com a pessoa investidora. Planejamento com 125 unidades editoriais em quatro módulos, baseado no programa detalhado versão 1.2, vigente desde 01/01/2026. Aulas em produção; questões e análise estratégica ainda não disponíveis. Exame com 45 questões, duração de 150 minutos e mínimo de 32 acertos, conforme edital versão 1.4 de 28/05/2026. Defina a data do seu exame ao configurar.",
    "modulos": [
      {
        "numero": 1,
        "nome": "Prospecção e relacionamento com a pessoa investidora",
        "descricao": "25 tópicos de estudo.",
        "topicos": [
          "Finanças tradicionais e comportamentais: racionalidade, perdas e carteira",
          "Representatividade, disponibilidade e ancoragem no atendimento",
          "Excesso de confiança e aversão à perda",
          "Framing, confirmação, autoatribuição, status quo e efeito manada",
          "Emoções, ESG e comportamento individual e institucional",
          "Bolhas, crises e arquitetura de escolhas: nudging e sludging",
          "Apostas online: comportamento, orçamento e distinção de investimentos",
          "Finanças comportamentais na estratégia e na gestão de risco",
          "Ativos reais e financeiros: diferenças na decisão do cliente",
          "Poupança no Brasil: objetivos, inflação e barreiras para investir",
          "Bancos digitais, gerações e fontes de informação",
          "Aposentadoria e estresse financeiro no relacionamento",
          "Educação financeira, responsabilidade profissional e finfluencers",
          "Funil de prospecção: da primeira reunião ao acompanhamento",
          "Canais de prospecção, parcerias e base pessoal de contatos",
          "Indicadores comerciais: esforço, conversão e diagnóstico do funil",
          "Competências comerciais: comunicação, organização e ética",
          "Entrevista do cliente: objetivos de curto, médio e longo prazo",
          "Levantamento financeiro: liquidez, experiência, renda e dependentes",
          "Código de Distribuição: abrangência, canais digitais e remuneração",
          "Conheça seu cliente: cadastro e informações para distribuição",
          "Suitability: verificação, impedimentos e ordem do cliente",
          "Classificação de clientes e produtos e regras de transferência",
          "Relacionamento com clientes: Resoluções CMN 4.949 e BCB 155",
          "Educação financeira institucional: resolução conjunta citada no programa"
        ]
      },
      {
        "numero": 2,
        "nome": "Análise de informações do cliente",
        "descricao": "25 tópicos de estudo.",
        "topicos": [
          "Renda, idade e padrão de vida na capacidade de poupança",
          "Planejamento financeiro para formação de poupança",
          "Poupança da sociedade e financiamento dos investimentos no Brasil",
          "Reserva de emergência para diferentes perfis de cliente",
          "Balanço patrimonial: ativos de uso, investimento e patrimônio líquido",
          "Cobertura de despesas mensais e autonomia financeira",
          "Índice de poupança: cálculo, interpretação e metas",
          "Liquidez: prazo, negociabilidade e custo de saída",
          "Liquidez e rentabilidade na composição da reserva",
          "Liquidez corrente: cálculo e diagnóstico do cliente",
          "Liquidez seca: composição, cálculo e limitações",
          "Comprometimento de renda e sinais de fragilidade financeira",
          "Endividamento: cálculo e impacto na saúde financeira",
          "Dívidas: comparação de taxas, modalidades e prazos",
          "Coleta de informações para análise do perfil",
          "Objetivos financeiros: prioridades e compatibilidade entre metas",
          "Tolerância ao risco e capacidade financeira de suportar perdas",
          "Horizonte de investimento e necessidade futura de recursos",
          "Experiência com investimentos e compreensão de riscos",
          "Perfis conservador, moderado e arrojado: análise aplicada",
          "Investidor comum e qualificado: critérios e distinção do perfil de risco",
          "Investidor profissional: critérios patrimoniais e profissionais",
          "Ciclo de vida: acumulação e construção do patrimônio",
          "Ciclo de vida: consolidação e transição para aposentadoria",
          "Ciclo de vida: usufruto, retiradas e preservação da renda"
        ]
      },
      {
        "numero": 3,
        "nome": "Indicação de investimentos",
        "descricao": "50 tópicos de estudo.",
        "topicos": [
          "Alocação de ativos: perfil, fase de vida e pilares da decisão",
          "Alocação estratégica e tática, market timing e seleção de ativos",
          "Classes de ativos e diversificação na construção da carteira",
          "Renda fixa: remuneração, riscos e adequação ao cliente",
          "Marcação a mercado, duration e negociação de renda fixa",
          "Títulos públicos: indexadores, dívida pública e indicação",
          "Títulos bancários, imobiliários e do agronegócio: emissores e estruturas",
          "FGC: cobertura, limites e concentração por emissor",
          "Renda fixa privada: custódia, carência, liquidez e rating",
          "Dívida corporativa: emissões, ofertas, cupons e duration",
          "Renda fixa: tributação e comparação de rentabilidade líquida",
          "Debêntures: garantias, covenants e risco na recomendação",
          "Mercado de ações: IPO, OPA e liquidez no mercado secundário",
          "Riscos acionários, volatilidade e correlação",
          "Ações e eventos societários: espécies, subscrição, split e inplit",
          "Ações: tributação, compensação de perdas, dividendos e JCP",
          "Aluguel de ações: remuneração, garantias e riscos",
          "Day trade, swing trade e buy and hold na adequação ao cliente",
          "Índices acionários e imobiliários como referências de carteira",
          "Derivativos: finalidades, futuros e garantias",
          "Opções, moneyness e swaps: funcionamento e comparação",
          "Estruturas com derivativos: margem, liquidação e direitos",
          "COE: estrutura, riscos, custos, tributação e DIE",
          "Fundos: documentos, distribuição e responsabilidades",
          "Fundos de renda fixa, multimercados e ações: classes e estratégias",
          "Fundos sustentáveis e integração ESG na indicação",
          "ETFs: estrutura, negociação, categorias e riscos",
          "FIIs: tijolo, papel, rendimentos, custos e riscos",
          "Fundos incentivados e de infraestrutura: liquidez e adequação",
          "Tributação dos fundos: come-cotas, IOF e alocação líquida",
          "Patrimônio negativo, insolvência e liquidação de fundos",
          "Fiagro, FIDC, exclusivos, FoF, FIP e clubes: comparação e tributação",
          "Câmbio e contas internacionais: paridade e remessa de recursos",
          "Renda fixa internacional: Treasuries, bonds, CDs, CPs e repos",
          "Ações no exterior: ADR, GDR, índices e cenário internacional",
          "Investimentos no exterior e offshore: tributação e obrigações",
          "Previdência social e estimativa da necessidade de renda complementar",
          "Previdência complementar: capitalização e quatro pilares de uso",
          "PGBL: diferimento, benefício fiscal e reinvestimento da economia",
          "VGBL: acumulação, aposentadoria e planejamento patrimonial",
          "Previdência: regimes progressivo e regressivo na decisão do cliente",
          "Previdência: tábuas biométricas, juro atuarial e modalidades de renda",
          "Plano e fundo previdenciário: carências, perfil e relacionamento",
          "Fundos previdenciários: estratégias e limites de concentração",
          "Previdência: diversificação e revisão periódica da carteira",
          "Previdência corporativa: planos, contribuições e vesting",
          "Bitcoin: funcionamento, teses e diferenças entre criptoativos",
          "Ethereum: Ether, contratos, oráculos e mecanismos de consenso",
          "Tokens, stablecoins, NFTs e subsetores de criptoativos",
          "Acesso a criptoativos e impacto de bitcoin e ether na carteira"
        ]
      },
      {
        "numero": 4,
        "nome": "Análise de portfólio e monitoramento da carteira",
        "descricao": "25 tópicos de estudo.",
        "topicos": [
          "Política monetária: juros, moeda e expectativas na carteira",
          "Política fiscal: gastos, tributos e sustentabilidade das contas",
          "Cenários macroeconômicos e efeitos sobre renda fixa, ações e criptoativos",
          "Revisão do perfil e comparação da alocação atual com a desejada",
          "Rentabilidade real, volatilidade e correlação no monitoramento",
          "Diagnóstico da carteira e comunicação de novas recomendações",
          "Rebalanceamento por calendário e por faixas percentuais",
          "Buy and hold: comportamento dos pesos e limites da estratégia",
          "Constant mix: recomposição dos pesos e cenários de mercado",
          "CPPI: piso, colchão, multiplicador e limitações",
          "Casamento e união estável: revisão dos objetivos financeiros",
          "Divórcio e falecimento: mudanças patrimoniais e necessidade de liquidez",
          "Planejamento de descendentes: metas e horizontes de investimento",
          "Mudança de país e eventos especiais: revisão da carteira",
          "STVM e transferências internas e externas de custódia",
          "Portabilidade de mesma titularidade: processo e cuidados",
          "Transferência entre titularidades: requisitos e distinções",
          "Transferência de custódia como instrumento de rebalanceamento",
          "Resgate antecipado: impactos em renda fixa, variável e alternativos",
          "Tributação e custos na decisão de rebalancear",
          "Ativos livres de risco e risco de crédito: referência e limites",
          "Risco, retorno e dominância entre ativos",
          "Risco e desvio padrão da carteira: benefício da diversificação",
          "Beta, riscos absoluto e relativo e risco diversificável",
          "Dominância entre carteiras, Sharpe e Treynor: uso e limitações"
        ]
      }
    ]
  },
  {
    "id": "pldftLgpdAssban",
    "nome": "PLDFT + LGPD — Microcertificação ASSBAN",
    "organizacao": "ASSBAN",
    "tipo": "microcertificacao",
    "area": "Prevenção a ilícitos e proteção de dados",
    "nivel": "Microcertificação",
    "descricao": "Microcertificação ASSBAN de PLDFT + LGPD. Plano editorial com 36 tópicos em cinco matérias. Prioridade de estudo igual entre matérias; os percentuais não são pesos oficiais de prova. Escopo LGPD sujeito à confirmação do programa combinado. Vinte e seis aulas disponíveis: quatro primeiras matérias completas; LGPD e análise estratégica em preparação. Defina a data do seu exame ao configurar.",
    "modulos": [
      {
        "numero": 1,
        "nome": "Fundamentos de PLD/FTP e legislação",
        "descricao": "6 tópicos de estudo.",
        "topicos": [
          "Lavagem de dinheiro: conceito, origem ilícita e impactos",
          "Colocação, ocultação e integração: etapas e reconhecimento",
          "Lei 9.613/1998 e mudanças da Lei 12.683/2012",
          "Pessoas obrigadas, deveres preventivos e sanções",
          "Prevenção no Brasil: evolução, Coaf e órgãos de controle",
          "Terrorismo e proliferação: financiamento e prevenção"
        ]
      },
      {
        "numero": 2,
        "nome": "Tipologias, práticas nocivas e sinais de alerta",
        "descricao": "6 tópicos de estudo.",
        "topicos": [
          "Empresas de fachada, empresas fictícias e interpostas pessoas",
          "Fracionamento, mescla e movimentação incompatível",
          "Imóveis, seguros, ativos de valor e comércio exterior",
          "Transferências, câmbio irregular e ativos digitais",
          "Tráfico de drogas, corrupção, tráfico de pessoas e migração irregular",
          "Evasão fiscal, elisão fiscal e conduta no atendimento"
        ]
      },
      {
        "numero": 3,
        "nome": "Política de prevenção e conhecimento das partes",
        "descricao": "8 tópicos de estudo.",
        "topicos": [
          "Política de PLD/FT: alcance, governança e responsabilidades",
          "Avaliação interna de risco e medidas proporcionais",
          "Identificação do cliente e atualização cadastral",
          "Qualificação, capacidade financeira e classificação de risco",
          "Início do relacionamento e diligências: condições e exceções",
          "Beneficiário final e cadeia de participação societária",
          "Pessoas expostas politicamente e acompanhamento reforçado",
          "Funcionários, parceiros, terceiros e relações internacionais"
        ]
      },
      {
        "numero": 4,
        "nome": "Operações, comunicações e efetividade dos controles",
        "descricao": "6 tópicos de estudo.",
        "topicos": [
          "Registro de operações, pagamentos e transferências",
          "Operações em espécie: registros e solicitação de saques",
          "Monitoramento, seleção, análise e dossiê",
          "Comunicações ao Coaf e declaração de não ocorrência",
          "Guarda de documentos: prazos e eventos de contagem",
          "Controles, avaliação de efetividade e plano de ação"
        ]
      },
      {
        "numero": 5,
        "nome": "LGPD aplicada ao mercado financeiro",
        "descricao": "10 tópicos de estudo.",
        "topicos": [
          "Finalidade, abrangência e exceções da LGPD",
          "Dados pessoais, sensíveis e anonimização",
          "Princípios do tratamento de dados",
          "Bases legais e consentimento",
          "Direitos do titular e atendimento de solicitações",
          "Controlador, operador, encarregado e governança",
          "Compartilhamento, conservação e descarte",
          "Segurança, incidentes e boas práticas",
          "ANPD, responsabilidade e sanções",
          "PLD/FT e LGPD: decisões integradas"
        ]
      }
    ]
  }
];
