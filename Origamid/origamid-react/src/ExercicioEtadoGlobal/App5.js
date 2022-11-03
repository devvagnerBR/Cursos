import React, { Fragment } from 'react'
import Produto from './Produto'
import { GlobalStorage } from './GlobalContext'
import Limpar from '../ExercicioEtadoGlobal/Limpar'



const App5 = () => {

    return (

        <GlobalStorage>
            <Produto />
            <Limpar />
        </GlobalStorage>

    )

}

export default App5