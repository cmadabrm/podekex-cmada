const dotenv = require('dotenv');
dotenv.config();
import express, { Application } from "express";
import cors from "cors";
import userRoutes from "../routes/usuario";
import authRoutes from "../routes/auth";
import cuentasRoutes from '../routes/cuentas';
import pokemonRoutes from '../routes/pokemon';
// import db from '../db/connection';

class Server {

    private app: Application;
    private port: String;
    private paths:any;
    
    private apiPaths = {
        cuentas: '/',
        pokemon: '/pokedex',
    }

    constructor () {
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.paths = {
            auth: '/api/auth',
            usuarios: '/api/usuarios',
        }

        // Metodos Iniciales
        // this.dbConnection();
        this.middlewares();
        this.routes();

    }

    // Conectar Base de Datos
    async dbConnection(){

        try {

            // await db.authenticate();
            console.log('Database Online');

        } catch (error ) {
            console.log( error );
            
            throw new Error( 'Error en la conexion a la db' );
        }
    }

    middlewares() {

        // Configurar el CORS
        this.app.use( cors() );

        // Lectura de Body
        this.app.use( express.json() );

        // Carpeta Publica
        this.app.use( express.static('public') );

    }

    routes() {

        this.app.use( this.apiPaths.cuentas, cuentasRoutes );
        this.app.use( this.apiPaths.pokemon, pokemonRoutes );
    }

    listen() {
        this.app.listen( this.port, ()=>{
            console.log(`Servidor corriendo en puerto!!: ${ this.port }`);
        })
    }

}

export default Server;