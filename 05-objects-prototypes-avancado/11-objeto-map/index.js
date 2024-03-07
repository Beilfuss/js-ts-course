// Objeto Map: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map

const pessoas = [
    { id: 3, nome: 'Liam' },
    { id: 2, nome: 'Noel'},
    { id: 1, nome: 'Krist'}
];

/*
const novasPessoas = {};
for (const pessoa of pessoas) {
    // novasPessoas[id] = { id, nome };
    const { id } = pessoa;
    novasPessoas[id] = { ...pessoa }; // com muitas chaves é melhor fazer assim
}
*/

const novasPessoas = new Map(); // com Map, as chaves podem ser qualquer coisa (como números), a estrutura de dados continua par chave-valor e a ordem de inserção se manteve
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa }); // setta os valores usando .set([chave], [valor(es)])
}

console.log(novasPessoas);
console.log(novasPessoas.get(2)); // obtendo a pessoa 2

// Usando Map(), o que muda é a forma de criar e obter valores

console.log();

// Além disso, pode-se iterar sobre o Map:

for (const pessoa of novasPessoas) {
    console.log(pessoa); // retorna arrays com chave e valor
}

console.log();

// Isso permite, por exemplo, desestruturar: 

for (const [identifier, { id, nome }] of novasPessoas) {
    console.log(identifier, id, nome); 
}

console.log();

// Iterar permite, também, pegar só as chaves:

for (const chave of novasPessoas.keys()) {
    console.log(chave); 
}

console.log();

// Iterar permite, também, pegar só os valores:

for (const valor of novasPessoas.values()) {
    console.log(valor); 
}

console.log();

// Por fim, Map() também permite deletar chaves:

novasPessoas.delete(2);
console.log(novasPessoas);