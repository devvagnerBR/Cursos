const sum = ( ...numbers ) => {
    return numbers.reduce( ( accum, num ) => accum + num, 0 )
}

console.log( sum( 50, 20, 89, 6, 22 ) );