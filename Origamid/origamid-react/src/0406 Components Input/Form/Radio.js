import React, { Fragment } from 'react'







export const Radio = ({ options, value}) => {


    return (

        <Fragment>

            {options.map((opt) =>
                <label key={opt}>
                    <input type={'radio'}  value={opt} checked={value === opt}/>
                    {opt}
                </label>
            )}

        </Fragment>
    )

}
