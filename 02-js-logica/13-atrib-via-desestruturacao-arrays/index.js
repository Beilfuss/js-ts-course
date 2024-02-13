/*

let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const letras = [b, c, a];
[a, b, c] = letras; // essa é a atribuição via desestruturação usando array

// "atribuição via desestruturação" porque se atribui para cada índice do array um valor 

console.log(a, b, c);

*/

//               0, 1, 2, 3, 4, 5, 6, 7, 8
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const primeiro = numeros[0];

console.log(primeiro);

// const [primeiroNumero, segundoNumero] = numeros; // nesse caso, pega os elementos de índice 0 e 1
// console.log(primeiroNumero, segundoNumero);

const [primeiroNumero, segundoNumero, ...resto] = numeros; // a sintaxe "..." deixa pegar o resto do array. Operador "rest"
console.log(primeiroNumero, segundoNumero, resto);

// operador "...", quando usado para pegar o resto de algo, chama de "rest operator". Quando se usa ele para "espalhar" alguma coisa, chama-se ele de "spread operator"

const [um, , tres, , cinco, , sete] = numeros; // pula valores usando espaços vazios com vírgulas
console.log(um, tres, cinco, sete);

//                 0          1          2
//                 0, 1, 2    0, 1, 2    0, 1, 2
const numbers = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

console.log(numbers[1][2]); // para acessar valores dentro de arrays dentro de arrays

// atribuição via desestruturação:

const [, [, ,seis]] = numbers; // para pegar o valor 6. Pula o array 0 e pula dois índices

console.log(seis);

const [lista1, lista2, lista3] = numbers;
console.log(lista2[1]);