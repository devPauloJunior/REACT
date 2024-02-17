import { useState, useContext } from 'react';
import { addfeedback, editfeedback, deletefeedback } from '../../../Service/ApiService';
// import './Feedback.css';
import AdicionarFeedback from './AdicionarFeedback';
import EditarFeedback from './EditarFeedback';

import { useGerentes } from "../../../hooks/useGerentes";
import { useFeedbacks } from "../../../hooks/useFeedbacks";
import { UserContext } from "../../../context/UserContext";
import Search from '../Agendar/Search';

const ListarFeedback = () => {
    
    const [showFeedbackForm, setShowFeedbackForm] = useState(false);
    const [showEditFeedbackForm, setShowEditFeedbackForm] = useState(false);
    const [selectEditData, setSelectEditData] = useState();
    const [seach, setSearch] = useState("");

    const { gerentes, setGerentes } = useGerentes([]);
    const { feedbacks, setFeedbacks } = useFeedbacks([]);
    const { idGerentes } = useContext(UserContext);

    const handleAddSubmit = (e) => {
        e.preventDefault();
        addfeedback(e.target)
        .then(res => {
            setFeedbacks([res])
        })
    }

    const handleEditSubmit = (e, feedback_id) => {
        e.preventDefault();
        editfeedback(feedback_id, e.target)
        .then(res => {
            setFeedbacks([res])
        })
    }

    const handleEditButton = (feedback) => {
        setSelectEditData(feedback)
        setShowEditFeedbackForm(true)
    }

    const handleDeleteButton = (feedback_id) => {
        // e.preventDefault();
        // const token = prompt("TOKEN DE SEGURANÇA NECESSÁRIO:")
        // if (token === manager_token){
        deletefeedback(feedback_id)
        .then(res => {
            setFeedbacks(feedbacks.filter(c => c.feedback_id !== feedback_id))
        })
        // } else{
        //     alert("TOKEN INVÁLIDO, DIGITE NOVAMENTE!")
        // }
    }

    function handleCancelButton(e) {
        e.preventDefault();
        setShowFeedbackForm(false);
        setShowEditFeedbackForm(false);
    }
    
  return (
    <>
    <div className="container_white">
        <div className="button_add_close">
            <div className='container_display_flex'>
                {/* <button className="btn btn-primary m-0 i bi-plus-circle " onClick={() => setShowFeedbackForm(true)}> ADICIONAR</button>&nbsp;&nbsp;&nbsp; */}
            </div>
            <Search seach={seach} setSearch={setSearch} />

        </div>
        <div className="button_add_close">
            {showFeedbackForm && <AdicionarFeedback handleAddSubmit={handleAddSubmit} handleCancelButton={handleCancelButton} />}
            {showEditFeedbackForm && <EditarFeedback handleEditSubmit={handleEditSubmit} selectEditData={selectEditData} handleCancelButton={handleCancelButton}/>}
        </div>
        
        <br></br><h3>LISTA DE FEEDBACKS</h3>
        <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">REUNIÃO</th>
                        <th scope="col">TÍTULO</th>
                        <th scope="col">COLABORADOR</th>
                        <th scope="col">DATA</th>
                        <th scope="col">HORA</th>
                        <th scope="col">ANOTAÇÕES</th>
                        <th scope="col">AVALIAÇÃO</th>
                        <th scope="col">AÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    {/* && feedback.feedback_id == feedback.feedback_idschedule */}
                    {feedbacks.filter(feedback => feedback.feedback_manager_id == idGerentes).filter(filterFeedbacks => filterFeedbacks.feedback_collaborator.toLowerCase().includes(seach.toLowerCase())).map(feedback => {
                        return (
                            <tr key={feedback.feedback_id}>
                                <td>{feedback.feedback_id}</td>
                                <td>ID {feedback.feedback_idschedule}</td>
                                <td>{feedback.feedback_title}</td>
                                <td>{feedback.feedback_collaborator}</td>
                                <td>{feedback.feedback_date}</td>
                                <td>{feedback.feedback_hour}</td>
                                <td>{feedback.feedback_note}</td>
                                <td>{feedback.feedback_evaluate}</td>
                                <td>
                                    {/* <i className="btn btn-primary m-1 bi bi-person-up"></i> */}
                                    <i onClick={() => handleEditButton(feedback)} className="btn btn-warning m-1 bi bi-pencil-square"/>
                                    <i onClick={() => handleDeleteButton(feedback.feedback_id)} className="btn btn-danger m-1 bi bi-trash"/>
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

export default ListarFeedback