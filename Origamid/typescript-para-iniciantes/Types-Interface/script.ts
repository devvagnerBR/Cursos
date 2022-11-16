//Ex:

type NumberOrString = string | number
let total: NumberOrString = 20
total = '30'

//Aula

interface InterfaceProduto  {
    nome: string;
    preco: number;
    teclado: boolean
}

function preencherDados( dados: InterfaceProduto ) {

    document.body.innerHTML += `
        <div>
        <h2>${dados.nome}</h2>
        <h2>${dados.preco}</h2>
        <h2>Inclui teclado:  ${dados.teclado ? 'sim' : 'não'}</h2>
        </div>
    ` 
}

//Ativando a função

preencherDados( {
    nome: 'Computador',
    preco: 2000,
    teclado: true
} )

//Ativando a função

preencherDados( {
    nome: 'Notebook',
    preco: 2500,
    teclado: false
} )

// Type

const Celular: InterfaceProduto = {
    nome: 'Iphone 13 Pro Max',
    preco: 12000,
    teclado: false
}

preencherDados( Celular )

// Ex²

type Categorias = 'design' | 'codigo' | 'descod'

function pintarCategoria( categoria: Categorias ) {
    if ( categoria === 'design' ) console.log( `Pintar de Vermelho` );
    else if ( categoria === 'codigo' ) console.log( `Pintar de Roxo` );
    else if ( categoria === 'descod' ) console.log( `Pintar de Amarelo` );
    else throw ( `: Preencha com uma categoria válida` )
}

pintarCategoria( 'design' ) // design
//pintarCategoria( 'teste' ) // Preencha com uma categoria válida