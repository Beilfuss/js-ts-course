Nesta aula:

- Conectar na base de dados;
- Instalar Mongoose (usado para modelar o BD);
- Criar models e dados para teste.

Vamos precisar do pacote **dotenv** para não colocarmos nossa senha do servidor no código (deixar ela em um arquivo pessoal que não vai para o repositório):

- npm install dotenv

Isso vai criar variáveis de ambiente para o computador e aí vamos remover o arquivo de variáveis de ambiente do repositório, não vamos enviar esse arquivo para o repositório.

Vamos precisar, também, do **mongoose**, para fazer a modelagem dos dados e para fazer a conexão com a base de dados. Vamos criar um esquema e o Mongoose fica responsável por tratar o esquema (ele vai validar os dados de acordo com o que definirmos):

- npm install mongoose

Tanto o dotenv quanto o mongoose vão ser **dependências do projeto**, não de desenvolvimento.

## Primeira conexão com a base

Logo abaixo de "app" em "server.js", vai ser preciso declarar que a base de dados está conectada e que se pode escutar portas. Para tal, basta declarar:

```
const mongoose = require('mongoose');
mongoose.connect();
```

Dentro de "connect()", é preciso mandar os dados da conexão. Para isso, basta mandar a connection string do cluster do MongoDB Atlas. Para isso, basta ir no cluster, clicar em connect, "connect your applicaton" e copiar a connection string. Depois, só precisa alterar o "password". Pode-se colocar a string em uma variável e passar ela para o connect:

```
mongoose.connect(connectionString);
```

Para evitar que a aplicação comece a escutar antes do Mongoose estar conectado (para conectar na base primeiro):

```
mongoose.connect(connectionString)
    .then(() => {
        app.emit('pronto');
    });
```

Com isso, assim que conectar, o app vai mandar um sinal "pronto", e depois é preciso capturar esse evento:

```
app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000')
        console.log("Server running on port 3000")
    });
});
```

Assim, quando aplicativo estiver pronto, passa a função "app.listen". Agora, a conexão só vai ocorrer quando "app" emitir o sinal "pronto". Isso para não ouvir nada enquanto a conexão com a base de dados não for realizada (para evitar que o usuário acesse algo sem sucesso).

O mongoose.connect retorna uma promise. Quando ela deixar de ser pending, resolvida ou rejeitada, faz o app emitir um sinal e aí manda ele escutar na porta 3000.