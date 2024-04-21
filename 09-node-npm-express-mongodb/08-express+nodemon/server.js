const express = require('express');
const app = express(); // executa o express

app.get('/', (req, res) => {
    res.send('Hello, World!')
});

app.get('/contato', (req, res) => { // outra rota
    res.send('Obrigado por encontrar em contato conosco!')
});

app.get('/formulario', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Seu nome: <input type="text" name="nome">
        <button>Enviar</button>
        </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário!');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log("Server running on port 3000")
});