import React from 'react'




const reducer = (state, action) => {

    switch (action.type) {

        case 'remover':
            return state.filter((item) => item !== action.content)
        case 'adicionar':
            return [...state, action.content]
        default:
            throw new Error()

    }

}

function Exemplo() {

    const [state, dispatch] = React.useReducer(reducer, ['Banana', 'Uva', 'Kiwi', 'Morango'])
    const [text, setText] = React.useState('')

    const onChange = ({ target }) => {
        setText(target.value)
    }

    const mapDoState = state.map((item) => {
        return <p key={item}>{item}</p>
    })

    return (


        <div >

            <input onChange={onChange} type={'text'} placeholder="fale uma fruta" />

            <button onClick={() => dispatch({ type: 'remover', content: 'Banana' })} >Remover Banana</button>
            <button onClick={() => dispatch({ type: 'adicionar', content: 'Limão' })} >Adicionar Limão</button>

            <button onClick={() => dispatch({ type: 'adicionar', content: text })} >Add</button>
            <button onClick={() => dispatch({ type: 'remover', content: text })} >Remover</button>

            {mapDoState}
        </div>
    )
}


export default Exemplo