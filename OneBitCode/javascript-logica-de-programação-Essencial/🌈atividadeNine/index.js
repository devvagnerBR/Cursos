console.log("Olá mundo 👽🌹");

const calcularAreaTriangulo = () => {
  const base = prompt("Informa base do triângulo:");
  const altura = prompt("Informa a altura do triângulo:");
  return (base * altura) / 2;
};

const calcularAreaRetangulo = () => {
  const base = prompt("Informa base do Retângulo:");
  const altura = prompt("Informa a altura do Retângulo:");
  return base * altura;
};

const calcularAreaQuadrado = () => {
  const lado = prompt("Informa o lado do quadrado:");
  return lado * lado;
};

const calcularAreaTrapézio = () => {
  const baseMaior = paserFloat(prompt("Informe a base maior do trapézio:"));
  const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"));
  const altura = prompt("informe a altura do trapézio:");
  return ((baseMaior + baseMenor) * altura) / 2;
};

const calcularAreaDoCirculo = () => {
  const raio = prompt("Informe o raio do círculo:");
  return 3.14 * raio * raio;
};

const exibirMenu = () => {
  return prompt(
    "Calculadora Geométrica\n" +
      "1. Calcular área de triângulo\n" +
      "2. Calcular área de retângulo\n" +
      "3. Calcular área de quadrado\n" +
      "4. Calcular área de trapézio\n" +
      "5. Calcular área de círculo\n" +
      "6. Sair\n"
  );
};

const executar = () => {
  let opcao = "";
  do {
    opcao = exibirMenu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = calcularAreaTriangulo();
        break;
      case "2":
        resultado = calcularAreaRetangulo();
        break;
      case "3":
        resultado = calcularAreaQuadrado();
        break;
      case "4":
        resultado = calcularAreaTrapézio();
        break;
      case "5":
        resultado = calcularAreaDoCirculo();
        break;
      case "6":
        alert("Encerrando...");
        break;
      default:
        alert("Informe uma opção válida");
        break;
    }
    if (resultado) {
      alert(`Resultado: ${resultado}`);
    }
  } while (opcao !== "6");
};

executar();
