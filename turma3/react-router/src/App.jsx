import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import Search from './pages/Search'
import { SearchForm } from './components/SearchForm'

function App() {
  return (
    <>
      <h1>React - Router</h1>
      <BrowserRouter>
        <Navbar />
        <SearchForm />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/Product/:id' element={<Product />} />
          <Route path="/search" element={<Search />} />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
