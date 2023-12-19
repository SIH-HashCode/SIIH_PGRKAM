import React from 'react';
import ReactApexChart from 'react-apexcharts';
import styles from "./RadarGraph.module.scss"
const RadarGraph = () => {
  const chartOptions = {
  
    chart: {
       
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ['Sales', 'Marketing', 'Development', 'Customer Support', 'IT', 'Administration'],
    },
  };

  const chartSeries = [
    {
      name: 'Metrics',
      data: [80, 60, 75, 50, 70, 60],
      stroke: {
        color: 'red', // Specify the color you want
        width: 4, // Specify the line width
      },
    },
  ];

  return (
    <div className={styles.radar}>
      <p>TRENDING SKILLS ON PORTAL</p>
      <ReactApexChart options={chartOptions} series={chartSeries} type="radar" height={350} />
    </div>
  );
};

export default RadarGraph;
