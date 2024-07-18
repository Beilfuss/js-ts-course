# CRUD de usuários

- Vamos terminar de criar nosso usuário (terminar o CRUD dele);
  - Vamos fazer:
    - Index;
      - Criar o método em UserController.js e uma rota em userRoutes.js;
      - Criar uma requisição GET "Index" no Insomnia para testar isso (com: base_url/users/).
        - Deve retornar todos os dados do usuário.
    - Show;
      - Criar o método em UserController.js e uma rota em userRoutes.js;
      - Criar uma requisição GET "Show" no Insomnia para testar isso (com: base_url/users/).
        - Passando "base_url/users/1", deve retornar o usuário cadastrado com id "1". IDs não cadastrados devem retornar "null".
    - Update;
      - Criar o método em UserController.js e uma rota em userRoutes.js;
      - Criar uma requisição PUT "Update" no Insomnia para testar isso (com: base_url/users/[id de um usuário]).
        - Passando "base_url/users/1" sem um JSON deve retornar o erro "ID não enviado";

        - Passando "base_url/users/1", deve retornar o usuário cadastrado com id "1". IDs não cadastrados devem retornar "null".
    - Delete.
