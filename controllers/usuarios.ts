import { Request, response, Response } from "express"
import Usuario from '../models/usuario';
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const { Op } = require("sequelize");


export const getUsuarios = async ( req: Request, res: Response ) => {

    const usuarios = await Usuario.findAll({
        attributes: {
            exclude: ['password']
        }
    });
    // const usuarios = await Usuario.findAndCountAll();


    res.json({
        message: 'get Usuarios',
        usuarios
    });
}

export const getUsuario = async( req: Request, res: Response ) => {

    const { idempleado } = req.params;

    const usuario: any = await Usuario.findByPk( idempleado);
    usuario.password = '';

    if( usuario ){
        res.json( usuario );
    } else {
        return res.status(404).json({
            message: `Colaborador ${ idempleado } no existe.`
        })
    }
}

export const postUsuario = async( req: Request, res: Response ) => {

    const { body } = req;

    try {

        const existeEmail = await Usuario.findOne({
            where: {
                email: body.email
            }
        });

        if (existeEmail) {
            return res.status(400).json({
                message: `Ya existe un usuario con el email ${ body.email }`
            });
        }
        
        const usuario:any = await Usuario.create( body);
        await usuario.save();
        usuario.password = '';
        res.json( usuario );

    } catch (error) {
        console.log( error );
        
        res.status(500).json({
            message: 'Hable con el administrador'
        });
    }
}

export const registrarUsuario = async( req: Request, res: Response ) => {

    const { body } = req;
    const { idempleado, email, password, password_confirmation = '-1' } = req.body;

    try {

        const passwordsTrue = ( password === password_confirmation) ? true: false;
        if( !passwordsTrue ) {
            return res.json({ message: 'Las contraseñas deben coincidir ( password, password_confirmation )'})
        }

        const existeEmail = await Usuario.findOne({
            where: {
                email
            }
        });

        if (existeEmail) {
            return res.status(400).json({
                message: `Ya existe un usuario con el email ${ email }`
            });
        }

        const usuario: any = await Usuario.findByPk( idempleado );
        
        if( !usuario ){
            return res.status(404).json({
                message: `No existe un colaborador con el numero: ${ idempleado }`
            });
        }
        
        if( usuario['Registro'] == '1'){
            return res.status(404).json({
                message: `Colaborador: ${ idempleado } ya se encuentra registrado con diferente correo: ${ usuario['email'] }`
            });
        }

        const Registro = '1';
        
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        const actualizarUsuario = { email, password: hash, Registro }
        await usuario.update( actualizarUsuario );
        usuario.password = '';
        const message = 'Usuario registrado exitosamente';
        return res.json( { message, user: usuario } );
        
        // await usuario.update( body );
        // const usuario = await Usuario.create( body);
        // await usuario.save();

        // res.json( usuario );

    } catch (error) {
        console.log( error );
        
        res.status(500).json({
            message: 'Hable con el administrador'
        });
    }
}

export const putUsuario = async( req: Request, res: Response ) => {

    const token = (req.header('Authorization')!).replace('Bearer ', '');
    const { idempleado } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );
    // const usuario: any = await Usuario.findByPk( idempleado );

    // const { idempleado } = req.params;
    const { body } = req;
    const { password } = req.body;
    if( password ){
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        body.password = hash;
    }

    try {

        const usuario:any = await Usuario.findByPk( idempleado );
        
        if( !usuario ){
            return res.status(404).json({
                message: `No existe un usuario con el idempleado: ${ idempleado }`
            });
        }

        // Validar Email

        await usuario.update( body );
        usuario.password = '';
        res.json( usuario );
        
    } catch (error) {
        console.log( error );

        res.status(500).json({
            message: 'Hable con el administrador',
            error
        });
    }
}

export const deleteUsuario = async( req: Request, res: Response ) => {

    // const { id } = req.params;
    const token = (req.header('Authorization')!).replace('Bearer ', '');
    const { idempleado } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );

    try {
        
        const usuario:any = await Usuario.findByPk( idempleado );
        if( !usuario ){
            return res.status(404).json({
                message: `No existe un empleado con el numero: ${ idempleado }`
            });
        }

        // Eliminacion Fisica
        // await usuario.destroy();

        // Eliminacion Logica
        const query = { Activo: false, Registro: 0, email: '' };
        await usuario.update( query );
        usuario.password = '';
        res.json( usuario );

    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            message: 'Hable con el administrador.',
            error
        });
    }

    res.json({
        message: 'Delete Usuario',
        idempleado
    });
}