"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leerDB = exports.guardarDB = void 0;
const fs = require('fs'); // FileSystem
const archivo = './files/invalid_tokens.json';
const guardarDB = (data) => {
    fs.writeFileSync(archivo, JSON.stringify(data));
};
exports.guardarDB = guardarDB;
const leerDB = () => {
    if (!fs.existsSync(archivo))
        return null;
    const info = fs.readFileSync(archivo, { encoding: 'utf-8' });
    const data = JSON.parse(info);
    return data;
};
exports.leerDB = leerDB;
//# sourceMappingURL=crear-archivo.js.map