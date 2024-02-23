
function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        cliquebotoes();
        pressionaEnter();
        pressionaBackSpace();
    };

    const pressionaBackSpace = () => {
        this.display.addEventListener('keydown', e => {
            if (e.keyCode === 8) {
                e.preventDefault();
                clearDisplay();
            }
        })
    };

    const pressionaEnter = () => {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                realizaConta();
            }
        });
    };

    const realizaConta = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta); // "eval" é uma função perigosa, porque tenta executar em JS tudo o que recebe como string. Mas, como o foco da aula é factory functions, vamos usar ele aqui
        
            if (!conta) {
                alert('Conta inválida!');
                return; // para sair daqui
            }

            this.display.value = String(conta);

        } catch(err) {
            alert('Conta inválida!');
            return;
        }
    };

    const clearDisplay = () => {
        this.display.value = '';
    };

    const apagaUm = () => {
        this.display.value = this.display.value.slice(0, -1); // tamanho da string menos 1
    };

    const cliquebotoes = () => {
       
       document.addEventListener('click', (event) => { 
            const element = event.target;

            if (element.classList.contains('btn-num')) {
                btnParaDisplay(element.innerText); 
            }

            if (element.classList.contains('btn-clear')) {
                clearDisplay();
            }

            if (element.classList.contains('btn-del')) {
                apagaUm();
            }

            if (element.classList.contains('btn-eq')) {
                realizaConta();
            }

            this.display.focus();
        }); 
    };

    const btnParaDisplay = (valor) => {
        this.display.value += valor;
    };
}

const calculadora = new Calculadora();
calculadora.inicia();