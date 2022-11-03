let srt = 'Meu nome é Wagner'
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

console.log( ...srt ); // M e u   n o m e   é   W a g n e r
console.log( ...arr ); // 1 2 3 4 5 6 7 8 9 0

const fuu = [...[srt]]

console.log( fuu ); // ['Meu nome é Wagner']


// Prática 
const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log( towns ); // ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']
console.log( ...towns ); // Prontera Izlude Payon Alberta Geffen Morroc
console.log( ...towns[0] ); // P r o n t e r a

const townsCopy = towns

townsCopy.pop()
townsCopy.pop()
townsCopy.push( 'Juno' )
console.log( { towns, townsCopy } );


const townsClone = [...towns]

townsClone.push( 'Aldebaran' )
console.log( { towns, townsCopy, townsClone } );

// objetos normais

const townsObj = { ...towns }
const townsObjClone = { ...townsObj }

townsObjClone.test = 'Test'

console.log( { townsObj, townsObjClone } );