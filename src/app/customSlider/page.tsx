import React, { useState, useEffect } from "react";
import styles from './page.module.css'

interface CustomSliderProps{
  items: { path: string, caption: string }[]
}

const CustomSlider = ({ items }: CustomSliderProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className={styles["slider-container"]}>
      <div className={styles["slider"]}>
        <div
          key={index}
          className={styles["slider-item"]}
          style={{ backgroundImage: `url(${items[index].path})` }}
        />
      </div>
    </div>
  );
}

export default CustomSlider;
