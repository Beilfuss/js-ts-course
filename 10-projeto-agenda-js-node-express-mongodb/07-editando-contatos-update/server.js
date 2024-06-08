require('dotenv').config(); // refere-se às variáveis de ambiente de desenvolvimento no arquivo ".dotenv" (senhas, usuários etc.) que não se quer que vá para um repositório remoto

const express = require('express');
const app = express(); // executa o express
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING) // mongoose modela a base de dados e garante que os dados estão de acordo com o esquema criado
    .then(() => { // retorna uma promise
        // console.log('Conectei à base de dados.');
        app.emit('pronto'); // quando estiver conectado, emite um evento dizendo que o mongoose já está conectado, e aí esse evento pode começar a ser "escutado" (requisições podem ser aceitas)
    })
    .catch(e => console.log(e));

const session = require('express-session'); // sessões servem para identificar o navegador de um cliente, salvando um cookie com id. Cliente envia esse cookie para o servidor toda vez que conecta
const MongoStore = require('connect-mongo'); // salva as sessões dentro da base de dados, porque por padrão são salvas na memória do servidor, que pode faltar
const flash = require('connect-flash'); // mensagens autodestrutivas: assim que se lê elas, elas desaparecem. Essas mensagens são salvas na sessão (precisam da sessão para funcionar)

const routes = require('./routes'); // rotas da nossa aplicação (/home, /contato etc.)
const path = require('path'); // para trabalhar com caminhos

// const helmet = require('helmet'); // recomendação do Express para deixar a aplicação mais segura
const csrf = require('csurf'); // CSRF tokens para os formulários (todos têm que ter um token), para que nenhum site externo consiga postar coisas para dentro da nossa aplicação

const { middlewareGlobal, outroMiddleware, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware'); // middlewares: funções executadas antes ou depois de responder o cliente em uma rota específica
// pode-se ter vários middlewares executando um após o outro até a resposta ser dada ao usuário

// app.use(helmet()); // usando o helmet

app.use(express.urlencoded( { extended: true } )); // permite postar formulários para dentro da aplicação

app.use(express.json()); // permite fazer o parse de JSON para dentro da aplicação

app.use(express.static(path.resolve(__dirname, 'public'))); // arquivos estáticos da aplicação que podem/devem ser acessados diretamente (imagens, CSS, JS etc.)

const sessionOptions = session({ // configurações de sessão
    secret: '12345',
    store: MongoStore.create( {mongoUrl:process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
app.use(sessionOptions); // usando as opções de sessão
app.use(flash()); // flash messages

app.set('views', path.resolve(__dirname, 'src', 'views')); // pasta de arquivos que renderizamos na tela (normalmente HTML)
app.set('view engine', 'ejs'); // engine que estamos utilizando para renderizar HTML (estamos usando EJS)

app.use(csrf()); // usando CSRF token

// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);

app.use(routes); // chamando as rotas

app.on('pronto', () => { // mandando a aplicação "escutar" requisições
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000')
        console.log("Server running on port 3000")
    });
});
