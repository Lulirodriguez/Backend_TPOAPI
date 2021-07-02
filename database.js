const Sequelize = require('sequelize');

// me traigo los modelos que quiero

const MarcaModelo = require('./models/marcas');
const UsuarioModelo = require('./models/usuarios');

// configuracion de la base de datos local

const sequelize = new Sequelize('APITPO', 'luliR', 'mysql2271', {
    host: 'localhost',
    dialect: 'mysql',
});

// crear los modelos en la base de datos (sin usar consultas sql)

const Marca = MarcaModelo(sequelize,Sequelize);
const User = UsuarioModelo(sequelize, Sequelize);

sequelize.sync({force: false}).then(() => {
        console.log("Las tablas están sincronizadas");
    }
)

// lo exporto => se requiere en app.js

module.exports = {
    Marca,
    User
}