import React, { createContext, useEffect, useState } from "react";


export const GlobalContext = createContext()

export const GlobalStorage = ({ children }) => {

    const [dados, setDados] = useState(null)

    useEffect(() => {

        const URL_BASE = 'https://ranekapi.origamid.dev/json/api/produto/'

        fetch(URL_BASE)

            .then((res) => res.json())
            .then((json) => setDados(json))

    }, [])

  function limparDados () {
    setDados(null)
  }

    


    return (
        <GlobalContext.Provider value={{dados, setDados, limparDados}}>
            {children}
        </GlobalContext.Provider>
    )
}