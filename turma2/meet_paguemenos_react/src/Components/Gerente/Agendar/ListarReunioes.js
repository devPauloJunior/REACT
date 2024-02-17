import React, { useState, useContext, useCallback } from 'react';
import { addschedule, editschedule, deleteschedule } from '../../../Service/ApiService';

import { UserContext } from "../../../context/UserContext";
import { useGerentes } from "../../../hooks/useGerentes";
import { useSchedules } from "../../../hooks/useSchedules";
import { useFeedbacks } from "../../../hooks/useFeedbacks";

import EditarReunioes from './EditarReunioes';
import AdicionarReunioes from './AdicionarReunioes';
import Search from './Search';
import './Agendar.css';
import ListarFeedback from '../Feedback/ListarFeedback';
import AdicionarFeedback from '../Feedback/AdicionarFeedback';

const ListarReunioes = () => {
    const [showScheduleForm, setShowScheduleForm] = useState(false);
    const [showEditScheduleForm, setShowEditScheduleForm] = useState(false);
    const [selectEditData, setSelectEditData] = useState();
    const [showFeedbackForm, setShowFeedbackForm] = useState(false);
    const [IdSchedule, setIdSchedule] = useState();
    const [seach, setSearch] = useState("");

    const { gerentes } = useGerentes([]);
    const { idGerentes } = useContext(UserContext);
    const { feedbacks, setFeedbacks } = useFeedbacks([]);
    const { schedules, setSchedules } = useSchedules([]);

    const handleAddSubmit = (e) => {
        e.preventDefault();
        addschedule(e.target)
        .then(res => {
            setSchedules([res])
        })
        setShowScheduleForm(false)
    }

    const handleEditSubmit = (e, schedule_id) => {
        e.preventDefault();
        editschedule(schedule_id, e.target)
        .then(res => {
            setSchedules([res])
        })
        setShowEditScheduleForm(false)
    }

    const handleEditButton = (schedule) => {
        setSelectEditData(schedule)
        setShowEditScheduleForm(true)
    }

    const handleIdScheduleButton = (schedule) => {
        setIdSchedule(schedule)
        setShowFeedbackForm(true)
    }

    const handleDeleteButton = (schedule_id, manager_token) => {
        const token = prompt("TOKEN DE SEGURANÇA NECESSÁRIO:")
        if (token === manager_token) {
            deleteschedule(schedule_id).then(res => {
                setSchedules(schedules.filter(c => c.schedule_id !== schedule_id))
            })
        }
        else {
            alert("TOKEN INVÁLIDO!")
        }
    }

    function handleCancelButton(e) {
        e.preventDefault();
        setShowScheduleForm(false)
        setShowEditScheduleForm(false)
        setShowFeedbackForm(false)
    }

    return (
        <>
            <div className="container_white container-fluid">
                <div className="button_add_close">
                    <div className='container_display_flex'>
                        <button className="btn btn-primary m-0 i bi-plus-circle " onClick={() => setShowScheduleForm(true)}> ADICIONAR</button>&nbsp;&nbsp;&nbsp;
                        <Search seach={seach} setSearch={setSearch} />
                    </div>
                </div>
                <br></br>
                <div className="button_add_close">
                    {showScheduleForm && <AdicionarReunioes handleAddSubmit={handleAddSubmit} handleCancelButton={handleCancelButton} />}

                    {showEditScheduleForm && <EditarReunioes handleEditSubmit={handleEditSubmit} selectEditData={selectEditData} handleCancelButton={handleCancelButton} />}

                    {showFeedbackForm && <AdicionarFeedback handleIdScheduleButton={handleIdScheduleButton} IdSchedule={IdSchedule} handleCancelButton={handleCancelButton}/>}
                </div>
                <br></br>
                <h3>LISTA DE REUNIÕES</h3>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">TÍTULO</th>
                            <th scope="col">DESCRIÇÃO</th>
                            <th scope="col">DATA</th>
                            <th scope="col">HORA</th>
                            <th scope="col">COLABORADOR</th>
                            <th scope="col">LOCAL</th>
                            <th scope="col">DURAÇÃO</th>
                            <th scope="col">STATUS</th>
                            <th scope="col">AÇÕES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {schedules.filter(schedule => schedule.schedule_manager_id == idGerentes).filter(filterSchedule => filterSchedule.schedule_name_collaborator.toLowerCase().includes(seach.toLowerCase()) || filterSchedule.schedule_topic.toLowerCase().includes(seach.toLowerCase()) || filterSchedule.schedule_status_manager.toLowerCase().includes(seach.toLowerCase())).map(schedule => {
                            return (
                                <tr key={schedule.schedule_id} style={{ textDecoration: schedule.schedule_status_manager === "FINALIZADA" ? "line-through" : "" }}>
                                    <td>{schedule.schedule_id}</td>
                                    <td>{schedule.schedule_topic}</td>
                                    <td>{schedule.schedule_description}</td>
                                    <td>{schedule.schedule_date}</td>
                                    <td>{schedule.schedule_hour}</td>
                                    <td>{schedule.schedule_name_collaborator}</td>
                                    <td>{schedule.schedule_meet_location}</td>
                                    <td>{schedule.schedule_duration}</td>
                                    <td>{schedule.schedule_status_manager}</td>
                                    <td>
                                        {schedule.schedule_status_manager === "EM ANDAMENTO" || schedule.schedule_status_manager === "NÃO FINALIZADA" ? <i onClick={() => handleIdScheduleButton(schedule)} className="btn btn-success m-1 bi bi-calendar2-check" /> : <i className="btn btn-secondary m-1 bi bi-calendar2-check" />}

                                        {schedule.schedule_status_manager === "EM ANDAMENTO" || schedule.schedule_status_manager === "NÃO FINALIZADA" ? <i onClick={() => handleEditButton(schedule)}
                                        className="btn btn-warning m-1 bi bi-pencil-square" /> : <i
                                        className="btn btn-secondary m-1 bi bi-pencil-square" />}
                                        
                                        {gerentes.filter(gerente => gerente.manager_id == idGerentes).map(gerente => {
                                        return (
                                            <i key={gerente.manager_id} onClick={() => handleDeleteButton(schedule.schedule_id, gerente.manager_token)} className="btn btn-danger m-1 bi bi-trash" />
                                            )
                                        })}
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                    
            </div>
            <br></br>
            <ListarFeedback/>
        </>
    )
}

export default ListarReunioes

