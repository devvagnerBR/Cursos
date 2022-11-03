console.log("HELLO WORLD 👽🌹");

const turista = prompt("Qual o seu nome?");
let cidades = "";
let contagem = 0;

let continuar = prompt("Você visitou alguma cidade? (sim, não)");

while (continuar === "sim") {
  let cidade = prompt("Qual é o nome da cidade visitada?");
  cidades += " - " + cidade + "\n";
  contagem++;
  continuar = prompt("você visitou alguma outra cidade? (sim/não)");
}
alert(`Turista: ${turista} 
\n Quantidade de cidades visitadas: ${contagem}
\n Cidades visitadas: \n ${cidades} `);
