import React, { Fragment, useState, useRef } from 'react'

const TestandoUseTimeout = () => {
    const [carrinho, setCarrinho] = useState(0)
    const [notify, setNotify] = useState(null)


    const timeoutRef = useRef()

    const handleClick = () => {

        setCarrinho(carrinho + 1)

        setNotify('Item adicionado ao carrinho')
        clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => {
            setNotify(null);
        }, 1000)

    }
    return (

        <Fragment>

            <p>{notify}</p>
            <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>

        </Fragment>

    )
}

export default TestandoUseTimeout