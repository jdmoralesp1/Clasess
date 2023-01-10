const {response} = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');
const { generarJWT } = require('../helpers/generar-jwt');


const login = async(req, res = response) => {

    const {correo, password} = req.body;

    try {

        // Verificar si el email existe
        const usuario = await Usuario.findOne({correo});
        if(!usuario){
            return res.status(404).json({
                msg: 'Usuario / Password no son correctos - correo'
            })
        }

        // Verificar si el user esta activo
        if(!usuario.estado){
            return res.status(404).json({
                msg: 'Usuario / Password no son correctos - estado: false'
            })
        }

        // Verificar el password
        const validPassword = bcryptjs.compareSync(password, usuario.password);
        if(!validPassword){
            return res.status(404).json({
                msg: 'Usuario / Password no son correctos - password'
            })
        }

        // Generar el JWT
        const token = await generarJWT(usuario.id);

        res.json({
            usuario,
            token
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }

};


const googleSignIn = async(req, res = response) => {
    const {id_token} = req.body;

    res.json({
        msg: 'Todo bien',
        id_token
    })
}


module.exports = {
    login,
    googleSignIn
}