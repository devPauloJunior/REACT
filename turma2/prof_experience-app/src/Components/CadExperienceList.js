import React, { useEffect, useState } from 'react'
import { getcadexperience, addcadexperience, editcadexperience, deletecadexperience } from '../Service/ApiService';
import CadExperienceAdd from './CadExperienceAdd'
import CadExperienceEdit from './CadExperienceEdit';

function CadExperienceList() {
    const [ cadExperiences, setCadExperiences ] = useState([]);
    const [ showCadExperiencesForm, setShowCadExperiencesForm ] = useState(false);
    const [ showEditExperiencesForm, setShowEditExperiencesForm ] = useState(false);
    const [ selectEditData, setSelectEditData ] = useState();
    
    useEffect(() => {
        let mount = true
        getcadexperience()
        .then(res => {
            setCadExperiences(res)
            return() => mount = false
        })
    }, [])

    const handleAddSubmit = (e) => {
        addcadexperience(e.target)
        .then(res => {
            setCadExperiences([res])
        })
    }

    const handleEditSubmit = (e, cadexperience_id) => {
        editcadexperience(cadexperience_id, e.target)
        .then(res => {
            setCadExperiences([res])
        })
    }

    const handleEditButton = (cadExperience) => {
        setSelectEditData(cadExperience)
        setShowEditExperiencesForm(true)
    }

    const handleDeleteButton = (cadexperience_id) => {
        deletecadexperience(cadexperience_id)
        .then(res => {
            setCadExperiences(cadExperiences.filter(c=> c.cadexperience_id !== cadexperience_id))
        })
    }


    function handleCancelButton() {
        setShowCadExperiencesForm(false)
    }

    return (
        <>
            <h3>Lista de Usuários</h3>
            <table border={"2px"} cellPadding={"5px"} align='center'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>Grau de Escolaridade</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {cadExperiences.map(cadExperience => {
                        return(
                        <tr key={cadExperience.cadexperience_id}>
                            <td>{cadExperience.cadexperience_id}</td>
                            <td>{cadExperience.cadexperience_first_name}</td>
                            <td>{cadExperience.cadexperience_last_name}</td>
                            <td>{cadExperience.cadexperience_degree}</td>
                            <td><button onClick={ ()=>handleEditButton(cadExperience)}>Editar</button>
                                 | 
                            <button onClick={ ()=>handleDeleteButton(cadExperience.cadexperience_id) }>Delete</button>
                            </td>
                        </tr>
                        )})}                 
                </tbody>
            </table>
            <button onClick={() => setShowCadExperiencesForm(true)}>Adicionar Usuário</button>
            {showCadExperiencesForm && <CadExperienceAdd handleAddSubmit={handleAddSubmit} handleCancelButton={handleCancelButton} />}
            {showEditExperiencesForm && <CadExperienceEdit handleEditSubmit={handleEditSubmit} selectEditData={selectEditData} />}
        </>
  )
}

export default CadExperienceList