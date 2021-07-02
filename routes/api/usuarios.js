const router = require('express').Router();
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');
const moment = require('moment');
const jwt = require('jwt-simple');

// check: funciona como middleware => lo incrusto en medio del post antes de pasar a los datos

const { User } = require('../../database');

// Registrarse como nuevo usuario

router.post('/register', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('apellido', 'El apellido es obligatorio').not().isEmpty(),
    check('username', 'El usuario es obligatorio').not().isEmpty(), // comprueba si el username esta vacio antes de ir a guardarlo
    // check('username', 'El email es inválido').isEmail(), // cmoprueba que tenga formato de email
    check('password', 'El passsword es obligatorio').not().isEmpty(),
], async (req, res) => {

    const errors = validationResult(req); // valido si alguno de los checks fallo
    if(!errors.isEmpty()){ // si hubieron fallas 
        return res.status(422).json({ errors : errors.array()}); // status 422: no se ha podido crear entidad, devuelvo como json un array con todos los errores
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10); // Encripta la contraseña: 10 es el numero de veces que se aplica el algoritmo de encriptacion
    if(!req.body.isAdmin){
        req.body.isAdmin = false;
    }
    const user = await User.create(req.body);
    res.json(user);
});

// usamos bcrypt para encriptar la contraseña 

// Crear Token para autenticarnos dentro de nuestra API

router.post('/login', async (req,res) => {
    const user = await User.findOne({
        where: { username : req.body.username }
    });
    if (user){
        const passwordMatch = bcrypt.compareSync(req.body.password, user.password); //recibe pass sin encriptar y la compara con la encriptada
        if(passwordMatch){
            res.json({success: createToken(user)}); // ACA VIENE EL TOKEN =< ahora para buscar marcas y demas, tengo que tener ese token (uso un middleware)
        }else{
            res.json({error : 'Error: usuario y/o contraseña inválidos'});
        }
    }
    else{
        res.json({error : 'Error: usuario y/o contraseña inválidos'});
    }
});

const createToken = (user) => {
    const payload = {
        usuarioId : user.id,
        createdAt : moment().unix(), //fecha actual en formato unix (cantidad de segundos desde el 1/1/1970),
        expiredDate : moment().add(5, 'minutes').unix(),
    }
    return jwt.encode(payload, 'Frase secreta'); // codifica el payload con la clave secreta (decode hacelo opuesto)
}

//devuelve todos los usuarios
router.get('/',async(req,res)=>{
    //res.send('funciona');
    console.log(req.params);
    const user=await User.findAll();
    res.json(user);
});

// actualizar informacion de perfil
router.put('/:id',async(req,res)=>{
    try{
        const user = await User.findOne({
            where:{id:req.params.id}
        });
        req.body.password = user.password;
        req.body.isAdmin = user.isAdmin;
        await User.update(req.body,{
            where:{id:req.params.id}
        });
        res.json({succes:'se ha modificado la informacion de usuario'})
    }
    catch(err){
        res.json({error:'error al modificar informacion de usuario'})
    }
});

// elimia un perfil 
router.delete('/:id', async (req,res)=>{
    await User.destroy({
        where:{id:req.params.id}
    });
    res.json({succes:'se ha borrado un usuario con exito'});
})


module.exports = router;