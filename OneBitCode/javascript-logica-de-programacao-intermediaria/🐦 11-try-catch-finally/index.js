class SpaceshipWeapon {
  constructor(identifier) {
    this.identifier = identifier;
    this.shotsLeft = 5;
  }
  shoot() {
    if (this.shotsLeft > 0) {
      console.log("Munição: " + fenixWeapon.shotsLeft);
      console.log("Bang!");
      this.shotsLeft -= 1;
    } else {
      throw new Error("Arma " + this.identifier + " sem munição");
    }
  }
  reload() {
    this.shotsLeft = 5;
    console.log("Recarregando arma...");
  }
}

let fenixWeapon = new SpaceshipWeapon("Fênix");
try { // tenta executar

  fenixWeapon.shoot();
  fenixWeapon.shoot();
  fenixWeapon.shoot();
  fenixWeapon.shoot();
  fenixWeapon.shoot();
  fenixWeapon.shoot();

} catch (e) { // se encontrar algum erro
  console.log(e.message);
  fenixWeapon.reload();
}finally{ // independente dele cair em erro ele executa o código
  console.log('arma deu bons tiros');
}

console.log(fenixWeapon);
