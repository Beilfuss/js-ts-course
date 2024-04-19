Nessa aula vamos aprender a criar um servidor web utilizando Express. O Node tem um módulo HTTP para fazer isso, mas ele é bem mais complexo do que o Express.

1) Iniciar o npm: npm init -y
2) Instalar o express: npm install express
3) Importar o framework: const = express = require('express');
    - Como ele está dentro de "node_modules", não precisa de caminho para importar.
4) Por convenção, cria-se uma variável "app" para usar o express;

Vamos usar o express para carregar páginas no navegador (a princípio). Nesse caso, o express vai ajudar a trabalhar nas rotas da aplicação. Imagine que se tem o endereço "http://meusite.com/". Esse endereço, com "/" é a home do site, e acessando essa URL se faz um "GET" pedindo para o navegador acessar a página. O servidor, então, sabendo a rota, entrega a página.

Operações que se faz em uma API (o servidor deve ser capaz de realizar essas operações):

CRUD -> Create, Read, Update, Delete
        POST    GET   PUT     DELETE

Nessa aula só vamos ler. Voltando ao exemplo anterior, quando se acessa "http://meusite.com/", pede-se a página "/":

http://meusite.com/ -> GET -> Entregue a página "/"

Se for a página sobre, pede a página/rota "/sobre":

http://meusite.com/sobre -> GET -> Entregue a página "/sobre"

Ou contato:

http://meusite.com/contato -> GET -> Entregue a página "/contato"

Essas são rotas da aplicação.

5) No express, podemos usar post, get, put e delete, em minúsculo;
6) No caso do get: app.get([rota], [função])
    - Pode haver mais parâmetros no get;
    - A função vai receber dois parâmetros, a requisição e a resposta;
        - A requisição é referente ao que se está pedindo;
        - A resposta é o que se vai mandar para o servidor.
7) A função trata aquela rota (aquela página), e se configura uma resposta usando "res";
8) O servidor precisa ficar "ouvindo" em determinada porta do computador;
    - Uma porta é referente a um processo executado no servidor. Se já tiver um processo rodando nessa porta, o express não vai rodar, vai acontecer um erro de porta;
    - Se usar portas menos utilizadas, isso não acontece (como a 3000);
    - Para fazer isso, basta dar um "app.listen(3000).
9) Para executar, pedir para o node executar o server: **node server.js**
10) Para acessar a pasta: **localhost:3000**
11) Para editar o arquivo, é preciso parar o servidor e executar ele de novo;
    - O nodemon faz isso automaticamente, veremos ele posteriormente.
12) Se tentar acessar uma rota que não se tem no sistema, vai dar um "Cannot GET [rota]";
13) Se fizer um formulário com "POST" e tentar enviar ele, vai dar erro se só tiver o "GET" para aquela rota;
    - Por isso, **pode-se ter cada método HTTP na mesma rota: POST, GET, PUT DELETE**.
14) Em inspecionar elemento e "Network", se clicar no nome do site e em "Headers", vai ser possível ver os métodos das requisições;
15) "POST" para mandar alguma coisa, "GET" para entregar alguma coisa.