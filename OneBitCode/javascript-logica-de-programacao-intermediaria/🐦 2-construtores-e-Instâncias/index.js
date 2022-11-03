//Contrutores e Instâncias

// instânciar é === criar um objeto a partir de uma classe

class SpacialStation {
  constructor(name, platformsQuantity) {
    this.name = name;
    this.platformsQuantity = platformsQuantity;
  }
}

let observatory = new SpacialStation("Observatório", 40);

console.log(observatory);

class Spacechip {
  constructor(name, type = "Descoberta") {
    this.name = name;
    this.type = type;
  }
}

let darwin = new Spacechip("Darwin");
let hemelt = new Spacechip("Helmet", "Batalha");

console.log(darwin);
// Spacechip {name: 'Darwin', type: 'Descoberta'}
console.log(hemelt);
// Spacechip {name: 'Helmet', type: 'Batalha'}
