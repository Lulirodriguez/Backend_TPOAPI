const router=require('express').Router();

const {Transaccion}=require('../../database');


//devuelve todos las transacciones
router.get('/',async(req,res)=>{
    //res.send('funciona');
    console.log(req.params);
    const transaccion =await Transaccion.findAll();
    res.json(transaccion);
});

//crea una transaccion
router.post('/',async(req,res)=>{
    try{
        const transaccion=await Transaccion.create(req.body);
        res.json(transaccion);
    }catch(err){
        res.json({error: 'Error al crear entidad'});
    }
});

//actualiza una transaccion
router.put('/:idTransaccion',async(req,res)=>{
    try{
        await Transaccion.update(req.body,{
            where:{idTransaccion:req.params.idTransaccion}
        });
        res.json({succes:'se ha modificado una transaccion'})
    }
    catch(err){
        res.json({error:'error al editar una transaccion'})
    }
});

//borra una transaccion
router.delete('/:idTransaccion', async (req,res)=>{
    await Transaccion.destroy({
        where:{idTransaccion:req.params.idTransaccion}
    });
    res.json({succes:'se ha borrado una transaccion'})
})


module.exports=router;