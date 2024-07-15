# Nodemon e Sucrase

- Vamos configurar o Sucrase e Nodemon;
- Sucrase permite que usemos import e export do ES6;
- Primeiro, instalar os dois: `npm i nodemon sucrase --save-dev`;
- Criar o arquivo "nodemon.json" na raiz do projeto;
    - Dentro desse arquivo, adicionar a seguinte regra para os arquivos js:

```
{
  "execMap": {
    "js": "node -r sucrase/register"
  }
}
```

- Criar um novo arquivo "server.js" no projeto;
- Nos scripts do "package.json", criar o script `"dev": "nodemon server.js"`;
- Testar usando `npm run dev`;
- Testar o import e export.
