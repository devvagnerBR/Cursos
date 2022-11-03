console.log("Hello World 👽🌹");
let saldo = parseFloat(prompt("Informe a quantidade de dinheiro inicial:"));
let option = "";

do {
  option = prompt(
    `Saldo disponível: R$${saldo} \n
        \n1. Adicionar dinheiro
        \n2. Remover dinheiro
        \n3. Sair
        `
  );
  switch (option) {
    case "1":
      saldo += parseFloat(prompt("informe um valor para adicionar"));
      break;
    case "2":
      saldo -= parseFloat(prompt("Informe um valor a ser removido:"));
      break;
    case "3":
      alert("saindo...");
      break;
    default:
      alert("entrada inválida");
  }
} while (option !== "3");
