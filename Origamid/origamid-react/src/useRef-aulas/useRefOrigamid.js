import React, { Fragment, useRef, useState } from 'react'



const EstudosUseRefOrigamid = () => {

    const [comentarios, setComentarios] = useState([])
    const [input, setInput] = useState('')

    const inputElement = useRef('')

    const handleClick = () => {
        setComentarios([...comentarios, input])
        setInput('')
        inputElement.current.focus()
    }

    return (

        <Fragment>

            <ul>
                {comentarios.map((comentario) => {
                    <li key={comentario}>{comentario}</li>
                })}
            </ul>

            <input
                ref={inputElement}
                type="text"
                value={input}
                onChange={({ target }) => setInput(target.value)}
                placeholder="seu comentario aqui... ♥"

            />

            <button

                onClick={handleClick}>Enviar

            </button>
        </Fragment>

    )

}
export default EstudosUseRefOrigamid

