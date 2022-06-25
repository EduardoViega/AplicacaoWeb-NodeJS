var sequelize = require("sequelize")

var conexao = new sequelize("projeto2", "postgres", "123456", {
    host: "localhost",
    dialect: "postgresql"
})

conexao.authenticate().then(
    function(){
        console.log("Conectado com sucesso!")
    }
).catch(
    function(erro){
        console.log("Erro ao conectar: "+ erro)
    }
)

module.exports = conexao