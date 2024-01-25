let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

let tempA = varA;

varA = varB;
varB = varC;
varC = tempA;

console.log(varA, varB, varC);

// Outra maneira usando array:

varA = 'A'; // B
varB = 'B'; // C
varC = 'C'; // A

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);