# Cristine Ribeiro | Desenvolvedora Web

Projeto React + Vite + TypeScript preparado para edição fora do Lovable, versionamento no GitHub e deploy no Railway.

## Tecnologias

- React
- Vite
- TypeScript
- Tailwind CSS
- shadcn/ui
- Railway

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

O build de produção é gerado na pasta `dist`.

## Rodar build de produção

```bash
npm run build
npm run start
```

O comando `start` usa o pacote `serve` para publicar a pasta `dist` na porta definida por `PORT`.

## Deploy no Railway

O arquivo `railway.json` já configura:

- Build command: `npm run build`
- Start command: `npm run start`
- Builder: `NIXPACKS`

Quando você fizer push para o GitHub conectado ao Railway, o Railway instala as dependências, roda o build e inicia o site automaticamente.

## Como editar imagens sem rodar npm localmente

1. Entre no repositório pelo GitHub.
2. Abra a pasta `public/portfolio/`.
3. Substitua a imagem desejada mantendo exatamente o mesmo nome do arquivo.
4. Faça commit direto pelo GitHub.
5. O Railway detecta o commit e faz o deploy automaticamente.

Use estes nomes:

- `academia.webp`
- `barbearia.webp`
- `clinica-estetica.webp`
- `loja-fisica.webp`
- `restaurante-cafeteria.webp`
- `prestador-servico.webp`

Os textos e dados dos cards ficam em `src/data/niches.ts`.

## Variáveis de ambiente

No momento o projeto não exige variáveis de ambiente obrigatórias.

Se precisar adicionar alguma depois, crie um arquivo `.env` com base no `.env.example`. No Vite, variáveis usadas no navegador precisam começar com `VITE_`.

## Git

```bash
git status
git add .
git commit -m "Configura deploy Railway e imagens publicas dos nichos"
git push origin main
```
