Imagine que se queira criar um módulo que faça só uma coisa. Por exemplo, um módulo que é uma função que faz uma coisa específica. Pode-se "resetar" o "module.exports" atribuindo diretamente uma função para o "module.exports".
Isso é muito similar ao "default" do ES6. Está-se exportando só uma coisa. Note que nem dentro de "modulo1" se consegue executar a função, porque ela é anônima. No caso, para executar ela, seria necessário usar "module.exports".

Não funciona só com funções, pode-se atribuir o que quiser para o "module.exports" diretamente que ele é "resetado": número, string, função, classe etc. A diferença é que o que se importa está vindo de um módulo e é armazenado em uma variável.

### Sobre caminhos de pastas

Em "app.js", o "." representa a pasta "02-modulos-2". Quando se usa "./arquivo", quer-se acessar um arquivo que está na mesma pasta (do arquivo "app.js").
Para "caminhar para frente" nas pastas, basta adicionar o "." e ir colocando barras ("/") e os nomes das pastas. Para "caminhar para trás", basta adicionar dois pontos ("..") e uma barra ("/"); cada vez que se fizer isso, volta uma pasta.

### Sobre variáveis dentro de "module"

Há duas variáveis internas dentro do "module" "__filename" e "__dirname". Elas são convenientes ao se usar qualquer coisa relacionada com caminho (buscar algum caminho, algum arquivo). "__dirname" é o nome da pasta atual, e "__filename" é o nome do arquivo. Mas, esse é o caminho absoluto: pega da raiz do computador até o arquivo em que se está.
Para manipular caminhos, a função de um módulo disponível por padrão no node, o "path". Para usá-lo, basta dar um "const path = require('path');". Imagine que se queira navegar, mas não se sabe em que sistema o programa vai rodar (poderia ser em um servidor Windows ou Linux). E para sempre se ter caminhos corretos independentemente do sistema, o path é útil.

### Sobre colocar extensões

Pode-se ou não colocar a extensão ".js". Normalmente se deixa sem quando é um arquivo ".js". Quando o arquivo não for JS, aí coloca a extensão.