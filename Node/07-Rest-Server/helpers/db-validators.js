const Role = require('../models/role');
const Usuario = require('../models/usuario');

const esRolValido = async(rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol){
        throw new Error(`El rol ${rol} no esta registrado en la BD`);
    }
}

//Verificar si el correo existe
const emailExiste = async(correo = '') =>{
    const existeEmail = await Usuario.findOne({ correo: correo});
    if(existeEmail){
        throw new Error(`El correo ${correo} ya esta registrado en la BD`);
    }
}

//Verificar si el usuario existe
const existeUsuarioporId = async(id) =>{
    const existeUsuario = await Usuario.findById(id);
    if(!existeUsuario){
        throw new Error(`El id ${id} no existe en la BD`);
    }
}


module.exports = {
    esRolValido,
    emailExiste,
    existeUsuarioporId
}