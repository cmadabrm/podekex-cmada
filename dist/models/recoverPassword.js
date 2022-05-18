"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const RecoverPassword = connection_1.default.define('RecoverPassword', {
    email: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        autoIncrement: false
    },
    token: { type: sequelize_1.DataTypes.STRING },
    created: { type: sequelize_1.DataTypes.STRING }
}, {
    tableName: 'SYS_Recover_Password',
    timestamps: false
});
exports.default = RecoverPassword;
//# sourceMappingURL=recoverPassword.js.map