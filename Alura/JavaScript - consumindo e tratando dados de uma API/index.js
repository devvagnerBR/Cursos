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
    let mensagemErro = document.getElementById( 'erro' )
    mensagemErro.innerHTML = ''
    try {
        const consultaCEP = await fetch( `https://viacep.com.br/ws/${cep}/json` )
        const consultaCEPJSON = await consultaCEP.json()
        if ( consultaCEPJSON.erro ) {
            throw Error( `CEP não encontrado!` )
        }
        const cidade = document.getElementById( 'cidade' )
        const logradouro = document.getElementById( 'endereco' )
        const estado = document.getElementById( 'estado' )
        const bairro = document.getElementById( 'bairro' )

        cidade.value = consultaCEPJSON.localidade
        logradouro.value = consultaCEPJSON.logradouro
        estado.value = consultaCEPJSON.uf
        bairro.value = consultaCEPJSON.bairro

        console.log( consultaCEPJSON );
        return consultaCEPJSON
    } catch ( erro ) {
        mensagemErro.innerHTML = `<p>CEP inválido, tente novamente! </p>`
        console.log( erro );
    }
}



var cep = document.getElementById( 'cep' )
cep.addEventListener( 'focusout', () => buscaEndereco( cep.value ) )

