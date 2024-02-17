import { useState, useContext } from 'react';
import { Box, MenuItem, TextField } from '@mui/material';

import { UserContext } from "../../../context/UserContext";
import { useGerentes } from "../../../hooks/useGerentes";
import { useColaboradores } from "../../../hooks/useColaboradores";

const EditarPdi = ({ handleEditSubmit, selectEditData, handleCancelButton }) => {  
  const { gerentes } = useGerentes([]);
  const { colaboradores } = useColaboradores([]);
  const { idGerentes } = useContext(UserContext);
  const [meta, setMeta] = useState([])

  const addMetaButton = (e) => {
    e.preventDefault()
    setMeta([ ...meta, ""]);
  };

  const delMetaButton = (position) => {
    setMeta([ ...meta.filter((_, index) => index !== position)]);
  };

  return (
    <div className="container_white">
      <Box onSubmit={(e)=>handleEditSubmit(e, selectEditData.planning_id)} component="form" noValidate
      autoComplete="off">
        <br></br><h3 className="text-center">EDITAR PDI</h3>

      {gerentes.filter(gerente => gerente.manager_id == idGerentes).map(gerente => {
        return (
        <TextField sx={{ m: 1, width: '40.5%' }} type="text" name='planning_name_manager' key={gerente.manager_id} defaultValue={gerente.manager_name} className="from__input" id="inputGroup-sizing-default" label="Gerente" placeholder="Gerente" disabled multiline/>
        )
      })}

      {gerentes.filter(gerente => gerente.manager_id == idGerentes).map(gerente => {
        return (
        <TextField sx={{ m: 1, width: '8%' }} type="text" name='planning_manager_id' key={gerente.manager_id} defaultValue={gerente.manager_id} className="from__input" id="inputGroup-sizing-default" label="Id Gerente" placeholder="Id Gerente" disabled multiline/>
        )
      })}

      <TextField sx={{ m: 1, width: '19%' }} type="text" name='planning_name_collaborator' className="from__input" id="inputGroup-sizing-default" label="Colaborador" placeholder="Colaborador" multiline select defaultValue={selectEditData.planning_name_collaborator} >
      {colaboradores.map(colaborador => {
        return (
          <MenuItem key={colaborador.collaborator_id} value={colaborador.collaborator_name}>{colaborador.collaborator_id} - {colaborador.collaborator_name}</MenuItem>
        )
      })}
      </TextField>

      <TextField sx={{ m: 1, width: '19%' }} type="text" name='planning_collaborator_id' className="from__input" id="inputGroup-sizing-default" label="Id Colaborador" placeholder="Id Colaborador" multiline defaultValue={selectEditData.planning_collaborator_id} select>
      {colaboradores.map(colaborador => {
        return (
          <MenuItem key={colaborador.collaborator_id} value={colaborador.collaborator_id}>{colaborador.collaborator_id}</MenuItem>
        )
      })}
      </TextField>

      <TextField sx={{ m: 1, width: '92%' }} name='planning_title' type="text" className="from__input" defaultValue={selectEditData.planning_title} id="inputGroup-sizing-default" label="Titulo" placeholder="Titulo"/>

      <TextField sx={{ m: 1, width: '50%' }} type="text" name='planning_goals' className="from__input" id="inputGroup-sizing-default" defaultValue={selectEditData.planning_goals} label="Meta" placeholder="Meta"/>

      <TextField sx={{ m: 1, width: '40%' }} type="text" name='planning_status' className="from__input" defaultValue='EM ANDAMENTO' id="inputGroup-sizing-default"  label="Status" placeholder="Status" disabled/>

      <TextField sx={{ m: 1, width: '92%' }} type="text" name='planning_progess' className="from__input" defaultValue={selectEditData.planning_progess} id="inputGroup-sizing-default" label="Progresso" placeholder="Progresso"/>

      {/* <TextField sx={{ m: 1, width: '15%' }} type="date" name='planning_date' defaultValue={selectEditData.planning_date} className="from__input" id="inputGroup-sizing-default" label="Data" InputLabelProps={{ shrink: true, }} disabled/>

      <TextField sx={{ m: 1, width: '15%' }} type="time" name='planning_hour' className="from__input" defaultValue={selectEditData.planning_hour} id="inputGroup-sizing-default" label="Hora" InputLabelProps={{ shrink: true, }} disabled/> */}

      <TextField sx={{ m: 1, width: '50%' }} type="date" name='planning_final_date' className="from__input" defaultValue={selectEditData.planning_final_date} id="inputGroup-sizing-default" label="Data Final"/>

      <TextField sx={{ m: 1, width: '40%' }} type="time" name='planning_final_hour' className="from__input" defaultValue={selectEditData.planning_final_hour} id="inputGroup-sizing-default" label="Hora Final"/>

      <TextField sx={{ m: 1, width: '92%' }} type="text" name='planning_resource' className="from__input" defaultValue={selectEditData.planning_resource} id="inputGroup-sizing-default" label="Recursos" placeholder="Recursos" multiline />

      <TextField sx={{ m: 1, width: '92%' }} type="text" name='planning_description' className="from__input" defaultValue={selectEditData.planning_description} id="inputGroup-sizing-default" label="Descrição" placeholder="Descrição" multiline rows={4} />
      <br></br>
      <button className="btn btn-primary m-1" type='submit'>EDITAR</button>
      <button className="btn btn-danger m-1" onClick={handleCancelButton}>Fechar</button>
    </Box>
  </div>
  )
}

export default EditarPdi;