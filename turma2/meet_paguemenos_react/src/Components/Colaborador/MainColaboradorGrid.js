import React from 'react'
// MY COMPONENT
// 2- reapreoveitamento de estrutura
import { Outlet } from 'react-router-dom';
import MenuColaborador from './MenuColaborador';
import NavColaborador from './NavColaborador';

function MainColaboradorGrid() {
  return (
    <main>
      <NavColaborador />
      <div className="container-fluid text-center mt-51">
        <div className="row">
          <div className="col-2"><MenuColaborador/></div>
          <div className="col-10 Calendario"><Outlet/></div>
        </div>
      </div>
    </main>
  )
}

export default MainColaboradorGrid