import './style.scss'
const Lista = () => {

    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'Javascript',
        tempo: '01:30:00'
    },
    {
        tarefa: 'Typescript',
        tempo: '03:00:00'
    }]

    return (
        <aside className='listaTarefas'>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map( ( tarefa, index ) => {
                    return (
                        <li key={index} className='item'>
                            <h3>{tarefa.tarefa}</h3>
                            <span>{tarefa.tempo}</span>
                        </li>
                    )
                } )}
            </ul>
        </aside>
    )
}

export default Lista