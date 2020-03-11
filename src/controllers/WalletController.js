const RenderHelper = require('../helpers/render')

class WalletController {
    render(req, res) {
      res.render("app/wallet", RenderHelper.resolve("Carteira"));
    }
  }
  
  module.exports = new WalletController();
  