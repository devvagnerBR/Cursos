import React, { useState } from 'react'

const ExemploInputs = () => {

    const [nome, setNome] = useState('Name')
    const [email, setEmail] = useState('E-mail')







    const handleClick = (event) => {
        
        setNome(event.target.value)

    }

    const handleClickEmail = (event) => {

        setEmail(event.target.value)

    }

    const handleSubmit = (event) => {

        event.preventDefault()
        console.log(event);

    }

    


    return (


        <form onSubmit={handleSubmit}>

            <h1>Inputs - Origamid:  {nome}</h1>

            <label

                htmlFor='nome'
                >Nome

            </label>

            <input

                id='nome'
                type="text"
                name='nome'
                value={nome}
                placeholder="Nome"
                onChange={handleClick}

            />

            <label

                htmlFor='email'
                >E-mail

            </label>

            <input

                id='email'
                type="email"
                name='email'
                value={email}
                placeholder="E-mail"
                onChange={handleClickEmail}

            />

            <button>Enviar</button>
        </form>


    )
}

export default ExemploInputs