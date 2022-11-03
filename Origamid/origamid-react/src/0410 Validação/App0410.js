import React from 'react'
import Input from '../0406 Components Input/Form/Input'
import useForm from './Hooks/useForm'

const App0410 = () => {

    const cep = useForm('cep')
    const email = useForm('email')
    const nome = useForm()
    const sobrenome = useForm(false)


    const handleSubmit = (event) => {
        
        event.preventDefault()
        if (cep.validate() && email.validate() && nome.validate()) {
            console.log('enviar');
        } else {
            console.log('Não enviar');
        }
    }


    return (

        <form onSubmit={handleSubmit}>

            <Input

                label={'Nome'}
                id={'Nome'}
                type='text'
                placeholder={'Seu nome  😍'}
                {...nome}
            />
            <Input

                label={'Sobrenome'}
                id={'sobrenome'}
                type='text'
                placeholder={'Seu sobrenome 😍'}
                {...sobrenome}
            />

            <Input

                label={'CEP'}
                id={'cep'}
                type='text'
                placeholder={'00000-000'}
                {...cep}
            />

            <Input

                label={'E-mail'}
                id={'email'}
                type='email'
                placeholder={'email@email.com'}
                {...email}
            />


            <button>Enviar</button>
        </form>


    )
}

export default App0410