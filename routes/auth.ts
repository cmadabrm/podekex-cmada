import { Router } from "express";
import { check }  from "express-validator";

// Controladores
import { login, userProfile, sendPasswordResetEmail, updatePassword, logout } from '../controllers/auth';
import { validarCampos } from '../middlewares/validar-campos';
import { validarJWT } from '../middlewares/validar-jwt';
import { registrarUsuario, putUsuario, deleteUsuario, getUsuario, getUsuarios } from '../controllers/usuarios';
// const { login  } = require('../controllers/auth');
// const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.post('/register', [
    check('idempleado', 'Numero de empleado obligatorio').not().isEmpty(),
    check('email', 'email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check('password_confirmation', 'Campo password_confirmation es obligatorio').not().isEmpty(),
    check('curp', 'Campo curp es obligatorio').not().isEmpty(),
    check('rfc', 'Campo rfc es obligatorio').not().isEmpty(),
    validarCampos
], registrarUsuario );

router.put('/user-update', [
    validarJWT
], putUsuario);

router.delete('/user-delete', [
    validarJWT
], deleteUsuario);

router.get('/user/:idempleado', [
    validarJWT
], getUsuario );

router.post('/login', [
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
] ,login );

router.post('/logout', [
    validarJWT
] , logout );

router.get('/user-profile', [
    validarJWT
] ,userProfile );

router.post('/reset-password-request', [
    check('email', 'campo email es requerido').isEmail(),
    validarCampos
] ,sendPasswordResetEmail );


router.post('/change-password', [
    check('email', 'campo email es requerido').isEmail(),
    check('token', 'Campo token obligatorio').not().isEmpty(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check('password_confirmation', 'Campo password_confirmation es obligatorio').not().isEmpty(),
    validarCampos
] ,updatePassword );

router.get('/allUsers', getUsuarios );

export default router;