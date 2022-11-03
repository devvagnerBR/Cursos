class BattleSpaceship extends Nave {
  constructor(name, crewQuantity, weaponsQuantity) {
    super(name, crewQuantity);
    // para receber o name && crewQuantity já definidos na class Pai
    this.weaponsQuantity = weaponsQuantity;
  }
}
