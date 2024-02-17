import { useState } from 'react'
import './App.css'

// Meus componentes
import MyCssComponent from './components/MyCssComponent'
import Title from './components/Title'


function App() {
  const [count, setCount] = useState(0)
  const fator = 9
  const goldTitle = false

  return (
    <>
      {/* CSS GLOBAL */}
      <h1>CSS GLOBAL</h1>
      {/* CSS COMPONENT */}
      <MyCssComponent />
      <p>Esse é o parágrafo do APP.</p>
      {/* CSS INLINE */}
      <p style={{ 
        color: 'white',
        fontSize: '38px',
        border: 'none', 
        padding: '25px', 
        borderTop: '3px solid red' 
      }}>
        Esse elemento tem CSS STYLE
      </p>
      <p style={{ 
        color: 'white',
        fontSize: '38px', 
        border: 'none', 
        padding: '25px', 
        borderTop: '3px solid red' 
      }}>
        Esse elemento tem CSS STYLE
      </p>
      {/* CSS INLINE DINAMICO */}
      <p style={fator < 10 ? {color: 'gold', fontSize: 18} : { color: 'pink', fontSize: 22 }}>Esse CSS é DINAMICO</p>
      <p style={fator > 10 ? {color: 'gold', fontSize: 18} : { color: 'pink', fontSize: 22 }}>Esse CSS é DINAMICO</p>
      {/* CSS CLASS DINAMICO */}
      <h2 className={goldTitle ? 'gold-title' : 'red-title'}>Esse titulo é alterado por uma classe</h2>
      {/* CSS MODULE */}
      <Title>
        
      </Title>
    </>
  )
}

export default App
