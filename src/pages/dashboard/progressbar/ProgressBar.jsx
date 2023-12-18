import React from 'react'
import styles from "./ProgressBar.module.scss"
import Bar from './Bar'
export default function ProgressBar() {
    const upperBound = 100;
    const data = [
        {
            "upperBound" : upperBound,
            "count": 23,
            "svgImage" : svg1,
            "colour": "red",
            "currentBound":27,
            "title":"Job Application"
        },
        {
            "upperBound" : upperBound,
            "count": 23,
            "svgImage" : svg1,
            "colour": "red",
            "currentBound":27,
            "title" : "Job Application"
        }
        
    ]
  return (
    <div className={styles.progreebar}>
      {
        data.map((element)=>{
            <Bar title={element.title} upperBound={element.upperBound} colour={element.colour} count={element.count} svgImage={element.svgImage} currentBound={element.currentBound}/>
        })
      }
    </div>
  )
}
