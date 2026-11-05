# Prompt — Implementar a Landing V1 da Milhas Plus (Next.js)

> Cole este prompt no agente de código (Claude Code, Cursor etc.) na raiz do novo projeto Next.js.
> Anexe junto o arquivo `v1-referencia.html` (layout aprovado) como referência visual.

---

## Contexto

Você vai implementar a nova landing page institucional da **Milhas Plus** (milhasplus.com.br), empresa de compra e venda de milhas aéreas e emissão de passagens. O site legado está em Nuxt (`~/Documents/code/milhas/00 legado/app-web-mp`) e está sendo migrado para **Next.js**. O layout aprovado é a **V1 — Landing**, anexada como `v1-referencia.html`. Ela é um protótipo com estilos inline e marcações de template (`{{ }}`, `<sc-for>`, `<x-dc>`). Use o arquivo **só como referência visual e de conteúdo**. Não copie a estrutura dele.

Objetivo: uma página **fiel ao layout**, com foco em conversão (CRO), SEO, acessibilidade e performance, e com código de nível profissional, fácil de manter.

## Antes de escrever código

1. Leia a estrutura atual do projeto (`package.json`, `app/`, configs) e me diga o que já existe.
2. Abra o legado só para **reaproveitar assets** (logo, mascote 3D, imagem 3D da mala amarela, foto da equipe, favicon) e conferir textos. Não migre código do Nuxt.
3. Apresente um plano curto, com estrutura de pastas, componentes e dependências, e **espere minha aprovação** antes de implementar.

## Stack e decisões

- **Next.js** na versão estável mais recente, com **App Router** e **TypeScript strict**.
- **Server Components por padrão.** Só vira Client Component o que precisa de estado no navegador. Nesta página, isso é apenas o seletor "Vender milhas / Comprar passagem" da seção "Como funciona".
- **Estilo:** Tailwind CSS v4, com os tokens da marca definidos em `@theme` no `globals.css`. Se o projeto já usar outra abordagem (CSS Modules, por exemplo), me avise antes de trocar.
- **Fontes:** `next/font/google` com Manrope (400–800) e JetBrains Mono (400, 500 e 700), expostas como variáveis CSS e com `display: swap`.
- **Imagens:** `next/image` sempre. A imagem do hero tem `priority` e `sizes` corretos. Exporte em AVIF ou WebP.
- **Ícones:** SVG inline como componentes em `components/icons/`. Não instale biblioteca de ícones só para estes ~15 ícones.
- **Sem dependências desnecessárias.** Nada de lib de animação, carrossel ou UI kit. Se achar que alguma é necessária, justifique antes de instalar.
- Separe o **conteúdo** (textos, listas, FAQ, links) do layout: crie `content/landing.ts` tipado. Os componentes recebem dados por props.

### Estrutura sugerida

```
app/
  layout.tsx            # fontes, metadata base, lang="pt-BR"
  page.tsx              # monta as seções (Server Component)
  globals.css           # @import "tailwindcss" + @theme com tokens
  opengraph-image.tsx   # (ou imagem estática em /public)
  sitemap.ts, robots.ts
components/
  layout/  TopBar, Header, Footer, WhatsAppFloat
  sections/ Hero, Stats, ValueProposition, HowItWorks, Services,
            Differentials, Testimonials, Faq, FinalCta
  how-it-works/FlowToggle.tsx   # "use client"
  ui/      Button (variants), SectionEyebrow, Container
  icons/
content/landing.ts
lib/whatsapp.ts         # monta links wa.me com mensagem pré-preenchida
```

## Design tokens (extraídos da V1)

| Token | Valor | Uso |
|---|---|---|
| `ink` | `#06201A` | Fundo do header/hero, texto principal |
| `forest` | `#0C3B30` | Seção "Como funciona", eyebrows em fundo claro |
| `forest-600` | `#12483B` | Placeholders e superfícies no escuro |
| `sun` | `#F4D23C` | CTA principal e destaques |
| `sun-700` | `#E8C52E` | Superfície amarela mais escura |
| `cream` | `#F7F4EC` | Fundo base |
| `white` | `#FFFFFF` | Cards e seções alternadas |
| `line` | `#ECE8DC` / `#DDD7C6` | Bordas e divisores |
| `mint` | `#DCE9E3` | Faixa de agências |
| `sand` | `#E9E4D6` / `#F1EEE3` | Placeholder de foto, botão do FAQ |
| `muted` | `#4D5E57` | Texto secundário no claro |
| `muted-dark` | `#B9CFC6` / `#CFE0D9` | Texto secundário no escuro |
| `success` | `#1E8A5A` | Status "Emitido" |

- **Tipografia:** títulos em Manrope 800 com `letter-spacing: -0.03em`. H1 com `clamp(42px, 5.6vw, 76px)` e H2 com `clamp(34px, 4vw, 54px)`. Os eyebrows usam JetBrains Mono 12px em caixa alta com tracking de 0.1em, no formato "01 — POR QUE MILHAS PLUS".
- **Raios:** botões `999px`; cards de 22 a 28px; CTA final 36px.
- **Container:** `max-width: 1240px` com padding lateral de 24px. As seções têm padding vertical de 120px no desktop. Reduza proporcionalmente no mobile.

## Seções (em ordem), com conteúdo

Use os textos abaixo. Itens entre `[colchetes]` são **placeholders**: renderize de forma neutra e liste todos no fim da entrega. **Não invente depoimentos, números, avaliações, horários ou resultados comerciais.**

1. **Top bar** (fundo `ink`, mono 12px): à esquerda, um ponto amarelo e o texto `[Horário de atendimento — confirmar]`. O layout dizia "seg a sex, 9h–18h", mas esse horário não foi confirmado. À direita, `CNPJ 38.857.636/0001-73 · Empresa cadastrada` (só no desktop).
2. **Header:** logo M+ e "Milhas **Plus**", e a navegação com âncoras (Como funciona, Serviços, Depoimentos, Dúvidas, Agências). O CTA é "Vender minhas milhas". No mobile, monte um menu acessível (botão com `aria-expanded`, foco preso e fechamento com `Esc`). Esse menu vira um segundo Client Component; avise se for criar.
3. **Hero** (fundo `ink`):
   - Selo "NOVO · Pagamento via Pix no mesmo dia da negociação".
   - H1: "Suas milhas valem dinheiro. / **A gente prova isso hoje.**" (a segunda linha em `sun`).
   - Subtítulo: "Venda seus pontos com cotação transparente e Pix no mesmo dia da negociação — ou emita passagens nacionais e internacionais com milhas, no seu nome." Este texto substitui "receba em minutos" e "bem menos do que no site da companhia", que são promessas ainda não validadas.
   - CTAs: "Cotar minhas milhas agora" (principal) e "Quero uma passagem" (secundário). Os dois abrem o WhatsApp com mensagem pré-preenchida.
   - Selos: "Negociação segura", "Pix no mesmo dia" e "Gente de verdade no WhatsApp".
   - Visual: foto `[Janela do avião · asa · pôr do sol]`, um cartão de embarque decorativo (POA → LIS, Pagamento: Milhas, Economia: `[X%]`, Status: Emitido) e o chip "Pix recebido". O cartão é **ilustrativo**: use `aria-hidden` ou uma descrição adequada, e não mostre percentual inventado.
4. **Números:** um card branco sobreposto ao hero (`margin-top` negativo) com **3 colunas**: +25 bi de milhas negociadas, +100 mil clientes atendidos e +3 mil agências parceiras. A 4ª coluna do protótipo está vazia e deve ser removida. Use `<dl>`/`<dt>`/`<dd>` ou uma lista semântica.
5. **Proposta de valor ("01 — POR QUE MILHAS PLUS"):**
   - H2: "Pontos parados perdem valor. A gente transforma em dinheiro ou em viagem."
   - Texto de apoio do layout.
   - 3 cards com ícone: "Dinheiro na conta, rápido", "Passagens com milhas" e "Cotação sem letra miúda".
   - Revise a descrição do segundo card ("abaixo da tarifa pública"), que é uma promessa a validar.
6. **Como funciona ("02"):** fundo `forest`. H2: "Do saldo parado ao Pix em quatro passos."
   - O **FlowToggle** (client) alterna entre 4 passos de venda e 4 passos de compra (textos no protótipo). Use `aria-pressed` nos botões, ou o padrão completo de tabs com `tablist`/`tabpanel` e setas do teclado, e não um meio-termo. Se for tabs, faça bem feito.
   - Embaixo vem a nota "Novo no mercado de milhas?" e um CTA que muda conforme o fluxo ("Cotar minhas milhas" / "Cotar minha passagem"). O texto da nota fala de regras dos programas e precisa de `[validação jurídica]`.
   - Renderize os passos no servidor e passe os dois conjuntos para o toggle, sem buscar dados no cliente.
7. **Serviços ("03"):**
   - Card grande amarelo "Vender milhas", com a lista de benefícios, o CTA "Fazer cotação grátis" e a imagem 3D da mala (do legado).
   - Coluna com dois cards: "Comprar passagem com milhas" (escuro) e "Passagem com negociação" (branco).
   - Faixa B2B de agências (`mint`) com o CTA "Quero ser parceiro".
   - Os CTAs de cada serviço abrem o WhatsApp com uma mensagem específica para o serviço.
8. **Diferenciais ("04"):**
   - Texto com o CTA "Falar com um especialista".
   - Tabela comparativa "Milhas Plus × Venda informal". Use `<table>` real, com `caption`, `scope` e scroll horizontal no mobile.
   - 3 pilares (do site atual): Pagamento instantâneo, Transparência nas cotações e Atendimento humanizado.
   - A coluna "Venda informal" é uma afirmação comparativa: marque como `[validar com marketing/jurídico]`.
9. **Depoimentos ("05"):**
   - Depoimento em destaque da **Stéfani Bays (Digital influencer)**, com o **texto integral e literal**: "Uma das coisas que mais amo é viajar, conhecer novos lugares, culturas e viver aventuras ao redor do mundo. Mas, como uma boa viajante, também gosto de economizar e aproveitar ao máximo as oportunidades. E sabe qual é o meu segredo? Antes de qualquer viagem, eu faço questão de dar uma passadinha na Milhas Plus!"
   - Dois depoimentos `[placeholder]`.
   - Selo de nota `[nota] · [plataforma] · [nº avaliações]`.
   - Foto da equipe (do legado) e o card amarelo "Por trás de cada emissão tem uma pessoa do nosso time."
   - Use `<figure>`, `<blockquote>` e `<figcaption>`. Se os placeholders não forem preenchidos até a publicação, esconda-os com uma flag no conteúdo.
10. **FAQ ("06"):** `<details>`/`<summary>` nativos, sem JavaScript, renderizados no servidor. Use as 6 perguntas do protótipo, com as respostas marcadas `[Validar com o jurídico]`, `[Informar prazo]` e `[Confirmar lista]`. Ao lado, o CTA de WhatsApp "(51) 99444-0744".
11. **CTA final** (card `ink`): eyebrow "BOAS-VINDAS A BORDO", H2 "Você pediu, a Milhas Plus **emitiu.**", texto, dois CTAs e a linha "ou chame no WhatsApp · (51) 99444-0744".
12. **Footer:** logo, descrição, redes sociais (Instagram @milhas.plus e os demais com `[link]`), colunas Serviços / Empresa / Legal, o copyright com CNPJ e o selo `[Cadastur / Reclame Aqui]`.
13. **Botão flutuante de WhatsApp:** fixo no canto inferior direito, com `aria-label`, alvo de 60px e sem cobrir conteúdo importante no mobile (respeite `env(safe-area-inset-bottom)`).

## Conversão (CRO)

- Centralize os links em `lib/whatsapp.ts`, com uma função `whatsappLink(intent: 'vender' | 'passagem' | 'negociacao' | 'agencia' | 'geral')` que gera `https://wa.me/5551994440744?text=...` com a mensagem certa para cada intenção.
- Todos os CTAs de conversão devem ter `data-cta="<secao>-<intencao>"` para medir cliques depois (GA4/GTM). Ainda não instale analytics; deixe um ponto de extensão, como um handler de clique delegado opcional.
- Links externos usam `target="_blank" rel="noopener noreferrer"`.
- Remova as âncoras mortas do protótipo (`#cotar` e `#passagens` apontando para cards). Cada CTA deve levar a uma ação real.

## SEO

- `metadata` no `layout.tsx` e no `page.tsx`: title, description, `alternates.canonical`, Open Graph (com imagem 1200×630) e Twitter card.
- Uma única `<h1>` e hierarquia correta de `h2`/`h3`. Use `lang="pt-BR"`.
- JSON-LD de `Organization` (nome, URL, logo, `sameAs` com o Instagram, contato do WhatsApp). Só adicione `FAQPage` depois que as respostas forem validadas, e deixe isso preparado mas desligado.
- Crie `sitemap.ts` e `robots.ts`.
- Use texto real e não imagem para todo conteúdo relevante.

## Acessibilidade (WCAG 2.2 AA)

- Contraste mínimo de 4.5:1 para texto. Confira principalmente os textos `muted` sobre `cream` e `muted-dark` sobre `ink`.
- Foco visível em todos os elementos interativos, com `:focus-visible` em contorno amarelo no escuro e escuro no claro.
- Alvos de toque de no mínimo 44×44px.
- Link "Pular para o conteúdo" no topo.
- `prefers-reduced-motion` desativa qualquer transição não essencial.
- Imagens decorativas com `alt=""` e imagens informativas com `alt` descritivo.
- Navegação 100% por teclado, inclusive no menu mobile e no FlowToggle.

## Performance (metas)

- Lighthouse mobile ≥ 95 em Performance, Acessibilidade, Boas práticas e SEO.
- LCP < 2,5s (a imagem do hero com `priority`), CLS < 0,05 (dimensões definidas em todas as imagens e fontes via `next/font`) e INP < 200ms.
- O JavaScript enviado ao cliente deve se limitar praticamente ao FlowToggle e ao menu mobile.
- Gere a página de forma estática (SSG), sem `fetch` em runtime.

## Responsividade

- Mobile-first, validado em 360, 390, 768, 1024, 1280 e 1440px.
- No mobile: hero em coluna única com o visual abaixo do texto; números em coluna única (ou 3 compactos); cards de serviço empilhados; tabela com scroll horizontal; o chip "Pix recebido" some (como no protótipo).
- Nenhuma rolagem horizontal da página.

## Qualidade de código

- Componentes pequenos, nomeados pelo domínio (`HowItWorks`, `ServiceCard`) e com props tipadas.
- Botões e links usam um único componente `Button` com variantes (`primary`, `secondary`, `dark`, `ghost`) e `asChild` ou `href`. Não repita classes longas.
- Não deixe estilos inline nem cores hardcoded fora dos tokens.
- ESLint e Prettier passando. Rode `tsc --noEmit` e `next build` sem erros nem warnings.

## Entrega

1. Implemente por etapas: base (tokens, fontes, layout, Header/Footer), depois as seções do topo para baixo. Pare para eu revisar depois do Hero + Números.
2. Ao final, me entregue:
   - O resumo da estrutura criada.
   - A **lista de todos os placeholders e itens a validar** (textos jurídicos, prazos, horário, lista de programas, nota de avaliação, depoimentos, links de redes, imagens).
   - Os resultados de `next build` e do Lighthouse mobile.
   - Os pontos em que você divergiu do layout e por quê.
