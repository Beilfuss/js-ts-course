# Criando seeds

- Vamos ver como criar seeds;
- Abrir o terminal na pasta do projeto;
  - Executar `npx sequelize seed:generate --name criar-usuarios`;
  - Configurar os usuários que se quer na seed no arquivo JS criado em "src/database/seeds", como especificado no ".sequelizerc";
  - Executar `npx sequelize db:seed:all` para inserir os usuários do seed na base de dados.
- Assim, caso quiser criar vários dados na base de dados (para teste, por exemplo), essa é a maneira.
