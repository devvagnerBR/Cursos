"use strict";
// Any
function normalizar(texto) {
    return texto.trim().toLowerCase();
}
// console.log( normalizar( 'DeSign' ) );
// NULL representa a ausência de valor
const button = document.querySelector('button');
const config = localStorage.getItem('config');
button?.click(); // verifica, se o valor for null ou undefined ele não continua a execução
const jogo = { nome: 'Ragnarok' };
console.log(jogo?.nome); // caso não exista propriedade nome dentro de jogo retorna undefined
if (jogo.nome)
    jogo.nome.toLowerCase();
jogo.nome?.toLowerCase();
jogo.nome && jogo.nome.toLowerCase();
