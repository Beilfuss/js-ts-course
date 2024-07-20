class HomeController {
  async index(req, res) {
    res.json('Index');
  }
}

export default new HomeController(); // exporta a classe já instanciada
