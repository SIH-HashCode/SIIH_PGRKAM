import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.scss";
import TotalOrderLineChartCard from "./cards/Cards";
import Areagraph from "./areagraph/Areagraph";
import ProgressBar from "./progressbar/ProgressBar";
import MultiAxis from "./MultiAxisGraph/MultiAxis";
import StackedBarGraph from "./stackedBarGraph/StackedBarGraph";
import RadarGraph from "./RadarGraph/RadarGraph";
import SimpleBar from "./SimpleBar/SimpleBar";
import Maps from "../Maps";
import BubbleChart from "./bubblechart/BubbleChart";
export default function Dashboard({dashboardData}) {


const combinedUser = { ...dashboardData.nonloginuser };

      // Add values of loginuser to combinedUser for all keys
      for (const key in dashboardData.loginuser) {
        if (dashboardData.loginuser.hasOwnProperty(key) && combinedUser.hasOwnProperty(key)) {
          combinedUser[key] += dashboardData.loginuser[key]; // Fix here
        }
      }
const totalCount = Object.values(combinedUser).reduce((acc, value) => acc + value, 0);
const totallognuser= Object.values(dashboardData.loginuser).reduce((acc, value) => acc + value, 0);
const totalnotloginuser= Object.values(dashboardData.nonloginuser).reduce((acc, value) => acc + value, 0);
console.log(totallognuser);
console.log("Total Count:", totalCount);
const bouncerate = (combinedUser.home/totalCount)*100;
console.log(bouncerate)


  const data = [
    ["Amritsar", ["xhhh", "xhh2", "xhh3"]],
    ["Tehsil 1", ["xhhh", "xhh2", "xhh3"]],
    // Add more data as needed
  ];
  
  return (
    <div className={styles.Dashboard}>
        <p className={styles.ptitle}>Today</p>
      <div className={styles.cards}>
        <div className={styles.graph}>
          <TotalOrderLineChartCard isLoading={false} mode="#7A3DD9" monthCount={totalCount} yearCount={totalCount} title="Total Active users"/>
        </div>
        <div className={styles.graph}>
          <TotalOrderLineChartCard isLoading={false} mode="#F24E1E" monthCount={totallognuser} yearCount={totallognuser} title="Total Login Users" />
        </div>
        <div className={styles.graph}>
          <TotalOrderLineChartCard isLoading={false} mode="#0076F4" monthCount={totalnotloginuser} yearCount={totalnotloginuser} title="Total Guest user"/>
        </div>
        <div className={styles.graph}>
          <TotalOrderLineChartCard isLoading={false} mode="#01B59A" monthCount={bouncerate} yearCount={bouncerate?bouncerate:0} title="Bounce Rate"/>
        </div>
      </div>
      <div className={styles.component1}>
        <div className={styles.element}>
          <Areagraph count={200}/>
        </div>
        <div className={styles.element2}>
          <ProgressBar />
        </div>
      </div>
      <SimpleBar content={{"categories":["Linkedin","Youtube","Instagram","Print Media","Others"], "values":[10,122,40,20,50]}} title={"WHERE USERS SPOTTED PGRKAM ADVERTISEMENT"} dropObjects={["All",  "Linkedin","Youtube","Instagram","Newspaper","Other"]}/>
      <div  className={styles.component2}>
        <div className={styles.element}>
          <MultiAxis />
        </div>
        <div className={styles.element2}>
          <StackedBarGraph data={data}/>
        </div>
      </div>
       <div style={{ display: "flex", width: "100%", alignItems:'center', justifyContent:'center', marginTop:30 }}>
       <div style={{ width: "80%",height:'100%', minHeight:800, padding:10, borderRadius:10, background:"#fff"}}>
          <Maps  />
        </div>
       </div>
    </div>
  );
}
