const planets = [];
const addPlanet = (name, coordinates, situation) => {
    planets.push({
        name,
        coordinates,
        satellites: [],
        situation,
    });
    alert(`O planeta ${name} foi registrado com sucesso`);
};
const findPlanet = (name) => {
    const planet = planets.find(planet => planet.name === name);
    return planet !== null && planet !== void 0 ? planet : false;
    // caso não encontre o planeta retorna false
};
const updateSituation = (situation, planet) => {
    planet.situation = situation;
    alert(`A situação do planeta ${planet.name} foi atualizada para ${situation}`);
};
const addSatellite = (name, planet) => {
    planet.satellites.push(name);
    alert(`O satélite ${name} foi adicionado ao planeta ${planet.name}`);
};
const removeSatellite = (name, planet) => {
    planet.satellites = planet.satellites.filter(satellite => satellite !== name);
    alert(`O satélite ${name} foi removido do planeta ${planet.name}`);
};
