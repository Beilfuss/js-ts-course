Nesta aula veremos parâmetros que podemos passar para dentro da aplicação.

Exemplo. Digamos que o Facebook tenha uma rota para acessar perfis:

- http://facebook.com/profiles/

E, digamos que, dentro dessa rota, há algo para identificar o usuário, seja o nome dele ou id:

- http://facebook.com/profiles/noelgallagher
- http://facebook.com/profiles/2381923831243

Ou seja, a única coisa modificada dentro da rota "profiles" é o parâmetro final da URL. Isso é chamado pelo express de "**URL params**".
Outro tipo de parâmetro que se pode usar é o "**query strings**", que vem depois de um "**?**". Digamos que se tenha uma campanha de marketing no Facebook que venha do Google Ads; o link ficaria assim:

- http://facebook.com/profiles/12345?campanha=googleads

A query string é um par de chave e valor. No exemplo acima, "campanha" é a chave e "googleads" é o valor. Se quiser adicionar mais query strings, é preciso colocar um "**&**":

- http://facebook.com/profiles/12345?campanha=googleads&nomecampanha=seila

Agora, tem-se dois parâmetros, dois pares de chave e valor. 
Utilizando express, pode-se acessar tanto esses parâmetros de URL quanto as query strings.
Também se tem um tipo de requisição que vai no corpo da requisição, que é quando se posta um formulário. Ao enviar um formulário, em Inspecionar Elemento, "Network" e no header do POST há uma parte "Form Data". O que está nesse local é o que foi postado, o que foi no corpo da requisição. Isso é mais usado para coisas mais sensíveis, como formulário de contato, de cadastro, login etc. Nesse caso, não vai ter na URL para o usuário acessar aqueles dados. Por exemplo, o seguinte não vai acontecer:

- http://facebook.com?usuario=maria&senha=12345

Isso ficaria salvo no histórico dele. É inseguro. Dados mais sensíveis vão trafegar no corpo da requisição. Na hora que se mandar a requisição, isso já vai no corpo dela e não vai ficar salvo na URL ou em lugar algum.

Para receber um parâmetro na URL, basta dar um nome para ele na rota GET usando ":":

```
app.get('/testes/:idUsuarios', (req, res) => {
    console.log(req.params);
    res.send('Oi');
});
```

O que vier na URL no lugar de ":idUsuarios" vai ter a chave "idUsuarios" e o valor na URL. Agora, pode-se usar esse objeto dentro do sistema:

```
app.get('/testes/:idUsuarios', (req, res) => {
    console.log(req.params);
    res.send(req.params.idUsuarios);
});
```

Mas, agora não se consegue mais acessar "/testes" porque falta um parâmetro. **Como fazer para o parâmetro ser opcional?** Basta colocar um "?" no final da rota:

```
app.get('/testes/:idUsuarios?', (req, res) => {
    console.log(req.params);
    res.send(req.params.idUsuarios);
});
```

Se quiser colocar mais parâmetros opcionais, é só ir adicionando na URL da seguinte forma:

```
app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params);
    res.send(req.params.idUsuarios);
});
```
Esses são os **parâmetros da URL, acessados com "req.params"**.

Além disso, pode-se enviar query strings na URL. Por exemplo:

- http://localhost:3000/testes/?nome=Liam&sobrenome=Gallagher&idade=51

Aí, pode-se pegar esses parâmetros usando "**req.query**":

```
app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.params);
});
```

O que se recebe em "req.query" é um objeto e pode ser manipulado como tal.

Como acessar o POST? Ele vai vir no body da requisição, em "req.body":

```
app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Recebi o formulário!');
});
```

O "**req.body**" é o que vem para POST ou PUT. Quando se envia um formulário e os dados vêm dentro da requisição. Para "pedir" para o express tratar o body da requisição e entregar um objeto para ser postado, é preciso adicionar:

- app.use(express.urlencoded( { extended: true } ));

Separando as partes:

```
app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);
```

Agora, ao logar "req.body", o que vier no corpo da requisição vai poder ser usado:

```
app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.nome}`);
});
```

"nome", nesse caso, vem do atributo "name" do input. Se modificar o name do input para "qualquercoisa", é preciso atualizar o "req.body" para "req.body.qualquercoisa".

### Revisando:

- "req.params" se refere às rotas da URL;
    - /profiles/usuario/12345
- "req.query" é o que vem na "query string";
    - /profiles/?chave1=valor1&chave2=valor2&chave3=valor3
- "req.body" é o que vem do POST ou PUT.
    - Vem chaves de acordo com o que tem nos "names" do formulário. Trata o "name" do input como se fosse a chave do objeto, e o valor vem dentro de "req.body.[nomeinput]";
- Se não adicionar "app.use(express.urlencoded( { extended: true } ));", o express não vai tratar o body das requisições.
    - Aí, qualquer POST ou PUT que se enviar via formulário não vai ser tratado, vai ficar como "undefined".
