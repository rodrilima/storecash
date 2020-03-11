require("dotenv/config");
const express = require("express");
const hbs = require("express-handlebars");
const path = require("path");
const bodyParser = require("body-parser");
const Youch = require("youch");

require("express-async-errors");

const routes = require("./routes");

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.views();
    this.routes();
  }

  middlewares() {
    this.server.use(
      bodyParser.urlencoded({
        extended: true
      })
    );
    this.server.use(bodyParser.json());
  }

  views() {
    this.server.use(express.static(path.resolve(__dirname, "public")));
    this.server.use("/app", express.static(path.resolve(__dirname, "public")));
    this.server.set("views", path.resolve(__dirname, "views"));
    this.server.engine(
      "hbs",
      hbs({
        extname: "hbs",
        defaultLayout: "default",
        layoutsDir: __dirname + "/views/_layouts",
        partialsDir: __dirname + "/views/_partials"
      })
    );
    this.server.set("view engine", "hbs");
  }

  routes() {
    this.server.use(routes);
    this.server.use(async (err, req, res, next) => {
      const errors = await new Youch(err, req).toJSON();
      console.log(errors);
      return res.redirect("/server-error");
    });
  }
}

module.exports = new App().server;
