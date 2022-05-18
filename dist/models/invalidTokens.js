"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const invalidToken_1 = __importDefault(require("./invalidToken"));
class Tokens {
    constructor() {
        this._listado = {};
        this._listado = {};
    }
    get listadoArr() {
        const listado = [];
        // El Object.keys( this._listado ) regresa un arreglo con las keys de los objetos
        Object.keys(this._listado).forEach(key => {
            const token = this._listado[key];
            listado.push(token);
        });
        return listado;
    }
    borrarToken(token = '') {
        if (this._listado[token]) {
            delete this._listado[token];
        }
    }
    // cargarTokensFromArray( tokens = [] ) {
    //     tokens.forEach( token => {
    //         this._listado[token.token] = token;
    //     });
    // }
    crearToken(token = '') {
        const invalidToken = new invalidToken_1.default(token);
        this._listado[invalidToken.token] = invalidToken;
    }
}
exports.default = Tokens;
//# sourceMappingURL=invalidTokens.js.map