const router=require('express').Router();

const {Item}=require('../../database');


//devuelve todos los items (admin)
router.get('/',async(req,res)=>{
    //res.send('funciona');
    console.log(req.params);
    const items=await Item.findAll();
    res.json(items);
});

// devuelve todos los items de una categoria (catalogo)

router.get('/:idCategoria',async(req,res)=>{
    console.log(req.params);
    const items=await Item.findAll({
        where: {idCategoria: req.params.idCategoria}
    });
    res.json(items);
});

//crea un item
router.post('/',async(req,res)=>{
    const item=await Item.create(req.body);
    res.json(item)
});

//actualiza un item
router.put('/:itemId',async(req,res)=>{
    try{
        await Item.update(req.body,{
            where:{itemId:req.params.itemId}
        });
        res.json({succes:'se ha modificado un item'})
    }
    catch(err){
        res.json({error:'error al editar producto'})
    }
});

//borra un item
router.delete('/:itemId', async (req,res)=>{
    await Item.destroy({
        where:{itemId:req.params.itemId}
    });
    res.json({succes:'se ha borrado un item'})
});


module.exports=router;