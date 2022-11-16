"use strict";
const produto = 'livro';
const preco = 200;
const carro = {
    marca: 'Audi',
    portas: 5
};
const barato = preco < 150 ? true : 'Produto caro';
console.log(barato);
const somar = (a, b) => {
    return a * b;
};
console.log(somar(50, 25));
const nintendo = {
    nome: "Nintendo",
    preco: '2000'
};
const transformarPreco = (produto) => {
    produto.preco = 'R$ ' + produto.preco;
    return produto;
};
const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);
