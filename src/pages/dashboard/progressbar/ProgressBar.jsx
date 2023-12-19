import React from 'react'
import styles from "./ProgressBar.module.scss"
import Bar from './Bar'
import {job,counselling,jobapply,course} from "../../../assets/index"
import qmark from "../../../assets/qmark.svg"
export default function ProgressBar() {
    const upperBound = 100;
    const data = [
        {
            "upperBound" : upperBound,
            "count": 23,
            "svgImage" : job,
            "colour": "rgba(242, 78, 30, 0.2)",
            "back": "rgba(242, 78, 30, 1)",
            "currentBound":85,
            "title":"Job Application"
        },
        {
            "upperBound" : upperBound,
            "count": 23,
            "svgImage" : counselling,
            "colour": "rgba(0, 118, 244, 0.2)",
            "back": "rgba(0, 118, 244, 1)",
            "currentBound":7,
            "title" : "Job Application"
        },
        {
            "upperBound" : upperBound,
            "count": 30,
            "svgImage" : course,
            "colour": "rgba(1, 181, 154, 0.2)",
            "back": "rgba(1, 181, 154, 1)",
            "currentBound":55,
            "title" : "Job Application"
        },
        {
            "upperBound" : upperBound,
            "count": 23,
            "svgImage" : jobapply,
            "colour": "rgba(122, 61, 217, 0.2)",
            "back": "rgba(122, 61, 217, 1)",
            "currentBound":27,
            "title" : "Job Application"
        },
        
        
    ]
  return (
    <div className={styles.progreebar}>
        <div className={styles.head}>
        <p className={styles.head}>MOST INTERACTED FEATURES</p>
        <div className={styles.qmark}><img src={qmark}/></div>
        </div>
      {
        data.map((element)=>{
           return(
            <Bar title={element.title} upperBound={element.upperBound} colour={element.colour} count={element.count} svgImage={element.svgImage} currentBound={element.currentBound} back={element.back}/>
           );
        })
      }
    </div>
  )
}
