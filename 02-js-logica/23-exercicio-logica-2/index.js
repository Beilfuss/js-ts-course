/*

* Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
* Retorne true se a imagem estiver no modo paisagem.

*/

/* // Minha solução

const ePaisagem = (l, a) => l > a ? true : false;
console.log(ePaisagem(1920, 1080));
console.log(ePaisagem(1080, 1920));

*/

function ePaisagem (largura, altura) {
    return largura > altura; // retornando só a condição já retorna true ou false
}

console.log(ePaisagem(1920, 1080));
console.log(ePaisagem(1080, 1920));

const ePaisagem2 = (largura, altura) => largura > altura; // em arrow function, sem operação ternária

console.log(ePaisagem2(1920, 1080));
console.log(ePaisagem2(1080, 1920));