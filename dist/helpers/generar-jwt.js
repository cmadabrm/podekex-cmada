"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generarJWT = void 0;
const jwt = require('jsonwebtoken');
const generarJWT = (idempleado = '', expiresIn = '4h') => {
    return new Promise((resolve, reject) => {
        const payload = { idempleado };
        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
            // expiresIn: '365d',
            expiresIn: expiresIn,
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el token');
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.generarJWT = generarJWT;
//# sourceMappingURL=generar-jwt.js.map