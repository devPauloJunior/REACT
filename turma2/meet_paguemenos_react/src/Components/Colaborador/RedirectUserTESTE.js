import React from 'react'
import LogoPageMenos from '../../Assets/Logo/LogoConect.png'
// import './SigninLogin.css'
import { useGerentes } from '../../hooks/useGerentes'
import { useColaboradores } from '../../hooks/useColaboradores'

const RedirectUser = ({ handleGerenteUpdate, handleColaboradorUpdate }) => {

  const { gerentes } = useGerentes([])
  const { colaboradores } = useColaboradores([])

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='signinLogin__header'>
      <img className='login__img' src={LogoPageMenos} alt="Logo da MeetPagemenos" />
      <form className='login__button' onSubmit={handleSubmit}>
        <input type='hidden' value="14" />
        <button onClick={handleGerenteUpdate} type="submit" className="btn btn-primary login_button_filho">Gerente</button>
        <button onClick={handleColaboradorUpdate} type="submit" className="btn btn-primary login_button_filho">Colaborador</button>
      </form>
      {/* <br></br>
      <h2>Gerentes:</h2>
      <select className="btn btn-primary login_button_filho" onChange={ handleGerenteUpdate }>
        {gerentes.map((gerente) => (
          <option key={gerente.manager_id} value={ gerente.manager_id }>{ gerente.manager_name }</option>
        ))}
      </select>
      <h2>Colaboradores:</h2>
      <select className="btn btn-primary login_button_filho" onChange={ handleColaboradorUpdate }>
        {colaboradores.map((colaborador) => (
          <option key={colaborador.collaborator_id} value={ colaborador.collaborator_id }>{ colaborador.collaborator_name }</option>
        ))}
      </select> */}
    </div>
  )
}

export default RedirectUser;