// Minha Resolução

function toNumber( value: number | string ) {

    if ( typeof value === 'number' ) console.log( typeof value, value );
    else if ( typeof value === 'string' ) console.log( typeof value, Number( value ) );
    else console.log( `Value deve ser um número ou uma string` );

}
toNumber( '21' )

// Origamid Resolução

function toNumber2( value: number | string ) {
    if ( typeof value === 'number' ) return value
    else if ( typeof value === 'string' ) return Number( value )
    else throw 'Value deve ser um number | string'
}

console.log( toNumber2( 200 ) );
