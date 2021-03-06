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
const dotenv = require('dotenv');
dotenv.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cuentas_1 = __importDefault(require("../routes/cuentas"));
const pokemon_1 = __importDefault(require("../routes/pokemon"));
// import db from '../db/connection';
class Server {
    constructor() {
        this.apiPaths = {
            cuentas: '/',
            pokemon: '/pokedex',
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        this.paths = {
            auth: '/api/auth',
            usuarios: '/api/usuarios',
        };
        // Metodos Iniciales
        // this.dbConnection();
        this.middlewares();
        this.routes();
    }
    // Conectar Base de Datos
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // await db.authenticate();
                console.log('Database Online');
            }
            catch (error) {
                console.log(error);
                throw new Error('Error en la conexion a la db');
            }
        });
    }
    middlewares() {
        // Configurar el CORS
        this.app.use((0, cors_1.default)());
        // Lectura de Body
        this.app.use(express_1.default.json());
        // Carpeta Publica
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.cuentas, cuentas_1.default);
        this.app.use(this.apiPaths.pokemon, pokemon_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto!!: ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map