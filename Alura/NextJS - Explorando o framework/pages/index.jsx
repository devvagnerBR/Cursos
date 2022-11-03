import React from 'react'
import Head from 'next/head'
import LINK from '../src/components/Link/Link'
import styles from '../styles/Homepage.module.css'


const HomePage = () => {

    const CurrentDate = () => {
        let atual_ = new Date( Date.now() )
        const today_ = atual_.toLocaleTimeString( 'pt-BR' )
        return today_
    }
    

    return (
        <div className={styles.homepage_container} >
            <Head>
                <title>Alura Case | {CurrentDate()} </title>
            </Head>
            <header>
                <LINK href={'quem'}>QUEM SOMOS</LINK>
                <LINK href={'quem'}>LOGIN</LINK>
                <LINK href={'quem'}>CRIAR CONTA</LINK>
            </header>
            <LINK href={'/faq'} >  IR PARA O FAQ  </LINK>

        </div>
    )
}

export default HomePage