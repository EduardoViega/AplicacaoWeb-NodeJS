var sequelize = require("sequelize")
var banco = require("../configs/bancoConfig")

var produto = banco.define("produto",{
    idproduto: {
        type: sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    descricao: {
        type: sequelize.STRING(50),
        allowNull: false,
    },
    preco: {
        type: sequelize.DECIMAL,
        allowNull: false,
    }
},{
    freezeTableName: true,
    timestamps: false
})

// produto.sync()

module.exports = produto