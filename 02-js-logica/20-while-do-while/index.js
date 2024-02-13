// com for, sabe-se o tamanho do elemento com que se está trabalhando
// com while ou do while, geralmente não se sabe isso.

/*

let i = 0; // variável de controle

while (i <= 10) { // condição
    console.log(i);
    i++; // não esquecer de incrementar a variável de controle, para não criar um laço infinito
}

*/

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;

let rand = random(min, max);

while (rand !== 10) { // não se sabe quantas vezes esse laço vai executar até dar certo, boa aplicação para o while
    rand = random(min, max);
    console.log(rand);
}

console.log("######");

// a diferença entre "while" e "do-while" é que while checa a condição e depois executa o código,
// enquanto o "do-while" executa o código primeiro e depois checa a condição

do {
    rand = random(min, max);
    console.log(rand);
} while (rand != 10);