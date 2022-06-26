var express = require("express")
var produtoControlador = require("../controllers/controladorProduto")

var rotas = express.Router()

//rotas da API
rotas.post("/produtos",produtoControlador.inserir)
rotas.get("/produtos",produtoControlador.buscar)
rotas.get("/produtos/:id",produtoControlador.buscarUm)
rotas.put("/produtos/:id",produtoControlador.atualizar)
rotas.delete("/produtos/:id",produtoControlador.remover)


//rotas de páginas
rotas.get("/cadastrar",produtoControlador.novoFormulario)   //retorna a página de cadastro
rotas.get("/editar/:id/:descricao/:preco",produtoControlador.editarFormulario) //retorna a pagina de edição
rotas.post("/ediReq/:id",produtoControlador.montarReqEdicao) //monta requisição de edição
rotas.get("/remover/:id",produtoControlador.montarReqDelete)  //monta requisição de remoção


module.exports = rotas