import express from "express";
import db from "./config/dbConnect.js";
import livros from './models/Livro.js';
import routes from './routes/index.js';

// CONEXÃO COM O DB

db.on( "error", console.log.bind( console, "Erro de conexão" ) )
db.once( "open", () => {
    console.log( `Conexão com o banco realizada com sucesso!` );
} )


// CONEXÃO COM O EXPRESS
const app = express()
app.use( express.json() ) // recurso para interpretar os dados recebidos

routes( app )
// const livros = [

//     { id: 1, "titulo": "Senhor dos Aneis" },
//     { id: 2, "titulo": "O Hobbit" }

// ]

// GET
// app.get( '/', ( req, res ) => {
//     res.status( 200 ).send( 'Curso de Node' )
// } )

// GET
// app.get( '/livros', ( req, res ) => {
//     livros.find( ( err, livros ) => {
//         res.status( 200 ).json( livros )
//     } ) // já pega todos os livros

// } )

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


