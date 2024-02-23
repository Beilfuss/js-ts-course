function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaEnter = () => {
        document.addEventListener('keyup', event => {
            if (event.keyCode === 13) this.realizaConta();
        });
    }

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const element = event.target;
            if (element.classList.contains('btn-num')) this.addNumDisplay(element);
            if (element.classList.contains('btn-clear')) this.clear();
            if (element.classList.contains('btn-del')) this.del();
            if (element.classList.contains('btn-eq')) this.realizaConta();

        });
    };

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value); // tenta avaliar o que tá no display como código JS

            if (!conta) { // se a conta retornar "NaN"
                alert('Conta inválida!');
                return; // sai do método aqui
            }

            this.display.value = conta; // se for uma conta, mostra o resultado no display

        } catch (err) { // se der algum erro, dá um alerta
            alert('Conta inválida!');
            return; // sai do método aqui
        }
    };

    this.addNumDisplay = element => {
        this.display.value += element.innerText;
        this.display.focus();
    };

    this.clear = () => this.display.value = ''; // método em uma linha e sem chaves
    this.del = () => this.display.value = this.display.value.slice(0, -1);
}

const calculadora = new Calculadora(); // "use o molde 'Calculadora' para criar um novo objeto de calculadora"
calculadora.inicia();