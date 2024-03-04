/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

// ! Já vimos:
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperties (define uma propriedade)
*/

// Como copiar um objeto para outro:

const produto = { nome: 'Caneca', preco: 1.8 };
// const outraCoisa = produto; // "outraCoisa" aponta para o mesmo endereço que "produto"
const outraCoisa = { 
    ...produto, // agora, usando spread, são variáveis separadas
    material: 'porcelana' // pode-se adicionar mais chaves, métodos etc.
}; 

produto.nome = 'Camiseta';
outraCoisa.preco = 2;
console.log(produto);
console.log(outraCoisa);

console.log('');

const xicara = Object.assign({}, outraCoisa, { material: 'vidro' }); // ([destino/target], [outros objetos]). Nesse caso, objeto vazio, produto e outro objeto
console.log(xicara);

console.log('');

const produto2 = { nome: produto.nome, preco: produto.preco }; // copiando o objeto e pegando só as propriedades que se quer
console.log(produto2); // não muito prático

console.log('');

// Object.keys retorna um array com as chaves do objeto:
console.log(Object.keys(produto2)); // pode-se iterar nas chaves

// Object.freeze impede que um objeto seja modificado
Object.freeze(produto2);
produto2.nome = 'Teste'; // não funciona
console.log(produto2);

console.log('');

// Object.getOwnPropertyDescriptor(o, 'prop'):

console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // passa o objeto e qual propriedade dele se quer ver
/*
{
  value: 'Camiseta', // valor
  writable: true, // pode-se alterar o valor
  enumerable: true, // a chave e o valor vão ser exibidos (for in, Object.keys, console.log etc.)
  configurable: true // pode-se deletar/alterar essa propriedade do objeto
}
*/

Object.defineProperty(produto, 'nome', { // esse objeto é o property descriptor
    writable: false, // agora, essa propriedade não pode mais ser alterada
    configurable: false // agora, não se pode mais deletar/alterar essa propriedade
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

produto.nome = 'Outra coisa'; // não faz nada por causa das propriedades definidas acima
delete produto.nome; // também não faz nada pelo mesmo
console.log(produto);

console.log('');

// Object.values: retorna um array com apenas os valores do objeto

console.log(Object.values(produto));

// Object.entries: retorna um array com arrays com as chaves e os valores do objeto

console.log(Object.entries(produto));

console.log('');

for (let entry of Object.entries(produto)) { // iterando sobre as entries do objeto
    console.log(entry);
}

console.log('');

for (let [chave, valor] of Object.entries(produto)) { // iterando sobre as entries do objeto com desestruturação
    console.log(chave, valor);
}