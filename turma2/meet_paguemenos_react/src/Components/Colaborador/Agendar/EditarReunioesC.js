import { Box, MenuItem, TextField } from '@mui/material';
import { useContext } from 'react';

import { UserContext } from "../../../context/UserContext";
import { useGerentes } from "../../../hooks/useGerentes";
import { useColaboradores } from "../../../hooks/useColaboradores";
import "../../Gerente/Agendar/Agendar.css";


const EditarReunioesC = ({ handleEditSubmit, selectEditData, handleCancelButton }) => {
  const { gerentes } = useGerentes([]);
  const { colaboradores } = useColaboradores([]);
  const { idGerentes, idColaboradores } = useContext(UserContext);
  // Usa hooks personalizados para obter listas de gerentes e colaboradores.
  return (
    <>
      <div className="container_white">
        {/* Cria um formulário com alguns campos para editar informações de reuniões. */}
        <Box onSubmit={(e) => handleEditSubmit(e, selectEditData.schedule_id)} component="form" noValidate
          autoComplete="off">
          <h3 className="text-center">EDITAR REUNIÃO</h3><br></br>
          {/* Campo de texto para o nome do colaborador, desativado (não editável). */}
          <TextField sx={{ m: 1, width: '40.5%' }} type="text" name='schedule_name_collaborator' defaultValue={selectEditData.schedule_name_collaborator} className="from__input" id="inputGroup-sizing-default" label="Colaborador" placeholder="Colaborador" disabled />
          {/* Campo de texto para o ID do colaborador, desativado (não editável). */}
          <TextField sx={{ m: 1, width: '8%' }} type="text" name='schedule_collaborator_id' defaultValue={selectEditData.schedule_collaborator_id} className="from__input" id="inputGroup-sizing-default" label="Id Colaborador" placeholder="Id Colaborador" disabled multiline />

          <TextField sx={{ m: 1, width: '19%' }} type="text" defaultValue={selectEditData.schedule_name_manager} name='schedule_name_manager' id="inputGroup-sizing-default" label="Gerente" placeholder="Gerente" multiline select>
            {gerentes.map(gerente => {
              return (
                <MenuItem key={gerente.manager_id} value={gerente.manager_name}>{gerente.manager_id} - {gerente.manager_name}</MenuItem>
              )
            })}
          </TextField>
          {/* Campo de seleção para o ID do gerente. */}
          <TextField sx={{ m: 1, width: '19%' }} type="text" defaultValue={selectEditData.schedule_manager_id} name='schedule_manager_id' className="from__input" id="inputGroup-sizing-default" label="Id Gerente" placeholder="Id Gerente" multiline select>
            {gerentes.map(gerente => {
              return (
                // Opções para escolher o ID do gerente.
                <MenuItem key={gerente.manager_id} value={gerente.manager_id}>{gerente.manager_id}</MenuItem>
              )
            })}
          </TextField>
          {/* Outros campos de entrada para informações da reunião, como título, data, hora, local, duração e descrição. */}
          <TextField sx={{ m: 1, width: '50%' }} name='schedule_topic' type="text" defaultValue={selectEditData.schedule_topic} className="from__input" id="inputGroup-sizing-default" label="Titulo" placeholder="Titulo" />

          <TextField sx={{ m: 1, width: '19%' }} type="date" defaultValue={selectEditData.schedule_date} name='schedule_date' className="from__input" id="inputGroup-sizing-default" label="Data" InputLabelProps={{
            shrink: true,
          }} />

          <TextField sx={{ m: 1, width: '19%' }} type="time" defaultValue={selectEditData.schedule_hour} name='schedule_hour' className="from__input" id="inputGroup-sizing-default" label="Hora" InputLabelProps={{
            shrink: true,
          }} />

          <TextField sx={{ m: 1, width: '50%' }} type="text" defaultValue={selectEditData.schedule_meet_location} name='schedule_meet_location' className="from__input" id="inputGroup-sizing-default" label="Local" placeholder="Local" multiline />

          <TextField sx={{ m: 1, width: '40%' }} type="text" defaultValue={selectEditData.schedule_duration} name='schedule_duration' className="from__input" id="inputGroup-sizing-default" label="Duração" placeholder="30min" multiline select>
            <MenuItem value="30">30 minutos</MenuItem>
            <MenuItem value="45">45 minutos</MenuItem>
            <MenuItem value="60">60 minutos</MenuItem>
          </TextField>

          <TextField sx={{ m: 1, width: '92%' }} type="text" defaultValue={selectEditData.schedule_description} name='schedule_description' className="from__input" id="inputGroup-sizing-default" label="Descrição" placeholder="Descrição" multiline rows={4} />
          {/* Campo oculto para definir o status da reunião. */}
          <input type='hidden' name='schedule_status' defaultValue={0} />
          <br></br>
          {/* Botão para enviar o formulário de edição. */}
          <button className="btn btn-primary m-1" type='submit'>EDITAR</button>
          {/* Botão para fechar o formulário de edição. */}
          <button className="btn btn-danger m-1" onClick={handleCancelButton}>Fechar</button>
        </Box>
      </div>
    </>
  )
}

export default EditarReunioesC