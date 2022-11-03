const sendSpaceShip = ( spaceship: { pilot: string, copilot?: string } ) => {

}

sendSpaceShip( { pilot: 'Han Solo', copilot: 'Chewbacca' } )
sendSpaceShip( { pilot: 'Luke' } )


let input: unknown // vai ter um tipo, mas esse tipo é desconhecido

input = 'Test'
input = 20
input = []

//any desabilita o typescript || não funciona nenhuma tipagem

//never 

const verificacao = ( test ) => {
    if ( test ) {

    } else {

        // let _check: never
        // let text = _check
        // text = ''
        // return _check

    }
}