
import React from 'react'
import LINK from '../src/components/Link/Link'
import axios from 'axios'
import Head from 'next/head'



export async function getServerSideProps() {
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
    const faq = await axios.get( FAQ_API_URL )
        .then( ( res ) => {
            return res.data
        } ).catch( ( err ) => {
            return err
        } )
    return {
        props:
        {
            faq
        }
    }
}




const Faq = ( { faq } ) => {

    return (
        <div>
            <Head>
                <title>Alura Case | FAQ </title>
            </Head>
            <header>
                <h1>FAQ</h1>
            </header>
            <LINK href='/'>
                VOLTAR PRA HOME
            </LINK>
            <ul>
                {faq.map( ( { answer, question } ) => (
                    <li key={question}>
                        <article>
                            <h2>{question}</h2>
                            <p>{answer}</p>
                        </article>

                    </li>
                ) )}
            </ul>
        </div>
    )
}

export default Faq