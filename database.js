const Sequelize = require('sequelize');

// me traigo los modelos que quiero

const MarcaModelo = require('./models/marcas');
const UsuarioModelo = require('./models/usuarios');
const CompraModelo = require('./models/compras');
const ItemModelo = require('./models/items');
const DireccionEnvioModelo = require('./models/direccionesDeEnvio');
const MetodoPagoModelo = require('./models/metodosDePago');
const TransaccionModelo = require('./models/transacciones');
const CategoriasModelo = require('./models/categorias')
const ItemsXCompraModelo = require('./models/itemsXCompra');

// configuracion de la base de datos local

const sequelize = new Sequelize('APITPO', 'luliR', 'mysql2271', {
    host: 'localhost',
    dialect: 'mysql',
});

// crear los modelos en la base de datos (sin usar consultas sql)

const Marca = MarcaModelo(sequelize,Sequelize);
const User = UsuarioModelo(sequelize, Sequelize);
const Compra = CompraModelo(sequelize, Sequelize);
const Item = ItemModelo(sequelize, Sequelize);
const DireccionEnvio = DireccionEnvioModelo(sequelize,Sequelize);
const MetodoPago = MetodoPagoModelo(sequelize,Sequelize);
const Transaccion = TransaccionModelo(sequelize,Sequelize);
const Categoria = CategoriasModelo(sequelize,Sequelize);
const ItemXCompra = ItemsXCompraModelo(sequelize,Sequelize);

sequelize.sync({force: false}).then(() => {
        console.log("Las tablas están sincronizadas");
    }
)

// lo exporto => se requiere en app.js

module.exports = {
    Marca,
    User,
    Compra,
    Item,
    DireccionEnvio,
    MetodoPago,
    Transaccion,
    Categoria,
    ItemXCompra,
}