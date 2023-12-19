import React from "react";
import styles from "./Dashboard.module.scss";
import TotalOrderLineChartCard from "./cards/Cards";
import Areagraph from "./areagraph/Areagraph";
import ProgressBar from "./progressbar/ProgressBar";
import MultiAxis from "./MultiAxisGraph/MultiAxis";
import StackedBarGraph from "./stackedBarGraph/StackedBarGraph";
import RadarGraph from "./RadarGraph/RadarGraph";
import SimpleBar from "./SimpleBar/SimpleBar";
import Sidebar from "../../Components/Sidebar/Sidebar";
export default function Dashboard() {
  return (
    <div className={styles.Dashboard}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.target}>
       <div className={styles.cards}>
       <div className={styles.graph}>
          <TotalOrderLineChartCard
            isLoading={false} mode="purple"
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
            mode="#01B59A"
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
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ width: "35%" }}>
            <MultiAxis />
          </div>
          <div style={{ width: "65%" }}>
            <StackedBarGraph />
          </div>
        </div>
        <div style={{ display: "flex", width: "100%", height: "fit-content" }}>
          <div style={{ width: "65%" }}>
            <SimpleBar />
          </div>
          <div style={{ width: "35%" }}>
            <RadarGraph />
          </div>
        </div>

      </div>
    </div>
  );
}
