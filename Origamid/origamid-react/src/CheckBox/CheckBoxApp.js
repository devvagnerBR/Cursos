import React, { Fragment, useState } from 'react'

const CheckBoxApp = () => {

    const [termos, setTermos] = useState(false)



    const handleChange = ({ target }) => {
        setTermos(target.checked)
    }


    return (

        <Fragment>
            <h1>{termos}</h1>

            <form>

                {termos ? <p> Aceitou os termos</p> : null}

                <label>

                    <input

                        type="checkbox"
                        onChange={handleChange}
                        value="Termos"
                        checked={termos}

                    />
                    Aceito os Termos
                </label>


            </form>
        </Fragment>

    )
}

export default CheckBoxApp