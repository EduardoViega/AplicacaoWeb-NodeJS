var express = require("express")
var rotas = require("./routes/produtoRoutes")

var servidor = express()
const PORTA = 8082

servidor.use(express.urlencoded({extended:true}))
servidor.use(rotas)

servidor.listen(PORTA,function(){
    console.log("Executando servidor...")
})