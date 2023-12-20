import React, {useState} from 'react'
import styles from './Popup.module.scss'
import popup from '../../assets/popupSVG.svg'
import close from '../../assets/close.svg'
const Popup = ({setPopupVisible}) => {
  const closePopup = () => {
    setPopupVisible(false);
  };
  return (
    <div className={styles.pop}>
      <div className={styles.left} >
        <img src={popup} alt='/'/>
      </div>
      <div className={styles.right}>
        <div onClick={closePopup} className={styles.close}>
        <img src={close} alt='/'  />
        </div>
        <div className = {styles.head1}>Where did you hear about </div>
        <div className = {styles.head2}>PGRKAM? </div>
        <select className={styles.dropdown} >
          <option value="option1" >Newspaper</option>
          <option value="option2">Youtube</option>
          <option value="option3">LinkedIn</option>
          <option value="option3">Programs</option>
          <option value="option3">Others</option>
        </select>
      </div>
     
    </div>
  )
}

export default Popup
