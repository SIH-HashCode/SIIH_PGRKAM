import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChartAge = () => {
  // Calculate the minimum value in your data array (replace this with your actual data)
  const data = [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380];
  const mini = Math.min(...data);

  // Calculate the rounded minimum value to the nearest multiple of 100
  const roundedMini = Math.round(mini / 100) * 100;

  // Define color ranges dynamically based on the rounded minimum value
  const colorRanges = [
    { from: 0, to: roundedMini, color: '#E8DAFF' },
    { from: roundedMini + 1, to: roundedMini + 100, color: '#D4BBFF' },
    { from: roundedMini + 101, to: roundedMini + 200, color: '#BE95FF' },
    { from: roundedMini + 201, to: roundedMini + 300, color: '#A56EFF' },
    { from: roundedMini + 301, to: roundedMini + 400, color: '#8A3FFC' },
    { from: roundedMini + 401, to: roundedMini + 500, color: '#6929C4' },
    { from: roundedMini + 501, to: roundedMini + 600, color: '#491D8B' },
    { from: roundedMini + 601, to: roundedMini + 700, color: '#31135E' },
    { from: roundedMini + 701, to:Infinity, color: '#1C0F30' },
  ];

  const options = {
    chart: {
      type: 'bar',
      height: 500,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
        colors: {
          ranges: colorRanges,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        '18-22 yrs',
        '23-27 yrs',
        '28-32 yrs',
        '33-37 yrs',
        '38-42 yrs ',
        '43-47 yrs',
        '48-52 yrs',
        '53-59 yrs',
        '60+ yrs ',
      ],
    },
  };

  const series = [
    {
      data: data,
    },
  ];

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bar" height={500} />
    </div>
  );
};

export default LineChartAge;
