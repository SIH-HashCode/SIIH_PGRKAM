import React, { useState } from "react";
import styles from "./DashBoard.module.scss";
import TotalOrderLineChartCard from "../dashboard/cards/Cards";
import Areagraph from "../dashboard/areagraph/Areagraph";
import ProgressBar from "../dashboard/progressbar/ProgressBar";
import MultiAxis from "../dashboard/MultiAxisGraph/MultiAxis";
import StackedBarGraph from "../dashboard/stackedBarGraph/StackedBarGraph";
import SimpleBar from "../dashboard/SimpleBar/SimpleBar";
import RadarGraph from "../dashboard/RadarGraph/RadarGraph";
import Maps from "../Maps";
import PieChart from "../dashboard/pieChart/PieChart";
import LineChartAge from "../dashboard/lineGraphAge/lineChartGraph";
import ColumnGraph from "../dashboard/columnGraph/columnGraph";

const arr=["AGE",
"GENDER",
"DISABILITY",
"EMPLOYMENT STATUS",
"EDUCATION LEVEL"]


const func = (index) => {
  switch (index) {
    case 0:
      return <LineChartAge />;
    case 4:
      return <ColumnGraph />;
    case 1:
      return <PieChart gender="male" index={index}  />; 
    case 3:
      return <PieChart employment="employed" index={index} />; 
    
    case 2:
        return <PieChart disability={true} index={index} />; 
  }
};
export default function Dash2() {

const [activeBtn,setActiveBtn]= useState(0) ;

  return (
    <div className={styles.Dashboard}>
      <div className={styles.cards}>
        { arr.map((item,index)=><span key={index} className={index===activeBtn? styles.active :"" } onClick={()=>setActiveBtn(index)}>{item}</span>)}
      </div>
      <div style={{ display: "flex", width: "100%",alignItems:'center', justifyContent:"center"}} >
        <div style={{  width: activeBtn===0 || activeBtn===4 ?"50%":"100%", marginTop:25 }} className={styles.graphs}>
          {
          func(activeBtn)
          }
        </div>
      </div>
  
    </div>
  );
}
