## Linux: criando as chaves SSH e acessando o servidor

- Poderia acessar o servidor pelo IP, mas no Google Cloud Platform isso não é possível, é preciso usar chaves SSH;
- É necessário ter uma chave SSH pública e uma chave privada no computador e colocar essas chaves dentro do servidor;
- Criar uma chave SSH no Linux;
    - Abrir o terminal;
    - Executar "ssh-keygen -f ~/.ssh/cursojs -t rsa -b 4096
    - Adicionar uma senha (opcional);
    - Agora, deve-se ter um arquivo "cursojs" e outro "cursojs.pub" na pasta "./ssh";
    - Copiar a chave pública após executar "cat [caminho da chave pública].
