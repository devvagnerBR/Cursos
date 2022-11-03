type PLANET_SITUATION = 'Habitado' | 'Habitável' | 'Inabitável' | 'Inexplorado'

type PLANET_COORDINATES = [number, number, number, number]

type PLANET = {
    name: string,
    coordinates: PLANET_COORDINATES,
    situation: PLANET_SITUATION,
    satellites: string[]
}

const planets: PLANET[] = []

const addPlanet = ( name: string, coordinates: PLANET_COORDINATES, situation: PLANET_SITUATION ) => {
    planets.push( {
        name,
        coordinates,
        satellites: [],
        situation,
    } )

    alert( `O planeta ${name} foi registrado com sucesso` )
}

const findPlanet = ( name: string ) => {
    const planet = planets.find( planet => planet.name === name )
    return planet ?? false
    // caso não encontre o planeta retorna false

}


const updateSituation = ( situation: PLANET_SITUATION, planet: PLANET ) => {
    planet.situation = situation

    alert( `A situação do planeta ${planet.name} foi atualizada para ${situation}` )
}
const addSatellite = ( name: string, planet: PLANET ) => {
    planet.satellites.push( name )
    alert( `O satélite ${name} foi adicionado ao planeta ${planet.name}` )
}

const removeSatellite = ( name: string, planet: PLANET ) => {
    planet.satellites = planet.satellites.filter( satellite => satellite !== name )

    alert( `O satélite ${name} foi removido do planeta ${planet.name}` )
}

