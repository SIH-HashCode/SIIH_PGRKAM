import React,{useState} from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Searchbar from "./pages/searchbar/Searchbar"
import Dashboard from './pages/dashboard/Dashboard'
import styles from "./pages/dashboard/Dashboard.module.scss"
export default function ComponentsMount() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className={styles.container}>
       <div className={styles.sidebar} style={{width: sidebarOpen?"20%":"2%"}}>
        <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen}/>
      </div>
      <div className={styles.target} style={{width: sidebarOpen?"80%":"100%"}}>
        <div>
            <Searchbar/>
        </div>
        <div><Dashboard/></div>
      </div>
    </div>
  )
}
