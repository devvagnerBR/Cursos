import React, { Fragment } from 'react'
import Produto from './Produto'
import UserContext from './userContext'
import { GlobalLista, GlobalStorage } from './GlobalContext'

const CreateReactOrigamid = () => {



    return (

        <GlobalStorage>
            <Produto />
        </GlobalStorage>
    )


}

export default CreateReactOrigamid

