import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import styles from "./MultiAxisGraph.module.scss"
import Filterbar from '../../../Components/filter/Filterbar';
import qmark from "../../../assets/qmark.svg"
const MultiAxis = () => {
  const [query,setQuery] = useState({"categories":["All"]});
  const SampleData = {
    "All" : {"categories":["11:00","12:00","13:00","14:00","15:00"],"values":[10,24,78,90,13]},
    "Last 5 hours" : {"categories":["11:00","12:00","13:00","14:00","15:00"],"values":[10,24,78,90,13]},
    "Today" : {"categories":["11:00","12:00","13:00","14:00","15:00"],"values":[10,24,78,90,13]},
    "This Month" : {"categories":["Week 1","Week 2","Week 3","Week 4"],"values":[10,24,78,13]},
    "Last 6 months" : {"categories":["Month 1","Month 2","Month 3","Month 4","Month 5"],"values":[10,24,78,90,13,47]},
  }
  const [data,setData] = useState(SampleData["All"]);
  const options = {
    chart: {
      id: 'multi-axis-chart',
      toolbar:{
        show:false
      }
    },
    xaxis: {
      categories: data.categories,
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show:false,
        },
        title: {
          style: {
            color: '#1192E8',
          },
        },
      },
    ],
    colors: ['#F24E1E'],
  };

  const series = [
    {
      name: 'Line Chart',
      type: 'line',
      data: data.values,
    },
  ];
useEffect(()=>{
  if(query && query.categories){
  setData(SampleData[query.categories[0]]);
  }
},[query])
  return (
   <div className={styles.multiaxis}>
   <div className={styles.head}>
        <p className={styles.head}>NEW USERS ON APPLICATION</p>
        <div className={styles.qmark}><img src={qmark}/></div>
        </div>
    <div className={styles.filter}>
    <Filterbar items={["All","Last 5 hours","Today","This Month","Last 6 months"]} data={{"categories":["All","Last 5 hours","Today","This Month","Last 6 months"],values:["All","Last 5 hours","Today","This Month","Last 6 months"]}} setData={setQuery}/>
    </div>
     <div className={styles.chart}>
      <Chart options={options} series={series} type="line" height={350} />
    </div>
   </div>
  );
};

export default MultiAxis;
