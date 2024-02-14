const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

let hora = 0;
let minuto = 0;
let segundo = 0;

iniciar.addEventListener('click', function(event) {

    const timer = setInterval(function () {

        relogio.style.color = 'black';

        relogio.innerHTML = `${zeroAEsquerda(hora)}:${zeroAEsquerda(minuto)}:${zeroAEsquerda(segundo)}`;

        segundo++;

        if (segundo == 60) {
            segundo = 0;
            minuto++;
        }

        if (minuto == 60) {
            minuto = 0;
            hora++;
        }

    }, 200);

    pausar.addEventListener('click', function(event) {
        setTimeout(function () {
            clearInterval(timer);
        }, 0);

        relogio.style.color = 'red';
    });

    zerar.addEventListener('click', function(event) {
        
        setTimeout(function () {
            clearInterval(timer);
        }, 0);

        relogio.style.color = 'black';

        hora = 0;
        minuto = 0;
        segundo = 0;

        relogio.innerHTML = `${zeroAEsquerda(hora)}:${zeroAEsquerda(minuto)}:${zeroAEsquerda(segundo)}`;
    });
});

