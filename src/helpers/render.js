const Menu = require('../menu')

class RenderHelper {
  resolve(name){
    return {
      layout: "app",
      page_title: name,
      menu: Menu.generate(name, "admin")
    }
  }
}

module.exports = new RenderHelper()