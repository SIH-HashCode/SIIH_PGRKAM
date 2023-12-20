import React, { useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { fetchUsersByEducationCount } from '../../../api';

function organizeData(data) {
    const order = [
        "No Schooling",
        "5th",
        "8th",
        "10th",
        "12th",
        "Diploma After 10th",
        "Diploma After 12th",
        "Graduate",
        "ITI",
        "M Phill",
        "PG Diploma",
        "Phd",
        "Post Graduate"
    ];

    // Create an object to store the order of each item
    const orderDict = {};
    order.forEach((category, index) => {
        orderDict[category] = index;
    });

    // Sort the data based on the order dictionary
    const sortedData = Object.entries(data).sort((a, b) => orderDict[a[0]] - orderDict[b[0]]);

    // Format the result as key-value pairs
    const result = sortedData.map(item => ({ [item[0]]: item[1] }));

    return result;
}


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

 const [arr,setArr]= React.useState([]) ;
    
    useEffect(()=>{
    
    async function fetchData()
    {
    
    const nums =await fetchUsersByEducationCount() ;
    console.log("course",nums) ;
    setArr(nums.data) ;
    }
    
    fetchData() ;
    
    },[])
    
   const finalArray=Object.values(organizeData(arr))
   
   const valuesArray = finalArray.map(obj => Object.values(obj)[0]);
  const chartData = {
    series: [{
      name: 'No. of People',
      data: valuesArray,
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
