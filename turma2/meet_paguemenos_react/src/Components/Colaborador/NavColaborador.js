import React from 'react'
// My img
import Logo from "../../Assets/Logo/LogoConect.png";
import PerfilColaborador from "../../Assets/Perfils/usuario.jpg"
import MenuColaborador from './MenuColaborador';
// parecida com teg ancora a 
import { Link } from "react-router-dom";

function NavColaborador() {
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
            <img
              className="LogoNav navbar-brand p-0 me-lg-2"
              src={Logo}
              alt="teste"
            />
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
              src={PerfilColaborador}
              alt="Neymar Estagiario da Tech Leads"
            />
            <h2> </h2>
            <p>Colaborador</p>
            <MenuColaborador />
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavColaborador