import React, { useEffect, useState } from 'react'
import { getgerente, getschedule, addschedule, editschedule, deleteschedule, getfeedback, addfeedback, editfeedback, deletefeedback, getpdi } from '../../../Service/ApiService';





const Historico = () => {
    const [schedules, setSchedules] = useState([]);
    const [showScheduleForm, setShowScheduleForm] = useState(false);
    const [showEditScheduleForm, setShowEditScheduleForm] = useState(false);
    const [gerentes, setGerentes] = useState([])
    const [feedback_idschedule, setFeedback_idSchedule] = useState()
    const [pdis, setPdis] = useState([]);
    const [showPdiForm, setShowPdiForm] = useState(false);
    const [feedbacks, setFeedback] = useState([]);
    const [showFeedbackForm, setShowFeedbackForm] = useState(false);



    useEffect(() => {
        let mount = true
        getgerente()
            .then(res => {
                setGerentes(res)
                return () => mount = false
            })
    }, [])

    useEffect(() => {
        let mount = true
        getschedule()
            .then(res => {
                setSchedules(res)
                return () => mount = false
            })
    }, [])

    useEffect(() => {
        let mount = true
        getfeedback()
            .then(res => {
                setFeedback(res)
                return () => mount = false
            })
    }, [])

    useEffect(() => {
        let mount = true
        getpdi()
            .then(res => {
                setPdis(res)
                return () => mount = false
            })
    }, [])

    return (
        <>
            <div className="container_white">
                <h3>LISTA DE REUNIÕES</h3><br></br>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">GERENTE</th>
                            <th scope="col">COLABORADOR</th>
                            <th scope="col">TÍTULO</th>
                            <th scope="col">DATA/HORA</th>
                            <th scope="col">SALA</th>
                            <th scope="col">DESCRIÇÃO</th>
                            <th scope="col">DURAÇÃO</th>
                            {/* <th scope="col">STATUS</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {schedules.map(schedule => {
                            return (
                                <tr key={schedule.schedule_id}>
                                    <td>{schedule.schedule_id}</td>
                                    <td>{schedule.schedule_name_manager}</td>
                                    <td>{schedule.schedule_name_collaborator}</td>
                                    <td>{schedule.schedule_topic}</td>
                                    <td>{schedule.schedule_date} | {schedule.schedule_hour}</td>
                                    <td>{schedule.schedule_meet_location}</td>
                                    <td>{schedule.schedule_description}</td>
                                    <td>{schedule.schedule_duration}</td>
                                    {/* <td>{schedule.schedule_status}</td> */}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <br></br>
            <div class="container_white">
                <h3>LISTA DE PDIS</h3>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">GERENTE</th>
                            <th scope="col">COLABORADOR</th>
                            <th scope="col">TÍTULO</th>
                            <th scope="col">META</th>
                            <th scope="col">PROGRESSO</th>
                            <th scope="col">RECURSOS</th>
                            <th scope="col">DESCRIÇÃO</th>
                            <th scope="col">DATA DE CRIAÇÃO</th>
                            <th scope="col">DATA DE ENTREGA</th>
                            <th scope="col">STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pdis.map(pdi => {
                            return (
                                <tr key={pdi.planning_id}>
                                    <td>{pdi.planning_id}</td>
                                    <td>{pdi.planning_name_manager}</td>
                                    <td>{pdi.planning_name_collaborator}</td>
                                    <td>{pdi.planning_title}</td>
                                    <td>{pdi.planning_goals}</td>
                                    <td>{pdi.planning_progess}</td>
                                    <td>{pdi.planning_description}</td>
                                    <td>{pdi.planning_resource}</td>
                                    <td>{pdi.planning_date} | {pdi.planning_hour}</td>
                                    <td>{pdi.planning_final_date} | {pdi.planning_final_hour}</td>
                                    <td>{pdi.planning_status}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <br></br>
            <div class="container_white">
                <h3>LISTA DE FEEDBACKS</h3><br></br>
                <div className='listaDeReunioes'>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">ID REUNIÃO</th>
                                <th scope="col">GERENTE</th>
                                <th scope="col">COLABORADOR</th>
                                <th scope="col">TÍTULO</th>
                                <th scope="col">DATA/HORA</th>
                                <th scope="col">ANOTAÇÕES</th>
                                <th scope="col">AVALIAÇÃO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {feedbacks.map(feedback => {
                                return (
                                    <tr key={feedback.feedback_id}>
                                        <td>{feedback.feedback_id}</td>
                                        <td>{feedback.feedback_idschedule}</td>
                                        <td>{feedback.feedback_manage}</td>
                                        <td>{feedback.feedback_collaborator}</td>
                                        <td>{feedback.feedback_title}</td>
                                        <td>{feedback.feedback_date} | {feedback.feedback_hour}</td>
                                        <td>{feedback.feedback_note}</td>
                                        <td>{feedback.feedback_evaluate}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Historico
