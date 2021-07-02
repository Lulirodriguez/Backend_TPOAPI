const router=require('express').Router();

const {Categoria}=require('../../database');


//devuelve todos las categorias
router.get('/',async(req,res)=>{
    //res.send('funciona');
    console.log(req.params);
    const categoria = await Categoria.findAll();
    res.json(categoria);
});

//crea una categoria
router.post('/',async(req,res)=>{
    const categoria=await Categoria.create(req.body);
    res.json(categoria);
});

module.exports = router;