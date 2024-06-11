const Contato = require('../models/ContatoModel');

exports.index = (req, res) => {
    res.render('contato', {
        contato: {}
    });
};

exports.register = async (req, res) => { // como registro é async e retorna uma promise, aqui também precisa ser async
    try {
        const contato = new Contato(req.body);
        await contato.register();
        
        if(contato.errors.length > 0) {
            req.flash('errors', contato.errors);
            req.session.save(() => res.redirect('back')); // redireciona para a página anterior, "back"
            return;
        }
    
        req.flash('success', 'Contato registrado com sucesso');
        req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
        return;
    } catch(e) {
        console.log(e);
        return res.render('404');
    }
};

exports.editIndex = async function(req, res) { // porque "buscaPorId" é async
    if(!req.params.id) return res.render('404');

    const contato = await Contato.buscaPorId(req.params.id);

    if(!contato) return res.render('404');
    
    res.render('contato', { contato });
}

exports.edit = async function(req, res) {
    try{
        if(!req.params.id) return res.render('404'); // se não for enviado o parâmetro, já para por aqui
        const contato = new Contato(req.body);
        await contato.edit(req.params.id);
    
        if(contato.errors.length > 0) {
            req.flash('errors', contato.errors);
            req.session.save(() => res.redirect('back')); // redireciona para a página anterior, "back"
            return;
        }
    
        req.flash('success', 'Contato editado com sucesso');
        req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
        return;
    } catch(e) {
        console.log(e);
        res.render('404');
    }
}

exports.delete = async function(req, res) { // async porque vai mexer na base de dados
    if(!req.params.id) return res.render('404'); // precisa do parâmetro

    const contato = await Contato.delete(req.params.id); // precisa do contato

    if(!contato) return res.render('404'); // se não tiver o contato, retorna 404
    
    req.flash('success', 'Contato apagado com sucesso');
    req.session.save(() => res.redirect('back'));
    return;
}