'use stric';

const qy = require('../db')
const conexion = require('../db')

module.exports = {

    ingresarUnUsuario: async (persona) => {
        const query = 'SELECT * FROM persona WHERE email=?'
        const result = await qy(query, [persona.email])

        return result
    },

    mostrarListaUsuario: async () => {
        const query = 'SELECT * FROM persona'
        const listaPersonas = await qy(query, [req.params])

        return listaPersonas
    },

    mostrarUnUsuario: async (id) => {
        const query = 'SELECT * FROM persona WHERE id = ?';
        const usuario = await qy(query, [req.params.id]);

        return usuario[0]
    },

    modificarUsuario: async (nombre, apellido, alias) => {
        const query = 'UPDATE persona SET nombre = ?, apellido = ?, alias = ? WHERE id=?'
        const usuarioModificado = await qy(query, [nombre, apellido, alias])

        return usuarioModificado.affectedRows
    },

    borrarUsuario: async (id) => {
        const query = 'SELECT * FROM persona WHERE id = ?';
        const borrado = await qy(query, [id])

        return borrado.affectedRows
    }


}






