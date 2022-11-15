import Botao from "../Botao"
import Relogio from "./Relogio"
import style from './Cronometro.module.scss'
import { tempoParaSegundos } from "../../common/utils/time";
import { Itarefa } from "../../types/tarefa";
import React from 'react'

interface Props {
    selecionado: Itarefa | undefined
}

const Cronometro = ( { selecionado }: Props ) => {
    const [tempo, setTempo] = React.useState<number>()

    React.useEffect( () => {
        if ( selecionado?.tempo ) {
            setTempo( tempoParaSegundos( selecionado.tempo ) )
        }
    }, [selecionado] )



    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um Card e inicie o cronômetro </p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao>COMEÇAR</Botao>
        </div>
    )
}

export default Cronometro



