Nessa aula veremos sobre recursos modernos do JS (promises, asyn await etc.) em navegadores antigos. Veremos como ativar eles em navegadores antigos.

Ao rodar o webpack com esse código, pode ocorrer um erro de referência do "regeneratorRuntime", uma função instalada anteriormente em "dependencies" do webpack". Isso por causa da transpilação do código JS moderno para o código JS antigo.

Para corrigir isso, vai-se no main e deixa sempre importado o regenerator-runtime (linha 3 do "main"). Isso já resolve o problema no Chrome.

Já no Explorer, pode ocorrer um erro de que "promise" não está definida. O código é executado, mas nada é feito para o ele executar em um navegador antigo. Não tem algo que corrija, que crie uma função para ser usada como "promise" (como é o caso do polyfill).
Para corrigir isso, antes do import do regenerator-runtime, importa-se o core-js (linha 1 do "main").

Com isso, tem-se módulos e async e await funcionando até o Microsoft Explorer 11 (ou até menos, como a 10 ou 9).

O fundo verde não aparece em navegadores antigos porque eles não suportam "var" (variáveis no CSS).

### Resumo

Sempre que se for escrever um código, colocar:

- import 'core-js/stable';
- import 'regenerator-runtime/runtime';

Pois eles garantem que o código funcione em navegadores mais antigos e mais novos.