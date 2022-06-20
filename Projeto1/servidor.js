var express = require("express")
var carro = require("./controladores/controladorCarro")
var abastecimento = require("./controladores/controladorAbastecimento")
var servidor = express()

const PORTA = 8081

servidor.listen(PORTA,function(){
    console.log("Executando servidor...")
})

servidor.get("/",function(req,res){
    res.sendFile(__dirname + "/pages/inicio.html")
})
servidor.get("/inicio",function(req,res){
    res.sendFile(__dirname + "/pages/inicio.html")
})

servidor.get("/somar",function(req,res){
    res.sendFile(__dirname + "/pages/somar.html")
})

servidor.get("/multiplicar",function(req,res){
    res.sendFile(__dirname + "/pages/multiplicar.html")
})

// Create (marca, ano, usado, abastecimento) ====>
// abastecimento.inserir("Elétrico")
// carro.inserir("BMW x6", 2022, false, 1)

// Read (read where 'id/marca/ano/usado') ====>
abastecimento.buscarTudo()
carro.buscarTudo()
// carro.buscarId(1)
// carro.buscarMarca("BMW x6")
// carro.buscarAno(2022)
// carro.buscarUsado(false)
// carro.buscarAbastecimento(1)

// Update (update 'this', where 'this') ====>
// abastecimento.atualizarTipoId("Diesel",1)
// carro.atualizarIdMarca(10, "BMW x6") // muda o Id para... onde a Marca for... 
// carro.atualizarAnoId()
// carro.atualizarAnoUsado()
// carro.atualizarUsadoId()
// carro.atualizarUsadoAno()
// carro.atualizarMarcaId()

// Delete (delete where 'this') ====>
// abastecimento.deletarId(1) // apaga registro onde Id for...
// carro.deletarId(10) // apaga registro onde Id for...
// carro.deletarMarca()
// carro.deletarAno()
// carro.deletarUsado()