import { Itarefa } from '../../types/tarefa'
import Item from './Item/index'
import style from './Lista.module.scss'



const Lista = ( { tarefas }: {tarefas: Itarefa[]} ) => {

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map( ( item, index ) => (
                    <Item key={index} {...item} />
                ) )}
            </ul>
        </aside>
    )
}

export default Lista