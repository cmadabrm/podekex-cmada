"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
// Controladores
const auth_1 = require("../controllers/auth");
const validar_campos_1 = require("../middlewares/validar-campos");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const usuarios_1 = require("../controllers/usuarios");
// const { login  } = require('../controllers/auth');
// const { validarCampos } = require('../middlewares/validar-campos');
const router = (0, express_1.Router)();
router.post('/register', [
    (0, express_validator_1.check)('idempleado', 'Numero de empleado obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('email', 'email es obligatorio').isEmail(),
    (0, express_validator_1.check)('password', 'La contraseña es obligatoria').not().isEmpty(),
    (0, express_validator_1.check)('password_confirmation', 'Campo password_confirmation es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('curp', 'Campo curp es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('rfc', 'Campo rfc es obligatorio').not().isEmpty(),
    validar_campos_1.validarCampos
], usuarios_1.registrarUsuario);
router.put('/user-update', [
    validar_jwt_1.validarJWT
], usuarios_1.putUsuario);
router.delete('/user-delete', [
    validar_jwt_1.validarJWT
], usuarios_1.deleteUsuario);
router.get('/user/:idempleado', [
    validar_jwt_1.validarJWT
], usuarios_1.getUsuario);
router.post('/login', [
    (0, express_validator_1.check)('password', 'La contraseña es obligatoria').not().isEmpty(),
    validar_campos_1.validarCampos
], auth_1.login);
router.post('/logout', [
    validar_jwt_1.validarJWT
], auth_1.logout);
router.get('/user-profile', [
    validar_jwt_1.validarJWT
], auth_1.userProfile);
router.post('/reset-password-request', [
    (0, express_validator_1.check)('email', 'campo email es requerido').isEmail(),
    validar_campos_1.validarCampos
], auth_1.sendPasswordResetEmail);
router.post('/change-password', [
    (0, express_validator_1.check)('email', 'campo email es requerido').isEmail(),
    (0, express_validator_1.check)('token', 'Campo token obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('password', 'La contraseña es obligatoria').not().isEmpty(),
    (0, express_validator_1.check)('password_confirmation', 'Campo password_confirmation es obligatorio').not().isEmpty(),
    validar_campos_1.validarCampos
], auth_1.updatePassword);
router.get('/allUsers', usuarios_1.getUsuarios);
exports.default = router;
//# sourceMappingURL=auth.js.map