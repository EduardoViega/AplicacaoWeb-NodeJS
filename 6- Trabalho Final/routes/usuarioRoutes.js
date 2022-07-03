var express = require("express")
var usuarioControlador = require("../controllers/controladorUsuario")

var rotas = express.Router()

//rotas da API
rotas.post("/usuarios",usuarioControlador.inserir)
rotas.get("/",usuarioControlador.buscar)
rotas.get("/usuarios",usuarioControlador.buscar)
rotas.get("/usuarios/:id",usuarioControlador.buscarUm)
rotas.put("/usuarios/:id",usuarioControlador.atualizar)
rotas.delete("/usuarios/:id",usuarioControlador.remover)


//rotas de páginas
rotas.get("/cadastrar",usuarioControlador.novoFormulario)   //retorna a página de cadastro
rotas.get("/editar/:id/:firstname/:lastname/:email/:repemail",usuarioControlador.editarFormulario) //retorna a pagina de edição
rotas.post("/ediReq/:id",usuarioControlador.montarReqEdicao) //monta requisição de edição
rotas.get("/remover/:id",usuarioControlador.montarReqDelete)  //monta requisição de remoção


module.exports = rotas