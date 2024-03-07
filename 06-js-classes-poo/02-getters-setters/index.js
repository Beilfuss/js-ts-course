// Getters e Setters em classes

const _velocidade = Symbol('velocidade'); // ([descritor, não necessário). Não precisa da palavra "new"
// Isso vai gerar um id aleatório. Cada vez que chamar o Symbol, ele vai ser aleatório (nunca vão haver dois iguais)

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0; // com "[_velocidade]", o nome se torna dinâmico. Agora, essa propriedade não pode ser acessada de fora do objeto (dá, mas é bem trabalhoso)
    }

    get velocidade() { // getter para acessar a velocidade 
        console.log('Getter');
        return this[_velocidade];
    }

    set velocidade(valor) {
        console.log('Setter');
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    acelerar() {
        if (this[_velocidade] >= 100) return; // esse limite poderia ser feito de outras formas
        this[_velocidade]++;
    }

    frear() {
        if (this[_velocidade] <= 0) return; // "[_velocidade]" para acessar velocidade com Symbol
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

for (let i = 0; i <= 200; i++) {
    c1.acelerar();
}

// c1.velocidade = 1500; // sem getter e setter, isso funciona
/* 
Nesse caso, pode-se criar atributo da classe privado que só pode se alterado na classe, com um getter
e setter para que se consiga verificar se passou ou não dos limites.
Para isso, usar-se-á um tipo de dado chamado "Symbol", que pode ser usado para criar uma chave privada
dentro do objeto.
*/

c1.velocidade = 2000; // sem getter, uma chave "velocidade" é settada, mas não é a que o programa está utilizando
c1.velocidade = 99; // funciona com o setter
console.log(c1);
console.log(c1.velocidade); // usando o getter

console.log();

// Outro exemplo:

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor) {
        valor = valor.split(' '); // separa a string onde há espaços (em um array)
        this.nome = valor.shift(); // pega o primeiro valor do array e setta o nome
        this.sobrenome = valor.join(' ');  // junta o restante dos valores e setta o sobrenome (juntando e colocando um espaço entre os valores)
    }
}

const p1 = new Pessoa('Noel', 'Gallagher');
p1.nomeCompleto = 'Krist Novoselic';
console.log(p1.nome)
console.log(p1.sobrenome);
console.log(p1.nomeCompleto); // com getter, funciona como se fosse um atributo