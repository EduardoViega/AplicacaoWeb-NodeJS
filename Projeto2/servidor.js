var express = require("express")
var modeloProduto = require("./modelos/produto")
var modeloCategoria = require("./modelos/categoria")
var produto = require("./controladores/produtoControlador")
var categoria = require("./controladores/categoriaControlador")
var servidor = express()

const PORTA = 8082

servidor.listen(PORTA,function(){
    console.log("Executando servidor...\n")
})

servidor.get("/",function(req,res){
    res.send("<h1>Banco Produto e Categoria</h1>")
})

// modeloCategoria.sync({alter: true})
// modeloProduto.sync({alter: true})

// categoria.inserir("Material Escolar")
// produto.inserir("Estojo", 15, 1)

produto.buscarTudo()
categoria.buscarTudo()
