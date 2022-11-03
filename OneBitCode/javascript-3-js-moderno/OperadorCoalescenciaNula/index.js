// symbol: ??

const a = 0 // false
const b = null // false
const c = 'Teste' // true

// || se o valor for false ele vai pular pro próximo
console.log( a || b || c ); // Teste

// ele ignora null e undefined
console.log( a ?? b ?? c ); // 0'

// 0 não é nulo nem undefined
// caso ele seja null ou undefined ele pula para o próximo

// -----------------------------------------

let a1 = 0
let b1 = a || 42

console.log( a1, b1 ); // 0 42 

// caso você queira o valor de zero usar o operador de coalescência nula
//ex:

let a2 = 0
let b2 = a ?? 42 // se o A não tiver nenhum conteúdo o b1 = 42 
console.log( a2, b2 ); // 0 0 

let c1 = false ?? 42 // ignora null | undefined 
console.log( { c1 } );