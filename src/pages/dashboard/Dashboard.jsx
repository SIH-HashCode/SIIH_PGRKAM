import React, { useState } from "react";
import styles from "./Dashboard.module.scss";
import TotalOrderLineChartCard from "./cards/Cards";
import Areagraph from "./areagraph/Areagraph";
import ProgressBar from "./progressbar/ProgressBar";
import MultiAxis from "./MultiAxisGraph/MultiAxis";
import StackedBarGraph from "./stackedBarGraph/StackedBarGraph";
import BubbleChart from "./bubblechart/BubbleChart";
import CardGraph from "../cardgraph/CardGraph";
import SimpleBar from "./SimpleBar/SimpleBar";
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
          <TotalOrderLineChartCard isLoading={false} mode="#7A3DD9" monthCount={2000} yearCount={100} title="Average Visit Time"/>
        </div>
        <div className={styles.graph}>
          <TotalOrderLineChartCard isLoading={false} mode="#F24E1E" monthCount={2000} yearCount={100} title="Average Visit Time" />
        </div>
        <div className={styles.graph}>
          <TotalOrderLineChartCard isLoading={false} mode="#0076F4" monthCount={2000} yearCount={100} title="Average Visit Time"/>
        </div>
        <div className={styles.graph}>
          <TotalOrderLineChartCard isLoading={false} mode="#01B59A" monthCount={2000} yearCount={100} title="Average Visit Time"/>
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
      <SimpleBar content={{"categories":["Linkedin","Youtube","Instagram","Print Media","Others"], "values":[10,122,40,20,50]}} title={"WHERE USERS SPOTTED PGRKAM ADVERTISEMENT"}/>
      <div  className={styles.component2}>
        <div className={styles.element}>
          <MultiAxis />
        </div>
        <div className={styles.element2}>
          <StackedBarGraph data={data}/>
        </div>
      </div>
      
    </div>
  );
}
