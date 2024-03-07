const falar = {
    falar() {
        console.log(`${this.nome} está falando`);
    }
}

const andar = {
    andar() {
        console.log(`${this.nome} está andando`);
    }
}

// const pessoaPrototype = { ...falar, ...andar }; // dessa forma, desacopla-se completamente os métodos (falar pode ser usado onde se quiser)
const pessoaPrototype = Object.assign({}, falar, andar); // faz o mesmo: cria um objeto vazio e passa as funções que se quer que sejam métodos dos objetos

// * Compor um objeto com outros objetos é chamado de "Composição"
// * Essa composição também é chamada de Mixing, que ocorre quando métodos sem herança são "jogados" dentro de um objeto

function criaPessoa(nome, sobrenome) {

    /*
    // Dessa forma, ainda está acoplando os métodos. Nesse caso, pode-se usar "composição"
    const pessoaPrototype = { // aqui sim devem ficar os métodos, no prototype das pessoas
        falar() { // esses métodos não vão ficar em cada objeto, vão ficar em um lugar só e serão usados por todos
            console.log(`${this.nome} está falando`);
        },
        andar() {
            console.log(`${this.nome} está andando`);
        }
    }
    */
    
    /*
    return {
        nome,
        sobrenome,
        falar() { // método no objeto. A cada objeto criado, um método falar vai ser criado, o que consome recursos e não é performático
            console.log(`${this.nome} está falando`);
        }
        
    }; */

    return Object.create(pessoaPrototype, { // dessa forma, retorna um novo objeto com um prototype, chaves e propriedades das chaves
        nome: {
            value: nome
        },
        sobrenome: {
            value: sobrenome
        }
    });
}

const p1 = criaPessoa('Liam', 'Gallagher'); // também tem __proto__
p1.falar();
p1.andar();

const p2 = criaPessoa('Noel', 'Gallagher'); // também tem __proto__
p2.falar();
p2.andar();
