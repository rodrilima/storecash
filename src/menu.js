class Menu {
  constructor(){
    this.list = [
      {
        name: "Dashboard",
        icon: "fas fa-tachometer-alt",
        href: "/app/dashboard",
        auth: ["user", "admin"]
      },
      {
        name: "Carteira",
        icon: "fas fa-wallet",
        href: "/app/carteira",
        auth: ["user", "admin"]
      }
    ]
  }
  generate(activeName, auth){
    return this.list.map(item => {
      if(item.auth.findIndex(a=>a === auth) !== -1)
      return `<a href="${item.href}">
        <li ${activeName === item.name ? `class="active"` : ""}>
          <i class="${item.icon}"></i> ${item.name}
        </li>
      </a>`
    }).join("")
  }
}

module.exports = new Menu()