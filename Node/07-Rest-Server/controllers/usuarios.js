const { response } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');


const usuariosGet = async(req = request, res = response) => {
    //Desestructuro lo que quiero recibir por medio del query de la petición
    // const { q, nombre = 'No Name', apikey, page=1, limit } = req.query;
    const { limite = 5 , desde = 0} = req.query;
    const query = { estado: true };
    /*const usuarios = await Usuario.find( query )
        .skip(Number(desde))
        .limit(Number(limite));

    const total = await Usuario.countDocuments( query );*/

    // Dejo de usar la parte que esta comentada y las meto en esta promesa para que adentro ejecute
    // ambas consultas al tiempo y espere a que ambas acaben antes de continuar
    // con esto se logra optimizar el tiempo de respuesta
    // el Promise.all me crea un arreglo, desestructuro el mismo y total corresponde a la primer promes
    // del arreglo y usuarios a la segunda
    const [ total, usuarios ] = await Promise.all([
        Usuario.countDocuments( query ),
        Usuario.find( query )
            .skip(Number(desde))
            .limit(Number(limite))
    ])

    res.json({
        total,
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

const usuariosDelete = async (req, res) => {

    const {id} = req.params;

    //Fisicamente lo borramos
    //const usuario = await Usuario.findByIdAndDelete(id);

    const usuario = await Usuario.findByIdAndUpdate(id, {estado: false});
    //const usuarioAutenticado = req.usuario;

    res.json({
        usuario,
    //    usuarioAutenticado
    })
}



module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}