Nessa aula veremos sobre o NPM, gerenciador de pacotes do Node. Para inicializar o npm em uma pasta, comando é "npm init" ou "npm init -y", que é a versão curta (responde tudo automaticamente). O arquivo "package.json" gerado pode ser editado. Cópia dele abaixo:

- npm init
- npm init -y

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

Esse comando busca o que está desatualizado e atualiza.

Suponhamos que o express fosse relacionado às dependências de desenvolvimento e não às dependências do projeto em si. Dependências específicas de desenvolvimento são: webpack, babel etc. Elas são dependências de desenvolvimento porque elas já geram o arquivo final quando se está desenvolvendo. No servidor, após o deploy da aplicação, o webpack, por exemplo, não será mais necessário, ele só é necessário durante o desenvolvimento.
Como mover o express para "devDependencies"? Basta executar:

- npm install express --save-dev

E, como voltar o express para "dependencies"? Basta executar:

- npm install express --save-prod

Acontece, também, de um projeto utilizar uma versão específica de um pacote. Nesse caso, estamos com a última, 4.19.2. Suponhamos que o projeto dependa da versão 2.1.0. Como instalar ela? Basta executar:

- npm install express@2.1.0

Sem a flag "-E", o npm adiciona a flag "^", que, mais uma vez, indica "2x", isto é, o npm pode atualizar automaticamente novas versões minor ou patches (como 2.1.1 ou 2.2.0 nesse caso).

2.    1.    0
Major Minor patch

Se é só feita uma correção de bug na aplicação, sem adicionar coisas novas, aumenta só o patch: 2.1.1. Se criar um recurso novo na aplicação sem quebrar a compatibilidade da versão minor com a versão major (tudo que tiver na aplicação major, ainda vai funcionar na aplicação com o recurso novo adicionado), então aumenta só a minor: 2.2.0. Quando se aumenta a major, quer dizer que se quebrou a compatibilidade com coisas que têm nas versões anteriores: 3.0.0. Cuidar com atualizações majors porque elas podem fazer a aplicaçãoparar de funcionar.
Quando se utiliza o "^", significa que se pode atualizar tando a minor quanto a patch. Sempre que se der um "npm update" para atualizar o express e ele estiver com o "^", ele vai atualizar dentro da minor e da patch, não na major.
Para ter uma versão específica, basta executar:

- npm install express@2.1.0 -E

Ou, pode-se simplesmente apagar o "^" das dependências que não se quer que sejam atualizadas.

Além do "^", há também o "~" (como em "~2.1.0"), que aí só atualiza patches. Depende da aplicação, porque a mudança em minors e patches não deve quebrar a compatibilidade com a major, ou seja, o "^" deveria servir bem.

Agora, suponhamos que se queira a última versão da major 4. Para isso, basta executar:

- npm install express@4.x

Mais uma vez, para se escolher uma versão específica, basta executar:

- npm install express@4.0.0

E aí, para atualizar esse pacote para a última versão, basta utilizar:

- npm update

Por causa do "^", ele deve atualizar a minor e os patches para a última versão.

Para desinstalar um pacote, basta usar "uninstall". No caso do express:

- npm uninstall express

Para listar os pacotes instalados, pode-se usar:

- npm ls

Para não abrir todas as dependências dos pacotes, pode-se delimitar uma profundidade. Por exemplo:

- npm ls --depth=0

O comando acima mostra só o que se instalou. Se quiser ver o que se instalou e mais uma profundidade, basta executar:

- npm ls --depth=1

E assim por diante, pode-se colocar a profundidade desejada.

Como ver quais pacotes estão desatualizados? Pode-se executar:

- npm outdated

No "Wanted", ele mostra uma versão mais recente (2.5.11, nesse caso) por causa do "^". Isso porque, se queremos que atualize a minor e o patch, já poderia estar na versão "2.5.11" em vez da versão "2.1.1". Para atualizar para essa versão "Wanted", basta executar o "npm update".
Com um "~" no lugar do "^", a versão "Wanted" seria diferente: nesse caso, ela também seria 2.1.1, porque após essa versão já mudou a minor.
Por fim, para desinstalar mais de um pacote, basta adicioná-los com o comando uninstall:

npm uninstall webpack express

Agora, não há mais dependências nesse projeto.

Resumo:

- "npm init" -> inicializa o npm
- "npm install" -> para instalar pacotes
- "-E" -> para instalar uma versão específica
- "--save-dev" ou "-d" -> move a dependência para as dependências de desenvolvimento
- "--save-prod" -> move a dependência de devDependencies para dependencies
- "npm ls" -> lista pacotes instalados
- "4.x" -> instala a última versão dessa major (pode ser qualquer número, se o pacote tiver essa versão)
- "npm outdated" -> lista os pacotes desatualizados
- "npm update" -> atualiza os pacotes desatualizados
- "npm uninstall" -> desinstala pacotes

Comandos mais básicos e mais comuns de serem usados.