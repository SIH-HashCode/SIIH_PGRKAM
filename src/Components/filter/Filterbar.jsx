import styles from "./Filterbar.module.scss"
import React, { useState } from 'react';

const Filterbar = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectItem = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
    // You can perform any additional actions when an item is selected
  };

  return (
    <div className={styles.dropdownFilterBar}>
      <div className={styles.selectedItem} onClick={toggleDropdown}>
        {selectedItem ? selectedItem : items[0]}
      </div>
      {isOpen && (
        <ul className={styles.dropdownList}>
          {items.map((item, index) => (
            <li key={index} onClick={() => selectItem(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filterbar;
