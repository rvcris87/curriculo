# Cristine Ribeiro | Desenvolvedora Web

Projeto React + Vite + TypeScript preparado para edicao fora do Lovable, desenvolvimento no VS Code, versionamento no GitHub e deploy na Netlify.

## Tecnologias

- React
- Vite
- TypeScript
- Tailwind CSS
- shadcn/ui
- Netlify

## Rodar localmente

```bash
npm install
npm run dev
```

Depois abra a URL indicada pelo Vite no terminal, normalmente `http://localhost:5173`.

## Gerar build

```bash
npm run build
```

O build de producao e gerado na pasta `dist`.

## Variaveis de ambiente

No momento o projeto nao exige variaveis de ambiente obrigatorias.

Se precisar adicionar alguma depois, crie um arquivo `.env` com base no `.env.example`. No Vite, variaveis usadas no navegador precisam comecar com `VITE_`.

## Deploy na Netlify

Use estas configuracoes:

- Build command: `npm run build`
- Publish directory: `dist`

O arquivo `netlify.toml` ja inclui o fallback de SPA para evitar erro 404 ao acessar rotas diretamente.

## Git

```bash
git status
git add .
git commit -m "Organiza projeto React Vite para deploy na Netlify"
git push origin main
```
