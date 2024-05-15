Nessa aula vamos ativar as sessions para o express: salvar os dados do navegador no servidor. Com esse **cookie**, toda vez que o cliente acessar a aplicação, junto com a requisição dele vai o cookie, aí o servidor verifica se ele tem acesso e, se tiver, deixa entrar.
Isso para login, mas sessões podem ser usadas para salvar o que quiser.

Sessões são um modo de identificar um navegador específico com um usuário específico. Se o navegador do cliente for aberto em modo anônimo, por exemplo, o servidor não reconhece mais aquele navegador.

A sessão que vamos ativar é salva, primeiramente, na memória. Mas, isso é inviável porque uma aplicação grande consome muita memória e isso pode esgotar a memória do servidor. Outro problema de salvar a sessão em memória é que se reiniciarmos o servidor, perdemos todas as sessões ativas. Por isso, vamos salvar a sessão em uma base de dados.

Vamos, também, instalar **Flash messages**, que são mensagens salvas na sessão. Por exemplo, "usuário/senha inválidos", que é uma mensagem que deve deixar de existir depois de ser lida pelo usuário.

Para fazermos essas coisas, vamos precisar dos pacotes: **express-session**, **connect-mongo** e **connect-flash**