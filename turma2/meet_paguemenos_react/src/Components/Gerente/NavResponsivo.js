// MY CSS
import "../../Styles/NavResponsivo.css";
import "../../Styles/FotodePerfil.css"
// My img
import Logo from "../../Assets/Logo/LogoConect.png";
import PerfilGerente from "../../Assets/Perfils/usuario.jpg";
// parecida com teg ancora a 
import { Link } from "react-router-dom";
import { useGerentes } from "../../hooks/useGerentes";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext"

function NavResponsivo() {

  const { gerentes } = useGerentes([]);
  const { idGerentes } = useContext(UserContext);

  return (
    <header className="headerNav d-flex align-items-start fixed-top">
      <nav className="navbar navbar-expand-lg">
        <div className="headerConteiner container-fluid">
          <a
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </a>
          <Link to="/">
            <img className="LogoNav navbar-brand p-0 me-lg-2" src={Logo} alt="MeetPmenos"/>
          </Link>
        </div>
      </nav>
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
        <div className="sesaoPerfil">
        <img
          className="fotoDePerfil"
          src={PerfilGerente}
          alt="Marcos Gerente da Tech Leads"
        />
        {gerentes.filter(gerente => gerente.manager_id == idGerentes).map(gerente => {
          return (
            <div key={gerente.manager_id}>
              <h4 className="gerente__nome">{gerente.manager_name}</h4>
              <h6 className="gerente__cargo">{gerente.manager_function}</h6>
            </div>
          )
          })}
      </div>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <Link to="/AGerente" className="MenuGerente__Link" >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed MenuGerente__Button">
                  <i className="bi bi-journal-plus"></i> Agendar
                  </button>
                </h2>
              </div>
            </Link>
            <Link to="/PGerente" className="MenuGerente__Link" >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed MenuGerente__Button"><i className="bi bi-clipboard2-data"></i> Pdi</button>
                </h2>
              </div>
            </Link>
            <Link to="/HGerente" className="MenuGerente__Link">
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed MenuGerente__Button"><i className="bi bi-clock-history"></i> Históricos</button>
                </h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavResponsivo;
