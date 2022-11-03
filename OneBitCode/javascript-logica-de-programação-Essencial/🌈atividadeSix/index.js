console.log("Hello World 🤡🌹");
const num1 = prompt(
  `Olá eu sou o Robô da Tabuada, \n
  Informe o número que você deseja calcular a tabuada:
  `
);

let resultado = "";

for (let fator = 1; fator <= 20; fator++) {
  resultado += "-> " + num1 + " * " + fator + " = " + num1 * fator + "\n";
}
alert(`Resultado da tabuada de ${num1}: \n\n  ${resultado}`);
