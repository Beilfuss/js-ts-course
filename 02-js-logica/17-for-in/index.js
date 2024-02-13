const frutas = ['Pera', 'Maçã', 'Uva']; // vetor é um array com uma dimensão

/*
for (let i = 0; i < frutas.length; i++) { // for clássico iterando posições
    console.log(frutas[i]);
}
*/

for (let indice in frutas) { // lê os índices do array. Se for um objeto, vai ler as chaves
    // console.log(indice); // lê os índices
    console.log(frutas[indice]); // lê os valores
}

const pessoa = {
    nome: 'Liam',
    sobrenome: 'Gallagher',
    idade: 51
};

for (let chave in pessoa) {
    // console.log(chave); // lê as chaves
    console.log(chave, pessoa[chave]); // mostra a chave e o valor dela de forma dinâmica (a outra forma seria usando a notação de ponto: pessoa.nome, mas aí não é dinâmico)
}