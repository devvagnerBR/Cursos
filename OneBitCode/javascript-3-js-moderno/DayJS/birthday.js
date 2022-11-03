const dayjs = require( 'dayjs' )

const birthday = ( date ) => {

    const birthday = dayjs( date ) // data recebida
    const today = dayjs() // hoje

    const ageInYears = today.diff( birthday, 'year' )
    const nextBirthday = birthday.add( ageInYears + 1, 'year' )
    const daysToNextBirthday = nextBirthday.diff( today, 'day' ) + 1 // para não ficar em 0 faltando 1 dia

    console.log( `Idade: ${ageInYears}` );
    console.log( `Próximo niver: ${nextBirthday.format( 'DD/MM/YYYY' )}` );
    console.log( `Dias até completar ${ageInYears} anos: ${daysToNextBirthday}` );

}

birthday( '1994-12-21' ) // idade: 27
