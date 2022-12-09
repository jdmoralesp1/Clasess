/*setTimeout(()=>{
    console.log('Hola Mundo');
}, 1000);*/

const getUsuarioById = (id, callback) => {
    const usuario = {
        id, //es lo mismo que decir id: id
        nombre: 'Juan'
    }

    setTimeout(()=>{
        callback(usuario);
    },1500)
}

getUsuarioById(10, (usuario)=>{
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});