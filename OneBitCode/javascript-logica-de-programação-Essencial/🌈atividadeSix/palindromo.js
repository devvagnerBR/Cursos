console.log("Hello World 👨🏻‍💻👽🌹");
const word = prompt("informe uma palavra");
let reverseWord = "";

for (let i = word.length - 1; i >= 0; i--) {
  reverseWord += word[i];
  console.log(reverseWord);
}

if (word === reverseWord) {
  alert(`${word} é um palíndromo`);
} else {
  alert(`${word}Não é um palíndromo \n\n
  ${word} !== ${reverseWord}`);
}

