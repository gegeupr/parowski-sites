import { IconeWhatsapp } from "@/components/IconeWhatsapp";
import { PreviaNicho } from "@/components/PreviaNicho";
import { linkWhatsapp, mensagemPadrao, pacotes, site } from "@/lib/site";

const etapas = [
  {
    titulo: "Conversa pelo WhatsApp",
    texto: "Você conta o que o negócio faz e o que precisa. Sem formulário longo e sem termo técnico.",
  },
  {
    titulo: "Proposta por escrito",
    texto: "O que entra, o prazo e o valor ficam combinados antes de começar. Para iniciar, 50% de entrada.",
  },
  {
    titulo: "Desenvolvimento com prévia",
    texto: "Você acompanha o site sendo feito por um link e tem duas rodadas de ajustes incluídas.",
  },
  {
    titulo: "No ar, com suporte",
    texto: "Publico com o domínio no seu nome e explico como funciona. O restante é pago na entrega.",
  },
];

const projetos = [
  {
    nome: "Motion Personal",
    tipo: "Plataforma para personal trainers",
    texto:
      "Área do aluno com treinos e evolução, painel do professor, pagamentos online e proteção de dados de saúde.",
    link: "https://motionpersonal.com.br",
    dominio: "motionpersonal.com.br",
  },
  {
    nome: "Marketplace de fretes",
    tipo: "Sistema com mapa e busca por região",
    texto:
      "Conecta quem precisa transportar carga com transportadores, usando busca por localização e cadastro dos dois lados.",
  },
];

const duvidas = [
  {
    p: "Quanto tempo leva para ficar pronto?",
    r: "Uma landing page costuma ficar pronta em poucos dias. Um site institucional leva de uma a duas semanas. Sistemas dependem do tamanho, e o prazo exato vai na proposta.",
  },
  {
    p: "O domínio fica no meu nome?",
    r: "Sim. O domínio é registrado no seu nome e no seu CPF ou CNPJ. Se um dia quiser trocar de profissional, o site e o endereço continuam sendo seus.",
  },
  {
    p: "Como é o pagamento?",
    r: "50% para começar e 50% na entrega, por Pix. Tudo combinado por escrito antes de iniciar.",
  },
  {
    p: "Sou obrigado a pagar manutenção todo mês?",
    r: "Não. A manutenção é opcional. Se preferir cuidar por conta própria, entrego tudo configurado e explico o básico para você mexer.",
  },
  {
    p: "Já tenho um site. Dá para reformar?",
    r: "Dá. Analiso o que existe hoje e digo se compensa ajustar ou fazer um novo, com o valor de cada opção.",
  },
  {
    p: "Você atende fora de Ponta Grossa?",
    r: "Sim, o atendimento funciona todo online. Quem é de Ponta Grossa ou dos Campos Gerais também pode conversar pessoalmente.",
  },
];

function BotaoWhatsapp({
  mensagem = mensagemPadrao,
  texto = "Pedir orçamento no WhatsApp",
  claro = false,
}: {
  mensagem?: string;
  texto?: string;
  claro?: boolean;
}) {
  return (
    <a
      href={linkWhatsapp(mensagem)}
      target="_blank"
      rel="noopener noreferrer"
      className={
        "inline-flex items-center gap-2.5 rounded-lg px-5 py-3 text-[1.02rem] font-semibold transition-colors " +
        (claro
          ? "bg-white text-tinta hover:bg-campo"
          : "bg-petroleo text-white hover:bg-petroleo-escuro")
      }
    >
      <IconeWhatsapp />
      {texto}
    </a>
  );
}

export default function Pagina() {
  return (
    <>
      <header className="border-b border-linha bg-papel/95 backdrop-blur supports-[backdrop-filter]:bg-papel/80 sticky top-0 z-30">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3.5">
          <a href="#inicio" className="flex items-baseline gap-2 leading-none" aria-label="Parowski Sites e Sistemas, início">
            <span className="font-display text-[1.45rem] font-extrabold tracking-[-0.02em]">Parowski</span>
            <span className="hidden text-[0.95rem] text-ardosia sm:inline">sites e sistemas</span>
          </a>
          <nav aria-label="Seções" className="hidden items-center gap-7 text-[0.98rem] text-ardosia md:flex">
            <a href="#pacotes" className="hover:text-tinta">Pacotes</a>
            <a href="#como-funciona" className="hover:text-tinta">Como funciona</a>
            <a href="#projetos" className="hover:text-tinta">Projetos</a>
            <a href="#duvidas" className="hover:text-tinta">Dúvidas</a>
          </nav>
          <a
            href={linkWhatsapp(mensagemPadrao)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-tinta px-3.5 py-2 text-[0.95rem] font-semibold hover:bg-tinta hover:text-white"
          >
            <IconeWhatsapp className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </header>

      <main id="inicio">
        {/* Topo */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 md:grid-cols-[1.05fr_1fr] md:pt-20">
          <div>
            <h1 className="font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.03em] sm:text-[3.4rem] lg:text-[4rem]">
              Criação de sites e sistemas para negócios de Ponta Grossa
            </h1>
            <p className="mt-6 max-w-[46ch] text-[1.15rem] text-ardosia">
              Você fala direto com quem desenvolve. Seu site fica rápido, pronto para celular e
              configurado para aparecer no Google, com o WhatsApp a um toque de quem visita.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <BotaoWhatsapp />
              <a href="#pacotes" className="font-semibold text-tinta underline decoration-linha decoration-2 underline-offset-[6px] hover:decoration-petroleo">
                Ver pacotes e preços
              </a>
            </div>
            <p className="mt-8 text-[0.98rem] text-ardosia">
              Atendimento em Ponta Grossa, nos Campos Gerais e online para todo o Brasil.
            </p>
          </div>
          <PreviaNicho />
        </section>

        {/* Pacotes */}
        <section id="pacotes" className="scroll-mt-20 border-t border-linha bg-white">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="max-w-2xl">
              <h2 className="font-display text-[2.2rem] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[2.6rem]">
                Pacotes e preços
              </h2>
              <p className="mt-4 text-ardosia">
                Valores de partida. O preço final depende do que o seu projeto precisa, e você
                recebe tudo por escrito antes de começar.
              </p>
            </div>

            <ul className="mt-12 border-t-2 border-tinta">
              {pacotes.map((pacote) => (
                <li
                  key={pacote.nome}
                  className="grid gap-5 border-b border-linha py-8 md:grid-cols-[1fr_1.1fr_auto] md:gap-10"
                >
                  <div>
                    <h3 className="font-display text-[1.5rem] font-bold leading-tight">{pacote.nome}</h3>
                    <p className="mt-2 max-w-[38ch] text-ardosia">{pacote.resumo}</p>
                  </div>
                  <ul className="space-y-1.5 text-[1rem]">
                    {pacote.inclui.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden="true" className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-petroleo" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-row items-end justify-between gap-4 md:flex-col md:items-end md:justify-start md:text-right">
                    <p className="leading-none">
                      <span className="block text-[0.9rem] text-ardosia">a partir de</span>
                      <span className="font-display text-[2.1rem] font-extrabold tracking-[-0.02em]">
                        R$ {pacote.preco}
                      </span>
                      {pacote.periodo && <span className="text-ardosia">{pacote.periodo}</span>}
                    </p>
                    <a
                      href={linkWhatsapp(pacote.mensagem)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whitespace-nowrap text-[0.98rem] font-semibold text-petroleo underline decoration-2 underline-offset-4 hover:text-petroleo-escuro md:mt-3"
                    >
                      Pedir este pacote
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Como funciona */}
        <section id="como-funciona" className="scroll-mt-20 bg-campo">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <h2 className="font-display text-[2.2rem] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[2.6rem]">
              Como funciona
            </h2>
            <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {etapas.map((etapa, i) => (
                <li key={etapa.titulo} className="border-t-2 border-tinta pt-5">
                  <span className="font-display text-[2.4rem] font-extrabold leading-none text-petroleo">
                    {i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-[1.25rem] font-bold leading-snug">{etapa.titulo}</h3>
                  <p className="mt-2 text-ardosia">{etapa.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Projetos */}
        <section id="projetos" className="scroll-mt-20">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="max-w-2xl">
              <h2 className="font-display text-[2.2rem] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[2.6rem]">
                Sistemas que já estão no ar
              </h2>
              <p className="mt-4 text-ardosia">
                Além de sites, desenvolvo plataformas completas, com login, pagamentos e dados
                protegidos.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {projetos.map((projeto) => (
                <article key={projeto.nome} className="rounded-xl border border-linha bg-white p-7">
                  <p className="text-[0.95rem] font-semibold text-petroleo">{projeto.tipo}</p>
                  <h3 className="mt-1 font-display text-[1.6rem] font-bold">{projeto.nome}</h3>
                  <p className="mt-3 text-ardosia">{projeto.texto}</p>
                  {projeto.link && (
                    <a
                      href={projeto.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-block font-semibold text-tinta underline decoration-linha decoration-2 underline-offset-[6px] hover:decoration-petroleo"
                    >
                      Visitar {projeto.dominio}
                    </a>
                  )}
                </article>
              ))}
            </div>

            <div className="mt-16 grid gap-6 border-t border-linha pt-12 md:grid-cols-[auto_1fr] md:gap-12">
              <h2 className="font-display text-[1.6rem] font-bold leading-tight">Quem faz o seu site</h2>
              <p className="max-w-[62ch] text-[1.08rem]">
                Sou o {site.responsavel}, desenvolvedor full stack de Ponta Grossa. Cuido de cada
                projeto do começo ao fim, sem agência no meio. Você tem um contato só, que conhece
                o seu site por dentro e responde quando precisar.
              </p>
            </div>
          </div>
        </section>

        {/* Dúvidas */}
        <section id="duvidas" className="scroll-mt-20 border-t border-linha bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1fr_1.6fr]">
            <h2 className="font-display text-[2.2rem] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[2.6rem]">
              Dúvidas comuns
            </h2>
            <div className="border-t border-linha">
              {duvidas.map((d) => (
                <details key={d.p} className="group border-b border-linha">
                  <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-[1.1rem] font-semibold">
                    {d.p}
                    <span
                      aria-hidden="true"
                      className="font-display text-[1.6rem] font-bold leading-none text-petroleo transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="max-w-[60ch] pb-6 text-ardosia">{d.r}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Chamada final */}
        <section className="bg-tinta text-white">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <h2 className="max-w-[18ch] font-display text-[2.4rem] font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-[3.2rem]">
              Conte o que o seu negócio precisa
            </h2>
            <p className="mt-5 max-w-[50ch] text-[1.1rem] text-white/75">
              Responda pelo WhatsApp e receba uma proposta com escopo, prazo e valor. Orçamento
              sem compromisso.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <BotaoWhatsapp claro />
              <a href={`mailto:${site.email}`} className="text-white/85 underline decoration-white/30 underline-offset-4 hover:text-white">
                {site.email}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-tinta text-white/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-white/10 px-5 py-8 text-[0.95rem] sm:flex-row sm:justify-between">
          <p>
            {site.nome}, {site.cidade} – {site.estado}
          </p>
          <p>WhatsApp {site.whatsappExibicao}</p>
        </div>
      </footer>

      {/* Botão fixo no celular */}
      <a
        href={linkWhatsapp(mensagemPadrao)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-petroleo text-white shadow-lg md:hidden"
      >
        <IconeWhatsapp className="h-7 w-7" />
      </a>
    </>
  );
}
