import { useState, useContext } from 'react';
import { Box, MenuItem, TextField } from '@mui/material';

import { editschedule, addfeedback, editfeedback, deletefeedback } from '../../../Service/ApiService';

import { UserContext } from "../../../context/UserContext";
import { useGerentes } from "../../../hooks/useGerentes";
import { useColaboradores } from "../../../hooks/useColaboradores";
import { useSchedules } from "../../../hooks/useSchedules";
import { useFeedbacks } from "../../../hooks/useFeedbacks";

const AdicionarFeedback = ({ IdSchedule, handleCancelButton }) => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const { gerentes } = useGerentes([]);
  const { colaboradores } = useColaboradores([]);
  const { idGerentes, idColaboradores } = useContext(UserContext);
  const { schedules, setSchedules } = useSchedules([]);
  const { feedbacks, setFeedbacks } = useFeedbacks([]);

  const handleAddSubmit = (e) => {
    const schedule = IdSchedule
    e.preventDefault();
    addfeedback(e.target)
    .then(res => {
        setFeedbacks([res])
    })
    editschedule(schedule.schedule_id, e.target)
    .then(res => {
        setSchedules([res])
    })
    handleCancelButton(e)
  }
    
  return (
    <>
    <div className="container_white">
    <Box onSubmit={handleAddSubmit} component="form" noValidate autoComplete="off">
      <h3 className="text-center">FEEDBACK DA REUNIÃO</h3>

      <TextField sx={{ m: 1, width: '92%' }} name='feedback_title' type="text" defaultValue={IdSchedule.schedule_topic} className="from__input" id="inputGroup-sizing-default" label="Titulo" placeholder="Titulo" multiline disabled/>

      <TextField sx={{ m: 1, width: '10%' }} type="text" name='feedback_manager_id' className="from__input" id="inputGroup-sizing-default" defaultValue={IdSchedule.schedule_manager_id}  label="ID do Gerente" placeholder="ID do Gerente" multiline disabled/>

      <TextField sx={{ m: 1, width: '39%' }} type="text"  name='feedback_manage' className="from__input" id="inputGroup-sizing-default" defaultValue={IdSchedule.schedule_name_manager} label="Gerente" placeholder="Gerente" multiline disabled/>

      <TextField sx={{ m: 1, width: '10%' }} type="text" name='feedback_collaborator_id' className="from__input" id="inputGroup-sizing-default"defaultValue={IdSchedule.schedule_collaborator_id} label="ID do Colaborador" placeholder="ID do Colaborador" multiline disabled/>

      <TextField sx={{ m: 1, width: '28%' }} type="text" name='feedback_collaborator' id="inputGroup-sizing-default" defaultValue={IdSchedule.schedule_name_collaborator} label="Colaborador" placeholder="Colaborador" multiline disabled/>
      
      <TextField sx={{ m: 1, width: '10%' }} type="text" name='feedback_idschedule' className="from__input" defaultValue={IdSchedule.schedule_id} id="inputGroup-sizing-default" label="ID da Reunião" placeholder="ID da Reunião" multiline disabled/>

      <TextField sx={{ m: 1, width: '19%' }} type="date" name='feedback_date' defaultValue={IdSchedule.schedule_date} className="from__input" id="inputGroup-sizing-default" label="Data" InputLabelProps={{ shrink: true, }} disabled/>

      <TextField sx={{ m: 1, width: '18.5%' }} type="time" name='feedback_hour' defaultValue={IdSchedule.schedule_hour} className="from__input" id="inputGroup-sizing-default" label="Hora" InputLabelProps={{ shrink: true, }} disabled/>

      <TextField sx={{ m: 1, width: '40%' }} type="text" name='feedback_evaluate'  className="from__input" id="inputGroup-sizing-default" label="Avaliação" placeholder="Avaliação" multiline select>
        <MenuItem value={1}> <i class="bi bi-star-fill"></i></MenuItem>
        <MenuItem value={2}><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></MenuItem>
        <MenuItem value={3}><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></MenuItem>
        <MenuItem value={4}><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></MenuItem>
        <MenuItem value={5}><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></MenuItem>
      </TextField>

      <TextField sx={{ m: 1, width: '92%' }} type="text" name='feedback_note' className="from__input" id="basic-url" label="Anotações" placeholder="Anotações" multiline rows={4}/>

      <input type='hidden' name='schedule_name_manager' defaultValue={IdSchedule.schedule_name_manager}/>
      <input type='hidden' name='schedule_manager_id' defaultValue={IdSchedule.schedule_manager_id}/>
      <input type='hidden' name='schedule_name_collaborator' defaultValue={IdSchedule.schedule_name_collaborator}/>
      <input type='hidden' name='schedule_collaborator_id' defaultValue={IdSchedule.schedule_collaborator_id}/>
      <input type='hidden' name='schedule_topic' defaultValue={IdSchedule.schedule_topic}/>
      <input type='hidden' name='schedule_date' defaultValue={IdSchedule.schedule_date}/>
      <input type='hidden' name='schedule_hour' defaultValue={IdSchedule.schedule_hour}/>
      <input type='hidden' name='schedule_meet_location' defaultValue={IdSchedule.schedule_meet_location}/>
      <input type='hidden' name='schedule_duration' defaultValue={IdSchedule.schedule_duration}/>
      <input type='hidden' name='schedule_description' defaultValue={IdSchedule.schedule_description}/>
      <input type='hidden' name='schedule_status' defaultValue={IdSchedule.schedule_status + 1}/>
      <br></br>

      <button className="btn btn-primary m-1" type='submit'>Salvar</button>
      <button className="btn btn-danger m-1" onClick={handleCancelButton}>Fechar</button>
    </Box>
    </div>
    </>
  )
}

export default AdicionarFeedback