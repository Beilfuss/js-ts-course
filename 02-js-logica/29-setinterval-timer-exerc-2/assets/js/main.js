function relogio() {
    function criaHoraDosSegundos(segundos) { // formata hora, minutos e segundos
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }
    
    const relogio = document.querySelector('.relogio');

    /*
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    */
    
    let segundos = 0;
    let timer;
    
    function iniciaRelogio() {
        timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }
    
    /* // Solução usando "addEventListener" em cada botão:
    
    iniciar.addEventListener('click', function(event) {
        relogio.classList.remove('pausado');
        clearInterval(timer); // garante que não vai criar dois timers na mesma página
        iniciaRelogio();
    });
    
    pausar.addEventListener('click', function(event) {
        clearInterval(timer);
        relogio.classList.add('pausado');
    });
    
    zerar.addEventListener('click', function(event) {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        relogio.classList.remove('pausado');
        segundos = 0;
    });
    
    */
    
    // versão mais simples e mais leve:
    
    document.addEventListener('click', function(event) { // escutando o evento de click na página toda
        const element = event.target; // capturando em que elemento houve o click
        
        if (element.classList.contains('zerar')) { // se o elemento clicado tiver a classe "zerar", executa esse bloco
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            relogio.classList.remove('pausado');
            segundos = 0;
        }
    
        if (element.classList.contains('iniciar')) { 
            relogio.classList.remove('pausado');
            clearInterval(timer); // garante que não vai criar dois timers na mesma página
            iniciaRelogio();
        }
    
        if (element.classList.contains('pausar')) { 
            clearInterval(timer);
            relogio.classList.add('pausado');
        }
    });
    
    // nesse caso não é mais preciso selecionar os botões
}

relogio(); // envolver em uma função para "fugir" do escopo global