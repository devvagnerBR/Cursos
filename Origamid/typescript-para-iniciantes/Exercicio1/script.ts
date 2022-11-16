// Exércicio 1

const normalizarTexto = ( texto: string ) => {
    return texto.trim().toLowerCase()
}

console.log( normalizarTexto( 'Meu nome é Wagner' ) );


//Exércicio 2

const input = document.querySelector( 'input' )

const total = localStorage.getItem( 'total' )

if ( input && total ) {
    input.value = total
    calcularGanho( Number( input.value ) )
}


function calcularGanho( value: number ) {
    const p = document.querySelector( 'p' )
    if ( p ) {
        p.innerText = `Ganho total: ${value + 100 - value * 0.2}`
    }
}

const totalMudou = () => {
    if ( input ) {
        localStorage.setItem( 'total', input.value )
        calcularGanho( Number( input.value ) )
    }
}

input?.addEventListener( 'keyup', totalMudou )

