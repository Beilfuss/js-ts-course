# Styled-Components

- Nessa seção, não vamos usar classes, vamos usar os hooks do React para manipular estados;
  - Componentes são híbridos: funções que não teriam estado, mas usaremos react hooks para manipular esses componentes.
- Todos os componentes que vamos criar vão ser criados como pastas;
  - Criar, em "src", uma pasta "pages";
  - As páginas da aplicação vão dentro de "pages";
    - Também são componentes, mas por serem páginas inteiras, ficam separadas.
  - Quando mexermos em um componente específico, global (como um cabeçalho), ele vai ficar dentro da pasta "src/components".
- Criar uma pasta "Login" em "pages";
  - Dentro dessa pasta, criar um arquivo "index.js", que é onde vai ser declarado o componente;
  - Dentro dessa pasta, criar, também, um arquivo "styled.js", que vai ser responsável por manter os estilos desse componente "Login";
    - Para isso, vamos usar os styled-componentes;
    - Instalar a extensão "vscode-styled-components" (para syntax highlighting);
    - Instalar os styled-components: `npm i styled-components`;
    - Declarar os styled-components no arquivo "styled.js";
      - Formato:

```
export const Title = styled.h1`
  background: red;
`;
```

- Importar o componente ("Title", nesse caso) no lugar em que o componente a ser estilizado está;
- Usar o componente onde se quer estilizar;
  - Formato:

```
import { Title } from './styled';

export default function Login() {
  return (
    <>
      <Title>
        Login
        <small>Olá!</small>
      </Title>
      <p>Lorem ipsum dolor sit amet.</p>
    </>
  );
}
```

- Com isso, pode-se enviar propriedades no componente. Exemplo:

```
// index.js:

export default function Login() {
  return (
    <>
      <Title isRed={false}>
        Login
        <small>Olá!</small>
      </Title>
      <p>Lorem ipsum dolor sit amet.</p>
    </>
  );
}

// styled.js

export const Title = styled.h1`
  color: ${props => props.isRed ? 'red' : 'blue'};
`;
```

- Assim, de acordo com o parâmetro enviado em "Title", a propriedade CSS muda, é CSS com **variáveis**;
- Para estilizar um componente dentro do outro ("small" dentro de "Title"):

```
export const Title = styled.h1`
  background: green; // estilo do Title

  small { // estilo do small
    font-size: 12pt;
    margin-left: 10px;
    color: #999;
  }
`;
```

- Outra coisa que pode ser feita é criar um estilo global, para não precisar estilizar todos os componentes indivualmente;
  - Criar uma pasta "styles" na pasta "src";
  - Dentro dessa pasta, criar um arquvo "GlobalStyles.js";
  - Declarar os estilos globais que se deseja nesse arquivo;
  - Importar esse arquivo no "App.js";
  - Renderizar esse componente;
  - Com isso qualquer estilo dentro de "GlobalStyle" vai ser aplicado em toda a aplicação.
- Interessante criar um "container" para conter conteúdos principais nesses estilos globais.
  - Usar esse componente como sendo o "main" de qualquer aplicação.
