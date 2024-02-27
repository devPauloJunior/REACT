import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [imagens, setImagens] = useState([])

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
    .then((res) => res.json())
    .then((json) => {
      setImagens(json)
    .catch((err) => console.log(err))
    })
  }, [])

  return (
    <>
      {imagens && imagens.map((imagem) => (
        <img key={imagem.id} src={imagem.url} width={imagem.width} heigth={imagem.heigth} />
      ))}
    </>
  )
}

export default App
