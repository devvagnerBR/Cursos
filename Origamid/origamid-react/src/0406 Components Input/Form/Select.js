import React from 'react'

const Select = ({ options, value, setValue, ...props }) => {

    return (



        <select value={value} onChange={({ target }) => setValue(target.value)}>

            <option value={''} disabled>Selecione</option>

            {options.map((opt) => (

                <option
                    key={opt}
                    value={opt}
                >{opt}
                </option>
            ))}

        </select>

    )
}

export default Select

