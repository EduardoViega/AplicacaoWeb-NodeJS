var carro = require("./../models/carro")

var controlador = {}

//Create - POST
controlador.inserir = function(req,res){
    carro.create({
        marca: req.body.marca,
        ano: req.body.ano,
        usado: req.body.usado
    }).then(
        function(dados){
            res.status(200).send(`Carro da marca ${req.body.marca} inserido com sucesso!`)
            //res.sendStatus(200)
        }
    ).catch(
        function(erro){
            res.status(500).send("Erro ao inserir o carro: "+erro)
        }
    )
}

//Read - GET
controlador.buscar = function(req,res){
    carro.findAll({
        raw: true
    }).then(
        function(dados){
            res.status(200).send(dados)
        }
    ).catch(
        function(erro){
            res.status(500).send("Erro ao buscar por carros: "+erro)
        }
    )
}

//Read - GET 2
controlador.buscarUm = function(req,res){
    carro.findAll({
        raw: true,
        where: {
            idcarro: req.params.id
        }
    }).then(
        function(dados){
            res.status(200).send(dados)
        }
    ).catch(
        function(erro){
            res.status(500).send("Erro ao buscar por carro: "+erro)
        }
    )
}

//Update - PUT
controlador.atualizar = function(req,res){
    carro.update({
        ano: req.body.ano,
    },{
        where:{
            idcarro: req.params.id
        }
    }).then(
        function(dados){
            res.sendStatus(200)
        }
    ).catch(
        function(erro){
            res.status(500).send("Erro ao atualizar um carro: "+erro)
        }
    )
}

//Delete - DELETE
controlador.remover = function(req,res){
    carro.destroy({
        where:{
            idcarro: req.params.id
        }
    }).then(
        function(dados){
            res.sendStatus(200)
        }
    ).catch(
        function(erro){
            res.status(500).send("Erro ao remover um carro: "+erro)
        }
    )
}

module.exports = controlador