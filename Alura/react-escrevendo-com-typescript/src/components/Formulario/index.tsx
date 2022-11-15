import React from 'react'
import { Itarefa } from '../../types/tarefa'
import Botao from '../Botao'
import style from './Formulario.module.scss'
import { v4 as uuidv4 } from 'uuid'

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
}> {

    state = {
        tarefa: '',
        tempo: ''
    }
    AdicionarTarefa( event: React.FormEvent<HTMLFormElement> ) {
        event.preventDefault()
        this.props.setTarefas( tarefasAntigas =>
            [
                ...tarefasAntigas,
                {
                    ...this.state,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        )
        this.setState( { tarefa: '', tempo: '' } )
    }

    render() {
        return (
            <form onSubmit={this.AdicionarTarefa.bind( this )} className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor='tarefa'>
                        Adicione um novo
                    </label>
                    <input
                        type='text'
                        name='tarefa'
                        value={this.state.tarefa}
                        onChange={( e ) => this.setState( { ...this.state, tarefa: e.target.value } )}
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
                        value={this.state.tempo}
                        onChange={( e ) => this.setState( { ...this.state, tempo: e.target.value } )}
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
}

export default Formulario