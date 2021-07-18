
module.exports=(sequelize,type)=> {
    return sequelize.define('itemXCompra',{
        id:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        idCompra: type.INTEGER,
        itemId:  type.INTEGER,
        cantidad: type.INTEGER
    });
}


        