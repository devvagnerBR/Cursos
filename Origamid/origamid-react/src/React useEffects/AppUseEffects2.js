import React, { useEffect, useState } from 'react'

const AppUseEffects2 = () => {


    const [contar, setContar] = useState(0)

    const tituloDoSite = () => {
        const dia = new Date().getDate()
        const mes = new Date().getMonth()
        const ano = new Date().getFullYear()


        const horas = new Date().getHours()
        const minutos = new Date().getMinutes()
        const segundos = new Date().getSeconds()

        const data = (`${dia}/${mes}/${ano} - ${horas}h ${minutos}m ${segundos}s`)

        return data
    }

    const horaDaCompra = (event) => {
        setContar(contar + 1)
        console.log(tituloDoSite());
        console.log("Clicou em", event.target.innerText);
    }

    useEffect(() => {

        const site = document.title = tituloDoSite()

    }, [tituloDoSite()])






    return (

        <div>

            <button onClick={horaDaCompra} >{contar}</button>

        </div>

    )
}

export default AppUseEffects2