import React, { useState, useContext } from 'react';
import { addschedule, editschedule, deleteschedule } from '../../../Service/ApiService';

import { UserContext } from "../../../context/UserContext";
import { useGerentes } from "../../../hooks/useGerentes";
import { useColaboradores } from "../../../hooks/useColaboradores";
import { useSchedules } from "../../../hooks/useSchedules";
import { useFeedbacks } from "../../../hooks/useFeedbacks";

import EditarReunioes from './EditarReunioesC';
import AdicionarReunioes from './AddReunioes';
import Search from '../../Gerente/Agendar/Search';


import GraficoGeral from '../../Gerente/Graficos/GraficoGeral';
import '../../Gerente/Agendar/Agendar.css';
import AdicionarFeedbackC from '../Feedback/AdicionarFeedbackC';
import ListarFeedbackC from '../Feedback/ListarFeedbackC';

const ListarReunioesC = () => {
    // Estado para controlar a exibição do formulário de adição de reuniões.
    const [showScheduleForm, setShowScheduleForm] = useState(false);
    // Estado para controlar a exibição do formulário de edição de reuniões
    const [showEditScheduleForm, setShowEditScheduleForm] = useState(false);
    // Estado para armazenar os dados da reunião a ser editada.
    const [selectEditData, setSelectEditData] = useState();
    // Estado para controlar a exibição do formulário de feedback.
    const [showFeedbackForm, setShowFeedbackForm] = useState(false);
    // Estado para armazenar o ID da reunião selecionada para feedback.
    const [IdSchedule, setIdSchedule] = useState();
    // Estado para armazenar o valor da pesquisa de reuniões.
    const [seach, setSearch] = useState("");

    // Hooks personalizados para gerentes, colaboradores, reuniões e feedbacks.
    const { gerentes, setGerentes } = useGerentes([]);
    const { colaboradores, setColaboradores } = useColaboradores([]);
    const { schedules, setSchedules } = useSchedules([]);
    const { feedbacks, setFeedbacks } = useFeedbacks([]);
    // Contexto do usuário para acessar IDs de gerentes e colaboradores.
    const { idGerentes, idColaboradores } = useContext(UserContext);

    // Função para lidar com o envio de um novo agendamento.
    const handleAddSubmit = (e) => {
        e.preventDefault();
        addschedule(e.target)
            .then(res => {
                setSchedules([res])
            })
        setShowScheduleForm(false)
    }

    // Função para lidar com o envio da edição de um agendamento.
    const handleEditSubmit = (e, schedule_id) => {
        e.preventDefault();
        editschedule(schedule_id, e.target)
            .then(res => {
                setSchedules([res])
            })
        setShowEditScheduleForm(false)
    }
    // Função para adicionar  a edição de um agendamento.
    const handleEditButton = (schedule) => {
        setSelectEditData(schedule)
        setShowEditScheduleForm(true)
    }

    // Função para definir o ID de uma reunião e mostrar o formulário de feedback.
    const handleIdScheduleButton = (schedule_id) => {
        setIdSchedule(schedule_id)
        setShowFeedbackForm(true)
    }

    // Função para lidar com a exclusão de uma reunião.
    const handleDeleteButton = (schedule_id, manager_token) => {
        // e.preventDefault();
        const token = prompt("TOKEN DE SEGURANÇA NECESSÁRIO:")
        if (token === manager_token) {
            deleteschedule(schedule_id).then(res => {
                setSchedules(schedules.filter(c => c.schedule_id !== schedule_id))
            })
        } else {
            alert("TOKEN INVÁLIDO!")
        }
    }
    // Função para lidar com o cancelamento da operação (adicionar, editar, feedback).
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
                        {/* Botão para adicionar uma nova reunião. */}
                        <button className="btn btn-primary m-0 i bi-plus-circle " onClick={() => setShowScheduleForm(true)}> ADICIONAR</button>&nbsp;&nbsp;&nbsp;
                        {/* Componente de pesquisa para filtrar as reuniões. */}
                        <Search seach={seach} setSearch={setSearch} />
                    </div>
                </div>
                <br></br>
                <div className="button_add_close">
                    {/* Mostra o formulário de adição de reuniões quando 'showScheduleForm' é verdadeiro. */}
                    {showScheduleForm && <AdicionarReunioes handleAddSubmit={handleAddSubmit} handleCancelButton={handleCancelButton} />}
                    {/* Mostra o formulário de edição de reuniões quando 'showEditScheduleForm' é verdadeiro. */}
                    {showEditScheduleForm && <EditarReunioes handleEditSubmit={handleEditSubmit} selectEditData={selectEditData} handleCancelButton={handleCancelButton} />}
                    {/* Mostra o formulário de adição de feedback quando 'showFeedbackForm' é verdadeiro. */}
                    {showFeedbackForm && <AdicionarFeedbackC handleIdScheduleButton={handleIdScheduleButton} IdSchedule={IdSchedule} handleCancelButton={handleCancelButton} />}
                </div>
                <br></br>
                {/* Título da lista de reuniões */}
                <h3>LISTA DE REUNIÕES</h3>
                {/* Tabela para exibir a lista de reuniões */}
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">TÍTULO</th>
                            <th scope="col">DESCRIÇÃO</th>
                            <th scope="col">DATA</th>
                            <th scope="col">HORA</th>
                            <th scope="col">GERENTE</th>
                            <th scope="col">LOCAL</th>
                            <th scope="col">DURAÇÃO</th>
                            <th scope="col">STATUS</th>
                            <th scope="col">AÇÕES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Mapeia e exibe as reuniões que atendem aos critérios de filtro */}
                        {schedules.filter(schedule => schedule.schedule_collaborator_id == idColaboradores).filter(filterSchedule => filterSchedule.schedule_name_manager.toLowerCase().includes(seach.toLowerCase())).map(schedule => {
                            return (
                                <tr key={schedule.schedule_id} style={{ textDecoration: schedule.schedule_status == 2 ? "line-through" : "" }}>
                                    <td>{schedule.schedule_id}</td>
                                    <td>{schedule.schedule_topic}</td>
                                    <td>{schedule.schedule_description}</td>
                                    <td>{schedule.schedule_date}</td>
                                    <td>{schedule.schedule_hour}</td>
                                    <td>{schedule.schedule_name_manager}</td>
                                    <td>{schedule.schedule_meet_location}</td>
                                    <td>{schedule.schedule_duration}</td>
                                    <td>
                                        {/* Exibe o status da reunião com base no valor de 'schedule_status' */}
                                        {schedule.schedule_status === 0 ? "EM ANDAMENTO" : ""}
                                        {schedule.schedule_status === 1 ? "NÃO FINALIZADA" : ""}
                                        {schedule.schedule_status === 2 ? "FINALIZADA" : ""}
                                    </td>
                                    <td>
                                        <div>
                                            {/* Botões de ação com base no status da reunião */}
                                            {schedule.schedule_status === 0 || schedule.schedule_status === 1 ? <i onClick={() => handleIdScheduleButton(schedule)} className="btn btn-success m-1 bi bi-calendar2-check" /> : <i className="btn btn-secondary m-1 bi bi-calendar2-check" />}

                                            {schedule.schedule_status === 0 || schedule.schedule_status === 1 ? <i onClick={() => handleEditButton(schedule)} className="btn btn-warning m-1 bi bi-pencil-square" /> : <i className="btn btn-secondary m-1 bi bi-pencil-square" />}
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <br></br>
            <ListarFeedbackC />
        </>
    )
}

export default ListarReunioesC


