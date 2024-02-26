import { useState } from 'react'
import './App.css'
import  logo from './assets/images/rick-sanchez.png'
import { useFetch } from './../../http-react/src/hooks/useFetch';

function App() {
  const url = "https://rickandmortyapi.com/api/character/636"

  const { data: item, error } = useFetch(url)

  return (
    <>
      <h1>The Rick and Morty</h1>
      <img src={logo} alt="Rick Sanchez" />
      { error && <p>{ error }</p> }
      { item && 
        <div>
          <img src={ item.image } alt="" />
          <h2>{ item.name }</h2>
          <p>{ item.status } - { item.species }</p>
          <h3>Last now location:</h3>
          <p>{ item.location.name }</p>
          <h3>Frist seen in:</h3>
        </div>
      }
    </>
  )
}

export default App
