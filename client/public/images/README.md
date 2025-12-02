# 📸 Pasta de Imagens

Coloque suas fotos nesta pasta!

## Como Adicionar Fotos

1. **Adicione seus arquivos de imagem aqui:**
   - `foto1.jpg`
   - `foto2.jpg`
   - `foto3.jpg`
   - etc...

2. **Formatos suportados:**
   - `.jpg` / `.jpeg`
   - `.png`
   - `.webp`
   - `.gif`

3. **Tamanho recomendado:**
   - Mínimo: 500x500px
   - Ideal: 800x800px ou maior
   - Proporção: Quadrada (1:1)

## Atualizar o Código

Depois de adicionar as fotos, abra o arquivo `client/src/App.tsx` e procure pela função `generateGalleryItems()`.

Substitua o array `images` pelos seus arquivos:

```javascript
const images = [
  '/images/foto1.jpg',
  '/images/foto2.jpg',
  '/images/foto3.jpg',
  '/images/foto4.jpg',
  '/images/foto5.jpg',
  // ... adicione mais
];
```

## Exemplo Completo

Se você adicionar estas fotos:
- `client/public/images/aniversario1.jpg`
- `client/public/images/aniversario2.jpg`
- `client/public/images/aniversario3.jpg`

O código ficaria assim:

```javascript
const images = [
  '/images/aniversario1.jpg',
  '/images/aniversario2.jpg',
  '/images/aniversario3.jpg',
];
```

## 💡 Dicas

- Use nomes descritivos para as fotos
- Mantenha a proporção quadrada (1:1) para melhor visual
- Comprima as imagens para melhor performance (use TinyPNG ou similar)
- Teste no navegador com `pnpm dev` para ver o resultado

---

**Pronto! Agora é só adicionar suas fotos e atualizar o código.** 📸✨
