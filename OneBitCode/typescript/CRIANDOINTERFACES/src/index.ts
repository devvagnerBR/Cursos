interface CelestialBody {
    name: string,
    mass: number
}

interface Star extends CelestialBody {
    age: number,
    planets: PLANET[]
}

interface PLANET extends CelestialBody {
    population: number,
    createSatellite: ( name: string ) => void
}

let sun: Star
sun.name = 'Sol'
sun.mass = 1.1989 * ( 10 ** 30 )
sun.age = 4.603 * ( 10 ** 9 )
sun.planets = []

type ASTEROID = CelestialBody & {
    size: number
}

let asteroid: ASTEROID

asteroid.name = 'XXXXXX'



class MILKYWAYPLANET implements PLANET {
    name: string
    mass: number
    population: number;

    constructor( name: string, mass: number, population: number ) {
        this.name = name,
            this.mass = mass,
            this.population = population
    }

    createSatellite = ( name: string ) => {
        //.
    }
}

