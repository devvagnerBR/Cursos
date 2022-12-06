import express from "express";

const app = express()
app.use( express.json() ) // recurso para interpretar os dados recebidos

const livros = [

    { id: 1, "titulo": "Senhor dos Aneis" },
    { id: 2, "titulo": "O Hobbit" }

]

// GET
app.get( '/', ( req, res ) => {
    res.status( 200 ).send( 'Curso de Node' )
} )

// GET
app.get( '/livros', ( req, res ) => {
    res.status( 200 ).json( livros )
} )

// POST
app.post( '/livros', ( req, res ) => {

    livros.push( req.body )
    res.status( 201 ).send( 'Livro foi cadastrado com sucesso' )

} )

// GET/:id

app.get( '/livros/:id', ( req, res ) => {

    const searchBook = ( id ) => {
        return livros.findIndex( book => book.id == id )
    };

    let index = searchBook( req.params.id );
    res.json( livros[index] )

} )

// PUT

app.put( '/livros/:id', ( req, res ) => {

    const searchBook = ( id ) => {
        return livros.findIndex( book => book.id == id )
    };

    let index = searchBook( req.params.id );
    livros[index].titulo = req.body.titulo;
    res.status( 200 ).json( livros )


} )


// DELETE

app.delete( '/livros/:id', ( req, res ) => {

    const searchBook = ( id ) => {
        return livros.findIndex( book => book.id == id )
    };
    let { id } = req.params;
    let index = searchBook( id )
    
    livros.splice( index, 1 )
    res.send( `Livro ${id} removido com sucesso!` )

} )
export default app


