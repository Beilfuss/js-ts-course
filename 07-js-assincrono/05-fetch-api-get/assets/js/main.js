// Fetch API: uma melhoria para XmlHttpRequest
/*
Com Fetch API, com uma ou duas linhas de código se reescreve a função que fizemos com XmlHttpRequest inteira.
*/

/*
const request = obj => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
      if(xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
};
*/

document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
});

// * Convertendo para Fetch com uma função normal
/*
function carregaPagina(el) {
  const href = el.getAttribute('href');

  fetch(href) // carrega o link
    .then(response => { // pega a resposta 
      if (response.status !== 200) throw new Error('Erro!');
      return response.text() // e converte a resposta em texto
    }) 
    .then(html => carregaResultado(html)) // aqui pega o texto que se sabe que é HTML e já chama "carregaResultado" com ele
    .catch(err => console.log(err));
}
*/

// * Convertendo para Fetch com função assíncrona:

async function carregaPagina(el) {
  try {
    const href = el.getAttribute('href');
    const response = await fetch(href);
  
    if (response.status !== 200) throw new Error('Erro!');
  
    const html = await response.text();
    carregaResultado(html);
  } catch(err) {
    console.log(err);
  }

}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}

// * Carregando o conteúdo de "pagina1.html" com JavaScript:

/*
fetch('pagina1.html') // ([url ou arquivo]). Retorna uma promise por padrão
  .then(resposta => { // Vai retornar uma resposta para ser tratada.
    if (resposta.status !== 200) throw new Error('Erro!'); // se o status da resposta não for 200, lança um erro que joga automaticamente pro catch
    return resposta.text(); // ".text()" porque a resposta não vem com os dados prontos. É preciso converte eles para o que precisa. Essa função ".text()" também retorna uma promise
  })
  .then(html => console.log(html))
  .catch(err => console.error(err)); // loga em forma de erro ("warn" loga em forma de alertas)
*/