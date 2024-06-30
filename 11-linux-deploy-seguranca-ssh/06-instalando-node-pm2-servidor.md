## Instalando o Node e Pm2 servidor

- Pm2 vai subir a aplicação automaticamente quando reiniciarmos o servidor;
- Dentro do servidor, instalar o node;
    - `sudo apt install curl -y`;
    - `curl -sL https://deb.nodesource.com/setup_20.x | sudo bash -`;
    - `sudo apt install nodejs -y`.
- Com as instalações completas, pode-se testar a aplicação;
    - `cd agenda`;
    - `npm i`;
    - Instalar Pm2: `sudo npm i -g pm2`;
        - Pacote global (disponível em todo o sistema, não só na pasta do projeto. Definido pela flag "-g") do Node que vai gerenciar a aplicação e outras aplicações caso queiramos ter mais de uma aplicação no mesmo servidor.
    - Subir um processo do projeto utilizando pm2;
        - `pm2 start /home/[usuario]/agenda/server.js --name agenda` ("server.js" é o ponto de entrada da nossa aplicação);
            - Definiu o nome como "agenda";
            - Com isso, o Pm2 já iniciou o processo "agenda" (a versão pega do "package.json");
                - Para exibir esses dados de novo, pode-se usar `pm2 list`.
    - Se tivesse outro projeto, teria que mudar a porta (dois projetos não podem usar a mesma porta). Aqui, estamos usando a porta 3000.
        - Poderia usar uma variável dinâmica no .env para isso.