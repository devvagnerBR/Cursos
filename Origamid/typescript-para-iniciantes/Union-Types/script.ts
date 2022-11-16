// UNION TYPES

let total: string | number = 200
total = '4000'

function isNumber( value: string | number ) {

    if ( typeof value === 'number' ) return true;
    else return false;

}
console.log( isNumber( 200 ) );

// DOM

const button = document.querySelector( 'button' )
if ( button ) button.click()

// OPTIONAL CHAINING

const button2 = document.querySelector( 'button' )
button2?.click() // so vai continuar a execução caso o button seja diferente de null ou undefined\

