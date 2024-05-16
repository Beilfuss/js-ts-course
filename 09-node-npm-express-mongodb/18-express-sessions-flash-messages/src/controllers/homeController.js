exports.paginaInicial = (req, res) => {
    req.flash('info', 'Olá, mundo!');
    req.flash('error', 'Olá, mundo!');
    req.flash('success', 'Olá, mundo!');
    res.render('index');
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};