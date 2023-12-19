// Import necessary libraries
import styles from "./Areagraph.module.scss"
import React from 'react';
import Chart from 'react-apexcharts';

// Data for the area chart
const areaChartData = [
  {
    name: 'Web Site Traffic',
    data: [30, 40, 350, 50, 150, 270, 70, 121, 125],
    color : "#1ABCFE"
  },
  {
    name: 'Mobile Application Traffic',
    data: [201, 30, 25, 110, 39, 50, 60, 147, 105],
    color : "#F24E1E"
  },
];

// Options for ApexCharts
const areaChartOptions = {
  chart: {
    type: 'area',
  },
  xaxis: {
    show:false
  },
  yaxis: {
   show:false
  },
  tooltip: {
    shared: false,
  },
  grid: {
    show: false, // Hide horizontal grid lines
  },
  dataLabels: {
    enabled: false, // Set to true if you want to display data labels on the chart
  },
};

// Define the React component
const Areagraph = () => {
  return (
   <div className={styles.areagraph}>
    <div className={styles.container}>
        Traffic
    </div>
    <div className={styles.chart}>
    <Chart
      options={areaChartOptions}
      series={areaChartData}
      type="area"
      height={350}
    />
    </div>
   </div>
  );
};

export default Areagraph;
