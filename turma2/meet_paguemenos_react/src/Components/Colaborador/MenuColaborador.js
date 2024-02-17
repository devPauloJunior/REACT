import { useContext } from "react";
import { Link } from "react-router-dom";
import "../../Styles/MenuGerente.css";
import "../../Styles/FotodePerfil.css";
import { useColaboradores } from "../../hooks/useColaboradores";
import { UserContext } from "../../context/UserContext";
import 'bootstrap/js/dist/dropdown';

const MenuColaborador = () => {
  const { colaboradores } = useColaboradores([]);
  const { idColaboradores } = useContext(UserContext);

  return (
    <div className="gerente__responsivo MeuGerente">

      <div className="sesaoPerfil">
        {colaboradores.filter(colaborador => colaborador.collaborator_id == idColaboradores).map(colaborador => {
          return (
            <div key={colaborador.collaborator_id}>
              <img className="fotoDePerfil" src={colaborador.collaborator} alt="Foto perfil gerente" />
              <h4 className="gerente__nome">{colaborador.collaborator_name}</h4>
              <h6 className="gerente__cargo">{colaborador.collaborator_function}</h6>
              {/* <br></br>token: {colaborador.collaborator_token} */}
            </div>
          )
        })}
      </div>
      <div className="accordion accordion-flush " id="accordionFlushExample">
        <Link to="/AColaborador" className="MenuGerente__Link " >
          <button className="accordion-button collapsed MenuGerente__Button btn__home">
            <i className="bi bi-journal-plus" />Agendar
          </button>
        </Link>
        <Link to="/PColaborador" className="MenuGerente__Link" >
          <button className="accordion-button collapsed MenuGerente__Button btn__home">
            <i className="bi bi-clipboard2-data"></i>
            <p>Pdi</p>
          </button>
        </Link>
        <Link to="/HColaborador" className="MenuGerente__Link">
          <button className="accordion-button collapsed MenuGerente__Button btn__home">
            <i className="bi bi-clock-history"></i>
            <p>Históricos</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuColaborador;