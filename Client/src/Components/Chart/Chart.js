import style from './Chart.module.css'

import { Doughnut  } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function sumArrayValues(arr){
  return arr.reduce((partialSum, a) => partialSum + a, 0)
}

export default function Chart(props){


  const data = {
      labels: props.labels,
      datasets: [
        {
          data: props.data,
          backgroundColor: [
            'rgba(223, 24, 24, 0.5)',
            'rgba(238, 156, 24, 0.5)',
            'rgba(56, 168, 56, 0.5)',
            'rgba(13, 109, 0, 0.5)',

          ],
          borderColor: [
            'rgba(223, 24, 24, 1)',
            'rgba(238, 156, 24, 1)',
            'rgba(56, 168, 56, 1)',
            'rgba(13, 109, 0, 1)',
          ],
          borderWidth: 2,
          cutout: '45%',
          hoverOffset: 10
        },
      ],
    }
    
  



    return (
      <div className={style.container}>
        <ul className={style.legend}>
          <p>Total passwords: {sumArrayValues(props.data)}</p>
          {props.data.map((item, i) => <li key={i}>{props.labels[i]} : {item} </li>)}
        </ul>
        <div className={style.chart}>
          <Doughnut 
          data={data} 
          options={{plugins:{legend:{display: false}}}} //disable legend
          />
        </div>
      </div>
    )
}