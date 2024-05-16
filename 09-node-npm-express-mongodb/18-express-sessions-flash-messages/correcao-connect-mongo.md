Devido a uma refatoração no código do "connect-mongo", infelizmente a conexão não funciona mais com o código abaixo:

```
const MongoStore = require('connect-mongo')(session);
```

Por favor, altere o código anterior para o seguinte:

```
const MongoStore = require('connect-mongo');
```

Na configuração da seção, altere a linha store a seguir:

```
{
    // ...
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    // ...
}
```

Para a linha store abaixo:

```
{
    // ...
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    // ...
}
```

Lembrando que process.env.CONNECTIONSTRING é a sua URL de conexão do MongoDB.

Se precisar de mais informações, dê uma olhada na documentação em connect-mongo.

Não se esqueça, eu mantenho o código desse curso atualizado, mas pode passar algo despercebido. O código para o MongoStore (server.js) está em https://github.com/luizomf/curso-js/blob/master/projetoagenda/server.js.