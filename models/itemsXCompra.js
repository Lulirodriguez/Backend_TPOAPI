
module.exports=(sequelize,type)=> {
    return sequelize.define('itemXCompra',{
        id:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        idCompra: type.INTEGER,
        itemId:  type.INTEGER,
        nombre: type.STRING,
        descripcion:  type.STRING,  
        idCategoria: type.STRING,
        imagen: type.STRING,
        precioU: type.INTEGER,
        cantidad: type.INTEGER
    });
}


        