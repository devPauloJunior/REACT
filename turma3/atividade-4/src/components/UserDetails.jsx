import React from 'react'

const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
        <h2>Detalhes do Usuário:</h2>
        <ul>
            <li>Nome: {nome}</li>
            <li>Idade: {idade}</li>
            <li>Profissão: {profissao}</li>
            <li>Voto: {idade >= 18 ? 'SIM' : 'NÃO' }</li>
        </ul>
    </div>
  )
}

export default UserDetails