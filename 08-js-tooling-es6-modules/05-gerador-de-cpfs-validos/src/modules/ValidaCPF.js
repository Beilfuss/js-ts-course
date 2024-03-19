// 705.484.450-52 / 070.987.720-03

export default class ValidaCPF { // "default" para simplificar na hora de importar
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }

    éSequência() { // pode-se usar acentos em JS (não recomendado)
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo; // repete o primeiro caracter de "cpfLimpo" de acordo com o tamanho da string (normalmente, 11) e compara com "cpfLimpo", para ver se não é uma sequência
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos); // usa o nome da classe em vez de "this" para usar o método estático
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        this.novoCpf = cpfSemDigitos + digito1 + digito2;
    }

    static geraDigito(cpfSemDigitos) { // como não usa "this" nenhuma vez, não utiliza nada da instância. Quando isso acontece, ele pode se tornar estático
        let total = 0;
        let regressivo = cpfSemDigitos.length + 1;

        for (let stringNumerica of cpfSemDigitos) {
            // console.log(stringNumerica, regressivo);
            total += regressivo * Number(stringNumerica);
            regressivo--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0'; // se o digito for menor do que 9, retorna o digito. Se não, retorna 0 
    }

    valida() {
        if (!this.cpfLimpo) return false; // se não existir "cpfLimpo", já retorna false
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.éSequência()) return false;
        this.geraNovoCpf();
        
        return this.novoCpf === this.cpfLimpo;
    }
}
