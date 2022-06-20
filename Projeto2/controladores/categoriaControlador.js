const categoria = require("./../modelos/categoria")
var produto = require("./../modelos/categoria")

var controlador = {}

// Create
controlador.inserir = function(_descricao){
    categoria.create({
        descricao: _descricao
    })
}

// Read
controlador.buscarTudo = function(){
    categoria.findAll({
        raw: true
    }).then(
        function(dados){
            console.log(dados)
        }
    )
}

// Update
controlador.atualizarIdDescricao = function(_id, _descricao){
    categoria.update({idCategoria: _id},{
        where:{
            descricao: _descricao
        }
    })
}
controlador.atualizarDescricaoId = function(_descricao, _id){
    categoria.update({descricao, _descricao},{
        where:{
            idCategoria: _id
        }
    })
}

// Delete
controlador.deletarId = function(_id){
    categoria.destroy({
        where: {
            idCategoria: _id
        }
    })
}
controlador.deletarDescricao = function(_descricao){
    categoria.destroy({
        where: {
            descricao: _descricao
        }
    })
}

module.exports = controlador