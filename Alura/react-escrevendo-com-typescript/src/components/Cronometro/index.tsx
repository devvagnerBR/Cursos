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

    const regressiva = ( contador: number = 0 ) => {
        setTimeout( () => {
            if ( contador > 0 ) {
                setTempo( contador - 1 )
                return regressiva( contador - 1 )
            }

        }, 1000 )
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um Card e inicie o cronômetro </p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao onClick={() => regressiva( tempo )}>COMEÇAR</Botao>
        </div >
    )
}

export default Cronometro



