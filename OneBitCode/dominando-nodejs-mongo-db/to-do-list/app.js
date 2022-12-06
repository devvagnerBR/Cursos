const express = require( 'express' )

const app = express()

// requisição, resposta, proximo middleware
const log = ( req, res, next ) => {

    // mostrar o que veio no body da chamada
    console.log( req.body );

    console.log( `Date: ${Date.now()}` );
    
    // executa o proximo middleware
    next()

}

// para o app conseguir usar o log
app.use( log )

// requisição get
app.get( '/', ( req, res ) => {
    res.send( '<h1>Minha Lista de tarefas ❤️</h1>' )
} )

// para enviar informações tipo json
app.use( express.json() )


// requisição get
app.get( '/json', ( req, res ) => {
    console.log( ( req.body ) );
    res.json( { title: 'Tarefa X', done: true } )
} )

app.listen( 3000, () => {
    console.log( 'server is running at 3000' );
} )