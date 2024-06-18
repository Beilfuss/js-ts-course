## Windows: criando as chaves SSH e acessando o servidor

- Baixar e instalar o git (se ainda não tiver);
- Entrar no Git Bash;
- Criar uma chave SSH no Windows;
    - No próprio Git Bash, executar "ssh-keygen", digitar nome da chave e senha da chave;
    - Executar "eval $(ssh-agent)";
    - Executar "ssh-add ~/.ssh/id_rsa" (ou o nome escolhido para a chave). Isto para adicionar a chave criada ao SSH como sendo a chave deste usuário;
    - Os dois últimos comandos acima vão ter que ser executados toda vez que reiniciar o Windows.
- Copiar o conteúdo de "~/.ssh/id_rsa.pub" ou [nome escolhido para a chave].pub;
- Ir em "Metadados" -> "Chaves SSH" -> "Adicionar chave SSH".
    - Colar a chave SSH e salvar.
    - Agora, este usuário do Windows tem acesso ao servidor.
- Acessando o servidor.
    - 