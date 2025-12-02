# 📸 Como Adicionar Suas Fotos

Agora o projeto está configurado para usar **imagens locais** armazenadas na pasta `client/public/images/`.

## ✅ Passo a Passo

### 1️⃣ Adicione suas fotos na pasta

Coloque suas imagens aqui:
```
client/public/images/
├── foto1.jpg
├── foto2.jpg
├── foto3.jpg
├── foto4.jpg
├── foto5.jpg
└── ... (até 20 fotos)
```

**Formatos suportados:** `.jpg`, `.png`, `.webp`, `.gif`

**Tamanho recomendado:** 800x800px ou maior (proporção 1:1)

---

### 2️⃣ Atualize o código em `App.tsx`

Abra o arquivo: `client/src/App.tsx`

Procure pela função `generateGalleryItems()` (por volta da linha 48):

```javascript
const images = [
  // '/images/foto1.jpg',
  // '/images/foto2.jpg',
  // '/images/foto3.jpg',
  // ... etc
];
```

**Descomente e atualize com seus arquivos:**

```javascript
const images = [
  '/images/foto1.jpg',
  '/images/foto2.jpg',
  '/images/foto3.jpg',
  '/images/foto4.jpg',
  '/images/foto5.jpg',
  '/images/foto6.jpg',
  '/images/foto7.jpg',
  '/images/foto8.jpg',
  '/images/foto9.jpg',
  '/images/foto10.jpg',
  '/images/foto11.jpg',
  '/images/foto12.jpg',
  '/images/foto13.jpg',
  '/images/foto14.jpg',
  '/images/foto15.jpg',
];
```

---

### 3️⃣ Teste no navegador

Execute:
```bash
pnpm dev
```

Abra: `http://localhost:3000`

Suas fotos devem aparecer na galeria! 🎉

---

## 💡 Dicas Importantes

✅ **Nomes dos arquivos:** Use nomes simples sem espaços
- ✅ Correto: `foto1.jpg`, `aniversario_01.jpg`
- ❌ Incorreto: `foto 1.jpg`, `minha foto.jpg`

✅ **Proporção:** Mantenha as imagens quadradas (1:1)
- Exemplo: 800x800px, 1000x1000px

✅ **Tamanho do arquivo:** Comprima para melhor performance
- Use: TinyPNG, ImageOptim, ou Squoosh
- Ideal: 100-300KB por imagem

✅ **Ordem:** As fotos aparecerão na ordem que você listar

---

## 🔄 Exemplo Prático

Se você adicionar estas fotos na pasta:
```
client/public/images/
├── momento1.jpg
├── momento2.jpg
├── momento3.jpg
├── momento4.jpg
└── momento5.jpg
```

O código ficaria assim:

```javascript
const images = [
  '/images/momento1.jpg',
  '/images/momento2.jpg',
  '/images/momento3.jpg',
  '/images/momento4.jpg',
  '/images/momento5.jpg',
];
```

---

## ⚠️ Se as Imagens Não Aparecerem

1. **Verifique o caminho:** `/images/nome-do-arquivo.jpg`
2. **Verifique a extensão:** `.jpg`, `.png`, etc (case-sensitive)
3. **Limpe o cache:** Ctrl+Shift+Delete no navegador
4. **Reinicie o servidor:** `pnpm dev`
5. **Verifique o console:** F12 → Console (procure por erros)

---

## 🎯 Próximos Passos

1. ✅ Adicione suas fotos em `client/public/images/`
2. ✅ Atualize o array `images` em `App.tsx`
3. ✅ Teste com `pnpm dev`
4. ✅ Quando estiver pronto, faça deploy com `Publish`

---

## 📦 Tamanho do Repositório

**Estimativa com 15 fotos:**
- 15 fotos × 200KB = ~3MB
- Tamanho total do projeto: ~510MB (inclui node_modules)

**Dica:** Se o repositório ficar muito grande, considere usar `.gitignore` para excluir `node_modules` e `dist/`.

---

**Pronto! Agora é só adicionar suas fotos e aproveitar! 📸✨**
