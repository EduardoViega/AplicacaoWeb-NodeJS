var usuario = require("../models/usuario")
var axios = require("axios")
var qs = require("querystring")

var controlador = {}

//Create - POST
controlador.inserir = function(req,res){
    usuario.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        repeatemail: req.body.repeatemail
    }).then(
        function(dados){
            res.status(200).redirect("/usuarios")
        }
    ).catch(
        function(erro){
            res.status(500).send("Erro ao inserir o usuário: "+erro)
        }
    )
}

//Read - GET
controlador.buscar = function(req,res){
    usuario.findAll({
        raw: true
    }).then(
        function(dados){
            //res.status(200).send(dados)
            res.render("tabela",{
                usuario: dados
            }
            )
        }
    ).catch(
        function(erro){
            res.status(500).send("Erro ao buscar por usuários: "+erro)
        }
    )
}

//Read - GET 2
controlador.buscarUm = function(req,res){
    usuario.findAll({
        raw: true,
        where: {
            idusuario: req.params.id
        }
    }).then(
        function(dados){
            res.status(200).send(dados)
        }
    ).catch(
        function(erro){
            res.status(500).send("Erro ao buscar por usuário: "+erro)
        }
    )
}

//Update - PUT
controlador.atualizar = function(req,res){
    usuario.update({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        repeatemail: req.body.repeatemail
    },{
        where:{
            idusuario: req.params.id
        }
    }).then(
        function(dados){
            res.sendStatus(200)
        }
    ).catch(
        function(erro){
            res.status(500).send("Erro ao atualizar um usuário: "+erro)
        }
    )
}

//Delete - DELETE
controlador.remover = function(req,res){
    usuario.destroy({
        where:{
            idusuario: req.params.id
        }
    }).then(
        function(dados){
            res.sendStatus(200)
        }
    ).catch(
        function(erro){
            res.status(500).send("Erro ao remover um usuário: "+erro)
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
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        repeatemail: req.body.repeatemail
    })
}

//montarRequisiçãoEditar
controlador.montarReqEdicao = function (req, res) {
    axios.put("/usuarios/" + req.params.id,
        qs.stringify({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            repeatemail: req.body.repeatemail,
        }),
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            proxy:{
                host: "54.207.90.118",
                port: 3000
            }
        }
    ).then(function () {
            res.status(200).redirect("/usuarios")
        })
        .catch(function (err) {
            res.status(500).send("Erro ao editar o produto: " + err);
        })
}


//montarRequisiçãoRemover
controlador.montarReqDelete = function (req, res) {
    axios.delete('/usuarios/' + req.params.id,{
        proxy:{
            host: "54.207.90.118",
            port: 3000
        }
    }).then(function () {
            res.status(200).redirect("/usuarios")
        })
        .catch(function (err) {
            res.status(500).send("Erro ao apagar um produto: " + err);
        })
}

module.exports = controlador