var express = require("express")
var produtoControlador = require("../controllers/controladorUsuario")

var rotas = express.Router()

//rotas da API
rotas.post("/usuarios",produtoControlador.inserir)
rotas.get("/",produtoControlador.buscar)
rotas.get("/usuarios",produtoControlador.buscar)
rotas.get("/usuarios/:id",produtoControlador.buscarUm)
rotas.put("/usuarios/:id",produtoControlador.atualizar)
rotas.delete("/usuarios/:id",produtoControlador.remover)


//rotas de páginas
rotas.get("/cadastrar",produtoControlador.novoFormulario)   //retorna a página de cadastro
rotas.get("/editar/:id/:descricao/:preco",produtoControlador.editarFormulario) //retorna a pagina de edição
rotas.post("/ediReq/:id",produtoControlador.montarReqEdicao) //monta requisição de edição
rotas.get("/remover/:id",produtoControlador.montarReqDelete)  //monta requisição de remoção


module.exports = rotas