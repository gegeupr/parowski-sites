import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/lib/site";

const descricao =
  "Criação de sites, landing pages e sistemas web em Ponta Grossa e região dos Campos Gerais. Atendimento direto com o desenvolvedor, orçamento pelo WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Parowski Sites e Sistemas | Criação de sites em Ponta Grossa",
    template: "%s | Parowski Sites e Sistemas",
  },
  description: descricao,
  keywords: [
    "criação de sites Ponta Grossa",
    "site para empresa Ponta Grossa",
    "landing page",
    "desenvolvedor de sites Campos Gerais",
    "sistema de agendamento",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.nome,
    title: "Parowski Sites e Sistemas",
    description: descricao,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#14233d",
};

const dadosEstruturados = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.nome,
  description: descricao,
  url: site.url,
  telephone: "+" + site.whatsapp,
  email: site.email,
  founder: { "@type": "Person", name: site.responsavel },
  address: {
    "@type": "PostalAddress",
    addressLocality: site.cidade,
    addressRegion: site.estado,
    addressCountry: "BR",
  },
  areaServed: [
    { "@type": "City", name: "Ponta Grossa" },
    { "@type": "AdministrativeArea", name: "Campos Gerais, Paraná" },
  ],
  priceRange: "R$ 500 - R$ 5.000",
  sameAs: [site.github],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dadosEstruturados) }}
        />
      </body>
    </html>
  );
}
