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


async function buscaEndereco() {
    const consultaCEP = await fetch( `https://viacep.com.br/ws/28890401/json` )
    const consultaCEPJSON = await consultaCEP.json()
    console.log( consultaCEPJSON );
}


buscaEndereco()