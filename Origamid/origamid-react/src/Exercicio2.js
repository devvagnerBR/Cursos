import { Fragment } from "react"

const Exercicio2 = () => {
    const dayNow = new Date().getDate()
    const monthNow = new Date().getMonth()
    const yearNow = new Date().getFullYear()
    const today = `${dayNow}/${monthNow}/${yearNow}`

    const ativo = true

    const estiloAtivo = {
        color: "red",
        fontSize: "30px"
    }
    const estiloInativo = {
        color: "blue",
        fontSize: "30px"
    }


    return (
        <Fragment>
            <h1>{today}</h1>
            <p style={ativo ? estiloAtivo : estiloInativo}>Estamos em {today}</p>
        </Fragment>

    )

}

export default Exercicio2