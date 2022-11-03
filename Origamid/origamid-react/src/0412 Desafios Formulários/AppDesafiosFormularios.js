import React, { useState } from 'react'
import RadioDesafio from './Form/RadioDesafio'

// const perguntas = [

//     {
//         pergunta: 'Qual método é utilizado para criar componentes?',
//         options: [
//             'React.makeComponent()',
//             'React.createComponent()',
//             'React.createElement()',
//         ],
//         resposta: 'React.createElement()',
//         id: 'p1',
//     },
//     {
//         pergunta: 'Como importamos um componente externo?',
//         options: [
//             'import Component from "./Component"',
//             'require("./Component")',
//             'import "./Component"',
//         ],
//         resposta: 'import Component from "./Component"',
//         id: 'p2',
//     },
//     {
//         pergunta: 'Qual hook não é nativo?',
//         options: ['useEffect()', 'useFetch()', 'useCallback()'],
//         resposta: 'useFetch()',
//         id: 'p3',
//     },
//     {
//         pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
//         options: ['set', 'get', 'use'],
//         resposta: 'use',
//         id: 'p4',
//     },

// ];
const perguntas = [

    {
        pergunta: 'Qual o campeão preferido do seu amigo Wagner?',
        options: [
            'Shaco',
            'Wukong',
            'Neeko',
        ],
        resposta: 'Shaco',
        id: 'p1',
    },
    {
        pergunta: 'Qual o nome do sexto dedo da Yasmin?',
        options: [
            'Clovis',
            'Sebastião',
            'Washington',
        ],
        resposta: 'Washington',
        id: 'p2',
    },
    {
        pergunta: 'Qual o sabor do picolé de Morango?',
        options: ['Uva', 'Goiaba', 'Morango'],
        resposta: 'Uva',
        id: 'p3',
    },
    {
        pergunta: 'Qual o leite perfeito pra quem quer viver mais?',
        options: ['Mi nha Pi kha', 'Longa vida', 'Jegue'],
        resposta: 'Longa vida',
        id: 'p4',
    },

];

const AppDesafiosForm = () => {
    const [slide, setSlide] = React.useState(0)
    const [resultado, setResultado] = React.useState(null)
    const [respostas, setRespostas] = React.useState({

        p1: '',
        p2: '',
        p3: '',
        p4: ''

    })

    const handleChange = ({ target }) => {
        setRespostas({ ...respostas, [target.id]: target.value })
    }

    const resultadoFinal = () => {

        const corretas = perguntas.filter(
            ({ id, resposta }) => respostas[id] === resposta)

        setResultado(`Você acertou: ${corretas.length} de ${perguntas.length} `)
    }

    const handleClick = () => {
        if (slide < perguntas.length - 1) {
            setSlide(slide + 1)
        } else {
            setSlide(slide + 1)
            resultadoFinal()

        }
    }



        const quests =   perguntas.map((certas) => {
            return (
                <>
                    <h6>{certas.pergunta}</h6>
                    <p style={{ color: 'green', fontWeight: '700' }}>{certas.resposta}</p>
                </>
            )
        })


    return (

        <form onSubmit={(event) => event.preventDefault()}>

            {perguntas.map((pergunta, index) => {

                return (

                    <RadioDesafio
                        active={slide === index}
                        key={pergunta.id}
                        {...pergunta}
                        onChange={handleChange}
                        value={respostas[pergunta.id]}
                    />

                )
            })}

            {resultado ? <div> <p>{resultado}</p> <h4 style={{color: 'Orange', fontSize: '30px'}}>TODAS AS RESPOSTAS</h4> {quests}  </div>  : <button onClick={handleClick}>Next</button>} 
        </form>
    )
}

export default AppDesafiosForm