# Modificações na API Rest

- Vamos consumir nossa API Rest usando React;
- Vamos ter que configurar/mudar algumas coisas na API para facilitar isso;
- Vamos fazer o Express permitir alguns domínios fazerem [Cross-origin resource sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS);
- Vamos instalar o Helmet;
- Vamos alterar no local e mandar para o servidor;
- Começando pelo cors e pelo helmet;
  - Executar `npm i cors helmet` na pasta local do projeto;
  - No "App.js", importar e usar o cors e o helmet;
  - Para ser específico com os domínios que se quer que tenham acesso, basta especificar isso nos parâmetros do "cors";
    - Pode-se criar um array "whiteList" e uma função "corsOptions" para isso, passando ela para o cors.
- Uma correção no "TokenController.js";
  - Retornar o token e o usuário.
- Enviar os dados para o servidor;
  - Fazer a build do projeto: `npm run build`;
  - Adicionar, commitar e pushar para o servidor;
  - Ir na pasta do projeto e executar `git pull origin main`;
  - `npm i` para instalar o cors e helmet;
  - Reiniciar o PM2: `pm2 restart api`;
  - Testar a aplicação.
- Com isso, apenas os sites na "whiteList" conseguem acessar os dados da API.
  - Script para teste (executar ele no console do navegador do site permitido):

```
fetch('[domínio da aplicação]')
  .then(resposta => resposta.json())
  .then(alunos => console.log(alunos));
```

- Script para facilitar os commits para o servidor:

```
npm run build
git add .

read message
echo "Mensagem do commit: "
git commit -am "$message"
git push
ssh [usuario]@[domínio] \
  'git -C /home/[user]/api/ ' \
  'pull origin main && ' \
  'pm2 restart api && sudo systemctl restart nginx'
```
