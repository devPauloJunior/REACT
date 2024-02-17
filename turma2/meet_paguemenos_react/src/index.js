import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErroPege from './Components/ErroPege';
import RelatorioColaborador from './Components/Colaborador/RelatorioColaborador';
import AdicionarFeedback from './Components/Gerente/Feedback/AdicionarFeedback';
import ListarReunioes from './Components/Gerente/Agendar/ListarReunioes';
import ListarReunioesC from './Components/Colaborador/Agendar/ListarReunioesC';
import ListarPdi from './Components/Gerente/Pdis/ListarPdi';
import ListarPdiC from './Components/Colaborador/Pdi/ListarPdiC';
import Historico from './Components/Gerente/Historico/Historico';
import HistoricoC from './Components/Colaborador/HistoricoC/Historico';
import Relatorios from './Components/Gerente/Relatorios/Relatorios';
import ListarFeedback from './Components/Gerente/Feedback/ListarFeedback';
import GraficoGeral from './Components/Gerente/Graficos/GraficoGeral';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErroPege />,
    children: [
      {
        path: "/PGerente",
        element: <ListarPdi />
      },
      {
        path: "/PColaborador",
        element: <ListarPdiC />
      },
      {
        path: "/HGerente",
        element: <Historico />
      },
      {
        path: "/HColaborador",
        element: <HistoricoC />
      },
      {
        path: "/",
        element: <ListarReunioes />
      },
      {
        path: "/AGerente",
        element: <ListarReunioes />
      },
      {
        path: "/AColaborador",
        element: <ListarReunioesC />
      },
      {
        path: "/ListarFeedback",
        element: <ListarFeedback />
      },
      {
        path: "/AddFeedback",
        element: <AdicionarFeedback />
      },
      {
        path: "/RGerente",
        element: <Relatorios />
      },
      {
        path: "/RColaborador",
        element: <RelatorioColaborador />
      },
      {
        path: "/GGrafico",
        element: <GraficoGeral />
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
