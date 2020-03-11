class AuthController {
  renderLogin(req, res) {
    res.render("auth/login", {
      page_title: "Faça o seu login"
    });
  }
}

module.exports = new AuthController();
