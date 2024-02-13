const elementos = [
    {tag: 'p', texto: 'Frase 1'}, // 0
    {tag: 'div', texto: 'Frase 2'}, // 1
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i]; // usando atribuição via desestruturação
    let elementoCriado = document.createElement(tag);

    let textoCriado = document.createTextNode(texto); // outra forma criando um "TextNode"
    elementoCriado.appendChild(textoCriado); 

    // elemento.innerText = texto; // innerText é mais seguro, porque modifica só o texto
    div.appendChild(elementoCriado);
}

container.appendChild(div);
