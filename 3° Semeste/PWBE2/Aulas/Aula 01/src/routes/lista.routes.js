const express = require("express");

const Router = express.Router();

const listaController = require("../controllers/lista.controller");

Router.get("/listar", listaController.listarClientes);
Router.post("/cliente", listaController.cadastrarClientes);
module.exports = Router