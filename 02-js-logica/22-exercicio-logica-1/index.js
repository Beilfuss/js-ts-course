// Escreva uma função que recebe 2 números e retorna o maior deles

/* // Minha solução:

function maiorNumero (num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return 'Números iguais';
    }
}
*/

// Solução do professor

function max(x, y) {
    if (x > y) return x;
    return y;
    // return x > y ? x : y; // solução com operação ternária
}

const max2 = (x, y) => x > y ? x : y; // arrow function com operação ternária

console.log(max(10, 2));
console.log(max2(10, 2));

