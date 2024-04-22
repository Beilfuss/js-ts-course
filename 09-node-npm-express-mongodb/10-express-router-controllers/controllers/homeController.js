exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Seu nome: <input type="text" name="nome">
    Seu sobrenome: <input type="text" name="sobrenome">
    <button>Enviar</button>
    </form>
    `);
};

exports.trataPost = (req, res) => {
    res.send('Olá! Sou sua nova rota de POST.');
};