import React, { useState } from 'react'

const ListRender = () => {
    const [list] = useState(['Aline', 'Marcelo', 'Camila'])

    const [myObject] = useState([
        {id:1, name:'Aline', idade:29},
        {id:2, name:'Marcelo', idade:28},
        {id:3, name:'Camila', idade:26},
    ])
  
    return (
    <div>
        {list.map((item, i) => (
            <h3 key={i}>{item}</h3>
        ))}
        {myObject.map((user) => (
            <li key={user.id}>{user.name} - {user.idade}</li>
        ))}
    </div>
  )
}

export default ListRender