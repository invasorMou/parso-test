import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: [],
  datasets: [
    {
      label: 'Values',
      data: [],
      backgroundColor: [
        'rgba(54, 162, 235, 0.5)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const Bars = () => {
  const [values, setValues] = useState(data)
  
  useEffect(
    () => {
      fetch('/data')
        .then(response => response.json())
        .then(json => {
          setValues(prevState => {
            return {
              ...prevState,
              labels: json.data.map( d => d[0]),
              datasets: [{
                ...prevState.datasets[0],
                data: json.data.map( d => d[1]),
              }],
              
            }
          })
        })
    },
    []
  )
  return (
    <article className="graph">
    <h2>Weekly Values</h2>
    <Bar data={values} options={options} />
    </article>
  );
}

export default Bars;