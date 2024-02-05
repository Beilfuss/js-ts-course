const numero = 10;

/*
Se (numero >= 0 && numero <= 5) ocorrer, faça isso {código}
Se não faça isso {código} --> else
*/

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5.');
} else {
    console.log('O número não está entre 0 e 5.');
}

// Usando else if

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) { // para checar mais de uma condição
    console.log('O número está entre 6 e 8.');
} else if (numero >= 9 && numero <= 11) {
    console.log('O número está entre 9 e 11.'); // executa o bloco de código que for verdadeiro e não executa mais nada das condições
} else {
    console.log('O número não está entre 0 e 11.');
}

console.log('Aqui vai o resto do código.')