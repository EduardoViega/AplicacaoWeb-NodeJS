var express = require("express")
var produtoControlador = require("../controllers/controladorProduto")

var rotas = express.Router()

//rotas da API
rotas.get("/produtos",produtoControlador.buscar)
rotas.get("/produtos/:id",produtoControlador.buscarUm)
rotas.post("/produtos",produtoControlador.inserir)
rotas.put("/produtos/:id",produtoControlador.atualizar)
rotas.delete("/produtos/:id",produtoControlador.remover)

module.exports = rotas