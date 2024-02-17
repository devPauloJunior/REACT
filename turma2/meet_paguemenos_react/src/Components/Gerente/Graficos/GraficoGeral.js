import React, { useState, useEffect } from 'react'
import { UserData } from "./Data";
import { useGerentes } from "../../../hooks/useGerentes";

// import { UserData } from "./DataBase";
import { getcolaboradores } from '../../../Service/ApiService';
import BarChart from './BarChart';
import BarChart1 from './BarChart1';
// import LineChart from './components/LineChart';
// import PieChart from './components/PieChart';

const GraficoGeral = () => {
    const [colaboradores, setColaboradores] = useState([])

    useEffect(() => {
    let mount = true
    getcolaboradores()
    .then(res => {console.log(res)
        setColaboradores(res)
        return() => mount = false
    })
    }, [])
    
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.name), //collaborator_name
        datasets: [{
          label: "",
          data: UserData.map((data) => data.userLost),
          backgroundColor: [
            "rgab(75, 192, 192, 1)",
            // "red",
            // "#0079c2",
            "#ecf0f1",
            "#50af95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 0.6,
        }],
    })
    
  return (
  <div class="container_white">
      <h2>Gráfico Geral de Plano de Desenvolvimento Individual</h2>
      <div class="container_white">
          <div style={{width: 900 }}>
              {/* <BarChart chartData={userData}/> */}
              <BarChart/>
          </div>
      </div>
  </div>    
  )
}

export default GraficoGeral;