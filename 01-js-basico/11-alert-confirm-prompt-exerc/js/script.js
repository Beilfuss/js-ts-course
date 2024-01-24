let num1 = prompt('Digite um número:');
let num2 = prompt('Digite outro número:');

num1 = Number(num1);
num2 = Number(num2);

const resultado = num1 + num2;
alert(`O resultado da conta foi: ${resultado}`);

/* Anotações:

Como não se vai utilizar a variável "resultado" em outro lugar do código, poder-se-ia fazer assim:

alert(`O resultado da conta foi: ${num1 + num2}`);

Mas, fazer isso não é uma boa prática. É melhor deixar explícito o que se quer fazer.

*/