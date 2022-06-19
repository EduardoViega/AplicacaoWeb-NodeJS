var abastecimento = require("./../modelos/abastecimento")

var controlador = {}

// Create
controlador.inserir = function(_tipo){
    abastecimento.create({
        tipoAbastecimento: _tipo
    })
}

// Read
controlador.buscarTudo = function(){
    abastecimento.findAll({
        raw: true
    }).then(
        function(dados){
            console.log(dados)
        }
    )
}

// Update
controlador.atualizarIdTipo = function(_id, _tipo){
    abastecimento.update({idAbastecimento: _id},{
        where:{
            tipoAbastecimento: _tipo
        }
    })
}
controlador.atualizarTipoId = function(_tipo, _id){
    abastecimento.update({tipoAbastecimento: _tipo},{
        where:{
            idAbastecimento: _id
        }
    })
}

// Delete
controlador.deletarId = function(_id){
    abastecimento.destroy({
        where: {
            idAbastecimento: _id
        }
    })
}
controlador.deletarTipo = function(_tipo){
    abastecimento.destroy({
        where: {
            tipoAbastecimento: _tipo
        }
    })
}

module.exports = controlador