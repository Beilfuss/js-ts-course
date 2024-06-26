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
- Neste ponto, precisamos criar um repositório no servidor para mandar esses arquivos para lá
    - Para isso, vamos entrar no servidor usando `ssh [usuario]@[ip do servidor]`;
    - Na home do servidor, criar um repositório para o projeto: `mkdir repo-agenda`;
        - Criar, também, uma pasta para guardar os contatos (arquivos da agenda): `mkdir agenda`;
    - Entrar na pasta "repo-agenda": `cd repo-agenda`;
    - Criar um repositório do git: `git init --bare`;
    - Voltar para a pasta anterior (`cd ..`);
    - Entrar na pasta "agenda": `cd agenda`;
    - Criar um repositório do git: `git init`;
    - Adicionar um repositório remoto (que na verdade está no mesmo servidor): `git remote add agenda /home/matheus/repo-agenda`;
        - Normalmente se usa `git remote add origin /home/matheus/repo-agenda` ("origin" como nome do repositório).
- Agora, vamos adicionar o repositório que criamos no servidor no nosso computador;
    - No computador host, executar `git remote add agenda [usuário]@[ip]:[nome do repositório]` --> "git remote add [nome do repositório no host] [endereço do repositório]:[nome do repositório no servidor]";
    - Com o repositório adicionado, enviar os arquivos para o repositório remoto "agenda" o que tiver no repositório main: `git push agenda main`;
    - Agora, ir ao repositório remoto, na pasta agenda, e executar `git pull agenda main`;
    - Nesse momento, tem-se todos os arquivos do projeto agenda no servidor;
    - Sempre que fizer alterações no projetoagenda no computador host, é preciso executar:
        - `git add .`;
        - `git commit -am '[mensagem que quer adicionar]'`;
        - `git push agenda main`.
- As edições enviadas vão estar no repositório "repo-agenda". Para os commits irem para a **pasta de produção**, agenda, é preciso ir na pasta agenda e executar `git pull agenda main`;
- Com isso, já movemos os arquivos com sucesso para o servidor.