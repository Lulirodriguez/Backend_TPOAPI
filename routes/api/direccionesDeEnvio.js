const router=require('express').Router();

const {DireccionEnvio}=require('../../database');


//devuelve todos las direcciones
router.get('/',async(req,res)=>{
    //res.send('funciona');
    console.log(req.params);
    const direccion=await DireccionEnvio.findAll();
    res.json(direccion);
});

// devuelve la direccion para un usuario
router.get('/:idCliente',async(req,res)=>{
    //res.send('funciona');
    console.log(req.params);
    const direccion=await DireccionEnvio.findOne(
        {where:{idCliente:req.params.idCliente}});
    res.json(direccion);
});

//crea una direccion
router.post('/',async(req,res)=>{
    const direccion=await DireccionEnvio.create(req.body);
    res.json(direccion)
});

//actualiza una direccion
router.put('/:idCliente',async(req,res)=>{
    try{
        await DireccionEnvio.update(req.body,{
            where:{idCliente:req.params.idCliente}
        });
        res.json({succes:'se ha modificado una direccion de envio'})
    }
    catch(err){
        res.json({error:'error al editar direccion de envio'})
    }
});

//borra una direccion
router.delete('/:idDireccionEnvio', async (req,res)=>{
    await DireccionEnvio.destroy({
        where:{idDireccionEnvio:req.params.idDireccionEnvio}
    });
    res.json({succes:'se ha borrado una direccion de envio'})
})


module.exports=router;