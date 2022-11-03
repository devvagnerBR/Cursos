import React, { useEffect, useState } from 'react'

const AppUseEffects3 = () => {

    const [count, setCount] = useState(1)
    const [data, setData] = useState(null)

    useEffect(() => {

        fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
            .then((response) => response.json())
            .then((json) => setData(json))

    }, [])

    if (count >= 11) {
        alert("Você não pode adicionar mais itens ao seu carrinho")
        setCount(0)
    }


    return (

        <div>
            <h3>Quantidade de produtos no carrinho: {count}</h3>

            {data &&
                <div>
                    <h1>{data.nome}</h1>
                    <p>valor total: R$ {count === 1 ? data.preco : data.preco * count}</p>
                </div>}

            <button onClick={() => setCount(count + 1)} >Adicionar</button>

        </div>
    )
}



export default AppUseEffects3