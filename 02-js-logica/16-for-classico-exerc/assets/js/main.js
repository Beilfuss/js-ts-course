const elementos = [
    {tag: 'p', texto: 'Frase 1'}, // 0
    {tag: 'div', texto: 'Frase 2'}, // 1
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const section = document.querySelector('.container');
const div = document.createElement('div');
section.appendChild(div);

for (let i = 0; i < elementos.length; i++) {
    const elemento = document.createElement(elementos[i]['tag']);
    elemento.innerHTML = elementos[i]['texto'];
    div.appendChild(elemento);
}