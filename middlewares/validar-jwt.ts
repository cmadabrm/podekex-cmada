import { Request, response, Response } from "express"
import Usuario from '../models/usuario';
import { leerDB } from '../helpers/crear-archivo';
const jwt = require('jsonwebtoken');



export const validarJWT = async( req: Request, res = response, next:any)=>{

    const header = (req.header('Authorization')!) ?? null;    

    let token: string | null = null;

    if( header != null){
        token = header.replace('Bearer ', '');
    }
    // if( bearerToken.includes('bearer') ){
    //     token = bearerToken[1];
    // }

    let tokens: any[] = [];
    const tokensSaved: any[] = leerDB();
    if( tokensSaved ){
        tokens = tokensSaved;
        const existeToken = tokens.find( t => t.token == token );
        if(existeToken){
            return res.status(401).json({
                message: 'Token no valido'
            });
        }
    }

    if( !token ) {
        return res.status(401).json({
            message: 'No hay token en la petición'
        });
    }

    try {

        const { idempleado } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );
        
        // leer usuario que corresponde al uid
        // req.usuarioAutenticado = await Usuario.findOne({ _id: uid });
        const query = {};
        const usuario: any = await Usuario.findByPk( idempleado );
        
        if( !usuario ) {
            return res.status(401).json({
                message: 'Token no valido - usuario no existe en db'
            });
        }

        // Validar si el usuario no ah sido borrado, verificar uid si esta en true
        // if( !usuario.estado){
        //     return res.status(401).json({
        //         message: 'Token no valido - usuario con estado false'
        //     });
        // }
        
        // req.usuario = usuario;

        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            message: 'Token no valido'
        })
    }
    

}