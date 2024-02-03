/*
Operadores de comparação (comparam dois valores):
> maior que
>= maior que ou igual a
< menor que 
<= menor que ou igual
== igualdade (valor) - Não recomendado o uso
=== igualdade estrita (valor e tipo)
!= diferente (valor) - Não recomendado o uso
!== diferente estrito (valor e tipo)
*/

let comparacao = 10 > 5;
console.log(comparacao); // true ou false

comparacao = 10 >= 10;
console.log(comparacao);

let num1 = 10; // number
let num2 = '10'; // string

comparacao = num1 == num2; // corrige os tipos
console.log(comparacao);

comparacao = num1 === num2; // false porque checa os tipos
console.log(comparacao);

num1 = 10;
num2 = 10;
comparacao = num1 === num2; // true
console.log(comparacao);

num1 = 10;
num2 = '10';
comparacao = num1 != num2; // false porque não checa os tipos
console.log(comparacao);

num1 = 10;
num2 = '10';
comparacao = num1 !== num2; // true porque checa os tipos
console.log(comparacao);