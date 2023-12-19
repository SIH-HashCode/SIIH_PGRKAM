import React, { useState } from "react";
import styles from "./Dashboard.module.scss";
import TotalOrderLineChartCard from "./cards/Cards";
import Areagraph from "./areagraph/Areagraph";
import ProgressBar from "./progressbar/ProgressBar";
import MultiAxis from "./MultiAxisGraph/MultiAxis";
import StackedBarGraph from "./stackedBarGraph/StackedBarGraph";
import BubbleChart from "./bubblechart/BubbleChart";
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
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ width: "70%" }}>
          <Areagraph count={200}/>
        </div>
        <div style={{ width: "30%" }}>
          <ProgressBar />
        </div>
      </div>
      <BubbleChart/>
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ width: "35%" }}>
          <MultiAxis />
        </div>
        <div style={{ width: "65%" }}>
          <StackedBarGraph data={data}/>
        </div>
      </div>
      
    </div>
  );
}
