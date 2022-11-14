/* 

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
    .finally( mensagem => console.log( `Processamento concluído` ) )

console.log( consultaCEP )

*/

/*

async function buscaEndereco() {

    try {
        const consultaCEP = await fetch( `https://viacep.com.br/ws/01001250/json` )
        const consultaCEPJSON = await consultaCEP.json()
        if ( consultaCEPJSON.erro ) {
            throw Error( `CEP não encontrado!` )
        }
        console.log( consultaCEPJSON );
    } catch ( erro ) {
        console.log( erro );
    }
}


buscaEndereco()

*/

async function buscaEndereco( cep ) {

    try {
        const consultaCEP = await fetch( `https://viacep.com.br/ws/${cep}/json` )
        const consultaCEPJSON = await consultaCEP.json()
        if ( consultaCEPJSON.erro ) {
            throw Error( `CEP não encontrado!` )
        }
        console.log( consultaCEPJSON );
        return consultaCEPJSON
    } catch ( erro ) {
        console.log( erro );
    }
}



var cep = document.getElementById( 'cep' )
cep.addEventListener( 'focusout', () => buscaEndereco( cep.value ) )

