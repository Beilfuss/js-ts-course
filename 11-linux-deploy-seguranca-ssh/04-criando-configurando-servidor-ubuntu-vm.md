## Criando e configurando servidor Ubuntu em uma máquina virtual



- Veremos a mesma coisa que fizemos com o Google Cloud Platform, mas em uma VM Ubuntu;
- Para acessar o servidor em uma máquina virtual usando o computador, a rede da máquina precisa estar em modo "bridge";
    - Seleciona a máquina no VirtualBox, abre as configurações, rede e se certifica de que ela está como "Placa em modo bridge";
    - Com isso, essa VM deve entrar na rede. Para conferir isso, basta executar "ip address show". Assim, consegue-se ver o ip dela;
    - Para se certificar de que é possível "chegar" na máquina virtual, pode-se executar, no terminal do computador, executar "ping [ip da máquina]".
- Agora, é preciso configurar o servidor ssh no servidor;
    - No servidor, executar "sudo apt install ssh";
    - Depois, executar "sudo nano etc/ssh/sshd_config";
        - Descomentar a linha "PasswordAuthentication" e deixar essa linha como "no", para não deixar um usuário acessar usando usuário e senha, apenas chaves ssh;
        - Na linha "MaxAuthTries", aumentar para um número acima da quantidade de chaves ssh no computador.
    - Para criar a chave (no computador): "ssh-keygen -f ~/.ssh/removemeplease -t rsa -b 4096";
        - Gera uma chave SSH no caminho indicado. "-f" para mudar o nome da chave. O resto dos parâmetros para segurança.
    - Copiar o caminho da chave e executar "cat [caminho da chave]";
    - Copiar a chave pública;
    - Colar a chave pública dentro do servidor.
        - Executar no servidor "nano ~/.ssh/authorized_keys", colar a chave e salvar;
        - Outras chaves podem ser colocadas nesse arquivo também.
- Nesse momento, se tentar acessar com "ssh [usuario]@[ip do servidor], é para dar certo;
- Com isso, é só ligar a máquina, deixar ela minimizada e ir administrando ela, como se estivesse usando um servidor mesmo.
    - Pode-se até instalar nginx: "sudo apt install nginx".
