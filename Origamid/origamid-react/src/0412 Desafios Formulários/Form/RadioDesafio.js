import React from 'react'

const RadioDesafio = ({ pergunta, options, onChange, id, value, active }) => {


    if (active === false) {
        return null
    }

    return (

        <fieldset style={{ padding: '2rem', marginBottom: '1rem', border: '2px solid #eee' }}>

            <legend style={{ fontWeight: 'bold' }}>{pergunta}</legend>
            {options.map((option) => {
                return (

                    <label key={option} style={{ marginBottom: '1rem', fontFamily: 'monospace' }}>

                        <input type={'radio'} checked={value === option} value={option} onChange={onChange} id={id} />
                        {option}

                    </label>
                )
            })}

        </fieldset>
    )
}

export default RadioDesafio