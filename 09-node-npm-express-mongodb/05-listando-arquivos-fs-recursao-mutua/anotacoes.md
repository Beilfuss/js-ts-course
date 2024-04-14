Nessa aula começaremos a falar do File System, uma API do Node que podemos usar para trabalhar arquivos e pastas do sistema, o sistema de arquivos em geral.

Documentação do FS na última versão disponível atualmente: https://nodejs.org/docs/latest/api/fs.html

Primeiro veremos as coisas mais básicas e depois veremos como fazer uma recursão mútua: uma função que depende de outra e essa outra depende da primeira. Uma dependência "circular".

Para tal, precisaremos do módulo "fs" e do módulo "path". O "path" é só para tratar os caminhos.

O FS tem dois tipos de função para todas elas. Por exemplo, "readdir" e "readdirSync". Há uma função assíncrona e uma síncrona. A função síncrona não deixa continuar executando até ela terminar.
Nesse caso, não utilizaremos nem uma ou outra, vamos utilizar promises, com ".promises" no final do require do fs.
Com isso, pode-se usar promises para esperar. Dessa forma, o fs começa a operação e retorna quando ele terminar, sem parar a execução do resto do código.