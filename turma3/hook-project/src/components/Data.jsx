import React, { useState } from 'react'

export const Data = () => {
    let someData = 10

    const [anotherNumber, setAnotherNumber] = useState(10)
    console.log(anotherNumber)
    return (
    <div>
        <div>
            <p>Valor: { someData }</p>
            <button type='button' onClick={() => (someData = 15)}>Mudar Valor</button>
        </div>
        <div>
            <p>valor: {anotherNumber}</p>
            <button type='button' onClick={() => setAnotherNumber(20)}>Mudar valor</button>
        </div>
    </div>
    )
}