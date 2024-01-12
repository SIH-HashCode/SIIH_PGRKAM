import React, { useState } from 'react'
import styles from "./CardGraph.module.scss"
import Chart from 'react-apexcharts';
import ChartDataMonth from '../../pages/dashboard/cards/month-wise-data';
import ChartDataYear from '../../pages/dashboard/cards/year-wise-data';
export default function CardGraph() {
    const [mode,setMode] = useState(true);
  return (
    <div className={styles.cardGraph}>
      <div className={styles.top}>
        <button>Month</button>
        <button style={{background:"#0076F4"}}>Year</button>
      </div>
      <div className={styles.down}>
    <div className={styles.left}>
        <p className={styles.count}>200</p>
        <p className={styles.title}>Average Visit Time</p>
    </div>
    <div className={styles.right}>
    {mode ? <Chart {...ChartDataMonth} /> : <Chart {...ChartDataYear} />}
    </div>
      </div>
    </div>
  )
}
