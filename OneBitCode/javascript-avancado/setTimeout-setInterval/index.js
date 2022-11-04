
//executa 1 vez após 2s
let timeoutId = setTimeout( () => {
    console.log( `Executando apos 2s` );
}, ( 2000 ) )

clearTimeout( timeoutId ) //cancelando a execução do setTimeout


//executa a cada intervalo de tempo especificado
let seconds = 0
let intervalId = setInterval( () => {
    seconds += 1
    console.log( `Executando após ${seconds}` );
    if ( seconds >= 10 ) clearInterval( intervalId )
}, 1000 )

