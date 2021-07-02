module.exports = (sequelize, type) => {
    return sequelize.define('usuario', {
        id : {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: type.STRING,
        apellido: type.STRING,
        username: type.STRING,
        password: type.STRING(150),
        isAdmin: type.BOOLEAN,
    });
}