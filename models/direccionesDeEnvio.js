module.exports = (sequelize,type) => {
    return sequelize.define('direccionDeEnvio', {
       idDireccionDeEnvio: {
           type: type.INTEGER,
           primaryKey: true,
           autoIncrement: true,
       },
       direccion1: type.STRING,
       direccion2: type.STRING,
       localidad: type.STRING,
       provincia: type.STRING,
       codigoPostal: type.INTEGER,
       pais: type.STRING, 
    });
}