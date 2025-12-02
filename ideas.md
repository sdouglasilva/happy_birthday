# Um Registro Bonito – Planejamento Visual & Sugestões de Conteúdo

## Visão Geral
Um site minimalista e elegante que funciona como presente de aniversário, transmitindo leveza, maturidade, carinho sutil e conexão especial, sem romantismo excessivo ou pressão.

---

## 🎨 Design Philosophy Escolhida: **Minimalist Elegance + Editorial Refinement**

Este projeto segue uma abordagem de **elegância editorial minimalista**, inspirada em revistas de arte contemporânea e design de produtos premium (Apple). A filosofia enfatiza:

- **Espaço em branco como protagonista** – Respira, não sufoca
- **Tipografia como linguagem visual** – Hierarquia clara e propositada
- **Movimento sutil e intencional** – Animações que comunicam, não distraem
- **Paleta restrita e harmônica** – Azul pastel + Rosa bebê + Neutros
- **Conteúdo fotografado como arte** – Galeria como experiência visual

---

## 🎯 Sugestões de Conteúdo

### 1. Hero Section – Frase Principal

**Opção A (Mais Poética):**
> "Um registro bonito do que estamos vivendo."

**Opção B (Mais Direta):**
> "Obrigada(o) por estar aqui."

**Opção C (Mais Reflexiva):**
> "Leveza, presença e sinceridade."

**Recomendação:** Opção A – Equilibra poesia com leveza, sem ser dramática.

---

### 2. Bloco de Texto Emocional (Seção Central)

**Sugestão Principal:**

> Obrigada(o) pelo último mês.
>
> Eu gosto da gente nesse ritmo leve, presente e sincero.
>
> Isso aqui é só um registro bonito do que estamos vivendo — sem pressa, sem cobrança, só carinho mesmo.

**Variação Alternativa (Mais Curta):**

> Eu gosto da gente assim.
>
> Presente. Leve. Sincero.
>
> Sem pressa. Sem cobrança.

---

### 3. Rodapé – Frase Interna

**Opção A:**
"Feliz aniversário. Que venham muitos momentos assim."

**Opção B:**
"Que a gente continue nesse ritmo."

**Opção C:**
"Obrigada(o) por ser você."

**Recomendação:** Opção A – Mantém o tom celebrativo sem ser pesado.

---

## 🎨 Paleta de Cores

| Elemento | Cor | Código | Uso |
|----------|-----|--------|-----|
| Azul Pastel (Primário) | Azul Claro | `#C8E6F5` | Degradê hero, acentos |
| Rosa Bebê (Secundário) | Rosa Suave | `#F5D5E3` | Degradê hero, acentos |
| Fundo Principal | Branco Puro | `#FFFFFF` | Background geral |
| Texto Primário | Cinza Escuro | `#2C3E50` | Títulos e corpo |
| Texto Secundário | Cinza Médio | `#7F8C8D` | Subtítulos e labels |
| Divisor | Cinza Muito Claro | `#F0F0F0` | Linhas e separadores |

---

## 🔤 Tipografia

| Elemento | Fonte | Peso | Tamanho |
|----------|-------|------|---------|
| Títulos (H1, H2) | Playfair Display | 700 | 48px (desktop), 32px (mobile) |
| Subtítulos | Playfair Display | 400 | 24px (desktop), 18px (mobile) |
| Corpo | Inter | 400 | 16px |
| Corpo Pequeno | Inter | 400 | 14px |
| Ênfase | Inter | 500 | 16px |

---

## 📐 Layout & Estrutura

### Hero Section
- **Altura:** 60vh (viewport height)
- **Fundo:** Degradê linear (azul pastel → rosa bebê)
- **Conteúdo:** Centralizado, com animação fade-in + slide-up
- **Espaçamento:** Muito generoso (padding: 80px 40px)

### Galeria de Fotos
- **Grid:** 3 colunas (desktop), 2 colunas (tablet), 1 coluna (mobile)
- **Gap:** 24px entre imagens
- **Imagens:** Proporção 1:1 (quadradas), bordas arredondadas suaves (8px)
- **Efeito Hover:** Zoom 2%, sombra suave
- **Animação:** Fade-in ao rolar (staggered)

### Bloco de Texto Emocional
- **Largura Máxima:** 600px (centrado)
- **Padding:** 80px 40px
- **Tipografia:** Inter 16px, line-height 1.8
- **Espaçamento:** Entre parágrafos 24px
- **Animação:** Fade-in ao rolar

### Rodapé
- **Altura:** Mínima, elegante
- **Texto:** Centralizado, Inter 14px, cor cinza médio
- **Padding:** 40px 20px
- **Borda Superior:** Linha fina cinza muito claro

---

## ✨ Animações & Interações

### Fade-in
- **Duração:** 800ms
- **Easing:** ease-out
- **Delay:** Staggered (100ms entre elementos)

### Slide-up
- **Duração:** 1000ms
- **Easing:** cubic-bezier(0.34, 1.56, 0.64, 1) (suave bounce)
- **Distância:** 40px

### Hover em Fotos
- **Zoom:** 1.02x (2%)
- **Duração:** 400ms
- **Sombra:** Adiciona sombra suave (0 10px 30px rgba(0,0,0,0.1))

### Scroll Trigger
- **Biblioteca:** AOS (Animate On Scroll)
- **Offset:** 100px
- **Duração:** 800ms

---

## 🎯 Componentes Principais

### 1. **Header/Navigation**
- Minimalista, sem menu
- Logo/Título do site no canto superior esquerdo
- Scroll suave

### 2. **Hero Section**
- Degradê dinâmico
- Texto centralizado com animação
- Sem CTA (call-to-action) agressivo

### 3. **Gallery Grid**
- Cards com imagem
- Sem texto sobre a imagem
- Efeito hover delicado

### 4. **Text Block**
- Tipografia grande e legível
- Espaçamento generoso
- Alinhamento centralizado

### 5. **Footer**
- Minimalista
- Sem links ou redes sociais pesadas
- Apenas uma frase

---

## 📱 Responsividade

### Desktop (1024px+)
- Hero: 60vh, texto 48px
- Galeria: 3 colunas, gap 24px
- Bloco de texto: 600px max-width
- Padding geral: 40px

### Tablet (768px - 1023px)
- Hero: 50vh, texto 36px
- Galeria: 2 colunas, gap 20px
- Bloco de texto: 90% width
- Padding geral: 30px

### Mobile (< 768px)
- Hero: 40vh, texto 28px
- Galeria: 1 coluna, gap 16px
- Bloco de texto: 90% width, padding 20px
- Padding geral: 20px

---

## 🔧 Stack Técnico

- **HTML5** – Semântico e acessível
- **CSS3** – Custom properties, gradientes, animações
- **JavaScript** – Vanilla JS + AOS para scroll animations
- **Fonte:** Google Fonts (Playfair Display + Inter)
- **Hospedagem:** GitHub Pages (pronto para deploy)

---

## 📋 Checklist de Desenvolvimento

- [ ] Estrutura HTML semântica
- [ ] CSS com variáveis de cores e tipografia
- [ ] Importar fontes do Google Fonts
- [ ] Hero section com degradê e animação
- [ ] Galeria de fotos com grid responsivo
- [ ] Bloco de texto emocional
- [ ] Rodapé minimalista
- [ ] Animações com AOS
- [ ] Responsividade testada (mobile, tablet, desktop)
- [ ] Performance otimizada
- [ ] Pronto para GitHub Pages

---

## 🎁 Notas Finais

Este site é um **presente de aniversário invisível** – não é uma declaração de amor, mas um registro bonito de um momento especial. A estética deve transmitir:

✨ **Elegância** – Sem ser formal demais
💝 **Carinho** – Sem ser romântico demais
🌬️ **Leveza** – Sem ser vago demais
🤝 **Conexão** – Sem ser pressão demais

Quando a pessoa ver o site, deve sentir: *"Existe algo diferente aqui — é especial, mas sem cobrança."*
