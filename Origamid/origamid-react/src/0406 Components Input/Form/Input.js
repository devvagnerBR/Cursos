import React, { Fragment } from 'react'

const Input = ({ id, label, onChange, value, type, onBlur, placeholder, error }) => {


    return (

        <Fragment>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} name={id} value={value} onChange={onChange} placeholder={placeholder} onBlur={onBlur} />
            {error && <p>{error}</p>}
        </Fragment>
    )

}

export default Input

