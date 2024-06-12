const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

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

    async login() {
        this.valida();
        if(this.errors.length > 0) return; // não passa daqui caso ocorra qualquer erro nos dados do formulário
        this.user = await LoginModel.findOne({ email: this.body.email }); // await porque vai esperar mexer na base de dados. Retorna ou usuário ou "null"

        if(!this.user) {
            this.errors.push('Usuário não existe.');
            return;
        }

        if(!bcryptjs.compareSync(this.body.password, this.user.password)) { // compara se a senha que veio é igual da base de dados
            this.errors.push('Senha inválida.');
            this.user = null;
            return;
        }

    }    

    async register() { // Para fazer operações de bases de dados, precisamos trabalhar com promises, por isso o async
        this.valida();
        if(this.errors.length > 0) return; // não passa daqui caso ocorra qualquer erro nos dados do formulário

        await this.userExists(); // await porque vai esperar mexer na base de dados
        if(this.errors.length > 0) return; // não passa daqui caso o usuário já exista

        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt); // hash da senha com a senha e um salt

        this.user = await LoginModel.create(this.body); // objeto registrado só com e-mail e password
    }

    async userExists() { // async porque vai mexer na base de dados
        this.user = await LoginModel.findOne({ email: this.body.email }); // await porque vai esperar mexer na base de dados. Retorna ou usuário ou "null"
        if(this.user) this.errors.push('Usuário já existe');
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
