const mongoose = require('mongoose');

const dbConncection = async() => {
    try {
        await mongoose.connect( process.env.MONGODB_ATLAS, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useCreateIndex: true,
            //useFindAndModify: false
        });

        console.log('Base de Datos online');
    } catch (error) {
        console.log(error);
        // throw error;
        throw new Error('Error a la hora de iniciar la BD');
    }
}

module.exports = {
    dbConncection,
}