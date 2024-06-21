## Criando e configurando servidor Ubuntu em uma máquina virtual



- Veremos a mesma coisa que fizemos com o Google Cloud Platform, mas em uma VM Ubuntu;
- Para acessar o servidor em uma máquina virtual usando o computador, a rede da máquina precisa estar em modo "bridge";
    - Seleciona a máquina no VirtualBox, abre as configurações, rede e se certifica de que ela está como "Placa em modo bridge";
    - Com isso, essa VM deve entrar na rede. Para conferir isso, basta executar "ip address show". Assim, consegue-se ver o ip dela;
    - Para se certificar de que é possível "chegar" na máquina virtual, pode-se executar, no terminal do computador, executar "ping [ip da máquina]".
