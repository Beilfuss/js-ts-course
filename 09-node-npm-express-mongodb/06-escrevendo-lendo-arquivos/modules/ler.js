const fs = require('fs').promises;

module.exports = (caminho) => fs.readFile(caminho, 'utf-8'); // recebe o caminho e lê ele no padrão utf-8