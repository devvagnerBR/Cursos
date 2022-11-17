"use strict";
const numeros = [10, 20, 30, 40, 50, 60, 3];
const valores = [10, 'Taxas', 30, 'Produto', 50, 3];
const maiorQue10 = (data) => {
    return data.filter(n => n > 10);
};
let text = [];
const filtrarValores = (data) => {
    const num2 = data.filter(item => typeof item === 'number');
    const text2 = data.filter(item => typeof item === 'string');
    text.push(...text, text2);
    text.push(...text, num2);
};
filtrarValores(valores);
console.log(text);
