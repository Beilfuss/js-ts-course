// defineProperty -> Getters e Setters: maneira de proteger a propriedade

// getter e setter na função construtora:

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        // value: estoque, // valor. Não faz sentido ter "value" com getter
        // writable: true, // pode alterar. Não faz sentido ter "writable" com setter
        configurable: true,  // configurável
        get: function() { // getter configurado
            return estoquePrivado;
        },
        set: function(valor) { // valida e modifica o valor
            if (typeof valor !== 'number') { // protege a variável estoquePrivado
                console.log('Bad value'); // poderia lançar uma exceção
                return;
            }
            estoquePrivado = valor; // cuidado ao usar "this" no setter para não causar um loop infinito. Buscar alternativas (como usar uma variável privada)
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 'Qualquer coisa'; // isso poderia dar erro se "estoque" tivesse que ser um número e não tivesse setter
p1.estoque = 500; // agora dá certo
console.log(p1);
console.log(p1.estoque); // executa o getter

console.log('');

// getter e setter na função factory (pode-se fazer direto no objeto):

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            nome = valor;
        }
    };
}

const p2 = criaProduto('Camiseta');
console.log(p2);
console.log(p2.nome);
p2.nome = 'Calça';
console.log(p2.nome);