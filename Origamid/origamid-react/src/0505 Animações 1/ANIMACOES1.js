import React from 'react'
import Produto from './Produto'
import './App.css'

const ANIMACOES1 = () => {

    const [ativar, setAtivar] = React.useState(false)

    const MostrarProduto = () => {
        setAtivar(!ativar)
    }

    return (
        <div>
            <button onClick={MostrarProduto}>Ativar</button>
            {ativar && <Produto />}
            
        </div>
    )
}

export default ANIMACOES1