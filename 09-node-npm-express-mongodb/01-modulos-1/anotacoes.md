Nessa aula veremos o sistema de módulos do Node, que diverge do sistema de módulos do ES6.

O Node disponibiliza um objeto (module) em que se pode colocar coisas nele e exportar para fora do módulo. Quando se preenche a chave "exports" do objeto, isso é o que vai ser exportado para fora do módulo.

Para exportar algo de um módulo, pode-se adicionar uma chave dentro do objeto exports: "module.exports.nome = nome;" para exportar uma variável "nome", por exemplo.

Outro modo de se exportar coisas é com um atalho. Em vez de usar "module.exports", pode-se usar "exports.nome = nome;" para exportar uma variável "nome", por exemplo.
Isso funciona porque "exports" é uma referência para "module.exports".

Além disso, pode-se, ainda, usar "this" para as ações descritas acima (como em "this.nome = nome;"), uma vez que nesse contexto a palavra "this" aponta para "module.exports" ou "exports".
Essa forma não é muito utilizada.

Para importar em um módulo o que foi exportado em outro, importa-se o módulo inteiro. Pode-se usar "const [nome qualquer] = require([caminho]);". Em "caminho", pode-se usar o caminho absoluto ou relativo (mais usado).
Pode-se usar "let", mas não se vai querer sobrescrever o seu módulo.
No arquivo de destino, então, tem-se tudo o que se exportou no módulo em um objeto JS normal.

Pode-se, claro, criar coisas só do módulo. Basta não exportar essas coisas, exportando só o que se quer que seja exportado.

Quando se usa o caminho de um arquivo, está-se falando de módulos criados por devs. Módulos padrão do Node e os instalados via npm (que vão para "node_modules") não requerem o caminho. Nesse caso, pode-se colocar apenas o nome do módulo. Por exemplo, "const path = require('path');" para o módulo padrão do Node "path".
Se instalasse qualquer outro pacote, também importaria ele dessa forma. Por exemplo, após iniciar o npm (npm init -y) e instalar o axios (npm i axios), não é preciso apontar para o caminho onde o axios é instalado (em node_modules). Pode-se chamar o axios diretamente com "const axios = require('axios');".

Pode-se, também, exportar sobrescrevendo o o objeto "module.exports" inteiro, sem chaves. Mas, dessa forma só funciona com "module.exports", se colocar só "exports" não funciona.