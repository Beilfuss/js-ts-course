import Aluno from "../models/Aluno";

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll(); // busca todos os alunos
    res.json(alunos);
  }
}

export default new AlunoController(); // exporta a classe já instanciada
