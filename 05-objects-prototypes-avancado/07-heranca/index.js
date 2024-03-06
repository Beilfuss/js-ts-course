// Herança na parte de protótipos

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco); // chama a função pai, passa this e os argumentos que a função pai recebe
    this.cor = cor; // atributo adicional de Camiseta, além dos que herda de Produto
}
Camiseta.prototype = Object.create(Produto.prototype); // cria um objeto vazio e setta o prototype desse objeto como sendo o do Produto
Camiseta.prototype.constructor = Camiseta; // explicitando que o construtor de Camiseta é Camiseta (senão fica Produto como construtor)

Camiseta.prototype.aumento = function(percentual) { // sobrescrevendo "aumento" para Camiseta
    this.preco = this.preco + (this.preco * (percentual/100));
}

const produto = new Produto('Copo', 5);
console.log(produto);

const camiseta = new Camiseta('Regata', 7.5, 'preta');
camiseta.aumento(100);
console.log(camiseta);

// Primeiro o JS olha dentro do objeto, depois no __proto__ do objeto, depois no __proto__ do objeto pai, depois no Object.prototype.

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false, // não pode apagar ou sobrescrever essa propriedade

        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('Caneca', 10, 'Plático', 5);
caneca.estoque = '100'; // não vai funcionar
caneca.estoque = 100; // funciona (setter)
console.log(caneca);
console.log(caneca.estoque); // getter