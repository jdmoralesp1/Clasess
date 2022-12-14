const { Router } = require('express');
const { check } = require('express-validator');

/* const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { esAdminRole, tieneRole } = require('../middlewares/validar-roles'); */
const {validarCampos, 
        validarJWT, 
        esAdminRole, 
        tieneRole} = require('../middlewares');

const { esRolValido, 
        emailExiste, 
        existeUsuarioporId } = require('../helpers/db-validators');

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
    validarJWT,
    // esAdminRole,
    tieneRole('ADMIN_ROLE', 'VENTAS_ROLE', 'USER_ROLE', 'OTRO_ROLE'),
    check('id', 'No es un Id valido').isMongoId(),
    check('id').custom( existeUsuarioporId ),
    validarCampos
], usuariosDelete);

router.patch('/', usuariosPatch);


module.exports = router;