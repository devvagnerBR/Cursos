//função recursiva é a função que chama ela mesma e se executa de novo e de novo

const dividir = (num) => {
  console.log(num);
  if (num % 2 === 0) {
    dividir(num / 2);
  } else {
    return num;
  }
};

//dividir(256);

/*

  Primeira -> Segunda -> Terceira

*/

// fatorial de 5: !5   === 5*4*3*2*1 === 5 * !4
// fatorial de 0 é igual a 1
const fatorial = (num) => {
  console.log(`Número: ${num}`);
  if (num === 0) { // caso base
    return 1;
  } else if (num === 1) {
    return 1;
  } else {
    console.log(`${num} * !${num - 1}`);
    return num * fatorial(num - 1);
  }
};
console.log(fatorial(5));

/* 

26 Número: 5
32 5 * !4
26 Número: 4
32 4 * !3
26 Número: 3
32 3 * !2
26 Número: 2
32 2 * !1
26 Número: 1
37 120

*/