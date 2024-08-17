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
