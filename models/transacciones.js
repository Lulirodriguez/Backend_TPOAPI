module.exports=(sequelize,type)=> {
    return sequelize.define('transaccion',{
        idTransaccion:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        idCliente:type.INTEGER,
        idCompra:type.INTEGER,
        idDireccionEnvio:type.INTEGER,
        idMetodoPago:type.INTEGER,
    });
}
