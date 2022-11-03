const paixao = "log";
console[paixao]("Olá Mundo 👽🌹");

// função que recebe outra função como parâmetro ( paradigma funcional )

const calcular = (a, b, operacao) => {
  console.log("Realizando uma operação");
  const resultado = operacao(a, b);
  return resultado;
};

const somar = (x, y) => {
  console.log("realizando uma soma");
  return x + y;
};

console.log(calcular(3, 5, somar));

// funcão anônima
console.log(
  calcular(8, 4, (x, y) => {
    console.log("Realizando uma subtração");
    return x - y;
  })
);

/* console.log 

- Realizando uma operação
- 13 realizando uma soma
- 8
- 7 Realizando uma operação
- 22 Realizando uma subtração
- 4

*/

// for

const exibirElemento = (elemento, indice, array) => {
  console.log(elemento, indice, array);
};

const lista = ["Maça", "Banana", "Laranja", "Limão"];

console.log('========== For ==========');
for (let i = 0; i < lista.length; i++) {
  exibirElemento(lista[i], i, lista);
}

// forEach ( para cada )

console.log('========== For Each ==========');
lista.forEach(exibirElemento)
// para cada item da lista irá chamar a função exibirElemento

console.log('========== Função Anônima ==========');

lista.forEach((elemento,indice, array) => {
  console.log(elemento,indice,array);
})