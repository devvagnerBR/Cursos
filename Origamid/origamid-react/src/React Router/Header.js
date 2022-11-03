import React from 'react'
import {  useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {

    const location = useLocation()
    React.useEffect(() => {
                console.log('mudou a rota');
    }, [location])

    return (

        <nav>
            <NavLink to={'/'} end >Home</NavLink>       |
            <NavLink to={'sobre'} end>Sobre</NavLink>   |
            <NavLink to={'login'} end>Login</NavLink>
        </nav>



    )
}

export default Header