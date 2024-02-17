import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { useColaboradores } from "../hooks/useColaboradores";
import { useSchedules } from "../hooks/useSchedules";

const PageGerente = () => {
    const { colaboradores } = useColaboradores([]);
    const { schedules } = useSchedules([]);
    const { idColaboradores } = useContext(UserContext);

  return (
    <div>
      <h2>Minhas Reuniões</h2>
      {colaboradores.filter(Colaborador => Colaborador.collaborator_id == idColaboradores).map(filterColaborador => (
        <div key={filterColaborador.collaborator_id}> Olá {filterColaborador.collaborator_name}  </div>
      ))}

      <table border={"2px"} cellPadding={"5px"}>
        <thead>
          <tr>
            <th>ID da Reunião</th>
            <th>Nome do Gerente</th>
            <th>Titulo</th>
            <th>Descrição</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {schedules.filter(schedule => schedule.schedule_collaborator_id == idColaboradores).map(filterSchedule => ( <tr key={filterSchedule.schedule_id}>
                <td>{filterSchedule.schedule_id}</td>
                <td>{filterSchedule.schedule_name_creator}</td>
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


