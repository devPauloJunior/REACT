import { Box, MenuItem, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getcolaboradores, getgerente } from '../../../Service/ApiService'

const EditarPdiC = ({ handleEditSubmit, selectEditData, handleCancelButton }) => {

  const [gerentes, setGerentes] = useState([])
  const [colaborador, setColaboradores] = useState([])
  const [meta, setMeta] = useState([])

  useEffect(() => {
    let mount = true
    getcolaboradores()
    .then(res => {
      setColaboradores(res)
        return() => mount = false
    })
  }, [])

  useEffect(() => {
    let mount = true
    getgerente()
    .then(res => {
        setGerentes(res)
        return() => mount = false
    })
  }, [])

  const addMetaButton = (e) => {
    e.preventDefault()
    setMeta([ ...meta, ""]);
  };

  const delMetaButton = (position) => {
    setMeta([ ...meta.filter((_, index) => index !== position)]);
  };

  return (
  <div className="container_white">
    <Box onSubmit={(e)=>handleEditSubmit(e,selectEditData.planning_id)} component="form" noValidate autoComplete="off">
      <h3 className="text-center">EDITAR PDI</h3><br></br>

      <TextField sx={{ m: 1, width: '40.5%' }} type="text" name='planning_name_manager' defaultValue={selectEditData.planning_name_manager} className="from__input" id="inputGroup-sizing-default" label="Gerente" placeholder="Gerente"  multiline disabled/>

      <TextField sx={{ m: 1, width: '8%' }} type="text" name='planning_manager_id' defaultValue={selectEditData.planning_manager_id} className="from__input" id="inputGroup-sizing-default" label="Id Gerente" placeholder="Id Gerente"  multiline disabled/>

      <TextField sx={{ m: 1, width: '19%' }} type="text" name='planning_name_collaborator' defaultValue={selectEditData.planning_name_collaborator} className="from__input" id="inputGroup-sizing-default" label="Colaborador" placeholder="Colaborador" multiline disabled/>

      <TextField sx={{ m: 1, width: '19%' }} type="text" name='planning_collaborator_id' defaultValue={selectEditData.planning_collaborator_id} className="from__input" id="inputGroup-sizing-default" label="Id Colaborador" placeholder="Id Colaborador" multiline disabled />

      <TextField sx={{ m: 1, width: '92%' }} name='planning_title' type="text" className="from__input" defaultValue={selectEditData.planning_title} id="inputGroup-sizing-default" label="Titulo" placeholder="Titulo" multiline disabled/>

      <TextField sx={{ m: 1, width: '50%' }} type="text" name='planning_goals' className="from__input" id="inputGroup-sizing-default" defaultValue={selectEditData.planning_goals} label="Meta" placeholder="Meta" disabled/>

      <TextField sx={{ m: 1, width: '40%' }} type="text" name='planning_status' className="from__input" defaultValue={selectEditData.planning_status} id="inputGroup-sizing-default" label="Status" placeholder="Status" multiline select>
        <MenuItem value="EM ANDAMENTO">EM ANDAMENTO</MenuItem>
        <MenuItem value="CONCLUÍDO">CONCLUÍDO</MenuItem>
        <MenuItem value="EM ATRASO">EM ATRASO</MenuItem>
      </TextField>

      <TextField sx={{ m: 1, width: '92%' }} type="text" name='planning_progess' className="from__input" defaultValue={selectEditData.planning_progess} id="inputGroup-sizing-default" label="Progresso" placeholder="Progresso" multiline select>
        <MenuItem value={10}>10%</MenuItem>
        <MenuItem value={20}>20%</MenuItem>
        <MenuItem value={30}>30%</MenuItem>
        <MenuItem value={40}>40%</MenuItem>
        <MenuItem value={50}>50%</MenuItem>
        <MenuItem value={60}>60%</MenuItem>
        <MenuItem value={70}>70%</MenuItem>
        <MenuItem value={80}>80%</MenuItem>
        <MenuItem value={90}>90%</MenuItem>
        <MenuItem value={100}>100%</MenuItem>
      </TextField>

      <TextField sx={{ m: 1, width: '50%' }} type="date" name='planning_final_date' defaultValue={selectEditData.planning_final_date} className="from__input" id="inputGroup-sizing-default" label="Data de Entrega" disabled/>

      <TextField sx={{ m: 1, width: '40%' }} type="time" name='planning_final_hour' defaultValue={selectEditData.planning_final_hour} className="from__input" id="inputGroup-sizing-default" label="Hora de Entrega" disabled/>

      <TextField sx={{ m: 1, width: '92%' }} type="text" name='planning_resource' className="from__input" defaultValue={selectEditData.planning_resource} id="inputGroup-sizing-default" label="Recursos" placeholder="Recursos" multiline disabled/>

      <TextField sx={{ m: 1, width: '92%' }} type="text" name='planning_description' className="from__input" defaultValue={selectEditData.planning_description} id="inputGroup-sizing-default" label="Descrição" placeholder="Descrição" multiline rows={4} disabled/>

      <button className="btn btn-primary m-1" type='submit'>EDITAR</button>
      <button className="btn btn-danger m-1" onClick={handleCancelButton}>Fechar</button>
    </Box>
  </div>
  )
}

export default EditarPdiC