'use stric';

const qy = require('../db')

module.exports = {
    /*
    ----------
    |ADD USER|
    ----------
    */

    addUser: async (persona) => {
        const query = 'INSERT INTO persona (nombre,alias,apellido,email) VALUES(?,?,?,?)'
        const nuevoUsuario = await qy(query, [persona.nombre, persona.alias, persona.apellido, persona.email])

        return nuevoUsuario
    },
    validarUsuarioEmail: async (persona) => {
        const query = 'SELECT * FROM persona WHERE email = ?'
        const usuarioEnDataBase = await qy(query, [persona.email])
        return usuarioEnDataBase
    },

    /*
    ----------------
    |ROUTE /PERSONA|
    ----------------
    */
    viewUsers: async () => {
        const query = 'SELECT * FROM persona'
        const listaPersonas = await qy(query, [0])

        return listaPersonas
    },

    /*
    -------------------
    |ROUTE /PERSONA/ID|
    -------------------
    */

    selectUserById: async (id) => {
        const query = 'SELECT * FROM persona WHERE id = ?';
        const usuario = await qy(query, [id]);

        return usuario
    },
    /* 
-----------------------
|MODIFY /PERSONA/ID|
-----------------------
 */

    userModify: async (id) => {
        const query = 'UPDATE persona SET nombre = ?, apellido = ?, alias = ? WHERE id=?';
        const userMod = await qy(query, [id.nombe, id.apellido, id.alias])
        return userMod
    },
    //reject change email
    rejectEmail: async (id) => {
        const query = 'SELECT * FROM persona WHERE email=?'
        const reject = await qy(query, [id.email])
        return console.log("El email no se puede modificar")
    },
    /* 
    ___________________
    |DELETE /PERSONA/ID|
    --------------------
    */

    //Object selectUserById


    //User with books
    usuarioConLibro: async (id) => {
        const query = 'SELECT * FROM libro WHERE persona_id=?';
        const usuarioNoExiste = await qy(query, [req.params.id])

        return usuarioNoExiste
    },

    //User delete

    userDelete: async (id) => {
        const query = 'DELETE FROM persona WHERE id = ?'
        const userDelete = await qy(query, [id])

        return userDelete
    }


}






