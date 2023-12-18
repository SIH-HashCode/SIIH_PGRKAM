import React from 'react';
import Chart from 'react-apexcharts';

const MultiAxis = () => {
  const options = {
    chart: {
      id: 'multi-axis-chart',
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
      stroke: {
        width: 4, // Set the width of the line
        dashArray: 0, // Set the dash array for the line (0 for solid line)
        curve: 'smooth', // Set the curve for the line
        dropShadow: {
          enabled: true,
          top: 0,
          left: 0,
          blur: 5,
          opacity: 0.1,
        },
      },
    },
  ];

  return (
   <div className={styles.multiaxis}>
     <div className={styles.chart}>
      <Chart options={options} series={series} type="line" height={350} />
    </div>
   </div>
  );
};

export default MultiAxis;
