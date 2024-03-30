const nome = 'Noel';
const sobrenome = 'Gallagher';

const falaNome = () => nome + ' ' + sobrenome;

// * Primeira forma de se exportar:
/*
module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;
*/

// * Segunda forma de se exportar:

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

// * Terceira forma de se exportar:

this.qualquerCoisa = 'O que quiser exportar';

/*
console.log(module);
console.log();
console.log(module.exports); 
*/

// Pode-se mudar o nome da variável exportada:

exports.nome2 = nome; 
exports.sobrenome2 = sobrenome; 
exports.falaNome2 = falaNome;

// Exportando uma classe:

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;

// Sobrescrevendo o objeto "module.exports" inteiro, sem chaves:

/*
const nome3 = 'Dave';
const sobrenome3 = 'Grohl';

module.exports = { // desse jeito não funciona só com "exports"
    nome3, sobrenome3, Pessoa
};
*/