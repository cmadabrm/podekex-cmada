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
exports.validarJWT = void 0;
const express_1 = require("express");
const usuario_1 = __importDefault(require("../models/usuario"));
const crear_archivo_1 = require("../helpers/crear-archivo");
const jwt = require('jsonwebtoken');
const validarJWT = (req, res = express_1.response, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const header = (_a = (req.header('Authorization'))) !== null && _a !== void 0 ? _a : null;
    let token = null;
    if (header != null) {
        token = header.replace('Bearer ', '');
    }
    // if( bearerToken.includes('bearer') ){
    //     token = bearerToken[1];
    // }
    let tokens = [];
    const tokensSaved = (0, crear_archivo_1.leerDB)();
    if (tokensSaved) {
        tokens = tokensSaved;
        const existeToken = tokens.find(t => t.token == token);
        if (existeToken) {
            return res.status(401).json({
                message: 'Token no valido'
            });
        }
    }
    if (!token) {
        return res.status(401).json({
            message: 'No hay token en la petición'
        });
    }
    try {
        const { idempleado } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        // leer usuario que corresponde al uid
        // req.usuarioAutenticado = await Usuario.findOne({ _id: uid });
        const query = {};
        const usuario = yield usuario_1.default.findByPk(idempleado);
        if (!usuario) {
            return res.status(401).json({
                message: 'Token no valido - usuario no existe en db'
            });
        }
        // Validar si el usuario no ah sido borrado, verificar uid si esta en true
        // if( !usuario.estado){
        //     return res.status(401).json({
        //         message: 'Token no valido - usuario con estado false'
        //     });
        // }
        // req.usuario = usuario;
        next();
    }
    catch (error) {
        console.log(error);
        res.status(401).json({
            message: 'Token no valido'
        });
    }
});
exports.validarJWT = validarJWT;
//# sourceMappingURL=validar-jwt.js.map