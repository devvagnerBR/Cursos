import React, { useState } from "react";

const formFields = [

    {

        id: 'nome',
        label: 'Nome',
        type: 'text'

    },
    {

        id: 'email',
        label: 'Email',
        type: 'email'

    },
    {

        id: 'senha',
        label: 'Senha',
        type: 'password'

    },
    {
        id: 'cep',
        label: 'CEP',
        type: 'text'

    },
    {

        id: 'numero',
        label: 'Número',
        type: 'number'

    },
    {

        id: 'rua',
        label: 'Rua',
        type: 'text'

    },
    {
        id: 'bairro',
        label: 'Bairro',
        type: 'text'
    },
    {

        id: 'cidade',
        label: 'Cidade',
        type: 'text'

    },
    {

        id: 'estado',
        label: 'Estado',
        type: 'text'

    }

]

const MeuOrigamidInputs = () => {

    const [form, setForm] = useState({

        nome: '',
        email: '',
        senha: '',
        cep: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: ''

    })

    const [response, setResponse] = useState(null)

    const handleChange = ({ target }) => {

        const { id, value } = target
        setForm({ ...form, [id]: value })
    }

    const handleSubmit = (event) => {

        event.preventDefault()
        fetch('https://ranekapi.origamid.dev/json/api/usuario',

            {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)

            }).then((response) => {
                setResponse(response);
            })

    }

    return (

        <form onSubmit={handleSubmit}>

            {formFields.map(({ id, label, type }) => {

                return (

                    <div key={id}>

                        <label htmlFor={id}>{label}</label>
                        <input type={type} id={id} value={form[id]} onChange={handleChange} />

                    </div>
                )
            })}


            {response && response.ok && <p>Formulário Enviado</p>}
            <button onSubmit={handleSubmit}>Enviar Dados</button>

        </form>
    )

}

export default MeuOrigamidInputs