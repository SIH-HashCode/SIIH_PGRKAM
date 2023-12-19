import React from 'react';
import Chart from 'react-apexcharts';
import styles from "./MultiAxisGraph.module.scss"
const MultiAxis = () => {
  const options = {
    chart: {
      id: 'multi-axis-chart',
      toolbar:{
        show:false
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show:false,
        },
        title: {
          style: {
            color: '#1192E8',
          },
        },
      },
    ],
    colors: ['#F24E1E'],
  };

  const series = [
    {
      name: 'Line Chart',
      type: 'line',
      data: [23, 12, 54, 61, 32, 56, 12, 34, 56, 21, 45, 23],
    },
  ];

  return (
   <div className={styles.multiaxis}>
    <p>NEW USERS ON APPLICATION</p>
     <div className={styles.chart}>
      <Chart options={options} series={series} type="line" height={350} />
    </div>
   </div>
  );
};

export default MultiAxis;
