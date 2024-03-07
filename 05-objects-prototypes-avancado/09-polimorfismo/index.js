// Polimorfismo: maneira de fazer métodos se comportarem de maneira diferente em subclasses (classe = função construtora)

// Superclasse
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor
    this.verSaldo();
};

Conta.prototype.verSaldo = function() {
    console.log(`Ag./c.: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`);
};

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype); // linkando ContaCorrente com Conta
ContaCorrente.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) { // reescrita do método "sacar" para ContaCorrente
    if(valor > (this.saldo + this.limite)) { // pode sacar até o limite negativo
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype); // linkando ContaCorrente com Conta
ContaPoupanca.constructor = ContaPoupanca;

/*
const conta1 = new Conta(11, 22, 10);
conta1.depositar(21);
conta1.sacar(31);
conta1.sacar(1);
*/

const contaCorrente = new ContaCorrente(11, 22, 0, 100);
contaCorrente.depositar(10);
contaCorrente.sacar(110);
contaCorrente.sacar(1);

console.log();

const contaPoupanca = new ContaPoupanca(12, 33, 0);
contaPoupanca.depositar(10);
contaPoupanca.sacar(110); // funciona da forma como Conta implementa
contaPoupanca.sacar(1);

// Mesmo método se comportar de forma diferente em classes filhas de um mesmo pai caracteriza Polimorfismo.
// Há outro tipo de polimorfismo chamado de "polimorfismo de sobrecarga", que não tem como fazer em JS. O que tem como fazer é o "polimorfismo de sobrescrita".