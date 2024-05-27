exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variável local.';
    next();
}

exports.outroMiddleware = (req, res, next) => {
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if (err && err.code == 'EBADCSRFTOKEN') { // "EBADCSRFTOKEN" é o código desse erro
        console.log('BAD CSRF');
        return res.render('404');
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken(); // variável disponível em todas as views
    next();
}