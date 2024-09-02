# Copiando a base para o projeto

- A partir dessa aula, vamos ir para o consumo da nossa API;
- Configurar o link baseURL em "axios.js" em "services";
  - Deixar genérico para modificar sempre que precisar.
- Apagar a pasta "node_modules";
- Copiar essa pasta para projetos React;
  - Comando para isso: `rsync -havi --progress --exclude node_modules --exclude .git [caminho da pasta]/ [nome da aplicação]`.
  - Conferir se os arquivos de configuração foram copiados também (arquivos com ".")
- Abrir a pasta copiada no VS Code e modificar ela como quiser.
  - Instalar os pacotes com `npm i`;
  - Commitar com `git add . && git commit -am 'Criada a pasta do projeto real && git push'`;
  - Testar com `npm start`.
