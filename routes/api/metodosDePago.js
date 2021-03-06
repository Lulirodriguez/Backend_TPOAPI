const router=require('express').Router();

const {MetodoPago}=require('../../database');


//devuelve todos los metodos de pago
router.get('/',async(req,res)=>{
    //res.send('funciona');
    console.log(req.params);
    const metodoPago=await MetodoPago.findAll();
    res.json(metodoPago);
});

// devuelve el metodo de pago para un usuario
router.get('/:idCliente',async(req,res)=>{
    //res.send('funciona');
    console.log(req.params);
    const metodoPago=await MetodoPago.findOne(
        {where:{idCliente:req.params.idCliente}});
    res.json(metodoPago);
});

//crea un metodo de pago
router.post('/',async(req,res)=>{
    try{
        const metodoPago = await MetodoPago.create(req.body);
        res.json(metodoPago);
    }catch(err){
        res.json({error: 'Error al crear metodo de pago'});
    }
});

//actualiza un metodo de pago
router.put('/:idCliente',async(req,res)=>{
    try{
        await MetodoPago.update(req.body,{
            where:{idCliente:req.params.idCliente}
        });
        res.json({succes:'se ha modificado un metodo de pago'})
    }
    catch(err){
        res.json({error:'error al editar metodo de pago'})
    }
});

//borra un metodo de pago
router.delete('/:idMetodoPago', async (req,res)=>{
    await MetodoPago.destroy({
        where:{idMetodoPago:req.params.idMetodoPago}
    });
    res.json({succes:'se ha borrado un metodo de pago'});
})


module.exports=router;