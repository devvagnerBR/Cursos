let literal: "Hello, World!" | 'chuva'
let pi: 3.14159
let option: 'Yes' | 'No' | 'Maybe'

let option2: number | boolean
option2 = true
option2 = 6

type Planet = "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão"

let planet: Planet
let homePlanet: Planet

const checkPlanet = ( planet: Planet ) => {
    if ( planet === 'Terra' ) {
        console.log( 'Estamos na Terra' );
    }
}

type GreetingCallback = ( name: string ) => void


const greet = ( callbackfn: GreetingCallback ) => {
    let name = 'Wagner'
    callbackfn( name )
}
