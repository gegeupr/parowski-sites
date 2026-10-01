# Parowski Sites e Sistemas

Site da Parowski Sites e Sistemas, feito em Next.js 15 + Tailwind CSS 4.

## Rodar no computador

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Onde mudar as coisas

Quase tudo fica em `lib/site.ts`:
- **url**: troque pelo seu domínio quando registrar (usado no Google, sitemap e compartilhamento)
- **whatsapp**: número com 55 + DDD, só dígitos
- **pacotes**: nomes, preços, o que inclui e a mensagem que abre no WhatsApp

Textos de "Como funciona", projetos e dúvidas ficam no topo de `app/page.tsx`.
Os exemplos da prévia (barbearia, clínica etc.) ficam em `components/PreviaNicho.tsx`.

## Publicar na Vercel

1. Suba a pasta para um repositório novo no GitHub.
2. Na Vercel, clique em **Add New → Project** e importe o repositório. Não precisa mudar nenhuma configuração.
3. Em **Settings → Domains**, adicione seu domínio (ex.: parowski.com.br) e siga as instruções de DNS no Registro.br.
4. Atualize o campo `url` em `lib/site.ts` com o domínio final e faça um novo deploy.

Depois de publicado, cadastre o site no Google Search Console e envie o endereço `/sitemap.xml`.
