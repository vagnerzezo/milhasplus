# Milhas Plus — site institucional

Site da [Milhas Plus](https://milhasplus.com.br), empresa de compra e venda de milhas aéreas e emissão de passagens. Substitui o site legado em Nuxt.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router) com React 19 e TypeScript
- Tailwind CSS 4
- Swiper nos carrosséis
- ESLint e Prettier

## Como rodar

Requer Node.js 20.9 ou superior.

```bash
npm install
npm run dev
```

O site abre em <http://localhost:3000>. Não é preciso configurar variáveis de ambiente.

## Scripts

| Comando                | O que faz                              |
| ---------------------- | -------------------------------------- |
| `npm run dev`          | Servidor de desenvolvimento            |
| `npm run build`        | Build de produção                      |
| `npm run start`        | Serve o build de produção              |
| `npm run lint`         | Verifica o código com o ESLint         |
| `npm run typecheck`    | Verifica os tipos com o TypeScript     |
| `npm run format`       | Formata os arquivos com o Prettier     |
| `npm run format:check` | Confere a formatação sem alterar nada  |

## Estrutura

```text
app/          Rotas, layout, estilos globais, sitemap e robots
components/   Componentes, agrupados por seção ou página
  icons/      Ícones SVG do projeto
  ui/         Componentes básicos (botão, link, container...)
content/      Textos e dados de cada página
lib/          Configuração do site, metadata, WhatsApp e formatação
public/       Imagens e arquivos da marca
```

## Páginas

| Rota                                          | Conteúdo                          |
| --------------------------------------------- | --------------------------------- |
| `/`                                           | Landing                           |
| `/negociar-milhas`                            | Venda de milhas                   |
| `/comprar-milhas`                             | Passagens com milhas              |
| `/agencias`                                   | Agências                          |
| `/parceiros`                                  | Parceiros                         |
| `/sobre-nos`                                  | Sobre a empresa                   |
| `/perguntas-frequentes`                       | Perguntas frequentes              |
| `/contato`                                    | Contato                           |
| `/guias-praticos/redirecionamento-de-emails`  | Guia de redirecionamento de e-mail |
| `/politica-de-privacidade`                    | Política de privacidade           |
| `/termos-e-condicoes`                         | Termos e condições                |

`/guias-praticos` redireciona para o guia de e-mails enquanto não houver uma listagem (veja `next.config.ts`).

## Como editar

- **Textos e dados:** ficam em `content/`, um arquivo por página. O que é compartilhado, como menu e rodapé, está em `content/site.ts`.
- **WhatsApp e Telegram:** os contatos e as mensagens prontas de cada intenção ficam em `lib/whatsapp.ts`.
- **Ícones:** são SVGs próprios em `components/icons/index.tsx`, sem biblioteca externa. Para adicionar um, crie outra função nesse arquivo.
- **SEO:** os dados gerais estão em `lib/site.ts`, e as páginas internas usam o helper de `lib/metadata.ts`.

## Formulários

Não há backend. Os formulários validam os campos e abrem o WhatsApp com a mensagem pronta, por meio de `sendLead`, em `components/forms/LeadForm.tsx`. Se um backend for criado, esse é o ponto a alterar.

## Pendências de conteúdo

Alguns textos ainda aguardam confirmação e estão marcados com comentários no código. Para listá-los:

```bash
grep -rnE "VALIDAR|VALIDAÇÃO" content lib
```

## Observação sobre o Next.js

Esta versão do Next.js tem mudanças em relação às anteriores. Antes de alterar código do framework, consulte a documentação em `node_modules/next/dist/docs/` (veja também `AGENTS.md`).
