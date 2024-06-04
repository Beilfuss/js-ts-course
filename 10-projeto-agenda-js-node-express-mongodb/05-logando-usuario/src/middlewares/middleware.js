exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors'); // em todas as páginas, essa variável vai ficar disponível. "req.flash" captura as mensagens de erros
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
}

exports.outroMiddleware = (req, res, next) => {
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if (err) { // se qualquer erro acontecer, ele não vai para frente
        return res.render('404');
    }
    next();
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken(); // variável disponível em todas as views
    next();
}