var sequelize = require("sequelize")
var categoria = require("./categoria")
var banco = require("./../bancoConfig")

var produto = banco.define("Produto",{
    id: {
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
    freezeTableName: true, //Exatamente da forma como definida no início("carro")
    timestamps: false //Cria duas tabelas: quando foi criado e quando foi alterado por último
})

categoria.hasMany(produto,{
    foreignKey: "idCategoria"
})
produto.belongsTo(categoria,{
    foreignKey: "idCategoria"
})

// Se não existir no banco ela é criada
    // produto.sync()
// Cria a tabela, deleta a versão anterior se por acaso existia
    // produto.sync({ force: true })
// Verifica o estado atual da tabela e realiza operações necessárias para atualizá-la
    // produto.sync({alter: true})

module.exports = produto