import React, { Fragment, useState } from 'react'

const InputsTogether = () => {

    const [form, setForm] = useState({

        nome: '',
        email: ''

    })




    const handleChange = ({target}) => {

        const {id, value} = target
        console.log(id, value);
        setForm({...form, [id]: value})

    }



    

    return (


        <form>

            <label>Nome</label>
            <input

            id='nome'
            type='text'
            name='nome'
            value={form.nome}
            onChange={handleChange}

            />

            <label>Email</label>
            <input

            id='email'
            type='text'
            name='email'
            value={form.email}
            onChange={handleChange}

            />

        </form>


    )
}

export default InputsTogether