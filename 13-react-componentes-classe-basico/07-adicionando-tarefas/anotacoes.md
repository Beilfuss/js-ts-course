# Adicionando tarefas

- Vamos fazer a funcionalidade de adicionar tarefas;
- Pegar o evento de submit do form;
- Criar método para esse evento (handleSubmit);
    - Prevenir o envio do formulário;
    - Jogar as tarefas adicionadas para o array de tarefas;
        - Checar se a tarefa já existe na lista de tarefas.
    - Não se pode editar o estado diretamente. É preciso copiar o estado, modificar ele e depois setar ele de novo.
