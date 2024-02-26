import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
        <NavLink 
          to='/'
          className={({isActive}) => (isActive ? "active": undefined)}
        >Home</NavLink>
        <NavLink
          to='/About'
          className={({isActive}) => (isActive ? "active": undefined)}
        >Sobre Nós</NavLink>
        <NavLink 
          to='/Products'
          className={({isActive}) => (isActive ? "active": undefined)}
        >Produtos</NavLink>
    </nav>
  )
}

export default Navbar