
const atacante = prompt("Nome do personagem atacante?");
const poderDeAtaque = prompt("qual é o seu poder de ataque?");

const defensor = prompt("Nome do personagem Defensor?");
let pontosDeVida = prompt("Quantos pontos de vida ele possui?");
const podeDeDefesa = prompt("Qual é o seu poder de defesa?");
const possuiEscudo = prompt("Ele possui ume escudo? (Sim/Não) ");

let danoCausado = 0;

if (poderDeAtaque > podeDeDefesa && possuiEscudo === Não) {
  danoCausado = poderDeAtaque - podeDeDefesa;
} else if (poderDeAtaque > podeDeDefesa && possuiEscudo === "Sim") {
  danoCausado = (poderDeAtaque - podeDeDefesa) / 2;
}

pontosDeVida -= danoCausado;

alert(`${atacante} causou ${danoCausado} pontos de dano em ${defensor}`);

alert(`${atacante} \n Poder de Ataque: ${poderDeAtaque}\n \n
      ${defensor} \n Pontos de Vida: ${pontosDeVida}
      \n Poder de defesa: ${podeDeDefesa} \n possui escudo: ${possuiEscudo}
`);
