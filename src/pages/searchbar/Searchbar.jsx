import React, { useEffect, useState } from "react";
import styles from "./Searchbar.module.scss";

export default function Searchbar() {


const [profile,setProfile]= useState('https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg') ;

useEffect(()=>{

const user= localStorage.getItem('profile')
// const data= JSON.parse(user) ;
console.log(user) ;


},[])
  return (
    <div>
      <div className={styles.searchbarContainer}>
        <form className={styles.searchForm}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search here"
          />
        </form>
        <div className={styles.profileContainer}>
        <img src={profile}/>
        </div>
      </div>
     
      
    </div>
  );
}
