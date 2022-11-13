const consultaCEP = fetch( `https://viacep.com.br/ws/28890401/json` )
    .then( res => res.json() )
    .then( r => {
        if ( r.erro ) {
            throw Error( `Esse CEP não existe!` )
        } else {
            console.log( r );
        }
        console.log( r )
    } )
    .catch( err => console.log( err ) )

console.log( consultaCEP )