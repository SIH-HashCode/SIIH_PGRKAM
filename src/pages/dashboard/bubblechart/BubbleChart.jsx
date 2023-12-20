import React from 'react';
import ReactApexChart from 'react-apexcharts';
import styles from "./BubbleChart.module.scss"
import qmark from "../../../assets/qmark.svg"
import { Tooltip } from '@mui/material';
const BubbleChart = () => {
  const data = { "Youtube": 1000, "Linkedin": 500, "NewsPaper": 4004,"NewsChannels":4000,"Social Media":1000,"Referrences":2000,"Others":3000 };

  // Convert data to series format
  const series = Object.keys(data).map((key, index) => ({
    name: key,
    data: [{ x: index + 1, y: data[key], z: 50* data[key]}],
    // Adjust the scaling factor for bubble size (e.g., * 4)
  }));

  const options = {
    chart: {
      height: 350,
      type: 'bubble',
      fontFamily: 'Open Sans',
      fontSize:"10",
      toolbar:{
        show:false
      }
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
      gradient: {
        enabled: false,
      },
    },
    yaxis:{
      show:true,
    },
    xaxis: {
      categories: Object.keys(data),
      title: {
        text: 'Categories',
      },
    },
    grid: {
        show: false, // Set to false to remove grid lines
      },
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        return (
          '<div class="arrow_box">' +
          '<span>' +
          series[seriesIndex].name +
          ': ' +
          series[seriesIndex].data[dataPointIndex].y +
          '</span></div>'
        );
      },
    },
    toolbar: {
        show: false, // Set to false to disable download options
      },
  };

  return (
    <div className={styles.bubble}>
       <div className={styles.head}>
        <p className={styles.head}>WHERE USERS SPOTTED PGRKAM ADVERTISEMENT</p>
        <Tooltip title="This shows total number of users on mobile or web application at a particular instance of time." arrow>
            <div className={styles.qmark} style={{cursor:'pointer'}}>
            <img src={qmark} />
            </div>
            </Tooltip>
        </div>
      <ReactApexChart options={options} series={series} type="bubble" height={350} />
    </div>
  );
};

export default BubbleChart;
