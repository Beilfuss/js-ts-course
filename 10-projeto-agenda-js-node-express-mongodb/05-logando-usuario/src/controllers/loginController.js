const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    res.render('login');
};

exports.register = async function(req, res) { // função precisa ser async porque o método register é async
    
    try { // sem o try catch, a promise fica sem resolver e o programa para
        const login = new Login(req.body);
        await login.register();
    
        if(login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function() { // para voltar para a tela de login depois dos erros
                return res.redirect('back'); // volta a página
            });
            return;
        }

        req.flash('success', 'Seu usuário foi criado com sucesso.');
        req.session.save(function() { // para voltar para a tela de login depois dos erros
            return res.redirect('back'); // volta a página
        });
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
};

exports.login = async function(req, res) { // função precisa ser async porque o método register é async
    
    try { // sem o try catch, a promise fica sem resolver e o programa para
        const login = new Login(req.body);
        await login.login(); // PAREI EM 2:50
    
        if(login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function() { // para voltar para a tela de login depois dos erros
                return res.redirect('back'); // volta a página
            });
            return;
        }

        req.flash('success', 'Seu usuário foi criado com sucesso.');
        req.session.save(function() { // para voltar para a tela de login depois dos erros
            return res.redirect('back'); // volta a página
        });
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
};