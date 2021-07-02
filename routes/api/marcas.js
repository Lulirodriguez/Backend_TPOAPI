const router = require('express').Router();

// Me traigo el modelo para poder usarlo

const  { Marca } = require('../../database');

// Metodo GET => usa Model.findAll()

router.get('/', async (req,res) => { // '/' seria la raiz, pero aca ya esta con /api/films, asi que esa es la raiz => por ejemplo, GET http://localhost:8000/api/marcas se maneja desde aca
    const marcas = await Marca.findAll(); // Me trae todos los registros que posee la tabla Marcas (encapsulada en el modelo "Marca") => es una promesa, por eso ASYNC AWAIT
    res.json(marcas); // devuelvo como response (res) un json con el array que me trajo
})

//Metodo POST => usa Model.create()

router.post('/', async (req,res) => {
    const marca = await Marca.create(req.body); // Postman: en el body elegit x-www-form-urlencoded.com para pasarle parametros
    res.json(marca);
});

// Metodo PUT => usa Model.update()

router.put('/:marcaId', async (req,res) => {
    await Marca.update(req.body, {
        where: { id : req.params.marcaId}
    });
    res.json({ success: 'Se ha modificado una marca correctamente'});
});

// metodo DELETE => usa Model.destroy()

router.delete('/:marcaId', async (req,res) => {
    await Marca.destroy({
        where: { id: req.params.marcaId }
    });
    res.json({ success: 'Se ha eliminado una marca correctamente'});
});

module.exports = router;