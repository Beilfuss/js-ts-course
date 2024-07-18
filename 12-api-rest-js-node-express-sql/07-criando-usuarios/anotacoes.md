# Criando usuários

- Vamos criar a feature de usuários (login de usuários com middleware para permitir apenas o acesso de usuários logados);
- Criar uma nova tabela de usuários na base de dados;
  - Para criar essa tabela, precisamos fazer uma migration (na pasta do projeto): `npx sequelize migration:create --name=users`;
  - Preencher essa migration e realizar ela: `npx sequelize db:migrate`;
  - Se errar alguma coisa e quiser desfazer, basta executar `npx sequelize db:migrate:undo`;
    - Depois, é só editar a migração (ou migrações) e rodar `npx sequelize db:migrate` novamente.
- Criar o model de usuário;
  - Já validar os campos desse model;
  - Adicionar o campo "password", que não vai existir no BD, vai ser usado apenas para gerar o hash de senha do usuário.
-
