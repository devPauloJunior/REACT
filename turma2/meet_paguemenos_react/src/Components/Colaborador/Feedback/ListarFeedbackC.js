import { useState, useContext } from 'react';
import { addfeedback, editfeedback, deletefeedback } from '../../../Service/ApiService';
// import './Feedback.css';
import AdicionarFeedbackC from '../Feedback/AdicionarFeedbackC';
import EditarFeedbackC from '../Feedback/EditarFeedbackC';

import { useGerentes } from "../../../hooks/useGerentes";
import { useFeedbacks } from "../../../hooks/useFeedbacks";
import { UserContext } from "../../../context/UserContext";
import Search from '../../Gerente/Agendar/Search';

const ListarFeedbackC = () => {

    const [showFeedbackForm, setShowFeedbackForm] = useState(false);
    const [showEditFeedbackForm, setShowEditFeedbackForm] = useState(false);
    const [selectEditData, setSelectEditData] = useState();
    const [seach, setSearch] = useState("");

    const { gerentes, setGerentes } = useGerentes([]);
    const { feedbacks, setFeedbacks } = useFeedbacks([]);
    const { idGerentes, idColaboradores } = useContext(UserContext);

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
        deletefeedback(feedback_id)
            .then(res => {
                setFeedbacks(feedbacks.filter(c => c.feedback_id !== feedback_id))
            })
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
                    </div>
                    <Search seach={seach} setSearch={setSearch} />

                </div>
                <div className="button_add_close">
                    {showFeedbackForm && <AdicionarFeedbackC handleAddSubmit={handleAddSubmit} handleCancelButton={handleCancelButton} />}
                    {showEditFeedbackForm && <EditarFeedbackC handleEditSubmit={handleEditSubmit} selectEditData={selectEditData} handleCancelButton={handleCancelButton} />}
                </div>

                <br></br><h3>LISTA DE FEEDBACKS</h3>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">REUNIÃO</th>
                            <th scope="col">TÍTULO</th>
                            <th scope="col">GERENTE</th>
                            <th scope="col">DATA</th>
                            <th scope="col">HORA</th>
                            <th scope="col">ANOTAÇÕES</th>
                            <th scope="col">AVALIAÇÃO</th>
                            <th scope="col">AÇÕES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feedbacks.filter(feedback => feedback.feedback_collaborator_id == idColaboradores).filter(filterFeedbacks => filterFeedbacks.feedback_manage.toLowerCase().includes(seach.toLowerCase())).map(feedback => {
                            return (
                                <tr key={feedback.feedback_id}>
                                    <td>{feedback.feedback_id}</td>
                                    <td>ID {feedback.feedback_idschedule}</td>
                                    <td>{feedback.feedback_title}</td>
                                    <td>{feedback.feedback_manage}</td>
                                    <td>{feedback.feedback_date}</td>
                                    <td>{feedback.feedback_hour}</td>
                                    <td>{feedback.feedback_note}</td>
                                    <td>{feedback.feedback_evaluate}</td>
                                    <td>
                                        <i onClick={() => handleEditButton(feedback)} className="btn btn-warning m-1 bi bi-pencil-square" />
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

export default ListarFeedbackC