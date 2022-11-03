const vagas = Array();

const listarVagas = () => {
  const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
    textoFinal += indice + ". ";
    textoFinal += vaga.nome;
    textoFinal += " (" + vaga.candidatos.length + " cadidatos)\n";
    return textoFinal;
  }, "");
  alert(vagasEmTexto);
};

const novaVaga = () => {
  const nome = prompt("Nome para a vaga");
  const descricao = prompt("Informe uma descrição para a vaga");
  const dataLimite = prompt("Informe uma data limite (dd/mm/aaaa)");

  const confirmacao = confirm(
    "Deseja criar uma nova vaga com essas informações?\n" +
      "Nome: " +
      nome +
      "\nDescrição: " +
      descricao +
      "\nData Limite: " +
      dataLimite
  );
  if (confirmacao) {
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] };
    vagas.push(novaVaga);
    alert("Vaga Criada.");
  }
};

const exibirVaga = () => {
  const indice = prompt("Informe o índice da vaga que deseja exibir:");
  if (indice >= vagas.length || indice < 0){
    alert("índice inválido")
    return 
  }
  const vaga = vagas[indice];

  const candidatosEmTexto = vaga.candidatos.reduce((textoFinal, candidato) => {
    return textoFinal + "\n - " + candidato;
  }, "");

  alert(
    "Vaga número: " +
      indice +
      "\nNome: " +
      vaga.nome +
      "\nDescrição " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite +
      "\nQuantidade de candidatos: " +
      vaga.candidatos.length +
      "\nCandidatos Inscrito: " +
      candidatosEmTexto
  );
};

const inscreverCnadidato = () => {
  const candidato = prompt("Informe o nome do candidato para a vaga");
  const indice = prompt(
    "Informe o índice da vaga para qual deseja se inscrever"
  );
  const vaga = vagas[indice];

  const confirmacao = confirm(
    "Deseja inscrever o candidato " +
      candidato +
      " na vaga " +
      indice +
      "?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData Limite: " +
      vaga.dataLimite
  );
  if (confirmacao) {
    vaga.candidatos.push(candidato);
    alert("Incrição Realizada.");
  }
};

const excluirVaga = () => {
  const indice = prompt("Informe o índice da vaga que deseja excluir:");
  const vaga = vagas[indice];

  const confirmacao = confirm(
    "Tem certeza que deseja excuir a vaga " +
      indice +
      "?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData Limite: " +
      vaga.dataLimite
  );

  if (confirmacao) {
    vagas.splice(indice, 1);
    alert("Vaga Excluida");
  }
};

const exibirMenu = () => {
  const opcao = prompt(
    "Cadastro de Vagas de Emprego" +
      "\n\n Escolha uma das vagas: " +
      "\n1. Listar vagas disponíveis" +
      "\n2. Criar uma nova vaga" +
      "\n3. Visualizar uma vaga" +
      "\n4. Inscrever um(a) condadato(a)" +
      "\n5. Excluir uma vaga" +
      "\n6. Sair"
  );

  return opcao
};

const executar = () => {
  let opcao = "";

  do {
    opcao = exibirMenu();

    switch (opcao) {
      case "1":
        listarVagas();
        break;
      case "2":
        novaVaga();
        break;
      case "3":
        exibirVaga();
        break;
      case "4":
        inscreverCnadidato();
        break;
      case "5":
        excluirVaga();
        break;
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção inválida");
    }
  } while (opcao !== "6");
};

executar();
