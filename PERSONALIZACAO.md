# 🎨 Guia de Personalização Rápida

Este guia mostra como personalizar o site rapidamente sem precisar mexer em código complexo.

## 1️⃣ Substituir Imagens da Galeria

**Arquivo:** `client/src/App.tsx`

Procure pela função `generateGalleryItems()` (por volta da linha 44) e localize:

```javascript
const images = [
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=500&fit=crop',
  // ... mais imagens
];
```

**Para substituir:**
1. Pegue o URL de suas fotos (ex: Google Photos, Imgur, etc)
2. Substitua os URLs do Unsplash pelos seus
3. Salve o arquivo
4. O site atualizará automaticamente

**Dica:** Use URLs diretos de imagens (terminados em `.jpg`, `.png`, etc)

---

## 2️⃣ Mudar a Frase do Hero (Topo)

**Arquivo:** `client/src/App.tsx`

Procure por (por volta da linha 350):

```jsx
<h2 className="hero-title">
  Um registro bonito do que estamos vivendo.
</h2>
```

**Para substituir:**
```jsx
<h2 className="hero-title">
  Sua frase aqui
</h2>
```

---

## 3️⃣ Mudar o Bloco de Texto Emocional (Meio)

**Arquivo:** `client/src/App.tsx`

Procure por (por volta da linha 375):

```jsx
<div className="text-block">
  <p>Obrigada(o) pelo último mês.</p>
  <p>Eu gosto da gente nesse ritmo leve, presente e sincero.</p>
  <p>Isso aqui é só um registro bonito do que estamos vivendo — sem pressa, sem cobrança, só carinho mesmo.</p>
</div>
```

**Para substituir:**
```jsx
<div className="text-block">
  <p>Seu parágrafo 1</p>
  <p>Seu parágrafo 2</p>
  <p>Seu parágrafo 3</p>
</div>
```

---

## 4️⃣ Mudar a Frase do Rodapé (Fim)

**Arquivo:** `client/src/App.tsx`

Procure por (por volta da linha 390):

```jsx
<p className="footer-text">Feliz aniversário. Que venham muitos momentos assim.</p>
```

**Para substituir:**
```jsx
<p className="footer-text">Sua frase aqui</p>
```

---

## 5️⃣ Mudar as Cores

**Arquivo:** `client/src/App.tsx`

Procure pela seção `:root {` dentro da tag `<style>` (por volta da linha 110):

```css
:root {
  --color-primary-blue: #C8E6F5;    /* Azul pastel */
  --color-primary-pink: #F5D5E3;    /* Rosa bebê */
  --color-white: #FFFFFF;
  --color-dark: #2C3E50;
  --color-gray-medium: #7F8C8D;
  --color-gray-light: #F0F0F0;
  --color-gray-lighter: #F8F9FA;
}
```

**Para substituir:**
Mude os valores hexadecimais (ex: `#C8E6F5`) para suas cores desejadas.

**Cores sugeridas:**
- Azul pastel: `#B3D9E8`, `#A8D8E8`, `#C8E6F5`
- Rosa bebê: `#F5D5E3`, `#F0C8D8`, `#E8C4D4`
- Verde suave: `#D4E8D4`, `#C8E8D4`
- Roxo suave: `#E0D4E8`, `#DCC8E8`

---

## 6️⃣ Mudar o Título do Site

**Arquivo:** `client/src/App.tsx`

Procure por (por volta da linha 320):

```jsx
<h1 className="logo">Um Registro Bonito</h1>
```

**Para substituir:**
```jsx
<h1 className="logo">Seu Título Aqui</h1>
```

---

## 7️⃣ Mudar a Tipografia

**Arquivo:** `client/src/App.tsx`

Procure pela seção de Google Fonts (por volta da linha 115):

```css
--font-display: 'Playfair Display', serif;
--font-body: 'Inter', sans-serif;
```

**Fontes alternativas recomendadas:**
- Display (títulos): `Playfair Display`, `Cormorant Garamond`, `Lora`, `Merriweather`
- Body (corpo): `Inter`, `Lato`, `Poppins`, `Montserrat`

**Para mudar:**
1. Encontre a fonte desejada em [Google Fonts](https://fonts.google.com)
2. Substitua o nome da fonte
3. Atualize a variável CSS

---

## ✅ Checklist de Personalização

- [ ] Substituir imagens da galeria
- [ ] Mudar frase do hero
- [ ] Mudar bloco de texto emocional
- [ ] Mudar frase do rodapé
- [ ] Mudar cores (opcional)
- [ ] Mudar tipografia (opcional)
- [ ] Testar no navegador
- [ ] Fazer deploy

---

## 🚀 Como Testar as Mudanças

1. Abra o terminal na pasta do projeto
2. Execute: `pnpm dev`
3. Abra `http://localhost:3000` no navegador
4. As mudanças aparecerão automaticamente (hot reload)

---

## 💾 Como Salvar e Fazer Deploy

1. Salve o arquivo `client/src/App.tsx`
2. Faça commit: `git add . && git commit -m "Personalizar site"`
3. Faça push: `git push origin main`
4. O site será atualizado automaticamente (se usando GitHub Pages)

---

## 🆘 Precisa de Ajuda?

Se algo não funcionar:
1. Verifique se salvou o arquivo
2. Reinicie o servidor (`pnpm dev`)
3. Limpe o cache do navegador (Ctrl+Shift+Delete)
4. Verifique se não há erros de sintaxe (aspas, parênteses, etc)

---

**Divirta-se personalizando! 🎨✨**
