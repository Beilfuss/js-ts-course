const HomeModel = require('../models/HomeModel');

HomeModel.create({
    titulo: 'Outro título de testes',
    descricao: 'Outra descrição de testes'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e));

/*
HomeModel.find()
    .then(dados => console.log(dados))
    .catch(e => console.log(e));
*/

exports.paginaInicial = (req, res) => {
    res.render('index');
};

exports.trataPost = (req, res) => {
    // res.send('Olá! Sou sua nova rota de POST.');
    res.send(req.body);
    return; // significa que nenhum middleware será utilizado, a função termina aqui
};