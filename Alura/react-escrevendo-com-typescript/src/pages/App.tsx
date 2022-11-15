import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss'
import React from 'react'
import { Itarefa } from '../types/tarefa';


function App() {

  const [tarefas, setTarefas] = React.useState<Itarefa[] | []>( [] )
  const [selecionado, setSelecionado] = React.useState<Itarefa>()

  const selecionaTarefa = ( tarefaSelecionada: Itarefa ) => {
    setSelecionado( tarefaSelecionada )
    setTarefas( tarefasAnteriores => tarefasAnteriores.map( tarefa => ( {
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
      
    } ) ) )
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />

      <Lista
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro selecionado={selecionado} />
    </div>
  );
}

export default App;
