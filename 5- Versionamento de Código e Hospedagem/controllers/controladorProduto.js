var produto = require("../models/produto")
var axios = require("axios")
var qs = require("querystring")

var controlador = {}

//Create - POST
controlador.inserir = function(req,res){
    produto.create({
        descricao: req.body.descricao,
        preco: req.body.preco
    }).then(
        function(dados){
            res.status(200).redirect("/produtos")
        }
    ).catch(
        function(erro){
            res.status(500).send("Erro ao inserir o produto: "+erro)
        }
    )
}

//Read - GET
controlador.buscar = function(req,res){
    produto.findAll({
        raw: true
    }).then(
        function(dados){
            //res.status(200).send(dados)
            res.render("tabela",{
                produto: dados
            }
            )
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
        descricao: req.body.descricao,
        preco: req.body.preco
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



//solicitarNovoFormulario
controlador.novoFormulario = function(req,res){
    res.render("novoForm")
}

//solicitarEditarFormulario
controlador.editarFormulario = function(req,res){
    res.render("editarForm",{
        idproduto: req.params.id,
        descricao: req.params.descricao,
        preco: req.params.preco
    })
}

//montarRequisiçãoEditar
controlador.montarReqEdicao = function (req, res) {
    axios.put("/produtos/" + req.params.id,
        qs.stringify({
            descricao: req.body.descricao,
            preco: req.body.preco,
        }),
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            proxy:{
                host: "52.87.179.58",
                port: 3000
            }
        }
    ).then(function () {
            res.status(200).redirect("/produtos")
        })
        .catch(function (err) {
            res.status(500).send("Erro ao editar o produto: " + err);
        })
}


//montarRequisiçãoRemover
controlador.montarReqDelete = function (req, res) {
    axios.delete('/produtos/' + req.params.id,{
        proxy:{
            host: "52.87.179.58",
            port: 3000
        }
    }).then(function () {
            res.status(200).redirect("/produtos")
        })
        .catch(function (err) {
            res.status(500).send("Erro ao apagar um produto: " + err);
        })
}

module.exports = controlador