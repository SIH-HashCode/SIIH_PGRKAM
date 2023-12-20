import styles from './Table.module.scss';
import React, { useRef } from "react";
import { useState, useEffect } from 'react';

const Table = () => {
  const data = [
    { 
      no: 1,
      jobSector: 'Agriculture',
      sectorRole: 'Agriculture Engineer',
      jobsPosted: 5,
      applicants: 5,
      hired: 5,
      performance: 'good'
    },
    {
      no: 2,
      jobSector: 'BSFI',
      sectorRole: 'Accountant',
      jobsPosted: 15,
      applicants: 15,
      hired: 15,
      performance: 'poor'
    },
    {
      no: 3,
      jobSector: 'Construction',
      sectorRole: 'Architect',
      jobsPosted: 10,
      applicants: 10,
      hired: 10,
      performance: 'moderate'
    },
    { 
      no: 1,
      jobSector: 'Agriculture',
      sectorRole: 'Agriculture Engineer',
      jobsPosted: 5,
      applicants: 5,
      hired: 5,
      performance: 'good'
    },
    {
      no: 2,
      jobSector: 'BSFI',
      sectorRole: 'Accountant',
      jobsPosted: 15,
      applicants: 15,
      hired: 15,
      performance: 'poor'
    },
    {
      no: 3,
      jobSector: 'Construction',
      sectorRole: 'Architect',
      jobsPosted: 10,
      applicants: 10,
      hired: 10,
      performance: 'moderate'
    },
    { 
      no: 1,
      jobSector: 'Agriculture',
      sectorRole: 'Agriculture Engineer',
      jobsPosted: 5,
      applicants: 5,
      hired: 5,
      performance: 'good'
    },
    {
      no: 2,
      jobSector: 'BSFI',
      sectorRole: 'Accountant',
      jobsPosted: 15,
      applicants: 15,
      hired: 15,
      performance: 'poor'
    },
    {
      no: 3,
      jobSector: 'Construction',
      sectorRole: 'Architect',
      jobsPosted: 10,
      applicants: 10,
      hired: 10,
      performance: 'moderate'
    },
    { 
      no: 1,
      jobSector: 'Agriculture',
      sectorRole: 'Agriculture Engineer',
      jobsPosted: 5,
      applicants: 5,
      hired: 5,
      performance: 'good'
    },
    {
      no: 2,
      jobSector: 'BSFI',
      sectorRole: 'Accountant',
      jobsPosted: 15,
      applicants: 15,
      hired: 15,
      performance: 'poor'
    },
    {
      no: 3,
      jobSector: 'Construction',
      sectorRole: 'Architect',
      jobsPosted: 10,
      applicants: 10,
      hired: 10,
      performance: 'moderate'
    },
  ];

  return (
    <div className = {styles.head}>
    <div className={styles.table}>
      <div className={styles.rowHead}>
        <span className={styles.no}>No.</span>
        <span >Job Sector</span>
        <span>Sector Role</span>
        <span>No. of jobs posted</span>
        <span>No. of Applicants</span>
        <span>People Hired</span>
        <span>Performance</span>
      </div>
      {data.map((item, index) => (
        <div className={styles.row} key={index}>
          <span>{item.no}</span>
          <span>{item.jobSector}</span>
          <span>{item.sectorRole}</span>
          <span>{item.jobsPosted}</span>
          <span>{item.applicants}</span>
          <span>{item.hired}</span>
          <span > <div className={styles.performance} style={{background:item.performance==="good"?"rgba(1, 181, 154, 0.30)":item.performance==="moderate"?"rgba(0, 118, 244, 0.30)":"rgba(242, 78, 30, 0.30)",border:item.performance==="good"?"0.5px solid #01B59A":item.performance==="moderate"?"0.5px solid #0076F4":"0.5px solid F24E1E"}}>{item.performance}</div></span>

        </div>
      ))}
      </div>
    </div>
  );
}

export default Table;
