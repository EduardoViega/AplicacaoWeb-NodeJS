var sequelize = require("sequelize")
var banco = require("../configs/bancoConfig")

var usuario = banco.define("usuario",{
    idusuario: {
        type: sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    firstname: {
        type: sequelize.STRING(50),
        allowNull: false,
    },
    lastname: {
        type: sequelize.STRING(50),
        allowNull: false,
    },
    email: {
        type: sequelize.STRING(50),
        allowNull: false,
    },
    repemail: {
        type: sequelize.STRING(50),
        allowNull: false,
    }
},{
    freezeTableName: true,
    timestamps: false
})

usuario.sync()

module.exports = usuario