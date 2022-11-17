// class

class PRODUTO {
    nome: string
    preco: number
    constructor( nome: string, preco: number ) {
        this.nome = nome;
        this.preco = preco
    }

    precoReal() {
        return `R$ ${this.preco}`
    }

}

const livro = new PRODUTO( 'A guerra dos Tronos', 89 )

//console.log( livro.precoReal() )

// instance of

//console.log( livro instanceof PRODUTO );

class LIVRO {
    autor: string
    constructor( autor: string ) {
        this.autor = autor
    }
}

class JOGO {
    jogadores: number
    constructor( jogadores: number ) {
        this.jogadores = jogadores
    }
}

const buscarProdutos = ( busca: string ) => {
    if ( busca === 'O Hobbit' ) return new LIVRO( 'J. R. R. Tokien' )
    if ( busca === 'Dark Souls' ) return new JOGO( 1 )
    return null
}

const produto = buscarProdutos( 'O Hobbit' )

if ( produto instanceof LIVRO ) console.log( produto.autor ); // J. R. R. Tokien
if ( produto instanceof JOGO ) console.log( produto.jogadores ); // 1

// instanteof II

