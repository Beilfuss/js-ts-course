# Componentes

- Para retornar mais de uma linha, coloca elas entre parênteses (uma função);
- Com JSX, não se pode retornar mais de um elemento na mesma hierarquia;
    - Exemplo:

```
<h1>Olá, mundo!</h1>
<p>Teste</p>
```

- É preciso **sempre retornar um elemento que envolva os outros elementos**;
    - Exemplo:

```
<div>
    <h1>Olá, mundo!</h1>
    <p>Teste</p>
</div>
```

- Se não quiser usar esse elemento envolvendo outros, pode-se utilizar um elemento "**fragment**", um elemento vazio:

```
<>
    <h1>Olá, mundo!</h1>
    <p>Teste</p>
</>
```

- Com isso, depois da "div root", esses elementos devem aparecer diretamente;
- O componente é uma função normal. Essas funções são componentes sem estado;
- Vamos precisar de componentes com estado, os quais normalmente são escritos como classes;
- Vamos começar a criar nossos próprios componentes;
- Vamos importar nosso componente principal em "App.js" e ele vai renderizar ele;
- Criar uma pasta "components" em "src";
    - Criar um componente "Main.js", que vai ser o principal da aplicação;
        - Esse componente vai ter estado, por isso vai ser uma classe;
        - Importar o React e "Component";
        - Componentes **stateless**, que são funções normais, retornam JSX;
        - Componentes **stateful**, que são classes, precisam do método "render", por isso vamos usar ele aqui;
        - Importar esse componente dentro de App.js e fazer ele mostrar o componente;
            - Para isso, usar o nome do componente **como se fosse uma tag HTML**.
        - Vamos ver **como criar um estado** de duas maneiras diferentes;
            - A primeira forma é com um constructor:

```
export default class Main extends Component {
    constructor(props) { // props é um objeto que contém todas as propriedades passadas para o componente
        super(props); // Chama o construtor da classe pai. Sempre necessário nesses casos

        this.state = { // estado do componente. Todas as chaves aqui dentro vão ser o estado do componente. Tudo o que mudar nesse estado reflete no render
            novaTarefa: "", // inicializa o estado

        };

        this.inputMudou = this.inputMudou.bind(this); // bind é para manter o contexto do this. Sem isso, o this dentro de inputMudou seria o input, não o Main
    }

    inputMudou(e) {
        this.setState({
            novaTarefa: e.target.value // e.target é o input. value é o valor do input
        });
    }

    render() {

        const { novaTarefa } = this.state; // Destructuring. Equivale a const novaTarefa = this.state.novaTarefa;

        return (
            <div className="Main"> {/* "className" porque "class" é uma palavra reservada do JS */} 
                <h1>{novaTarefa}</h1>

                <form action="#">
                    <input onChange={this.inputMudou} type="text" />
                    <button type="submit">Enviar</button>
                </form>

            </div> 
        );
    }
}
```

            - A segunda forma é sem constructor e com "**class fields**":

```
export default class Main extends Component {
    state = { // estado do componente. Todas as chaves aqui dentro vão ser o estado do componente. Tudo o que mudar nesse estado reflete no render
        novaTarefa: "", // inicializa o estado
    };

    inputMudou = (e) => { // método como arrow function para ter o this do componente (bind do this)
        this.setState({
            novaTarefa: e.target.value // e.target é o input. value é o valor do input
        });
    }

    render() {

        const { novaTarefa } = this.state; // Destructuring. Equivale a const novaTarefa = this.state.novaTarefa;

        return (
            <div className="Main"> {/* "className" porque "class" é uma palavra reservada do JS */} 
                <h1>{novaTarefa}</h1>

                <form action="#">
                    <input onChange={this.inputMudou} type="text" />
                    <button type="submit">Enviar</button>
                </form>

            </div> 
        );
    }
}
```

- Sempre que se tem eventos "onChange", "onSubmit", utiliza-se métodos "handleAlgumaCoisa";
    - Exemplo: "handleChange".
- Vamos fazer um CSS para deixar a tela mais agradável.
    - Criar um CSS para o arquivo "Main.js".
        - Basta criar um arquivo "Main.css" e importar ele dentro de "Main.js".
