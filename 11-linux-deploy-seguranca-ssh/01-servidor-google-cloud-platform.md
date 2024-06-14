## Criando um servidor na Google Cloud Platform

- Criar uma conta no Google Cloud Platform;
- Ir em "Console" -> "Compute Engine" -> Instâncias de VM;
- Criar uma instância, definindo:
    - Nome;
    - Região (se mais próxima, melhor);
    - Máquina (conforme necessário. Para o curso, serve de propósito geral e n1-standard, com 1 CPU e 4 GB de memória);
    - Sistema Operacional (geralmente uma versão mais recente e LTS do Ubuntu);
    - Disco permamente padrão (SSD de 10 GB, por exemplo. Dá e sobra para o deploy);
    - Firewall (permitir tráfego nas portas HTTP, 80, e HTTPS, 443).
- Se tiver um domínio em mãos e acesso ao servidor DNS desse domínio, pode-se redirecionar um subdomínio desse domínio para o IP da instância criada;
    - Para fazer isso, é preciso entrar no serviço de hospedagem, criar um registro que aponta para um subdomínio do domínio que se tem para o IP da instância;
    - Para isso ser possível, é necessário marcar o IP da instância como estático ("Ver detalhes da rede" -> "Endereços IP externos" -> Mudar o IP de "temporário" para "estático");
    - Importante não ter proxy: é preciso o acesso direto ao IP.
- Se não tiver um domínio em mãos, pode simplesmente usar o IP disponibilizado pela Google Cloud Platform.
    - Mesmo assim, é preciso deixar esse IP como estático.