import React, { Fragment, useEffect, useState } from 'react'

const Produtos = ({ produto }) => {

    const [dados, setDados] = useState(null)


    useEffect(() => {

        const URL_BASE = "https://ranekapi.origamid.dev/json/api/produto"

        if (produto !== null) {

            fetch(`${URL_BASE}/${produto}`)
                .then((response) => response.json())
                .then((json) => setDados(json))

        }
    }, [produto])

    







    if (dados === null) {

        return null;

    } else {

        return (

            <Fragment>

                <h1>{dados.nome}</h1>
                <p>R$ {dados.preco}</p>


            </Fragment>
        )
    }





}




export default Produtos