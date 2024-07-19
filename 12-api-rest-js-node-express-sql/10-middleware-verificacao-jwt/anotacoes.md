# Middleware de verificação do JWT

- Vamos criar o middleware de autenticação do usuário. Com o middleware, é só colocar ele nas rotas que se quer "fechar", deixar disponível apenas para usuários conectados;
- Criar um middleware "loginRequired.js" em "src/middlewares";
  - Mais explicações dentro do arquivo.
- Adicionar o middleware nas rotas do usuário (userRoutes.js) que exigem login;
- Agora, quem controla a sessão não é mais o servidor, é o usuário com seu token. Mas, quem gera o token para o usuário é o servidor, e aí o cliente tem que enviar esse token para o servidor nas requisições que exigem ele. Com isso, em cada requisição, extrai-se do token o payload, que é quem é o usuário e qual o e-mail do usuário.
