const Sequelize = require('sequelize');
const sequelize = new Sequelize('gafio', 'Mauri', 'Ninja$7505', {
    host: "localhost",
    dialect: "mysql"
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
/*
sequelize.authenticate().then(function(){
    console.log("Conectado ao Banco de dados!");
}).catch(function(err){
    console.log(err)
})
*/