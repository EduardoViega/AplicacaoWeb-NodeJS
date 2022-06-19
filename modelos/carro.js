var sequelize = require("sequelize")
var banco = require("./../bancoConfig")
var abastecimento = require("./abastecimento")

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
        type: sequelize.INTEGER,
        allowNull: false,
    }
},{
    freezeTableName: true, //Exatamente da forma como definida no início("carro")
    timestamps: false //Cria duas tabelas: quando foi criado e quando foi alterado por último
})

// Relação 1-1 (A.hasOne(B))
abastecimento.hasOne(carro,{
    foreignKey: "idAbastecimento"
})
carro.belongsTo(abastecimento,{
    foreignKey: "idAbastecimento"
})
// Relação 1-X (A.belongsTo(B))
// Relação X-X (A.belongsToMany(B, { through: 'C' }))


//Se não existir no banco ela é criada, possui variações para atualizar
// carro.sync()

module.exports = carro