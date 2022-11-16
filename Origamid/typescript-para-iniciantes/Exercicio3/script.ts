async function fetchProduct() {
    const response = await fetch( `https://api.origamid.dev/json/notebook.json` )
    const data = await response.json()

    showProduct( data )
}

fetchProduct()
interface EMPRESA {
    fundacao: number
    nome: string
    pais: string
}
interface PRODUCT {

    nome: string
    preco: number
    descricao: string
    garantia: string
    seguroAcidentes: boolean

    empresaFabricante: EMPRESA
    empresaMontadora: EMPRESA
}

function showProduct( data: PRODUCT ) {
    document.body.innerHTML = `
    <div>
        <h2>${data.nome}</h2>
        <p>R$ ${data.preco}</p>
        <div>
             <h3>${data.empresaFabricante.nome}</h3>
        </div>
        <div>
            <h3>${data.empresaMontadora.nome}</h3>
        </div>
    <div>
    `
}
