import { useState } from 'react'
import './App.css'

// meus componentes
import ListRender from './components/ListRender'
import { Data } from './components/Data';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';

function App() {
  const [count, setCount] = useState(0)
  const userName = 'Roberto'
  const [newUser] = useState('Maria')

  const cars = [
    {id:1, brand:'Ferrari', color:'vermelha', newCar: true, km:0},
    {id: 2, brand: 'Renault', color:'azul', newCar:false, km:49000},
    {id:3, brand: 'lamborghini', color:'laranja', newCar:false, km:12000},
  ]

  function showMessage () {
    console.log('Evento do componente PAI.')
  }

  return (
    <>
      <h1>Hooks</h1>
      <Data />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name={newUser} />
      <CarDetails brand='Fiat' Km={125000} color='prata' newCar={false} />
      <CarDetails brand='Ford' Km={0} color='preta' newCar={true} />
      <CarDetails brand='Toyota' color='branco' Km={34000} newCar={false} />
      <hr />
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          Km={car.km}
          newCar={car.newCar}
          />
      ))}
      <Container newValue='teste'>
        <p>Este conteúdo é um children</p>
      </Container>
      <Container newValue='Loading...'>
        <p>Novo conteúdo</p>
      </Container>
      <ExecuteFunction myFunction={showMessage} />
    </>
  )
}

export default App
