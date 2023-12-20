import React, { useEffect, useState } from "react";
import styles from "./Searchbar.module.scss";
import logout from "../../assets/logout.svg";
import Popup from "../../Components/PopUp/Popup"; 

export default function Searchbar() {


const [profile,setProfile]= useState('https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg') ;

useEffect(()=>{

const user= localStorage.getItem('profile')
// const data= JSON.parse(user) ;
console.log(user) ;


},[])
  const [isPopupVisible, setPopupVisible] = useState(false);

  const logOut = () => {
    console.log("Log out");
  };

     const togglePopup = () => {
        setPopupVisible(true);
};

  return (
    <div className={styles.pop}>
      <div className={styles.searchbarContainer}>
        <form className={styles.searchForm}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search here"
          />
        </form>
        <div className={styles.profileContainer}>
          <img
            className={styles.profile}
            src="https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg"
            onClick={togglePopup} 
          />
          <img src={logout} alt="/" onClick={logOut} />
        </div>
      </div>

      {isPopupVisible && <Popup isPopupVisible={isPopupVisible} setPopupVisible={setPopupVisible} />}
    </div>
  );
}
