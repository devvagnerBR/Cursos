const firstName = prompt("qual o seu primeiro nome?");
const lastName = prompt("Qual o seu sobrenome");
const estudo = prompt("O que você estuda?");
const nascimento = prompt("Qual o seu ano de nascimento?");

const idade = 2022 - nascimento;
alert(
  `meu nome é ${firstName} ${lastName}, estudo ${estudo}, e tenho ${idade} anos `
);

const num1 = parseFloat(prompt("informe um número abaixo:"));
const num2 = parseFloat(prompt("informe outro número abaixo:"));

const calculadora = (num1, num2) => {
  console.log(num1 + num2);
  console.log(num1 - num2);
  console.log(num1 * num2);
  console.log(num1 / num2);
};

calculadora(num1, num2);
