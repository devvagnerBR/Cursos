const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];

// For

console.log("====== For ======");
const nomes = [];
for (let i = 0; i < personagens.length; i++) {
  nomes.push(personagens[i].nome);
}
console.log(nomes);

// Map

console.log("====== Map ======");

const names = personagens.map((personagem) => {
  return personagem.nome;
});

console.log(names);

// Filtrando com o for

console.log("====== Filtrando com o For ======");

const orcs = [];
for (let i = 0; i < personagens.length; i++) {
  if (personagens[i].raca === "Orc") {
    orcs.push(personagens[i]);
  }
}
console.log(orcs);

// Filter

console.log("====== Filter ======");
const orcs2 = personagens.filter((personagem) => {
  return personagem.raca === "Orc";
});

console.log(orcs2);

// Reduce

console.log("====== Reduce ======");
const nivelTotal = personagens.reduce((valorAcumulado, personagem) => {
  return valorAcumulado + personagem.nivel;
}, 0);

console.log("Nivel Total:", nivelTotal);

console.log("====== Reduce ======");
const racas = personagens.reduce((valorAcumulado, personagem) => {
  if (valorAcumulado[personagem.raca]) {
    valorAcumulado[personagem.raca].push(personagem);
  } else {
    valorAcumulado[personagem.raca] = [personagem];
  }
  return valorAcumulado;
}, {});

console.log(racas);

// Sort

const sorteados = personagens.slice().sort((a, b) => {
  return a.nivel - b.nivel;
});

console.log(sorteados);
