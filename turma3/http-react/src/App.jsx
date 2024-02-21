import './App.css'
import { useState, useEffect } from 'react'

import { useFetch } from './hooks/useFetch'

const url = 'http://localhost:3000/products'

function App() {
  const [ products, setProducts ] = useState([])
  const { data: items, httpConfig, error } = useFetch(url)
  const [ name, setName ] = useState('')
  const [ price, setPrice ] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price,
    }

    httpConfig(product, 'POST')
    setName('')
    setPrice('')
  }

  const handleRemove = (id) => {
    httpConfig(id, 'DELETE')
  }

  return (
    <>
      <h1>Lista de Produtos</h1>
      {error && <p>{ error }</p>}

      <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            { product.name } - R${ product.price }
            <button type="button" onClick={() => handleRemove(product.id)}>Deletar</button>
          </li>
        ))}
      </ul>
      <div>
        <p>Adicionar Produto:</p>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input 
              type="text"
              value={name}
              name='name'
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input 
              type="number"
              value={price}
              name='price'
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <input type="submit" value="Criar" />
        </form>
      </div>
    </>
  )
}

export default App
