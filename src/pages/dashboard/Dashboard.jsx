import React from "react";
import styles from "./Dashboard.module.scss";
import TotalOrderLineChartCard from "./cards/Cards";
import Areagraph from "./areagraph/Areagraph";
import ProgressBar from "./progressbar/ProgressBar";
import MultiAxis from "./MultiAxisGraph/MultiAxis";
export default function Dashboard() {
  return (
    <div className={styles.Dashboard}>
      <div className={styles.sidebar}></div>
      <div className={styles.target}>
        <div className={styles.graph}>
          <TotalOrderLineChartCard
            isLoading={false}
            mode="#7A3DD9
"
          />
        </div>
        <div className={styles.graph}>
          <TotalOrderLineChartCard isLoading={false} mode="#F24E1E" />
        </div>
        <div className={styles.graph}>
          <TotalOrderLineChartCard isLoading={false} mode="#0076F4" />
        </div>
        <div className={styles.graph}>
          <TotalOrderLineChartCard
            isLoading={false}
            mode="#01B59A
"
          />
        </div>
      </div>
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ width: "70%" }}>
          <Areagraph />
        </div>
        <div style={{ width: "30%" }}>
          <ProgressBar />
        </div>
      </div>
      <MultiAxis/>
    </div>
  );
}
