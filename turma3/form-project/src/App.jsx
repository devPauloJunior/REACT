import { useState } from 'react'
import './App.css'

// Meus Componentes
import MyForm from './components/MyForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>FORM - PAGE</h1>
     <hr />
     <MyForm user={{ nome: 'Roberto', email: 'roberto@teste.com.br', bio: 'Eu sou vendedor de livros e revistas.', role: 'dev' }} />
    </>
  )
}

export default App
