const { Router } = require("express");
const routes = new Router();

const AuthController = require("./controllers/AuthController");

// Auth Routes
routes.get("/", AuthController.renderLogin);

// Server Error
routes.get("/server-error", (req, res) =>
  res.render("server-error", {
    page_title: "Erro de Servidor"
  })
);

// 404
routes.use((req, res) => res.render("404"));

module.exports = routes;
