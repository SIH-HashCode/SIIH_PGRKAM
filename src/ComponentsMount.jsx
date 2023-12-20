import React, { useState, useEffect } from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Searchbar from "./pages/searchbar/Searchbar"
import Dashboard from './pages/dashboard/Dashboard'
import styles from "./pages/dashboard/Dashboard.module.scss"
import io from 'socket.io-client';
import Dash2 from './pages/Dash/DashBoard'

const socket = io('http://localhost:5000');
export default function ComponentsMount({dash2}) {
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
      console.log("userAct", data);
      // Update the state with the received data
      setDashboardData(data);

    });
    console.log("dekho")

    // Clean up the socket connection on component unmount

  }, []); // Empty dependency array to run the effect only once on component mount

const combinedUser = { ...dashboardData.nonloginuser };

      // Add values of loginuser to combinedUser for all keys
      for (const key in dashboardData.loginuser) {
        if (dashboardData.loginuser.hasOwnProperty(key) && combinedUser.hasOwnProperty(key)) {
          combinedUser[key] += dashboardData.loginuser[key]; // Fix here
        }
      }
const totalCount = Object.values(combinedUser).reduce((acc, value) => acc + value, 0);
const totallognuser= Object.values(dashboardData.loginuser).reduce((acc, value) => acc + value, 0);
const totalnotloginuser= Object.values(dashboardData.nonloginuser).reduce((acc, value) => acc + value, 0);
console.log(totallognuser);
console.log("Total Count:", totalCount);
const bouncerate = (combinedUser.home/totalCount)*100;
console.log(bouncerate)


const obj=dash2 ;

  return (
    <div className={styles.container}>
      <div className={styles.sidebar} style={{ width: sidebarOpen ? "20%" : "2%" }}>
        <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      </div>
      <div className={styles.target} style={{ width: sidebarOpen ? "80%" : "100%" }}>
        <div>
          <Searchbar />
        </div>
        {obj?(<div><Dashboard dashboardData={dashboardData} /></div>):(<div><Dash2 /></div>)}
      </div>
    </div>
  )
}