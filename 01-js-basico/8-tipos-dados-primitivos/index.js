// Tipos de dados primitivos: string, number, undefined, null, boolean, symbol (será visto em outra aula)

const nome0 = 'Matheus'; // String
const nome1 = "Matheus"; // String
const nome2 = `Matheus`; // String

const num1 = 10; // Number int
const num2 = 10.52; // Number float

let nomeTeste; // Undefined. Variável declarada, mas não inicializada. Esse valor não aponta para local algum na memória

let sobrenomeTeste = null; // Valor nulo, também não aponta para local algum na memória. Usado para explicitamente dizer que a variável está vazia

const boolean = false; // boolean = true ou false. Valores lógicos, mudam alguma lógica na aplicação
const aprovado = true; // boolean

console.log(typeof(nomeTeste));



const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b); // valor de b aponta para o mesmo local de a