const process = require( 'process' );

console.log( 'digite seu nome' );

process.stdout.on( 'data', ( keyboard ) => {
    process.stdout.write( `Texto do usuário: ${keyboard}` );
    process.exit();
} )

