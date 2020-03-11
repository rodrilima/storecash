const RenderHelper = require('../helpers/render')

class DashboardController {
    render(req, res) {
      res.render("app/dashboard", RenderHelper.resolve("Dashboard"));
    }
  }
  
  module.exports = new DashboardController();
  