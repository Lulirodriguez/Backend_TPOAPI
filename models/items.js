module.exports=(sequelize,type)=> {
    return sequelize.define('item',{
        itemId:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nombre: type.STRING,
        descripcion:  type.STRING,  
        idCategoria: type.STRING,
        imagen: type.STRING,
        precioU: type.INTEGER
    });
}