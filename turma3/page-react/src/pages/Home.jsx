import React from 'react'
import './Home.css'
import Main from '../components/Main'

const Home = () => {
  return (
    <>
      <Main title="Inicio" subtitle="Projeto sem internet. versão 1.0">
        <div>
          Bem Vindo!
        </div>
        <hr />
        <p>Sistema de integração de conhecimento.</p>
      </Main>
    </>
  )
}

export default Home