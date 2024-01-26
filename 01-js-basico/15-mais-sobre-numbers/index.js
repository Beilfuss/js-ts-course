let num1 = 1; // number
let num2 = 2.5; // number

console.log(num1 + num2);

console.log(num1.toString() + num2); // não edita a variável "num1", só torna o valor temporariamente string (se atribuir a num1, aí edita)
console.log(typeof num1);

num1 = 15;

console.log(num1.toString(2)); // deixa a string com o binário de num1

num1 = 10.575654745;

console.log(num1.toFixed(2)); // declara quantas casas decimais se quer que o número tenha. Arredonda o número

num1 = 10;

console.log(Number.isInteger(num1)); // retorna verdadeiro ou falso se um número é inteiro ou não

let temp = num1 * 'Ola';
console.log(temp); // NaN
console.log(Number.isNaN(temp)); // retorna verdadeirou ou falso se é NaN ou não

// Contas em JS seguem o padrão IEE 754-2008

num1 = 0.7;
num2 = 0.1;

console.log(num1 + num2); // 0.7999999999999999. Imprecisão mínima

num1 += num2; // num1 = num1 + num2

console.log(num1); // dá no mesmo

num1 += num2; // 0.9
num1 += num2; // 1.0

num1 = num1.toFixed(2); // arrendonda para 1.0;
console.log(num1);
console.log(Number.isInteger(num1)); // False. Ele não tem esse valor, na verdade
console.log(Number.isInteger(1.00)); // True

num1 = parseFloat(num1); // num1 = parseFloat(num1.toFixed(2)); // isso funcionaria
console.log(Number.isInteger(num1));

// outra solução (a solução anterior é melhor):

num1 = 0.7;
num2 = 0.1;

num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0

console.log(num1);
console.log(Number.isInteger(num1));

// se atentar à imprecisão de operações