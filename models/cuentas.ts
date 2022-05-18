import { DataTypes, DATE } from "sequelize";
import db from '../db/connection';

const Cuenta = db.define('cuentas', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_cliente: { type: DataTypes.STRING },
    numero_cuenta: { type: DataTypes.STRING },
    created_at: { type: DataTypes.STRING },
    updated_at: { type: DataTypes.STRING },
},
{
    // updatedAt: 'updated_at',
    // createdAt: 'created_at',
    timestamps: false,
    tableName: 'cuentas',
});

export default Cuenta;