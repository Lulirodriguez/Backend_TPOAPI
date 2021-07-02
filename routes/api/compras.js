const router = require('express').Router();

const { Compra } = require('../../database');


//devuelve todas las compras
router.get('/',async(req,res)=>{
    //res.send('funciona');
    console.log(req.params);
    const compras=await Compra.findAll();
    res.json(compras);
});

//crea una compra
router.post('/',async(req,res)=>{
    const compra=await Compra.create(req.body);
    res.json(compra)
});

//actualiza una compra
router.put('/:idCompra',async(req,res)=>{
    try{
        await Compra.update(req.body,{
            where:{idCompra : req.params.idCompra}
        });
        res.json({success:'se ha modificado'})
    } catch(err){
        res.json({error : 'error al editar compra'});
    }
});

//borra una compra
router.delete('/:idCompra', async(req,res)=>{
    await Compra.destroy({
        where:{idCompra:req.params.idCompra}
    });
    res.json({success:'se ha borrado'})
})


module.exports=router;