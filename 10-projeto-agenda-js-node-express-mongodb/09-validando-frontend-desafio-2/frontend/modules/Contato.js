import validator from "validator";

export default class Contato {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if(!this.form) return;
        this.form.addEventListener('submit', e=> {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;
        const nameInput = el.querySelector('input[name="nome"]');
        const surnameInput = el.querySelector('input[name="sobrenome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const phoneInput = el.querySelector('input[name="telefone"]');
        let error = false;

        for(let errorText of el.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        if(!(nameInput.value).match(/^[a-zA-Z]+$/g)) {
            this.createError(nameInput, 'Nome precisa conter apenas letras.');
            error = true;
        }

        if(!(surnameInput.value).match(/^[a-zA-Z]+$/g)) {
            this.createError(surnameInput, 'Sobrenome precisa conter apenas letras.');
            error = true;
        }

        if(!validator.isEmail(emailInput.value)) {
            this.createError(emailInput, 'E-mail inválido.');
            error = true;
        }

        if(!(phoneInput.value).match(/^[0-9]+$/g)) {
            this.createError(phoneInput, 'Telefone precisa conter apenas números.');
            error = true;
        }

        if(!error) el.submit();
    }

    createError(field, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('text-danger');
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend', div);
    }
}