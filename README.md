<p align="center">
  <a href="" rel="noopener">
 <img src="https://raw.githubusercontent.com/herissontiburcio/nlw-copa-trilha-ignite/8ee74f6832edfe153647558cfa39fabab1acbd0d/imgs/logo.svg" alt="<nlw/> COPA" width="350px"></a>
</p>
<h3 align="center"></h3>

<div align="center">

[![Organizador](https://img.shields.io/static/v1?label=Realização&message=rocketseat&color=blueviolet)](sdf)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

</div>

---

### Desenvolvimento Web

<img src="https://raw.githubusercontent.com/herissontiburcio/nlw-copa-trilha-ignite/main/imgs/page.png" alt="Página WEB" width="full">

### Desenvolvimento Mobile

<img src="https://raw.githubusercontent.com/herissontiburcio/nlw-copa-trilha-ignite/main/imgs/Capa.png" alt="Tela Login mobile" width="full">

<br>

---

## 📱 Sobre o projeto

<p align="center">O projeto visa o desenvolvimento de uma plataforma para que o usuários possam criar bolões para a copa do mundo de 2022. A aplicação WEB é uma interface simples e direta, permitindo o usuário conhecer o projeto e criar os seus bolões. Já a aplicação mobile desempenha as demais funcionalidades, como por exemplo, participar de bolões, realizar palpites, compartilhamento de bolões, entre outros.</p>

## ⛏️ Tecnologias

- Javascript
- Typescript
- Node.js
- Prisma
- SQLite
- Fastify
- Zod
- React
- NextJS
- Tailwindcss
- React Native
- Native Base
- Expo

## 🚀 Recomendações

## Server

entre na pasta `server` presente no diretório raiz, e rode o comando para instalar as dependências:

```bash
npm i
```

Agora para criar o banco de dados, rode o comando:

```bash
npx prisma migrate dev
```

Por fim para iniciar o servidor, rode o comando:

```bash
npm run dev
```

## Web

Para rodar o projeto web, entre na pasta `web` presente no diretório raiz, e rode o comando para instalar as dependências:

```bash
npm i
```

Agora para iniciar o projeto, rode o comando:

```bash
npm run dev
```

Para utilizar o projeto em modo estático (com uso de cache e atualização dos dados de 10 em 10 minutos):

```bash
npm run start
```

> Recomendado: não esqueça de iniciar o servidor antes de iniciar o projeto web
## Mobile

Para rodar o projeto mobile você precisará baixar o app [Expo Go](https://expo.dev/client).
Após baixar o app, entre na pasta `mobile` presente no diretório raiz, e rode o comando para instalar as dependências:

```bash
npm i
```

Agora para iniciar o projeto, rode o comando:

```bash
npx expo start
```

> Atenção: não esqueça de iniciar o servidor antes de iniciar o projeto mobile
