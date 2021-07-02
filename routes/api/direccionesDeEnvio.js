const router=require('express').Router();

const {DireccionEnvio}=require('../../database');


//devuelve todos los items
router.get('/',async(req,res)=>{
    //res.send('funciona');
    console.log(req.params);
    const items=await DireccionEnvio.findAll();
    res.json(items);
});

//crea un item
router.post('/',async(req,res)=>{
    const item=await DireccionEnvio.create(req.body);
    res.json(item)
});

//actualiza un item
router.put('/:idDireccionDeEnvio',async(req,res)=>{
    try{
        await DireccionEnvio.update(req.body,{
            where:{idDireccionDeEnvio:req.params.idDireccionDeEnvio}
        });
        res.json({succes:'se ha modificado una direccion de envio'})
    }
    catch(err){
        res.json({error:'error al editar direccion de envio'})
    }
});

//borra un item
router.delete('/:idDireccionDeEnvio', async (req,res)=>{
    await DireccionEnvio.destroy({
        where:{idDireccionDeEnvio:req.params.idDireccionDeEnvio}
    });
    res.json({succes:'se ha borrado una direccion de envio'})
})


module.exports=router;