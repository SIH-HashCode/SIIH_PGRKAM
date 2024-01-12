// Import necessary libraries
import styles from "./Areagraph.module.scss"
import React,{useState} from 'react';
import Chart from 'react-apexcharts';
import uparrow from "../../../assets/uparrow.svg"
import qmark from "../../../assets/qmark.svg"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

// Data for the area chart
const areaChartData = [
  {
    name: 'WEB SITE USAGE',
    data: [30, 40, 350, 50, 150, 270, 70, 121, 125,30, 40, 350, 50, 150, 270, 70, 121, 125,30, 40, 350, 50, 150, 270],
    color : "#7A3DD9"
  },
  {
    name: 'Mobile Application USAGE',
    data: [201, 30, 25, 110, 39, 50, 60, 147, 105,30, 40, 350, 50, 150, 270, 70, 121, 125,30, 40, 350, 50, 150, 270],
    color : "#F24E1E"
  },
];

// Options for ApexCharts
const areaChartOptions = {
  chart: {
    type: 'area',
    toolbar: {
      show: false
    }
  },
  xaxis: {
    show:false,
   
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
const Areagraph = ({count}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Add your logic for handling the selected date here
  };
  return (
   <div className={styles.areagraph}>
    <div className={styles.container}>
       <div className={styles.left}>
        <p>USER TRAFFIC</p>
       </div>
       <div className={styles.right}>
          <div className={styles.pimg}>
            <img src={uparrow}/>
            <p>{count}</p>
            <Tooltip title="This shows total number of users on mobile or web application at a particular instance of time." arrow>
            <div className={styles.qmark} style={{cursor:'pointer'}}>
            <img src={qmark} />
            </div>
            </Tooltip>
          </div>
          <div className={styles.filter}>
          <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MM-dd-yyyy" // You can customize the date format
        placeholderText="Select a date"
        className={styles.datepicker}
        popperClassName={styles.customPopper}
      />
          </div>
       </div>
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
