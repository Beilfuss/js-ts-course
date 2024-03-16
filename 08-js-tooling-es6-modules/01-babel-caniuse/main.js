
const nome = 'Matheus';
const obj = {nome};
const novoObj = {...obj};
console.log(novoObj);

// converte para uma constructor function
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}