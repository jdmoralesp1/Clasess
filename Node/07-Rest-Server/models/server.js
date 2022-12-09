const express = require('express');
const cors = require('cors');
const { dbConncection } = require('../database/config');



class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'

        // Conectar a BD
        this.conectarDB();

        //Middlewares
        this.middlewares();

        //Rutas de mi aplicación
        this.routes();
    }

    async conectarDB(){
        await dbConncection();
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use( express.json() );

        //use es la palabra clave para decir que uso middlewares
        //Directorio publico
        this.app.use( express.static('public'))
    }

    routes(){
        this.app.use( this.usuariosPath, require('../routes/usuarios') )
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor corriendo en puerto`, this.port)
        })
    }
}

module.exports = Server;