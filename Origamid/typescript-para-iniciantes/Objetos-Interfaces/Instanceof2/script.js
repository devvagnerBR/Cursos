"use strict";
// instanteof II
class PRODUTO {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
class LIVRO extends PRODUTO {
    autor;
    constructor(nome, autor) {
        super(nome); // vai ser responsável para recriar o constructor do PRODUTO
        this.autor = autor;
    }
}
class JOGO extends PRODUTO {
    jogadores;
    constructor(nome, jogadores) {
        super(nome);
        this.jogadores = jogadores;
    }
}
const buscarProdutos = (busca) => {
    if (busca === 'O Hobbit')
        return new LIVRO('O Hobbit', 'J. R. R. Tokien');
    if (busca === 'Dark Souls')
        return new JOGO('Dark Souls', 1);
    return null;
};
const produto = buscarProdutos('O Hobbit');
if (produto instanceof LIVRO)
    console.log(produto.nome); // J. R. R. Tokien
if (produto instanceof JOGO)
    console.log(produto.nome); // 1
if (produto instanceof PRODUTO)
    console.log(produto.nome); // produto é um jogo é uma class que extends um PRODUTO
const honda = {
    nome: 'HONDA'
};
console.log(honda instanceof CARRO);
