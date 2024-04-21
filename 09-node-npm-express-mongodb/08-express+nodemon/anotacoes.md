O "nodemon" é instalado como uma dependência de desenvolvimento e ele permite modificar o projeto e este ser atualizado logo que o arquivo modificado é salvo.

É uma dependência de desenvolvimento porque é utilizada apenas no nosso computador enquanto a aplicação estiver sendo desenvolvida.

Para instalá-lo, então, basta executar:

- npm install nodemon --save-dev

Há duas maneiras de executar o nodemon. Vamos sempre usar um script do "package.json". Automaticamente, tem-se um script "start", e aí se edita ele para, em vez de utilizar node, utilizar o nodemon.

Para executar ele na mão, basta executar:

- npx nodemon [arquivo que se quer assistir]

Com isso, o nodemon fica "vigiando" o script. Quando se salvar alguma coisa, não é preciso parar o servidor, porque ele já atualiza e reinicia o servidor a cada arquivo salvo.

A maneira mais prática de se fazer isso é ir no "package.json" e criar um script para "start", por exemplo. "start" porque o npm reconhece esse comando. Aí, basta definir o script de start como "nodemon server.js":

- "start": "nodemon server.js"

Na verdade, nem precisava do nome do arquivo acima, já que o npm já vai saber qual o nosso arquivo de entrada porque ele está definido em "main".

Agora, executando apenas "npm start" já se tem o nodemon funcionando. Assim que salvar, ele atualiza o servidor automaticamente. Dessa forma, não é preciso ficar parando e reiniciando o servidor toda hora.