import React from 'react'
import styles from "./ProgressBar.module.scss"
export default function Bar({svgImage,title,count,colour,upperBound,currentBound,back}) {
    const percentage = (currentBound / upperBound) * 100;
  return (
    <div className={styles.bar}>
      <div className={styles.barLeft}>
        <div className={styles.image} style={{background:colour}}>
        <img src={svgImage}/>
        </div>
      </div>
      <div className={styles.barRight}>
        <div className={styles.titles}>
        <p style={{color:back}}>{title}</p>
        <p style={{color:back}}>+{count}</p>
        </div>
        <div className={styles.barProgress}>
            <div style={{ width: `${percentage}%`,height:"0.7rem",background:back, borderRadius:"100px"}}/>
        </div>
      </div>
    </div>
  )
}
