var express = require("express")
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