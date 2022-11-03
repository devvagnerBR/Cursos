import React, { Fragment, useContext } from 'react'
import { GlobalContext } from './GlobalContext'
import Itens from './itens'



const Produto = () => {

    const itens = useContext(GlobalContext)
    
    const pessoas = itens.itens


    return (

        <Fragment>
            <Itens pessoas={pessoas} />
        </Fragment>
        
    )
}

export default Produto

