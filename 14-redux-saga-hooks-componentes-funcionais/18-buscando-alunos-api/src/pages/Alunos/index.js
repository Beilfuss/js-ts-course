import { useEffect, useState } from 'react';

import { Container } from '../../styles/GlobalStyles';
import { AlunoContainer } from './styled';
import axios from '../../services/axios';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]); // retorna um array com dois elementos, o primeiro é o estado e o segundo é a função que atualiza o estado

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      setAlunos(response.data);
    }

    getData();
  }, []);

  return (
    <Container>
      <h1>Alunos</h1>

      <AlunoContainer>
        {alunos.map(aluno => (
          <div key={String(aluno.id)}>
            {aluno.nome}
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
