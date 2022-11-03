//condicionais if-else

const age = prompt("informe sua idade");

if (age > 18) {
  console.log("você é maior de idade");
} else if (age > 12) {
  console.log("você é menor de idade");
} else if (age > 4) {
  console.log("Você é criança");
} else {
  alert("..");
}

// operador ternário

const resultado = 6 === 6 ? "verdadeiro" : "Falso";
console.log(resultado);
