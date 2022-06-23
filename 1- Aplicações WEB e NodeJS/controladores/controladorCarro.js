var carro = require("./../modelos/carro")

var controlador = {}

// Create
controlador.inserir = function(_marca, _ano, _usado, _abastecimento){
    carro.create({
        marca: _marca,
        ano: _ano,
        usado: _usado,
        idAbastecimento: _abastecimento
    })
}

// Read
controlador.buscarTudo = function(){
    carro.findAll({
        raw: true
    }).then(
        function(dados){
            console.log(dados)
        }
    )
}
controlador.buscarId = function(_id){
    carro.findAll({
        raw: true,
        where: {
            idCarro: _id
        }
    }).then(
        function(dados){
            console.log(dados)
        }
    )
}
controlador.buscarMarca = function(_marca){
    carro.findAll({
        raw: true,
        where: {
            marca: _marca
        }
    }).then(
        function(dados){
            console.log(dados)
        }
    )
}
controlador.buscarAno = function(_ano){
    carro.findAll({
        raw: true,
        where: {
            ano: _ano
        }
    }).then(
        function(dados){
            console.log(dados)
        }
    )
}
controlador.buscarUsado = function(_usado){
    carro.findAll({
        raw: true,
        where: {
            usado: _usado
        }
    }).then(
        function(dados){
            console.log(dados)
        }
    )
}

// Update
controlador.atualizarIdMarca = function(_id, _marca){
    carro.update({idCarro: _id},{
        where:{
            marca: _marca
        }
    })
}
controlador.atualizarAnoId = function(_ano, _id){
    carro.update({ano: _ano},{
        where:{
            idCarro: _id
        }
    })
}
controlador.atualizarAnoUsado = function(_ano, _usado){
    carro.update({ano: _ano},{
        where:{
            usado: _usado
        }
    })
}
controlador.atualizarUsadoId = function(_usado, _id){
    carro.update({usado: _usado},{
        where:{
            idCarro: _id
        }
    })
}
controlador.atualizarUsadoAno = function(_usado, _ano){
    carro.update({usado: _usado},{
        where:{
            ano: _ano
        }
    })
}
controlador.atualizarMarcaId = function(_marca, _id){
    carro.update({marca: _marca},{
        where:{
            idCarro: _id
        }
    })
}

// Delete
controlador.deletarId = function(_id){
    carro.destroy({
        where: {
            idCarro: _id
        }
    })
}
controlador.deletarMarca = function(_marca){
    carro.destroy({
        where: {
            marca: _marca
        }
    })
}
controlador.deletarAno = function(_ano){
    carro.destroy({
        where: {
            ano: _ano
        }
    })
}
controlador.deletarUsado = function(_usado){
    carro.destroy({
        where: {
            usado: _usado
        }
    })
}

module.exports = controlador