class TransportSpaceship extends Nave {
  constructor(name, crewQuantity, sitsQuantity) {
    super(name, crewQuantity);
    // para receber o name && crewQuantity já definidos na class Pai
    this.sitsQuantity = sitsQuantity;
  }
}
