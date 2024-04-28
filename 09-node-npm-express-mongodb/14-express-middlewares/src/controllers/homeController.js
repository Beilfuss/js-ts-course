exports.paginaInicial = (req, res) => {
    res.render('index');
};

exports.trataPost = (req, res) => {
    res.send('Olá! Sou sua nova rota de POST.');
    return; // significa que nenhum middleware será utilizado, a função termina aqui
};