var sequelize = require("sequelize")
var banco = require("./../bancoConfig")

var abastecimento = banco.define("abastecimento",{
    idAbastecimento: {
        type: sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    tipoAbastecimento: {
        type: sequelize.STRING(20),
        allowNull: false
    }
},{
    freezeTableName: true, //Exatamente da forma como definida no início("carro")
    timestamps: false //Cria duas tabelas: quando foi criado e quando foi alterado por último
})

// Se não existir no banco ela é criada
    // abastecimento.sync()
// Cria a tabela, deleta a versão anterior se por acaso existia
    // abastecimento.sync({ force: true })
// Verifica o estado atual da tabela e realiza operações necessárias para atualizá-la
    // abastecimento.sync({alter: true})

module.exports = abastecimento