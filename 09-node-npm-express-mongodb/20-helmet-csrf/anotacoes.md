## CSRF

"Cross-site Request Forgery" é um tipo de ataque em que um link malicioso posta algo em algum site no nome do usuário logado.

Nessa aula, vamos prevenir que alguém poste alguma coisa de algum site que não seja o nosso. Para isso vamos instalar o helmet:

- npm i helmet

O helmet é uma recomendação padrão do Express para segurança.

Além disso, precisamos instalar o csurf:

- npm i csurf

