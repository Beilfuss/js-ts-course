const Contato = require('../models/ContatoModel');

exports.index = async (req, res) => {
    const contatos = await Contato.buscaContatos();
    res.render('index', { contatos }); // não precisa ser "contatos: contatos" porque os dois têm o mesmo nome
};
