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
        const fileFullPath = path.resolve(rootDir, file); // compõe o caminho do arquivo de acordo com "rootDir" e os arquivos dentro dessa pasta
        const stats = await fs.stat(fileFullPath); // "fs.stat" coleta dados sobre o arquivo
        
        if (/\.git/g.test(fileFullPath)) continue; // se tiver ".git" no caminho da pasta, não faz nada, só continua
        if (/node_modules/g.test(fileFullPath)) continue; // se tiver "node_modules" no caminho da pasta, não faz nada, só continua

        if (stats.isDirectory()) { // "se o arquivo for um diretório, execute 'readdir' para listar os arquivos dentro do diretório"
            readdir(fileFullPath);
            continue; // continue para ele não logar os diretórios (volta pro "for")
        }

        console.log(file, stats.isDirectory()); // retorna "true" se for um diretório, "false" se não for
        // console.log(fileFullPath); // mostra os caminhos das pastas
    }
}

readdir(''); // inserir o caminho de root até a pasta atual aqui (rodar "pwd" no terminal)