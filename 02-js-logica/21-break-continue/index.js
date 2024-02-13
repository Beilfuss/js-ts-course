// "break" e "continue" funcionam em todos os laços de repetição vistos

// "continue" continua para a próxima iteração
// "break" sai do laço

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

    if (numero === 2) {
        continue; // continua para a próxima interação, parando a execução por aqui e pulando o 2
    }

    console.log(numero);

    if (numero === 7) {
        break; // interrompe a iteração, continuando o restante do código
    }
}

console.log('');

// com while: 

let i = 0;
while (i < numeros.length) {
    let numero = numeros[i];

    if (numero === 2) {
        i++; // não esquecer da variável de controle antes de "continue"
        continue; 
    }

    console.log(numero);

    if (numero === 7) {
        i++; // não esquecer de incrementar antes do "break", se necessário
        break; 
    }

    i++; // não esquecer da variável de controle
}