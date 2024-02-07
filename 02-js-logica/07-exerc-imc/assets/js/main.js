const form = document.querySelector('.form');

form.addEventListener('submit', function (evento) {
    
    evento.preventDefault();

    const peso = Number((form.querySelector('#peso')).value);
    const altura = Number((form.querySelector('#altura')).value);

    console.log(peso, altura);

    const validacaoPeso = validaPeso(peso);
    const validacaoAltura = validaPeso(altura);

    if (validacaoPeso === false) {
        revelaResultado('Peso inválido!');
    } else if (validacaoAltura === false) {
        revelaResultado('Altura inválida!');
    } else {
        const imc = calculaImc(peso, altura);
        const classificacaoImc = classificaImc(imc);
        revelaResultado([imc, classificacaoImc]);
    }
})

function revelaResultado (mensagem) {
    divResultado = document.querySelector("#resultado");
    
    if (typeof mensagem === 'string') {
        divResultado.style.backgroundColor = 'rgb(250, 98, 98)';
        divResultado.style.padding = '10px';
        divResultado.style.marginTop = '20px';
        divResultado.innerHTML = mensagem;
    } else {
        divResultado.style.backgroundColor = 'lightgreen';
        divResultado.style.padding = '10px';
        divResultado.style.marginTop = '20px';
        divResultado.innerHTML = `Seu IMC é ${mensagem[0]} (${mensagem[1]})`;
    }    
}

function validaPeso (peso) {
    if (typeof peso !== 'number' || Number.isNaN(peso) || peso === 0) {
        return false
    } else {
        return true
    }
}

function validaAltura (altura) {
    if (typeof altura !== 'number' || Number.isNaN(altura) || altura === 0) {
        return false
    } else {
        return true
    }
}

function calculaImc(peso, altura) {
    return (peso / (altura ** 2)).toFixed(2);
}

function classificaImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        return 'Peso normal';
    } else if (imc >= 25 && imc <= 29.9) {
        return 'Sobrepeso';
    } else if (imc >= 30 && imc <= 34.9) {
        return 'Obesidade grau 1';
    } else if (imc >= 35 && imc <= 39.9) {
        return 'Obesidade grau 2';
    } else if (imc >= 40) {
        return 'Obesidade grau 3'
    }
}