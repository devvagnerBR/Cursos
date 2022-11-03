let pessoa = {
  nome: "Wagner",
  idade: 27,
  dizerOla() {
    console.log("Olá Mundo! meu nome é " + this.nome);
    console.log(`Olá mundo! meu nome é ${this.nome}`);
  },
};

console.log(pessoa);
console.log(typeof pessoa);
pessoa.dizerOla();
