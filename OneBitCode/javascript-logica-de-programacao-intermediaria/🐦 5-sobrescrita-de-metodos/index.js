class Spaceship {
  constructor(name, maxCrew, maxRecommendedVelocity) {
    this.name = name;
    this.maxCrew, maxCrew;
    this.maxRecommendedVelocity = maxRecommendedVelocity;
  }
  speedUp(aceleration) {
    this.currentVelocity += aceleration;
    if (this.currentVelocity > this.maxRecommendedVelocity) {
      alert(
        "Velocidade máxima ultrapssada!!\nDiminua ou poderá provocar danos à nave."
      );
    }
  }
}

class TransportSpaceship extends Spaceship {
  speedUp() {
    alert("Nave de transporte só aumenta a velocidade em 1km/s");
    this.currentVelocity = +1;
  }
}

let transportSpaceship = new TransportSpaceship("Transportadora", 4, 100);
console.log(transportSpaceship);
transportSpaceship.speedUp()
console.log(transportSpaceship);