const http = require( 'http' );

const server = http.createServer( ( req, res ) => {
    console.log( req.method );
    console.log( req.url );
    res.statusCode = 200;
    res.end( '<h1>Servidor Rodando</h1>' )
} )


server.listen( 3000, () => {
    console.log( 'Server is running at 3000 door' );
} )