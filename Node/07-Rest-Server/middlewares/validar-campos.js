const { validationResult } = require('express-validator');

const validarCampos = ( req, res, next ) => {
    // Valida los errores que revisa el middleware en routes/usuarios.js
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors);
    }

    //el next es parte de los middlewares y le indica que si llego hasta ahi, entonces continue
    next();
}

module.exports = {
    validarCampos
}