// A calculadora será criada com uma factory function, apesar de isso não fazer muito sentido (ter várias calculadoras)

function criaCalculadora() {
    return { // por ser uma factory function, retorna o objeto
        display: document.querySelector('.display'),

        inicia() {
            this.cliquebotoes();
            this.pressionaEnter();
            this.pressionaBackSpace();
        },

        pressionaBackSpace() {
            this.display.addEventListener('keydown', e => {
                if (e.keyCode === 8) {
                    e.preventDefault();
                    this.clearDisplay();
                }
            })
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        realizaConta() {
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
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1); // tamanho da string menos 1
        },

        cliquebotoes() {
            /*
            document.addEventListener('click', function(event) {
            const element = event.target;

            if (element.classList.contains('btn-num')) {
                this.btnParaDisplay(element.innerText); // para referenciar uma chave do objeto dentro do objeto, "this" é necessário
            }
            }.bind(this)); // "bind" para o "this" referenciar o objeto "calculadora". Sem o "bind", dentro de "document.addEventListener" o "this"referencia o "document"
            */
           document.addEventListener('click', (event) => { // mesma função que a comentada acima, mas usando arrow function. Arrow functions não permitem alteração do this (sempre é o objeto que chamou)
                const element = event.target;

                if (element.classList.contains('btn-num')) {
                    this.btnParaDisplay(element.innerText); 
                }

                if (element.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (element.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (element.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

                this.display.focus();
            }); 
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();