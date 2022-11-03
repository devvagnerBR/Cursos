import React, { Fragment } from 'react'

const Itens = ({ pessoas }) => {



    const amigos = pessoas.map((amigo) => {
        
        return (

            <Fragment key={amigo.id}>

                <h4>{amigo.nome}</h4>
                <h4>{amigo.idade}</h4>
                <h4>{amigo.time}</h4>


            </Fragment>
        )
    })




    return (

        <div>

            <h1>Amigos ♥ </h1>
            {amigos}

        </div>
    )
}

export default Itens