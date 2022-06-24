var express = require("express")
var carroControlador = require("./../controllers/controladorCarro")

var rotas = express.Router()

//rotas da API
rotas.post("/carros",carroControlador.inserir)
rotas.get("/carros",carroControlador.buscar)
rotas.get("/carros/:id",carroControlador.buscarUm)
rotas.put("/carros/:id",carroControlador.atualizar)
rotas.delete("/carros/:id",carroControlador.remover)

module.exports = rotas