const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";

    this.middlewares();
    this.routes();
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/usuarios"));
  }

  // middleware: es una función que se puede ejecutar antes
  // o después del manejo de una ruta.
  middlewares() {
    // CORS
    this.app.use(cors());

    // Lectura y parseo del body
    this.app.use(express.json());

    // Directorio Público
    this.app.use(express.static("public"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server on port ${this.port}`);
    });
  }
}

module.exports = Server;
