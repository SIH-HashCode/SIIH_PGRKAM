import React from 'react';
import ReactApexChart from 'react-apexcharts';
const educationLevels = [
  "Skill Training",
  "Jobs For Women(govt)",
  "Jobs For Women(prvt)",
  "Notifications",
  "Disability",
  "Armed Forces(Girl)",
  "Armed Forces(Boy)",
  "Local Services",
  "Counselling",
  "Pvt Jobs",
  "Downloads",
  "Govt Jobs",
  "Home"
];


const Column = ({data,indx}) => {

 const [arr,setArr]= React.useState([]) ;
    
 const finalArray = Object.entries(data).map(([key, value]) => ({
    key: key,
    value: Object.entries(value).map(([k,v])=>({
        page:k,
        count:v
    }))
  }));
   //console.log(finalArray[0].value)
   const valuesArray = finalArray[indx].value.map(obj => Object.values(obj)[1]);
   const array  = Object.entries(valuesArray).map(([key, value]) => value);
   console.log(array)
  const chartData = {
    series: [{
      name: 'No. of People',
      data: array,
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
        toolbar:{
            show:false
        }
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
    <div id="chart"  style={{maxWidth:"100%",background:"#fff",padding:"1rem",borderRadius:"20px",overflow:"scroll"}}>
      <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
    </div>
  );
};

export default Column;