import React from 'react'

const ExecuteFunction = ({ handleMessage }) => {
    const messages = ['Boa noite', 'Boa tarde', 'Bom dia']
  return (
    <div>
        <button type='button' onClick={() => handleMessage(messages[0])}>1</button>
        <button type='button' onClick={() => handleMessage(messages[1])}>2</button>
        <button type='button' onClick={() => handleMessage(messages[2])}>3</button>
    </div>
  )
}

export default ExecuteFunction