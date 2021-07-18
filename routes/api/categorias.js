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

//actualiza un item
router.put('/:idCategoria',async(req,res)=>{
    try{
        await Categoria.update(req.body,{
            where:{idCategoria:req.params.idCategoria}
        });
        res.json({succes:'se ha modificado un item'})
    }
    catch(err){
        res.json({error:'error al editar producto'})
    }
});

//borra un item
router.delete('/:idCategoria', async (req,res)=>{
    await Categoria.destroy({
        where:{idCategoria:req.params.idCategoria}
    });
    res.json({succes:'se ha borrado un item'})
});

module.exports = router;