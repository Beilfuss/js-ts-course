Nessa aula veremos como ler e escrever arquivos utilizando Node e o FS.

- "escrever.js" terá instruções de escrita;
    - "fs.writeFile([caminho absoluto do arquivo], [dados para serem escritos no arquivo], [flags. "w" apaga o arquivo e escreve de novo, "a" adiciona ao final do arquivo])".
- "ler.js" terá instruções de leitura.
    - "fs.readFile([caminho absoluto do arquivo], [codificação de caracteres, geralmente se usa utf-8])".

JSON tem as chaves e as strings com aspas duplas. JSON pode ter strings, números e "null".

"JSON.stringify()" para transformar um objeto (ou array de objetos) em JSON e "JSON.parse()" para transformar em objeto de novo.
Isso é interessante para criar arquivos de configuração de uma aplicação qualquer. Por exemplo, se quer se quer configurar alguma coisa e salvar em um arquivo simples (não em um BD, em uma aplicação mais simples).