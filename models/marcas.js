module.exports = (sequelize,type) => {
    return sequelize.define('marca', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        descripcion: type.STRING,
    }) 
}

// Quiero armar los endpoints: 

// GET /api/marcas : devuelve las marca (leer informacion)
// POST /api/marcas : agrega una marca (agregar nueva informacion)
// PUT /api/marcas/4 : edita la marca 4 (editar informacion existente)
// DELETE /api/marcas/4 : elimina la marca 4 (eliminar informacion existente)

