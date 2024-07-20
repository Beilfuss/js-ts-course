class FotoController {
  async store(req, res) {
    res.json(req.file); // retorna o arquivo enviado no corpo da requisição
  }
}

export default new FotoController(); // exporta a classe já instanciada
