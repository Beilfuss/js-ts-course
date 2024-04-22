const express = require('express');
const app = express(); // executa o express
const routes = require('./routes');

app.use(express.urlencoded( { extended: true } ));
app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log("Server running on port 3000")
});