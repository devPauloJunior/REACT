import { Box, MenuItem, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getcolaboradores, getgerente } from '../../../Service/ApiService'

const AddPdi = ({ handleAddSubmit, handleCancelButton }) => {

  const [gerentes, setGerentes] = useState([])
  const [colaborador, setColaboradores] = useState([])

  useEffect(() => {
    let mount = true
    getgerente()
    .then(res => {
        setGerentes(res)
        return() => mount = false
    })
  }, [])

  useEffect(() => {
    let mount = true
    getcolaboradores()
    .then(res => {
      setColaboradores(res)
        return() => mount = false
    })
  }, [])

  return (
    <div className="container_white">
    <Box className='form__agendar' onSubmit={handleAddSubmit} component="form" noValidate
      autoComplete="off"><br></br>
      <h3 className="text-center">CRIAR PDI</h3><br></br>

      <TextField sx={{ m: 1, width: '50%' }} name='planning_title' type="text" className="from__input" id="inputGroup-sizing-default" label="Titulo" placeholder="Titulo" multiline />

      <TextField sx={{ m: 1, width: '40%' }} name='planning_date' className="from__input" id="inputGroup-sizing-default" label="Data Hora inicial" type="datetime-local" InputLabelProps={{
        shrink: true,
      }}
        variant="filled" />

      {gerentes.map(gerente => {
        return (
          <TextField sx={{ m: 1, width: '50%' }} type="text" name='planning_creator' defaultValue={gerente.manager_name} className="from__input" id="inputGroup-sizing-default" label="Gerente" placeholder="Gerente" disabled multiline/>
          )
      })}

      <TextField sx={{ m: 1, width: '40%' }} type="text" name='planning_contributor_name' className="from__input" id="inputGroup-sizing-default" label="Colaborador" placeholder="Colaborador" multiline select>
      {colaborador.map(colaboradores => {
        return (
          <MenuItem value={colaboradores.collaborator_name}>{colaboradores.collaborator_name}</MenuItem>
        )
      })}
      </TextField>

      <TextField sx={{ m: 1, width: '50%' }} type="text" name='planning_goals' className="from__input" id="inputGroup-sizing-default" label="Meta" placeholder="Meta" multiline />

      <TextField sx={{ m: 1, width: '40%' }} type="text" name='planning_status' className="from__input" id="inputGroup-sizing-default" label="Status" placeholder="Status" multiline />

      <TextField sx={{ m: 1, width: '50%' }} type="text" name='planning_progess' className="from__input" id="inputGroup-sizing-default" label="Progresso" placeholder="Progresso" multiline />

      <TextField sx={{ m: 1, width: '40%' }} name='planning_final_date' className="from__input" id="inputGroup-sizing-default" label="Data Hora Final" type="datetime-local" InputLabelProps={{
        shrink: true,
      }}
        variant="filled" />

      <TextField sx={{ m: 1, width: '92%' }} type="text" name='planning_resource' className="from__input" id="inputGroup-sizing-default" label="Recursos" placeholder="Recursos" multiline />

      <TextField sx={{ m: 1, width: '92%' }} type="text" name='planning_description' className="from__input" id="inputGroup-sizing-default" label="Descrição" placeholder="Descrição" multiline rows={4} />

      <button className="btn btn-primary m-1" type='submit'>Salvar</button>
      <button className="btn btn-danger m-1" onClick={handleCancelButton}>Fechar</button>
    </Box>
    </div>
  )
}

export default AddPdi