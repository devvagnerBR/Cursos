import React, { Fragment, useEffect } from 'react'
import useFetch from './useFetch'
import useLocalStorage from './useLocalStorage'


const AppCustomHooks = () => {

    const { state, setState } = useLocalStorage('produto', '')
    const { request, data, loading, error } = useFetch()

    const handleClick = ({ target }) => {
        setState(target.innerText)
    }

    useEffect(() => {

        async function fetchData( ) {

            const {response, json} = await request('https://ranekapi.origamid.dev/json/api/produto/')

        }

        fetchData()

    }, [request])


    return (

        <Fragment>

            <p>Produto Preferido: {state}</p>
            <button onClick={handleClick}>notebook</button>
            <button onClick={handleClick}>smartphone</button>

            { error ? <p>{error}</p> : null }
            {loading ? <div><h4>Carregando...</h4></div> : null}
            {data && data.map((produto) => {

                return (

                    <div key={produto.id}>

                        <h1>{produto.nome}</h1>

                    </div>
                )

            })}

        </Fragment>
    )

}


export default AppCustomHooks