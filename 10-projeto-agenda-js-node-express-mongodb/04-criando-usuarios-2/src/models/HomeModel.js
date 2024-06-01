const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    titulo: { type: String, required: true }, // criando um objeto do tipo string e obrigatório
    descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema); // criando o model ([nome do model], [nome do schema do model])

module.exports = HomeModel;

// Aqui haveria uma classe sendo exportada em vez da forma acima.