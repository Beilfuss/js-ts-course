// Não se pode criar constantes com palavras reservadas;
// Constantes precisam ter nomes significativos;
// Não se pode começar o nome de constante variável com um número;
// Constantes não podem conter espaços ou traços;
// Utiliza-se camelCase;
// Constantes são Case-sensitive;
// Não se pode modificar o valor de uma constante;
// Não utilizar var, utilizar const.

const nome = 'João';
console.log(nome);

// const nome; // Não se pode declarar uma constante sem atribuir um valor a ela
// nome = 'Matheus'; // Não se pode atribuir outro valor para uma constante

// Pode-se atribuir o valor de uma variável para outra

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;

let resultadoTriplicado = resultado * 3;

resultadoTriplicado = resultadoTriplicado + 5;

console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);

console.log(typeof primeiroNumero); // Para saber o tipo da variável

let numero1 = '5';
let numero2 = 5;
let result = numero1 + numero2 // Concatenação

console.log(result);
console.log(typeof result)