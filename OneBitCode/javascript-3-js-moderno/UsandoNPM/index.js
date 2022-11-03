const lodash = require( "lodash" )
import axios from 'axios'

console.log( lodash.isArray( [] ) )
console.log( lodash.kebabCase( 'Wagner Luiz da Silva Guimarães' ) );


axios.get( 'www.google.com.br/user' ).then( ( res ) => console.log( 'true' ) )
    .catch( ( err ) => console.log( 'false' ) )