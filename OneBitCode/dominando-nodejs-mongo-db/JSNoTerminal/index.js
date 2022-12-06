const moment = require( 'moment' )

const sayMyName = ( name ) => {

    console.log( name ); // Wagner Luiz 
    console.log( moment().format( 'HH:mm' ) ); // 21:58

}


sayMyName( 'Wagner Luiz' )