import styles from "./Filterbar.module.scss"
import React, { useState } from 'react';
import dropdown from "../../assets/dropdown.svg"
const Filterbar = ({ items ,data,setData}) => {
  const [isOpen, setIsOpen] = useState(false);
  const[title,setTitle]=useState("Select")
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  function filterDataByCategory(categoryName) {
    const index = data["categories"].indexOf(categoryName);
  
    if (index !== -1) {
      return {
        "categories": [data.categories[index]],
        "values": [data.values[index]]
      };
    } else {
      return data; 
    }
  }
  
  return (
    <div className={styles.filter}>
     <div className={styles.arrow} onClick={toggleDropdown}>
     {title}
      <img src={dropdown}/>
     </div>
     {isOpen && <div className={styles.filterOption}>
     {
      items && items.map((item,index)=>{
        return (
         <div className={styles.item} key={index} onClick={()=>{setTitle(item)
          toggleDropdown( )
          const filteredData = filterDataByCategory(item);
          setData(filteredData)}}>
           <p >{item}</p>
           </div>
        )
      })
    }
    </div>
     }
     
    </div>
  );
};

export default Filterbar;
