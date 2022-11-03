import React from 'react'
import { Link } from 'react-router-dom'
import Head from './Head'
import styles from './Produtos.module.css'

const Produtos = () => {

    const [produtos, setProdutos] = React.useState(null)


    React.useEffect(() => {


        fetch('https://ranekapi.origamid.dev/json/api/produto')

            .then((r) => r.json())
            .then((json) => setProdutos(json))

    }, [])

    if (produtos === null) {
        return null;

    } else {

        return (

            <section className={`${styles.produtos} animeLeft`}>
                <Head title={`DevLovers 🌈`} description={`Descrição do site DevLovers 🌈`} />

                {produtos && produtos.map((produto) => (

                    <Link to={`produto/${produto.id}`} key={produto.id}>
                        <h1 className={styles.nome}>{produto.nome}</h1>
                        <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
                    </Link>

                ))}
            </section>

        )
    }

}

export default Produtos