import React from 'react'

const CarDetails = ({brand, Km, color, newCar}) => {
  return (
    <div>
        <h3>Detalhes do carro:</h3>
        <ul>
            <li>Marca: {brand} </li>
            <li>Km: {Km} </li>
            <li>Cor: {color} </li>
        </ul>
        {newCar && <p>Este carro é novo!</p>}
    </div>
  )
}

export default CarDetails