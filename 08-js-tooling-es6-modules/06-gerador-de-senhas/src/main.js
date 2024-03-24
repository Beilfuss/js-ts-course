import './assets/css/style.css';
import validateFields from './modules/validateFields';
import generateNumber from './modules/generateNumber';
import generateLetter from './modules/generateLetter';
import generateUpperCaseLetter from './modules/generateUpperCaseLetter';
import generateSymbol from './modules/generateSymbol';

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
        const validation = new validateFields(this.fields);
        if (!validation.validateQuantity()) {
            validation.showQuantityError(this.fields[0]);
        } else if (validation.validateCheckboxes()) {
            validation.showCheckboxesError();
        } else {
            const quantityError = document.querySelector('.quantity-error');
            if (quantityError) quantityError.remove();
            const checkboxesError = document.querySelector('.checkboxes-error');
            if (checkboxesError) checkboxesError.remove();
            const password = this.generatePassword();
            this.showPassword(password);
        }
    }

    generatePassword() {
        const caracQuant = (this.fields[0]).value;
        
        let password = '';
        
        const functions = [generateNumber, generateUpperCaseLetter, generateLetter, generateSymbol];
        const functionsToUse = [];
        
        for (let i = 1; i < 5; i++) {
            if ((this.fields[i]).checked === true) functionsToUse.push(functions[i-1]);
        }

        let functionCount = 0;
        for (let i = 0; i < caracQuant; i++) {

            if (functionCount === functionsToUse.length) functionCount = 0;

            const character = functionsToUse[functionCount]();

            password += character;
            functionCount++;
        }
        
        return password;
    }

    showPassword(password) {
        const passwordDiv = document.querySelector('.generated-password');
        passwordDiv.innerHTML = password;
    }
}

const generate = new PasswordGenerator();