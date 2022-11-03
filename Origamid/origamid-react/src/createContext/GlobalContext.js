import React, { createContext, useState } from "react";

export const GlobalContext = createContext()


export const GlobalStorage = ({ children }) => {

    const [contar, setContar] = useState(0)

    const itens = [

        {
            id: 1,
            nome: 'Wagner',
            idade: 27,
            time: 'Pain Gaming'
        },

        {

            id: 2,
            nome: 'Paulo',
            idade: 20,
            time: 'Flamengo'

        },

        {

            id: 3,
            nome: 'Cassiane',
            idade: 22,
            time: 'Pain Gaming'

        }
        ,
        {
            
            id: 4,
            nome: 'Yasmin',
            idade: 20,
            time: 'Flamengo'

        }
    ]

    return (

        <GlobalContext.Provider value={{ contar, setContar, itens }}>

            {children}

        </GlobalContext.Provider>

    )
}

