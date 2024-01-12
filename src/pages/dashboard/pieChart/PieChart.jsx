import { style } from '@mui/system';
import React, { useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import styles from "./PieChart.module.scss"; // Assuming this is correctly configured
import { fetchUsersByCourseCount, fetchUsersByDisablility, fetchUsersByEducationCount, fetchUsersBySexCount } from '../../../api';

// Define the PieChart component
const PieChart = ({ gender, employment, disability,index }) => {
  
    // Define data for the chart
    const genders = ["Male", "Female", "Transgender"];
    const disabilities = ["Full", "Partial", "None Of Above"];
    const employments = ["Employed", "Unemployed", "Self-Employed"];
    
      const clrs= ['#F0D43E', '#0B7BFF', '#CBD8EC']



    
      const [arr,setArr]= React.useState([]) ;
    
    useEffect(()=>{
    
    async function fetchData()
    {
    
    if(gender)
    {
    const nums =await fetchUsersBySexCount() ;
    console.log("gen",nums) ;
    const x=Object.values(nums.data);
    setArr(x) ;
    }
    else if(employment)
    {
    setArr([10, 1, 1]) ;
    }
    else
    {
     const nums =await fetchUsersByDisablility() ;
     console.log("dis",nums) ;
    const x=Object.values(nums.data);
    setArr(x) ;
    }
    
    }
    
    fetchData() ;
    
    },[index])
    
    
    
    let val = []; 
    if (gender) {
        val = genders;
    } else if (disability) {
        val = disabilities;
    } else {
        val = employments;
    }

    // Define options for the chart
    const options = {
        chart: {
            type: 'donut',
            toolbar: {
                show: false
            }
        },
        labels: val,
        dataLabels: {
            enabled: false,
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        show: false,
                    },
                },
            },
        ],
        legend: {
            show: false,
            position: 'right',
            offsetY: 0,
            height: 230,
        },
        colors: ['#F0D43E', '#0B7BFF', '#CBD8EC'],
    };

    // Define series data for the chart
    const series = [...arr,0];

    // Calculate the sum of series data
    let sum = 0;
    for (let i = 0; i < series.length; i++) {
        sum = sum + series[i];
    }

    // Render the PieChart component
    return (
        <div className="chart-wrap">
            <div id="chart" style={{ position: 'relative', width: 500 }}>
                <div>
                    <ReactApexChart options={options} series={series} type="donut" width={500} />
                </div>
                <div className={styles.uprWla}>
                    {val.map((item, index) => <div className={styles.circleBahar}><div className={styles.circle} style={{background:clrs[index]}}></div><div key={index} className={styles.content}>{item}</div></div>)}
                </div>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontWeight: '500', width: 150, height: 150, borderRadius: '50%', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', fontSize: '3rem' }}>
                    <div style={{ fontSize: '1rem' }}>Total</div>
                    <div>{sum}</div>
                </div>
            </div>
        </div>
    );
};

// Export the PieChart component
export default PieChart;
