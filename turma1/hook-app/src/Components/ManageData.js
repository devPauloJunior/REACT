import { useState } from "react";

const ManageData = () => {
    let valueData = 'Basquete';

    const [newValue, setNewValue] = useState(15);

    console.log(valueData);
  return (
    <div>
        <div>
            <h2>Valor: {valueData}</h2>
            <button onClick={() => (valueData = 'Futebol')}>Mudar Valor do Dado</button>
        </div>
        <div>
            <h2>Valor: {newValue} </h2>
            <button onClick={() => setNewValue(20)}>Nova alteração de Valor do Dado</button>
        </div>
    </div>
  )
}

export default ManageData