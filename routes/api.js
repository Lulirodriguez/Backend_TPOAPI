const router = require('express').Router();
const middlewares = require('./middlewares.js');

const apiMarcasRouter = require('./api/marcas');
const apiUsuarioRouter = require('./api/usuarios');
const apiComprasRouter = require('./api/compras');
const apiItemsRouter = require('./api/items');

// Todas las rutas para marcas ( o acciones que requieran de loguearse) van a pasar por el checkToken que esta en los middlewares

router.use('/marcas', middlewares.checkToken, apiMarcasRouter); //como ya estamos en '/api' , esto dice que lo que tenga /api/films lo maneja apiMarcasRouter
router.use('/usuarios', apiUsuarioRouter); // maneja /api/usuarios
router.use('/compras', apiComprasRouter); // maneja /api/compras
router.use('/items', apiItemsRouter); // maneja /api/items

module.exports = router;