# Configurando e testando o Sequelize

- Sequelize vai fazer o controle da base de dados;
- Na raiz do projeto, instalar o "dotenv";
    - `npm i dotenv`.
- Criar um arquivo ".env" na raiz do projeto;
    - Nele, adicionar:
        - database;
        - database_host;
        - database_port;
        - database_username;
        - database_password.
- Configurar o arquivo ".env" no "app.js";
- Configurar o Sequelize;
    - Criar um arquivo ".sequelizerc";
    - Nele, pressionar "ctrl+shift+p", selecionar "Change Language Mode" e depois "JavaScript";
    - Adicionar nele os lugares dos arquivos de configurações;
    - Criar o arquivo de configuração "database.js" (que vai ser a configuração da base de dados);
    -
