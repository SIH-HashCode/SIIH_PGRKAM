import React from 'react';
import ReactApexChart from 'react-apexcharts';

const educationLevels = [
  "No Schooling",
  "5th",
  "8th",
  "10th",
  "12th",
  "DIPLOMA AFTER 10TH",
  "Diploma",
  "AFTER 12TH",
  "ITI",
  "Graduate",
  "PG Diploma",
  "M. Phill",
  "PHD"
];


const ColumnGraph = () => {
  const chartData = {
    series: [{
      name: 'No. of People',
      data: [2, 3, 4, 10, 4, 3, 3, 2, 1, 8, 5, 2],
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 5,
          columnWidth: '15%', // Adjust the width as needed, e.g., '10%'
          horizontal: false,
        },
      },
      dataLabels: {
        enabled: true,
        offsetY: -20,
        style: {
          fontSize: '0px',
          colors: ["#304758"],
        },
      },
      xaxis: {
        categories: educationLevels,
        position: 'bottom',
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          
        },
      },
      title: {
        floating: true,
        align: 'center',
        style: {
          color: '#444',
        },
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
    </div>
  );
};

export default ColumnGraph;
