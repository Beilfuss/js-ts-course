## Configurando o Git e enviando os arquivos para o servidor

- Abrir a pasta do projeto no terminal;
- Configurar nome de usuário e e-mail;
    - `git config --global user.email "emailusuario@email.com"`
    - `git config --global user.name "Nome usuário"`
- Inicializar o Git: `git init`;
- Ignorar alguns arquivos;
    - `nano .gitignore`;
    - Adicionar na pasta o arquivo "node_modules" e o ".env";
    - Salvar e sair;
    - `ls -la` para verificar o arquivo ".gitignore".
- Adicionar os arquivos do projeto no Git;
    - `git add .`
    - `git commit -am 'commit inicial'`
- Agora, já temos o git configurado na máquina hospedeira;