Nessa aula, vamos integrar o webpack com o express. 

A primeira coisa a se fazer é criar uma pasta "frontend". A pasta "src" ficará responsável pelo backend. Depois, basta ajustar as outras pastas de acordo com o modelo do webpack, adicionar as dependencies e devDependencies no package.json e adicionar um comando para rodar o webpack no package.json.
Nesse caso, adicionou-se "webpack -w" e "--ignore public --ignore frontend" para o nodemon ignorar as pastas "public" e "frontend".
Depois, "npm i" para instalar todas as dependências, corrigir o entry point do webpack e importar o core-js e regenerator-runtime no "main.js".

Com isso, temos meio caminho andado para iniciar um projeto. Agora, o webpack e o express já estão configurados. Falta apenas adicionar "models" no express, veremos alguma base de dados para utilizarmos (MongoDB). Por fim, deixaremos "sessions" no template, para salvar algum dado de usuário ou alguma coisa na sessão se precisar.

Falta só esses detalhes para que, quando se iniciar um projeto, nos preocuparmos só com código e não precisar configurar isso tudo.