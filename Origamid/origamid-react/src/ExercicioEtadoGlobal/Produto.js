import React, { Fragment, useContext } from "react";
import { GlobalContext } from "./GlobalContext";

const Produto = () => {

    const { dados } = useContext(GlobalContext)

    if (dados === null) {
        return null
    } else {
        return (

            <Fragment>

                <h1>Produto: {dados.map((produto) => {
                    return (
                        <li key={produto.id}>{produto.nome}</li>
                    )
                })}</h1>

            </Fragment>
        )
    }
}

export default Produto