# 🚀 Setup - Primeiros Passos

Bem-vindo! Você baixou o projeto **"Um Registro Bonito"**. Aqui estão os primeiros passos para colocá-lo em funcionamento.

## ✅ Pré-requisitos

Você precisa ter instalado:
- **Node.js** (versão 18+) - [Download](https://nodejs.org/)
- **pnpm** (gerenciador de pacotes) - [Instalação](https://pnpm.io/installation)

Para verificar se tem instalado:
```bash
node --version
pnpm --version
```

## 🚀 Instalação Rápida

### 1. Descompacte o arquivo ZIP
```bash
unzip felizaniversariodi.zip
cd felizaniversariodi
```

### 2. Instale as dependências
```bash
pnpm install
```

### 3. Inicie o servidor de desenvolvimento
```bash
pnpm dev
```

### 4. Abra no navegador
```
http://localhost:3000
```

**Pronto! O site está rodando! 🎉**

---

## 📝 Próximos Passos

1. **Leia `COMECE_AQUI.md`** para um guia rápido
2. **Leia `ADICIONAR_FOTOS.md`** para adicionar suas fotos
3. **Leia `PERSONALIZACAO.md`** para personalizar textos e cores

---

## 🛠️ Comandos Úteis

| Comando | O que faz |
|---------|-----------|
| `pnpm dev` | Inicia servidor de desenvolvimento |
| `pnpm build` | Cria versão para produção |
| `pnpm preview` | Visualiza a versão de produção |
| `pnpm format` | Formata o código |

---

## 📁 Estrutura do Projeto

```
felizaniversariodi/
├── client/
│   ├── public/
│   │   ├── images/          ← Coloque suas fotos aqui
│   │   └── index.html
│   └── src/
│       ├── App.tsx          ← Código principal do site
│       ├── index.css        ← Estilos
│       └── ...
├── COMECE_AQUI.md           ← Leia primeiro
├── ADICIONAR_FOTOS.md       ← Como adicionar fotos
├── PERSONALIZACAO.md        ← Como personalizar
├── README.md                ← Documentação completa
└── package.json
```

---

## 🎨 Personalização Rápida

### Adicionar Fotos
1. Coloque suas fotos em `client/public/images/`
2. Abra `client/src/App.tsx`
3. Procure por `const images = [...]` (linha ~51)
4. Atualize com seus arquivos: `/images/foto1.jpg`, etc.

### Mudar Textos
Abra `client/src/App.tsx` e procure por:
- **Hero:** `<h2 className="hero-title">`
- **Bloco:** `<div className="text-block">`
- **Rodapé:** `<p className="footer-text">`

### Mudar Cores
Abra `client/src/App.tsx` e procure por `:root {` dentro da tag `<style>`.

---

## 🆘 Solução de Problemas

### Erro: "command not found: pnpm"
Instale pnpm:
```bash
npm install -g pnpm
```

### Erro: "Cannot find module"
Execute:
```bash
pnpm install
```

### Porta 3000 já está em uso
Use outra porta:
```bash
pnpm dev -- --port 3001
```

### Imagens não aparecem
1. Verifique se estão em `client/public/images/`
2. Verifique o caminho em `App.tsx`: `/images/nome.jpg`
3. Limpe o cache: Ctrl+Shift+Delete

---

## 🌐 Deploy

### GitHub Pages
1. Crie um repositório no GitHub
2. Faça push do código
3. Vá para Settings → Pages
4. Selecione branch `main` e pasta `/docs`

### Vercel
1. Conecte seu repositório
2. Vercel detectará automaticamente
3. Clique em Deploy

### Seu Servidor
```bash
pnpm build
# Copie a pasta `dist/` para seu servidor
```

---

## 📚 Documentação

- **COMECE_AQUI.md** - Guia rápido
- **ADICIONAR_FOTOS.md** - Como adicionar fotos
- **PERSONALIZACAO.md** - Como personalizar
- **README.md** - Documentação completa
- **ideas.md** - Planejamento visual

---

## 💡 Dicas

✅ Use imagens quadradas (1:1) para melhor visual
✅ Comprima as imagens antes de adicionar
✅ Teste em mobile com `pnpm dev`
✅ Mantenha textos curtos e significativos

---

## 🎁 Pronto!

Agora você tem um site elegante e minimalista para presentear! 

**Um registro bonito do que estamos vivendo — sem pressa, sem cobrança, só carinho mesmo.** ✨

Divirta-se! 🚀
