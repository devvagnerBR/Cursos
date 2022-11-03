import React from 'react'
import styled from 'styled-components'

const Preco = styled.p`
background-color: ${( { cor } ) => cor};
color: white;
`;

const Comprar = styled.button`
background-color: ${( { ativo } ) => ativo ? '#000' : '#fff'};
font-size: 1rem;
border: 2px solid #000;
border-radius: 5px;
padding: 0.5rem;
color: ${( { ativo } ) => ativo ? '#fff' : '#000'};
cursor: pointer;
&:hover{
    background: tomato ;
}
`;


const AppStyled = () => {

    const [ativo, setAtivo] = React.useState( false )

    const handleClick = () => {
        setAtivo( !ativo )
    }

    return (
        <div>
            <Comprar ativo={ativo} onClick={handleClick}>Compre Aqui</Comprar>
            <Preco cor="#54d956">Preço</Preco>
            <Preco cor="#84e">Preço</Preco>
        </div>
    )
}

export default AppStyled