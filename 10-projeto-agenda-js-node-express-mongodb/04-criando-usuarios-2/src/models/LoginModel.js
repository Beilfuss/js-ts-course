const mongoose = require('mongoose');
const validator = require('validator');

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true }, // criando um objeto do tipo string e obrigatório
    password: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', LoginSchema); // criando o model ([nome do model], [nome do schema do model])

class Login {
    constructor(body) {
        this.body = body;
        this.errors = []; // controla se o usuário pode ou não ser criado na base de dados
        this.user = null;
    }

    async register() { // Para fazer operações de bases de dados, precisamos trabalhar com promises, por isso o async
        this.valida();
        if(this.errors.length > 0) return;

        try { // sem o try catch, a promise fica sem resolver e o programa para
            this.user = await LoginModel.create(this.body); // objeto registrado só com e-mail e password
        } catch(err) {
            console.log(err);
        }

        
    }

    valida() {
        this.cleanUp();

        // Validação

        // O e-mail precisa ser válido
        if(!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido.');

        // A senha precisa ter entre 3 e 50 caracteres
        if(this.body.password.length < 3 || this.body.password.length > 50) {
            this.errors.push('A senha precisa ter entre 3 e 50 caracteres.');
        }
    }

    cleanUp() { // faz um for nas chaves do body e garante que tudo dentro do body é uma string
        for(const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        this.body = { // garante que o objeto vai ter somente os campos que quer
            email: this.body.email,
            password: this.body.password
        }
    }
}

module.exports = Login;
