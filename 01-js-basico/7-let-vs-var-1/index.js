// ECMAScript 2015 (ES6): padronização do JS pela associação ECMA

var nome = 'Matheus';
var nome = 'Beilfuss'; // Com let isso geraria erro, com var não

console.log(nome);

nome = 'Matheus'; // Não fazer isso, porque cria uma variável global no sistema, o que pode afetar outras