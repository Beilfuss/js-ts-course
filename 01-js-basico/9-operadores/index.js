/* 

Operadores Aritméticos: 

+ Adição / Concatenação
- Subtração
/ Divisão
* Multiplicação
** Potenciação
% Resto da divisão

*/

const num1 = 5;
const num2 = 10;
console.log('Soma:',num1 + num2);

const num3 = '5';
const num4 = '10';
console.log('Concatenação:',num3 + num4);

console.log('Divisão:',num1 / num2);

console.log('Potência:',num1 ** num2);

console.log('Resto:',num2 % num1);

console.log(num1 + num2 + num2 + num1);
console.log(num1 + num2 * num2);
console.log((num1 + num2) * num2); // Altera a precedência das operações

/* Precedência dos operadores:

()
**
* / %
+ -

*/

console.log(num1 * num2 / num2); // Como todos os operadores têm a mesma precedência, a operação é realizada na ordem em que é escrita

let contador = 1;
contador++; // Comando de incremento: contador + 1
++contador; // Funciona assim também, mas nesse caso primeiro realiza a operação e depois atualiza a variável
console.log(contador);

contador--; // Operador de decremento

// Operador de atribuição
contador = contador + 2; // Para contadores com passos maiores
contador += 2; // Mesma coisa que acima. Isso pode ser feito com qualquer operador aritmético

let numero1 = 10;
let numero2 = 'Matheus';
console.log(numero1 * numero2); // Not a Number significa que algum tipo de dado não bateu e a conta deu errado

numero2 = '5';
console.log(numero1 * numero2); // Desse jeito o JS deixa

numero2 = parseInt('5'); // Conversão de str para int
console.log(typeof numero2); 

numero2 = parseFloat('5.2'); // Conversão de str para float
console.log(typeof numero2); // JS não diferencia int de float

numero2 = Number('5'); // Conversão mais simples
console.log(typeof numero2); 