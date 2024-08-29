# Redux + React

- Vamos configurar o Redux, que vai servir para configurarmos um estado global na aplicação;
- Vamos usar o Redux para saber se o estado está ou não logado, quais menus vamos exibir etc.;
- Nem toda a aplicação vai precisar de Redux, ele só vai ser necessário quando precisar ter um estado global na aplicação, isto é, quando houver um estado que precisa ser acessado em vários componentes da página;
- Redux vai funcionar da seguinte maneira:
  - Tem um estado inicial que vai ser um objeto;
  - Esse estado inicial já vai ser o estado global da aplicação;
  - Pode-se iniciar esse estado com qualquer valor (true ou false);
  - Para manipular esse estado:
    - Dispara-se uma ação, como "usuário logou";
    - Essa ação é "ouvida" por um reducer;
    - Esse reducer vai ser responsável por alterar o estado (cria um novo estado, manipula este novo estado e retorna ele, que passa a ser o novo estado global da aplicação.).
  - Resumo: ação disparada -> reducer escuta -> retorna novo estado.
- Para configurar o Redux;
  - Criar uma pasta "store" em "src", que vai conter tudo o que for relacionado com o Redux;
  - Instalar o redux com `npm i redux react-redux`;
  - Nessa pasta, criar um arquivo "index.js";
  - Nesse arquivo, configurar o Redux;
  - Dentro do reducer, retorna-se ou o estado atual, que é o que já se tem, ou um novo estado;
  - Importar o "Provider" do react-redux e o "store" em "App.js" e envolver os componentes de App.js com a tag "Provider" para declarar que o estado desses componentes vem do "store";
  - Com isso, já se tem a configuração mínima do Redux.
- Quando precisar manipular o estado do reducer, será preciso disparar uma ação;
- Todos os reducers vão ouvir todas as ações disparadas. O desenvolvedor declara quais ações ele quer ouvir para executar uma manipulação de estado específica;
- Para disparar uma ação;
  - Criar uma função em um componente que dispara a ação;
  - Importar o "useDispatch" e usar ele para disparar uma ação;
  - "**Ações**" são o que vão descrever para o reducer o que ele tem que fazer. A ação é disparada, ela tem um tipo e esse tipo "avisa" o reducer para ele alterar o estado com base na ação executada;
    - Ação tem um "type" (com letra maiúscula como convenção) e "payload", com dados.
- Reducer ouve todas as ações disparadas na aplicação;
  - Por isso, não se faz a configuração do modo explicado acima. Normalmente, separa-se os reducers em módulos, de modo que em "createStore" se passa uma função que combina vários reducers. Mas, não vamos fazer dessa forma neste momento.
- Todo reducer em qualquer tutorial se parece da seguinte forma:

```
const reducer = (state, action) => {
  switch(action.type) {
    case 'BOTAO_CLICADO': {
      return state; // sempre que o reducer é chamado, ele precisa retornar o estado
    }

    default: {
      return state;
    }
  }
};
```

- Com isso, consegue-se separar as ações. Por exemplo, se quiser executar ação apenas quando a ação "BOTAO_CLICADO" for disparada, pode-se fazer o seguinte:

```
const reducer = (state, action) => {
  switch(action.type) {
    case 'BOTAO_CLICADO': {
      console.log('Estou ouvindo BOTAO_CLICADO');
      return state; // sempre que o reducer é chamado, ele precisa retornar o estado
    }

    default: {
      return state;
    }
  }
};
```

- Assim, ouve-se apenas a ação "BOTAO_CLICADO", descartando as outras ações.
- Para ter um estado inicial (como os dados vão iniciar na aplicação caso nada tenha acontecido), pode-se fazer da seguinte forma:

```
const initialState = {
  botaoClicado: false,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'BOTAO_CLICADO': {
      console.log('Estou ouvindo BOTAO_CLICADO');
      return state; // sempre que o reducer é chamado, ele precisa retornar o estado
    }

    default: {
      return state;
    }
  }
};
```

- Nunca se altera o estado atual da aplicação, sempre se copia o estado para um novo estado, altera-se o novo estado e se retorna o novo estado. Isto é feito da seguinte forma:

```
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'BOTAO_CLICADO': {
      const newState = { ...state }; // copia o estado atual com spread operator
      newState.botaoClicado = !newState.botaoClicado; // altera o valor de botaoClicado
      return newState; // sempre que o reducer é chamado, ele precisa retornar o estado
    }

    default: {
      return state;
    }
  }
};
```

- A ideia, agora, é mostrar no header quando o botão foi clicado. Para fazer isso, basta importar o hook "useSelector" do Redux no header e usar ele para acessar o estado. Isto fica da seguinte forma:

```
import { useSelector } from 'react-redux'; // useSelector é um hook que acessa o estado

import { Nav } from './styled';

export default function Header() {
  const botaoClicado = useSelector(state => state.botaoClicado);

  return (<Nav>
    <Link to="/">
      <FaHome size={24} />
    </Link>
    <Link to="/login">
      <FaUserAlt size={24} />
    </Link>
    <Link to="">
      <FaSignInAlt size={24} />
    </Link>
    {botaoClicado ? 'Clicado' : 'Não clicado'}
  </Nav>);
}
```

- Com isso, em qualquer página que se for, vai-se ter esse mesmo estado, porque ele é de todos os componentes. Ele só muda quando for modificado;
- Redux cria um estado global para a aplicação. Ele é usado quando houver a necessidade de que a aplicação tenha um estado global.
  - Um exemplo disso é o carrinho de compras de um e-commerce, que está presente em todas as páginas do e-commerce;
  - Outro exemplo é com players, para avisar que uma plataforma pode avançar para o próximo vídeo. No caso da Udemy, quando um vídeo acaba, dispara uma ação dizendo que o vídeo acabou para a barra lateral mudar para o próximo vídeo;
    - Os players de música, como o do Spotify, também fazem isso.
- Nosso store não vai ficar assim, vamos separar ele em mais coisas nas próximas aulas.
