var sequelize = require("sequelize")
var banco = require("./../bancoConfig")

var categoria = banco.define("Categoria",{
    idCategoria: {
        type: sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    descricao: {
        type: sequelize.STRING(50),
        allowNull: false,
    }
},{
    freezeTableName: true, //Exatamente da forma como definida no início("carro")
    timestamps: false //Cria duas tabelas: quando foi criado e quando foi alterado por último
})

// Se não existir no banco ela é criada
    // categoria.sync()
// Cria a tabela, deleta a versão anterior se por acaso existia
    // categoria.sync({ force: true })
// Verifica o estado atual da tabela e realiza operações necessárias para atualizá-la
    // categoria.sync({alter: true})

module.exports = categoria