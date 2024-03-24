

export default class validateFields {
    constructor(fields) {
        this.fields = fields;
    }

    validateQuantity() {
        return (this.fields[0]).value > 0;
    }

    validateCheckboxes() {
        let empty = 0;
        for (let i = 1; i < 5; i++) {
            if ((this.fields[i]).checked === false) empty += 1;
        }
        if (empty === 4) return true;
        return false;
    }

    showQuantityError(caracQuantElement) {
        const error = document.querySelector('.quantity-error');
        if (error) {
            return;
        } else {
            const div = document.createElement('div');
            div.classList.add('quantity-error');
            const divText = document.createTextNode('Quantidade de caracteres inválida!');
            div.appendChild(divText);
            caracQuantElement.insertAdjacentElement('afterend', div);
        }
    }

    showCheckboxesError(){
        const error = document.querySelector('.checkboxes-error');
        if (error) {
            return;
        } else {
            const div = document.createElement('div');
            div.classList.add('checkboxes-error');
            const divText = document.createTextNode('Selecione pelo menos uma opção!');
            div.appendChild(divText);
            (this.fields[1]).insertAdjacentElement('afterend', div);
        }
    }
}