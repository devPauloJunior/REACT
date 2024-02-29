import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <aside>
      <nav>
          <NavLink 
            to='/'
            className={({isActive}) => (isActive ? "active": undefined)}
          >Home</NavLink>
          <NavLink 
            to='/contact'
            className={({isActive}) => (isActive ? "active": undefined)}
          >Contact</NavLink>
          <NavLink 
            to='/about'
            className={({isActive}) => (isActive ? "active": undefined)}
          >Sobre Nós</NavLink>
      </nav>
    </aside>
  )
}

export default Navbar