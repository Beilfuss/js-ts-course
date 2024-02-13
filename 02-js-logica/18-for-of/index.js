// for of é específico para objetos iteráveis: string, array, objeto...

const nome = 'Matheus';

/*
for (let i = 0; i < nome.length; i++) { // for clássico
    console.log(nome[i]);
}
*/

/*
for (let i in nome) { // for in
    console.log(nome[i]);
}
*/

for (let valor of nome) { // for of
    console.log(valor); // pega os valores sem precisar usar o índice
}

console.log('');

const nomes = ['Matheus', 'Liam', 'Noel', 'Krist', 'Dave', 'Kurt'];

for (let valor of nomes) {
    console.log(valor);
}

console.log('');

nomes.forEach(function (elemento, indice, array) { // iterando sobre array com forEach
    console.log(elemento, indice, array);
});

/*
for in retorna o índice, é preciso o array para pegar o valor;
for of retorna só o valor
*/

console.log('');

const pessoa = {
    nome: 'Noel',
    sobrenome: 'Gallagher'
};

for (let chave in pessoa) { // funciona pegando as chaves do objeto
    console.log(chave);
    console.log(chave, pessoa[chave])
}

/*
for (let valor of pessoa) { // dá erro, porque diz que o objeto não é iterável (com índices)
    console.log(valor);
}
*/

/* Resumo:

* For clássico - geralmente com iteráveis (array ou strings);
* For in - retorna o índice ou chave (strings, arrays ou objetos);
* For of - retorna o valor (iteráveis, arrays ou strings).

*/