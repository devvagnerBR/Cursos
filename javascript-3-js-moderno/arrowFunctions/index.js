// Arrow Functions não possuem this | arguments | super | new.target

// permite retornar diretamente uma expressão, caso seja uma função de uma única linha
// ex: const multiply = (a,b) => a * b

const Sum = ( a, b ) => a + b
console.log( Sum( 10, 2 ) ); // 12

// caso tenha somente 1 parâmetro não precisa envolver nos parênteses

const double = num => `O dobro de ${num} é ${num * 2}`
const num = 21
console.log( double( num ) );

// exemplo de arrow Function
const cities = ['Rio', 'Macaé', 'Santos', 'São Paulo']
const startingWithS = cities.filter( town => town[0] === 'S' )
console.log( startingWithS );


