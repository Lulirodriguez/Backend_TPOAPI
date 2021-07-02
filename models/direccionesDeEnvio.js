module.exports = (sequelize,type) => {
    return sequelize.define('direccionDeEnvio', {
        idDireccionEnvio: {
           type: type.INTEGER,
           primaryKey: true,
           autoIncrement: true,
       },
       idCliente: type.INTEGER,
       direccion1: type.STRING,
       direccion2: type.STRING,
       localidad: type.STRING,
       provincia: type.STRING,
       codigoPostal: type.INTEGER,
       pais: type.STRING, 
    });
}