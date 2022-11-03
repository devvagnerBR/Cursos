import React, { useEffect, useState } from 'react'

const AppUseEffects = () => {

    const [contar, setContar] = useState(0)


    useEffect(() => {
        console.log('Executado');
    }, [])

    useEffect(() => {
        document.title = 'Total ' + contar
    }, [contar])

    /*
        array de dependência:[function()]
        se o estado do item dentro do [] array mudar, execute esse código novamente;
        se não mudar, não execute novamente;

        array vazio:
        []só vai executar uma vez o código dentro do useEffect(( ) => { console.log(Executado 1 vez) },[])
    */

    return (


        <div>


            <h1>UseEffects</h1>
            <button onClick={() => setContar(contar + 1)}>{contar}</button>


        </div>


    )
}

export default AppUseEffects

