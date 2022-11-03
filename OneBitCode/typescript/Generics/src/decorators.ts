
const Decorator = () => {
    return ( target, key, descriptor ) => {
        descriptor.value = ( value: number ) => {
            console.log( `Calculando ${value} elevado ao quadrado` );
            return value ** 2
        }
    }
}


class PLANET {
    name: string

    constructor( name: string ) {
        this.name = name
    }

    @Decorator()

    calculate( value: number ) {
        console.log( `Calculando ${value} vezes 2` )
        return value * 2
    }
}

const planet = new PLANET( 'Terra' )
const result = planet.calculate( 5 )
