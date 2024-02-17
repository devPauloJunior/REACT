import React, { useState, useContext } from 'react';
import { addpdi, editpdi, deletepdi } from '../../../Service/ApiService';

import { UserContext } from "../../../context/UserContext";
import { usePdi } from "../../../hooks/usePdi";

import EditarPdi from './EditarPdi';
import AdicionarPdi from './AdicionarPdi';
import Search from '../Agendar/Search';

const ListarPdi = () => {
    const [showPdiForm, setShowPdiForm] = useState(false);
    const [showEditPdiForm, setShowEditPdiForm] = useState(false);
    const [selectEditData, setSelectEditData] = useState();
    const [seach, setSearch] = useState("");

    const { pdis, setPdi } = usePdi([]);
    const { idGerentes } = useContext(UserContext);

    const handleAddSubmit = (e) => {
        e.preventDefault();
        addpdi(e.target)
        .then(res => {
            setPdi([res])
        })
        setShowPdiForm(false)
    }

    const handleEditSubmit = (e, planning_id) => {
        e.preventDefault();
        editpdi(planning_id, e.target)
            .then(res => {
                setPdi([res])
            })
        setShowEditPdiForm(false)
    }

    const handleEditButton = (pdi) => {
        setSelectEditData(pdi)
        setShowEditPdiForm(true)
    }

    const handleDeleteButton = (planning_id) => {
        deletepdi(planning_id)
        .then(res => {
            setPdi(pdis.filter(c => c.planning_id !== planning_id))
        })
    }

    function handleCancelButton(e) {
        e.preventDefault();
        setShowPdiForm(false)
        setShowEditPdiForm(false)
    }

    return (
        <>
            <div className="container_white">
                <div className="button_add_close">
                    <div className='container_display_flex'>
                        <button className="btn btn-primary m-0 i bi-plus-circle " onClick={() => setShowPdiForm(true)}> ADICIONAR</button>&nbsp;&nbsp;&nbsp;
                        <Search seach={seach} setSearch={setSearch} />
                    </div>
                </div>
                <div className="button_add_close">
                    {showPdiForm && <AdicionarPdi handleAddSubmit={handleAddSubmit} handleCancelButton={handleCancelButton} />}
                    {showEditPdiForm && <EditarPdi handleEditSubmit={handleEditSubmit} selectEditData={selectEditData} handleCancelButton={handleCancelButton} />}
                </div>
                <br></br>
                <br></br><h3>LISTA DE PDIS</h3>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">TÍTULO</th>
                            <th scope="col">META</th>
                            <th scope="col">PROGRESSO</th>
                            <th scope="col">DESCRIÇÃO</th>
                            <th scope="col">RECURSOS</th>
                            <th scope="col">COLABORADOR</th>
                            {/* <th scope="col">DATA</th>
                            <th scope="col">HORA</th> */}
                            <th scope="col">DATA FINAL</th>
                            <th scope="col">STATUS</th>
                            {/* <th scope="col">HORA FINAL</th> */}
                            <th scope="col">AÇÕES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pdis.filter(pdi => pdi.planning_manager_id == idGerentes).filter(filterPdi => filterPdi.planning_name_collaborator.toLowerCase().includes(seach.toLowerCase())).map(pdi => {
                            return (
                                <tr key={pdi.planning_id}>
                                    <td>{pdi.planning_id}</td>
                                    <td>{pdi.planning_title}</td>
                                    <td>{pdi.planning_goals}</td>
                                    <td>{pdi.planning_progess}</td>
                                    <td>{pdi.planning_description}</td>
                                    <td>{pdi.planning_resource}</td>
                                    <td>{pdi.planning_name_collaborator}</td>
                                    {/* <td>{pdi.planning_date}</td>
                                    <td>{pdi.planning_hour}</td> */}
                                    <td>{pdi.planning_final_date}<br></br>{pdi.planning_final_hour}</td>
                                    <td>{pdi.planning_status}</td>
                                    <td>
                                        {/* <i className="btn btn-success m-1 bi bi-bookmark-x" /> */}
                                        <i onClick={() => handleEditButton(pdi)} className="btn btn-warning m-1 bi bi-pencil-square" />
                                        <i onClick={() => handleDeleteButton(pdi.planning_id)} className="btn btn-danger m-1 bi bi-trash" />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListarPdi