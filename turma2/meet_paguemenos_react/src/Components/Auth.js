import { useContext } from "react"
import { useGerentes } from '../hooks/useGerentes';
import { useColaboradores } from '../hooks/useColaboradores';
import { UserContext } from "../context/UserContext";
import LogoPageMenos from '../Assets/Logo/LogoConect.png';
import './Auth.css';

const Auth = () => {
    const { gerentes } = useGerentes([]);
    const { colaboradores } = useColaboradores([]);
    const { idGerentes, idColaboradores, handleIdGerentes, handleIdColaboradores, nivelUser } = useContext(UserContext);

    return (
        <>
            <div className="signinLogin__header">
                <img className='login__img' src={LogoPageMenos} alt="Lodo da MeetPagemenos" />
                <div>
                    <br></br>
                    <select className="btn btn-primary login_button_filho" onChange={handleIdGerentes} >
                        <option>Selecione um Gerente</option>
                        {gerentes.map((gerente) => (
                            <option key={gerente.manager_id} value={gerente.manager_id}>{gerente.manager_name}</option>
                        ))}
                    </select>
                </div>
                <br/>
                <div>
                    <br></br><br></br>
                    <select className="btn btn-primary login_button_filho" onChange={handleIdColaboradores} >
                        <option>Selecione um Colaborador</option>
                        {colaboradores.map((colaborador) => (
                            <option key={colaborador.collaborator_id} value={colaborador.collaborator_id}>{colaborador.collaborator_name}</option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    )
}

export default Auth