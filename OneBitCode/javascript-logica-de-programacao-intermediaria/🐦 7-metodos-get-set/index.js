class TransportSpaceship {
  constructor(name) {
    this.name = name;
    this.currentVelocity = 0;
  }
  // set
  set velocity(newVelocity) {
    if (newVelocity > 120) {
      this.currentVelocity = 120;
      //console.log("sua velocidade foi alterada para " + newVelocity + " Km/h");
    } else {
      this.currentVelocity = newVelocity;
    }
  }
}

let spaceship = new TransportSpaceship("Transportador");
spaceship.velocity = 200;

//console.log(spaceship);

// get

class ResourceProcessStation {
  constructor(name, monthlyProcessedLoad) {
    this.name = name;
    this.monthlyProcessedLoad = monthlyProcessedLoad;
  }

  get weeklyProcessedLoad() {
    return this.monthlyProcessedLoad / 4;
  }
}

let resourceProcessor = new ResourceProcessStation("Gaia", 500);
console.log("Empresa: " + resourceProcessor.name + "\nQuantidade Mensal: " + resourceProcessor.weeklyProcessedLoad + " Unidades;"); // 125

resourceProcessor.monthlyProcessedLoad = 600;

console.log("Empresa: " + resourceProcessor.name + "\nQuantidade Mensal: " + resourceProcessor.weeklyProcessedLoad + " Unidades;"); // 150

