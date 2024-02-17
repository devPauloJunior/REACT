import React from 'react'

const ShowUserName = (props) => {
  return (
    <div>
        <h2>
            O seu nome de usuário é: { props.name } 
        </h2>
    </div>
  )
}

export default ShowUserName