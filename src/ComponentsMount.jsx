import React, { useState, useEffect } from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Searchbar from "./pages/searchbar/Searchbar"
import Dashboard from './pages/dashboard/Dashboard'
import styles from "./pages/dashboard/Dashboard.module.scss"
import io from 'socket.io-client';
import Dash2 from './pages/Dash/DashBoard'

const socket = io('http://localhost:5000');
export default function ComponentsMount() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dashboardData, setDashboardData] = useState({
    nonloginuser: {},
    loginuser: {},
    deviceCounts: {},
  });

  useEffect(() => {
    // Establish a WebSocket connection to the server

    // Listen for the 'dashboard-update' event
    socket.on('dashboard-update', (data) => {
      console.log("h", data);
      // Update the state with the received data
      setDashboardData(data);

    });
    console.log("dekho")

    // Clean up the socket connection on component unmount

  }, []); // Empty dependency array to run the effect only once on component mount


const obj=true ;

  return (
    <div className={styles.container}>
      <div className={styles.sidebar} style={{ width: sidebarOpen ? "20%" : "2%" }}>
        <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      </div>
      <div className={styles.target} style={{ width: sidebarOpen ? "80%" : "100%" }}>
        <div>
          <Searchbar />
        </div>
        {obj?(<div><Dashboard /></div>):(<div><Dash2 /></div>)}
      </div>
    </div>
  )
}