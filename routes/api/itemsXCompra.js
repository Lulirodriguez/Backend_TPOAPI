const router = require('express').Router();

const { ItemXCompra } = require('../../database');

//traer por idCompra (que ya esta asociada a idCliente) (1 compra - muchos itemsXCompra)

router.get('/:idCompra',async(req,res)=>{
    //res.send('funciona');
    console.log(req.params);
    const itemsXcompra=await ItemXCompra.findAll({
        where:{idCompra : req.params.idCompra}
    });
    res.json(itemsXcompra);
});

//crea un itemsXCompra
router.post('/',async(req,res)=>{
    const itemsXcompra=await ItemXCompra.create(req.body);
    res.json(itemsXcompra);
});


module.exports=router;