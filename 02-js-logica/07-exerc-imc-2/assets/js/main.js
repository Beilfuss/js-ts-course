// Capturar evento de submit do formulário (feito com a função "addEventListener")

const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) { // addEventListener([evento que se quer "escutar"], [função executada quando o evento ocorre, nesse caso uma função anônima]). "e" é um evento
    e.preventDefault(); // impede que o formulário seja enviado e aí se consegue pegar os valores

    const inputPeso = e.target.querySelector('#peso'); // como se sabe que o evento tá vindo do form, pode-se usar "form" ou "e.target" (elemento de onde está vindo o evento, nesse caso o form)
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return; // interrompe a função aqui
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return; // interrompe a função aqui
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; // "limpa" o HTML, div fica em branco

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    
    p.innerHTML = msg;
    resultado.appendChild(p);
}