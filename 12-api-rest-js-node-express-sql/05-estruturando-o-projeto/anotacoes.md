# Estruturando o projeto

- Vamos começar a estruturar nosso projeto;
- Na raiz do projeto, criar uma pasta para todo o código fonte (src);
    - Dentro dessa pasta, criar as pastas:
        - models;
        - controllers;
        - config;
        - database;
        - middlewares;
        - routes.
- Na pasta raiz do projeto, instalar o express: `npm i express`;
- Configurar o express em "app.js";
- No arquivo do eslint, adicionar a regra `"class-methods-use-this": "off"` para que ele não obrigue a usar "this" em todo método;
- Na pasta "routes", criar um arquivo "homeRoutes.js";
- Na pasta "controllers", criar um arquivo "HomeController.js";
- Criar um workspace "Escola" no Insomnia;
    - Definir a URL base do workspace como `http://localhost:3001`;
    - Criar uma pasta "Home";
        - Nessa pasta, criar uma requisição "Index" com o método GET;
        - Configurar o URL base no GET e enviar a requisição para testar.
- Na pasta raiz do projeto, criar uma pasta "uploads";
- Também, criar um arquivo ".gitignore".
  - Dentro dele, já deixar "node_modules" e ".env".
