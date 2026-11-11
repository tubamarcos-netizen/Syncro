/* Modelos de checklist por tipo de empresa. Itens separados por "; " */
const MODELOS = {
  loja: { nome: "Loja / varejo", c: {
    "Abertura da loja": "Ligar luzes, ar-condicionado e sistema; Conferir o troco e abrir o caixa; Testar maquininha e internet; Organizar a vitrine e deixar os preços visíveis; Verificar a limpeza do piso e do balcão; Alinhar metas e avisos do dia com a equipe",
    "Atendimento e vendas": "Cumprimentar o cliente assim que ele entra; Oferecer ajuda sem pressionar; Explicar política de troca e garantia; Registrar produtos pedidos que estão em falta; Pedir avaliação após a compra",
    "Recebimento de mercadoria": "Conferir a nota fiscal com os itens recebidos; Verificar avarias e quantidades; Etiquetar e colocar preço; Registrar a entrada no estoque; Guardar no local correto; Anotar divergências para o fornecedor",
    "Estoque e reposição": "Contar os produtos de maior giro; Repor prateleiras e vitrine; Listar itens abaixo do mínimo; Separar produtos danificados ou vencidos; Atualizar o pedido de compra",
    "Fechamento da loja": "Fechar o caixa e conferir os valores; Emitir o relatório de vendas do dia; Guardar dinheiro e comprovantes em local seguro; Recolher mercadorias fora do lugar; Desligar equipamentos e luzes; Trancar as portas e ativar o alarme"
  }},
  restaurante: { nome: "Restaurante / lanchonete", c: {
    "Abertura da cozinha": "Conferir a temperatura de geladeiras e freezers; Higienizar bancadas e utensílios; Verificar a validade dos ingredientes; Porcionar e separar os insumos do dia; Checar o gás e os equipamentos; Equipe uniformizada e com cabelo preso",
    "Abertura do salão": "Limpar mesas e cadeiras; Conferir cardápios, talheres e guardanapos; Testar maquininha, caixa e sistema de pedidos; Verificar papel e sabonete dos banheiros; Avisar a equipe sobre itens em falta",
    "Recebimento de mercadoria": "Conferir nota fiscal e quantidades; Medir a temperatura de carnes e laticínios; Verificar validade e embalagens; Guardar usando a regra primeiro que vence, primeiro que sai; Registrar a entrada no estoque",
    "Higiene e boas práticas": "Registrar as temperaturas dos equipamentos; Trocar ou filtrar o óleo da fritadeira; Higienizar ralos e lixeiras; Conferir a validade da dedetização e da limpeza da caixa d'água; Identificar alimentos guardados com nome e data",
    "Fechamento": "Fechar o caixa e conferir as comandas; Guardar os alimentos identificados e com data; Limpar chapa, fogão e coifa; Lavar a cozinha e o piso; Retirar o lixo; Desligar o gás e os equipamentos; Trancar e ativar o alarme"
  }},
  salao: { nome: "Salão / barbearia / estética", c: {
    "Abertura do salão": "Ligar luzes, ar-condicionado e som; Higienizar bancadas, cadeiras e lavatório; Conferir a esterilização de alicates, tesouras e navalhas; Repor toalhas, capas e descartáveis; Conferir a agenda do dia; Confirmar horários com os clientes",
    "Entre um atendimento e outro": "Higienizar cadeira e bancada; Trocar toalha e capa; Higienizar as ferramentas usadas; Descartar perfurocortantes em caixa própria; Registrar os produtos usados",
    "Atendimento e pós-venda": "Conferir a ficha do cliente (preferências e restrições); Explicar o serviço e o valor antes de começar; Oferecer retorno e agendar o próximo horário; Pedir avaliação; Enviar mensagem de lembrete",
    "Estoque de produtos": "Contar tintas, shampoos e descartáveis; Conferir a validade dos produtos; Listar itens abaixo do mínimo; Guardar produtos químicos fechados e identificados; Atualizar o pedido de compra",
    "Fechamento do salão": "Fechar o caixa e conferir a maquininha; Lavar e guardar as ferramentas; Lavar toalhas e capas; Retirar o lixo; Conferir a agenda de amanhã; Desligar equipamentos e trancar"
  }},
  oficina: { nome: "Oficina mecânica", c: {
    "Recebimento do veículo": "Registrar placa, quilometragem e nível de combustível; Fotografar o veículo e as avarias existentes; Anotar o relato do cliente; Conferir pertences deixados no carro; Gerar o orçamento e pedir autorização por escrito",
    "Execução do serviço": "Conferir peças e ferramentas separadas; Proteger banco e volante; Seguir o procedimento do serviço; Registrar as peças trocadas; Avisar o cliente sobre qualquer problema novo encontrado",
    "Entrega do veículo": "Testar o veículo após o serviço; Limpar volante e painel; Devolver as peças trocadas, se o cliente quiser; Explicar o que foi feito e a garantia; Receber o pagamento e emitir o comprovante",
    "Segurança da oficina": "Verificar extintores e saídas livres; Conferir EPIs (luvas, óculos e protetor auricular); Verificar elevador e macacos; Descartar óleo e filtros no local correto; Organizar as ferramentas ao fim do dia",
    "Estoque de peças e insumos": "Contar óleo, filtros e itens de maior giro; Conferir peças pedidas e recebidas; Listar o que está abaixo do mínimo; Guardar peças de clientes identificadas pela placa"
  }},
  campo: { nome: "Serviços em campo (instalação e manutenção)", c: {
    "Antes de sair para o cliente": "Confirmar endereço, horário e contato do cliente; Conferir a ordem de serviço; Separar ferramentas e materiais; Carregar o celular e levar o carregador; Conferir EPIs e uniforme; Checar combustível e pneus do veículo",
    "Chegada e execução": "Apresentar-se e confirmar o serviço com o cliente; Fotografar o local antes de começar; Proteger e isolar a área de trabalho; Executar conforme o procedimento; Fotografar o resultado",
    "Conclusão e entrega": "Testar o funcionamento junto com o cliente; Limpar o local; Coletar assinatura ou aceite do cliente; Registrar os materiais usados; Informar garantia e orientações de uso",
    "Segurança no trabalho": "Usar todos os EPIs; Avaliar riscos (altura, eletricidade); Sinalizar a área; Conferir ferramentas isoladas e em bom estado; Registrar qualquer incidente",
    "Pós-serviço e faturamento": "Enviar o relatório ao cliente; Registrar horas e deslocamento; Emitir a cobrança ou a nota; Repor os materiais usados; Pedir avaliação do cliente"
  }},
  outro: { nome: "Outro tipo de negócio", c: {
    "Abertura do dia": "Ligar luzes, equipamentos e sistema; Conferir limpeza e organização do local; Revisar as tarefas e prioridades do dia; Alinhar a equipe",
    "Atendimento ao cliente": "Responder mensagens e pedidos pendentes; Registrar solicitações e reclamações; Confirmar prazos combinados; Pedir avaliação após a entrega",
    "Limpeza e organização": "Limpar bancadas, pisos e banheiros; Retirar o lixo; Repor materiais de higiene; Organizar documentos e ferramentas",
    "Segurança e manutenção": "Verificar extintores e saídas livres; Testar câmeras e alarme; Anotar equipamentos com defeito; Agendar manutenções necessárias",
    "Fechamento do dia": "Conferir caixa e pagamentos do dia; Registrar pendências para amanhã; Desligar equipamentos e luzes; Trancar e ativar o alarme"
  }}
};
