import React, { useState, useEffect, useContext } from 'react'
import {Chart as ChartJS, BarElement} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { UserContext } from "../../../context/UserContext";
import { useGerentes } from "../../../hooks/useGerentes";
import { useSchedules } from "../../../hooks/useSchedules";
import { useFeedbacks } from "../../../hooks/useFeedbacks";
import { usePdi } from "../../../hooks/usePdi";
import { useColaboradores } from '../../../hooks/useColaboradores';

ChartJS.register(
  BarElement,
);


const BarChart1 = () => {
    const [chart, setChart] = useState({})

    const { gerentes } = useGerentes([]);
    const { colaboradores } = useColaboradores([]);
    const { idGerentes } = useContext(UserContext);
    const { feedbacks, setFeedbacks } = useFeedbacks([]);
    const { schedules, setSchedules } = useSchedules([]);
    const { pdis, setPdi } = usePdi([]);

//   var baseUrl = "https://api.coinranking.com/v2/coins/?limit=10";
//   var proxyUrl = "https://cors-anywhere.herokuapp.com/";
//   var apiKey = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";


//   useEffect(() => {
//     const fetchCoins = async () => {
//       await fetch(`${proxyUrl}${baseUrl}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'x-access-token': `${apiKey}`,
//           'Access-Control-Allow-Origin': "*"
//         }
//       })
//         .then((response) => {
//           if (response.ok) {
//             response.json().then((json) => {
//               console.log(json.data);
//               setChart(json.data)
//             });
//           }
//         }).catch((error) => {
//           console.log(error);
//         });
//     };
//     fetchCoins()
//   }, [baseUrl, proxyUrl, apiKey])

//   console.log("chart", chart);
  var data = {
    // {schedules.filter(schedule => schedule.schedule_manager_id == idGerentes).filter(filterSchedule => filterSchedule.schedule_name_collaborator.toLowerCase().includes(seach.toLowerCase()) || filterSchedule.schedule_topic.toLowerCase().includes(seach.toLowerCase())).map(schedule => {
        
    labels: pdis.map(x => x.planning_name_collaborator),
    datasets: [{
      label: `TOTAL DE PDIS: ${pdis.length}`,
      data: pdis.map(x => x.planning_progess),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  }
// })}

  var options = {
    maintainAspectRatio: false,
    scales: {},
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  }

  return (
    <div>
      <Bar data={data} height={400} options={options}/>
    </div>
  )
}

export default BarChart1
