var sequelize = require("sequelize")
var banco = require("./../bancoConfig")

var carro = banco.define("carro",{
    idCarro: {
        type: sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    marca: {
        type: sequelize.STRING(20),
        allowNull: false,
    },
    ano: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
    usado: {
        type: sequelize.BOOLEAN,
        allowNull: false,
    }
},{
    freezeTableName: true, //Exatamente da forma como definida no início("carro")
    timestamps: false //Cria duas tabelas: quando foi criado e quando foi alterado por último
})

carro.sync() //Se não existir no banco ela é criada