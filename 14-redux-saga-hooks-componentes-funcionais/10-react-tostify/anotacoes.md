# React Toastify

- Vamos configurar o React Tostify para enviar mensagens "toasts" para o usuário;
  - Com ele, não é preciso se preocupar em qual lugar da aplicação se está, pode-se lançar mensagens em qualquer lugar.
- Instalar o React Toastity: `npm i react-toastify`;
- Configurar ele;
  - Ir em "App.js";
  - Importar o pacote;
  - Adicionar a tag do pacote;
    - Adicionar, também, o parâmetro "autoClose", para configurar quanto tempo o toast vai durar;
    - Adicionar uma classe, se for necessário.
  - Importar o CSS do pacote em "GlobalStyles.js" e configurar as cores dele.
- Para emitir uma mensagem;
  - Importar o toast no arquivo da página;
  - Adicionar o toast dentro do componente, como `toast.success('[mensagem]')` ou `toast.error('[mensagem]')`.
- Há, também, outros tipos de mensagens, como de warning e de informação.
