const mongoose = require('mongoose');
const validator = require('validator');

const ContatoSchema = new mongoose.Schema({
    nome: { type: String, required: true }, // criando um objeto do tipo string e obrigatório
    sobrenome: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    telefone: { type: String, required: false, default: '' },
    criadoEm: { type: Date, default: Date.now }, // salva a data quando salvar o contato. Campo automático
    descricao: String
});

const ContatoModel = mongoose.model('Contato', ContatoSchema); // criando o model ([nome do model], [nome do schema do model])

function Contato(body) {
    this.body = body;
    this.errors = [];
    this.contato = null;
}

Contato.buscaPorId = async function(id) { // função estática: não precisa instanciar Contato para usar essa função
    if(typeof id !== 'string') return;
    const user = await ContatoModel.findById(id);
    return user;
};

Contato.prototype.register = async function() {
    this.valida();

    if(this.errors.length > 0) return; // se der algum erro, retorna

    // passando, pode registrar o contato

    this.contato = await ContatoModel.create(this.body);
};

Contato.prototype.valida = function() {
    this.cleanUp();

    // Validação

    // O e-mail precisa ser válido
    if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido'); // se tiver algum valor no email, valida
    if(!this.body.nome) this.errors.push('Nome é um campo obrigatório');
    if(!this.body.email && !this.body.telefone) { // se nem e-mail nem telefone foi enviado
        this.errors.push('Pelo menos um contato precisa ser enviado: e-mail ou telefone');
    }   
}

Contato.prototype.cleanUp = function() { // faz um for nas chaves do body e garante que tudo dentro do body é uma string
    for(const key in this.body) {
        if (typeof this.body[key] !== 'string') {
            this.body[key] = '';
        }
    }

    this.body = { // garante que o objeto vai ter somente os campos que quer
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        email: this.body.email,
        telefone: this.body.telefone,
    }
}

module.exports = Contato;
