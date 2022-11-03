import React, { Fragment } from 'react'
import Button from './Button'
import Input from './Input'

const Form = () => {
    
    return (
        <Fragment>
            
            <Input id="email" label="Email" required/>
            <Input id="senha" type="password" label="Senha"/>
            <Button/>

        </Fragment>
    )
}

export default Form