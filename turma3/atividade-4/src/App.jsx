import { useState } from 'react'
import './App.css'
import UserDetails from './components/UserDetails';

function App() {
  const usuarios = [
    { id: 1, nome: "Paulo", idade: 29, profissao: 'Professor' },
    { id: 2, nome: "Ana", idade: 18, profissao: 'Venderdora' },
    { id: 3, nome: "Debora", idade: 10, profissao: 'Estudante' },
    { id: 4, nome: "Levi", idade: 9, profissao: 'Gamer' },
  ];

  return (
    <>
      {usuarios.map((usuario) => (
        <UserDetails
          key={usuario.id}
          nome={usuario.nome}
          idade={usuario.idade}
          profissao={usuario.profissao}
        />
      ))}
    </>
  )
}

export default App
