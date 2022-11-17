// Any
function normalizar( texto: string ) {
    return texto.trim().toLowerCase()
}

// console.log( normalizar( 'DeSign' ) );


// NULL representa a ausência de valor

const button = document.querySelector( 'button' )
const config = localStorage.getItem( 'config' )

button?.click() // verifica, se o valor for null ou undefined ele não continua a execução
// console.log( typeof null ); // object


// undefined ===  false


// Propriedades Opcionais

interface PRODUCT {
    nome?: string
}


const jogo: PRODUCT = { nome: 'Ragnarok' }
console.log( jogo?.nome ); // caso não exista propriedade nome dentro de jogo retorna undefined

if ( jogo.nome ) jogo.nome.toLowerCase()
jogo.nome?.toLowerCase()
jogo.nome && jogo.nome.toLowerCase()