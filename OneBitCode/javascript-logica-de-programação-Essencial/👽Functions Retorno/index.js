console.log("Hello world 👽🌹");

let pokemon = "1 - Charmander";

const evoluir = () => {
  pokemon = "Charmeleon";
  console.log(`2 - ${pokemon}`);
};

console.log(pokemon);
evoluir();

const avaliarNota = (nota) => {
  if (nota > 60) {
    var aprovado = true;
    let situacao = "Aprovado";
  } else {
    var aprovado = false;
    let situacao = "Reprovado";
  }

  console.log(nota);
  console.log(aprovado);
};

avaliarNota(83);
avaliarNota(49);

const ola = () => {
  var texto = "Olá mundo!";
};

// console.log(texto);

console.log(nome);
// console.log(sobrenome);

var nome = "Wagner";
let sobrenome = "Guimarães";

console.log(nome);
// console.log(sobrenome);
