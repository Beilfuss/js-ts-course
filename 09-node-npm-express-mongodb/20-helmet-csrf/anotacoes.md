## CSRF

"Cross-site Request Forgery" é um tipo de ataque em que um link malicioso posta algo em algum site no nome do usuário logado.

Nessa aula, vamos prevenir que alguém poste alguma coisa de algum site que não seja o nosso. Para isso vamos instalar o helmet:

- npm i helmet

O helmet é uma recomendação padrão do Express para segurança.

Além disso, precisamos instalar o csurf:

- npm i csurf

Para usar o helmet, é preciso adicionar as seguintes linhas:

```
const helmet = require('.helmet');

app.use(helmet());
```

Para usar o csurf, a mesma coisa:

```
const csrf = require('csurf');

app.use(csrf());
```

Isso já previne o ataque. Mas, se houver um erro de CSRF, ele não é tratado.
Agora, então, é preciso dois middlewares para injetar um token em todas as páginas que ajuda a checar se há um ataque de CSRF em algum formulário.

```
exports.checkCsrfError = (err, req, res, next) => {
    if (err && err.code == 'EBADCSRFTOKEN') { // "EBADCSRFTOKEN" é o código desse erro
        console.log('BAD CSRF');
        return res.render('404');
    }
}
```

Além disso, é preciso declarar em "server" que o Express deve usar esse middleware. Vale ressaltar que o erro não é o 404, mas se utilizou ele como exemplo.
O outro middleware é para criar o token em todas as páginas com formulário:

```
exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken(); // variável disponível em todas as views
    next();
}
```

Ele também vai precisar ser chamado e usado pelo Express em "server". Depois, para ser usado pelas páginas com formulário, é preciso adicionar a seguinte linha:

```
<form action="/" method="post">
    <input type="hidden" name="_csrf" value="<%= csrfToken %>">
    <label for="cliente">Cliente</label>
    <input type="text" name="cliente">
    <button>Submit</button>
</form>
```

Como toda vez que a página atualiza o código muda, um atacante não consegue enviar um formulário malicioso. Tem que ter o token para ser enviado.

Nessa aula, instalamos o Helmet e configuramos o CSRF token (criando os middlewares para a aplicação).
Agora, temos tudo o que precisa:

- Base de dados;
- Session;
- Flash messages;
- Helmet;
- CSRF Token;
- etc.

## Helmet no localhost (EVITE)

O Helmet é para segurança da aplicação, portanto, caso você esteja com um sistema ainda em desenvolvimento, usando URLs como "127.0.0.1", "localhost" ou até um servidor com IP externo, sem usar SSL (HTTPS), é recomendável desativá-lo. Ele pode bloquear importação de scripts e arquivos de CSS.

Caso ocorra erros ao importar o bundle.js, arquivos de CDN (como bootstrap, por exemplo) ou CSS, basta desativar o helmet para correção.

Isso só ocorrerá em sistemas sem SSL (sem HTTPS na URL).