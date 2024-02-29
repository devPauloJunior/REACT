import { useState } from 'react'
// import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer';
import About from './pages/About'
function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
