
module.exports=(sequelize,type)=> {
    return sequelize.define('compra',{
        idCompra:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        idCliente:type.INTEGER,
        itemId:  type.INTEGER,
        cantidad: type.INTEGER
    });
}


