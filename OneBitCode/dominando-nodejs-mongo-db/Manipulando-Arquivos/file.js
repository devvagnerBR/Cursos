const fs = require( 'fs' )


//appendFile coloca um conteúdo depois do anterior
fs.appendFile( 'test.txt', 'Olá NodeJS', err => {
    console.log( err );
} )

//writeFile = sobrescreve o arquivo inteiro
fs.writeFile( 'test.txt', 'Olá NodeJS', err => {
    console.log( err );
} )


//rename = renomeia o arquivo
fs.rename( 'test.scss', 'test.txt', err => {
    console.log( err );
} )

//unlink = responsável por remover um arquivo
fs.unlink( 'test.txt', err => console.log( err ) )

// __dirname = informa qual a pasta atual
console.log( __dirname );