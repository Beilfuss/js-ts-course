Nessa aula veremos sobre o NPM, gerenciador de pacotes do Node. Para inicializar o npm em uma pasta, comando é "npm init" ou "npm init -y", que é a versão curta (responde tudo automaticamente). O arquivo "package.json" gerado pode ser editado. Cópia dele abaixo:

{
  "name": "03-npm-node-package-manager",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}


Se usar o "npm init -y", ele usa o nome da pasta como nome do projeto (name). Por isso, tomar cuidado com espaços, acentos nos nomes de pastas do projeto. Não colocar, também, nomes de módulos como "express", "webpack", "babel" etc. Colocar o nome do projeto mesmo.
Depois, há a versão do projeto. Automaticamente, a versão "1.0.0" é atribuída. Versões são separadas em "[major].[minor].[patch]".
"main" é o arquivo de entrada da aplicação.
"scripts". Pode-se criar os próprios scripts e digitar "npm run [nome do script]" para ele executar.
O resto é autoexplicativo.

O foco será como instalar, desinstalar, fazer upgrade, downgrade de aplicações de terceiros, como módulos, pacotes, frameworks utilizando npm.

Vamos usar o framework "express" como um software de terceiros de exemplo. Para instalá-lo, basta dar:

- npm install express

Esse comando instala o express na sua última versão. O "^" do lado esquerdo da versão em "package.json" indica que ele pode atualizar dentro da versão em que está para qualquer outra versão. Isso quer dizer que se os desenvolvedores do express lançarem uma versão posterior dele, ele será atualizado aqui também. Se quiser uma versão exata do express, basta adicionar uma flag "-E" antes do comando acima:

- npm install express -E

Esse comando remove o "^" e a versão do express nunca vai ser atualizada, vai ser sempre a versão do express naquele dia ou outra versão escolhida. Se quiser atualizar os pacotes, nesse caso, bastaria executar:

- npm update

Esse comando busca o que está atualizado e atualiza.

