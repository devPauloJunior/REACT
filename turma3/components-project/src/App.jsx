import { useState } from 'react'
import './App.css'
import logo from "./assets/images/react.png"

// Meus Componentes
import FirstComponent from './components/firstComponent'
import SecondComponent from './components/secondComponent'
import EventClick from './components/eventClick'
import MessageState from './components/MessageState'
import ExecuteFunction from './components/ExecuteFunction'

function App() {
  const [count, setCount] = useState(0)

  const [message, setMessage] = useState('')

  const handleMessage = (msg) =>  {
    setMessage(msg)
  }

  return (
    <>
      <div className='App'>
        {/* Comentario */}
        <h1>Componentes</h1>
        <FirstComponent />
        <SecondComponent />
        <EventClick />
        {/* Imagem da PUBLIC */}
        <img src="/react-icon.png" width="200" heigth="200" alt="Imagem da Public" />
        {/* Imagem importada */}
        <img src={logo} width="300" heigth="300" alt="Imagem Importada" />
        <MessageState msg={message} />
        <ExecuteFunction handleMessage={handleMessage} />
      </div>
    </>
  )
}

export default App
