// índices         0       1       2
const nomes = ['Matheus', 'Liam', 'Noel']; // criação do array (array literal)

// const nomes = new Array('Matheus', 'Liam', 'Noel'); // construindo o mesmo array anterior usando o construtor do Array. Menos usado

// const novo = nomes; // array funciona por referência. Tudo o que fizer em nomes, nesse caso, reflete em "novos"

const novo = [...nomes]; // usando "spread" operator, aí efetivamente copia os valores

nomes[2] = 'Gallagher'; // modificando uma posição

nomes.push('Krist'); // adicionando elementos no final do array
nomes.unshift('Kurt'); // adicionando elementos no início do array

delete nomes[2]; // [ 'Matheus', 'Liam', <1 empty item> ]

const removido = novo.pop(); // remove o último elemento do array e retorna ele para a variável
const removido2 = novo.shift(); // remove o primeiro elemento do array e retorna ele para a variável

const fatiado = nomes.slice(1, 3); // "fatiando" o array do índice 1 ao 3 (3 não incluído, inclui só o índice 1 e 2)
console.log(fatiado);

const fatiadoNegativo = nomes.slice(0, -1); // tira um do final do array
console.log(fatiadoNegativo);

const fatiadoNegativo2 = nomes.slice(1, -1); // tira um do final do array e um do começo
console.log(fatiadoNegativo2);

console.log(nomes);
console.log(novo, removido2, removido);

console.log(nomes.length); // atributo "length" do array retorna o tamanho dele

// shift e unshift não são comuns porque eles deslocam todos os índices do array, o que pode gerar problemas de performance
// pop e push mais utilizados

console.log('');

const nome = 'William John Paul Gallagher';
const nomeSeparado = nome.split(' '); // separando uma string em um array onde há espaços nela
console.log(nomeSeparado);

const nomesOasis = 'William John Paul Gallagher, Noel Thomas David Gallagher';
const nomesSeparados = nomesOasis.split(','); // separando a string por vírgulas
console.log(nomesSeparados);

const nomeJunto = nomeSeparado.join(' '); // juntando valores do array em uma string e colocando um espaço entre eles (também pode ser qualquer separador)
console.log(nomeJunto);