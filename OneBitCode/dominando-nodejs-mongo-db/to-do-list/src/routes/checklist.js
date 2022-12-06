const express = require( 'express' )

const router = express.Router()

// rota GET
router.get( '/', ( req, res ) => {
    console.log( 'Olá' );
    res.send() // enviando a requisição
} )



//Rota POST 
router.post( '/', ( req, res ) => {
    console.log( req.body ); // imprime o body no terminal
    res.status( 200 ).json( req.body ) // retorna o status e o body para o usuário
} )


// Pegando task pela id
router.get( '/:id', ( req, res ) => {

    console.log( req.params.id );
    // pega a informação que veio no :id,
    // (0bs:  se fosse :product teria que ser
    //req.params.product)

    res.send( `ID: ${req.params.id}` ) // retornando o id digitado para o usuário

} )

// Requisição PUT
router.put( '/:id', ( req, res ) => {
    console.log( req.body );
    res.send( `PUT: ${req.params.id}` )
} )

// Requisição DELETE
router.delete( '/:id', ( req, res ) => {
    console.log( req.body );
    res.send( `DELETE: ${req.params.id}` )
} )


module.exports = router // exportando as rotas