const router = require('express').Router();
const middlewares = require('./middlewares.js');

const apiMarcasRouter = require('./api/marcas');
const apiUsuarioRouter = require('./api/usuarios');

// Todas las rutas para marcas ( o acciones que requieran de loguearse) van a pasar por el checkToken que esta en los middlewares

router.use('/marcas', middlewares.checkToken, apiMarcasRouter); //como ya estamos en '/api' , esto dice que lo que tenga /api/films lo maneja apiMarcasRouter
router.use('/usuarios', apiUsuarioRouter); // maneja /api/usuarios

module.exports = router;