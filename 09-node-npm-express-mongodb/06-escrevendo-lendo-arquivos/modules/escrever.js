const fs = require('fs').promises;

// fs.writeFile(caminhoArquivo, 'Frase 1', { flag: 'w', encoding: 'utf-8' }); // ([caminho do arquivo], [conteúdo que vai dentro do arquivo], [opções])
// a flag "w" apaga tudo o que estiver dentro desse arquivo caso ele já exista e escreve o que foi pedido. Este é o padrão
// o encoding não é necessário enviar porque já é utf-8 por padrão

// fs.writeFile(caminhoArquivo, 'Frase 1\n', { flag: 'a', encoding: 'utf-8' }); // '\n' para quebrar linhas
// utilizando "a" em vez de "w", em vez de apagar o que há no arquivo, ele faz um append

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w', encoding: 'utf-8' });
};
