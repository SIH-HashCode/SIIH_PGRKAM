import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import styles from "./SimpleBar.module.scss"
import Filter from "../../../Components/filter/Filterbar"
const SimpleBar = ({content,title}) => {
  const [data,setData] = useState(content);
    let chartOptions = {
        chart: {
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          categories: data.categories,
          show: false,
          axisBorder: {
            show: false,
          },
        },
        yaxis: {
          
          axisBorder: {
            show: false,
          },
          labels: {
            style: {
              fontSize: ".8rem",
              fontFamily: "Open Sans",
              fontWeight: "700",
              color: "#868686",
            },
          },
        },
        grid: {
          show: true,
          borderColor: "#D1D1D1",
          strokeDashArray: 3, // Set the dash length for grid lines
          position: 'back', // Set the position to 'back' to place the grid behind the bars
          xaxis: {
            lines: {
              show: false, // Hide x-axis grid lines
            },
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: "25%",
            borderRadius: 8,         
          },
        },
      };

  const chartSeries = [
    {
      name: "Count",
      data: data.values,
    },
  ];
  return (
    <div className={styles.bars}>
      <div className={styles.top}>
      <p>{title}</p>
      <Filter items={["All",  "Linkedin","Youtube","Instagram","Newspaper","Other"]} data={content} setData={setData}/>
      </div>
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height={350}
      />
    </div>
  );
};
export default SimpleBar;
