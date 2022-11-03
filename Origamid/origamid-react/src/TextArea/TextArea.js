import React, { Fragment, useState } from 'react'

const TextArea = () => {

    const [textArea, setTextArea] = useState('')
    const [select, setSelect] = useState('')
    const [produto, setProduto] = useState('')



    const onChangeSelect = ({ target }) => {
        setSelect(target.value)
    }

    const handleChange = ({target}) => {
        setProduto(target.value)
    }



    return (


        <form>

            <textarea

                value={textArea}
                rows="1"
                onChange={({ target }) => setTextArea(target.value)}

            />

            <label> Produtos </label>

            <select
                value={select}
                id='produtos'
                onChange={onChangeSelect}>

                <option disabled value="">Nenhum</option>
                <option value='smartphone'>Smartphone</option>
                <option value='notebook'>Notebook</option>
                <option value='tablet'>Tablet</option>

            </select>

            {textArea}
            <h4>{select}</h4>
            {produto}

            <label>
                <input type='radio'
                       value='smartphone'
                       name='produto'
                       onChange={handleChange} />
                Smartphone
            </label>

            <label>
                <input type='radio'
                       value='notebook'
                       name='produto'
                       onChange={handleChange}
                       />
                Notebook
            </label>

            <label>
                <input type='radio'
                       value='tablet'
                       checked={produto === 'tablet'}
                       onChange={handleChange}
                       />
                Tablet
            </label>


        </form>






    )
}

export default TextArea