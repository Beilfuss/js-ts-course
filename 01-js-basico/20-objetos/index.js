const array =[1,2,3]; // pode-se manipular arrays e objetos mesmo usando const, mas reatribuir ("=") usando const, não
array.push(4);
// console.log(array); // [ 1, 2, 3, 4 ]

const pessoa1 = { // "{}" para criar um objeto
    nome: 'Matheus', // atributo
    sobrenome: 'Beilfuss',
    idade: 21
};

console.log(pessoa1.nome);

function criaPessoa (nome, sobrenome, idade) { // função "factory" que recebe parâmetros, cria objeto pessoa e retorna ele
    return {
        nome: nome, // não precisa repetir se o nome do atributo e o parâmetro for igual
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa2 = criaPessoa('Maria', 'Silva', 25); // chamando a função com argumentos
console.log(pessoa2.nome);

/*
function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade }; // não precisa repetir se o nome do atributo e o parâmetro for igual
}
*/

const pessoa3 = {
    nome: 'Matheus',
    sobrenome: 'Beilfuss',
    idade: 21,

    fala() { // método do objeto
        console.log(`${this.nome} ${this.sobrenome} está falando "Oi!".`); // "this" referencia o próprio objeto e seus atributos
        console.log(`A minha idade atual é ${this.idade} anos.`);
    },

    incrementaIdade() {
        this.idade++;
    }
}

pessoa3.fala();
pessoa3.incrementaIdade();
pessoa3.fala();