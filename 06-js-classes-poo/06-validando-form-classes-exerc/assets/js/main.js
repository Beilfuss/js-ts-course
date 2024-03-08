class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos(); // executa assim que se usa a classe
    }

    eventos() {
        this.formulario.addEventListener('submit', e => { // capturando o evento de submit. Função arrow porque ela não altera o this (aqui, this é a instancia "valida")
            this.handleSubmit(e); // passando evento para "handleSubmit"
        });
    }

    handleSubmit(e) {
        e.preventDefault(); // prevenindo que o formulário seja enviado
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if (camposValidos && senhasValidas) {
            alert('Formulário enviado!');
            this.formulario.submit(); // controlando o envio do formulário. Ele é enviado efetivamente somente aquis
        }
    }

    senhasSaoValidas() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value) {
            valid = false;
            this.criaErro(senha, 'Campos "senha" e "repetir senha" precisam ser iguais.');
            this.criaErro(repetirSenha, 'Campos "senha" e "repetir senha" precisam ser iguais.');
        }

        if (senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.criaErro(senha, 'Senha precisa ter entre 6 a 12 caracteres.')
        }

        return valid;
    }

    camposSaoValidos() {
        let valid = true; // assumindo que campos são válidos

        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove(); // remove os erros que já estão no formulário (caso clique em "enviar" mais de uma vez)
        }

        for(let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText; // pegando o irmão anterior do campo (pegando as labels)

            if(!campo.value) { // string vazia é falsy value
                this.criaErro(campo,` Campo "${label}" não pode estar em branco.`);
                valid = false; // mudando a flag
            } 

            if (campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid = false;
            }

            if (campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid;
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;

        if (usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
            valid = false;
        }

        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) { // checa qualquer letra entre a e z (minúsculo), entre A e Z (maiúsculo) e entra 0 e 9. Isso é válido no usuário
            this.criaErro(campo, 'Nome de usuário precisa conter apenas letras e/ou números.');
            valid = false;
        }

        return valid;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

        if(!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido.');
            return false;
        }
        return true;
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div); // depois do campo com erro, inserir essa div com mensagem de erro
        
    }
}

const valida = new ValidaFormulario();