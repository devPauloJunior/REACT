import React, { useState } from 'react'

const ConditionalRender = () => {
    const [x] = useState(false)
    const [name, setName]  = useState('João')
  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se X for igual a TRUE.</p>}
        {!x && <p>Se X for igual a FALSE.</p>}
        <hr />
        {name === 'Paulo' ? (
            <div>
                <h4>Eu me chamo Paulo</h4>
            </div>
        ) : (
            <div>
                <h4>Nome não econtrado!</h4>
            </div>
        )}
        <button type="button" onClick={() => setName('Paulo')}>Alterar Nome</button>
    </div>
  )
}

export default ConditionalRender