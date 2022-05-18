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
exports.deleteUsuario = exports.putUsuario = exports.registrarUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const { Op } = require("sequelize");
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield usuario_1.default.findAll({
        attributes: {
            exclude: ['password']
        }
    });
    // const usuarios = await Usuario.findAndCountAll();
    res.json({
        message: 'get Usuarios',
        usuarios
    });
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idempleado } = req.params;
    const usuario = yield usuario_1.default.findByPk(idempleado);
    usuario.password = '';
    if (usuario) {
        res.json(usuario);
    }
    else {
        return res.status(404).json({
            message: `Colaborador ${idempleado} no existe.`
        });
    }
});
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeEmail = yield usuario_1.default.findOne({
            where: {
                email: body.email
            }
        });
        if (existeEmail) {
            return res.status(400).json({
                message: `Ya existe un usuario con el email ${body.email}`
            });
        }
        const usuario = yield usuario_1.default.create(body);
        yield usuario.save();
        usuario.password = '';
        res.json(usuario);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Hable con el administrador'
        });
    }
});
exports.postUsuario = postUsuario;
const registrarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { idempleado, email, password, password_confirmation = '-1' } = req.body;
    try {
        const passwordsTrue = (password === password_confirmation) ? true : false;
        if (!passwordsTrue) {
            return res.json({ message: 'Las contraseñas deben coincidir ( password, password_confirmation )' });
        }
        const existeEmail = yield usuario_1.default.findOne({
            where: {
                email
            }
        });
        if (existeEmail) {
            return res.status(400).json({
                message: `Ya existe un usuario con el email ${email}`
            });
        }
        const usuario = yield usuario_1.default.findByPk(idempleado);
        if (!usuario) {
            return res.status(404).json({
                message: `No existe un colaborador con el numero: ${idempleado}`
            });
        }
        if (usuario['Registro'] == '1') {
            return res.status(404).json({
                message: `Colaborador: ${idempleado} ya se encuentra registrado con diferente correo: ${usuario['email']}`
            });
        }
        const Registro = '1';
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        const actualizarUsuario = { email, password: hash, Registro };
        yield usuario.update(actualizarUsuario);
        usuario.password = '';
        const message = 'Usuario registrado exitosamente';
        return res.json({ message, user: usuario });
        // await usuario.update( body );
        // const usuario = await Usuario.create( body);
        // await usuario.save();
        // res.json( usuario );
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Hable con el administrador'
        });
    }
});
exports.registrarUsuario = registrarUsuario;
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = (req.header('Authorization')).replace('Bearer ', '');
    const { idempleado } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
    // const usuario: any = await Usuario.findByPk( idempleado );
    // const { idempleado } = req.params;
    const { body } = req;
    const { password } = req.body;
    if (password) {
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        body.password = hash;
    }
    try {
        const usuario = yield usuario_1.default.findByPk(idempleado);
        if (!usuario) {
            return res.status(404).json({
                message: `No existe un usuario con el idempleado: ${idempleado}`
            });
        }
        // Validar Email
        yield usuario.update(body);
        usuario.password = '';
        res.json(usuario);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Hable con el administrador',
            error
        });
    }
});
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const { id } = req.params;
    const token = (req.header('Authorization')).replace('Bearer ', '');
    const { idempleado } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
    try {
        const usuario = yield usuario_1.default.findByPk(idempleado);
        if (!usuario) {
            return res.status(404).json({
                message: `No existe un empleado con el numero: ${idempleado}`
            });
        }
        // Eliminacion Fisica
        // await usuario.destroy();
        // Eliminacion Logica
        const query = { Activo: false, Registro: 0, email: '' };
        yield usuario.update(query);
        usuario.password = '';
        res.json(usuario);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Hable con el administrador.',
            error
        });
    }
    res.json({
        message: 'Delete Usuario',
        idempleado
    });
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.js.map