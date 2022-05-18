const fs = require('fs'); // FileSystem

const archivo = './files/invalid_tokens.json';

export const guardarDB = ( data: any ) => {

    fs.writeFileSync( archivo, JSON.stringify(data) )
}

export const leerDB = () => {

    if ( !fs.existsSync( archivo ) ) return null;

    const info = fs.readFileSync( archivo, { encoding: 'utf-8' } );
    const data = JSON.parse( info );
    
    return data;
}