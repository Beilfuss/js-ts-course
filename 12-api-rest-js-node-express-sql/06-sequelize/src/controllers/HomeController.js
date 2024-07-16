import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "José",
      sobrenome: "Oliveira",
      email: "joseoliveira@gmail.com",
      idade: 15,
      peso: 60,
      altura: 1.6
    });
    res.json(novoAluno);
  }
}

export default new HomeController(); // exporta a classe já instanciada
