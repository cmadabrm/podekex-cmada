"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Cuenta = connection_1.default.define('cuentas', {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_cliente: { type: sequelize_1.DataTypes.STRING },
    numero_cuenta: { type: sequelize_1.DataTypes.STRING },
    created_at: { type: sequelize_1.DataTypes.STRING },
    updated_at: { type: sequelize_1.DataTypes.STRING },
}, {
    // updatedAt: 'updated_at',
    // createdAt: 'created_at',
    timestamps: false,
    tableName: 'cuentas',
});
exports.default = Cuenta;
//# sourceMappingURL=cuentas.js.map