import React from 'react'

const ExecuteFunction = ({myFunction}) => {
  return (
    <div>
        <button type="button" onClick={myFunction}>Clique para executar a função</button>
    </div>
  )
}

export default ExecuteFunction