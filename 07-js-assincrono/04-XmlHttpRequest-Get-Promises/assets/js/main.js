// AJAX: Asynchronous JavaScript and XML

/*
Não tem como falar de JS assícrono sem falar de requisição assíncrona (buscar conteúdo da Internet, de algum backend) e carregar na aplicação.
Veremos um exemplo de como carregar uma página dinamicamente sem recarregar a página inteira.

Não se consegue fazer a requisição por arquivo (abrindo o arquivo HTML no navegador). Só dá para fazer a requisição Ajax se utilizarmos HTTP.
Para isso, seria necessário um servidor. Mas, a extensão "Live Server" do VS Code ajuda com isso: cria um servidor no localhost, na porta 5500.

A ideia é criar páginas HTML com qualquer coisa para fazer requisições, pegar conteúdo de dentro desse HTML e jogando em um componente da página.
Vamos utilizar HTML, mas poderia ser JSON, XML etc. 

XMLHttpRequest ou Ajax não necessariamente funcionam com XML. Mas, quando foram criados, provavelmente XML era mais utilizado. Essa função pode fazer
requisição de qualquer tipo de dado (HTML, XML, JSON, texto puro etc.) 
*/

// * VERSÃO COM CALLBACKS:
/*
const request = obj => { // "request" é um nome comum. Recebe-se um objeto de configuração, que vai para o corpo da função
    const xhr = new XMLHttpRequest(); // nome padrão, iniciais de "XmlHttpRequest", que representa Ajax
    // Vamos usar um verbo/método HTML chamado "GET", que representa buscar algum conteúdo da internet. Ele é o padrão do navegador. Quando se abre um site, faz-se uma requisição HTTP GET para determinado servidor
    xhr.open(obj.method, obj.url, true); // ([método], [url], [síncrono ou assíncrono]). Algo como ('GET', url, true).
    xhr.send(); // não precisa mandar porque vamos fazer um GET, não um POST. Se fosse um POST de um form, deveria mandar dados do POST aqui (como dados do formulário)

    // checar quando a requisição terminou de ocorrer:
    xhr.addEventListener('load', () => { // evento de load
        // aqui já vai ter recebido uma resposta do servidor, com um código de resposta
        // códigos HTTP: https://pt.wikipedia.org/wiki/Lista_de_c%C3%B3digos_de_estado_HTTP. De 200 a 300, vamos considerar requisições de sucesso. De 300 para cima, considera como erro.
        if (xhr.status >= 200 && xhr.status < 300) { // assim que se recupera o código HTTP
            // exemplo com callback:
            obj.success(xhr.responseText); // "success" é um nome padrão. Em responseText já vai vir o que tá buscando de um documento
        } else {
            // callback:
            obj.error({ // objeto com o código do erro e a mensagem dele
                code: xhr.status,
                msg: xhr.statusText
            });
        }
    })
};

function carregaPagina(elemento) {
    const href = elemento.getAttribute('href'); // tendo link, pode carregar a página via Ajax
    console.log(href);

    const objConfig = {
        method: 'GET', // se fosse POST, deveria mandar dados para a requisição
        url: href,
        success(response){ // método success é um método de callback desse objeto. "response" é o texto que vai vir do HTML
            carregaResultado(response);
        },
        error(errorText) { // outro método desse objeto
            console.log(errorText);
        }
    };

    request(objConfig);
}
*/

// * VERSÃO COM PROMISES

const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText); // usando promise
            } else {
                reject(xhr.statusText); // usando promise
            }
        });
    });
};

// * Usando THEN: 
/*
function carregaPagina(elemento) {
    const href = elemento.getAttribute('href');
    console.log(href);

    const objConfig = {
        method: 'GET', 
        url: href,
        // sem mais métodos de callback
    };

    request(objConfig).then(response => {
        carregaResultado(response);
    }).catch(error => console.log(error));
}
*/

// Usando ASYNC e AWAIT:

async function carregaPagina(elemento) {
    const href = elemento.getAttribute('href');
    console.log(href);

    const objConfig = {
        method: 'GET', 
        url: href,
    };

    try { // para tratar erros
        const response = await request(objConfig);
        carregaResultado(response);    
    } catch(err) {
        console.log(err);
    }
}

// Poderia fazer um for em cada link e adicionar um EventListener de click em cada link. Essa não é uma boa prática de programação, adicionando vários eventos em elementos diferentes. O melhor é pegar os cliques assim:

document.addEventListener('click', evento => {  // adicionando um evento no documento todo, pegando qualquer click em qualquer local do documento e em qualquer elemento do documento
    const elemento = evento.target;
    const tag = elemento.tagName.toLowerCase(); // pegando o nome da tag do elemento clicado e deixando em lowerCase

    if(tag === 'a') { // se a tag for de link, executa a ação
        evento.preventDefault(); // previne que o evento padrão aconteça (ir para o link, nesse exemplo)
        carregaPagina(elemento); // manda o link clicado
    }
});

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

/*
Na aba "Network", na coluna "type", o navegador mostra o tipo da requisição. Nesse caso, haverá varios "xhr".

* Resumo do que foi feito (com callbacks):

- Criamos uma função "request" com um xhr;
- Demos um "xhr.open" com um objeto recebido contendo método, URL;
- A URL vem do link clicado no addEventListener;
- Objeto tem uma função de sucesso e uma de erro. Ambas são callbacks;
- Baseado no que ocorrer, chama ou outra.

Com promises, não precisa mais de callback.

* O que foi visto nessa aula não é muito usado. "axios" é muito mais usado e mais simples: não é preciso criar HTTP Request e nem promise, é só usar ele e ele já retorna promises.
Essa aula é mais para aprendizado, isso não é muito utilizado na vida real, porque é muito verboso.
*/