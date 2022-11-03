import React from 'react'
import Header from './Header'
import { Home } from './Home'
import Produtos from './Produtos'

const Desafio = () => {

    const { pathname } = window.location
    let Pagina;


    if (pathname === '/produtos') {
        Pagina = Produtos
    } else {
        Pagina = Home
    }

    return (
        <div>
            <Header />
            <Pagina />
        </div>
    )
}

export default Desafio