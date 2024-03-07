// Herança com classes

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' já ligado');
            return;
        }
        
        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(this.nome + ' já desligado');
            return;
        }
        
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico { // "extends" faz Smartphone ter tudo o que DispositivoEletronico tem
    constructor(nome, cor, modelo) {
        super(nome); // chama a Superclasse (classe pai) e passa os parâmetros que o construtor dela recebe
        this.cor = cor; // parâmetro específico de Smartphone
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico { // essa classe não tem relação com Smartphone, apenas com DispositivoEletronico
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Método "ligar" alterado!');
    }

    falaOi() {
        console.log('Oi');
    }
}

// const s1 = new Smartphone('S7'); // já funciona mesmo com a classe "Smartphone" vazia
const s1 = new Smartphone('Samsung', 'Preto', 'S10');
console.log(s1);

console.log();

const t1 = new Tablet('iPad', true);
console.log(t1.ligado); // "ligado" é buscado do (prototype do) pai "DispositivoEletronico". Isso é herança
t1.ligar(); // usa o método próprio se tiver ele (sobrescrita de método)
t1.falaOi(); // método só do tablet, não disponível para objetos das outras classes (assim como "ligar()")

// classe herda do pai, e seus métodos específicos ficam só para ela. Classes filhas são independentes umas das outras

/*
const d1 = new DispositivoEletronico('Smartphone');
d1.ligar();
d1.ligar();
d1.desligar();
d1.desligar();
console.log(d1);
*/

/*
Pode-se especializar quantas vezes quiser, mas cuidado com isso, pois quanto mais se estende uma classe, mais herança se tem
na cadeia, mais complexo e acoplado o código fica e mais específica a classe filha.
*/