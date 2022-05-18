const bcrypt = require('bcrypt');
const saltRounds = 10;
import { response } from "express";
import { generarJWT  } from "../helpers/generar-jwt";
import { enviarTokenEmail } from "../mails/sendPasswordRequestEmail";
const jwt = require('jsonwebtoken');

// const { generarJWT } = require('../helpers/generar-jwt');

// Importar Modelo
import Usuario from '../models/usuario';
import RecoverPassword from '../models/recoverPassword';
import { guardarDB, leerDB } from '../helpers/crear-archivo';

export const login = async( req:any, res = response ) =>{

    const { idempleado = null, password, email } = req.body;

    try {

        // Verificar si el email existe
        let usuario:any = null;
        if( idempleado != null ){
            usuario = await Usuario.findOne({ where: { IdEmpleado: idempleado } });
        } else {
            usuario = await Usuario.findOne({ where: { email } });
        }

        if( !usuario ){
            return res.status(400).json({
                error: 400,
                message: 'Usuario no registrado'
            });
        }

        // Verificar si el usuario esta activo
        // if( !usuario.Activo ) {
        //     return res.status(400).json({
        //         msg: 'Usuario / Password no son correcto -- estado: false',
        //         usuario
        //     });
        // }

        // Verificar la contraseña
        // const validPassword = bcryptjs.compareSync( password, usuario.password );
        const user_passwordHash = (usuario.password).trim();
        const validPassword = await bcrypt.compare(password, user_passwordHash);

        if ( !validPassword ) {
            return res.status(400).json({
                error: 400,
                message: 'Usuario / Password no son correcto -- password',
            });
        }

        // Generar el JWT
        const access_token = await generarJWT( usuario.IdEmpleado );
        usuario.password = '';
        res.json({
            access_token,
            token_type: 'bearer',
            user: usuario,
        })
        
    } catch (error) {
        return res.status(500).json({
            message: 'Hable con el administrador',
            error
        });
    }

}

export const logout = async( req:any, res = response ) => {

    const token = (req.header('Authorization')!).replace('Bearer ', '');
    const message = `Usuario cerro sesion exitosamente.`;

    let tokens: any[] = [];
    const tokensSaved: any[] = leerDB();
    if( tokensSaved ){
        tokens = tokensSaved;
        const existeToken = tokens.find( t => t.token == token );
        if( existeToken ){
            return res.json( message );
        }
    }
    tokens.unshift( { token } );
    guardarDB( tokens );
    const listado = leerDB();
    return res.json({
        message
    });
}

export const userProfile = async( req:any, res = response ) =>{

    const token = (req.header('Authorization')!).replace('Bearer ', '');
    const { idempleado } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );
    const usuario: any = await Usuario.findByPk( idempleado );
    usuario.password = '';
    return res.json( usuario );
}

export const sendPasswordResetEmail = async( req:any, res = response ) =>{
    
    const { email, url = null } = req.body;
    const usuario: any = await Usuario.findOne( { where: { email }} );
    if( !usuario ){
        return res.status(400).json({
            'message' : `La direccion email ${email} no se ha registrado.`
        });
    }

    const expiresIn = '1h';
    const token: any = await generarJWT( usuario.idempleado, expiresIn );

    // Guardar datos en tabla recover password
    const created = new Date().toISOString();
    const data: any = {
        email,token, created
    };

    await RecoverPassword.destroy({ where: { email } });
    await RecoverPassword.create( data );
    enviarTokenEmail( email, token, url );

    return res.json({
        message: `Favor de revisar su bandeja, le hemos enviado un link de restauración de contraseña a su correo: ${ email }`
    });
}

// Metodo para actualizar la contraseña
export const updatePassword = async( req:any, res = response ) => {

    const { email, token, password, password_confirmation } = req.body;
    const tokenValido = await existeToken( email, token );
    
    if( !tokenValido ){
        return res.status(400).json({ error: 'Tu correo o token es incorrecto'});
    }

    const salt = bcrypt.genSaltSync(saltRounds);
    const passwordHash = bcrypt.hashSync(password, salt);

    const updated_at = new Date().toISOString();

    const usuario: any = await Usuario.findOne( { where: { email }} );
    
    await usuario.update({ password: passwordHash, updated_at });
    await usuario.save();

    const deleteRecover = await RecoverPassword.destroy({ where: { email } });
    usuario.password = '';
    return res.json({
        message: 'Contraseña actualizada exitosamente',
        usuario,
        // deleteRecover
    });

}

// Verificar si el token es valido, se busca en la tabla recover_password si se encuentra o no.
const existeToken = async( email: string, token:string ) =>{

    const tokenExist = await RecoverPassword.findOne( {where: {
        email, token
    }} );

    return tokenExist;
    
}