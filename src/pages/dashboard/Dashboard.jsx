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
import Table from "../../Components/Table/Table";
export default function Dashboard() {
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
          <TotalOrderLineChartCard isLoading={false} mode="#7A3DD9" monthCount={100} yearCount={120} title="Total Active users"/>
        </div>
        <div className={styles.graph}>
          <TotalOrderLineChartCard isLoading={false} mode="#F24E1E" monthCount={200} yearCount={10} title="Total Login Users" />
        </div>
        <div className={styles.graph}>
          <TotalOrderLineChartCard isLoading={false} mode="#0076F4" monthCount={100} yearCount={100} title="Total Guest user"/>
        </div>
        <div className={styles.graph}>
        <TotalOrderLineChartCard isLoading={false} mode="#01B59A" monthCount="200%" yearCount="200%" title="Bounce Rate" />
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
       <Table/>
    </div>
  );
}
