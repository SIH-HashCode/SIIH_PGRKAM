import React from 'react'
import styles from "./ProgressBar.module.scss"
export default function Bar({svgImage,title,count,colour,upperBound,currentBound}) {
    const percentage = (currentBound / upperBound) * 100;
  return (
    <div className={styles.bar}>
      <div className={styles.barLeft}>
        <svg style={{background : colour,color:colour}}>{svgImage}</svg>
      </div>
      <div className={styles.barRight}>
        <div className={styles.titles}>
        <p>{title}</p>
        <p>+{count}</p>
        </div>
        <div className={styles.barProgress}>
            <div ></div>
            <div style={{ width: `${percentage}%` }}></div>
        </div>
      </div>
    </div>
  )
}
