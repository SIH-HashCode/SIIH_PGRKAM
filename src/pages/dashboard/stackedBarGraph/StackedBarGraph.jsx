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
        name: "Amritsar",
        showInLegend: false,
       
        dataPoints: [
          { label: "Lopoke", y: 14 },
          { label: "", y: 0 },
          { label: "Rampuraphul", y: 14 },
          { label: "Kotakapura", y: 13 },
          { label: "Amloh", y: 13 },
          { label: "Abohar", y: 13 },
          { label: "Batala", y: 13 },
          { label: "Dasuya", y: 13 },
          { label: "Jalandar-I", y: 15 },
        ],
    },
    {
        type: "stackedColumn",
        name: "Marketing",
        color:"#1ABCFE",
        showInLegend: false,
        dataPoints: [
          { label: "Ajnala", y: 13 },
          { label: "Tapa", y: 13 },
          { label: "talwandi sabo", y: 15 },
          { label: "Jitu", y: 16 },
          { label: "Bassi Pathana", y: 17 },
          { label: "Jalalabad", y: 17 },
          { label: "", y: 0 },
          { label: "Pathankot", y: 10 },
          { label: "Mukeriya", y: 14 },
          { label: "Jalandar-II", y: 9 },
        ],
    },
    {
        type: "stackedColumn",
        name: "Sales",
        showInLegend: false,
        color:"#1192E8",
        dataPoints: [
          { label: "Baba Bakala", y: 13 },
          { label: "", y: 0 },
          { label: "", y: 0 },
          { label: "", y: 0 },
          { label: "Khamano", y: 15 },
          { label: "Zira", y: 15 },
          { label: "", y: 0 },
          { label: "Derababananak", y: 13 },
          { label: "GarhShankar", y: 11 },
          { label: "Nakodar", y: 16 },
          
        ],
      },
    {
        type: "stackedColumn",
        name: "Sales",
        showInLegend: false,
        color:"#27A0F1",
        dataPoints: [
          { label: "Amritsar-I", y: 15 },
          { label: "", y: 0 },
          { label: "", y: 0 },
          { label: "", y: 0 },
          { label: "", y: 0 },
          { label: "", y: 0 },
          { label: "Dhar Kalana", y: 13 },
          { label: "", y: 0 },
          { label: "Phillor", y: 10 },
          
        ],
      },
    {
        type: "stackedColumn",
        name: "Sales",
        showInLegend: false,
        color:"#3FB2FF",
        dataPoints: [
          { label: "Amritsar-II", y: 8 },
          { label: "", y: 0 },
          { label: "", y: 0 },
          { label: "", y: 0 },
          { label: "", y: 0 },
          { label: "", y: 0 },
          { label: "", y: 0 },
          { label: "", y: 0 },
          { label: "", y: 0 },
          
        ],
      },
      {
        // type: "stackedColumn",
        // name: "IT",
        // showInLegend: false,
        // color:"#00589C",
        dataPoints: [
          { label: "Amritsar", y: 14 },
          { label: "Barnala", y: 8 },
          { label: "Bhatinda", y: 6 },
          { label: "Faridkot", y: 6 },
          { label: "Fatehgarh Sahib", y: 5 },
          { label: "Firozpur", y: 5 },
          { label: "Fazilka", y: 8 },
          { label: "Gurdaspur", y: 2 },
          { label: "Hoshiyarpur", y: 4 },
          { label: "Jalandhar", y: 4 },
         
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
