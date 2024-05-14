exports.middlewareGlobal = (req, res, next) => {
    // console.log('Passei no middleware global.');

    if (req.body.cliente) {
        req.body.cliente = req.body.cliente.replace('teste', 'Não faça testes aqui!')
        console.log();
        console.log(`Vi que você postou ${req.body.cliente}`);
        console.log();
    }
    next();
}

exports.outroMiddleware = (req, res, next) => {
    console.log('Sou seu outro middleware!');
    next();
}

/* 
Aqui, poderia usar "module.exports" para exportar uma função. 
Da forma como está, pode-se exportar mais funções.
*/