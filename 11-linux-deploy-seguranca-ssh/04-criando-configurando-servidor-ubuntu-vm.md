## Criando e configurando servidor Ubuntu em uma máquina virtual

### Instalando o Ubuntu no VirtualBox - [Videoaula no YouTube](https://www.youtube.com/watch?v=Vl6f8_vin9M)

- Abrir o VirtualBox;
- Ir em "Novo";
- Digitar o nome do SO em "nome", conferir as opções e clicar em próximo;
- Selecionar a quantidade de memória que o sistema poderá usar;
    - Para nosso caso, 8 GB é o suficiente.
- Criar um novo disco rígido virtual (ou usar um existente);
- Selecionar o tipo de arquivo de disco rígido, pode ser o "VirtualBox Disk Imagem" mesmo";
- Deixar o armazenamento em disco rígido físico dinamicamente alocado;
    - Se tiver certeza do tamanho que quer para o disco, pode deixar o tamanho fixo.
- Conferir a localização do arquivo e separar pelo menos um 15 GB para a instalação do SO;
- Aqui, a máquina já está criada;
- Ir nas configurações da máquina, em "armazenamento" e "Controladora: IDE" selecionar a imagem do Ubuntu para ele ser instalado quando inicializado;
- Ainda nas configurações, ir em "rede" e deixar a placa de rede como "bridge";
- Feito isso, pode-se dar OK e iniciar a máquina;
- Na instalação;
    - Escolher o idioma e clicar em "Instalar o Ubuntu";
    - Selecionar o idioma do teclado ("atenção" é uma boa palavra para isso);
    - Em "atualizações e outros aplicativos", selecionar o tipo de instalação e as outras opções desejadas;
    - No tipo de instalação, selecionar "apagar disco e reinstalar o ubuntu" (como está instalando em uma VM e é para um uso específico, não é necessário particionar);
    - Selecionar o fuso horário;
    - Inserir informações de usuário;
    - Clicar em reiniciar;
    - Dar enter para "remover o meio de instalação e reiniciar.
- Ir no terminal e executar "sudo apt update" e, depois, "sudo apt upgrade";
- Instalar utilitários: "sudo apt install build-essential gcc make perl dkms curl";
- Instalar o git: "sudo apt install git";
- Para redimensionar a tela.
    - Ir em "Dispositivos" -> "Inserir imagem de CD dos adicionais para Convidado";
    - Clicar em "Executar" na mensagem;
    - Reiniciar a máquina e verificar que ela muda o tamanho.

- **Observação**: normalmente, não se usa VMs como servidores para projetos de desenvolvimento, e sim Docker. Fizemos assim dessa vez para aprendizado.

### Configurando o servidor

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
