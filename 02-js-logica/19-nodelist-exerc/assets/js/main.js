const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p'); // NodeList. Não é um array, mas se comporta de forma similar

const estilosBody = getComputedStyle(document.body); // pega tudo de estilo de CSS que foi computado no body
const backgroundColorBody = estilosBody.backgroundColor; // pega a cor de fundo do body
console.log(backgroundColorBody)

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#ffffff';
}
