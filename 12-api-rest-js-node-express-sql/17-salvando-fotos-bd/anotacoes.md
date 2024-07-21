# Salvando a foto na base de dados

- Vamos salvar as fotos carregadas no sistema na base de dados;
- Primeiro, vamos adicionar "loginRequired" na rota de fotos;
- Criar uma tabela na base de dados para salvar o nome original do arquivo e o nome criado pelo sistema. Também, salvar o ID do aluno que tem essa foto, referenciando o ID dos alunos donos das fotos;
  - Criar uma migração (para criar uma nova tabela): `npx sequelize migration:create --name=criar-tabela-de-foto-do-aluno`;
  - Configurar a migração criada (em src/database/migrations);
    - Criar a chave estrangeira para referenciar o aluno.
      - Possibilidades dessa referência:
        - ON DELETE CASCADE: se o registro pai for deletado, o filho também será;
        - ON UPDATE CASCADE: se a primary key do registro pai for alterada, isso será refletido no registro filho;
        - RESTRICT: significa que qualquer tentativa de apagar ou atualizar o registro pai vai falhar lançando um erro;
        - NO ACTION: Sem ações. Significa que o MySQL não vai realizar nenhuma ação por você. Porém, você não poderá apagar ou atualizar a primary key do registro pai, nem conseguirá alterar a foreign key do registro filho caso a primary key do registro pai ainda não tiver sido atualizada;
        - SET NULL - Se você apagar ou atualizar a primary key do registro pai, a foreign key do registro filho será configurada para NULL.
  - Realizar a migração: `npx sequelize db:migrate`.
- Criar o model de fotos;
- Associar a foto com o aluno;
  - Duas maneiras: "foto pertence ao aluno" (no model de foto) ou "aluno tem fotos" (no model do aluno);
  - No model foto:
      ```
      static associate(models) {
          this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
        }
      ```
  - No model aluno:
      ```
      static associate(models) {
          this.hasOne(models.Foto, { foreignKey: 'aluno_id' });
        }
      ```
- Importar o model de foto no "index.js" em "database" e executar a função "associate" dele;
- Importar o model de foto no controller de foto e criar os registros das fotos na base de dados.
