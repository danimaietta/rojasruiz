import React, { useState, useEffect } from "react";
import styles from './page.module.css'

function CustomSlider(items: {path: string, caption: string}[]) {

  return (
    <div className={styles["slider-container"]}>
      
      {/*
       <button
        className={styles["slider__btn-next"]}        
        onClick={(e) => {
          e.preventDefault();
          slideNext();
        }}
      >
        {">"}
      </button>
      <button
        className={styles["slider__btn-prev"]}        
        onClick={(e) => {
          e.preventDefault();
          slidePrev();
        }}
      >
        {"<"}
      </button>
      */}
    </div>
  );
}

export default CustomSlider;
