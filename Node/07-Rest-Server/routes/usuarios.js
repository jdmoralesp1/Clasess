const { Router } = require('express');
const { check } = require('express-validator');
const { esRolValido, 
        emailExiste, 
        existeUsuarioporId } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');
const { 
    usuariosGet ,
    usuariosPut,
    usuariosPatch,
    usuariosPost,
    usuariosDelete,

} = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet);

router.put('/:id', [
    check('id', 'No es un Id valido').isMongoId(),
    check('id').custom( existeUsuarioporId ),
    check('rol').custom( esRolValido ),
    validarCampos
], usuariosPut);

//primero se envia la ruta, luego un middleware que revisa todo antes de ejecutar el metodo y luego si el controlador del metodo
router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe ser más de 6 letras').isLength({ min:6 }),
    check('correo', 'El correo no es valido').isEmail(),
    check('correo').custom( emailExiste ),
    // check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol').custom( esRolValido ),
    validarCampos
], usuariosPost);

router.delete('/:id', [
    check('id', 'No es un Id valido').isMongoId(),
    check('id').custom( existeUsuarioporId ),
    validarCampos
], usuariosDelete);

router.patch('/', usuariosPatch);












module.exports = router;