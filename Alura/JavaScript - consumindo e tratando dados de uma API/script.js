console.log( `Mandando oi pro amigo` );

const mandaMensagem = () => {
    console.log( `tudo bem?` );
    console.log( `Vou te mandar solicitação` );
    console.log( `Solicitação recebida` );
};

//Sincrono
mandaMensagem();


// Task Queue
setTimeout( mandaMensagem, 5000 )
console.log( `Tchau Tchau` );

// CallBack


// redux ?
