"use client";

import { useState } from "react";

type Nicho = {
  id: string;
  rotulo: string;
  dominio: string;
  marca: string;
  chamada: string;
  apoio: string;
  botao: string;
  cor: string;
  fundo: string;
  itens: { nome: string; valor: string }[];
};

const nichos: Nicho[] = [
  {
    id: "barbearia",
    rotulo: "Barbearia",
    dominio: "barbearianavalha.com.br",
    marca: "Navalha Barbearia",
    chamada: "Corte marcado sem fila",
    apoio: "Escolha o horário e o barbeiro direto pelo celular.",
    botao: "Agendar horário",
    cor: "#b4472f",
    fundo: "#f6efe9",
    itens: [
      { nome: "Corte", valor: "R$ 45" },
      { nome: "Barba", valor: "R$ 35" },
      { nome: "Corte + barba", valor: "R$ 70" },
    ],
  },
  {
    id: "clinica",
    rotulo: "Clínica",
    dominio: "clinicabemviver.com.br",
    marca: "Clínica Bem Viver",
    chamada: "Cuidado perto de você",
    apoio: "Consultas, exames e retorno marcados em poucos toques.",
    botao: "Marcar consulta",
    cor: "#2f6fa8",
    fundo: "#eef4f9",
    itens: [
      { nome: "Clínico geral", valor: "Seg a sex" },
      { nome: "Fisioterapia", valor: "Seg a sáb" },
      { nome: "Nutrição", valor: "Ter e qui" },
    ],
  },
  {
    id: "restaurante",
    rotulo: "Restaurante",
    dominio: "cantinadavila.com.br",
    marca: "Cantina da Vila",
    chamada: "Almoço caseiro todo dia",
    apoio: "Cardápio do dia, delivery e reserva de mesa.",
    botao: "Ver cardápio",
    cor: "#7a6a1f",
    fundo: "#f6f3e6",
    itens: [
      { nome: "Prato do dia", valor: "R$ 28" },
      { nome: "Marmita grande", valor: "R$ 25" },
      { nome: "Buffet livre", valor: "R$ 42" },
    ],
  },
  {
    id: "oficina",
    rotulo: "Oficina",
    dominio: "autocenterrota.com.br",
    marca: "Auto Center Rota",
    chamada: "Seu carro em boas mãos",
    apoio: "Peça um orçamento com foto do problema pelo WhatsApp.",
    botao: "Pedir orçamento",
    cor: "#3d4f63",
    fundo: "#edf0f3",
    itens: [
      { nome: "Revisão completa", valor: "Orçamento" },
      { nome: "Troca de óleo", valor: "R$ 150" },
      { nome: "Alinhamento", valor: "R$ 80" },
    ],
  },
];

export function PreviaNicho() {
  const [ativo, setAtivo] = useState(nichos[0].id);
  const nicho = nichos.find((n) => n.id === ativo) ?? nichos[0];

  return (
    <div>
      <div role="tablist" aria-label="Escolha um tipo de negócio" className="mb-4 flex flex-wrap gap-2">
        {nichos.map((n) => {
          const selecionado = n.id === ativo;
          return (
            <button
              key={n.id}
              role="tab"
              aria-selected={selecionado}
              aria-controls="previa-site"
              onClick={() => setAtivo(n.id)}
              className={
                "rounded-full border px-4 py-1.5 text-[0.95rem] font-semibold transition-colors " +
                (selecionado
                  ? "border-tinta bg-tinta text-white"
                  : "border-linha bg-white text-ardosia hover:border-tinta hover:text-tinta")
              }
            >
              {n.rotulo}
            </button>
          );
        })}
      </div>

      <div
        id="previa-site"
        role="tabpanel"
        className="overflow-hidden rounded-xl border border-linha bg-white shadow-[0_24px_60px_-28px_rgba(20,35,61,0.45)]"
      >
        <div className="flex items-center gap-3 border-b border-linha bg-papel px-4 py-2.5">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#e0e5ea]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#e0e5ea]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#e0e5ea]" />
          </div>
          <div className="flex-1 truncate rounded-md bg-white px-3 py-1 text-[0.8rem] text-ardosia">
            {nicho.dominio}
          </div>
        </div>

        <div key={nicho.id} className="surgir" style={{ background: nicho.fundo }}>
          <div className="flex items-center justify-between px-5 py-3.5">
            <span className="font-display text-[1.05rem] font-bold" style={{ color: nicho.cor }}>
              {nicho.marca}
            </span>
            <span className="hidden gap-4 text-[0.8rem] text-ardosia sm:flex">
              <span>Início</span>
              <span>Serviços</span>
              <span>Contato</span>
            </span>
          </div>
          <div className="px-5 pb-6 pt-4">
            <p className="font-display text-[1.7rem] font-bold leading-[1.1] text-tinta sm:text-[2rem]">
              {nicho.chamada}
            </p>
            <p className="mt-2 max-w-[30ch] text-[0.95rem] text-ardosia">{nicho.apoio}</p>
            <span
              className="mt-4 inline-block rounded-lg px-4 py-2 text-[0.9rem] font-semibold text-white"
              style={{ background: nicho.cor }}
            >
              {nicho.botao}
            </span>
          </div>
          <ul className="grid grid-cols-3 border-t border-black/5 bg-white/60 text-[0.82rem]">
            {nicho.itens.map((item) => (
              <li key={item.nome} className="border-r border-black/5 px-4 py-3 last:border-r-0">
                <span className="block font-semibold text-tinta">{item.nome}</span>
                <span className="text-ardosia">{item.valor}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-3 text-[0.9rem] text-ardosia">
        Exemplos fictícios. O seu site é feito do zero, com a cara do seu negócio.
      </p>
    </div>
  );
}
