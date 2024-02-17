import React from 'react'

const eventClick = () => {
  // Função do Evento de Click
  const handleEventClick = (e) => {
    console.log(e)
    console.log('ativou o evento')
  }

  const renderAlgumaCoisa = (x) => {
    if (x) {
      return <h1>Isso foi renderizado</h1>
    } else {
      return <h1>Isso também foi renderizado</h1>
    }
  }

  return (
    <div>
        <button type="button" onClick={
          () => console.log('Clique de evento')
          }
        >Clique Aqui</button>
        <hr />
        <button type='button' onClick={handleEventClick}>Clique Aqui 2</button>
        <hr />
        {renderAlgumaCoisa(true)}
        <hr />
        {renderAlgumaCoisa(false)}
    </div>
  )
}

export default eventClick