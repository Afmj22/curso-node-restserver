const Role = require('../models/role');
const Usuario = require('../models/usuario');


const esRolValido = async(rol = '') => {
    const existRole = await Role.findOne({ rol });
    if (!existRole) {
        throw new Error(`El rol ${ rol } no esta registrado en la BD`);
    }
}

const emailExiste = async(correo = '') => {
    const emailExist = await Usuario.findOne({ correo });
    if (emailExist) {
        throw new Error(`El correo: ${correo} ya esta registrado.`);
    }
}

const existeUsuarioPorId = async(id) => {
    const userExist = await Usuario.findById(id);
    if (!userExist) {
        throw new Error(`El id no existe ${id}.`);
    }
}

module.exports = {
    esRolValido,
    emailExiste,
    existeUsuarioPorId
}