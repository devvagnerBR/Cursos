import React, { useState } from 'react'
import ButtonModal from './ButtonModal'
import Modal from './Modal'

const App2 = () => {
    const [modal, setModal] = useState(false)
    let [itens, setItens] = useState('Teste')

    const handleClick = () => {
        setItens('Outro')
    }

    return (
        <div>
            <p>{itens}</p>
            <button onClick={handleClick}>Clicar</button>
            <Modal modal={modal} setModal={setModal} />
            <ButtonModal setModal={setModal} />
        </div>
    )


}

export default App2

/*

    LINK: https://www.origamid.com/curso/react-completo/0301-usestate-2
    TEMPO: -6:58 

*/ 