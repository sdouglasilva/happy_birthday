# Um Registro Bonito 🎁

Um site minimalista e elegante criado como presente de aniversário, transmitindo leveza, maturidade, carinho sutil e conexão especial.

## 🎨 Design & Estética

**Paleta de Cores:**
- Azul Pastel: `#C8E6F5`
- Rosa Bebê: `#F5D5E3`
- Branco Puro: `#FFFFFF`
- Cinza Escuro: `#2C3E50`
- Cinza Médio: `#7F8C8D`

**Tipografia:**
- Títulos: Playfair Display (Google Fonts)
- Corpo: Inter (Google Fonts)

**Inspiração:**
- Apple aesthetic
- Editorial magazine
- Galerias de arte contemporânea

## 📋 Estrutura do Site

### 1. Hero Section
Frase principal com degradê azul pastel → rosa bebê
- Animação: Fade-in + slide-up suave
- Altura: 60vh (responsiva)

### 2. Galeria de Fotos
Grid minimalista com 15 imagens placeholder
- Desktop: 3 colunas
- Tablet: 2 colunas
- Mobile: 1 coluna
- Efeito hover: Zoom 2% + sombra suave
- Animação: Fade-in ao rolar (AOS)

### 3. Bloco de Texto Emocional
Mensagem de carinho, leveza e sinceridade
- Tipografia grande e legível
- Espaçamento generoso
- Animação: Fade-in ao rolar

### 4. Rodapé
Frase simples e interna
- Sem links ou redes sociais pesadas
- Apenas uma mensagem

## 🚀 Como Usar

### Substituir Imagens da Galeria

Abra o arquivo `client/src/App.tsx` e localize a seção `generateGalleryItems()`:

```javascript
const images = [
  'https://seu-url-da-imagem-1.jpg',
  'https://seu-url-da-imagem-2.jpg',
  // ... adicione mais URLs
];
```

Substitua os URLs do Unsplash pelos URLs das suas próprias fotos.

### Personalizar Conteúdo de Texto

**Hero Section (frase principal):**
```jsx
<h2 className="hero-title">
  Sua frase aqui
</h2>
```

**Bloco de Texto Emocional:**
```jsx
<div className="text-block">
  <p>Seu parágrafo 1</p>
  <p>Seu parágrafo 2</p>
  <p>Seu parágrafo 3</p>
</div>
```

**Rodapé:**
```jsx
<p className="footer-text">Sua frase para o rodapé</p>
```

### Personalizar Cores

Abra o arquivo `client/src/App.tsx` e localize a seção `:root` dentro da tag `<style>`:

```css
:root {
  --color-primary-blue: #C8E6F5;    /* Altere aqui */
  --color-primary-pink: #F5D5E3;    /* Altere aqui */
  /* ... outras cores */
}
```

### Personalizar Tipografia

As fontes estão importadas do Google Fonts no arquivo `client/src/App.tsx`. Para mudar:

1. Localize a seção de importação de fontes
2. Substitua os nomes das fontes
3. Atualize as variáveis CSS correspondentes

## 🛠️ Desenvolvimento

### Instalar Dependências
```bash
pnpm install
```

### Iniciar Servidor de Desenvolvimento
```bash
pnpm dev
```

O site estará disponível em `http://localhost:3000`

### Build para Produção
```bash
pnpm build
```

## 📱 Responsividade

O site é totalmente responsivo:
- **Desktop (1024px+):** 3 colunas na galeria, hero 60vh
- **Tablet (768px - 1023px):** 2 colunas na galeria, hero 50vh
- **Mobile (< 768px):** 1 coluna na galeria, hero 40vh

## ✨ Animações

- **Fade-in:** Duração 800ms, easing ease-out
- **Slide-up:** Duração 1000ms, easing cubic-bezier suave
- **Hover em Fotos:** Zoom 2%, duração 400ms
- **Scroll Trigger:** AOS (Animate On Scroll), offset 100px

## 🌐 Deploy no GitHub Pages

1. Crie um repositório no GitHub
2. Faça push do código
3. Vá para Settings → Pages
4. Selecione a branch `main` e pasta `/docs`
5. O site estará disponível em `https://seu-usuario.github.io/seu-repo`

## 📦 Tecnologias

- **HTML5** – Semântico e acessível
- **CSS3** – Custom properties, gradientes, animações
- **JavaScript** – Vanilla JS + AOS para scroll animations
- **React 19** – Framework (opcional, pode ser removido)
- **Tailwind CSS 4** – Utility-first CSS (incluído no template)

## 🎯 Checklist de Personalização

- [ ] Substituir imagens da galeria
- [ ] Personalizar frase do hero
- [ ] Personalizar bloco de texto emocional
- [ ] Personalizar frase do rodapé
- [ ] Ajustar cores (se desejado)
- [ ] Testar em mobile, tablet e desktop
- [ ] Deploy no GitHub Pages ou seu servidor

## 💡 Dicas

1. **Imagens:** Use imagens de alta qualidade (mínimo 500x500px)
2. **Proporção:** Mantenha imagens quadradas (1:1) para melhor visual
3. **Cores:** A paleta atual é suave e elegante – evite cores muito vibrantes
4. **Conteúdo:** Mantenha textos curtos e significativos
5. **Animações:** As animações são sutis – não adicione muitas mais

## 📄 Licença

Este projeto é livre para uso pessoal. Sinta-se à vontade para modificar e compartilhar! 💝

---

**Criado com carinho e elegância minimalista.** ✨

Um registro bonito do que estamos vivendo — sem pressa, sem cobrança, só carinho mesmo.
