var produto = require("./../models/produto")

var controlador = {}

//Create - POST
controlador.inserir = function(req,res){
    produto.create({
        descricao: req.body.descricao,
        preco: req.body.preco
    }).then(
        function(dados){
            res.status(200).send(`produto ${req.body.descricao} inserido com sucesso!`)
            //res.sendStatus(200)
        }
    ).catch(
        function(erro){
            res.status(500).send("Erro ao cadastrar o produto: "+erro)
        }
    )
}

//Read - GET
controlador.buscar = function(req,res){
    produto.findAll({
        raw: true
    }).then(
        function(dados){
            res.status(200).send(dados)
        }
    ).catch(
        function(erro){
            res.status(500).send("Erro ao buscar por produtos: "+erro)
        }
    )
}

//Read - GET 2
controlador.buscarUm = function(req,res){
    produto.findAll({
        raw: true,
        where: {
            idproduto: req.params.id
        }
    }).then(
        function(dados){
            res.status(200).send(dados)
        }
    ).catch(
        function(erro){
            res.status(500).send("Erro ao buscar por produto: "+erro)
        }
    )
}

//Update - PUT
controlador.atualizar = function(req,res){
    produto.update({
        preco: req.body.preco,
    },{
        where:{
            idproduto: req.params.id
        }
    }).then(
        function(dados){
            res.sendStatus(200)
        }
    ).catch(
        function(erro){
            res.status(500).send("Erro ao atualizar um produto: "+erro)
        }
    )
}

//Delete - DELETE
controlador.remover = function(req,res){
    produto.destroy({
        where:{
            idproduto: req.params.id
        }
    }).then(
        function(dados){
            res.sendStatus(200)
        }
    ).catch(
        function(erro){
            res.status(500).send("Erro ao remover um produto: "+erro)
        }
    )
}

module.exports = controlador