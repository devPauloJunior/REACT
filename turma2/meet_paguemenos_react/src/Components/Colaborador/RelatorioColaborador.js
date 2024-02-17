
import '../Gerente/Relatorios/Relatorios'
import React, { useEffect, useState } from 'react'
import { getgerente, getpdi } from '../../Service/ApiService';

const RelatorioColaborador = () => {

  const [pdis, setPdis] = useState([]);
  const [showPdiForm, setShowPdiForm] = useState(false);
  const [showEditPdiForm, setShowEditPdiForm] = useState(false);
  const [selectEditData, setSelectEditData] = useState();
  const [gerentes, setGerentes] = useState([])

  useEffect(() => {
    let mount = true
    getgerente()
      .then(res => {
        console.log(res)
        setGerentes(res)
        return () => mount = false
      })
  }, [])

  useEffect(() => {
    let mount = true
    getpdi()
      .then(res => {
        setPdis(res)
        return () => mount = false
      })
  }, [])



  return (
    <>
      <div className="container_white">
        <h3>LISTA DE PDIS</h3>
        <table className="form-control table table-hover ">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">TÍTULO</th>
              <th scope="col">META</th>
              <th scope="col">STATUS</th>
              <th scope="col">PROGRESSO</th>
              <th scope="col">DATA FINAL</th>
              <th scope="col">RECURSOS</th>
              <th scope="col">DESCRIÇÃO</th>
              <th scope="col">COLABORADOR</th>
              <th scope="col">GERENTE</th>
              <th scope="col">DATA DE CRIAÇÃO</th>
              <th scope="col">AÇÕES</th>
            </tr>
          </thead>
          <tbody>
            {pdis.map(pdi => {
              return (
                <tr key={pdi.planning_id}>
                  <td>{pdi.planning_id}</td>
                  <td>{pdi.planning_title}</td>
                  <td>{pdi.planning_goals}</td>
                  <td>{pdi.planning_status}</td>
                  <td>{pdi.planning_progess}</td>
                  <td>{pdi.planning_final_date}</td>
                  <td>{pdi.planning_description}</td>
                  <td>{pdi.planning_resource}</td>
                  <td>{pdi.planning_contributor_name}</td>
                  <td>{pdi.planning_creator}</td>
                  <td>{pdi.planning_date}</td>

                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}


export default RelatorioColaborador