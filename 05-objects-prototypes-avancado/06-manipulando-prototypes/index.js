
const objA = { // sempre que se cria um objeto literal, o JS automaticamente chama a função construtora de objetos "new Object". É o mesmo para array, date etc.
    chaveA: 'A'
    // __proto__: Object.prototype
};

// Toda função construtora ("new Object") tem um objeto "Object.prototype" atrelado a ela
// Esse prototype vai dentro do objeto implicitamente com uma chave "__proto__"

const objB = {
    chaveB: 'B'
    // __proto__: Object.prototype
}

// Fazendo com que o __proto__ de objB seja o mesmo que o do objA:

Object.setPrototypeOf(objB, objA); // ([qual objeto vai ter o prototype mudado], [qual objeto vai ter seu prototype copiado])

// Com isso, a cadeia ficou: objB filho do objA filho do prototype

// Agora, "chaveA" pode ser acessada pelo objB

console.log(objB.chaveA);

/*
O __proto__ do objB é o objA, que tem a chaveA. Por isso ela pode ser acessada pelo objB. O __proto do objA é o prototype:

{"chaveB": "B"}
    chaveB: "B"
    __proto__:
        chaveA: "A"
        __proto__: Object
*/

// Poder-se-ia criar uma cadeia bem grande:

const objC = new Object(); // dá no mesmo que criar literalmente, só tem que adicionar as chaves
objC.chaveC = 'C';

Object.setPrototypeOf(objC, objB); // nesse caso, o objC passa pelo objB que passa pelo objA (poderia ir direto para o A)
console.log(objC.chaveB, objC.chaveA);

/*
__proto__ do objC:

{"chaveC": "C"}
    chaveC: "C"
    __proto__:
        chaveB: "B"
        __proto__:
            chaveA: "A"
            __proto__: Object prototype
*/

// Com isso, pode-se reaproveitar códigos dos objetos.
// * Mas, não é recomendável usar a propriedade __proto__, alterar ela. Próximas partes são para fins didáticos

// Para acessar o prototype de um objeto:

Object.getPrototypeOf(objA); // getter

console.log('');

// * Exemplos com função construtora:

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

// Criando método dentro do prototype da função:

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);
// p1.desconto(100);
p1.aumento(100);
console.log(p1);

// Reaproveitando as funções de Produto em outro objeto (as chaves usadas nas funções têm que ser as mesmas de Produto):

const p2 = {
    nome: 'Caneca',
    preco: 15 // chave tem que ser igual para funcionar
};

Object.setPrototypeOf(p2, Produto.prototype); // agora, o __proto__ do p2 tem as funções do prototype de Produto

p2.aumento(10);

console.log(p2);

// Além disso, considera-se que p2 foi construída pela função construtora Produto

// * Outra forma de se fazer isso é criando um objeto e já settar o prototype dele:

const p3 = Object.create(Object.prototype); // ([objeto]). Nesse caso, cria um objeto vazio (se passar o Object.prototype)
console.log(p3);

const p4 = Object.create(Produto.prototype); // Nesse caso, o construtor de p4 vai ser a função Produto, mas o objeto vai ser vazio
p4.nome = 'Colar'; // tem que settar os atributos
p4.preco = 100;
p4.aumento(10);
console.log(p4);

const p5 = Object.create(Produto.prototype, { // ([objeto], [propriedades]) pode-se settar propriedades das chaves aqui
    // criando as chaves com configurações:
    nome: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Boné'
    },
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
    numero: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    }
});

p5.aumento(10);
console.log(p5);

// Assim, com Object.create se cria o objeto, setta o prototype dele e as propriedades (assim como com "defineProperties")