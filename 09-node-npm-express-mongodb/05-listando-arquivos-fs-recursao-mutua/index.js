const fs = require('fs').promises; // chamando o módulo fs
const path = require('path'); // chamando o módulo path, também necessário

/*
// escaneia as pastas dentro da pasta atual
fs.readdir('./') // usando essa notação, ele lê errôneamente. Por isso, é preciso usar "path"
    .then(files => console.log(files))
    .catch(e => console.log(e));
*/

/*
fs.readdir(path.resolve(__dirname)) // usando "path", manda o caminho absoluto e aí dá certo
    .then(files => console.log(files))
    .catch(e => console.log(e));
*/

async function readdir(rootDir) { // função que retorna um caminho para não precisar fazer da forma acima
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir) { // função que caminha nos arquivos
    for(let file of files) {
        const fileFullPath = path.resolve(rootDir, file); // compõe o caminho de acordo com "rootDir" e os arquivos dentro dessa pasta
        const stats = await fs.stat();
        console.log(file, stat.isDirectory());
    }
}

readdir(''); // inserir o caminho de root até a pasta atual aqui