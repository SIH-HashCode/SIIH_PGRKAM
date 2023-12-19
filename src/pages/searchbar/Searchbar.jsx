import React from "react";
import styles from "./Searchbar.module.scss";

export default function Searchbar() {
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
        <img src="https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg"/>
        </div>
      </div>
     
      
    </div>
  );
}
