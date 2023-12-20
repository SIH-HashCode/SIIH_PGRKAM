import React, { useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { fetchUsersByAge } from '../../../api';


const ageRanges = [
  { min: 18, max: 22 },
  { min: 23, max: 27 },
  { min: 28, max: 32 },
  { min: 33, max: 37 },
  { min: 38, max: 42 },
  { min: 43, max: 47 },
  { min: 48, max: 52 },
  { min: 53, max: 59 },
  { min: 60, max: Infinity },
];






const LineChartAge = () => {

    const [arr,setArr]= React.useState([]) ;
    
    useEffect(()=>{
    
    async function fetchData()
    {
    
    const nums =await fetchUsersByAge() ;
    console.log("nums",nums) ;
    setArr(nums.data) ;
    }
    
    fetchData() ;
    
    },[])
    
    
    const ageRangeData = ageRanges.map(({ min, max }) => ({
  range: `${min}-${max} yrs`,
  value: Object.entries(arr)
    .filter(([age]) => min <= age && age <= max)
    .reduce((sum, [, value]) => sum + value, 0),
}));

const sortedAgeRangeData = ageRangeData.sort((a, b) => {
  const aMin = parseInt(a.range.split('-')[0]);
  const bMin = parseInt(b.range.split('-')[0]);
  return aMin - bMin;
});


    console.log("srrrr",sortedAgeRangeData);
    
    const sortedValues = sortedAgeRangeData.map(({ value }) => value);
  // Calculate the minimum value in your data array (replace this with your actual data)
  const data =sortedValues.reverse();
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
      toolbar:{
        show:false
      }
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
        '60+ yrs ',
'53-59 yrs',
'48-52 yrs',
'43-47 yrs',
'38-42 yrs ',
'33-37 yrs',
'28-32 yrs',
'23-27 yrs',
'18-22 yrs',
      ],
    },
  };

  const series = [
    {
      data: data,
    },
  ];

  return (
    <div id="chart" style={{width:"100%",background:"#fff",borderRadius:"20px"}}>
      <ReactApexChart options={options} series={series} type="bar" height={500} />
    </div>
  );
};

export default LineChartAge;
