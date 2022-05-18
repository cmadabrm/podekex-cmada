import { DataTypes } from "sequelize";
import db from '../db/connection';

const RecoverPassword = db.define('RecoverPassword', {
    email: { 
        type: DataTypes.STRING,
        primaryKey: true, 
        autoIncrement: false
    },
    token: { type: DataTypes.STRING },
    created: { type: DataTypes.STRING }
},
{
    tableName: 'SYS_Recover_Password',
    timestamps: false
});

export default RecoverPassword;