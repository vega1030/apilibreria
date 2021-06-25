'use strict'

const personaModel = require('../model/personeModel')

module.exports = {

    addUser: async (persona) => {

        if (await personaModel.validarUsuarioEmail(persona).length > 1) {
            console.log('error')
        }
        persona.nombre = nombre
        persona.apellido = apellido
        persona.alias = alias
        persona.email = email
        const newUser = await personaModel.addUser(persona)

        return newUser

    },

    listUsers: async () => {
        if (await personaModel.viewUsers().length === 0) {
            return console.log('no hay usuarios')
        }
        const listUsers = await personaModel.viewUsers()

        return listUsers
    },

    userById: async (id) => {
        if (await personaModel.selectUserById(id).length === 0) {
            return console.log('el id no existe')
        }
        const userId = await personaModel.viewUsers(persona)

        return userId
    },

    modifyUser: async (id, email, nombre, apellido, alias) => {
        if (await personaModel.selectUserById(id).length === 0) {
            return console.log('el id no existe')
        }
        if (await personaModel.rejectEmail(email).length === 0) {
            return console.log('el email no se puede')
        }
        const userModified = await personaModel.userModified(id)

        return userModified
    },
    deleteUser: async (id) => {
        if (await personaModel.selectUserById(id).length === 0) {
            return console.log('el id no existe')
        }
        if (await personaModel.usuarioConLibro(id) != 0) {
            return console.log('el usuario tiene libros asociados')
        }
        const deleteUserId = await personaModel.userDelete(id)
        return console.log('el usuario fue modificado: ' + deleteUserId)
    }
}