# MyRoute - Rota personalizada e privada

- Vamos configurar uma rota customizada (rotas com acesso com login);
    - Possibilitar que, quando o usuário tentar entrar numa página que requer login, ele seja direcionado para a página de login e depois redirecionado para a página que tentou entrar;
    - Por isso, vamos precisar de um componente personalizado, para utilizar a rota fechada dentro do componente se o usuário estiver logado. Se ele não estiver logado, podemos usar o "history" ou o "redirect" para redirecionar.
- Criar um arquivo "MyRoute.js" em "routes";
    - Na rota desse arquivo, vamos receber o componente, a variável "isClosed" (para indicar se a rota é aberta ou fechada) e "...rest", que é o resto das propriedades;
    - Nessa rota:
      - Verificamos se o usuário está logado;
        - Se não estiver e rota for fechada, redireciona ele para a tela de login e envia a tela que o usuário estava.
        - Se estiver logado, retorna a rota que o usuário quer acessar.
      - Validar as propriedades recebidas no objeto que vem como parâmetro.
        - Para isso, instalar o pacote "prop-types": `npm i prop-types`;
        - Importar a biblioteca "prop-types" e fazer a validação.
- Criamos uma nova rota utilizando a rota que vem do react-router-dom, o que substitui o "Route";
  - Por isso, pode-se apagar o "Route" de "index.js" em "routes" e importar o novo componente criado.
- Para fechar uma rota e redirecionar para o login, então, basta adicionar a propriedade "isClosed" nos parâmetros do componente de rota de uma determinada página;
- Normalmente, para rotas privadas, utiliza-se o nome "privateRoute".
