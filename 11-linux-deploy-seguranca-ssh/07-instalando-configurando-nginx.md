## Instalando e configurando o NGINX (Proxy Reverso)

- Proxy reverso: as requisições vão chegar no endereço (ip do servidor), o NGINX vai receber isso na porta definida (80 ou 443, HTTP ou HTTPS) e aí o NGINX vai passar essa requisição para nosso servidor na porta 3000 para "falar" com o Node. Com isso, o Node responde e o NGINX volta para o cliente;
    - No meio do caminho vamos ter um servidor, e isso é chamado de "proxy reverso".
- Acessar o servidor com SSH;
- Instalar o NGINX;
    - `sudo apt install nginx`;
    - Verificar se o NGINX já foi iniciado: `sudo systemctl status nginx`;
    - Se ele já estiver ativo, já deve haver uma página de boas vindas do NGINX acessando o IP do servidor.