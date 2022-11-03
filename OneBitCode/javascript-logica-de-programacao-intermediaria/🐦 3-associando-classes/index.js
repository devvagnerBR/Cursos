console.log("Olá mundo! 😍🌹");
class Captain {
  constructor(name, age, flightHours) {
    this.name = name;
    this.age = age;
    this.flightHours = flightHours;
  }
}

class Spaceship {
  constructor(name, crewQuantity, captainName, captainAge, captainFlingHours) {
    this.name = name;
    this.crewQuantity = crewQuantity;
    this.captain = new Captain(captainName, captainAge, captainFlingHours);
  }
}

let spaceship = new Spaceship("ártemis", 13, "Will Grey", 45, 15000);
console.log(spaceship);
