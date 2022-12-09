const { response } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');


const usuariosGet = async(req = request, res = response) => {
    //Desestructuro lo que quiero recibir por medio del query de la petición
    // const { q, nombre = 'No Name', apikey, page=1, limit } = req.query;
    const { limite = 5 , desde = 0} = req.query;
    const usuarios = await Usuario.find()
    .skip(Number(desde))
    .limit(Number(limite));

    res.json({
        usuarios
    })
}

const usuariosPut = async(req, res) => {
    //el id es la propiedad que saco al recibirla del archivo /routes/usuarios.js
    const { id } = req.params;
    const { _id, password, google, correo, ...resto } = req.body;

    // TODO validar conta la BD
    if (password){
        //Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);

    res.json({
        usuario
    })
}

const usuariosPost = async (req, res) => {
    //Recibo lo que llega del body cuando hacen un post
    const {nombre, correo, password, rol} = req.body;
    const usuario = new Usuario({nombre, correo, password, rol});

    //Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    //Guardar en BD
    await usuario.save();

    res.status(201).json({
        usuario
    })
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch API - controlador'
    })
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - controlador'
    })
}



module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}