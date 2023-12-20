import React, { useRef, useEffect } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import styles from "./StackedBarGraph.module.scss"
const { CanvasJSChart } = CanvasJSReact;

const StackedBarGraph = () => {
  const chartRef = useRef(null);

  const toggleDataSeries = (e) => {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    chartRef.current.render();
  };

  const options = {
    animationEnabled: true,
    exportEnabled: false,
    axisY: {
     interval : 20,
     lineThickness:0,
     labelFontFamily: "Open Sans", // Set the font family for x-axis labels
     labelFontSize: 12, // Set the font size for x-axis labels
     labelFontWeight: "600", // Set the font weight for x-axis labels
     labelFontColor: "#4B4B4B", // Set the font color for x-axis labels
     gridColor: "#D8D8D8",
     tickLength:0
    },
    axisX:{
        lineThickness:0,
        labelFontFamily: "Open Sans", // Set the font family for x-axis labels
        labelFontSize: 12, // Set the font size for x-axis labels
        labelFontWeight: "600", // Set the font weight for x-axis labels
        labelFontColor: "#4B4B4B", // Set the font color for x-axis labels
        gridColor: "#D8D8D8",
        tickLength:0
    },
    toolTip: {
      shared: false,
      reversed: true,
      fontFamily: "Open Sans", // Set the font family for x-axis labels
      fontSize: 12, // Set the font size for x-axis labels
      fontWeight: "600", // Set the font weight for x-axis labels
      fontColor: "#4B4B4B", // Set the font color for x-axis labels
        },
    legend: {
      verticalAlign: "center",
      horizontalAlign: "right",
      reversed: true,
      cursor: "pointer",
      itemclick: toggleDataSeries,
      
    },
    dataPointWidth: 30,
    data: [
      {
          type: "stackedColumn",
          color:"#82CFFF",
        name: "General",
        showInLegend: false,
       
        dataPoints: [
          { label: "Jan", y: 14 },
          { label: "Feb", y: 12 },
          { label: "Mar", y: 14 },
          { label: "Apr", y: 13 },
          { label: "May", y: 13 },
          { label: "Jun", y: 13 },
        ],
    },
    {
        type: "stackedColumn",
        name: "Marketing",
        color:"#1ABCFE",
        showInLegend: false,
        dataPoints: [
          { label: "Jan", y: 13 },
          { label: "Feb", y: 13 },
          { label: "Mar", y: 15 },
          { label: "Apr", y: 16 },
          { label: "May", y: 17 },
          { label: "Jun", y: 17 },
        ],
    },
    {
        type: "stackedColumn",
        name: "Sales",
        showInLegend: false,
        color:"#1192E8",
        dataPoints: [
          { label: "Jan", y: 13 },
          { label: "Feb", y: 13 },
          { label: "Mar", y: 15 },
          { label: "Apr", y: 15 },
          { label: "May", y: 15 },
          { label: "Jun", y: 15 },
          
        ],
      },
      {
        type: "stackedColumn",
        name: "IT",
        showInLegend: false,
        color:"#00589C",
        dataPoints: [
          { label: "Jan", y: 14 },
          { label: "Feb", y: 8 },
          { label: "Mar", y: 6 },
          { label: "Apr", y: 6 },
          { label: "May", y: 5 },
          { label: "Jun", y: 5 },
         
        ],
      },
    ],
    
  };

  return (
    <div className={styles.stacked}>
      <p>District & Tehsil Distribution</p>
      <CanvasJSChart options={options} onRef={(ref) => (chartRef.current = ref)} />
    </div>
  );
};

export default StackedBarGraph;
