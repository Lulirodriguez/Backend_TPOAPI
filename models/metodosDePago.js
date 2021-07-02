module.exports = (sequelize,type) => {
    return sequelize.define('metodoDePago', {
        idMetodoPago: {
           type: type.INTEGER,
           primaryKey: true,
           autoIncrement: true,
       },
       idCliente: type.INTEGER,
       nombre:  type.STRING, 
       numero: type.STRING,
       codigo: type.INTEGER,
       vencimiento: type.STRING
    });
}