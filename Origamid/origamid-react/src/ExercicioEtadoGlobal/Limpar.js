import React, { Fragment, useContext } from 'react'
import { GlobalContext } from './GlobalContext'

const Limpar = () => {

    const { limparDados } = useContext(GlobalContext)

    return (
        <Fragment>
            <button onClick={limparDados}>Limpar</button>

        </Fragment>

    )
}

export default Limpar