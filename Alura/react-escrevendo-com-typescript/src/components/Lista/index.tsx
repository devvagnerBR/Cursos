import React from 'react'
import Item from './Item/index'
import style from './Lista.module.scss'

const Lista = () => {

    const [tarefas, setTarefas] = React.useState( [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'Javascript',
        tempo: '01:30:00'
    },
    {
        tarefa: 'Typescript',
        tempo: '03:00:00'
    }] )

    return (
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
                console.log( `H2 CLICADO:`, tarefas );
                setTarefas( [...tarefas, { tarefa: 'Estudar Estado', tempo: '05:00:00' }] )
            }}>Estudos do dia</h2>
            <ul>
                {tarefas.map( ( item, index ) => (
                    <Item key={index} {...item} />
                ) )}
            </ul>
        </aside>
    )
}

export default Lista