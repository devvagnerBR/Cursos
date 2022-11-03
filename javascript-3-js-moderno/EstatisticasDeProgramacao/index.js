// Média Simples
const MEDIA = ( ...numbers ) => {
    const sum = numbers.reduce( ( accum, num ) => accum + num, 0 )
    return sum / numbers.length
}
console.log( `Média Aritmética Simples: ${MEDIA( 50, 70, 60, 90 )}` ); // 67.5


//Média Ponderada
const MEDIA_PONDERADA = ( ...entries ) => {
    const sum = entries.reduce( ( accum, { number, weight } ) => accum + ( number * ( weight ?? 1 ) ), 0 ) // caso n tenha um weigth considere o valor 1
    const weightSum = entries.reduce( ( accum, entry ) => accum + ( entry.weight ?? 1 ), 0 ) // caso n tenha um weigth considere o valor 1
    return sum / weightSum
}

console.log( `Média Ponderada: ${MEDIA_PONDERADA(
    { number: 9, weight: 3 },
    { number: 7 },
    { number: 10, weight: 1 }
)}` );

// Mediana

const MEDIANA = ( ...numbers ) => {
    const orderedNumbers = [...numbers].sort( ( a, b ) => a - b )
    const middle = Math.floor( orderedNumbers.length / 2 ) // pegar  a parte inteira desse número
    if ( orderedNumbers.length % 2 !== 0 ) {
        //impar
        return orderedNumbers[middle]
    }
    // 1, 2, 3, 4, 5 -> 
    const firstMedian = orderedNumbers[middle - 1]
    const secondMedian = orderedNumbers[middle]
    return MEDIA( firstMedian, secondMedian )
}

console.log( `Mediana: ${MEDIANA( 2, 5, 99, 4, 42, 7 )}` ); // Mediana: 6
console.log( `Mediana: ${MEDIANA( 15, 14, 8, 7, 3 )}` ); // Mediana: 8

const MODE = ( ...numbers ) => {
    const quantities = numbers.map( num => [
        num,
        numbers.filter( n => num === n ).length
    ] )
    quantities.sort( ( a, b ) => b[1] - a[1] )
    return quantities[0][0]
}

console.log( `Moda: ${MODE( 1, 1, 5, 4, 9, 7, 7, 7, 7, 7, 7, 4, 3, 5, 2, 4, 0, 4 )}` ); // Moda: 7