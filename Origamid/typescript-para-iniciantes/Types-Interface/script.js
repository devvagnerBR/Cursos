"use strict";
//Ex:
let total = 20;
total = '30';
function preencherDados(dados) {
    document.body.innerHTML += `
        <div>
        <h2>${dados.nome}</h2>
        <h2>${dados.preco}</h2>
        <h2>Inclui teclado:  ${dados.teclado ? 'sim' : 'não'}</h2>
        </div>
    `;
}
//Ativando a função
preencherDados({
    nome: 'Computador',
    preco: 2000,
    teclado: true
});
//Ativando a função
preencherDados({
    nome: 'Notebook',
    preco: 2500,
    teclado: false
});
// Type
const Celular = {
    nome: 'Iphone 13 Pro Max',
    preco: 12000,
    teclado: false
};
preencherDados(Celular);
function pintarCategoria(categoria) {
    if (categoria === 'design')
        console.log(`Pintar de Vermelho`);
    else if (categoria === 'codigo')
        console.log(`Pintar de Roxo`);
    else if (categoria === 'descod')
        console.log(`Pintar de Amarelo`);
    else
        throw (`: Preencha com uma categoria válida`);
}
pintarCategoria('design'); // design
pintarCategoria('teste'); // Preencha com uma categoria válida
