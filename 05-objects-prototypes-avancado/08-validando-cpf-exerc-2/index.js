// * Validando o CPF: 705.484.450-52 / 070.987.720-03
/*

7x  0x  5x  4x  8x  4x  4x  5x  0x
10  9   8   7   6   5   4   3   2
70  0   40  28  48  20  16  15  0 = 237

11 - (237 % 11) = 5 (Primeiro dígito. Esse número não pode ser maior que 9; se for, é 0)

7x  0x  5x  4x  8x  4x  4x  5x  0x  5x (inclui o valor obtido anteriormente)
11  10  9   8   7   6   5   4   3   2
77  0   45  32  56  24  20  20  0   10 = 284

11 - (284 % 11) = 2 (Segundo dígito. Esse número também não pode ser maior que 9; se for, é 0)

Se o CPF que sair dessas contas for igual ao CPF inserido, ele é válido.

*/

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');;
        }
    });
}

ValidaCPF.prototype.valida = function () {

    if (typeof this.cpfLimpo === 'undefined') return false; // primeira validação, se o argumento "cpfEnviado" foi recebido
    if (this.cpfLimpo.length !== 11) return false; // segunda validação, se o tamanho do cpf é diferente de 11
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2); // pegando só 9 dígitos do cpf
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    
    const novoCpf = cpfParcial + digito1 + digito2;

    return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    
    const cpfArray = Array.from(cpfParcial);
    
    let regressivo = cpfArray.length + 1; // contador regressivo para a conta do dígito

    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    
    return digito > 9 ? '0' : String(digito);
};

ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length); // repete o primeiro número do CPF 11 vezes
    return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCPF('705.484.450-52');
// console.log(cpf.valida());

if (cpf.valida()) {
    console.log('CPF válido');
} else {
    console.log('CPF inválido');
}