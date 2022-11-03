import React from 'react'
import Exemplo from './Exemplo'



const reducer = (state, action) => {


    switch (action) {

        case 'AUMENTAR':
            return state + 1
        case 'DIMINUIR':
            return state - 1
        default:
            throw new Error('Error 404')

    }



    // if (action === 'aumentar') {
    //     return state + 1
    // }

    // if (action === 'diminuir') {
    //     return state + 1
    // }

    // return new Error('Error action não existe')

}





const AppReducer = () => {

    const [state, dispatch] = React.useReducer(reducer, 0)



    return (

        <div>

            <p>{state}</p>

            <button onClick={() => dispatch('DIMINUIR')} >-1</button>
            <button onClick={() => dispatch('AUMENTAR')} >+1</button>

            <Exemplo />

        </div>

    )
}

export default AppReducer