console.log("hello-word👽🌹");

const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];
console.log("👽 Array inicial:", arr);
// 👽 Array inicial: (8) ['Frodo', 'Sam', 'Merry', 'Pippin', 'Gandalf', 'Aragorn', 'Legolas', 'Gimli']

// push
arr.push("🤡 Boromir"); // add itens no final do array
console.log("👽 Add item no Final: ", arr);
//👽 Add item no Final:  (9) ['Frodo', 'Sam', 'Merry', 'Pippin', 'Gandalf', 'Aragorn', 'Legolas', 'Gimli', '🤡 Boromir']

//pop
const lastOne = arr.pop(); // remover o último item do array e retorna ele
console.log("👽 Removeu o último item: ", lastOne);
//👽 Removeu o último item:  🤡 Boromir

//shift
const first = arr.shift(); // remove o primeiro ítem do aray e retorna ele
console.log("👽 Remove o primeiro item: ", first);
//👽 Remove o primeiro item:  Frodo

//unshift
const unshift = arr.unshift("🤡 HOMEM ARANHA"); // add itens no início do array
console.log("👽 Add item no início e retorna o length: ", unshift);
//👽 Add item no início e retorna o length:  8
console.log("👽", arr);
//👽 (8) ['🤡 HOMEM ARANHA', 'Sam', 'Merry', 'Pippin', 'Gandalf', 'Aragorn', 'Legolas', 'Gimli']

// ========== pesquisar por um elemento ==========

//includes
const inclui = arr.includes("Sam"); // verifica se existe o item dentro do array e retorna true/false
console.log(
  "👽 Verifica se existe o item no array e retorna true/false:",
  inclui
);
//👽 Verifica se existe o item no array e retorna true/false: true

//indexOf
const indice = arr.indexOf("Sam"); // verifica se existe o item dentro do array e retorna a sua posição no index
console.log(
  "👽 Verifica se existe o item no array e retorna seu index",
  indice
);
//👽 Verifica se existe o item no array e retorna seu index 1

// ========== Cortar e Contatenar ==========

//slice
const hobbits = arr.slice(1, 4); // ele retorna os itens nas posições [ 1 , 2 , 3 ] a partir do index [1]
console.log("👽 Novo Array com os Hobbits", hobbits);
//👽 Novo Array com os Hobbits (3) ['Sam', 'Merry', 'Pippin']

// slice invertido
const outros = arr.slice(arr.length - 4); // retorna os itens do final para o início do array
console.log("👽 Slice invertido:", outros);
//👽 Slice invertido: (4) ['Gandalf', 'Aragorn', 'Legolas', 'Gimli']

console.log("|====================== PART II ==========================|");

//concat
const sociedade = hobbits.concat(outros, "Boromir"); //concatena qualquer conteúdo dentro dos parênteses
console.log("👽 Concat:", sociedade);
//👽 Concat: (8) ['Sam', 'Merry', 'Pippin', 'Gandalf', 'Aragorn', 'Legolas', 'Gimli', 'Boromir']

// ========== Substituição dos Elementos ==========

//splice
const elementosRemovidos = sociedade.splice(indice, 1, "🤡 BLASTOOOOOOOOOICE");
//indice = a partir de qual item você quer fazer o splice;
//quantas unidades você quer remover a partir do ítem indicado;
// o item que vai entrar no lugar do ítem removido

console.log("👽 Elementos removidos", elementosRemovidos);
//👽 Elementos removidos ['Merry']
console.log(
  "👽 Array com o item removido e substituido com o splice",
  sociedade
);
//👽 Array com o item removido e substituido com o splice (8) ['Sam', '🤡 BLASTOOOOOOOOOICE', 'Pippin', 'Gandalf', 'Aragorn', 'Legolas', 'Gimli', 'Boromir']

// Iterar ssobre os Elementos

for (let indice = 0; indice <sociedade.length; indice++){
  const elemento = sociedade[indice]
  console.log(elemento, "se encontra na posição", indice);
}