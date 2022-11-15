import React from 'react'
import { Itarefa } from '../../types/tarefa'
import Botao from '../Botao'
import style from './Formulario.module.scss'
import { v4 as uuidv4 } from 'uuid'



interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
}
const Formulario = ( { setTarefas }: Props ) => {

    const [tarefa, setTarefa] = React.useState( '' )
    const [tempo, setTempo] = React.useState( '00:00' )

    const AdicionarTarefa = ( event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault()
        setTarefas( tarefasAntigas =>
            [
                ...tarefasAntigas,
                {
                    tarefa,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        )
        setTarefa( '' )
        setTempo( '00:00' )
    }
    return (
        <form onSubmit={AdicionarTarefa} className={style.novaTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor='tarefa'>
                    Adicione um novo
                </label>
                <input
                    type='text'
                    name='tarefa'
                    value={tarefa}
                    onChange={( e ) => setTarefa( e.target.value )}
                    id='tarefa'
                    placeholder='O que vê quer estudar'
                    required
                />
            </div>

            <div className={style.inputContainer}>
                <label htmlFor='tempo'>
                    Tempo
                </label>

                <input
                    type='time'
                    step='1'
                    name='tempo'
                    value={tempo}
                    onChange={( e ) => setTempo( e.target.value )}
                    id='tempo'
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
                <Botao type={`submit`}>ADICIONAR</Botao>
            </div>

        </form>
    )
}






export default Formulario