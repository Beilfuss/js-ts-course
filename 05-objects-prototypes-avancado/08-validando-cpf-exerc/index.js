// * Validando o CPF: 705.484.450-52 / 070.987.720-03
/*

7x  0x  5x  4x  8x  4x  4x  5x  0x
10  9   8   7   6   5   4   3   2
70  0   40  28  48  20  16  15  0 = 237

11 - (237 % 11) = 5 (Primeiro dígito. Esse número não pode ser maior que 9; se for, é 0)

7x  0x  5x  4x  8x  4x  4x  5x  0x  5x (inclui o valor obtido anteriormente)
11  10  9   8   7   6   5   4   3   2
77  0   45  32  56  24  20  20  0   10 = 284

11 - (284 % 11) = 2 (Segundo dígito. Esse número também não pode ser maior que 9; se for, é 0)

Se o CPF que sair dessas contas for igual ao CPF inserido, ele é válido.

*/

let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D/g, ''); // "/\D/g" significa uma representação de qualquer coisa que não é um número
let cpfArray = Array.from(cpfLimpo); // convertendo String em Array

let cpfArray1 = [...cpfArray];

for (let i = 0; i <= 8; i++) {
    cpfArray1[i] = Number(cpfArray1[i]) * (10 - i);
}

let primeiroDigitoSoma = cpfArray1.reduce(function(acumulador, valor, indice) {
    if (indice > 8) return acumulador;
    acumulador += Number(valor);
    return acumulador;
}, 0);

const primeiroDigitoConta = 11 - (primeiroDigitoSoma % 11);
const primeiroDigito = primeiroDigitoConta > 9 ? 0 : primeiroDigitoConta;

let cpfArray2 = [...cpfArray];

cpfArray2[9] = primeiroDigito;

for (let i = 0; i <= 9; i++) {
    cpfArray2[i] = Number(cpfArray2[i]) * (11 - i);
}

let segundoDigitoSoma = cpfArray2.reduce(function(acumulador, valor, indice) {
    if (indice > 9) return acumulador;
    acumulador += Number(valor);
    return acumulador;
}, 0);

const segundoDigitoConta = 11 - (segundoDigitoSoma % 11);
const segundoDigito = segundoDigitoConta > 9 ? 0 : segundoDigitoConta;

const cpfArrayFinal = [...cpfArray];
cpfArrayFinal[9] = primeiroDigito;
cpfArrayFinal[10] = segundoDigito;

if (cpfLimpo === cpfArrayFinal.join('')) {
    console.log('CPF Válido');
}
