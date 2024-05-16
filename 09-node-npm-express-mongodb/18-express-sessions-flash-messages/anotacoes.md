Nessa aula vamos ativar as sessions para o express: salvar os dados do navegador no servidor. Com esse **cookie**, toda vez que o cliente acessar a aplicação, junto com a requisição dele vai o cookie, aí o servidor verifica se ele tem acesso e, se tiver, deixa entrar.
Isso para login, mas sessões podem ser usadas para salvar o que quiser.

Sessões são um modo de identificar um navegador específico com um usuário específico. Se o navegador do cliente for aberto em modo anônimo, por exemplo, o servidor não reconhece mais aquele navegador.

A sessão que vamos ativar é salva, primeiramente, na memória. Mas, isso é inviável porque uma aplicação grande consome muita memória e isso pode esgotar a memória do servidor. Outro problema de salvar a sessão em memória é que se reiniciarmos o servidor, perdemos todas as sessões ativas. Por isso, vamos salvar a sessão em uma base de dados.

Vamos, também, instalar **Flash messages**, que são mensagens salvas na sessão. Por exemplo, "usuário/senha inválidos", que é uma mensagem que deve deixar de existir depois de ser lida pelo usuário.

Para fazermos essas coisas, vamos precisar dos pacotes: **express-session**, **connect-mongo** e **connect-flash**:

- npm i express-session connect-mongo connect-flash

## Configuração

Primeiro, em server.js chama a session:

```
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');
```

Agora, configuramos a sessão:

```
const sessionOptions = session({
    secret: '', // pode ser o que quiser, contanto que seja secreto
    store: new MongoStore({ mongooseConnection: mongoose.connection }), // onde a sessão vai ser salva. O parâmetro é o cliente de conexão do MongoDB
    resave: false, // padrão
    saveUninitialized: false, // padrão
    cookie: { // quanto tempo o cookie vai durar
        maxAge: 1000 * 60 * 60 * 24 * 7, // quanto tempo em milésimos de segundo o cookie vai durar. Nesse caso, 7 dias.
        httpOnly: true // padrão
    }
});
app.use(sessionOptions); // para usar as opções da sessão definidas acima
app.use(flash()); // para executar o flash
```

## Sobre a sessão

A session que configuramos ativa o recurso session da requisição. Em homeController é possível, por exemplo, criar uma chave "usuario" na session e salvar ela por 7 dias:

```exports.paginaInicial = (req, res) => {
    req.session.usuario = { nome: "Matheus", logado: true }
    res.render('index');
};
```

Além disso, pode-se mandar quantas mensagens flash quiser:

```
exports.paginaInicial = (req, res) => {
    req.flash('info', 'Olá, mundo!'); // ([tipo da mensagem], [mensagem])
    req.flash('error', 'Olá, mundo!');
    req.flash('success', 'Olá, mundo!');
    res.render('index');
};
```

Assim que se recuperar elas (acessando elas em qualquer lugar, como no console.log), elas não aparecem mais. Para exibir elas:

```
console.log(req.flash('error'), req.flash('success'), req.flash('info')); // é um array. Por isso, pode-se mandar várias mensagens na mesma chave (vários errors de uma vez, por exemplo. Pode-se dar o nome que quiser)
```

Depois de ver elas, ao atualizar a página elas somem.

Agora, temos sessões ativadas. 

Faltam poucos recursos, como o CSRF (para não permitir que outros sites possam postar formulários para dentro de nosso site, um problema de segurança).