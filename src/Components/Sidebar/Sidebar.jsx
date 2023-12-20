import React, { useState } from 'react';
import styles from './Sidebar.module.scss';
import logo from '../../assets/LogoGovt.png';
import back from '../../assets/SidebarBack.svg';
import dashboard from '../../assets/Sidebardashboard.svg';
import user from '../../assets/SidebarUsers.svg';
import jobs from '../../assets/SidebarJobs.svg';
import activity from '../../assets/SidebarActivity.svg';
import page from '../../assets/SidebarPage.svg';
import feedback from '../../assets/SidebarFeedback.svg';
import down from '../../assets/SidebarDown.svg';
import up from '../../assets/SidebarUp.svg';
import jobSeeker from '../../assets/SidebarJobSeeker.svg';
import employer from '../../assets/SidebarEmployer.svg';
import local from '../../assets/SidebarLocal.svg';
import counsel from '../../assets/SidebarCounsel.svg';
import skills from '../../assets/SidebarSkills.svg';
import trending from '../../assets/SidebarTrending.svg';

const Sidebar = ({setSidebarOpen,sidebarOpen}) => {
  const [optionsState, setOptionsState] = useState({
    Users: false,
    Jobs: false,
    'User Activity': false,
    'Page Visited': false,
    Feedback: false,
  });
const [open, setOpen] = useState(true);
  const toggleOption = (optionName) => {
    setOptionsState((prevState) => ({
      ...prevState,
      [optionName]: !prevState[optionName],
    }));
  };

  const optionsData = [
    {
      heading: 'Website',
      options: [
        {
          img: user,
          name: 'Users',
          subOptions: [
              {
                icon : jobSeeker,
                label : 'Job Seeker'
              },
              {
                icon : employer,
                label : 'Indian Employer'
              },
              {
                icon : local,
                label : 'Local Service Provider'
              },
              {
                icon : counsel,
                label : 'Counsel Provider'
              },
              ],
        },
        {
          img: jobs,
          name: 'Jobs',
          // subOptions: [
          //   { label : 'Amritsar'},
          //   { label : 'Barnala'},
          //   { label : 'Bathinda'},
          //   { label : 'Faridkot'},
          //   { label : 'Fatehgarh Sahib	'},
          //   { label : 'Firozpur'},
          //   { label : 'Fazilka'},
          //   { label : 'Gurdaspur'},
          //   { label : 'Hoshiarpur'},
          //   { label : 'Gurdaspur'},
          //   { label : 'Jalandhar'},
          //   { label : 'Kapurthala'},
          //   { label : 'Ludhiana'},
          //   { label : 'Mansa	'},
          //   { label : 'Moga'},
          //   { label : 'Sri Muktsar Sahib	'},
          //   { label : 'Pathankot'},
          //   { label : 'Patiala'},
          //   { label : 'Rupnagar'},
          //   { label : 'Sahibzada Ajit Singh Nagar'},
          //   { label : 'Sangrur'},
          //   { label : 'Shahid Bhagat Singh Nagar'},
          //   { label : 'Taran Taran'},
          // ],
        },
      ],
    },
    {
      heading: 'Activity',
      options: [
        {
          img: activity,
          name: 'User Activity',
        },
        {
          img: page,
          name: 'Page Visited',
        },
        {
          img: trending,
          name: 'Trending',
        },
      ],
    },
  ];

  return (
    <>
    {!open && <img src={back} className={styles.back} alt="back" onClick={()=>{setOpen(!open) 
      setSidebarOpen(!sidebarOpen)}} style={{rotate:"180deg"}}/>}
    <div className={styles.sidebar} style={{display: open?"block":"none"}}>
      <div className={styles.head}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
          <div> PGRKAM </div>
        </div>
        <img src={back} className={styles.back} alt="back" onClick={()=>{setOpen(!open)
        setSidebarOpen(!sidebarOpen)
        }}/>
      </div>
      <div className={styles.dash}>
        <img src={dashboard} alt='/' />
        <span>Dashboard</span>
      </div>
      <div className={styles.line}></div>

      <div className={styles.list}>
        {optionsData.map((section, index) => (
          <div key={index} className={styles.section}>
            <div className={styles.heading}>{section.heading}</div>
            <ul className={styles.options}>
              {section.options.map((option, optionIndex) => (
                <li key={optionIndex} className={styles.item}>
                  <div styles={{ display: "flex" }}>
                    <div className={styles.card}>
                      <img src={option.img} alt={option.name} />
                      <div className={styles.name} onClick={() => toggleOption(option.name)}>
                        {option.name}
                        {option.subOptions && (
                          <img className={styles.arrow} src={optionsState[option.name] ? up : down} alt="arrow" />
                        )}
                      </div>
                    </div>
                    {option.subOptions && optionsState[option.name] && (
                      <div className={styles.dropdown}>
                      {option.subOptions.map((subOption, subOptionIndex) => (
                        <div key={subOptionIndex} className={styles.subOption}>
                          {subOption.icon && <img className={styles.icon} src={subOption.icon} alt={subOption.label} />}
                        <p>{subOption.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Sidebar;
