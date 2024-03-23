

export default class validateQuantity {
    constructor(quantity) {
        this.quantity = quantity;
    }

    validate() {
        return this.quantity > 0;
    }

    showQuantityError(caracQuantElement) {
        const div = document.createElement('div');
        div.classList.add('quantity-error');
        const divText = document.createTextNode('Quantidade de caracteres inválida!');
        div.appendChild(divText);
        caracQuantElement.insertAdjacentElement('afterend', div);
    }
}