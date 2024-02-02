function meuEscopo () {
    const form = document.querySelector('form'); // seleciona elementos como no CSS, com seletores ('form', '.form' ou '#form')
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    /*
    form.onsubmit = function (evento) {
        evento.preventDefault(); // "previne o que era pra acontecer por padrão: não envia o formulário"
        alert(1);
        console.log('Foi enviado.');
    };
    */

    // Maneira a seguir é mais moderna

    
    function recebeEventoForm (evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();