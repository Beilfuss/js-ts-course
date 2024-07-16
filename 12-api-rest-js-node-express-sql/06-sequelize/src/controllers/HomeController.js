
class HomeController {
  index(req, res) {
    res.status(200).json({
      "tudoCerto": true,
    });
  }
}

export default new HomeController(); // exporta a classe já instanciada
