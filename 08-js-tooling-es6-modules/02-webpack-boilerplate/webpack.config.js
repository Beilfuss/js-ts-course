const path = require('path'); // pedindo o módulo do node "path". Geralmente a variável tem o mesmo nome

/*
O node usa "CommonJS" como sistema de módulos. Ele é diferente do sistema de módulos do ES6 que veremos (padrão do JS).
O CommonJS é padrão do node.
*/

// exporta-se o objeto e tudo nele. Esse objeto é a configuração no webpack
module.exports = {
    mode: 'production', // modo que se está trabalhando. Duas opções: development, o arquivo é gerado mais rápido e não é minificado (diminuir ao máximo o arquivo); production, o bundle fica minificado.
    entry: './src/index.js', // no Linux, "." é a pasta atual. Com isso, diz-se ao webpack: "coloque os bundles na pasta public"
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'), // path.resolve() pega o caminho absoluto, "__dirname" é a pasta atual no node. Depois, coloca o caminho com vírgulas e strings para o node funcionar em qualquer SO (path.resolve serve para isso)
        filename: 'bundle.js' // nome do arquivo que vai conter todos os arquivos da aplicação. Normalmente, "bundle.js".
    },
    module: {
        rules: [{ // array com objetos dentro. Se tivesse CSS, Sass e imagens, teria mais regras. Cada regra tem seu loader, extensão etc.
            exclude: /node_modules/, // em expressão regular, o que se exclui do webpack (não se quer que ele fique analisando essa pasta)
            test: /\.js$/, // em expressão regular, testa qual o arquivo que ele vai analisar. "$" indica que os arquivos terminam com ".js". A "\" para não considerar o "." como o que ele faz em regexes
            use: {
                loader: 'babel-loader', // que loader vai usar
                options: { // presets
                    presets: ['@babel/env']
                }
            }
        }]
    },
    devtool: 'source-map' // mapeia logs do bundle para o arquivo original
};