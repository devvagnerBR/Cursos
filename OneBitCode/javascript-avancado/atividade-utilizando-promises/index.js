import Spaceship from "./spaceship"
import spaceshipEngine from "./spaceship-engine"

const sophia = new Spaceship( "Sophia", 10, 5 )
const amsterda = new Spaceship( "Amsterdã", 14, 10 )
const dwarfStar = new Spaceship( "Estrela-Anã", 20, 4 )
const sophiaEngine = new spaceshipEngine( sophia )
const amsterdaEngine = new spaceshipEngine( amsterda )
const dwarfStartEngine = new spaceshipEngine( dwarfStar )

sophiaEngine.turnOn()
amsterdaEngine.turnOn()
dwarfStartEngine.turnOn()
console.log( "Promises" )
