import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss'
import React from 'react'
import { Itarefa } from '../types/tarefa';


function App() {

  const [tarefas, setTarefas] = React.useState<Itarefa[] | []>( [] )

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
