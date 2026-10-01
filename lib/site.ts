// Dados centrais do site. Para mudar telefone, preços ou domínio, edite só este arquivo.

export const site = {
  nome: "Parowski Sites e Sistemas",
  responsavel: "Jeferson Parowski",
  cidade: "Ponta Grossa",
  estado: "PR",
  // Troque pelo seu domínio quando registrar (ex.: https://parowski.com.br)
  url: "https://parowski.com.br",
  whatsapp: "5542988311053",
  whatsappExibicao: "(42) 98831-1053",
  email: "gegeupr@gmail.com",
  github: "https://github.com/gegeupr",
};

export function linkWhatsapp(mensagem: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

export const mensagemPadrao =
  "Olá! Vi o site da Parowski Sites e Sistemas e quero um orçamento.";

export type Pacote = {
  nome: string;
  preco: string;
  periodo?: string;
  resumo: string;
  inclui: string[];
  mensagem: string;
};

export const pacotes: Pacote[] = [
  {
    nome: "Landing page",
    preco: "500",
    resumo: "Uma página só, direto ao ponto, para divulgar um serviço ou campanha.",
    inclui: [
      "Botão de WhatsApp e formulário de contato",
      "Layout pensado primeiro para celular",
      "Configuração para aparecer no Google",
    ],
    mensagem: "Olá! Tenho interesse em uma landing page.",
  },
  {
    nome: "Site institucional",
    preco: "1.000",
    resumo: "Até 5 páginas: início, sobre, serviços, galeria e contato.",
    inclui: [
      "Domínio .com.br configurado no seu nome",
      "Mapa, WhatsApp e redes sociais integrados",
      "Textos organizados para busca no Google",
    ],
    mensagem: "Olá! Tenho interesse em um site institucional.",
  },
  {
    nome: "Sistema sob medida",
    preco: "2.500",
    resumo: "Para quando o negócio precisa mais que uma vitrine.",
    inclui: [
      "Agendamento online e área do cliente",
      "Painel para você gerenciar tudo",
      "Pagamentos por Pix e cartão",
    ],
    mensagem: "Olá! Quero conversar sobre um sistema sob medida.",
  },
  {
    nome: "Manutenção e hospedagem",
    preco: "60",
    periodo: "/mês",
    resumo: "Seu site no ar, atualizado e com alguém para chamar quando precisar.",
    inclui: [
      "Hospedagem e certificado de segurança",
      "Pequenas alterações de texto e foto",
      "Backup e acompanhamento",
    ],
    mensagem: "Olá! Quero saber sobre manutenção e hospedagem de site.",
  },
];
