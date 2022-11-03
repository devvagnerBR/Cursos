import React from 'react'
import { useParams, NavLink, Outlet } from 'react-router-dom'


const Produto = () => {

  const params = useParams()
  // const location = useLocation()
  // const search = new URLSearchParams(location.search)

  return (
    <div>
      <h1>PRODUTO: {params.id}</h1>

      <nav>
        <NavLink to={''} end>Descrição</NavLink>
        <NavLink to={'avaliacao'} end>Avaliação</NavLink>
        <NavLink to={'customizado'} end>Descrição</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default Produto

