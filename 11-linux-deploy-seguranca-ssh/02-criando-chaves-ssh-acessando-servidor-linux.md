## Linux: criando as chaves SSH e acessando o servidor

- Poderia acessar o servidor pelo IP, mas no Google Cloud Platform isso não é possível, é preciso usar chaves SSH;
- É necessário ter uma chave SSH pública e uma chave privada no computador e colocar essas chaves dentro do servidor;
- Criar uma chave SSH no Linux;
    - Abrir o terminal;
    - Executar "ssh-keygen -f ~/.ssh/cursojs -t rsa -b 4096
    - Adicionar uma senha (opcional);
    - Agora, deve-se ter um arquivo "cursojs" e outro "cursojs.pub" na pasta "./ssh";
    - Copiar a chave pública após executar "cat [caminho da chave pública].
- No Google Cloud Platform, ir em "Metadados" e adicionar a nova chave;
- Com isso, já se tem uma chave SSH que permite acessar o servidor;
    - Para isso, vai-se em "Instâncias de VM";
    - Copia-se o IP do servidor;
    - No terminal, executa-se: "ssh [usuario]@[ip do servidor].
- Depois de feita a conexão, já se está dentro da máquina do servidor.
    - Executar "sudo apt update" e "sudo apt upgrade" para atualizar os pacotes do servidor.
- Para sair do servidor, basta executar um "exit".