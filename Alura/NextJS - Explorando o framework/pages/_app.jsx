import Head from 'next/head'
import '../styles/global.css'

const MyApp = ( { Component, pageProps } ) => {
    return (
        <>
            <Head>
                         <title>ALO DOÇURA</title>
            </Head>
            <Component {...pageProps} />
        </>


    )
}


export default MyApp