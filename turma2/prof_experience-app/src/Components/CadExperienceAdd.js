import React from 'react'

const CadExperienceAdd = ({ handleAddSubmit, handleCancelButton }) => {
  return (
    <>
        <h3>Adicionar Usuário</h3>
        <form onSubmit={handleAddSubmit}>
            <label>
                Nome:
                <input
                    type="text" name='cadexperience_first_name'
                />
            </label>
            <label>
                Sobrenome
                <input
                    type="text"
                    name='cadexperience_last_name'
                />
            </label>
            <label>
                Grau de Escolaridade
                <input
                    type="text"
                    name='cadexperience_degree'
                />
            </label>
            <button type='submit'>ADD</button>
            <button onClick={handleCancelButton}>Cancel</button>
        </form>
    </>
  )
}

export default CadExperienceAdd