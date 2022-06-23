var produto = require("./../modelos/produto")

var controlador = {}

// Create
controlador.inserir = function(_descricao, _preco, _idCategoria){
    produto.create({
        descricao: _descricao,
        preco: _preco,
        idCategoria: _idCategoria
    })
}

// Read
controlador.buscarTudo = function(){
    produto.findAll({
        raw: true
    }).then(
        function(dados){
            console.log(dados)
        }
    )
}

// Update
controlador.atualizarIdDescricao = function(_id, _descricao){
    produto.update({id: _id},{
        where:{
            descricao: _descricao
        }
    })
}
controlador.atualizarIdPreco = function(_id, _preco){
    produto.update({id: _id},{
        where:{
            preco: _preco
        }
    })
}
controlador.atualizarDescricaoId = function(_descricao, _id){
    produto.update({descricao: _descricao},{
        where:{
            id: _id
        }
    })
}
controlador.atualizarDescricaoPreco = function(_descricao, _preco){
    produto.update({descricao: _descricao},{
        where:{
            preco: _preco
        }
    })
}
controlador.atualizarPrecoId = function(_preco, _id){
    produto.update({preco: _preco},{
        where:{
            id: _id
        }
    })
}
controlador.atualizarPrecoDescricao = function(_preco, _descricao){
    produto.update({preco: _preco},{
        where:{
            descricao: _descricao
        }
    })
}

// Delete
controlador.deletarId = function(_id){
    produto.destroy({
        where: {
            id: _id
        }
    })
}
controlador.deletarDescricao = function(_descricao){
    produto.destroy({
        where: {
            descricao: _descricao
        }
    })
}
controlador.deletarPreco = function(_preco){
    produto.destroy({
        where: {
            preco: _preco
        }
    })
}

module.exports = controlador