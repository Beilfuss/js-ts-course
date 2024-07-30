# Deploy da nossa API

- Instalar os pacotes/módulos na pasta do projeto;
- Criar a build do nosso projeto, para mandar ele para produção;
  - Criar um script "build" da seguinte forma: `sucrase ./src -d ./dist --transforms imports`
    - "Sucrase vai rodar em todos os arquivos na pasta "src" e transpilar do conteúdo para a pasta "dist" (de "distribution"), que será usada em produção.
  - Criar um script "start" da seguinte forma: `node dist/server.js`;
    - Mover os arquivos "app.js" e "server.js" para a pasta "src";
    - Apagar o "/src" para atualizar os imports de "app.js".
  - Converter o código usando o sucrase: `npm run build`;
    - A pasta "dist" deve ser criada. Esta é a pasta de distribuição do projeto;
    - Entrar nela e executar `npm start` para ver se tudo está funcionando.
      - Acessar "localhost:3001" e os caminhos do projeto para checar se está funcionando.
- Mudar o domínio da aplicação;
  - Ir em "appConfig.js" e atualizar o domínio da aplicação (domínio ou IP).
    - Colocar o IP e a porta no ".env" e usar variáveis de ambiente aqui;
    - Se for domínio, pode usar "https", porque vai-se adicionar SSL.
  - Ir em "server.js" e trocar a porta pela variável de ambiente em ".env" correspondente.
- Refazer a build (deveria ter ajustado esses detalhes antes e aí sim fazer a build).
- Configurar o git;
  - Iniciar o git com `git init`;
  - Adicionar tudo com `git add .`;
  - Commit: `git commit -m 'adicionando arquivos'`.
- Criar um repositório no servidor;
  - Abrir outro terminal e executar `ssh [usuario]@[IP do servidor]`;
  - Criar a pasta do projeto: `mkdir api`;
  - Criar a pasta do repositório do projeto: `mkdir repo-api`;
    - Entrar na pasta repo-api: `cd repo-api`; 
    - Executar `git init --bare`;
    - Voltar: `cd ..`.
  - Adicionar o repositório "repo-api" na pasta "api";
    - Entrar na pasta "api": `cd api`;
    - Inicializar o git: `git init`;
    - Configurar o git: `git config user.name '[nome do usuário]'` e `git config user.email '[e-mail do usuário]'`;
    - Commit inicial: `git commit -am 'Initial'`.
  - Adicionar o repositório "repo-api" como repositório remoto de "api";
    - Na pasta "api", executar `git remote add [nome do repositório remoto] [link/caminho do repositório]`;
      - Exemplo: `git remote add origin /home/[user]/repo-api/`.
  - Adicionar o repositório "repo-api" como repositório remoto de "api", mas no computador local;
    - Por isso, mudar o caminho do comando `git remote add [nome do repositório remoto] [link/caminho do repositório]`;
    - Nesse caso, no "link/caminho do repositório", usar o IP do servidor ou domínio dele
      - **Importante**: em uma VM, usar `[nome do usuário na VM]@[IP]:[nome da pasta]`.    
  - Enviar os arquivos para o servidor: `git push origin main`;
    - Para não precisar digitar todo esse comando, executar `git push origin main -u`. Com isso, pode-se executar só `git push`.
  - Baixar para a pasta do projeto os arquivos da pasta do repositório;
    - Ir na pasta "api" no servidor;
    - Executar `git pull origin main`.
  - Ainda na pasta "api";
    - Criar a pasta de uploads: `mkdir uploads`;
      - Dentro da pasta de uploads, criar a pasta de imagens: `mkdir images`.
    - Criar o arquivo ".env": `nano .env`;
      - Copiar o conteúdo do .env no projeto e colar nesse arquivo;
      - Mudar o "DATABASE_HOST" para "localhost".
    - Instalar os pacotes com `npm i`.
    - Testar a aplicação com `npm start`;
  - Rodar com o PM2: `pm2 start /home/[user]/api/dist/server.js --name=api`;
    - `pm2 ls` para verificar se o processo está rodando corretamente;
    - Para confirmar: `curl http://localhost:3001`.
      - Se aparecer "Index", a aplicação está rodando corretamente no servidor.
  - Configurar o nginx para fazer um proxy reverso para que quando alguém acessar o domínio na porta 80, o nginx redirecionar para a porta 3001 dentro do servidor.
    - Executar `cd /etc/nginx/sites-enabled/`;
    - Executar `sudo cp [nome do arquivo de configuração do nginx HTTP usado no outro deploy (da agenda)] [nome do novo arquivo]`;
        - Aqui, pode ser o domínio ou qualquer outra coisa (nesse caso, usei "api_rest").
    - Nesse arquivo, adicionar o conteúdo do arquivo "HTTP-curso1.otaviomiranda.com.br" (que está dentro da pasta "config_nginx") no arquivo criado. Só modificar os campos necessários;
    - Salvar e sair;
    - Executar `sudo systemctl stop nginx`;
    - Gerar o certificado SSL (se tiver domínio e estiver usando HTTPS);
      - Nesse caso, usar o arquivo com configurações de HTTPS e executar `sudo certbot certonly --standalone -d [domínio]`;
      - Se certificar se aparecer uma mensagem de sucesso ou "congratulations";
    - Executar `sudo systemctl start nginx`;
      - Com isso, o IP/domínio já deve estar funcionando;
      - Se não funcionar, pode ser devido ao firewall.
- No Insomnia, duplicar os ambientes;
  - Renomear o ambiente de desenvolvimento "Escola" para "Escola (Dev)";
  - Duplicar esse ambiente e renomear ele para "Escola (Prod)";
    - No de produção, alterar a URL base para o domínio ou IP utilizado no projeto (sem "/" no final).
  - Com isso, tem-se um ambiente de teste, de desenvolvimento, e um de produção.
  - No ambiente de produção, tentar criar um aluno e enviar uma foto; 
    - Se o Nginx reclamar do tamanho do arquivo: 
      - Executar `sudo nano /etc/nginx/nginx.conf`;
      - Dentro de "http", adicionar `client_max_body_size 10M;`.
        - Isso quer dizer que o máximo que o usuário pode enviar é 10 MB.
      - Salvar e sair;
      - Executar `sudo systemctl restart nginx`;
      - Testar novamente.
- **Passo a passo da alteração do projeto**;
  - Ir no repositório git em que o projeto foi configurado;
  - Fazer a modificação;
  - Rodar usando `npm start`;
  - Testar usando o ambiente de "Dev" do Insomnia;
  - Fazer o build novamente;
    - No projeto local;
      - `npm run build`;
      - `git add .`;
      - `git commit -m 'mensagem do commit`;
      - `git push`.
    - No servidor.
      - Ir na pasta "api";
      - `git pull origin main`;
        - Se não tiver configurado como upstream, executar `git push origin main -u`.
      - `git pull`; (se tiver configurado)
      - `pm2 restart api`.
  - Ir no ambiente de "Prod" do Insomnia e testar.
- Com a aplicação no ar, pode-se reiniciar o servidor que ela deve voltar normalmente.