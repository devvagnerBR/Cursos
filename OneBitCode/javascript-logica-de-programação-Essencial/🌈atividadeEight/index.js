let ola = "log";


const imoveis = [];
let opcao = "";
do {
  opcao = prompt(
    "Bem vindo ao cadastro de imóveis\n" +
      "Total de Imóveis: " +
      imoveis.length +
      "\n\nEscolha uma opção:\n1. Novo Imóvel\n2. Listar de Imóveis\n3. Sair"
  );
  switch (opcao) {
    case "1":
      const imovel = {};
      imovel.proprietario = prompt("Nome do Proprietário do imóvel");
      imovel.quant_Quartos = prompt("Quantos quartos possui o imóvel");
      imovel.quant_Banheiros = prompt("Quantos banheiros o imóvel possui?");
      imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)");

      const confirmacao = confirm(
        "Salvar este imóvel?\n" +
          "\nProprietário " +
          imovel.proprietario +
          "\nQuartos: " +
          imovel.quant_Quartos +
          "\nBanheiros: " +
          imovel.quant_Banheiros +
          "\nPossui Garagem? " +
          imovel.garagem
      );

      if (confirmacao) {
        imoveis.push(imovel);
        alert("Imóvel salvo com sucesso");
      } else {
        alert("Voltando ao menu");
      }
      break;

    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel" +
            (i + 1) +
            "\nProprietário: " +
            imoveis[i].proprietario +
            "\nQuartos: " +
            imoveis[i].quant_Quartos +
            "\nBanheiros: " +
            imoveis[i].quant_Banheiros +
            "\nPossui Garagem? " +
            imoveis[i].garagem
        );
      }
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("opção inválida");
  }
} while (opcao !== "3");
