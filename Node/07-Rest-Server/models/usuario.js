
const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    img: {
        type: String
    },
    rol: {
        type: String,
        required: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE', 'VENTAS_ROLE']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },
    
});

//Hago un overwrite en el metodo toJson, desestructuro "__v" y "password", y uso "...usuario", para decir que el resto va a ser el resto de
// datos de la respuesta de json, y ese usuario es el que retorno para omitir en la rta json el password y el __v
//saco el _id para convertirlo en uid y que asi salga en todas las peticiones donde se muestre el id
UsuarioSchema.methods.toJSON = function(){
    const {__v, password, _id, ...usuario} = this.toObject();
    usuario.uid = _id;
    return usuario;
}



module.exports = model('Usuario', UsuarioSchema);