import React from "react";
import ReactApexChart from "react-apexcharts";
import styles from "./SimpleBar.module.scss"
const SimpleBar = () => {
    const chartOptions = {
        chart: {
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          categories: ["Agriculture", "IT", "Chemicals", "Medical", "Pharmacist"],
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
      name: "Monthly Sales",
      data: [50, 30, 60, 20, 40],
    },
  ];

  return (
    <div className={styles.bars}>
      <p>TRENDING JOBS ON PORTAL</p>
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
