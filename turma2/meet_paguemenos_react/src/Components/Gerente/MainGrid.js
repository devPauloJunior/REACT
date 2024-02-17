import React from "react";
import "../../Styles/MainGrid.css"
import MenuGerente from "./MenuGerente";
import { Outlet } from 'react-router-dom';
import NavResponsivo from "./NavResponsivo";

const MainGrid = () => {
  return (
    <main>
      <NavResponsivo />
      <div className="container-fluid text-center mt-51">
        <div className="row">
          <div className="col-2"><MenuGerente /></div>
          <div className="col-10 Calendario"><Outlet /></div>
        </div>
      </div>
    </main>
  );
};

export default MainGrid;
