import React from 'react'
import './Header.css'
import NavBar from './Navbar'

const Header = (props) => {
  return (
    <header className='header-class'>
      <h1>MeuSite</h1>
      <NavBar />
    </header>
  )
}

export default Header