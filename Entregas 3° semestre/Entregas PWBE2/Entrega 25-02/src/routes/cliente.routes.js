const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/cliente.controller");

router.get("/listar", clienteController.listarCliente);
router.get("/buscar/:id", clienteController.buscarCliente);
router.post("/cadastrar", clienteController.novoCliente);
router.put("/atualizar/:id", clienteController.atualizarCliente);
router.delete("/apagar/:id", clienteController.apagarCliente);

module.exports = router;