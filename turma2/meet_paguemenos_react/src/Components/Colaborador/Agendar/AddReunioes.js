import { Box, MenuItem, TextField } from '@mui/material';
import { useContext } from 'react';

import { UserContext } from "../../../context/UserContext";
import { useGerentes } from "../../../hooks/useGerentes"; // Obtém a lista de gerentes usando o hook personalizado
import { useColaboradores } from "../../../hooks/useColaboradores";// Importa um hook personalizado para obter colaboradores
import "../../Gerente/Agendar/Agendar.css";

const AddReunioes = ({ handleAddSubmit, handleCancelButton }) => {
  const { gerentes } = useGerentes([]); // Obtém a lista de gerentes usando o hook personalizado
  const { colaboradores } = useColaboradores([]); // Obtém a lista de colaboradores usando o hook personalizado
  const { idGerentes, idColaboradores } = useContext(UserContext);

  return (
    <>
      <div className="container_white">
        <Box onSubmit={handleAddSubmit} component="form" noValidate autoComplete="off">
          <h3 className="text-center">AGENDAR REUNIÃO</h3><br></br> { /*Cria um formulário usando o componente Box do Material UI */}

          {colaboradores.filter(colaborador => colaborador.collaborator_id == idColaboradores).map(colaborador => {
            return (
              <TextField sx={{ m: 1, width: '40.5%' }} type="text" name='schedule_name_collaborator' key={colaborador.collaborator_id} defaultValue={colaborador.collaborator_name} className="from__input" id="inputGroup-sizing-default" label="Colaborador" placeholder="Colaborador" disabled multiline />
            )
          })}

          {colaboradores.filter(colaborador => colaborador.collaborator_id == idColaboradores).map(colaborador => {
            return (
              <TextField sx={{ m: 1, width: '8%' }} type="text" name='schedule_collaborator_id' key={colaborador.collaborator_id} defaultValue={colaborador.collaborator_id} className="from__input" id="inputGroup-sizing-default" label="Id Colaborador" placeholder="Id Colaborador" disabled multiline />
            )
          })}
          {/* Cria um campo de seleção para escolher um gerente */}
          <TextField sx={{ m: 1, width: '19%' }} type="text" name='schedule_name_manager' id="inputGroup-sizing-default" label="Gerente" placeholder="Gerente" multiline select>
            {gerentes.map(gerente => {
              return (
                <MenuItem key={gerente.manager_id} value={gerente.manager_name}>{gerente.manager_id} - {gerente.manager_name}</MenuItem>
              )
            })}
          </TextField>
          {/* Cria um campo de seleção para o ID do gerente */}
          <TextField sx={{ m: 1, width: '19%' }} type="text" name='schedule_manager_id' className="from__input" id="inputGroup-sizing-default" label="Id Gerente" placeholder="Id Gerente" multiline select>
            {gerentes.map(gerente => {
              return (
                <MenuItem key={gerente.manager_id} value={gerente.manager_id}>{gerente.manager_id}</MenuItem>
              )
            })}
          </TextField>
          {/* Cria campos de texto para o título, data, hora, local e duração da reunião*/}
          <TextField sx={{ m: 1, width: '50%' }} name='schedule_topic' type="text" className="from__input" id="inputGroup-sizing-default" label="Titulo" placeholder="Titulo" multiline />

          <TextField sx={{ m: 1, width: '19%' }} type="date" name='schedule_date' className="from__input" id="inputGroup-sizing-default" label="Data" InputLabelProps={{
            shrink: true,
          }} />

          <TextField sx={{ m: 1, width: '19%' }} type="time" name='schedule_hour' className="from__input" id="inputGroup-sizing-default" label="Hora" InputLabelProps={{
            shrink: true,
          }} />

          <TextField sx={{ m: 1, width: '50%' }} type="text" name='schedule_meet_location' className="from__input" id="inputGroup-sizing-default" label="Local" placeholder="Local" multiline />

          <TextField sx={{ m: 1, width: '40%' }} type="text" name='schedule_duration' className="from__input" id="inputGroup-sizing-default" label="Duração" placeholder="30min" multiline select>
            <MenuItem value="30">30 minutos</MenuItem>
            <MenuItem value="45">45 minutos</MenuItem>
            <MenuItem value="60">60 minutos</MenuItem>
          </TextField>
          { /*Cria um campo de texto para a descrição da reunião */}
          <TextField sx={{ m: 1, width: '92%' }} type="text" name='schedule_description' className="from__input" id="inputGroup-sizing-default" label="Descrição" placeholder="Descrição" multiline rows={4} />

          { /*Cria um campo oculto para o status da reunião */}
          <input type='hidden' name='schedule_status' defaultValue={0} />
          <br></br>

          {/* Botões para salvar e fechar o formulário  */}
          <button className="btn btn-primary m-1" type='submit'>Salvar</button>
          <button className="btn btn-danger m-1" onClick={handleCancelButton}>Fechar</button>
          <br></br>
        </Box>
      </div>
    </>
  )
}

export default AddReunioes;
