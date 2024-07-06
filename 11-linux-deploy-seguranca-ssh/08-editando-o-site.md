## Editando o site

- Veremos como editar o site com ele no servidor;
- Passos:
    - Editar o que se quer editar na pasta do projeto (no repositório local, conectado com o servidor);
    - Na mesma pasta, executar `git add .`, `git commit -am '[mensagem do commit]'` e `git push agenda main`(este último para enviar para o servidor);
        - Isso envia para um repositório no servidor, mas não é a de produção. Aqui, mandamos para "repo-agenda". Agora, é preciso que a pasta "agenda" busque os arquivos da pasta "repo-agenda".
    - Executar `ssh [domínio do servidor] "git -C /home/[usuario]/agenda/ pull agenda main"`;
        - Executa um comando dentro do servidor, mas de fora do servidor.
- Mais detalhes no arquivo "como-editar-o-site.txt" em "arquivos-de-ajuda".