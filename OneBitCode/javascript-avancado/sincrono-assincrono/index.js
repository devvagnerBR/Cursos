const step02 = () => {
    console.log( `Passo 02` );
}

console.log( `Passo 01` );

step02()

console.log( `Passo 03` );
console.log( `Passo 04` );

setTimeout( () => { //assincrono
    console.log( `passo 05` );
}, 1000 )

console.log( `Passo 06` );