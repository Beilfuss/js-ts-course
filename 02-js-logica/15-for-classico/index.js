/*

console.log('Linha 0');
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5');

O objetivo é sempre tentar não repetir o código

*/

// i = index
for (let i = 0; i <= 5; i++) { // ([variável de controle]; [condição]; [forma de incremento]) 
    console.log(`Linha ${i}`);
}

console.log('');

for (let i = 40; i <= 50; i++) { // pode-se começar a iteração por outros valores
    console.log(i);
}

console.log('');

for (let i = 40; i <= 50; i += 5) { // pula a iteração de cinco em cinco
    console.log(i);
}

console.log('');

for (let i = -10; i <= 20; i += 5) { // começando com número negativo
    console.log(i);
}

console.log('');

for (let i = 20; i >= -10; i -= 5) { // indo de trás para frente
    console.log(i);
}

console.log('');

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'ímpar'; // checando se é par
    console.log(i, par);
}

console.log('');

//              0       1       2
const frutas = ['Maçã', 'Pera', 'Uva', 'Banana', 'Laranja', 'Melancia'];

// console.log(frutas.length);

for (let i = 0; i < frutas.length; i++) { // para percorrer o tamanho do array
    console.log(`Índice ${i}`, frutas[i]);
}