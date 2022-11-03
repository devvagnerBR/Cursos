const resultado = prompt("Escolha uma alternativa: \n a) \n b) \n c)");

const resultadoNumerico = parseFloat(resultado);

switch (resultadoNumerico) {
  case 1:
    alert('resultado é "A"');
    break;
  case 2:
    alert('resultado é "B"');
    break;
  case 3:
    alert('resultado é "C"');
    break;
  default:
    alert("Finalizando...");
}
