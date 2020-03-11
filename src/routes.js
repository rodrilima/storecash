const { Router } = require("express");
const routes = new Router();

const AuthController = require("./controllers/AuthController");
const DashboardController = require("./controllers/DashboardController");
const WalletController = require("./controllers/WalletController");

// Auth Routes
routes.get("/", AuthController.renderLogin);

// App Routes
routes.get("/app", (req, res) => res.redirect("/app/dashboard"));
routes.get("/app/dashboard", DashboardController.render);
routes.get("/app/carteira", WalletController.render);

// Server Error
routes.get("/server-error", (req, res) =>
  res.render("server-error", {
    page_title: "Erro de Servidor"
  })
);

// 404
routes.use((req, res) => res.render("404"));

module.exports = routes;
