import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [ nome, setNome ] = useState('Paulo')
  const [ sobreNome, setSobreNome ] = useState('Sousa')


  useEffect(() => {
    console.log('useEffect com dependencia vazia')
  }, [])

  useEffect(() => {
    console.log('useEffect com dependencia do {nome}')
  }, [nome])

  useEffect(() => {
    console.log('useEffect sem dependencia')
  })

  console.log('renderizado')

  const handleNome = () => {
    setNome('Junior')
  }

  const handleSobreNome = () => {
    setSobreNome('Junior')
  }

  return (
    <>
    {nome}
    <button type='button' onClick={handleNome}>Alterar Nome</button>
    <br /><br />
    {sobreNome}
    <button type='button' onClick={handleSobreNome}>Alterar Sobrenome</button>
    </>
  )
}

export default App
