import { Fragment, useState, useEffect } from "react";
import React from 'react'
import Produtos from "./Produtos";




const Index = () => {

  const [produto, setProduto] = useState(null)



  useEffect(() => {

    const produtoLocal = window.localStorage.getItem('produto')
    if (produtoLocal !== null) setProduto(produtoLocal)

  }, [])


  useEffect(() => {

    if (produto !== null) {

      window.localStorage.setItem('produto', produto)

    }

  }, [produto])




  const handleClick = ({ target }) => {
    setProduto(target.innerText)
  }









  return (

    <Fragment>

      <h1>Preferência: {produto}</h1>
      <button onClick={handleClick} style={{ marginRight: '1rem' }}> notebook </button>
      <button onClick={handleClick}> smartphone </button>
      < Produtos produto={produto}/>

    </Fragment>

  )
}

export default Index


