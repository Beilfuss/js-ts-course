Imagine que se queira criar um módulo que faça só uma coisa. Por exemplo, um módulo que é uma função que faz uma coisa específica. Pode-se "resetar" o "module.exports" atribuindo diretamente uma função para o "module.exports".
Isso é muito similar ao "default" do ES6. Está-se exportando só uma coisa. Note que nem dentro de "modulo1" se consegue executar a função, porque ela é anônima. No caso, para executar ela, seria necessário usar "module.exports".

Não funciona só com funções, pode-se atribuir o que quiser para o "module.exports" diretamente que ele é "resetado": número, string, função, classe etc. A diferença é que o que se importa está vindo de um módulo e é armazenado em uma variável.

