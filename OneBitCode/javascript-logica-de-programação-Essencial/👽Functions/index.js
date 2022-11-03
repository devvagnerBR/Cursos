console.log("hello word (Functions) 👽🌹");

const dobro = (x) => {
  alert("O Dobro de " + x + " é " + x * 2);
  console.log(`O Dobro de ${x} é ${x * 2}`);
};

const dizerOla = (nome = "Cliente") => {
  alert(`Olá, ${nome}!`);
};

// dizerOla("Wagner");
// dizerOla();

const soma = (a = 0, b = 0) => {
  alert(`O resultado da Soma é: ${a + b}`);
};
// soma(50, 80);

const criarUsuario = (nome, email, senha, tipo = "admin") => {
  const usuario = {
    nome, // mesmo que nome:nome
    email,
    senha,
    tipo,
  };
  // console.log(usuario);
};

criarUsuario("Wagner", "wagner@gmail.com", "scotow21");

const objetoComoParametro = (usuario) => {
  usuario.nome = prompt("nome");
  usuario.telefone = prompt("telefone");
  usuario.email = prompt("email");
  usuario.senha = prompt("senha");
  usuario.endereco = prompt("endereco");
  usuario.aniversario = prompt("niver");
};

const dadosDoUsuario = {
  nome: "",
  telefone: "",
  email: "",
  senha: "",
  endereco: "",
  aniversario: "",
};

//objetoComoParametro(dadosDoUsuario);

//console.log(dadosDoUsuario);

