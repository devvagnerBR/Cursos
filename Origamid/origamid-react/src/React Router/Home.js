import React from 'react'
import { Link } from 'react-router-dom'
import Head from './Head'

const Home = () => {
    return (

        <div>
            <Head title="Home" description="Essa é a descrição da Home" />
            <h1>HOME</h1>
            <p>Essa é a Home Page</p>
            <Link to={'produto/notebook'}>Notebook</Link> {"        "}
            <Link to={'produto/smartphone'}>Smartphone</Link>
        </div>
    )
}

export default Home 