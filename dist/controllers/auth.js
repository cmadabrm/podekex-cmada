"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePassword = exports.sendPasswordResetEmail = exports.userProfile = exports.logout = exports.login = void 0;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const express_1 = require("express");
const generar_jwt_1 = require("../helpers/generar-jwt");
const sendPasswordRequestEmail_1 = require("../mails/sendPasswordRequestEmail");
const jwt = require('jsonwebtoken');
// const { generarJWT } = require('../helpers/generar-jwt');
// Importar Modelo
const usuario_1 = __importDefault(require("../models/usuario"));
const recoverPassword_1 = __importDefault(require("../models/recoverPassword"));
const crear_archivo_1 = require("../helpers/crear-archivo");
const login = (req, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    const { idempleado = null, password, email } = req.body;
    try {
        // Verificar si el email existe
        let usuario = null;
        if (idempleado != null) {
            usuario = yield usuario_1.default.findOne({ where: { IdEmpleado: idempleado } });
        }
        else {
            usuario = yield usuario_1.default.findOne({ where: { email } });
        }
        if (!usuario) {
            return res.status(400).json({
                error: 400,
                message: 'Usuario no registrado'
            });
        }
        // Verificar si el usuario esta activo
        // if( !usuario.Activo ) {
        //     return res.status(400).json({
        //         msg: 'Usuario / Password no son correcto -- estado: false',
        //         usuario
        //     });
        // }
        // Verificar la contraseña
        // const validPassword = bcryptjs.compareSync( password, usuario.password );
        const user_passwordHash = (usuario.password).trim();
        const validPassword = yield bcrypt.compare(password, user_passwordHash);
        if (!validPassword) {
            return res.status(400).json({
                error: 400,
                message: 'Usuario / Password no son correcto -- password',
            });
        }
        // Generar el JWT
        const access_token = yield (0, generar_jwt_1.generarJWT)(usuario.IdEmpleado);
        usuario.password = '';
        res.json({
            access_token,
            token_type: 'bearer',
            user: usuario,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: 'Hable con el administrador',
            error
        });
    }
});
exports.login = login;
const logout = (req, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    const token = (req.header('Authorization')).replace('Bearer ', '');
    const message = `Usuario cerro sesion exitosamente.`;
    let tokens = [];
    const tokensSaved = (0, crear_archivo_1.leerDB)();
    if (tokensSaved) {
        tokens = tokensSaved;
        const existeToken = tokens.find(t => t.token == token);
        if (existeToken) {
            return res.json(message);
        }
    }
    tokens.unshift({ token });
    (0, crear_archivo_1.guardarDB)(tokens);
    const listado = (0, crear_archivo_1.leerDB)();
    return res.json({
        message
    });
});
exports.logout = logout;
const userProfile = (req, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    const token = (req.header('Authorization')).replace('Bearer ', '');
    const { idempleado } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
    const usuario = yield usuario_1.default.findByPk(idempleado);
    usuario.password = '';
    return res.json(usuario);
});
exports.userProfile = userProfile;
const sendPasswordResetEmail = (req, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, url = null } = req.body;
    const usuario = yield usuario_1.default.findOne({ where: { email } });
    if (!usuario) {
        return res.status(400).json({
            'message': `La direccion email ${email} no se ha registrado.`
        });
    }
    const expiresIn = '1h';
    const token = yield (0, generar_jwt_1.generarJWT)(usuario.idempleado, expiresIn);
    // Guardar datos en tabla recover password
    const created = new Date().toISOString();
    const data = {
        email, token, created
    };
    yield recoverPassword_1.default.destroy({ where: { email } });
    yield recoverPassword_1.default.create(data);
    (0, sendPasswordRequestEmail_1.enviarTokenEmail)(email, token, url);
    return res.json({
        message: `Favor de revisar su bandeja, le hemos enviado un link de restauración de contraseña a su correo: ${email}`
    });
});
exports.sendPasswordResetEmail = sendPasswordResetEmail;
// Metodo para actualizar la contraseña
const updatePassword = (req, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, token, password, password_confirmation } = req.body;
    const tokenValido = yield existeToken(email, token);
    if (!tokenValido) {
        return res.status(400).json({ error: 'Tu correo o token es incorrecto' });
    }
    const salt = bcrypt.genSaltSync(saltRounds);
    const passwordHash = bcrypt.hashSync(password, salt);
    const updated_at = new Date().toISOString();
    const usuario = yield usuario_1.default.findOne({ where: { email } });
    yield usuario.update({ password: passwordHash, updated_at });
    yield usuario.save();
    const deleteRecover = yield recoverPassword_1.default.destroy({ where: { email } });
    usuario.password = '';
    return res.json({
        message: 'Contraseña actualizada exitosamente',
        usuario,
        // deleteRecover
    });
});
exports.updatePassword = updatePassword;
// Verificar si el token es valido, se busca en la tabla recover_password si se encuentra o no.
const existeToken = (email, token) => __awaiter(void 0, void 0, void 0, function* () {
    const tokenExist = yield recoverPassword_1.default.findOne({ where: {
            email, token
        } });
    return tokenExist;
});
//# sourceMappingURL=auth.js.map