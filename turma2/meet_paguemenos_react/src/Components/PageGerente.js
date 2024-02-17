import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { useGerentes } from "../hooks/useGerentes";
import { useSchedules } from "../hooks/useSchedules";

const PageGerente = () => {
    const { gerentes } = useGerentes([]);
    const { schedules } = useSchedules([]);
    const { idGerentes } = useContext(UserContext);

  return (
    <div>
      <h2>Minhas Reuniões</h2>
      {gerentes.filter(gerente => gerente.manager_id == idGerentes).map(filterGerente => (
        <div key={filterGerente.manager_id}> Olá {filterGerente.manager_name}  </div>
      ))}

      <table border={"2px"} cellPadding={"5px"}>
        <thead>
          <tr>
            <th>ID da Reunião</th>
            <th>Nome do Colaborador</th>
            <th>Titulo</th>
            <th>Descrição</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {schedules.filter(schedule => schedule.schedule_manager_id == idGerentes).map(filterSchedule => ( <tr key={filterSchedule.schedule_id}>
                <td>{filterSchedule.schedule_id}</td>
                <td>{filterSchedule.schedule_name_receiver}</td>
                <td>{filterSchedule.schedule_topic}</td>
                <td>{filterSchedule.schedule_description}</td>
                <td><button>Atender</button>
                  <button>Deletar</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default PageGerente


