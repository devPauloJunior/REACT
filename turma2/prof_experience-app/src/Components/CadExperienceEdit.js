import React from 'react'

function CadExperienceEdit({ handleEditSubmit, selectEditData }) {
  return (
    <>
        <h3>Editar Usuário</h3>
        <form onSubmit={(e)=>handleEditSubmit(e,selectEditData.cadexperience_id)}>
            <label>
                Nome:
                <input
                    type="text" name='cadexperience_first_name'
                    defaultValue={selectEditData.cadexperience_first_name}
                />
            </label>
            <label>
                Sobrenome
                <input
                    type="text"
                    name='cadexperience_last_name'
                    defaultValue={selectEditData.cadexperience_last_name}
                />
            </label>
            <label>
                Grau de Escolaridade
                <input
                    type="text"
                    name='cadexperience_degree'
                    defaultValue={selectEditData.cadexperience_degree}
                />
            </label>
            <button type='submit'>EDITAR</button>
        </form>
    </>
  )
}

export default CadExperienceEdit