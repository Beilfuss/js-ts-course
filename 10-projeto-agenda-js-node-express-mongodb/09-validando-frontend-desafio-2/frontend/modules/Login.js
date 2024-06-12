import validator from "validator";

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if(!this.form) return; // se o form não existe, não faz nada
        this.form.addEventListener('submit', e => {
            e.preventDefault(); // previne o form de ser enviado e aí pode-se manipular ele como quiser
            this.validate(e);
        });
    }

    validate(e) { // para checar os campos
        const el = e.target; // para ter o form que está sendo manipulado
        const emailInput = el.querySelector('input[name="email"]'); // pega o input com "name" igual a "email"
        const passwordInput = el.querySelector('input[name="password"]');
        let error = false; // flag de erro

        if(!validator.isEmail(emailInput.value)) {
            alert('E-mail inválido');
            error = true;
        }

        if(passwordInput.value.length < 3 || passwordInput.value.length > 50) {
            alert('Senha precisa ter entre 3 e 50 caracteres');
            error = true;
        }

        if(!error) el.submit(); // se não tiver erro, envia o formulário
    }
}