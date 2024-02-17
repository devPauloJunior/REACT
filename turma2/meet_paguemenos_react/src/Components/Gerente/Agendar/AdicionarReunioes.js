import { Box, MenuItem, TextField } from '@mui/material';
import { useState, useContext } from 'react';

import { UserContext } from "../../../context/UserContext";
import { useGerentes } from "../../../hooks/useGerentes";
import { useColaboradores } from "../../../hooks/useColaboradores";
import "./Agendar.css";

const AdicionarReunioes = ({ handleAddSubmit, handleCancelButton }) => {
  const { gerentes } = useGerentes([]);
  const { colaboradores } = useColaboradores([]);
  const { idGerentes } = useContext(UserContext);
  const [ idColaborador, SetIdColaborador ] = useState([]);
  const [ openModal, setOpenModal ] = useState(false);

  return (
    <>
      <div className="container_white">
      <Box onSubmit={handleAddSubmit} component="form" noValidate autoComplete="off">
        <h3 className="text-center">AGENDAR REUNIÃO</h3><br></br>

        {gerentes.filter(gerente => gerente.manager_id == idGerentes).map(gerente => {
          return (
          <TextField sx={{ m: 1, width: '40.5%' }} type="text" name='schedule_name_manager' key={gerente.manager_id} defaultValue={gerente.manager_name} className="from__input" id="inputGroup-sizing-default" label="Gerente" placeholder="Gerente" disabled multiline/>
          )
        })}
        
        {gerentes.filter(gerente => gerente.manager_id == idGerentes).map(gerente => {
          return (
          <TextField sx={{ m: 1, width: '8%' }} type="text" name='schedule_manager_id' key={gerente.manager_id} defaultValue={gerente.manager_id} className="from__input" id="inputGroup-sizing-default" label="Id Gerente" placeholder="Id Gerente" disabled multiline/>
          )
        })}

        <TextField sx={{ m: 1, width: '19%' }} type="text" name='schedule_name_collaborator' id="inputGroup-sizing-default" label="Colaborador" placeholder="Colaborador" multiline select>
          {colaboradores.map(colaborador => {
          return (
            <MenuItem key={colaborador.collaborator_id} value={colaborador.collaborator_name}>{colaborador.collaborator_id} - {colaborador.collaborator_name}</MenuItem>
            )
          })}
        </TextField>

        <TextField sx={{ m: 1, width: '19%' }} type="text" name='schedule_collaborator_id'  className="from__input" id="inputGroup-sizing-default" label="Id Colaborador" placeholder="Id Colaborador" multiline select>
          {colaboradores.map(colaborador => {
          return (
            <MenuItem key={colaborador.collaborator_id} value={colaborador.collaborator_id}>{colaborador.collaborator_id}</MenuItem>
            )
          })}
        </TextField>

        <TextField sx={{ m: 1, width: '50%' }} name='schedule_topic' type="text" className="from__input" id="inputGroup-sizing-default" label="Titulo" placeholder="Titulo" multiline />
        
        <TextField sx={{ m: 1, width: '19%' }} type="date" name='schedule_date' className="from__input" id="inputGroup-sizing-default" label="Data" InputLabelProps={{
          shrink: true,
        }}/>

        <TextField sx={{ m: 1, width: '19%' }} type="time" name='schedule_hour' className="from__input" id="inputGroup-sizing-default" label="Hora" InputLabelProps={{
          shrink: true,
        }}/>

        <TextField sx={{ m: 1, width: '50%' }} type="text" name='schedule_meet_location' className="from__input" id="inputGroup-sizing-default" label="Local" placeholder="Local" multiline/>

        <TextField sx={{ m: 1, width: '40%' }} type="text" name='schedule_duration' className="from__input" id="inputGroup-sizing-default" label="Duração" placeholder="30min" multiline select>
          <MenuItem value="30">30 minutos</MenuItem>
          <MenuItem value="45">45 minutos</MenuItem>
          <MenuItem value="60">60 minutos</MenuItem>
        </TextField>

        <TextField sx={{ m: 1, width: '91%' }} type="text" name='schedule_description' className="from__input" id="inputGroup-sizing-default" label="Descrição" placeholder="Descrição" multiline rows={4}/>

        <input type='hidden' name='schedule_status_manager' defaultValue="EM ANDAMENTO"/>
        <input type='hidden' name='schedule_status_collaborator' defaultValue="EM ANDAMENTO"/>
        <br></br>
        <button className="btn btn-primary m-1" type='submit'>Salvar</button>
        <button className="btn btn-danger m-1" onClick={handleCancelButton}>Fechar</button>
      <br></br>
      </Box>
    </div>
    </>
  )
}

export default AdicionarReunioes;
