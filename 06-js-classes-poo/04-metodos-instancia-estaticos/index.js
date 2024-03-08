// Métodos estáticos são métodos que se pode acessar na classe sem instanciar a classe (utilizar a palavra "new")
// Eles também não vão estar disponíveis dentro da instância. São basicamente funções normais dentro de uma classe (talvez por questão de organização)

function teste() {
    console.log('Teste');
    // console.log(this); // "this", aqui, é o objeto global do NodeJS
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste(); // função dentro do construtor, executada a cada "new"
    }

    // método de instância
    aumentarVolume() {
        this.volume += 2; // aumenta de dois em dois
    }

    // método de instância
    diminuirVolume() {
        this.volume -= 2; // sem restrições, apenas para exemplo
    }

    static trocaPilha() { // "static" torna o método estático. Suponha que "trocaPilha" seja um método executado para todos os controles remotos
        console.log('Troca de pilhas.')
        // console.log(this.volume); // não funciona
        console.log(this); // o this aqui é settado pela classe. Ele é referente à classe (não à instância)
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume(); // método de instância, referente ao objeto "controle1"
console.log(controle1);

// Já os métodos estáticos são métodos referentes apenas à classe, e não à instância da classe:

// controle1.trocapilha(); // dá erro porque só se consegue acessar método estático pela classe
ControleRemoto.trocaPilha(); // método estático

// método de instância é referente à instância e tem acesso aos dados da instância
// método estático não tem acesso aos dados da instância (não instancia a classe). Quando não se usa "new", o construtor não é chamado e não se tem as coisas referentes às instâncias criadas

// Exemplo: 
console.log(Math.random()); // "Math" é uma "classe" que chama o método estático "random". Não há instância aqui, "new"

// Método estático: função dentro de uma classe por questão de organização (poder-se-ia ter criado ela fora, mas faz mais sentido manter ela dentro de uma classe). 