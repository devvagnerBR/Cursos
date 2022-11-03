import React, { Fragment, useState } from "react";


const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza']









const CheckBoxAtividades = () => {

    const [cores, setCores] = useState(['azul', 'vermelho'])

    const handleChange = ({ target }) => {
        if (target.checked) {
            setCores([...cores, target.value]);

        } else {
            setCores(cores.filter((cor) => cor !== target.value))
        }
    }


    return (

        <form>
            {coresArray.map((cor,index) => {

                return (
                    <label key={cor} style={{textTransform:'capitalize'}}>
                        <input

                            type={'checkbox'} value={cor + index} checked={cores.includes(cor + index)}
                            onChange={handleChange}

                        />
                        {cor}

                    </label>
                )
            })}

        </form>

    )
}

export default CheckBoxAtividades