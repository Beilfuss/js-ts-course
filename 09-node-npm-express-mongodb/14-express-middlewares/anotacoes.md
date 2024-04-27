Nessa aula veremos o conceito de middleware do express. O express é baseado em middlewares. Por exemplo:

- route.get('/', homeController.paginaInicial);

Depois de "/", os próximos parâmetros são todos middlewares. Ou seja, poder-se-ia colocar uma função no meio do caminho ou depois de se ter respondido o cliente pra realizar uma tarefa (por isso se chama isso de middleware). Pode-se colocar uma função que chama outra função, que chama outra função e assim até quando se desejar.

