let num1 = 9.54578;

let num2 = Math.floor(num1); // arredonda para baixo
console.log(num2);

num2 = Math.ceil(num1); // arredonda para cima
console.log(num2);

num2 = Math.round(num1); // arredonda para o inteiro mais próximo
console.log(num2);

console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6)); // retorna o maior número da sequência

console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6)); // retorna o maior número da sequência

let aleatorio = Math.random(); // número aleatório entre 0 e 1
console.log(aleatorio); 

aleatorio = Math.round(Math.random() * (10 - 5) + 5); // número aleatório entre 5 e 10
console.log(aleatorio); 

console.log(Math.PI);

console.log(Math.pow(2, 10)); // 2¹⁰: 2 elevado a 10. Preferível usar o operador da linguagem: **

num1 = 9;
console.log(num1 ** (1/2)); // dá a raiz quadrada sem funções;

console.log(100/0); // JS trata o resultado de divisão por 0 com o tipo de dado numérico "Infinity". É considerado certo e verdadeiro

console.log(100 / 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001);
// Em algum momento a linguagem não suporta a conta e trata como "Infinity"

console.log(!!(100/0)); // trata infinity como true