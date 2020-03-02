class AuthController {
  renderLogin(req, res) {
    res.render("auth/login", {
      page_title: "Login"
    });
  }
}

module.exports = new AuthController();
