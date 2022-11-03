import React, { useState } from 'react'

const MultiplosItensSelecionados = () => {

    const [cores, setCores] = useState( ['azul', 'vermelho'] )

    const handleChange = ( { target } ) => {

        if ( target.checked ) {

            setCores( [...cores, target.value] )
        } else {
            setCores( cores.filter( ( cor ) => cor !== target.value ) )

        }

    }

    console.log( cores );

    /*
    
    criando uma função para verificar se a cor já está selecionada por padrão
    
        const colorCheck = (cor) => {
            return cores.includes(cor)
        }
    
        checked={colorCheck}
    
    
    
        ou 
        checked={cores.includes('nomeDaCor')}
        
    */


    return (

        <form>

            <label>

                <input

                    type={"checkbox"}
                    value={"azul"}
                    onChange={handleChange}
                    checked={cores.includes( 'azul' )}

                />
                Azul

            </label>

            <label>

                <input

                    type={"checkbox"}
                    value={"vermelho"}
                    onChange={handleChange}
                    checked={cores.includes( 'vermelho' )}

                />
                vermelho

            </label>

        </form>
    )
}

export default MultiplosItensSelecionados