import './assets/css/style.css';
import validateQuantity from './modules/validateQuantity';

class PasswordGenerator {
    constructor() {
        this.form = document.querySelector('form');
        this.fields = document.querySelectorAll('.passwordIncrement');
        this.events();
    }

    events() {
        this.form.addEventListener('submit', event => {
            this.handleSubmit(event);
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const quantity = new validateQuantity((this.fields[0]).value);
        if (!quantity.validate()) {
            quantity.showQuantityError(this.fields[0]);
        } else {
            const quantityError = document.querySelector('.quantity-error');
            console.log(quantityError);
            if (quantityError) quantityError.remove();
            this.generatePassword();
        }
    }

    generatePassword() {
        console.log('DEU BOA!')
    }
}

const generate = new PasswordGenerator();