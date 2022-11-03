console.log("OLLLA MUNDO 👽🌹");
const calcularMedia = (a, b) => {
  const media = (a + b) / 2;
  return media;
};

const resultado = calcularMedia(7, 2);
console.log(resultado); // 4.5

const criarProduto = (nome, preco) => {
  const produto = {
    nome, // nome:nome
    preco, // preco:preco
    estoque: 1,
  };
  return produto;
};

const notebook = criarProduto("Notebook Intel Core i3 8GB", 2500);

console.log(notebook); //{nome: 'Notebook Intel Core i3 8GB', preco: 2500, estoque: 1}

const areaRetangular = (base, altura) => {
  return base * altura;
};

const areaQuadrada = (lado) => {
  return areaRetangular(lado, lado);
};

console.log(areaRetangular(3, 5)); // 15
console.log(areaQuadrada(9)); // 81

const ola = () => {
  let texto = "texto qualquer";
  return texto;
  texto = `Olá, mundo`;
  console.log(texto);
};

const maiorIdade = (idade) => {
  if (idade > 18) {
    return "maior de idade";
  } else {
    return "menor de idade";
  }
};

console.log(maiorIdade(29));
console.log(maiorIdade(12));
