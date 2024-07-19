# Rotas de alunos

- Vamos criar as rotas de alunos, um CRUD para listar todos, listar um, atualizar, incluir e apagar alunos;
- Primeiro, comentar novamente o index da rota de usuários;
- Para criar rotas, é preciso de um controller. Por isso, primeiro vamos criar o controller de alunos (AlunoController.js);
- Criar um arquivo para rotas de alunos;
- Importar e usar as rotas de alunos em "app.js";
- Criar uma pasta "Alunos" no Insomnia;
  - Criar uma request GET "Index".
- No "AlunoController.js";
  - Selecionar todos os alunos que existem na base de dados.
- Criar uma migration para deixar o e-mail de aluno único;
  - Executar `npx sequelize migration:create --name=mudar-email-aluno-unique`;
    - Tem que ser um nome descritivo para conseguir encontrar depois.
  - Aplicar essa migração: `npx sequelize db:migrate`.
    - Se já houver campos repetidos, vai ser necessário remover a duplicata do banco para a migração funcionar.
- Com isso, já temos a rota pronta.
