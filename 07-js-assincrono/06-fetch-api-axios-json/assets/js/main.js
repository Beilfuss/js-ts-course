// Fetch API com JSON e Axios

// "pessoas.json" para buscarmos dados como se fôssemos buscar de uma API

/*
Axios é similar ao Fetch API, também retorna promises. Ele é até mais simples de usar que o Fetch API, porque ele tem um
passo a menos: na hora que ele entrega os dados, ele não retorna uma promise novamente para converter novamente os dados
e pegar o resultado.
*/

// * Fetch API:
/*
fetch('pessoas.json') // busca os dados do JSON
    .then(resposta => resposta.json()) // recebe uma resposta e converte pra JSON
    .then(json => carregaElementosNaPagina(json)); // pega o JSON do "then" anterior
/*
/*
Dois "then" porque pegou a resposta (no primeiro then), converteu ela pra JSON e isso retorna uma nova promise.
Depois, pegou a nova promise recebendo um JSON e mandou para a função criada.
*/

// * Axios:

axios('pessoas.json') // como é GET que estamos fazendo, é o padrão, então isso já basta
    .then(resposta => carregaElementosNaPagina(resposta.data)); // aqui, já pega os dados de cara com "resposta.data" e jpa manda ele pra função

function carregaElementosNaPagina(json) {
    const table = document.createElement('table');

    // Para cada objeto dentro do array:
    for(let pessoa of json) {
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.salario;
        tr.appendChild(td);

        table.appendChild(tr);
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}
/*
Diferenças do JSON para um objeto JS:
- Chaves têm aspas duplas;
- Valores strings também têm aspas duplas;
- Não tem como colocar uma função dentro.

Mas, sempre que carregar um JSON para dentro do JS, ele vai ser convertido em um objeto JS. No caso desse exemplo,
ele é um array com vários objetos referentes a cada pessoa. Similar a um objeto JS.
*/

/*
Vimos como fazer requisição Ajax com:
- XmlHttpRequest;
- Fetch (usa "fetch" mesmo, como pode ser visto na aba "Network" do navegador: fetch);
- Axios (usa XmlHttpRequest, como pode ser visto na aba "Network" do navegador: xhr).

Os três vão fazer exatamente a mesma coisa: receber ou enviar dados usando JS por baixo dos panos.
*/