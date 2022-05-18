const jwt = require('jsonwebtoken');

export const generarJWT = ( idempleado = '', expiresIn = '4h' ) => {

    return new Promise( ( resolve, reject) => {

        const payload = { idempleado };

        jwt.sign( payload, process.env.SECRETORPRIVATEKEY, {
            // expiresIn: '365d',
            expiresIn: expiresIn,
        }, ( err: any, token:any ) => {
            
            if( err ) {
                console.log( err );
                reject( 'No se pudo generar el token' )
            } else {
                resolve( token )
            }
        });

    });

}