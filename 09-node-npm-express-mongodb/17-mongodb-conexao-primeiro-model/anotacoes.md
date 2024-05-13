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

Dentro de "connect()", é preciso mandar os dados da conexão. Para isso, basta mandar a connection string do cluster do MongoDB Atlas. Para isso, basta ir no cluster, clicar em connect, "connect your applicaton" e copiar a connection string. Depois, só precisa alterar o "password" (e, se quiser, o nome do banco de dados, que aí vai entre "/" e "?retryWrites"). Pode-se colocar a string em uma variável e passar ela para o connect:

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

Para evitar que a string de conexão com o BD vá para o repositório, utilizaremos o dotenv. Para tal, chama-se ele:

- require('dotenv').config();

Além disso, é preciso criar um arquivo na raiz do projeto chamado "**.env**". Esse arquivo vai conter pares chave-valor, como:

- CHAVE=VALOR

Assim, cria-se uma entrada "CONNECTIONSTRING" neste arquivo, cola-se a string no arquivo .env e passa "process.env.CONNECTIONSTRING" no mongoose.connect:

```
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Conectei à base de dados.');
        app.emit('pronto');
    })
    .catch(e => console.log(e));
```

Após isso, **adicionando o .env no .gitignore**, nenhuma informação sensível é enviada ao servidor.

Para criar um model exemplo, vamos em src e criamos a pasta "**models**". Dentre dele, criamos o model "HomeModel.js". Com letra maiúscula porque geralmente o módulo é uma classe. No arquivo, colocamos o schema do model. Com isso, pode-se selecionar coisas do BD, criar coisas nele etc.

Para criar um model na base de dados, basta executar:

```
HomeModel.create({
    titulo: 'Um título de testes',
    descricao: 'Uma descrição de testes'
});
```

Isso vai retornar uma promise e o documento criado. Para "recapturar" esse documento, basta acrescentar o .then. E para tratar algum erro, .catch:

```
HomeModel.create({
    titulo: 'Um título de testes',
    descricao: 'Uma descrição de testes'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e));
```

Agora, basta testar e dar um "refresh" no MongoDB Atlas. Os models criados na base de dados vão ficar em "collections" no MongoDB Atlas.

Para buscar em vez de criar, basta trocar "create" por "find":

```
HomeModel.find()
    .then(dados => console.log(dados))
    .catch(e => console.log(e));
```

Nesse caso, porque não se especificou nada no find, retorna todos os dados. Mas, raramente se usa isso dessa maneira.