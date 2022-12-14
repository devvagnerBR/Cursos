/* 
Possui 4 estados:

-pendente estado inicial
-realizada
-recusada
-estabelecida

*/


let komodoShip = {
    name: 'Komodo',
    velocity: 80,
    acceleration: 10
}

console.log( komodoShip );

// resolve recebe estado de realizado
// reject recebe estado de rejeitado

const velocityAfter2Seconds = ( velocity, acceleration ) => {
    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            if ( acceleration > 0 ) {
                velocity += acceleration * 2
                console.log( `Nova velocidade: ${velocity}` );
                resolve( velocity )
            } else {
                console.log( `Aceleração inválida` );
                reject( `Não possui aceleração` )
            }
        }, 1000 )
    } )
}

velocityAfter2Seconds( komodoShip.velocity, komodoShip.acceleration ).then( velocity => {
    komodoShip.velocity = velocity
    console.log( `Depois de acelerar: \n, ${komodoShip}` );
} )


console.log( `Execução de Promises` );
console.log( komodoShip );