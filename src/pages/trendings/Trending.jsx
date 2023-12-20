import React from 'react'
import styles from "./Trending.module.scss"
import SimpleBar from '../dashboard/SimpleBar/SimpleBar'
export default function Trending() {
  const [query,setQuery] = useState({"categories":["All"]});
  const SampleData = {
    "All" : {"categories":["Agriculture", "IT","Chemical","Pharmasicst","IT","Chemical","Pharmasicst"],"values":[10,25,47,41,30,77,80]},
    "Last 5 hours" : {"categories":["Agriculture", "IT","Chemical","Pharmasicst","IT","Chemical","Pharmasicst"],"values":[10,25,47,41,30,77,80]},
    "Today" : {"categories":["11:00","12:00","13:00","14:00","15:00"],"values":[10,24,78,90,13]},
    "This Month" : {"categories":["Week 1","Week 2","Week 3","Week 4"],"values":[10,24,78,13]},
    "Last 6 months" : {"categories":["Month 1","Month 2","Month 3","Month 4","Month 5"],"values":[10,24,78,90,13,47]},
  }
  const [data,setData] = useState(SampleData["All"]);
  return (
    <div className={styles.trending}>
      <SimpleBar content={data} title={"TOP 10 TRENDING JOBS ON PORTAL"} dropObjects={["All","This Month","Last 6 Months","This Year"]}/>
    </div>
  )
}
