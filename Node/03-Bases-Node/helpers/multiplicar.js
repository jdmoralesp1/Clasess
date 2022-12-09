const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar=false, hasta=10) => {
    

    try {
        let salida, consola ='';
    
        for(let i=1;i<=hasta;i++){
            salida += `${base} x ${i} = ${base*i}\n`;
            consola += `${base} ${ 'x'.red } ${i} ${ '='.green } ${base*i}\n`;
        }

        if(listar){
            console.log(colors.yellow("========================"));
            console.log(`      Tabla del:`,colors.blue(base));
            console.log(colors.yellow("========================"));
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

        //return `tabla-${base}.txt creado`;
        return `el archivo tabla-${base}.txt fue`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo //crearArchivo: crearArchivo es igual a esto pero no redundante
}