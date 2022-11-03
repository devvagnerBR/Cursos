import React, { Fragment, useState } from 'react'
import Input from './Input'
import { Radio } from './Radio'
import Select from './Select'

const Origamid0406 = () => {

    const [nome, setNome] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [produto, setProduto] = React.useState('')
    const [cor, setCor] = React.useState('')


    return (
        <form>

            <Input id='nome' label='Nome' value={nome} setValue={setNome} />
            <Input id='email' label='Email' value={email} setValue={setEmail} required />
            <Select options={['Smartphone', 'Tablet', 'Pilha']} value={produto} setValue={setProduto} />
            <button>Enviar</button>
            <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />

        </form>
    )
}

export default Origamid0406

