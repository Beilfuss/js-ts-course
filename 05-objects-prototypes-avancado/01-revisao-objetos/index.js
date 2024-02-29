// Todos os tipos de dados têm um construtor, embora possam ser criados literalmente: '', 123, [],...

// Objeto literal:
const pessoa = { // corpo do objeto
    nome: 'Noel', // chave: valor
    sobrenome: 'Gallagher'
};

console.log(pessoa.nome); // acessando valor de uma chave de um objeto com notação de ponto
console.log(pessoa['sobrenome']); // acessando com notação de colchetes. Aceita valores dinâmicos

const pessoa1 = new Object(); // criando um objeto com o construtor "Object"
pessoa1.nome = 'Liam';
pessoa1.sobrenome = 'Gallagher';
pessoa1.idade = 51;

console.log(pessoa1);

// delete pessoa1.nome; // apagando uma chave de um objeto
// console.log(pessoa1);

// Objetos podem conter Métodos: funções dentro do objeto que executam ações.
// Vantagem disso é que se têm acesso às coisas do objeto dentro do método.

pessoa1.falarNome = function() { // criando um método para pessoa1
    return `${this.nome} está falando seu nome.`; // "this" refere-se ao objeto que chama
};

console.log(pessoa1.falarNome());

pessoa1.getAnoNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.getAnoNascimento());

/*
for (let chave in pessoa1) {
    console.log(chave); // vendo todas as chaves da pessoa1
    console.log(pessoa1[chave]); // vendo o valor de todas as chaves
}
*/

console.log('');

// Moldes para criar objetos: Factory functions / Constructor functions / Classes
// Os dois primeiros são padrões de projeto, pode-se escolher um ou outro

// Factory function:
function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        get nomeCompleto() { // sem a palavra get funciona, mas aí tem que tratar como uma função na hora de chamar
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Krist', 'Novoselic');
console.log(p1.nomeCompleto); // funciona como uma chave, mas é um método

console.log('');

// Constructor function:
function Pessoa(nome, sobrenome) { // começa com letra maiúscula
    this.nome = nome;
    this.sobrenome = sobrenome;

    // Object.freeze(this); // "trava" todo objeto feito por essa função. Nenhum poderá ser alterado. Funciona com arrays também

    // return this; -> implícito
}

const p2 = new Pessoa('Dave', 'Grohl');
console.log(p2); // mostra o objeto e a função construtora que o fez

// A diferença entre as duas é que o JS muda o comportamento da função com a palavra "new".
/*
A palavra new:
1) cria um objeto vazio: {};
2) atrela a palavra "this" dentro da função construtora ao objeto;
3) retorna this (retorna o objeto criado implicitamente).
*/

p2.nome = 'Virginia'; // não altera o valor da variável, altera o valor do valor da variável
console.log(p2);

// p2 aponta para um endereço na memória que aponta para um valor
// p2 = [Endereço na memória] -> Valor
// p2 = [Novo endereço] - isso não pode
// p2.enderecoMemoria = {nome: 'Outra coisa'}; // isso pode
// Alterando da forma acima, não está alterando a referência da memória (que é o que a const não deixa), está alterando o valor no endereço de memória.

Object.freeze(p2); // "trava" um objeto, impedindo que os valores dele mudem